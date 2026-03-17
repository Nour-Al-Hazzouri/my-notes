# Flask - CS50 Short Summary

## Introduction to Flask and Web Frameworks

Flask allows us to use Python to write web applications, which is a really common use case for website backends. Python contains a lot more native functionality to support networking, opening socket connections, and maintaining connections between different locations on the internet.

While C can do these things too, in C it's really difficult and requires a lot of code. In Python, because it is a more modern language that abstracts away some of the boring, tedious details of C, it becomes a lot more straightforward and tenable to write more complex web apps.

Web frameworks make this process even easier because they take some of the Python things that we would have to do and abstract those away. You can think of a web framework sort of like a library that's written in Python, specialized in taking advantage and doing some of the things in Python for you that you would otherwise have to do yourself.

Creating a web server in Python is not all that many lines of code to do it in just raw Python, but it's a little tedious. Not nearly as tedious as C, but using web frameworks like Django, Pyramid, or Flask makes it a lot easier.

## Why Flask in CS50

Flask is used in CS50 specifically because it is very lightweight and still quite feature-rich. This means that it will work well on CS50 IDE where you are using a cloud-based infrastructure, and the amount of space and memory you have is limited by design. Using the lightest weight web framework possible was really important.

## The Problem with Static HTML

HTML websites suffer from one major limitation: they are static. Imagine creating a website that displays the current time in Cambridge, MA, displaying it to the latest minute. Here's HTML that would do exactly that:

```html
<html>
<head>
    <title>Current Time in Cambridge</title>
</head>
<body>
    The current time in Cambridge is 14:08
</body>
</html>
```

This is great for a minute, but at 14:09 (2:09 PM), it becomes not accurate anymore. If you're the webmaster and you have a page written entirely in HTML, every minute you have to go through and update this page so that it is always consistent. 

If you were actually a webmaster and this was your job, you probably wouldn't last too long because you'd be literally just changing things constantly. And imagine if we were going to the nearest second or the nearest millisecond - you wouldn't be able to actually even do it.

The only way to update our source in HTML is to literally go in and edit our HTML. If we incorporate Python into our code, though, we can be a lot more flexible and allow our pages to become dynamic without requiring any human intervention.

## Creating Dynamic Applications with Flask

Here's an example of a web application in Flask that would display the current date and time dynamically:

```python
from flask import Flask
from datetime import datetime
from pytz import timezone

app = Flask(__name__)

@app.route("/")
def time():
    now = datetime.now(timezone('America/New_York'))
    return "The current date and time in Cambridge is {}".format(now)
```

This code:
- Imports Flask and necessary modules for datetime functionality
- Imports the datetime module and specifically pulls the datetime function from it
- Imports the timezone function from the pytz (py timezone) module
- Initiates the Flask application
- Uses the datetime and timezone functions to figure out what the current time is in the America/New_York timezone (New York is in the same time zone as Cambridge)
- Returns a string with the current date and time

If you refresh the page, it would update every time. It wouldn't be static - it would become dynamic and wouldn't require any more intervention. This would work for as long as the computer and web server were running, allowing the webmaster to focus on much more fulfilling and fun things than updating HTML source every 60 seconds.

## Getting Started with Flask

Getting started using Flask is really easy within CS50 IDE. We first open up a Python file, generally called `application.py` (though you can call it whatever you want).

### Step 1: Import Flask

The very first line of application.py is:

```python
from flask import Flask
```

Flask with a lowercase f is the name of the module. Capital F Flask is the name of a function (actually a class) within that module. Generally, we indicate classes with a capital letter.

### Step 2: Initialize Flask Application

After importing, we need to initialize a Flask application:

```python
app = Flask(__name__)
```

`__name__` is just the name of the file. This is basically creating a Flask application based on whatever file this line of code appears in (generally application.py).

### Step 3: Write Functions

From there, we write functions to define the behavior of our application:

```python
def index():
    return "You are at the index page!"

def sample():
    return "You are on the sample page!"
```

These are just regular Python functions. The index function's sole purpose is to return "You are at the index page", and the sample function returns "You are on the sample page".

## Decorators and Routing

To associate these functions with specific URLs on our site, we use decorators:

```python
@app.route("/")
def index():
    return "You are at the index page!"

@app.route("/sample")
def sample():
    return "You are on the sample page!"
```

These decorators are basically associating a particular function with executing when you visit a particular URL. 
- If you go to your web application's home page (just `/`), it will show "You are at the index page"
- If you go to `/sample`, it will show "You are on the sample page"

Decorators are actually not something native to Flask - they're native to Python more generally. In Flask context, we're using them specifically to associate functions with visiting certain domains.

## Running Flask Applications

To run our Flask application, we need three steps (the first two only need to be run once):

### 1. Export Flask App
```bash
export FLASK_APP=application.py
```
This is a system variable that gets stored in the memory of your IDE, so if you ever run an application again, it knows exactly which application to run.

### 2. Enable Debug Mode (Optional but Recommended)
```bash
export FLASK_DEBUG=1
```
The 1 here basically means true. This runs your Flask application in debug mode, so if something goes wrong, it will get printed out to your terminal. Your site won't just crash without you knowing what happened.

### 3. Run the Application
```bash
flask run
```
This will take about a second to spin up, then give you a URL that you can click on and visit, which will be the home page of your application.

After the first time configuration, you can leave out the export commands and just continue to type `flask run` to run the same application over and over.

## Passing Data to Flask Applications

### Via URL (HTTP GET)

We can pass data into our Flask applications using HTTP GET by passing in data via URL:

```python
@app.route("/show/<number>")
def show(number):
    return "You passed in {}".format(number)
```

The angle brackets around `<number>` are important - we actually have to leave those in. 
- If you visit `/show/10`, the page would show "You passed in 10"
- If you go to `/show/50`, it would say "You passed in 50"

This allows you to collect information using HTTP GET by having the user supply it via a URL.

### Via HTML Forms (HTTP POST)

We can also pass in data via HTML forms, which are transmitted by POST. By default, Flask is configured to only accept HTTP GET requests, so we have to modify things to make Flask respond to HTTP POST requests:

```python
@app.route("/login", methods=['GET', 'POST'])
def login():
    if not request.form.get("username"):
        return apology("must provide username")
```

Notice that in the decorator, in addition to saying where the function should be associated (`/login`), we're also saying it should accept data via both GET and POST methods.

The `request.form.get("username")` is asking to retrieve from the form the field called username. (Note: using "get" here is a Python method, not the HTTP GET method). This is checking if the username field of whatever form the user submitted is blank. If it is, we apologize to the user and tell them they need to supply a username.

## Varying Behavior Based on Request Method

We can vary the behavior of a function depending on which type of HTTP request we got:

```python
@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == "POST":
        # Check if fields are filled, process login
        if not request.form.get("username"):
            return apology("must provide username")
        # ... more processing
    else:
        # Display the login form
        return render_template("login.html")
```

This allows us to:
- Use one URL to do two different things depending on how the data came to us
- Show the form if we got a GET request
- Process the submitted data if we got a POST request

`request.method` allows us to check whether we got data via GET or POST and do different things depending on which it was.

## Useful Flask Functions

There are many functions within the Flask module useful for application development. You can import them like:

```python
from flask import Flask, url_for, redirect, session, render_template
```

### url_for()
Allows you to define a function and have a decorator associated with it. Instead of specifying the exact URL you want to go to (which might be very long), you can say `url_for('login')` to reference the URL associated with the login function. It's a way to shorthand URLs.

### redirect()
Flask's function that redirects you from one page to another.

### session()
Useful for HTTP session data. In addition to GET and POST, there's also session variables (not necessarily an HTTP thing but usually stored in the headers). You can use this to:
- Track that a user is logged in
- Constantly check they are logged in even if they're going to different pages
- Store data in the session for the user

A session is used sort of like a global variable - it's accessible by all pages.

### render_template()
Used to create pages on your site that mix HTML and Python together. You might render a template where that template is an HTML form. You might have an HTML template where you've written the general form, and you render that template with specific data filled in.

You can mix HTML and Python together using a language called Jinja (Python-inspired syntax). Some things familiar from Python syntax will be relevant there, but there are a couple of little twists as well.

## Additional Resources

- **Flask Quick Start Guide**: http://flask.pocoo.org/docs/0.12/quickstart/
  You can get started pretty quickly with Flask using this guide
  
- **Jinja Documentation**: http://jinja.pocoo.org/
  Learn how to mix HTML and Python together to create basic templates where you can substitute different things depending on what the user has submitted via GET or POST requests

## Key Takeaways

1. Flask makes it easy to create dynamic web applications in Python
2. It abstracts away complex networking details while remaining lightweight
3. Decorators associate functions with specific URLs
4. You can accept data via both GET (URL parameters) and POST (form submissions)
5. Flask functions like `render_template`, `session`, and `redirect` provide powerful web functionality
6. The combination of Flask and Jinja allows mixing Python logic with HTML presentation
7. Dynamic pages automatically update without manual intervention, unlike static HTML

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/10- Week 9/1- Week 9 Lecture|CS50 Week 9 Lecture - Flask Web Development]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/10- Week 9/2. Shorts/2- AJAX|AJAX - CS50 Short Summary]]
