# Post Requests
## SWBAT
- [ ] Observe how to send a  POST request using HTML forms and JavaScript
- [ ] Explain the difference between optimistic and pessimistic rendering

## Deliverables 

1. Refactor index.js
2. Include a POST request in bookForm submit
3. Implement new store form and store dropdown

## POST (Create)
![post](assets/post.png)

Posts send data to the server. The information is usually sent from a FORM, creating a resource in the database. A POST is typically for creating new data instead of updating data, like PUT or PATCH.

A POST requires an additional argument, a request/config object.

```
// Method: The HTTP method used in this request. Fetch requests are GET by default. Though they can take a request object, it's not necessary. Other requests, such as POST, require the method to identify what type of request it is. 

// Headers: An object that contains additional information for the request. The Content-Type indicates the original media type of the data. 

// Body: The data from the request. Before the request can be sent the data must be converted to JSON.
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(formData)
})
```