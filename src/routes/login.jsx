import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Cookies } from 'react-cookie';
import './registrationc.css';

function App() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  // useEffect(() => {
  //   console.log()
  // }, [id, pw]);
  const apiCall = axios.create({
    baseURL: 'https://hufs-mutsa-12th.store/',
  });

  // const cookies = new Cookies();

  // const setCookie = (name, value) => {
  //   return cookies.set(name, value);
  // };
  // const getCookie = (name) => {
  //   return cookies.get(name);
  // };

  // localStorage.setItem('token', response.data.token);

  const login = async () => {
    try {
      const response = await apiCall.post('/dj/login/', {
        username: id,
        password: pw,
      });
      console.log(response.data.access);
      localStorage.setItem('token', response.data.access);
      // setCookie(response.data.access);
      // console.log(response.data.access);
      return response.data;
    } catch (error) {
      return error;
    }
  };
  // console.log(getCookie('token'));

  return (
    <div className="onlyfont">
      <h1>KIM Portfolio</h1>
      <h2 className="center">로그인</h2>
      <div className="username">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디"
          className="text-box3"
        />
      </div>
      <div className="space">
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="비밀번호"
          className="text-box1"
        />
      </div>
      <div className="respace">
        <button class="registration" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default App;
