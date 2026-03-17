# Week 4: Network Services

## Domain Name System (DNS)

**DNS** (Domain Name System) is a global, distributed network service that resolves human-readable domain names into IP addresses. This system is essential because:
- Domain names are easier to remember than IP addresses
- IP addresses can change frequently
- Domain names provide stability when underlying infrastructure changes

### DNS Server Types

There are five primary types of DNS servers:

1. **Caching Name Servers**: Store known domain name lookups temporarily
2. **Recursive Name Servers**: Perform full DNS resolution requests
3. **Root Name Servers**: Direct queries to appropriate TLD name servers
4. **TLD Name Servers**: Manage top-level domains (.com, .org, etc.)
5. **Authoritative Name Servers**: Provide definitive information for specific domains

### Name Resolution Process

The process of resolving a domain name into an IP address involves multiple steps:

1. Client queries local caching/recursive name server
2. If not cached, recursive name server contacts a root name server
3. Root name server directs to appropriate TLD name server
4. TLD name server directs to authoritative name server
5. Authoritative name server provides the IP address
6. Result is cached according to TTL (Time To Live) value

DNS primarily uses **UDP** for efficiency (fewer packets than TCP) but falls back to TCP when responses exceed UDP datagram size.

### Resource Record Types

DNS uses various record types to store different kinds of information:

- **A Record**: Maps domain name to IPv4 address
- **AAAA (Quad-A) Record**: Maps domain name to IPv6 address
- **CNAME Record**: Creates domain name aliases
- **MX Record**: Specifies mail servers for a domain
- **SRV Record**: Identifies servers for specific services
- **TXT Record**: Stores descriptive or machine-readable text information
- **PTR Record**: Enables reverse lookups (IP to domain name)

Multiple A records for a single domain enable **Round Robin** load balancing, where each DNS query returns the same IPs but in rotating order.

### Domain Name Structure

A domain name consists of three main parts:

1. **Top-Level Domain (TLD)**: The last part (.com, .org, etc.)
   - Managed by ICANN (Internet Corporation for Assigned Names and Numbers)

2. **Domain**: The second part (e.g., "google" in google.com)
   - Registered by organizations or individuals
   - Must end with a predefined TLD

3. **Subdomain/Hostname**: The first portion (e.g., "www" in www.google.com)
   - Often designates specific hosts or services

These parts together form a **Fully Qualified Domain Name (FQDN)**, which can have up to 127 levels, with each section limited to 63 characters and a total maximum length of 255 characters.

### DNS Zones

**DNS Zones** are hierarchical divisions of the DNS namespace that allow for distributed management:

- Zones don't overlap (e.g., the .com TLD zone doesn't include google.com)
- Allow easier management of large domains by splitting them into smaller zones
- Configured through **Zone Files** that declare all resource records for a zone
- Include **Start of Authority (SOA)** records that declare the authoritative name server
- Support **Reverse Lookup Zones** for resolving IPs to domain names

## Dynamic Host Configuration Protocol (DHCP)

**DHCP** (Dynamic Host Configuration Protocol) automates the configuration of hosts on a network. It provides:
- IP address assignment
- Subnet mask configuration
- Default gateway information
- DNS server addresses
- Other network configuration parameters

### DHCP Allocation Methods

DHCP supports three allocation methods:

1. **Dynamic Allocation**: Assigns IPs from a pool temporarily
2. **Automatic Allocation**: Like dynamic but attempts to assign the same IP to devices based on past assignments
3. **Fixed Allocation**: Maps specific MAC addresses to specific IPs for consistent addressing

### DHCP Discovery Process

The DHCP process involves four steps:

1. **DHCP Discover**: Client broadcasts a discovery message (source: 0.0.0.0, destination: 255.255.255.255) on UDP port 68
2. **DHCP Offer**: Server responds with an IP offer and configuration options
3. **DHCP Request**: Client accepts the offered configuration
4. **DHCP Acknowledgment**: Server confirms the configuration assignment

All configuration provided by DHCP is known as a **DHCP Lease** and includes an expiration time. Clients can release leases when disconnecting from the network.

## Network Address Translation (NAT)

**Network Address Translation (NAT)** is a technique that translates IP addresses between networks. It serves several purposes:
- Preserves limited IPv4 address space
- Provides security through IP masquerading
- Enables multiple devices to share a single public IP

### NAT Operation

NAT works by:
- Gateway rewriting the source IP of outgoing packets
- Maintaining translation information to route responses correctly
- Hiding internal network structure from external networks

This process is known as **IP Masquerading** and provides security by preventing external systems from initiating connections to internal hosts.

### NAT and the Transport Layer

NAT uses several techniques to manage connections:

- **Port Preservation**: Uses the same source port for translation when possible
- **Port Forwarding**: Routes specific destination ports to specific internal hosts
- Random port assignment when conflicts occur

### NAT and Non-Routable Address Space

NAT works with private IP ranges defined in RFC 1918:
- 10.0.0.0/8
- 172.16.0.0/12
- 192.168.0.0/16

These addresses can be used by anyone for internal networks because internet routers won't forward traffic to them. NAT allows devices with these private addresses to access the internet through a shared public IP.

## Virtual Private Networks (VPNs) and Proxies

### VPN Functionality

**Virtual Private Networks (VPNs)** extend private networks across public networks:
- Create encrypted tunnels for secure communication
- Provide virtual interfaces with private network addressing
- Encapsulate entire packets within encrypted payloads
- Often require strong authentication (e.g., two-factor authentication)

VPNs typically work by using the transport layer's payload section to carry an encrypted payload containing an entire second set of packets. This allows remote users to access internal resources as if physically connected to the private network.

### Proxy Services

**Proxy servers** act on behalf of clients to access other services, providing benefits such as:
- Anonymity
- Security
- Content filtering
- Increased performance

A **Reverse Proxy** appears as a single server to external clients but actually represents multiple servers behind it, providing load balancing and security benefits.

---
**Previous**: [[Education/Courses/Coursera/Google IT Support/Course 2/1- Weeks/Week 3|Week 3: The Transport and Application Layers]] | **Next**: [[Education/Courses/Coursera/Google IT Support/Course 2/1- Weeks/Week 5|Week 5: Connecting to the Internet]]
