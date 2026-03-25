# PSU (Power Supply Unit) Technical Reference Note

## I. Glossary & Key Concepts

| Term | Definition | Practical Example | Comparison Value |
| :--- | :--- | :--- | :--- |
| **Voltage Rail** | A dedicated DC output circuit delivering specific voltage (+12V, +5V, +3.3V). | The **+12V rail** powering the GPU and CPU. | Modern "Single Rail" designs prevent shutdown by allowing all wattage to flow through one path. |
| **Ripple & Noise** | Small AC fluctuations remaining in the DC output after conversion. | A high-quality PSU has <30mV ripple on the +12V rail. | High ripple degrades component lifespan and causes system instability. |
| **Hold-up Time** | The duration a PSU can maintain output within spec after losing AC input. | A "17ms" gold standard ensures the PC doesn't reboot during a momentary power flick. | Required by ATX spec to allow UPS units time to switch to battery. |
| **LLC Resonant Converter** | A switching topology that uses "Zero Voltage Switching" to reduce energy loss. | Used in 80 PLUS Platinum/Titanium units like the Seasonic Prime. | Higher efficiency and significantly less electromagnetic interference (EMI). |
| **Transient Response** | The ability of a PSU to handle sudden, large spikes in power demand (Power Excursions). | An RTX 4090 spiking to 900W for 100 microseconds. | ATX 3.1 units must handle 200% load excursions without tripping OCP. |
| **PFC (Power Factor Correction)** | A circuit that aligns the current and voltage phases to improve electrical efficiency for the grid. | "Active PFC" is mandatory in modern high-end PSUs. | Reduces harmonic distortion and "wasted" electricity drawn from the wall. |

---

## II. Core Technical Specifications

| Specification | Desktop (Flagship ATX 3.1) |
| :--- | :--- |
| **Wattage Range** | 850W - 1600W+ |
| **Efficiency Standard** | 80 PLUS Titanium / Cybenetics Diamond |
| **DC Outputs (Main)** | +12V, +5V, +3.3V, -12V, +5VSB |
| **Transient Handling** | 200% for 100µs (ATX 3.1) |
| **Primary Connector** | 24-pin ATX + 12V-2x6 (GPU) |
| **Switching Topologies** | Full-Bridge LLC + DC-to-DC |
| **Power Density** | ~30 - 45 W/in³ |
| **Cooling Method** | 135mm/140mm Fan (Zero-RPM Mode) |

---

## III. Full Generational Evolution Table

| Year/Version | Standard | Primary Shift | Transient Handling | Efficiency Peak |
| :--- | :--- | :--- | :--- | :--- |
| 1984 | **AT** | Physical "hard" switch, +5V/+12V rails. | N/A | ~60% |
| 1995 | **ATX (v1.0)** | Soft-power control (PS-ON), +3.3V rail added. | Low | ~70% |
| 2003 | **ATX12V 2.0** | Shifted focus to +12V for CPU/GPU. 24-pin connector. | Moderate | ~80% (80 PLUS) |
| 2022 | **ATX 3.0** | Introduced 12VHPWR (600W) and excursion rules. | 200% Peak | ~92% (Platinum) |
| 2024 | **ATX 3.1** | Replaced 12VHPWR with **12V-2x6** (Shortened sense pins). | Mandatory 2x Load | ~94% (Titanium) |

---

## IV. Architecture & System Integration

### Technical Power Chain
1.  **Input Filtering (EMI Filter):** Removes noise from the AC wall outlet.
2.  **Bridge Rectifier:** Converts AC (Sine wave) to messy DC (Pulsing).
3.  **Active PFC:** Cleans the wave to ensure the PSU draws power efficiently from the grid.
4.  **Main Switcher (LLC):** High-speed transistors chop the DC into a high-frequency AC for the transformer.
5.  **Main Transformer:** Steps down the high voltage to low voltage (+12V target).
6.  **Secondary Rectification & DC-DC:** Converts the remaining power into precise +5V and +3.3V rails for components like SSDs and RGB leads.

---

## V. Compatibility & Ecosystem Integration

### Connector Standards
*   **24-pin ATX Main Power:** The primary motherboard connector, unchanged since ATX12V 2.0 (2003).
*   **12V-2x6 (ATX 3.1):** The current flagship GPU connector. It features **shortened sense pins (S1-S4)** by 1.5mm. This prevents the GPU from drawing high power unless the cable is fully seated, virtually eliminating the melting issues of the older 12VHPWR standard.
*   **EPS 8-pin (4+4):** Dedicated CPU power connector(s). High-end boards use two EPS connectors for overclocked CPUs.
*   **SATA / Molex:** Low-power connectors for drives, fans, and accessories.

---

## VI. Physical, Electrical & Thermal Constraints

1.  **Form Factors:**
    *   **ATX:** 150mm wide x 86mm high. Length varies (140mm to 200mm).
    *   **SFX:** 125mm x 63.5mm x 100mm. Essential for Small Form Factor (SFF) builds.
2.  **Cable Gauge (AWG):** High-wattage rails require 16AWG or 18AWG wires. Thinner wires (20AWG+) can overheat and drop voltage under high current.
3.  **Efficiency Losses:** Even a 90% efficient PSU drawing 1000W from the wall converts 100W into pure heat. This requires active cooling via 120mm+ fans.

---

## VII. Troubleshooting & Field Diagnostics

### Symptom: "Coil Whine" (High-pitched squealing)
*   **Cause**: Physical vibration of the copper coils in the chokes due to high-frequency current. It is rarely a sign of failure but can be annoying.
*   **Isolation**: Change the FPS cap in games (less load variance) or trial a different wall outlet (cleaner AC input).

### Symptom: System reboots only during heavy gaming
*   **Cause**: Transient power spike tripping the **OPP (Over Power Protection)** or **OCP (Over Current Protection)** because the PSU cannot handle the 100µs excursion.
*   **Isolation**: Upgrade to an ATX 3.0/3.1 rated unit or increase PSU wattage overhead.

### Symptom: PSU Fan doesn't spin at idle
*   **Cause**: Normal behavior – "Zero-RPM" or "Eco Mode" is active. The fan only starts when internal temperatures reach a specific threshold (usually >30% load).
*   **Verification**: Check if the "Eco Mode" switch on the rear is toggled ON.
