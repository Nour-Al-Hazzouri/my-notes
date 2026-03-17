# Mounting and Unmounting File Systems in Linux

## Overview

File system mounting is the process of connecting physical storage devices to specific locations (mount points) within a Linux file system. This essential operation allows the operating system to access and interact with the storage device's contents. For IT Support professionals working with Linux systems, understanding how to mount and unmount file systems is crucial when configuring servers and connecting to network file systems.

## The File System Table (fstab)

The File System Table (fstab) is a configuration file that simplifies and automates the mounting process. It offers two key advantages over manual mounting:
- Automatic mounting of partitions during system boot
- Customized mounting rules for individual file systems

### fstab Table Structure

The fstab configuration consists of six columns:

| Column | Name | Description |
|--------|------|-------------|
| 1 | Device | UUID or device name (e.g., sda1, sda2) |
| 2 | Mount Point | Directory location where the device will be mounted |
| 3 | File System Type | Linux file systems (ext4, NTFS, etc.) |
| 4 | Options | Comma-separated mounting parameters |
| 5 | Dump | Outdated backup setting (use 0) |
| 6 | Pass | File system check (fsck) order (0=no check, 1=root, 2=other) |

### Common Mounting Options

The Options column (4) can include various parameters:

- **Access timing**: sync/async (synchronous/asynchronous read-write)
- **Boot behavior**: auto/noauto (automatic mounting at boot or not)
- **Device handling**: dev/nodev (allow/prohibit device driver use)
- **Execution**: exec/noexec (allow/prevent binary execution)
- **Write access**: ro/rw (read-only or read-write)
- **User permissions**:
  - user: Any user can mount, but only mounting user can unmount
  - users: Any user can mount and unmount
  - nouser: Only root can mount (default)
- **defaults**: Standard settings (rw, suid, dev, exec, auto, nouser, async)

## Adding a New Drive to fstab

When expanding storage on a Linux system, follow these steps to add a new drive:

1. **Format the drive** using fdisk with a compatible file system (e.g., ext4)
2. **Identify the block device** using the lsblk command, which displays:
   - Device names (sda, sdb, etc.)
   - Major:minor numbers (driver type and ID)
   - Removable status, size, permissions, type, and mount point
3. **Edit the fstab file** to add a new entry with:
   - Device name (e.g., /dev/sdb1)
   - Mount point (e.g., /mnt/mystorage)
   - File system type (e.g., ext4)
   - Options (typically "defaults")
   - Dump value (0)
   - Pass value (2 for non-root file systems)
4. **Reboot the system** to apply changes

### Example fstab Entry

```
/dev/sdb1    /mnt/mystorage    ext4    defaults    0    2
```

This entry mounts the first partition of the second drive to /mnt/mystorage using the ext4 file system with default options, no dump backup, and a secondary fsck check at boot.
