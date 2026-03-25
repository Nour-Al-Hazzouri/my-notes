# Cooling Solutions Technical Reference Note

## I. Glossary & Key Concepts

| Term | Definition | Practical Example | Comparison Value |
| :--- | :--- | :--- | :--- |
| **CFM (Cubic Feet per Minute)** | The volume of air a fan can move in one minute. | A Noctua NF-A14 moving **91.58 CFM**. | Higher CFM is critical for "Airflow" cases with low restriction. |
| **Static Pressure (mm H₂O)**| The ability of a fan to push air through resistance (radiators/heatsinks). | An Arctic P12 Max providing **4.35 mm H₂O**. | Higher static pressure is mandatory for liquid cooling radiators and dense air fins. |
| **PWM (Pulse Width Modulation)**| A method of controlling fan/pump speed by pulsing the power signal rather than dropping voltage. | A 4-pin PWM fan scaling from 400 to 3300 RPM. | Allows for precise, stable low-speed operation compared to 3-pin DC control. |
| **D5 / DDC Pumps** | Industry-standard pumps for custom water cooling. D5 is large/quiet; DDC is compact/high-pressure. | Using a **Xylem D5** pump for a silent multi-radiator loop. | D5 is cooled by the liquid; DDC requires airflow over its heatsink. |
| **Heatpipe** | A vacuum-sealed copper tube containing a working fluid that transfers heat via phase change (evaporation/condensation). | A flagship air cooler with **8x 6mm copper heatpipes**. | More heatpipes allow for higher TDP dissipation before saturation. |
| **Cold Plate** | The copper (usually nickel-plated) base that makes direct contact with the CPU IHS. | A Corsair AIO with a **56x56mm copper coldplate**. | Larger, flatter cold plates are essential for modern high-core-count CPUs. |
| **NSPR (Noctua Standard Performance Rating)** | A vendor-specific metric for total cooling efficiency across different fan speeds. | The NH-D15 G2 having an **NSPR of 228**. | Provides a more realistic comparison than arbitrary TDP numbers. |
| **W/mK (Thermal Conductivity)** | The rate at which heat passes through a material. | Modern thermal pastes ranging from **5 to 14+ W/mK**. | Higher values indicate more efficient heat transfer between the CPU and cooler. |

---

## II. Core Technical Specifications

| Specification | High-End Air (NH-D15 G2) | High-End AIO (H150i LCD) | Custom Water (EK Velocity2 + D5) |
| :--- | :--- | :--- | :--- |
| **Cooling Medium** | Air (Heatpipes + Fins) | Liquid (Pre-filled Loop) | Liquid (User-configured) |
| **Radiator/Fin Area** | Massive Dual Tower | 360mm Aluminum | Multi-Radiator Copper/Brass |
| **Fan Static Pressure** | 2.56 mm H₂O | 3.8 mm H₂O (QX120) | High-Pressure Optimized |
| **Pump Type** | N/A | Asetek Gen 8 (3-Phase) | Xylem D5 (Variable Speed) |
| **Max TDP Dissipation** | ~250W+ | ~300W+ | 500W+ (Scalable) |
| **Typical Noise (Load)** | ~22.6 dBA | ~30 - 35 dBA | ~20 - 25 dBA (Volume dependent) |
| **Life Expectancy** | Very High (MTTF 150k hrs) | Moderate (5-7 Years) | High (User-maintained) |

---

## III. Full Generational Evolution Table

| Year/Era | Technology | Primary Mechanism | Effectiveness | Evolution Status |
| :--- | :--- | :--- | :--- | :--- |
| 1990s | **Passive / Low Profile** | Simple Aluminum fins | Very Low | Legacy (Office PCs) |
| Early 2000s| **Heatpipe Revolution** | Phase change copper tubes | High | Modern Standard |
| 2010 | **AIO Proliferation** | Asetek Gen 1-4 Pumps | High | Mainstream Enthusiast |
| 2020 | **High-Density AIO** | Asetek Gen 7/8 / Capellix | Extreme | Current Flagship |
| 2024+ | **Smart Cooling** | LCD displays / iCUE Link | Extreme | Current Aesthetic Peak |

---

## IV. Architecture & System Integration

### Heatpipe Physics (Air Cooling)
Heatpipes are filled with a liquid (usually water) under a partial vacuum. When the CPU heats the copper base, the liquid evaporates or "boils" at a very low temperature. The vapor travels to the cool end (the fins), releases the heat, condenses back into liquid, and is pulled back to the heat source by a "wicking" internal structure (sintered or grooved copper).

### Pump Architecture (AIO)
Modern AIOs (Asetek Gen 8) utilize a **3-phase motor**. Unlike standard single-phase motors, 3-phase designs provide smoother torque, significantly reducing the "hum" or vibration often heard at low speeds and allowing for much higher flow rates to keep up with high-TDP spikes.

### Radiator Material Integration
*   **Aluminum (AIO)**: Cheap, lightweight, but prone to galvanic corrosion if mixed with copper. AIOs use specialized inhibitors in their coolant to prevent this.
*   **Copper/Brass (Custom)**: Superior thermal conductivity and no corrosion risk when used with copper blocks.

---

## V. Compatibility & Ecosystem Integration

### Socket & Clearance
*   **Socket Brackets**: Specialized hardware for **LGA 1700** and **AM5** ensure the correct mounting pressure. Incorrect pressure can lead to 10-20°C temperature increases.
*   **RAM Clearance**: Massive air coolers often overhang RAM slots. Builders must check the "RAM height clearance" (e.g., 32mm vs 59mm in "high clearance" modes).
*   **Case Radiator Support**: A case might support a 360mm radiator, but thick radiators (30mm+) plus fans (25mm) can collide with motherboard VRM heatsinks.

---

## VI. Physical, Electrical & Thermal Constraints

1.  **Thermal Throttling**: CPUs will begin to "throttle" (drop clock speeds) at T-Junction (usually 95-100°C). A good cooler maintains a **20-30°C delta** over ambient under load.
2.  **Pump Power**: PWM pumps should ideally be plugged into a dedicated "AIO_PUMP" header on the motherboard, which provides constant 12V whereas standard fan headers might vary voltage/current.
3.  **Acoustic Profile**: Fan noise isn't just about dBA; it's about "pitch." Broad-spectrum noise (Noctua) is less perceived by the human ear than high-pitched whining (smaller, cheap fans).

---

## VII. Troubleshooting & Field Diagnostics

### Symptom: 100°C Temps at Idle (AIO)
*   **Cause**: **Pump Failure**. The liquid is sitting still and heat isn't moving to the radiator.
*   **Diagnosis**: Feel the AIO tubes. If one is extremely hot and the other is cold (or both are cold), the pump has stopped. Check BIOS RPM readings for the Pump header.

### Symptom: Bubbling / "Rattling" Noises
*   **Cause**: Air trapped in the pump block.
*   **Field Protocol**: Ensure the radiator's highest point is **above the pump**. Tilt the PC case while running to force the air bubbles out of the block and into the radiator reservoir.

### Symptom: Gradual performance drop over 2-3 years
*   **Cause**: **NAND-level clogging** (in water blocks) or **Thermal Paste Pump-out**.
*   **Field Protocol**: Re-paste the CPU. If custom water, check the micro-fins in the block for "gunk" or biological growth from degraded coolant.

### Symptom: Fan "Surging" (Revving up and down)
*   **Cause**: Aggressive BIOS fan curve following rapid CPU temperature fluctuations.
*   **Field Protocol**: Apply a "Fan Step Up/Down" delay (e.g., 2-3 seconds) in BIOS or use a liquid-temperature-based curve (for AIOs).
