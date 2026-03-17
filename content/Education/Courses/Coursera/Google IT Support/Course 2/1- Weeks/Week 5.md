# Week 5: Connecting to the Internet

## Broadband Connections

### What is Broadband?

**Broadband** refers to any internet connection that isn't dial-up. These high-speed connections enable faster data transmission and more reliable internet access.

### T-Carrier Technologies

Originally invented by AT&T to transmit multiple phone calls over a single link, T-Carrier technologies were later adapted for data transmission:

- **T1**: The first T-carrier specification, capable of transmitting data at 1.544 Mb/s (equivalent to 24 simultaneous phone calls at 64 Kb/s each)
- **T3**: Combines 28 T1 lines through multiplexing, achieving a total throughput of 44.75 Mb/s

### Digital Subscriber Lines (DSL)

**DSL** technology utilizes twisted-pair copper phone lines to transmit data at frequencies that don't interfere with normal voice calls, allowing simultaneous voice and data transmission on the same line.

Key characteristics:
- Uses **DSLAMs** (Digital Subscriber Line Access Multiplexers) instead of traditional modems
- Establishes long-running connections (active whenever the DSLAM is powered on)
- Point-to-point connection through a central office (CO)

Common types:
- **ADSL** (Asymmetric Digital Subscriber Line): Provides faster download speeds than upload speeds
- **SDSL** (Symmetric Digital Subscriber Line): Offers equal download and upload speeds

### Cable Broadband

**Cable broadband** utilizes the coaxial cables used for cable television to deliver internet access. It operates on frequencies that don't interfere with television broadcasts.

Key characteristics:
- **Shared broadband technology**: Multiple users share bandwidth until reaching the ISP's core network
- Uses **cable modems** at the consumer end
- Connects to the **CMTS** (Cable Modem Termination System) which links to the ISP's core network
- Bandwidth may fluctuate based on neighborhood usage

### Fiber Connections

Fiber optic technology uses glass or plastic fibers to transmit data as light pulses, offering the highest speeds and reliability.

Various implementations are described as **FTTX** (Fiber To The X):
- **FTTN** (Fiber To The Neighborhood): Fiber extends to a cabinet serving multiple users, with copper or coax for the final stretch
- **FTTB** (Fiber To The Building): Fiber extends to an individual building, with copper used inside
- **FTTH** (Fiber To The Home): Fiber extends directly to individual residences
- **FTTP** (Fiber To The Premises): Alternative term encompassing both FTTH and FTTB

Instead of a modem, fiber connections use an **Optical Network Terminator (ONT)** that converts data between fiber protocols and traditional network protocols.

## Wide Area Networks (WANs)

### WAN Technologies

A **Wide Area Network (WAN)** acts as a single network while spanning multiple physical locations. WANs typically require an ISP connection to transmit data between sites.

Key components:
- **Demarcation point**: Where the organization's network ends and the ISP's network begins
- **Local loop**: Connection between the demarcation point and the ISP's regional office
- **Core network**: The ISP's main infrastructure connecting to the internet at large

WANs use various data link layer protocols instead of Ethernet to transport data between sites.

### Point-to-Point VPNs

A **Point-to-Point VPN** establishes a secure tunnel between two sites. Unlike traditional VPNs:
- The connection is managed by network devices at either end
- Users don't need to establish individual VPN connections
- Provides secure communication across public networks while appearing as a direct connection

## Wireless Networking

### Introduction to Wireless Technologies

Wireless networks operate according to the **IEEE 802.11** standards, which define the physical and data link layers for wireless communication.

Key concepts:
- **Frequency bands**: Sections of the radio spectrum designated for specific communications (commonly 2.4GHz and 5GHz for Wi-Fi)
- **Wireless access points**: Devices that bridge wireless and wired portions of a network

### 802.11 Data Frame Structure

The wireless data frame contains several fields:
- **Frame control field** (16 bits): Contains subfields describing how the frame should be processed
- **Duration field** (2 octets): Specifies the total frame length
- **Address fields** (four total):
  - Source address: Origin of the frame
  - Destination address: Intended recipient
  - Receiver address: MAC address of the access point receiving the frame
  - Transmitter address: MAC address of the device transmitting the frame
- **Sequence control field** (16 bits): Tracks frame ordering
- **Data payload**: Contains data from higher protocol layers
- **Frame Check Sequence (FCS)**: Ensures data integrity

### Wireless Network Configurations

Wireless networks can be configured in several ways:
- **Ad-hoc networks**: Nodes communicate directly with each other without supporting infrastructure
- **WLANs** (Wireless Local Area Networks): Use one or more access points as bridges between wireless and wired networks
- **Mesh networks**: Hybrid approach combining aspects of both ad-hoc and WLAN configurations

### Wireless Channels

**Channels** are smaller sections of the overall frequency band used by wireless networks. They help address collision domain issues by separating transmissions.

Key characteristics:
- Typically 1 MHz in width
- Need buffer between frequencies to prevent overlap
- Available channels may vary by country due to regulatory restrictions

### Wireless Security

Several security protocols protect wireless networks:
- **WEP** (Wired Equivalent Privacy): Early encryption technology with low security (40-bit key)
- **WPA** (Wi-Fi Protected Access): Improved security with 128-bit key
- **WPA2**: Current standard with stronger 256-bit encryption

Additional security measures include **MAC filtering**, which restricts connections to specific trusted devices based on their hardware addresses.

### Cellular Networking

**Cellular networking** operates over radio waves on specific frequency bands reserved for cellular transmissions.

Key concepts:
- Built around the concept of **cells** (coverage areas)
- Each cell is assigned a specific frequency band
- Neighboring cells use non-overlapping frequency bands to prevent interference
- Cell towers function similarly to access points, connecting mobile devices to the network

---
**Previous**: [[Education/Courses/Coursera/Google IT Support/Course 2/1- Weeks/Week 4|Week 4: Network Services]] | **Next**: [[Education/Courses/Coursera/Google IT Support/Course 2/1- Weeks/Week 6|Week 6: Troubleshooting and the Future of Networking]]
