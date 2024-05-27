// import { Form } from 'react-router-dom';

// export default function Contact() {
//   const contact = {
//     title: '글쓰기 페이지입니다.',
//     content: '글의 내용을 입력해 보시겠어요?',
//   };
//   // }

//   return (
//     <div id="contact">
//       <div>
//         <h1>{Contact.title}</h1>
//         <p>{Contact.content}</p>
//       </div>
//     </div>
//   );
// }

// import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>글쓰기 페이지입니다.</h1>
//       <p>글의 내용을 입력해 보시겠어요?</p>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './contactc.css';

function App() {
  // 첫 번째 텍스트 상자 상태 변수
  const [title, setTitle] = useState('');
  // 두 번째 텍스트 상자 상태 변수
  const [description, setDescription] = useState('');

  // 첫 번째 텍스트 상자 변경 핸들러
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // 두 번째 텍스트 상자 변경 핸들러
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="onlyfont">
      <h1>KIM Portfolio</h1>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="제목을 입력하세요"
        className="text-box"
      />
      <p>제목 한 번 더 확인하기: {title}</p>

      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="내용을 입력하세요"
        className="text-box2"
      />
      <p>내용 한 번 더 확인하기: {description}</p>
    </div>
  );
}

export default App;
