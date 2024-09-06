import axios from "axios";

//처음 대화 요청시 postId 없이 요청하고, postId를 응답받아 세션스토리지에 저장
import axios from "axios";

// 처음 대화 요청시 postId 없이 요청하고, postId를 응답받아 세션스토리지에 저장
export const sendFirstRequest = async (sessionId, request) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/posts`,
            {
                sessionId,
                request,
            }
        );

        const { postId, results } = response.data;
        sessionStorage.setItem("postId", postId);

        return response.data;
    } catch (error) {
        console.error("첫번째 /api/posts 요청 실패:", error);
        throw error;
    }
};

// 두번째부턴 postId와 함께 요청
export const sendNextRequest = async (sessionId, request) => {
    const postId = sessionStorage.getItem("postId");

    if (postId === null) {
        console.error("포스트아이디 없음");
        return;
    }

    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/posts`,
            {
                sessionId,
                postId,
                request,
            }
        );
        // 서버에서 받은 result를 반환
        const { result } = response.data;
        return { result };
    } catch (error) {
        console.error("이후의 /api/posts 요청 실패", error);
        throw error;
    }
};