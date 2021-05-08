$0.addEventListener("keypress", function() {
    console.log();
})

/* What the piece of code does is:
1. attaches event listener to the $0 
2. get it to listen for click events
3. when it detects those click events, get it to call the anonymous function
*/

$0.addEventListener("keypress", function(event) {
    console.log(event);
})
//Note: paramter *event* can be named anything
// we could also get the event that triggered the function through the call back function

// Higher-order functions - functions that take functions as input
// Callback functions - functions inside the higher order functions that return some value(?)


//explaining what happens under the hood of the addEventListener
function anotherAddEventListener () {
    //Detect event code...
    let eventThatHappened = {
        eventType: "keypress";
        key: "p";
        durationOfKeypress: 2;
    }
}

if (eventThatHappened === typedEvent) {
    callback(eventThatHappened);
}

//here's the part that we see, and write
anotherEventListener("keypress", function(event) {
    console.log(event);
})

document.addEventListener("keypress", function(event) {
    console.log(event);
});