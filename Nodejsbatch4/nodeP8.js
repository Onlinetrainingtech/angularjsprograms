var http=require("http")
http.createServer(function(request,response){

    //send the http header
    //http status 200ok
    //content type:text/plain

    response.writeHead(200,{'Content-type':'text/plain'})

    //send the response body "welcome"

    response.end("Welcome to Web Program")


}).listen(8081);

//console mesg will print

console.log('Server is Running at 8081');