# RAM Technical Reference Note

## I. Glossary & Key Concepts

| Term | Definition | Practical Example | Comparison Value |
| :--- | :--- | :--- | :--- |
| **MT/s (MegaTransfers per second)** | The effective data rate, representing the number of data transfers occurring per second. | 6000 MT/s is often labeled as "6000 MHz" in consumer marketing. | Higher MT/s increases bandwidth but may require higher latency or voltage. |
| **CAS Latency (CL)** | The delay (in clock cycles) between the memory controller requesting data and the data being available. | DDR5-6000 CL30 vs CL40. | Lower CL is better for gaming and latency-sensitive tasks. |
| **Channel (Single/Dual/Quad)** | The communication path between the CPU and RAM. DDR5 introduces **two 32-bit sub-channels** per single DIMM. | Running two 16GB sticks in slots 2 and 4 for "Dual Channel" mode. | Dual-channel doubles the theoretical bandwidth compared to single-channel. |
| **PMIC (Power Management IC)** | An on-module chip that manages voltage regulation for DDR5, moving it off the motherboard. | A high-end DDR5 kit with an "Unlocked PMIC" for extreme overclocking. | Improves power integrity but makes the RAM module run hotter. |
| **On-Die ECC** | Error Correction Code built into the memory chip itself to handle internal bit-flips (Standard in DDR5). | All DDR5 sticks have On-Die ECC, but this is NOT the same as "Server ECC". | Handles cell-level errors but does not correct errors during data transmission to the CPU. |
| **XMP / EXPO** | Pre-defined overclocking profiles (Intel/AMD) stored on the RAM's SPD chip. | Enabling "EXPO I" in BIOS to run RAM at 6000 MT/s instead of JEDEC 4800. | Simplifies high-speed setup for non-technical users. |
| **SPD (Serial Presence Detect)** | A small EEPROM chip on the module containing its timing, voltage, and manufacturer data. | Using CPU-Z to read the "SPD" tab and see the module's rated specs. | Essential for the motherboard to know how to boot the RAM correctly. |
| **Bank Groups** | A logical grouping of memory banks. DDR5 doubles the number of bank groups (8) compared to DDR4 (4). | Improves efficiency by allowing the memory to start a new access while another is finishing. | Key to DDR5's improved performance at higher speeds. |

---

## II. Core Technical Specifications

| Specification | Desktop (DDR5 DIMM) |
| :--- | :--- |
| **Standard** | JEDEC JESD79-5 |
| **Max Transfer Rate** | ~8400+ MT/s (Enthusiast) |
| **Operating Voltage** | 1.1V (Standard) / 1.4V+ (OC) |
| **Physical Interface** | 288-pin DIMM |
| **Channel Width** | 2x 32-bit (per module) |
| **PMIC Location** | On-Module |
| **Capacity (Per Die)** | 16Gb / 24Gb / 32Gb |
| **ECC Support** | On-Die (Standard) |

---

## III. Full Generational Evolution Table

| Year/Version | Type | Connector | Voltage | Performance (Max Bandwidth / Rate) |
| :--- | :--- | :--- | :--- | :--- |
| 1993 | SDRAM (SDR) | 168-pin DIMM | 3.3V | 100 - 133 MHz / 1.0 GB/s |
| 2000 | DDR1 | 184-pin DIMM | 2.5V | 200 - 400 MT/s / 3.2 GB/s |
| 2003 | DDR2 | 240-pin DIMM | 1.8V | 400 - 1066 MT/s / 8.5 GB/s |
| 2007 | DDR3 | 240-pin DIMM | 1.5V / 1.35V | 800 - 2133 MT/s / 17.0 GB/s |
| 2014 | DDR4 | 288-pin DIMM | 1.2V | 2133 - 5333 MT/s / 25.6 GB/s |
| 2021 | DDR5 | 288-pin DIMM | 1.1V | 4800 - 8400+ MT/s / 67.2+ GB/s |

---

## IV. Architecture & System Integration

### Sub-Channel Architecture (DDR5)
Unlike DDR4's single 64-bit bus, DDR5 splits each module into **two independent 32-bit sub-channels**. This allows the memory controller to perform two smaller, more efficient data transfers simultaneously rather than one large one, significantly reducing "waiting" time (latency).

### Power Management (The PMIC Shift)
DDR5 modules now feature a **PMIC (Power Management Integrated Circuit)** directly on the PCB. This handles the voltage conversion from 5V (from the board) to the 1.1V needed by the chips. This move reduces noise and heat on the motherboard and allows for more granular power control, which is essential for the higher frequencies of DDR5.

### Integrated Sub-systems: On-Die ECC vs. Side-band ECC
*   **On-Die ECC (Standard):** Corrects bit-flips inside the DRAM chips themselves. As memory density increases, cells become smaller and more prone to "random" errors. This is mandatory for DDR5 stability.
*   **Side-band ECC (Server/Pro):** Requires an extra 8-bits of data (an extra chip on the module) and a CPU/Chipset that supports it. This corrects errors *during transmission* from the RAM to the CPU.

---

## V. Compatibility & Ecosystem Integration

### Physical Form Factor
*   **DIMM (Desktop):** The standard 288-pin stick used in all desktop motherboards. DDR5 DIMMs have a different notch position than DDR4, preventing incorrect insertion.

### Profile Compatibility
*   **Intel XMP 3.0:** Advanced memory profiles for Intel platforms.
*   **AMD EXPO:** Optimized profiles for AMD AM5 platforms, focusing on latency and infinity fabric synchronization.

---

## VI. Physical, Electrical & Thermal Constraints

1.  **Thermal Management:** DDR5 modules run hotter due to the on-board PMIC. High-performance kits require thermal pads and metal heatspreaders to keep the PMIC under 85°C to avoid throttling or crashing.
2.  **Voltage Limits:** While JEDEC defines 1.1V, extreme kits push up to 1.45V or 1.5V. Exceeding 1.1V requires high-quality VRMs on the motherboard and robust cooling.
3.  **Signal Integrity:** Because DDR5 runs at such high speeds (>6GHz), the distance between the CPU and the RAM slots is critical. This is why many ITX boards only have 2 slots (shorter traces = cleaner signals = higher speeds).

---

## VII. Troubleshooting & Field Diagnostics

### Symptom: "IRQL_NOT_LESS_OR_EQUAL" BSOD
*   **Cause**: Often a memory addressing error caused by unstable timings or a faulty chip.
*   **Isolation**: Run **MemTest86+** for 4 passes. If any errors appear (red text), the RAM or the memory controller is unstable.

### Symptom: System won't boot after enabling XMP/EXPO
*   **Cause**: The CPU's memory controller (IMC) cannot handle the requested speed/voltage.
*   **Isolation**: Clear CMOS to reset BIOS. Try a lower MT/s profile or update BIOS to improve IMC compatibility.

### Symptom: Half of RAM capacity missing in Windows
*   **Cause**: A loose stick or a "dead" channel.
*   **Isolation**: Reseat both sticks. If still missing, swap sticks between slots to determine if the fault is with the module or the motherboard slot.
