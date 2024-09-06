const {Marpit} = require('@marp-team/marpit');

const overrideCss = `
section {
  padding: 2%;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: 2%;
}
section {
    box-sizing: border-box;
    scroll-snap-align: center center;

    display: flex; /* Flexbox를 사용하여 내용 정렬 */
    flex-direction: column; /* 세로 정렬 */
    justify-content: center; /* 수직 방향으로 중앙 정렬 */
    align-items: center; /* 수평 방향으로 중앙 정렬 */
    border: 1px solid black;

}

section * {
    display: flex; /* Flexbox를 사용하여 내용 정렬 */
    flex-direction: column; /* 세로 정렬 */
    justify-content: center; /* 수직 방향으로 중앙 정렬 */
    align-items: center; /* 수평 방향으로 중앙 정렬 */
    text-align: center;
}

section img {
    max-width: 100%; /* 이미지 너비를 부모 요소의 100%까지 확장 (넘지 않도록) */
    max-height: 100%; /* 이미지 높이를 부모 요소의 100%까지 확장 (넘지 않도록) */
    width: auto; /* 이미지 비율을 유지하면서 너비 자동 조정 */
    height: auto; /* 이미지 비율을 유지하면서 높이 자동 조정 */
    display: block; /* 블록 레벨 요소로 변경하여 여백 제거 */
}
// section {
//   background-color: #123;
//   color: #fff;
//   font-size: 30px;
//   padding: 40px;
// }
//
// h1 {
//   color: #8cf;
// }
  `;

export default function MarpitPPT({text}) {
    return (
        <div className="overflow-y-auto h-full">
            <style>{overrideCss}</style>
            <div
                style={{
                    width: '100%',
                }}
                dangerouslySetInnerHTML={{__html: text}}
            />
        </div>
    );

}