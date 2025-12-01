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
  vitalsContainer.innerHTML = "";
  attributesContainer.innerHTML = "";
  skillsContainer.innerHTML = "";
  gearContainer.innerHTML = "";
  spellsContainer.innerHTML = "";
}

function renderCharacter(character) {
  clearContainers();
  nameEl.textContent = character.name;
  classEl.textContent = character.class;
  levelEl.textContent = `Level ${character.level}`;
  alignmentEl.textContent = character.alignment;
  originEl.textContent = character.origin;

  Object.entries(character.vitals).forEach(([key, value]) => {
    vitalsContainer.appendChild(renderVital(key, value));
  });

  Object.entries(character.attributes).forEach(([key, value]) => {
    attributesContainer.appendChild(renderAttribute(key, value));
  });

  character.skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsContainer.appendChild(li);
  });

  character.gear.forEach((item) => {
    gearContainer.appendChild(renderGear(item));
  });

  character.spells.forEach((spell) => {
    spellsContainer.appendChild(renderSpell(spell));
  });
}

const randomizeButton = document.getElementById("randomize");
randomizeButton.addEventListener("click", () => {
  const pick = Math.floor(Math.random() * characters.length);
  renderCharacter(characters[pick]);
});

renderCharacter(characters[0]);
