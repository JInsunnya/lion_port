import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './listc.css';
import './detail';

function App() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const Tofeed = (postId) => {
    navigate(`/details`, { state: { id: postId } });
  };

  const apiCall = axios.create({
    baseURL: 'https://hufs-mutsa-12th.store/',
  });

  const list = async () => {
    try {
      const response = await apiCall.get('/blog/', {
        // username: id,
        // password: pw,
      });
      console.log(response.data.access);
      setPosts(response.data);
      if (response.data.access) {
        localStorage.setItem('token', response.data.access);
      }
      return response.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    list();
  }, []);

  return (
    // <div>
    // <h1 className="littletitle">KIM Portfolio</h1>
    <div>
      <h1 className="littletitle">KIM Portfolio</h1>
      {posts.map((post) => (
        <div key={post.id} className="littlewrite">
          <h5 className="under">제목: {post.title}</h5>
          <p>게시글 id: {post.id}</p>
          <p>작성자 id: {post.user}</p>
          <p>내용: {post.body}</p>
          <nav>
            <ul className="nav-detail">
              <li>
                <a onClick={() => Tofeed(post.id)}>게시글 상세조회</a>
              </li>
            </ul>
          </nav>
        </div>
        // </div>
      ))}
    </div>
  );
}

export default App;
