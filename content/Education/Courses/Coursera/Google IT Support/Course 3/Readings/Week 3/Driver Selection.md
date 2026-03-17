# Windows Driver Selection Process

## Overview

After Windows detects and identifies a new device, it follows a systematic two-phase process to install the appropriate driver:

1. **Search Phase**: Windows searches for driver packages matching the device's identification strings
2. **Selection Phase**: Windows evaluates and selects the optimal driver from available matches

This process ensures that devices receive the most appropriate drivers for optimal functionality and compatibility.

## Driver Package Search Methodology

Windows uses device identification information to locate compatible driver packages:

- **Search Criteria**: Hardware IDs and compatible IDs reported by the bus driver
- **Matching Mechanism**: IDs are compared against entries in the INF Models sections of driver packages
- **Match Definition**: A driver package matches a device when any device ID corresponds to an ID in the driver's INF file

### Search Sequence (Windows 8 and Later)

When a device is connected (e.g., a USB WLAN adapter):

1. **Initial Quick Installation**:
   - Windows first searches the Driver Store for matching driver packages
   - If found, Windows immediately installs this driver to enable device functionality

2. **Background Optimization** (concurrent process):
   - Windows searches Windows Update and the DevicePath for potentially better drivers
   - If a superior match is found, it's staged to the Driver Store, then installed on the device

> **Note**: Since Windows Vista, all driver installations occur from the Driver Store. Drivers found elsewhere are first staged to the Driver Store before installation.

## Driver Selection Logic

Once Windows identifies one or more matching driver packages, it applies the following selection criteria:

1. **Single Match Scenario**:
   - If only one matching driver package exists, Windows installs it

2. **Multiple Match Scenario**:
   - Windows assigns ranking values to each match based on ID specificity
   - The driver with the lowest rank value (highest specificity) is selected
   - If multiple drivers share the lowest rank, Windows uses tiebreakers:
     - Driver date (newer preferred)
     - Driver version (higher preferred)
     - These values are specified by the INF DriverVer directive in the driver's INF file

After selection, Windows proceeds with driver installation according to established installation protocols.
