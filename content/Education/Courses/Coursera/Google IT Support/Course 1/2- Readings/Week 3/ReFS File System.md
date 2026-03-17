# ReFS File System

## Overview
- **Name**: Resilient File System (ReFS)
- **Code Name**: "Protogon"
- **Developer**: Microsoft
- **Introduction**: Windows Server 2012
- **Classification**: Proprietary file system
- **Purpose**: Designed as the "next generation" file system after NTFS

## Design Background

### Problems Addressed
- **Storage Size Evolution**: Need to handle large/massive arrays of multi-terabyte drives
- **Reliability Requirements**: Need for continual (24/7) reliability in modern storage systems
- **Practical Limitations**: Traditional disk checking becoming impractically slow or disruptive
- **Abstraction Needs**: Requirement for separation between physical disks and logical volumes

## Key Design Advantages

### Data Integrity Features
- **Automatic Integrity Checking**: Built-in verification of data consistency
- **Data Scrubbing**: Proactive detection and correction of errors
- **Protection Against Data Degradation**: Prevention of gradual data corruption
- **No chkdsk Requirement**: Elimination of traditional disk checking utility

### Failure Handling
- **Hard Disk Drive Failure Management**: Built-in handling of drive failures
- **Redundancy**: Integrated data redundancy capabilities
- **RAID Integration**: Built-in RAID functionality

### Technical Improvements
- **Copy/Allocate on Write**: Modern approach for data and metadata updates
- **Long Path Support**: Handling of very long paths and filenames
- **Storage Virtualization**: Abstraction of logical storage from physical hardware
- **Flexible Volume Sizing**: Support for arbitrarily sized logical volumes independent of physical drive sizes

---
**Previous**: [[Education/Courses/Coursera/Google IT Support/Course 1/2- Readings/Week 3/Chrome OS|Chrome OS]] | **Next**: [[Education/Courses/Coursera/Google IT Support/Course 1/2- Readings/Week 3/Windows 10 & 11 Feature Matrix|Windows 10 and 11 Feature Matrix]]
