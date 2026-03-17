# Week 2: The Network Layer

## IP Addresses

**IP Addresses** are 32-bit numbers typically represented in **Dotted Decimal Notation (DDN)** as four octets in decimal form. Each octet can represent values from 0-255.

Key characteristics of IP addresses:
- Distributed to organizations in large sections rather than determined by hardware vendors
- More hierarchical and easier to manage than physical (MAC) addresses
- Change when connecting from different locations

IP addresses are typically assigned through **Dynamic Host Configuration Protocol (DHCP)**, resulting in a **dynamic IP address**. A **static IP address** is manually configured and remains constant. Static IPs are typically used for servers and network devices, while dynamic IPs are used for clients.

## IPv4 Datagrams and Encapsulation

Under the IP protocol, packets are referred to as **IP Datagrams**. An IP datagram consists of two primary sections:
1. **Header** - Contains routing and identification information
2. **Payload** - Contains the actual data being transmitted

Key header fields include:
- **Version field** (4 bits) - Indicates IP version (typically IPv4)
- **Header length field** (4 bits) - Indicates header size (typically 20 bytes for IPv4)
- **Service Type Field** (8 bits) - Used for Quality of Service (QoS) specifications
- **Total length field** (16 bits) - Indicates the entire datagram size
- **Identification field** (16 bits) - Groups related messages (maximum size: 65,535)
- **Flags and fragment offset** - Control and track packet fragmentation
- **Time To Live (TTL)** (8 bits) - Prevents endless routing loops by limiting router hops
- **Protocol field** (8 bits) - Identifies the transport layer protocol (TCP, UDP)
- **Header checksum** - Verifies header integrity
- **Source and destination IP addresses** (32 bits each)
- **IP Options field** (optional) - For special characteristics or testing
- **Padding field** - Ensures correct header size

**Encapsulation** is the process where an IP datagram becomes the payload of an Ethernet frame. Similarly, the IP datagram's payload contains the entirety of the TCP or UDP section.

## IP Address Classes

IP addresses are divided into **network ID** and **host ID** portions. The **Address Class System** defines how the global IP address space is divided:

- **Class A**: First octet is the network ID (first bit is 0)
  - Range: 0-127
  - Large networks with many hosts (16+ million possible hosts)

- **Class B**: First two octets are the network ID (first bits are 10)
  - Range: 128-191
  - Medium networks (65,000+ possible hosts)

- **Class C**: First three octets are the network ID (first bits are 110)
  - Range: 192-223
  - Small networks (254 possible hosts)

- **Class D**: Used for multicasting (first bits are 1110)
  - Range: 224-239

- **Class E**: Reserved for experimental use (first bits are 1111)
  - Range: 240-255

## Address Resolution Protocol (ARP)

**ARP** discovers the hardware (MAC) address associated with a specific IP address. This is necessary to complete the Ethernet frame header when sending data.

Network devices maintain an **ARP table** listing IP addresses and their associated MAC addresses. When a device needs to send data to an IP address not in its ARP table:
1. It sends a broadcast ARP message to all nodes on the network
2. The device with the matching IP responds with its MAC address
3. The sender stores this information in its local ARP table

ARP table entries expire after a short time to account for network changes.

## Subnetting

**Subnetting** divides a large network into smaller subnetworks (subnets). This is essential for managing large address spaces efficiently.

In a traditional network, core internet routers use the network ID to route messages to the appropriate **gateway router**, which then uses the host ID to deliver data to the correct system. However, large networks (like Class A with 16+ million addresses) are too large for a single router to handle efficiently.

Subnetting allows splitting one network into many smaller ones, each with its own gateway router.

### Subnet Masks

A **subnet mask** is a 32-bit number that determines which portion of an IP address is the network ID, subnet ID, and host ID. It's typically written as four octets in decimal (e.g., 255.255.255.0).

The subnet mask works by:
- Using binary 1s to indicate the network and subnet portions
- Using binary 0s to indicate the host portion

For example, with IP 9.100.100.100 and subnet mask 255.255.255.0:
- The first octet (9) is the network ID (Class A)
- The next two octets (100.100) are the subnet ID
- The last octet (100) is the host ID

The size of a subnet depends on its mask. A subnet mask of 255.255.255.0 allows for 254 usable host addresses (256 total minus network and broadcast addresses).

## CIDR (Classless Inter-Domain Routing)

**CIDR** provides a more flexible approach to IP addressing than the traditional class system. It expands on subnetting by:
- Combining the network ID and subnet ID into one
- Using a slash notation to indicate the number of network bits
- Abandoning the concept of address classes entirely

For example, 9.100.100.100 with subnet mask 255.255.255.0 would be written as 9.100.100.100/24, indicating that the first 24 bits are the network portion.

Benefits of CIDR include:
- More flexible network sizes
- More efficient use of IP address space
- Reduced routing table entries
- Ability to combine address spaces into contiguous chunks

## Routing

**Routing** is how data travels across networks worldwide. A **router** is a network device that forwards traffic based on destination addresses and must have at least two network interfaces.

The basic routing process includes:
1. Router receives a data packet on one of its interfaces
2. It examines the destination IP
3. It looks up the destination network in its routing table
4. It forwards the traffic through the appropriate interface

When forwarding packets, a router:
- Strips away the data-link layer encapsulation
- Examines the IP datagram header
- Creates a new packet with decremented TTL and recalculated checksum
- Encapsulates the new IP datagram in a new Ethernet frame
- Sends the packet out through the appropriate interface

### Routing Tables

Routing tables typically contain four key columns:
1. **Destination Network** - The remote network definition (network ID and subnet mask)
2. **Next Hop** - The IP address of the next router or "directly connected" indication
3. **Total Hops** - The distance to the destination network
4. **Interface** - Which router interface to use for forwarding

### Routing Protocols

Routing protocols fall into two main categories:

**Interior Gateway Protocols** - Used within a single autonomous system:
- **Link-state routing protocols** - Routers advertise the state of each interface link
- **Distance-vector protocols** - Routers share their routing tables with neighbors

**Exterior Gateway Protocols** - Used between autonomous systems:
- Connect different organizations' networks
- Use **Autonomous System Numbers (ASNs)** assigned by IANA
- ASNs are 32-bit numbers represented as single decimal values

## Non-Routable Address Space

**RFC 1918** defined ranges of IP addresses as **non-routable address space** for private use. These addresses:
- Can be used by anyone for internal networks
- Cannot be routed on the public internet
- Allow internal network communication without public IP requirements

The three primary non-routable address ranges are:
1. 10.0.0.0/8
2. 172.16.0.0/12
3. 192.168.0.0/16

These ranges can be routed within an autonomous system using interior gateway protocols but will not be routed by exterior gateway protocols.

---
**Previous**: [[Education/Courses/Coursera/Google IT Support/Course 2/1- Weeks/Week 1|Week 1: Introduction to Networking]] | **Next**: [[Education/Courses/Coursera/Google IT Support/Course 2/1- Weeks/Week 3|Week 3: The Transport and Application Layers]]
