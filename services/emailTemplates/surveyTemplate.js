const keys = require('../../config/keys');

module.exports = survey => {
    return `
        <html>
            <body>
            <div style="test-align:center">
                <h3>I'd like your input!</h3>
                <p>Please answer the following questions:</p>
                <p>${survey.body}</p>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">YES</a>
                </div>
                <div>
                <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">NO</a>
                </div>
            </div>
            </body>
        </html>
    `;
}