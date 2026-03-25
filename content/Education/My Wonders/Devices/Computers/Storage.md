# Storage Device Technical Reference Note

## I. Glossary & Key Concepts

| Term | Definition | Practical Example | Comparison Value |
| :--- | :--- | :--- | :--- |
| **IOPS (Input/Output Operations Per Second)** | The number of read or write operations a storage device can handle every second. | A Samsung 990 Pro reaching **1.55 Million IOPS**. | Higher IOPS means faster responsiveness in multitasking and heavy database work. |
| **Throughput (MB/s / GB/s)** | The total volume of data transferred per second (sequential). | Moving a 100GB game file at **12 GB/s** on a Gen 5 NVMe. | Critical for large file transfers (video editing, loading game assets). |
| **TBW (Terabytes Written)** | The total amount of data that can be written to an SSD before it is expected to wear out. | A 2TB SSD rated for **1,200 TBW**. | Defines the physical lifespan of the NAND flash; higher is better for workstation use. |
| **NAND Types (SLC/MLC/TLC/QLC)** | The way data is stored in cells (1, 2, 3, or 4 bits per cell). | Most modern desktop SSDs use **3D TLC** (Triple Level Cell). | SLC is fastest/longest-lived; QLC is cheapest/highest density but slower/less durable. |
| **DRAM Cache** | A small, ultra-fast memory chip on the SSD controller used to store the "map" (L2P table) of where data is. | A 2TB SSD with **2GB of LPDDR4 DRAM**. | Drives with DRAM are significantly faster and more consistent than "DRAM-less" drives under load. |
| **S.M.A.R.T.** | Self-Monitoring, Analysis, and Reporting Technology helps predict drive failure. | Checking "Percentage Used" and "Critical Warning" in CrystalDiskInfo. | Absolute requirement for preventative data safety. |
| **NVMe (Non-Volatile Memory express)** | A high-speed protocol designed specifically for flash storage over PCIe. | NVMe 2.0 standard supports new features like **Endurance Group Management**. | Replaces the legacy AHCI protocol used for slower SATA drives. |
| **TRIM** | An OS command that tells the SSD which data blocks are no longer in use and can be wiped internally. | Windows running "Optimize Drives" on a schedule. | Prevents performance degradation over time as the drive fills up. |
| **Sustained Transfer Rate** | The actual speed a drive can maintain after its temporary SLC/DRAM caches are exhausted. | An 8TB HDD maintaining **220 MB/s** continuously. | SSDs often drop speed after writing several hundred GBs once the "SLC Cache" is full. |

---

## II. Core Technical Specifications

| Specification | Desktop HDD (7200 RPM) | SATA III SSD | NVMe Gen 4 (Samsung 990 Pro) | NVMe Gen 5 (Crucial T700) |
| :--- | :--- | :--- | :--- | :--- |
| **Sequential Read** | ~220 - 250 MB/s | ~560 MB/s | Up to **7,450 MB/s** | Up to **12,400 MB/s** |
| **Sequential Write** | ~220 - 250 MB/s | ~530 MB/s | Up to **6,900 MB/s** | Up to **11,800 MB/s** |
| **Random Read (IOPS)** | ~100 - 150 IOPS | ~95,000 IOPS | Up to **1,400,000 IOPS** | Up to **1,500,000 IOPS** |
| **Protocol / Bus** | SATA 3.0 / 6Gbps | SATA 3.0 / 6Gbps | NVMe 2.0 / PCIe 4.0 x4 | NVMe 2.0 / PCIe 5.0 x4 |
| **Typical Capacity** | 1TB - 24TB | 250GB - 8TB | 1TB - 4TB | 1TB - 4TB |
| **Endurance (2TB Env)** | Mechanically Limited | ~600 - 1200 TBW | **1,200 TBW** | **1,200 TBW** |
| **Latency** | High (~10-15ms) | Medium (~0.1ms) | Low (<0.02ms) | Ultra-Low (<0.01ms) |

---

## III. Full Generational Evolution Table

| Year/Version | Interface | Command Set | Peak Theoretical Speed | Primary Physical Media |
| :--- | :--- | :--- | :--- | :--- |
| 1986 | **IDE / PATA** | ATA-1 | 3.3 MB/s | Platter (HDD) |
| 2003 | **SATA I** | AHCI | 1.5 Gbps (150 MB/s) | Platter (HDD) / Early SSD |
| 2004 | **SATA II** | AHCI | 3.0 Gbps (300 MB/s) | Platter (HDD) / SSD |
| 2009 | **SATA III** | AHCI | 6.0 Gbps (600 MB/s) | SSD Flagships (SATA) |
| 2013 | **NVMe Gen 3** | NVMe 1.x | 3.94 GB/s (x4) | M.2 (PCIe 3.0) |
| 2019 | **NVMe Gen 4** | NVMe 1.4 | 7.88 GB/s (x4) | M.2 (PCIe 4.0) |
| 2021+ | **NVMe Gen 5** | NVMe 2.0 | 15.75 GB/s (x4) | M.2 (PCIe 5.0) |

---

## IV. Architecture & System Integration

### Flash Storage Architecture (SSD)
1.  **NAND Controller**: The "brain" that manages data placement, wear leveling, and error correction (ECC). Flagship controllers (like Samsung Pascal or Phison E26) have multi-core ARM chips.
2.  **Flash Translation Layer (FTL)**: A software layer in the controller that maps logical addresses from the OS to physical NAND cells. 
3.  **3D V-NAND / BiCS**: Instead of fitting cells side-by-side, manufacturers "stack" cells vertically (up to 232+ layers) to increase density and reduce interference.
4.  **SLC Caching**: A performance trick where a portion of TLC/QLC NAND operates in "Single Level Cell" mode. This allows for extremely fast bursts of writes until the SLC buffer is full.

### HDD Mechanical Integration
Desktop HDDs utilize **CMR (Conventional Magnetic Recording)** or **SMR (Shingled Magnetic Recording)**. CMR is preferred for performance as it allows random writes without rewriting adjacent tracks. The drive motor spins at 7200 RPM, and an actuator arm moves a reader head across the spinning platters.

### Integrated Sub-systems: Storage Management
Modern SSDs integrated into the desktop ecosystem rely on **Host Memory Buffer (HMB)** in DRAM-less drives to "borrow" system RAM for the L2P table, though flagship drives always include dedicated on-board DRAM for maximum stability.

---

## V. Compatibility & Ecosystem Integration

### M.2 Keying & PCIe x16 Allocation
*   **M-Key (M.2 NVMe)**: Uses 4 PCIe lanes for maximum bandwidth.
*   **Physical slots**: A Gen 5 SSD can fit in a Gen 4 slot, but its speed will be capped at Gen 4 limits (~7.5 GB/s).
*   **PCIe Lane Spacing**: Plugging a Gen 5 NVMe into a slot that shares lanes with the GPU (on many Intel/AMD boards) will often drop the GPU from x16 to x8.

---

## VI. Physical, Electrical & Thermal Constraints

1.  **Thermal Throttling (NVMe)**: High-speed controllers generate significant heat. Gen 5 SSDs (like the T700) **require active or massive passive heatsinks**. Without them, the drive will throttle to SATA-like speeds or shut down to protect the NAND.
2.  **Form Factors**:
    *   **3.5" HDD**: Standard desktop hard drive.
    *   **2.5" SSD/HDD**: Slimmer drives typically used for SATA SSDs.
    *   **M.2 2280**: The most common desktop SSD size (22mm wide, 80mm long).
3.  **Power Draw**: High-end NVMe drives can draw 8W - 12W during heavy operations, while HDDs draw ~5-10W (mostly to spin the motor).

---

## VII. Troubleshooting & Field Diagnostics

### Symptom: Drive disappears from BIOS after a cold boot
*   **Cause**: "Sudden Death" of the controller or firmware panic.
*   **Field Protocol**: Power cycle the PC. If it's a SATA drive, swap cables. If M.2, try the second slot. If still gone, the controller hardware has likely failed.

### Symptom: Extremely slow write speeds (worse than HDD)
*   **Cause**: The **SLC Cache is exhausted** or the drive is near 100% capacity. SSD performance drops significantly when the controller has to move data around to find free space ("Write Amplification").
*   **Field Protocol**: Ensure TRIM is enabled. Delete unnecessary files to keep the drive below 80-90% usage.

### Symptom: Clicking or "Grinding" noise
*   **Cause**: Mechanical failure of the HDD actuator arm or motor (Head Crash).
*   **Field Protocol**: **Immediately back up data**. Do not continue using the drive, as the reader head is likely scratching the physical platters.
