import React from 'react';
import './passLogin.css';
import { useForm } from 'react-hook-form';
import { loginUserp } from '../api/account.api';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles


type LoginFormValues = {
  username: string;
  password: string;
};

const PassLogin = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm<LoginFormValues>();
  const [error, ] = React.useState<string>('');
  // const [error, setError] = React.useState<string>('');

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const response = await loginUserp(data);
      if (response) {
        localStorage.setItem('username', data.username);
          // toast.success('Đăng nhập thành công'); // Show success toast        
          // setTimeout(() => {
            navigate('/web/landing', { state: { successMessage: 'Đăng nhập thành công' } });
          // }, 1500); 
      } else {
        // setError('Tên tài khoản hoặc mật khẩu không hợp lệ');
        toast.error ('Tên tài khoản hoặc mật khẩu không hợp lệ.');
      }
    } catch (error) {
      toast.error ('Đăng nhập thất bại, vui lòng thực hiện lại.');
      // setError('Đăng nhập thất bại, vui lòng thực hiện lại.');
      console.error(error);
    }
  };

  return (
    <div className="plogin_body">
      <ToastContainer className='toast-success' theme="dark"/>
                  {/* <ToastContainer className='toast-success' theme='black' /> */}
      {/* <ToastContainer className='toast-success' style={{ color: 'black' }} /> */}
      <div className="wrapper_login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Đăng Nhập Với Mật Khẩu</h1>
          <div className="input_box_login">
            <input  className='input_login'
              type="text"
              placeholder="Tên Tài Khoản"
              {...register('username', { required: 'Vui lòng nhập tên tài khoản' })}
            />
          </div>
          {errors.username && <div className="error-message">{errors.username.message}</div>}
          <div className="input_box_login">
            <input className='input_login'
              type="password"
              placeholder="Mật Khẩu"
              {...register('password', { required: 'Vui lòng nhập mật khẩu' })}
            />
          </div>
          {errors.password && <div className="error-message">{errors.password.message}</div>}
          
          <button className ='submit_login' type="submit">Đăng Nhập</button>
          {error && <div className="error-message">{error}</div>}
          <div className="noPass">
            <Link to="/web/sfsLogin">Đăng Nhập Không Mật Khẩu</Link>
          </div>
          <div className="register-link">
            <p>
              <Link to="/web/passRegistration">Chưa có tài khoản?</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PassLogin;
