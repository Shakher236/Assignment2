const http = require('http');
const fs = require('fs')
const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("This is the Home Page")
    }
    else if(req.url=='/about'){
        res.end("This is the About Page")
    }
    else if(req.url=='/contact'){
        res.end("This is the Contact Page")
    }

    else if (req.url === "/file-write") {

        fs.writeFile("demo.txt", "hello world", (err) => {
            if (err) {
                res.end("Failed to create file");
            } else {
                res.end("File created successfully");
            }
        });
    }
    else {
        res.end("Page not found");
    }
})
server.listen(5500,()=>{
    console.log('server is running at 5500');
})