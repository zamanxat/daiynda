const WA_PHONE = "77477919765";
const BOX_PRICE = 12500;
const SHASHLIK_QTY = 5;

const copy = {
  kk: {
    tag: "Дайын мангал-бокс — таңдап, пісір, же",
    orderBtn: "Боксыңды құр",
    aboutTitle: "Қораптағылар",
    rulesTitle: "Дайындау нұсқаулығы",
    rulesHint: "7 қадам — ретімен орындаңыз",
    importantBadge: "Маңызды",
    guideBadge: "Нұсқаулық",
    rulesCta: "Дайындау құралы",
    nextBtn: "Келесі",
    seeBox: "Аяқтау",
    sendOrder: "WhatsApp-қа жіберу",
    homeBtn: "Басты бетке",
    swipeHint: "Солға немесе оңға сырғытыңыз",
    flavorHint: "Дәмін таңдаңыз",
    comingSoon: "Жақында қосылады",
    step1: "Тағам",
    step2: "Түрі",
    step3: "Сусын",
    step4: "Қорытынды",
    foodTitle: "Тағамды таңдаңыз",
    shashlikTitle: "Кәуап түрін таңдаңыз",
    drinkTitle: "Сусынды таңдаңыз",
    toolsTitle: "Сіздің боксыңыз",
    toolsHint: "Барлығы дайын",
    summaryTitle: "Сіздің себетіңіз",
    doneKicker: "Себет",
    addBox: "Тағы бір бокс құру",
    createBox: "Бокс құру",
    cartEmpty: "Себет бос",
    cartEmptyHint: "Жаңа бокс құрып бастаңыз",
    cartAria: "Себет",
    boxLabel: "Бокс",
    qtyLabel: "Саны",
    removeBoxTitle: "Боксты өшіру",
    removeBoxText: "Осы боксты корзинадан өшіресіз бе?",
    removeConfirm: "Өшіру",
    removeCancel: "Болдырмау",
    selected: "Таңдалды",
    summaryFood: "Тағам",
    summaryVariant: "Түрі",
    summaryDrink: "Сусын",
    summaryTools: "приборлар",
    included: "қоса беріледі",
    foods: { shashlik: "Кәуап", steak: "Стейк", burger: "Стейк бургер" },
    shashlik: {
      beef: "Сиыр еті",
      lamb: "Қой еті",
      duck: "Үйрек",
      chicken: "Тауық",
      veggies: "Көкөніс",
    },
    drinks: {
      alasu: "Ala Su",
      cola: "Coca-Cola",
      fanta: "Fanta",
      sprite: "Sprite",
      fuse: "Fuse Tea",
      maxi: "Maxi Tea",
      ayran: "Айран",
    },
    drinkFlavors: {
      lemon: "Лимон",
      mint: "Жалбыз",
      cherry: "Шие",
      apple: "Алма",
      classic: "Classic",
      zero: "Zero Sugar",
      peach: "Шабдалы",
      mango_chamomile: "Манго-Ромашка",
      forest_berry: "Орман жидектері",
      passion: "Маракуйя",
      berry: "Жидектер",
      green: "Жасыл шай",
      mango: "Манго",
    },
    drinkFlavorTitle: "Дәмін таңдаңыз",
    stepFlavor: "Дәм",
    toolNames: {
      gloves: "Қолғап",
      napkin: "Салфетка",
      toothpick: "Тісшұқығыш",
      plate: "Табақ",
      cup: "Стақан",
      wetwipe: "Дымқыл салфетка",
      fan: "Желпуіш",
      fork: "Шанышқы",
      lighter: "Оттық-горелка",
      fluid: "Тұтату сұйықтығы",
    },
    tools: [
      "Қолғап ×4",
      "Салфетка ×2",
      "Тісшұқығыш ×2",
      "Табақ ×2",
      "Стақан ×2",
      "Дымқыл салфетка ×2",
      "Желпуіш",
      "Шанышқы ×2",
      "Оттық-горелка",
      "Тұтату сұйықтығы",
    ],
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
    waPrice: "Бағасы",
    waTime: "Заказ уақыты",
    waFooter: "Тапсырыс бергім келеді!",
    boxPriceLabel: "12 500 〒",
  },
  ru: {
    tag: "Готовый мангал-бокс — выбери, приготовь, ешь",
    orderBtn: "Собери свой бокс",
    aboutTitle: "Что в боксе",
    rulesTitle: "Руководство по приготовлению",
    rulesHint: "7 шагов — по порядку",
    importantBadge: "Важно",
    guideBadge: "Руководство",
    rulesCta: "Как готовить бокс",
    nextBtn: "Далее",
    seeBox: "Завершить",
    sendOrder: "Отправить в WhatsApp",
    homeBtn: "На главную",
    swipeHint: "Листайте влево или вправо",
    flavorHint: "Выберите вкус",
    comingSoon: "Скоро добавим",
    step1: "Блюдо",
    step2: "Вид",
    step3: "Напиток",
    step4: "Итого",
    foodTitle: "Выберите блюдо",
    shashlikTitle: "Выберите вид шашлыка",
    drinkTitle: "Выберите напиток",
    toolsTitle: "Ваш бокс",
    toolsHint: "Всё готово",
    summaryTitle: "Ваша корзина",
    doneKicker: "Корзина",
    addBox: "Собрать ещё один бокс",
    createBox: "Собрать бокс",
    cartEmpty: "Корзина пуста",
    cartEmptyHint: "Соберите новый бокс",
    cartAria: "Корзина",
    boxLabel: "Бокс",
    qtyLabel: "Кол-во",
    removeBoxTitle: "Удалить бокс",
    removeBoxText: "Удалить этот бокс из корзины?",
    removeConfirm: "Удалить",
    removeCancel: "Отмена",
    selected: "Выбрано",
    summaryFood: "Блюдо",
    summaryVariant: "Вид",
    summaryDrink: "Напиток",
    summaryTools: "приборы",
    included: "в комплекте",
    foods: { shashlik: "Шашлык", steak: "Стейк", burger: "Стейк бургер" },
    shashlik: {
      beef: "Говядина",
      lamb: "Баранина",
      duck: "Утка",
      chicken: "Курица",
      veggies: "Овощи",
    },
    drinks: {
      alasu: "Ala Su",
      cola: "Coca-Cola",
      fanta: "Fanta",
      sprite: "Sprite",
      fuse: "Fuse Tea",
      maxi: "Maxi Tea",
      ayran: "Айран",
    },
    drinkFlavors: {
      lemon: "Лимон",
      mint: "Мята",
      cherry: "Вишня",
      apple: "Яблоко",
      classic: "Classic",
      zero: "Zero Sugar",
      peach: "Персик",
      mango_chamomile: "Манго-Ромашка",
      forest_berry: "Лесные ягоды",
      passion: "Маракуйя",
      berry: "Ягоды",
      green: "Зелёный чай",
      mango: "Манго",
    },
    drinkFlavorTitle: "Выберите вкус",
    stepFlavor: "Вкус",
    toolNames: {
      gloves: "Перчатка",
      napkin: "Салфетка",
      toothpick: "Зубочистка",
      plate: "Тарелка",
      cup: "Стакан",
      wetwipe: "Влажная салфетка",
      fan: "Веер",
      fork: "Вилка",
      lighter: "Зажигалка-горелка",
      fluid: "Жидкость для розжига",
    },
    tools: [
      "Перчатка ×4",
      "Салфетка ×2",
      "Зубочистка ×2",
      "Тарелка ×2",
      "Стакан ×2",
      "Влажная салфетка ×2",
      "Веер",
      "Вилки ×2",
      "Зажигалка-горелка",
      "Жидкость для розжига",
    ],
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
    waPrice: "Цена",
    waTime: "Время заказа",
    waFooter: "Хочу оформить заказ!",
    boxPriceLabel: "12 500 〒",
  },
  en: {
    tag: "Ready mangal box — pick, grill, eat",
    orderBtn: "Build your box",
    aboutTitle: "What's in the box",
    rulesTitle: "Cooking guide",
    rulesHint: "7 steps — follow in order",
    importantBadge: "Important",
    guideBadge: "Guide",
    rulesCta: "How to prep your box",
    nextBtn: "Next",
    seeBox: "Finish",
    sendOrder: "Send to WhatsApp",
    homeBtn: "Home",
    swipeHint: "Swipe left or right",
    flavorHint: "Choose a flavor",
    comingSoon: "Coming soon",
    step1: "Food",
    step2: "Type",
    step3: "Drink",
    step4: "Summary",
    foodTitle: "Choose your food",
    shashlikTitle: "Choose shashlik type",
    drinkTitle: "Choose a drink",
    toolsTitle: "Your box",
    toolsHint: "All set",
    summaryTitle: "Your cart",
    doneKicker: "Cart",
    addBox: "Build another box",
    createBox: "Create a box",
    cartEmpty: "Cart is empty",
    cartEmptyHint: "Start by building a box",
    cartAria: "Cart",
    boxLabel: "Box",
    qtyLabel: "Qty",
    removeBoxTitle: "Remove box",
    removeBoxText: "Remove this box from your cart?",
    removeConfirm: "Remove",
    removeCancel: "Cancel",
    selected: "Selected",
    summaryFood: "Food",
    summaryVariant: "Type",
    summaryDrink: "Drink",
    summaryTools: "tools",
    included: "included",
    foods: { shashlik: "Shashlik", steak: "Steak", burger: "Steak burger" },
    shashlik: {
      beef: "Beef",
      lamb: "Lamb",
      duck: "Duck",
      chicken: "Chicken",
      veggies: "Veggies",
    },
    drinks: {
      alasu: "Ala Su",
      cola: "Coca-Cola",
      fanta: "Fanta",
      sprite: "Sprite",
      fuse: "Fuse Tea",
      maxi: "Maxi Tea",
      ayran: "Ayran",
    },
    drinkFlavors: {
      lemon: "Lemon",
      mint: "Mint",
      cherry: "Cherry",
      apple: "Apple",
      classic: "Classic",
      zero: "Zero Sugar",
      peach: "Peach",
      mango_chamomile: "Mango-Chamomile",
      forest_berry: "Forest berries",
      passion: "Passion fruit",
      berry: "Berries",
      green: "Green tea",
      mango: "Mango",
    },
    drinkFlavorTitle: "Choose a flavor",
    stepFlavor: "Flavor",
    toolNames: {
      gloves: "Gloves",
      napkin: "Napkins",
      toothpick: "Toothpicks",
      plate: "Plates",
      cup: "Cups",
      wetwipe: "Wet wipes",
      fan: "Fan",
      fork: "Forks",
      lighter: "Torch lighter",
      fluid: "Fire starter fluid",
    },
    tools: [
      "Gloves ×4",
      "Napkins ×2",
      "Toothpicks ×2",
      "Plates ×2",
      "Cups ×2",
      "Wet wipes ×2",
      "Fan",
      "Forks ×2",
      "Torch lighter",
      "Fire starter fluid",
    ],
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
    waPrice: "Price",
    waTime: "Order time",
    waFooter: "I would like to place an order!",
    boxPriceLabel: "12 500 〒",
  },
};

const CATALOG = {
  food: [
    { id: "shashlik", img: "img/food-shashlik.jpg", locked: false },
    { id: "steak", img: "img/food-steak.jpg", locked: true },
    { id: "burger", img: "img/food-burger.png", locked: true },
  ],
  shashlik: [
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

const state = {
  lang: "kk",
  mode: "landing",
  step: "food",
  food: "shashlik",
  variant: "beef",
  drink: "cola",
  drinkFlavor: "classic",
  history: [],
  busy: false,
  carouselIndex: 0,
  items: [],
  packed: [],
  boxes: [],
  pendingRemove: null,
};

const $ = (id) => document.getElementById(id);
const d = () => copy[state.lang];
const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const els = {
  back: $("back-btn"),
  orderBtn: $("order-btn"),
  rulesBtn: $("rules-btn"),
  infoClose: $("info-close"),
  nextBtn: $("next-btn"),
  homeBtn: $("home-btn"),
  dots: $("dots"),
  stepEye: $("step-eye"),
  stepTitle: $("step-title"),
  stepHint: $("step-hint"),
  picked: $("picked"),
  soon: $("soon-note"),
  track: $("carousel-track"),
  carousel: $("carousel"),
  prevBtn: $("carousel-prev"),
  nextArrow: $("carousel-next"),
  flavorGrid: $("flavor-grid"),
  packLayer: $("pack-layer"),
  heroBox: $("hero-box"),
  boxesList: $("boxes-list"),
  wa: $("whatsapp-order"),
  addBoxBtn: $("add-box-btn"),
  cartBtn: $("cart-btn"),
  cartBadge: $("cart-badge"),
  doneFoot: document.querySelector(".done-foot"),
  steps: $("landing-steps"),
  warns: $("landing-warns"),
  seg: document.querySelector(".seg"),
};

function showPanel(name) {
  state.mode = name;
  document.querySelectorAll(".panel").forEach((p) => {
    p.classList.toggle("is-active", p.dataset.panel === name);
  });
  els.back.classList.toggle("is-hidden", name === "landing");
  els.cartBtn?.classList.toggle("is-active", name === "done");
  document.getElementById("fab")?.classList.remove("is-open");
  document.getElementById("fab-toggle")?.setAttribute("aria-expanded", "false");
  setLivePhotoActive(name === "landing");
}

function fillInfoLists() {
  const t = d();
  els.steps.innerHTML = t.steps.map((x, i) => `<li><b>${i + 1}</b><span>${x}</span></li>`).join("");
  els.warns.innerHTML = t.warnings.map((x) => `<li>${x}</li>`).join("");
}

function applyI18n() {
  document.documentElement.lang = state.lang;
  els.seg.dataset.active = state.lang;
  els.seg.querySelectorAll(".seg-btn").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.lang === state.lang);
  });
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (tHas(key)) node.textContent = d()[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const key = node.getAttribute("data-i18n-aria");
    if (tHas(key)) node.setAttribute("aria-label", d()[key]);
  });
  fillInfoLists();
  if (state.mode === "order") {
    updateOrderChrome();
    els.packLayer.querySelectorAll(".picked-chip").forEach((chip) => {
      const name = chip.querySelector(".picked-name");
      if (!name) return;
      if (chip.classList.contains("is-tool")) {
        const tool = TOOLS.find((t) => t.id === chip.dataset.id);
        if (tool) name.textContent = toolLabel(tool);
        return;
      }
      const item = {
        id: chip.dataset.id,
        drink: chip.dataset.id,
        flavor: chip.dataset.flavor,
        qty: Number(chip.dataset.qty) || undefined,
      };
      name.textContent = packedLabel(item, chip.dataset.step);
    });
  }
  if (state.mode === "done") renderCart();
  else updateCartBadge();
}

function tHas(key) {
  return Object.prototype.hasOwnProperty.call(d(), key);
}

function labelFor(item) {
  const t = d();
  if (state.step === "food") return t.foods[item.id];
  if (state.step === "shashlik") return t.shashlik[item.id];
  if (state.step === "drink") return t.drinks[item.id];
  if (state.step === "drinkFlavor") return t.drinkFlavors[item.id] || item.id;
  return item.id;
}

function currentItem() {
  return state.items[state.carouselIndex] || null;
}

function layoutCarousel(instant = false) {
  const n = state.items.length;
  if (!n) {
    els.track.style.transform = "translate3d(0,0,0)";
    updateCarouselArrows();
    return;
  }
  const w = els.carousel.clientWidth || 1;
  const cardW = w * 0.76;
  const offset = w * 0.12 - state.carouselIndex * cardW + drag.dx;
  if (instant) els.track.style.transition = "none";
  els.track.style.transform = `translate3d(${offset}px,0,0)`;
  if (instant) {
    // force reflow only when needed
    void els.track.offsetWidth;
    els.track.style.transition = "";
  }
  const cards = els.track.children;
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.toggle("is-active", i === state.carouselIndex);
  }
  if (!drag.active) updateCarouselArrows();
}

const drag = { active: false, startX: 0, dx: 0, moved: false, raf: 0 };

function scheduleLayout() {
  if (drag.raf) return;
  drag.raf = requestAnimationFrame(() => {
    drag.raf = 0;
    layoutCarousel();
  });
}

function updateCarouselArrows() {
  const n = state.items.length;
  const show =
    state.mode === "order" &&
    state.step !== "tools" &&
    state.step !== "drinkFlavor" &&
    n > 1;
  if (els.prevBtn) {
    els.prevBtn.classList.toggle("is-hidden", !show || state.carouselIndex <= 0);
    els.prevBtn.disabled = !show || state.carouselIndex <= 0;
  }
  if (els.nextArrow) {
    els.nextArrow.classList.toggle("is-hidden", !show || state.carouselIndex >= n - 1);
    els.nextArrow.disabled = !show || state.carouselIndex >= n - 1;
  }
}

function shiftCarousel(dir) {
  if (state.busy || state.step === "tools" || state.step === "drinkFlavor" || !state.items.length) return;
  const next = state.carouselIndex + dir;
  if (next < 0 || next >= state.items.length) return;
  state.carouselIndex = next;
  layoutCarousel();
  syncSelection();
}

function syncSelection() {
  if (state.step === "drinkFlavor") {
    syncFlavorSelection();
    return;
  }
  const item = currentItem();
  if (!item) {
    els.picked.textContent = "";
    els.nextBtn.disabled = true;
    els.soon.classList.add("is-hidden");
    return;
  }
  const locked = !!item.locked;
  els.soon.classList.toggle("is-hidden", !locked);
  els.nextBtn.disabled = locked || state.busy;
  els.picked.textContent = locked ? "" : `${d().selected}: ${labelFor(item)}`;

  if (state.step === "food") state.food = item.id;
  if (state.step === "shashlik") state.variant = item.id;
  if (state.step === "drink") state.drink = item.id;
}

function buildCarousel(items) {
  state.items = items;
  state.carouselIndex = Math.min(state.carouselIndex, Math.max(0, items.length - 1));
  els.track.innerHTML = "";
  items.forEach((item, i) => {
    const card = document.createElement("article");
    card.className = `card${item.locked ? " is-locked" : ""}${i === state.carouselIndex ? " is-active" : ""}`;
    card.innerHTML = `
      <div class="card-visual"><img src="${item.img}" alt="" draggable="false" decoding="async" loading="eager" /></div>
      <p class="card-label">${labelFor(item)}</p>
    `;
    els.track.appendChild(card);
  });
  layoutCarousel(true);
  syncSelection();
}

function updateOrderChrome() {
  const t = d();
  const steps = stepList();
  const idx = steps.indexOf(state.step);
  els.dots.innerHTML = steps.map((_, i) => `<span class="${i === idx ? "is-on" : ""}"></span>`).join("");

  const meta = {
    food: { eye: t.step1, title: t.foodTitle, hint: t.swipeHint },
    shashlik: { eye: t.step2, title: t.shashlikTitle, hint: t.swipeHint },
    drink: { eye: t.step3, title: t.drinkTitle, hint: t.swipeHint },
    drinkFlavor: { eye: t.stepFlavor, title: t.drinkFlavorTitle, hint: t.flavorHint },
    tools: { eye: t.step4, title: t.toolsTitle, hint: t.toolsHint },
  }[state.step];

  if (!meta) return;
  els.stepEye.textContent = meta.eye;
  els.stepTitle.textContent = meta.title;
  els.stepHint.textContent = meta.hint;
  els.nextBtn.textContent = state.step === "tools" ? t.seeBox : t.nextBtn;
  const stage = $("order-stage");
  stage?.classList.toggle("is-tools", state.step === "tools");
  stage?.classList.toggle("is-flavor", state.step === "drinkFlavor");
}

function stepList() {
  return state.food === "shashlik"
    ? ["food", "shashlik", "drink", "drinkFlavor", "tools"]
    : ["food", "drink", "drinkFlavor", "tools"];
}

function drinkFlavorItems(drinkId = state.drink) {
  const flavors = DRINK_FLAVORS[drinkId] || ["classic"];
  return flavors.map((id) => ({ id }));
}

function syncFlavorSelection() {
  const flavors = DRINK_FLAVORS[state.drink] || ["classic"];
  if (!flavors.includes(state.drinkFlavor)) state.drinkFlavor = flavors[0];
  const label = d().drinkFlavors[state.drinkFlavor] || state.drinkFlavor;
  els.picked.textContent = `${d().selected}: ${label}`;
  els.soon.classList.add("is-hidden");
  els.nextBtn.disabled = state.busy;
  els.flavorGrid?.querySelectorAll(".flavor-check").forEach((btn) => {
    const on = btn.dataset.id === state.drinkFlavor;
    btn.classList.toggle("is-checked", on);
    btn.setAttribute("aria-checked", on ? "true" : "false");
  });
}

function buildFlavorGrid() {
  const grid = els.flavorGrid;
  if (!grid) return;
  const flavors = drinkFlavorItems();
  grid.hidden = false;
  grid.innerHTML = flavors
    .map((item) => {
      const name = d().drinkFlavors[item.id] || item.id;
      const checked = item.id === state.drinkFlavor;
      return `
        <button type="button" class="flavor-check${checked ? " is-checked" : ""}" data-id="${item.id}" role="checkbox" aria-checked="${checked ? "true" : "false"}">
          <span class="flavor-check-box" aria-hidden="true"></span>
          <span class="flavor-check-label">${name}</span>
        </button>
      `;
    })
    .join("");
  syncFlavorSelection();
}

function clearFlavorGrid() {
  if (!els.flavorGrid) return;
  els.flavorGrid.hidden = true;
  els.flavorGrid.innerHTML = "";
}

function loadStepCarousel() {
  updateOrderChrome();
  if (state.step === "tools") {
    state.items = [];
    els.track.innerHTML = "";
    clearFlavorGrid();
    els.picked.textContent = "";
    els.soon.classList.add("is-hidden");
    els.nextBtn.disabled = state.busy;
    updateCarouselArrows();
    return;
  }
  if (state.step === "drinkFlavor") {
    state.items = [];
    els.track.innerHTML = "";
    updateCarouselArrows();
    buildFlavorGrid();
    return;
  }
  clearFlavorGrid();
  const map = {
    food: CATALOG.food,
    shashlik: CATALOG.shashlik,
    drink: CATALOG.drink,
  };
  const items = map[state.step] || [];
  const preferred =
    state.step === "food"
      ? state.food
      : state.step === "shashlik"
        ? state.variant
        : state.drink;
  const idx = Math.max(0, items.findIndex((x) => x.id === preferred));
  state.carouselIndex = idx === -1 ? 0 : idx;
  buildCarousel(items);
}

async function transitionStep(dir = 1, { afterLoad } = {}) {
  const order = document.querySelector('.panel[data-panel="order"]');
  const head = order?.querySelector(".panel-head");
  const stage = $("order-stage");
  const parts = [head, stage].filter(Boolean);

  if (reduceMotion() || !parts.length) {
    loadStepCarousel();
    if (afterLoad) await afterLoad();
    return;
  }

  const outClass = dir >= 0 ? "is-step-out" : "is-step-out-back";
  parts.forEach((el) => {
    el.classList.remove("is-step-in", "is-step-in-back", "is-step-out", "is-step-out-back");
    el.classList.add(outClass);
  });
  await wait(120);
  loadStepCarousel();

  const inClass = dir >= 0 ? "is-step-in" : "is-step-in-back";
  parts.forEach((el) => {
    el.classList.remove(outClass);
    el.classList.add(inClass);
  });

  const enter = wait(180);
  if (afterLoad) await afterLoad();
  await enter;
  parts.forEach((el) => el.classList.remove(inClass));
}

function removePackedByStep(step) {
  els.packLayer.querySelectorAll(`.picked-chip[data-step="${step}"]`).forEach((chip) => chip.remove());
  state.packed = state.packed.filter((p) => (p.step || (p.kind === "tool" ? "tools" : null)) !== step);
}

function clearToolChips() {
  els.packLayer.querySelectorAll(".picked-chip.is-tool").forEach((chip) => chip.remove());
  state.packed = state.packed.filter((p) => p.kind !== "tool");
}

async function addToolsCards({ staggered = false } = {}) {
  clearToolChips();
  els.nextBtn.disabled = true;
  els.nextBtn.textContent = d().seeBox;

  if (!staggered || reduceMotion()) {
    const frag = document.createDocumentFragment();
    for (const tool of TOOLS) {
      const item = { ...tool, kind: "tool", step: "tools" };
      frag.appendChild(makeChipEl(item, "tools"));
      state.packed.push(item);
    }
    els.packLayer.appendChild(frag);
    const last = els.packLayer.lastElementChild;
    last?.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", inline: "end", block: "nearest" });
    return;
  }

  const staggerMs = 100;
  const popMs = 560;

  for (let i = 0; i < TOOLS.length; i++) {
    const tool = TOOLS[i];
    const item = { ...tool, kind: "tool", step: "tools" };
    const chip = makeChipEl(item, "tools");
    chip.classList.add("is-tool-pop");
    chip.style.animationDuration = `${popMs}ms`;
    els.packLayer.appendChild(chip);
    state.packed.push(item);
    if (i === 0 || i % 3 === 2) {
      chip.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
    }
    await wait(staggerMs);
  }
  await wait(popMs);
}

function setBoxOpen(open) {
  const src = open ? "img/box-open.jpg" : "img/box-closed.jpg";
  if (els.heroBox) els.heroBox.src = src;
}

function packedLabel(item, step = state.step) {
  const t = d();
  if (step === "food") return t.foods[item.id] || item.id;
  if (step === "shashlik") {
    const name = t.foods.shashlik;
    const qty = item.qty || SHASHLIK_QTY;
    return qty > 1 ? `${name} ×${qty}` : name;
  }
  if (step === "drink" || step === "drinkFlavor") {
    return drinkFullLabel({
      drink: item.drink || state.drink,
      drinkFlavor: item.flavor || item.drinkFlavor || state.drinkFlavor,
    });
  }
  return item.id;
}

function drinkFullLabel(box = state) {
  const t = d();
  const brand = t.drinks[box.drink] || box.drink;
  const flavorId = box.drinkFlavor || box.flavor || "classic";
  const flavor = t.drinkFlavors[flavorId];
  return flavor ? `${brand} ${flavor}` : brand;
}

function toolLabel(tool) {
  const name = d().toolNames[tool.id] || tool.id;
  return tool.qty > 1 ? `${name} ×${tool.qty}` : name;
}

function makeChipEl(item, step = state.step) {
  const chip = document.createElement("div");
  const isTool = item.kind === "tool";
  const qty = item.qty || (step === "shashlik" ? SHASHLIK_QTY : 0);
  chip.className = `picked-chip${isTool ? " is-tool" : ""}${qty > 1 ? " has-qty" : ""}`;
  chip.dataset.step = step;
  chip.dataset.id = item.id;
  if (qty) chip.dataset.qty = String(qty);
  if (item.flavor || item.drinkFlavor) {
    chip.dataset.flavor = item.flavor || item.drinkFlavor;
  }
  const name = isTool ? toolLabel(item) : packedLabel({ ...item, qty }, step);
  const qtyBadge = qty > 1 ? `<span class="tool-qty">×${qty}</span>` : "";
  if (isTool) {
    chip.innerHTML = `
      <div class="picked-thumb tool-thumb">
        <img src="${item.img}" alt="" />
        ${qtyBadge}
      </div>
      <span class="picked-name">${name}</span>
    `;
  } else {
    chip.innerHTML = `
      <div class="picked-thumb${qty > 1 ? " tool-thumb" : ""}">
        <img src="${item.img}" alt="" />
        ${qtyBadge}
      </div>
      <span class="picked-name">${name}</span>
    `;
  }
  return chip;
}

function addPackedThumb(item) {
  removePackedByStep(state.step);
  state.packed.push({ ...item, step: state.step });
  const chip = makeChipEl(item);
  els.packLayer.appendChild(chip);
  chip.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", inline: "end", block: "nearest" });
  return chip;
}

function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
}

async function packIntoBox(item) {
  if (!item) return;
  removePackedByStep(state.step);

  if (reduceMotion()) {
    addPackedThumb(item);
    return;
  }

  const activeVisual = els.track.querySelector(".card.is-active .card-visual");
  if (!activeVisual) {
    addPackedThumb(item);
    return;
  }

  const from = activeVisual.getBoundingClientRect();

  const chip = makeChipEl(item);
  chip.classList.add("is-flying");
  els.packLayer.appendChild(chip);
  state.packed.push({ ...item, step: state.step });
  try {
    chip.scrollIntoView({ behavior: "instant", inline: "end", block: "nearest" });
  } catch {
    chip.scrollIntoView({ inline: "end", block: "nearest" });
  }

  const thumb = chip.querySelector(".picked-thumb") || chip;
  const to = thumb.getBoundingClientRect();

  const clone = document.createElement("div");
  clone.className = "fly-clone";
  clone.innerHTML = `<img src="${item.img}" alt="" decoding="async" />`;
  clone.style.left = `${from.left}px`;
  clone.style.top = `${from.top}px`;
  clone.style.width = `${from.width}px`;
  clone.style.height = `${from.height}px`;
  clone.style.transform = "translate3d(0,0,0) scale(1)";
  clone.style.opacity = "1";
  clone.style.transition = "none";
  document.body.appendChild(clone);

  activeVisual.classList.add("is-packing");

  await nextFrame();

  const sx = to.width / Math.max(from.width, 1);
  const sy = to.height / Math.max(from.height, 1);
  const tx = to.left - from.left;
  const ty = to.top - from.top;
  const duration = 400;

  clone.style.transition = `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
  clone.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${sx}, ${sy})`;

  await wait(duration);

  chip.classList.remove("is-flying");
  chip.classList.add("is-landed");
  clone.style.transition = "opacity 90ms ease";
  clone.style.opacity = "0";
  await wait(90);
  clone.remove();
  activeVisual.classList.remove("is-packing");
  chip.scrollIntoView({ behavior: "smooth", inline: "end", block: "nearest" });
}

function foodLabel(box = state) {
  const t = d();
  return box.food === "shashlik" ? t.shashlik[box.variant] : t.foods[box.food];
}

function foodImg(box) {
  if (box.food === "shashlik") {
    return CATALOG.shashlik.find((x) => x.id === box.variant)?.img || "img/food-shashlik.jpg";
  }
  return CATALOG.food.find((x) => x.id === box.food)?.img || "img/food-shashlik.jpg";
}

function drinkImg(box) {
  return CATALOG.drink.find((x) => x.id === box.drink)?.img || "img/drink-cola.png";
}

function boxTitle(box, index) {
  const t = d();
  return `${t.boxLabel} ${index + 1}`;
}

function boxSubtitle(box) {
  return `${foodLabel(box)} · ${drinkFullLabel(box)}`;
}

function waFoodPart(box) {
  const t = d();
  if (box.food === "shashlik") {
    return `${t.shashlik[box.variant]} ${t.foods.shashlik} ×${SHASHLIK_QTY}`;
  }
  return t.foods[box.food] || box.food;
}

function formatPrice(amount) {
  return `${String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} 〒`;
}

function cartTotal() {
  return cartCount() * BOX_PRICE;
}

function formatOrderTime(date = new Date()) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  const hh = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  return `${dd}.${mm}.${yyyy}, ${hh}:${min}`;
}

function buildWhatsAppText() {
  const t = d();
  const lines = [t.waPrefix, "", `${t.waCart}`];
  state.boxes.forEach((box) => {
    lines.push(
      `${t.boxLabel} ×${box.qty} - ${waFoodPart(box)}, ${drinkFullLabel(box)}, ${t.summaryTools}`
    );
  });
  lines.push("");
  lines.push(`${t.waPrice}: ${formatPrice(cartTotal())}`);
  lines.push(`${t.waTime}: ${formatOrderTime()}`);
  lines.push("");
  lines.push(t.waFooter);
  return lines.join("\n");
}

function currentBoxSnapshot() {
  return {
    food: state.food,
    variant: state.variant,
    drink: state.drink,
    drinkFlavor: state.drinkFlavor,
    qty: 1,
  };
}

function findSameBoxIndex(box) {
  return state.boxes.findIndex(
    (b) =>
      b.food === box.food &&
      b.variant === box.variant &&
      b.drink === box.drink &&
      b.drinkFlavor === box.drinkFlavor
  );
}

function commitCurrentBox() {
  const snap = currentBoxSnapshot();
  const same = findSameBoxIndex(snap);
  if (same >= 0) {
    state.boxes[same].qty += 1;
  } else {
    state.boxes.push(snap);
  }
}

function cartCount() {
  return state.boxes.reduce((sum, box) => sum + (box.qty || 0), 0);
}

function updateCartBadge() {
  const n = cartCount();
  if (!els.cartBadge) return;
  els.cartBadge.textContent = String(n);
  els.cartBadge.classList.toggle("is-hidden", n < 1);
  els.cartBtn?.classList.toggle("has-items", n > 0);
}

function openCart() {
  if (state.busy) return;
  clearPacked();
  setBoxOpen(false);
  renderCart();
  showPanel("done");
}

function renderCart() {
  const t = d();
  if (!els.boxesList) return;

  const empty = !state.boxes.length;
  els.doneFoot?.classList.toggle("is-empty", empty);
  els.addBoxBtn?.classList.toggle("is-hidden", empty);
  els.wa?.classList.toggle("is-hidden", empty);

  if (empty) {
    els.boxesList.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M6.5 8h11l-.7 10.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6.5 8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
            <path d="M9 8V6.8A3 3 0 0 1 12 3.8v0a3 3 0 0 1 3 3V8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
          </svg>
        </div>
        <strong>${t.cartEmpty}</strong>
        <p>${t.cartEmptyHint}</p>
        <button type="button" class="btn" id="create-box-btn">${t.createBox}</button>
      </div>`;
    $("create-box-btn")?.addEventListener("click", () => startOrder({ keepCart: true }));
    syncWhatsAppLink();
    updateCartBadge();
    return;
  }

  els.boxesList.innerHTML = state.boxes
    .map(
      (box, i) => `
      <article class="box-card" data-box="${i}">
        <div class="box-card-top">
          <div class="box-thumbs" aria-hidden="true">
            <img class="box-thumb is-food" src="${foodImg(box)}" alt="" />
            <img class="box-thumb is-drink" src="${drinkImg(box)}" alt="" />
          </div>
          <div class="box-card-info">
            <strong>${boxTitle(box, i)}</strong>
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
    .join("");

  els.boxesList.insertAdjacentHTML(
    "beforeend",
    `<div class="cart-total"><span>${t.waPrice}</span><strong>${formatPrice(cartTotal())}</strong></div>`
  );

  syncWhatsAppLink();
  updateCartBadge();
}

function syncWhatsAppLink() {
  if (!els.wa) return;
  if (!state.boxes.length) {
    els.wa.setAttribute("href", `https://wa.me/${WA_PHONE}`);
    return;
  }
  els.wa.setAttribute(
    "href",
    `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(buildWhatsAppText())}`
  );
}

function changeBoxQty(index, delta) {
  const box = state.boxes[index];
  if (!box) return;

  if (delta < 0 && box.qty <= 1) {
    askRemoveBox(index);
    return;
  }

  box.qty += delta;
  if (box.qty < 1) state.boxes.splice(index, 1);
  renderCart();
}

function askRemoveBox(index) {
  const modal = $("confirm-modal");
  if (!modal) {
    if (window.confirm(d().removeBoxText)) removeBoxAt(index);
    return;
  }
  state.pendingRemove = index;
  $("confirm-title").textContent = d().removeBoxTitle;
  $("confirm-text").textContent = d().removeBoxText;
  $("confirm-ok").textContent = d().removeConfirm;
  $("confirm-cancel").textContent = d().removeCancel;
  modal.hidden = false;
  modal.classList.add("is-open");
}

function removeBoxAt(index) {
  if (index < 0 || index >= state.boxes.length) return;
  state.boxes.splice(index, 1);
  renderCart();
}

function closeConfirm() {
  state.pendingRemove = null;
  const modal = $("confirm-modal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.hidden = true;
}

function clearPacked() {
  state.packed = [];
  els.packLayer.innerHTML = "";
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function shouldPackSelection(step, item) {
  // Shashlik category itself is not added — only the concrete type later
  if (step === "food" && item.id === "shashlik") return false;
  // Drink brand first — flavor is packed on the next step
  if (step === "drink") return false;
  return true;
}

async function startOrder({ keepCart = false } = {}) {
  state.history = [];
  state.step = "food";
  state.food = "shashlik";
  state.variant = "beef";
  state.drink = "cola";
  state.drinkFlavor = "classic";
  if (!keepCart) state.boxes = [];
  clearPacked();
  setBoxOpen(true);
  showPanel("order");
  loadStepCarousel();
}

async function goHome() {
  closeConfirm();
  clearPacked();
  setBoxOpen(false);
  updateCartBadge();
  showPanel("landing");
}

async function startAnotherBox() {
  await startOrder({ keepCart: true });
}

function pushHistory(entry) {
  if (entry.packed && !entry.toolsBatch) {
    state.history = state.history.filter(
      (h) => !(h.step === entry.step && h.packed && !h.toolsBatch)
    );
  }
  if (entry.toolsBatch) {
    state.history = state.history.filter((h) => !h.toolsBatch);
  }
  state.history.push(entry);
}

async function onNext() {
  if (state.busy) return;
  const t = d();

  if (state.step === "tools") {
    state.busy = true;
    commitCurrentBox();
    clearPacked();
    setBoxOpen(false);
    await wait(reduceMotion() ? 0 : 160);
    renderCart();
    showPanel("done");
    state.busy = false;
    return;
  }

  if (state.step === "drinkFlavor") {
    const flavors = DRINK_FLAVORS[state.drink] || ["classic"];
    if (!flavors.includes(state.drinkFlavor)) return;

    state.busy = true;
    els.nextBtn.disabled = true;

    await packIntoBox({
      id: state.drink,
      img: CATALOG.drink.find((x) => x.id === state.drink)?.img,
      drink: state.drink,
      flavor: state.drinkFlavor,
    });

    pushHistory({ step: "drinkFlavor", packed: true });
    state.step = "tools";
    els.nextBtn.textContent = t.seeBox;
    await transitionStep(1, { afterLoad: () => addToolsCards({ staggered: true }) });
    pushHistory({ step: "drinkFlavor", toolsBatch: true });
    state.busy = false;
    els.nextBtn.disabled = false;
    els.nextBtn.textContent = t.seeBox;
    return;
  }

  const item = currentItem();
  if (!item || item.locked) return;

  state.busy = true;
  els.nextBtn.disabled = true;

  const packed = shouldPackSelection(state.step, item);
  if (packed) {
    if (state.step === "shashlik") {
      await packIntoBox({ ...item, qty: SHASHLIK_QTY });
    } else {
      await packIntoBox(item);
    }
  }

  pushHistory({ step: state.step, packed });
  if (state.step === "food") {
    state.food = item.id;
    state.step = item.id === "shashlik" ? "shashlik" : "drink";
  } else if (state.step === "shashlik") {
    state.variant = item.id;
    state.step = "drink";
  } else if (state.step === "drink") {
    state.drink = item.id;
    const flavors = DRINK_FLAVORS[item.id] || ["classic"];
    state.drinkFlavor = flavors.includes(state.drinkFlavor) ? state.drinkFlavor : flavors[0];
    state.step = "drinkFlavor";
  }

  await transitionStep(1);
  state.busy = false;
  syncSelection();
}

function stepBefore(step) {
  const list = stepList();
  const i = list.indexOf(step);
  return i > 0 ? list[i - 1] : step;
}

async function onBack() {
  if (state.busy) return;
  if (state.mode === "info") {
    showPanel("landing");
    return;
  }
  if (state.mode === "done") {
    await goHome();
    return;
  }
  if (state.mode !== "order") return;

  if (!state.history.length) {
    if (state.boxes.length) {
      clearPacked();
      renderCart();
      showPanel("done");
      return;
    }
    await goHome();
    return;
  }

  state.busy = true;
  const prev = state.history.pop();

  if (prev.toolsBatch) {
    clearToolChips();
    state.step = "drinkFlavor";
  } else if (prev.packed) {
    removePackedByStep(prev.step);
    state.step = prev.step;
  } else {
    state.step = prev.step;
  }

  setBoxOpen(true);
  await transitionStep(-1);
  state.busy = false;
  syncSelection();
}

/* Swipe / drag carousel */
function onPointerDown(e) {
  if (state.mode !== "order" || state.step === "tools" || state.step === "drinkFlavor" || !state.items.length) return;
  drag.active = true;
  drag.moved = false;
  drag.startX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
  drag.dx = 0;
  els.carousel.classList.add("is-dragging");
}

function onPointerMove(e) {
  if (!drag.active) return;
  const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
  drag.dx = x - drag.startX;
  if (Math.abs(drag.dx) > 6) drag.moved = true;
  scheduleLayout();
}

function onPointerUp() {
  if (!drag.active) return;
  drag.active = false;
  els.carousel.classList.remove("is-dragging");
  if (drag.raf) {
    cancelAnimationFrame(drag.raf);
    drag.raf = 0;
  }
  const threshold = 40;
  if (drag.dx <= -threshold && state.carouselIndex < state.items.length - 1) {
    state.carouselIndex += 1;
  } else if (drag.dx >= threshold && state.carouselIndex > 0) {
    state.carouselIndex -= 1;
  }
  drag.dx = 0;
  layoutCarousel();
  syncSelection();
}

els.carousel.addEventListener("pointerdown", (e) => {
  if (e.target.closest(".carousel-arrow")) return;
  els.carousel.setPointerCapture?.(e.pointerId);
  onPointerDown(e);
});
els.carousel.addEventListener("pointermove", onPointerMove);
els.carousel.addEventListener("pointerup", onPointerUp);
els.carousel.addEventListener("pointercancel", onPointerUp);
els.carousel.addEventListener("lostpointercapture", onPointerUp);

els.prevBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  shiftCarousel(-1);
});
els.nextArrow?.addEventListener("click", (e) => {
  e.stopPropagation();
  shiftCarousel(1);
});

window.addEventListener("resize", () => layoutCarousel(true));

els.orderBtn.addEventListener("click", () => startOrder({ keepCart: true }));
els.cartBtn?.addEventListener("click", () => {
  if (state.mode === "done") {
    goHome();
    return;
  }
  openCart();
});
els.rulesBtn?.addEventListener("click", () => {
  const card = document.querySelector(".sheet-card");
  if (card) card.scrollTop = 0;
  showPanel("info");
  requestAnimationFrame(() => {
    if (card) card.scrollTop = 0;
  });
});
els.infoClose.addEventListener("click", () => showPanel("landing"));
els.nextBtn.addEventListener("click", onNext);
els.back.addEventListener("click", onBack);
els.homeBtn.addEventListener("click", goHome);
els.addBoxBtn?.addEventListener("click", startAnotherBox);
els.wa?.addEventListener("click", () => {
  syncWhatsAppLink();
});

els.boxesList?.addEventListener("click", (e) => {
  const btn = e.target.closest(".qty-btn");
  if (!btn) return;
  const card = btn.closest(".box-card");
  if (!card) return;
  const index = Number(card.dataset.box);
  const delta = Number(btn.dataset.qty);
  changeBoxQty(index, delta);
});

$("confirm-ok")?.addEventListener("click", () => {
  const index = state.pendingRemove;
  closeConfirm();
  if (index != null) removeBoxAt(index);
});
$("confirm-cancel")?.addEventListener("click", closeConfirm);
$("confirm-backdrop")?.addEventListener("click", closeConfirm);

els.seg.querySelectorAll(".seg-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.lang = btn.getAttribute("data-lang");
    applyI18n();
    if (state.mode === "order" && state.step === "drinkFlavor") buildFlavorGrid();
    else if (state.mode === "order" && state.step !== "tools") buildCarousel(state.items);
  });
});

els.flavorGrid?.addEventListener("click", (e) => {
  const btn = e.target.closest(".flavor-check");
  if (!btn || state.busy || state.step !== "drinkFlavor") return;
  state.drinkFlavor = btn.dataset.id;
  syncFlavorSelection();
});

document.querySelector(".panel.sheet")?.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) showPanel("landing");
});

const fab = $("fab");
const fabToggle = $("fab-toggle");
function setFabOpen(open) {
  fab?.classList.toggle("is-open", open);
  fabToggle?.setAttribute("aria-expanded", open ? "true" : "false");
}
fabToggle?.addEventListener("click", (e) => {
  e.stopPropagation();
  setFabOpen(!fab?.classList.contains("is-open"));
});
document.addEventListener("click", (e) => {
  if (!fab || !fab.classList.contains("is-open")) return;
  if (fab.contains(e.target)) return;
  setFabOpen(false);
});

/* Live photo — device tilt + pointer parallax */
const live = {
  root: $("live-photo"),
  inner: $("live-photo-inner"),
  stage: $("landing-stage"),
  active: false,
  motion: false,
  listening: false,
  pointerBound: false,
  baseBeta: null,
  baseGamma: null,
  rx: 0,
  ry: 0,
  raf: 0,
};

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function applyLiveTilt(rx, ry) {
  if (!live.inner || reduceMotion()) return;
  live.rx = clamp(rx, -14, 14);
  live.ry = clamp(ry, -18, 18);
  live.inner.style.transform = `rotateX(${live.rx}deg) rotateY(${live.ry}deg) translateZ(0)`;
  live.root?.style.setProperty("--shine-x", `${live.ry * 1.4}%`);
  live.root?.style.setProperty("--shine-y", `${-live.rx * 1.2}%`);
}

function resetLiveTilt() {
  live.baseBeta = null;
  live.baseGamma = null;
  applyLiveTilt(0, 0);
  live.root?.classList.remove("is-motion");
}

function setLivePhotoActive(on) {
  live.active = !!on && !reduceMotion();
  if (!live.active) {
    resetLiveTilt();
    return;
  }
  applyLiveTilt(0, 0);
  bindLivePointer();
  enableDeviceMotion();
}

function onDeviceOrient(e) {
  if (!live.active) return;
  const beta = e.beta ?? 0;
  const gamma = e.gamma ?? 0;
  if (live.baseBeta == null) {
    live.baseBeta = beta;
    live.baseGamma = gamma;
  }
  const dy = clamp((gamma - live.baseGamma) * 0.5, -18, 18);
  const dx = clamp((beta - live.baseBeta) * -0.32, -14, 14);
  applyLiveTilt(dx, dy);
}

async function enableDeviceMotion() {
  if (live.motion || reduceMotion()) return;
  try {
    if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
      const res = await DeviceOrientationEvent.requestPermission();
      if (res !== "granted") return;
    }
  } catch {
    return;
  }
  live.motion = true;
  live.root?.classList.add("is-motion");
  if (!live.listening) {
    live.listening = true;
    window.addEventListener("deviceorientation", onDeviceOrient, { passive: true });
  }
}

function onLivePointerMove(e) {
  if (!live.active || reduceMotion() || live.motion) return;
  const target = live.stage || live.root;
  if (!target) return;
  const rect = target.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
  if (live.raf) cancelAnimationFrame(live.raf);
  live.raf = requestAnimationFrame(() => {
    live.raf = 0;
    applyLiveTilt(clamp(-y * 10, -14, 14), clamp(x * 14, -18, 18));
  });
}

function onLivePointerLeave() {
  if (!live.active || live.motion) return;
  applyLiveTilt(0, 0);
}

function bindLivePointer() {
  if (live.pointerBound || !live.stage) return;
  live.pointerBound = true;
  live.stage.style.pointerEvents = "auto";
  live.stage.addEventListener("pointermove", onLivePointerMove, { passive: true });
  live.stage.addEventListener("pointerleave", onLivePointerLeave, { passive: true });
}

// iOS needs a user gesture to unlock motion sensors
document.querySelector('.panel[data-panel="landing"]')?.addEventListener(
  "pointerdown",
  () => {
    enableDeviceMotion();
  },
  { passive: true }
);

applyI18n();
setBoxOpen(false);
showPanel("landing");
bindLivePointer();
enableDeviceMotion();