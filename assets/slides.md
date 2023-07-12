---

theme : "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: false
title: "05_post_request"

---

# POST Requests

---

### Lecture Goals

- Observe how to send a POST request using HTML forms and JavaScript
- Explain the difference between optimistic and pessimistic rendering

<aside class="notes">
- persist data to database / modify file <br />
- update both DOM and database, observe changes
</aside>


---

<img 
  src="./fetch-diagram.drawio.svg"
  alt="fetch diagram"
  style="width: 100%"
/>

<aside class="notes">

</aside>

---

<img
  src="./data-display-behavior.drawio.svg"
  alt="Data display behavior"
  style="width: 90%"
/>

<aside class="notes">
</aside>


---

<img
  src="./data-display-behavior-with-fetch.drawio.svg"
  alt="Data display behavior with fetch"
  style="width: 90%"
/>

<aside class="notes">
- adding new behavior: submit event
</aside>


---

## Fetch Configuration


<pre><code data-line-numbers="2,6,7,12">fetch(url, {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: 'follow', // manual, *follow, error
  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  body: JSON.stringify(data) // body data type must match "Content-Type" header
});</code></pre>


[MDN's article on using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options)

<aside class="notes">
- non-get request - need to do some configuration <br />
- from MDNs article <br />
- CORS: cross-origin resource sharing (chatGPT this?) <br />
- have to send information (data) in the body <br />
- default for POST is application/x-www-form-urlencoded, where data gets sent along with the url (after the ?) <br />
- json-server will always respond with json <br />
</aside>


---

<img
  src="./optimistic-vs-pessimistic-rendering.drawio.svg"
  alt="Optimistic rendering vs Pessimistic rendering"
  width="80%"
/>

<aside class="notes">
- optimistic: dom and server updates are not dependant on one another (not checking if things were successful on the server)<br />
- DOM UPDATES ARE SYNCHRONOUS <br />
- DOM will end up updating before server updates <br />
- if server update fails, we need to update DOM accordingly, thus putting in a catch <br />
- pros: faster (ex. iMessage, see text immediately but then there is the "failed to send" that shows us what happened on the server; progress bars); good for not-so-fast connections <br />
- pessimistic: make sure our server updated correctly before doing anything with our DOM, render only happens when async update is complete<br />
</aside>

---

## Working with JSON

- Fetch to URL returns Promise for a response
- response.json() returns a Promise for the parsed body
- Fetch returns a resolved response even when we get an error from the API server. 

This happens consistently as we send fetch requests, so we'll end up typing a lot of boilerplate each time–especially when we want to add a catch to our fetch call. {.fragment}

<aside class="notes">
- if response is error code, its still considered a fulfilled promise (which doesn't help us with error handling)...put fetch statements in boiler plate functions
</aside>


---

## Putting boilerplate into functions

<pre><code data-line-numbers>function getJSON(url) {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw (response.statusText)
      }
    })
}

function postJSON(url, data) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw (response.statusText)
      }
    })
}</code></pre>

<aside class="notes">
- check if response is ok <br />
- thrown error will be caught <br />
- throw...catch... are used together <br />
- located in src/request_helpers.js
</aside>

---

## Let's Code

1. Submit store form -> update DOM (select dropdown)
2. Submit book form -> update DOM -> add to database
