var http=require("http")
http.createServer(function(request,response){

response.writeHead(200,{'Content-type':'text/plain'})

response.end("Welcome to Node Js Program")

}).listen(8081);
console.log("Server Running..")