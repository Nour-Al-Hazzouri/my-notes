# Week 8 Short: TCP (Transmission Control Protocol)

## Overview
This video discusses TCP (Transmission Control Protocol), which works in conjunction with IP to enable complete internet communication. While IP moves information between machines, TCP directs packets to the correct program/service and guarantees delivery. The two protocols are so interrelated they're typically referred to as TCP/IP.

## Prerequisites
- Understanding of Internet Protocol (IP) is recommended
- IP and TCP are highly interrelated protocols
- Often discussed together as TCP/IP

## What TCP Does

### Primary Functions
1. **Program/Service Direction**: Routes packets to the correct program on the receiving machine
2. **Delivery Guarantee**: Ensures all packets arrive at destination
3. **Packet Ordering**: Maintains proper sequence even if packets arrive out of order
4. **Error Recovery**: Handles lost or dropped packets

### The Need for TCP
- IP only handles machine-to-machine transmission
- Computers run multiple programs and services simultaneously
- Need more than just machine address - need specific program identification
- IP doesn't guarantee delivery or maintain order

## Port Numbers: Identifying Services

### What Are Port Numbers?
- Unique identifiers for specific services, utilities, or programs on a machine
- Combined with IP address to uniquely identify a service on a specific machine
- Formula: **IP Address + Port Number = Unique Service Identifier**

### Standard Port Numbers
Common standardized ports across all computers:

| Service | Port | Description |
|---------|------|-------------|
| FTP | 21 | File Transfer Protocol |
| SMTP | 25 | Email (Simple Mail Transfer Protocol) |
| DNS | 53 | Domain Name System |
| HTTP | 80 | Web browsing (unsecured) |
| HTTPS | 443 | Secure web browsing |

### Why TCP and IP Work Together
- Port number alone is meaningless without machine identification
- IP address identifies the machine
- Port number identifies the specific service
- Together they provide complete addressing

## TCP's Delivery Guarantee System

### Packet Management
TCP provides crucial information about packets:
1. **Total packet count**: How many pieces the data was split into
2. **Packet ordering**: Sequence number for each packet (e.g., "packet 3 of 10")
3. **Assembly instructions**: How to reconstruct the original data

### Handling Out-of-Order Delivery
- IP is connectionless - packets may take different routes
- Packets can arrive in different order than sent
- TCP tracks which packets have arrived
- Reconstructs data in correct sequence regardless of arrival order

## The TCP/IP Process: How It Works

### Step 1: Sending Data
When a program wants to send data:
1. **TCP Layer**:
   - Breaks data into chunks
   - Adds port information (destination service)
   - Adds sequence information (packet X of Y)
   - Wraps this around the data

2. **IP Layer**:
   - Takes TCP-wrapped packets
   - Adds machine addressing information
   - Includes destination IP address
   - Includes return address for responses

### The Layered Structure
Think of it like nested dolls:
- **Core**: The actual data
- **TCP Layer**: Port and sequence information
- **IP Layer**: Machine addressing information

### Step 2: Transmission
- Complete packet (data + TCP + IP layers) sent through network
- Routed through internet using IP protocol
- May take various paths to destination

### Step 3: Receiving Data
When the receiving machine gets a packet:

1. **IP Layer Processing**:
   - Checks IP address: "Is this for me?"
   - If yes, removes IP layer (like cracking an egg)
   - Passes to TCP layer

2. **TCP Layer Processing**:
   - Identifies destination port (which program/service)
   - Notes packet sequence (e.g., "packet 8 of 15")
   - Removes TCP layer
   - Stores data in appropriate position

3. **Final Assembly**:
   - Once all packets received
   - TCP assembles them in correct order
   - Delivers complete data to specified service/port

## Example: Sending an Email

### Scenario Setup
- Small email broken into 4 packets: A, B, C, D
- Email uses port 25 (SMTP)
- Demonstrates complete TCP/IP process

### Packet A Processing
1. **Data**: Chunk A of the email
2. **TCP Wrapping**:
   - Port: 25
   - Sequence: 1 of 4
3. **IP Wrapping**:
   - Destination IP address
   - Return address
4. **Transmission**: Sent through network

### Receiving Out of Order
Example reception sequence:
1. Packet 1 arrives → Stored as first piece
2. Packet 3 arrives → Stored as third piece
3. Packet 4 arrives → Stored as fourth piece
4. Packet 2 is missing!

### Error Recovery Process

#### Detection
- TCP realizes it has packets 1, 3, and 4 of 4
- Packet 2 is missing
- Cannot assemble complete message

#### Recovery Request
1. TCP creates a request for missing packet
2. Request wrapped with TCP and IP layers
3. Uses return address from original packets
4. Sends message: "I'm missing packet 2"

#### Retransmission
- Sender receives error notification
- Only resends the missing packet (#2)
- Doesn't need to resend entire email
- Much more efficient than full retransmission

#### Final Assembly
- Packet 2 arrives
- TCP now has all 4 pieces
- Assembles packets in order: A, B, C, D
- Delivers complete email to port 25 (email service)

## Advantages of TCP's Approach

### Efficiency
- Only retransmit lost packets, not entire message
- Reduces network load
- Faster recovery from errors

### Reliability
- Guarantees all data arrives
- Ensures correct ordering
- Handles network failures gracefully

### Flexibility
- Works regardless of packet arrival order
- Adapts to various network conditions
- Compatible with IP's connectionless nature

## The TCP/IP Partnership

### Division of Responsibilities

**IP Handles:**
- Machine-to-machine routing
- Path finding through networks
- Packet delivery (best effort)
- Network addressing

**TCP Handles:**
- Service/program identification
- Delivery guarantee
- Packet ordering
- Error detection and recovery

### Why They're Discussed Together
- Neither is complete without the other
- IP gets data to the machine
- TCP gets data to the right program
- Together they enable full internet communication

## Technical Details

### TCP Information Bundling
Each TCP segment includes:
- Source port (sender's service)
- Destination port (receiver's service)
- Sequence number
- Acknowledgment number
- Checksum for error detection
- Other control information

### The Assembly Process
1. TCP maintains a buffer for incoming packets
2. Places each packet in correct position based on sequence
3. Tracks which packets have arrived
4. Requests retransmission of missing packets
5. Delivers complete data once all packets received

## Potential Issues and Solutions

### Infinite Loop Prevention
- Concern: What if the retransmission request gets lost?
- Solution: Multiple retry attempts with timeouts
- Eventually gives up if no response
- Error reported to application layer

### Network Congestion
- TCP includes congestion control mechanisms
- Adjusts transmission rate based on network conditions
- Prevents overwhelming the network

## Summary of Key Concepts

### Packet Sequencing
- Each packet numbered (e.g., 3 of 10)
- Allows reconstruction regardless of arrival order
- Essential for data integrity

### Port Numbers
- Identify specific services
- Standardized for common services
- Work with IP addresses for complete addressing

### Error Recovery
- Detects missing packets
- Requests specific retransmissions
- Efficient recovery process

### Layered Architecture
- Data wrapped in TCP information
- TCP wrapped in IP information
- Each layer removed at destination
- Clean separation of concerns

## Conclusion
TCP and IP work hand-in-hand to enable internet communication:
- **IP** provides the highway system (routing between machines)
- **TCP** provides the delivery service (ensuring data arrives complete and in order)
- Together as **TCP/IP**, they form the foundation of internet communication
- This partnership enables reliable data transmission across the global internet

The combination of these protocols allows for:
- Reliable communication across unreliable networks
- Efficient error recovery
- Proper data delivery to specific applications
- The internet as we know it today

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/2- Shorts/2- IP|Week 8 Short: IP (Internet Protocol)]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/2- Shorts/4- HTTP|Week 8 Short: HTTP (Hypertext Transfer Protocol)]]
