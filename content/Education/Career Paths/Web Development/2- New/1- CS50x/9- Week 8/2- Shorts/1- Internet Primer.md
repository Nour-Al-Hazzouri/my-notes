# Week 8 Short: Internet Primer

## Overview
This video provides a basic guide to understanding the internet, serving as a primer before diving into web programming. CS50 is transitioning from C programming in the command line to creating websites using technologies like PHP, HTML, CSS, and JavaScript.

## Culture Shift in Programming
- **Previous Focus**: Writing C programs that run from the command line
  - User interaction limited to terminal window
  - Programs executed with command-line input
  - Sometimes persistent data remains after execution
  
- **New Direction**: Creating websites for user interaction
  - Moving beyond command-line interfaces
  - Using web programming languages (PHP, HTML, CSS, JavaScript)
  - Users will interact through web browsers instead of terminals

## IP Addresses

### What is an IP Address?
- **Definition**: A unique identifier for your computer on a network
- **Analogy**: Just like every home or office has a unique mailing address, every computer needs a unique address to send and receive data
- **Purpose**: Ensures information is sent from and received to the correct location
- IP stands for **Internet Protocol**

### IPv4 Addressing Scheme
- **Structure**: 32-bit unique address for each computer
  - Provides approximately 4 billion unique addresses
  - Represented as four clusters of 8 bits each
  - Shown in decimal format for human readability (not hexadecimal)

- **Format**: w.x.y.z
  - Each value ranges from 0 to 255
  - 8 bits can hold 256 distinct values (0-255)
  - Four clusters × 8 bits = 32 bits total

- **Examples**:
  - Generic: `123.45.67.89`
  - Harvard addresses start with: `140.247.x.x`

### The IPv4 Problem
- **Issue**: Only ~4 billion addresses available
- **Reality**: 
  - World population exceeds 7 billion people
  - Most people in developed countries have multiple devices
  - Each device needs a unique identifier
  
- **Temporary Solutions**:
  - Private IP addresses
  - Network Address Translation (NAT)
  - Multiple devices share a single public IP through routing

### IPv6: The Long-term Solution
- **Structure**: 128-bit addresses
  - Provides 340 billion billion billion billion addresses
  - Eight clusters of 16 bits each
  - Represented in hexadecimal format

- **Format**: Eight groups of four hexadecimal digits
  - Example: `2001:4860:4860:0000:0000:0000:0000:8844` (Google's IPv6)
  - Shorthand: Consecutive zeros can be replaced with `::`
  - Same address abbreviated: `2001:4860:4860::8844`

- **Implementation Status**:
  - Known problem for a long time
  - Only recently being phased in
  - "We're good at anticipating problems, but bad at dealing with them"

## DHCP (Dynamic Host Configuration Protocol)

### Purpose
- Automatically assigns IP addresses to devices
- Eliminates need for manual configuration

### How It Works
1. DHCP server sits between your computer and the internet
2. Has a bank of valid IP addresses to distribute
3. When you connect to a network, it assigns you an available address
4. Before DHCP, system administrators manually assigned addresses

## DNS (Domain Name System)

### The Problem DNS Solves
- IP addresses are hard to remember (e.g., `192.168.1.0`)
- People prefer human-readable names (e.g., `google.com`, `cs50.harvard.edu`)
- Need a translation system between numbers and names

### How DNS Works
- **Function**: Translates IP addresses to human-comprehensible domain names
- **Analogy**: "The yellow pages of the web"
- Maps all ~4 billion IPv4 addresses to memorable names
- Also handles IPv6 address translation

### DNS Structure
- **Not Centralized**: No single repository of all DNS records
- **Distributed System**: 
  - Local DNS servers handle regional lookups
  - Large DNS servers aggregate local information
  - Similar to libraries collecting all local yellow pages
  
- **Updates**: 
  - Small-scale DNS systems update their records
  - Large aggregators depend on these updates for accuracy

### Example DNS Translations
- `74.125.202.138` → Could map to a Google server
- IPv6 example: Google's Irish website has a specific IPv6 address
- Not all server names are intuitive (internal naming conventions)

## Access Points and Routers

### What Are Access Points?
- The network you choose to connect to (e.g., "home", "work")
- Generalizes several networking concepts:
  - Routers
  - Switches
  - Access points (technical definition)
  - Sometimes modems

### How Routers Work with Private Addresses
1. **Router gets public IP**: The router has the actual internet-facing IP address
2. **Devices get private IPs**: Your devices connect to the router with private addresses
3. **Router acts as traffic cop**: 
   - Directs outgoing traffic from devices to the internet
   - Routes incoming traffic to the correct device
   - All devices share the router's public IP address

### Home vs. Business Networks
- **Home Networks**: 
  - Router, switch, access point, modem often combined in one device
  - Simply called a "router"
  
- **Business/University Networks (WANs)**:
  - Separate devices for different functions
  - Multiple access points for coverage
  - Allows network to scale and grow
  - Access points mounted around campus connect to central routers

## The Internet: An Interconnected Network

### What the Internet Really Is
- **Not a separate entity or cloud**
- **Definition**: Interconnected networks ("inter-net")
- Collection of all individual networks connected together
- Your home network + my network + everyone else's networks

### How Networks Connect
1. Local networks (homes, schools, businesses) exist independently
2. These networks connect to each other
3. Services (Google, Facebook, etc.) exist on these networks
4. Information travels through chain of networks to reach destination

### The Internet as Protocols
- **Internet = Set of rules** defining how networks communicate
- Not a physical thing but a system of protocols
- Enables two-way communication between all connected networks
- Future videos will explore specific protocols (TCP/IP, HTTP, etc.)

## Key Takeaways

### Network Stack Between You and Internet
1. **DHCP Server**: Assigns your IP address
2. **DNS Server**: Translates domain names to IP addresses
3. **Access Point/Router**: Connects you to the broader network
4. **The Internet**: All these local networks talking to each other

### Important Concepts
- Every device needs a unique identifier (IP address)
- IPv4 is running out; IPv6 is the future
- DNS makes the web human-friendly
- Routers enable private networks to share public IPs
- The internet is just networks talking to networks using agreed-upon rules

### Looking Forward
- This high-level understanding is sufficient for web programming
- Not a networking course - details are abstracted
- Future focus: protocols that make the internet work
- Will enable understanding of web technologies and programming

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/1- Week 8 Lecture|Lecture 8 - HTML, CSS, and JavaScript]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/2- Shorts/2- IP|Week 8 Short: IP (Internet Protocol)]]
