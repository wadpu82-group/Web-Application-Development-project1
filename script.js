/* ================= MENU DATA ================= */
const MENU = [

/* ================= SOUP ================= */
{ id:1, name:"Seblak Level 1", price:15000, img:"assets/images/soup/seblak-level-1.png", cat:["soup","spicy"], taste:"spicy" },
{ id:2, name:"Seblak Level 3", price:18000, img:"assets/images/soup/seblak-level-3.png", cat:["soup","spicy"], taste:"spicy" },
{ id:3, name:"Seblak Level 5", price:20000, img:"assets/images/soup/seblak-level-5.png", cat:["soup","spicy"], taste:"spicy" },
{ id:4, name:"Bakso Urat", price:20000, img:"assets/images/soup/bakso-urat.png", cat:["soup"], taste:"medium" },
{ id:5, name:"Soto Ayam", price:22000, img:"assets/images/soup/soto-ayam.png", cat:["soup"], taste:"medium" },
{ id:6, name:"Rawon", price:30000, img:"assets/images/soup/rawon.png", cat:["soup"], taste:"medium" },
{ id:7, name:"Tom Yum Seafood", price:38000, img:"assets/images/soup/tom-yum-seafood.png", cat:["soup","seafood"], taste:"spicy" },
{ id:8, name:"Chicken Ramen", price:35000, img:"assets/images/soup/chicken-ramen.png", cat:["soup","ramen"], taste:"medium" },
{ id:9, name:"Beef Ramen", price:40000, img:"assets/images/soup/beef-ramen.png", cat:["soup","ramen"], taste:"medium" },
{ id:10, name:"Seafood Ramen", price:42000, img:"assets/images/soup/seafood-ramen.png", cat:["soup","ramen"], taste:"spicy" },

/* ================= FRIED RICE ================= */
{ id:11, name:"Chicken Fried Rice", price:22000, img:"assets/images/fried-rice/chicken-fried-rice.png", cat:["fried rice"], taste:"medium" },
{ id:12, name:"Seafood Fried Rice", price:35000, img:"assets/images/fried-rice/seafood-fried-rice.png", cat:["fried rice","spicy"], taste:"spicy" },
{ id:13, name:"Mutton Fried Rice", price:30000, img:"assets/images/fried-rice/mutton-fried-rice.png", cat:["fried rice","spicy"], taste:"spicy" },
{ id:14, name:"Green Chili Fried Rice", price:25000, img:"assets/images/fried-rice/green-chili-fried-rice.png", cat:["fried rice","spicy"], taste:"spicy" },
{ id:15, name:"Vegetarian Fried Rice", price:20000, img:"assets/images/fried-rice/vegetarian-fried-rice.png", cat:["fried rice"], taste:"medium" },

/* ================= NOODLES ================= */
{ id:16, name:"Fried Noodles", price:18000, img:"assets/images/noodles/fried-noodles.png", cat:["noodles"], taste:"medium" },
{ id:17, name:"Kwetiau Goreng", price:20000, img:"assets/images/noodles/kwetiau-goreng.png", cat:["noodles"], taste:"medium" },
{ id:18, name:"Mie Aceh", price:28000, img:"assets/images/noodles/mie-aceh.png", cat:["noodles","spicy"], taste:"spicy" },
{ id:19, name:"Mie Ayam", price:15000, img:"assets/images/noodles/mie-ayam.png", cat:["noodles"], taste:"medium" },
{ id:20, name:"Indomie Special", price:12000, img:"assets/images/noodles/indomie-special.png", cat:["noodles"], taste:"medium" },

// NEW MENU - Bihun & Kwetiau
{ id:21, name:"Bihun Goreng", price:12000, img:"assets/img/menu/noodles-bihun-goreng.jpg", cat:["noodles"], taste:"medium" },
{ id:22, name:"Kwetiau Siram Seafood", price:35000, img:"assets/img/menu/noodles-kwetiau-siram-seafood.jpg", cat:["noodles","seafood"], taste:"medium" },
{ id:23, name:"Kwetiau Siram Vegetarian", price:33000, img:"assets/img/menu/noodles-kwetiau-siram-vegetarian.jpg", cat:["noodles","healthy"], taste:"medium" },
{ id:24, name:"Kwetiau Goreng Seafood", price:26000, img:"assets/img/menu/noodles-kwetiau-goreng-seafood.jpg", cat:["noodles","seafood"], taste:"medium" },

/* ================= SATAY ================= */
{ id:46, name:"Chicken Satay", price:25000, img:"assets/images/satay/chicken-satay.png", cat:["satay"], taste:"medium" },
{ id:47, name:"Mutton Satay", price:45000, img:"assets/images/satay/mutton-satay.png", cat:["satay"], taste:"medium" },
{ id:48, name:"Taichan Satay", price:22000, img:"assets/images/satay/taichan-satay.png", cat:["satay","spicy"], taste:"spicy" },
{ id:49, name:"Chicken Skin Satay", price:20000, img:"assets/images/satay/chicken-skin-satay.png", cat:["satay"], taste:"medium" },
{ id:50, name:"Beef Satay Special", price:50000, img:"assets/images/satay/beef-satay-special.png", cat:["satay"], taste:"medium" },

/* ================= STEAK & GRILL ================= */
{ id:26, name:"Wagyu Tenderloin", price:250000, img:"assets/images/steak/wagyu-tenderloin.png", cat:["steak"], taste:"medium" },
{ id:27, name:"Wagyu Sirloin", price:220000, img:"assets/images/steak/wagyu-sirloin.png", cat:["steak"], taste:"medium" },
{ id:28, name:"Wagyu Rib Eye", price:235000, img:"assets/images/steak/wagyu-rib-eye.png", cat:["steak"], taste:"medium" },
{ id:29, name:"Grilled Salmon", price:75000, img:"assets/images/grill/grilled-salmon.png", cat:["grilled"], taste:"medium" },
{ id:30, name:"Grilled Chicken", price:30000, img:"assets/images/grill/grilled-chicken.png", cat:["grilled"], taste:"medium" },

/* ================= FAST FOOD ================= */
{ id:31, name:"Cheese Burger", price:35000, img:"assets/images/burger/cheese-burger.png", cat:["burger"], taste:"medium" },
{ id:32, name:"Double Burger", price:45000, img:"assets/images/burger/double-burger.png", cat:["burger"], taste:"medium" },
{ id:33, name:"French Fries", price:18000, img:"assets/images/snacks/french-fries.png", cat:["snack"], taste:"medium" },
{ id:34, name:"Hotdog Classic", price:25000, img:"assets/images/snacks/hotdog-classic.png", cat:["snack"], taste:"medium" },
{ id:35, name:"BBQ Chicken Pizza", price:80000, img:"assets/images/pizza/bbq-chicken-pizza.png", cat:["pizza"], taste:"medium" },

/* ================= RICE & EGG ================= */
{ id:36, name:"Ayam Geprek", price:20000, img:"assets/images/rice/ayam-geprek.png", cat:["rice","spicy"], taste:"spicy" },
{ id:37, name:"Spicy Egg Balado + Rice", price:15000, img:"assets/images/rice/spicy-egg-balado-rice.png", cat:["rice","spicy"], taste:"spicy" },
{ id:38, name:"Fried Egg + Rice", price:12000, img:"assets/images/rice/fried-egg-rice.png", cat:["rice"], taste:"medium" },
{ id:39, name:"Cheese Omelet", price:18000, img:"assets/images/egg/cheese-omelet.png", cat:["egg"], taste:"medium" },
{ id:40, name:"Chicken Porridge", price:15000, img:"assets/images/porridge/chicken-porridge.png", cat:["porridge"], taste:"sweet" },

/* ================= DESSERT ================= */
{ id:41, name:"Chocolate Glaze Donut", price:8000, img:"assets/images/dessert/chocolate-glaze-donut.png", cat:["sweet"], taste:"sweet" },
{ id:42, name:"Frosted Vanilla Creme Donut", price:8000, img:"assets/images/dessert/frosted-vanilla-creme-donut.png", cat:["sweet"], taste:"sweet" },
{ id:43, name:"Red Velvet Cream Cheese Donut", price:9000, img:"assets/images/dessert/red-velvet-cream-cheese-donut.png", cat:["sweet"], taste:"sweet" },
{ id:44, name:"Tiramisu Donut", price:9000, img:"assets/images/dessert/tiramisu-donut.png", cat:["sweet"], taste:"sweet" },
{ id:45, name:"Strawberry Donut", price:8000, img:"assets/images/dessert/strawberry-donut.png", cat:["sweet"], taste:"sweet" },
{ id:46, name:"Brownies Fudge", price:25000, img:"assets/images/dessert/brownies-fudge.png", cat:["sweet"], taste:"sweet" },
{ id:47, name:"Cheesecake", price:32000, img:"assets/images/dessert/cheesecake.png", cat:["sweet"], taste:"sweet" },
{ id:48, name:"Matcha Cheese Cake", price:30000, img:"assets/images/dessert/matcha-cheese-cake.png", cat:["sweet"], taste:"sweet" },
{ id:49, name:"Pandan Cake", price:28000, img:"assets/images/dessert/pandan-cake.png", cat:["sweet"], taste:"sweet" },
{ id:50, name:"Macaroons Box", price:30000, img:"assets/images/dessert/macaroons-box.png", cat:["sweet"], taste:"sweet" },
{ id:51, name:"Tiramisu", price:35000, img:"assets/images/dessert/tiramisu.png", cat:["sweet"], taste:"sweet" },
{ id:52, name:"Strawberry Mochi", price:35000, img:"assets/images/dessert/strawberry-mochi.png", cat:["sweet"], taste:"sweet" },
{ id:53, name:"DUBAI CHOCOLATE MOCHI PISTACHIO", price:35000, img:"assets/images/dessert/dubai-chocolate-mochi-pistachio.png", cat:["sweet"], taste:"sweet" },
{ id:54, name:"Cheesecake Brownies", price:25000, img:"assets/images/dessert/cheesecake-brownies.png", cat:["sweet"], taste:"sweet" },

/* ================= DRINK ================= */
{ id:55, name:"Thai Tea", price:18000, img:"assets/images/drinks/thai-tea.png", cat:["drink"], taste:"sweet" },
{ id:56, name:"Iced Lemon Tea", price:15000, img:"assets/images/drinks/iced-lemon-tea.png", cat:["drink"], taste:"medium" },
{ id:57, name:"Mango Smoothie", price:25000, img:"assets/images/drinks/mango-smoothie.png", cat:["drink"], taste:"sweet" },
{ id:58, name:"Strawberry Milkshake", price:27000, img:"assets/images/drinks/strawberry-milkshake.png", cat:["drink"], taste:"sweet" },
{ id:59, name:"Durian Ice", price:25000, img:"assets/images/drinks/durian-ice.png", cat:["drink"], taste:"sweet" },
{ id:60, name:"Avocado Ice", price:20000, img:"assets/images/drinks/avocado-ice.png", cat:["drink"], taste:"sweet" },
{ id:61, name:"Es Teler", price:18000, img:"assets/images/drinks/es-teler.png", cat:["drink"], taste:"sweet" },

/* ================= SALAD ================= */
{ id:62, name:"Caesar Salad", price:28000, img:"assets/images/salad/caesar-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:63, name:"Greek Salad", price:26000, img:"assets/images/salad/greek-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:64, name:"Garden Fresh Salad", price:22000, img:"assets/images/salad/garden-fresh-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:65, name:"Grilled Chicken Salad", price:32000, img:"assets/images/salad/grilled-chicken-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:66, name:"Chicken Katsu Salad", price:35000, img:"assets/images/salad/chicken-katsu-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:67, name:"Tuna Mayo Salad", price:30000, img:"assets/images/salad/tuna-mayo-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:68, name:"Steak Salad", price:45000, img:"assets/images/salad/steak-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:69, name:"Egg & Avocado Salad", price:28000, img:"assets/images/salad/egg-avocado-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:70, name:"Thai Mango Salad", price:25000, img:"assets/images/salad/thai-mango-salad.png", cat:["healthy","salad"], taste:"sweet" },
{ id:71, name:"Japanese Sesame Salad", price:24000, img:"assets/images/salad/japanese-sesame-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:72, name:"Gado-Gado Modern", price:28000, img:"assets/images/salad/gado-gado-modern.png", cat:["healthy","salad"], taste:"medium" },
{ id:73, name:"Corn & Lettuce Salad", price:18000, img:"assets/images/salad/corn-lettuce-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:74, name:"Crispy Tofu Salad", price:20000, img:"assets/images/salad/crispy-tofu-salad.png", cat:["healthy","salad"], taste:"medium" },
{ id:75, name:"Healthy Bowl", price:22000, img:"assets/images/salad/healthy-bowl.png", cat:["healthy","salad"], taste:"medium" },
{ id:76, name:"Avocado Salmon Bowl", price:42000, img:"assets/images/salad/avocado-salmon-bowl.png", cat:["healthy","salad"], taste:"medium" },
{ id:77, name:"Protein Fitness Bowl", price:35000, img:"assets/images/salad/protein-fitness-bowl.png", cat:["healthy","salad"], taste:"medium" },

/* ================= KETOPRAK ================= */
{ id:100, name:"Ketoprak", price:35000, img:"assets/images/salad/ketoprak.jpg", cat:["healthy","salad","snack"], taste:"medium" },

/* ================= EXTRA ================= */
{ id:78, name:"Chicken Curry", price:32000, img:"assets/img/menu/extra-chicken-curry.jpg", cat:["rice"], taste:"medium" },
{ id:79, name:"Beef Rendang", price:35000, img:"assets/img/menu/extra-beef-rendang.jpg", cat:["rice","spicy"], taste:"spicy" },
{ id:80, name:"Fried Tofu", price:12000, img:"assets/img/menu/extra-fried-tofu.jpg", cat:["snack"], taste:"medium" },
{ id:81, name:"Tempe Goreng", price:10000, img:"assets/img/menu/extra-tempe-goreng.jpg", cat:["snack"], taste:"medium" },
{ id:82, name:"Garlic Bread", price:15000, img:"assets/img/menu/extra-garlic-bread.jpg", cat:["snack"], taste:"medium" },

/* ================= DRINKS MORE ================= */
{ id:83, name:"Es Jeruk", price:15000, img:"assets/img/menu/drink-es-jeruk.jpg", cat:["drink"], taste:"sweet" },
{ id:84, name:"Es Teh Manis", price:10000, img:"assets/img/menu/drink-es-teh-manis.jpg", cat:["drink"], taste:"sweet" },
{ id:85, name:"Kopi Hitam", price:15000, img:"assets/img/menu/drink-kopi-hitam.jpg", cat:["drink","coffee"], taste:"medium" },
{ id:86, name:"Matcha Latte", price:28000, img:"assets/img/menu/drink-matcha-latte.jpg", cat:["drink"], taste:"sweet" },
{ id:87, name:"Brown Sugar Boba", price:25000, img:"assets/img/menu/drink-brown-sugar-boba.jpg", cat:["drink"], taste:"sweet" },

/* ================= SNACKS ================= */
{ id:88, name:"Chicken Nuggets", price:25000, img:"assets/img/menu/snack-nuggets.jpg", cat:["snack"], taste:"medium" },
{ id:89, name:"Onion Rings", price:20000, img:"assets/img/menu/snack-onion-rings.jpg", cat:["snack"], taste:"medium" },
{ id:90, name:"Mozzarella Sticks", price:30000, img:"assets/img/menu/snack-mozzarella-sticks.jpg", cat:["snack"], taste:"medium" },
{ id:91, name:"Potato Wedges", price:22000, img:"assets/img/menu/snack-potato-wedges.jpg", cat:["snack"], taste:"medium" },
{ id:92, name:"Dimsum Original", price:28000, img:"assets/img/menu/snack-dimsum-original.jpg", cat:["snack"], taste:"medium" },

{ id:93, name:"Dimsum Mentai", price:32000, img:"assets/img/menu/snack-dimsum-mentai.jpg", cat:["snack"], taste:"medium" },
{ id:94, name:"Dimsum Family", price:45000, img:"assets/img/menu/snack-dimsum-family.jpg", cat:["snack"], taste:"medium" },

/* ================= DESSERT MORE ================= */
{ id:95, name:"Ice Cream Vanilla", price:15000, img:"assets/img/menu/dessert-icecream-vanilla.jpg", cat:["sweet"], taste:"sweet" },
{ id:96, name:"Ice Cream Chocolate", price:15000, img:"assets/img/menu/dessert-icecream-chocolate.jpg", cat:["sweet"], taste:"sweet" },
{ id:97, name:"Banana Split", price:30000, img:"assets/img/menu/dessert-banana-split.jpg", cat:["sweet"], taste:"sweet" },
{ id:98, name:"Pancake Maple", price:28000, img:"assets/img/menu/dessert-pancake-maple.jpg", cat:["sweet"], taste:"sweet" },
{ id:99, name:"Waffle Ice Cream", price:32000, img:"assets/img/menu/dessert-waffle-icecream.jpg", cat:["sweet"], taste:"sweet" }

];

/* ================= STATE ================= */
let cart = [];
let orders = [];
let chats = [];

if(localStorage.getItem("orders")) orders = JSON.parse(localStorage.getItem("orders"));
if(localStorage.getItem("chats")) chats = JSON.parse(localStorage.getItem("chats"));

MENU.forEach(function(item) { if(!item.stock) item.stock = Math.floor(Math.random() * 20) + 10; });

if(localStorage.getItem("stock")){
  var savedStock = JSON.parse(localStorage.getItem("stock"));
  MENU.forEach(function(i) { if(savedStock[i.id]) i.stock = savedStock[i.id]; });
}

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

  return Array.from(intents);
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

  const primary = categoryOrder.find(c => intents.includes(c));

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

  const scored = MENU.map(item => {
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
function smartChatSearch(userText) {
  const text = normalizeText(userText);
  if (!text) return;

  // set input search bar (biar sinkron)
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = userText;

  const intents = extractIntents(text);

  if (intents.length > 0) {
    applyIntents(intents, userText);
    return;
  }

  // fallback fuzzy
  const ok = fuzzySearchFallback(userText);

  // feedback kalau tidak ketemu
  if (!ok) {
    appendMsg("Sorry, I haven't found a matching menu. Try: spicy / drink / dessert / noodles / seafood / salad / under 50k / healthy 😊", "bot");
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

function getFoodImageFromItem(item){
  if(item.photo) return item.photo;
  return item.img;
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
  var filtered = MENU.slice();

  if (category === "under50") {
    filtered = filtered.filter(function(item) { return item.price < 50000; });
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
              ? '<img src="' + item.img + '" class="w-10 h-10 rounded-lg object-cover" alt="' + item.name + '">' 
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

function addFromChatbot(id) {
  var item = MENU.find(function(m) { return m.id === id; });
  if (!item) return;

  var existing = chatbotSelectedItems.find(function(c) { return c.id === id; });
  if (existing) existing.qty += 1;
  else chatbotSelectedItems.push(Object.assign({}, item, {qty: 1}));

  addToCart(id);
  updateChatbotSelectedItems();
  showToast("✅ " + item.name + " added!", "success");
}

function updateChatbotSelectedItems() {
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
            ? '<img src="' + item.img + '" class="w-6 h-6 rounded object-cover" alt="' + item.name + '">' 
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
  if (chatbotSelectedItems.length === 0) {
    showToast("Please select a menu first!", "error");
    return;
  }
  toggleChatbot();
  setTimeout(function() { toggleCart(); }, 300);
  showToast("Order added to cart!", "success");
}

function checkChatbotOnLoad() {
  var hasOrdered = localStorage.getItem("kingStoreHasOrdered");
  if (!hasOrdered && cart.length === 0) {
    setTimeout(function() {}, 500);
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
  { id: "salad", name: "Salad", emoji: "🥗" },
  { id: "japanese", name: "Japanese", emoji: "🍱" },
  { id: "korean", name: "Korean", emoji: "🍡" },
  { id: "western", name: "Western", emoji: "🍔" },
  { id: "premium", name: "Premium", emoji: "👑" }
];

var activeCategory = "all";
var activePriceFilter = "all";
var searchQuery = "";

function renderCategories(){
  var container = document.getElementById("category-container");
  if(!container) return;

  var html =
    '<button onclick="filterByPrice(\'all\')" class="category-btn px-4 py-2 rounded-full text-sm font-medium transition-all ' +
      (activePriceFilter === "all" ? "bg-orange-700 text-white" : "bg-white text-orange-800 hover:bg-orange-100 border border-orange-300") +
      '" data-price="all">💰 All Prices</button>' +
    '<button onclick="filterByPrice(\'under50\')" class="category-btn px-4 py-2 rounded-full text-sm font-medium transition-all ' +
      (activePriceFilter === "under50" ? "bg-orange-700 text-white" : "bg-white text-orange-800 hover:bg-orange-100 border border-orange-300") +
      '" data-price="under50">💵 Prices < 50rb</button>';

  for(var i = 0; i < CATEGORIES.length; i++) {
    var cat = CATEGORIES[i];
    var isActive = activeCategory === cat.id && activePriceFilter === "all";
    html +=
      '<button onclick="filterByCategory(\'' + cat.id + '\')" class="category-btn px-4 py-2 rounded-full text-sm font-medium transition-all ' +
      (isActive ? "bg-orange-700 text-white" : "bg-white text-orange-800 hover:bg-orange-100 border border-orange-300") +
      '" data-category="' + cat.id + '">' + cat.emoji + ' ' + cat.name + '</button>';
  }

  container.innerHTML = html;
}

function filterByCategory(category){
  activeCategory = category;
  renderCategories();
  filterMenu();
}

function filterByPrice(priceFilter){
  activePriceFilter = priceFilter;
  renderCategories();
  filterMenu();
}

function filterMenu(){
  var filtered = MENU.slice();

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

    var badges = "";
    if(item.taste === "spicy") badges += '<span class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">🌶️ Spicy</span>';
    if(item.taste === "sweet") badges += '<span class="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">🍬 Sweet</span>';
    if(item.price >= 50000) badges += '<span class="absolute top-2 left-2 premium-badge text-white text-xs px-2 py-1 rounded-full">💎 Premium</span>';

    var isImg = isImagePath(item.img);
    var imgContent = isImg 
      ? '<img data-src="' + item.img + '" src="" class="menu-image lazy-image" alt="' + item.name.replace(/"/g,'"') + '">'
      : '<div class="h-[180px] flex items-center justify-center text-6xl bg-orange-50">' + item.img + '</div>';

    card.innerHTML =
      '<div class="relative">' +
        '<div class="skeleton h-[180px] absolute w-full"></div>' +
        imgContent +
        badges +
      '</div>' +
      '<div class="p-4">' +
        '<h3 class="font-bold text-sm mb-2">' + item.name + '</h3>' +
        '<p class="text-orange-600 font-bold mb-3">Rp ' + item.price.toLocaleString() + '</p>' +
        '<div class="flex items-center gap-2">' +
          '<button onclick="addToCart(' + item.id + ')" class="flex-1 bg-orange-700 text-white py-2 rounded-xl text-sm hover:bg-orange-800 transition-colors">Add 🛒</button>' +
        '</div>' +
      '</div>';

    container.appendChild(card);
  }

  lazyLoad();
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

function showToast(message, type){
  var toast = document.createElement("div");
  var bgClass = type === "success" ? "toast-success" : type === "error" ? "toast-error" : "bg-gray-800";
  toast.className = "fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-lg animate-bounce-in text-white font-medium " + bgClass;

  toast.innerHTML = message;
  document.body.appendChild(toast);

  setTimeout(function(){
    toast.classList.add("animate-fade-out");
    setTimeout(function(){ toast.remove(); }, 300);
  }, 2500);
}

function loadCart(){
  var saved = localStorage.getItem("kingCart");
  cart = saved ? JSON.parse(saved) : [];
  updateCartCount();
}

function saveCart(){
  localStorage.setItem("kingCart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount(){
  var count = cart.reduce(function(sum, item){ return sum + item.qty; }, 0);
  document.getElementById("cart-count").innerText = count;
}

function addToCart(id){
  var item = MENU.find(function(m){ return m.id === id; });
  if(!item) return;

  var existing = cart.find(function(c){ return c.id === id; });
  if(existing) existing.qty += 1;
  else cart.push(Object.assign({}, item, {qty: 1}));

  saveCart();
  showToast("✅ " + item.name + " added to cart!", "success");
}

function updateCart(){
  var itemsDiv = document.getElementById("cart-items");

  if(cart.length === 0){
    itemsDiv.innerHTML =
      '<div class="text-center py-8">' +
        '<div class="text-5xl mb-3">🛒</div>' +
        '<p class="text-gray-500">Your cart is still empty</p>' +
        '<p class="text-sm text-gray-400">Come on, order your favorite food!</p>' +
      '</div>';
    document.getElementById("cart-total").innerText = "0";
    return;
  }

  var total = 0;
  var html = "";
  for(var i = 0; i < cart.length; i++){
    var item = cart[i];
    var itemPrice = item.finalPrice || item.price;
    var itemTotal = itemPrice * item.qty;
    total += itemTotal;
    var isImg = isImagePath(item.img);

    html +=
      '<div class="flex items-center justify-between border-b py-3">' +
        '<div class="flex-1">' +
          '<div class="flex items-center gap-2">' +
            (isImg 
              ? '<img src="' + item.img + '" class="w-10 h-10 rounded-lg object-cover" alt="' + item.name + '">' 
              : '<span class="text-xl">' + item.img + '</span>') +
            '<span class="font-medium text-sm">' + item.name + '</span>' +
          '</div>' +
          '<div class="text-xs text-gray-500">' + (item.seller || "KING Store") + '</div>' +
          '<div class="text-orange-600 font-bold text-sm">Rp ' + itemPrice.toLocaleString() + '</div>' +
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
  document.getElementById("cart-total").innerText = total.toLocaleString();
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

function toggleCart(){
  document.getElementById("cart-modal").classList.toggle("hidden");
  updateCart();
}

function checkout(){
  if(cart.length === 0) return;

  var subtotal = cart.reduce(function(s, i){ return s + (i.finalPrice || i.price) * i.qty; }, 0);
  var discount = 0;

  if(cart.length >= 5) discount += 0.1;
  if(subtotal > 500000) discount += 0.05;

  var finalTotal = subtotal - subtotal * discount;

  var order = {
    id: Date.now(),
    items: cart.slice(),
    subtotal: subtotal,
    discount: discount,
    total: finalTotal,
    date: new Date().toISOString()
  };

  orders.unshift(order);
  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.setItem("kingStoreHasOrdered", "true");

  cart = [];
  saveCart();
  updateCart();
  renderOrders();

  var discountMsg = discount > 0 ? "\n🎉 Discount " + Math.round(discount * 100) + "% applied!" : "";
  alert("✅ Order successful!" + discountMsg + "\n💰 Total: Rp " + finalTotal.toLocaleString());
}

function switchView(view){
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
    var o = orders[i];
    var itemsStr = "";
    for(var j = 0; j < o.items.length; j++){
      itemsStr += (j > 0 ? ", " : "") + o.items[j].qty + "x " + o.items[j].name;
    }

    html +=
      '<div class="bg-white p-4 rounded-xl border border-orange-300 mb-3">' +
        '<div class="flex justify-between items-start mb-2">' +
          '<div class="text-sm font-bold text-orange-900">Order #' + o.id.toString().slice(-4) + '</div>' +
        '<div class="text-xs text-orange-600">' + new Date(o.date).toLocaleDateString("id-ID") + '</div>' +
        '</div>' +
        '<div class="text-xs text-gray-600 mb-2">' + itemsStr + '</div>' +
        (o.discount > 0 ? '<div class="text-xs text-green-600">🎉 Discount ' + Math.round(o.discount * 100) + '%</div>' : '') +
        '<div class="font-bold text-orange-700">Rp ' + o.total.toLocaleString() + '</div>' +
      '</div>';
  }

  list.innerHTML = html;
}

loadCart();
renderCategories();
filterMenu();
checkChatbotOnLoad();

/* ================= CHATBOT CHAT LOGIC ================= */
document.getElementById('chat-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('chat-input');
  const userText = input.value.trim();
  if(!userText) return;

  appendMsg(userText, 'user');
  input.value = '';

  // Use Smart Intent Engine
  smartChatSearch(userText);
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
              ? '<img src="' + item.img + '" class="w-10 h-10 rounded-lg object-cover" alt="' + item.name + '">' 
              : '<span class="text-xl">' + item.img + '</span>') +
            '<div class="text-[10px]">' +
              '<div class="font-bold">' + item.name + '</div>' +
              '<div class="text-slate-400">Rp ' + item.price.toLocaleString() + '</div>' +
            '</div>' +
          '</div>' +
          '<div class="flex items-center gap-2">' +
            '<input type="number" id="qty-' + item.id + '" value="1" min="1" class="w-10 border rounded text-center text-xs p-1">' +
            '<button onclick="addFromChatbot(' + item.id + ')" class="bg-slate-900 text-white text-[10px] px-2 py-1.5 rounded-lg font-bold">Add</button>' +
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
