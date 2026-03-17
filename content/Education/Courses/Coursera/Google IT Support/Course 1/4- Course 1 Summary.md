# Course 1: Technical Support Fundamentals

---

## Week 2: Hardware

### The Modern Computer

- **Programs and hardware**:
  - **External Data Bus (EDB)** are wires that interconnect the parts of the computer
    - 0 = no voltage, 1 = voltage
    - Sizes can be 8 to 64 bits
  - **Registers** in a CPU are where the data is stored to work with after
    - Each command would be stored in a register (ex. 1+1=2, 1 is in a register and 1 is in a register and 2 is in a register)
  - **MCC (Memory Controller chip)** is a bridge between the CPU and the RAM

- **Address Bus** connects the CPU to the MCC and sends the location of the data
  - The MCC gets the data from the address in the RAM
  - Then data is sent from MCC to CPU through EDB

- The CPU knows the set of instructions ended by the **clock wire** in his internal clock that keeps its operations in sync

### Components

- **CPU**:
  - The 2 current types of socket type: **LGA (Land Grid Array)** and **PGA (Pin Grid Array)**
  - In the LGA socket pins come out of the motherboard and the size may vary
  - In the PGA the pins are located on the CPU itself

- **DRAM (Dynamic RAM)** stores bit on a microscopic capacitor (charge or discharge by 1 or 0)
  - Those semiconductors are on a chip on the RAM
  - **SDRAM (Synchronous Dynamic RAM)** are synchronized to the system's clock speed which means faster RAM

- **Motherboard**:
  - **Chipset** is made out of 2 chips:
    - The **Northbridge** that interconnects RAM, video cards
    - **Southbridge** that maintains I/O like HDD and USB devices
  - In modern CPU's northbridge is integrated in the CPU so no northbridge chipset is present

### Starting It Up

- **BIOS**:
  - The CPU doesn't know how to read the instructions of basic devices like mouses or keyboards, which is why we use services or drivers
  - The CPU doesn't know there are devices it can talk to which is why it connects to the BIOS
  - The **BIOS** is software that helps initialize the hardware in our computer and gets our OS up and running

---

## Week 3: Operating Systems

### What's an Operating System

- **Remote connection and SSH**:
  - **SSH (Secure Shell)** is a protocol to access a computer from another
  - For Linux **OpenSSH** is the best program to use SSH
  - On Windows we can use **PuTTY**
  - Windows has **RDP (Remote Desktop Protocol)** built-in, we can also use PuTTY

- On Linux we can use SSH by going to the terminal and typing `ssh 'username'@'destination ip address'`
  - If a messages shows type y then enter
  - For more security use SSH authentication key
- On Windows we can use PuTTY as an exe, we can use shell too by typing `putty.exe -ssh 'username'@'ip address' 'port'`

### Components of an Operating System

- OS is formed of 2 parts: 
  - **Kernel space** (Process, memory, file, I/O Manager)
  - **User space** (Applications)

### Files and File Systems

- 3 main components of handling files on our OS: 
  - **Data**
  - **Metadata**
  - **File System**

- **File System**: type to storage, most common for Windows NTFS
- **File Data**: Data saved on HDD in form of blocks, not 1 big piece
- **Metadata**: information about file

### Process Management

- **Kernel** manages the resources to be used by all the user's processes
- The CPU process processes 1 by 1 during time slices
- The CPU work on 1 process at a time so fast that it seems it's all done the same time

### Memory Management

- **VRAM** is a part of the storage treated as RAM
- When a process is launched the data of the program is stored in VRAM as chunks called **pages**
- These pages are sent to RAM when are used
- The allocated space for VRAM is called **Swap Space**

### I/O Management

- When the kernel loads the drivers it manages the transfer of data between the devices and allows intercommunication

### OS: User Space

- To interact with the OS we can use 2 ways: 
  - **CLI** (Command Line Interface)
  - **GUI** (Graphical User Interface)
- Learning how to use commands is very important beside knowing GUI, some tasks can only be completed through commands

### The Boot Process

1. Power On button
2. BIOS POST
3. Boot Device selected
4. Devices checked for bootloader
5. Bootloader executed which will execute more complex programs
6. OS loaded, Kernel loades, Kernel maganges Computer's resources and loads the drivers
7. Essential system processes and user space items are launched

---

## Week 4: Networking

### What is Networking

- The internet is just an interconnection of computers around the world, these interconnections are called **networks**
- Clients don't connect directly to the internet, instead they connect to a network run by an **internet service provider** or **ISP**
- The ISP connects millions of computers together in one network, they also connect to other networks and other ISPs
- These other networks connect to the networks of Google, Reddit, and universities
- Together they form one giant network of computers called the internet

### Networking Hardware

- Ways of connecting computers to networks:
  - **Ethernet**
  - **WIFI**
  - **Fiber Optic**: beams of light

- A **network stack** is a set of hardware or software that provides the infrastructure for a computer

### Language of the Internet

- **IP** is responsible for the delivery of the packets to the right computers, while the **TCP** delivers information from one packet to another

### The Web

- When we want to navigate to a website, we would type in a URL
- A **URL** or a **Uniform Resource Locator**, is just a web address to locate the website

### Limitations to the Internet

- **Network Address Translation (NAT)** lets organizations use one public IP address and many private IP addresses within the network
- This means that it helps organize between the public IP address which is used by the world, and the IP Addresses used by the company

---

## Week 5: Software

### Introduction to Software

- **What is Software**: Coding is translating from one language to another
- **Scripting** is coding in a scripting language, scripts are mainly used to perform a single or limited range task
- **Programming** is coding in a programming language, programming languages are special languages that software developers use to write instructions for computers to execute

---

## Week 6: Troubleshooting

### Steps of Troubleshooting

- **Ask questions**: Troubleshooting is the ability to diagnose and resolve a problem
- **Isolate the problem**: Root cause is the main factor that's causing a range of issues
- **Follow the cookie crumbs**: Ask about when the problem started
- **Start with the quickest steps first**

### Troubleshooting Pitfalls to Avoid

- Don't repeat the same steps to same problem without getting enough info
- Not finding the root cause

> **Note**: Customer service will not have a shortcut
