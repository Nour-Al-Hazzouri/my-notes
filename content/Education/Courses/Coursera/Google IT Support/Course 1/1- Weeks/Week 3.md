# Week 3: Operating System

## Remote Connection Methods

### SSH (Secure Shell)
- **Definition**: Protocol for securely accessing one computer from another
- **Components**: 
  - SSH client on connecting computer
  - SSH server (background process) on remote machine
- **Authentication Methods**:
  - Username/password
  - Public/private key pairs (more secure)
- **Linux Implementation**: OpenSSH program
- **Connection Process**:
  - Format: `ssh username@ip_address`
  - First-time connections require host verification
  - Known hosts are saved for future connections

### Windows Remote Connections
- **PuTTY**: Free, open-source SSH client for Windows
  - GUI interface or command line usage
  - Command format: `putty.exe -ssh username@ip_address port`
  - PLINK (PuTTY Link): Command-line tool included with PuTTY
- **Remote Desktop Protocol (RDP)**:
  - Microsoft's solution for Windows-to-Windows connections
  - Client: Microsoft Terminal Services Client (mstsc.exe)
  - Setup: Enable remote connections in system settings
  - Cross-platform clients available for Linux and macOS

### Other Connection Methods
- **VPN (Virtual Private Network)**: Connects to private networks over the internet

## Operating System Components

### Two Main Parts
- **Kernel Space**: Core system that interacts directly with hardware
- **User Space**: Everything outside the kernel that users interact with

### Kernel Functions
1. **File Management**:
   - Organizes files in directories/folders
   - Implements file systems for data storage and retrieval
   
2. **Process Management**:
   - Controls program execution order
   - Allocates resources to processes
   - Enables multitasking through process scheduling
   - Uses time slices to allocate CPU execution time
   - Manages process creation and termination

3. **Memory Management**:
   - Optimizes available RAM
   - Implements virtual memory (combination of RAM and HDD space)
   - Uses pages to transfer data between storage and RAM
   - Allocates swap space on hard drive for virtual memory

4. **I/O Management**:
   - Loads and manages hardware drivers
   - Controls data transfer between devices
   - Manages intercommunication between devices
   - Optimizes data transfer methods
   - Ensures data integrity during transfers

## File Systems

### Components
- **File Data**: The actual content stored
- **Metadata**: Information about files (creation date, permissions, etc.)
- **File System**: Organization method for tracking files

### Storage Concepts
- **File Systems**: Vary by OS (Windows uses NTFS)
- **Block Storage**: Data broken into pieces for faster access
- **File Extensions**: Identify file types in certain operating systems

## User Interaction

### Interface Types
- **Shell/Command-Line Interface (CLI)**:
  - Program interpreting text commands
  - Common in Linux environments
  - Bash (Bourne Again Shell): Popular Linux shell
  - Essential for power users and certain tasks

- **Graphical User Interface (GUI)**:
  - Visual way to interact with computers
  - More intuitive for average users

### System Logs
- Files recording system events
- Function as the system's diary
- Used for troubleshooting problems

## Boot Process

1. **Power On**: Computer receives power
2. **BIOS/UEFI**: Initializes hardware
3. **POST (Power On Self Test)**: Verifies hardware functionality
4. **Boot Device Selection**: Checks devices in configured order
5. **Bootloader**: Small program that loads the operating system
6. **Kernel Loading**: Manages resources and loads drivers
7. **System Initialization**: Essential processes and user space items start

## Mobile Operating Systems

- **Derivation**: Often based on desktop OS (Android from Linux)
- **Optimization**: Designed for power efficiency
- **Differences**: Removes unnecessary features to conserve resources

## Operating System Selection

- **Considerations**: Based on required applications and systems
- **Purpose**: Match OS to intended computer use and needed programs

## Virtual Machines

- **Definition**: Software copies of real machines
- **Benefits**: Run multiple operating systems simultaneously
- **Resources**: Use physical computer's memory, CPU, and storage

## Linux Shell Commands

- **Terminal**: Interface for entering commands
- **Command Structure**: username@hostname:location$
- **Example Commands**:
  - `echo $SHELL`: Displays current shell
  - `touch filename`: Creates a new file

## Chrome OS

- **Purpose**: Secure, simple web-focused operating system
- **Design**: Primarily for web browser usage
- **Capabilities**: 
  - Web applications
  - Android and Linux applications in containers
- **Advantages**:
  - Lightweight for low-end computers
  - Cloud-based storage makes machines interchangeable
  - Security-focused design minimizes user maintenance

---
**Previous**: [[Education/Courses/Coursera/Google IT Support/Course 1/1- Weeks/Week 2|Week 2: Hardware]] | **Next**: [[Education/Courses/Coursera/Google IT Support/Course 1/1- Weeks/Week 4|Week 4: Networking]]
