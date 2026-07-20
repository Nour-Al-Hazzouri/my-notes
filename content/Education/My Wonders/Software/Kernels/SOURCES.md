# Kernel Architecture & Operating System Fundamentals - Research Sources

## 1. Glossary & Logic Concepts

* **Source:** Wikipedia - Operating System Kernel
  * **Link:** https://en.wikipedia.org/wiki/Kernel_(operating_system)
  * **Extraction Log:** General definitions of Monolithic vs Microkernel vs Hybrid. Kernel space vs user space operations. Direct function calls vs IPC (Inter-Process Communication).
* **Source:** GeeksforGeeks - Monolithic Kernel and Key differences from Microkernel
  * **Link:** https://www.geeksforgeeks.org/monolithic-kernel-and-key-differences-from-microkernel/
  * **Extraction Log:** Performance metrics and fault tolerance comparisons between monolithic and microkernels. Monolithic uses single address space, microkernel uses isolated user-space processes.
* **Source:** OSDev.org - Memory Management
  * **Link:** https://wiki.osdev.org/Memory_Management
  * **Extraction Log:** Details on Paging, Virtual Memory, and Kernel memory models. Concurrency models in OS Dev.

## 2. Core Software Profile & Architecture

* **Source:** Kernel.org - Kernel Parameters
  * **Link:** https://www.kernel.org/doc/html/latest/admin-guide/kernel-parameters.html
  * **Extraction Log:** Information on boot parameters (`debug`, `loglevel`, `nomodeset`). The use of optimization flags for debugging instead of `-O2` or `-O0`.
* **Source:** DigitalOcean - Using journalctl to View System Logs
  * **Link:** https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs
  * **Extraction Log:** Diagnostics using systemd journal (`journalctl -k`, `journalctl -b`).
* **Source:** Linux Man Pages (man7.org) - dmesg
  * **Link:** https://man7.org/linux/man-pages/man1/dmesg.1.html
  * **Extraction Log:** Real-time kernel ring buffer monitoring with `dmesg -w` and human-readable timestamps `dmesg -T`.

## 3. Security, Networking & Optimization

* **Source:** Linux.com - Linux Security Modules (LSM)
  * **Link:** https://www.linux.com/training-tutorials/overview-linux-kernel-security/
  * **Extraction Log:** Difference between DAC (Discretionary Access Control) and MAC (Mandatory Access Control). Explanation of SELinux (Type Enforcement, RBAC) and AppArmor (Path-based).
* **Source:** Red Hat - What is SELinux?
  * **Link:** https://www.redhat.com/en/topics/linux/what-is-selinux
  * **Extraction Log:** Mandatory Access Control mechanism details. Confining processes based on security policies.
* **Source:** Microsoft Learn (via MDPI/Dev.to research) - Windows Security Model
  * **Link:** https://learn.microsoft.com/en-us/windows/security/
  * **Extraction Log:** Mandatory Integrity Control (MIC) and Access Control Lists (ACLs) in Windows Kernel architecture. User Account Control and Object-based permissions.

## 4. Hardware Constraints & Memory

* **Source:** Wikipedia - Virtual Memory & Paging
  * **Link:** https://en.wikipedia.org/wiki/Virtual_memory
  * **Extraction Log:** Paging, swap space, and memory allocation strategies. Threading concurrency models in Kernel.

---

**Note:** These links have been gathered via live web search results to ensure they represent currently available and highly relevant technical documentation on OS kernels. Please review and approve these sources before the comprehensive research report is compiled.
