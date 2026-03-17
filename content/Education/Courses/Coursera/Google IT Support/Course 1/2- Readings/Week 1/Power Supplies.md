# Power Supplies

## Introduction

- **Purpose**: Convert alternating current (AC) from wall sockets to direct current (DC) required by computer components
- **Function**: Reduce voltage to appropriate levels for internal computer components
- **Importance**: Protect components from damage caused by incorrect power delivery

## Computer Architecture Context

- Power supplies are essential hardware components in computer architecture
- They work alongside motherboards, CPUs, RAM, storage, and other hardware components
- The specific hardware configuration influences power supply requirements

## Selecting a Power Supply

### Local Input Voltage Considerations

- **Regional Standards**:
  - 110-120 VAC: North, Central, and parts of South America
  - 220-240 VAC: Most other countries worldwide

- **Voltage Adaptation Methods**:
  - Replace power supply with region-appropriate unit
  - Use power supply with dual-voltage switch
  - Connect external power converter between wall socket and computer

- **Consequences of Incorrect Voltage**:
  - Too little voltage (220-240V needed, 110-120V supplied): Computer won't run properly
  - Too much voltage (110-120V needed, 220-240V supplied): Component damage

### Motherboard Specifications

- **Form Factors**:
  - ATX: Common for full-sized desktop computers
  - ITX: Used in smaller computers
  - Form factor documentation specifies compatible power supply types

### Component Power Requirements

- Basic computers (word processing, web browsing): Standard power supply sufficient
- Higher wattage required for:
  - Powerful CPUs or multiple CPUs
  - Multiple hard drives
  - Video rendering applications
  - High-performance graphics processing units (GPUs)

## Voltages and Pin Connectors

### Component Voltage Requirements

- **3.3V**: DIMMs, chipsets, some PCI/AGP cards
- **5V**: SIMMs, disk drive logic, ISA, some voltage regulators
- **12V**: Motors and high-output voltage regulators

### Connector Types

- **Motherboard Connectors**:
  - 20-pin (older technology)
  - 24-pin (current standard for more power delivery)

- **Power Supply Connection Types**:
  1. Floppy disk drive (obsolete)
  2. "Molex" universal (IDE drives, optical drives)
  3. SATA drives
  4. Graphics cards (8-pin, separable for 6-pin)
  5. Graphics cards (6-pin)
  6. Motherboard (8-pin)
  7. Motherboard P4 connector
  8. ATX2 24-pin (divisible 20+4 for compatibility)

## Key Selection Considerations

1. Wall socket input voltage standard for the computer's location
2. Power consumption needs of the computer's components
3. Motherboard model and form factor specifications

---
**Previous**: [[Education/Courses/Coursera/Google IT Support/Course 1/2- Readings/Week 1/Logic Gates|Logic Gates]]
