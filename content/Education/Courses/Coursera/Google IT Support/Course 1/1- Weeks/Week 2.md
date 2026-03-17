# Week 2: Hardware

## The Modern Computer

### Introduction to Computer Hardware
- **Ports**: Connection points for extending computer functionality through external devices
- **CPU (Central Processing Unit)**: The computer's brain that performs calculations and data processing
- **RAM (Random Access Memory)**: Short-term memory for temporary data storage
- **Hard Drive**: Long-term storage for all data
- **Motherboard**: Central circuit board connecting all components; enables communication between parts
- **Power Supply**: Converts wall outlet electricity to usable format for computer components

### Programs and Hardware
- **Programs**: Instructions telling the computer what to do
- **External Data Bus (EDB)**: Interconnecting wires that transfer data using binary (voltage = 1, no voltage = 0)
- **CPU Registers**: Internal storage components for data being processed
- **Memory Controller Chip (MCC)**: Bridge between CPU and RAM
- **Address Bus**: Connects CPU to MCC, sending data location information
- **CPU Cache**: Faster than RAM; stores frequently accessed data (L1, L2, L3 levels, with L1 being smallest/fastest)
- **Clock Speed**: Maximum number of clock cycles CPU can handle in a given time period
- **Overclocking**: Increasing CPU clock cycle rate to improve performance

## Computer Components

### CPU
- **Socket Compatibility**: CPUs must match motherboard socket type
- **Socket Types**:
  - Land Grid Array (LGA): Pins on motherboard
  - Pin Grid Array (PGA): Pins on CPU
- **Cooling**: Heat sinks and fans necessary to prevent overheating
- **Architecture**: 32-bit or 64-bit determines data handling capacity

### RAM
- **DRAM (Dynamic Random-Access Memory)**: Common type using microscopic capacitors to store binary data
- **DIMM (Dual Inline Memory Module)**: Modern memory stick format
- **SDRAM (Synchronous DRAM)**: Synchronized to system clock speed
- **DDR SDRAM**: Double Data Rate SDRAM, available in generations (DDR1-DDR4)
  - Faster, more energy-efficient, larger capacity than earlier versions
- **Compatibility**: RAM must match motherboard pin configuration

### Motherboard
- **Chipset**: Controls component communication
  - Northbridge: Connects RAM and video cards
  - Southbridge: Manages I/O controllers (hard drives, USB)
- **Expansion Slots**: Allow functionality extension (PCIe standard)
- **Form Factors**: Determine size and capacity
  - ATX (Advanced Technology Extended): Common in desktops
  - ITX (Information Technology eXtended): Smaller form factor

### Storage
- **Data Size Units**: Bit → Byte (8 bits) → Kilobyte (1024 bytes) → etc. → Terabyte (1024 GB)
- **Storage Types**:
  - HDD (Hard Disk Drive): Mechanical with spinning platters; speed measured in RPM
  - SSD (Solid State Drive): No moving parts; faster and more durable than HDD
- **Interfaces**:
  - SATA: Common interface using single cable; hot-swappable
  - NVMe: Faster interface using motherboard expansion slot

### Power Supply
- **Electricity Types**:
  - AC (Alternating Current): From wall outlets
  - DC (Direct Current): Used by computer components
- **PSU (Power Supply Unit)**: Converts AC to DC
- **Wattage**: Measure of power requirements (500W sufficient for basic desktops)

## Mobile Devices
- **Characteristics**: Portable, battery-powered, general or special-purpose
- **Integration**: Components often soldered to motherboard
- **SoC (System on a Chip)**: Integrates CPU, RAM, sometimes storage on single chip
- **Connectors**: USB-C, Lightning, Mini/Micro-USB, Mini/Micro-HDMI, Mini DisplayPort
- **Power Efficiency**: Specialized OS and software to maximize performance with limited power

## Peripherals
- **Definition**: External devices adding functionality
- **USB Versions**:
  - USB 2.0: 480 Mb/s (black ports)
  - USB 3.0: 5 Gb/s (blue ports)
  - USB 3.1: 10 Gb/s (teal ports)
  - USB-C: Universal standard for display and data transfer
- **Data Transfer**: 1 byte = 8 bits (40MB file requires 320Mb/s transfer speed)

## System Startup

### BIOS/UEFI
- **Drivers**: Programs enabling CPU to understand external devices
- **BIOS (Basic Input Output Services)**: Software initializing hardware and starting OS
- **ROM (Read-Only Memory)**: Non-volatile memory storing BIOS
- **UEFI (Unified Extensible Firmware Interface)**: Modern BIOS replacement with better compatibility
- **POST (Power On Self Test)**: Boot-time hardware check; issues indicated by beep codes

## Assembly Best Practices
- **Static Discharge Prevention**: Touch grounded device or wear anti-static wristband
- **Component Protection**: Keep parts in anti-static bags until installation
- **Thermal Paste**: Apply evenly on CPU
- **Power Connections**: Some CPUs require direct power supply connection
- **Mobile Device Repair**: Protect against static, use proper tools, organize parts, follow documentation, test after repair

---
**Previous**: [[Education/Courses/Coursera/Google IT Support/Course 1/1- Weeks/Week 1|Week 1: Introduction to IT]] | **Next**: [[Education/Courses/Coursera/Google IT Support/Course 1/1- Weeks/Week 3|Week 3: Operating System]]
