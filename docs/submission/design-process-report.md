# Bluetooth Earphone Companion App

## Design Choices and Process Report

Prepared for the joint CENG + ID assignment (Spring 2026).

## 1. Concept Description

### Product Purpose
The product is a Bluetooth earphone companion mobile app that helps users connect, monitor, and personalize their earphones with minimal friction. The app is designed to support everyday listening scenarios (commuting, studying, calls, and focus sessions) through quick access to connectivity, sound control, and profile/settings management.

### User Needs
- Connect earphones quickly and understand connection status clearly.
- See battery/device status at a glance.
- Adjust sound profile with either presets or basic manual EQ controls.
- Switch between listening modes (noise cancellation, normal, transparency) depending on context.
- Manage profile and device settings without navigating complex menus.

### Key Functions
- Bluetooth pairing and connection feedback.
- Device home dashboard with status summary.
- Sound customization (presets + bass/mid/treble sliders + save).
- Noise/listening mode switch.
- Profile flows (login, register, forgot password, menu/overview).
- Device settings (details, software update entry, automatic power-off duration).

## 2. Information Architecture and Main Flow

The final architecture merges paper wireframes, a nine-screen flow sheet, and Figma v3 screens into one canonical flow:

- Launch/Splash -> Home.
- Home as the hub: connection state, quick controls, and navigation.
- Home -> Bluetooth pairing -> Success -> Home.
- Home -> Sound/Volume controls -> Presets -> Custom sliders -> Save.
- Home -> Noise modes.
- Home -> Settings -> Device detail -> Auto power-off.
- Home -> Profile (auth and post-login screens).

Primary references:
- `docs/page-flows.md`
- `docs/wireframes/WIREFRAME-ANALYSIS.md`

## 3. Annotated Wireframes and Screen Intent

The following low-fidelity assets were used to define UI structure and information flow.

| Asset | Annotation summary (what is tested/decided) |
|---|---|
| `docs/wireframes/devices/wireframe-devices-home-empty.jpeg` | Empty-state logic for first-time users, clear entry to Add Device. |
| `docs/wireframes/devices/wireframe-devices-list-populated.jpeg` | Populated-state card structure, quick glance of connected device. |
| `docs/wireframes/devices/wireframe-device-control-equalizer.jpeg` | Device control hierarchy: image, model/battery, listening mode, equalizer region. |
| `docs/wireframes/flowsheets/flowsheet-bluetooth-pairing.jpeg` | Pairing process and transition back to devices/home states. |
| `docs/wireframes/figma-v3/wireframe-sound-equalizer-four-presets.jpeg` | Preset model (Bass Boost, Balanced, Podcast, Custom) and tab-level IA decision. |
| `docs/wireframes/figma-v3/wireframe-sound-equalizer-custom-save.jpeg` | Manual tuning model with explicit Save action to reduce accidental changes. |
| `docs/wireframes/profile/wireframe-login.jpeg` | Entry point for account features, simple login form hierarchy. |
| `docs/wireframes/profile/wireframe-register.jpeg` | New user account creation flow and required fields. |
| `docs/wireframes/profile/wireframe-forgot-password-and-login.jpeg` | Recovery loop and return path to login. |
| `docs/wireframes/profile/wireframe-profile-overview.jpeg` | Post-login account snapshot with device access. |
| `docs/wireframes/settings/wireframe-settings-general.jpeg` | Global preferences grouping and route to device settings. |
| `docs/wireframes/settings/wireframe-settings-device-detail.jpeg` | Device metadata, software update entry, and setting depth. |
| `docs/wireframes/settings/wireframe-settings-automatic-power-off.jpeg` | Single-purpose selection screen for auto power-off intervals. |
| `docs/wireframes/flowsheets/flowsheet-nine-screen-home-volume-settings-profile.jpeg` | Consolidated journey and bottom navigation logic (Home/Volume/Settings/Profile). |

## 4. Low-Fidelity Prototype (Photos)

Low-fidelity prototype evidence is represented by the wireframe photo exports under:

- `docs/wireframes/devices/`
- `docs/wireframes/profile/`
- `docs/wireframes/settings/`
- `docs/wireframes/flowsheets/`
- `docs/wireframes/figma-v3/`

For submission, include these image files directly as appendix pages or embed key frames in this report PDF.

## 5. Reflection

### Design Choices and Alternatives
- We prioritized one central Home hub instead of splitting key actions across many top-level screens.
- We kept sound customization shallow (presets first, sliders second) to balance speed and flexibility.
- We preserved a dedicated profile area to separate account management from device-control tasks.
- Alternative considered: merging Noise controls into Sound only. Rejected because users often expect mode switching to be immediately reachable from main navigation.

### Challenges
- Early wireframes used slightly different tab structures (Home/Sound/Noise/Profile versus Home/Volume/Settings/Profile).
- Some screens duplicated intent across paper and digital versions.
- Bluetooth flow needed consistent state transitions for empty, searching, success, and connected views.

### User Considerations
- First-time users should find Add Device and pairing quickly.
- Returning users should perform frequent tasks (change mode, tweak sound) in 1 to 2 taps.
- System states must be explicit to reduce confusion: disconnected, searching, paired, connected.

### Quick Evaluation Plan (if no real-user test yet)
- Participants: 3 to 5 students.
- Tasks: Pair a device, enable transparency mode, create and save a custom EQ, set auto power-off.
- Metrics: task completion, time on task, mis-tap count, and reported confidence.
- Success target: at least 80% task completion without facilitator intervention.

### Optional User Test Findings Section (fill if tested)
- Number of participants:
- Main issues observed:
- Changes made after testing:

## 6. Conclusion

The resulting UI structure is coherent across connection, control, and account settings. The chosen architecture supports both first-time onboarding and repeated everyday actions while remaining suitable for iterative visual and interaction refinement in later high-fidelity stages.
