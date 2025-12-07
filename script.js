const characters = [
  {
    name: "Aris Wynfell",
    class: "Arcane Scout",
    level: 5,
    alignment: "Neutral Good",
    origin: "Half-elf from the misted port of Lithmoor",
    vitals: {
      HP: 42,
      AC: 16,
      Speed: "35 ft",
      Initiative: "+4",
      "Hit Dice": "5d10",
      "Passive Perception": 15
    },
    attributes: {
      Strength: { score: 12, mod: "+1" },
      Dexterity: { score: 18, mod: "+4" },
      Constitution: { score: 14, mod: "+2" },
      Intelligence: { score: 15, mod: "+2" },
      Wisdom: { score: 13, mod: "+1" },
      Charisma: { score: 10, mod: "+0" }
    },
    skills: [
      "Acrobatics",
      "Investigation",
      "Perception",
      "Survival",
      "Thieves' Tools",
      "Cartography",
      "Stealth"
    ],
    gear: [
      { title: "Skyhook Bow", detail: "Ranged, 80/320 ft, draws lines for allies" },
      { title: "Cindersteel Dagger", detail: "+1 flaming melee, finesse" },
      { title: "Traveler's Cloak", detail: "+2 to saves vs. cold; advantage on stealth in rain" },
      { title: "Explorer's Pack", detail: "Grapnel, 50 ft silk rope, maps of Lithmoor" }
    ],
    spells: [
      { title: "Gust Step", detail: "Bonus action, dash and hover 10 ft" },
      { title: "Pulse Arrow", detail: "2d6 force, pushes 10 ft on hit" },
      { title: "Veil of Mist", detail: "10-ft radius obscurement for 1 minute" },
      { title: "Whispering Mark", detail: "Mark a target and know its direction for 1 day" }
    ]
  },
  {
    name: "Sable Krine",
    class: "Shadow Binder",
    level: 7,
    alignment: "Chaotic Neutral",
    origin: "Former court mage turned mercenary",
    vitals: {
      HP: 58,
      AC: 15,
      Speed: "30 ft",
      Initiative: "+2",
      "Hit Dice": "7d8",
      "Passive Perception": 13
    },
    attributes: {
      Strength: { score: 9, mod: "-1" },
      Dexterity: { score: 14, mod: "+2" },
      Constitution: { score: 12, mod: "+1" },
      Intelligence: { score: 17, mod: "+3" },
      Wisdom: { score: 11, mod: "+0" },
      Charisma: { score: 16, mod: "+3" }
    },
    skills: [
      "Arcana",
      "Deception",
      "Insight",
      "Intimidation",
      "Performance",
      "Sleight of Hand"
    ],
    gear: [
      { title: "Obsidian Focus", detail: "Arcane focus, advantage to maintain concentration" },
      { title: "Half-mask of Whispers", detail: "Once per short rest, cast *disguise self*" },
      { title: "Shadowstep Boots", detail: "Teleport 15 ft as bonus action 2/day" }
    ],
    spells: [
      { title: "Binding Vines", detail: "Restrains target on failed Dex save" },
      { title: "Hollow Ward", detail: "Negates necrotic damage up to 12 points" },
      { title: "Curtain of Night", detail: "20-ft wall of darkness; blocks line of sight" }
    ]
  },
  {
    name: "Branik Forgeborn",
    class: "Battle Smith",
    level: 4,
    alignment: "Lawful Good",
    origin: "Dwarven veteran from the Emberhold",
    vitals: {
      HP: 51,
      AC: 18,
      Speed: "25 ft",
      Initiative: "+1",
      "Hit Dice": "4d10",
      "Passive Perception": 12
    },
    attributes: {
      Strength: { score: 16, mod: "+3" },
      Dexterity: { score: 13, mod: "+1" },
      Constitution: { score: 17, mod: "+3" },
      Intelligence: { score: 12, mod: "+1" },
      Wisdom: { score: 11, mod: "+0" },
      Charisma: { score: 8, mod: "-1" }
    },
    skills: [
      "Athletics",
      "History",
      "Smithing",
      "Medicine",
      "Animal Handling",
      "Intimidation"
    ],
    gear: [
      { title: "Runic Warhammer", detail: "+1, knocks target prone on crit" },
      { title: "Golem Armlet", detail: "Once per day, summon a small construct ally" },
      { title: "Shield of the Emberhold", detail: "+2 AC; resistance to fire" },
      { title: "Toolkit", detail: "Blacksmith tools, artisan's kit, battle plans" }
    ],
    spells: [
      { title: "Steel Ward", detail: "+2 AC for 10 minutes" },
      { title: "Repair", detail: "Restore 2d6 HP to constructs or objects" }
    ]
  }
];

const credentialProfiles = {
  aris: { password: "mist", characterIndex: 0, title: "Scout" },
  sable: { password: "veil", characterIndex: 1, title: "Binder" },
  branik: { password: "ember", characterIndex: 2, title: "Smith" }
};

const manualPdfUrl = "Manuals/Basic-Fantasy-RPG-Player-Handbook-r139.pdf";
const manualDownloadName = "Basic-Fantasy-RPG-Player-Handbook-r139.pdf";

const manualLibrary = {
  aris: {
    title: "Mistwood Operations Manual",
    description: "Guidance and rulings for Aris' scouting missions.",
    file: manualPdfUrl,
    downloadName: manualDownloadName
  },
  sable: {
    title: "Shadow Binder's Reference",
    description: "Notes, rituals, and table rules for Sable's campaigns.",
    file: manualPdfUrl,
    downloadName: manualDownloadName
  },
  branik: {
    title: "Emberhold Field Guide",
    description: "Equipment care and tactics for Branik's deployments.",
    file: manualPdfUrl,
    downloadName: manualDownloadName
  },
  default: {
    title: "Campaign Manual",
    description: "Reference guide for your active campaign.",
    file: manualPdfUrl,
    downloadName: manualDownloadName
  }
};

const STORAGE_KEY = "activeProfileKey";

const vitalsContainer = document.getElementById("vitals");
const attributesContainer = document.getElementById("attributes");
const skillsContainer = document.getElementById("skills");
const gearContainer = document.getElementById("gear");
const spellsContainer = document.getElementById("spells");

const nameEl = document.getElementById("char-name");
const classEl = document.getElementById("char-class");
const levelEl = document.getElementById("char-level");
const alignmentEl = document.getElementById("char-alignment");
const originEl = document.getElementById("char-origin");

const sheetSection = document.getElementById("sheet");
const pageHeader = document.getElementById("page-header");
const statusPill = document.getElementById("status-pill");
const navSubtitle = document.getElementById("nav-subtitle");
const signOutButton = document.getElementById("sign-out");
const randomizeButton = document.getElementById("randomize");
const manualHeader = document.getElementById("manual-header");
const manualTitle = document.getElementById("manual-title");
const manualDescription = document.getElementById("manual-description");
const manualHelper = document.getElementById("manual-helper");
const manualDownload = document.getElementById("manual-download");
const manualViewerSection = document.getElementById("manual-viewer-section");
const manualCanvas = document.getElementById("manual-canvas");
const manualPageNum = document.getElementById("manual-page-num");
const manualPageCount = document.getElementById("manual-page-count");
const manualPrev = document.getElementById("manual-prev");
const manualNext = document.getElementById("manual-next");
const manualZoomOut = document.getElementById("manual-zoom-out");
const manualZoomIn = document.getElementById("manual-zoom-in");
const manualZoomReset = document.getElementById("manual-zoom-reset");

const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");

let activeProfile = null;
let pdfDocument = null;
let pdfCurrentPage = 1;
let pdfScale = 1.1;
let pdfRendering = false;

function renderVital(title, value) {
  const div = document.createElement("div");
  div.className = "card stat-line";
  div.innerHTML = `<span>${title}</span><strong>${value}</strong>`;
  return div;
}

function renderAttribute(title, data) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<div class="stat-line"><span>${title}</span><strong>${data.score}</strong></div><p>Modifier: ${data.mod}</p>`;
  return div;
}

function renderGear(item) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h4>${item.title}</h4><p>${item.detail}</p>`;
  return div;
}

function renderSpell(spell) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h4>${spell.title}</h4><p>${spell.detail}</p>`;
  return div;
}

function clearContainers() {
  if (vitalsContainer) vitalsContainer.innerHTML = "";
  if (attributesContainer) attributesContainer.innerHTML = "";
  if (skillsContainer) skillsContainer.innerHTML = "";
  if (gearContainer) gearContainer.innerHTML = "";
  if (spellsContainer) spellsContainer.innerHTML = "";
}

function renderCharacter(character) {
  if (!character || !sheetSection) return;

  clearContainers();
  if (nameEl) nameEl.textContent = character.name;
  if (classEl) classEl.textContent = character.class;
  if (levelEl) levelEl.textContent = `Level ${character.level}`;
  if (alignmentEl) alignmentEl.textContent = character.alignment;
  if (originEl) originEl.textContent = character.origin;

  Object.entries(character.vitals).forEach(([key, value]) => {
    vitalsContainer?.appendChild(renderVital(key, value));
  });

  Object.entries(character.attributes).forEach(([key, value]) => {
    attributesContainer?.appendChild(renderAttribute(key, value));
  });

  character.skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsContainer?.appendChild(li);
  });

  character.gear.forEach((item) => {
    gearContainer?.appendChild(renderGear(item));
  });

  character.spells.forEach((spell) => {
    spellsContainer?.appendChild(renderSpell(spell));
  });
}

function authenticate(username, password) {
  const key = username.trim().toLowerCase();
  const entry = credentialProfiles[key];
  if (!entry) return null;
  return entry.password === password.trim() ? { ...entry, key } : null;
}

function setStoredProfile(key) {
  localStorage.setItem(STORAGE_KEY, key);
}

function clearStoredProfile() {
  localStorage.removeItem(STORAGE_KEY);
}

function loadStoredProfile() {
  const key = localStorage.getItem(STORAGE_KEY);
  if (!key) return null;
  const profile = credentialProfiles[key];
  return profile ? { ...profile, key } : null;
}

function setAuthenticatedState(profile, character) {
  activeProfile = profile;
  if (pageHeader) pageHeader.classList.remove("hidden");
  if (sheetSection) sheetSection.classList.remove("hidden");
  if (randomizeButton) randomizeButton.disabled = false;
  if (signOutButton) signOutButton.disabled = false;
  if (statusPill) statusPill.textContent = "Ready";
  if (navSubtitle && character) navSubtitle.textContent = `Logged in as ${character.name}`;
}

function resetSheetState() {
  activeProfile = null;
  if (pageHeader) pageHeader.classList.add("hidden");
  if (sheetSection) sheetSection.classList.add("hidden");
  if (randomizeButton) randomizeButton.disabled = true;
  if (signOutButton) signOutButton.disabled = true;
  if (statusPill) statusPill.textContent = "Locked";
  if (navSubtitle) navSubtitle.textContent = "Loading profile…";
  clearContainers();
}

function handleLoginPage() {
  if (!loginForm) return;

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const username = formData.get("username");
    const password = formData.get("password");

    const profile = authenticate(username, password);
    if (!profile) {
      if (loginError) loginError.textContent = "Invalid name or password. Try again.";
      return;
    }

    setStoredProfile(profile.key);
    if (loginError) loginError.textContent = "";
    window.location.href = "main.html";
  });
}

function redirectToLogin() {
  window.location.replace("index.html");
}

function resolveManual(profile) {
  if (!profile) return manualLibrary.default;
  return manualLibrary[profile.key] || manualLibrary.default;
}

function updatePageIndicators() {
  if (manualPageNum) manualPageNum.textContent = pdfCurrentPage.toString();
  if (manualPageCount) manualPageCount.textContent = pdfDocument?.numPages?.toString() || "—";
}

async function renderPdfPage(pageNumber) {
  if (!manualCanvas || !pdfDocument) return;
  pdfRendering = true;
  const context = manualCanvas.getContext("2d");
  if (!context) return;

  try {
    const page = await pdfDocument.getPage(pageNumber);
    const viewport = page.getViewport({ scale: pdfScale });
    manualCanvas.height = viewport.height;
    manualCanvas.width = viewport.width;

    await page.render({ canvasContext: context, viewport }).promise;
    pdfCurrentPage = pageNumber;
    if (manualHelper) manualHelper.textContent = `Showing page ${pdfCurrentPage} of ${pdfDocument.numPages}`;
    updatePageIndicators();
  } catch (error) {
    console.error(error);
    if (manualHelper) manualHelper.textContent = "Unable to display this page. Try downloading the PDF.";
  } finally {
    pdfRendering = false;
  }
}

function queueRender(pageNumber) {
  if (pdfRendering) return;
  if (!pdfDocument) return;
  renderPdfPage(pageNumber);
}

function attachManualControls() {
  manualPrev?.addEventListener("click", () => {
    if (!pdfDocument || pdfCurrentPage <= 1) return;
    queueRender(pdfCurrentPage - 1);
  });

  manualNext?.addEventListener("click", () => {
    if (!pdfDocument || pdfCurrentPage >= pdfDocument.numPages) return;
    queueRender(pdfCurrentPage + 1);
  });

  manualZoomIn?.addEventListener("click", () => {
    pdfScale = Math.min(pdfScale + 0.15, 3);
    queueRender(pdfCurrentPage);
  });

  manualZoomOut?.addEventListener("click", () => {
    pdfScale = Math.max(pdfScale - 0.15, 0.5);
    queueRender(pdfCurrentPage);
  });

  manualZoomReset?.addEventListener("click", () => {
    pdfScale = 1.1;
    queueRender(pdfCurrentPage);
  });
}

async function loadPdf(manual) {
  if (!manualCanvas || !window.pdfjsLib) return;
  pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.js";

  try {
    if (manualHelper) manualHelper.textContent = "Loading PDF viewer…";
    const loadingTask = pdfjsLib.getDocument(manual.file);
    pdfDocument = await loadingTask.promise;
    pdfCurrentPage = 1;
    updatePageIndicators();
    await renderPdfPage(pdfCurrentPage);
  } catch (error) {
    console.error(error);
    if (manualHelper) manualHelper.textContent = "Could not load the PDF inline. Please download it.";
  }
}

function setupManualViewer(manual) {
  attachManualControls();
  loadPdf(manual);
}

function handleManualPage() {
  if (!manualViewerSection) return;

  const storedProfile = loadStoredProfile();
  if (!storedProfile) {
    redirectToLogin();
    return;
  }

  activeProfile = storedProfile;
  const character = characters[storedProfile.characterIndex];
  const manual = resolveManual(storedProfile);

  if (manualTitle) manualTitle.textContent = manual.title;
  if (manualDescription) manualDescription.textContent = manual.description;
  if (manualHelper && character)
    manualHelper.textContent = `Showing manual for ${character.name} (${storedProfile.title})`;
  if (manualDownload) {
    manualDownload.href = manual.file;
    manualDownload.download = manual.downloadName || "campaign-manual.pdf";
  }

  setupManualViewer(manual);

  if (navSubtitle && character) navSubtitle.textContent = `Manual for ${character.name}`;
  if (statusPill) statusPill.textContent = "Ready";
  if (manualHeader) manualHeader.classList.remove("hidden");
  if (signOutButton) signOutButton.disabled = false;

  signOutButton?.addEventListener("click", () => {
    clearStoredProfile();
    resetSheetState();
    redirectToLogin();
  });
}

function handleSheetPage() {
  if (!sheetSection) return;

  const storedProfile = loadStoredProfile();
  if (!storedProfile) {
    redirectToLogin();
    return;
  }

  const character = characters[storedProfile.characterIndex];
  renderCharacter(character);
  setAuthenticatedState(storedProfile, character);

  signOutButton?.addEventListener("click", () => {
    clearStoredProfile();
    resetSheetState();
    redirectToLogin();
  });

  randomizeButton?.addEventListener("click", () => {
    if (!activeProfile) return;
    const pick = activeProfile.characterIndex;
    renderCharacter(characters[pick]);
  });
}

handleLoginPage();
handleSheetPage();
handleManualPage();
