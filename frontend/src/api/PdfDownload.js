import React from "react";
import axios from "axios";

const PdfDownload = ({ contentHtml, contentRef }) => {
  const handleDownloadPdf = async () => {
    try {
      // POST 요청으로 HTML을 서버에 전송하여 PDF로 변환
      const response = await axios.post(
        "https://api.chatppt.site/api/posts/pdf",
        {
          html: contentHtml, // 마크다운 렌더링된 HTML
        }
      );

      if (response.status === 200) {
        // 서버에서 반환된 PDF 파일 다운로드 처리
        const link = document.createElement("a");
        link.href = response.data.pdfUrl; // 서버에서 반환된 PDF URL
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
