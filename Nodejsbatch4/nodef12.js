var fs=require('fs')
fs.unlink('file1.txt',function(){
    console.log("deleted")
});
