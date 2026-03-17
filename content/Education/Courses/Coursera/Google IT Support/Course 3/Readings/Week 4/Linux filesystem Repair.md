# Linux File System Repair

## Understanding File System Corruption

Linux file systems provide the structural framework for storing the operating system and all installed software on hard drives. With nearly 100 file system types supporting Linux (including ext4, XFS, ZFS, and F2FS), these software-based structures can experience corruption that affects system functionality.

File locations in Linux are stored as i-nodes (index nodes), which contain essential metadata about:
- Storage block and fragment locations
- File type and size
- Permissions and access rights
- Links and other file attributes

## Recognizing Data Corruption

### Common Symptoms
- Unexpected system shutdowns
- Application crashes or launch failures
- "File format not recognized" error messages
- Missing files and folders
- Operating system reports of bad sectors
- Unusual sounds from mechanical hard drives (clicking or vibrations)

### Primary Causes
1. **Software Issues**
   - Normal software errors affecting disk operations
   - Malicious code (viruses and malware)
   - Antivirus software malfunctions during scanning/repair

2. **Hardware Failures**
   - Bad sectors (larger files are more vulnerable)
   - Malfunctioning read/write heads on platter-based drives
   - Mechanical wear on drives with moving parts

3. **Electrical Problems**
   - Power failures during active write operations

## Initial Response Protocol

When data corruption is suspected:

1. **Immediately shut down affected drives** to prevent further damage
2. **Minimize read/write operations** by:
   - Booting from external media or network (PXE boot)
   - Attaching the corrupted drive as an external device to a healthy system
3. **Disable automount** before connecting corrupted drives
4. **Ensure the device file** in /dev directory remains readable

## The fsck Recovery Tool

The file system consistency check (fsck) command is Linux's primary tool for identifying and repairing file system inconsistencies.

### Critical Warnings
- **NEVER** use fsck on mounted file systems
- **NEVER** use fsck on drives from RAID arrays
- User must have write permissions to approve repairs

### Issues fsck Can Detect and Repair
- Incorrect block counts
- Multiply-allocated blocks and fragments
- Out-of-range or corrupted block numbers
- Disk map inconsistencies
- Directory reference mismatches
- Unreadable files and directories
- Fragment allocation errors

## Using fsck Effectively

### Basic Command Syntax
```
fsck [flags] [FileSystem1name - FileSystem2name ...]
```

### Essential Flags
- **-n**: Answers "no" to all prompts (read-only mode)
- **-p**: Automatically fixes minor issues without prompting
- **-y**: Answers "yes" to all prompts (use only for severely corrupted systems)
- **-f**: Performs fast check, skipping successfully unmounted file systems

### Exit Codes
- **0**: All scanned file systems successfully restored
- **2**: Process interrupted before completion
- **4**: File system changed, system reboot required
- **8**: Some or all damage could not be repaired

### Automatic Execution
fsck can be configured to run automatically at boot when:
- File systems are marked as "dirty" (inconsistent data states)
- Systems have been mounted multiple times without checks

Configuration methods vary by Linux distribution, typically requiring edits to boot sequence files as root or sudo user.
