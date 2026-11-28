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
  if (jason) { add(jason, ['**Chapter:** 1', "_Prêtée par Brian. C'est la planque de Jason dès le chapitre 1._", SRC_GAR]); window.PLANQUES.push([1, jason.id]); }
  if (motel) { add(motel, ['**Chapter:** 2', '_Disponible dès le chapitre 2, après la mission Discharge Time._', SRC_GAR]); window.PLANQUES.push([2, motel.id]); }
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
      l.d = (l.d || '').replace(/\*\*Price:\*\*\s*\$?[\d,]+/, '**Price:** ' + full + '\n**Price with Savings Perk:** ' + perk);
      add(l, ["_En vente dans l'appli Vice City Real Estate. Le bonus d'épargne familiale (100 000 $) donne 20 % de réduction._", SRC_GAR]);
    }
    if (FREE[l.t] && (l.c === 29062 || l.c === 29063)) add(l, ['**Chapter:** ' + FREE[l.t][0], '_' + FREE[l.t][1] + '_', SRC_GAR]);
  });

  // --- Repaires de gangs à braquer : butin ---
  const HIDE = {
    'Watson Bay Safehouse': '$6,200 - $9,600', 'Palmer Fishing Warehouse': '$7,400 - $13,200', 'Sunrise RV Park': '$10,700 - $17,900',
    'Leonida Carrier Warehouse': '$2,500 - $3,500', 'Nova Auto Junkyard': '$10,500 - $11,500', 'Irons Building Supply': '$7,000 - $8,000'
  };
  const OPS = new Set([29133, 29134, 29135, 29136, 29137, 29138, 29139, 29140, 29141]);
  D.locations.forEach(l => {
    if (HIDE[l.t] && OPS.has(l.c)) {
      l.d = (l.d || '').replace(/(\*\*Security:\*\*[^\n]*)/, '$1\n**Take Value:** ' + HIDE[l.t]);
      add(l, [SRC_GAR]);
    }
  });
})();
