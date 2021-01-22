import React from 'react';
import MainLay from './layouts/mainLay';
import AdminLay from './layouts/adminLay';
import StudentLay from './layouts/adminLay'
import HomeLay from './layouts/HomeLay';
import Profile from './pages/profile'
import { Switch, Route } from 'react-router-dom'
import Admin from './pages/admin';
import LoginForm from './pages/LoginForm';
import RegistrationForm from './pages/registrationForm';
import Payment from './pages/paymentHistory';
import CheckBal from './pages/checkBalance/checkBalance';
import CheckAttendance from './pages/checkAttendance';
import './default.scss';
import MyTranaction from './pages/myTran';
import Homepage from './pages/Homepage';
import Dashboard from './components/dashboard';
import DepositPage from './pages/deposit';

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
        <Route path="/login" render={()=> (
          <MainLay>
            <LoginForm />
          </MainLay>
        )}  />
        <Route path="/register" render={()=> (
          <MainLay>
            <RegistrationForm />
          </MainLay>
        )} />
        <Route path="/payment" render={()=> (
          <StudentLay>
            <Payment />
          </StudentLay>
        )} />
        <Route path="/balance" render={()=> (
          <StudentLay>
            <CheckBal />
          </StudentLay>
        )} />
        <Route path="/deposit" render={()=> (
          <StudentLay>
            <DepositPage />
          </StudentLay>
        )} />
        <Route path="/attendance" render={()=> (
          <StudentLay>
            <CheckAttendance />
          </StudentLay>
        )} />
        <Route path="/transaction" render={()=> (
          <MainLay>
            <MyTranaction />
          </MainLay>
        )} />
      </Switch>
    </div>
  );
}

export default App;
