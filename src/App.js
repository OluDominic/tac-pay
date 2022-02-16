import React from 'react';
import MainLay from './layouts/mainLay';
import AdminLay from './layouts/adminLay';
import StudentLay from './layouts/studentLay'
import HomeLay from './layouts/HomeLay';
import { Switch, Route } from 'react-router-dom'
import Admin from './pages/admin';
import LoginForm from './pages/LoginForm';
import RegistrationForm from './pages/registrationForm';
import Payment from './pages/paymentHistory';
import CheckBal from './pages/checkBalance/checkBalance';
import CheckAttendance from './pages/checkAttendance';
import './default.scss';
import MyTranaction from './pages/myTran';
import UserDeposit from './components/userDeposit'
import Homepage from './pages/Homepage';
import Dashboard from './components/dashboard';
import DepositPage from './pages/deposit';
import TransactionHistory from './pages/transactionHistory';

import DeleteUserPage from './pages/DeleteUserPage';
import UserTrans from './pages/userTrans';
import AdminDepositHis from './pages/AdminDepositHis';
import UpdateUserPage from './pages/updateUserPage';
import UserDetailsPage from './pages/userDetailsPage';

const App=(props)=> {


  return (
    <div className="App">
      
      <Switch>
      <Route exact path="/" render={()=> (
          <HomeLay>
            <Homepage />
          </HomeLay>
        )}/>
        <Route path="/profile" render={()=> (
          <StudentLay>
            <Dashboard />
          </StudentLay>
        )}/>
        <Route path="/admin" render={()=> (
          <AdminLay>
            <Admin />
          </AdminLay>
        )}/>
        <Route path="/transaction" render={()=> (
          <AdminLay>
            <TransactionHistory />
          </AdminLay>
        )}/>
        <Route path="/deposithistory" render={()=> (
          <AdminLay>
            <AdminDepositHis />
          </AdminLay>
        )}/>
        <Route path="/updateuser/:id" render={()=> (
          <AdminLay>
            <UpdateUserPage />
          </AdminLay>
        )}/>
        <Route path="/login" render={()=> (
          <MainLay>
            <LoginForm />
          </MainLay>
        )}  />
      
        <Route path="/register" render={()=> (
          <AdminLay>
            <RegistrationForm />
          </AdminLay>
        )} />
        <Route path="/payment" render={()=> (
          <AdminLay>
            <Payment />
          </AdminLay>
        )} />
        <Route path="/usertransaction" render={()=> (
          <AdminLay>
            <MyTranaction />
          </AdminLay>
        )} />
        <Route path="/userdetails" render={()=> (
          <AdminLay>
            <UserDetailsPage />
          </AdminLay>
        )} />

        <Route path="/delete" render={()=> (
          <AdminLay>
            <DeleteUserPage />
          </AdminLay>
        )} />

        <Route path="/balance" render={()=> (
          <StudentLay>
            <CheckBal />
          </StudentLay>
        )} />
        <Route path="/transactionhistory" render={()=> (
          <StudentLay>
            <UserTrans />
          </StudentLay>
        )} />
        <Route path="/userdeposit" render={()=> (
          <StudentLay>
            <UserDeposit />
          </StudentLay>
        )} />
        <Route path="/deposit" render={()=> (
          <AdminLay>
            <DepositPage />
          </AdminLay>
        )} />
        <Route path="/attendance" render={()=> (
          <StudentLay>
            <CheckAttendance />
          </StudentLay>
        )} />
      </Switch>
    </div>
  );
}

export default App;
