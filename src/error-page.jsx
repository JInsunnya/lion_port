// touch src/error-page.jsx

import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>글쓰기 페이지입니다.</h1>
      <p>글의 내용을 입력해 보시겠어요?</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  );
}
