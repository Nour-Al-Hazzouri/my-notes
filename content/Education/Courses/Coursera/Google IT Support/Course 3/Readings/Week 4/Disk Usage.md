# Disk Usage (DU) Command

## Overview

The Disk Usage (DU) command is a utility that reports disk space consumption for specified directories. By default, it recursively analyzes directories to provide a comprehensive view of storage utilization across directory hierarchies.

## Command Syntax

```
du [-c[t]] [-l <levels> | -n | -v] [-u] [-q] <directory>
```

## Parameter Options

| Parameter | Function |
|-----------|----------|
| **-c** | Outputs data in CSV format (use -ct for tab-delimited output) |
| **-l** | Specifies the subdirectory depth to analyze (default is 0 levels) |
| **-n** | Disables recursive analysis (examines only the specified directory) |
| **-v** | Displays size (in KB) of intermediate directories |
| **-u** | Counts each instance of hardlinked files separately |
| **-q** | Runs in quiet mode (suppresses standard output) |
| **-nobanner** | Suppresses the startup banner and copyright message |

## CSV Output Format

When using the CSV output option (-c), the command produces data with the following fields:

1. **Path**: Directory location being analyzed
2. **CurrentFileCount**: Number of files in the specified directory only
3. **CurrentFileSize**: Size of files in the specified directory only
4. **FileCount**: Total number of files in the directory and all subdirectories
5. **DirectoryCount**: Number of subdirectories
6. **DirectorySize**: Total logical size of directory and subdirectories
7. **DirectorySizeOnDisk**: Actual physical disk space consumed

This structured output format facilitates data import into spreadsheets and databases for further analysis or reporting.
