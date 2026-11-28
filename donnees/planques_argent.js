// Planques d'argent : butins cachés hors des braquages classiques, et estimations d'autres sources pour des lieux déjà connus.
// Chaque point est posé sur un lieu déjà connu (même bâtiment ou même objet chez Map Genie ou gtadb.org).
// Rubriques propres à la carte :
//   **Reliability:** Attested (plusieurs sources concordent) / Not attested (une seule source) / Sources disagree
//   **Location Accuracy:** Approximate (position déduite d'une description) / Assumed place (le lieu lui-même est supposé)
//   **Tips:** et **Codes:** : rangés derrière le bouton « Aide » de la fiche, fermé par défaut
//   **Other Estimate:** montant donné par une autre source que la carte du jeu
(function () {
  const D = window.MG_DATA;
  if (!D) return;
  const VP = '_Source : [VicePulse](https://vicepulse.org/gta-6/money/hidden-cash) (guide de joueurs)_';
  const BX = '_Source : [Bloxodes](https://bloxodes.com/wiki/gta-6/robberies) (estimation de joueurs)_';
  const BOOM = '_Source : [GTA BOOM](https://www.gtaboom.com/gta-6-early-money-motel-tiger-attack-614c) (guide de joueurs)_';
  const BEE = '_Source : [Beebom](https://beebom.com/gta-6-best-money-spots/) (guide de joueurs)_';
  const OK = '**Reliability:** Attested', NO = '**Reliability:** Not attested', DIV = '**Reliability:** Sources disagree';
  const APPROX = '**Location Accuracy:** Approximate', ASSUMED = '**Location Accuracy:** Assumed place';
  const CAT = { id: 990301, group_id: 27129, title: 'Cash Stash', icon: null, color: 'e0a030', order: 301, info: null };
  D.categories.push(CAT);
  const g = D.groups.find(g => g.id === CAT.group_id);
  if (g && !g.cats.includes(CAT.id)) g.cats.push(CAT.id);
  const at = (id) => D.locations.find(l => l.id === id);
  const add = (id, anchor, t, lines, extra) => {
    const a = at(anchor); if (!a) return;
    D.locations.push(Object.assign({ id, c: CAT.id, r: a.r, t, x: a.x, y: a.y, d: lines.join('\n') }, extra || {}));
  };
  // Ajoute des lignes à la fin d'une fiche existante, avant rien d'autre (le crédit reste groupé en bas par la fiche)
  const more = (id, lines) => { const l = at(id); if (l) l.d = (l.d || '').replace(/\s+$/, '') + '\n' + lines.join('\n'); };
  // Insère une ligne juste après la rubrique « Take Value » (ou en tête s'il n'y en a pas)
  const afterTake = (id, line) => {
    const l = at(id); if (!l) return;
    const d = l.d || '';
    l.d = /\*\*Take Value:\*\*[^\n]*/.test(d) ? d.replace(/\*\*Take Value:\*\*[^\n]*/, (m) => m + '\n' + line) : line + (d ? '\n' + d : '');
  };

  // --- Planques attestées (plusieurs guides concordent) ---
  // Avant-poste de recherche sur les crabes (Pelican Valley) : même cabane que la mitraillette Crabshack V5F
  add(960001001, 1099360, 'Crab Research Outpost', [
    '**Take Value:** $11,070', OK,
    "_Environ 1 070 $ dans le coffre du bâtiment principal et un sac de 10 000 $ en billets marqués dans le hangar à bateaux, plus la mitraillette Crabshack V5F._",
    '**Codes:** mot de passe CLEAVES sur l\'ordinateur, coffre 0072, porte du hangar 0212',
    "**Tips:** Remets d'abord le courant à l'arrière du bâtiment pour allumer l'ordinateur.",
    '**Chapter:** 1',
    VP, '_Montant du sac de 10 000 $ et codes : plusieurs guides concordent (KeenGamer, OutputLag, Item Level Gaming, RaidDex)._'
  ]);
  // Entrepôt rouge d'Apollo Aggregates, à l'est de Hamlet (ours en peluche et cocaïne) : remplace le bâtiment gtadb au même endroit
  const apollo = at(980002453);
  add(960001002, 980002453, 'Apollo Aggregates Warehouse', [
    '**Take Value:** $13,000 - $20,000', OK,
    "_Entrepôt sans gardes : sacs de billets marqués, cocaïne dans les camionnettes aux ours en peluche, argent sur les corps, armes, et un coffre avec la carte Leroy Rook (environ 6 000 $)._",
    "**Tips:** Force la porte grise et prends le sac de billets sur la table au milieu. Fouille l'arrière de la camionnette aux ours, puis les bureaux. Viens avec un véhicule qui a du rangement, puis revends tout. Les billets marqués ne sont pas de l'argent utilisable tant qu'ils ne sont pas revendus. À vider avant la fin du chapitre 1.",
    '**Chapter:** 1',
    VP, "_Fourchette : selon les guides, de 13 000 à 20 000 $ une fois tout revendu (RaidDex, OutputLag, Grand Leonida, GTA BOOM, Beebom)._",
    '_Source : [GTA VI Landmarks Data](https://map.gtadb.org) (CC BY 4.0), gtadb.org et contributeurs (emplacement et photo)_'
  ], { m: apollo && apollo.m ? apollo.m : undefined });
  D.locations = D.locations.filter(l => l.id !== 980002453);
  // Bouche d'aération derrière Three Sheets Liquor (Key Lento), indiquée par le perroquet
  add(960001003, 1090282, "Three Sheets Liquor Parrot Stash", [
    '**Take Value:** $1,000 - $1,311', OK,
    "_Dans la bouche d'aération près du générateur, derrière le magasin._",
    "**Tips:** Parle plusieurs fois au perroquet de la cage pour qu'il indique la cachette. Escalade la clôture à côté du magasin pour entrer dans la cour. À prendre avant que la police vide les lieux.",
    '**Chapter:** 1', VP, BEE
  ]);
  // Maison de Jason : enveloppe sous le plancher de la chambre, quand on revient au chapitre 2
  add(960001004, 916058122, "Jason's House Floorboards", [
    '**Take Value:** $5,000', OK,
    "_Sous les lattes du plancher de la chambre, à l'étage : une enveloppe de 5 000 $ et des photos. La cachette sert aussi à mettre ton argent à l'abri._",
    "**Tips:** Reviens à la maison au chapitre 2, passe discrètement devant la police et monte par l'escalier extérieur.",
    '**Chapter:** 2', VP, '_Même montant dans deux vidéos différentes (JorRaptor et Getaway Intel)._'
  ]);

  // --- Planques non attestées (une seule source) ---
  // Pearl House Hair Salon (Port Gellhorn) : arrière-salle et petite culture d'herbe
  add(960001005, 1091299, 'Pearl House Hair Salon Back Room', [
    '**Take Value:** $1,000 - $2,600', NO,
    "_Environ 1 000 $ dans le coffre et des paquets d'herbe (le titre de la vidéo annonce 1 600 $ au total, les étapes seulement les 1 000 $ du coffre)._",
    "**Tips:** Force la porte de derrière, élimine les deux occupants, ouvre le coffre et prends les paquets d'herbe.",
    VP
  ]);
  // Conteneur du port de Millport : celui de la montre Novak Laurent chez Map Genie, d'après la description
  add(960001006, 1099424, 'Millport Container Stash', [
    '**Take Value:** $10,000', NO, APPROX,
    "_De l'argent et une montre dans un conteneur fermé, en haut d'une pile, au port du nord-est de Millport. Probablement le conteneur de la montre Novak Laurent Haute Grandeur (Map Genie), mais la vidéo parle d'un conteneur jaune sans plus de précision._",
    "**Tips:** Il faut un hélicoptère : pose-toi sur le conteneur, force les portes et entre.",
    VP, '_Vidéo de NoChillPatel, montant non recoupé._'
  ]);
  // « Billet doré » de la Sahara Arena (l'aréna de basket de Vice City)
  add(960001007, 1091643, 'Sahara Arena Golden Bill', [
    '**Take Value:** $100,000', NO, APPROX,
    "_Un billet doré de 100 000 $ sous un banc, au fond du couloir de l'étage. Montant énorme pour un objet ramassé par terre : à vérifier en jeu._",
    "**Tips:** Entre dans l'aréna, monte l'escalier et va tout au bout du couloir de l'étage.",
    VP, "_Vidéo de TulaMinsan. La vidéo parle de l'aréna de basket de Vice City : c'est la Sahara Arena, avec sa sculpture de panier au centre._"
  ]);
  // « Ticket doré » d'un terminal de Vice City : le terminal n'est pas précisé, l'aéroport est supposé
  add(960001008, 1098212, 'VCIA Golden Ticket', [
    '**Take Value:** $100,000', NO, ASSUMED,
    "_Un ticket doré de 100 000 $ par terre, dans un couloir de terminal. Montant énorme pour un objet ramassé par terre : à vérifier en jeu._",
    "**Tips:** La vidéo dit seulement « le terminal de Vice City ». Ce point est mis au terminal central de l'aéroport (VCIA), mais ce pourrait être un autre terminal, par exemple celui du port.",
    VP, '_Vidéo de dkdynamite, montant non recoupé._'
  ]);
  // Yacht abandonné à l'ouest de Mariana County : peut-être le yacht chaviré de Belpoint (montre Ark Royal chez Map Genie)
  add(960001009, 1099393, 'Abandoned Yacht Stash', [
    '**Take Value:** $5,000', NO, APPROX,
    "_Deux sacs d'argent au sol de la cabine du bas, dans un yacht abandonné au large, à l'ouest de Mariana County. Placé au yacht chaviré de Belpoint (montre Ark Royal Ashore chez Map Genie), le seul yacht connu dans ce coin, sans certitude que ce soit le même._",
    "**Tips:** Il faut un bateau. Entre dans la cabine principale par le pont, puis descends l'escalier sous le tableau.",
    VP, '_Vidéo de Creator Engine, montant non recoupé._'
  ]);

  // --- Montants pour des lieux déjà sur la carte ---
  // Coffre du bureau du Hog Stars Garage (Ambrosia)
  const hog = at(1090320);
  if (hog) hog.d = '**Take Value:** $4,688\n' + NO + '\n' + (hog.d || '') + "\n**Tips:** Le coffre est sous le frigo Sprunk Light du bureau.\n" + VP + '\n_Vidéo de Rizzy RP, montant non recoupé._';
  // Coffre en hauteur de l'Industrial Weed Grow (North Mariana County)
  const weed = at(1090304);
  if (weed) weed.d = '**Take Value:** $20,000 - $30,000\n' + NO + '\n' + (weed.d || '') +
    "\n_Deux vidéos parlent d'un coffre dans le bureau de l'étage d'un entrepôt de North Mariana County : jusqu'à 20 000 $ (Nocode GTA, « entrepôt de culture ») et 30 000 $ (FlayHQ, « au-dessus de Big Pine »). C'est très probablement ce coffre, mais aucune ne le nomme._" +
    '\n**Tips:** Élimine les deux gardes, puis monte au bureau en hauteur.\n' + VP;
  // Manatee Hotel (Kingfishers) : NiaDB, VicePulse et GTA BOOM concordent autour de 2 000 $
  afterTake(1091953, OK);
  more(1091953, [
    '**Other Estimate:** $2,800 - $6,200 (Bloxodes)',
    "_Détail selon GTA BOOM : 1 066 $ dans le coffre et de la cocaïne pour environ 800 $ chez Brian. Beebom : plus de 1 000 $ dans le coffre et environ 640 $ de cocaïne._",
    "**Tips:** Un tigre est lâché dans le motel : occupe-toi de lui avant de fouiller les chambres.",
    BOOM, BX
  ]);
  // Opérations où la carte du jeu (NiaDB) et Bloxodes donnent des montants très différents.
  // Les montants de Bloxodes comptent peut-être les objets de valeur (véhicule, montre…) : rien ne le confirme.
  const ecart = "_Écart entre NiaDB et Bloxodes : peut-être parce que l'un compte les objets de valeur (véhicule, montre, arme) et pas l'autre, sans confirmation._";
  [[1091955, '$30,100 - $42,600'], [1091982, '$12,000 - $13,000'], [1091985, '$5,500 - $6,500'], [1091987, '$5,000 - $7,000']].forEach(([id, v]) => {
    afterTake(id, DIV);
    more(id, ['**Other Estimate:** ' + v + ' (Bloxodes)', ecart, BX]);
  });
  more(1091982, ['**Codes:** coffre 9256 (affiché sur la fiche du lieu dans la carte du jeu, selon Bloxodes)']);
  more(1091987, ["_Détail selon Beebom : 1 300 $ dans la bouche d'aération (voir la planque du perroquet), 900 $ et des objets dans le coffre de l'arrière-salle, 100 $ dans la caisse._", BEE]);
})();
