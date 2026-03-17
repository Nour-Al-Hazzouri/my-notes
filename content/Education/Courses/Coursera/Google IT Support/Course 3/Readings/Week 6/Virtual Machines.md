# Virtual Machines

Virtualization creates simulated computer environments for running complete operating systems without modifying your primary system. This guide explains virtual machine concepts and implementation options.

## How Virtual Machines Work

A virtual machine (VM) is a simulated computer environment that runs within a window on your physical computer:

- The operating system on your physical computer is the "host" OS
- Operating systems running inside VMs are "guest" OSs
- Guest operating systems function as if running on dedicated hardware
- VMs are accessed by opening virtualization software on your host system

## Key Benefits of Virtualization

Virtual machines offer several advantages:

- **Experimentation**: Test different operating systems without modifying your host OS
- **Isolation**: Software in VMs cannot affect the host system or other VMs
- **Resource Efficiency**: Run multiple operating systems on a single physical computer
- **Cost Reduction**: Decrease hardware and electricity expenses by consolidating systems

## Resource Allocation

VM software divides hardware resources among virtualized environments:

- **Virtual Hard Drives**: Allocate specific amounts of physical storage
- **Virtual RAM**: Assign portions of system memory to each VM
- **Resource Adjustment**: Modify allocations after VM creation as needed

## Common VM Software

### Free Options
- **VirtualBox**: Cross-platform (Windows, Linux, Mac, Solaris), open-source solution supporting various guest OSs
- **Hyper-V**: Microsoft's integrated virtualization platform for Windows, supporting Windows, Linux, and FreeBSD (no macOS support)
- **VMware Workstation Player**: Free for non-commercial use, runs on Windows, Linux, and macOS

### Commercial Options
- **Red Hat Virtualization (RHV)**: Enterprise-focused platform with annual subscription for support and updates

## Key Takeaways

- Virtual machines provide isolated environments for running complete operating systems
- Virtualization enables experimentation, testing, and efficient resource utilization
- Various software options exist for creating VMs, from free open-source to commercial solutions
- Resource allocation can be customized based on specific virtualization needs
