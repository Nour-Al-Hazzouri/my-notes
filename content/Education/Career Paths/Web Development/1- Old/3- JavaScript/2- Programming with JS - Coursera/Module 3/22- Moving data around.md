# JSON: Moving Data Around

This document explains JSON (JavaScript Object Notation), its purpose as a data interchange format, and the rules for properly formatting JSON data.

## Introduction to JSON

JSON is a lightweight data interchange format based on JavaScript objects, developed by Douglas Crockford around 2001. It has become the dominant format for data exchange on the web for two primary reasons:

1. It's very lightweight with syntax similar to stringified JavaScript objects
2. It's easily handled in JavaScript code since JSON is essentially JavaScript

## JSON vs. XML

Before JSON, XML (Extensible Markup Language) was the most common data interchange format. JSON gained popularity over XML because:

- It requires fewer characters to describe data
- It has better interoperability with JavaScript
- It's easier to parse and generate

## JSON as a Subset of JavaScript

JSON is considered a subset of JavaScript, meaning:
- All JSON code is valid JavaScript
- Not all JavaScript code is valid JSON
- JSON follows stricter formatting rules than JavaScript

## Practical Applications

JSON serves as both a data interchange format and a file format:

- Websites can download JSON data from third-party services (e.g., stock prices)
- The downloaded stringified JSON data can be converted to JavaScript objects
- Applications can then access specific properties within these objects
- Processed data can be stringified back to JSON for sending to servers

Example workflow:
```
Server JSON data → Parse to JS object → Process data → Stringify to JSON → Send back to server
```

## JSON Formatting Rules

JSON must follow specific formatting rules to be properly parsed:

### Supported Data Types

JSON can only include:

1. **Primitive values**:
   - Strings (must use double quotes)
   - Numbers
   - Booleans
   - null

2. **Complex values**:
   - Objects
   - Arrays

### Syntax Requirements

- Object keys must be double-quoted strings: `"propertyName"`
- Properties must be comma-delimited in both objects and arrays
- Strings must use double quotes: `"value"`
- Numbers use standard JavaScript number syntax: `5`, `10`, `1.2`
- Booleans are represented as: `true` and `false`
- Null is represented as: `null`

### Unsupported Data Types

The following JavaScript data types cannot be included in JSON:
- Functions (operation silently fails)
- BigInt (throws TypeError)
- Undefined
- Symbols
- Maps and Sets

## JSON Examples

### Simple Object
```json
{"color":"red"}
```

### Nested Object
```json
{"color":"red", "nestedObject": { "color": "blue" }}
```

### Array
```json
["one", "two", "three"]
```

### Array of Objects
```json
[{ "color": "blue" }, {"color": "red"}]
```

These examples demonstrate how JSON can represent both simple and complex data structures while adhering to its formatting rules.

---
**Previous**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/21- Exercise- Web page content update|Capturing and Processing User Input in JavaScript]] | **Next**: [[Education/Career Paths/Web Development/1- Old/3- JavaScript/2- Programming with JS - Coursera/Module 3/23- JavaScript Object Notation-JSON|23- JavaScript Object Notation-JSON]]
