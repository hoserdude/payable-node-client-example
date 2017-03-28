// in REPL run .load ./app.js
require('dotenv').config()
var request = require('request');

var workerRequest = {display_name: "Testy Worker"};

// Externalize your id and key!
var baseRequest = request.defaults({
    json: true,
    auth: {
        user: process.env.PAYABLE_COMPANY_ID,
        pass: process.env.PAYABLE_API_KEY,
        sendImmediately: false
    }
})

//Add a worker
var postWorker = function() {
    console.log('Posting Worker');
    var uri = process.env.PAYABLE_HOST + '/v1/workers';
    baseRequest.post(uri, {body: workerRequest}, function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
    });
};

var workersResponse = null;

//List workers
var listWorkers = function() {
    console.log('Listing Workers');
    var uri = process.env.PAYABLE_HOST + '/v1/workers';
    baseRequest.get(uri, function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        workersResponse = body;
    });
}

var workerResponse = null;

//Get one Worker
var retrieveWorker = function(workerId) {
    console.log('Retrieve Worker');
    var uri = process.env.PAYABLE_HOST + '/v1/workers/' + workerId;
    baseRequest.get(uri, function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        workerResponse = body;
    });
}

// You get the idea...
