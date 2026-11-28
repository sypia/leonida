// Compléments aux fiches Map Genie encore incomplètes (« ?? »), d'après d'autres sources.
// Chaque correction ne remplace qu'un champ resté inconnu, et la fiche le signale.
(function () {
  const D = window.MG_DATA;
  if (!D) return;
  const FIX = {
    // Granforma Zorrusso (véhicule Randy, Hathaway Apartments) : fiche du modèle sur GTABase
    1091163: {
      fields: { 'Access': 'Key Cloner', 'Tracker': 'None', 'Sell Value': '$23,375', 'Cost to Register': '$87,400',
        'Type': 'Super', 'Seats': '2', 'Storage': '2', 'Specialist': 'Luxury' },
      note: "_Accès, traceur, valeur de revente, immatriculation, type, places, rangement et spécialiste complétés d'après la fiche du modèle sur GTABase (Map Genie ne les donne pas encore)._"
    }
  };
  D.locations.forEach(l => {
    const fx = FIX[l.id];
    if (!fx || !l.d) return;
    let d = l.d;
    Object.entries(fx.fields).forEach(([k, v]) => {
      d = d.replace(new RegExp('(\\*\\*' + k + ':\\*\\*\\s*)\\$?\\?\\?'), (m, a) => a + v);
    });
    l.d = d + '\n\n' + fx.note;
  });
})();
