# Low-fidelity wireframe analysis

Structured notes derived from the uploaded sketches. Use this as a single reference for page structure, copy labels, and flow relationships without reopening image files.

**Project context:** Bluetooth earphone companion app (CENG / ID joint project).  
**Asset paths:** Relative to this folder (`docs/wireframes/`).

---

## Conventions observed across screens

- **Version map:** The project materials resolve into **two** wireframe versions. The earlier **paper** screens are the unlabelled first pass; the later bundle is explicitly marked **Version 2**.
- **Paper wireframes (Version 1):** Bottom navigation uses **two** tabs — **devices** and **profile** (sometimes labeled `Profile`).
- **Version 2 digital wireframes:** Bottom navigation expands to **four** tabs. The surviving Version 2 assets use **Home**, **Sound**, **Settings**, **Profile** and move more audio/status information into top-level navigation.
- **Canonical product flow:** Treat **[`docs/page-flows.md`](../page-flows.md)** as the source of truth for the current app story: **Launch** → **Splash** → **Home (empty state / Add Device)** → **Searching for a Device** → **Connected Successfully** → **Home (connected state)**. From there, the Version 2 shell branches into **Sound**, **Settings**, **Profile**, **Device details**, **Key Configurations**, and the **Volume overlay**.
- **Header patterns:** Back control (left), optional **settings / gear** (often top-right on paper flows); the hand-drawn **Sound** screen uses a simple title-led header.
- **Course metadata** appears on paper sheets: e.g. CENG318-ID322, Spring 2026, group identifiers. Not every early sheet is explicitly version-tagged, but the report groups that paper set as **Version 1**.

---

## Scope note

The sections below still document both wireframe generations for traceability, but only the **Version 2** assets are part of the canonical flow in **[`docs/page-flows.md`](../page-flows.md)**.

- **Included in the current flow:** `Wireframes-Complete-Version2.pdf`, `flowsheets/flowsheet-nine-screen-home-volume-settings-profile.jpeg`, `flowsheets/flowsheet-statistics-history-mydevices-bud-controls.jpeg`, `hand-drawn/wireframe-sound-equalizer-presets-sliders.jpeg`, and `hand-drawn/wireframe-volume-overlay-vertical.jpeg`.
- **Reference only:** the older paper `profile/`, `devices/`, and `settings/` sheets remain useful for UI detail, but they should not override the Version 2 navigation structure.

---

## Profile (`profile/`) - Version 1 reference only

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

## Devices (`devices/`) - Version 1 reference only

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

## Hand-drawn (`hand-drawn/`)

Additional pencil / ink screens that align with the surviving **Version 2** four-tab chrome (**Home · speaker · settings · profile**) used on the Sound sheet below.

### `hand-drawn/wireframe-sound-equalizer-presets-sliders.jpeg`

- **Title:** **Sound** (top left).
- **Presets:** Stacked buttons **Bass Boost**, **Balanced**, **Podcast**, **Custom**.
- **EQ:** Horizontal sliders **Bass**, **Mid**, **Treble** (thumb ~center).
- **CTA:** **save**.
- **Bottom nav:** **Home** | **Sound/speaker** (current) | **Settings** | **Profile**.
- **Flow:** Version 2 **Sound / EQ** screen; in the canonical flow, the **Sound** tab lands on **Statistics** first and then drills into this EQ surface.

### `hand-drawn/wireframe-volume-overlay-vertical.jpeg`

- **Pattern:** Modal / overlay on blurred app chrome (header, content blocks, four-tab bar visible underneath).
- **Content:** Speaker icon above a **vertical capsule** fill (level from bottom); handwritten **%65** as current value.
- **Flow:** Ephemeral **volume adjustment** on top of Home or other screens; dismiss → return to underlying route.

---

## Settings (`settings/`) - Version 1 reference only

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
| --- | ------ | ------- |
| 1 | **Splash / landing** | Logo, slogan, “Welcome!”, **Get Started**. |
| 2 | **Add device** | Large **ADD DEVICE** (+); bottom nav present. |
| 3 | **Searching** | Concentric / radar motif, copy **Searching for a Device…**. |
| 4 | **Success** | Checkmark, **Connected Successfully!**. |
| 5 | **Home (dashboard)** | **Connected** + battery (e.g. 85%); headphone + product name placeholder; **Current Mode: ANC ON**; **Volume %65**; **Preset: Balanced**; button **Key Configurations**; **Home** tab active. |
| 6 | **Settings** | Title **Settings** + gear; **Dark Mode** toggle; **Notifications** toggle; **Language** (e.g. English + globe); **Settings** tab active. |
| 7 | **Profile** | Avatar placeholder, name placeholder; rows **My Devices**, **Statistics**, **Hakkında** (About), **Yardım ve Geri Bild.** (Help & feedback); **Profile** tab active. |
| 8 | **Device details** | Same control summary as Home (mode, volume, preset, Key Configurations) plus **Disconnect** and **Forget Device**. |
| 9 | **Key configurations** | Back + title **Key Conf.**; headphone visual; **Double tap** — Left → “Next Song”, Right → “Pause”; **Microphone** selector **Auto**; bottom nav. |

**Flow logic:** The raw sheet separates **Add Device** from the dashboard, but in the final information architecture it is treated as **Home (empty state)**. The canonical path is **Launch** → **Splash** → **Home (empty state / Add Device)** → **Searching for a Device** → **Connected Successfully** → **Home (connected state)**. From **Home** or **Device details** → **Key Configurations**. From **Profile** → **My Devices** / **Statistics**. From **Device details** → **Disconnect / Forget** → return toward **Home (empty state)**. Cross-nav among **Home**, **Sound**, **Settings**, and **Profile** via the four-tab shell.

### `flowsheets/flowsheet-statistics-history-mydevices-bud-controls.jpeg`

Five phone frames in one row. Shared bottom nav: **Home**, **Audio/speaker**, **Settings/gear**, **Profile**.

| # | Screen | Summary |
| --- | ------ | ------- |
| 1 | **Listening history** | Back, title **Listening Hist**, **+**; filters **D · W · M · 6M · Y**; **Toplam 4h 32m** / **Today**; 24h bar chart (00, 06, 12, 18). |
| 2 | **Statistics** | Back, **Statistics**; card **Listening History** + **4h 32m**; tiles **Güvenli** (Safe, ear icon) and placeholder **?**. |
| 3 | **My Devices** | Back, **My Devices**; rows **Name / Connected**, **Name / Not Connected**; **+ Add Device**. |
| 4 | **Left** | Back, **Left**; list **Pause**, **Next Song** ✓, **Previous Song**, **Closed** (left earbud gesture mapping). |
| 5 | **Right** | Back, **Right**; **Pause** ✓, **Next Song**, **Previous Song**, **Closed** (right earbud). |

**Flow logic:** **Sound tab** → **Statistics**; **Listening History** card → detailed **Listening Hist**. **My Devices** stays part of the current Version 2 flow as a shared destination from **Settings** and **Profile**; **Add Device** ties back into pairing; device row → **Left** / **Right** configuration. Maps to canonical **Statistics**, **Listening history**, **My Devices**, and **Left/Right bud** nodes (and overlaps **Key configurations** from the nine-panel sheet).

---

## Reference (`reference/`)

### `reference/flowsheet-learnify-elearning-grid.jpeg`

- **Content (per review):** ~20 low-fidelity screens for an app branded **LEARNIFY** (onboarding, sign-in, course catalog, cart, checkout, course player, quizzes, progress, etc.) in a grid.
- **Scope:** **Not** part of the Bluetooth earphone companion product. Kept under `reference/` in case the file was added by mistake or for course comparison—**do not** merge into [`docs/page-flows.md`](../page-flows.md) or implementation.

---

## Suggested flow relationships (for implementation / Mermaid)

Use **one** diagram: **[`docs/page-flows.md`](../page-flows.md)** (section *Single app flow*). Summary:

- **Cold start and pairing:** **Launch** → **Splash** → **Home (empty state / Add Device)** → **Searching for a Device** → **Connected Successfully** → **Home (connected state)**.
- **Home hub:** Home is modeled in two states. The empty state exposes **Add Device** as the main call to action; the connected state shows connection state, ANC mode, volume, preset summary, and a **Key Configurations** entry. The **Volume overlay** is a temporary layer on top of Home.
- **Sound branch:** **Sound tab** → **Statistics** → **Listening History**; **Statistics** also drills into **Sound / EQ** with presets, **Custom**, **Bass / Mid / Treble**, and **Save**.
- **Settings branch:** **Settings tab** → settings overview (**Dark Mode**, **Notifications**, **Language**) → **My Devices** (post-pairing device management) → **Searching for a Device** (optional additional pairing) or **Left / Right** bud actions or **Device details**.
- **Profile branch:** **Profile tab** opens the avatar/menu surface with **My Devices**, **Statistics**, **About**, and **Help**; **My Devices** and **Statistics** link into the same shared screens used elsewhere in Version 2.
- **Device branch:** **Home** or **My Devices** → **Device details** → **Key Configurations** or **Disconnect / Forget** → return toward **Home (empty state)**.

Treat **flowsheets** as authoritative for **screen order** where captions exist; the **nine-screen** and **five-screen** sheets together define the canonical Version 2 path. Older paper screens remain as background reference only. **`reference/`** Learnify asset is excluded from scope.

---

## Changelog

| Date | Note |
| ---- | ---- |
| 2026-04-10 | Initial analysis from uploaded low-fi JPEGs; filenames aligned with `profile/`, `devices/`, `settings/`, `flowsheets/`. |
| 2026-04-10 | **`docs/page-flows.md`** reduced to **one** merged flow (Home hub + audio + profile + settings); analysis updated to match. |
| 2026-04-10 | Added **nine-screen** companion flowsheet; merged **Splash**, **Success**, **Volume/Settings/Profile** tabs, **Key Conf**, **Device details** into canonical flow. **Learnify** grid moved to `reference/` as out-of-scope. |
| 2026-04-10 | Added **hand-drawn** Sound + **volume overlay**; **five-screen** flowsheet (statistics, history, my devices, left/right bud); canonical flow updated (Statistics branch, overlay, Settings → My Devices → LB/RB, MD → DD). |
| 2026-04-12 | Corrected version framing: the analysis now reflects **two** wireframe versions only, with the earlier unlabelled paper set treated as **Version 1** and the surviving hand-drawn / flowsheet assets treated as **Version 2**. |
| 2026-04-12 | Removed deleted Figma wireframe references from the analysis and kept only the screens still present in `docs/wireframes/`. |
| 2026-04-12 | Synced the analysis with the Version 2-only Mermaid flow: pairing now starts at **Splash** and continues through **Add Device**, **Searching**, **Connected Successfully**, then into the four-tab shell (**Home / Sound / Settings / Profile**). |
| 2026-04-12 | Refined the canonical information architecture so **Add Device** is treated as the **empty state of Home**, and simplified the Mermaid flow to focus on primary paths rather than every back arrow. |
