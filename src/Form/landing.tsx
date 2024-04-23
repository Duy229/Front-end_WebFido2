


import "./landing.css";
import "./toast.css"
import { MdMobileFriendly } from "react-icons/md";
import { SiFidoalliance, SiWebauthn } from "react-icons/si";
import { MdOutlineWeb  } from "react-icons/md";
import { Link } from "react-router-dom";
import { assertionAccount, loginAccount } from '../api/account.api';
import { get, parseRequestOptionsFromJSON } from "../@github/webauthn-json/browser-ponyfill";

import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";


type FormValue = {
  username: string;
};


const Landing = () => {
  const location = useLocation();
  const successMessage = location.state?.successMessage;
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
  }, [successMessage]);
  const { handleSubmit } = useForm<FormValue>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormValue) => {
    try {
        const resCreateAccount = await loginAccount(`${localStorage.getItem('username')}`);
        if (resCreateAccount?.status === 'ok') {
          // const userId = resCreateAccount.userId;
          const options = parseRequestOptionsFromJSON({ publicKey: resCreateAccount });
        const response = await get(options);
        const authn = await assertionAccount(response);
        if (authn.username === `${localStorage.getItem('username')}`) { 
          const moneyTransfer = data.username; // Serialize the data
          localStorage.setItem('moneyAmount', moneyTransfer);
          localStorage.setItem('userId', authn.userId);
          navigate('/web/authenticator');
        } else {
          toast.error('Xác thực thất bại');
          // setIsLoggedIn(false);
        }
        
      } else {
        toast.error("Xác thực thất bại!");
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className='landing_body'>
      {/* <ToastContainer className='toast-success' /> */}
      <ToastContainer className='toast-success' theme="dark"/>
      <div className='wrapper_landing'>
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

        <div className='mid_landing'>
          <div className='left_landing'>
            <div className="left_description">
              <div className="left_name">
                SFS Banking
              </div>
              <div className="left_intro">
                <h2>Nhanh chóng, an toàn và bảo mật</h2>
              </div>
              <div className="left_p">
                <p>
                   Bằng cách sử dụng phương pháp xác thực không mật khẩu của FIDO 2 và Webauthn, quá trình đăng nhập đăng ký và quản lý tài khoản trở nên an toàn và hiệu quả hơn bao giờ hết. Giúp người dùng dễ dàng, yên tâm sử dụng các dịch vụ mà không lo lắng về vấn đề bảo mật, giảm thiểu rủi ro về bảo mật, sai sót trong quá trình sử dụng, đồng thời cung cấp trải nghiệm người dùng tốt hơn.
                </p>
              </div>
              <div className="left_btn_div">
                <Link to="/web/sfsRegistration" className="left_btn">Trải Nghiệm Ngay!</Link>
              </div>

              <div className="left_icon">
                <MdOutlineWeb   className='left_icon_o'/>
                <MdMobileFriendly  className='left_icon_o'/>
                <SiFidoalliance  className='left_icon_o2'/>
                <SiWebauthn  className='left_icon_o2'/>
              </div>
            </div>
          </div>
        </div>

        <div className='bottom_landing'>
          <div className="bottom_btn_contain_left">
            <Link to="/web/sfsRegistration" className="bot_func_btn_left">Thiết lập không mật khẩu</Link>
          </div>
          <div className="bottom_btn_contain">
            <Link to="/web/userInfo" className="bot_func_btn">Thông tin tài khoản</Link>
          </div>
          <div className="bottom_btn_contain">
            <form onSubmit={handleSubmit(onSubmit)}>
              <button className="bot_func_btn2" type="submit" >Quản lý thiết bị xác thực</button>                                
             </form>
          </div>
          <div className="bottom_btn_contain">
            <Link to="/web/transaction_1" className="bot_func_btn">Thực hiện giao dịch</Link>
          </div>
          <div className="bottom_btn_contain_right">
            <Link to="/web/charge_1" className="bot_func_btn_right">Nạp tiền</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;


