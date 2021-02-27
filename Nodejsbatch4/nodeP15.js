var inputfile=require('fs')

var data=inputfile.readFile("file1.txt",'utf8',function(err,data){
    if(err)
    {
        console.log('This is an error',err)
    }
    else
    {
        console.log(data);
    }
});