const { Marpit } = require('@marp-team/marpit');

export default function MarpitPPT() {
    const marpit = new Marpit()

    const {html, css } = marpit.render('# Hello, Marpit!')
    return (
        <div>
            <h1>Translate</h1>
            <style>{css}</style>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );

}