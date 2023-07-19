//✅ 2. create keys.js file to hold API key for Google books
//🛑 in separate file to avoid putting in github

//✅ 2a. save API_KEY
const API_KEY = 'AIzaSyAZr1o6qZ3G7BBQNHrEDMAquRuiUT9iCqc'

//✅ 2b. create .gitignore to ignore keys.js
//🛑 can't do this after you added and committed file, there will always be a record
//🛑 reset version control or reset API key if you accidentally add keys to git
//🛑 keys.js will be greyed out, meaning it won't be tracked by github
//🛑 keys.js will not show up in source control tab of vscode

//✅ 3. use google books api to get information in browser
//✅ 3a. test getting information from the API in browser
// https://developers.google.com/books/docs/v1/using#WorkingVolumes (see Request)
// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAZr1o6qZ3G7BBQNHrEDMAquRuiUT9iCqc
