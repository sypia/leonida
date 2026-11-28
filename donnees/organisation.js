// Organisation des catégories par thème, quelle que soit la source (Map Genie, Dexerto, gtadb.org, MapMaster).
// Ordre : les missions de l'histoire en tête, puis ce qui se visite, les activités, enfin le reste du jeu (collection, véhicules, braquages).
// Les catégories gardent leurs points ; seuls leur groupe, leur ordre et parfois leur nom changent.
(function () {
  const D = window.MG_DATA;
  if (!D) return;
  // Pictogramme hérité du groupe d'origine : on le fige avant de changer les groupes
  const oldGroup = {};
  D.groups.forEach(g => g.cats.forEach(id => { oldGroup[id] = g.title; }));
  if (window.ICONE_CAT && window.ICONE_GROUPE) {
    D.categories.forEach(c => {
      if (!window.ICONE_CAT[c.title] && window.ICONE_GROUPE[oldGroup[c.id]]) window.ICONE_CAT[c.title] = window.ICONE_GROUPE[oldGroup[c.id]];
    });
  }
  // Noms plus clairs pour les catégories de gtadb.org qui faisaient doublon avec celles de Map Genie
  const RENAME = { 990102: 'Restaurant', 990103: 'Other Shop', 990104: 'Bridges & Stations' };
  D.categories.forEach(c => {
    if (RENAME[c.id]) {
      if (window.ICONE_CAT && window.ICONE_CAT[c.title]) window.ICONE_CAT[RENAME[c.id]] = window.ICONE_CAT[c.title];
      c.title = RENAME[c.id];
    }
  });
  const GROUPS = [
    // --- Les missions d'abord ---
    [990000, 'Story & Secrets', [990001, 990002, 990003, 990005, 29082]],
    // --- À visiter ---
    [990100, 'Landmarks & Buildings', [990106, 990101, 990105, 990108, 990107]],
    [27132, 'Food & Nightlife', [990102, 29053, 29056, 29055, 29031]],
    [27131, 'Shops', [29042, 29043, 29044, 29045, 29046, 29047, 29048, 29049, 29050, 29041, 990103]],
    [991001, 'Getting Around', [29036, 29038, 29039, 990104, 990007, 990008, 29040]],
    [991002, 'Services', [29021, 29033, 29035, 29034, 29029, 29032, 29062, 29063]],
    // --- Activités ---
    [27123, 'Activities & Sports', [29030, 29011, 29013, 29015, 29061, 29196, 29017, 29028, 29099, 990006]],
    [27136, 'Races & Stunts', [29084, 29085, 29086, 29087, 29088, 29089, 29090, 29091, 29142, 29019, 29057, 29059, 29060]],
    // --- Le jeu ---
    [27137, 'Collectibles', [29155, 29182, 29150, 29120, 29093, 29166, 29143, 29144, 29183, 29184, 29185]],
    [27141, "Kenton's Treasures", [29146, 29148, 29149]],
    [27138, 'Collectible Cards', [29167, 29168, 29169, 29170, 29171, 29172, 29173, 29174, 29175, 29176, 29177, 29178, 29112, 29113, 29114, 29179, 29180, 29181]],
    [27134, 'WAiNK Locations', [29065, 29066, 29067, 29152, 29153]],
    [27144, 'AHOL Street Art - Geographies of Trash', [29159, 29163, 29165, 29162, 29161, 29158, 29154, 29164, 29156, 29160, 29157]],
    [27130, 'Vehicles to Steal', [29095, 29096, 29097, 990004, 29186]],
    [27129, 'Money & Robberies', [990301, 29022, 29023, 29024, 29025, 29026, 29027, 29051, 29052, 29054, 29083, 29037, 990201, 29216]],
    [27140, 'Illegal Operations', [29133, 29134, 29135, 29136, 29137, 29138, 29139, 29140, 29141]]
  ];
  const byId = {};
  D.categories.forEach(c => { byId[c.id] = c; });
  const placed = new Set();
  const groups = GROUPS.map(([id, title, cats], i) => {
    const list = cats.filter(cid => byId[cid] && !placed.has(cid));
    list.forEach((cid, k) => { placed.add(cid); byId[cid].group_id = id; byId[cid].order = k; });
    return { id, title, order: i + 1, cats: list };
  });
  // Une catégorie oubliée ici reste visible, dans un groupe « Autres »
  const rest = D.categories.filter(c => !placed.has(c.id)).map(c => c.id);
  if (rest.length) {
    rest.forEach(cid => { byId[cid].group_id = 991099; });
    groups.push({ id: 991099, title: 'Other', order: groups.length + 1, cats: rest });
  }
  D.groups = groups.filter(g => g.cats.length);
})();
