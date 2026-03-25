# CPU Technical Reference Note

## I. Glossary & Key Concepts

| Term | Definition | Practical Example | Comparison Value |
| :--- | :--- | :--- | :--- |
| **P-core (Performance Core)** | Large, high-frequency cores designed for heavy single-threaded tasks and low-latency workloads. | Running a complex gaming engine (e.g., Unreal Engine 5). | Defines peak single-core performance; usually higher IPC than Efficient cores. |
| **E-core (Efficiency Core)** | Smaller, area-optimized cores designed for multi-threaded throughput and background task offloading. | Handling OS background services, browser tabs, or video encoding. | Optimizes power-to-performance ratio; allows for high core counts in limited thermal envelopes. |
| **ISA (Instruction Set Architecture)** | The abstract model of a computer that defines the set of instructions it can execute (e.g., x86). | Intel and AMD both use the x86_64 instruction set for desktop CPUs. | Determines software compatibility; x86 leads in legacy desktop support. |
| **IPC (Instructions Per Clock)** | The average number of instructions a processor executes in a single clock cycle. | AMD Zen 5 achieves a ~16% IPC uplift over Zen 4. | A better metric of architectural efficiency than raw GHz. |
| **Clock Cycle / Frequency** | The time between two pulses of the processor's oscillator, measured in Hertz (GHz). | A CPU running at 5.0 GHz performs 5 billion cycles per second. | Higher frequency increases speed but often increases power/heat exponentially. |
| **iGPU (Integrated Graphics)** | A graphics processor built directly into the same silicon die or package as the CPU. | Intel UHD 770 in desktop i9-14900K or AMD Radeon Graphics in Ryzen 9000. | Eliminates the need for a separate graphics card for standard tasks/light gaming; shares system RAM. |
| **TDP / PBP (Thermal Design Power)** | The maximum amount of heat a cooling system must dissipate under a sustained workload. | An Intel i9-14900K has a 125W PBP but can spike to 253W (PL2). | Critical for cooler and PSU selection. Desktop CPUs vary widely (65W-300W+). |

---

## II. Core Technical Specifications

| Specification | Intel i9-14900K | AMD Ryzen 9 9950X |
| :--- | :--- | :--- |
| **Process Node** | Intel 7 (10nm ESF) | TSMC 4nm |
| **Total Cores / Threads** | 24C/32T (8P+16E) | 16C/32T |
| **Base Clock (P-core)** | 3.2 GHz | 4.3 GHz |
| **Boost Clock (P-core)** | 6.0 GHz | 5.7 GHz |
| **L1 Cache (per core)** | 80KB I + 48KB D (P) | 32KB I + 48KB D |
| **L2 Cache** | 2MB/P-core, 4MB/E-cluster | 1MB per core (16MB total) |
| **L3 Cache** | 36MB shared | 64MB shared (80MB total) |
| **Memory Support** | DDR5-5600 / DDR4-3200 (Dual) | DDR5-5600 (Dual) |
| **iGPU** | Intel UHD 770 (32 EU) | Radeon Graphics (2 CU, RDNA 2) |
| **Socket** | LGA 1700 | AM5 (LGA 1718) |
| **TDP / PBP** | 125W (PL2: 253W) | 170W |

---

## III. Full Generational Evolution Table

| Year/Version | Architecture / Gen | Manufacturer | Physical Interface / Socket | Electrical/Power Specs | Primary Performance Metric (Flagship Core Count / IPC Uplift) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1978 | **8086** | Intel | DIP-40 | 2.5W | 1 Core / ~5 MHz |
| 1993 | **Pentium (P5)** | Intel | Socket 4/5/7 | ~15W | 1 Core / Superscalar |
| 2003 | **Athlon 64 (K8)** | AMD | Socket 754/939 | ~89W | 1 Core / First x86-64 |
| 2006 | **Core 2 Duo** | Intel | LGA 775 | ~65W | 2 Cores / Massive IPC Jump |
| 2011 | **Sandy Bridge** | Intel | LGA 1155 | ~95W | 4 Cores / Integrated GPU |
| 2017 | **Zen 1 (Ryzen)** | AMD | AM4 | ~95W | 8 Cores / AMD's Comeback |
| 2021 | **Alder Lake (12th Gen)** | Intel | LGA 1700 | 125W-241W | 16 Cores / Hybrid (P+E) Arch |
| 2022 | **Zen 4 (Ryzen 7000)** | AMD | AM5 | 105W-170W | 16 Cores / 5nm / DDR5 Only |
| 2024 | **Zen 5 (Ryzen 9000)** | AMD | AM5 | 65W-170W | 16 Cores / 4nm / +16% IPC |

---

## IV. Architecture & System Integration

### Intel (Desktop — Raptor Lake / Arrow Lake)
*   **Hybrid Architecture:** Combines **Raptor Cove** P-cores (high clock, high IPC) and **Gracemont** E-cores (throughput, efficiency) on a monolithic die. Arrow Lake transitions to a tile-based design with **Lion Cove** P-cores and **Skymont** E-cores.
*   **Integrated Graphics (UHD 770):** Features 32 Execution Units based on the Xe-LP architecture. Sufficient for display output, basic media playback, and troubleshooting without a discrete GPU.
*   **Vendor Tech — Thread Director:** A hardware-level scheduler embedded in the CPU that communicates real-time core telemetry (instruction mix, thermal state) to the OS. The OS kernel uses this data to place performance-sensitive threads on P-cores and background tasks on E-cores in real time.

### AMD Zen 5 (Desktop — Ryzen 9000)
*   **Front-End Overhaul:** Uses an **8-wide dispatch** and wider execution engines (6 Integer, 4 FP pipelines) to maximize parallelism.
*   **Integrated Graphics (Radeon):** Modern Ryzen CPUs (7000/9000 desktop) include a basic RDNA 2 iGPU (2 Compute Units). Useful for display output and troubleshooting.
*   **Clock Efficiency:** Focuses on maintaining high "effective" clocks through improved branch prediction rather than just increasing raw MHz.
*   **Chiplet Ecosystem:** Connects CCDs (Core Complex Dies) to a centralized I/O Die via Infinity Fabric, supporting PCIe 5.0 and DDR5-5600+.
*   **Vendor Tech — Precision Boost Overdrive (PBO):** An automated overclocking framework that dynamically pushes boost clocks beyond default limits by adjusting three power gates: **PPT** (Package Power Tracking), **TDC** (Thermal Design Current), and **EDC** (Electrical Design Current). PBO2 adds per-core **Curve Optimizer** for manual voltage offsets.

---

## V. Compatibility & Ecosystem Integration

| Component | Intel (Desktop) | AMD (Desktop) |
| :--- | :--- | :--- |
| **OS Support** | Windows (x64), Linux | Windows (x64), Linux |
| **Instruction Set** | x86_64 (CISC) | x86_64 (CISC) |
| **Memory** | User-Replaceable DIMMs | User-Replaceable DIMMs |
| **Cooling** | Active (Air/Liquid) mandatory | Active (Air/Liquid) mandatory |
| **Memory Channels** | 2 (Dual-Channel DDR5) | 2 (Dual-Channel DDR5) |
| **PCIe Lanes (CPU-direct)** | 20x PCIe 5.0 | 24x PCIe 5.0 |

---

## VI. Physical, Electrical & Thermal Constraints

1.  **Desktop Power Excursions:** Modern Intel flagship CPUs can draw over **300W** in bursts (unlocked PL1/PL2). This requires high-pressure contact frames and 360mm+ AIO liquid coolers to prevent thermal throttling at 100°C.
2.  **LGA Sockets:** Desktop CPUs use **LGA (Land Grid Array)** sockets for user upgrades. The pins are on the motherboard, and the CPU has flat contact pads. Handle with care — bent motherboard pins can render a board useless.
3.  **IHS (Integrated Heat Spreader):** The metal lid soldered or glued on top of the CPU die. It distributes heat evenly to the cooler. "Delidding" (removing the IHS to replace thermal interface material) can reduce temperatures by 10-20°C on older designs.

---

## VII. Troubleshooting & Field Diagnostics

### Symptom: Constant Blue Screen (BSOD) - "CLOCK_WATCHDOG_TIMEOUT"
*   **Cause**: CPU core hangups, usually due to unstable undervolting, insufficient VCORE voltage, or degradation (Vmin shift in older 13th/14th Gen Intel).
*   **Isolation**: Reset BIOS to defaults. Increase LLC (Load Line Calibration) or slightly bump voltage.

### Symptom: Thermal Throttling @ 100°C under light load
*   **Cause**: Mounting pressure issues, dried thermal paste, or "IHS Bowing" (common on LGA 1700).
*   **Isolation**: Re-paste and re-mount. Check for "pump out" effect. Use a thermal contact frame if on Intel 12th-14th gen.
