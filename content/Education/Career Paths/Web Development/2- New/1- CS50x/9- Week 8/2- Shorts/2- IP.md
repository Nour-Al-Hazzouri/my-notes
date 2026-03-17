# Week 8 Short: IP (Internet Protocol)

## Overview
This video discusses the Internet Protocol (IP), the first fundamental protocol that comprises the internet. IP dictates how information is transmitted from point A to point B across networks, and agreeing to follow this protocol is a condition of joining the internet network.

## The Internet as an Interconnected Network

### Basic Network Model
- The internet is several networks woven together, agreeing to communicate with one another
- IP is the "somehow" that enables this communication
- Networks talk to each other through agreed-upon protocols

### The Scalability Problem

#### Small Scale (3 Networks)
- With three networks, direct connections between all networks might be feasible
- Each network has a physical wired connection to the other two
- This creates a triangle of connections
- At this scale, full connectivity is manageable

#### Medium Scale (6 Networks)
- Each network would need 5 connections (to every other network)
- Total connections required: 15 wired connections
- This quickly becomes expensive and impractical
- Physical wires across oceans cost millions of dollars each

#### The Reality
- The internet consists of far more than 6 networks
- We cannot afford to wire each network to every other network
- Need another solution for universal connectivity
- Must minimize the number of physical connections while maintaining the ability to communicate

## Routers: The Solution to Scalability

### What Routers Do
- Act as intermediary devices between networks
- Contain **routing tables** that dictate packet direction
- Make decisions based on IP address patterns
- Example routing logic:
  - "If IP starts with 4, go this direction"
  - "If IP starts with 12, go that direction"

### Recursive Nature of Routing
- Similar to the concept of recursion in C programming
- Router philosophy: "I won't connect you directly to your destination, but I'll move you one step closer"
- Each router solves a small piece of the problem
- Defers the rest of the journey to the next router

### How Routing Tables Work

#### Example Network Configuration
- Network 1: All IP addresses start with `1.xxx.xxx.xxx`
- Network 2: All IP addresses start with `2.xxx.xxx.xxx`
- And so on for Networks 3-6

#### Sample Routing Table Entry
For Network 1's Router:
- `!1` (not 1) → Pass to router (anything not starting with 1)
- Router decisions:
  - `1.xxx` → Go to Network 1 (green arrow)
  - `2.xxx` → Go to Network 2 (purple arrow)
  - `3,4,5,6.xxx` → Pass to next router (red arrow)

### Trade-offs of Using Routers

#### Advantages
- Dramatically reduces infrastructure cost
- Makes the network scalable
- Allows for network growth without exponential wiring
- More sustainable than direct connections

#### Disadvantages
- Slight reduction in speed (multiple hops vs. direct connection)
- Trade-off deemed acceptable given cost savings

## Example: Message Transmission Using IP

### Scenario
- Sender: IP address `1.208.12.37` (on Network 1)
- Receiver: IP address `5.188.109.14` (on Network 5)
- Networks 1 and 5 are not directly connected

### Step-by-Step Routing Process
1. **Origin (Network 1)**: Message starts at sender's IP
2. **First Router**: 
   - Sees destination starts with `5`
   - Not directly connected to Network 5
   - Routes toward general direction
3. **Second Router**:
   - Checks: Not Network 1 or 2
   - Destination is `5.xxx`
   - Routes to path handling 3,4,5,6 networks
4. **Third Router**:
   - Connected to Networks 3 and 6
   - Can't reach Network 5 directly
   - Knows next router handles 4 and 5
5. **Final Router**:
   - Connected to Networks 4 and 5
   - Delivers to Network 5
6. **Destination**: Network 5 delivers to specific recipient

## Packet Fragmentation

### Why Fragment Data?
- **Cost Efficiency**: Large chunks are expensive to move through the network
- **Traffic Management**: Big blocks can slow down entire network (like a truck blocking highway lanes)
- **Flexibility**: Small packets can navigate around congestion (like small cars maneuvering)

### Benefits of Packets
1. **Reduced Network Congestion**: Many small pieces instead of one large block
2. **Error Recovery**: If a packet is dropped:
   - Only need to resend that small packet
   - Not the entire message
3. **Network Responsiveness**: System can handle multiple transmissions simultaneously
4. **Fault Tolerance**: Catastrophic failure affects only small portions

### How IP Handles Packets
- Takes large data (email, file transfer, web request)
- Breaks it into many small pieces
- Sends each piece separately through the network
- Pieces may take different paths to destination

## Connectionless Protocol

### Definition
- IP is a **connectionless protocol**
- No necessarily defined path from sender to receiver
- Different packets can take different routes

### Multiple Path Options

#### Enhanced Routing Tables
Example modification to allow multiple paths:
- Router can have multiple options for same destination
- For IP addresses starting with 4 or 5:
  - Option 1: Route through lower-left router
  - Option 2: Route through right router

#### Benefits of Multiple Paths
- **Network Responsiveness**: Like GPS recalculating around traffic
- **Load Balancing**: Routers maintain "pulse" on local network state
- **Dynamic Routing**: Can choose less congested paths
- **Flexibility**: Not all packets must take the same route

### Analogy: Highway Navigation
- Normal route might be jammed (heavy network traffic)
- Can take "side roads" (alternative paths)
- Might be less efficient normally, but faster when main route congested
- Similar to how GPS apps route around traffic

## What IP Does and Doesn't Do

### What IP Handles
- Getting information from point A to point B
- Breaking information into small packets
- Finding paths through the network
- Basic addressing and routing

### What IP Doesn't Handle
- **No Delivery Guarantee**: IP doesn't ensure packets arrive
- **No Order Preservation**: Packets may arrive out of sequence
- **No Error Correction**: Doesn't handle dropped packets
- **No Program Specification**: Doesn't specify which program receives data

### Need for Additional Protocols
- IP alone is insufficient for complete communication
- Requires complementary protocols
- **TCP (Transmission Control Protocol)** handles:
  - Delivery guarantee
  - Packet ordering
  - Error recovery
  - Program/service specification

## Key Concepts Summary

### Routing
- Routers use tables to direct traffic
- Decisions based on IP address patterns
- Recursive problem-solving approach
- Multiple paths possible for flexibility

### Packets
- Data broken into small chunks
- Each packet routed independently
- Reduces network congestion
- Enables efficient error recovery

### Network Architecture
- Networks connected through routers, not directly
- Trade-off: cost savings vs. slight speed reduction
- Scalable design allows internet growth
- Physical connections minimized

### Protocol Limitations
- IP is foundational but incomplete
- Requires TCP for complete functionality
- Together, TCP/IP enables full internet communication
- Each protocol has specific responsibilities

## Looking Forward
The next video will cover TCP (Transmission Control Protocol), which:
- Guarantees delivery of packets
- Ensures packets arrive in correct order
- Directs data to specific programs/services
- Works in conjunction with IP to enable complete internet communication

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/2- Shorts/1- Internet Primer|Week 8 Short: Internet Primer]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/2- Shorts/3- TCP|Week 8 Short: TCP (Transmission Control Protocol)]]
