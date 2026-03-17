# Week 6: Troubleshooting and the Future of Networking

## Introduction to Troubleshooting

Network troubleshooting relies on two key concepts:
- **Error-detection**: The ability for a protocol or program to determine that something went wrong
- **Error-recovery**: The ability for a protocol or program to attempt to fix errors

## Verifying Connectivity

### ICMP and Ping

**Internet Control Message Protocol (ICMP)** is used to communicate network issues between devices. An ICMP packet contains:
- **Type field** (8 bits): Specifies the message type
- **Code field**: Provides a more detailed reason for the message
- **Checksum** (16 bits): Ensures data integrity
- **Rest of header** (32 bits): Used by specific types/codes for additional data
- **Data section**: Contains the IP header and first 8 bytes of the offending packet

While ICMP was primarily developed for automated communication between network devices, some tools allow human operators to use it for troubleshooting:

**Ping** is a utility available on almost all operating systems that sends ICMP Echo Request messages. If the destination is reachable, it responds with ICMP Echo Reply messages. To use ping, simply type `ping` followed by a domain name or IP address in the command line.

### Traceroute

**Traceroute** is a utility that discovers the path between two nodes and provides information about each hop along the way. It works by manipulating the Time To Live (TTL) value:
- First packet: TTL=1 (reaches only the first router)
- Second packet: TTL=2 (reaches the second router)
- Process continues until the destination is reached

For each hop, traceroute sends three identical packets and displays the round-trip time for each.

Related tools include:
- **mtr** (Linux/MacOS): Long-running traceroute that shows changes over time
- **pathping** (Windows): Similar functionality to mtr

### Testing Port Connectivity

To test connectivity at the transport layer (specific ports), you can use:
- **netcat** (Linux/MacOS)
- **Test-NetConnection** (Windows): Use with the `-Port` parameter to test specific port connectivity

## DNS Troubleshooting

### Name Resolution Tools

**nslookup** is a common tool for DNS lookup troubleshooting. When executed with a hostname, it shows:
- Which server was used to perform the request
- The resolution result (IP address)

### Public DNS Servers

Public DNS servers are freely available for anyone to use:
- **Level 3 Communications**: 4.2.2.1 through 4.2.2.6
- **Google**: 8.8.8.8 and 8.8.4.4

Most public DNS servers are available globally through anycast technology.

Best practices:
- Only use DNS servers run by reputable companies
- Use your ISP's DNS servers for normal operations (outside of troubleshooting)

### DNS Registration and Expiration

Registering a domain involves:
1. Creating an account with a registrar
2. Searching for an available domain name
3. Agreeing on price and registration length

Transferring a domain requires:
1. The recipient registrar generates a unique verification string
2. You add this string to your DNS records (usually as a TXT record)
3. After verification, ownership transfers to the new registrar or owner

### Hosts Files

**Hosts files** were the original method for correlating network addresses with names. They are flat files containing network addresses followed by corresponding host names (e.g., `1.2.3.4 webserver`).

Modern operating systems still include hosts files, primarily for the loopback address:
- `127.0.0.1 localhost` (IPv4)
- `::1 localhost` (IPv6)

The **loopback address** allows a device to send traffic to itself, bypassing all network infrastructure.

Security note: Hosts files are a common target for malware that redirects user traffic.

## Cloud Computing

### Cloud Concepts

**Cloud computing** is an approach where computing resources are provisioned in a shareable way, allowing many users to get what they need when they need it.

Key technologies:
- **Hardware Virtualization**: Allows a single physical machine (host) to run multiple virtual instances (guests)
- **Hypervisor**: Software that manages virtual machines and provides them with a virtual operating platform indistinguishable from actual hardware

Cloud types:
- **Public Cloud**: Large cluster of machines run by another company
- **Private Cloud**: Used by a single corporation, typically hosted on its own premises
- **Hybrid Cloud**: Combination where sensitive operations run on private cloud while less-sensitive servers use public cloud

### Service Models

Cloud computing offers various service models:

- **Infrastructure as a Service (IaaS)**: Provides virtualized computing resources
- **Platform as a Service (PaaS)**: Provides an execution environment for applications without worrying about underlying infrastructure
- **Software as a Service (SaaS)**: Centrally hosted and managed software licensed to users

### Cloud Storage

Cloud storage systems work through contracts between customers and hosts to keep data secure, accessible, and available.

## IPv6

### IPv6 Addressing

IPv6 was developed to address the limitation of IPv4's address space:
- IPv4: 32-bit addresses (~4.2 billion addresses)
- IPv6: 128-bit addresses (approximately 340 undecillion addresses)

IPv6 addresses are written in hexadecimal notation and can be shortened using two rules:
1. Remove leading zeros from any group
2. Replace consecutive groups of zeros with double colons (::) once per address

Special IPv6 address ranges:
- **2001:0db8::** - Reserved for documentation
- **FF00::** - Used for multicast
- **FE80::** - Used for link-local unicast addresses
- **::1** - Loopback address (equivalent to 127.0.0.1 in IPv4)

IPv6 addressing uses:
- 64 bits for network ID
- 64 bits for host ID
- No address classes; subnetting done via CIDR

### IPv6 Headers

The IPv6 header is simpler than IPv4 and contains:
- **Version field** (4 bits): Defines IP version in use
- **Traffic class field** (8 bits): Defines traffic type and priority
- **Flow label field** (20 bits): Used for quality of service decisions
- **Payload length field** (16 bits): Defines data payload length
- **Next header field**: Points to optional headers (allows for header simplification)
- **Hop limit** (8 bits): Equivalent to TTL in IPv4
- **Source address** (128 bits)
- **Destination address** (128 bits)

### IPv6 and IPv4 Coexistence

Since the entire internet cannot transition from IPv4 to IPv6 simultaneously, several coexistence mechanisms exist:

- **IPv4-mapped address space**: IPv6 addresses that correlate to IPv4 addresses (begin with 80 zeros and 16 ones, followed by the 32-bit IPv4 address)

- **IPv6 tunnels**: Encapsulate IPv6 traffic within IPv4 datagrams for transmission across the IPv4 internet
  - IPv6 tunnel servers at each end handle encapsulation and decapsulation
  - **IPv6 tunnel brokers**: Companies that provide tunneling endpoints

---
**Previous**: [[Education/Courses/Coursera/Google IT Support/Course 2/1- Weeks/Week 5|Week 5: Connecting to the Internet]] | **Next**: [[Education/Courses/Coursera/Google IT Support/Course 2/1- Weeks/Weeks Summarize|Weeks Summarize]]
