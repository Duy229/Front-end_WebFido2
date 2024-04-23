




import { useState, useEffect } from 'react';
// import { FaRegUserCircle, FaCreditCard } from "react-icons/fa";
// import { FaMoneyBillWave } from "react-icons/fa";
import { transaction, findUser, getUserByUsername } from "../api/account.api";
import "./charge_2.css";
import { SubmitHandler, useForm} from 'react-hook-form';
import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

type FormValue = {
    username: string;
};

type MoneyForm = {
    money_amount: string;
};

type TransactionData = {
    sender_username: string;
    receiver_username: string;
    sender_card_num: number;
    receiver_card_num: number;
    money_amount: string;
};

const transfer = () => {
    const {handleSubmit } = useForm<MoneyForm>();

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
                const response = await getUserByUsername();
                setSender(response);
            } catch (error) {
                console.error("Error fetching sender data:", error);
            }
        };
        fetchData();

        return () => {};
    }, []);

    useEffect(() => {
        const fetchData = async (data: FormValue) => {
            try {
                const response = await findUser(data.username);
                setReceiver(response);
            } catch (error) {
                console.error("Error fetching receiver data:", error);
            }
        };
        const data: FormValue = { username: `${localStorage.getItem('username')}` };
        fetchData(data);
    }, []);

    // const moneyAmountString = localStorage.getItem('moneyAmount');
    const data: MoneyForm = {money_amount: `${localStorage.getItem('moneyAmount')}`}
    const amount = parseFloat(data.money_amount);
    const transactionData_charge: TransactionData = {
        sender_username: sender.username,
        receiver_username: sender.username,
        sender_card_num: sender.card_num,
        receiver_card_num: sender.card_num,
        // money_amount: money  // Example money amount
        money_amount: data.money_amount// Example money amount
    };

    const [, setError] = React.useState<string>('');
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<MoneyForm> = async () => {
        // if (amount<=0) {
            try {
                const response = await transaction(transactionData_charge);
                // localStorage.setItem('moneyAmount', data.money_amount);
                if (response) {
                    window.alert("Nạp tiền thành công");
                    navigate('/web/userInfo');
                }
            } catch (error) {
                setError('Nạp tiền thất bại');
                console.error(error);
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
            </div>
          </nav>
      </div>
            <div className='sender'>
            {/* <ToastContainer className='toast-success' style={{ color: 'black' }} /> */}
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
                                <span> Tổng Tiền Hiện Có :</span>
                                <p>{sender.totalMoney}</p>
                            </div>
                        </div>
                        <div className='register-link'>
                        <p><Link to="/web/landing" >Trở Lại</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='receiver'>
                <div className='moneyWrapper_transfer'>
                    <div className='money_amount'>
                                <div className='row'>
                                    <div className='col'>
                                        <span> Số tiền :</span>
                                        <p>{amount}</p>
                                    </div>
                                </div>

                        </div>
                    </div> 
                </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                                <button className="submit_money" type='submit'>Đồng Ý</button>   
                        </form>

        </div>
    );
};

export default transfer;

