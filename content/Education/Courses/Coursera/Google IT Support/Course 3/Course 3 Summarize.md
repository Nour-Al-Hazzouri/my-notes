# Course 3 Summary - Part 1 (Weeks 1-2)

## Week 1: Basic Commands

### Introduction

- **Lesson Overview & Practice Tips**:
  - Windows: Navigation (GUI-CLI)
  - Linux: Navigation (CLI)

The command line interpreter in Linux is called a **shell**, and the language that we'll use to interact with this shell is called **BASH**.

### Themes in This Lesson

#### Basic Operating System Navigation
- Navigating from one directory to another
- Getting file information
- Removing files and directories

#### File and Text Manipulation
- Searching through your directories
- Finding specific files
- Copying and pasting
- Chaining commands

### Directory Navigation

#### List Directories in a GUI

Files and folders in operating systems are organized in a hierarchical directory tree; their locations are called **paths**.

In Windows:
- Each drive letter is a filesystem
- Subdirectories are separated by `\` (backslash)
- Unlike Linux, which uses forward slashes `/`

In the file properties of a file, there is size and size on disk (explanation in reading).

#### Windows: List Directories in CLI

- **Command Prompt**: (CMD) cmd.exe (old-since MS-DOS)
- **Powershell**: powershell.exe

Many Powershell commands used will be aliases for common commands in other shells. An **alias** is sort of like a nickname for a command.

##### Listing Files and Directories
```
Ls 'path'
Ls C:\
```
`Ls` is the command, path isn't a part of it, it's a parameter (like a value associated to the command).

- **Parent Directory**: root
- **Child Directory**: inside root

To see hidden files: 
```
ls -Force 'path'
```

#### Linux: List Directories

In Linux, root is `/` (e.g., `/home/username/Desktop`)

- `Ls` = show directory content
- `Ls /` (shows root folder directories)
- `/bin` folder holds the essential programs and binaries, similar to Windows program files directory
- `/etc` folder stores important system configuration files
- `/home` personal directory for users
- `/proc` contains info about currently running processes
- `/usr` for user installed software
- `/var` stores system logs and any file that constantly changes

A **flag** in Linux is similar to parameter in Windows, it is used by a hyphen then the flag, though this can vary depending on the program.

- `'command' --help` can let you see what you can do with commands
- `Man 'command'` shows command manual
- `Ls -l 'path'` shows more readable list of directories, this also shows properties of each file
- `Ls -a 'path'` shows all files including hidden ones

It is possible to write it like this: `ls -la` (works the same as `ls -l -a`)

#### Windows: Changing Directories in the GUI

An **absolute path** is one that starts from the main directory.
A **relative path** is the path from your current directory.

In the CLI:
- `pwd`: shows you what directory you're currently in
- `cd 'path'`: changes the directory
- `cd ..`: return to the previous directory

In Windows, if a directory is in the same mother directory but going back is needed to change, this command can be used:
- `cd ..\`: lets you go to the directory immediately instead of going back and retyping the command
- `cd ~`: lets you go to the home directory, it can be used like this: `cd ~ 'path'` (if path is in the home directory)

In Powershell, **Tab Completion** is a built-in feature to auto-complete tab names. If we want to go to Desktop, we can type D then Tab, and the first directory that starts with D will show up. Pressing Tab multiple times for different directories is possible.

The `.` before the backslash means 'Current Directory'.

#### Linux: Changing Directories in Bash

- `pwd`: shows current directory
- `cd`: changes directory
- `cd ..` | `cd ../` | `cd ~`: can also be used in Bash

Tab completion is available in Bash but it will show all options at once.

### Creating and Managing Directories

#### Windows: Make Directories in the GUI & CLI
```
Mkdir 'name'
```
Makes new directory.

**Note**: Making a name with spaces will cause an error, you can use `_`.

To make a directory with spaces in the name there are 2 ways:
```
Mkdir 'name is here' | mkdir name` is` here
```

#### Linux: Make Directories in Bash
```
Mkdir
```
Is used to make new directories.

To make a directory with spaces in Linux `\` can be used or `'name here'`.

### Command History

#### Windows Command History

In Powershell, to use the same commands many times instead of typing the same command over and over, it is possible to type `history` and all commands will show up.

We can press 'up' and 'down' key to scroll between them and re-use them.

By typing `Ctrl+R` we can search for a command we used to re-use it, we can also use `#` for this purpose.

`Clear` will clean up the powershell page.

For Linux, everything is the same.

### File Operations

#### Windows: Copying Files and Directories
```
cp 'filename' 'path'
```
Is how to copy files in Powershell.

**Wildcard** is a character that's used to help select files based on a certain pattern.
```
cp *'the thing repeated in many files' 'path'
```
Is the command to copy multiple files based on a common character.

Using `cp` on a directory will make it copy an empty folder. To copy the content too, do this:
- `-Recurse` lists the contents of a directory; if there are any sub-directories it will recurse or repeat the directory listing process for each of those sub-directories
- `-Verbose` will show each thing copied
```
cp 'name' 'path' -Recurse -Verbose
```
Is the full command.

#### Linux: Copying Files and Directories
```
cp
```
Is also used to copy in Bash (`cp 'filename' 'path'`).

It is also possible to use wildcard, same as Windows.
```
cp -r 'directory name' 'path'
```
To copy a directory with content.

#### Windows: Moving and Renaming Files, Directories
```
mv
```
Can be used to rename and move directories, this depends on the command.
```
mv 'filename.format' 'filename.format'
```
To rename a file (can be used for directories).
```
mv 'filename' 'path'
```
To move a file or directory.

Wildcards can be used to move files too.

The same is for Linux.

#### Windows: Removing Files and Directories

In PowerShell the command to remove files and directories is `rm` or `remove`. Keep cautious as there's no recycle bin in this case.
```
rm 'path'
```

There are safety options for this command (Permissions).
```
rm 'path' -Force
```
Will remove even important files if we have permission.

In some cases a confirmation message will appear with possibility to respond by y (yes) and n (no). For a directory that has children directories it can also ask for Yes to all or No to all.

The same is for Linux.

---

## File and Text Manipulation

### Windows: Display File Contents
```
cat 'name'
```
Is used to show the content of files.
```
more 'name'
```
Is good to see large text documents. Enter advances the program by one line and space advances the program by one page. The q key will allow to exit the more window.
```
cat 'name' -Head 'number of lines'
```
Will allow us to see the first few lines of the file depending on the number.
```
cat 'name' -Tale 'number'
```
Shows us the last lines of a line depending on the number.

### Linux: Display File Contents

`cat` is the same for Linux.
```
less 'name'
```
Is used to see large files. Up and down keys, page up and page down are usable in less. g moves to the beginning of a file, G moves to the end of a text file, /word_search allows to search for a word or phrase, and q is used to quit less.
```
head 'name'
```
Will show by default first 10 lines of a file.
```
tail 'name'
```
Shows by default last 10 lines of a file.

### Windows: Modifying Text Files

**Note**: Notepad++ is used in this tutorial.
```
Start notepad++ 'filename'
```
Will open a document with notepad++.

### Linux: Modifying Text Files

In Linux, **Nano** is a powerful text editor files that can be used in Bash.
```
Nano 'filename'
```
Will launch Nano.

### Windows PowerShell
```
Get-Alias 'command'
```
Shows the original command, example:

`Get-Children C:\`, this is the same command as `ls`, but PowerShell commands are descriptive which means more typing so it's faster to use Aliases.

### Windows: Searching Within Files

Contents of files can't be searched by default in Windows. This can be changed by changing the indexing options and allowing for the search inside of the users's files. This can be done by:

Search bar → indexing options → Users, Advanced → File Type → Index Properties and file contents

Now in the files explorer it is possible to search for a file by typing a word of its content.

It is also possible to use Notepad++ then pressing `Ctrl+Shift+F`.
```
Select-String 'word' 'filename'
```
Will search in the content of a file for a certain word from CLI.
```
Select-String 'word' 'word'*
```
To search for word in a group of files with same names.

### Windows: Searching within Directories

**Filter** can be used in commands to filter the type of result we want, example:
```
ls 'C:\Program Files\' -Recurse -Filter *.exe
```
Will output a list of all exe files in the directory.

### Linux: Searching Within Files
```
grep 'word' 'filename'
```
Is used to search for a word in a file.
```
grep 'word' *'word'
```
Is used to search words in multiple files.

### Windows: Input, Output and the Pipeline
```
echo 'word'
```
Will print the word written.
```
echo 'word'>'filename'
```
Will create the file with the word inside it.

To produce commands in Windows we use **I/O Streams**. Each process has 3 different streams:
- **stdin**: the command we write that will be processed by Windows
- **stdout**: the output of the command printed on the screen
- **stderr**: error messages

`>` is redirect operator that will overwrite a file or create a file that doesn't exist.
`>>` is used to add to a file without overwriting its content.
`|` pipeline used to send output to the input of another command, example:
```
cat 'filename' | Select-String st
```
Now the output of filename will be filtered by st.

It is also possible to add more commands to do more complicated tasks. For example, by adding `>` after st we can make a new file with the filtered words.

When typing a command that causes an error, it is possible to redirect the error to not show on the screen, example:
```
rm filesystem
```
This will surely cause an error saying can't delete, so we can do this:
```
rm filesystem 2> errors.txt
```

All of the output streams are numbered, 1 is for stdout(output), 2 is for stderr(the error).

`$null` is used to redirect output to nothing.

### Linux: Input, Output and Pipeline

I/O streams are the same as Windows.

`<` is used to make the input come from a file specified, example:
```
cat < 'filename'
```
The input would be the content of the file.

`null` in Linux is a file where errors can be redirected.

### Windows and Linux Advanced Navigation

Regular expressions are used to help you do advanced pattern-based selection.

---

## Week 2: Users and Groups

### Users, Administrators, and Groups

#### Types of Users

- **Standard user**: One who is given access to a machine but has restricted access to do things like install software or change certain settings
- **Administrator (admin)**: A user that has complete control over a machine

Users are put together in groups according to levels of access and permissions to carry out certain tasks.

### Windows: View User and Group Information

**Computer Management** tool is used to view users and administrators.

Computer Management (Local) means management is locally happening on a single machine. In an enterprise environment we can manage multiple machines in domains.

**Windows domain** is a network of computers, users, files, etc. that are added to a central database.

- **Task Scheduler**: Lets you schedule tasks and programs to run at specific times
- **Event Viewer**: Where system logs are stored
- **Shared folders**: Shows folders shared by different users on the machine
- **Local Users and Groups**: This is where user management happens
- **Performance**: Shows monitoring for the resources of our machine like CPU and RAM
- **Device Manager**: This is where we go to manage devices to our computer like network card, sound card...
- **Services and Applications**: Menu shows services and applications available on the system, it is possible to enable and disable them from here

In Local User and Groups in users, there is Administrator and Guest. Administrator is a local account that is disabled by default.

Instead of logging into a local administrator account you can log into your own account and use administrator powers thanks to **UAC (User Access Control)**.

UAC is a feature in Windows that prevents unauthorized changes to a system.

### Windows: View User and Group Information using CLI
```
Get-LocalUser
```
Is used to show users with description and if they're enabled.
```
Get-LocalGroup
```
Is used to show groups on the local machine.
```
Get-LocalGroupMember 'group name'
```
Shows what users are in a specific group.

### Linux: Users, Superuser and Beyond

Standard users are administrators in Linux.

**Root user** is the first User that gets automatically created on a Linux machine. This user is the superuser that has all the powers on the Linux OS.
```
sudo 'command'
```
Lets us do commands using administrative powers.
```
sudo su -
```
Changes your current user to root user.
```
exit
```
To logout of root.
```
cat /etc/group
```
Lets us see user groups with each user in which group.

In this list each line is separated by 4 columns:
1. The group
2. The password which is usually 'X' which means encrypted and stored in a file
3. The ID
4. The user inside it
```
cat /etc/password
```
Is where the users information are stored.

### Windows: Passwords

To user reset a password in the GUI we go to:
Computer management → Local Users and Groups → Users → choose user → Check reset password at next logon

If a user forgets his password it is possible for the admin to set a password for the user but this will cause to lose some credentials.
```
net user 'username' 'password'
```
To change a local user's password.
```
net user 'username' *
```
Is a more secure way to type the password.
```
net user 'username' /logonpasswordchg:yes
```
To force a user to change his password on the next logon.

### Linux: Passwords
```
passwd 'username'
```
Is to change a user's password.
```
sudo passwd -e 'username'
```
Will make the password expire which means they will change it.

### Windows: Adding and Removing Users

To add a user go to:
Computer management → Local Users and Groups → right click + select new user

We will need to add a username, full name, and a password. The password would be default so when the user logs in will need to change it.

To remove a user right click on it then delete.
```
net user 'username' * /add
```
Will add a new user to the machine.
```
net user 'username' 'password' /add /logonpasswordchg:yes
```
Will make a new user and force him to change the password in the next login in 1 command.
```
net user 'username' /del
```
Will delete the user.
```
Remove-LocalUser 'username'
```
Another way to remove user.

### Linux: Adding and Removing Users
```
sudo useradd 'username'
```
To add a user.
```
sudo userdel 'username'
```
To delete the user.

---

## Permissions

### Windows: File Permissions

In Windows, files and directory permissions are assigned using **Access Control Lists** or **ACLs**.

Specifically, we're going to be working with **Discretionary Access Control Lists** or **DACLs**.

Windows files and folders can also have **system Access Control Lists** or **SACLs** assigned to them. SACLs are used to tell Windows that it should use an event log to make a note of every time someone accesses a file or folder.

#### Permissions Types
- **Read**: Lets you see file and read it
- **Read and execute**: Lets you see the file and read it, if executable you can execute it
- **List folder contents**: Alias for read & execute
- **Write**: Lets your make changes to a file, you can have write permissions without read
- **Modify**: Includes read, execute and write
- **Full control**: You will have all the permissions
```
icacls 'path'
```
Will show permissions of a user to a directory.

**NTFS permissions** can be inherited so if a file is created inside a NTFS directory where all permissions are granted, the file will have the same permissions.

### Linux: File Permissions

There are 3 permissions in Linux: **Read**, **Write** and **Execute**.
```
ls -l 'file path'
```
Can be used to see file permissions.

The permissions that will appear are: `-rwxrw-r--`

`-` means that the file we're looking at is just a regular file.

The next permissions are set in trios:
- The first trio represents the permissions of the owner of the file
- The second trio represents the group it belongs to
- The third trio represents the permissions of all other users

- **r**: Readable
- **w**: Writable
- **x**: Executable
- **-**: Disabled

### Windows: Modifying Permissions
```
Icacls 'directory path' /grant 'user or everyone:' 'permissions (OI-CI...)'
```

**Guest users**: This is a special type of user that's allowed to use the computer without a password. Guest users are disabled by default; you might enable them in very specific situations.

Authenticated users group doesn't have guest users.
```
icacls 'path' /remove 'user-everyone'
```
To remove permissions from who you want.

### Linux: Modifying Permissions

Permission sets in Linux: Owner (u) - Group (g) - other users (o)

To add or remove permissions we use + or –
```
chmod 'owner-group-another one' '+ or -' 'permissions wanted' 'file'
```

The numerical equivalent of rwx is:
- **4** for read or r
- **2** for write or w
- **1** for execute or x
```
chmod 754 'file'
```
Is chmod using numerical equivalent:
- 7 is the owner's permissions (4+2+1)
- 5 is the group permissions
- 4 is the other's permissions
```
sudo chown 'username' 'file'
```
To change the owner of a file.
```
sudo chgrp 'group name' 'filename'
```
To change group of a file.

### Windows: Special Permissions

Simple permissions are actually sets of special, or specific permissions.

(to rewatch)

### Linux: SetUID, SetGID, Sticky BIT

The **SetUID bit** is used to allow a file to be run as the owner of the file.
```
sudo chmod u+s 'file'
```
Is used to enable SetUID.

If you use ls, in the permissions field the last 's' stands for SetUID enabled.
```
sudo chmod 4755 'file'
```
Is also used for SetUID.
```
sudo chmod g+s 'file'
```
Is used to enable SetGID.
```
sudo chmod 2755 'file'
```
Is also used for SetGID.

If you use ls, beside root we will see tty which means file ran in the tty group which means SetGID enabled.

The **sticky bit** allows the file to be modified by anyone, but only removed by the owner or root.
```
sudo chmod +t 'directory'
```
To enable sticky Bit.
```
sudo chmod 1755 'directory'
```
Is also used to enable sticky Bit.

If you use ls you will see t in the permissions which stands for sticky Bit enabled.

# Course 3 Summary - Part 2 (Weeks 3-6)

## Week 3: Software Distribution

### Windows: Software Packages

**Executable file** (.exe) contains instructions for a computer to execute when they're run.

Exe files might contain text or computer code, images that the program might use, and an msi file.

**Microsoft install package** (.msi) used to guide a program called Windows installer in the installation, maintenance, and removal of programs on the Windows operating system.

Windows executable files are usually used as starting points to bootstrap the Windows installer. They can also be used without msi files but they will need to contain all instructions to install on Windows.

To install with more control you might choose custom install route but it gets tricky when managing things like code dependencies.

Msi installer manages a lot of bookkeeping and setup for you but have a lot of strict rules.

### Linux: Package Dependencies

**Package dependencies** are additional packages that are needed for a package to run correctly.

**Package managers** are used to make sure all dependencies are met when installing a package.

### Windows: Installing Applications

To install a program in Windows, we need to download the installer file, which is usually an .exe file. Then we run the installer and follow the instructions.

### Linux: Package Managers

**Package managers** are used to install, update, and remove software on Linux.

**APT (Advanced Package Tool)** is a package manager used in Debian-based distributions like Ubuntu.
```
sudo apt update
```
Updates the package list.
```
sudo apt upgrade
```
Upgrades all installed packages.
```
sudo apt install 'package name'
```
Installs a package.
```
sudo apt remove 'package name'
```
Removes a package.

### Windows: Updating Applications

Windows Update is used to update Windows and some Microsoft applications.

For other applications, you need to update them manually or use their built-in update feature.

### Linux: Updating Applications

Package managers are used to update applications in Linux.
```
sudo apt update && sudo apt upgrade
```
Updates all installed packages.

### Windows: Removing Applications

To remove a program in Windows, we go to:
Control Panel → Programs → Programs and Features → select the program → Uninstall

### Linux: Removing Applications
```
sudo apt remove 'package name'
```
Removes a package.
```
sudo apt purge 'package name'
```
Removes a package and its configuration files.

### Windows: Verifying Application Installation

To verify if a program is installed in Windows, we can check:
Control Panel → Programs → Programs and Features

### Linux: Verifying Application Installation
```
dpkg -l | grep 'package name'
```
Lists installed packages and filters for the specified package.
```
which 'command'
```
Shows the path of the command if it's installed.

### Windows: Command-Line Installation

Some Windows applications can be installed using the command line.
```
msiexec /i 'path to msi file'
```
Installs an msi package.

### Linux: Command-Line Installation
```
sudo apt install 'package name'
```
Installs a package.
```
sudo dpkg -i 'path to deb file'
```
Installs a .deb package.

### Windows: Chocolatey

**Chocolatey** is a package manager for Windows.
```
choco install 'package name'
```
Installs a package.
```
choco upgrade 'package name'
```
Upgrades a package.
```
choco uninstall 'package name'
```
Uninstalls a package.

### Linux: Advanced Package Management
```
sudo apt-get dist-upgrade
```
Upgrades the distribution.
```
sudo apt autoremove
```
Removes unused dependencies.
```
sudo apt clean
```
Cleans the local repository of retrieved package files.

### Windows: DLLs

**DLLs (Dynamic Link Libraries)** today are assembled by side-by-side assemblies (SxS), stored at C:\Windows\WinSxS. If an application wants to use a DLL, this application will be specified in a Manifest, which tells Windows to load the appropriate library from SxS folder, which also supports access to multiple versions of the same DLL file.

Using `Find-Package` cmdlet we can locate software along with its dependencies.

**Cmdlet** is the name we give to Windows PowerShell commands that use the verb-noun format.

**Sysinternals package** is a set of tools released by Microsoft that can help you troubleshoot all sorts of problems on your Windows computer.

If we use sysinternals in Powershell an error will occur because we need to change the source from Powershell Gallery to chocolatey, to do this:
```
Register-PackageSource -Name chocolatey -ProviderName Chocolatey -Location http://chocolatey.org/api/v2
```
Is used to register the new source.
```
Get-PackageSource
```
To verify the software source is good-to-go.
```
Find-Package sysinternals -IncludeDependencies
```
To locate source and its dependencies.

### Linux: Package Dependencies

Package managers come with the works to make package installation and removal easier, including installing package dependencies.

So for Linux installing a package won't install its dependencies automatically.

### Package Managers

#### Windows: Package Managers

**Package Manager** makes sure that the process of software installation, removal, update, and dependency management is as easy and automatic as possible.

**Chocolatey** is a third party package manager for Windows that helps install any application in its depository.
```
Install-Package -Name sysinternals
```
To install chocolatey.
```
uninstall-Package -Name sysinternals
```
To uninstall chocolatey.

#### Linux: Package Manager Apt

**Apt** makes installing packages easier as it installs dependencies along with them, we can also remove packages if we want.

**Package repository** is servers that act like essential storage for packages.

Repository source files on Ubuntu is `/etc/apt/sources.list`. In Linux there is also special repositories called PPAs.

A **Personal Package Archive (PPA)** is a software repository for uploading source packages to be built and published as an Advanced Packaging Tool (APT) repository by Launchpad.

PPA's are hosted on Launchpad servers; Launchpad is a website hosted by Canonical Limited.

Repositories are regularly updated so we should update them using:
```
sudo apt update
```
To update repositories.
```
sudo apt upgrade
```
To upgrade repositories.

### What's Happening in the Background

#### Windows: Underneath the Hood

If the exe you ran contains details for a custom installation that doesn't use the Windows installer system, then the details of what happens under the hood will be mostly unclear.

**Process monitoring** is usable to check the application installing, it is provided by sysinternals toolkit.

Installation files using the msi format has a set of rules and standards they need to conform to so that the Windows installer system can understand their instructions and perform the installation.

They're actually a combination of databases that contain installation instructions in different tables along with all files, objects, shortcuts the program will need all grouped together. The installer uses the information stored in its database tables to guide how the installation should be performed.

#### Linux: Underneath the Hood

A sample setup script can contain program instructions like compile flappy_app_code into machine instructions, copy compiled flappy app binary to slash bin directory, or create a folder to slash home slash, whatever the username for flappy app is.

### Windows: Devices and Drivers

**Driver** is used to help our hardware devices interact with our operating system.

All drivers and devices will be in device manager. This grouping usually happens automatically when you plug in a new device. It's part of the **plug and play** system that Windows uses to automatically detect new hardware plugged into your computer. It then recognizes and installs the appropriate software to manage it.

Hardware like mouses and keyboards will have a hardware ID assigned to them. This is what new devices plugged in the PC are asked for. The OS uses it to search for the best driver for it, then Windows will install the driver to make it usable.

### Linux: Devices and Drivers

Everything is considered a file in Linux. When a device is connected, a file is created in `/dev`.

**Character devices** like a keyboard or a mouse, transmit data character by character.

**Block devices** like USB drives, hard drives and CDROMs, transfer blocks of data; a data block is just a unit of data storage.

b and c can be found in the first bit of a file (in ls) which stands for character and block.

`/dev/sda`: sda stands for mass storage devices like HDDs.

In Linux a lot of drivers are within the kernel so a device would work automatically. For devices that don't have drivers built-in kernel, there is a kernel module, which is about instead of developers touching the kernel itself which is intimidating, they can make a kernel module which is better to extend kernel functionality.

### Windows: Operating System Updates

**Security patch** is a software that's meant to fix up a security hole.

### Linux: Operating System Updates
```
uname -r
```
To see kernel version.
```
sudo apt full-upgrade
```
To update kernel.

---

## Week 4: Filesystem Types

### Review of Filesystems

**Filesystem** is used to keep track of files and file storage on a disk.

Windows's recommended is NTFS, Linux's recommended is ext4.

NTFS formatted USB's can work with Windows and Linux, but ext4 can't.

Fat32 Works with Windows, MacOS and Linux but it can only be formatted on 32 GB storage and supports only up to 4GB files sizes.

### Disk Partitioning and File System Essentials

**Partition** is the piece of disk you can manage.

**Partition table** tells the OS how the disk is partitioned.

Used disk types: **Master Boot Record (MBR)** - **GUID Partition Table (GPT)**.

MBR is a traditional partition table and it's mostly used in the Windows OS (2TB max volume size - allows only 4 primary partitions, if needed more it will be extended partition, inside extended we will have logical partition).

GPT is the new partition table which is used more than MBR (2TB or greater volume size - 1 partition type - unlimited partitions).

To boot in UEFI you need to have GUID (GPT).

### Windows: Disk Partitioning and Formatting a Filesystem

**Allocation Unit Size** allocates to the size of storage chunks the disk will be split into. If we have small chunks of data, allocating small chunks would be less of a waste. Allocating big chunks would be if we will store big chunks of data on it.

**File and folder compression** means files will take less space on the disk but when we want to open them the CPU will take some time to decompress them.

It is possible to re-partition a disk using diskpart (cmd tool):
```
Diskpart
```
To enter the tool.
```
list disk
```
Used to list disk on our system.
```
select disk 'disk number'
```
Select the disk you want.
```
clean
```
Used to remove all data including partitions.
```
create partition primary
```
Will create a blank partition for our filesystem.
```
select partition 'partition number'
```
Used to select partition.
```
active
```
Mark it as active.
```
format FS='filesystem you want' label='label you want' quick
```
To format the partition.

### Windows: Mounting and Unmounting a Filesystem

**Mounting** is making something accessible to the computer, like a filesystem or a hard disk.

### Linux: Disk Partitioning and Formatting a Filesystem

**Parted** partitioning tool supports both GPT and MBR in interactive and command line.
```
sudo parted -l
```
Shows disk connected to the computer.

The number shows which partition it is, start shows where it starts and end shows where it ends, the size tell us which size it is, the filesystem field shows the filesystem, then there is the name and flags fields.
```
sudo parted /deb/'partition you want'
```
To run parted at a specific disk.
```
print
```
Will show disk details.
```
mklabel 'GPT/MBR'
```
Will assign a partition table to an unrecognized partition table.
```
mkpart 'name' 'filesystem' 'start' 'end'
```
To make a partition in a disk.
```
quit
```
To quit parted.
```
sudo mkfs -t 'format' 'disk'
```
To format a disk to a specific filesystem.

### Linux: Mounting and Unmounting a Filesystem
```
sudo mount 'disk you want' 'directory you want'
```
To mount a disk you want.
```
sudo unmount 'disk'
```
Will unmount the disk you want.

After turning off the PC the mountpoint will disappear. To make it mount automatically after turning the device on:
```
cat /etc/fstab
```
This directory contains mount points.
```
sudo blkid
```
Shows current disks's UUID.

A **UUID** is a unique ID for storage devices. If we add one to fstab the storage device will be mounted automatically.

### Windows Swap

**Virtual memory** is how our OS provides the physical memory available in our computer (like RAM) to the applications that run on the computer. It does this by creating a mapping from virtual to physical addresses.

Programs can use more memory than the amount installed on the computer by using a portion of the storage to make pages.

Data that isn't being used by RAM gets evicted (copied out from RAM into the HDD).

Windows uses **Memory Manager** to manage memory.

### Linux Swap

In Linux, the dedicated area of the hard drive used for virtual memory is known as **swap space**.
```
sudo parted 'location'
mkpart primary 'name' 5GiB 100%
```
The 100% refers that we are using all remaining storage so we should use it all.

To make swap space:
```
sudo mkswap 'path'
sudo swapon 'same path'
```

### Windows: Files

When we refer to file data we mean the content of the file, when we say metadata we mean everything else.

NTFS uses **MFT (Master File Table)** to keep everything straight.

Every file on a volume has at least 1 entry in the MFT (including the MFT itself).

Usually there's 1-to-1 correspondence between files and MFT records, but if a file has a whole lot of attributes, there might be more than 1 record to represent it.

**File Record Number** is the index of the file's entry in the MFT.

**Symbolic links** are kind of shortcuts but at the filesystem level. When we create a symbolic link in the MFT we create an entry that point to the name of another entry or file. The OS treats them like substitutes for the file they're linked to in almost every meaningful way.

If we make a text file and a shortcut for it, if we open the shortcut using notepad with a CMD command the content would be strange text.

Now if we make a symbolic link to the same file and open it through the notepad, the content would be the same.

To make a symbolic link of a file:
```
mklink 'filename' 'the file you want'
```

**Hard Link** is when you create a hard link in NTFS, an entry is added to the MFT that points to the linked file record number, not the name of the file, which means if the name of the file changes the hard link would still point to it.
```
mklink /H 'filename' 'file you want'
```

### Linux: Files

In Linux, metadata and files are organized into a structure called **inode**.

Inodes are stored in inode table which help manage files and filesystem.

Inode stores everything about a file, except for the filename and the file data.

In Linux shortcuts are called **softlink**, and they work the same way as symbolic link does.

**Hardlink** link to inode which is stored in the inode table.

If we `ls -l` a file, in the third field it shows how many hardlinks it has. If this field reaches 0 it means it's completely deleted from the system.
```
ln -s 'file you want' 'filename'
```
Is used to create a softlink to a file.
```
ln 'file you want' 'filename'
```
Is used to create a hardlink to a file.

### Windows: Disk Usage

The idea behind **disk defragmentation** is to take all the files stored on a given disk, and reorganize them into neighboring locations.

This works by making the hard drive's actuator arm travel less to read the data it needs.

Defragmentation is automatic but it can be manually done by the disk defragmentation tool.

### Linux: Disk Usage
```
du -h
```
Shows the disk usage of a specific directory. If not specified it will default your current one. `-h` shows the data in human readable text.
```
df -h
```
Shows free space available on the entire machine.

### Windows: Filesystem Repair

**Data buffer** is a region of RAM that's used to temporarily store data while it's being moved around.

So when files are copied they first gets copied to the data buffer then to the location.

NTFS file system has a recovery measurement in case of sudden accidents called **journaling** (log changes made to a file metadata into a log file called NTFS log). By logging these changes, NTFS created a history of the actions it's taken. Thanks to this if a bug or a crash happened it can start recovery by checking these logs to make sure the system is in a consistent state.

**Self-Healing** in NTFS and Windows makes changes to minor problems and corruptions on the disk automatically in the background.
```
fsutil repair query 'path'
```
To check the process of the self-healing on a specific drive.

If errors are so bad, it is possible to use the chkdsk utility, by opening admin CMD then:
```
CHKDSK
```
Will run the utility in read only mode and scan the disk.
```
CHKDSK /F
```
Will run the utility with permission to modify and fix errors.

If the operating system detects that some data's been corrupted or that the disk has a bad sector, it'll set a bit in a metadata file on the volume that indicates there's corruption.

When the system boots, the check disk utility will check this bit. If it's set, it'll execute and try to repair the corruption by reconstructing the broken bits of the file system from the NTFS log.

### Linux: Filesystem Repair
```
sudo fschk 'path'
```
Will check the filesystem for error.

**NOTE**: The partition needs to be unmounted. If scanned while mounted, damaged filesystem is possible.

---

## Week 5: Life of a Process

### Programs vs Processes Revisited

**Processes** are programs that are running using resources like CPU, RAM...

When we launch apps we launch a process that has a **process ID** which is a unique ID to identify it from other processes.

The kernel makes decision to figure out what resources to give each process.

### Windows: Process Creation and Termination

In Windows, each new process that's created needs a parent to tell the operating system that a new process needs to be made. The child process inherit some things from its parent like variables and settings, which we can collectively refer to as an environment. This gives the child process a pretty good start in life, but after the initial creation step, the child is pretty much on its own. Unlike in Linux, Windows processes can operate independently of their parents.

This means if we run notepad from powershell then terminate powershell process, the notepad process won't terminate.
```
taskkill /pid 'process id'
```
To kill a process using its process ID from the CMD.

### Linux: Process Creation and Termination

In Linux processes have a parent child relationship. This means that every process that you launch comes from another process.

When you startup your computer, the kernel creates a process called init, which has a PID of 1. Init starts up other processes that we need to get our computer up and running. When your processes complete their task, they'll generally terminate automatically. Once a process terminates, it'll release all the resources it was using back to the kernel, so that they can be used for another process.

## Managing Processes

### Windows: Reading Process Information

A process is a program in motion. Once you start it up, the operating system takes that resting code then turns it into a running, responding, working application.

Processes PID is available in 'Details' tab in the task manager.
```
tasklist
```
Will show current running tasks from CMD. From powershell it is `Get-Process`.

### Linux: Reading Process Information
```
ps -x
```
Shows a snapshot of the current processes you have running on your system.
- **STAT** means: R: running - T: stopped - S: interruptible sleep
- **TIME**: total CPU time that the process is taking up
- **COMMAND**: name of the command we're running
```
ps -ef
```
Shows all processes ran by all users (e) with full details (f).
- **UID** indicates the user ID who launched the process
- **PPID** indicates the parent ID
- **C** is the number of children processes that this process has
- **STIME** is the start time of this process
- **TTY** is the terminal associated with the process
```
ps -ef | grep 'process name'
```
Can be used to see a specific process.

To view files corresponding to processes we can view the `/proc` directory.

### Windows: Signals

A **Signal** is a way to tell a process that something's just happened.

A common signal is **SIGINT** (signal interrupt), it is CTRL+C.

Signals are also in Linux, CTRL+C also works.

### Windows: Managing Processes

**Process Explorer** is a utility Microsoft created to let IT Support Specialists, system admins and other users look at running processes.

### Linux: Managing Processes
```
kill 'PID'
```
Is used to terminate a process, this lets the process cleanup before closing (SIGTERM).
```
kill -KILL 'PID'
```
Is used to terminate a process, this closes it right away without cleanup which might lead to corruption (SIGKILL).
```
kill -TSTP 'PID'
```
Is used to suspend a process (SIGTSTP).
```
kill -CONT 'PID'
```
Is used to resume a suspended process (SIGCONT).

### Mobile App Management

In mobile we can't see processes, instead there is the multitasking button that shows running applications, this is the foreground app that shows apps running in the background, when we're in an app the other apps are suspended (pauses and not closed).

## Process Utilization

### Windows Resources Monitoring

**Resource Monitoring** tool on Windows can shows graphs about resources usage of processes.

Processes explorer can also show graphs of specific processes by pressing right click → properties → performance graph, this will show it.
```
Get-Process | Sort CPU -descending | Select -first 3 -property ID, ProcessName, CPU
```
This command will show the top 3 apps using CPU resources.

### Linux: Resources Monitoring
```
top
```
Shows us the top processes running on our machine, q is to quit.
```
uptime
```
Shows current time, how long the system's been running, how many users are logged on, and average load machine.
```
lsof
```
Lists open files and what processes are using them.

---

## Week 6: Remote Access

### Remote Connection and SSH

Remote Connection allows us to manage multiple machines from anywhere in the world.

**Secure shell (SSH)** is a protocol implemented by other programs to securely access one computer from another.

On Linux to login to a remote machine, we have to have an account on that computer, we also need the host name or IP address of that computer.
```
ssh 'username'@'ip address'
```
Connect to another computer remotely.

There is a more secure way, SSH authentication, comes with 2 keys (Private-Public).

**VPN (Virtual Private Network)** allows you to connect to a private network, like your work network, over the internet.

### Remote Connections on Windows

**PuTTY** is an open source software to make remote connections with different protocols including SSH, it is possible to install it using .msi or .exe files.

After installing, you can run it and choose the IP Address, Port, and other options.

After confirming a CMD window will appear which asks for the username and password to make the connection.

From PowerShell you can run PuTTY like this:
```
putty.exe -shh 'user'@'IP address' 'port'
```
Is to make putty connections from Powershell.

### Remote Connection: File Transfer on Linux

**Secure Copy (SCP)** is a command you can use in Linux to copy files between computers on a network.

It utilizes SSH to transfer the data, just like you can SSH to a machine, you can send a file that way, to do this:
```
scp 'path' 'username'@'IP Address'
```
To send a file using SSH.

### Remote Connection: File Transfer on Windows

PuTTY comes with a tool that supports scp, it's called pscp.exe, from Powershell:
```
Pscp.exe 'path' 'username'@'IP Address'
```

Windows provide shared folders which can share a folder with multiple users, to do it:

Right click on the folder → Share with → Specific People

Once the folder is shared it can be accessed from other computers.

Start by opening up this PC. Then going to the computer tab, and from here you can map the folder directly to your computer with the map network drive option. Finally, on another computer, you can visit it directly from the run box by typing in backslash whatever the computer name is and then backslash the folder name that you mapped it to.
```
net share 'folder name'='path' /grant:'specify who', 'permission level'
```
To give users permission to a shared folder to specific people.

The net share command can also be used to list the currently shared folders on your computer by executing it without any arguments.

## Virtualization

### Virtual Machines

A **Virtual instance** is just a single virtual machine.

## Logging

### System Monitoring

The act of creating log events is called **logging**. Your system does a pretty good job of logging events right out of the box. In most systems, there is a service that runs in the background and constantly writes events to logs. These systems are customizable so you can log any specific field you want, but by default it logs all the essentials.

### The Windows Event Viewer

**Event viewer** shows what happened in the system, to launch it type event viewer.

To view custom view (filtered results) press create custom view and choose what you want.

The Windows logs categories contain event logs that are generally applied to the whole OS.

Applications and services logs tracks down information about applications and OSs parts instead of the whole system.

### Linux Logs

Logs in Linux are kept in `/var/logs` directory, var stands for variable which means constantly changing.

`/var/log/syslog` is a directory that logs everything except for off events.

**Logrotation** is when the system deletes log files to clean up space.

**Centralised logging** comes in handy when you work with multiple computers and you want their logs to be stored in a specific place.

If you use the command less and see logs, you might notice a date written in a weird way, these are referred to as **Unix or Epoch Time**, it's the number of seconds since 1-1-1970, so 1501538594 is Mon Jul 31 15:03:14 PDT 2017.

The next field is the user.

The next field is the service referring to.

The next field is the event itself.

### Working with Logs

If you're getting an error from a specific application you can search logs with filtered words like error and the application's name (the command grep can be used).

When you need to see a lot of logs starting from the top or bottom is a good idea, multiple error could be happening because of a root issue in which if it is solved the other error will be solved.

Real-time checking can be done be using this:
```
tail -f /var/log/syslog
```
See logs in real-time.

## Operating System Deployment

### Imaging Software

**Imaging** a machine means formatting a machine with another machine's image.

### Operating Systems Deployment Methods
```
sudo dd tf='path' of='path' bs='size'
```
How to turn data you want to an image.

---
**Next**: [[Education/Courses/Coursera/Google IT Support/Course 3/Windows and Linux CLI Commands|Windows and Linux CLI Commands Reference]]
