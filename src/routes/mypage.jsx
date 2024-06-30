import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [token, setToken] = useState('');

  const apiCall = axios.create({
    baseURL: 'https://hufs-mutsa-12th.store/',
  });

  const logout = async () => {
    try {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        const response = await apiCall.post(
          '/dj/logout/',
          {},
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );
        console.log('로그아웃 성공');
        localStorage.removeItem('token');
      } else {
        console.log('토큰이 없습니다.');
      }
    } catch (error) {
      console.error('로그아웃 에러:', error);
    }
  };

  return (
    <div className="onlyfont">
      <h1>KIM Portfolio</h1>
      <h2 className="center">로그아웃</h2>
      <div className="respace">
        <button className="registration" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default App;
