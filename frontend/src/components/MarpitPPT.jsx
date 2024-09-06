const { Marpit } = require("@marp-team/marpit");

export default function MarpitPPT({ text, thema }) {
  const marpit = new Marpit();
  marpit.themeSet.default = marpit.themeSet.add(thema);

  const { html, css } = marpit.render(text);
  return (
    <div className="overflow-y-auto h-full">
      <style>{css}</style>
      <div
        style={{
          width: "100%",
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
