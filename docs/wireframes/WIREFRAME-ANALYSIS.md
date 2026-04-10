# Low-fidelity wireframe analysis

Structured notes derived from the uploaded sketches. Use this as a single reference for page structure, copy labels, and flow relationships without reopening image files.

**Project context:** Bluetooth earphone companion app (CENG / ID joint project).  
**Asset paths:** Relative to this folder (`docs/wireframes/`).

---

## Conventions observed across screens

- **Paper wireframes (Version 1):** Bottom navigation uses **two** tabs — **devices** and **profile** (sometimes labeled “Profile”).
- **Figma digital wireframes (Version 3):** Bottom navigation uses **four** tabs — **Home**, **Sound**, **Noise**, **Profile**. Design notes say the **Home** screen was revised to carry connection status, device info, current mode, a live equalizer visualization, and quick stats; redundant controls were moved into the tab bar (see `figma-v3/` assets).
- **Canonical product flow:** Treat **[`docs/page-flows.md`](../page-flows.md)** as the single merged story. It folds in the **nine-screen companion flowsheet**: **Splash** → **Home** hub with pairing (**Add Device → Searching → Connected successfully**), bottom nav **Home · Volume · Settings · Profile**, **Key configurations**, and **Device details** (disconnect / forget). **Volume** carries Figma-style **presets + EQ**; **listening mode** (ANC / normal / transparency) stays explicit in the flow. Older two-tab paper and Figma **Sound / Noise** labels are **aliases** for Volume / mode—not separate products.
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

- **Canonical mapping:** In [`docs/page-flows.md`](../page-flows.md), Figma’s **Sound** tab is folded into the **Volume** tab from the nine-screen sheet (same preset + slider behavior).
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

### `flowsheets/flowsheet-nine-screen-home-volume-settings-profile.jpeg`

Single page with **nine** phone frames (hand-drawn). Bottom nav on main chrome: **Home**, **Volume** (or “Volume/Controls”), **Settings**, **Profile**.

| # | Screen | Summary |
|---|--------|---------|
| 1 | **Splash / landing** | Logo, slogan, “Welcome!”, **Get Started**. |
| 2 | **Add device** | Large **ADD DEVICE** (+); bottom nav present. |
| 3 | **Searching** | Concentric / radar motif, copy **Searching for a Device…**. |
| 4 | **Success** | Checkmark, **Connected Successfully!**. |
| 5 | **Home (dashboard)** | **Connected** + battery (e.g. 85%); headphone + product name placeholder; **Current Mode: ANC ON**; **Volume %65**; **Preset: Balanced**; button **Key Configurations**; **Home** tab active. |
| 6 | **Settings** | Title **Settings** + gear; **Dark Mode** toggle; **Notifications** toggle; **Language** (e.g. English + globe); **Settings** tab active. |
| 7 | **Profile** | Avatar placeholder, name placeholder; rows **My Devices**, **Statistics**, **Hakkında** (About), **Yardım ve Geri Bild.** (Help & feedback); **Profile** tab active. |
| 8 | **Device details** | Same control summary as Home (mode, volume, preset, Key Configurations) plus **Disconnect** and **Forget Device**. |
| 9 | **Key configurations** | Back + title **Key Conf.**; headphone visual; **Double tap** — Left → “Next Song”, Right → “Pause”; **Microphone** selector **Auto**; bottom nav. |

**Flow logic:** Splash → Get Started → Add Device → Searching → Success → Home. From Home or device screen → Key Configurations. From Profile → My Devices → Device details. Disconnect / Forget → return toward unpaired / add-device state. Cross-nav among Home, Volume, Settings, Profile via tab bar.

---

## Reference (`reference/`)

### `reference/flowsheet-learnify-elearning-grid.jpeg`

- **Content (per review):** ~20 low-fidelity screens for an app branded **LEARNIFY** (onboarding, sign-in, course catalog, cart, checkout, course player, quizzes, progress, etc.) in a grid.
- **Scope:** **Not** part of the Bluetooth earphone companion product. Kept under `reference/` in case the file was added by mistake or for course comparison—**do not** merge into [`docs/page-flows.md`](../page-flows.md) or implementation.

---

## Suggested flow relationships (for implementation / Mermaid)

Use **one** diagram: **[`docs/page-flows.md`](../page-flows.md)** (section *Single app flow*). Summary:

- **Cold start:** Launch → **Splash** (Welcome / Get Started) → **Home**.
- **Pairing:** Home → **Add Device** → **Searching** → **Connected successfully** → Home.
- **Home hub:** Status, mode, volume/preset summary, **Key configurations** entry.
- **Volume tab:** Deeper **level + preset + EQ** (presets → Custom → Bass / Mid / Treble → Save) → back to Home.
- **Listening mode:** **Noise** path (cancellation · normal · transparency) ↔ Home.
- **Settings:** Tab or gear → **General settings** → device detail → automatic power-off picker → back to Home.
- **Profile tab:** Login → register / forgot password / log in → after-login profile; **My Devices** and **Open device** → **Device details** → Disconnect / Forget → Home.

Treat **flowsheets** as authoritative for **screen order** where captions exist; the **nine-screen** sheet is the newest full-journey map for companion UX. **`reference/`** Learnify asset is excluded from scope.

---

## Changelog

| Date | Note |
|------|------|
| 2026-04-10 | Initial analysis from uploaded low-fi JPEGs; filenames aligned with `profile/`, `devices/`, `settings/`, `flowsheets/`. |
| 2026-04-10 | Added Figma **Version 3** **Sound** screens under `figma-v3/`; documented four-tab chrome (Home, Sound, Noise, Profile) and relation to paper v1. |
| 2026-04-10 | **`docs/page-flows.md`** reduced to **one** merged flow (Home hub + Sound + Noise + Profile + settings); analysis updated to match. |
| 2026-04-10 | Added **nine-screen** companion flowsheet; merged **Splash**, **Success**, **Volume/Settings/Profile** tabs, **Key Conf**, **Device details** into canonical flow. **Learnify** grid moved to `reference/` as out-of-scope. |
