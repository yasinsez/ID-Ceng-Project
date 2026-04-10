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

Details (exact BLE services, chipsets, and app stores) will be documented here as they are finalized.

---

## Repository layout (to be updated)

```
.
├── README.md                 # This file — project overview and how to run/build
├── docs/
│   ├── page-flows.md         # Single merged app flow (Mermaid) + wireframe index
│   └── wireframes/           # Paper + Figma exports; analysis in WIREFRAME-ANALYSIS.md
├── hardware/ or design/      # ID assets — CAD, exports (if stored in-repo)
└── app/                      # Mobile application source (structure TBD)
```

Adjust folder names to match your course submission requirements.

---

## Tech stack (TBD)

| Layer | Planned / options |
|--------|-------------------|
| Mobile | *e.g. React Native, Flutter, or native iOS/Android — to be chosen* |
| Bluetooth | BLE (GATT) for typical consumer audio accessories |
| Backend | Optional — only if the product needs accounts, OTA, or cloud features |

Update this table once the team locks choices.

---

## Getting started (developers)

Prerequisites and run commands will be added when the `app/` (or equivalent) codebase exists.

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
