import React, { useState, useEffect, useRef } from "react";
import { SessionManager } from "./api/SessionManager";
import { sendFirstRequest, sendNextRequest } from "./api/ApiManager";
import PdfDownload from "./api/PdfDownload";
import UserChat from "./components/UserChat";
import BotChat from "./components/BotChat";
import MarpitPPT from "./components/MarpitPPT";
import Button from "./components/Button";

import "./index.css";

function App() {
  const [sessionId, setSessionId] = useState(null);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [conversationStarted, setConversationStarted] = useState(false);
  const [result, setResult] = useState("");

  const contentRef = useRef(); // 변환할 콘텐츠에 대한 참조

  const handleSessionIdReceived = (id) => setSessionId(id);
  const thema = `

    /* @theme my-first-theme */

    section {
    background-color: #123;
    color: #fff;
    font-size: 2rem;
    padding: 2%;
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-bottom: 2%;
    }

    h1 {
    color: #8cf;
    }
    `;

  // 메시지 전송 및 API 호출
  const handleSendMessage = async () => {
    if (!sessionId || !chatInput.trim()) return; // 세션 ID 또는 입력 없을 때 실행 안하고

    try {
      let response;
      if (!conversationStarted) {
        response = await sendFirstRequest(sessionId, chatInput); // 첫 대화
        setConversationStarted(true);
      } else {
        response = await sendNextRequest(sessionId, chatInput); // 이후 대화
      }

      if (response?.result) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", text: chatInput }, // 사용자 메시지 추가
          { type: "bot", text: response.result }, // 챗봇 응답 추가
        ]);
        setResult(response.result);
      } else {
        console.error("API 응답에서 result가 없습니다.");
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
    }

    setChatInput(""); // 입력 필드 초기화
  };

  return (
    <div className="App">
      <header>
        <nav className="bg-stone-900 w-full z-20 top-0 start-0 border-b border-gray-600 h-[5vh] min-h-[60px]">
          <div className="max-w-screen-xl flex flex-wrap items-center p-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                ChatPPT
              </span>
            </a>
          </div>
        </nav>
      </header>

      <SessionManager onSessionIdReceived={handleSessionIdReceived} />

      <div id="page-wrapper" className="flex w-screen h-[95vh]">
        <div
          id="sidebar-wrapper"
          className="p-4 bg-stone-900 flex-auto w-20 max-w-[300px] overflow-y-auto"
        >
          <a href="/" className="flex mb-3 text-white no-underline">
            <span className="text-2xl">PPT 목록</span>
          </a>
          <hr className="my-4 border-gray-700" />

          <ul className="flex flex-col space-y-2">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-white hover:bg-gray-800 rounded-md"
              >
                새 페이지
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-white bg-blue-600 rounded-md"
              >
                페이지1
              </a>
            </li>
          </ul>
          <hr className="my-4 border-gray-700" />
        </div>

        <div
          id="page-content-wrapper"
          className="p-7 flex flex-auto w-80 gap-[1vw]"
        >
          <div
            id="chatting-wrapper"
            className="flex-auto w-1/3 border border-gray-300 rounded-lg p-4 flex flex-col h-full"
          >
            <div className="flex-1 overflow-y-auto p-2 space-y-4">
              {messages.map((msg, index) =>
                msg.type === "user" ? (
                  <UserChat key={index} text={msg.text} />
                ) : (
                  <BotChat key={index} text={msg.text} />
                )
              )}
            </div>
            <div className="bg-white p-4 border-t border-gray-300 flex items-center">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="메시지를 입력하세요..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <Button text={"전송"} onClick={handleSendMessage} />
              <PdfDownload contentHtml={result} contentRef={contentRef} />
            </div>
          </div>

          <div
            id="ppt-wrapper"
            className="w-2/3 flex-auto border border-gray-300 rounded-lg p-4 h-full"
          >
            {/* API 응답으로 받은 result를 MarpitPPT 컴포넌트로 렌더링하는것. */}
            <MarpitPPT text={result} thema={thema} />
          </div>
        </div>
      </div>

      <footer></footer>
    </div>
  );
}

export default App;
