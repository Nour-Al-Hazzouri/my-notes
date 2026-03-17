# Hardware ID: Windows Device Identification System

## Purpose and Function

Hardware IDs serve as the critical identification mechanism that Windows uses to match devices with appropriate driver packages. When a bus driver reports a new device to the Windows operating system, the system must:

1. Collect identifying information from the device
2. Use this information to locate compatible driver packages
3. Install the most appropriate driver for the device

This identification system enables Windows to support a vast ecosystem of hardware while maintaining compatibility and functionality.

## Identifier Types and Structure

Windows uses two primary types of device identifiers:

### Hardware IDs
- Highly specific identifiers that precisely match a device
- Include detailed manufacturer, model, and revision information
- Formatted with a bus-specific prefix followed by vendor-specific details
- Example: `USB\VID_1234&PID_5678&REV_0001`

### Compatible IDs
- More generic identifiers representing device types
- May omit specific manufacturer or model information
- Represent the general class of device
- Used when no exact hardware ID match is found

The format of these identifiers varies by bus type but typically follows the pattern:
`[BUS_PREFIX]\[VENDOR_ID]&[PRODUCT_ID]&[REVISION]`

## Driver Selection Process

When a new device is connected, Windows follows this process:

1. The bus driver (e.g., USB hub driver) detects the device
2. Based on device information, the bus driver generates hardware IDs and compatible IDs
3. The Plug and Play (PnP) manager queries the bus driver for these identifiers
4. Windows searches the Driver Store for driver packages with matching IDs
5. Windows first attempts to match hardware IDs (exact matches)
6. If no hardware ID match is found, Windows tries compatible IDs (general matches)
7. The best matching driver package is selected and installed

## Bus-Specific Implementation

Each bus type implements hardware identification differently. Windows supports standardized identifier formats for multiple bus types:

- PCI Devices
- USB Devices
- SCSI Devices
- IDE Devices
- PCMCIA Devices
- ISAPNP Devices
- IEEE 1394 Devices
- Secure Digital (SD) Devices

For detailed information on specific bus implementations, refer to Microsoft's documentation on device identification strings.
