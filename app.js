const WA_PHONE = "77477919765";
const BOX_PRICE = 12500;
const MEAT_TOTAL = 5;

/* ---------------- i18n ---------------- */
const copy = {
  kk: {
    tag: "Дайын мангал-бокс — таңдап, пісір, же",
    orderBtn: "Боксыңды құр",
    rulesTitle: "Дайындау нұсқаулығы",
    rulesHint: "7 қадам — ретімен орындаңыз",
    guideBadge: "Нұсқаулық",
    rulesCta: "Дайындау құралы",
    builderKicker: "Бокс құрастыру",
    builderTitle: "Қадам сайын таңдаңыз",
    foodTitle: "Тағамды таңдаңыз",
    meatMixTitle: "Ет миксін жасаңыз",
    meatMixHint: "Барлығы 5 дана таңдаңыз — араластыруға болады: мыс. 2 үйрек, 2 қой, 1 сиыр",
    drinkTitle: "Сусынды таңдаңыз",
    drinkFlavorTitle: "Дәмін таңдаңыз",
    toolsTitle: "Сіздің боксыңыз",
    toolsHint: "Барлығы қоса беріледі",
    addToCart: "Себетке қосу",
    addedToast: "Себетке қосылды",
    comingSoon: "Жақында",
    summaryTitle: "Сіздің себетіңіз",
    continueBuilding: "Құруды жалғастыру",
    sendOrder: "WhatsApp-қа жіберу",
    cartAria: "Себет",
    boxLabel: "Бокс",
    qtyLabel: "Саны",
    removeBoxTitle: "Боксты өшіру",
    removeBoxText: "Осы боксты корзинадан өшіресіз бе?",
    removeConfirm: "Өшіру",
    removeCancel: "Болдырмау",
    summaryTools: "приборлар",
    cartEmpty: "Себет бос",
    cartEmptyHint: "Бокс құрудан бастаңыз",
    waPrice: "Бағасы",
    foods: { shashlik: "Кәуап", steak: "Стейк", burger: "Стейк бургер" },
    meat: { beef: "Сиыр еті", lamb: "Қой еті", duck: "Үйрек", chicken: "Тауық", veggies: "Көкөніс" },
    drinks: { alasu: "Ala Su", cola: "Coca-Cola", fanta: "Fanta", sprite: "Sprite", fuse: "Fuse Tea", maxi: "Maxi Tea", ayran: "Айран" },
    drinkFlavors: {
      lemon: "Лимон", mint: "Жалбыз", cherry: "Шие", apple: "Алма", classic: "Classic", zero: "Zero Sugar",
      peach: "Шабдалы", mango_chamomile: "Манго-Ромашка", forest_berry: "Орман жидектері", passion: "Маракуйя",
      berry: "Жидектер", green: "Жасыл шай", mango: "Манго",
    },
    toolNames: {
      gloves: "Қолғап", napkin: "Салфетка", toothpick: "Тісшұқығыш", plate: "Табақ", cup: "Стақан",
      wetwipe: "Дымқыл салфетка", fan: "Желпуіш", fork: "Шанышқы", lighter: "Оттық-горелка", fluid: "Тұтату сұйықтығы",
    },
    steps: [
      "Қорапты ашып, торды мангалдың үстіне орналастырыңыз.",
      "Мангал ішіндегі көмірлерді тұтатыңыз.",
      "Көмірлер қызуы үшін 2–3 минут күтіңіз.",
      "Етті тордың үстіне қойыңыз.",
      "Етті көмірдің ыстығымен пісіріңіз.",
      "Әр 2–3 минут сайын аударып тұрыңыз.",
      "Еттің түріне байланысты 15–25 минутта дайын болады.",
    ],
    warnTitle: "Назар аударыңыз",
    warnings: [
      "Мангалды қораптан шығармаңыз.",
      "Тек ашық ауада қолданыңыз.",
      "Ыстық көмірге қол тигізбеңіз.",
      "Қолданғаннан кейін көмірлердің толық суығанын күтіңіз.",
    ],
    waPrefix: "Сәлеметсіз бе!",
    waCart: "Себет:",
    waTime: "Заказ уақыты",
    waFooter: "Тапсырыс бергім келеді!",
  },
  ru: {
    tag: "Готовый мангал-бокс — выбери, приготовь, ешь",
    orderBtn: "Собери свой бокс",
    rulesTitle: "Руководство по приготовлению",
    rulesHint: "7 шагов — по порядку",
    guideBadge: "Руководство",
    rulesCta: "Как готовить бокс",
    builderKicker: "Сборка бокса",
    builderTitle: "Выбирайте шаг за шагом",
    foodTitle: "Выберите блюдо",
    meatMixTitle: "Составьте микс мяса",
    meatMixHint: "Выберите всего 5 шт — можно смешивать: например 2 утки, 2 баранины, 1 говядина",
    drinkTitle: "Выберите напиток",
    drinkFlavorTitle: "Выберите вкус",
    toolsTitle: "Ваш бокс",
    toolsHint: "Всё уже включено",
    addToCart: "Добавить в корзину",
    addedToast: "Добавлено в корзину",
    comingSoon: "Скоро",
    summaryTitle: "Ваша корзина",
    continueBuilding: "Продолжить сборку",
    sendOrder: "Отправить в WhatsApp",
    cartAria: "Корзина",
    boxLabel: "Бокс",
    qtyLabel: "Кол-во",
    removeBoxTitle: "Удалить бокс",
    removeBoxText: "Удалить этот бокс из корзины?",
    removeConfirm: "Удалить",
    removeCancel: "Отмена",
    summaryTools: "приборы",
    cartEmpty: "Корзина пуста",
    cartEmptyHint: "Начните со сборки бокса",
    waPrice: "Цена",
    foods: { shashlik: "Шашлык", steak: "Стейк", burger: "Стейк бургер" },
    meat: { beef: "Говядина", lamb: "Баранина", duck: "Утка", chicken: "Курица", veggies: "Овощи" },
    drinks: { alasu: "Ala Su", cola: "Coca-Cola", fanta: "Fanta", sprite: "Sprite", fuse: "Fuse Tea", maxi: "Maxi Tea", ayran: "Айран" },
    drinkFlavors: {
      lemon: "Лимон", mint: "Мята", cherry: "Вишня", apple: "Яблоко", classic: "Classic", zero: "Zero Sugar",
      peach: "Персик", mango_chamomile: "Манго-Ромашка", forest_berry: "Лесные ягоды", passion: "Маракуйя",
      berry: "Ягоды", green: "Зелёный чай", mango: "Манго",
    },
    toolNames: {
      gloves: "Перчатка", napkin: "Салфетка", toothpick: "Зубочистка", plate: "Тарелка", cup: "Стакан",
      wetwipe: "Влажная салфетка", fan: "Веер", fork: "Вилка", lighter: "Зажигалка-горелка", fluid: "Жидкость для розжига",
    },
    steps: [
      "Откройте коробку и установите решётку на мангал.",
      "Разожгите угли внутри мангала.",
      "Подождите 2–3 минуты, чтобы угли разогрелись.",
      "Выложите мясо на решётку.",
      "Жарьте мясо жаром углей.",
      "Переворачивайте каждые 2–3 минуты.",
      "В зависимости от вида мяса будет готово за 15–25 минут.",
    ],
    warnTitle: "Внимание",
    warnings: [
      "Не вынимайте мангал из коробки.",
      "Используйте только на открытом воздухе.",
      "Не прикасайтесь к горячим углям.",
      "После использования дождитесь полного остывания углей.",
    ],
    waPrefix: "Здравствуйте!",
    waCart: "Корзина:",
    waTime: "Время заказа",
    waFooter: "Хочу оформить заказ!",
  },
  en: {
    tag: "Ready mangal box — pick, grill, eat",
    orderBtn: "Build your box",
    rulesTitle: "Cooking guide",
    rulesHint: "7 steps — follow in order",
    guideBadge: "Guide",
    rulesCta: "How to prep your box",
    builderKicker: "Build a box",
    builderTitle: "Pick step by step",
    foodTitle: "Choose your food",
    meatMixTitle: "Build your meat mix",
    meatMixHint: "Choose 5 pieces total — mix freely: e.g. 2 duck, 2 lamb, 1 beef",
    drinkTitle: "Choose a drink",
    drinkFlavorTitle: "Choose a flavor",
    toolsTitle: "Your box",
    toolsHint: "Everything included",
    addToCart: "Add to cart",
    addedToast: "Added to cart",
    comingSoon: "Soon",
    summaryTitle: "Your cart",
    continueBuilding: "Keep building",
    sendOrder: "Send to WhatsApp",
    cartAria: "Cart",
    boxLabel: "Box",
    qtyLabel: "Qty",
    removeBoxTitle: "Remove box",
    removeBoxText: "Remove this box from your cart?",
    removeConfirm: "Remove",
    removeCancel: "Cancel",
    summaryTools: "tools",
    cartEmpty: "Cart is empty",
    cartEmptyHint: "Start by building a box",
    waPrice: "Price",
    foods: { shashlik: "Shashlik", steak: "Steak", burger: "Steak burger" },
    meat: { beef: "Beef", lamb: "Lamb", duck: "Duck", chicken: "Chicken", veggies: "Veggies" },
    drinks: { alasu: "Ala Su", cola: "Coca-Cola", fanta: "Fanta", sprite: "Sprite", fuse: "Fuse Tea", maxi: "Maxi Tea", ayran: "Ayran" },
    drinkFlavors: {
      lemon: "Lemon", mint: "Mint", cherry: "Cherry", apple: "Apple", classic: "Classic", zero: "Zero Sugar",
      peach: "Peach", mango_chamomile: "Mango-Chamomile", forest_berry: "Forest berries", passion: "Passion fruit",
      berry: "Berries", green: "Green tea", mango: "Mango",
    },
    toolNames: {
      gloves: "Gloves", napkin: "Napkins", toothpick: "Toothpicks", plate: "Plates", cup: "Cups",
      wetwipe: "Wet wipes", fan: "Fan", fork: "Forks", lighter: "Torch lighter", fluid: "Fire starter fluid",
    },
    steps: [
      "Open the box and place the grate on the mangal.",
      "Light the charcoal inside the mangal.",
      "Wait 2–3 minutes for the coals to heat up.",
      "Put the meat on the grate.",
      "Cook the meat over the charcoal heat.",
      "Flip every 2–3 minutes.",
      "Depending on the meat, it will be ready in 15–25 minutes.",
    ],
    warnTitle: "Please note",
    warnings: [
      "Do not remove the mangal from the box.",
      "Use only outdoors.",
      "Do not touch hot charcoal.",
      "After use, wait until the coals fully cool down.",
    ],
    waPrefix: "Hello!",
    waCart: "Cart:",
    waTime: "Order time",
    waFooter: "I would like to place an order!",
  },
};

/* ---------------- catalog ---------------- */
const CATALOG = {
  food: [
    { id: "shashlik", img: "img/food-shashlik.jpg", locked: false },
    { id: "steak", img: "img/food-steak.jpg", locked: true },
    { id: "burger", img: "img/food-burger.png", locked: true },
  ],
  meat: [
    { id: "beef", img: "img/var-beef.jpg" },
    { id: "lamb", img: "img/var-lamb.jpg" },
    { id: "duck", img: "img/var-duck.jpg" },
    { id: "chicken", img: "img/var-chicken.jpg" },
    { id: "veggies", img: "img/var-veggies.jpg" },
  ],
  drink: [
    { id: "alasu", img: "img/drink-alasu.png" },
    { id: "cola", img: "img/drink-cola.png" },
    { id: "fanta", img: "img/drink-fanta.png" },
    { id: "sprite", img: "img/drink-sprite.png" },
    { id: "fuse", img: "img/drink-fuse.png" },
    { id: "maxi", img: "img/drink-maxi.png" },
    { id: "ayran", img: "img/drink-ayran.png" },
  ],
};

const DRINK_FLAVORS = {
  alasu: ["lemon", "mint", "cherry", "apple"],
  cola: ["classic", "zero"],
  fanta: ["classic"],
  sprite: ["classic", "zero"],
  fuse: ["peach", "lemon", "mango_chamomile", "forest_berry", "passion"],
  maxi: ["peach", "lemon", "berry", "green", "mango"],
  ayran: ["classic"],
};

const TOOLS = [
  { id: "gloves", qty: 4, img: "img/tool-gloves.jpg" },
  { id: "napkin", qty: 2, img: "img/tool-napkin.jpg" },
  { id: "toothpick", qty: 2, img: "img/tool-toothpick.jpg" },
  { id: "plate", qty: 2, img: "img/tool-plate.jpg" },
  { id: "cup", qty: 2, img: "img/tool-cup.jpg" },
  { id: "wetwipe", qty: 2, img: "img/tool-wetwipe.png" },
  { id: "fan", qty: 1, img: "img/tool-fan.webp" },
  { id: "fork", qty: 2, img: "img/tool-fork.jpg" },
  { id: "lighter", qty: 1, img: "img/tool-lighter.jpeg" },
  { id: "fluid", qty: 1, img: "img/tool-fluid.jpg" },
];

/* ---------------- state ---------------- */
const state = {
  lang: "kk",
  meat: { beef: 0, lamb: 0, duck: 0, chicken: 0, veggies: 0 },
  drink: "cola",
  drinkFlavor: "classic",
  boxes: [],
  pendingRemove: null,
};

const $ = (id) => document.getElementById(id);
const d = () => copy[state.lang];

const els = {
  seg: $("lang-seg"),
  cartBtn: $("cart-btn"),
  cartBadge: $("cart-badge"),
  rulesBtn: $("rules-btn"),
  foodGrid: $("food-grid"),
  meatGrid: $("meat-grid"),
  meatTotal: $("meat-total"),
  drinkGrid: $("drink-grid"),
  flavorGrid: $("flavor-grid"),
  toolsList: $("tools-list"),
  rulesSteps: $("rules-steps"),
  rulesWarns: $("rules-warns"),
  summaryBar: $("summary-bar"),
  summaryPrice: $("summary-price"),
  summaryText: $("summary-text"),
  addBtn: $("add-to-cart-btn"),
  drawer: $("cart-drawer"),
  drawerBackdrop: $("cart-backdrop"),
  drawerClose: $("cart-close"),
  continueBtn: $("continue-btn"),
  boxesList: $("boxes-list"),
  wa: $("whatsapp-order"),
  toast: $("toast"),
};

/* ---------------- helpers ---------------- */
function formatPrice(amount) {
  return `${String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} 〒`;
}

function meatTotalCount() {
  return Object.values(state.meat).reduce((a, b) => a + b, 0);
}

function meatSummaryLabel() {
  const t = d();
  return Object.entries(state.meat)
    .filter(([, q]) => q > 0)
    .map(([id, q]) => `${t.meat[id]} ×${q}`)
    .join(", ");
}

function drinkFullLabel(box = state) {
  const t = d();
  const brand = t.drinks[box.drink] || box.drink;
  const flavorId = box.drinkFlavor || "classic";
  const flavor = t.drinkFlavors[flavorId];
  return flavor ? `${brand} ${flavor}` : brand;
}

function checkBadge() {
  return `<span class="opt-check"><svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4.5 4 7.5 10 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;
}

function toolLabel(tool) {
  const name = d().toolNames[tool.id] || tool.id;
  return tool.qty > 1 ? `${name} ×${tool.qty}` : name;
}

/* ---------------- render: food ---------------- */
function renderFoodGrid() {
  const t = d();
  els.foodGrid.innerHTML = CATALOG.food
    .map((item) => {
      const active = item.id === "shashlik";
      return `
        <button type="button" class="opt-card${active ? " is-active" : ""}" data-id="${item.id}" ${item.locked ? "disabled" : ""}>
          ${item.locked ? `<span class="opt-soon">${t.comingSoon}</span>` : ""}
          ${active ? checkBadge() : ""}
          <div class="opt-thumb"><img src="${item.img}" alt="" /></div>
          <span class="opt-name">${t.foods[item.id]}</span>
        </button>`;
    })
    .join("");
}

/* ---------------- render: meat mix ---------------- */
function renderMeatGrid() {
  const t = d();
  els.meatGrid.innerHTML = CATALOG.meat
    .map((item) => {
      const qty = state.meat[item.id];
      return `
        <div class="meat-card${qty > 0 ? " has-qty" : ""}" data-id="${item.id}">
          <div class="meat-thumb"><img src="${item.img}" alt="" /></div>
          <span class="meat-name">${t.meat[item.id]}</span>
          <div class="stepper">
            <button type="button" class="step-btn" data-dir="-1" aria-label="-" ${qty <= 0 ? "disabled" : ""}>−</button>
            <span class="step-val">${qty}</span>
            <button type="button" class="step-btn" data-dir="1" aria-label="+" ${meatTotalCount() >= MEAT_TOTAL ? "disabled" : ""}>+</button>
          </div>
        </div>`;
    })
    .join("");
  updateMeatTotalUI();
}

function updateMeatTotalUI() {
  const total = meatTotalCount();
  els.meatTotal.innerHTML = `${total}<i>/${MEAT_TOTAL}</i>`;
  els.meatTotal.classList.toggle("is-complete", total === MEAT_TOTAL);
}

function changeMeat(id, dir) {
  const total = meatTotalCount();
  if (dir > 0) {
    if (total >= MEAT_TOTAL) return;
    state.meat[id] += 1;
  } else {
    if (state.meat[id] <= 0) return;
    state.meat[id] -= 1;
  }
  renderMeatGrid();
  updateSummaryBar();
}

els.meatGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".step-btn");
  if (!btn) return;
  const card = btn.closest(".meat-card");
  changeMeat(card.dataset.id, Number(btn.dataset.dir));
});

/* ---------------- render: drink ---------------- */
function renderDrinkGrid() {
  const t = d();
  els.drinkGrid.innerHTML = CATALOG.drink
    .map(
      (item) => `
      <button type="button" class="opt-card${item.id === state.drink ? " is-active" : ""}" data-id="${item.id}">
        ${item.id === state.drink ? checkBadge() : ""}
        <div class="opt-thumb"><img src="${item.img}" alt="" /></div>
        <span class="opt-name">${t.drinks[item.id]}</span>
      </button>`
    )
    .join("");
}

els.drinkGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".opt-card");
  if (!btn) return;
  state.drink = btn.dataset.id;
  const flavors = DRINK_FLAVORS[state.drink] || ["classic"];
  if (!flavors.includes(state.drinkFlavor)) state.drinkFlavor = flavors[0];
  renderDrinkGrid();
  renderFlavorGrid();
  updateSummaryBar();
});

/* ---------------- render: flavor ---------------- */
function renderFlavorGrid() {
  const t = d();
  const flavors = DRINK_FLAVORS[state.drink] || ["classic"];
  els.flavorGrid.innerHTML = flavors
    .map(
      (id) => `
      <button type="button" class="chip${id === state.drinkFlavor ? " is-active" : ""}" data-id="${id}">
        ${t.drinkFlavors[id] || id}
      </button>`
    )
    .join("");
}

els.flavorGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  state.drinkFlavor = btn.dataset.id;
  renderFlavorGrid();
  updateSummaryBar();
});

/* ---------------- render: tools ---------------- */
function renderToolsList() {
  els.toolsList.innerHTML = TOOLS.map(
    (tool) => `<li><img src="${tool.img}" alt="" />${toolLabel(tool)}</li>`
  ).join("");
}

/* ---------------- summary bar / add to cart ---------------- */
function updateSummaryBar() {
  const t = d();
  const total = meatTotalCount();
  els.summaryPrice.textContent = formatPrice(BOX_PRICE);
  const meatText = total ? meatSummaryLabel() : t.meatMixHint;
  els.summaryText.textContent = `${meatText} · ${drinkFullLabel()}`;
  els.addBtn.disabled = total !== MEAT_TOTAL;
}

function showToast(msg) {
  els.toast.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="currentColor" opacity=".18"/><path d="M7 12.5 10.3 16 17 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>${msg}</span>`;
  els.toast.classList.add("is-on");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => els.toast.classList.remove("is-on"), 1800);
}

function findSameBoxIndex(box) {
  return state.boxes.findIndex(
    (b) =>
      JSON.stringify(b.meat) === JSON.stringify(box.meat) &&
      b.drink === box.drink &&
      b.drinkFlavor === box.drinkFlavor
  );
}

function addToCart() {
  if (meatTotalCount() !== MEAT_TOTAL) return;
  const snap = { meat: { ...state.meat }, drink: state.drink, drinkFlavor: state.drinkFlavor, qty: 1 };
  const idx = findSameBoxIndex(snap);
  if (idx >= 0) state.boxes[idx].qty += 1;
  else state.boxes.push(snap);

  state.meat = { beef: 0, lamb: 0, duck: 0, chicken: 0, veggies: 0 };
  renderMeatGrid();
  updateSummaryBar();
  updateCartBadge();
  showToast(d().addedToast);
  $("step-food").scrollIntoView({ behavior: "smooth", block: "start" });
}

els.addBtn.addEventListener("click", addToCart);

/* ---------------- cart drawer ---------------- */
function updateCartBadge() {
  const n = state.boxes.reduce((s, b) => s + b.qty, 0);
  els.cartBadge.textContent = String(n);
  els.cartBadge.classList.toggle("is-hidden", n < 1);
}

function cartTotal() {
  return state.boxes.reduce((s, b) => s + b.qty, 0) * BOX_PRICE;
}

function formatOrderTime(date = new Date()) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  const hh = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  return `${dd}.${mm}.${yyyy}, ${hh}:${min}`;
}

function waFoodPart(box) {
  const t = d();
  const mix = Object.entries(box.meat)
    .filter(([, q]) => q > 0)
    .map(([id, q]) => `${t.meat[id]} ×${q}`)
    .join(", ");
  return `${t.foods.shashlik} (${mix})`;
}

function buildWhatsAppText() {
  const t = d();
  const lines = [t.waPrefix, "", `*${t.waCart}*`, ""];
  state.boxes.forEach((box, i) => {
    lines.push(`${t.boxLabel} ×${box.qty} - ${waFoodPart(box)}, ${drinkFullLabel(box)}, ${t.summaryTools}`);
    if (i < state.boxes.length - 1) lines.push("");
  });
  lines.push("");
  lines.push(`${t.waPrice}: ${formatPrice(cartTotal())}`);
  lines.push(`${t.waTime}: ${formatOrderTime()}`);
  lines.push("");
  lines.push(t.waFooter);
  return lines.join("\n");
}

function syncWhatsAppLink() {
  if (!state.boxes.length) {
    els.wa.setAttribute("href", `https://wa.me/${WA_PHONE}`);
    return;
  }
  els.wa.setAttribute("href", `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(buildWhatsAppText())}`);
}

function boxSubtitle(box) {
  return `${meatMixSummary(box)} · ${drinkFullLabel(box)}`;
}

function meatMixSummary(box) {
  const t = d();
  return Object.entries(box.meat)
    .filter(([, q]) => q > 0)
    .map(([id, q]) => `${t.meat[id]} ×${q}`)
    .join(", ");
}

function renderCart() {
  const t = d();
  const empty = !state.boxes.length;
  const foot = document.querySelector(".drawer-foot");
  foot?.classList.toggle("is-empty", empty);

  if (empty) {
    els.boxesList.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon" aria-hidden="true">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <path d="M6.5 8h11l-.7 10.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6.5 8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
            <path d="M9 8V6.8A3 3 0 0 1 12 3.8v0a3 3 0 0 1 3 3V8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          </svg>
        </div>
        <strong>${t.cartEmpty}</strong>
        <p>${t.cartEmptyHint}</p>
      </div>`;
  } else {
    els.boxesList.innerHTML =
      state.boxes
        .map(
          (box, i) => `
        <article class="box-card" data-box="${i}">
          <div class="box-card-top">
            <div class="box-thumbs" aria-hidden="true">
              <img class="box-thumb is-food" src="img/food-shashlik.jpg" alt="" />
              <img class="box-thumb is-drink" src="${CATALOG.drink.find((x) => x.id === box.drink)?.img || ""}" alt="" />
            </div>
            <div class="box-card-info">
              <strong>${t.boxLabel} ${i + 1}</strong>
              <span>${boxSubtitle(box)}</span>
              <em class="box-price">${formatPrice(BOX_PRICE * box.qty)}</em>
            </div>
          </div>
          <div class="qty-row">
            <span class="qty-label">${t.qtyLabel}</span>
            <div class="qty-stepper">
              <button type="button" class="qty-btn" data-qty="-1" aria-label="-">−</button>
              <span class="qty-value">×${box.qty}</span>
              <button type="button" class="qty-btn" data-qty="1" aria-label="+">+</button>
            </div>
          </div>
        </article>`
        )
        .join("") +
      `<div class="cart-total"><span>${t.waPrice}</span><strong>${formatPrice(cartTotal())}</strong></div>`;
  }

  syncWhatsAppLink();
  updateCartBadge();
}

function openCart() {
  els.drawer.hidden = false;
  renderCart();
}
function closeCart() {
  els.drawer.hidden = true;
  closeConfirm();
}

els.cartBtn.addEventListener("click", openCart);
els.drawerBackdrop.addEventListener("click", closeCart);
els.drawerClose.addEventListener("click", closeCart);
els.continueBtn.addEventListener("click", closeCart);

function changeBoxQty(index, delta) {
  const box = state.boxes[index];
  if (!box) return;
  if (delta < 0 && box.qty <= 1) {
    askRemoveBox(index);
    return;
  }
  box.qty += delta;
  renderCart();
}

els.boxesList.addEventListener("click", (e) => {
  const btn = e.target.closest(".qty-btn");
  if (!btn) return;
  const card = btn.closest(".box-card");
  changeBoxQty(Number(card.dataset.box), Number(btn.dataset.qty));
});

/* ---------------- confirm modal ---------------- */
function askRemoveBox(index) {
  state.pendingRemove = index;
  const modal = $("confirm-modal");
  $("confirm-title").textContent = d().removeBoxTitle;
  $("confirm-text").textContent = d().removeBoxText;
  $("confirm-ok").textContent = d().removeConfirm;
  $("confirm-cancel").textContent = d().removeCancel;
  modal.hidden = false;
}
function closeConfirm() {
  state.pendingRemove = null;
  $("confirm-modal").hidden = true;
}
function removeBoxAt(index) {
  if (index < 0 || index >= state.boxes.length) return;
  state.boxes.splice(index, 1);
  renderCart();
}

$("confirm-ok").addEventListener("click", () => {
  const index = state.pendingRemove;
  closeConfirm();
  if (index != null) removeBoxAt(index);
});
$("confirm-cancel").addEventListener("click", closeConfirm);
$("confirm-backdrop").addEventListener("click", closeConfirm);

/* ---------------- rules ---------------- */
function fillRules() {
  const t = d();
  els.rulesSteps.innerHTML = t.steps.map((x, i) => `<li><b>${i + 1}</b><span>${x}</span></li>`).join("");
  els.rulesWarns.innerHTML = t.warnings.map((x) => `<li>${x}</li>`).join("");
}

els.rulesBtn.addEventListener("click", () => {
  $("rules").scrollIntoView({ behavior: "smooth", block: "start" });
});

/* ---------------- i18n apply ---------------- */
function applyI18n() {
  document.documentElement.lang = state.lang;
  els.seg.dataset.active = state.lang;
  els.seg.querySelectorAll(".seg-btn").forEach((b) => b.classList.toggle("is-active", b.dataset.lang === state.lang));
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (Object.prototype.hasOwnProperty.call(d(), key)) node.textContent = d()[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const key = node.getAttribute("data-i18n-aria");
    if (Object.prototype.hasOwnProperty.call(d(), key)) node.setAttribute("aria-label", d()[key]);
  });
  renderFoodGrid();
  renderMeatGrid();
  renderDrinkGrid();
  renderFlavorGrid();
  renderToolsList();
  fillRules();
  updateSummaryBar();
  if (!els.drawer.hidden) renderCart();
}

els.seg.querySelectorAll(".seg-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.lang = btn.getAttribute("data-lang");
    applyI18n();
  });
});

/* ---------------- init ---------------- */
applyI18n();