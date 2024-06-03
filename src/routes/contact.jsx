import React, { useState } from 'react';
import axios from 'axios';
import './contactc.css';

function App() {
  // 첫 번째 텍스트 상자 상태 변수
  const [title, setTitle] = useState('');
  // 두 번째 텍스트 상자 상태 변수
  const [body, setBody] = useState('');
  // const [id, setId] = useState('');
  // const [user, setUser] = useState('');

  // 첫 번째 텍스트 상자 변경 핸들러
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // 두 번째 텍스트 상자 변경 핸들러
  const handleBody = (event) => {
    setBody(event.target.value);
  };

  const apiCall = axios.create({
    baseURL: 'https://hufs-mutsa-12th.store/',
  });

  const contact = async () => {
    try {
      const response = await apiCall.post('/blog/', {
        // postid: id,
        // userid: user,
      });
      console.log(response.data.access);
      localStorage.setItem('token', response.data.access);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  const updatePost = async () => {
    try {
      const response = await apiCall.put('/blog/<int:blog_id>/', {
        // postid: id,
        // userid: user,
      });
      console.log(response.data.access);
      localStorage.setItem('token', response.data.access);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  const deletePost = async () => {
    try {
      const response = await apiCall.delete('/blog/<int:blog_id>/', {
        // postid: id,
        // userid: user,
      });
      console.log(response.data.access);
      localStorage.setItem('token', response.data.access);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="onlyfont">
      <h1>KIM Portfolio</h1>
      {/* <input
        type="text"
        value={postid}
        onChange={(e) => setId(e.target.value)}
        placeholder="게시글 id"
      />
      <input
        type="text"
        value={userid}
        onChange={(e) => setUser(e.target.value)}
        placeholder="작성자 id"
      /> */}
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="게시글 제목"
        className="text-box"
      />
      {/* <p>제목 한 번 더 확인하기: {title}</p> */}

      <input
        type="text"
        value={body}
        onChange={handleBody}
        placeholder="게시글 내용"
        className="text-box2"
      />
      {/* <p>내용 한 번 더 확인하기: {description}</p> */}
      <button onClick={contact}>게시글 작성</button>
      <button onClick={updatePost}>게시글 수정</button>
      <button onClick={deletePost}>게시글 삭제</button>
    </div>
  );
}

export default App;
