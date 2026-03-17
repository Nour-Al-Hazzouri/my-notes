# Windows and Linux CLI Commands Reference

## Windows Commands

### Navigation and Directory Management

- **List Directory Contents**:
  ```
  ls 'path'
  ls -Force 'path'  # See hidden files
  ```

- **Show Current Directory**:
  ```
  pwd
  ```

- **Change Directory**:
  ```
  cd 'path'        # Change to specified directory
  cd ..            # Return to parent directory
  cd ..\           # Go to directory in same level without retyping
  cd ~             # Go to home directory
  cd ~ 'path'      # Go to path within home directory
  ```

- **Create Directory**:
  ```
  mkdir 'name'     # Make new directory
  mkdir 'name with spaces'  # Use quotes for names with spaces
  mkdir name` is` here      # Alternative for spaces in name
  ```

### File Operations

- **Copy Files**:
  ```
  cp 'filename' 'path'                    # Copy file to path
  cp *'pattern' 'path'                    # Copy multiple files matching pattern
  cp 'name' 'path' -Recurse -Verbose      # Copy directory with contents
  ```
  - `-Verbose`: Shows each file being copied
  - `-Recurse`: Includes subdirectories and their contents

- **Move and Rename Files**:
  ```
  mv 'filename.ext' 'newname.ext'         # Rename file
  mv 'filename' 'path'                    # Move file to new location
  ```

- **Delete Files and Directories**:
  ```
  rm 'path'                               # Remove file/directory
  rm 'path' -Force                        # Force removal of protected files
  ```

- **View File Contents**:
  ```
  cat 'name'                              # Display file contents
  more 'name'                             # View large text files (page by page)
  cat 'name' -Head 'number'               # Show first n lines
  cat 'name' -Tale 'number'               # Show last n lines
  ```

- **Edit Files**:
  ```
  Start notepad++ 'filename'              # Open file in Notepad++
  ```

### File Searching and Filtering

- **Search File Contents**:
  ```
  Select-String 'word' 'filename'         # Search for word in file
  Select-String 'word' 'word'*            # Search in multiple files with pattern
  ```

- **Filter Directory Contents**:
  ```
  ls 'path' -Filter 'pattern'             # Filter results by pattern
  ```

### Input/Output Redirection

- **Echo and Redirection**:
  ```
  echo 'word'                             # Print text to console
  echo 'word' > 'filename'                # Create/overwrite file with text
  echo 'word' >> 'filename'               # Append text to file
  ```

- **Redirection Operators**:
  - `>`: Redirect output, overwrite file
  - `>>`: Redirect output, append to file
  - `|`: Pipeline, send output to another command
  - `2>`: Redirect error output

- **Pipeline Example**:
  ```
  cat 'filename' | Select-String st       # Filter file content for "st"
  rm filesystem 2> errors.txt             # Redirect errors to file
  ```

### User and Group Management

- **View Users and Groups**:
  ```
  Get-LocalUser                           # Show users and status
  Get-LocalGroup                          # Show local groups
  Get-LocalGroupMember 'group name'       # Show members of a group
  ```

- **User Password Management**:
  ```
  net user 'username' 'password'          # Change user password
  net user 'username' *                   # Change password (secure prompt)
  net user 'username' /logonpasswordchg:yes  # Force password change at next login
  ```

- **Add/Remove Users**:
  ```
  net user 'username' * /add              # Add new user
  net user 'username' 'password' /add /logonpasswordchg:yes  # Add user with forced password change
  net user 'username' /del                # Delete user
  Remove-LocalUser 'username'             # Alternative way to remove user
  ```

### Permissions Management

- **View and Modify Permissions**:
  ```
  icacls 'path'                           # Show permissions
  icacls 'directory path' /grant 'user or everyone':'permissions'  # Grant permissions
  icacls 'path' /remove 'user-everyone'   # Remove permissions
  ```

### File Compression

- **Compress Files**:
  ```
  Compress-Archive -Path 'folder path' 'path of new folder.format'  # Compress folder
  ```

### Package Management

- **Chocolatey Package Manager**:
  ```
  Register-PackageSource -Name chocolatey -ProviderName Chocolatey -Location http://chocolatey.org/api/v2
  Get-PackageSource                       # Verify software source
  Find-Package sysinternals -IncludeDependencies  # Find package and dependencies
  ```

### Disk Management

- **Diskpart Utility**:
  ```
  Diskpart                                # Enter diskpart tool
  list disk                               # List available disks
  select disk 'disk number'               # Select disk
  clean                                   # Remove all partitions
  create partition primary                # Create primary partition
  select partition 'partition number'     # Select partition
  active                                  # Mark partition as active
  format FS='filesystem' label='label' quick  # Format partition
  ```

- **File Links**:
  ```
  mklink 'filename' 'target file'         # Create symbolic link
  mklink /H 'filename' 'target file'      # Create hard link
  ```

- **Disk Maintenance**:
  ```
  fsutil repair query 'path'              # Check self-healing progress
  CHKDSK                                  # Check disk (read-only)
  CHKDSK /F                               # Check and fix disk errors
  ```

### Process Management

- **View and Manage Processes**:
  ```
  tasklist                                # Show running tasks
  Get-Process                             # PowerShell equivalent
  taskkill /pid 'process id'              # Kill process by ID
  Get-Process | Sort CPU -descending | Select -first 3 -property ID,ProcessName,CPU  # Show top CPU processes
  ```

### Remote Access

- **SSH and File Sharing**:
  ```
  putty.exe -shh 'user'@'IP address' 'port'  # Connect via PuTTY
  net share 'folder name'='path' /grant:'user','permission'  # Share folder with permissions
  ```

---

## Linux Commands

### Navigation and Directory Management

- **List Directory Contents**:
  ```
  ls 'path'                               # List directory contents
  ls -l 'path'                            # Detailed listing
  ls -a 'path'                            # Show hidden files
  ls -la                                  # Detailed listing with hidden files
  ```

- **Show Current Directory**:
  ```
  pwd
  ```

- **Change Directory**:
  ```
  cd 'path'                               # Change to specified directory
  cd ..                                   # Return to parent directory
  cd ../                                  # Go to directory in same level
  cd ~                                    # Go to home directory
  cd ~ 'path'                             # Go to path within home directory
  ```

- **Create Directory**:
  ```
  mkdir 'name'                            # Make new directory
  mkdir 'name\ with\ spaces'              # Use backslash for spaces
  mkdir 'name with spaces'                # Use quotes for spaces
  ```

### File Operations

- **Copy Files**:
  ```
  cp 'filename' 'path'                    # Copy file to path
  cp *'pattern' 'path'                    # Copy multiple files matching pattern
  cp -r 'directory name' 'path'           # Copy directory with contents
  ```

- **Move and Rename Files**:
  ```
  mv 'filename.ext' 'newname.ext'         # Rename file
  mv 'filename' 'path'                    # Move file to new location
  ```

- **Delete Files and Directories**:
  ```
  rm 'path'                               # Remove file/directory
  rm 'path' -Force                        # Force removal of protected files
  ```

- **View File Contents**:
  ```
  cat 'name'                              # Display file contents
  less 'name'                             # View large files with navigation
  head 'name'                             # Show first 10 lines
  tail 'name'                             # Show last 10 lines
  ```
  - In `less`: Use arrow keys to navigate, `g` to go to beginning, `G` to go to end, `/word` to search, `q` to quit

- **Edit Files**:
  ```
  nano 'filename'                         # Open file in Nano editor
  ```

### File Searching and Filtering

- **Search File Contents**:
  ```
  grep 'word' 'filename'                  # Search for word in file
  grep 'word' *'pattern'                  # Search in multiple files
  ```

### Input/Output Redirection

- **Redirection Operators**:
  ```
  cat < 'filename'                        # Use file as input
  ```
  - `>`: Redirect output, overwrite file
  - `>>`: Redirect output, append to file
  - `|`: Pipeline, send output to another command
  - `null`: Redirect to /dev/null (discard output)

### User and Group Management

- **Superuser Commands**:
  ```
  sudo 'command'                          # Execute command with admin privileges
  sudo su -                               # Switch to root user
  exit                                    # Log out of root
  ```

- **View Users and Groups**:
  ```
  cat /etc/group                          # View groups and members
  cat /etc/passwd                         # View user information
  ```

- **User Password Management**:
  ```
  passwd 'username'                       # Change user password
  sudo passwd -e 'username'               # Expire password (force change)
  ```

- **Add/Remove Users**:
  ```
  sudo useradd 'username'                 # Add new user
  sudo userdel 'username'                 # Delete user
  ```

### Permissions Management

- **View and Modify Permissions**:
  ```
  ls -l 'file path'                       # View file permissions
  chmod 'u|g|o' '+|-' 'r|w|x' 'file'      # Change permissions (symbolic)
  chmod 754 'file'                        # Change permissions (numeric)
  ```
  - Numeric permissions: 4 (read), 2 (write), 1 (execute)
  - Example: 754 = owner(rwx), group(rx), others(r)

- **Change Ownership**:
  ```
  sudo chown 'username' 'file'            # Change file owner
  sudo chgrp 'group name' 'filename'      # Change file group
  ```

- **Special Permissions**:
  ```
  sudo chmod u+s 'file'                   # Set SUID (or chmod 4755)
  sudo chmod g+s 'file'                   # Set SGID (or chmod 2755)
  sudo chmod +t 'directory'               # Set sticky bit (or chmod 1755)
  ```

### Package Management

- **Debian Package Management**:
  ```
  sudo dpkg -I 'package name'             # Install package
  sudo dpkg -r 'package name'             # Remove package
  dpkg -l                                 # List installed packages
  ```

- **Archive Management**:
  ```
  7z -e 'file name'                       # Extract archive
  ```

- **APT Package Management**:
  ```
  sudo apt update                         # Update package lists
  sudo apt upgrade                        # Upgrade installed packages
  sudo apt full-upgrade                   # Upgrade kernel
  ```

- **System Information**:
  ```
  uname -r                                # Show kernel version
  ```

### Disk Management

- **Partition Management**:
  ```
  sudo parted -l                          # List disks and partitions
  sudo parted /dev/'device'               # Run parted on specific disk
  print                                   # Show disk details
  mklabel 'GPT/MBR'                       # Set partition table type
  mkpart 'name' 'filesystem' 'start' 'end'  # Create partition
  quit                                    # Exit parted
  ```

- **Filesystem Operations**:
  ```
  sudo mkfs -t 'format' 'disk'            # Format disk with filesystem
  sudo mount 'disk' 'directory'           # Mount filesystem
  sudo unmount 'disk'                     # Unmount filesystem
  sudo blkid                              # Show disk UUIDs
  ```

- **Swap Management**:
  ```
  sudo parted 'location'                  # Enter parted
  mkpart primary 'name' 5GiB 100%         # Create partition using remaining space
  sudo mkswap 'path'                      # Set up swap area
  sudo swapon 'path'                      # Enable swap
  ```

- **File Links**:
  ```
  ln -s 'target file' 'link name'         # Create symbolic link
  ln 'target file' 'link name'            # Create hard link
  ```

- **Disk Usage**:
  ```
  du -h                                   # Show disk usage (human-readable)
  df -h                                   # Show free disk space
  sudo fsck 'path'                        # Check filesystem for errors
  ```

### Process Management

- **View Processes**:
  ```
  ps -x                                   # Show your processes
  ps -ef                                  # Show all processes with details
  ps -ef | grep 'process name'            # Filter processes by name
  ```

- **Process Control**:
  ```
  kill 'PID'                              # Terminate process (SIGTERM)
  kill -KILL 'PID'                        # Force terminate process (SIGKILL)
  top                                     # Show running processes (interactive)
  ```

- **System Information**:
  ```
  uptime                                  # Show system uptime and load
  lsof                                    # List open files
  ```

### Remote Access

- **SSH and File Transfer**:
  ```
  ssh 'username'@'ip address'             # Connect to remote system
  scp 'path' 'username'@'IP Address'      # Copy file to remote system
  ```

### Log Management

- **View Logs**:
  ```
  tail -f /var/log/syslog                 # View logs in real-time
  ```

---
**Previous**: [[Education/Courses/Coursera/Google IT Support/Course 3/Course 3 Summarize|Course 3 Summary - Part 1 (Weeks 1-2)]]
