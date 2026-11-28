// Planques d'argent : butins cachés hors des braquages classiques.
// Seuls les lieux qu'on peut placer sans deviner sont repris : chaque point est posé sur un lieu déjà connu
// (même bâtiment chez Map Genie ou gtadb.org). Montants et astuces : guides de joueurs, recoupés quand c'est possible.
(function () {
  const D = window.MG_DATA;
  if (!D) return;
  const VP = '_Source : [VicePulse](https://vicepulse.org/gta-6/money/hidden-cash) (guide de joueurs)_';
  const CAT = { id: 990301, group_id: 27129, title: 'Cash Stash', icon: null, color: 'e0a030', order: 301, info: null };
  D.categories.push(CAT);
  const g = D.groups.find(g => g.id === CAT.group_id);
  if (g && !g.cats.includes(CAT.id)) g.cats.push(CAT.id);
  const at = (id) => D.locations.find(l => l.id === id);
  const add = (id, anchor, t, lines, extra) => {
    const a = at(anchor); if (!a) return;
    D.locations.push(Object.assign({ id, c: CAT.id, r: a.r, t, x: a.x, y: a.y, d: lines.join('\n') }, extra || {}));
  };
  // Avant-poste de recherche sur les crabes (Pelican Valley) : même cabane que la mitraillette Crabshack V5F
  add(960001001, 1099360, 'Crab Research Outpost', [
    '**Take Value:** $11,070',
    "_Environ 1 070 $ dans le coffre du bâtiment principal et un sac de 10 000 $ en billets marqués dans le hangar à bateaux, plus la mitraillette Crabshack V5F._",
    "_Codes : mot de passe CLEAVES sur l'ordinateur (après avoir remis le courant à l'arrière), coffre 0072, porte du hangar 0212._",
    '**Chapter:** 1',
    VP, '_Montant du sac de 10 000 $ et codes : plusieurs guides concordent (KeenGamer, OutputLag, Item Level Gaming, RaidDex)._'
  ]);
  // Entrepôt rouge d'Apollo Aggregates, à l'est de Hamlet (ours en peluche et cocaïne) : remplace le bâtiment gtadb au même endroit
  const apollo = at(980002453);
  add(960001002, 980002453, 'Apollo Aggregates Warehouse', [
    '**Take Value:** $13,000 - $20,000',
    "_Entrepôt sans gardes : sacs de billets marqués, cocaïne dans les camionnettes aux ours en peluche, argent sur les corps, armes, et un coffre avec la carte Leroy Rook (environ 6 000 $). À vider avant la fin du chapitre 1._",
    '**Chapter:** 1',
    VP, "_Fourchette : selon les guides, de 13 000 à 20 000 $ une fois tout revendu (RaidDex, OutputLag, Grand Leonida)._",
    '_Source : [GTA VI Landmarks Data](https://map.gtadb.org) (CC BY 4.0), gtadb.org et contributeurs (emplacement et photo)_'
  ], { m: apollo && apollo.m ? apollo.m : undefined });
  D.locations = D.locations.filter(l => l.id !== 980002453);
  // Bouche d'aération derrière Three Sheets Liquor (Key Lento), indiquée par le perroquet
  add(960001003, 1090282, "Three Sheets Liquor Parrot Stash", [
    '**Take Value:** $1,000 - $1,311',
    "_Derrière le magasin, dans la bouche d'aération près du générateur. Parle plusieurs fois au perroquet de la cage pour qu'il l'indique. À prendre avant que la police vide les lieux._",
    '**Chapter:** 1', VP
  ]);
  // Maison de Jason : enveloppe sous le plancher de la chambre, quand on revient au chapitre 2
  add(960001004, 916058122, "Jason's House Floorboards", [
    '**Take Value:** $5,000',
    "_Sous les lattes du plancher de la chambre, à l'étage : une enveloppe de 5 000 $ et des photos, à récupérer en revenant au chapitre 2. La cachette sert aussi à mettre ton argent à l'abri._",
    '**Chapter:** 2', VP
  ]);
  // Pearl House Hair Salon (Port Gellhorn) : arrière-salle et petite culture d'herbe
  add(960001005, 1091299, 'Pearl House Hair Salon Back Room', [
    '**Take Value:** $1,000 - $2,600',
    "_Entre par la porte de derrière, élimine les occupants, ouvre le coffre (environ 1 000 $) et prends les paquets d'herbe (environ 1 600 $ au total)._",
    VP
  ]);
  // Montants connus pour des lieux déjà sur la carte
  const hog = at(1090320);   // Office Safe - Hog Stars Garage
  if (hog) hog.d = '**Take Value:** $4,688\n' + (hog.d || '') + "\n_Le coffre est sous le frigo Sprunk Light du bureau._\n" + VP;
  const manatee = at(1091953);   // Manatee Hotel (Kingfishers)
  if (manatee && !/Take Value/.test(manatee.d || '')) manatee.d = (manatee.d || '').replace(/(\*\*Security:\*\*[^\n]*)/, '$1\n**Take Value:** $2,000') + '\n_Environ 2 000 $ en tout, avec un pistolet Nipper .38 et un pistolet lance-fusées._\n' + VP;
})();
