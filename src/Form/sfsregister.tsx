

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { FaUser, FaLock } from 'react-icons/fa';
import { create, parseCreationOptionsFromJSON } from "../@github/webauthn-json/browser-ponyfill";
import { attestationAccount, createAccount } from '../api/account.api';
import './sfsregister.css'
import { Link , useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import tech4 from '../Asset/tech4.mp4'

type FormValue = {
    username: string,
    displayName: string 
}

const SfsRegis = () => {
    const navigate = useNavigate();
    document.title = "SFS Demo | No Password Registration ";    
    
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValue>();
    // const [error, setError] = useState<string>('');
    const [error, ] = useState<string>('');
    useEffect(() => {
                const storedUsername = localStorage.getItem('username');
                if (storedUsername) {
                    setValue('username', storedUsername); // Gán giá trị vào trường username
                    setValue('displayName', storedUsername); // Gán giá trị vào trường username
                }
            }, [setValue]);

    const onSubmit = async (values: FormValue) => {
        try {
            const resCreateAccount = await createAccount(values);
            if(`${localStorage.getItem('username')}` == values.username)
                {
                    if (resCreateAccount?.status === "ok") {
                        const options = parseCreationOptionsFromJSON({
                            "publicKey" : resCreateAccount
                        });
                        const response = await create(options);
                        const firstUserId =await attestationAccount(response);
                        // firstUserId.userId= 
                        localStorage.setItem('userId', firstUserId.userId);
                        toast.success('Kích hoạt không mật khẩu thành công'); // Show success toast        
                        setTimeout(() => {
                            navigate('/web/landing', { state: { successMessage: 'Đăng ký thành công' } });
                        }); 
                        // window.alert("Kích hoạt không mật khẩu thành công");
                        // navigate('/landing');
                        
                    } else {
                        // setError('Kích hoạt không mật khẩu thất bại, vui lòng thử lại.');
                        toast.error('Kích hoạt không mật khẩu thất bại, vui lòng thử lại')
                    }
                }
                else
                {
                toast.error('Tên tài khoản không hợp lệ!')
                // window.alert("Tên tài khoản không hợp lệ");
            }
        } catch (error) {
            toast.error('Đã xảy ra lỗi, vui lòng thử lại sau.')
            // setError('Đã xảy ra lỗi, vui lòng thử lại sau.');
            // console.error(error);
        }
    };

    return (
        <div className='aRegis_body'>
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
      <ToastContainer className='toast-success' theme="dark"/>
            <div className='wrapper_pRegis'>
                <form onSubmit={handleSubmit(onSubmit)}> 
                <h1>Thiết Lập Không Mật Khẩu cho tài khoản: {localStorage.getItem('username')}</h1>

                    <div className='input_box_regis_sfs'>
                        <input className="input_regis" type='text' placeholder='Tên tài khoản' {...register('username', { required: 'Vui lòng nhập tên tài khoản' })} defaultValue= {`${localStorage.getItem('username')}`} readOnly />
                    </div>

                    <div className='input_box_regis_sfs'>
                        <input className="input_regis" type='text' placeholder='Tên hiển thị'  {...register('displayName', { required: 'Vui lòng nhập tên hiển thị' })} defaultValue={`${localStorage.getItem('displayName')}`} readOnly />
                    </div>

                    {errors.username && <p className='error-msg'>{errors.username.message}</p>}
                    {error && <p className='error-msg'>{error}</p>}
                    <button className='submit_login'type='submit'>Kích Hoạt</button>

                    <div className='register-link'>
                        <p><Link to="/web/landing" >Trở Lại</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SfsRegis;
