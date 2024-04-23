

import { useState, useEffect } from 'react';
// import { FaRegUserCircle, FaCreditCard } from "react-icons/fa";
// import { FaMoneyBillWave } from "react-icons/fa";
import { transaction, getUserByUsername, findUserByNum } from "../api/account.api";
// import { transaction, findUser, getUserByUsername, findUserByNum } from "../api/account.api";
import "./transfer.css";
import { SubmitHandler, useForm} from 'react-hook-form';
// import React from 'react';
import {  useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

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

    const [receiver, setReceiver] = useState({
        card_num: 0,
        username: "",
        displayName: "",
        full_name: "",
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
                const response = await findUserByNum(data.username);
                // const response = await findUser(data.username);
                setReceiver(response);
            } catch (error) {
                console.error("Error fetching receiver data:", error);
            }
        };
        // const data: FormValue = { username: `${localStorage.getItem('receiverName')}` };
        const data: FormValue = { username: `${localStorage.getItem('receiverNum')}` };
        fetchData(data);
    }, []);
    const data: MoneyForm = {money_amount: `${localStorage.getItem('moneyAmount')}`}
    const amount = parseFloat(data.money_amount);
    const transactionData: TransactionData = {
        sender_username: sender.username,
        receiver_username: receiver.username,
        sender_card_num: sender.card_num,
        receiver_card_num: receiver.card_num,
        // money_amount: money  // Example money amount
        money_amount: data.money_amount// Example money amount
    };

    // const [, setError] = React.useState<string>('');
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<MoneyForm> = async () => {
        if (amount!== undefined) {
            try {
                const response = await transaction(transactionData);
                // localStorage.setItem('moneyAmount', data.money_amount);
                if (response) {
                    // window.alert("Chuyển tiền thành công!");
                    // navigate('/userInfo');
                    navigate('/web/userInfo', { state: { successMessage: 'Chuyển tiền thành công' } });
                }
            } catch (error) {
                // setError('Chuyển tiền thất bại!');
                toast.error ('Chuyển tiền thất bại!');
                console.error(error);
            }
        } else {
            toast.error ('Số tiền không hợp lệ!');
            // window.alert("Số tiền không phù hợp!");
        }
    };

    return (
        <div className='transBody'>
      <ToastContainer className='toast-success' theme="dark"/>
                  {/* <ToastContainer className='toast-success' theme='black' /> */}
                  {/* <ToastContainer className='toast-success' style={{ color: 'black' }} /> */}
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
             <div className='mid_transfer'>
                
             
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
                        <div className='register-link2'>
                        <p><Link to="/web/landing" >Trở Lại</Link></p>
                    </div>
                    </div>
                </div>
            </div>

            <div className='receiver'>
                <div className='infoWrapper'>
                    <div className='main-container'>
                            <div className='row'>
                                <div className='col'>
                                <span> Mã Số Thẻ :</span>
                                <p>{receiver.card_num}</p>
                            </div>

                                <div className='col'>
                                    <span> Tên Tài Khoản :</span>
                                    <p>{receiver.username}</p>
                                </div>
                                <div className='col'>
                                    <span> Họ và Tên :</span>
                                    <p>{receiver.full_name}</p>
                                </div>
                            </div>        
                    </div>
                </div>
                <div className='moneyWrapper_transfer'>
                    <div className='money_amount'>
                                <div className='row'>
                                    {/* <span><FaRegUserCircle /> Tên Tài Khoản :</span> */}
                                    <div className='col'>
                                        <span> Số tiền :</span>
                                        <p>{amount}</p>
                                    </div>
                                </div>

                        </div>
                    </div> 
                </div>

                    <div className='trans_btn_1'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='trans_btn_2'>
                                <button className="trans_btn_3" type='submit'>Đồng Ý</button>                                
                            </div>
                        </form>

                    </div>
                </div>
        </div>
    );
};

export default transfer;

