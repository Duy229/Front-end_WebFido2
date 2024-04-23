

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './modalTest.css'
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { updateAuthenticator } from "../api/account.api";
import { toast } from "react-toastify";
import './modalTest.css'


type updateValue = {
    username: string;
  };

const ModalTest = () => {
    const [popupVisible, setPopupVisible] = useState<boolean>(false);
    const navigate = useNavigate();
    const { handleSubmit, register, formState: { errors } } = useForm<updateValue>();
    const [error, ] = React.useState<string>('');

    const togglePopup = () => {
        setPopupVisible(!popupVisible);
    };

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
        <div  >
            <Button className="modalBtn" onClick={togglePopup}>Click</Button>
            {popupVisible && (
                    <div className="modal-wrapper2">
                        <div  className="modal-wrapper">
                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <h1>Đổi tên thiết bị xác thực</h1>
                            <div className="input_box-modal">
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
                            <Button className="cancelBtn" onClick={togglePopup}>Trở Lại</Button>
                            </div>
                        </form>
                     </div>
                </div>
            )}
        </div>
    );
};

export default ModalTest;
