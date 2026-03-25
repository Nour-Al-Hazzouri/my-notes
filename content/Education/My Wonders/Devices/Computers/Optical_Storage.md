# Optical Storage Technical Reference Note

## I. Glossary & Key Concepts

| Term | Definition | Practical Example | Comparison Value |
| :--- | :--- | :--- | :--- |
| **Numerical Aperture (NA)** | A dimensionless number that characterizes the range of angles over which the lens can accept or emit light. | Blu-ray uses a high **0.85 NA** lens. | Higher NA allows the laser to focus on a smaller spot, enabling higher data density (CD = 0.45, DVD = 0.60). |
| **Wavelength (λ)** | The spatial period of the laser light wave. | Blu-ray uses a **405nm** (Blue-violet) laser. | Shorter wavelengths allow for smaller pits and higher capacity (CD = 780nm, DVD = 650nm). |
| **Pits & Lands** | The microscopic "bumps" (pits) and flat areas (lands) on the disc surface that represent binary data. | A laser reflecting off a **pit** vs. a **land** changes the intensity of light returned to the sensor. | Smaller pits = higher data density. |
| **Track Pitch** | The distance between the center of one physical track and the center of the next. | BDXL (128GB) has a tiny **0.225µm** track pitch. | Narrower pitch allows more "spirals" of data on the same 12cm disc (CD = 1.6µm). |
| **CLV (Constant Linear Velocity)** | The disc rotation speed changes as the laser moves from the inner to the outer edge to maintain a constant data rate. | Standard audio CDs use CLV to ensure smooth music playback. | Generally slower seek times but consistent data transfer. |
| **CAV (Constant Angular Velocity)** | The disc spins at a fixed RPM regardless of where the laser is. | High-speed 52x CD-ROM drives use CAV. | Transfer rates are faster at the outer edge than the inner edge. |
| **Buffer Underrun** | An error during disc burning where the computer fails to send data to the drive fast enough, causing the write to fail. | Using "Burn-Proof" technology to pause the laser when the buffer empties. | Modern drives use large internal buffers (4MB+) to prevent this. |
| **M-DISC** | A specialized archival disc that uses a stone-like inorganic layer instead of organic dye. | Archiving family photos for a rated **1,000-year** lifespan. | Standard discs degrade over 5-10 years (Disc Rot); M-DISC is resistant to light and humidity. |

---

## II. Core Technical Specifications

| Specification | CD (Compact Disc) | DVD (Digital Versatile Disc) | Blu-ray (BD) | UHD Blu-ray (BDXL) |
| :--- | :--- | :--- | :--- | :--- |
| **Laser Wavelength** | 780 nm (Infrared) | 650 nm (Red) | 405 nm (Blue-violet) | 405 nm (Blue-violet) |
| **Numerical Aperture** | 0.45 | 0.60 | **0.85** | **0.85** |
| **Track Pitch** | 1.6 µm | 0.74 µm | 0.32 µm | **0.225 µm** |
| **Capacity (SL)** | 650 - 700 MB | 4.7 GB | 25 GB | 33 GB |
| **Capacity (DL/TL/QL)** | N/A | 8.5 GB (DL) | 50 GB (DL) | **100GB (TL) / 128GB (QL)**|
| **1x Base Transfer Rate**| 150 KB/s | 1.38 MB/s | 4.5 MB/s | 4.5 MB/s |
| **Max Seek Speed (Typical)**| 52x | 16x | 12x - 16x | 6x - 8x |
| **Rotational Speed (Max)**| ~9,000 - 10,000 RPM | ~9,000 RPM | ~10,000 RPM | ~5,000 - 7,000 RPM |

---

## III. Full Generational Evolution Table

| Year/Version | Type | Primary Use Case | Physical Interface | Peak Write Speed |
| :--- | :--- | :--- | :--- | :--- |
| 1982 | **CD-DA / CD-ROM** | Audio & Software | SCSI / IDE (PATA) | 1x - 52x |
| 1996 | **DVD-ROM** | Video & Large Data | IDE / SATA | 1x - 16x |
| 2002 | **DVD±R / RW** | Consumer Recording | IDE / SATA | 1x - 24x |
| 2006 | **BD-ROM** | HD Video & 25GB+ Data | SATA | 1x - 16x |
| 2010 | **BDXL** | 100GB+ Archival | SATA / USB 3.0 | 2x - 8x |
| 2016 | **Ultra HD Blu-ray** | 4K HDR Video | SATA / USB 3.0 | 2x - 6x |

---

## IV. Architecture & System Integration

### Optical Pickup Unit (OPU) Logic
The OPU contains the laser diode, a series of lenses, and a photodiode. 
1.  **Beam Generation**: The laser diode emits light.
2.  **Focusing**: A small objective lens moved by electromagnetic coils (voice coils) maintains exact focus on the data layer, adjusting for any disc wobble.
3.  **Reflection**: The light reflects off the pits and lands.
4.  **Detection**: The photodiode converts the variations in light intensity back into an electrical signal (HF signal), which the ODD controller decodes into binary data.

### Integrated Sub-systems: Error Correction (ECC)
Optical discs are prone to physical defects (scratches).
*   **Reed-Solomon Product Code (RSPC)**: Used in DVDs to correct burst errors.
*   **LDC/BIS (Long Distance Code / Burst Indicator Subcode)**: Advanced ECC used in Blu-ray to handle the much higher data density and smaller pits.
*   **PureRead (Vendor Tech - Pioneer)**: Standard drives might replace unreadable audio data with silence or "interpolation." PureRead performs multiple rereads at different drive parameters to extract the original bit-perfect data.

---

## V. Compatibility & Ecosystem Integration

### Backward Compatibility
*   **Multi-Laser Systems**: Almost all modern Blu-ray drives contain two separate laser diodes (780nm/650nm combo and a 405nm) to ensure they can read legacy CDs and DVDs.
*   **UDF (Universal Disk Format)**: The standard file system for optical media. Windows, macOS, and Linux support UDF 2.01+ natively for reading discs.

### Copy Protection Protocols
*   **AACS (Advanced Access Content System)**: Used on Blu-ray. Requires a "Protected Path" (HDCP) between the GPU and the monitor for playback.
*   **BD+**: An additional layer of security that runs a virtual machine on the player to verify the hardware hasn't been tampered with.

---

## VI. Physical, Electrical & Thermal Constraints

1.  **Dimensions**:
    *   **Standard Disc**: 120 mm diameter, 1.2 mm thick.
    *   **Internal Drive (5.25")**: 146mm x 41.3mm. Length varies (approx 170mm).
2.  **Power Consumption**: Spinning a 12cm disc at 10,000 RPM creates significant centrifugal force and draws ~15W - 25W during acceleration. 
3.  **Vibration**: High-speed drives create audible noise and vibration. Manufacturers use active liquid balancing (Pioneer) or weighted trays to minimize this.

---

## VII. Troubleshooting & Field Diagnostics

### Symptom: "Circular Scratches" on the disc
*   **Cause**: The drive was moved or bumped while the disc was spinning, causing the laser head to strike the surface.
*   **Diagnosis**: If the scratch follows the data track (circular), it is often unfixable. If it is radial (center to edge), ECC can usually overcome it.

### Symptom: Disc Tray Jams / "No Disc" Error
*   **Cause**: Slipping rubber belt (common in older drives) or a dirty laser lens.
*   **Field Protocol**: Use a manual eject pinhole. For "No Disc," try a lens cleaning disc or gently clean the lens with 90%+ isopropyl alcohol and a lint-free swab.

### Symptom: Disc Rot (Bronzing/Pinhole spots)
*   **Cause**: Oxidation of the aluminum reflective layer due to poor manufacturing or high humidity.
*   **Diagnosis**: Hold the disc up to a bright light. If you see tiny holes where light shines through, the data in those sectors is physically gone.
