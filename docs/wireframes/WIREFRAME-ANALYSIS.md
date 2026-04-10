# Low-fidelity wireframe analysis

Structured notes derived from the uploaded sketches. Use this as a single reference for page structure, copy labels, and flow relationships without reopening image files.

**Project context:** Bluetooth earphone companion app (CENG / ID joint project).  
**Asset paths:** Relative to this folder (`docs/wireframes/`).

---

## Conventions observed across screens

- **Paper wireframes (Version 1):** Bottom navigation uses **two** tabs — **devices** and **profile** (sometimes labeled “Profile”).
- **Figma digital wireframes (Version 3):** Bottom navigation uses **four** tabs — **Home**, **Sound**, **Noise**, **Profile**. Design notes say the **Home** screen was revised to carry connection status, device info, current mode, a live equalizer visualization, and quick stats; redundant controls were moved into the tab bar (see `figma-v3/` assets).
- **Canonical product flow:** Treat **[`docs/page-flows.md`](../page-flows.md)** as the single merged story: **Home** = paper “devices” hub + gear settings; **Sound** / **Noise** = split of paper device control (EQ vs modes); **Profile** = paper auth. Do not maintain separate “v1 only” vs “v3 only” user journeys in documentation.
- **Header patterns:** Back control (left), optional **settings / gear** (often top-right on paper flows); Figma **Sound** screen uses back + title **Sound**.
- **Course metadata** appears on paper sheets: e.g. CENG318–ID322, Spring 2026, group identifiers, “Version 1”.

---

## Profile (`profile/`)

### `profile/wireframe-login.jpeg`

- **Intent:** Login entry from **Profile** tab (“profile clicked”).
- **Header:** Back, profile picture placeholder, settings gear.
- **Fields:** `user name/email`, `user password`, link `forgot password`.
- **Actions:** `Log in`, `register`.
- **Chrome:** Bottom nav — **devices** | **profile** (profile active).

### `profile/wireframe-register.jpeg`

- **Intent:** Registration after tapping register (“register button clicked”).
- **Header:** Same pattern as login (back, profile picture, settings).
- **Fields:** `fill email`, `create password`, `first name`, `last name`.
- **Primary CTA:** `Register`.
- **Chrome:** Bottom nav — devices | profile (profile active). Flow arrows imply sequence before/after adjacent screens.

### `profile/wireframe-profile-overview.jpeg`

- **Intent:** **After login** profile view.
- **Header:** Back, profile picture placeholder (marked X), settings.
- **Sections:** `Account info` (two placeholder rows), `my devices` (two placeholder rows).
- **Chrome:** Bottom nav — devices | profile.

### `profile/wireframe-profile-menu.jpeg`

- **Intent:** Alternative **after login** profile layout — vertical list of menu rows.
- **Header:** Settings (gear), back.
- **Content:** Large profile picture placeholder; list includes `Account info`, `my devices`; additional rows are placeholders (X).
- **Chrome:** Bottom nav — devices | profile.

### `profile/wireframe-forgot-password-and-login.jpeg`

- **Composite sheet** (two screens, vertical flow).
- **Screen A — Forgot password:** Gear in header; logo circle placeholder; `email`; button `send confirmation mail`; bottom nav devices | profile. Note: “forgot password”.
- **Screen B — Login (partial):** Similar header; circular placeholder; username/password fields; bottom nav with profile tab.

---

## Devices (`devices/`)

### `devices/wireframe-devices-home-empty.jpeg`

- **Intent:** First step — user opens app and adds a device.
- **Header:** `brand name`, settings gear.
- **Body:** Section `my devices`; large CTA **Add Device** (+).
- **Chrome:** Bottom nav — **devices** (active) | profile.
- **Flow:** Arrow to next screen (pairing / search).

### `devices/wireframe-devices-list-populated.jpeg`

- **Intent:** Device row appears after successful add (“Device is added to screen”).
- **Header:** `brand name`, settings.
- **Body:** `my devices`; **device card** with `device image`, `model name`, `connection status`, `battery`; **Add Device** (+) still present.
- **Chrome:** Bottom nav — devices | profile.

### `devices/wireframe-device-control-equalizer.jpeg`

- **Intent:** Deep control screen for a headphone model (not the empty list).
- **Header:** Back, settings.
- **Body:** `headphone model's image`; `model name` + **battery**; **modes:** `noise cancellation`, `normal mode`, `transparency mode`; large **Equalizer** region with multiple vertical sliders (~10).
- **Context:** Likely reached from a device row or device detail; back implies stack navigation.

---

## Figma Version 3 (`figma-v3/`)

Screens captured from the Figma file (prototype route **`/sound`** on the variant with Save). Same product, **updated information architecture** vs paper v1.

### `figma-v3/wireframe-sound-equalizer-four-presets.jpeg`

- **Intent:** **Sound** top-level tab — equalizer presets and manual bands.
- **Header:** Back (returns to prior context; design discussion implies **Home** as main hub).
- **Title:** `Sound`.
- **Presets (pill / large buttons):** `Bass Boost`, `Balanced`, `Podcast`, `Custom` — **Custom** shown selected (blue).
- **Manual controls:** Horizontal sliders **Bass**, **Mid**, **Treble** (Treble partially clipped in export); implied interaction: tuning when **Custom** is active.
- **Chrome:** Bottom nav — **Home** | **Sound** (active) | **Noise** | **Profile**.
- **Sidebar context (Figma):** Feedback to add equalizer and rework **Home** because main actions moved to bottom navigation; labeled **Version 3**.

### `figma-v3/wireframe-sound-equalizer-custom-save.jpeg`

- **Intent:** Same **Sound** tab, alternate state / iteration.
- **Presets shown:** `Balanced`, `Podcast`, `Custom` (**Custom** selected); no **Bass Boost** row in this crop (may be scroll or layout variant).
- **Sliders:** **Bass**, **Mid**, **Treble** — thumbs at mid position in this shot.
- **Primary CTA:** Full-width blue **`Save`** below sliders (commit custom EQ).
- **Chrome:** Same four-tab bottom nav; **Sound** active.

### Flow notes (Version 3)

- **Entry to Sound:** Tap **Sound** in the bottom bar from **Home**, **Noise**, or **Profile**.
- **Within Sound:** Choose preset; if **Custom**, adjust **Bass / Mid / Treble**; **Save** where present to persist.
- **Exit:** Back from header, or switch tab via bottom nav.
- **Relationship to v1:** Paper **device control** screen combines model image, **modes** (NC / normal / transparency), and a large vertical EQ; v3 **splits** concerns so **Sound** is its own tab and **Noise** is separate. The merged flow in **`docs/page-flows.md`** adopts that split while keeping paper pairing, settings, and profile paths under **Home** / **Profile**.

---

## Settings (`settings/`)

### `settings/wireframe-settings-general.jpeg`

- **Intent:** **General settings** opened from gear on device/home screens (“General setting screen is opened”).
- **Header:** Back, title `settings`.
- **Rows:** `language`, `dark/light mode` (toggle sketched); section **Device settings** with placeholder rows (X).
- **Flow:** Left context shows prior dashboard-style screen with model name, connection status, battery.

### `settings/wireframe-settings-device-detail.jpeg`

- **Intent:** Per-device settings when user selects a device from settings (“when clicked on a device at settings”).
- **Header:** Back.
- **Body:** `Device image`; `serial no:` + value placeholder; list rows **Automatic Power Off**, **Software update**.
- **Flow:** Arrow to next screen (power-off detail).

### `settings/wireframe-settings-automatic-power-off.jpeg`

- **Intent:** Duration / options for auto power-off (“when clicked automatic power off”).
- **Header:** Back.
- **Body:** Info block `info about automatic power-off`; list with `30 minutes` and additional placeholder intervals (X).
- **Flow:** Middle step between device detail and a further screen (partial empty frame on some sheets).

---

## Flowsheets (`flowsheets/`)

Multi-screen stories on one page; individual screens may duplicate assets above.

### `flowsheets/flowsheet-add-device-and-settings.jpeg`

Vertical sequence (annotated):

1. **Home empty** — `my devices`, Add Device; note: user enters app and adds device.
2. **Bluetooth** — close (X); Bluetooth logo; status `looking`; note: connecting to Bluetooth.
3. **Home populated** — device card + Add Device; note: device added.
4. **General settings** — language, dark/light, Device Settings, placeholder; note: general settings opened.

### `flowsheets/flowsheet-auth-and-profile.jpeg`

Four stacked screens (profile tab active on all):

1. **Login** — profile clicked; same fields/CTAs as single login wireframe.
2. **Register** — register clicked.
3. **Profile after login** — account info / my devices / placeholders.
4. **Forgot password** — email + send confirmation mail.

### `flowsheets/flowsheet-bluetooth-pairing.jpeg`

Horizontal strip: partial previous screen → **center:** Bluetooth logo + `looking`, caption *device is connecting to bluetooth* → partial **my devices** list. Emphasizes transition into populated devices view.

### `flowsheets/flowsheet-device-settings-and-power-off.jpeg`

Vertical strip:

1. **Device detail** — image, serial, Automatic Power off, Software update (with note “when clicked on a device at settings”).
2. **Automatic power off** — info + list including `30 minutes` (“when clicked automatic power off”).
3. **Empty phone frames** — placeholders for future steps.

---

## Suggested flow relationships (for implementation / Mermaid)

Use **one** diagram: **[`docs/page-flows.md`](../page-flows.md)** (section *Single app flow*). Summary:

- **Home hub:** Add Device → Bluetooth “looking” → return to Home (list may be populated); **Settings gear** → general → device detail → automatic power-off picker.
- **Sound tab:** Presets → **Custom** → Bass / Mid / Treble sliders → **Save** (where applicable) → back to Home.
- **Noise tab:** Modes **cancellation · normal · transparency** → back to Home.
- **Profile tab:** Login → register / forgot password / log in → after-login profile → Home.

Treat **flowsheets** as authoritative for **screen order** where captions exist; **single-screen** files as layout reference. Older “two-tab only” or “four-tab only” wording in asset filenames does not imply separate user journeys—the **merged** flow is canonical.

---

## Changelog

| Date | Note |
|------|------|
| 2026-04-10 | Initial analysis from uploaded low-fi JPEGs; filenames aligned with `profile/`, `devices/`, `settings/`, `flowsheets/`. |
| 2026-04-10 | Added Figma **Version 3** **Sound** screens under `figma-v3/`; documented four-tab chrome (Home, Sound, Noise, Profile) and relation to paper v1. |
| 2026-04-10 | **`docs/page-flows.md`** reduced to **one** merged flow (Home hub + Sound + Noise + Profile + settings); analysis updated to match. |
