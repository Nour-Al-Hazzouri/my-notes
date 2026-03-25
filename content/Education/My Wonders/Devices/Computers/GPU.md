# GPU Technical Reference Note

## I. Glossary & Key Concepts

| Term | Definition | Practical Example | Comparison Value |
| :--- | :--- | :--- | :--- |
| **CUDA Cores / Stream Processors / Xe-cores** | The fundamental parallel execution units within a GPU designed to process thousands of simultaneous threads. | Rendering complex polygon geometries in a 3D scene (e.g., Cyberpunk 2077). | Defines raw compute throughput. A higher core count directly scales massively parallel workloads. NVIDIA uses "CUDA Core," AMD uses "Stream Processor," Intel uses "Xe-core Vector Engines." |
| **TGP / TBP (Total Graphics/Board Power)** | The total power drawn by the entire graphics card, including the GPU chip, VRAM, and VRM. | An RTX 4090 has a TGP of 450W, demanding robust ATX 3.0 power supplies and cooling. | Critical for planning PSU wattage and chassis thermal dissipation. Replaces older terms like TDP for GPUs. |
| **TFLOPS (Tera Floating Point Operations Per Second)** | A theoretical measure of a GPU's mathematical compute speed, specifically in 32-bit floating-point (FP32) math. | An RX 7900 XTX offers 61 TFLOPS (FP32) to compute physics and rasterization rapidly. | Useful for comparing cards within the same architecture, but cross-architecture TFLOPS comparisons are unreliable due to IPC differences. |
| **Tensor Cores / AI Accelerators / XMX** | Specialized execution units designed for matrix multiplication and deep learning operations (FP16/INT8 math). | Running AI upscaling like NVIDIA DLSS 3 or AMD FSR 3. | Essential for AI throughput. NVIDIA uses Tensor Cores, AMD uses AI Accelerators, Intel uses XMX (Xe Matrix Extensions). |
| **RT Cores / Ray Accelerators** | Dedicated hardware units designed to accelerate the calculation of bounding volume hierarchy (BVH) intersections in ray tracing. | Real-time calculation of accurate reflections and shadows in Alan Wake 2. | Defines hardware-accelerated ray tracing capability. Moving ray calculations off the main shader cores drastically improves frame rates. |
| **VRAM (Video RAM) & Memory Bandwidth** | Dedicated ultra-high-speed memory (GDDR6, GDDR6X, HBM3) attached directly to the GPU for storing textures, frame buffers, and AI models. | Loading a 16GB 4K texture pack in a modern AAA game or holding a large LLM in memory. | Capacity determines asset size limitations; Bandwidth (measured in GB/s) defines how fast the GPU can access those assets. |
| **Infinity Cache / L2 Cache** | Massive on-die SRAM caches designed to keep frequently accessed data directly on the GPU, reducing calls to slower VRAM. | AMD RDNA 3 uses up to 96MB of Infinity Cache to effectively multiply a 384-bit bus bandwidth. | Larger caches drastically improve effective memory bandwidth and reduce power consumption used pushing data to VRAM. |

---

## II. Core Technical Specifications

| Specification | NVIDIA RTX 4090 | AMD RX 7900 XTX | Intel Arc A770 |
| :--- | :--- | :--- | :--- |
| **Architecture** | Ada Lovelace (AD102) | RDNA 3 (Navi 31) | Xe-HPG (ACM-G10) |
| **Process Node** | TSMC 4N | TSMC 5nm (GCD) + 6nm (MCD) | TSMC N6 |
| **Shader Units** | 16,384 CUDA Cores | 6,144 Stream Processors | 4,096 ALUs (32 Xe-cores) |
| **RT Units** | 128 (3rd Gen RT Cores) | 96 Ray Accelerators | 32 RT Units |
| **AI Units** | 512 (4th Gen Tensor Cores) | 192 AI Accelerators | 512 XMX Engines |
| **Base / Boost Clock** | 2235 / 2520 MHz | 1855 / 2500 MHz | 2100 / 2400 MHz |
| **VRAM** | 24 GB GDDR6X | 24 GB GDDR6 | 16 GB GDDR6 |
| **Memory Bus** | 384-bit | 384-bit | 256-bit |
| **Memory Bandwidth** | 1008 GB/s | 960 GB/s | 512 GB/s |
| **Infinity Cache / L2** | 72 MB L2 | 96 MB Infinity Cache | 16 MB L2 |
| **TGP / TBP** | 450W | 355W | 225W |
| **Power Connector** | 1x 16-pin (12VHPWR) | 2x 8-pin | 2x 8-pin |
| **FP32 TFLOPS** | 82.58 | 61.42 | 19.66 |

---

## III. Full Generational Evolution Table

| Year/Version | Architecture | Manufacturer | Physical Interface | Electrical/Power Specs (Flagship TGP) | Primary Performance Metric (Flagship FP32 TFLOPS) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1999 | **GeForce 256** | NVIDIA | AGP 4x | ~20W | 0.05 TFLOPS |
| 2000 | **Radeon r100** | ATI / AMD | AGP 4x | ~30W | 0.06 TFLOPS |
| 2004 | **GeForce 6 (Curie)** | NVIDIA | AGP 8x / PCIe 1.0 x16 | ~80W (6800 Ultra) | 0.22 TFLOPS |
| 2006 | **Tesla (G80)** | NVIDIA | PCIe 1.0 / 2.0 x16 | ~150W (8800 GTX) | 0.34 TFLOPS |
| 2006 | **TeraScale (R600)** | ATI / AMD | PCIe 1.0 / 2.0 x16 | ~215W (HD 2900 XT) | 0.47 TFLOPS |
| 2010 | **Fermi** | NVIDIA | PCIe 2.0 x16 | ~250W (GTX 480) | 1.34 TFLOPS |
| 2011 | **GCN 1.0** | AMD | PCIe 3.0 x16 | ~250W (HD 7970) | 3.79 TFLOPS |
| 2012 | **Kepler** | NVIDIA | PCIe 3.0 x16 | ~250W (GTX 680/780) | 3.97 TFLOPS |
| 2014 | **Maxwell** | NVIDIA | PCIe 3.0 x16 | ~250W (GTX 980 Ti) | 5.63 TFLOPS |
| 2016 | **Pascal** | NVIDIA | PCIe 3.0 x16 | ~250W (GTX 1080 Ti) | 11.34 TFLOPS |
| 2016 | **Polaris** | AMD | PCIe 3.0 x16 | ~150W (RX 480) | 5.83 TFLOPS |
| 2018 | **Turing (RTX 20 Series)** | NVIDIA | PCIe 3.0 x16 | ~250W (RTX 2080 Ti) | 13.45 TFLOPS |
| 2019 | **RDNA 1 (RX 5000)** | AMD | PCIe 4.0 x16 | ~225W (RX 5700 XT) | 9.75 TFLOPS |
| 2020 | **Ampere (RTX 30 Series)** | NVIDIA | PCIe 4.0 x16 | ~350W (RTX 3090) | 35.58 TFLOPS |
| 2020 | **RDNA 2 (RX 6000)** | AMD | PCIe 4.0 x16 | ~300W (RX 6900 XT) | 23.04 TFLOPS |
| 2022 | **Ada Lovelace (RTX 40)** | NVIDIA | PCIe 4.0 x16 (12VHPWR) | ~450W (RTX 4090) | 82.58 TFLOPS |
| 2022 | **RDNA 3 (RX 7000)** | AMD | PCIe 4.0 x16 (8-pin arrays) | ~355W (RX 7900 XTX) | 61.42 TFLOPS |
| 2022 | **Xe-HPG (Arc A-Series)** | Intel | PCIe 4.0 x16 | ~225W (Arc A770) | 19.66 TFLOPS |
| 2024* | **Blackwell (RTX 50)** | NVIDIA | PCIe 5.0 x16 (12V-2x6) | TBA (~500W est.) | TBA |
| 2024* | **Xe2-HPG (Battlemage)** | Intel | PCIe 5.0 x16 | ~250W (Arc B580) | TBA |
| 2025* | **RDNA 4 (RX 8000)** | AMD | PCIe 4.0/5.0 x16 | TBA | TBA |

---

## IV. Architecture & System Integration

### NVIDIA Ada Lovelace (RTX 40 Series) Architecture
*   **Monolithic Silicon:** Built on the custom TSMC 4N process, delivering extreme transistor density and aggressive clocks nearing 3.0 GHz.
*   **3rd Generation RT Cores:** Features new Opacity Micromap (OMM) and Displaced Micro-Mesh (DMM) engines, doubling ray-primitive intersection rates. Shader Execution Reordering (SER) dynamically organizes shading workloads to optimize pipeline efficiency in ray-traced scenes.
*   **4th Generation Tensor Cores & DLSS 3:** Employs an Optical Flow Accelerator to analyze motion and generate completely new frames (Frame Generation) entirely via AI, bypassing the CPU bottleneck.
*   **Vendor Tech — NVENC (Hardware Encoder):** A dedicated hardware video encoder separate from the CUDA cores. Ada Lovelace includes dual NVENC engines supporting **AV1 hardware encoding**, enabling professional-quality streaming and recording with near-zero GPU overhead.
*   **Vendor Tech — DLSS 3 (Deep Learning Super Sampling):** A three-part AI pipeline: Super Resolution (upscales lower-resolution frames), Frame Generation (creates entirely new intermediate frames via the Optical Flow Accelerator), and Reflex (reduces input latency). Requires Tensor Cores.
*   **Vendor Tech — NVIDIA Reflex:** A low-latency SDK that synchronizes GPU render queue and CPU scheduling to minimize end-to-end system latency, measurable via Reflex Latency Analyzer in supported monitors.

### AMD RDNA 3 (RX 7000 Series) Architecture
*   **Chiplet Design (Navi 31):** First consumer GPU to use chiplets. A centralized 5nm Graphics Compute Die (GCD) handles shading, surrounded by up to six 6nm Memory Cache Dies (MCDs) housing Infinity Cache and GDDR6 memory controllers. This reduces bleeding-edge node costs.
*   **Dual-Issue Compute Units:** RDNA 3 CUs can execute two FP32 instructions per clock (SIMD32), doubling theoretical throughput if the workload can be vectorized properly by the compiler.
*   **AI Accelerators:** Dedicated matrix-math accelerators per unit, significantly accelerating machine learning tasks on Radeon hardware compared to RDNA 2.
*   **Vendor Tech — FSR 3 (FidelityFX Super Resolution):** A two-part open-source upscaling pipeline: Spatial/Temporal Upscaling (FSR 2) combined with **Fluid Motion Frames** (frame generation). Unlike DLSS, FSR is vendor-agnostic and runs on any GPU (including NVIDIA/Intel), though it uses shader-based computation rather than dedicated AI hardware.
*   **Vendor Tech — Smart Access Memory (SAM):** AMD's implementation of PCIe Resizable BAR, allowing the CPU to access the full GPU VRAM pool simultaneously. Provides up to 10-15% performance gains in memory-bound scenarios.
*   **Vendor Tech — HYPR-RX:** A one-click toggle in AMD Adrenalin drivers that simultaneously enables FSR, Radeon Anti-Lag, and Radeon Boost for a combined latency and FPS improvement.

### Intel Xe-HPG / Xe2 Architecture
*   **Xe-cores & XMX:** Intel's discrete hardware relies heavily on Xe Matrix Extensions (XMX) arithmetic logic units. These engines are massively pipelined to run deep learning network topologies (XeSS upscaling).
*   **Battlemage (Xe2):** Overhauled vector engines. Transitions to purely standardized INT8/FP16 SIMD units and greatly improved the dispatch utilization overhead of the geometry pipeline.
*   **Vendor Tech — XeSS (Xe Super Sampling):** Intel's AI-driven upscaling technology. Uses XMX engines on Intel hardware (DP4a on non-Intel GPUs). XeSS 2 adds Frame Generation and latency reduction similar to DLSS 3.
*   **Vendor Tech — Intel Arc Control:** Intel's driver and optimization suite, providing per-game tuning profiles, performance telemetry, studio-grade encoding (AV1 via a dedicated media engine), and automatic driver updates.

---

## V. Compatibility & Ecosystem Integration

| Component | Requirement | Dependency Notes |
| :--- | :--- | :--- |
| **Motherboard Slot** | PCIe x16 (Generational matched) | While PCIe 4.0 GPUs run perfectly in PCIe 3.0 slots, bandwidth constrained cards (e.g., RTX 4060 Ti running at x8 lanes, or RX 6500 XT at x4 lanes) suffer severe performance degradation in older PCIe 3.0/2.0 slots. |
| **Power Supply (PSU)** | Native 12VHPWR/12V-2x6 or multiple 8-Pin PCIe | High-end Ada Lovelace (RTX 4080/4090) requires ATX 3.0 PSUs providing the 16-pin connector or uses transient-heavy adapter cables. AMD currently anchors to traditional 8-pin ATX topologies. |
| **Resizable BAR (SAM)** | Modern UEFI & CPU support | A PCIe feature that unlocks the CPU's ability to see all GPU VRAM simultaneously via the Base Address Register. Mandatory for Arc A-Series (severe stuttering if off). Highly recommended for AMD/NVIDIA. |
| **Monitors/Displays** | DP 1.4a/2.1, HDMI 2.1 | RDNA 3 and Battlemage utilize DisplayPort 2.1 (UHBR13.5/20) for massive uncensored bandwidth (4K 480Hz). Ada Lovelace is limited to DisplayPort 1.4a with DSC. |
| **Video Outputs (Typical)** | 1x HDMI 2.1 + 3x DP 1.4a/2.1 | Most AIB cards feature 1x HDMI 2.1 and 3x DisplayPort. Some compact cards reduce to 2x DP. |
| **Driver Software** | NVIDIA App (replaces GeForce Experience) / AMD Adrenalin / Intel Arc Control | All three vendors provide game-specific optimization profiles, performance overlays, recording/streaming tools, and auto-update mechanisms. |
| **Hardware Encoding** | NVENC (AV1/HEVC/H.264) / AMF (AV1/HEVC/H.264) / Intel QSV (AV1/HEVC/H.264) | All current-gen GPUs support hardware AV1 encoding. NVENC is widely considered the quality leader for streaming. |

---

## VI. Physical, Electrical & Thermal Constraints

1.  **Massive Cooler Proliferation (4-Slot designs):** To counteract extreme thermal densities localized densely on monolithic 4N silicon, Ada Lovelace flagship AIB models reach 3.5 - 4 slots in thickness, requiring extensive physical clearance and GPU sag brackets.
2.  **Transient Power Spikes (Micro-excursions):** Modern top-tier GPUs (particularly Ampere and high-end RDNA 2/3) can draw power spikes 2x to 2.5x their rated TGP for brief microseconds. ATX 3.0 standards were created specifically to enforce PSU capacitors to handle up to 200% over-wattage spikes without tripping OCP (Over Current Protection).
3.  **VRAM Thermal Pad Degradation:** GDDR6X operates incredibly hot (up to 105°C junction temp). Prolonged high-Tjunction operations (like compute clusters/mining) rapidly degrade thermal pads, causing memory thermal throttling independent of the GPU core temperature.

---

## VII. Troubleshooting & Field Diagnostics

### Symptom: Code 43 (Windows Device Manager) / Black Screen on Boot
*   **Cause**: Driver initialization failure, corrupted BIOS, or physical PCIe lane damage.
*   **Field Protocol**: Run Display Driver Uninstaller (DDU) in Safe Mode. If persisting across fresh OS install, attempt a GPU BIOS re-flash. If hardware level, inspect the gold PCIe pins for damage.

### Symptom: Severe Stuttering (1% Lows) despite High Average FPS
*   **Cause**: Resizable BAR is disabled in UEFI, Thermal Throttling, or VRAM overallocation.
*   **Field Protocol**: Verify ReBAR in GPU-Z. Monitor "GPU Hotspot Temperature" (Delta > 25°c over Core indicates bad thermal paste mounting pressure). Check if the application is spilling into system RAM via PCIe (VRAM bottleneck).

### Symptom: 12VHPWR Connector Melting
*   **Cause**: High resistance due to incomplete insertion / aggressive bending near the shroud.
*   **Field Protocol**: Ensure the 16-pin clip firmly locks. Do not bend cables horizontally or vertically within 35mm of the plug header. Consider a 90-degree certified adapter block.
