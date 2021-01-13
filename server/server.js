const http =require('http')
const fs=require('fs')

const onRequest=(req,res)=>{
res.writeHead(200,{'Content-Type':'text/html'});
fs.readFile('../public/index.html',null,function(error,data){
    if(error){
        res.write("file not found");
    }
    ////this is shubham branch
    
    else {
        res.write(data);
    }
})
res.end();
}


http.createServer(onRequest).listen(8000);