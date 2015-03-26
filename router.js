function route(handle,pathname){
    console.log('about to route for:'+ pathname);
    if(typeof(handle[pathname])==='function'){
        handle[pathname]();
    }else{
        console.log('No request handler found for path: '+ pathname);
    }
}

exports.route = route;
