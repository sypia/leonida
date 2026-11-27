// Noms des étendues d'eau, lus sur l'affiche officielle « Visit Leonida ».
// Positions : emplacement du nom sur l'affiche, converti en coordonnées de la carte
// par un calage sur 12 villes (écart moyen de quelques centaines de pixels au zoom 6).
// s = taille : 1 océan / golfe, 2 baie / détroit, 3 rivière / lac.
window.EAUX = [
  { en: 'Atlantic Ocean',   fr: 'Océan Atlantique',  c: [36969, 23885], s: 1 },
  { en: 'Gulf of Leonida',  fr: 'Golfe de Leonida',  c: [14406, 36602], s: 1 },
  { en: 'Leonida Bay',      fr: 'Leonida Bay',       c: [21852, 41866], s: 2 },
  { en: 'Leonida Straits',  fr: 'Détroit de Leonida', c: [19464, 49169], s: 2 },
  { en: 'Capri Sound',      fr: 'Capri Sound',       c: [17045, 31162], s: 2 },
  { en: 'Draper Bay',       fr: 'Draper Bay',        c: [18116, 24442], s: 2 },
  { en: 'Borrachero Sound', fr: 'Borrachero Sound',  c: [17301, 27176], s: 2 },
  { en: 'San Malo Bay',     fr: 'San Malo Bay',      c: [20502, 19107], s: 2 },
  { en: 'Partridge Bay',    fr: 'Partridge Bay',     c: [29582, 15276], s: 2 },
  { en: 'Millport Basin',   fr: 'Bassin de Millport', c: [32911, 19978], s: 2 },
  { en: 'Bobcat Bight',     fr: 'Bobcat Bight',      c: [18862, 34783], s: 2 },
  { en: 'Tola Bay',         fr: 'Tola Bay',          c: [20905, 36413], s: 2 },
  { en: 'Catalan Bay',      fr: 'Catalan Bay',       c: [35614, 34591], s: 2 },
  { en: 'Peregrine Bay',    fr: 'Peregrine Bay',     c: [29893, 41044], s: 2 },
  { en: 'Gambit Bay',       fr: 'Gambit Bay',        c: [27454, 43115], s: 2 },
  { en: 'Lake Leonida',     fr: 'Lac Leonida',       c: [28790, 23438], s: 3 },
  { en: 'Moreau River',     fr: 'Moreau River',      c: [27480, 16456], s: 3 },
  { en: 'Nehrling River',   fr: 'Nehrling River',    c: [22001, 33293], s: 3 }
];
