import React, { useState, useEffect, useRef } from "react";
import { SessionManager } from "./api/SessionManager";
import { sendFirstRequest, sendNextRequest } from "./api/PPTManager";
import PdfDownload from "./api/PdfDownload";
import UserChat from "./components/UserChat";
import BotChat from "./components/BotChat";
import MarpitPPT from "./components/MarpitPPT";
import Button from "./components/Button";

import "./index.css";




function App() {
  const defaultText = "<section>\n" +
      "    <h1>ChatPPT 사용 설명서</h1>\n" +
      "    <p>이 웹사이트는 인공지능 언어 모델(LLM)을 사용하여 사용자가 원하는 프레젠테이션을 채팅을 통해 생성하고, 바로 화면에 띄워주는 기능을 제공합니다. 아래 설명을 통해 쉽게 사이트를 사용할 수 있습니다.</p>\n" +
      "</section>\n" +
      "\n" +
      "<section>\n" +
      "    <h1>사용 팁</h1>\n" +
      "    <ul>\n" +
      "        <li>명확하고 간결한 요청을 입력하면 더 나은 결과를 얻을 수 있습니다.</li>\n" +
      "        <li>각 슬라이드의 제목과 내용을 간단히 요약하여 요청하면 AI가 이해하기 쉽습니다.</li>\n" +
      "        <li>PPT가 생성된 후 추가 수정이 필요할 경우, 원하는 변경 사항을 다시 요청할 수 있습니다.</li>\n" +
      "    </ul>\n" +
      "</section>\n" +
      "\n" +
      "<section>\n" +
      "    <h1>주의사항</h1>\n" +
      "    <p>이 사이트는 인공지능을 기반으로 하기 때문에 요청한 내용에 따라 생성된 PPT의 품질이 달라질 수 있습니다. 항상 생성된 PPT를 검토하고 필요에 따라 수정하는 것을 권장합니다.</p>\n" +
      "</section>\n" +
      "\n" +
      "</section>"

  const [sessionId, setSessionId] = useState(null);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [conversationStarted, setConversationStarted] = useState(false);
  const [result, setResult] = useState(defaultText);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가

  const contentRef = useRef(); // 변환할 콘텐츠에 대한 참조

  const handleSessionIdReceived = (id) => setSessionId(id);

  const thema = `
    section {
      background-color: #123;
      color: #fff;
      font-size: 1.5rem;
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
    if (!sessionId || !chatInput.trim()) return; // 세션 ID 또는 입력 없을 때 실행 안함

    // 사용자의 메시지를 먼저 추가
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: chatInput },
    ]);

    setChatInput(""); // 입력 필드 초기화

    // 로딩 상태로 스피너 표시
    setLoading(true);

    try {
      let response;
      if (!conversationStarted) {
        response = await sendFirstRequest(sessionId, chatInput); // 첫 대화
        setConversationStarted(true);
      } else {
        response = await sendNextRequest(sessionId, chatInput); // 이후 대화
      }

      if (response?.result) {
        // 응답을 받아오면 로딩 상태를 해제하고 메시지 추가
        setLoading(false);
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", text: "PPT 생성을 완료했습니다." }, // 챗봇 응답 추가
        ]);
        setResult(response.result);
      } else {
        console.error("API 응답에서 result가 없습니다.");
        setLoading(false);
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
      setLoading(false); // 에러 발생 시 로딩 상태 해제
    }
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
                <img src="chatppt_logo.svg" className="h-8" alt="ChatPPT Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
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
                    className="block px-4 py-2 text-white bg-blue-600 rounded-md"
                >
                  페이지1
                </a>
              </li>
              <li>
                <a
                    href="#"
                    className="block px-4 py-2 text-white hover:bg-gray-800 rounded-md"
                >
                  새 페이지
                </a>
              </li>
            </ul>
            <hr className="my-4 border-gray-700"/>
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
                {loading && (
                    <div className="flex justify-center items-center">
                      {/* 스피너 표시 */}
                      <div className="loader">Loading...</div>
                    </div>
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
