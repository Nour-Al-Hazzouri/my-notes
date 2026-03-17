# Disk Cleanup by Command Line in Windows

## Overview

This guide explains how to launch the Windows Disk Cleanup utility directly from the command line, allowing you to specify which hard disk to clean without navigating through the graphical user interface.

## Command Syntax

The Disk Cleanup tool can be executed from the command line using the following syntax:

```
c:\windows\SYSTEM32\cleanmgr.exe /d[Drive]
```

Where `[Drive]` represents the letter of the drive you wish to clean (e.g., C, D, E).

## Step-by-Step Instructions

1. Open the Run dialog by clicking **Start** and then **Run**
2. In the **Open** box, type the command with your target drive letter
   - Example: `c:\windows\SYSTEM32\cleanmgr.exe /dC` (to clean drive C)
3. Press **Enter** to execute the command

The Disk Cleanup utility will launch and automatically analyze the specified drive, presenting options for removing unnecessary files.

## Notes

- The command must include the `/d` parameter followed immediately by the drive letter
- No space should appear between the parameter and drive letter
- Administrative privileges may be required for complete functionality
- This method works across modern Windows operating systems
