# Creating Symbolic Links in Windows

## Overview

Symbolic links are special file system objects that point to other files or directories, allowing for flexible file organization and management. Windows supports creating symbolic links through the **CreateSymbolicLink** function, which can utilize either absolute or relative path references.

## Types of Symbolic Links

### Absolute Symbolic Links
- Specify each portion of the path name explicitly
- When processed, the link component and everything before it is completely replaced by the target path
- Can point directly to remote locations using UNC paths
- Example: If "absLink" maps to "\\machineB\share", then "C:\alpha\beta\absLink\gamma\file" resolves to "\\machineB\share\gamma\file"

### Relative Symbolic Links
- Determined relative to their location in the specified path
- Restricted to a single volume
- When processed, only the link component is replaced, with path resolution applied afterward
- Example: If "link" maps to "..\..\theta", then "C:\alpha\beta\link\gamma\file" resolves to "C:\theta\gamma\file"

## Relative Link Conventions

Windows supports four methods for specifying relative links:

1. **Dot Notation**: Using "." (current directory) and ".." (parent directory)
   - Example: "..\data" resolves to the "data" directory in the parent folder

2. **Simple Names**: Names without slashes
   - Example: "tmp" resolves to a "tmp" directory in the current location

3. **Root-Relative Paths**: Paths starting with a backslash
   - Example: "\Windows\System32" resolves to "[current drive]:\Windows\System32"

4. **Working Directory-Relative**: Paths relative to the current working directory
   - Note: These are actually created as absolute links due to working directory processing

## Special Considerations

- Symbolic links can include junction points and mounted folders as part of the path
- Path resolution with relative links replaces components that appear before dots (..)
- An error occurs if the number of dots (..) exceeds available components
- Current working directory-relative links are always created as absolute links
