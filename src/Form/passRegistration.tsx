

// import React from 'react';
import { useForm } from 'react-hook-form';
// import { FaUser, FaLock } from 'react-icons/fa';
import { createUserp } from '../api/account.api';
import './passRegistration.css';
import { Link,  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import tech4 from '../Asset/tech4.mp4'

type FormValues = {
    username: string;
    displayName: string;
    fullName: string;
    password: string;
};

const PassRegis = () => {
    const navigate = useNavigate();
    document.title = 'SFS Demo | Pass Registration';

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const onSubmit = async (data: FormValues) => {
        try {
            const response = await createUserp(data);
            if (response && response.username) { 
                // alert(`Tài khoản ${response.username} đăng ký thành công`);
                localStorage.setItem('username', data.username);
                localStorage.setItem('displayName', data.displayName);
                navigate('/web/landing', { state: { successMessage: 'Đăng ký thành công' } });
            } 
            else {
                toast.error('Đã xảy ra lỗi, vui lòng thử lại sau.')
                // alert('Đăng ký thất bại, vui lòng thử lại.');
            }
        } catch (error) {
            console.error(error);
            toast.error('Đã xảy ra lỗi, vui lòng thử lại sau.')
            // alert('Đã xảy ra lỗi, vui lòng thử lại sau.');
        }
    };

    return (
        <div className="pRegis_body">
            <ToastContainer className='toast-success' theme="dark"/>
             {/* <video src={tech4} autoPlay muted loop className="video-earth"/> */}
            <div className="wrapper_pRegis">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Đăng Ký Tài Khoản </h1>
                    <div className="input_box_regis">
                        <input className='input_regis'
                            type="text"
                            placeholder="Tên Tài Khoản"
                            {...register('username', { required: 'Vui lòng nhập tên tài khoản' })}
                        />
                        {/* <FaUser className="icon" /> */}
                    </div>
                    {errors.username && <p className="error-msg">{errors.username.message}</p>}
                    <div className="input_box_regis">
                        <input className='input_regis'
                            type="text"
                            placeholder="Tên Hiển Thị"
                            {...register('displayName', { required: 'Vui lòng nhập tên hiển thị' })}
                        />
                        {/* <FaUser className="icon" /> */}
                    </div>
                    <div className="input_box_regis">
                        <input className='input_regis'
                            type="text"
                            placeholder="Họ Tên"
                            {...register('fullName', { required: 'Vui lòng nhập họ và tên' })}
                        />
                        {/* <FaUser className="icon" /> */}
                    </div>
                    <div className="input_box_regis">
                        <input className='input_regis'
                            type="password"
                            placeholder="Mật Khẩu"
                            {...register('password', { required: 'Vui lòng nhập mật khẩu' })}
                        />
                        {/* <FaLock className="icon" /> */}
                    </div>
                    {errors.password && <p className="error-msg">{errors.password.message}</p>}
                    <button className='submit_login' type="submit">Đăng Ký</button>
                    <div className="register_link">
                        {/* <p className='noPass_link'> */}
                        <p >
                        <Link to="/web/passLogin" >Đã có tài khoản?</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PassRegis;
