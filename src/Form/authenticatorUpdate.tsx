import React from 'react';
import './authenticatorUpdate.css';
import { useForm } from 'react-hook-form';
// import { loginUserp } from '../api/account.api';
import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify'; // Import toast
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

import { updateAuthenticator} from "../api/account.api";


type updateValue = {
  username: string;
};

const AuthenticatorUpdate = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm<updateValue>();
  const [error, ] = React.useState<string>('');

  const onSubmit = async (data: updateValue) => {
    try {
    const response =await updateAuthenticator(data.username);
      if (response) {
        navigate('/web/authenticator', { state: { successMessage: 'Cập nhật thành công' } });
      } 
    } catch (error) {
      toast.error ('Cập nhật thất bại, vui lòng thực hiện lại sau.');
      console.error(error);
    }
  };

  return (
    <div className="plogin_body">
      
      <div className="wrapper_login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Cập nhật tên thiết bị xác thực</h1>
          <div className="input_box_login">
            <input  className='input_login'
              type="text"
              placeholder="Tên Thiết Bị"
              {...register('username', { required: 'Vui lòng nhập tên mới cho thiết bị' })}
            />
          </div>
          {errors.username && <div className="error-message">{errors.username.message}</div>}
          <button className ='submit_login' type="submit">Cập nhật</button>
          {error && <div className="error-message">{error}</div>}
          <div className="noPass">
            <Link to="/web/authenticator">Trở Lại</Link>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default AuthenticatorUpdate;
