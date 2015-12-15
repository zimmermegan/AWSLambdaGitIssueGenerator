"use strict";

var Client = require("./node_modules/github/index");

var github = new Client({
    debug: true,
    version: "3.0.0"
});


exports.handler = function(event, context) {


    // Authenticate to comment on the issue
    github.authenticate({
        
	type : 'basic',
	username : 'YOUR USERNAM HERE', 
	password : 'YOUR PASSWORD HERE'    
	});



    github.issues.create({
       
	"title": "ISSUE NAME HERE",
	"body" : "I am having a problem",
	"assignee" : "YOUR USERNAME",
	"user":"USERNAME OF REPO OWNER",
	"repo": "REPO NAME"
	
	});
};
