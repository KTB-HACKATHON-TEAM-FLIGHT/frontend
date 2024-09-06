import "./index.css";
import MarpitPPT from "./components/MarpitPPT";
import Button from "./components/Button";
import {useRef} from "react";
import html2pdf from 'html2pdf.js';

function App() {
    const thema = `
/* @theme my-first-theme */

section {
  background-color: #123;
  color: #fff;
  font-size: 30px;
  padding: 40px;
}

h1 {
  color: #8cf;
}
`
    const markdown = "<!DOCTYPE html>\n" +
        "<html lang=\"ko\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <title>PowerPoint Presentation</title>\n" +
        "    <style>\n" +
        "        body {\n" +
        "            font-family: Arial, sans-serif;\n" +
        "            background-color: #f7f7f7;\n" +
        "            margin: 0;\n" +
        "            padding: 0;\n" +
        "        }\n" +
        "        section {\n" +
        "            padding: 60px;\n" +
        "            text-align: center;\n" +
        "            page-break-after: always;\n" +
        "        }\n" +
        "        h1 {\n" +
        "            font-size: 36px;\n" +
        "            font-weight: bold;\n" +
        "        }\n" +
        "        h2 {\n" +
        "            font-size: 28px;\n" +
        "            font-weight: bold;\n" +
        "        }\n" +
        "        h3 {\n" +
        "            font-size: 24px;\n" +
        "            font-weight: bold;\n" +
        "        }\n" +
        "        ul, ol {\n" +
        "            text-align: left;\n" +
        "            margin: 20px auto;\n" +
        "            max-width: 800px;\n" +
        "            font-size: 18px;\n" +
        "        }\n" +
        "        img {\n" +
        "            max-width: 50%;\n" +
        "            max-height: 300px;\n" +
        "            display: block;\n" +
        "            margin: 20px auto;\n" +
        "            border-radius: 10px;\n" +
        "        }\n" +
        "        .divider {\n" +
        "            margin: 40px 0;\n" +
        "            border: 0;\n" +
        "            border-top: 2px solid #ddd;\n" +
        "        }\n" +
        "    </style>\n" +
        "</head>\n" +
        "<body>\n" +
        "\n" +
        "<section>\n" +
        "    <h1>최근 기사 감정분석을 통해 내일의 주가를 예측하는<br>자동 주식 매매 프로그램</h1>\n" +
        "    <h2>AI 기반의 혁신적인 주식 매매 솔루션</h2>\n" +
        "    <h3>발표자: 홍길동</h3>\n" +
        "    <img src=\"https://i-invdn-com.investing.com/redesign/images/seo/investing_300X300.png\" alt=\"Investment\">\n" +
        "</section>\n" +
        "\n" +
        "<hr class=\"divider\">\n" +
        "\n" +
        "<section>\n" +
        "    <h2>Contents</h2>\n" +
        "    <ol>\n" +
        "        <li>프로젝트 개요</li>\n" +
        "        <li>기사 감정분석의 중요성</li>\n" +
        "        <li>기술적 구현 방법</li>\n" +
        "        <li>실제 주가 예측 결과</li>\n" +
        "        <li>향후 발전 가능성 및 응용 분야</li>\n" +
        "    </ol>\n" +
        "</section>\n" +
        "\n" +
        "<hr class=\"divider\">\n" +
        "\n" +
        "<section>\n" +
        "    <h2>프로젝트 개요</h2>\n" +
        "    <ul>\n" +
        "        <li>자동 주식 매매 프로그램의 필요성 논의</li>\n" +
        "        <li>기사 감정분석을 통한 예측 모델 설명</li>\n" +
        "        <li>프로그램의 주요 기능 및 특징 소개</li>\n" +
        "    </ul>\n" +
        "    <img src=\"https://storage.googleapis.com/cr-resource/image/d8749e22f08e5d90f3fc4264f2505e49/daehanjuga/650/480388f85d725e4bdedfecff2602f0b6.jpg?_1725115782\" alt=\"Stock Analysis\">\n" +
        "</section>\n" +
        "\n" +
        "<hr class=\"divider\">\n" +
        "\n" +
        "<section>\n" +
        "    <h2>기사 감정분석의 중요성</h2>\n" +
        "    <ul>\n" +
        "        <li>감정분석이란 무엇인가?</li>\n" +
        "        <li>주가 예측에서 감정분석의 역할</li>\n" +
        "        <li>데이터 수집 및 전처리 방법</li>\n" +
        "    </ul>\n" +
        "    <img src=\"https://m.daraewineshop.co.kr/web/mobile/newDesign/127688111356e622d3aa4cc.jpg\" alt=\"News Sentiment\">\n" +
        "</section>\n" +
        "\n" +
        "<hr class=\"divider\">\n" +
        "\n" +
        "<section>\n" +
        "    <h2>기술적 구현 방법</h2>\n" +
        "    <ul>\n" +
        "        <li>감정분석을 위한 알고리즘 설명</li>\n" +
        "        <li>데이터 분석 및 모델 학습 과정</li>\n" +
        "        <li>주가 예측을 위한 모델 통합</li>\n" +
        "    </ul>\n" +
        "    <img src=\"https://overseas.mofa.go.kr/common-embd/images/ga-ko/main_visual_notext.jpg\" alt=\"Technical Implementation\">\n" +
        "</section>\n" +
        "\n" +
        "<hr class=\"divider\">\n" +
        "\n" +
        "<section>\n" +
        "    <h2>실제 주가 예측 결과</h2>\n" +
        "    <ul>\n" +
        "        <li>실험 데이터 및 결과 분석</li>\n" +
        "        <li>예측 모델의 정확도 장단점 평가</li>\n" +
        "        <li>실제 시장에서의 활용 사례</li>\n" +
        "    </ul>\n" +
        "    <img src=\"https://data.krx.co.kr/templets/mdc/img/mainSurbeyMoBanner_20240219.png\" alt=\"Stock Prediction Results\">\n" +
        "</section>\n" +
        "\n" +
        "<hr class=\"divider\">\n" +
        "\n" +
        "<section>\n" +
        "    <h2>향후 발전 가능성 및 응용 분야</h2>\n" +
        "    <ul>\n" +
        "        <li>프로그램의 개선 및 확장 가능성</li>\n" +
        "        <li>다양한 응용 분야 제시</li>\n" +
        "        <li>미래 전망 및 연구 방향</li>\n" +
        "    </ul>\n" +
        "    <img src=\"https://ssl.gstatic.com/finance/favicon/finance_770x402.png\" alt=\"Future Prospects\">\n" +
        "</section>\n" +
        "\n" +
        "<hr class=\"divider\">\n" +
        "\n" +
        "<section>\n" +
        "    <h2>Q&A</h2>\n" +
        "    <p>질문이나 피드백을 환영합니다!</p>\n" +
        "</section>\n" +
        "\n" +
        "<hr class=\"divider\">\n" +
        "\n" +
        "<section>\n" +
        "    <h2>Thank You</h2>\n" +
        "    <p>관심을 가져주셔서 감사합니다!</p>\n" +
        "</section>\n" +
        "\n" +
        "</body>\n" +
        "</html>"

    const contentRef = useRef(); // 변환할 콘텐츠에 대한 참조

    const handleDownloadPdf = () => {
        const element = contentRef.current; // 변환할 HTML 요소 선택
        console.log(element);
        alert("하이");
        html2pdf()
            .from(element) // PDF로 변환할 요소
            .set({
                margin: 1, // 페이지 여백
                filename: 'document.pdf', // 저장할 파일 이름
                html2canvas: { scale: 2 }, // 캔버스 스케일 설정 (높을수록 품질 향상)
                jsPDF: { orientation: 'portrait' }, // PDF 페이지 방향 설정
            })
            .save(); // PDF 저장
    };

    return (
        <div className="App">
            <header>
                <nav className="bg-stone-900 w-full z-20 top-0 start-0 border-b border-gray-600 h-[5vh] min-h-[60px]">
                    <div className="max-w-screen-xl flex flex-wrap items-center p-4">
                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
                            <span
                                className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ChatPTT</span>
                        </a>
                    </div>
                </nav>
            </header>

            <div id="page-wrapper" className="flex w-screen h-[95vh]">
                <div id="sidebar-wrapper" className="p-4 bg-stone-900 flex-auto w-20 max-w-[300px] overflow-y-auto">
                    <a href="/" className="flex mb-3 text-white no-underline">
                        <span className="text-2xl">PPT 목록</span>
                    </a>
                    <hr className="my-4 border-gray-700"/>
                    <ul className="flex flex-col space-y-2">
                        <li>
                            <a href="#" className="block px-4 py-2 text-white bg-blue-600 rounded-md">페이지1</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block px-4 py-2 text-white hover:bg-gray-800 rounded-md">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800 rounded-md">Orders</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800 rounded-md">Products</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-800 rounded-md">새 페이지</a>
                        </li>
                    </ul>
                    <hr className="my-4 border-gray-700"/>
                </div>

                <div id="page-content-wrapper" className="p-7 flex flex-auto w-80 gap-[1vw]">
                    <div id="chatting-wrapper"
                         className="flex-auto w-1/3 border border-gray-300 rounded-lg p-4 flex flex-col h-full">
                        <div className="flex-1 overflow-y-auto p-2 space-y-4">
                            <div className="flex items-start">
                                <img src="https://via.placeholder.com/40" className="w-10 h-10 rounded-full mr-3"
                                     alt="User Avatar"/>
                                <div className="bg-white p-3 rounded-lg shadow-md max-w-xs">
                                    <p className="text-gray-800">안녕하세요! 어떻게 도와드릴까요?</p>
                                </div>
                            </div>

                            <div className="flex items-end justify-end">
                                <div className="bg-blue-500 text-white p-3 rounded-lg shadow-md max-w-xs">
                                    <p>네, 질문이 있습니다.</p>
                                </div>
                            </div>

                        </div>

                        <div className="bg-white p-4 border-t border-gray-300 flex items-center">
                            <input type="text" placeholder="메시지를 입력하세요..."
                                   className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500"/>
                            <button className="bg-blue-500 text-white rounded-full p-2 ml-3 hover:bg-blue-700">
                                전송
                            </button>
                            <Button text={"pdf변환"} onClick={handleDownloadPdf}/>
                        </div>
                    </div>

                    <div id="ppt-wrapper" className="w-2/3 flex-auto border border-gray-300 rounded-lg p-4 h-full">
                        <MarpitPPT text={markdown} thema={thema}/>
                    </div>
                </div>
            </div>

            <footer></footer>
        </div>
    );
}

export default App;
