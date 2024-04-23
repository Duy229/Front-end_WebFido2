
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PassLogin from "../Form/passLogin";
// import PassRegis from "../Form/passRegistration";
// import SFS_Login from "../Page/SFS_Login";
// import SFS_Regis from "../Form/sfsregister";
// import Landing from "../Form/landing";
// import Home from "../Page/HomePage";
// import UserInfo from "../Form/UserInfo";
// import Transaction from "../Form/transaction";
// import FindToTrans from "../Form/findToTrans";
// import Transfer  from "../Form/transfer";
// import Charge from "../Form/charge";
// import Authenticator from "../Form/authenticator";
// import Charge_2 from "../Form/charge_2";
// import ModalTest from "../Form/modalTest"

// const AppRouter: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/landing" element={<Landing />} />
//         <Route path="/passRegistration" element={<PassRegis />} />
//         <Route path="/sfsRegistration" element={<SFS_Regis />} />
//         <Route path="/sfsLogin" element={<SFS_Login />} />
//         <Route path="/userInfo" element={<UserInfo />} />
//         <Route path="/passLogin" element={<PassLogin />} />
//         <Route path="/transaction_1" element={<FindToTrans />} />
//         <Route path="/transaction_2" element={<Transaction />} />
//         <Route path="/transaction_3" element={<Transfer/>} />
//         <Route path="/charge_1" element={<Charge/>} />
//         <Route path="/charge_2" element={<Charge_2/>} />
//         <Route path="/authenticator" element={<Authenticator/>} />
//         <Route path="/modal" element={<ModalTest/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// };


// export default AppRouter;


import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PassLogin from "../Form/passLogin";
import PassRegis from "../Form/passRegistration";
import SFS_Login from "../Page/SFS_Login";
import SFS_Regis from "../Form/sfsregister";
import Landing from "../Form/landing";
import Home from "../Page/HomePage";
import UserInfo from "../Form/UserInfo";
import Transaction from "../Form/transaction";
import FindToTrans from "../Form/findToTrans";
import Transfer  from "../Form/transfer";
import Charge from "../Form/charge";
import Authenticator from "../Form/authenticator";
import Charge_2 from "../Form/charge_2";
import ModalTest from "../Form/modalTest";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/web/home" />} />
        <Route path="/web">
          <Route path="home" element={<Home />} />
          <Route path="landing" element={<Landing />} />
          <Route path="passRegistration" element={<PassRegis />} />
          <Route path="sfsRegistration" element={<SFS_Regis />} />
          <Route path="sfsLogin" element={<SFS_Login />} />
          <Route path="userInfo" element={<UserInfo />} />
          <Route path="passLogin" element={<PassLogin />} />
          <Route path="transaction_1" element={<FindToTrans />} />
          <Route path="transaction_2" element={<Transaction />} />
          <Route path="transaction_3" element={<Transfer />} />
          <Route path="charge_1" element={<Charge />} />
          <Route path="charge_2" element={<Charge_2 />} />
          <Route path="authenticator" element={<Authenticator />} />
          <Route path="modal" element={<ModalTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
