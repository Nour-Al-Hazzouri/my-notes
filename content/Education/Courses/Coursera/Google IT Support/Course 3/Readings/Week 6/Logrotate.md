# Logrotate

Logrotate is a utility designed to manage systems that generate large numbers of log files. It automates the maintenance of logs to prevent them from consuming excessive disk space or becoming unwieldy.

## Core Functionality

Logrotate provides four essential log management functions:
- **Rotation**: Archives current log files and creates new ones
- **Compression**: Reduces the size of archived log files
- **Removal**: Deletes old log files based on configured policies
- **Mailing**: Sends log files to specified email addresses

## Execution and Scheduling

- Typically runs as a daily cron job
- Processes each log file according to configured criteria:
  - Daily, weekly, or monthly schedules
  - When logs grow beyond specified size
- Will not modify a log more than once in one day unless:
  - The criterion is size-based and logrotate runs multiple times daily
  - The `-f` or `--force` option is used

## Configuration

- Multiple config files can be specified on the command line
- Later config files override options in earlier files (order matters)
- Directories can be specified to use all contained files as configs
- The `include` directive allows a main config file to incorporate others

## Command Line Behavior

- Without arguments: Displays version, copyright, and usage summary
- With errors during rotation: Exits with non-zero status
- State file: Updated even when errors occur during rotation

Logrotate simplifies log management by automating routine maintenance tasks, helping system administrators maintain efficient and organized logging systems.
