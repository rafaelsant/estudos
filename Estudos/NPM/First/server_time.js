const requestModule = require("request");

require("http").createServer((inRequest, inResponse) => {
    requestModule(
        "http://worldtimeapi.org/api/timezone/America/Sao_Paulo",
        function (inErr, inResp, inBody) {
        inResponse.end(
            `Hello from my first Node Web server: ${inBody}`
        );
        }
    );
}).listen(80);