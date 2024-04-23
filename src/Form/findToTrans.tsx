


import { useState, useEffect } from 'react';
import {  getUserByUsername} from "../api/account.api";
import { findUserByNum, } from "../api/account.api";
import "./findToTrans.css";
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

type FormValue = {
    username: string;
};

const FindToTrans = () => {
    const navigate = useNavigate();
    
    const [sender, setSender] = useState({
        card_num: 0,
        username: "",
        displayName: "",
        fullName: "",
        totalMoney: 0
    });
    const [, setReceiver] = useState({
        card_num: 0,
        username: "",
        displayName: "",
        full_name: "",
    });
    // const [userNotFound] = useState(false);
    const [userNotFound,] = useState(false);

    const { handleSubmit, register } = useForm<FormValue>();

    const onSubmit = async (data: FormValue) => {
        try {
            const userData = await findUserByNum(data.username);

            // if (userData) {
                
                setReceiver(userData);
                localStorage.setItem('receiverNum', data.username); 
                    navigate('/web/transaction_2', { state: { successMessage: 'Đăng nhập thành công' } });
             
        }
         catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

        useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUserByUsername();
                setSender(response); // Set the user data in state
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchData();

        return () => {
        };
    }, []);
    const location = useLocation();
    const successMessage = location.state?.successMessage;
    useEffect(() => {
        if (successMessage) {
        toast.error(successMessage);
        }
    }, [successMessage]);

    return (
        <div className='transBody'>
      <ToastContainer className='toast-success' theme="dark"/>
                  {/* <ToastContainer className='toast-success' theme='black' /> */}
            <div className='top_landing'>
                    <nav className="top-navbar">
                        <div className="navbar-container">
                        <ul className="menu-items">
                        <Link className="top_link" to="">Về SFS</Link>
                            <Link className="top_link" to="">Tin Tức</Link>
                            <Link className="top_link" to="/web/passLogin">Đăng Xuất</Link>
                        </ul>
                          <Link to="/web/landing" className="top_logo"></Link>
                        
                        </div>
                    </nav>
             </div>
            <div className='sender'>
                <div className='infoWrapper_left'>
                    <div className='main-container'>
                        <div className='row'>
                            <div className='col'>
                                <span> Mã Thẻ :</span>
                                <p>{sender.card_num}</p>
                            </div>

                            <div className='col'>
                                <span> Tên Tài Khoản :</span>
                                <p>{sender.username}</p>
                            </div>
                            <div className='col'>
                                <span> Họ và Tên :</span>
                                <p>{sender.fullName}</p>
                            </div>
                            <div className='col'>
                                <span> Tổng Tiền Hiện Có :</span>
                                <p>{sender.totalMoney}</p>
                            </div>
                        </div>
                        <div className='register-link2'>
                        <p><Link to="/web/landing" >Trở Lại</Link></p>
                    </div>
                    </div>
                </div>
            </div>

            <div className='receiver'>
                <div className='infoWrapper'>
                    <div className='main-container'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='row'>
                                <span> Mã Thẻ Người Nhận :</span>
                                <div className='input-box'>
                                    <input className='input_name'type='text' placeholder='Mã thẻ' {...register('username', { required: 'Vui lòng nhập tên mã thẻ!' })} />
                                </div>
                            </div>
                            {userNotFound && <p style={{ color: 'red' }}>Người dùng không tồn tại</p>} 
                                <button className="findToTrans_btn" type='submit'>Xác Nhận</button>                                
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindToTrans;
