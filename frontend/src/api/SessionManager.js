import React, { useState, useEffect } from "react";
import axios from "axios";

export const SessionManager = ({ onSessionIdReceived }) => {
    const [sessionId, setSessionId] = useState(null);
    

    useEffect(() => {
        const storedSessionId = localStorage.getItem("sessionId");

        // 로컬스토리지에 sessionId 없을 때만 api요청하자
        if (!storedSessionId) {
            axios
            .post(`${process.env.REACT_APP_API_URL}/api/posts`)
            .then((response) => {
                const newSessionId = response.data.sessionId;
                localStorage.setItem("sessionId", newSessionId);
                setSessionId(newSessionId);

                // 새로운sessionID를 상위 컴포넌트로 전달
                onSessionIdReceived(newSessionId);
            })
            .catch((error) => {
            console.error("/api/users/session api 에러:", error);
            });
        } else {
            setSessionId(storedSessionId);
            // 저장된 ID를 불러와서 상위 컴포넌트로 전달
            onSessionIdReceived(storedSessionId);
        }
    }, [onSessionIdReceived]);

    // 변경될때마다 출력함
    useEffect(() => {
        if (sessionId) {
            console.log("at SessionManager, sessionId:", sessionId);
        }
    }, [sessionId]);

    return null;
};
