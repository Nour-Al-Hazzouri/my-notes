# Week 3: The Transport and Application Layers

## Introduction

The **Transport Layer** allows network traffic to be directed to specific applications, while the **Application Layer** enables these applications to communicate in ways they understand. These layers build upon the lower layers (Physical, Data Link, and Network) to complete the networking model.

## The Transport Layer

### Multiplexing and Demultiplexing

**Multiplexing** is the ability of network nodes to direct traffic toward different receiving services. **Demultiplexing** is the same concept on the receiving end—taking traffic aimed at a node and delivering it to the proper service.

This process works through **ports**:
- Ports are 16-bit numbers (0-65535) that direct traffic to specific services
- Network services listen on specific ports for incoming requests
- Ports are written after the IP address with a colon (e.g., 10.1.1.100:80)
- This notation is called a **socket number** or **socket port**

Examples of common ports:
- HTTP (web browsing): Port 80
- FTP (file transfer): Port 21

### TCP Segment Structure

Just as IP datagrams are encapsulated within Ethernet frames, **TCP segments** are encapsulated within IP datagrams. A TCP segment consists of:

1. **TCP header** containing:
   - **Source port** (16 bits): High-numbered ephemeral port for outgoing connections
   - **Destination port** (16 bits): Port of the intended service
   - **Sequence number** (32 bits): Tracks position in a sequence of segments
   - **Acknowledgement number** (32 bits): Indicates the next expected segment
   - **Data offset field** (4 bits): Indicates TCP header length
   - **TCP control flags** (6 bits): Special instructions for handling segments
   - **TCP window** (16 bits): Range of sequence numbers before acknowledgement required
   - **Checksum**: Ensures data integrity
   - **Urgent pointer field**: Indicates important segments (rarely used)
   - **Options field**: For complex flow control (rarely used)
   - **Padding**: Zeros to ensure data payload starts at expected location

2. **Data section**: Contains the payload for the Application Layer

### TCP Control Flags and Connection Establishment

TCP uses six control flags to manage connections:

1. **URG (Urgent)**: Indicates the segment is urgent (rarely used)
2. **ACK (Acknowledged)**: Indicates the acknowledgement number field should be examined
3. **PSH (Push)**: Requests immediate delivery of buffered data to the application
4. **RST (Reset)**: Indicates connection problems requiring reset
5. **SYN (Synchronize)**: Used when establishing a connection
6. **FIN (Finish)**: Indicates no more data to send

#### Three-Way Handshake

TCP connections are established through a **three-way handshake**:
1. Client sends SYN flag ("I want to establish a connection")
2. Server responds with SYN/ACK flags ("I acknowledge and agree to connect")
3. Client sends ACK flag ("I acknowledge your acknowledgement")

This establishes a **full-duplex** connection where data can flow in both directions.

#### Four-Way Handshake

TCP connections are terminated through a **four-way handshake**:
1. Device ready to close sends FIN flag
2. Other device sends ACK flag
3. Other device sends FIN flag when ready to close
4. First device sends ACK flag

### TCP Socket States

A **socket** is the instantiation of an endpoint in a potential TCP connection. Common socket states include:

- **LISTEN**: Ready for incoming connections (server-side only)
- **SYN_SENT**: Synchronization request sent (client-side only)
- **SYN-RECEIVED**: SYN request received, SYN/ACK sent (server-side only)
- **ESTABLISHED**: Connection working, data exchange possible
- **FIN_WAIT**: FIN sent, waiting for ACK
- **CLOSE_WAIT**: Connection closed at TCP layer but application still holds socket
- **CLOSED**: Connection fully terminated, no further communication possible

### Connection-Oriented vs. Connectionless Protocols

#### TCP (Transmission Control Protocol)
- **Connection-oriented** protocol
- Establishes a connection before data transmission
- Uses acknowledgments to ensure all data is properly transmitted
- Higher overhead but more reliable

#### UDP (User Datagram Protocol)
- **Connectionless** protocol
- No connection establishment or acknowledgments
- Lower overhead but less reliable
- Suitable for applications where some data loss is acceptable (e.g., streaming video)

### Port Categories

The Internet Assigned Numbers Authority (IANA) divides ports into three categories:

1. **System Ports** (1-1023)
   - Reserved for common applications and system processes
   - Require elevated privileges on most systems

2. **User Ports** (1024-49151)
   - Registered for specific services
   - Can be used by regular user processes

3. **Ephemeral (Dynamic) Ports** (49152-65535)
   - Used for temporary client connections
   - Automatically assigned when needed

### Firewalls

**Firewalls** are devices that block traffic meeting certain criteria. Transport layer firewalls are configured to:
- Block traffic on specific ports
- Allow traffic on other ports
- Protect network services from unauthorized access

Example: A firewall might allow traffic on port 80 (web) but block traffic on other ports to protect a server.

## The Application Layer

The Application Layer contains protocols that allow applications to communicate across networks. These protocols are standardized across application types and are contained in the payload section of TCP segments.

### The Application Layer and the OSI Model

While the TCP/IP model combines session, presentation, and application functionality into a single Application Layer, the OSI Model separates them:

1. **Session Layer** (Layer 5)
   - Facilitates communication between applications and the Transport Layer
   - Handles the handoff of unencapsulated data to applications

2. **Presentation Layer** (Layer 6)
   - Ensures data is understood by applications
   - Handles data formatting, compression, and encryption

3. **Application Layer** (Layer 7)
   - Contains protocols for specific applications
   - Interfaces directly with end-user applications

---
**Previous**: [[Education/Courses/Coursera/Google IT Support/Course 2/1- Weeks/Week 2|Week 2: The Network Layer]] | **Next**: [[Education/Courses/Coursera/Google IT Support/Course 2/1- Weeks/Week 4|Week 4: Network Services]]
