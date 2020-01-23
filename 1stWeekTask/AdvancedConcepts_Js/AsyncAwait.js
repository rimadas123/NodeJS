var async = require('asyncawait/async');
var await = require('asyncawait/await');
async function fun1(request,response) {
    response = await request.get('https://www.google.com');
    if(response.err) { console.log('error');}
    else { console.log('fetched response');}
}
fun1();