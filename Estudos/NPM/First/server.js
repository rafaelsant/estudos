require("http").createServer((inRequest,inResponse)=>{
    inResponse.end("Teste de servidor");
}).listen(3000);