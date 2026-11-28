// Compléments repris de NiaDB (meowdb.com/gta6), qui autorise la reprise de ses données GTA 6
// à condition de créditer NiaDB avec un lien vers la page d'origine (fait dans chaque fiche concernée).
// Positions : celles de nos autres sources (NiaDB ne donne pas de coordonnées).
(function () {
  const D = window.MG_DATA;
  if (!D) return;
  const SRC_GAR = '_Source : [NiaDB](https://meowdb.com/gta6/garages)_';
  const byId = {};
  D.locations.forEach(l => { byId[l.id] = l; });
  const add = (l, lines) => { if (l) l.d = (l.d ? l.d.replace(/\s+$/, '') + '\n\n' : '') + lines.join('\n'); };

  // --- Planques : à quel chapitre on y habite ---
  // Les deux premières viennent de Dexerto ; on ajoute les deux suivantes à l'emplacement donné par gtadb.org.
  const SAFE_CAT = 990005;
  window.PLANQUES = [];   // [chapitre, id du lieu] dans l'ordre de l'histoire
  const jason = D.locations.find(l => l.c === SAFE_CAT && /Jason/.test(l.t));
  const motel = D.locations.find(l => l.c === SAFE_CAT && /Starlet/.test(l.t));
  const GT_SRC = '_Source : [GTA VI Landmarks Data](https://map.gtadb.org) (CC BY 4.0), gtadb.org et contributeurs (photos et modèle réel)_';
  if (jason) {
    add(jason, ['**Chapter:** 1', "_Prêtée par Brian. C'est la planque de Jason dès le chapitre 1._", '**Inspired by:** 12522 FL-24, Cedar Key, FL',
      '_Photos: in game, then the real building_', SRC_GAR, GT_SRC]);
    jason.m = ['photos/gtadb/L266-ig.jpg', 'photos/gtadb/L266-rl.jpg'];
    window.PLANQUES.push([1, jason.id]);
  }
  if (motel) {
    add(motel, ['**Chapter:** 2', '_Disponible dès le chapitre 2, après la mission Discharge Time._', '**Inspired by:** Economy Inn, 23750 US-301, Lawtey, FL',
      '_Photos: in game, then the real building, then the sign_', SRC_GAR, GT_SRC]);
    motel.m = ['photos/gtadb/L304-ig.jpg', 'photos/gtadb/L304-rl.jpg', 'photos/gtadb/L307-ig.jpg'];
    window.PLANQUES.push([2, motel.id]);
  }
  // Le panneau du Starlet Motel (point gtadb séparé, juste à côté) est réuni avec la planque
  D.locations = D.locations.filter(l => l.id !== 980000307);
  // gtadb.org : Bayside Apartments (L475) et Y Vice City (L16), tous deux marqués « planque » chez gtadb
  const gt = (X, Y) => ({ x: Math.round((X + 16384) * 2 * 10) / 10, y: Math.round((16384 - Y) * 2 * 10) / 10 });
  const bay = Object.assign({ id: 960000003, c: SAFE_CAT, t: 'Bayside Apartments 201', r: 5644, m: ['photos/gtadb/L475-ig.jpg', 'photos/gtadb/L475-rl.jpg'] }, gt(-477.50611734178807, 1220.8554803668617));
  bay.d = ['**Chapter:** 3', '_Prêté par Boobie dans la mission « Welcome to Vice City ». 2 places de garage._',
    '**Inspired by:** 419 NE 4th Ave, Miami, FL', '_Photos: in game, then the real building_', SRC_GAR,
    '_Source : [GTA VI Landmarks Data](https://map.gtadb.org) (CC BY 4.0), gtadb.org et contributeurs (emplacement et photo)_'].join('\n');
  const yh = Object.assign({ id: 960000004, c: SAFE_CAT, t: 'Room 701, the Y Hotel', r: 5587, m: ['photos/gtadb/L16-ig.jpg', 'photos/gtadb/L16-rl.jpg'] }, gt(1958.1295046450782, 1590.778382951003));
  yh.d = ['**Chapter:** 4', '_Disponible dès le chapitre 4, après The Cartel Heist._', '**Inspired by:** W South Beach, 2201 Collins Ave, Miami Beach, FL', '_Photos: in game, then the real building_', SRC_GAR,
    '_Source : [GTA VI Landmarks Data](https://map.gtadb.org) (CC BY 4.0), gtadb.org et contributeurs (emplacement et photo)_'].join('\n');
  D.locations.push(bay, yh);
  window.PLANQUES.push([3, bay.id], [4, yh.id]);
  // Chapitre 5 : le penthouse de Giorgio, sans emplacement connu
  window.PLANQUE_5 = "Penthouse de Giorgio (chapitre 5) : emplacement pas encore connu";
  // Le bâtiment gtadb « Bayside Apartments » devient la planque : on retire le doublon
  D.locations = D.locations.filter(l => l.id !== 980000475);

  // --- Garages : prix normal (Map Genie donnait le prix avec le bonus d'épargne) et garages offerts ---
  const GAR = {
    'Mitchel Auto Center': ['$5,000', '$4,000'], 'Persistence Road Garage': ['$9,500', '$7,600'], '7th Avenue Garage': ['$15,000', '$12,000'],
    'Wyatt Motors': ['$27,000', '$21,600'], 'Vela Rota Drive Garage': ['$30,000', '$24,000'], 'Bonita Court Garage': ['$42,500', '$34,000'],
    'Atlantic Court Garage': ['$50,000', '$40,000'], "Store n' Bolt": ['$21,000', '$16,800']
  };
  const FREE = {
    'Port Gellhorn Station Garage': [2, 'Gratuit, offert par les missions de Moses au chapitre 2.'],
    'Paradise Garage': [2, "Édition Ultimate : Wyman le donne au chapitre 2."],
    'Shore Court Garage': [3, 'Pack Vintage Vice City : à récupérer dès le chapitre 3.'],
    'Caledonia Boulevard Garage': [3, 'GTA+ : à réclamer dès le chapitre 3, tant que l\'abonnement est actif.'],
    'Del Rio Boulevard Garage': [3, 'Gratuit, au chapitre 3.'],
    'Thompson Court Garage': [4, 'Gratuit, au chapitre 4.']
  };
  D.locations.forEach(l => {
    if (GAR[l.t] && l.c === 29062) {
      const [full, perk] = GAR[l.t];
      l.d = (l.d || '').replace(/\*\*Price:\*\*\s*\$?[\d,]+/, () => '**Price:** ' + full + '\n**Price with Savings Perk:** ' + perk);
      add(l, ["_En vente dans l'appli Vice City Real Estate. Le bonus d'épargne familiale (100 000 $) donne 20 % de réduction._", SRC_GAR]);
    }
    if (FREE[l.t] && (l.c === 29062 || l.c === 29063)) add(l, ['**Chapter:** ' + FREE[l.t][0], '_' + FREE[l.t][1] + '_', SRC_GAR]);
  });

  // --- Opérations illégales (repaires de gangs) : butin et chapitre où elles s'ouvrent (NiaDB, page « robberies ») ---
  // Quand NiaDB donne deux fourchettes (« ou »), on garde du plus bas au plus haut.
  const SRC_ROB = '_Source : [NiaDB](https://meowdb.com/gta6/robberies)_';
  const OPS_INFO = {
    'Sunrise RV Park': ['$10,700 - $17,900', 2], 'Nova Auto Junkyard': ['$10,500 - $13,700', 2], 'Kingpin Bowling': ['$5,100 - $7,100', 2],
    'Stash House': ['$1,800 - $2,200', 2], 'Brooks Boatworks': ['$1,760', 2], 'Weed Grow': ['$9,400 - $32,200', 0], "Janjak's Garage": ['$11,300 - $16,800', 3],
    'Palmer Fishing Warehouse': ['$7,400 - $17,200', 0], 'Watson Bay Safehouse': ['$6,200 - $9,600', 0], 'Leonida Carrier Warehouse': ['$2,500 - $3,500', 0],
    'Irons Building Supply': ['$7,000 - $8,000', 0], 'Chatfield Storage & Logistics': ['$2,200 - $3,000', 0], 'Walker Farm': ['$6,900 - $26,200', 0],
    'Vespucci Mansion': ['$5,200 - $19,800', 0], 'Mill Station Radar Base': ['$8,900 - $22,800', 0], 'Slator Towing Inc': ['$5,500 - $7,500', 0],
    'Ocean Beach Lab': ['$6,500 - $19,100', 0], 'Gas Station Meth Front': ['$8,100 - $14,400', 0], 'Carter Mining Boathouse': ['$18,000 - $37,000', 0],
    'Exotic Animals Front': ['$900 - $1,100', 0],
    // chapitre seulement
    'Manatee Hotel': [null, 2], 'June Warehouse': [null, 2], 'La Cascara Motel': [null, 2], 'La Perle Trap House': [null, 3], 'Illegal Sneaker Trade': [null, 3],
    'Industrial Weed Grow': [null, 2], 'Backroom Weed Front': [null, 2]
  };
  const OPS = new Set([29133, 29134, 29135, 29136, 29137, 29138, 29139, 29140, 29141]);
  D.locations.forEach(l => {
    const o = OPS_INFO[l.t];
    if (!o || !OPS.has(l.c)) return;
    let d = l.d || '';
    if (o[0]) d = /\*\*Security:\*\*/.test(d) ? d.replace(/(\*\*Security:\*\*[^\n]*)/, (m) => m + '\n**Take Value:** ' + o[0]) : '**Take Value:** ' + o[0] + (d ? '\n' + d : '');
    if (o[1]) d = '**Chapter:** ' + o[1] + (d ? '\n' + d : '');
    l.d = d.replace(/\s+$/, '') + '\n' + SRC_ROB;
  });
})();

// --- Coiffeurs : coupes et couleurs proposées dans chaque salon (NiaDB, page « barbers ») ---
// Les noms de coupes et de couleurs restent en anglais, comme dans le jeu.
(function () {
  const D = window.MG_DATA;
  if (!D) return;
  const SRC = '_Source : [NiaDB](https://meowdb.com/gta6/barbers)_';
  const S = {
    1091301: { // Barnacle Beauties
      j: ['Shaggy Side Fringe', 'Straight Side Part', 'Long Slick Back', 'Wavy Slick Back', 'Messy Fringe Side Swept', 'Straight Quiff', 'Crew Cut', 'Caesar Cut', 'Textured Bed Head', 'Buzz Cut'],
      l: ['Flicked Bob & Top Braids', 'Beachy Waves', '90s Beachy Waves', 'Long Wavy & Side Braids', 'Straight Middle Part Clipped', 'Top Knot & Twist Framing', 'French Braid Updo', 'Twin Bun & Headband', 'Voluminous Curly Lob'],
      cj: ['Jet Black', 'Copper Brown', 'Light Blonde', 'Vivid Copper Brown', 'Dark Brown'], cl: ['Ash Blonde'],
      b: ['Untrimmed Growth', 'Heavy Growth', 'Medium Growth', 'Light Growth', 'Heavy Stubble', 'Shaped Stubble', 'Smart Stubble', 'Chevron Mustache', "5 O'Clock Shadow", 'Short Stubble'] },
    1091296: { // Sara's Unisex Salon
      j: ['Caesar Cut', 'Induction Cut', 'Shaved Close Mohawk', 'Faux Hawk', 'Textured Spiky', 'Messy Mullet', 'Beachy Waves', 'Blue Snakeskin Buzz Cut', 'Neon Pink Brain Buzz Cut', 'Blonde Leopard Buzz Cut', 'Orange & Yellow Tiger Buzz Cut', 'Neon Yellow Web Buzz Cut', 'Green Scorpion Faux Hawk'],
      l: ['Buzz Cut', 'Short Slick Back', 'Undercut Curly Bob', 'Dutch Braid Cornrows', 'Wavy High Ponytail', 'Sleek Braided Cornrows', 'Twin Bun & Tied Headband', 'Blonde Leopard Buzz Cut', 'Pink Tiger Buzz Cut', 'Two Hearts Buzz Cut', 'Cheetah Hearts Buzz Cut', 'Bleached Flames Buzz Cut'],
      cj: ['Intense Platinum', 'Medium Red', 'Bright Pink', 'Platinum Rose', 'Light Green', 'Light Blue'], cl: ['Pink-Blonde Ombré'],
      b: ['Half Horseshoe Mustache', 'Pencil Mustache', 'Friendly Mutton Chops', 'Patchy Chevron & Goatee', 'Half Horseshoe & Chin Patch', 'Chevron Woodsprite', 'Designer Stubble'] },
    1091297: { // Kurt's Barber Shop
      j: ['Buzz Cut', 'Messy Fringe Side Swept', 'Bleached Flames Buzz Cut', 'Platinum Surgical Line Buzz Cut', 'Black Web Fade & Mohawk', 'Intense Platinum Flat Top', 'Ear Web Buzz Cut', 'Shaggy Side Fringe', 'Long Slick Back', 'Undercut Slick Back'],
      l: ['Wavy Pixie Cut', 'Shaggy Ear Tuck', 'Choppy Mullet', 'Tousled Lob & Bangs', 'Straight Lob', 'Platinum-Pink Ombré Straight Lob'],
      cj: ['Vivid Copper Brown', 'Blonde Balayage'], cl: ['Pastel Peach Blonde'], b: ["5 O'Clock Shadow"] },
    1091299: { // Pearl House Hair Salon (« Pearl Hair Salon » chez NiaDB)
      j: ['Blue Shooting Star Faux Hawk'],
      l: ['Straight Bob', 'Short Straight Ponytail', 'Wavy Topknot', 'Wavy Ponytail', 'Straight High Ponytail', 'Long Straight Ponytail', 'Sleek Bun', 'Braided Cornrows', 'Straight Classic', 'Undercut Pixie Cut', 'Short Undercut High Ponytail', 'Shoulder Length Textured Bob'],
      c: ['Jet Black', 'Copper Brown', 'Vivid Copper Brown', 'Light Blonde', 'Lilac Blue'] },
    1091300: { // Hair By Clair
      j: ['Small Nick Buzz Cut', 'Induction Cut', 'Short Undercut Pompadour', 'High Fade Side Swept', 'Undercut Slick Back', 'Crew Cut & Light Spikes', 'Tousled Quiff', 'Short Slick Back', 'Flowing Off-Center Part'],
      l: ['Long Wavy & Loose Bun', 'Wavy High Ponytail', 'Bun & Asymmetrical Side Fringe'],
      cj: ['Chestnut Brown', 'Brown Highlights', 'Ash Blonde', 'Bleach Blonde Balayage', 'Extra Light Blonde', 'Platinum-Brown Ombré'], cl: ['Light Brown Highlights'],
      b: ['Smart Stubble', 'Shaped Stubble', 'Light Growth'] },
    1091289: { l: ['Long Curly Ponytail', 'Long Braided Cornrows', 'Thick Cornrows & Low Bun', 'Dutch Braids & Tied Headband', 'Top Knot & Hair Tie'], c: ['Bright Copper Brown'] },   // Fabiola's Unisex Salon
    1091290: { j: ['Skin Fade Buzz Cut', 'Platinum Twin Line Faux Hawk', 'Surgical Line Close Buzz Cut', 'Line Design Buzz Cut', 'Elongated Star Buzz Cut', 'Geometric Buzz Cut', 'Star Dazzle Buzz Cut', 'Surgical Line Faux Hawk', 'Intersected Line Faux Hawk', 'Broken Line Faux Hawk', 'Quad Line Faux Hawk'],
      l: ['Wavy Side Part & Black Pin'], c: ['Intense Light Blonde'] },   // Salon Pérez
    1091285: { j: ['Mullet Faux Hawk'], l: ['Wavy Side Part & Gold Pin', 'Long Wavy & Choppy Bangs', 'Voluminous Curls', 'Wavy High Ponytail'] },   // Oomph!
    1091293: { j: ['Tousled Quiff'], l: ['Shoulder Length Wavy Side Part', 'Long High-Volume Center Part', 'Wavy High Ponytail & Braids', 'Curly High Bun & Center Part', 'Straight Side Ponytail & Clip', 'High Loose Bun & Wavy Framing', 'Loose Bun & Stray Curls', 'Straight Lob & Wide Headband'],
      c: ['Bleach Blonde Highlights'] },   // Au Courant
    1091286: { j: ['Rainbow Sessanta Nove Buzz Cut', 'Cobra Buzz Cut', 'Blue Stars Buzz Cut'], l: ['Long Straight & Loose Bun', 'Spiky Bun', 'Spiky Twin Buns'] },   // Clip & Fade
    1091291: { j: ['Zigzag Cornrows'], l: ['Long Wavy & Loose Bun'] },   // Salon Belle
    1091292: { j: ['Straight Rear Knot'], l: ['Side Part Curly Bob', 'Straight Side Ponytail & Pin', 'High Top Knot & Bangs'] },   // A Better You
    1091288: { l: ['Long Wavy & Loose Bun', 'High Pinned Bun & Wavy Framing', 'Bun & Forehead Curl'] },   // Onyx Salon
    1091284: { j: ['Flowing Off-Center Part'], l: ['Long Wavy & Loose Bun', 'High Top Ponytail & Baby Hair', 'Clasped Bun & Wavy Bangs'] },   // Gabriel Wexler
    1091287: { j: ['Surgical Line Buzz Cut', 'Angular Lines Buzz Cut'], l: ['Curly Pixie Cut', 'Goddess Box Braids'], c: ['Dusty Pink & Brown'] },   // Crosstown Cutz
    1091298: { l: ['Shoulder Length Swept Back', 'Long Wavy Side Part', 'Short Ponytail & Bangs', 'Messy Ponytail & Bangs', 'High Ponytail & Loose Strands'] },   // Lori Scott Hair & Beauty (« L. S. Hair & Beauty »)
    1091295: { l: ['Long Braided Cornrows', 'Dutch Braids'] }   // Captain Starlings Barber Shop (« Cpt. Starlings Barber »)
  };
  D.locations.forEach(l => {
    const s = S[l.id]; if (!s) return;
    const lines = [];
    if (s.cj || s.cl || s.c) lines.push('**Hair Colours:** ' + [s.c ? s.c.join(', ') : '', s.cj ? s.cj.join(', ') + ' (Jason)' : '', s.cl ? s.cl.join(', ') + ' (Lucia)' : ''].filter(Boolean).join(' · '));
    if (s.j) lines.push('**Jason Hairstyles:** ' + s.j.join(', '));
    if (s.l) lines.push('**Lucia Hairstyles:** ' + s.l.join(', '));
    if (s.b) lines.push('**Beards:** ' + s.b.join(', '));
    lines.push(SRC);
    l.d = (l.d ? l.d.replace(/\s+$/, '') + '\n\n' : '') + lines.join('\n');
  });
})();

// --- Missions principales : chapitre (NiaDB, page « missions ») ---
// Dexerto indique déjà le chapitre de 25 missions (aucune contradiction avec NiaDB) ; on complète les autres.
(function () {
  const D = window.MG_DATA;
  if (!D) return;
  const SRC = '_Source : [NiaDB](https://meowdb.com/gta6/missions)_';
  const CH = {"Prologue": 1, "Gone Fishing": 1, "Gear Up": 1, "Just A Scratch": 1, "Lab Fees": 1, "Unwanted Attention": 1, "Pipework": 1, "Hey Arnold!": 1, "Island Dreams": 1, "Feng Shui": 1, "Coming Home": 1, "Buck Me": 1, "Clean Up After Donnie": 1, "Down To Earth": 1, "Clear Skies": 1, "Day Release": 1, "Swamped": 1, "Don Gone": 1, "Recalibration": 1, "Tourist Trap": 1, "Home Sweet Home": 1, "Discharge Time": 1, "What's In The Bag?": 2, "Ambulance Chaser": 2, "Just Moved In": 2, "Girls' Trip": 2, "Moses": 2, "Daily Driver": 2, "Slam Dunk": 2, "Breakfast Run": 2, "Coffee Break": 2, "Afternoon Delight": 2, "Thrillbillies": 2, "Twist Wrist, Smash, Grab": 2, "Checking Out": 2, "Welcome To Vice City": 3, "Dealer's Choice": 3, "Meet The Heders": 3, "Dubious Provenance": 3, "Mami Knows Best": 3, "South Leonida Real Estate": 3, "Tyrone": 3, "Here, Kitty Kitty": 3, "Car Service": 3, "Top Billing": 3, "Boobie Time": 3, "First Impressions": 3, "Caught Slipping": 3, "Crosstown Traffic": 3, "Credit Check": 3, "Steal The Zorrusso For Randy": 3, "Sinfrontera National Bank": 3, "Security Expert": 3, "Ride Or Die": 3, "Company Property": 3, "The Missing Link": 3, "Safe Word": 3, "Cooties": 3, "Bricked Up": 3, "Hidden Charges": 3, "The Cartel Heist": 3, "Ocean Beach": 4, "Another Life": 4, "Company Cars": 4, "Lawyer Up": 4, "Party Hard": 4, "Heavy Lifting": 4, "Photo/Shoot": 4, "Making Gainz": 4, "Watch It": 4, "Cash Injections": 4, "Amateur Hour": 4, "Dirty Work": 4, "Too Much Baggage": 4, "Adventures In Babysitting": 4, "Fresh Evidence": 4, "Power Play": 4, "Child's Play": 4, "Headliners": 4, "Close Surveillance": 4, "Delivery Method": 4, "Team Building": 4, "Fully Catered": 4, "VCIA Takedown": 4, "Sunset": 4, "Starting From Zero": 4, "Bird In The Hand": 5, "Taking Liberties": 5, "VC Baby": 5, "Doggie Bag": 5, "Operation Savage Glory": 5, "Protective Custody": 5, "The End Of The Road": 5};
  const norm = (t) => String(t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s*\(.*\)\s*$/, '').replace(/[^a-z0-9]+/g, ' ').trim();
  const byName = {};
  Object.entries(CH).forEach(([n, c]) => { byName[norm(n)] = c; });
  D.locations.forEach(l => {
    if (l.c !== 990001) return;
    const c = byName[norm(l.t)];
    if (!c || /Chapter \d main mission/.test(l.d || '')) return;
    l.d = '**Chapter:** ' + c + (l.d ? '\n' + l.d : '') + '\n' + SRC;
  });
})();
