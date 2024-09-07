import React from "react";
import axios from "axios";

const PdfDownload = ({ contentHtml, contentRef }) => {
  const handleDownloadPdf = async () => {
    try {
      // POST 요청으로 HTML을 서버에 전송하여 PDF로 변환
      const response = await axios.post(
        "https://api.chatppt.site/api/posts/pdf",
        contentHtml,
        {
          headers: {
            "Content-Type": "text/html", // 요청 헤더에 Content-Type을 text/html로 설정
          },
          responseType: "blob", // Blob으로 응답 받기
        }
      );

      if (response.status === 200) {
        // 서버에서 반환된 PDF 파일을 Blob으로 처리하여 다운로드
        const pdfBlob = new Blob([response.data], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(pdfBlob);
        link.setAttribute("download", "document.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error("PDF 생성 실패:", response);
      }
    } catch (error) {
      console.error("PDF 변환 API 요청 실패:", error);
    }
  };

  return (
    <button
      onClick={handleDownloadPdf}
      className="bg-blue-500 text-white rounded-full p-2 ml-3 hover:bg-blue-700"
    >
      PDF 변환
    </button>
  );
};

export default PdfDownload;
