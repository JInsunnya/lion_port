import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const apiCall = axios.create({
    baseURL: 'https://hufs-mutsa-12th.store/',
  });

  const logout = async () => {
    try {
      const response = await apiCall.post('/dj/login/', {
        username: id,
        password: pw,
      });
      console.log(response.data.access);
      localStorage.removeItem('token', response.data.access);
      // console.log(response.data.access);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="onlyfont">
      <h1>KIM Portfolio</h1>
      <h2 className="center">로그아웃</h2>
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
        <button class="registration" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default App;
