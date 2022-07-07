const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    function serve(path) {
        fs.readFile(path, null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('File not found');
            } else {
                res.write(data);
            }
        });
    }

    if (req.url == '/' || req.url == '/index.html') {
        serve('./index.html');
    } else if (req.url == '/about.html') {
        serve('./about.html');
    } else if (req.url == '/contact.html') {
        serve('./contact.html');
    } else {
        serve('./404.html');
    }
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
