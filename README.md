# Bluetooth Earphone — Industrial Design & Computer Engineering Project

Joint project for **Industrial Design** and **Computer Engineering**: we will **design** a Bluetooth earphone (form, ergonomics, materials, and user experience), **design** its **companion mobile application**, then **implement** the app and integrate it with the earphone over Bluetooth.

---

## Vision

Deliver a coherent product where hardware and software feel like one system: comfortable, reliable audio hardware paired with a clear mobile experience for pairing, controls, battery status, and (optionally) personalization.

---

## Objectives

| Track | Focus |
|--------|--------|
| **Industrial Design** | Concept, sketching, CAD/prototyping, ergonomics, CMF (color/material/finish), usability, design documentation. |
| **Computer Engineering** | Mobile app architecture, Bluetooth connectivity (e.g. BLE), firmware-facing assumptions, testing, and implementation. |
| **Shared** | Aligned requirements, design language, and validation so ID deliverables and software features stay in sync. |

---

## Scope (planned)

1. **Product design** — Earphone concept, user flows, physical design constraints, and design artifacts (renders, models, prototypes as required by the course).
2. **Mobile application** — UX/UI for the companion app; implementation on the chosen platform(s).
3. **Integration** — Bluetooth pairing, device discovery, and feature set agreed between design and engineering (e.g. battery, EQ, gestures mapped to app actions).

**In progress in this repo:** companion-app **information architecture**, **page flow** (single canonical story), **wireframe analysis**, and **clickable HTML mockups** that mirror that flow. The native/cross-platform `app/` codebase is still to be added.

Details (exact BLE services, chipsets, and app stores) will be documented here as they are finalized.

---

## Repository layout

```
.
├── README.md                      # Project overview, docs map, how to run things
├── docs/
│   ├── page-flows.md              # Merged app flow (Home · Sound · Noise · Profile) + wireframe file index
│   ├── wireframes/                # Paper + Figma JPEGs; structured notes below
│   │   └── WIREFRAME-ANALYSIS.md  # Screen-by-screen labels, chrome, and flow relationships
│   └── mockups/                   # Static HTML prototypes (browser-openable)
│       ├── index.html             # Links to every mock page
│       ├── welcome.html           # Start / splash with logo → home
│       ├── assets/mockup.css      # Shared styles for all mockups
│       ├── home/                  # Devices hub: empty, populated, Bluetooth pairing
│       ├── sound/                 # Equalizer presets + sliders + save
│       ├── noise/                 # Listening modes (NC / normal / transparency)
│       ├── profile/               # Login, register, forgot password, after-login views
│       └── settings/              # General, device detail, auto power-off
├── hardware/ or design/           # ID assets — CAD, exports (optional; add when used)
└── app/                           # Mobile application source (to be added)
```

Adjust folder names to match your course submission requirements.

---

## Documentation & UX artifacts

| Resource | Purpose |
|----------|---------|
| [`docs/page-flows.md`](docs/page-flows.md) | **Canonical user journey:** one Mermaid diagram for launch → Home (devices + settings) → Sound / Noise / Profile, plus a table mapping to wireframe JPEG paths. |
| [`docs/wireframes/WIREFRAME-ANALYSIS.md`](docs/wireframes/WIREFRAME-ANALYSIS.md) | **Low-fi reference:** headers, fields, bottom-nav variants, nine-screen companion sheet, and how they merge into the single flow. |
| `docs/wireframes/*` | **Source imagery:** paper sketches, Figma exports (`figma-v3/`), flowsheets (incl. nine-screen Home·Volume·Settings·Profile), and `reference/` (out-of-scope uploads labeled in analysis). |
| [`docs/mockups/`](docs/mockups/) | **Mid-fi HTML mockups:** mobile-width pages with linked navigation; useful for reviews before implementation. Start from `welcome.html` or `index.html`. |

---

## Tech stack (TBD)

| Layer | Planned / options |
|--------|-------------------|
| Mobile | *e.g. React Native, Flutter, or native iOS/Android — to be chosen* |
| Bluetooth | BLE (GATT) for typical consumer audio accessories |
| Backend | Optional — only if the product needs accounts, OTA, or cloud features |

The **HTML mockups** are plain static files (no build step). Update this table once the team locks the real app stack.

---

## Getting started

### HTML mockups (available now)

No install required. Open in a browser:

1. **`docs/mockups/welcome.html`** — splash / logo, then **Get started** to the empty home screen.  
2. **`docs/mockups/index.html`** — directory of all mock pages with short descriptions.

You can also serve the folder locally if you prefer clean URLs:

```bash
cd docs/mockups && python3 -m http.server 8080
# Visit http://localhost:8080/welcome.html
```

### Mobile app (when `app/` exists)

Prerequisites and run commands will be added here once the application codebase is in the repository.

```bash
# Placeholder — replace with real steps, e.g.:
# cd app && npm install && npm run ios
```

---

## Team & course

| | |
|--|--|
| **Course** | CENG 318 / ID — *update with full course codes and institution* |
| **Term** | *e.g. Spring 2026* |
| **Team** | *Names and roles (ID / CENG)* |

---

## License

*Specify license or course policy (e.g. all rights reserved for academic use only).*

---

## Acknowledgments

Course instructors, lab staff, and any sponsors or open-source projects used in the app or documentation will be listed here.
