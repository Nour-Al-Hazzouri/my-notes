Course 2:

Week 1:

- Course Introduction:
    
    A Protocol is a defined set of standards that computers must follow in order to communicate properly
    
    Computer networking is the name we’ve given to the full scope of how computers communicate with each other
    
      
    
- The TCP/IP Five-Layer Network Model: Bottom to top
    1. First Layer: physical layer
        
        Everything that interconnects computers physically
        
    2. Second Layer: Data Link Layer
        
        First protocols are introduced, it is responsible for finding a common way for devices to communicate
        
    3. Third Layer: Network Layer:
        
        Allows different networks to communicate with each other through routers
        
        IP is the heart of the internet and most smaller networks around the world
        
        Network software is usually divided into client and server categories, we could possibly use 2 network software, with each software’s request reaching the correct destination, that’s because of the 4th layer
        
    4. Fourth Layer:
        
        While the network layer delivers data between 2 individual nodes, the transport layer sorts out which client and server programs are supposed to get that data
        
    5. Fifth layer:
        
        Known as the application layer, there are lots of protocols at this layer and they are application specific
        
          
        

The Basics Of Networking:

- Cables:
    
    Cables connect different devices to each other, allowing data to be transmitted over them, most cables nowadays can be split into 2 types: Copper and Fiber
    
      
    
- Copper:
    
    The most common nowadays are the copper cables, they are made of multiple pairs of copper wires inside a plastic insulator, device communicate binary data across these copper wires by changing the voltage between 2 ranges, the system at the receiving end is able to interpret these voltage changes as binary 1s and 0s, which can be later transformed into forms of data
    
    The most common forms of copper twisted-pair cables used in networking are Cat5, Cat5e, and Cat6 cables, the way they are twisted can change entirely their transfer rate, and how resistant they are for external interference, the Cat5 is mostly replaced by Cat5e because this older model causes Crosstalk, crosstalk is when an electrical pulse on one wire is accidentally detected on another wire, which causes an error
    
      
    
- Fiber:
    
    It contains individual optical fibers, which are tiny tubes made out of glass about the width of a human hair, fiber cables uses pulses of light, which represents the 1s and 0s of the transmitted data
    
      
    
- Hubs and Switches:
    
    1. Hubs:
    
    A Hub is a physical layer device that allows for connections from many computers at once
    
    A collision domain is a network segment where only one device can communicate at a time, if multiple systems try sending data at the same time, the electrical pulses sent across the cable can interfere with each other, this causes these systems to wait for a quiet period before they try to send data
    
    1. Switches:
    
    A network switch is a layer 2 so it actually inspects the content of the ethernet protocol data being sent around the network and send it only to the device it is intended to be sent for
    
    1. Routers:
    
    A router is a device that knows how to forward data between independent networks, a router is a layer 3 device, , a router can inspect IP data to determine where to send things
    
    Routers have tables on how to route traffic between many networks around the world, the most common type of routers is the home or office ones, it mostly forward traffic from the home or office to the ISP (Internet Service Provider) which has a core router that has more detailed routing table that holds the work
    
    Core routers usually have to deal with much more complexity in making decisions on where to send traffic, it has many other connections to many other networks, routers share data with each other via a protocol called BGP or Border Gateway Protocol, this protocol lets them learn about the most optimal paths to forward traffic
    
      
    
- Servers and Clients:
    
    A server is something that provides data to something requesting that data, the thing requesting that data is called a Client, a node could be a server or a client, individual computer programs running on the same node can be servers or clients to each other, almost all nodes are both at some point of time, sometimes we refer to an email server as an email server even though it is a client of a DNS server, the reason is because the reason of existence of it is to serve data to clients, to sum up, a server is anything that provides data to clients
    
      
    

The Physical Layer:

The physical layer consists of devices and means of transmitting bits across multiple computer networks

1s and 0s are sent through the wire cables with a process called modulation

Modulation is a way of varying the voltage of this charge moving across the cable

Line Coding is a way to allow devices on either end of a link to understand that an electrical charge in a certain state is a zero, and in another state is one

  

- Twisted Pair Cabling and Duplexing:
    
    it features a pair of wire cables twisted together, these pairs act as a single conduit for information, and their twisted nature helps protect against EMI and crosstalk from their neighboring pairs
    
    the number of used pairs depends on the technology being used, but most cables nowadays allow duplex communication, the concept that information can flow in both directions across the cable
    
    Simplex communication means the process is unidirectional, which means the data is being sent in one direction
    
    the way networking cables ensure that duplex communication possible is by reserving one or two pairs for communicating in one direction then they use the other one or 2 pairs for communicating in the other direction, so devices on the either side of he link can communicate at the same time, this is known as full-duplex
    
    If a problem happens and only 1 of the 2 can communicate at a time, it becomes half-duplex
    
      
    
- Network Ports and Patch Panels:
    
    The most common plug is known as an RJ45 (Registered Jack 45)
    
    Most Network Ports have 2 small LED’s:
    
    1. Link LED:
        
        The link light is power on when the cable is properly connected to 2 devices that are both powered on
        
    2. Activity LED:
        
        The activity light would flash when data actively transmitted across the cable, before this light was connected to the 1s and 0s but today because networks are so fast it only means there is traffic or not
        
        A Patch Panel is a device containing many network ports, additional cables are then generally ran from a patch panel to switches or routers to provide network access to the computers of other end of these cables
        
          
        

The Data Link Layer:

- Ethernet and MAC Addresses:
    
    Ethernet as a protocol solved the collision problem by using a technique known as carrier sense multiple access with collision detection (CSMA/CD)
    
    CSMA/CD is used to determine when the communications channels are clear, and when a device is free to transmit data, The way this works is that when no data is currently being transmitted on the segment, a node will send data normally, when another node tries to send data in the same time, when a collision happens, both nodes will stop sending data and each node will wait a random amount of time before trying to send data again
    
    MAC Address is a globally unique identifier attached to an individual network interface, it’s a 48-bit number normally represented by 6 groupings of 2 hexadecimal numbers, it is used to make sure the data sent by a node is received by the correct device
    
    Octet in computer networking, any number that can be represented by 8 bits
    
    A MAC address is split into 2 sections, the first is the Organizationally unique identifier (OUI), the last 3 digits are how the manufacturer like as long as they use each digit once to make it globally unique
    
      
    
- Unicast, Multicast, and Broadcast:
    
    A unicast transmission is always meant for just one receiving address
    
    If the least significant bit in the first octet of a destination address is set to zero, it means that ethernet frame is intended for only the destination address
    
    If the least significant bit in the first octet of a destination address is set to one, it means you’re dealing with multicast frame, it means it is sent to all the nodes on the local network, the difference it that it will be accepted or discarded by each device depending on criteria aside from their own hardware MAC Address
    
    An Ethernet broadcast address is all F’s (FF:FF:FF:FF:FF:FF), broadcasts are used so that devices can learn more about each other
    
      
    
- Dissecting an Ethernet Frame:
    
    A data packet is an all-encompassing term that represents any single set of binary data being sent across a network link,
    
    An Ethernet Frame is a highly structured collection of information presented in a specific order
    
    Ethernet Frame Parts:
    
    ![[image1.png]]
    
    1. Preamble:
        
        8 bytes (64 bits) long, and can be split into 2 sections, the first 7 bytes are a series of alternating 1s and 0s, these act partially as a buffer between frames and can also be used by the network interfaces to synchronize internal clocks they use, to regulate speed at which they send data
        
        The last byte is called SFD or Start frame delimiter, this signals to a receiving device that the preamble is over and that the actual frame contents will now follow
        
    2. Destination MAC Address
    3. Source MAC Address
    4. The Ether-type Field:
        
        16 bits long and used to describe the protocol of the contents of the frame
        
        instead of the Ether-type we can find what’s known as the VLAN header (4 bytes), it indicates that the frame itself is what’s called a VLAN frame
        
        If the VLAN header is present, the Ether-Type field follows it, the VLAN stands for Virtual LAN, it is a technique to let you have multiple logical LANs operating on the same physical equipment
        
        Any frame with a VLAN tag will only be delivered out of a switch interface configured to relay that specific tag, this way you can have a single physical network that operates like it’s multiple LANs, VLANs are usually used to segregate different forms of traffic, so you might see a company’s IP Phones operating on 1 VLAN, while Desktops working on another
        
    
    5 .Data Payload:
    
    In networking terms this is actual data transported, which is everything that isn’t a header
    
    It can be 46-1500 bytes long, this contains all the data from higher layers such as IP, transport and application layers that are actually being transmitted
    
    1. Frame Check Sequence:
        
        4-byte (or 32- bit) number that represents a Checksum value for the entire frame
        
        This checksum value is calculated by performing what’s known as a cyclical redundancy check against the frame, a Cyclical Redundancy Check (CRC) is an important concept for data integrity, and is used all over computing, not just network transmissions, this is basically a mathematical transformation that uses polynomial division to create a number to a larger set of data, every time a CRC check is performed, we should end up with the same number
        
    
      
    

Week 2: The network layer:

The Network Layer:

- IP Address:
    
    An IP Address is a 32-bit number usually made by 4 Octets in the decimal number form, 8 bits of data or a single octet can represent any number from 0 to 255, the IP Address’s format is known as Dotted Decimal Notation (DDN)
    
    IP Addresses are distributed in large sections to various organizations and companies instead of being determined by hardware vendors
    
    Ip Addresses are more hierarchical and easier to store data about than physical addresses are
    
    IP Addresses should be given through a process called DHCP (Dynamic Host Configuration Process)
    
    An IP Address Assigned this way is known as Dynamic IP Address, the opposite of this is known as static IP Address, in most cases static IP Addresses are reserved for servers and network devices, while dynamic IP Addresses are reserved for clients, though in some situations this might not be true
    
      
    
- IPV4 Datagrams And Encapsulation:
    
    An IP Datagram is a highly structed series of fields that are strictly defined
    
    An IP datagram is made out of 32 bits, from 0 to 31 bits.
    
    An IP Datagram is made out of:
    
    ![[image2.png]]
    
    1. Version Field (4 bits):
        
        Indicates version of IP (IPV4-IPV6)
        
    2. Header length (4 bytes):
        
        Indicates how long the entire header is (Almost always 20 bytes in IPV4 (Minimum length))
        
    3. Service Type Field (8 bits):
        
        Can be used to specify details about quality of service, or QoS technologies, there are services that allow the router make decisions about which IP Datagram might be more important than the other
        
    4. Total Length (16-31 bits):
        
        Indicates to total length of the IP Datagram it’s attached to
        
    5. Identification Field (16 bits):
        
        A 16-bit number that’s used to group messages together
        
        The maximum number of an IP Datagram is the largest number you can represent with 16 bits, 65,535
        
        If the total amount of data that needs to be sent is larger than what can fit in a single datagram, the IP layer needs to split this data up into many individual packets
        
        When this happens, the identification field is used so that the receiving end understands that every packet with the same value in that field is part of the same transmission
        
    6. Flags (3 bits):
        
        Used to indicate if a datagram is allowed to be fragmented, or to indicate that the datagram has already been fragmented
        
    7. Fragment Offset field (12 bits):
        
        The process of taking a single IP datagram and splitting it up into several smaller datagrams
        
        Though most networks operate with the same settings in terms of what IP Datagrams sizes are allowed, sometimes this can be configured differently, if a datagram have to pass from a network allowing a larger datagram size to a network with a smaller size, the datagram would have to be fragmented to smaller ones
        
        The fragmentation offset field contains values used by the receiving end to take all the parts of a fragmented packet and put them back together at the correct order
        
    8. Time to live field (TTL) (8 bits):
        
        Indicates how many router hops a datagram can traverse before it’s thrown away, when the value of TTL reaches 0, it will be discarded
        
        The reason of this is that when there is a misconfiguration and the datagram enters an endless loop, it wouldn’t last forever trying to reach it’s destination
        
    9. Protocol Field (8 bits):
        
        Contains data about what transport layer protocol is being used (TCP-UDP…)
        
    10. Header Checksum Field:
        
        A checksum of the contents of the entire IP Datagram header
        
        Since the TTL field changes every time a hop happens, the checksum field also changes at each hop
        
    11. Source IP Address
    12. Destination IP Address
    
    11. IP Options Field:
    
    An optional field and is used to set special characteristics for datagrams primarily used for testing purposes
    
    1. Padding Field:
        
        A series of zeros used to ensure the header is the correct total size
        
    
    ![[image3.png]]
    
    The entire contents of an IP Datagram are encapsulated as the payload of an Ethernet Frame
    
    Another demonstration:
    
    Note that the following demonstration is about UDP, in our example we mean to show both TCP and UDP.
    
    ![[image4.png]]
    
    Another demonstration:
    
    ![[image5.png]]
    
    The IP Datagram is between the ethernet frame footer and header, the header:
    

![[image6.png]]

- IPV4 Address Classes:
    
    IP addresses can be split into 2 sections, the network ID and the host ID
    
    The address class system is a way of defining how the global IP address space is split up
    
    Address classes types:
    
    1. Class A:
    
    First octet used as the network ID, last 3 are the host ID
    
    1. Class B”
    
    First 2 octets are used as the network ID, last 2 are the host ID
    
    1. Class C:
    
    First 3 octets used as the network ID, last 1 is the host ID
    
    ![[image7.png]]
    
    Each network represent a network of vastly different size, a class A network has only the first octet belong to the network ID meaning that the rest of the octets are available for the hosts making 16,777,216 available addresses
    
    A class c network has the first 3 octets used for network ID so only the last octet is used for the host ID which means that only 254 addresses available
    
    If the very first bit of an IP address is 0, it belongs to class A, if it is 10 it belongs to class B, if it is 110 it belongs to class C
    
    It is also needed to mention that if the first octet is a number between 0-127, it is class A, class B is from 128 to 191, class C is from 192 to 223
    
    Class D and class E aren’t that important, class d is to send 1 IP datagram to a whole network at once and class e is for testing purposes
    
      
    
- ARP (Address Resolution Protocol):
    
    ARP is a protocol used to discover the hardware address of a node with a certain IP Address
    
    ARP table is a list of IP Addresses and the MAC addresses associated with them
    
    A computer asks for a computer’s MAC Address through IP Address by sending an ARP message which is all F’s, the response comes as an ARP response with the MAC Address, it might also store the MAC address in it’s local ARP table
    
    ARP table entries generally expire after a short amount of time to ensure changes in the network are accounted for
    
      
    

Subnetting:

- Subnetting:
    
    Subnetting is the process of taking a large network and splitting it up into many individual and smaller subnetworks or subnets
    
    A gateway router specifically serves as the entry and exit path to a certain network
    
    Since a class A network can have 16M+ hosts, that is a large number for devices to connect to a network, this is where subnetting comes in, with subnets you can split your large network up into many smaller ones, these individual subnets will all have their own gateway routers serving as the ingress and egress point for each subnet
    
      
    
- Subnet Masks:
    
    Without subnet, an IP Address would be formed of Network ID and host ID, but with subnet a portion of the host ID would be taken and used for subnet ID
    
    Core routers only care about the network ID and send datagram to the appropriate gateway router of the network, then send it the destination machine or next router in the path, the host ID is used by the last router to deliver the datagram to the recipient machine
    
    Subnet IDs are calculated via Subnet Masks, 32-bit numbers that are written out as 4 octets in decimal, to understand it we compare it to an IP Address
    
    IP Address: 9.100.100.100, in binary:
    
    ![[image8.png]]
    
    Subnet Mask is a number that consists of 2 parts : the mask itself (only 1s) and the rest (only 0s)
    
    ![[image9.png]]
    
    Where there is only 1s tells us what to ignore when computing a host ID, part with only 0s tells us what to keep, subnet mask we used: 255.255.255.0 (24 1s+ 8 0s)
    
    The purpose of the mask is to tell the router what part of an IP address is the subnet ID
    
    For this IP the network ID is the first octet, the remaining octets that have under them strings of 1s are the subnet ID, the numbers in the remaining octets that have corresponding 0s are the host ID
    
    The size of a subnet is defined by it’s subnet mask, by the subnet mask 255.255.255.0 we know that the last octet only is available for the host ID regardless of what size the network and subnet IDs are
    
    a single 8-bit number can represent 256 different numbers, or more specifically, the numbers 0-255, but numbers used are from 1-254 only (0 is not used and 255 used as a broadcast address for the subnet)
    
    255.255.255.224 is a subnet mask that has 27 1s and 5 0s so it doesn’t use an entire octet as a host ID, which means 5 bits of host ID space or a total of 32 addresses
    
    Another way to write subnet masks in a short way:
    
    IP Address : 9.100.100.100 | Subnet Mask: 255.255.255.224
    
    We can write it this way: 9.100.100.100/27 (since the subnet mask is formed of 27 0s)
    
- Basic Binary Math:

> There aren’t different kinds of numbers, numerals are universal, there are only different notations how to reference them, mostly because humans have 10 fingers they made 10 individual numbers (010), this is base 10
> 
> For a PC’s CPU it is easier to think when using only 2 numbers, 0 and 1 (Binary-Base 2)
> 
> Just like base 10 we can also in base 2 count any number in existence, in base 10 we count upwards until numbers run out then we add another column and we add from the beginning
> 
> Counting in Binary is exactly the same, but the difference is that we only have 2 numbers, so when we run out of number we also add another column
> 
> Illustration:
> 
> ![[image10.png]]
> 
> There is a trick we can use to see how many decimal can be represented by a certain number of bits
> 
> If you have 8 bits, it is 28=256
> 
> This trick doesn’t only work for binary, it works for any number system, only the base changes, in base 10 for example, 10 to the power of 2 is 100 which is how many number there is (099)
> 
> Addition in binary is simpler than other bases, there’s only 4 possibilities:
> 
> 0+0=0|0+1=1|1+0=1|1+1=10
> 
> Addition (+) is what’s known as operator, and there are many operators computer uses to make calculations: two of the most important operators are or and AND
> 
> In computer logic a 1 represents true and a 0 represents false, the way or operator works is that it looks at each digit, and if either of them is true, the result is true
> 
> OR: X OR Y= Z ‘if either X or Y is true, then Z is true; otherwise, it’s false.’
> 
> AND: 1 AND 1 = 1, so only if both X and Y are true, Z is true
> 
> Subnet Mask is a way for a computer to use AND operators to determine if an IP address exists on the same network, this means that the host ID is also known since it will be anything left out, example:
> 
> ![[image11.png]]
> 
> Now the computer can compare the IP address with his own network ID to see if it exists on the same network

- CIDR(Classless Inter-Domain Routing):

> With the traditional subnetting, the network ID was 8-bit for class A network, 16 bit for class B network, and 24-bits for class c Network
> 
> ![[image12.png]]
> 
> Class C networks would have been so little for businesses, but class B networks would have been a lot
> 
> CIDR expands on the concept of subnetting by using subnet masks to demarcate networks
> 
> To demarcate something is to set something off
> 
> Demarcation point is to describe where one network or system ends and another one begins
> 
> In the previous module we used network ID, subnet ID and host ID to deliver a datagram to the correct location, but with CIDR the network ID and the subnet ID are combined into 1, CIDR is when we use the / discussed before
> 
> This / notation is also known as CIDR notation, CIDR abandons the concept of address classes entirely allowing an address to be defined by 2 individual ID’s
> 
> Let’s use 9.100.100.100 with subnet mask of 255.255.255.0 (9.100.100.100/24) as an example, in a world where we no longer care about the address of this IP, all we need is what the network mask tells us to determine the network ID, in this case that would be 9.100.100 and the host ID remains the same
> 
> This act allow for a network to be in different sizes and not only tied to a specific class
> 
> So routers now only need to know 1 entry in routing table to deliver traffic to the addresses instead of 2
> 
> You also get more host ID, because first you lose 2 hosts (256-2=254) ,in address classes if you needed 2 networks of this size you would have 254+254=508, but /23 is 2 to the nine so 512-2=510, illustration:
> 
> ![[image13.jpeg]]

Routing:

- Basic Routing Concepts:

> A router is a device that sends traffic depending and the destination address of that traffic
> 
> Basic Routing:
> 
> 1. The router receives a data packet from one of it’s interfaces
> 2. It examines the destination IP
> 3. Looks up IP destination network in routing table
> 4. Forwards traffic to destination

---
**Previous**: [[Education/Courses/Coursera/Google IT Support/Course 2/1- Weeks/Week 6|Week 6: Troubleshooting and the Future of Networking]]
