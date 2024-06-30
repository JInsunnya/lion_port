import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './detailc.css';
import './modify';

function App() {
  const [posts, setPosts] = useState({});
  const [token, setToken] = useState('');
  const { state } = useLocation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();
  const { id } = state;
  console.log(id);
  const Tofeed = (postId) => {
    navigate(`/modifys`, { state: { id: postId } });
  };

  const apiCall = axios.create({
    baseURL: 'https://hufs-mutsa-12th.store/',
  });

  const list = async (id, token) => {
    try {
      const response = await apiCall.get(`blog/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setPosts(response.data);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  const handleClick = () => {
    navigate(`/modify`);
  };

  const deletePost = async () => {
    try {
      await apiCall.delete(`blog/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('게시글 삭제 성공');
      setPosts({});
    } catch (error) {
      console.error('Error:', error);
    }
  };

  console.log(token);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBody = (event) => {
    setBody(event.target.value);
  };

  useEffect(() => {
    if (token) {
      list(id, token);
    }
  }, [id, token]);

  return (
    <div>
      <h1 className="littletitle">KIM Portfolio</h1>
      <div className="littlewrite">
        <h5 className="under">제목: {posts.title}</h5>
        <p>게시글 id: {posts.id}</p>
        <p>작성자 id: {posts.user}</p>
        <p>내용: {posts.body}</p>
      </div>
      <nav>
        <ul className="nav-finish">
          <li>
            <a onClick={() => Tofeed(posts.id)}>게시글 수정</a>
          </li>
        </ul>
      </nav>
      <button className="finish" onClick={deletePost}>
        게시글 삭제
      </button>
    </div>
  );
}

export default App;
