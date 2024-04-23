
import './sfslogin.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assertionAccount, loginAccount } from '../api/account.api';
import { get, parseRequestOptionsFromJSON } from "../@github/webauthn-json/browser-ponyfill";
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

type FormValue = {
  username: string; // Fix the type here
};

const SFS_Login = () => {
  const navigate = useNavigate();
  document.title = 'SFS Demo | Login';
  const { handleSubmit, register, formState: { errors } } = useForm<FormValue>();
  const [, setIsLoggedIn] = useState(false);

  const onSubmit = async (values: FormValue) => { // Fix the type here
    try {
      localStorage.clear();
      const resCreateAccount = await loginAccount(values.username);
      if (resCreateAccount?.status === "ok") {
        const options = parseRequestOptionsFromJSON({ publicKey: resCreateAccount });
        const response = await get(options);
        const assertionResponse: any = await assertionAccount(response); // Fix the type here
        // toast.success('Hoàn thành xác thực');
        if (assertionResponse.username === values.username) { // Fix the condition here
          localStorage.setItem('username', values.username);
          setIsLoggedIn(true);
          navigate('/web/landing', { state: { successMessage: 'Đăng nhập thành công' } });
        } else {
          toast.error('Xác thực thất bại');
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
        toast.error('Xác thực thất bại');
      }
    } catch (error) {
      console.error(error);
      setIsLoggedIn(false);
    }
  };
  
  return (
    <div className='sfs_login_body'>
      <ToastContainer className='toast-success' theme="dark"/>
      <div className='wrapper_sfs'>
        <form onSubmit={handleSubmit(onSubmit)}> 
          <h1>Đăng Nhập Không Mật Khẩu</h1>
          <div className='input_box_login'>
            <input className='input_sfs' type='text' placeholder='Tên Tài Khoản' {...register('username', { required: 'Vui lòng nhập tên tài khoản' })} />
          </div>
          {errors.username && <p className='error-msg'>{errors.username.message}</p>}
          <button className='submit_login' type='submit'>Đăng Nhập</button>
          <div className='noPass'>
            <Link to="/web/PassLogin" >Đăng Nhập Với Mật Khẩu</Link>
          </div>
          <div className='register-link'>
            <p><Link to="/web/passRegistration" >Chưa có tài khoản?</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SFS_Login;
