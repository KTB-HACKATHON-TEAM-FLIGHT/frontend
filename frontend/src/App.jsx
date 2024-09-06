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
  font-size: 2rem;
  padding: 2%;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: 2%;
}

h1 {
  color: #8cf;
}
`
    const markdown = `
**Title Slide**:

- Main Title: 최근 기사 감정분석을 통해 내일의 주가를 예측하는 자동 주식 매매 프로그램
- Subtitle: 뉴스 감정분석 기반의 혁신적인 주식 거래 알고리즘
- Presenter's Name: 김철수, 데이터 사이언스 전문가
---

**Contents**:

- Introduction
- Understanding Sentiment Analysis
- The Algorithm Behind Stock Predictions
- Implementation and Backtesting
- Case Study
- Results and Insights
- Future Improvements
- Q&A
---

**Introduction**:

- Overview of stock market trading
- Importance of news sentiment in stock movements
- Objective of the automated trading program
- put image: stock market overview with upward and downward trends
---

**Understanding Sentiment Analysis**:

- Definition and significance of sentiment analysis
- Natural Language Processing (NLP) techniques 
- How sentiment analysis applies to news articles
- put image: AI analyzing news articles
---

**The Algorithm Behind Stock Predictions**:

- Step-by-step explanation of the prediction algorithm
- Sentiment score calculation
- Stock price prediction model
- put image: flowchart of the prediction algorithm
---

**Implementation and Backtesting**:

- Data collection and preprocessing
- Backtesting the algorithm with historical data
- Performance metrics and evaluation
- put image: historical stock data analysis
- Random table: 
  | Date       | Sentiment Score | Predicted Return | Actual Return |
  |------------|-----------------|------------------|---------------|
  | 2022-01-01 | 0.75            | 1.2%             | 1.5%          |
  | 2022-01-02 | -0.40           | -0.8%            | -1.0%         |
---

**Case Study**:

- Analysis of a specific stock using the program
- Sentiment trends and stock price movements
- Results and key learnings
- put image: case study results with stock price graph
---

**Results and Insights**:

- Summary of backtesting results
- Accuracy and profitability analysis
- Market implications of the program
- put image: statistical graphs showing accuracy and profitability
- Random statistical graph
---

**Future Improvements**:

- Enhancements for better prediction accuracy
- Integration with real-time trading platforms
- Potential challenges and solutions
- put image: future improvements flowchart
---

**Q&A**:

- "Questions and Answers"
- "Your feedback and questions are welcome"
---

**Thank You**:

- "Thank You for Your Attention"
- "Contact information and further resources"
`

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
