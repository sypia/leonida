// Fusion des doublons entre sources : un même lieu présent chez Map Genie et chez gtadb.org (ou Dexerto)
// n'apparaît qu'une fois. On garde le point Map Genie et on lui ajoute ce que l'autre source apporte
// (modèle réel, photos, crédit). Critères : même nom (au suffixe de lieu près) et moins de 60 px (zoom 6).
(function () {
  const D = window.MG_DATA;
  if (!D) return;
  const cat = {};
  D.categories.forEach(c => { cat[c.id] = c.title; });
  const isGtadb = (l) => l.id >= 980000000 && l.id < 990000000 && cat[l.c] && D.groups.some(g => g.id === 990100 && g.cats.includes(l.c));
  const isMg = (l) => l.id < 900000000;
  // Catégories Map Genie qui sont un défi posé sur le lieu, pas le lieu lui-même : jamais fusionnées
  const NOT_PLACE = new Set(['Stunt Jump', 'Base Jump', 'Knife Flight', 'Under the Bridge', 'Pool Table', 'Top Fun Drones',
    'Standout Vehicle', 'Randy Vehicle', 'Moses Vehicle', 'Safe', 'Kingfishers', 'Meditation Spot']);
  const norm = (t) => String(t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/^the /, '').replace(/[^a-z0-9]+/g, ' ').trim();
  const same = (a, b) => {
    const x = norm(a), y = norm(b);
    if (!x || !y) return false;
    if (x === y) return true;
    // « Taco Bomb » et « Taco Bomb - Gellhorn », « Fleeca Bank » et « Key Lento Fleeca Bank »
    const [s, l] = x.length < y.length ? [x, y] : [y, x];
    return s.length >= 5 && (l.startsWith(s + ' ') || l.endsWith(' ' + s));
  };
  const mg = D.locations.filter(l => isMg(l) && !NOT_PLACE.has(cat[l.c]));
  const drop = new Set();
  function merge(from, to, extraLines) {
    const add = extraLines.filter(Boolean);
    if (add.length) to.d = (to.d ? to.d + '\n\n' : '') + add.join('\n');
    if (from.m && from.m.length) to.m = (to.m || []).concat(from.m);
    drop.add(from.id);
  }
  D.locations.forEach(l => {
    // gtadb.org -> Map Genie : on garde l'adresse, le modèle réel, l'accès intérieur, les photos et le crédit
    if (isGtadb(l)) {
      const twin = mg.find(m => Math.hypot(m.x - l.x, m.y - l.y) < 60 && same(m.t, l.t));
      if (twin) merge(l, twin, (l.d || '').split('\n').filter(s => !/^\*\*Address:\*\*/.test(s)));
    }
    // Dexerto « vol sur commande » -> véhicule Moses / Randy de Map Genie au même endroit
    if (cat[l.c] === 'Car Theft Request') {
      const name = l.t.replace(/\s*\((?:Moses|Randy)'s request\)\s*$/, '');
      const twin = D.locations.find(m => isMg(m) && /^(Moses|Randy) Vehicle$/.test(cat[m.c]) && Math.hypot(m.x - l.x, m.y - l.y) < 60 && same(m.t, name));
      if (twin) merge(l, twin, []);
    }
  });
  D.locations = D.locations.filter(l => !drop.has(l.id));
  // Catégorie vidée par la fusion : on la retire
  const used = new Set(D.locations.map(l => l.c));
  D.categories = D.categories.filter(c => used.has(c.id));
  D.groups.forEach(g => { g.cats = g.cats.filter(id => used.has(id)); });
  window.DOUBLONS_FUSIONNES = drop.size;
})();
