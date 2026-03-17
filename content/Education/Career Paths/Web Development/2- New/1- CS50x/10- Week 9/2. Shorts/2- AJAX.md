# AJAX - CS50 Short Summary

## Introduction to AJAX

In our exploration of JavaScript so far, we've been limited to doing simple things like clicking a button and something happens - maybe the color changes on your site, or maybe a couple of words change. But the catch is everything we've been doing so far has been client-side. It's all happening on our computer. We're never really talking to the outside world.

We can, however, talk to the outside world and make changes on our website, have something happen that interacts with the server, but maybe it doesn't reload our entire page. We want to create a more pleasant user experience. **AJAX allows us to do that.**

AJAX used to stand for **Asynchronous JavaScript and XML**. That's actually a backronym - it's not really what it's called anymore. Actually, most commonly now, instead of XML, we use JSON. But AJAX has just been the name that's kind of stuck for the technique.

## What AJAX Allows Us to Do

AJAX allows us to refresh sections of our page without refreshing the entire page. This creates a more dynamic user experience.

### Real-World Examples

If you're somebody who follows sports, you might see this if you're on a sports website where scores of games that are going on currently are being updated, but the whole page doesn't refresh. That means that the page is basically taking advantage of AJAX to just update small portions of the page.

Another example is your email. You might notice that sometimes when you get a new email, your entire body of your page refreshes to put that new email at the top of your inbox, but the whole page doesn't refresh. That's happening with AJAX as well. It's constantly running all the time - it's basically querying forever.

The techniques that you can do with AJAX are pretty limitless. You can do a lot of different things with it. We're going to focus on a very specific example where we're clicking a button and something happens, but the difference is this time when something happens, **we're making a server request**. We're making an outbound request from a page. It's not just happening on our machine anymore.

## The XMLHttpRequest Object

Central to our ability to asynchronously update our pages is to make use of a special JavaScript object called an **XMLHttpRequest**.

This allows us to make asynchronous requests to a server to get more information. "Asynchronous" means not at the same time as the refresh of the page or loading the page, but sometime thereafter while we still are on the page.

### Creating an XMLHttpRequest

It's actually very easy to create this. This line, for example, would create a new XMLHttpRequest object:

```javascript
var xhttp = new XMLHttpRequest();
```

In this case, we're calling it `xhttp` and assigning it to a random local variable in JavaScript.

## Defining onreadystatechange Behavior

Once you have the object, the first thing you have to do is define an **onreadystatechange** behavior.

Onreadystatechange is really just a wordy way to describe the steps that are happening when you visit a page. For example:
1. You're on a page and refresh it
2. It sort of all goes blank for a second
3. Some of the data starts to populate
4. It stops refreshing and you're ready to go

That's going through a series of different states, where it goes from:
- The request hasn't been initiated
- You're sending the request
- The request is received
- The request is on its way back to you
- The request is complete

These are the kinds of state changes that will take place when you're visiting a site and also when you're updating a smaller section of your site.

Typically, we define something that is supposed to happen when the state changes using an **anonymous function**. We don't have to give that function a name; we just want it to do something whenever it detects some change in the status of loading the site.

## The Five Different States

XMLHttpRequests have two additional properties that are used to detect when the page finishes loading:

### readyState Property
There are five different states, going from 0 to 4:
- **0**: Request has not yet been initialized
- **1**: Server connection established
- **2**: Request received
- **3**: Processing request
- **4**: Request finished, response ready (the ultimate goal)

### status Property
We also care about the status that we get back. Hopefully, the status will be **200**, which is the HTTP code for "OK". That's the one we fortunately never see - you don't go to a website and get a 200 displayed like you get a 404, for example.

So we want, ultimately, for the **readyState to be 4** and the **status to be 200**. When that's the case, we can then update our site.

## Opening and Sending Requests

Once we have defined our onreadystatechange behavior, we just need to:
1. **Open the request** using the `open()` method to define the request
2. **Send the request** using the `send()` method to actually send it

And then our site will refresh the specific section we're targeting.

## Complete AJAX Function Example

Here's a JavaScript function that is preparing, opening, and sending an AJAX request:

```javascript
function ajax_request(argument)
{
    var aj = new XMLHttpRequest();
    aj.onreadystatechange = function() {
        if (aj.readyState == 4 && aj.status == 200)
            // do something to the page
    };
    aj.open("GET", /* url */, true);
    aj.send();
}
```

Let's break this down:
1. First, we create a new XMLHttpRequest and assign it to a variable called `aj` (for AJAX)
2. We define a function that will execute on the readyState changing
3. This function will execute every time the state changes, but it's only going to do something meaningful once the readyState is 4 and the status is 200
4. We open our AJAX request, creating a GET request of a particular URL (the `true` parameter indicates this is asynchronous)
5. We send the request

## Practical Example: CS50 Info Page

Let's look at a concrete example from the video. We have an HTML page with:
- A dropdown menu with options for different CS50 staff members
- A div with ID "infodiv" that initially says "Information Goes Here"

### HTML Structure

```html
<div id="infodiv">
    Information Goes Here
</div>

<form>
    <select onchange="cs50info(this.value)">
        <option value="">Select Someone</option>
        <option value="bowden">Rob Bowden</option>
        <option value="chan">Chan</option>
        <option value="malan">Malan</option>
        <option value="zamyla">Zamyla</option>
    </select>
</form>
```

Notice the `onchange` event handler. When the value changes (when we select a different option from the list), we call the function `cs50info` and pass in `this.value`. 

`this` is a way to self-refer to the event that triggered the JavaScript function being called. So if we choose "Rob Bowden" from the list, we're passing "bowden" to the CS50info function.

### The JavaScript Function

```javascript
function cs50info(name)
{
    // If no option selected, return
    if (name == "")
    {
        return;
    }
    
    // Create new XMLHttpRequest
    var ajax = new XMLHttpRequest();
    
    // Define what happens when state changes
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200)
        {
            // Update the HTML inside of infodiv
            // This is jQuery syntax: $('#infodiv').html(ajax.responseText)
            document.getElementById('infodiv').innerHTML = ajax.responseText;
        }
    };
    
    // Open and send the request
    ajax.open("GET", name + ".html", true);
    ajax.send();
}
```

This function:
1. Checks if a valid option was selected (returns if not)
2. Creates an XMLHttpRequest object
3. Defines a function that waits for readyState to be 4 and status to be 200
4. When those conditions are met, it updates the HTML inside the infodiv with whatever comes back from the AJAX request
5. Opens a GET request for a file like "bowden.html" or "zamyla.html"
6. Sends the request

### The HTML Files Being Requested

Each staff member has an HTML file (like zamyla.html) that looks like:

```html
<p>Zamyla Chan</p>
<img src="zamyla.jpg" alt="Zamyla">
<p>Class of 2014</p>
<p>Winthrop House</p>
```

It's not a complete HTML document - just a snippet of HTML that will be inserted into the div.

### The Result

When you select a different person from the dropdown:
1. The content of the div gets deleted very quickly
2. New content gets loaded in
3. The page doesn't refresh - only that specific section updates

You might see the content briefly disappear and reappear - that's the asynchronous request happening very quickly. The entire page stays intact while just the section you care about updates.

## jQuery and AJAX

There is a slightly different way to do this syntactically using jQuery. In fact, you will very commonly see nowadays AJAX requests made using jQuery. 

The pure JavaScript version is shown here so you can see how it works fundamentally, but as you become more comfortable using jQuery for client-side scripting (for DOM manipulation or AJAX requests), you'll probably see this syntax differently.

More commonly, you'll see AJAX requests written using jQuery instead of "raw" JavaScript. You can learn more at: http://api.jquery.com/jquery.ajax/

## Beyond Local Servers

We can not only change things locally on our machine (simple things like colors), but we can also now send outbound requests to servers. They don't even have to be servers that are running locally. 

For example, you could:
- Source information from Yahoo Finance if you want to pull financial data asynchronously
- Load that into your page and have it constantly update
- Display the data in your own custom way

## Key Takeaways

1. **AJAX enables asynchronous communication** - You can update parts of a webpage without reloading the entire page
2. **XMLHttpRequest is the core object** - This JavaScript object enables the asynchronous requests
3. **State management is crucial** - You need to check for readyState 4 and status 200 to know when data is ready
4. **The process is straightforward**:
   - Create XMLHttpRequest
   - Define onreadystatechange behavior
   - Open the request
   - Send the request
5. **Real-world applications are extensive** - From sports scores to email updates to financial data
6. **jQuery often simplifies AJAX** - While understanding raw JavaScript is important, jQuery provides cleaner syntax
7. **Better user experience** - AJAX allows for creating more responsive, dynamic websites without the jarring full-page refreshes

It's an interesting new strategy that we have at our disposal. We can send requests locally, we can send requests outbound to other servers, and really take advantage of creating a better user experience using AJAX.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/10- Week 9/2. Shorts/1- Flask|Flask - CS50 Short Summary]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/10- Week 9/3- Week 9 Section|CS50x Week 9 Section Summary]]
