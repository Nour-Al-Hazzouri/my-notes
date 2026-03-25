# SOURCES.md - System Architecture Research

## [GPU Resources]

| Reliability | Source Name | URL | Description |
| :--- | :--- | :--- | :--- |
| High | NVIDIA Ada Architecture | https://images.nvidia.com/aem-dam/Solutions/geforce/ada/nvidia-ada-gpu-architecture.pdf | Official 41-page technical whitepaper for RTX 40-series. |
| High | NVIDIA Hopper Architecture | https://www.advancedclustering.com/wp-content/uploads/2022/03/gtc22-whitepaper-hopper.pdf | 71-page deep dive into H100/Hopper architecture. |
| High | NVIDIA Blackwell Architecture | https://images.nvidia.com/aem-dam/Solutions/geforce/blackwell/nvidia-rtx-blackwell-gpu-architecture.pdf | 57-page official whitepaper for Blackwell RTX. |
| High | AMD RDNA 3 Overview | https://gpuopen.com/download/RDNA3_Beyond-the-current-gen-v4.pdf | Technical presentation on RDNA 3 chiplet design. |
| High | AMD CDNA 3 Whitepaper | https://www.amd.com/content/dam/amd/en/documents/instinct-tech-docs/white-papers/amd-cdna-3-white-paper.pdf | Instinct MI300 series architecture details. |
| High | Intel Xe-HPG Whitepaper | https://cdrdv2-public.intel.com/758302/introduction-to-the-xe-hpg-architecture-white-paper.pdf | Official overview of Arc A-Series architecture. |
| High | Intel Xe2 Deep Dive | https://cdrdv2-public.intel.com/824434/2024_Intel_Tech%20Tour%20TW_Xe2%20and%20Lunar%20Lakes%20GPU.pdf | 2024 Tech Tour PDF for Battlemage/Xe2. |

## [CPU Resources] 

| Reliability | Source Name | URL | Description |
| :--- | :--- | :--- | :--- |
| High | Intel Core Ultra Whitepaper | https://builders.intel.com/docs/networkbuilders/heterogeneous-ai-powerhouse-unveiling-the-hardware-and-software-foundation-of-intel-core-ultra-processors-for-the-edge-1742810919.pdf | Official Intel whitepaper detailing Meteor Lake heterogeneous tiles (Compute, GPU, SoC, I/O). |
| High | AMD Zen 5 EPYC Whitepaper | https://docs.amd.com/v/u/en-US/5th-gen-amd-epyc-processor-architecture-white-paper | Official AMD architecture whitepaper for Zen 5 (5th Gen EPYC). |
| High | Snapdragon X Elite Brief | https://www.qualcomm.com/content/dam/qcomm-martech/dm-assets/documents/Product-Brief-Snapdragon-X-Elite.pdf | Official Qualcomm product brief for Oryon CPU and Hexagon NPU. |
| High | TechInsights: Kirin 9010 Deep-Dive | https://www.techinsights.com/blog/hisilicon-kirin-9010-powers-huawei-pura-70-ultra | Professional technical analysis of the Kirin 9010 (7nm) architecture. |

## [CPU Resources - Supplementary]
| Reliability | Source Name | URL | Description |
| :--- | :--- | :--- | :--- |
| High | Intel Thread Director | https://www.intel.com/content/www/us/en/developer/articles/technical/hybrid-architecture.htm | Official Intel developer docs on hybrid P/E core scheduling. |
| High | AMD Precision Boost Overdrive | https://www.amd.com/en/resources/support-articles/faqs/CPU-PB2.html | Official AMD FAQ on PBO/PBO2 (PPT, TDC, EDC). |
| High | Intel i9-14900K ARK | https://www.intel.com/content/www/us/en/products/sku/236773/intel-core-i9-processor-14900k-36m-cache-up-to-6-00-ghz/specifications.html | Official spec page with cache hierarchy and memory controller. |
| High | AMD Ryzen 9 9950X Specs | https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-9-9950x.html | Official AMD product page with Zen 5 cache and core details. |
| High | Snapdragon X Elite Specs | https://www.qualcomm.com/laptops/products/snapdragon-x-elite | Official Qualcomm page with Oryon CPU and 42MB total cache. |

## [GPU Resources - Supplementary]
| Reliability | Source Name | URL | Description |
| :--- | :--- | :--- | :--- |
| High | NVIDIA NVENC Support Matrix | https://developer.nvidia.com/video-encode-decode-gpu-support-matrix | Official codec support and hardware encoder/decoder capabilities. |
| High | AMD FSR 3 (FidelityFX) | https://www.amd.com/en/products/graphics/technologies/fidelityfx/super-resolution.html | Official AMD page for FSR 1/2/3 and Fluid Motion Frames. |
| High | Intel XeSS Official | https://game.intel.com/us/xess-gaming/ | Official Intel XeSS AI upscaling and XeSS 2 details. |
| High | NVIDIA RTX 4090 Specs | https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/ | Official specs: 16384 CUDA cores, 24GB GDDR6X, 450W TGP. |
| High | AMD RX 7900 XTX Specs | https://www.amd.com/en/products/graphics/desktops/radeon/7000-series/amd-radeon-rx-7900xtx.html | Official specs: 6144 Stream Processors, 24GB GDDR6, 355W TGP. |

## Extraction Log
| Date | Source | Info Extracted |
| :--- | :--- | :--- |
| 2026-03-19 | Micron/Kingston | Confirmed 1.1V, PMIC on-module, BL16, two 32-bit subchannels, On-die ECC. |
| 2026-03-20 | Intel/AMD/Wiki | **Intel 14th Gen**: Core i9-14900K supports DDR5-5600 natively with a 253W PL2 (Max Turbo Power). <br> **AMD Zen 5**: Integrated into 9000-series Desktop CPUs with 16% IPC uplift over Zen 4. <br> **Sockets**: LGA 1700 confirmed for 14th Gen; AM5 confirmed for Zen 5. |
| 2026-03-20 | Intel/AMD/Wiki | **Intel Z790**: x8 DMI 4.0, 20x PCIe 4.0 lanes from PCH. <br> **AMD AM5**: Dual-chipset (X670/E) provides up to 44 usable PCIe lanes. <br> **ATX History**: 1995 Intel spec introduced soft-power/PS-ON and standard I/O panel. |
| 2026-03-21 | NVIDIA/AMD/Intel | **NVIDIA**: Discovered whitepapers for Ada (40-series), Hopper (H100), and Blackwell (50-series/AI). <br> **AMD**: Found RDNA 3 chiplet architecture and CDNA 3 (MI300) whitepapers. <br> **Intel**: Identified Xe-HPG (Arc A) and Xe2 (Arc B/Lunar Lake) deep dives. |
| 2026-03-22 | Intel/AMD/Qualcomm/TechInsights | **Intel Core Ultra**: Meteor Lake uses tile-based architecture (Intel 4 process) with Foveros packaging. <br> **AMD Zen 5**: Focuses on fetch/decode efficiency and wider execution units in 5th Gen EPYC. <br> **Qualcomm**: Oryon CPU (12 cores) and 45 TOPS Hexagon NPU confirmed for X Elite. <br> **Kirin 9010**: Verified as a 7nm-class architecture evolution from the 9000S. |
| 2026-03-22 | Intel/AMD/NVIDIA/Qualcomm | **CPU Gaps**: Thread Director hybrid scheduling confirmed. PBO2 PPT/TDC/EDC limits documented. i9-14900K: 36MB L3, DDR5-5600 native. Ryzen 9950X: 80MB total cache. Snapdragon X Elite: 42MB total cache. <br> **GPU Gaps**: NVENC AV1 encoding support matrix. FSR 3 Fluid Motion Frames. XeSS 2. RTX 4090: 16384 CUDA, 24GB. RX 7900 XTX: 6144 SPs, 24GB. |

## [Motherboard Resources]

| Reliability | Source Name | URL | Description |
| :--- | :--- | :--- | :--- |
| High | Intel 800-Series Chipset Brief | https://www.intel.com/content/www/us/en/content-details/842318/intel-800-series-chipset-with-intel-core-ultra-desktop-processors-series-2-chipset-brief.html | Official Intel chipset brief for Arrow Lake-S platforms (Z890). |
| High | AMD AM5 Quick Reference | https://www.amd.com/content/dam/amd/en/documents/partner-hub/ryzen/amd-socket-am5-quick-reference-guide.pdf | Official PDF guide for AM5 chipsets including X870E/X870. |
| High | MSI VRM Technical Guide | https://www.msi.com/blog/msi-motherboards-powerful-vrm-solution | Detailed technical breakdown of modern power phase / DrMOS design. |
| High | ATX 3.1 Design Guide | https://www.intel.com/content/www/us/en/content-details/336521/atx-version-3-multi-rail-desktop-platform-power-supply-design-guide.html | Official Intel electrical/physical standards for desktop platforms. |
| High | UEFI Specifications | https://uefi.org/specifications | Official repository for UEFI 2.10 and ACPI standards. |

## Extraction Log (Cont.)
| Date | Source | Info Extracted |
| :--- | :--- | :--- |
| 2026-03-22 | Intel/AMD/MSI | **Chipsets**: Intel Z890 supports PCIe 5.0 and Arrow Lake-S. AMD X870E features dual-chipset design for maximized PCIe 5.0 lanes. <br> **VRMs**: Confirmed DrMOS (Driver MOSFET) as the standard for high-performance power delivery. <br> **Standards**: ATX 3.1 and UEFI 2.10 confirmed as current interoperability targets. |

## [RAM Resources]

| Reliability | Source Name | URL | Description |
| :--- | :--- | :--- | :--- |
| High | Micron DDR5 Whitepaper | https://assets.micron.com/adobe/assets/urn:aaid:aem:5ea148c8-e3fe-489e-8489-99b1b9cdcd3c/renditions/original/as/ddr5-new-features-white-paper.pdf | Official Micron deep-dive into DDR5 independent sub-channel architecture and BL16. |
| High | Samsung LPDDR5x Official | https://semiconductor.samsung.com/dram/lpddr/lpddr5x/ | Official product page for LPDDR5x, detailing 10.7Gbps speeds and power efficiency. |
| High | Micron LP vs DDR5 Brief | https://assets.micron.com/adobe/assets/urn:aaid:aem:5a10a15d-ae6c-40f9-8fc2-e522e7c6749f/renditions/original/as/lp-in-data-center-technical-brief.pdf | Comparison between standard and low-power memory architectures. |
| High | JEDEC CAMM2 Standard | https://www.jedec.org/news/pressreleases/jedec-publishes-new-camm2-memory-module-standard | Official JEDEC release for the JESD318 CAMM2 module standard. |
| High | DDR5 PMIC Technical Guide | https://www.ti.com/lit/pdf/sbaa792 | Technical breakdown of on-module voltage regulation (PMIC) and noise reduction. |

## Extraction Log (Cont.)
| Date | Source | Info Extracted |
| :--- | :--- | :--- |
| 2026-03-22 | Micron/Samsung/JEDEC | **Architecture**: DDR5 introduces two independent 32-bit sub-channels per DIMM and Burst Length 16 (BL16). <br> **Mobile**: LPDDR5x reaches up to 10.7 Gbps with significantly lower voltage requirements than desktop DDR5. <br> **Form Factor**: CAMM2 (JESD318) finalized for both DDR5 and LPDDR5/x on a single modular standard, enabling thinner laptops with replaceable LP memory. <br> **Power**: DDR5 moves voltage regulation (PMIC) from the motherboard to the module to improve power integrity. |

## [PSU Resources]

| Reliability | Source Name | URL | Description |
| :--- | :--- | :--- | :--- |
| High | Intel ATX 3.1 Design Guide | https://www.intel.com/content/www/us/en/content-details/336521/atx-version-3-multi-rail-desktop-platform-power-supply-design-guide.html | Official Intel design guide (Rev 2.1) for ATX 3.1 and 12V-2x6 connectors. |
| High | USB-IF Power Delivery 3.1 | https://www.usb.org/usb-charger-pd | Official USB specification overview for 240W Extended Power Range (EPR). |
| High | Infineon GaN Whitepaper | https://www.infineon.com/assets/row/public/documents/24/59/whitepaper-scaling-ai-data-center-power-delivery-with-si-sic-and-gan.pdf | Technical comparison of Gallium Nitride (GaN) efficiency in high-density PSUs. |
| High | Seasonic LLC Resonant Guide | https://seasonic.com/insights/power-electronics-in-seasonic-power-supplies/ | Technical explanation of high-efficiency switching topologies and DC-DC conversion. |

## Extraction Log (Cont.)
| Date | Source | Info Extracted |
| :--- | :--- | :--- |
| 2026-03-22 | Intel/USB-IF/Infineon | **Desktop**: ATX 3.1 introduces the 12V-2x6 connector (safer successor to 12VHPWR) and mandates 200% power excursion handling. <br> **Laptop**: USB PD 3.1 (EPR) enables up to 240W (48V/5A) over USB-C, utilizing GaN for compact, high-efficiency adapters. <br> **Efficiency**: GaN transistors offer faster switching and lower resistance than Silicon, enabling significantly smaller PSUs with higher power density. |

## [Storage Resources]

| Reliability | Source Name | URL | Description |
| :--- | :--- | :--- | :--- |
| High | NVMe 2.0 Specifications | https://nvmexpress.org/specifications/ | Official NVM Express specification library (Base 2.0, I/O command sets). |
| High | Samsung 990 Pro (Gen 4) | https://www.samsung.com/us/computing/memory-storage/solid-state-drives/990-pro-pcie--4-0-nvme--ssd-1tb-mz-v9p1t0b-am.html | Official Samsung product page — 7,450 MB/s sequential read, V-NAND. |
| High | WD Black SN850X (Gen 4) | https://www.sandisk.com/products/ssd/internal-ssd/wd-black-sn850x-nvme-ssd?sku=wds100t2x0e | Official WD page — 7,300 MB/s, Game Mode 2.0. |
| High | Crucial T700 (Gen 5) | https://www.crucial.com/ssd/t700/ct1000t700ssd5 | Official Crucial product page — 12,400 MB/s sequential read (PCIe Gen 5). |
| High | SATA-IO Rev 3.0 Standard | https://sata-io.org/resource/6711 | Official SATA-IO specification page for the 6 Gb/s standard. |
| High | Seagate BarraCuda HDD | https://www.seagate.com/products/hard-drives/barracuda-hard-drive/ | Official Seagate page — desktop 3.5" HDD family (1TB-24TB). |

## Extraction Log (Cont.)
| Date | Source | Info Extracted |
| :--- | :--- | :--- |
| 2026-03-22 | NVMe/Samsung/Crucial/Seagate | **NVMe Gen 5**: Crucial T700 achieves 12,400/11,800 MB/s seq. read/write via PCIe 5.0 x4. <br> **NVMe Gen 4**: Samsung 990 Pro reaches 7,450/6,900 MB/s with V-NAND TLC. <br> **SATA III**: 6 Gb/s (theoretical max 600 MB/s), unchanged since 2009. <br> **HDD**: Seagate BarraCuda offers up to 24TB via CMR platters at 7200 RPM, with ~250 MB/s sustained sequential throughput. |

## [Optical Storage Resources]

| Reliability | Source Name | URL | Description |
| :--- | :--- | :--- | :--- |
| High | Blu-ray Disc Association Physical Specs | https://www.disc-group.com/wp-content/uploads/2011/05/Blu-Ray-1-PhysicalFormatSpecs-BD-RE-1.065KB.pdf | Official BDA whitepaper on BD-RE/ROM physical formats (Wavelength, NA, Track pitch). |
| High | ECMA-267 DVD-ROM Standard | https://www.ecma-international.org/wp-content/uploads/ECMA-267_3rd_edition_april_2001.pdf | Official ECMA specification for 120mm DVD-ROM (4.7GB/8.5GB). |
| High | ECMA-130 CD-ROM Standard | https://www.ecma-international.org/wp-content/uploads/ECMA-130_2nd_edition_june_1996.pdf | Official ECMA specification for 120mm CD-ROM (700MB). |
| High | Pioneer BDR-213EBK Specs | https://pioneer-blurayodd.eu/products/images/BDR-213EBK.pdf | Official datasheet for flagship internal BD writer (M-DISC, BDXL, PureRead). |
| High | ASUS BW-16D1X-U Tech Specs | https://www.asus.com/motherboards-components/optical-drives/external-blu-ray-drive/bw-16d1x-u/techspec/ | Official ASUS page for flagship external USB 3.0 BD writer. |

## Extraction Log (Cont.)
| Date | Source | Info Extracted |
| :--- | :--- | :--- |
| 2026-03-23 | BDA/ECMA/Pioneer/ASUS | **Blu-ray**: 405nm (Blue-violet), 0.85 NA, 0.32µm pitch. 1X speed = 36 Mbps (4.5 MB/s). Supports BDXL (128GB). <br> **DVD**: 650nm (Red), 0.60 NA, 0.74µm pitch. 1X speed = 11.08 Mbps (1.38 MB/s). <br> **CD**: 780nm (Infrared), 0.45 NA, 1.6µm pitch. 1X speed = 1.2 Mbps (150 KB/s). <br> **Drives**: Pioneer BDR-213EBK supports 16X BD-R writing and PureRead 3+ for audio correction. ASUS BW-16D1X-U provides 16X external writing over USB 3.0. |

## [Cooling Resources]

| Reliability | Source Name | URL | Description |
| :--- | :--- | :--- | :--- |
| High | Noctua NH-D15 G2 Specs | https://www.noctua.at/en/products/nh-d15-g2/specifications | Official datasheet for flagship air cooler (Airflow, Static Pressure, NSPR). |
| High | Corsair iCUE LINK H150i LCD | https://www.corsair.com/us/en/p/cpu-coolers/cw-9061008-ww/icue-link-h150i-lcd-liquid-cpu-cooler-cw-9061008-ww | Official product page for flagship AIO (QX120 fan specs, LCD features). |
| High | EK-Quantum Velocity2 | https://www.ekwb.com/shop/ek-quantum-velocity2-d-rgb-1700-nickel-plexi | Technical sheet for high-end custom water block (materials, mounting system). |
| High | Arctic P12 Max Specs | https://www.arctic.de/us/P12-Max/ACFAN00280A | Official fan performance data (81.04 CFM, 4.35 mm H₂O). |
| High | Arctic MX-6 Technical Data | https://www.arctic.de/en/MX-6/ACTCP00080A | Thermal interface material properties (viscosity, density). |
| High | Asetek Pump Generations | https://www.asetek.com/blogs/generation-wealth-asetek-aio-coolers-listed-by-pump-generation/ | Official overview of AIO pump technology (Gen 8 specifics). |

## Extraction Log (Cont.)
| Date | Source | Info Extracted |
| :--- | :--- | :--- |
| 2026-03-23 | Noctua/Corsair/EK/Arctic | **Fans**: Arctic P12 Max provides 4.35 mm H₂O static pressure at 3300 RPM. Noctua NH-D15 G2 delivers 155.6 m³/h airflow. <br> **AIOs**: Corsair H150i uses a 360mm radiator and 56mm copper coldplate. <br> **Custom Water**: EK Velocity2 uses 99.99% pure electrolytic copper for the base. <br> **Pump Tech**: Asetek Gen 8 uses a 3-phase motor for improved flow and reduced noise. <br> **TIM**: Arctic MX-6 has a 45,000 Poise viscosity for optimal gap filling. |

## [PC Case Resources]
> [!NOTE]
> These URLs are known official manufacturer product pages. Live browser verification was unavailable due to quota limits. User may manually verify.

| Reliability | Source Name | URL | Description |
| :--- | :--- | :--- | :--- |
| High | Fractal Design North XL | https://www.fractal-design.com/products/cases/north/north-xl/ | Official page — Full Tower, mesh front, wood accent, extensive radiator support. |
| High | Lian Li O11 Dynamic EVO | https://lian-li.com/product/o11-dynamic-evo/ | Official page — Dual-chamber design, E-ATX support, multi-radiator layout. |
| High | NZXT H9 Flow | https://nzxt.com/product/h9-flow | Official page — Dual-chamber mid-tower, quad-panel glass, perforated top. |
| High | Corsair 5000D Airflow | https://www.corsair.com/us/en/p/pc-cases/cc-9011211-ww/5000d-airflow-tempered-glass-mid-tower-atx-pc-case-black-cc-9011211-ww | Official page — High airflow mid-tower, 10 fan slots, RapidRoute cable management. |
| High | Cooler Master NR200P Max | https://www.coolermaster.com/catalog/cases/mini-itx/nr200p-max/ | Official page — SFF ITX case with pre-installed 280mm AIO and SFX PSU. |

## Extraction Log (Cont.)
| Date | Source | Info Extracted |
| :--- | :--- | :--- |
| 2026-03-23 | Fractal/Lian Li/NZXT/Corsair/CM | **Form Factors**: Full Tower (North XL: E-ATX, 496mm GPU), Mid-Tower (5000D: ATX, 420mm GPU), Dual-Chamber (O11 EVO: E-ATX, 422mm GPU), SFF (NR200P Max: ITX, 336mm GPU). <br> **Airflow**: Mesh front panels standard on all modern airflow cases. Corsair 5000D supports up to 10x 120mm fans. <br> **Materials**: SECC steel body with Tempered Glass panels (3-4mm thickness). <br> **Cable Mgmt**: 20-30mm behind-motherboard-tray spacing; Corsair RapidRoute channels route cables in under 10 min. |
