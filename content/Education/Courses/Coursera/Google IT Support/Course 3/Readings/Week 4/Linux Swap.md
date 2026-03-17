# Linux Swap Space

## Overview

Swap space in Linux serves as an extension of physical memory (RAM) when the system requires additional memory resources. When RAM is full, inactive memory pages are moved to swap space, which is located on storage devices with slower access times than physical memory. While swap space can benefit systems with limited RAM, it should not be considered a replacement for adequate physical memory.

## Implementation Options

Linux supports three methods for implementing swap space:
- **Dedicated swap partition** (recommended)
- **Swap file**
- **Combination** of swap partitions and files

Note that the Btrfs file system does not support swap space.

## Sizing Recommendations

Modern swap space sizing is based on system memory workload rather than a linear relationship with RAM. The following table provides recommendations based on RAM amount:

| RAM Amount | Standard Swap Size | Swap Size with Hibernation |
|------------|-------------------|----------------------------|
| ≤ 2 GB     | 2× RAM            | 3× RAM                     |
| > 2-8 GB   | Equal to RAM      | 2× RAM                     |
| > 8-64 GB  | At least 4 GB     | 1.5× RAM                   |
| > 64 GB    | At least 4 GB     | Not recommended            |

Insufficient swap space on low-memory systems (1 GB or less) can cause system instability or even render the system unbootable.

## Hibernation Considerations

Hibernation is not recommended for systems with more than 64 GB of RAM because:
1. It requires significant additional swap space that may be infrequently used
2. The process of moving resident data between RAM and disk is time-consuming

## Performance Optimization

- Distributing swap space across multiple storage devices improves performance
- Systems with fast drives, controllers, and interfaces benefit most from this approach
- Increasing swap space may improve performance if system resources allow

## Adding Swap Space

When adding swap space after installation, three methods are available:

### 1. Extending Swap on an LVM2 Logical Volume (Recommended)
1. Disable swapping: `swapoff -v /dev/VolGroup00/LogVol01`
2. Resize the logical volume: `lvresize /dev/VolGroup00/LogVol01 -L +2G`
3. Format the new space: `mkswap /dev/VolGroup00/LogVol01`
4. Enable the extended volume: `swapon -v /dev/VolGroup00/LogVol01`
5. Verify with: `cat /proc/swaps` and `free -h`

### 2. Creating an LVM2 Logical Volume for Swap
1. Create logical volume: `lvcreate VolGroup00 -n LogVol02 -L 2G`
2. Format as swap: `mkswap /dev/VolGroup00/LogVol02`
3. Add to /etc/fstab: `/dev/VolGroup00/LogVol02 swap swap defaults 0 0`
4. Regenerate mount units: `systemctl daemon-reload`
5. Activate swap: `swapon -v /dev/VolGroup00/LogVol02`
6. Verify with: `cat /proc/swaps` and `free -h`

### 3. Creating a Swap File
1. Calculate block size (MB × 1024)
2. Create empty file: `dd if=/dev/zero of=/swapfile bs=1024 count=65536`
3. Set up swap file: `mkswap /swapfile`
4. Secure permissions: `chmod 0600 /swapfile`
5. Add to /etc/fstab: `/swapfile swap swap defaults 0 0`
6. Regenerate mount units: `systemctl daemon-reload`
7. Activate swap: `swapon /swapfile`
8. Verify with: `cat /proc/swaps` and `free -h`

**Important**: Modify swap space only when it is not in use. Use rescue mode when necessary.
