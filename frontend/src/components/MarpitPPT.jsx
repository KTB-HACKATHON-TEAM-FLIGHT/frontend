const { Marpit } = require("@marp-team/marpit");

const overrideCss = `
    section {
        padding: 2%;
        width: 100%;
        aspect-ratio: 16 / 9;
        margin-bottom: 2%;
        page-break-after: always;
    }
    section {
        box-sizing: border-box;
        scroll-snap-align: center center;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid ligthgray;
    }
    
    
`;

export default function MarpitPPT({ text, thema }) {
  return (
    <div className="overflow-y-auto h-full">
      <style>{overrideCss}</style>
      <style>{thema}</style>
      <div
        style={{
          width: "100%",
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}
