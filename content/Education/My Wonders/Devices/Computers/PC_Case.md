# PC Case Technical Reference Note

## I. Glossary & Key Concepts

| Term | Definition | Practical Example | Comparison Value |
| :--- | :--- | :--- | :--- |
| **Form Factor** | The standardized size and layout of a PC case, dictated by motherboard compatibility. | An ATX Mid-Tower being the most common build size. | Determines motherboard, PSU, and expansion card compatibility. |
| **SECC (Steel, Electrogalvanized, Cold-rolled, Coil)** | The standard steel used for PC case frames and internal chassis. | Every mainstream case uses **0.6-0.8mm SECC** for the body. | Thicker SECC (0.8mm+) reduces vibration and panel flex. |
| **Tempered Glass (TG)** | Heat-treated glass used for side/front panels. | A 4mm thick tempered glass side panel on an NZXT H9 Flow. | Shatters into small, safe cubes instead of sharp shards. **Extremely fragile to point impacts (ceramic, tile).** |
| **Mesh Panel** | A perforated front/top panel designed to maximize unobstructed airflow. | The Corsair 5000D Airflow's front mesh allowing 10 fans. | Fine mesh filters dust; ultra-fine mesh adds slight airflow restriction. |
| **Cable Management Space** | The gap between the motherboard tray and the side panel used to route cables out of the airflow path. | A 22-30mm deep routing channel behind the motherboard tray. | Less than 20mm makes cable management extremely difficult with thick 24-pin ATX cables. |
| **Standoff** | A small brass hexagonal "pillar" that raises the motherboard off the metal tray, preventing short circuits. | 9 standoffs for a standard ATX board. | Using incorrect standoff placement can short the motherboard to the chassis. |
| **Dust Filter** | A removable mesh screen placed over intake fan mounts to prevent dust ingestion. | A magnetic dust filter on the bottom PSU intake. | Cases without bottom filters accumulate PSU blockage rapidly. |
| **Positive Air Pressure** | An airflow configuration where more air is pushed IN (intake) than pulled OUT (exhaust). | 3x front intake fans vs 1x rear exhaust fan. | Positive pressure forces air out of unfiltered gaps, reducing dust buildup. |
| **SFF (Small Form Factor)** | Compact cases typically designed for Mini-ITX motherboards, often under 20 liters in volume. | The Cooler Master NR200P Max at ~18.25L. | Tighter thermals but significantly smaller desk footprint. |
| **Dual-Chamber Design** | A case architecture that physically separates the motherboard/GPU chamber from the PSU/storage chamber. | The Lian Li O11 Dynamic EVO isolating the PSU behind the motherboard tray. | Keeps PSU heat isolated from CPU/GPU thermals. |

---

## II. Core Technical Specifications

| Specification | Full Tower (North XL) | Mid-Tower Airflow (5000D) | Dual-Chamber (O11 EVO) | SFF (NR200P Max) |
| :--- | :--- | :--- | :--- | :--- |
| **Motherboard Support** | E-ATX / ATX / mATX | ATX / mATX / ITX | E-ATX / ATX / mATX | Mini-ITX only |
| **Max GPU Length** | ~496 mm | ~420 mm | ~422 mm | ~336 mm |
| **Max CPU Cooler Height** | ~185 mm | ~170 mm | ~167 mm | ~155 mm (with AIO) |
| **Max PSU Length** | ATX ~200mm+ | ATX ~225 mm | ATX ~200 mm | SFX (pre-installed) |
| **Max Fan Slots** | 8-10x 120/140mm | 10x 120mm | 9x 120mm | 4-5x 120mm |
| **Radiator Support (Max)** | 420mm (Front/Top) | 360mm (Front/Top) | 360mm (Top/Side/Bottom) | 280mm (pre-installed) |
| **Drive Bays (3.5" / 2.5")** | 4 / 4+ | 2 / 4 | 2-3 / 3 | 1 / 2 |
| **Cable Mgmt Space** | ~28-32 mm | ~25 mm (RapidRoute) | ~33 mm | ~Limited |
| **Approx. Dimensions (HxWxD)** | 540 x 240 x 510 mm | 520 x 245 x 520 mm | 459 x 285 x 459 mm | 376 x 185 x 292 mm |
| **Weight (Empty)** | ~14-16 kg | ~10-12 kg | ~10-11 kg | ~8-10 kg (with AIO/PSU) |

---

## III. Full Generational Evolution Table

| Era / Year | Design Philosophy | Key Features | Airflow Strategy | Materials |
| :--- | :--- | :--- | :--- | :--- |
| 1990s | **Beige Box** | 5.25" bays, no cable space | Passive / 1 rear fan | Thin steel, plastic front |
| Early 2000s | **Enthusiast Tower** | Side panel windows (acrylic), more fan mounts | Front-to-back basic flow | Thicker SECC, acrylic panels |
| 2008-2012 | **Silent Focus** | Noise dampening foam, sealed panels | Restricted; noise priority | Sound-dampened steel |
| 2013-2016 | **Tempered Glass Era** | Full TG side panels, PSU shrouds emerge | PSU shroud hides cables | SECC + TG, first modular interiors |
| 2017-2019 | **RGB Showcase** | Glass panels on 2-3 sides, RGB fan hubs | Improved but style-first | Steel + multi-panel TG |
| 2020-2022 | **Airflow Renaissance** | Mesh front panels return, high fan density | Aggressive positive pressure | SECC + Mesh + TG |
| 2023+ | **Dual-Chamber / Reverse** | Physical chamber separation, reverse ATX layouts | Isolated thermal zones | SECC + Mesh + TG + Wood/Fabric |

---

## IV. Architecture & System Integration

### Airflow Dynamics
Modern cases follow one of three dominant thermal architectures:
1.  **Traditional Front-to-Back**: Cool air enters from the front mesh, passes over the GPU and CPU, and exits via the rear and top exhaust fans. This is the most common and effective layout (e.g., Corsair 5000D Airflow).
2.  **Bottom-to-Top (Chimney)**: Cool air enters from the bottom, rises naturally (convection-assisted) past the GPU and CPU, and exits through the top. Used in SFF cases like the NR200P.
3.  **Side Intake (Dual-Chamber)**: Cool air enters from the side panel (or a dedicated intake column) and passes directly over the GPU/CPU. Used by the Lian Li O11 series, which relies on side-mounted radiators.

### Internal Sub-systems
*   **Front I/O Module**: Contains the power button, USB ports (typically 1x USB-C 3.2 Gen 2 + 2x USB-A 3.0), and an audio jack. This connects to the motherboard via internal headers (USB 3.0 19-pin, USB-C 20-pin Key-A).
*   **Fan/RGB Hub**: Many cases include a built-in hub (e.g., Corsair iCUE Commander) that consolidates PWM fan control and ARGB lighting into a single SATA-powered module, reducing cable clutter.
*   **PSU Shroud**: A structural panel that physically hides the PSU and its cables from the main viewable chamber, improving aesthetics and creating a thermal barrier.

### Vendor-Specific Technologies
*   **Corsair RapidRoute**: A velcro-lined cable routing channel along the right side of the motherboard tray that allows for clean cable management in under 10 minutes without cable ties.
*   **Fractal Design Nexus+ Fan Hub**: A 9-port PWM/ARGB hub integrated into the case, controlled via a USB 2.0 header.
*   **Lian Li UNI Fan Infinity**: Fans designed to daisy-chain magnetically, reducing the cable count from 12+ wires (3 fans) to a single cable set.
*   **NZXT Cam-Powered Fan Controller**: A software-integrated fan hub that connects via internal USB headers and is managed through the NZXT CAM software suite.

---

## V. Compatibility & Ecosystem Integration

### Motherboard Form Factor Matrix
| Case Size | E-ATX (305x330mm) | ATX (305x244mm) | mATX (244x244mm) | Mini-ITX (170x170mm) |
| :--- | :--- | :--- | :--- | :--- |
| **Full Tower** | ✅ | ✅ | ✅ | ✅ |
| **Mid-Tower** | ⚠️ (Check width) | ✅ | ✅ | ✅ |
| **SFF** | ❌ | ❌ | ❌ | ✅ |

### Critical Clearance Dependencies
*   **GPU Length vs. Front Fans**: A 400mm+ GPU (e.g., RTX 4090) will collide with front-mounted fans or a front-mounted 360mm radiator in many mid-towers. Always check "GPU clearance with front radiator installed."
*   **CPU Cooler Height vs. Side Panel**: Tower coolers like the NH-D15 G2 (168mm tall) require at least 170mm of clearance. Cases that claim 165mm will physically prevent panel closure.
*   **PSU Length vs. HDD Cage**: In mid-towers, a PSU longer than 180mm may collide with a bottom-mounted 3.5" HDD cage. Many cases have removable cages to resolve this.

---

## VI. Physical, Electrical & Thermal Constraints

1.  **Panel Thickness**: Tempered Glass panels are typically **3mm to 4mm** thick. Thinner glass is more prone to spontaneous shattering from thermal stress. **Never place a TG panel directly on tile or ceramic surfaces** — microscopic point impacts will cause catastrophic failure.
2.  **Weight Distribution**: A fully loaded Full Tower (E-ATX board + 4090 GPU + custom water) can exceed **25-30 kg**. The desk/shelf must support this weight without sagging.
3.  **Front I/O Power**: The USB-C 3.2 Gen 2 front port can deliver up to **7.5W** for device charging (if the motherboard header supports it). Older headers may only provide 4.5W.
4.  **Acoustic Dampening**: Cases designed for silence (e.g., be quiet! Silent Base series) use **bitumen or closed-cell foam** padding on panels to absorb vibrations. This adds heat retention and increases internal temperatures by **3-5°C** compared to open mesh designs.

---

## VII. Troubleshooting & Field Diagnostics

### Symptom: High Temps despite multiple fans
*   **Cause**: **Negative Air Pressure** — more exhaust fans than intake creates a vacuum that pulls unfiltered hot air through every gap.
*   **Field Protocol**: Count intake vs. exhaust fans. Reconfigure to positive pressure (more intake than exhaust). Verify that dust filters aren't clogged.

### Symptom: Front USB-C port not working
*   **Cause**: The internal **USB 3.2 Gen 2 Type-E (20-pin Key-A)** header cable is not connected to the motherboard, or the motherboard lacks this header entirely.
*   **Field Protocol**: Check the motherboard specifications for a "USB 3.2 Gen 2 Header." If absent, a PCIe adapter card with an internal Type-E header can be used.

### Symptom: Buzzing / Vibration noise from the case
*   **Cause**: A fan or HDD is resonating with the case panel at a specific RPM frequency.
*   **Field Protocol**: Apply gentle pressure to each panel while the PC is running to identify the resonating panel. Use rubber anti-vibration pads behind fans or between the HDD and its mount. Tighten all thumbscrews.

### Symptom: GPU sag (the card bends downward over time)
*   **Cause**: Heavy GPUs (1.5-2.5 kg) hanging from the PCIe slot and two case screws without additional support.
*   **Field Protocol**: Install a **GPU support bracket** (anti-sag bracket). Some cases include a built-in adjustable bracket (e.g., be quiet!, Fractal Design). A 3D-printed support or a simple adjustable prop can also work.

### Symptom: Tempered Glass panel shattered spontaneously
*   **Cause**: Nickel sulfide (NiS) inclusion defect from manufacturing or a microscopic point impact (ceramic tile floor, a screw head). TG is highly susceptible to point-contact stress.
*   **Field Protocol**: **This is irreversible.** Contact the manufacturer for a warranty replacement panel. Always place TG panels on a **cloth or cardboard surface**, never directly on tile or stone.
