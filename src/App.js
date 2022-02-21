import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "프로필 수정",
    "환경설정",
    "보드 관리",
    "다이어리 관리",
  ]);
  let [like, likechange] = useState(0);

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '제목 바꿔보기';
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">Hello Blog!</div>
      <button onClick={제목바꾸기}>버튼을 클릭하세요</button>
      <div className="list">
        <h3>
          {글제목[0]}{" "}
          <span onClick={() => { likechange(like + 1); }}>💖</span>{" "}{like}{" "}
        </h3>
        <p>내용1</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>내용2</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>내용3</p>
        <hr />
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
