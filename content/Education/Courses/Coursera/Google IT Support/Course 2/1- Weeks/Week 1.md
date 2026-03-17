# Week 1: Introduction to Networking

## Introduction to Computer Networking

**Computer networking** is the full scope of how computers communicate with each other. A **protocol** is a defined set of standards that computers must follow to communicate properly.

## The TCP/IP Five-Layer Network Model

1. **Physical Layer**
   - Represents the physical devices that interconnect computers
   - Includes specifications for networking cables and connectors
   - Defines how signals are sent over physical connections

2. **Data Link Layer** (Network Interface/Network Access Layer)
   - Introduces the first protocols for communication
   - Defines common ways to interpret signals for device communication
   - **Ethernet** is the most common protocol at this layer
   - Responsible for getting data to nodes on the same network or link

3. **Network Layer** (Internet Layer)
   - Allows different networks to communicate through routers
   - Responsible for getting data through collections of networks
   - **IP** (Internet Protocol) is the core protocol at this layer
   - Enables the creation of internetworks (collections of connected networks)

4. **Transport Layer**
   - Sorts which client and server programs receive data
   - Manages data delivery between individual nodes
   - Ensures data reaches the correct application

5. **Application Layer**
   - Contains numerous application-specific protocols
   - Directly interfaces with software applications

## The Basics of Networking

### Cables

**Copper Cables**:
- Made of multiple pairs of copper wires inside plastic insulation
- Transmit binary data through voltage changes
- Common types: **Cat5**, **Cat5e**, and **Cat6**
- Different categories have varying physical characteristics affecting transfer rates and interference resistance
- **Crosstalk**: when an electrical pulse on one wire is accidentally detected on another wire

**Fiber Optic Cables**:
- Contain individual optical fibers (tiny glass tubes)
- Use pulses of light instead of electrical voltage
- Ideal for environments with electromagnetic interference
- Generally support higher data transfer speeds than copper

### Hubs and Switches

**Hub**:
- Physical layer (Layer 1) device
- Allows connections from many computers simultaneously
- Creates a **collision domain** where only one device can communicate at a time
- All connected devices receive all transmissions
- Less efficient due to network noise and collisions

**Switch** (Switching Hub):
- Data Link layer (Layer 2) device
- Inspects Ethernet protocol data
- Forwards data only to the intended recipient
- Creates separate collision domains for each connection
- More efficient than hubs

### Routers

- Network layer (Layer 3) devices
- Forward data between independent networks
- Inspect IP data to determine routing
- Contain routing tables for directing traffic
- Connect LANs (Local Area Networks) to other networks
- Types:
  - Home/office routers: connect to ISP
  - Core routers: form the backbone of the internet with detailed routing tables
- Use **Border Gateway Protocol (BGP)** to share optimal path information

### Servers and Clients

- **Server**: provides data to requesting clients
- **Client**: requests data from servers
- Nodes can function as both servers and clients depending on the context
- Individual programs on the same node can be servers or clients to each other

## The Physical Layer

The physical layer consists of devices and means of transmitting bits across computer networks.

- **Modulation**: varying voltage to transmit data
- **Line Coding**: interpreting electrical states as binary values

### Twisted Pair Cabling and Duplexing

- **Twisted pair**: pairs of wires twisted together to protect against EMI and crosstalk
- Standard cables have 8 wires (4 twisted pairs)
- Communication types:
  - **Simplex**: unidirectional communication
  - **Half-duplex**: bidirectional but one direction at a time
  - **Full-duplex**: simultaneous bidirectional communication

### Network Ports and Patch Panels

- **RJ45** (Registered Jack 45): most common network connector
- Network ports typically have two LEDs:
  - **Link light**: indicates proper connection
  - **Activity light**: flashes when data is transmitted
- **Patch panels**: organize multiple network connections

## The Data Link Layer

### Ethernet and MAC Addresses

- **Ethernet**: most widely used protocol for sending data across individual links
- Abstracts the physical layer so higher layers don't need to know about hardware
- Uses **CSMA/CD** (Carrier Sense Multiple Access with Collision Detection) to:
  - Determine when communication channels are clear
  - Detect and manage collisions
  - Implement random wait times after collisions

- **MAC Address** (Media Access Control):
  - Globally unique identifier for network interfaces
  - 48-bit number represented by 6 groups of 2 hexadecimal digits
  - Structure:
    - First half: **OUI** (Organizationally Unique Identifier)
    - Second half: manufacturer-assigned unique identifier
  - Ensures data is sent from and received by the correct devices

### Transmission Types

- **Unicast**: transmission to a single recipient
  - Least significant bit in first octet of destination MAC address is 0
  - Sent to all devices on collision domain but processed only by intended recipient

- **Multicast**: transmission to a specific group
  - Least significant bit in first octet of destination MAC address is 1
  - Sent to all nodes on local network
  - Accepted or discarded based on criteria beyond MAC address

- **Broadcast**: transmission to all devices on a LAN
  - Uses broadcast address (FF:FF:FF:FF:FF:FF)
  - Used for devices to learn about each other

### Ethernet Frame Structure

A **data packet** is any set of binary data sent across a network link. At the Ethernet level, these are called **Ethernet Frames**.

Components of an Ethernet Frame:
1. **Preamble** (8 bytes):
   - First 7 bytes: alternating 1s and 0s for synchronization
   - Last byte: **SFD** (Start Frame Delimiter)

2. **Destination MAC Address** (6 bytes)

3. **Source MAC Address** (6 bytes)

4. **Ether-type field** (2 bytes) or **VLAN header**:
   - Describes the protocol of frame contents
   - **VLAN** (Virtual LAN): technique for creating multiple logical LANs on the same physical equipment

5. **Data payload** (46-1500 bytes):
   - Contains actual data from higher layers

6. **Frame Check Sequence** (4 bytes):
   - Checksum value for the entire frame
   - Created using **CRC** (Cyclical Redundancy Check)
   - Ensures data integrity
   - Receiving device performs CRC check and discards corrupted data

---
**Next**: [[Education/Courses/Coursera/Google IT Support/Course 2/1- Weeks/Week 2|Week 2: The Network Layer]]
