# Common Scripting Solutions

## Introduction
- **Scripting vs. Programming**: Scripting languages are translated (not compiled into executables) and combine existing components
- **IT Support Applications**: Automation of routine tasks, backups, security settings changes, and high-volume operations

## Scripting Languages by Environment

### Windows Environments
- **PowerShell (.ps1)**
  - Built on .NET platform
  - Used for building, testing, deploying solutions
  - Primary tool for system management automation

- **Batch Scripts (.bat)**
  - Legacy from MS-DOS and OS/2 era
  - Simple task execution
  - Example use: Setting up employee workspaces at startup

- **Visual Basic Script (.vbs)**
  - Older scripting language
  - End-of-life for Microsoft support
  - Still found in legacy systems

### Linux and Unix Environments
- **Shell Script (.sh)**
  - Used in command-line interpreter shells
  - Common shells: Bourne, Bash, C shell, Korn shell
  - Functions: File manipulation, program execution, system navigation

### Cross-Platform Languages
- **JavaScript (.js)**
  - Most used programming language worldwide
  - Applications: Web development, mobile/web apps, games
  - Can automate web server functions

- **Python (.py)**
  - User-friendly programming language
  - Extensive automation libraries
  - Advanced task capabilities

## Common Use Cases

### Task-Specific Solutions
- **Basic Automation**: Python (preferred)
- **Restarting Machines**: PowerShell (Windows), Shell scripts (Linux)
- **Mapping Network Drives**: PowerShell (current Windows), Shell scripts (Linux)
- **Installing Applications**: Batch files, Shell scripts
- **Automated Backups**: PowerShell (Windows), Shell scripts (Linux/Unix)
- **Data Gathering**: Python (extensive libraries available)
- **Initiating Updates**: PowerShell (Windows), Shell scripts (Linux)

## Security Risks

### Potential Dangers
- **Malware Introduction**: Risk from unverified scripts downloaded from internet
  - Potential for file deletion, data corruption, information theft
  - Can create security weaknesses and entry points for attackers
  - Ransomware risk (file encryption for ransom)

- **System Setting Changes**: Inadvertent configuration of harmful settings
  - Example: Typos in permission scripts exposing confidential files

- **Resource Mishandling**: Browser or system crashes
  - Example: Memory overallocation causing system failure
