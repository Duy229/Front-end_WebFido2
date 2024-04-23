
import { useState, useEffect } from 'react';
// import { FaRegUserCircle, FaCreditCard } from "react-icons/fa";
// import { FaMoneyBillWave } from "react-icons/fa";
import { findUser, getUserByUsername } from "../api/account.api";
import "./charge.css";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
// import { assertionAccount, loginAccount } from '../api/account.api';
// import { get, parseRequestOptionsFromJSON } from '@github/webauthn-json/browser-ponyfill';

type FormValue = {
    username: string;
};

type MoneyForm = {
    money_amount: string;
};

const Charge = () => {

    //sender
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
        fullName: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Assuming localStorage.getItem('username') contains the username
                const response = await getUserByUsername();
                setSender(response); // Set the user data in state
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchData();
    
        const fetchReceiverData = async () => {
            try {
                const data: FormValue = { username: `${localStorage.getItem('username')}` };
                const response = await findUser(data.username);
                setReceiver(response);
            } catch (error) {
                console.error("Error fetching receiver data:", error);
            }
        };
        fetchReceiverData();
    
    
        return () => {
            // Cleanup function if necessary
        };
    }, []);

    const { handleSubmit, register } = useForm<MoneyForm>();
    const navigate = useNavigate();
    // const [, setIsVertify] = useState(false);
    const onSubmit = async (data: MoneyForm) => {
        // const amount = parseFloat(data.money_amount);
        // if (amount <= sender.totalMoney) {
            try {
                        const moneyTransfer =  data.money_amount; // Serialize the data
                        localStorage.setItem('moneyAmount', moneyTransfer);
                        // window.alert('Hoàn thành xác thực');
                        navigate('/web/charge_2');
      
            } catch (error) {
                console.error(error);
                // setIsVertify(false);
            }
    };
    
    

    return (
        <div className='transBody'>
            <div className='top_landing'>
        <nav className="top-navbar">
            <div className="navbar-container">
              <ul className="menu-items">
              <Link className="top_link" to="">Về SFS</Link>
                <Link className="top_link" to="">Tin Tức</Link>
                <Link className="top_link" to="/web/passLogin">Đăng Xuất</Link>
              </ul>
              <Link to="/web/landing" className="top_logo"></Link>
              {/* <Link className="top_link" to="/passLogin">Đăng Xuất</Link> */}
            </div>
          </nav>
      </div>
            <div className='sender'>
                <div className='infoWrapper_left'>
                    <div className='main-container'>
                        <div className='row'>
                            <div className='col'>
                                <span> Mã Số Thẻ :</span>
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
                                <span>Tổng Tiền Hiện Có :</span>
                                <p>{sender.totalMoney}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='receiver'>
                <div className='moneyWrapper'>
                <div className='money_amount'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='row'>
                                <div className='input_box_login'>
                                    <input className='input_money' type='string' placeholder='Số tiền' {...register('money_amount', { required: 'Vui lòng nhập lượng tiền cần chuyển' })} />
                                </div>
                            </div>
                                <button className="submit_money_2" type='submit'>Đồng Ý</button>                                
                        </form>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Charge;
