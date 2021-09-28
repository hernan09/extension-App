import React, { useState } from 'react';
import './default.css';
import ImgLogo from '../../assets/Logo.jpg';
import { useHistory } from 'react-router-dom';
import fire from '../../FirebaseConfig';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((resp) => {
        console.log('logued 1');
        if (resp) {
          setEmail(resp.user.email);
          console.log('logued 2');
          history.push('/home');
        }
      })
      .catch((err) => {
        console.log('error...');
      });
  };

  return (
    <div className="mainlogin__container">
      <img src={ImgLogo} className="imgnlogo" alt="..." />
      <form action="" className="form__sendata">
        <label htmlFor="">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="text"
        />
        <label htmlFor="">Password</label>
        <input
          onChange={(e) => setPasword(e.target.value)}
          name="password"
          type="password"
        />
        <br />
        <button type="button" onClick={handleLogin} className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
