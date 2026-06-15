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
├── README.md                               # Project overview, docs map, how to run things
├── docs/
│   ├── page-flows.md                       # Merged app flow + wireframe file index
│   ├── wireframes/
│   │   └── WIREFRAME-ANALYSIS.md           # Screen-by-screen labels and flow relationships
│   └── submission/                         # Course submission documents
├── soundwave_separate_html_screens/        # Mid-fi HTML mockups (browser-openable, no build step)
├── react-app/                              # React web prototype
└── rn-app/                                 # React Native Expo app (primary implementation)
    ├── App.tsx                             # Root with ThemeProvider + SafeAreaProvider
    ├── assets/vestel-logo.png
    └── src/
        ├── theme.ts                        # Light/dark token definitions
        ├── ThemeContext.tsx                # Global dark mode state via React Context
        ├── types.ts                        # Screen union type and shared types
        ├── components/                     # Icon, NavBar, BatteryPill, StatusBar
        └── screens/                        # One file per screen (~20 screens)
```

---

## Documentation & UX artifacts

| Resource | Purpose |
|----------|---------|
| [`docs/page-flows.md`](docs/page-flows.md) | **Canonical user journey:** one Mermaid diagram for launch → Home (devices + settings) → Sound / Noise / Profile, plus a table mapping to wireframe JPEG paths. |
| [`docs/wireframes/WIREFRAME-ANALYSIS.md`](docs/wireframes/WIREFRAME-ANALYSIS.md) | **Low-fi reference:** headers, fields, bottom-nav variants, nine-screen companion sheet, and how they merge into the single flow. |
| `docs/wireframes/*` | **Source imagery:** paper sketches, `hand-drawn/`, Figma (`figma-v3/`), flowsheets (nine-screen + stats/bud five-panel), and `reference/` (out-of-scope uploads). |
| [`docs/mockups/`](docs/mockups/) | **Mid-fi HTML mockups:** mobile-width pages with linked navigation; useful for reviews before implementation. Start from `welcome.html` or `index.html`. |

---

## Tech stack

| Layer | Tech |
|--------|------|
| Mobile | React Native (Expo ~54) + TypeScript |
| Navigation | Custom `Screen` union type — no React Navigation dependency |
| Theming | React Context (`ThemeContext`) with light/dark token system |
| Icons | `react-native-svg` via custom `Icon` component |
| Sliders | `@react-native-community/slider` |
| Safe areas | `react-native-safe-area-context` |
| Bluetooth | BLE (GATT) — to be integrated |

---

## Getting started

### HTML mockups

No install required — open any file in `soundwave_separate_html_screens/` directly in a browser.

### React Native app

```bash
cd rn-app
npm install
npx expo start
```

Then scan the QR code with **Expo Go** on your phone, or press `i` for iOS Simulator / `a` for Android Emulator.

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
