# AWSLamdaGitIssueGenerator
This repo contains a template to make your own lambda node that can post issues to github if you wanted to extract data from a lambda node this is one of the methods you could use.

First make your own directory
  - "mkdir awsIssuePublisher"
  - "cd awsIssuePublisher"
 
  
Then you want to initialize the github api
  - "npm install github"

  
Then you'll want to make your own copy of the issue.js file

In issue.js you will need to change a few things
  - add your own username and password the the authenticate function (REQUIRED FOR FUNCTIONALITY)
  - change the repo name, assignee, user tags (REQUIRED FOR FUNCTIONALITY)
  - change the issue name and the issue body.


You can pull git issues using RUBY or Python github apis so that you can access data you've obtained from a aws lambda function.
