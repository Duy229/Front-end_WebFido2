


import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./authenticator.css";
import { getAuthenticator, delAuthenticator, updateAuthenticator } from "../api/account.api";
import { ToastContainer, toast } from 'react-toastify';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';

interface Authenticator {
    id: string;
    name: string;
    credentialId: string;
    createdDate: string;
    lastAccess: string;
    counter: number;
}

type updateValue = {
    username: string;
};

const Authenticator = () => {
    const [popupVisible, setPopupVisible] = useState<boolean>(false);
    const [inputKey, setInputKey] = useState<number>(0); // Thêm state mới để làm mới trường nhập liệu
    const { handleSubmit, register, formState: { errors } } = useForm<updateValue>();
    const [error, ] = React.useState<string>('');

    const togglePopup = () => {
        setPopupVisible(!popupVisible);
        setInputKey(prevKey => prevKey + 1); // Cập nhật giá trị key để làm mới trường nhập liệu
    };

    const handleUpdateAuthenticator = async (id: string) => {
        try {
            togglePopup(); 
            localStorage.removeItem('authnId');
            localStorage.setItem('authnId', id);
        } catch (error) {
            console.error(error);
        }
    };

    const onSubmit = async (data: updateValue) => {
        try {
            const response = await updateAuthenticator(data.username);
            if (response) {
                const updatedAuthenticators = authenticators.map(authenticator => {
                    if (authenticator.id === localStorage.getItem('authnId')) {
                        return { ...authenticator, name: data.username };
                    } else {
                        return authenticator;
                    }
                });
                setAuthenticators(updatedAuthenticators);
                togglePopup();
                toast.success('Cập nhật tên thiết bị thành công');
            }
        } catch (error) {
            toast.error('Cập nhật thất bại, vui lòng thực hiện lại sau.');
            console.error(error);
        }
    };
    
    const location = useLocation();
    const successMessage = location.state?.successMessage;
    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage);
        }
    }, [successMessage]);

    const [authenticators, setAuthenticators] = useState<Authenticator[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAuthenticator();
                setAuthenticators(response);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchData();

        return () => {
            // Cleanup function if needed
        };
    }, []);

    const formatDate = (dateString: string | null) => {
        if (dateString) {
            const date = new Date(dateString);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        } else {
            return ''; // Trả về chuỗi rỗng nếu dateString là null
        }
    };

    const handleDeleteAuthenticator = async (id: string) => {
        try {
            await delAuthenticator(id);
            setAuthenticators(prevAuthenticators =>
                prevAuthenticators.filter(authenticator => authenticator.id !== id)
            );
            toast.success("Xóa thiết bị thành công!");
        } catch (error) {
            toast.error("Xóa thiết bị thất bại!");
            console.error("Error deleting authenticator:", error);
        }
    };

    return (
        <div className='authnBody'>
            <ToastContainer className='toast-success' theme="dark"/>
            <div className='top_landing'>
                <nav className="top-navbar">
                    <div className="navbar-container">
                        <ul className="menu-items">
                            <Link className="top_link" to="">Về SFS</Link>
                            <Link className="top_link" to="">Tin Tức</Link>
                            <Link to="/web/passLogin" className="top_link">Đăng Xuất</Link>
                        </ul>
                        <Link to="/web/landing" className="top_logo"></Link>
                    </div>
                </nav>
            </div>
            <div className='authn_container'>
                <div className="authn_list">
                    <h2> Danh Sách Thiết Bị Xác Thực</h2>
                    <table className="content-table">
                        <thead>
                            <tr className="authn_col">
                                <th>Tên Thiết Bị</th>
                                <th>Mã Thiết Bị</th>
                                <th>Ngày Tạo</th>
                                <th>Ngày Cuối Sử Dụng</th>
                                <th>Số Lần Sử Dụng</th>
                                <th>Quản Lý</th>
                            </tr>
                        </thead>
                        <tbody>
                            {authenticators.map(authenticator => (
                                <tr key={authenticator.id}>
                                    <td>{authenticator.name}</td>
                                    <td>{authenticator.credentialId}</td>
                                    <td>{formatDate(authenticator.createdDate)}</td>
                                    <td>{formatDate(authenticator.lastAccess)}</td>
                                    <td>{authenticator.counter}</td>
                                    <td className="button-cell">
                                        <div className="button-container">
                                            <button onClick={() => handleUpdateAuthenticator(authenticator.id)} className='putBtn'>Sửa</button>
                                            <button onClick={() => handleDeleteAuthenticator(authenticator.id)} className='delBtn'>Xóa</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {popupVisible && (
                <div className="modal-wrapper2">
                    <div className="modal-wrapper">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1>Đổi tên thiết bị xác thực</h1>
                            <div className="input_box-modal">
                                <input
                                    key={inputKey} // Sử dụng key để làm mới trường nhập liệu
                                    className='input_login'
                                    type="text"
                                    placeholder="Tên Thiết Bị"
                                    {...register('username', { required: 'Vui lòng nhập tên mới cho thiết bị' })}
                                />
                            </div>
                            {errors.username && <div className="error-message">{errors.username.message}</div>}
                            <button className='submit_login' type="submit">Cập nhật</button>
                            {error && <div className="error-message">{error}</div>}
                            <div className="noPass">
                                <Button className="cancelBtn" onClick={togglePopup}>Trở Lại</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}

export default Authenticator;
