# Hard Links and Junctions in NTFS

## Overview

The NTFS file system supports three types of file links: hard links, junctions, and symbolic links. This document focuses on hard links and junctions, explaining their characteristics, usage scenarios, and limitations.

## Hard Links

Hard links are file system objects that allow multiple path references to a single file within the same volume. When properly implemented, hard links provide the following functionality:

- **Unified Content**: Any changes to the file content are instantly visible through all hard links
- **Attribute Behavior**: File attributes are reflected in every hard link to the file
- **Attribute Propagation**: Changes to file attributes propagate to all hard links
- **Independent Deletion**: Hard links can be deleted in any order using the DeleteFile function

### Implementation Details

- Created using the CreateHardLink function
- Directory entry size and attribute information updates only occur for the link through which a change was made
- When the READONLY attribute is reset on one hard link to delete it, the attribute must be reset from another remaining link to restore the READONLY state

### Permitted Usage

Hard links can be created between:
- Files in different directories on the same drive
  - Example: C:\dira\ethel.txt linked to C:\dirb\dirc\lucy.txt
- Files in different directories on the same drive letter
  - Example: D:\dir1\tinker.txt to D:\dir2\dirx\bell.txt

### Restrictions

Hard links cannot be created between:
- Directories (C:\dira linked to C:\dirb)
- Files on different drives (C:\dira\ethel.txt linked to D:\dirb\lucy.txt)
- Local and network locations (C:\dira\ethel.txt linked to Z:\dirb\lucy.txt)

## Junctions

Junctions (also called soft links) are directory references that offer greater flexibility than hard links while maintaining similar operational characteristics.

### Key Differences from Hard Links

- Reference separate directories rather than files
- Can link directories located on different local volumes on the same computer
- Implemented through reparse points

### Permitted Usage

Junctions can be created between:
- Directories on the same drive
  - Example: C:\dira linked to C:\dirb\dirc
- Directories on different local drives
  - Example: C:\dirx linked to D:\diry

### Restrictions

Junctions cannot be created between:
- Files (C:\dira\one.txt linked to C:\dirb\two.txt)
- Local and network locations (C:\dir1 linked to Z:\dir2)
