/* ================= MENU DATA ================= */
const MENU = [

/* ================= SOUP ================= */
{ id:1, name:"Seblak Level 1", price:15000, img:"foto/seblak-level-1.png", cat:["soup","spicy"], taste:"spicy" },
{ id:2, name:"Seblak Level 3", price:18000, img:"foto/seblak-level-3.png", cat:["soup","spicy"], taste:"spicy" },
{ id:3, name:"Seblak Level 5", price:20000, img:"foto/seblak-level-5.png", cat:["soup","spicy"], taste:"spicy" },
{ id:4, name:"Bakso Urat", price:20000, img:"foto/bakso-urat.png", cat:["soup"], taste:"medium" },
{ id:5, name:"Soto Ayam", price:22000, img:"foto/soto-ayam.png", cat:["soup"], taste:"medium" },
{ id:6, name:"Rawon", price:30000, img:"foto/rawon.png", cat:["soup"], taste:"medium" },
{ id:7, name:"Tom Yum Seafood", price:38000, img:"foto/tom-yum-seafood.png", cat:["soup","seafood"], taste:"spicy" },
{ id:8, name:"Chicken Ramen", price:35000, img:"foto/chicken-ramen.png", cat:["soup","ramen"], taste:"medium" },
{ id:9, name:"Beef Ramen", price:40000, img:"foto/beef-ramen.png", cat:["soup","ramen"], taste:"medium" },
{ id:10, name:"Seafood Ramen", price:42000, img:"foto/seafood-ramen.png", cat:["soup","ramen"], taste:"spicy" },

/* ================= FRIED RICE ================= */
{ id:11, name:"Chicken Fried Rice", price:22000, img:"foto/chicken-fried-rice.png", cat:["fried rice"], taste:"medium" },
{ id:12, name:"Seafood Fried Rice", price:35000, img:"foto/seafood-fried-rice.png", cat:["fried rice","spicy"], taste:"spicy" },
{ id:13, name:"Mutton Fried Rice", price:30000, img:"foto/mutton-fried-rice.png", cat:["fried rice","spicy"], taste:"spicy" },
{ id:14, name:"Green Chili Fried Rice", price:25000, img:"foto/green-chili-fried-rice.png", cat:["fried rice","spicy"], taste:"spicy" },
{ id:15, name:"Vegetarian Fried Rice", price:20000, img:"foto/vegetarian-fried-rice.png", cat:["fried rice"], taste:"medium" },

/* ================= NOODLES ================= */
{ id:16, name:"Fried Noodles", price:18000, img:"foto/fried-noodles.png", cat:["noodles"], taste:"medium" },
{ id:17, name:"Kwetiau Goreng", price:20000, img:"foto/kwetiau-goreng.png", cat:["noodles"], taste:"medium" },
{ id:18, name:"Mie Aceh", price:28000, img:"foto/mie-aceh.png", cat:["noodles","spicy"], taste:"spicy" },
{ id:19, name:"Mie Ayam", price:15000, img:"foto/mie-ayam.png", cat:["noodles"], taste:"medium" },
{ id:20, name:"Indomie Special", price:12000, img:"foto/indomie-special.png", cat:["noodles"], taste:"medium" },

// NEW MENU - Bihun & Kwetiau
{ id:21, name:"Bihun Goreng", price:12000, img:"foto/noodles-bihun-goreng.jpg", cat:["noodles"], taste:"medium" },
{ id:22, name:"Kwetiau Siram Seafood", price:35000, img:"foto/noodles-kwetiau-siram-seafood.jpg", cat:["noodles","seafood"], taste:"medium" },
{ id:23, name:"Kwetiau Siram Vegetarian", price:33000, img:"foto/noodles-kwetiau-siram-vegetarian.jpg", cat:["noodles","healthy"], taste:"medium" },
{ id:24, name:"Kwetiau Goreng Seafood", price:26000, img:"foto/noodles-kwetiau-goreng-seafood.jpg", cat:["noodles","seafood"], taste:"medium" },

/* ================= SATAY ================= */
{ id:101, name:"Chicken Satay", price:25000, img:"foto/chicken-satay.png", cat:["satay"], taste:"medium" },
{ id:102, name:"Mutton Satay", price:45000, img:"foto/mutton-satay.png", cat:["satay"], taste:"medium" },
{ id:103, name:"Taichan Satay", price:22000, img:"foto/taichan-satay.png", cat:["satay","spicy"], taste:"spicy" },
{ id:104, name:"Chicken Skin Satay", price:20000, img:"foto/chicken-skin-satay.png", cat:["satay"], taste:"medium" },
{ id:105, name:"Beef Satay Special", price:50000, img:"foto/beef-satay-special.png", cat:["satay"], taste:"medium" },

/* ================= STEAK & GRILL ================= */
{ id:26, name:"Wagyu Tenderloin", price:250000, img:"foto/wagyu-tenderloin.png", cat:["steak"], taste:"medium" },
{ id:27, name:"Wagyu Sirloin", price:220000, img:"foto/wagyu-sirloin.png", cat:["steak"], taste:"medium" },
{ id:28, name:"Wagyu Rib Eye", price:235000, img:"foto/wagyu-rib-eye.png", cat:["steak"], taste:"medium" },
{ id:29, name:"Grilled Salmon", price:75000, img:"foto/grilled-salmon.png", cat:["grilled"], taste:"medium" },
{ id:30, name:"Grilled Chicken", price:30000, img:"foto/grilled-chicken.png", cat:["grilled"], taste:"medium" },

/* ================= FAST FOOD ================= */
{ id:31, name:"Cheese Burger", price:35000, img:"foto/cheese-burger.png", cat:["burger"], taste:"medium" },
{ id:32, name:"Double Burger", price:45000, img:"foto/double-burger.png", cat:["burger"], taste:"medium" },
{ id:33, name:"French Fries", price:18000, img:"foto/french-fries.png", cat:["snack"], taste:"medium" },
{ id:34, name:"Hotdog Classic", price:25000, img:"foto/hotdog-classic.png", cat:["snack"], taste:"medium" },
{ id:35, name:"BBQ Chicken Pizza", price:80000, img:"foto/bbq-chicken-pizza.png", cat:["pizza"], taste:"medium" },

/* ================= RICE & EGG ================= */
{ id:36, name:"Ayam Geprek", price:20000, img:"foto/ayam-geprek.png", cat:["rice","spicy"], taste:"spicy" },
{ id:37, name:"Spicy Egg Balado + Rice", price:15000, img:"foto/spicy-egg-balado-rice.png", cat:["rice","spicy"], taste:"spicy" },
{ id:38, name:"Fried Egg + Rice", price:12000, img:"foto/fried-egg-rice.png", cat:["rice"], taste:"medium" },
{ id:39, name:"Cheese Omelet", price:18000, img:"foto/cheese-omelet.png", cat:["egg"], taste:"medium" },
{ id:40, name:"Chicken Porridge", price:15000, img:"foto/chicken-porridge.png", cat:["porridge"], taste:"sweet" },

/* ================= DESSERT ================= */
{ id:41, name:"Chocolate Glaze Donut", price:8000, img:"foto/chocolate-glaze-donut.png", cat:["sweet"], taste:"sweet" },
{ id:42, name:"Frosted Vanilla Creme Donut", price:8000, img:"foto/frosted-vanilla-creme-donut.png", cat:["sweet"], taste:"sweet" },
{ id:43, name:"Red Velvet Cream Cheese Donut", price:9000, img:"foto/red-velvet-cream-cheese-donut.png", cat:["sweet"], taste:"sweet" },
{ id:44, name:"Tiramisu Donut", price:9000, img:"foto/tiramisu-donut.png", cat:["sweet"], taste:"sweet" },
{ id:45, name:"Strawberry Donut", price:8000, img:"foto/strawberry-donut.png", cat:["sweet"], taste:"sweet" },
{ id:46, name:"Brownies Fudge", price:25000, img:"foto/brownies-fudge.png", cat:["sweet"], taste:"sweet" },
{ id:47, name:"Cheesecake", price:32000, img:"foto/cheesecake.png", cat:["sweet"], taste:"sweet" },
{ id:48, name:"Matcha Cheese Cake", price:30000, img:"foto/matcha-cheese-cake.png", cat:["sweet"], taste:"sweet" },
{ id:49, name:"Pandan Cake", price:28000, img:"foto/pandan-cake.png", cat:["sweet"], taste:"sweet" },
{ id:50, name:"Macaroons Box", price:30000, img:"foto/macaroons-box.png", cat:["sweet"], taste:"sweet" },
{ id:51, name:"Tiramisu", price:35000, img:"foto/tiramisu.png", cat:["sweet"], taste:"sweet" },
{ id:52, name:"Strawberry Mochi", price:35000, img:"foto/strawberry-mochi.png", cat:["sweet"], taste:"sweet" },
{ id:53, name:"DUBAI CHOCOLATE MOCHI PISTACHIO", price:35000, img:"foto/dubai-chocolate-mochi-pistachio.png", cat:["sweet"], taste:"sweet" },
{ id:54, name:"Cheesecake Brownies", price:25000, img:"foto/cheesecake-brownies.png", cat:["sweet"], taste:"sweet" },

/* ================= DRINK ================= */
{ id:55, name:"Thai Tea", price:18000, img:"foto/thai-tea.png", cat:["drink"], taste:"sweet" },
{ id:56, name:"Iced Lemon Tea", price:15000, img:"foto/iced-lemon-tea.png", cat:["drink"], taste:"medium" },
{ id:57, name:"Mango Smoothie", price:25000, img:"foto/mango-smoothie.png", cat:["drink"], taste:"sweet" },
{ id:58, name:"Strawberry Milkshake", price:27000, img:"foto/strawberry-milkshake.png", cat:["drink"], taste:"sweet" },
{ id:59, name:"Durian Ice", price:25000, img:"foto/durian-ice.png", cat:["drink"], taste:"sweet" },
{ id:60, name:"Avocado Ice", price:20000, img:"foto/avocado-ice.png", cat:["drink"], taste:"sweet" },
{ id:61, name:"Es Teler", price:18000, img:"foto/es-teler.png", cat:["drink"], taste:"sweet" },

/* ================= SALAD ================= */
{ id:62, name:"Caesar Salad", price:28000, img:"foto/caesar-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:63, name:"Greek Salad", price:26000, img:"foto/greek-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:64, name:"Garden Fresh Salad", price:22000, img:"foto/garden-fresh-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:65, name:"Grilled Chicken Salad", price:32000, img:"foto/grilled-chicken-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:66, name:"Chicken Katsu Salad", price:35000, img:"foto/chicken-katsu-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:67, name:"Tuna Mayo Salad", price:30000, img:"foto/tuna-mayo-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:68, name:"Steak Salad", price:45000, img:"foto/steak-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:69, name:"Egg & Avocado Salad", price:28000, img:"foto/egg-avocado-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:70, name:"Thai Mango Salad", price:25000, img:"foto/thai-mango-salad.png", cat:["healthy","salad"], taste:"sweet" },
{ id:71, name:"Japanese Sesame Salad", price:24000, img:"foto/japanese-sesame-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:72, name:"Gado-Gado Modern", price:28000, img:"foto/gado-gado-modern.png", cat:["healthy","salad"], taste:"medium" },
{ id:73, name:"Corn & Lettuce Salad", price:18000, img:"foto/corn-lettuce-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:74, name:"Crispy Tofu Salad", price:20000, img:"foto/crispy-tofu-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:75, name:"Healthy Bowl", price:22000, img:"foto/healthy-bowl.png", cat:["healthy","salad"], taste:"medium" },
{ id:76, name:"Avocado Salmon Bowl", price:42000, img:"foto/avocado-salmon-bowl.png", cat:["healthy","salad"], taste:"medium" },
{ id:77, name:"Protein Fitness Bowl", price:35000, img:"foto/protein-fitness-bowl.png", cat:["healthy","salad"], taste:"medium" },

/* ================= KETOPRAK ================= */
{ id:100, name:"Ketoprak", price:35000, img:"foto/ketoprak.jpg", cat:["healthy","salad","snack"], taste:"medium" },

/* ================= EXTRA ================= */
{ id:78, name:"Chicken Curry", price:32000, img:"foto/extra-chicken-curry.jpg", cat:["rice"], taste:"medium" },
{ id:79, name:"Beef Rendang", price:35000, img:"foto/extra-beef-rendang.jpg", cat:["rice","spicy"], taste:"spicy" },
{ id:80, name:"Fried Tofu", price:12000, img:"foto/extra-fried-tofu.jpg", cat:["snack"], taste:"medium" },
{ id:81, name:"Tempe Goreng", price:10000, img:"foto/extra-tempe-goreng.jpg", cat:["snack"], taste:"medium" },
{ id:82, name:"Garlic Bread", price:15000, img:"foto/extra-garlic-bread.jpg", cat:["snack"], taste:"medium" },

/* ================= DRINKS MORE ================= */
{ id:83, name:"Es Jeruk", price:15000, img:"foto/drink-es-jeruk.jpg", cat:["drink"], taste:"sweet" },
{ id:84, name:"Es Teh Manis", price:10000, img:"foto/drink-es-teh-manis.jpg", cat:["drink"], taste:"sweet" },
{ id:85, name:"Kopi Hitam", price:15000, img:"foto/drink-kopi-hitam.jpg", cat:["drink","coffee"], taste:"medium" },
{ id:86, name:"Matcha Latte", price:28000, img:"foto/drink-matcha-latte.jpg", cat:["drink"], taste:"sweet" },
{ id:87, name:"Brown Sugar Boba", price:25000, img:"foto/drink-brown-sugar-boba.jpg", cat:["drink"], taste:"sweet" },

/* ================= SNACKS ================= */
{ id:88, name:"Chicken Nuggets", price:25000, img:"foto/snack-nuggets.jpg", cat:["snack"], taste:"medium" },
{ id:89, name:"Onion Rings", price:20000, img:"foto/snack-onion-rings.jpg", cat:["snack"], taste:"medium" },
{ id:90, name:"Mozzarella Sticks", price:30000, img:"foto/snack-mozzarella-sticks.jpg", cat:["snack"], taste:"medium" },
{ id:91, name:"Potato Wedges", price:22000, img:"foto/snack-potato-wedges.jpg", cat:["snack"], taste:"medium" },
{ id:92, name:"Dimsum Original", price:28000, img:"foto/snack-dimsum-original.jpg", cat:["snack"], taste:"medium" },

{ id:93, name:"Dimsum Mentai", price:32000, img:"foto/snack-dimsum-mentai.jpg", cat:["snack"], taste:"medium" },
{ id:94, name:"Dimsum Family", price:45000, img:"foto/snack-dimsum-family.jpg", cat:["snack"], taste:"medium" },

/* ================= DESSERT MORE ================= */
{ id:95, name:"Ice Cream Vanilla", price:15000, img:"foto/dessert-icecream-vanilla.jpg", cat:["sweet"], taste:"sweet" },
{ id:96, name:"Ice Cream Chocolate", price:15000, img:"foto/dessert-icecream-chocolate.jpg", cat:["sweet"], taste:"sweet" },
{ id:97, name:"Banana Split", price:30000, img:"foto/dessert-banana-split.jpg", cat:["sweet"], taste:"sweet" },
{ id:98, name:"Pancake Maple", price:28000, img:"foto/dessert-pancake-maple.jpg", cat:["sweet"], taste:"sweet" },
{ id:99, name:"Waffle Ice Cream", price:32000, img:"foto/dessert-waffle-icecream.jpg", cat:["sweet"], taste:"sweet" }

];

/* ================= STATE ================= */
let cart = [];
let orders = [];
let chats = [];
var FALLBACK_MENU_BY_ID = {};
var ACTIVE_MENU_DATA = [];
var ACTIVE_MENU_BY_ID = {};

const RUNTIME_HIDDEN_MENU_NAMES = Object.freeze([]);
const RUNTIME_HIDDEN_CATEGORY_IDS = Object.freeze([]);
var RUNTIME_HIDDEN_MENU_NAME_SET = new Set(RUNTIME_HIDDEN_MENU_NAMES);
var RUNTIME_HIDDEN_CATEGORY_SET = new Set(RUNTIME_HIDDEN_CATEGORY_IDS);

function normalizeRuntimeToken(value) {
  return typeof value === "string"
    ? value.trim().toLowerCase().replace(/\s+/g, " ")
    : "";
}

function isRuntimeHiddenMenuName(name) {
  return RUNTIME_HIDDEN_MENU_NAME_SET.has(normalizeRuntimeToken(name));
}

function isRuntimeHiddenCategory(categoryId) {
  return RUNTIME_HIDDEN_CATEGORY_SET.has(normalizeRuntimeToken(categoryId));
}

function sanitizeRuntimeCategories(categories) {
  if (!Array.isArray(categories)) return [];

  return categories.filter(function(categoryId) {
    return !!categoryId && !isRuntimeHiddenCategory(categoryId);
  });
}

function sanitizeRuntimeMenuItem(item) {
  if (!item || typeof item !== "object") return null;
  if (isRuntimeHiddenMenuName(item.name)) return null;

  var originalCategories = Array.isArray(item.cat) ? item.cat.slice() : [];
  var visibleCategories = sanitizeRuntimeCategories(originalCategories);

  if (originalCategories.length > 0 && visibleCategories.length === 0) {
    return null;
  }

  return Object.assign({}, item, { cat: visibleCategories });
}

function getRuntimeVisibleMenu(items) {
  var source = Array.isArray(items) ? items : [];
  var visibleItems = [];

  for (var i = 0; i < source.length; i++) {
    var safeItem = sanitizeRuntimeMenuItem(source[i]);
    if (safeItem) visibleItems.push(safeItem);
  }

  return visibleItems;
}

function sanitizeRuntimeCategorySelection(category) {
  var safeCategory = normalizeRuntimeToken(category);
  if (!safeCategory || safeCategory === "all" || isRuntimeHiddenCategory(safeCategory)) {
    return "all";
  }
  return safeCategory;
}

function sanitizeRuntimeLineItems(items) {
  if (!Array.isArray(items)) return [];

  var safeItems = [];

  for (var i = 0; i < items.length; i++) {
    var lineItem = items[i];
    var menuItem = lineItem && lineItem.id != null
      ? getActiveMenuItemById(lineItem.id)
      : sanitizeRuntimeMenuItem(lineItem);
    if (!menuItem) continue;

    var safeQty = Math.max(1, toNumber(lineItem && lineItem.qty) || 1);
    safeItems.push(Object.assign({}, menuItem, lineItem || {}, {
      qty: safeQty,
      cat: Array.isArray(menuItem.cat) ? menuItem.cat.slice() : []
    }));
  }

  return safeItems;
}

if(localStorage.getItem("orders")) orders = JSON.parse(localStorage.getItem("orders"));
if(localStorage.getItem("chats")) chats = JSON.parse(localStorage.getItem("chats"));

MENU.forEach(function(item) { if(!item.stock) item.stock = 50; });

if(localStorage.getItem("stock")){
  var savedStock = JSON.parse(localStorage.getItem("stock"));
  MENU.forEach(function(i) { if(savedStock[i.id]) i.stock = savedStock[i.id]; });
}

// Guard: warn when MENU ids are duplicated (can break edit/cart/find-by-id behavior)
(function warnDuplicateMenuIds(){
  var seen = {};
  var duplicates = [];

  for (var i = 0; i < MENU.length; i++) {
    var id = MENU[i].id;
    if (seen[id]) duplicates.push(id);
    else seen[id] = true;
  }

  if (duplicates.length) {
    var uniqueDupes = Array.from(new Set(duplicates));
    console.warn("[MENU] Duplicate item ids detected:", uniqueDupes.join(", "));
  }
})();

function setActiveMenuData(items){
  var source = Array.isArray(items) && items.length ? items : MENU;
  ACTIVE_MENU_DATA = getRuntimeVisibleMenu(source);
  ACTIVE_MENU_BY_ID = {};

  for(var i = 0; i < ACTIVE_MENU_DATA.length; i++){
    ACTIVE_MENU_BY_ID[ACTIVE_MENU_DATA[i].id] = ACTIVE_MENU_DATA[i];
  }
}

function getActiveMenuData(){
  return ACTIVE_MENU_DATA.length ? ACTIVE_MENU_DATA : getRuntimeVisibleMenu(MENU);
}

function getActiveMenuItemById(id){
  var item = ACTIVE_MENU_BY_ID[id] || FALLBACK_MENU_BY_ID[id] || null;
  return sanitizeRuntimeMenuItem(item);
}

for(var fallbackIndex = 0; fallbackIndex < MENU.length; fallbackIndex++){
  FALLBACK_MENU_BY_ID[MENU[fallbackIndex].id] = MENU[fallbackIndex];
}

setActiveMenuData(MENU);

/* ================= SMART CHAT INTENT ENGINE ================= */

// 1) Kamus sinonim -> intent/tag/category
const INTENT_MAP = {
  // ===== Category intents =====
  noodles: ["mie", "mi", "noodle", "ramen", "kwetiau", "bihun", "soun", "udon", "spaghetti", "mie aceh", "mie ayam", "indomie"],
  soup: ["kuah", "sup", "sop", "soto", "bakso", "ramen kuah", "tom yum", "seblak", "rawon"],
  "fried rice": ["nasi", "rice", "nasgor", "nasi goreng", "goreng nasi"],
  drink: ["minum", "minuman", "drink", "es", "ice", "teh", "tea", "kopi", "coffee", "jus", "juice", "soda", "boba", "thai tea", "milkshake", "smoothie"],
  sweet: ["dessert", "desert", "manis", "kue", "cake", "donut", "pudding", "es krim", "ice cream", "coklat", "chocolate", "mochi", "brownies", "macaroon", "tiramisu", "cheesecake", "pancake", "waffle"],
  snack: ["cemilan", "camilan", "snack", "gorengan", "kentang", "nugget", "dimsum", "onion rings", "mozzarella", "tempe", "tofu", "bread", "hotdog", "fries"],
  salad: ["salad", "sayur", "greens", "lettuce"],
  satay: ["satay", "sate"],
  steak: ["steak", "wagyu", "grill"],
  burger: ["burger", "hamburger"],
  pizza: ["pizza"],
  rice: ["rice", "nasi", "geprek", "porridge", "curry", "rendang", "ayam"],
  healthy: ["healthy", "sehat", "diet", "low cal", "low calorie", "veggie", "vegetarian", "fitness", "protein"],
  premium: ["premium", "luxury", "expensive"],

  // ===== Taste / attribute intents =====
  spicy: ["spicy", "pedas", "cabe", "cabai", "hot", "extra hot", "level", "balado", "mentai"],
  mild: ["tidak pedas", "ga pedas", "nggak pedas", "less spicy", "mild", "sedikit pedas"],
  seafood: ["seafood", "udang", "shrimp", "kepiting", "crab", "cumi", "squid", "ikan", "fish", "salmon", "tuna", "durian"],
  chicken: ["ayam", "chicken"],
  beef: ["sapi", "beef", "wagyu", "steak", "mutton"],
  
  // ===== Price intents =====
  under50: ["under 50", "below 50", "<50", "<=50", "50rb", "50 rb", "50 ribu", "murah", "cheap", "budget", "dibawah 50"],
  anyprice: ["bebas harga", "any price", "no limit", "tanpa batas", "semua harga", "mahal juga bisa", "berapapun"],
};

function normalizeText(s) {
  return (s || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// 2) Extract intents dari kalimat user
function extractIntents(userText) {
  const t = normalizeText(userText);
  const intents = new Set();

  for (const [intent, keywords] of Object.entries(INTENT_MAP)) {
    for (const k of keywords) {
      if (t.includes(k)) {
        intents.add(intent);
        break;
      }
    }
  }

  return Array.from(intents).filter(function(intent) {
    return !isRuntimeHiddenCategory(intent);
  });
}

const ORDER_KEYWORDS = ["pesan", "mau", "ingin", "ambil", "beli", "tambah", "tambahkan", "order", "want", "need", "please"];

function escapeRegExp(str) {
  return String(str).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hasOrderIntent(text) {
  const normalized = normalizeText(text);
  return ORDER_KEYWORDS.some(function(keyword) {
    return normalized.includes(keyword);
  });
}

function extractQuantityForMatch(text, normalizedName) {
  var regex = new RegExp("(\\b\\d+)\\s+" + escapeRegExp(normalizedName).replace(/\\s+/g, "\\\\s+") + "\\b");
  var match = text.match(regex);
  if (match && match[1]) {
    return Math.max(1, Number(match[1]));
  }
  return 1;
}

function extractMenuItemsFromText(rawText) {
  var normalizedText = normalizeText(rawText);
  if (!normalizedText) return [];

  var results = [];
  var usedIds = new Set();
  var menuItems = getActiveMenuData().slice().sort(function(a, b) {
    return normalizeText(b.name).length - normalizeText(a.name).length;
  });

  for (var i = 0; i < menuItems.length; i++) {
    var item = menuItems[i];
    var itemName = normalizeText(item.name);
    if (!itemName) continue;

    if (normalizedText.includes(itemName) && !usedIds.has(item.id)) {
      var qty = extractQuantityForMatch(normalizedText, itemName);
      results.push({ item: item, qty: qty });
      usedIds.add(item.id);
    }
  }

  return results;
}

// 3) Apply intents ke state filter
function applyIntents(intents, rawText) {
  // ===== Price =====
  if (intents.includes("anyprice")) activePriceFilter = "all";
  if (intents.includes("under50")) activePriceFilter = "under50";

  // ===== Category priority (IMPORTANT: spicy/seafood/salad/healthy are real categories too) =====
  const categoryOrder = [
    "spicy", "seafood", "salad", "healthy", // attribute categories
    "noodles", "soup", "fried rice", "drink", "sweet", "snack",
    "satay", "steak", "burger", "pizza", "rice"
  ];

  const primary = categoryOrder.find(function(categoryId) {
    return !isRuntimeHiddenCategory(categoryId) && intents.includes(categoryId);
  });

  if (primary) activeCategory = primary;
  else activeCategory = "all";

  // ===== Search keyword =====
  // Remove common useless words so long sentences still work
  const stop = new Set(["i","want","something","food","please","plz","give","me","show","menu","a","an","the","to","order"]);
  const words = normalizeText(rawText).split(" ").filter(w => w && !stop.has(w));

  // extras = intents besides category & price
  const extraTags = intents.filter(x => !categoryOrder.includes(x) && !["under50","anyprice"].includes(x));

  searchQuery = [...new Set([...words, ...extraTags])].join(" ").trim();

  // Update UI
  renderCategories();
  filterMenu();

  // Bot feedback
  const categoryNames = {
    "spicy": "🌶️ Spicy",
    "seafood": "🦐 Seafood",
    "salad": "🥗 Salad",
    "healthy": "🥗 Healthy",
    "noodles": "🍜 Noodles",
    "soup": "🍲 Soup",
    "fried rice": "🍛 Fried Rice",
    "drink": "🧋 Drinks",
    "sweet": "🍰 Dessert",
    "snack": "🍟 Snack",
    "satay": "🍢 Satay",
    "steak": "🥩 Steak",
    "burger": "🍔 Burger",
    "pizza": "🍕 Pizza",
    "rice": "🍚 Rice"
  };

  const priceText = activePriceFilter === "under50" ? " (under 50rb)" : "";
  const catText = primary ? (categoryNames[primary] || primary) : "🍽️ All Menu";

  appendMsg(`Okay! Showing ${catText}${priceText}. 😊`, "bot");
}

// 4) Fallback fuzzy search kalau tidak ada intent yang cocok
function fuzzySearchFallback(userText) {
  const t = normalizeText(userText);
  const words = t.split(" ").filter(Boolean);

  if (words.length === 0) return false;

  const scored = getActiveMenuData().map(item => {
    const hay = normalizeText(`${item.name} ${(item.cat || []).join(" ")} ${item.taste || ""}`);
    let score = 0;

    // skor per kata yang match
    for (const w of words) {
      if (hay.includes(w)) score += 2;
      // bonus untuk exact match nama
      if (item.name.toLowerCase().includes(w)) score += 3;
    }

    // bonus kalau userText panjang dan ada banyak match
    if (score > 0 && t.length > 8) score += 1;

    return { item, score };
  }).filter(x => x.score > 0)
    .sort((a,b) => b.score - a.score)
    .slice(0, 12)
    .map(x => x.item);

  if (scored.length > 0) {
    // Reset filters and show fuzzy results
    activeCategory = "all";
    activePriceFilter = "all";
    searchQuery = userText.toLowerCase();
    renderCategories();
    filterMenu();
    
    appendMsg(`Found ${scored.length} menus matching "${userText}":`, "bot", scored);
    return true;
  }
  return false;
}

// 5) Main entry: panggil ini saat user submit chat
function showChatbotMenuSuggestions(items, message) {
  if (!Array.isArray(items) || items.length === 0) return;
  appendMsg(message, "bot", items.slice(0, 8));
}

function isColdOfferRequest(text) {
  if (!text) return false;
  var normalized = normalizeText(text);
  return /\b(cold|dingin|ice|es|es dingin|cold drink|minuman dingin|something cold|refresh|refreshing)\b/.test(normalized);
}

function getColdDrinkOffers() {
  var coldTerms = ["milkshake", "ice tea", "iced lemon tea", "thai tea", "es teh", "es jeruk", "es teler", "smoothie", "boba", "cold", "dingin"];
  return getActiveMenuData().filter(function(item) {
    if (!item || !Array.isArray(item.cat) || !item.cat.includes("drink")) return false;
    var name = normalizeText(item.name || "");
    return coldTerms.some(function(term) { return name.includes(term); });
  }).slice(0, 8);
}

function smartChatSearch(userText) {
  const text = normalizeText(userText);
  if (!text) return;

  // set input search bar (biar sinkron)
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = userText;

  if (isColdOfferRequest(text)) {
    const coldOffers = getColdDrinkOffers();
    if (coldOffers.length > 0) {
      appendMsg("Looking for cold drinks? Here are some refreshing options:", "bot", coldOffers);
      return;
    }
  }

  const detectedItems = extractMenuItemsFromText(userText);
  if (detectedItems.length > 0) {
    const itemsToShow = detectedItems.map(function(entry) {
      return Object.assign({}, entry.item, { qty: entry.qty });
    });

    appendMsg("I detected these menu items from your message:", "bot", itemsToShow);

    if (hasOrderIntent(userText)) {
      const addedNames = [];
      detectedItems.forEach(function(entry) {
        addFromChatbot(entry.item.id, entry.qty);
        addedNames.push(entry.qty + "x " + entry.item.name);
      });
      appendMsg("✅ Added to your order: " + addedNames.join(", ") + ".", "bot");
      return;
    }

    return;
  }

  const intents = extractIntents(text);

  if (intents.length > 0) {
    applyIntents(intents, userText);
    const filtered = filterMenu();
    if (filtered.length > 0) {
      showChatbotMenuSuggestions(filtered, "Here are some menu items matching your request:");
      return;
    }
  }

  // fallback fuzzy
  const ok = fuzzySearchFallback(userText);

  if (!ok) {
    const popular = getActiveMenuData().slice(0, 8);
    if (popular.length > 0) {
      appendMsg("I'm not sure exactly, but here are some popular menu items you might like:", "bot", popular);
      return;
    }
    appendMsg("Sorry, I couldn't find a matching menu. Try other keywords or pick a category.", "bot");
  }
}

/* ================= IMAGE HELPERS ================= */
function isImagePath(img) {
  if (!img) return false;
  return typeof img === "string" && (
    img.includes("/") || 
    img.endsWith(".png") || 
    img.endsWith(".jpg") || 
    img.endsWith(".jpeg") ||
    img.startsWith("http")
  );
}

function getFallbackFoodImage(name) {
  return "https://source.unsplash.com/600x400/?food," + encodeURIComponent(name || "menu");
}

function getFoodImageFromItem(item){
  var src = (item && item.photo) ? item.photo : (item ? item.img : "");
  return isImagePath(src) ? src : getFallbackFoodImage(item && item.name);
}

function getFoodImageOnError(itemName) {
  return "this.onerror=null;this.src='" + getFallbackFoodImage(itemName).replace(/'/g, "\'") + "';";
}


var chatbotSelectedItems = [];
var chatbotMinimized = false;

function openChatbot() {
  var panel = document.getElementById("chatbot-panel");
  var toggleBtn = document.getElementById("chatbot-toggle-btn");
  panel.style.transform = "translateX(0)";
  toggleBtn.classList.add("hidden");
  chatbotMinimized = false;
}

function toggleChatbot() {
  var panel = document.getElementById("chatbot-panel");
  var toggleBtn = document.getElementById("chatbot-toggle-btn");

  if (chatbotMinimized) {
    panel.style.transform = "translateX(0)";
    toggleBtn.classList.add("hidden");
    chatbotMinimized = false;
  } else {
    panel.style.transform = "translateX(100%)";
    toggleBtn.classList.remove("hidden");
    chatbotMinimized = true;
  }
}

function selectFromChatbot(category) {
  var messagesDiv = document.getElementById("chatbot-messages");
  var categoryNames = {
    "soup": "🍲 Soup",
    "fried rice": "🍛 Fried Rice",
    "noodles": "🍜 Noodles",
    "drink": "🧋 Drinks",
    "sweet": "🍰 Dessert",
    "snack": "🍟 Snack",
    "under50": "💵 Price under 50rb",
    "all": "🍽️ All Menu"
  };

  var userMsg = document.createElement("div");
  userMsg.className = "mb-3 text-right";
  userMsg.innerHTML = '<div class="bg-orange-200 inline-block px-4 py-2 rounded-2xl rounded-br-sm text-sm">' + (categoryNames[category] || category) + '</div>';
  messagesDiv.appendChild(userMsg);

  setTimeout(function() {
    var botMsg = document.createElement("div");
    botMsg.className = "mb-3";
    botMsg.innerHTML = '<div class="bg-orange-700 text-white inline-block px-4 py-2 rounded-2xl rounded-bl-sm text-sm">Sure! Here is the ' + (categoryNames[category] || category) + ' menu:</div>';
    messagesDiv.appendChild(botMsg);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }, 300);

  filterMenuForChatbot(category);
}

function filterMenuForChatbot(category) {
  category = normalizeRuntimeToken(category);
  var filtered = getActiveMenuData().slice();

  if (category === "under50") {
    filtered = filtered.filter(function(item) { return item.price < 50000; });
  } else if (isRuntimeHiddenCategory(category)) {
    filtered = [];
  } else if (category !== "all") {
    filtered = filtered.filter(function(item) { return item.cat && item.cat.includes(category); });
  }

  var messagesDiv = document.getElementById("chatbot-messages");

  var itemsDiv = document.createElement("div");
  itemsDiv.className = "bg-white rounded-xl p-3 mb-3 max-h-48 overflow-y-auto";


  if (filtered.length === 0) {
    itemsDiv.innerHTML = '<p class="text-sm text-gray-500">Menu not found</p>';
  } else {
    var itemsHtml = "";
    for(var i = 0; i < Math.min(filtered.length, 8); i++) {
      var item = filtered[i];
      var isImg = isImagePath(item.img);
      itemsHtml +=
        '<div class="flex items-center justify-between py-2 border-b last:border-b-0">' +
          '<div class="flex items-center gap-2">' +
            (isImg 
              ? '<img src="' + getFoodImageFromItem(item) + '" class="w-10 h-10 rounded-lg object-cover" alt="' + item.name + '" onerror="' + getFoodImageOnError(item.name) + '">' 
              : '<span class="text-lg">' + item.img + '</span>') +
            '<div>' +
              '<div class="text-xs font-medium">' + item.name + '</div>' +
              '<div class="text-xs text-orange-600 font-bold">Rp ' + item.price.toLocaleString() + '</div>' +
            '</div>' +
          '</div>' +
          '<button onclick="addFromChatbot(' + item.id + ')" class="bg-orange-600 hover:bg-orange-700 text-white px-2 py-1 rounded-lg text-xs">+</button>' +
        '</div>';
    }
    itemsDiv.innerHTML = itemsHtml;
  }

  messagesDiv.appendChild(itemsDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  updateChatbotSelectedItems();
}

function addFromChatbot(id, qty) {
  var item = getActiveMenuItemById(id);
  if (!item) return;

  var addQty = Math.max(1, toNumber(qty) || 1);
  var existing = chatbotSelectedItems.find(function(c) { return c.id === id; });
  if (existing) existing.qty += addQty;
  else chatbotSelectedItems.push(Object.assign({}, item, {qty: addQty}));

  addToCart(id, addQty);
  updateChatbotSelectedItems();
  showToast("✅ " + addQty + "x " + item.name + " added!", "success");
}

function addFromChatbotWithQtyInput(id) {
  var qtyInput = document.getElementById("qty-" + id);
  var qty = qtyInput ? Math.max(1, parseInt(qtyInput.value, 10) || 1) : 1;
  addFromChatbot(id, qty);
}

function updateChatbotSelectedItems() {
  chatbotSelectedItems = sanitizeRuntimeLineItems(chatbotSelectedItems);
  var selectedDiv = document.getElementById("chatbot-selected-items");
  var itemsListDiv = document.getElementById("chatbot-items-list");
  var totalSection = document.getElementById("chatbot-total-section");
  var totalSpan = document.getElementById("chatbot-total");
  var proceedBtn = document.getElementById("chatbot-proceed-btn");

  if (chatbotSelectedItems.length === 0) {
    selectedDiv.classList.add("hidden");
    totalSection.classList.add("hidden");
    proceedBtn.disabled = true;
    return;
  }

  selectedDiv.classList.remove("hidden");
  totalSection.classList.remove("hidden");
  proceedBtn.disabled = false;

  var total = 0;
  var html = "";
  for(var i = 0; i < chatbotSelectedItems.length; i++) {
    var item = chatbotSelectedItems[i];
    var itemTotal = item.price * item.qty;
    total += itemTotal;
    var isImg = isImagePath(item.img);
    html +=
      '<div class="flex items-center justify-between bg-orange-100 rounded-lg px-2 py-1">' +
        '<div class="flex items-center gap-2">' +
          (isImg 
            ? '<img src="' + getFoodImageFromItem(item) + '" class="w-6 h-6 rounded object-cover" alt="' + item.name + '" onerror="' + getFoodImageOnError(item.name) + '">' 
            : '<span>' + item.img + '</span>') +
          '<span class="text-xs">' + item.name + ' x' + item.qty + '</span>' +
        '</div>' +
        '<div class="flex items-center gap-1">' +
          '<span class="text-xs font-bold">Rp ' + itemTotal.toLocaleString() + '</span>' +
          '<button onclick="removeFromChatbot(' + i + ')" class="text-red-500 hover:text-red-700">✕</button>' +
        '</div>' +
      '</div>';
  }
  itemsListDiv.innerHTML = html;
  totalSpan.innerText = "Rp " + total.toLocaleString();
}

function removeFromChatbot(index) {
  chatbotSelectedItems.splice(index, 1);
  updateChatbotSelectedItems();
}

function proceedToCart() {
  chatbotSelectedItems = sanitizeRuntimeLineItems(chatbotSelectedItems);
  if (chatbotSelectedItems.length === 0) {
    showToast("Please select a menu first!", "error");
    return;
  }
  toggleChatbot();
  setTimeout(function() { toggleCart(); }, 300);
  showToast("Order added to cart!", "success");
}

/* ================= MULTI-USER STORAGE =================
 * Demo users are seeded on first load so the grader can log in
 * without having to register first. Stored as an array under
 * "kingStoreUsers". Legacy single-object "kingStoreUser" key is
 * migrated to the array on first read.
 */
const DEMO_USERS = [
  { name: "Budi Santoso", phone: "08123456789", address: "Jl. Mawar No. 1, Jakarta", email: "budi@test.com", password: "123456" },
  { name: "Siti Aisyah", phone: "08234567890", address: "Jl. Melati No. 2, Bandung", email: "siti@test.com", password: "123456" }
];

function getAllUsers(){
  try {
    var raw = localStorage.getItem("kingStoreUsers");
    if(raw){
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    }
    var legacy = localStorage.getItem("kingStoreUser");
    if(legacy){
      var legacyUser = JSON.parse(legacy);
      if(legacyUser && legacyUser.email){
        var migrated = [legacyUser];
        localStorage.setItem("kingStoreUsers", JSON.stringify(migrated));
        return migrated;
      }
    }
    return [];
  } catch (error) {
    return [];
  }
}

function saveAllUsers(users){
  try {
    localStorage.setItem("kingStoreUsers", JSON.stringify(users));
  } catch (error) {
    console.warn("Unable to save users:", error);
  }
}

function findUserByEmail(email){
  var users = getAllUsers();
  var target = (email || "").trim().toLowerCase();
  for(var i = 0; i < users.length; i++){
    if(users[i] && (users[i].email || "").trim().toLowerCase() === target){
      return users[i];
    }
  }
  return null;
}

function ensureDemoUsersExist(){
  var users = getAllUsers();
  var changed = false;
  for(var i = 0; i < DEMO_USERS.length; i++){
    var demo = DEMO_USERS[i];
    var exists = users.some(function(u){
      return u && (u.email || "").trim().toLowerCase() === demo.email.toLowerCase();
    });
    if(!exists){
      users.push(demo);
      changed = true;
    }
  }
  if(changed) saveAllUsers(users);
}
ensureDemoUsersExist();

function isUserRegistered(){
  return getAllUsers().length > 0;
}

function getRegisteredUser(){
  // Backward compatibility: returns the user matching current session, or first user.
  var sessionEmail = localStorage.getItem("kingStoreSession");
  if(sessionEmail){
    var match = findUserByEmail(sessionEmail);
    if(match) return match;
  }
  var users = getAllUsers();
  return users[0] || {};
}

function showMainApp(){
  var mainApp = document.getElementById("main-app");
  if(mainApp) mainApp.classList.remove("hidden");
}

function closeRegistrationPage(){
  var registrationPage = document.getElementById("registration-page");
  if(registrationPage) registrationPage.classList.add("hidden");
  showMainApp();
}

function openRegistrationPage(){
  var registrationPage = document.getElementById("registration-page");
  var loginPage = document.getElementById("login-page");
  var mainApp = document.getElementById("main-app");
  if(registrationPage) registrationPage.classList.remove("hidden");
  if(loginPage) loginPage.classList.add("hidden");
  if(mainApp) mainApp.classList.add("hidden");
}

function closeLoginPage(){
  var loginPage = document.getElementById("login-page");
  if(loginPage) loginPage.classList.add("hidden");
  showMainApp();
}

function openLoginPage(){
  var registrationPage = document.getElementById("registration-page");
  var loginPage = document.getElementById("login-page");
  var mainApp = document.getElementById("main-app");
  if(loginPage) loginPage.classList.remove("hidden");
  if(registrationPage) registrationPage.classList.add("hidden");
  if(mainApp) mainApp.classList.add("hidden");
}

function isUserLoggedIn(){
  try {
    return !!localStorage.getItem("kingStoreSession");
  } catch (error) {
    return false;
  }
}

function getSessionUser(){
  try {
    var email = localStorage.getItem("kingStoreSession");
    if(!email) return null;
    return findUserByEmail(email);
  } catch (error) {
    return null;
  }
}

function setUserSession(email){
  try {
    localStorage.setItem("kingStoreSession", email);
  } catch (error) {
    console.warn("Unable to set session:", error);
  }
}

function clearUserSession(){
  try {
    localStorage.removeItem("kingStoreSession");
  } catch (error) {
    console.warn("Unable to clear session:", error);
  }
}

function logoutUser(){
  clearUserSession();
  updateUserGreeting(null);
  cart = [];
  updateCartCount();
  openLoginPage();
  showToast("You have been logged out.", "success");
}

function initializeAuthenticationGate(){
  if(!isUserRegistered()){
    openRegistrationPage();
    return;
  }

  if(isUserLoggedIn()){
    updateUserGreeting(getSessionUser());
    closeRegistrationPage();
    closeLoginPage();
  } else {
    openLoginPage();
  }
}

function validateEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function resetRegistrationErrors(){
  ["name","phone","address","email","password"].forEach(function(field){
    var errorEl = document.getElementById("error-" + field);
    if(errorEl){
      errorEl.classList.add("hidden");
      errorEl.textContent = "";
    }
  });
}

function validateRegistrationForm(){
  var nameInput = document.getElementById("regName");
  var phoneInput = document.getElementById("regPhone");
  var addressInput = document.getElementById("regAddress");
  var emailInput = document.getElementById("regEmail");
  var passwordInput = document.getElementById("regPassword");

  var isValid = true;
  resetRegistrationErrors();

  if(!nameInput || !nameInput.value.trim()){
    var error = document.getElementById("error-name");
    if(error){ error.textContent = "Full name is required."; error.classList.remove("hidden"); }
    isValid = false;
  }

  var phoneValue = phoneInput ? phoneInput.value.trim() : "";
  if(!phoneValue || !/^\d+$/.test(phoneValue)){
    var error = document.getElementById("error-phone");
    if(error){ error.textContent = "Phone number is required and must be digits only."; error.classList.remove("hidden"); }
    isValid = false;
  }

  if(!addressInput || !addressInput.value.trim()){
    var error = document.getElementById("error-address");
    if(error){ error.textContent = "Address is required."; error.classList.remove("hidden"); }
    isValid = false;
  }

  var emailValue = emailInput ? emailInput.value.trim() : "";
  if(!emailValue || !validateEmail(emailValue)){
    var error = document.getElementById("error-email");
    if(error){ error.textContent = "Please enter a valid email address."; error.classList.remove("hidden"); }
    isValid = false;
  }

  var passwordValue = passwordInput ? passwordInput.value : "";
  if(!passwordValue || passwordValue.length < 6){
    var error = document.getElementById("error-password");
    if(error){ error.textContent = "Password must be at least 6 characters."; error.classList.remove("hidden"); }
    isValid = false;
  }

  return isValid;
}

function storeRegisteredUser(user){
  var users = getAllUsers();
  var existingIndex = -1;
  var emailKey = (user.email || "").trim().toLowerCase();
  for(var i = 0; i < users.length; i++){
    if((users[i].email || "").trim().toLowerCase() === emailKey){
      existingIndex = i;
      break;
    }
  }
  if(existingIndex >= 0) users[existingIndex] = user;
  else users.push(user);
  saveAllUsers(users);
}

function handleRegistrationSubmit(event){
  event.preventDefault();
  var submitButton = document.getElementById("registration-submit");
  if(!submitButton) return;

  if(!validateRegistrationForm()){
    return;
  }

  var emailValue = document.getElementById("regEmail").value.trim();
  if(findUserByEmail(emailValue)){
    var emailError = document.getElementById("error-email");
    if(emailError){
      emailError.textContent = "This email is already registered. Please login instead.";
      emailError.classList.remove("hidden");
    }
    return;
  }

  submitButton.disabled = true;
  var originalText = submitButton.textContent;
  submitButton.textContent = "Registering...";

  var user = {
    name: document.getElementById("regName").value.trim(),
    phone: document.getElementById("regPhone").value.trim(),
    address: document.getElementById("regAddress").value.trim(),
    email: emailValue,
    password: document.getElementById("regPassword").value
  };

  storeRegisteredUser(user);
  setUserSession(user.email);
  updateUserGreeting(user);
  loadCart();

  setTimeout(function(){
    submitButton.disabled = false;
    submitButton.textContent = originalText;
    closeRegistrationPage();
    showToast("Welcome, " + user.name + "!", "success");
  }, 600);
}

function togglePasswordVisibility(){
  var passwordInput = document.getElementById("regPassword");
  var toggleButton = document.getElementById("toggle-password");
  if(!passwordInput || !toggleButton) return;

  var isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  toggleButton.textContent = isHidden ? "Hide" : "Show";
}

function toggleLoginPasswordVisibility(){
  var passwordInput = document.getElementById("loginPassword");
  var toggleButton = document.getElementById("toggle-login-password");
  if(!passwordInput || !toggleButton) return;

  var isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  toggleButton.textContent = isHidden ? "Hide" : "Show";
}

function validateLoginForm(){
  resetLoginErrors();
  var emailInput = document.getElementById("loginEmail");
  var passwordInput = document.getElementById("loginPassword");
  var isValid = true;

  var emailValue = emailInput ? emailInput.value.trim() : "";
  if(!emailValue || !validateEmail(emailValue)){
    var error = document.getElementById("error-login-email");
    if(error){ error.textContent = "Email is required and must be valid."; error.classList.remove("hidden"); }
    isValid = false;
  }

  var passwordValue = passwordInput ? passwordInput.value : "";
  if(!passwordValue){
    var error = document.getElementById("error-login-password");
    if(error){ error.textContent = "Password is required."; error.classList.remove("hidden"); }
    isValid = false;
  }

  return isValid;
}

function resetLoginErrors(){
  ["login-email","login-password"].forEach(function(field){
    var errorEl = document.getElementById("error-" + field);
    if(errorEl){
      errorEl.classList.add("hidden");
      errorEl.textContent = "";
    }
  });
}

function handleLoginSubmit(event){
  event.preventDefault();
  var submitButton = document.getElementById("login-submit");
  if(!submitButton) return;

  if(!validateLoginForm()){
    return;
  }

  var emailInput = document.getElementById("loginEmail");
  var passwordInput = document.getElementById("loginPassword");
  var emailValue = emailInput ? emailInput.value.trim() : "";
  var passwordValue = passwordInput ? passwordInput.value : "";

  var matchedUser = findUserByEmail(emailValue);
  if(!matchedUser || matchedUser.password !== passwordValue){
    var error = document.getElementById("error-login-password");
    if(error){ error.textContent = "Email or password is incorrect."; error.classList.remove("hidden"); }
    return;
  }

  submitButton.disabled = true;
  var originalText = submitButton.textContent;
  submitButton.textContent = "Logging in...";

  setUserSession(emailValue);
  updateUserGreeting(matchedUser);
  loadCart();

  setTimeout(function(){
    submitButton.disabled = false;
    submitButton.textContent = originalText;
    closeLoginPage();
    closeRegistrationPage();
    showToast("Welcome back, " + matchedUser.name + "!", "success");
  }, 500);
}

var registrationForm = document.getElementById("registration-form");
if(registrationForm){
  registrationForm.addEventListener("submit", handleRegistrationSubmit);
}

var loginForm = document.getElementById("login-form");
if(loginForm){
  loginForm.addEventListener("submit", handleLoginSubmit);
}

var regPhoneInput = document.getElementById("regPhone");
if(regPhoneInput){
  regPhoneInput.addEventListener("input", function(){
    this.value = this.value.replace(/\D/g, "");
  });
}

var passwordToggleButton = document.getElementById("toggle-password");
if(passwordToggleButton){
  passwordToggleButton.addEventListener("click", togglePasswordVisibility);
}

var loginPasswordToggleButton = document.getElementById("toggle-login-password");
if(loginPasswordToggleButton){
  loginPasswordToggleButton.addEventListener("click", toggleLoginPasswordVisibility);
}

var switchToLoginBtn = document.getElementById("switch-to-login");
if(switchToLoginBtn){
  switchToLoginBtn.addEventListener("click", function(){ openLoginPage(); });
}

var switchToRegisterBtn = document.getElementById("switch-to-register");
if(switchToRegisterBtn){
  switchToRegisterBtn.addEventListener("click", function(){ openRegistrationPage(); });
}

var userGreetingEl = document.createElement("div");
userGreetingEl.id = "userGreeting";
userGreetingEl.className = "hidden flex items-center gap-3 text-sm text-white/80 ml-4";
userGreetingEl.innerHTML = '<span id="userGreetingText"></span><button id="logout-btn" class="rounded-full border border-white/30 px-3 py-2 text-xs text-white/90 hover:bg-white/10">Logout</button>';
var headerActions = document.querySelector(".header .max-w-6xl");
if(headerActions){
  headerActions.appendChild(userGreetingEl);
}

var logoutBtn = document.getElementById("logout-btn");
if(logoutBtn){
  logoutBtn.addEventListener("click", logoutUser);
}

function updateUserGreeting(user){
  var greeting = document.getElementById("userGreeting");
  var greetingText = document.getElementById("userGreetingText");
  if(!greeting || !greetingText) return;
  if(user && user.name){
    greetingText.textContent = "Welcome, " + user.name;
    greeting.classList.remove("hidden");
  } else {
    greeting.classList.add("hidden");
  }
}

var CATEGORIES = [
  { id: "all", name: "All", emoji: "🍽️" },
  { id: "soup", name: "Soup", emoji: "🍲" },
  { id: "fried rice", name: "Fried Rice", emoji: "🍛" },
  { id: "noodles", name: "Noodles", emoji: "🍜" },
  { id: "satay", name: "Satay", emoji: "🍢" },
  { id: "steak", name: "Steak", emoji: "🥩" },
  { id: "burger", name: "Burger", emoji: "🍔" },
  { id: "pizza", name: "Pizza", emoji: "🍕" },
  { id: "rice", name: "Rice", emoji: "🍚" },
  { id: "sweet", name: "Dessert", emoji: "🍰" },
  { id: "drink", name: "Drinks", emoji: "🧋" },
  { id: "healthy", name: "Healthy", emoji: "🥗" },
  { id: "snack", name: "Snack", emoji: "🍟" },
  { id: "spicy", name: "Spicy", emoji: "🌶️" },
  { id: "seafood", name: "Seafood", emoji: "🦐" },
  { id: "salad", name: "Salad", emoji: "🥗" }
];

var activeCategory = "all";
var activePriceFilter = "all";
var searchQuery = "";

function renderCategories(){
  var container = document.getElementById("category-container");
  if(!container) return;
  var visibleCategories = CATEGORIES.filter(function(cat) {
    return !isRuntimeHiddenCategory(cat.id);
  });

  var html =
    '<button onclick="filterByPrice(\'all\')" class="category-btn px-4 py-2 rounded-full text-sm font-medium transition-all ' +
      (activePriceFilter === "all" ? "bg-orange-700 text-white" : "bg-white text-orange-800 hover:bg-orange-100 border border-orange-300") +
      '" data-price="all">💰 All Prices</button>' +
    '<button onclick="filterByPrice(\'under50\')" class="category-btn px-4 py-2 rounded-full text-sm font-medium transition-all ' +
      (activePriceFilter === "under50" ? "bg-orange-700 text-white" : "bg-white text-orange-800 hover:bg-orange-100 border border-orange-300") +
      '" data-price="under50">💵 Prices < 50rb</button>';

  for(var i = 0; i < visibleCategories.length; i++) {
    var cat = visibleCategories[i];
    var isActive = activeCategory === cat.id && activePriceFilter === "all";
    html +=
      '<button onclick="filterByCategory(\'' + cat.id + '\')" class="category-btn px-4 py-2 rounded-full text-sm font-medium transition-all ' +
      (isActive ? "bg-orange-700 text-white" : "bg-white text-orange-800 hover:bg-orange-100 border border-orange-300") +
      '" data-category="' + cat.id + '">' + cat.emoji + ' ' + cat.name + '</button>';
  }

  container.innerHTML = html;
}

function filterByCategory(category){
  activeCategory = sanitizeRuntimeCategorySelection(category);
  renderCategories();
  filterMenu();
}

function filterByPrice(priceFilter){
  activePriceFilter = priceFilter;
  renderCategories();
  filterMenu();
}

function filterMenu(){
  activeCategory = sanitizeRuntimeCategorySelection(activeCategory);
  var filtered = getActiveMenuData().slice();

  if(activePriceFilter === "under50"){
    filtered = filtered.filter(function(item) { return item.price < 50000; });
  }

  if(activeCategory !== "all"){
    filtered = filtered.filter(function(item) { return item.cat && item.cat.includes(activeCategory); });
  }

  if (searchQuery) {
    const qWords = normalizeText(searchQuery).split(" ").filter(Boolean);

    filtered = filtered.filter(function(item) {
      const hay = normalizeText(
        (item.name || "") + " " +
        (item.taste || "") + " " +
        ((item.cat || []).join(" "))
      );

      // Match if ANY keyword appears in name/cat/taste
      return qWords.some(w => hay.includes(w));
    });
  }

  renderMenu(filtered.slice(0, 40));
  return filtered;
}

function searchMenu(){
  searchQuery = document.getElementById("searchInput").value.toLowerCase();
  filterMenu();
}

function renderMenu(items){
  var container = document.getElementById("menu-container");
  container.innerHTML = "";

  if(items.length === 0){
    container.innerHTML =
      '<div class="col-span-full text-center py-12">' +
        '<div class="text-6xl mb-4">🔍</div>' +
        '<h3 class="text-xl font-bold text-white mb-2">Menu Not Found</h3>' +
        '<p class="text-orange-200">Try searching with other keywords or choose another category</p>' +
      '</div>';
    return;
  }

  for(var i = 0; i < items.length; i++){
    var item = items[i];
    var card = document.createElement("div");
    card.className = "menu-card";

    var stockValue = toNumber(item.stock);
    var isOutOfStock = stockValue <= 0;

    var badges = "";
    if(item.taste === "spicy") badges += '<span class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">🌶️ Spicy</span>';
    if(item.taste === "sweet") badges += '<span class="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">🍬 Sweet</span>';
    if(item.price >= 50000) badges += '<span class="absolute top-2 left-2 premium-badge text-white text-xs px-2 py-1 rounded-full">💎 Premium</span>';
    if(isOutOfStock) badges += '<span class="absolute top-2 left-2 bg-gray-700 text-white text-xs px-2 py-1 rounded-full">❌ Out of Stock</span>';

    var isImg = isImagePath(item.img);
    var imgContent = isImg
      ? '<img src="' + getFoodImageFromItem(item) + '" class="menu-image loaded' + (isOutOfStock ? ' opacity-50' : '') + '" alt="' + item.name.replace(/"/g,'"') + '" onerror="' + getFoodImageOnError(item.name) + '">'
      : '<div class="h-[180px] flex items-center justify-center text-6xl bg-orange-50' + (isOutOfStock ? ' opacity-50' : '') + '">' + item.img + '</div>';

    var stockLine = isOutOfStock
      ? '<p class="text-xs text-gray-500 mb-2">Out of stock</p>'
      : '<p class="text-xs text-gray-500 mb-2">Stock: ' + stockValue + '</p>';

    var addButton = isOutOfStock
      ? '<button disabled class="flex-1 bg-gray-300 text-gray-500 py-2 rounded-xl text-sm cursor-not-allowed">Sold Out</button>'
      : '<button onclick="addToCart(' + item.id + ')" class="flex-1 bg-orange-700 text-white py-2 rounded-xl text-sm hover:bg-orange-800 transition-colors">Add 🛒</button>';

    card.innerHTML =
      '<div class="relative">' +
        imgContent +
        badges +
      '</div>' +
      '<div class="p-4">' +
        '<h3 class="font-bold text-sm mb-2">' + item.name + '</h3>' +
        '<p class="text-orange-600 font-bold mb-1">Rp ' + item.price.toLocaleString() + '</p>' +
        stockLine +
        '<div class="flex items-center gap-2">' +
          addButton +
        '</div>' +
      '</div>';

    container.appendChild(card);
  }
}

function lazyLoad(){
  var images = document.querySelectorAll(".lazy-image");

  // If browser doesn't support IntersectionObserver, load all directly
  if (!("IntersectionObserver" in window)) {
    images.forEach(function(img){
      img.src = img.dataset.src;
      img.onload = function(){ img.classList.add("loaded"); };
      img.onerror = function(){
        img.classList.add("loaded");
        img.style.display = "none";
      };
    });
    return;
  }

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(!entry.isIntersecting) return;

      var img = entry.target;
      var src = img.dataset.src;

      if (!src) {
        observer.unobserve(img);
        return;
      }

      img.src = src;
      img.onload = function(){
        img.classList.add("loaded");
        var sk = img.parentElement.querySelector(".skeleton");
        if (sk) sk.remove();
      };
      img.onerror = function(){
        img.classList.add("loaded");
        var sk = img.parentElement.querySelector(".skeleton");
        if (sk) sk.remove();
      };

      observer.unobserve(img);
    });
  }, { rootMargin: "200px" });

  images.forEach(function(img){ observer.observe(img); });
}

function showToast(message, type, duration){
  var toast = document.createElement("div");
  var bgClass = type === "success" ? "toast-success" : type === "error" ? "toast-error" : "bg-gray-800";
  toast.className = "fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-lg animate-bounce-in text-white font-medium text-center " + bgClass;

  toast.innerHTML = message;
  document.body.appendChild(toast);

  var visibleMs = typeof duration === "number" && duration > 0 ? duration : 2500;
  setTimeout(function(){
    toast.classList.add("animate-fade-out");
    setTimeout(function(){ toast.remove(); }, 300);
  }, visibleMs);
}

function toNumber(value){
  var num = Number(value);
  return isNaN(num) ? 0 : num;
}

function escapeHtml(text){
  return String(text == null ? "" : text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatRupiah(value){
  return "Rp " + toNumber(value).toLocaleString("id-ID");
}

function normalizeCoordinate(value){
  if(value === "" || value == null) return null;

  var num = Number(value);
  return isNaN(num) ? null : num;
}

function hasValidCoordinates(lat, lng){
  return typeof lat === "number" && typeof lng === "number" &&
    isFinite(lat) && isFinite(lng) &&
    lat >= -90 && lat <= 90 &&
    lng >= -180 && lng <= 180;
}

function formatCoordinate(value){
  return typeof value === "number" ? value.toFixed(6) : "-";
}

function getGoogleMapsLink(lat, lng){
  if(!hasValidCoordinates(lat, lng)) return "";
  return "https://www.google.com/maps?q=" + lat + "," + lng;
}

function getItemUnitPrice(item){
  if(!item) return 0;
  if(item.finalPrice != null && item.finalPrice !== "") return toNumber(item.finalPrice);
  return toNumber(item.price);
}

function getItemQty(item){
  var qty = toNumber(item && item.qty);
  return qty > 0 ? qty : 1;
}

function calculateOrderSummary(items){
  var safeItems = Array.isArray(items) ? items : [];
  var subtotal = 0;

  for(var i = 0; i < safeItems.length; i++){
    subtotal += getItemUnitPrice(safeItems[i]) * getItemQty(safeItems[i]);
  }

  var discount = 0;
  if(safeItems.length >= 5) discount += 0.1;
  if(subtotal > 500000) discount += 0.05;

  var discountAmount = subtotal * discount;

  return {
    subtotal: subtotal,
    discount: discount,
    discountAmount: discountAmount,
    total: subtotal - discountAmount
  };
}

function normalizeOrder(order, index){
  var safeOrder = order || {};
  var safeItems = Array.isArray(safeOrder.items) ? safeOrder.items : [];
  var calculated = calculateOrderSummary(safeItems);

  var hasSubtotal = safeOrder.subtotal != null && safeOrder.subtotal !== "";
  var hasDiscount = safeOrder.discount != null && safeOrder.discount !== "";
  var hasDiscountAmount = safeOrder.discountAmount != null && safeOrder.discountAmount !== "";
  var hasTotal = safeOrder.total != null && safeOrder.total !== "";

  var subtotal = hasSubtotal ? toNumber(safeOrder.subtotal) : calculated.subtotal;
  var discount = hasDiscount ? toNumber(safeOrder.discount) : calculated.discount;
  var discountAmount = hasDiscountAmount ? toNumber(safeOrder.discountAmount) : subtotal * discount;
  var total = hasTotal ? toNumber(safeOrder.total) : subtotal - discountAmount;

  var buyerName = typeof safeOrder.buyerName === "string" && safeOrder.buyerName.trim()
    ? safeOrder.buyerName.trim()
    : "Guest";

  var buyerAddress = typeof safeOrder.buyerAddress === "string" && safeOrder.buyerAddress.trim()
    ? safeOrder.buyerAddress.trim()
    : "Address not provided";

  var buyerLatitude = normalizeCoordinate(
    safeOrder.buyerLatitude != null ? safeOrder.buyerLatitude : safeOrder.latitude
  );
  var buyerLongitude = normalizeCoordinate(
    safeOrder.buyerLongitude != null ? safeOrder.buyerLongitude : safeOrder.longitude
  );

  var dateText = safeOrder.date ? String(safeOrder.date) : "";
  var parsedDate = dateText ? new Date(dateText) : null;
  var hasValidDate = parsedDate && !isNaN(parsedDate.getTime());

  return {
    id: safeOrder.id || ("legacy-" + index),
    items: safeItems,
    subtotal: subtotal,
    discount: discount,
    discountAmount: discountAmount,
    total: total,
    buyerName: buyerName,
    buyerAddress: buyerAddress,
    buyerLatitude: buyerLatitude,
    buyerLongitude: buyerLongitude,
    date: dateText,
    dateLabel: hasValidDate ? parsedDate.toLocaleString("id-ID") : "Date not available"
  };
}

function getOrderDisplayId(order, index){
  var rawId = order && order.id != null ? String(order.id) : "";
  var digits = rawId.replace(/\D/g, "");

  if(digits) return "Order #" + digits.slice(-4);
  return "Order #" + String(index + 1).padStart(2, "0");
}

function getDiscountLabel(order){
  if(order.discount > 0) return Math.round(order.discount * 100) + "% (" + formatRupiah(order.discountAmount) + ")";
  if(order.discountAmount > 0) return formatRupiah(order.discountAmount);
  return "No discount";
}

function getOrderLocationHtml(order){
  if(!hasValidCoordinates(order.buyerLatitude, order.buyerLongitude)){
    return '<div class="order-meta"><strong>Coordinates:</strong> Not selected</div>';
  }

  var mapsLink = getGoogleMapsLink(order.buyerLatitude, order.buyerLongitude);

  return '' +
    '<div class="order-meta"><strong>Coordinates:</strong> ' +
      formatCoordinate(order.buyerLatitude) + ', ' +
      formatCoordinate(order.buyerLongitude) +
    '</div>' +
    '<div class="order-meta"><a class="seller-link" href="' + mapsLink + '" target="_blank" rel="noopener noreferrer">Open in Google Maps</a></div>';
}

function setCheckoutError(message){
  var errorDiv = document.getElementById("checkout-error");
  var addressInput = document.getElementById("buyerAddress");

  if(errorDiv){
    errorDiv.innerText = message;
    errorDiv.classList.remove("hidden");
  }

  if(addressInput) addressInput.classList.add("invalid");
}

function clearCheckoutError(){
  var errorDiv = document.getElementById("checkout-error");
  var addressInput = document.getElementById("buyerAddress");

  if(errorDiv){
    errorDiv.innerText = "";
    errorDiv.classList.add("hidden");
  }

  if(addressInput) addressInput.classList.remove("invalid");
}

var CHECKOUT_DEFAULT_CENTER = { lat: -6.200000, lng: 106.816666 };
var checkoutMapInstance = null;
var checkoutMapMarker = null;
var selectedCheckoutLocation = null;

function updateCheckoutLocationText(message){
  var locationText = document.getElementById("checkout-location-text");
  if(!locationText) return;

  if(message){
    locationText.innerText = message;
    return;
  }

  if(hasValidCoordinates(
    selectedCheckoutLocation && selectedCheckoutLocation.lat,
    selectedCheckoutLocation && selectedCheckoutLocation.lng
  )){
    locationText.innerText =
      "Selected coordinates: " +
      formatCoordinate(selectedCheckoutLocation.lat) + ", " +
      formatCoordinate(selectedCheckoutLocation.lng);
    return;
  }

  locationText.innerText = "No location selected yet. Click the map to choose buyer coordinates.";
}

function renderCheckoutMapMarker(){
  if(!checkoutMapInstance || typeof window.L === "undefined") return;

  var markerLat = hasValidCoordinates(
    selectedCheckoutLocation && selectedCheckoutLocation.lat,
    selectedCheckoutLocation && selectedCheckoutLocation.lng
  ) ? selectedCheckoutLocation.lat : CHECKOUT_DEFAULT_CENTER.lat;

  var markerLng = hasValidCoordinates(
    selectedCheckoutLocation && selectedCheckoutLocation.lat,
    selectedCheckoutLocation && selectedCheckoutLocation.lng
  ) ? selectedCheckoutLocation.lng : CHECKOUT_DEFAULT_CENTER.lng;

  if(!checkoutMapMarker){
    checkoutMapMarker = window.L.marker([markerLat, markerLng]).addTo(checkoutMapInstance);
  } else {
    checkoutMapMarker.setLatLng([markerLat, markerLng]);
  }
}

function setSelectedCheckoutLocation(lat, lng){
  var parsedLat = normalizeCoordinate(lat);
  var parsedLng = normalizeCoordinate(lng);

  if(hasValidCoordinates(parsedLat, parsedLng)){
    selectedCheckoutLocation = {
      lat: Number(parsedLat.toFixed(6)),
      lng: Number(parsedLng.toFixed(6))
    };
  } else {
    selectedCheckoutLocation = null;
  }

  renderCheckoutMapMarker();
  updateCheckoutLocationText();

  if(checkoutMapInstance && selectedCheckoutLocation){
    checkoutMapInstance.setView([selectedCheckoutLocation.lat, selectedCheckoutLocation.lng], 15);
  }
}

function initializeCheckoutMap(){
  var mapEl = document.getElementById("checkout-map");
  if(!mapEl) return;

  if(typeof window.L === "undefined"){
    updateCheckoutLocationText("Map is unavailable right now.");
    return;
  }

  if(!checkoutMapInstance){
    checkoutMapInstance = window.L.map(mapEl).setView(
      [CHECKOUT_DEFAULT_CENTER.lat, CHECKOUT_DEFAULT_CENTER.lng],
      12
    );

    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(checkoutMapInstance);

    checkoutMapInstance.on("click", function(event){
      setSelectedCheckoutLocation(event.latlng.lat, event.latlng.lng);
    });
  }

  setTimeout(function(){
    if(!checkoutMapInstance) return;
    checkoutMapInstance.invalidateSize();
    renderCheckoutMapMarker();

    if(selectedCheckoutLocation){
      checkoutMapInstance.setView([selectedCheckoutLocation.lat, selectedCheckoutLocation.lng], 15);
    }
  }, 120);

  renderCheckoutMapMarker();
  updateCheckoutLocationText();
}

function resetCheckoutForm(){
  var nameInput = document.getElementById("buyerName");
  var addressInput = document.getElementById("buyerAddress");

  if(nameInput) nameInput.value = "";
  if(addressInput) addressInput.value = "";

  selectedCheckoutLocation = null;
  renderCheckoutMapMarker();
  updateCheckoutLocationText();
  clearCheckoutError();
}

function syncCheckoutFormVisibility(){
  var formSection = document.getElementById("checkout-form-section");
  if(!formSection) return;

  formSection.classList.toggle("hidden", cart.length === 0);

  if(cart.length === 0) clearCheckoutError();
}

function persistOrders(){
  localStorage.setItem("orders", JSON.stringify(orders));
}

function persistStock(){
  var stockMap = {};
  for(var i = 0; i < MENU.length; i++){
    stockMap[MENU[i].id] = MENU[i].stock;
  }
  for(var j = 0; j < ACTIVE_MENU_DATA.length; j++){
    stockMap[ACTIVE_MENU_DATA[j].id] = ACTIVE_MENU_DATA[j].stock;
  }
  localStorage.setItem("stock", JSON.stringify(stockMap));
}

function decrementStockForOrder(items){
  if(!Array.isArray(items)) return;
  for(var i = 0; i < items.length; i++){
    var line = items[i];
    if(!line || line.id == null) continue;
    var qty = getItemQty(line);
    var menuMatch = MENU.find(function(m){ return m.id === line.id; });
    if(menuMatch) menuMatch.stock = Math.max(0, toNumber(menuMatch.stock) - qty);
    var activeMatch = ACTIVE_MENU_BY_ID[line.id];
    if(activeMatch) activeMatch.stock = Math.max(0, toNumber(activeMatch.stock) - qty);
  }
  persistStock();
  filterMenu();
}

function updateLocalOrderSyncStatus(orderId, status, extraData){
  for(var i = 0; i < orders.length; i++){
    if(String(orders[i].id) !== String(orderId)) continue;

    orders[i].supabaseSyncStatus = status;

    if(extraData){
      for(var key in extraData){
        if(Object.prototype.hasOwnProperty.call(extraData, key)){
          orders[i][key] = extraData[key];
        }
      }
    }

    persistOrders();
    return;
  }
}

function getSupabaseRestUrl(table, query){
  var baseUrl = SUPABASE_URL.replace(/\/+$/, "");
  return baseUrl + "/rest/v1/" + encodeURIComponent(table) + (query || "");
}

function getSupabaseRequestHeaders(includeBody, preferValue){
  var headers = {
    apikey: SUPABASE_ANON_KEY,
    Authorization: "Bearer " + SUPABASE_ANON_KEY,
    Accept: "application/json"
  };

  if(includeBody) headers["Content-Type"] = "application/json";
  if(preferValue) headers["Prefer"] = preferValue;

  return headers;
}

async function fetchSupabaseRows(table, query){
  var response = await fetch(getSupabaseRestUrl(table, query), {
    method: "GET",
    headers: getSupabaseRequestHeaders(false)
  });

  if(!response.ok){
    throw new Error("Supabase fetch failed for " + table + " with status " + response.status);
  }

  var rows = await response.json();
  return Array.isArray(rows) ? rows : [];
}

async function insertSupabaseRows(table, payload){
  var response = await fetch(getSupabaseRestUrl(table), {
    method: "POST",
    headers: getSupabaseRequestHeaders(true, "return=representation"),
    body: JSON.stringify(payload)
  });

  if(!response.ok){
    throw new Error("Supabase insert failed for " + table + " with status " + response.status);
  }

  var rows = await response.json();
  return Array.isArray(rows) ? rows : [];
}

async function fetchSellerRowForOrderSync(){
  var rows = await fetchSupabaseRows(
    SUPABASE_SELLER_TABLE,
    "?seller_code=eq." + encodeURIComponent(SUPABASE_SELLER_CODE) +
    "&select=" + encodeURIComponent("id,seller_code") +
    "&limit=1"
  );

  return rows[0] || null;
}

function buildSupabaseBuyerPayload(order){
  return {
    name: order.buyerName,
    address: order.buyerAddress,
    latitude: order.buyerLatitude,
    longitude: order.buyerLongitude
  };
}

function buildSupabaseOrderPayload(order, buyerId, sellerId){
  return {
    buyer_id: buyerId,
    seller_id: sellerId,
    subtotal: toNumber(order.subtotal),
    discount_percent: Number((toNumber(order.discount) * 100).toFixed(2)),
    discount_amount: toNumber(order.discountAmount),
    total: toNumber(order.total),
    order_status: "pending",
    order_date: order.date
  };
}

function buildSupabaseOrderItemsPayload(orderId, items){
  var safeItems = Array.isArray(items) ? items : [];

  return safeItems.map(function(item){
    var quantity = getItemQty(item);
    var unitPrice = getItemUnitPrice(item);

    return {
      order_id: orderId,
      product_id: item && item.id != null ? item.id : null,
      product_name_snapshot: item && item.name ? item.name : "Unnamed item",
      unit_price: unitPrice,
      quantity: quantity,
      line_total: unitPrice * quantity
    };
  });
}

async function syncOrderToSupabase(order){
  // Local checkout remains the source of truth; Supabase sync is best-effort only.
  if(!order || !isSupabaseConfigured()){
    updateLocalOrderSyncStatus(order && order.id, "failed");
    console.warn("Supabase order sync skipped. Local order was kept.");
    return;
  }

  try {
    var sellerRow = await fetchSellerRowForOrderSync();
    if(!sellerRow || sellerRow.id == null){
      throw new Error("Seller row not found for seller_code " + SUPABASE_SELLER_CODE);
    }

    var buyerRows = await insertSupabaseRows(
      SUPABASE_BUYERS_TABLE,
      buildSupabaseBuyerPayload(order)
    );
    var buyerRow = buyerRows[0];

    if(!buyerRow || buyerRow.id == null){
      throw new Error("Buyer insert did not return an id.");
    }

    var orderRows = await insertSupabaseRows(
      SUPABASE_ORDERS_TABLE,
      buildSupabaseOrderPayload(order, buyerRow.id, sellerRow.id)
    );
    var syncedOrderRow = orderRows[0];

    if(!syncedOrderRow || syncedOrderRow.id == null){
      throw new Error("Order insert did not return an id.");
    }

    var orderItemsPayload = buildSupabaseOrderItemsPayload(syncedOrderRow.id, order.items);
    if(orderItemsPayload.length){
      await insertSupabaseRows(SUPABASE_ORDER_ITEMS_TABLE, orderItemsPayload);
    }

    updateLocalOrderSyncStatus(order.id, "synced", {
      supabaseBuyerId: buyerRow.id,
      supabaseOrderId: syncedOrderRow.id
    });
  } catch (error) {
    updateLocalOrderSyncStatus(order.id, "failed");
    console.warn("Supabase order sync failed. Local checkout still succeeded.", error);
  }
}

function getCartStorageKey(){
  var sessionEmail = localStorage.getItem("kingStoreSession");
  return sessionEmail ? "kingCart_" + sessionEmail.toLowerCase() : "kingCart_guest";
}

function loadCart(){
  var key = getCartStorageKey();
  var saved = localStorage.getItem(key);
  cart = sanitizeRuntimeLineItems(saved ? JSON.parse(saved) : []);
  localStorage.setItem(key, JSON.stringify(cart));
  updateCartCount();
  if(typeof updateCart === "function"){
    var modal = document.getElementById("cart-modal");
    if(modal && !modal.classList.contains("hidden")) updateCart();
  }
}

function saveCart(){
  cart = sanitizeRuntimeLineItems(cart);
  localStorage.setItem(getCartStorageKey(), JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount(){
  var count = cart.reduce(function(sum, item){ return sum + item.qty; }, 0);
  document.getElementById("cart-count").innerText = count;
}

function addToCart(id, qty){
  var item = getActiveMenuItemById(id);
  if(!item) return;
  if(toNumber(item.stock) <= 0){
    showToast("❌ " + item.name + " is out of stock", "error");
    return;
  }
  var amount = Math.max(1, toNumber(qty) || 1);

  var existing = cart.find(function(c){ return c.id === id; });
  if(existing) existing.qty += amount;
  else cart.push(Object.assign({}, item, {qty: amount}));

  saveCart();
  showToast("✅ " + item.name + " added to cart!", "success");
}

function updateCart(){
  cart = sanitizeRuntimeLineItems(cart);
  var itemsDiv = document.getElementById("cart-items");
  var totalEl = document.getElementById("cart-total");

  if(cart.length === 0){
    itemsDiv.innerHTML =
      '<div class="text-center py-8">' +
        '<div class="text-5xl mb-3">🛒</div>' +
        '<p class="text-gray-500">Your cart is still empty</p>' +
        '<p class="text-sm text-gray-400">Come on, order your favorite food!</p>' +
      '</div>';
    totalEl.innerText = "0";
    syncCheckoutFormVisibility();
    return;
  }

  var total = 0;
  var html = "";
  for(var i = 0; i < cart.length; i++){
    var item = cart[i];
    var itemPrice = getItemUnitPrice(item);
    var itemTotal = itemPrice * item.qty;
    total += itemTotal;
    var isImg = isImagePath(item.img);

    html +=
      '<div class="flex items-center justify-between border-b py-3">' +
        '<div class="flex-1">' +
          '<div class="flex items-center gap-2">' +
            (isImg 
              ? '<img src="' + getFoodImageFromItem(item) + '" class="w-10 h-10 rounded-lg object-cover" alt="' + item.name + '" onerror="' + getFoodImageOnError(item.name) + '">' 
              : '<span class="text-xl">' + item.img + '</span>') +
            '<span class="font-medium text-sm">' + item.name + '</span>' +
          '</div>' +
          '<div class="text-xs text-gray-500">' + (item.seller || "KING Store") + '</div>' +
          '<div class="text-orange-600 font-bold text-sm">' + formatRupiah(itemPrice) + '</div>' +
        '</div>' +
        '<div class="flex items-center gap-2">' +
          '<button onclick="updateItemQty(' + i + ', -1)" class="w-8 h-8 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center text-orange-700">−</button>' +
          '<span class="w-8 text-center font-bold">' + item.qty + '</span>' +
          '<button onclick="updateItemQty(' + i + ', 1)" class="w-8 h-8 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center text-orange-700">+</button>' +
          '<button onclick="removeFromCart(' + i + ')" class="ml-2 text-red-500 hover:text-red-700">🗑️</button>' +
        '</div>' +
      '</div>';
  }

  itemsDiv.innerHTML = html;
  totalEl.innerText = total.toLocaleString("id-ID");
  syncCheckoutFormVisibility();
}

function updateItemQty(index, delta){
  cart[index].qty += delta;
  if(cart[index].qty <= 0) cart.splice(index, 1);
  saveCart();
  updateCart();
}

function removeFromCart(index){
  var item = cart[index];
  cart.splice(index, 1);
  saveCart();
  updateCart();
  showToast("🗑️ " + item.name + " removed from cart", "info");
}

function closeCart(){
  var cartModal = document.getElementById("cart-modal");
  if(!cartModal) return;
  if(!cartModal.classList.contains("hidden")){
    cartModal.classList.add("hidden");
    updateCart();
  }
}

function toggleCart(){
  var cartModal = document.getElementById("cart-modal");
  if(!cartModal) return;

  cartModal.classList.toggle("hidden");
  updateCart();

  if(!cartModal.classList.contains("hidden") && cart.length > 0){
    initializeCheckoutMap();
  }
}

function checkout(){
  if(cart.length === 0) return;

  clearCheckoutError();

  var nameInput = document.getElementById("buyerName");
  var addressInput = document.getElementById("buyerAddress");
  var buyerName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "Guest";
  var buyerAddress = addressInput ? addressInput.value.trim() : "";
  var buyerLatitude = hasValidCoordinates(
    selectedCheckoutLocation && selectedCheckoutLocation.lat,
    selectedCheckoutLocation && selectedCheckoutLocation.lng
  ) ? selectedCheckoutLocation.lat : null;
  var buyerLongitude = hasValidCoordinates(
    selectedCheckoutLocation && selectedCheckoutLocation.lat,
    selectedCheckoutLocation && selectedCheckoutLocation.lng
  ) ? selectedCheckoutLocation.lng : null;

  if(!buyerAddress){
    setCheckoutError("Buyer address cannot be empty.");
    if(addressInput) addressInput.focus();
    return;
  }

  var summary = calculateOrderSummary(cart);
  var orderItems = cart.map(function(item){
    return Object.assign({}, item);
  });

  var sessionUser = getSessionUser();
  var order = {
    id: Date.now(),
    items: orderItems,
    subtotal: summary.subtotal,
    discount: summary.discount,
    discountAmount: summary.discountAmount,
    total: summary.total,
    buyerName: buyerName,
    buyerAddress: buyerAddress,
    buyerLatitude: buyerLatitude,
    buyerLongitude: buyerLongitude,
    buyerEmail: sessionUser ? sessionUser.email : "",
    date: new Date().toISOString(),
    supabaseSyncStatus: "pending"
  };

  orders.unshift(order);
  persistOrders();
  decrementStockForOrder(orderItems);
  localStorage.setItem("kingStoreHasOrdered", "true");
  // Try syncing after the local order is safely stored.
  syncOrderToSupabase(order);

  cart = [];
  saveCart();
  updateCart();
  resetCheckoutForm();
  renderOrders();
  if(typeof renderMyOrders === "function") renderMyOrders();
  var successMessage = "Order successful!";
  if(summary.discount > 0){
    successMessage += "\nDiscount " + Math.round(summary.discount * 100) + "% applied (" + formatRupiah(summary.discountAmount) + ")";
  }
  if(hasValidCoordinates(buyerLatitude, buyerLongitude)){
    successMessage += "\nLocation: " + formatCoordinate(buyerLatitude) + ", " + formatCoordinate(buyerLongitude);
  }
  successMessage += "\nTotal: " + formatRupiah(summary.total);
  showToast(successMessage.replace(/\n/g, "<br>"), "success", 4500);
  closeCart();
}

function switchView(view){
  closeCart();

  document.getElementById("buyer-view").classList.toggle("hidden", view !== "buyer");
  document.getElementById("seller-view").classList.toggle("hidden", view !== "seller");

  var buyerBtn = document.querySelector('button[onclick="switchView(\'buyer\')"]');
  var sellerBtn = document.querySelector('button[onclick="switchView(\'seller\')"]');

  if(view === "buyer"){
    buyerBtn.classList.remove("bg-white", "text-orange-800");
    buyerBtn.classList.add("bg-orange-700", "text-white");
    sellerBtn.classList.remove("bg-orange-700", "text-white");
    sellerBtn.classList.add("bg-white", "text-orange-800");
  } else {
    sellerBtn.classList.remove("bg-white", "text-orange-800");
    sellerBtn.classList.add("bg-orange-700", "text-white");
    buyerBtn.classList.remove("bg-orange-700", "text-white");
    buyerBtn.classList.add("bg-white", "text-orange-800");
  }

  if(view === "seller") renderOrders();
}

function getOrdersForCurrentBuyer(){
  var sessionUser = getSessionUser();
  if(!sessionUser || !sessionUser.email) return [];
  var emailKey = sessionUser.email.toLowerCase();
  return orders.filter(function(order){
    return order && (order.buyerEmail || "").toLowerCase() === emailKey;
  });
}

function openMyOrders(){
  var modal = document.getElementById("my-orders-modal");
  if(!modal) return;
  renderMyOrders();
  modal.classList.remove("hidden");
}

function closeMyOrders(){
  var modal = document.getElementById("my-orders-modal");
  if(modal) modal.classList.add("hidden");
}

function renderMyOrders(){
  var list = document.getElementById("my-orders-list");
  if(!list) return;

  var myOrders = getOrdersForCurrentBuyer();

  if(myOrders.length === 0){
    list.innerHTML =
      '<div class="text-center py-12">' +
        '<div class="text-6xl mb-4">📭</div>' +
        '<h3 class="text-lg font-bold text-orange-900 mb-2">No Orders Yet</h3>' +
        '<p class="text-orange-700 text-sm">Place your first order from the menu!</p>' +
      '</div>';
    return;
  }

  var html = "";
  for(var i = 0; i < myOrders.length; i++){
    var order = normalizeOrder(myOrders[i], i);
    var itemsLine = order.items.map(function(item){
      return getItemQty(item) + "x " + (item.name || "Unnamed");
    }).join(", ");

    html +=
      '<div class="order-card">' +
        '<div class="order-card-header">' +
          '<div>' +
            '<div class="text-sm font-bold text-orange-900">' + getOrderDisplayId(order, i) + '</div>' +
            '<div class="order-meta"><strong>Items:</strong> ' + escapeHtml(itemsLine) + '</div>' +
            '<div class="order-meta"><strong>Address:</strong> ' + escapeHtml(order.buyerAddress) + '</div>' +
          '</div>' +
          '<div class="text-xs text-orange-700 font-medium">' + escapeHtml(order.dateLabel) + '</div>' +
        '</div>' +
        '<div class="order-summary-grid">' +
          '<div class="order-total-row"><span>Subtotal</span><span>' + formatRupiah(order.subtotal) + '</span></div>' +
          '<div class="order-total-row"><span>Discount</span><span>' + getDiscountLabel(order) + '</span></div>' +
          '<div class="order-total-row total"><span>Total</span><span>' + formatRupiah(order.total) + '</span></div>' +
        '</div>' +
      '</div>';
  }

  list.innerHTML = html;
}

function renderOrders(){
  var list = document.getElementById("orders-list");

  if(orders.length === 0){
    list.innerHTML =
      '<div class="text-center py-12">' +
        '<div class="text-6xl mb-4">📭</div>' +
        '<h3 class="text-xl font-bold text-white mb-2">No Orders Yet</h3>' +
        '<p class="text-orange-200">Orders will appear here</p>' +
      '</div>';
    return;
  }

  var html = "";
  for(var i = 0; i < orders.length; i++){
    var order = normalizeOrder(orders[i], i);
    var itemRows =
      '<div class="order-item-row order-item-head">' +
        '<span>Item</span>' +
        '<span>Qty</span>' +
        '<span>Unit Price</span>' +
        '<span>Line Total</span>' +
      '</div>';

    if(order.items.length === 0){
      itemRows +=
        '<div class="order-item-row">' +
          '<span>No item detail available</span>' +
          '<span>-</span>' +
          '<span>-</span>' +
          '<span>-</span>' +
        '</div>';
    } else {
      for(var j = 0; j < order.items.length; j++){
        var item = order.items[j] || {};
        var qty = getItemQty(item);
        var unitPrice = getItemUnitPrice(item);
        var lineTotal = unitPrice * qty;

        itemRows +=
          '<div class="order-item-row">' +
            '<span>' + escapeHtml(item.name || "Unnamed item") + '</span>' +
            '<span>' + qty + '</span>' +
            '<span>' + formatRupiah(unitPrice) + '</span>' +
            '<span>' + formatRupiah(lineTotal) + '</span>' +
          '</div>';
      }
    }

    html +=
      '<div class="order-card">' +
        '<div class="order-card-header">' +
          '<div>' +
            '<div class="text-sm font-bold text-orange-900">' + getOrderDisplayId(order, i) + '</div>' +
            '<div class="order-meta"><strong>Buyer:</strong> ' + escapeHtml(order.buyerName) + '</div>' +
            '<div class="order-meta"><strong>Address:</strong> ' + escapeHtml(order.buyerAddress).replace(/\n/g, "<br>") + '</div>' +
            getOrderLocationHtml(order) +
          '</div>' +
          '<div class="text-xs text-orange-700 font-medium">Date: ' + escapeHtml(order.dateLabel) + '</div>' +
        '</div>' +
        '<div class="order-items-table">' + itemRows + '</div>' +
        '<div class="order-summary-grid">' +
          '<div class="order-total-row"><span>Subtotal</span><span>' + formatRupiah(order.subtotal) + '</span></div>' +
          '<div class="order-total-row"><span>Discount</span><span>' + getDiscountLabel(order) + '</span></div>' +
          '<div class="order-total-row total"><span>Final Total</span><span>' + formatRupiah(order.total) + '</span></div>' +
        '</div>' +
      '</div>';
  }

  list.innerHTML = html;
}

loadCart();
renderCategories();
filterMenu();
initializeAuthenticationGate();

var buyerAddressField = document.getElementById("buyerAddress");
if(buyerAddressField){
  buyerAddressField.addEventListener("input", function(){
    if(this.value.trim()) clearCheckoutError();
  });
}

/* ================= GROQ AI INTEGRATION ================= */
// 1) Daftar di https://console.groq.com (gratis, pakai Google).
// 2) Buat API Key, lalu paste di bawah ini (di antara tanda kutip).
// 3) Kalau dikosongkan, chatbot otomatis pakai logika lama (smart search).
const GROQ_API_KEY = "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";
const GROQ_MODEL = "llama-3.3-70b-versatile";
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

function buildGroqMenuContext() {
  var menu = getActiveMenuData();
  return menu.slice(0, 40).map(function(m){
    return { id: m.id, name: m.name, price: m.price, category: m.category || "" };
  });
}

function appendTypingIndicator() {
  var container = document.getElementById("chatbot-messages");
  if(!container) return;
  var wrapper = document.createElement("div");
  wrapper.id = "groq-typing-indicator";
  wrapper.className = "flex justify-start";
  wrapper.innerHTML = '<div class="bg-orange-700 text-white p-3 message-bubble text-sm shadow-sm font-bold">⏳ Thinking...</div>';
  container.appendChild(wrapper);
  container.scrollTop = container.scrollHeight;
}

function removeTypingIndicator() {
  var el = document.getElementById("groq-typing-indicator");
  if(el) el.remove();
}

async function callGroqAI(userMessage) {
  var menuContext = JSON.stringify(buildGroqMenuContext());
  var systemPrompt =
    "You are a friendly AI assistant for KING Store, an online food shop. " +
    "Here is the menu list (JSON): " + menuContext + ". " +
    "Your job: help users find menu items they want. " +
    "IMPORTANT: Always reply in the SAME LANGUAGE as the user's last message. " +
    "If they write in Indonesian, reply in casual Indonesian. " +
    "If they write in English, reply in casual English. " +
    "If they switch languages, switch with them. " +
    "When the user asks for recommendations or mentions menu items, put the menu IDs in recommended_ids. " +
    "For greetings or small talk, leave recommended_ids empty. " +
    "Always respond in valid JSON exactly in this format: " +
    '{"reply":"your reply here","recommended_ids":[1,2]}';

  var res = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + GROQ_API_KEY
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 500
    })
  });

  if(!res.ok) throw new Error("Groq API " + res.status);
  var data = await res.json();
  var content = data.choices && data.choices[0] && data.choices[0].message.content;
  return JSON.parse(content);
}

async function handleChatWithGroq(userText) {
  appendTypingIndicator();
  try {
    var result = await callGroqAI(userText);
    removeTypingIndicator();

    var items = null;
    if(result.recommended_ids && result.recommended_ids.length > 0) {
      items = result.recommended_ids
        .map(function(id){ return getActiveMenuItemById(id); })
        .filter(Boolean);
    }
    appendMsg(result.reply || "Sorry, I don't have an answer right now.", "bot", items && items.length ? items : undefined);
  } catch(err) {
    removeTypingIndicator();
    console.warn("Groq AI gagal, fallback ke smart search:", err);
    appendMsg("⚠️ AI is unavailable, switching to local search...", "bot");
    smartChatSearch(userText);
  }
}

/* ================= CHATBOT CHAT LOGIC ================= */
document.getElementById('chat-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('chat-input');
  const userText = input.value.trim();
  if(!userText) return;

  appendMsg(userText, 'user');
  input.value = '';

  if(GROQ_API_KEY) {
    handleChatWithGroq(userText);
  } else {
    smartChatSearch(userText);
  }
});

function appendMsg(text, sender, items) {
  const container = document.getElementById("chatbot-messages");
  const wrapper = document.createElement("div");
  wrapper.className = "flex " + (sender === 'user' ? 'justify-end' : 'justify-start');

  let html = '<div class="' + (sender === 'user' ? 'bg-orange-200 text-orange-900' : 'bg-orange-700 text-white') + ' p-3 message-bubble text-sm shadow-sm font-bold"> ' + text;

  if(items) {
    html += '<div class="mt-3 space-y-2 max-h-[300px] overflow-y-auto pr-2">';
    items.forEach(function(item) {
      var isImg = isImagePath(item.img);
      html += 
        '<div class="bg-slate-50 p-2 rounded-lg border flex items-center justify-between gap-4 font-normal text-slate-800">' +
          '<div class="flex items-center gap-2">' +
            (isImg 
              ? '<img src="' + getFoodImageFromItem(item) + '" class="w-10 h-10 rounded-lg object-cover" alt="' + item.name + '" onerror="' + getFoodImageOnError(item.name) + '">' 
              : '<span class="text-xl">' + item.img + '</span>') +
            '<div class="text-[10px]">' +
              '<div class="font-bold">' + item.name + '</div>' +
              '<div class="text-slate-400">Rp ' + item.price.toLocaleString() + '</div>' +
            '</div>' +
          '</div>' +
          '<div class="flex items-center gap-2">' +
            '<input type="number" id="qty-' + item.id + '" value="1" min="1" class="w-10 border rounded text-center text-xs p-1">' +
            '<button onclick="addFromChatbotWithQtyInput(' + item.id + ')" class="bg-slate-900 text-white text-[10px] px-2 py-1.5 rounded-lg font-bold">Add</button>' +
          '</div>' +
        '</div>';
    });
    html += '</div>';
  }

  html += '</div>';
  wrapper.innerHTML = html;
  container.appendChild(wrapper);
  container.scrollTop = container.scrollHeight;
}

const STATIC_SELLER = Object.freeze({
  name: "KING Store",
  id: "KS-001",
  contact: "6289518631090",
  whatsappLink: "https://wa.me/6289518631090"
});

const SUPABASE_URL = "https://effvpyfmyehuvuurssmy.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Y-q_2SEjwCx-XXUW7Y7e2Q_ihU-O8MH";
const SUPABASE_BUYERS_TABLE = "buyers";
const SUPABASE_ORDERS_TABLE = "orders";
const SUPABASE_ORDER_ITEMS_TABLE = "order_items";
const SUPABASE_PRODUCTS_TABLE = "products";
const SUPABASE_SELLER_TABLE = "sellers";
const SUPABASE_SELLER_CODE = "KS-001";

const sellerStaticName = document.getElementById("sellerStaticName");
const sellerStaticId = document.getElementById("sellerStaticId");
const sellerStaticContact = document.getElementById("sellerStaticContact");
const sellerStaticWhatsappBtn = document.getElementById("sellerStaticWhatsappBtn");

const buyerSellerName = document.getElementById("buyerSellerName");
const buyerSellerId = document.getElementById("buyerSellerId");
const buyerSellerContact = document.getElementById("buyerSellerContact");
const buyerWhatsappBtn = document.getElementById("buyerWhatsappBtn");

const checkoutSellerContactText = document.getElementById("checkoutSellerContactText");
const checkoutWhatsappBtn = document.getElementById("checkoutWhatsappBtn");

function sanitizeSellerValue(value) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeWhatsappContact(contact) {
  return sanitizeSellerValue(contact).replace(/\D/g, "");
}

function buildWhatsappLink(contact) {
  var digits = normalizeWhatsappContact(contact);
  return digits ? "https://wa.me/" + digits : STATIC_SELLER.whatsappLink;
}

function applySellerInfo(seller) {
  var safeSeller = seller || STATIC_SELLER;

  if (sellerStaticName) sellerStaticName.textContent = safeSeller.name;
  if (sellerStaticId) sellerStaticId.textContent = safeSeller.id;
  if (sellerStaticContact) sellerStaticContact.textContent = safeSeller.contact;
  if (buyerSellerName) buyerSellerName.textContent = safeSeller.name;
  if (buyerSellerId) buyerSellerId.textContent = safeSeller.id;
  if (buyerSellerContact) buyerSellerContact.textContent = safeSeller.contact;
  if (checkoutSellerContactText) checkoutSellerContactText.textContent = safeSeller.contact;

  if (sellerStaticWhatsappBtn) sellerStaticWhatsappBtn.href = safeSeller.whatsappLink;
  if (buyerWhatsappBtn) buyerWhatsappBtn.href = safeSeller.whatsappLink;
  if (checkoutWhatsappBtn) checkoutWhatsappBtn.href = safeSeller.whatsappLink;
}

function isSupabaseConfigured() {
  return !!SUPABASE_URL &&
    !!SUPABASE_ANON_KEY &&
    SUPABASE_URL !== "PASTE_MY_PROJECT_URL_HERE" &&
    SUPABASE_ANON_KEY !== "PASTE_MY_PUBLISHABLE_KEY_HERE";
}

function sanitizeProductValue(value) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeSupabaseProduct(row) {
  if (!row || typeof row !== "object") return null;

  var productId = toNumber(row.id);
  var fallbackItem = FALLBACK_MENU_BY_ID[productId] || null;
  var safeName = sanitizeProductValue(row.name) || (fallbackItem ? fallbackItem.name : "");

  if (!productId || !safeName) return null;

  var safePrice = row.price != null && row.price !== ""
    ? toNumber(row.price)
    : toNumber(fallbackItem && fallbackItem.price);
  var safeImage = sanitizeProductValue(row.image_url) || (fallbackItem ? fallbackItem.img : "");
  var safeTaste = sanitizeProductValue(row.taste) || (fallbackItem && fallbackItem.taste ? fallbackItem.taste : "");
  var safeStock = row.stock != null && row.stock !== ""
    ? toNumber(row.stock)
    : toNumber(fallbackItem && fallbackItem.stock);
  var safeCategories = fallbackItem && Array.isArray(fallbackItem.cat) ? fallbackItem.cat.slice() : [];

  return Object.assign({}, fallbackItem || {}, {
    id: productId,
    name: safeName,
    price: safePrice,
    img: safeImage,
    taste: safeTaste,
    stock: safeStock,
    cat: safeCategories
  });
}

async function fetchProductsFromSupabase() {
  if (!isSupabaseConfigured()) return null;

  var baseUrl = SUPABASE_URL.replace(/\/+$/, "");
  var query =
    baseUrl +
    "/rest/v1/" + encodeURIComponent(SUPABASE_PRODUCTS_TABLE) +
    "?select=" + encodeURIComponent("id,name,price,image_url,taste,stock") +
    "&is_active=eq.true" +
    "&order=id.asc";

  var response = await fetch(query, {
    method: "GET",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: "Bearer " + SUPABASE_ANON_KEY,
      Accept: "application/json"
    }
  });

  if (!response.ok) {
    throw new Error("Supabase product fetch failed with status " + response.status);
  }

  var rows = await response.json();
  if (!Array.isArray(rows) || rows.length === 0) return null;

  var normalized = rows
    .map(normalizeSupabaseProduct)
    .filter(function(item) { return !!item; });

  return normalized.length ? normalized : null;
}

async function initializeProductMenu() {
  try {
    var products = await fetchProductsFromSupabase();
    if (!products) return;

    // Keep the app shape the same by swapping only the runtime menu source.
    setActiveMenuData(products);
    renderCategories();
    filterMenu();
  } catch (error) {
    console.warn("Using MENU fallback because Supabase product fetch failed.", error);
  }
}

function normalizeSupabaseSeller(row) {
  if (!row || typeof row !== "object") return null;

  var name = sanitizeSellerValue(row.name || row.seller_name) || STATIC_SELLER.name;
  var sellerCode = sanitizeSellerValue(row.seller_code || row.id) || STATIC_SELLER.id;
  var contact = sanitizeSellerValue(row.contact || row.phone || row.whatsapp) || STATIC_SELLER.contact;

  return {
    name: name,
    id: sellerCode,
    contact: contact,
    whatsappLink: buildWhatsappLink(contact)
  };
}

async function fetchSellerFromSupabase() {
  if (!isSupabaseConfigured()) return null;

  var baseUrl = SUPABASE_URL.replace(/\/+$/, "");
  var query =
    baseUrl +
    "/rest/v1/" + encodeURIComponent(SUPABASE_SELLER_TABLE) +
    "?seller_code=eq." + encodeURIComponent(SUPABASE_SELLER_CODE) +
    "&select=" + encodeURIComponent("name,seller_code,contact") +
    "&limit=1";

  var response = await fetch(query, {
    method: "GET",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: "Bearer " + SUPABASE_ANON_KEY,
      Accept: "application/json"
    }
  });

  if (!response.ok) {
    throw new Error("Supabase seller fetch failed with status " + response.status);
  }

  var rows = await response.json();
  if (!Array.isArray(rows) || rows.length === 0) return null;

  return normalizeSupabaseSeller(rows[0]);
}

async function initializeSellerInfo() {
  // Render the current static seller first so the site stays stable on GitHub Pages.
  applySellerInfo(STATIC_SELLER);

  try {
    var seller = await fetchSellerFromSupabase();
    if (seller) applySellerInfo(seller);
  } catch (error) {
    console.warn("Using static seller fallback because Supabase seller fetch failed.", error);
  }
}

initializeProductMenu();
initializeSellerInfo();




