// Noms des étendues d'eau, lus sur l'affiche officielle « Visit Leonida ».
// Positions : emplacement du nom sur l'affiche, converti en coordonnées de la carte
// par un calage sur 12 villes (écart moyen de quelques centaines de pixels au zoom 6).
// s = taille : 1 océan / golfe, 2 baie / détroit, 3 rivière / lac.
// w, h = plus grand rectangle d'eau libre autour du nom (px au zoom 6), mesuré sur les tuiles :
// le nom ne s'affiche que quand il tient dedans, pour ne pas déborder sur la terre.
// Les positions ont été recentrées dans l'eau (déplacement de 500 px au plus).
window.EAUX = [
  { en: 'Atlantic Ocean',   fr: 'Océan Atlantique',  c: [36969, 23885], s: 1 },
  { en: 'Gulf of Leonida',  fr: 'Golfe de Leonida',  c: [14406, 36602], s: 1 },
  { en: 'Leonida Bay',      fr: 'Leonida Bay',       c: [21470, 42114], s: 2, w: 3742, h: 1247 },
  { en: 'Leonida Straits',  fr: 'Détroit de Leonida', c: [19462, 49248], s: 2, w: 9239, h: 3079 },
  { en: 'Capri Sound',      fr: 'Capri Sound',       c: [17045, 30672], s: 2, w: 2573, h: 857 },
  { en: 'Draper Bay',       fr: 'Draper Bay',        c: [18117, 23986], s: 2, w: 1871, h: 623 },
  { en: 'Borrachero Sound', fr: 'Borrachero Sound',  c: [17240, 27456], s: 2, w: 2105, h: 701 },
  { en: 'San Malo Bay',     fr: 'San Malo Bay',      c: [20456, 19171], s: 2, w: 1286, h: 428 },
  { en: 'Partridge Bay',    fr: 'Partridge Bay',     c: [29988, 15078], s: 2, w: 1520, h: 506 },
  { en: 'Millport Basin',   fr: 'Bassin de Millport', c: [32892, 19483], s: 2, w: 1988, h: 662 },
  { en: 'Bobcat Bight',     fr: 'Bobcat Bight',      c: [18507, 35136], s: 2, w: 1286, h: 428 },
  { en: 'Tola Bay',         fr: 'Tola Bay',          c: [21216, 36461], s: 2, w: 584, h: 194 },
  { en: 'Catalan Bay',      fr: 'Catalan Bay',       c: [35933, 34395], s: 2, w: 818, h: 272 },
  { en: 'Peregrine Bay',    fr: 'Peregrine Bay',     c: [29890, 41159], s: 2, w: 935, h: 311 },
  { en: 'Gambit Bay',       fr: 'Gambit Bay',        c: [27454, 43303], s: 2, w: 1286, h: 428 },
  { en: 'Lake Leonida',     fr: 'Lac Leonida',       c: [28799, 23109], s: 3, w: 2222, h: 740 },
  { en: 'Moreau River',     fr: 'Moreau River',      c: [27259, 16228], s: 3, w: 1052, h: 350 },
  { en: 'Nehrling River',   fr: 'Nehrling River',    c: [21860, 33421], s: 3, w: 1169, h: 389 }
];
