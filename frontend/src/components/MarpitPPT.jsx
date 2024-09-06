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
}

section * {
    display: flex; /* Flexbox를 사용하여 내용 정렬 */
    flex-direction: column; /* 세로 정렬 */
    justify-content: center; /* 수직 방향으로 중앙 정렬 */
    align-items: center; /* 수평 방향으로 중앙 정렬 */
    text-align: center;
}

  `;

export default function MarpitPPT({text, thema}) {
    const marpit = new Marpit()
    marpit.themeSet.default = marpit.themeSet.add(thema)

    const {html, css} = marpit.render(text)
    return (
        <div className="overflow-y-auto h-full">
            <style>{css}</style>
            <style>{overrideCss}</style>
            <div
                style={{
                    width: '100%',
                }}
                dangerouslySetInnerHTML={{__html: html}}
            />
        </div>
    );

}