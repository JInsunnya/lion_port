import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import './registrationc.css';

function App() {
  const [id, setId] = useState('');
  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  const [nickname, setNickname] = useState('');
  const [univ, setUniv] = useState('');
  const [location, setLocation] = useState('');
  // useEffect(() => {
  //   console.log()
  // }, [id, pw]);
  const apiCall = axios.create({
    baseURL: 'https://hufs-mutsa-12th.store/',
  });

  const cookies = new Cookies();

  const setCookie = (name, value) => {
    return cookies.set(name, value);
  };
  const getCookie = (name) => {
    return cookies.get(name);
  };

  const registration = async () => {
    try {
      const response = await apiCall.post('/dj/registration/', {
        username: id,
        password1: pw1,
        password2: pw2,
        nickname: nickname,
        university: univ,
        location: location,
      });
      console.log(response.data);
      setCookie('token', response.data.token);
      return response.data;
    } catch (error) {
      // return error;
      console.error('에러:', error);
    }
  };
  console.log(getCookie('token'));

  return (
    <div className="onlyfont">
      <h1>KIM Portfolio</h1>
      <h2 className="center">회원가입</h2>
      <h4 className="red">필수 사항</h4>
      <div className="username">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="유저명(id)"
          className="text-box1"
        />
      </div>
      <div className="space">
        <input
          type="password"
          value={pw1}
          onChange={(e) => setPw1(e.target.value)}
          placeholder="비밀번호"
          className="text-box1"
        />
      </div>
      <div className="space">
        <input
          type="password"
          value={pw2}
          onChange={(e) => setPw2(e.target.value)}
          placeholder="비밀번호 확인"
          className="text-box1"
        />
      </div>
      <div className="space">
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임"
          className="text-box1"
        />
      </div>
      <div className="space">
        <input
          type="text"
          value={univ}
          onChange={(e) => setUniv(e.target.value)}
          placeholder="소속 대학교"
          className="text-box1"
        />
      </div>
      <div className="space">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="소속 대학교 지역"
          className="text-box1"
        />
      </div>
      <div className="respace">
        <button class="registration" onClick={registration}>
          회원 가입
        </button>
      </div>
    </div>
  );
}

export default App;
