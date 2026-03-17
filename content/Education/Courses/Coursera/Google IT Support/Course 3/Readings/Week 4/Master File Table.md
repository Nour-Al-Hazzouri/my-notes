# Master File Table (MFT) in NTFS

## Overview

The Master File Table (MFT) is a critical component of the NTFS file system that serves as the central record-keeping structure for all files on a volume. Every NTFS volume contains an MFT that maintains at least one entry for each file, including an entry for the MFT itself. These entries store or reference all file information, including size, timestamps, permissions, and data content.

## MFT Growth and Behavior

The MFT exhibits specific growth characteristics:
- Expands as new files are added to the volume
- Does not shrink when files are deleted
- When files are deleted, their MFT entries are marked as free and available for reuse
- While entries may be reused, the disk space allocated to the MFT is not released

## The MFT Zone

To optimize performance, NTFS reserves dedicated space for the MFT called the "MFT zone":
- Designed to keep the MFT as contiguous as possible as it grows
- Calculated automatically based on volume size when the system mounts the volume
- Can be increased through registry modifications (see KB Article 174619)
- Cannot be reduced below the system-calculated default size
- Increasing the MFT zone does not reduce available user data space

## Space Allocation Patterns

How space is allocated on an NTFS volume depends on file characteristics:
- **Volumes with few large files**: Unreserved space is allocated first
- **Volumes with many small files**: MFT zone is allocated first

When either region becomes fully allocated, fragmentation begins:
- If unreserved space is exhausted, user files are allocated from the MFT zone
- If the MFT zone is exhausted, new MFT entries are allocated from unreserved space

## MFT Maintenance

The MFT itself can become fragmented and may require maintenance:
- Can be defragmented like other files
- Before defragmentation, leave as much space as possible at the beginning of the MFT zone
- If the MFT zone becomes fully allocated during defragmentation, unallocated space outside the zone is required

## Determining MFT Size

To check the current size and fragmentation state of the MFT:
1. Analyze the NTFS drive with Disk Defragmenter
2. Click "View Report" to display drive statistics including MFT size and fragment count
3. Alternatively, use the FSCTL_GET_NTFS_VOLUME_DATA control code programmatically
