
(function () {
  const VERSION = "v5";
  const storage = {
    get(key, fallback) {
      const v = localStorage.getItem(key);
      if (v === null) return fallback;
      try { return JSON.parse(v); } catch { return v; }
    },
    set(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
  };

  function isLoggedIn() {
    return storage.get("sw_logged_in", false) === true;
  }

  function routeByLogin(loggedRoute, guestRoute) {
    go(isLoggedIn() ? loggedRoute : guestRoute);
  }

  function goFromEntry() {
    // Get Started must work for guests:
    // - logged in users skip pairing and go to My Earbuds
    // - guests continue to Add Device flow without needing an account
    if (isLoggedIn()) {
      go("home.html");
    } else {
      go("add-device.html?from=welcome.html");
    }
  }

  function currentParams() { return new URLSearchParams(window.location.search); }
  function go(page) { window.location.href = page; }

  function resolveGo(page) {
    const params = currentParams();
    if (window.location.pathname.endsWith("add-device.html") && page === "searching.html") {
      const from = params.get("from");
      if (from) return "searching.html?from=" + encodeURIComponent(from);
    }
    if (window.location.pathname.endsWith("searching.html") && page === "add-device.html") {
      const from = params.get("from");
      if (from) return "add-device.html?from=" + encodeURIComponent(from);
    }
    return page;
  }

  function smartBack(defaultPage) {
    return currentParams().get("from") || defaultPage;
  }


  function isEntryPage() {
    return window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/") || window.location.pathname === "";
  }

  function isLoggedIn() {
    return storage.get("sw_logged_in", false) === true;
  }

  function initLaunchRedirect() {
    if (isEntryPage() && isLoggedIn()) {
      window.location.replace("home.html");
    }
  }

  function setLoggedIn() {
    storage.set("sw_logged_in", true);
  }

  function initGuestStart() {
    document.querySelectorAll("[data-guest-start]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        if (isLoggedIn()) {
          e.preventDefault();
          go("home.html");
        }
      });
    });
  }

  const statsData = {
    day: {
      time: "2 h 18 min",
      note: "↑ +8% from yesterday",
      bars: [["08", 18], ["10", 34], ["12", 48], ["14", 62], ["16", 44], ["18", 72], ["20", 40]],
      genres: [["Pop", 32], ["Podcast", 26], ["Electronic", 24], ["Jazz", 18]]
    },
    week: {
      time: "18 h 42 min",
      note: "↑ +12% from last week",
      bars: [["Mon", 24], ["Tue", 28], ["Wed", 30], ["Thu", 46], ["Fri", 44], ["Sat", 60], ["Sun", 24]],
      genres: [["Pop", 35], ["Electronic", 28], ["Hip-Hop", 20], ["Jazz", 17]]
    },
    month: {
      time: "76 h 15 min",
      note: "↑ +9% from last month",
      bars: [["W1", 38], ["W2", 62], ["W3", 54], ["W4", 78], ["W5", 44], ["W6", 66], ["W7", 52]],
      genres: [["Electronic", 31], ["Pop", 27], ["Hip-Hop", 22], ["Jazz", 20]]
    },
    year: {
      time: "842 h 30 min",
      note: "↑ +18% from last year",
      bars: [["Jan", 40], ["Feb", 52], ["Mar", 46], ["Apr", 68], ["May", 78], ["Jun", 72], ["Jul", 58]],
      genres: [["Pop", 34], ["Electronic", 29], ["Hip-Hop", 21], ["Jazz", 16]]
    }
  };

  function renderStatsTab(key) {
    const data = statsData[key] || statsData.week;
    const time = document.querySelector("[data-stats-time]");
    const note = document.querySelector("[data-stats-note]");
    const bars = document.querySelector("[data-stats-bars]");
    const genres = document.querySelector("[data-stats-genres]");
    if (time) time.textContent = data.time;
    if (note) note.textContent = data.note;
    if (bars) {
      bars.innerHTML = data.bars.map((bar, index) => `
        <div class="bar-col">
          <div class="bar ${index === data.bars.length - 2 ? "active" : ""}" style="height:${bar[1]}px"></div>
          <small>${bar[0]}</small>
        </div>
      `).join("");
    }
    if (genres) {
      genres.innerHTML = data.genres.map(g => `
        <div class="genre-row">
          <div class="genre-meta">
            <strong>${g[0]}</strong>
            <div class="genre-track"><i style="width:${g[1]}%"></i></div>
          </div>
          <span>${g[1]}%</span>
        </div>
      `).join("");
    }
  }

  function initStatsTabs() {
    const tabs = document.querySelector("[data-stats-tabs]");
    if (!tabs) return;
    tabs.querySelectorAll("[data-go]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const from = currentParams().get("from");
        const target = from ? `${btn.dataset.go}?from=${encodeURIComponent(from)}` : btn.dataset.go;
        go(target);
      });
    });
  }


  function applyTheme() {
    const theme = storage.get("sw_theme", "light");
    document.querySelectorAll(".phone").forEach(phone => {
      phone.classList.remove("light", "dark");
      if (phone.dataset.fixedLight === "true") {
        phone.classList.add("light");
      } else {
        phone.classList.add(theme);
      }
      if (phone.dataset.gradient === "true") phone.classList.add("gradient");
      else phone.classList.remove("gradient");
    });
  }

  function refreshThemeButton() {
    const theme = storage.get("sw_theme", "light");
    document.querySelectorAll("[data-theme-label]").forEach(el => el.textContent = theme === "light" ? "Light Mode" : "Dark Mode");
    document.querySelectorAll("[data-theme-desc]").forEach(el => el.textContent = theme === "light" ? "Tap to switch to dark mode" : "Tap to switch to light mode");
    document.querySelectorAll("[data-theme-switch]").forEach(el => el.classList.toggle("on", theme === "dark"));
  }

  function getDefaultDevices() {
    return [
      { id: 101, name: "SoundWave Buds", connected: true, left: 100, right: 100, caseBattery: 80 },
      { id: 102, name: "SoundWave Buds Pro", connected: false, left: 90, right: 90, caseBattery: 70 },
      { id: 103, name: "SoundWave Buds Lite", connected: false, left: 80, right: 80, caseBattery: 60 }
    ];
  }

  function ensureDeviceState() {
    if (storage.get("sw_device_version", "") !== VERSION) {
      storage.set("sw_devices", getDefaultDevices());
      storage.set("sw_device_version", VERSION);
    }
  }

  function getDevices() { return storage.get("sw_devices", getDefaultDevices()); }
  function saveDevices(devices) { storage.set("sw_devices", devices); }
  function getDeviceById(id) { return getDevices().find(d => String(d.id) === String(id)) || getDevices()[0]; }

  function addNewDevice() {
    const devices = getDevices();
    const suffix = devices.length + 1;
    devices.push({ id: Date.now(), name: `SoundWave Buds ${suffix}`, connected: true, left: 100, right: 100, caseBattery: 80 });
    saveDevices(devices);
  }

  function removeDevice(id) {
    saveDevices(getDevices().filter(d => String(d.id) !== String(id)));
  }


  function getSelectedDeviceId() {
    return storage.get("sw_selected_device_id", null);
  }

  function setSelectedDeviceId(id) {
    storage.set("sw_selected_device_id", id);
  }

  function removeSelectedDevice() {
    const selected = getSelectedDeviceId();
    let devices = getDevices();
    if (selected !== null) {
      devices = devices.filter(d => String(d.id) !== String(selected));
    } else {
      devices = devices.slice(1);
    }
    if (!devices.length) {
      devices = [];
    }
    saveDevices(devices);
    storage.set("sw_selected_device_id", devices[0] ? devices[0].id : null);
  }

  function fillDeviceDetails() {
    const holder = document.querySelector("[data-detail-name]");
    if (!holder) return;
    const devices = getDevices();
    const selected = getSelectedDeviceId();
    const device = devices.find(d => String(d.id) === String(selected)) || devices[0] || {
      name: "SoundWave Buds", connected: true, left: 100, right: 100, caseBattery: 80
    };
    document.querySelectorAll("[data-detail-name]").forEach(el => el.textContent = device.name);
    document.querySelectorAll("[data-detail-battery]").forEach(el => {
      el.textContent = `L ${device.left}% · R ${device.right}% · Case ${device.caseBattery}%`;
    });
  }

  function initRemoveDevice() {
    document.querySelectorAll("[data-remove-device]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        removeSelectedDevice();
        go("my-devices.html?from=profile.html");
      });
    });
  }


  function renderDeviceList() {
    const list = document.querySelector("[data-device-list]");
    if (!list) return;
    const devices = getDevices();
    list.innerHTML = devices.length ? devices.map(d => `
      <button class="device-card" data-go="device-details.html?id=${encodeURIComponent(d.id)}&from=my-devices.html">
        <div class="device-icon-box"><svg><use href="#i-headphones"></use></svg></div>
        <div>
          <h3>${d.name}</h3>
          <small>${d.connected ? "Connected" : "Last connected 3 days ago"}</small>
          <div class="battery-badges">
            <span>L ${d.left}%</span>
            <span>R ${d.right}%</span>
            <span class="case">Case ${d.caseBattery}%</span>
          </div>
        </div>
        <span class="chev">›</span>
      </button>
    `).join("") : `<p class="subtitle" style="text-align:center;margin:24px 0">No devices yet.</p>`;
    initNavigate();
  }

  function renderDeviceDetail() {
    const host = document.querySelector("[data-device-detail]");
    if (!host) return;
    const id = currentParams().get("id") || storage.get("sw_selected_device", "");
    const device = getDeviceById(id);
    if (!device) {
      host.innerHTML = `<h1 class="section-title">Device Details</h1><p class="subtitle">No device found.</p><button class="btn secondary" data-go="my-devices.html">Back to My Devices</button>`;
      initNavigate();
      return;
    }
    storage.set("sw_selected_device", device.id);
    host.innerHTML = `
      <h1 class="section-title">Device Details</h1>
      <div class="dashboard-card" style="min-height:116px">
        <div>
          <h3 style="margin:0 0 4px;font-size:18px">${device.name}</h3>
          <div class="connected-row">${device.connected ? "Connected" : "Saved"}</div>
          <div class="battery-mini"><span>L ${device.left}%</span><span>R ${device.right}%</span><span>Case ${device.caseBattery}%</span></div>
        </div>
        <div class="device-detail-icon clean"><svg><use href="#i-headphones"></use></svg></div>
      </div>
      <div class="metric-grid">
        <div class="metric"><small>ANC</small><strong>On</strong></div>
        <div class="metric"><small>Firmware</small><strong>1.4</strong></div>
        <div class="metric"><small>Codec</small><strong>AAC</strong></div>
      </div>
      <div style="flex:1"></div>
      <div class="stack-10">
        <button class="btn danger" data-go="remove-device.html?id=${encodeURIComponent(device.id)}"><svg><use href="#i-trash"></use></svg>Remove Device</button>
      </div>`;
    initNavigate();
  }

  function initRemovePage() {
    const btn = document.querySelector("[data-confirm-remove]");
    if (!btn) return;
    const id = currentParams().get("id") || storage.get("sw_selected_device", "");
    const device = getDeviceById(id);
    const name = document.querySelector("[data-remove-device-name]");
    if (name && device) name.textContent = device.name;
    btn.addEventListener("click", () => {
      if (device) removeDevice(device.id);
      go("my-devices.html?from=profile.html");
    });
  }

  function initDeviceFlow() {
    document.querySelectorAll("[data-start-search]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        sessionStorage.setItem("sw_pending_add", "1");
        go(resolveGo(btn.dataset.go));
      });
    });

    if (window.location.pathname.endsWith("connected.html")) {
      if (currentParams().get("new") === "1" && sessionStorage.getItem("sw_pending_add") === "1") {
        addNewDevice();
        sessionStorage.setItem("sw_pending_add", "0");
      }
    }
    renderDeviceList();
    renderDeviceDetail();
    initRemovePage();
  }

  function initNavigate() {
    document.querySelectorAll("[data-entry-start]").forEach(el => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        if (typeof goFromEntry === "function") {
          goFromEntry();
        } else {
          go("add-device.html?from=welcome.html");
        }
      });
    });
    document.querySelectorAll("[data-go]").forEach(el => {
      if (el.dataset.boundNav === "1") return;
      el.dataset.boundNav = "1";
      el.addEventListener("click", (e) => {
        e.preventDefault();
        go(resolveGo(el.dataset.go));
      });
    });
    document.querySelectorAll("[data-logout-confirm]").forEach(el => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        storage.set("sw_logged_in", false);
        go("welcome.html");
      });
    });

    document.querySelectorAll("[data-smart-back]").forEach(el => {
      if (el.dataset.boundBack === "1") return;
      el.dataset.boundBack = "1";
      el.addEventListener("click", (e) => {
        e.preventDefault();
        go(smartBack(el.dataset.defaultBack || "welcome.html"));
      });
    });
    document.querySelectorAll("[data-login-submit]").forEach(el => {
      if (el.dataset.boundLogin === "1") return;
      el.dataset.boundLogin = "1";
      el.addEventListener("click", (e) => {
        e.preventDefault();
        setLoggedIn();
        go("home.html");
      });
    });
  }

  function initThemeButtons() {
    document.querySelectorAll("[data-theme-toggle]").forEach(btn => {
      btn.addEventListener("click", () => {
        const next = storage.get("sw_theme", "light") === "light" ? "dark" : "light";
        storage.set("sw_theme", next);
        applyTheme();
        refreshThemeButton();
      });
    });
  }

  function refreshAmbientStatus() {
    const mode = storage.get("sw_ambient", "noise");
    const data = {
      noise: ["Noise Cancellation", "Blocks outside sounds for focused listening."],
      off: ["Ambient Off", "Turns sound processing off for a natural mode."],
      transparency: ["Transparency", "Lets outside sounds pass through while listening."]
    };
    const selected = data[mode] || data.noise;
    document.querySelectorAll("[data-ambient-title]").forEach(el => el.textContent = selected[0]);
    document.querySelectorAll("[data-ambient-note]").forEach(el => el.textContent = selected[1]);
  }

  function initAmbient() {
    const group = document.querySelector("[data-ambient-group]");
    if (!group) return;
    const active = storage.get("sw_ambient", "noise");
    group.querySelectorAll("[data-ambient]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.ambient === active);
      btn.addEventListener("click", () => {
        storage.set("sw_ambient", btn.dataset.ambient);
        group.querySelectorAll("[data-ambient]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        refreshAmbientStatus();
      });
    });
  }

  function initVolume() {
    const range = document.querySelector("[data-volume]");
    const value = document.querySelector("[data-volume-value]");
    if (!range || !value) return;
    range.value = storage.get("sw_volume", 75);
    value.textContent = range.value;
    range.addEventListener("input", () => {
      storage.set("sw_volume", range.value);
      value.textContent = range.value;
    });
  }

  function initPreset() {
    const group = document.querySelector("[data-preset-group]");
    if (!group) return;
    const active = storage.get("sw_preset", "default");
    group.querySelectorAll("[data-preset]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.preset === active);
      btn.addEventListener("click", () => {
        storage.set("sw_preset", btn.dataset.preset);
        group.querySelectorAll("[data-preset]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }

  function initEq() {
    document.querySelectorAll("[data-eq-range]").forEach(range => {
      const key = "sw_eq_" + range.dataset.eqRange;
      const label = document.querySelector(`[data-eq-label="${range.dataset.eqRange}"]`);
      range.value = storage.get(key, range.value);
      if (label) label.textContent = Number(range.value) > 0 ? "+" + range.value : range.value;
      range.addEventListener("input", () => {
        storage.set(key, range.value);
        if (label) label.textContent = Number(range.value) > 0 ? "+" + range.value : range.value;
      });
    });
    const reset = document.querySelector("[data-eq-reset]");
    if (reset) {
      reset.addEventListener("click", () => {
        const defaults = { bass: -2, mid: 0, treble: 2 };
        Object.keys(defaults).forEach(k => {
          storage.set("sw_eq_" + k, defaults[k]);
          const input = document.querySelector(`[data-eq-range="${k}"]`);
          const label = document.querySelector(`[data-eq-label="${k}"]`);
          if (input) input.value = defaults[k];
          if (label) label.textContent = defaults[k] > 0 ? "+" + defaults[k] : defaults[k];
        });
      });
    }
  }

  function initSelections() {
    document.querySelectorAll("[data-store-group]").forEach(group => {
      const key = group.dataset.storeGroup;
      const active = storage.get(key, group.dataset.default || "");
      group.querySelectorAll("[data-store-value]").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.storeValue === active);
        btn.addEventListener("click", () => {
          storage.set(key, btn.dataset.storeValue);
          group.querySelectorAll("[data-store-value]").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
        });
      });
    });
  }

  function syncUniqueControlOptions() {
    document.querySelectorAll(".control-card").forEach(card => {
      const selects = [...card.querySelectorAll("[data-control-select]")];
      const values = selects.map(s => s.value);
      selects.forEach((select, index) => {
        [...select.options].forEach(opt => {
          const usedElsewhere = values.some((v, i) => i !== index && v === opt.value);
          opt.disabled = usedElsewhere && opt.value !== select.value;
        });
      });
    });
  }


  function initStatsTabs() {
    const tabs = document.querySelector("[data-stats-tabs]");
    if (!tabs) return;
    const buttons = [...tabs.querySelectorAll("[data-stats-tab]")];
    const views = [...document.querySelectorAll("[data-stats-view]")];

    function activate(name) {
      buttons.forEach(btn => btn.classList.toggle("active", btn.dataset.statsTab === name));
      views.forEach(view => view.classList.toggle("active", view.dataset.statsView === name));
    }

    buttons.forEach(btn => {
      btn.addEventListener("click", () => activate(btn.dataset.statsTab));
    });
  }


  function initControlSelects() {
    const selects = document.querySelectorAll("[data-control-select]");
    selects.forEach(select => {
      const key = select.dataset.controlSelect;
      select.value = storage.get(key, select.value);
    });
    syncUniqueControlOptions();
    selects.forEach(select => {
      select.addEventListener("change", () => {
        const card = select.closest(".control-card");
        const siblings = [...card.querySelectorAll("[data-control-select]")].filter(s => s !== select);
        siblings.forEach(s => {
          if (s.value === select.value) {
            const available = [...s.options].find(opt => !opt.disabled && opt.value !== select.value);
            if (available) {
              s.value = available.value;
              storage.set(s.dataset.controlSelect, s.value);
            }
          }
        });
        storage.set(select.dataset.controlSelect, select.value);
        syncUniqueControlOptions();
      });
    });
  }

  function initPairHelp() {
    const btn = document.querySelector("[data-pair-help]");
    const box = document.querySelector("[data-pair-help-box]");
    if (!btn || !box) return;
    btn.addEventListener("click", () => { box.hidden = !box.hidden; });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLaunchRedirect();
    ensureDeviceState();
    applyTheme();
    refreshThemeButton();
    refreshAmbientStatus();
    initNavigate();
    initThemeButtons();
    initAmbient();
    initVolume();
    initPreset();
    initEq();
    initSelections();
    initControlSelects();
    initStatsTabs();
    initDeviceFlow();
    initStatsTabs();
    initPairHelp();
  });
})();
