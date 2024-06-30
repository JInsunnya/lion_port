import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './contactc.css';
import { useLocation } from 'react-router-dom';

function App() {
  // 첫 번째 텍스트 상자 상태 변수
  const [title, setTitle] = useState('');
  // 두 번째 텍스트 상자 상태 변수
  const [body, setBody] = useState('');
  // const [id, setId] = useState('');
  // const [user, setUser] = useState('');
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState('');
  const { state } = useLocation();
  // const { id } = state;
  const id = state?.id || '';
  // console.log(id);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

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
      const response = await apiCall.put(
        `blog/${id}/`,
        {
          title,
          body,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // console.log(token);

  // const updatePost = async () => {
  //   try {
  //     const response = await apiCall.put(
  //       `blog/${id}/`,
  //       {
  //         title,
  //         body,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //     setPosts(response.data);
  //   } catch (error) {
  //     console.error('Error', error);
  //   }
  // };

  // const deletePost = async () => {
  //   try {
  //     const response = await apiCall.delete(`blog/${id}/`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log(response.data);
  //     setPosts(response.data);
  //     // return response.data;
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  useEffect(() => {
    if (token) {
      if (id) {
        contact(id, token);
        // updatePost(id, token);
        // deletePost(id, token);
      } else {
        console.warn('id가 없습니다.');
      }
    }
  }, [id, token]);

  return (
    <div className="onlyfont">
      <h1 className="wirte">KIM Portfolio</h1>
      <h2 className="text">글 수정</h2>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="제목"
        className="text-box"
      />

      <input
        type="text"
        value={body}
        onChange={handleBody}
        placeholder="내용을 입력하세요."
        className="text-box2"
      />
      <button className="finish" onClick={contact}>
        게시글 수정 완료
      </button>
      {/* <button onClick={updatePost}>게시글 수정</button>
      <button onClick={deletePost}>게시글 삭제</button> */}
    </div>
  );
}

export default App;
