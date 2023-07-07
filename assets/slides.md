---

theme : "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: false
title: "03_dom_events"

---


<style>
input {
  font-size: 2rem;
  padding: 1rem;
}
</style>

# 📅 Events 📅

---

### Lecture Goals

- Explain the importance of event handling in modern web applications
- Explain how callback functions are used with event listeners
- Observe how to add a form to a webpage using HTML and JavaScript
- Observe how onSubmit events are used to receive information from Users via forms
- Explain the purpose of the `.preventDefault()` method
- Use MDN to discover and interact with JavaScript events

---

<img 
  src="./data-display-behavior.drawio.svg" 
  alt="Data Display and Behavior" 
  style="width: 85%" 
/>

<aside class="notes">
- worked on data and display so far
</aside>

---

<img 
  src="./data-display-behavior-with-events.drawio.svg"  
  alt="Data Display and Behavior with Events" 
  style="width: 85%" 
/>

<aside class="notes">
- incorporate user behavior <br />
- onClick, onSubmit: update DOM <br />
- always this order, going to constantly apply this pattern
</aside>

---

### The Setup
<img 
  src="./event-handling-1.drawio.svg"  
  alt="Handling Events part 1 (setup)" 
  style="width: 85%" 
/>

<div class="fragment"> 

### The Payoff

<img 
  src="./event-handling-2.drawio.svg"  
  alt="Handling Events part 2 (in action)" 
  style="width: 85%" 
/> 

</div> 

<aside class="notes">
- setup is series of question, train of thought to follow <br />
- setup is good to use for pseudocode <br />
- when document loads it tracks every event (even mouse movements and keyboard presses) <br />
</aside>

---

### In Practice

- Identify event type
- Identify event target
- Add event listener for target and specify type (as first argument)
- add logic to handle the event to event handler callback (as second argument)

<aside class="notes">
</aside>

---

<img 
  src="./anatomy-of-an-event-listener.drawio.svg"  
  alt="Anatomy of an event listener diagram" 
  style="width: 90%" 
/>

<aside class="notes">
</aside>

---

## The Click Event

<button id="clickme" style="padding: 1.5rem 2rem; font-size: 2rem;">Click Me!</button>

<script>
function handleClick() {
  alert('Thanks! :)');
}
const button = document.getElementById('clickme');
button.addEventListener('click', handleClick);
</script>

<pre><code data-line-numbers><button id="clickme" style="padding: 1.5rem 2rem; font-size: 2rem;">Click Me!</button>

<script>
function handleClick() {
  alert('Thanks! :)');
}
const button = document.getElementById('clickme');
button.addEventListener('click', handleClick);
</script></code></pre>

- Why would `addEventListener` be considered a higher order function?
- In which case is `handleClick` behaving as an event handler? Line 4 or line 8? Why?

<aside class="notes">
- code is running in slide <br />
- addEventListener is higher order function because we are passing it a function <br />
- (1. take another function as parameter OR 2. returns a function; passing cb is more common) <br />
- line 8; handleClick doesn't relate to events until it is passed to an eventHandler <br />
- can invoke a handleClick whenever we want, not just passing it to an eventHandler <br />
- removeEventListener; for example if you only want an eventListener to run once and only once <br />
- sync (invoked before next expression, forEach, map); async (addEventListener, run later in program, not invoked immediately, saved for later use) <br />
- setTimeout()
</aside>

---

## The Submit Event

<form>
  <input type="text" name="q" />
  <input type="submit" />
</form>

<script>
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  console.log(form.q);
});
</script>

<pre><code data-line-numbers><form>
  <input type="text" name="q" />
  <input type="submit" />
</form>

<script>
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  console.log(form.q);
});
</script></code></pre>

<aside class="notes">
- submit is for forms <br />
- demo submit without e.preventDefault() <br />
- ❔ what do you notice about the fx of submitting form (DOM reloads/page refreshes; text disappears; input is showing up in URL) <br />
- explain default way forms handle submissions <br />
- ❔ why wouldn't we want our DOM to respond the default way
</aside>

---

## The Submit Event (with preventDefault)

<form id="otherForm">
  <input type="text" name="q" />
  <input type="submit" />
</form>

<script>
const otherForm = document.querySelector('#otherForm');
otherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(otherForm.q.value);
});
</script>

<pre><code data-line-numbers><form id="otherForm">
  <input type="text" name="q" />
  <input type="submit" />
</form>

<script>
const otherForm = document.querySelector('#otherForm');
otherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(otherForm.q.value);
});
</script></code></pre>

<aside class="notes">
- all functions expect parameters (multiple, optional, none); ex. forEach MDN; eventListener MDN <br />
- event is always passed as a parameter to the callback (can name it whatever; best to call it e, event, etc.) <br />
- click event doesn't really need event handler because we probably won't use it <br />
- won't get errors for leaving off a parameter (goal of parameter is to affect output in some way) <br />
- stopPropogation() MDN
</aside>

---

## Let's Code!

- Users should be able to delete books by clicking the delete button at the bottom of the book card
- Users should be able to click the New Book button to display the form to add a new book
- Users should be able to hide the New Book form by clicking the button again or hitting the Escape key on their keyboard
- Users should be able to add a book by filling in the form at the top of the page (the book they add should appear in the DOM)

<aside class="notes">
</aside>

---

## Ideas for Additional Practice

- Try using keyboard events to:
  - add keyboard shortcuts to your app 
  - simulate moving a player in an in browser game (using the arrow keys to move a character around the screen)
- Try using mouse events to reveal parts of the screen as the cursor moves over them (and then hide them again when the cursor leaves)
- Try adding a live updating search feature to an input (while you type in the input, the search results display only matches to what you've typed)
- Build your own spoiler (a clickable summary that will display details below when clicked and hide them again when clicked again)

<aside class="notes">
</aside>