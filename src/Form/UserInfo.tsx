

import  { useState, useEffect } from 'react';
// import { FaRegUserCircle, FaCreditCard } from "react-icons/fa";
// import { FaMoneyBillWave } from "react-icons/fa";
import { getUserByUsername } from "../api/account.api";
import "./UserInfo.css";
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const UserInfo = () => {
    
    const [user, setUser] = useState({
        card_num: 0,
        username: "",
        displayName: "",
        fullName: "",
        totalMoney: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUserByUsername();
                setUser(response); // Set the user data in state
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
            
        };
        fetchData();

        return () => {
            // Cleanup if needed
        };
    }, []);
    
       const location = useLocation();
    const successMessage = location.state?.successMessage;

    
    useEffect(() => {
        if (successMessage) {
          toast.success(successMessage);
        }
      }, [successMessage]);

    return (
        <div className='infoBody'>
      <ToastContainer className='toast-success' theme="dark"/>
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
            <div className='infoWrapper_left'>
                <div className='main-container'>
                    <div className='row'>
                        <div className='col'>
                            <span> Mã Thẻ :</span>
                            <p>{user.card_num}</p>
                        </div>

                        <div className='col'>
                            <span>Tên Tài Khoản :</span>
                            <p>{user.username}</p>
                        </div>
                        <div className='col'>
                            <span> Tên Hiển Thị :</span>
                            <p>{user.displayName}</p>
                        </div>
                        <div className='col'>
                            <span> Họ và Tên :</span>
                            <p>{user.fullName}</p>
                        </div>
                        <div className='col'>
                            <span> Tổng Tiền Hiện Có :</span>
                            <p>{user.totalMoney}</p>
                        </div>
                    </div>
                </div>
                    <div className='register-link2'>
                        <p><Link to="/web/landing" >Trở Lại</Link></p>
                    </div>
            </div>
        </div>
    );
};

export default UserInfo;
