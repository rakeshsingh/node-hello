var http=require('http')
var url=require('url')

function start(route, handle){
  function onRequest(request, response){
      var postData = "";
      var pathname = url.parse(request.url).pathname;
      console.log('received request for: '+ pathname);

      request.setEncoding('utf8');
      request.addListener("data", function(postDataChunk) {
          postData += postDataChunk;
          console.log("Received POST data chunk '"+ postDataChunk + "'.");
      });

      request.addListener("end", function() {
          route(handle, pathname, response, postData);
          });
  }
  http.createServer(onRequest).listen(8888);
  console.log('Sever has started');
}

//export start
exports.start = start;
