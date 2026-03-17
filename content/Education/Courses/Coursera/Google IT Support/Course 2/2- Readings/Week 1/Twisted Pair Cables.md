# Twisted Pair Cables

## Introduction

**Twisted pair cables** are the most commonly used Ethernet cables in business and home networks. They consist of pairs of copper wires twisted together to reduce interference. These cables connect network devices, transmit data, and can also supply telephone and television services to buildings.

## Evolution and Advantages

Originally, telephone and early data cables used two parallel copper wires (one for transmitting, one for receiving), which were susceptible to various types of interference. Engineers discovered that twisting the wire pairs together reduced noise on the lines.

Twisted pair Ethernet cables are widely used in Local Area Networks (LANs) because they:
- Offer multiple levels of protection against electromagnetic interference (EMI), radio frequency interference (RFI), and crosstalk
- Provide low-cost options suitable for home users and small businesses
- Are thin, lightweight, and flexible, making them easy to install and move
- Have suitable transmission range for short-distance connections inside buildings
- Support frequency ranges capable of transmitting both data and telephone/voice communications

## Types of Twisted Pair Cables

Modern twisted pair Ethernet cables use four pairs of color-coded copper wires, with each colored pair (one solid and one striped) twisted together. The main categories include:

### By Shielding Type

- **Unshielded Twisted Pair (UTP)**: The most common and least expensive type, offering basic protection against interference. Widely used in home and business networks.

- **Shielded Twisted Pair (STP)**: Used in environments with significant EMI and RFI. Features braided aluminum and/or copper shielding around the twisted pairs beneath the outer jacket.

- **Foiled Twisted Pair (FTP)**: Uses a thin foil shield wrapped around the bundle of twisted pairs for protection against interference.

- **Shielded with Foiled Twisted Pair (SF/FTP)**: Combines multiple protection methods, with both braided and foiled shields. May also include individual shields around each twisted pair. Used in industrial environments with high levels of interference.

### By Wiring Configuration

#### Straight-Through Cables

**Straight-through cables** (also called patch cables) are the primary type used in computer networks. They typically connect:
- Computers to hubs or switches
- Routers to hubs or switches
- Servers to switches

Identifying characteristics:
- Both ends have identical wire arrangements (one-to-one pattern)
- The color and stripe order of the twisted pairs are in the same positions at both ends
- Uses the T568B wiring scheme on both ends

Wiring configuration:
- Computers and routers use:
  - Pins 1 & 2: Orange wires for sending data
  - Pins 3 & 6: Green wires for receiving data
- Hubs and switches use:
  - Pins 1 & 2: Green wires for sending data
  - Pins 3 & 6: Orange wires for receiving data

Networks using 100Base-T standards (common in home networks) typically don't use the blue and brown wire pairs. Gigabit Ethernet networks may use these additional pairs for Power over Ethernet (PoE).

#### Crossover Cables

**Crossover cables** are used to connect two similar computing devices directly to each other without an intermediary device. Common applications include:
- Connecting an IT administrator laptop directly to an enterprise machine (server, switch, router, hub)
- Connecting two switches, two hubs, two routers, or two PCs
- Performing updates, repairs, and administrative tasks

Identifying characteristics:
- The ends have different wire arrangements
- Orange and green wires swap positions between the two ends
- One end uses T568B wiring scheme, the other uses T568A

Wiring configuration:
- Endpoint 1:
  - Pins 1 & 2: Green wires for sending data
  - Pins 3 & 6: Orange wires for receiving data
- Endpoint 2:
  - Pins 1 & 2: Orange wires for sending data
  - Pins 3 & 6: Green wires for receiving data

The blue and brown wire pairs are typically not used in crossover cables.

## Modern Developments

Most new enterprise devices now include **Auto Medium Dependent Interface Crossover (Auto-MDI/MDIX)** technology, which automatically detects Ethernet connection types and selects the correct wires for sending and receiving data. This technology effectively replaces the need for crossover cables in modern network environments, though crossover cables may still be found in older networks.
