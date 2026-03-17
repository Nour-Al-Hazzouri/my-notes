# Size vs Size on Disk: Understanding Windows File Properties

## What These Measurements Mean

When viewing a folder's properties in Windows, two size measurements are displayed:

**Size**: The total sum of all file sizes within the folder, calculated through a recursive directory search. This measurement:
- Doesn't detect duplicate files via hard links (counts the same file multiple times)
- Skips subdirectories you don't have access to
- Doesn't follow reparse points
- Counts symbolic links as zero size
- Uses the FindFirstFile function's reported file sizes
- May be inaccurate for files still being written to until file handles are closed

**Size on disk**: The actual space consumed on the storage medium, calculated differently based on file attributes:
- For compressed/sparse files: Uses the GetCompressedFileSize function
- For regular files: File size rounded up to the nearest cluster
- Originated from Windows 95 team with FAT filesystem assumptions

## Limitations and Inaccuracies

These measurements have significant limitations:
- NTFS can store small files in the Master File Table (MFT) slack space, using zero clusters
- Neither measurement accounts for filesystem overhead:
  - Space used by filenames
  - Directory entry information
  - File metadata
  - Alternate data streams
- Particularly inaccurate for directories with many hard links (like the Windows directory)

## Practical Application

The Size on disk value should be treated as a "sniff-test" for rough disk space estimates. For accurate disk usage tracking, Microsoft recommends using Disk Quotas, which more intelligently tracks actual disk consumption.
