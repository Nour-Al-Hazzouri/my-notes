# Week 8 Short: HTTP (Hypertext Transfer Protocol)

## Overview
HTTP is an application layer protocol that dictates how web pages are requested and delivered. Unlike IP and TCP which handle data transmission between machines and programs, HTTP specifies the format and rules for requesting and receiving web content. It's essentially the "rules of engagement" for working with web pages.

## What is HTTP?

### Application Layer Protocol
- Works on top of TCP/IP
- Not about **how** information moves (that's TCP/IP's job)
- About **what format** requests and responses should take
- System of rules for processing received information

### Human Protocol Analogy
- Like social conventions: when someone waves, you wave back
- HTTP: "If you want a web page, format your request like this"
- Similar to formatting a business letter with specific conventions
- Both request and response follow specific formatting rules

## Other Application Layer Protocols

HTTP is just one of many application layer protocols:

| Protocol | Purpose |
|----------|---------|
| FTP | File Transfer Protocol |
| SMTP | Simple Mail Transfer Protocol (sending emails) |
| DDS | Data Distribution Service |
| RDP | Remote Desktop Protocol (remote computer access) |
| XMPP | Jabber/chat services |

Each service expects requests in a specific format and returns responses in a specific format.

## Basic HTTP Communication

### Human-Readable Example
**Human conversation with cats.com:**
- You: "Hey, can I see your home page?"
- cats.com: "Yeah, sure. Here you go."

### HTTP Translation
**Actual HTTP Request:**
```
GET / HTTP/1.1
Host: cats.com
...
```

**What this means:**
- `GET`: The method (requesting data)
- `/`: The resource (homepage, usually omit the slash nowadays)
- `HTTP/1.1`: Protocol version (like saying "I'm speaking English")
- `Host: cats.com`: Where to get the resource from
- `...`: Additional information (who you are, etc.)

### HTTP Response
**Successful response from cats.com:**
```
HTTP/1.1 200 OK
Content-Type: text/html
...
[HTML content follows]
```

**What this means:**
- `HTTP/1.1`: "I also speak HTTP 1.1"
- `200 OK`: "Your request is approved"
- `Content-Type: text/html`: "You're about to receive HTML"
- Bottom of response: The actual HTML content

## When Things Go Wrong

### Failed Request Example
**Requesting non-existent page:**
- Request: "Can I see your cats.html page?"
- Response: "We don't have a cats.html page"

### HTTP 404 Response
```
HTTP/1.1 404 Not Found
Content-Type: text/html
...
[404 error page HTML]
```

**Components:**
- `404 Not Found`: Couldn't find requested resource
- Still returns HTML (usually a styled 404 page)
- Example: Cute cats with sad faces on cats.com's 404 page

## HTTP Request Line

### Structure
```
METHOD request-target HTTP-version
```

### Components Explained

#### Method
- **GET**: Most common, requesting data (CS50 primary focus)
- **POST**: Another option for sending data (not covered in detail)

#### Request Target
- The specific page/resource on the host's server
- Examples: `/`, `/cats.html`, `/images/photo.jpg`

#### HTTP Version
- Almost always `HTTP/1.1`
- `HTTP/1.0` exists but rarely used anymore

### Complete Resource Specification
- **Host** + **Request Target** = Complete resource location
- Example: `www.cats.com` + `/cats.html` = `www.cats.com/cats.html`

### Request Line Analogy
- Like writing "Dear [Name]" at the start of a letter
- Establishes the communication protocol and intent
- First thing transmitted in HTTP request

## HTTP Status Codes

### Categories and Common Codes

#### Success (200s)
**200 OK**
- Everything is good
- Valid request, valid response
- Delivered exactly what was requested
- Usually silent (user doesn't see "200 OK")

#### Redirections (300s)
**301 Moved Permanently**
- Page is at a new location forever
- Browser automatically redirects
- Response includes new location
- User typically doesn't see this

**302 Found**
- Page temporarily moved
- Won't permanently change browser behavior
- User might occasionally see this
- Page will eventually return to original location

#### Client Errors (400s)
**401 Unauthorized**
- Trying to access restricted page
- Haven't logged in yet
- "We can probably satisfy this request after you log in"
- Common on profile pages, work intranets

**403 Forbidden**
- Doesn't matter if you're logged in
- Resource exists but you cannot access it
- Internal files not meant for outside access
- "I cannot give this to you"

**404 Not Found**
- File doesn't exist on server
- "I would like to help but I can't"
- Most commonly seen error

#### Server Errors (500s)
**500 Internal Server Error**
- Generic server failure
- Doesn't specify what went wrong
- Server's fault, not yours
- General catch-all error

**503 Service Unavailable**
- Server temporarily cannot handle requests
- Service is down or overloaded

**504 Gateway Timeout**
- Page loads and loads, then gives up
- Server wanted to execute request
- Something on server side caused timeout

## Developer Tools Demo

### Accessing Developer Tools
- Built into modern browsers
- Shows normally hidden HTTP information
- Chrome: Press F12
- Navigate to "Network" tab

### Example 1: Google.com Request
**Observations:**
- Multiple 200 OK responses
- Simple Google request triggers many other requests
- Browser makes additional requests on your behalf
- Status codes visible but not shown on main page

### Example 2: Historical Facebook (thefacebook.com)
**Background:**
- Facebook originally at www.thefacebook.com
- Eventually acquired facebook.com domain

**Expected Result:**
- 301 Moved Permanently response
- Browser automatically redirects to facebook.com

**Actual Network Activity:**
1. Request to thefacebook.com
2. **301 Moved Permanently** response
3. **307 Internal Redirect** follows
4. Final destination: www.facebook.com

### Key Insights from Developer Tools
- Status codes happen even if invisible to users
- Modern browsers handle redirects automatically
- Network tab reveals the HTTP conversation
- Useful for debugging and understanding web requests

## Important Concepts

### Protocol Conventions
- HTTP defines exact request format
- Servers expect specific structure
- Responses follow defined patterns
- Standardization enables global web communication

### Layered Architecture
1. **Physical Layer**: Hardware connections
2. **IP Layer**: Machine-to-machine routing
3. **TCP Layer**: Program-to-program, guaranteed delivery
4. **HTTP Layer**: Web page request/response format

### Request-Response Cycle
1. Client formats request according to HTTP
2. Request sent via TCP/IP
3. Server processes request
4. Server formats response according to HTTP
5. Response sent back via TCP/IP
6. Client processes response

## Summary

### What HTTP Is
- Application layer protocol
- Rules for web page requests/responses
- Format specification, not transmission method
- Enables standardized web communication

### What HTTP Isn't
- Not responsible for data transmission (that's TCP/IP)
- Not handling routing or delivery
- Just formatting and processing rules

### Key Components
- **Request Line**: Method, target, version
- **Status Codes**: Indicate request outcome
- **Host Specification**: Combined with target for complete address
- **Content Type**: Describes response data format

### Practical Applications
- Every web page request uses HTTP
- Status codes help diagnose issues
- Developer tools reveal HTTP conversations
- Understanding HTTP helps with web development

### The Complete Picture
- **IP**: Gets data to the right machine
- **TCP**: Gets data to the right program, ensures delivery
- **HTTP**: Formats web requests and responses properly
- Together: Enable the World Wide Web as we know it

This protocol stack allows billions of devices to request and serve web pages reliably and consistently across the global internet.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/2- Shorts/3- TCP|Week 8 Short: TCP (Transmission Control Protocol)]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/2- Shorts/5- HTML|Week 8 Short: HTML (HyperText Markup Language)]]
