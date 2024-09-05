import "./index.css";
import MarpitPPT from "./components/MarpitPPT";

function App() {
    return (
        <div className="App">
            <header>
                <nav className="bg-stone-900 w-full z-20 top-0 start-0 border-b border-gray-600 h-[5vh] min-h-[60px]">
                    <div className="max-w-screen-xl flex flex-wrap items-center p-4">
                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
                            <span
                                className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">제목</span>
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
                         className="flex-1 border border-gray-300 rounded-lg p-4 flex flex-col h-full">
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
                        </div>
                    </div>

                    <div id="ppt-wrapper" className="flex-1 border border-gray-300 rounded-lg p-4">
                        <MarpitPPT/>
                    </div>
                </div>
            </div>

            <footer></footer>
        </div>
    );
}

export default App;
