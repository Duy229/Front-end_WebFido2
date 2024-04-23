

import { useState, useEffect } from 'react';
import { getUserByUsername } from "../api/account.api";
import { findUserByNum, } from "../api/account.api";
import "./transaction.css";
import { useForm } from 'react-hook-form';
import {  useNavigate } from 'react-router';
import { assertionAccount, loginAccount } from '../api/account.api';
import { get, parseRequestOptionsFromJSON } from "../@github/webauthn-json/browser-ponyfill";

import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

type FormValue = {
    username: string;
};

type MoneyForm = {
    money_amount: string;
};

const Transaction = () => {

    //sender
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
                const data: FormValue = { username: `${localStorage.getItem('receiverNum')}` };
                const response2 = await findUserByNum(data.username);
                setReceiver({
                    ...response2,
                    fullName: response2.fullName // Update the fullName property
                });
        
                // Check if sender's username matches receiver's username
                if (response2.username === localStorage.getItem('username')) {
                    // window.alert("Người nhận không hợp lệ!");
                    navigate('/web/transaction_1', { state: { successMessage: 'Người nhận không hợp lệ!' } });
                    // navigate('/transaction_1');
                }
            } catch (error) {
                console.error("Error fetching receiver data:", error);
            }
        };
        
        fetchReceiverData();
    
        return () => {
            // Cleanup function if necessary
        };
    }, []);
        // const location = useLocation();
        // const successMessage = location.state?.successMessage;
        // useEffect(() => {
        //     if (successMessage) {
        //     toast.success(successMessage);
        //     }
        // }, [successMessage]);
    

    const { handleSubmit, register } = useForm<MoneyForm>();
    const navigate = useNavigate();
    const [, setIsVertify] = useState(false);
    const onSubmit = async (data: MoneyForm) => {
        const amount = parseFloat(data.money_amount);
        if (amount <= sender.totalMoney) {
            try {
                // Đăng nhập và nhận yêu cầu xác thực
                const resCreateAccount = await loginAccount(`${localStorage.getItem('username')}`);
                if (resCreateAccount?.status === 'ok') {
                    const options = parseRequestOptionsFromJSON({ publicKey: resCreateAccount });
                    const response = await get(options);
                    // Truyền username vào hàm assertionAccount
                    await assertionAccount(response).then(() => {
                        setIsVertify(true);
                        // const moneyTransfer = JSON.stringify({ money_amount: data.money_amount }); // Serialize the data
                        const moneyTransfer =  data.money_amount; // Serialize the data
                        localStorage.setItem('moneyAmount', moneyTransfer);
                        navigate('/web/transaction_3', { state: { successMessage: 'Hoàn thành xác thực!' } });
                        // window.alert('Hoàn thành xác thực');
                        // navigate('/transaction_3');
                    });
                } else {
                    setIsVertify(false);
                    navigate('/web/transaction_1', { state: { successMessage: 'Xác thực thất bại!' } });
                    
                    // window.alert('Xác thực thất bại');
                    // navigate('/transaction_1');
                }
            } catch (error) {
                console.error(error);
                setIsVertify(false);
            }
        } else {
            toast.error("Số tiền không đủ để thực hiện giao dịch")
            // window.alert("Số tiền không đủ để thực hiện giao dịch");
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
            <div className='sender'>
                <div className='infoWrapper_left'>
                    <div className='main-container'>
                        <div className='row'>
                            <div className='col'>
                                <span> Mã Thẻ :</span>
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
                    </div>
                </div>
            </div>

            <div className='receiver'>
                <div className='infoWrapper'>
                    <div className='main-container'>
                            <div className='row'>
                                <div className='col'>
                                <span> Mã Thẻ :</span>
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
                <div className='moneyWrapper'>
                                <div className='row'>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                            <input className='input_money' type='string' placeholder='Số tiền' {...register('money_amount', { required: 'Vui lòng nhập số tiền cần chuyển' })} />
                                    <button className="transaction_btn" type='submit'>Đồng Ý</button>                                
                                    </form>
                                </div>
                    </div>
            </div>
        </div>
    );
};

export default Transaction;
