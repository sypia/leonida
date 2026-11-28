// Traduction française de la carte de Leonida.
// Les données d'origine (anglais, Map Genie) ne sont jamais modifiées : cette table
// fournit une version française, appliquée seulement quand on choisit « FR ».
// Les noms propres (commerces, rues, véhicules, armes, quartiers) restent en anglais.
// Traductions faites à la main : ce ne sont pas les noms officiels de la version française du jeu.
window.TRAD_FR = (function () {

  const groupes = {
    'Points of Interest': "Points d'intérêt",
    'Robberies': 'Braquages',
    'Vehicles': 'Véhicules',
    'Style': 'Style',
    'Food & Drink': 'Boire et manger',
    'Exploration': 'Exploration',
    "Kenton's Treasures": 'Trésors de Kenton',
    'Collectible Cards': 'Cartes à collectionner',
    'WAiNK Locations': 'Lieux WAiNK',
    'AHOL Street Art - Geographies of Trash': 'Art urbain AHOL - Géographies du déchet',
    'Sports': 'Sports',
    'Activities': 'Activités',
    'Stunts': 'Cascades',
    'Racing': 'Courses',
    'Illegal Operations': 'Opérations illégales',
    'Story & Secrets': 'Histoire et secrets'
  };

  const categories = {
    'Basketball Hoop': 'Panier de basket',
    'Golf Course': 'Golf',
    'Mini-Golf Course': 'Minigolf',
    'Shooting Range': 'Stand de tir',
    'Stunt Jump': 'Saut cascade',
    'ATM': 'Distributeur de billets',
    'Bank': 'Banque',
    'Big Bank': 'Grande banque',
    'Payday Loans': 'Prêts sur salaire',
    'Low-End Jewelry Store': 'Bijouterie bas de gamme',
    'High-End Jewelry Store': 'Bijouterie de luxe',
    'Pawn Shop': 'Prêteur sur gages',
    'Arcade Machine': "Borne d'arcade",
    "Pay 'N' Spray": "Pay 'N' Spray",
    'Gym': 'Salle de sport',
    'Club': 'Club',
    'Mod Shop': 'Atelier de tuning',
    'Gas Station': 'Station-service',
    'Car Wash': 'Station de lavage',
    'Electric Charger': 'Borne de recharge',
    'Bus Stop': 'Arrêt de bus',
    'ATM (Towable)': 'Distributeur (remorquable)',
    'Train Station': 'Gare',
    'Ferry Terminal': 'Terminal de ferry',
    'Rental Vehicle': 'Location de véhicules',
    'Ammu-Nation': 'Ammu-Nation',
    'Casual & Street': 'Décontracté et streetwear',
    'Sportswear': 'Vêtements de sport',
    'Formal': 'Tenues habillées',
    'Souvenir & Swimwear': 'Souvenirs et maillots de bain',
    'Thrift': 'Friperie',
    'Footwear': 'Chaussures',
    'Hair & Beauty': 'Coiffure et beauté',
    'Tattoos': 'Tatouages',
    'Electronics': 'Électronique',
    'Convenience Store': 'Supérette',
    'Fast Food': 'Fast-food',
    'Cafes & Takeout': 'Cafés et vente à emporter',
    'Liquor Store': "Magasin d'alcool",
    'Bar': 'Bar',
    'Street Food': 'Cuisine de rue',
    'Base Jump': 'Saut en BASE',
    'Knife Flight': 'Vol sur la tranche',
    'Under the Bridge': 'Sous le pont',
    'Pool Table': 'Billard',
    'Purchasable Garage': 'Garage à acheter',
    'Garage': 'Garage',
    'Landmark': 'Lieu emblématique',
    'Curiosity': 'Curiosité',
    'Sculpture': 'Sculpture',
    'Contact': 'Contact',
    'Safe': 'Coffre-fort',
    'Racing Introduction': 'Introduction aux courses',
    'Racing Challenge': 'Défi de course',
    'Thrillbilly Mud Club': 'Thrillbilly Mud Club',
    'Animal Crackers': 'Animal Crackers',
    "Hit 'n' Run VC": "Hit 'n' Run VC",
    'Hamlet Boone Speedway': 'Hamlet Boone Speedway',
    'Ambrosia Raceway': 'Ambrosia Raceway',
    'Gellhorn Raceway': 'Gellhorn Raceway',
    'Book Swap': 'Boîte à livres',
    'Standout Vehicle': "Véhicule d'exception",
    'Randy Vehicle': 'Véhicule pour Randy',
    'Moses Vehicle': 'Véhicule pour Moses',
    'Fishing Hotspot': 'Coin de pêche',
    'Jack of Hearts': 'Jack of Hearts',
    'Delights': 'Delights',
    'Nine1Nine': 'Nine1Nine',
    'Magazine': 'Magazine',
    'Kingfishers': 'Kingfishers',
    'Kolt & Associates': 'Kolt & Associates',
    'M7': 'M7',
    'La Polilla Negra': 'La Polilla Negra',
    'Final Chapter': 'Final Chapter',
    'San4San': 'San4San',
    'PTT Youngin$': 'PTT Youngin$',
    'The Guardia Brothers': 'Les frères Guardia',
    'Criminals': 'Criminels',
    'Top Fun Drones': 'Top Fun Drones',
    'Unique Playlist': 'Playlist unique',
    '1010 Mural': 'Fresque 1010',
    'Gold Doubloon': "Doublon d'or",
    'Shipwreck': 'Épave de navire',
    "Kenton's Treasure": 'Trésor de Kenton',
    'Underwater Discoveries': 'Découvertes sous-marines',
    'Peewee Billboard': 'Panneau Peewee',
    'NoFlusher Tag': 'Tag NoFlusher',
    'Mattress': 'Matelas',
    'Meteorite': 'Météorite',
    'Tire': 'Pneus',
    'Wheel': 'Roue',
    'Fridge': 'Frigo',
    'Armchair': 'Fauteuil',
    'TV': 'Télé',
    'Container': 'Conteneur',
    'Cone': 'Cône',
    'Bucket': 'Seaux',
    'Pallet': 'Palette',
    'Chair': 'Chaise',
    'Unique Weapon Variant': "Variante d'arme unique",
    'Los Santos Corkers': 'Los Santos Corkers',
    'Vice City Flamingos': 'Vice City Flamingos',
    'Liberty City Swingers': 'Liberty City Swingers',
    'Vice City Narcos': 'Vice City Narcos',
    'Los Santos Panic': 'Los Santos Panic',
    'Liberty City Penetrators': 'Liberty City Penetrators',
    'Vice City Manatees': 'Vice City Manatees',
    'Los Santos Pounders': 'Los Santos Pounders',
    'Liberty City Wrath': 'Liberty City Wrath',
    'Vice City Club de Futbol': 'Vice City Club de Futbol',
    'B.A.M. Backyard Wrestling': 'B.A.M. Backyard Wrestling',
    "America's Next Top Hooker": "America's Next Top Hooker",
    "Right Wing: America's Hero": "Right Wing: America's Hero",
    'Ed Universe': 'Ed Universe',
    'Legends of Ratface': 'Legends of Ratface',
    'Cocaine Flamingo': 'Flamant rose à la cocaïne',
    'Unique Style': 'Accessoire unique',
    'Unique Look': 'Look unique',
    'Watch': 'Montre',
    "Wyman's Untowables": 'Inremorquables de Wyman',
    'Meditation Spot': 'Lieu de méditation',
    'Kitty Litter Lab': 'Labo Kitty Litter',
    // Catégories reprises de la carte Dexerto
    'Story Mission': 'Mission principale',
    'Strangers & Freaks': 'Inconnus et détraqués',
    'Easter Egg': 'Easter egg',
    'Car Theft Request': 'Vol de voiture sur commande',
    'Safehouse': 'Planque',
    'Hunting': 'Chasse',
    'Airfield': 'Aérodrome',
    'Marina': 'Marina'
  };

  // Zones : on ne traduit que les mots génériques, les noms restent tels quels
  const regionsExactes = {
    'Kalaga National Park': 'Parc national de Kalaga',
    'Richard Barebone National Park': 'Parc national Richard Barebone',
    'MacAlister Gold Mine': "Mine d'or MacAlister",
    'Dawson Dam': 'Barrage Dawson',
    'Leonida State Prison': "Prison d'État de Leonida",
    'Tortoise Head Power Plant': 'Centrale électrique de Tortoise Head',
    'Breakwater Quarry': 'Carrière de Breakwater',
    'Mile Zero Air Station': 'Base aérienne de Mile Zero',
    'Gellhorn International Raceway': 'Circuit international de Gellhorn',
    'Manifest Canyon': 'Canyon Manifest'
  };
  const POINTS = { North: 'nord', South: 'sud', East: 'est', West: 'ouest', Central: 'centre', 'South West': 'sud-ouest', 'North West': 'nord-ouest', 'North East': 'nord-est', 'South East': 'sud-est' };
  function region(s) {
    if (!s) return s;
    if (regionsExactes[s]) return regionsExactes[s];
    let m = s.match(/^(South West|North West|North East|South East|North|South|East|West) (.+?) Count(?:y)?$/);
    if (m) return 'Comté de ' + m[2].replace(/^Vice Dale$/, 'Vice-Dale') + ' ' + POINTS[m[1]];
    m = s.match(/^(.+?) Count(?:y)?$/);
    if (m) return 'Comté de ' + m[1];
    return s;
  }

  // Titres complets traduits tels quels (le reste passe par les règles plus bas)
  const titres = {
    // Lieux de méditation
    'Ascent Meditation': "Méditation de l'ascension",
    'Jutting Cliff Meditation Spot': 'Lieu de méditation de la falaise en surplomb',
    'Learn to Meditate Together Spot': 'Apprendre à méditer ensemble',
    'Red Rocks Meditation Spot': 'Lieu de méditation des roches rouges',
    'Seaside Meditation Spot': 'Lieu de méditation du bord de mer',
    'Smooth Sand Meditation Spot': 'Lieu de méditation du sable lisse',
    'Swamp Meditation Spot': 'Lieu de méditation du marais',
    'Water Wheel Meditation Spot': 'Lieu de méditation de la roue à aubes',
    'Waterfall Meditation Spot': 'Lieu de méditation de la cascade',
    'Worn Stone Meditation Spot': 'Lieu de méditation de la pierre usée',
    // Accessoires uniques
    'Beach Sunglasses': 'Lunettes de soleil de plage',
    'Bungee Jumper Glasses': 'Lunettes de saut à l\'élastique',
    'Circles of Hell Shirt': 'T-shirt Circles of Hell',
    'Dino Hat': 'Chapeau dino',
    'Flat Bill Hat': 'Casquette à visière plate',
    'Foam Hat': 'Chapeau en mousse',
    'Forest Ranger Sunglasses': 'Lunettes de soleil de garde forestier',
    'Hawaiian Shirt': 'Chemise hawaïenne',
    'Hollow Earth Cap': 'Casquette Hollow Earth',
    'Hunting Hat': 'Chapeau de chasse',
    'Luchador Mask': 'Masque de luchador',
    'Paint Respirator Mask': 'Masque respiratoire de peintre',
    'Snakeskin Bucket Hat': 'Bob en peau de serpent',
    // Trésors de Kenton
    'Ancient Bracelet': 'Bracelet ancien',
    'Ancient Ceremonial Mask': 'Masque cérémoniel ancien',
    'Ancient Ingot': 'Lingot ancien',
    'Ancient Snuff Box': 'Tabatière ancienne',
    'Antique Candlestick': 'Chandelier ancien',
    'Astrolabe': 'Astrolabe',
    'Avian Plate': 'Assiette aux oiseaux',
    'Battered Doubloon': 'Doublon cabossé',
    'Brass Spyglass': 'Longue-vue en laiton',
    "Captain's Whistle": 'Sifflet du capitaine',
    'Ceramic Pirate': 'Pirate en céramique',
    'Ceremonial Bowl': 'Bol cérémoniel',
    'Ceremonial Knife': 'Couteau cérémoniel',
    'Cermonial Knife': 'Couteau cérémoniel',
    'Ceremonial Plate': 'Assiette cérémonielle',
    'Ceremonial Spoon': 'Cuillère cérémonielle',
    'Dividing Compass': 'Compas à pointes sèches',
    'Dragon Pipe': 'Pipe au dragon',
    'Gold Doubloon': "Doublon d'or",
    'Gold Doubloons': "Doublons d'or",
    'Golden Chalice': "Calice d'or",
    'Golden Fish': "Poisson d'or",
    'Golden Glove': "Gant d'or",
    'Golden Llama': "Lama d'or",
    'Golden Pendant': "Pendentif d'or",
    'Golden Statuette': "Statuette d'or",
    'Ivory Saint': "Saint en ivoire",
    'Ivory Sundial': 'Cadran solaire en ivoire',
    'Jade-Eye Cup': 'Coupe aux yeux de jade',
    'Jade-Lobe Tankard': 'Chope aux lobes de jade',
    "Lover's Grail": 'Graal des amants',
    'Naval Hourglass': 'Sablier de marine',
    'Ornate Pocket Watch': 'Montre de poche ouvragée',
    'Pewter Gauntlet': 'Gantelet en étain',
    "Pirate's Buckle": 'Boucle de pirate',
    'Purple Gemstone': 'Pierre précieuse violette',
    'Rusty Doubloon': 'Doublon rouillé',
    'Sacred Necklace': 'Collier sacré',
    'Serpentine Statue': 'Statue serpentine',
    'Shiny Doubloon': 'Doublon brillant',
    'Sierra Santa Bell': 'Cloche de la Sierra Santa',
    'Santa Eulalia Bell': 'Cloche de la Santa Eulalia',
    'Silver Hip Flask': "Flasque en argent",
    'Stained Doubloon': 'Doublon taché',
    'Worn Doubloon': 'Doublon usé',
    // Curiosités
    'Abismo Key Carcass': "Carcasse d'Abismo Key",
    'Anti Sugar Residence': 'Résidence anti-sucre',
    'Beach Party Site': 'Site de fête sur la plage',
    'Belville Topiary': 'Topiaire de Belville',
    'Big Entrance': 'Grande entrée',
    'C0-B8 Debris': 'Débris du C0-B8',
    'C0-B8 Engine': 'Moteur du C0-B8',
    'C0-B8 Fairing': 'Carénage du C0-B8',
    'Christmas House': 'Maison de Noël',
    'Dead Sharks': 'Requins morts',
    'Desert Island Piano': "Piano de l'île déserte",
    'Deserted Home': 'Maison abandonnée',
    'Fairy Lane': 'Allée des fées',
    'Fingerpost': 'Poteau indicateur',
    'Fossilized Prints': 'Empreintes fossilisées',
    'Goose Key Carcass': 'Carcasse de Goose Key',
    'Halloween House': "Maison d'Halloween",
    'Hovercraft Crash': "Aéroglisseur accidenté",
    'Imperial Spanish Ruins': 'Ruines impériales espagnoles',
    'Intriguing Substance': 'Substance intrigante',
    'Lovers Lookout': 'Belvédère des amoureux',
    'Mermaid Display': 'Vitrine de sirène',
    'NoFlusher Homestead': 'Ferme de NoFlusher',
    'Pet Cemetery': 'Cimetière des animaux',
    'Plunge Masters Deep Sea Chalet': 'Chalet des grands fonds Plunge Masters',
    'Promotional Sand Vehicles': 'Véhicules promotionnels en sable',
    'Selkie Hole': 'Trou de la selkie',
    'Spaceship House': 'Maison vaisseau spatial',
    'Unidentified Animal Pen (UAP)': 'Enclos à animaux non identifiés (UAP)',
    'Vibrant Pond': 'Étang éclatant',
    'Wetman Bay Carcass': 'Carcasse de Wetman Bay',
    'Wreck of the Meerwunder': 'Épave du Meerwunder',
    // Lieux emblématiques
    'Badger R&D Tower': 'Tour R&D Badger',
    'Belpoint Lighthouse': 'Phare de Belpoint',
    'Bobcat Key Experimental Home': 'Maison expérimentale de Bobcat Key',
    'Bonanza Giant': 'Géant de Bonanza',
    'Courtland Park Stadium': 'Stade de Courtland Park',
    'Derelict Spy Vessel': "Navire espion à l'abandon",
    'Dock Ring': 'Anneau du quai',
    'Downtown Periscope': 'Périscope de Downtown',
    "Farmer Scrumpy's Apple Orchard": 'Verger du fermier Scrumpy',
    'Gellhorn Fun Fair': 'Fête foraine de Gellhorn',
    'Grayson Cairns': 'Cairns de Grayson',
    'Hoffman Observatory': 'Observatoire Hoffman',
    "Howe Dairy Farm's Big Udder": 'Grand pis de la laiterie Howe',
    "IAA's Friends of Freedom": "Les amis de la liberté de l'IAA",
    'Kalaga Lookout': 'Belvédère de Kalaga',
    'Lawton Co. Paper Mill': 'Papeterie Lawton Co.',
    "Outlaw's Cabin": 'Cabane du hors-la-loi',
    'Pelican valley Observation Tower': "Tour d'observation de Pelican Valley",
    'Riquezas Keys Radome': 'Radôme de Riquezas Keys',
    'Sky Ride': 'Télésiège',
    'St. Lucia Lighthouse': 'Phare de St. Lucia',
    'Tallaloko Amphitheater': 'Amphithéâtre de Tallaloko',
    "Tucker's Citrus Farms Water Tower": "Château d'eau des vergers d'agrumes Tucker",
    'Unidentified Building': 'Bâtiment non identifié',
    'Vice City Sign': 'Panneau Vice City',
    'Wild Hog Point Radar Base': 'Base radar de Wild Hog Point',
    // Sculptures
    'Blanco Memorial': 'Mémorial Blanco',
    'Buckskin Swamp Totem': 'Totem de Buckskin Swamp',
    'Catalan Blvd Garden': 'Jardin de Catalan Blvd',
    'Chariot to Valhalla': 'Char vers le Valhalla',
    'Colossus': 'Colosse',
    'Fatal Incursion Plaque': "Plaque de l'incursion fatale",
    'Grassrivers Visitor Center Status': "Statue du centre d'accueil de Grassrivers",
    'Junkyard T-Rex': 'T-Rex de la casse',
    'Large Lure': 'Grand leurre',
    'Leonida Snow': 'Neige de Leonida',
    'Monument of Leonida': 'Monument de Leonida',
    'Monument of Leonidan Supremacy': 'Monument de la suprématie léonidienne',
    'Neptune Rises': 'Neptune se lève',
    'Pixel Fountain': 'Fontaine pixel',
    'Princess Robot Bubblegum Statue': 'Statue Princess Robot Bubblegum',
    'The Grand Turkey of Capri': 'La grande dinde de Capri',
    'The Wonder Whale': 'La baleine merveilleuse',
    'Thrillbilly Mascot': 'Mascotte du Thrillbilly',
    'Triangler Sculpture': 'Sculpture Triangler',
    'Vice Museum of Art Sculpture': "Sculpture du musée d'art de Vice",
    // Découvertes sous-marines
    'Aquatic Bones': 'Ossements aquatiques',
    'Bobcat Key Carcass': 'Carcasse de Bobcat Key',
    'Capri Sound Carcass': 'Carcasse de Capri Sound',
    'Coral Farm': 'Ferme de corail',
    'Downed Private Jet': 'Jet privé abattu',
    'Freighter Wreck': 'Épave de cargo',
    'Kraken Sculpture': 'Sculpture de kraken',
    'Leonida Bay Carcass': 'Carcasse de Leonida Bay',
    'Old Shipwreck': 'Vieille épave',
    'Sailboat Wreck': 'Épave de voilier',
    'Selfie Circle': 'Cercle à selfies',
    'Submerged Fishing Boat': 'Bateau de pêche immergé',
    'Sunken Fighter Plane': 'Avion de chasse englouti',
    'Sunken Fishing Vessel': 'Navire de pêche englouti',
    'Sunken Helicopter': 'Hélicoptère englouti',
    'Sunken Passenger Jet': 'Avion de ligne englouti',
    'Sunken Yacht': 'Yacht englouti',
    'Trolley Car Reefs': 'Récifs des tramways',
    'Underwater Hotel': 'Hôtel sous-marin',
    'Wrecked Galleon': 'Galion naufragé',
    'Wrecked Sailing Ship': 'Voilier naufragé',
    'Wrecked Submarine': 'Sous-marin naufragé',
    // Opérations illégales et criminels
    'Backroom Weed Front': "Cannabis en arrière-boutique",
    'Carter Mining Boathouse': 'Hangar à bateaux de Carter Mining',
    'Cigar Import Front': "Façade d'import de cigares",
    'Exotic Animals Front': "Façade d'animaux exotiques",
    'Exotic Animal Front': "Façade d'animaux exotiques",
    'Gas Station Meth Front': 'Labo de meth dans une station-service',
    'Industrial Weed Grow': 'Plantation industrielle de cannabis',
    'Leonida Carrier Warehouse': 'Entrepôt de Leonida Carrier',
    'Mill Station Radar Base': 'Base radar de Mill Station',
    'Ocean Beach Lab': "Labo d'Ocean Beach",
    'Vespucci Mansion': 'Manoir Vespucci',
    'Walker Farm': 'Ferme Walker',
    'Fishing Shacks': 'Cabanes de pêcheurs',
    'Stash House': 'Planque',
    'Weed Grow': 'Plantation de cannabis',
    'Watson Bay Safehouse': 'Planque de Watson Bay',
    'Watson Bay Safe House': 'Planque de Watson Bay',
    'Palmer Fishing Warehouse': 'Entrepôt de pêche Palmer',
    'Biker Hideout': 'Repaire des motards',
    'Fam Fix Meth Lab': 'Labo de meth Fam Fix',
    'Farm Fix Meth Lab': 'Labo de meth Farm Fix',
    'Illegal Sneaker Trade': 'Trafic de baskets',
    'La Perle Trap House': 'Point de deal de La Perle',
    'Southside Trap House': 'Point de deal de Southside',
    'Illegal Goods Store': 'Magasin de marchandises illégales',
    'Kamar Devon Community Center': 'Centre communautaire Kamar Devon',
    'Saber Shipping Facility': 'Installations de Saber Shipping',
    'Saber Shipping Yard': 'Chantier de Saber Shipping',
    'June Warehouse': 'Entrepôt June',
    'Manatee Motel': 'Motel Manatee',
    // Stands de tir
    'Griffin Shooting Range': 'Stand de tir Griffin',
    'Griffin 3-Point Range': 'Griffin - Parcours à trois postes',
    'Griffin Compound Range': 'Griffin - Parcours du complexe',
    'Griffin Free Fire Range': 'Griffin - Tir libre',
    'Griffin Hook Range': 'Griffin - Parcours en crochet',
    'Griffin Loop Range': 'Griffin - Parcours en boucle',
    'Griffin Maze Range': 'Griffin - Parcours labyrinthe',
    'Griffin Villa Range': 'Griffin - Parcours des villas',
    'Rodgers Ranch & Shooting Range': 'Ranch et stand de tir Rodgers',
    'Rodgers Ranch Alien Range': 'Rodgers Ranch - Parcours extraterrestre',
    'Rodgers Ranch Cops & Robbers Range': 'Rodgers Ranch - Parcours gendarmes et voleurs',
    'Rodgers Ranch Hunting Range': 'Rodgers Ranch - Parcours de chasse',
    'Rodgers Ranch Market Range': 'Rodgers Ranch - Parcours du marché',
    'Rodgers Ranch Saloon Range': 'Rodgers Ranch - Parcours du saloon',
    'Rodgers Ranch Zombie Range': 'Rodgers Ranch - Parcours zombie',
    // Labos
    'East La Perle Trailer – Kitty Litter Labs Introduction': 'Caravane de La Perle est - Introduction aux labos Kitty Litter',
    'Decor District Lab': 'Labo de Decor District',
    // Contacts
    "Brian's Lockup": 'Box de Brian',
    "Donnie's Trailer": 'Caravane de Donnie',
    "Dunk's Trailer": 'Caravane de Dunk',
    // Cuisine de rue
    'Bakery Stall': 'Étal de boulangerie',
    'Boiled Peanuts Stand': 'Stand de cacahuètes bouillies',
    'Burger Stall': 'Stand de burgers',
    'Coffee Stall': 'Stand de café',
    'Flea Market BBQ Stand': 'Stand barbecue du marché aux puces',
    'Flea Market Fruit Stalls': 'Étals de fruits du marché aux puces',
    'Juice Stall': 'Stand de jus',
    'Kiosk': 'Kiosque',
    'Ocean Beach Refreshments': "Rafraîchissements d'Ocean Beach",
    'Orange Juice Stall': "Stand de jus d'orange",
    'Produce Stall': 'Étal de fruits et légumes',
    'Refreshments Stall': 'Buvette',
    'Refreshments Stand': 'Buvette',
    'Thrillbilly Mud Club BBQ Tent': 'Tente barbecue du Thrillbilly Mud Club',
    'Towels & Refreshments': 'Serviettes et rafraîchissements',
    'Tropical Juice Stand': 'Stand de jus tropicaux',
    'Wine Stall': 'Stand de vin',
    'Wine Stand': 'Stand de vin',
    'Y Hotel Beach Bar': 'Y Hotel - bar de plage',
    'Thrillbilly Mud Club Drinks Tent': 'Thrillbilly Mud Club - tente à boissons',
    'Thrillbilly Mud Club Bar': 'Thrillbilly Mud Club - bar',
    'Ambrosia Raceway Park Bar': 'Ambrosia Raceway - bar du parc',
    'Courtyard Bar': 'Bar de la cour',
    // Divers
    'Safe': 'Coffre-fort',
    'ATM': 'Distributeur de billets',
    'ATM (Towable)': 'Distributeur (remorquable)',
    'Electric Vehicle Charger': 'Borne de recharge',
    'Vice-Dale Billboard': 'Panneau publicitaire - Vice-Dale',
    'Mariana County Billboard': 'Panneau publicitaire - Comté de Mariana',
    'Lummox County Billboard': 'Panneau publicitaire - Comté de Lummox',
    'Leonard County Billboard': 'Panneau publicitaire - Comté de Leonard'
  };

  // Poissons : noms français courants (laissés en anglais quand je ne suis pas sûr)
  const poissons = {
    'American Eel': "Anguille d'Amérique",
    'Atlantic Herring': "Hareng de l'Atlantique",
    'Atlantic Tarpon': "Tarpon de l'Atlantique",
    'Bluegill': 'Crapet arlequin',
    'Candy Fish': 'Poisson bonbon',
    'Channel Catfish': 'Barbue de rivière',
    'Cobia': 'Cobia',
    'Florida Gar': 'Lépisosté de Floride',
    'Great Barracuda': 'Grand barracuda',
    'Greater Amberjack': 'Sériole couronnée',
    'Green Moray Eel': 'Murène verte',
    'Largemouth Bass': 'Achigan à grande bouche',
    'Mahi-Mahi': 'Mahi-mahi (coryphène)',
    'Red Lionfish': 'Rascasse volante',
    'Spotted Moray Eel': 'Murène tachetée',
    'Striped Bass': 'Bar rayé',
    'Yellowfin Tuna': 'Thon albacore',
    'Yellowtail Snapper': 'Vivaneau à queue jaune'
  };

  // Variantes des cartes à collectionner
  const variantes = {
    'Standard': 'Standard', 'Bronze': 'Bronze', 'Silver': 'Argent', 'Gold': 'Or',
    'Blue': 'Bleu', 'Bright Orange': 'Orange vif', 'Deep Red': 'Rouge foncé', 'Dusty Pink': 'Vieux rose',
    'Green': 'Vert', 'Light Blue': 'Bleu clair', 'Maroon': 'Bordeaux', 'Navy Blue': 'Bleu marine',
    'Orange': 'Orange', 'Pink': 'Rose', 'Purple': 'Violet', 'Red': 'Rouge', 'Teal': 'Bleu canard',
    'White': 'Blanc', 'Yellow': 'Jaune'
  };

  // Looks uniques (coiffures, maquillages) : la partie après le tiret
  const looks = {
    'Cowboy Horseshoe Mustache': 'Moustache fer à cheval de cow-boy',
    'Lumberjack': 'Bûcheron',
    'Mutton Chops': 'Favoris',
    'Square Goatee': 'Bouc carré',
    'Van Dyke': 'Van Dyke',
    'Walrus Mustache': 'Moustache de morse',
    'Blonde-Brown Side Part Curtains': 'Raie sur le côté en rideau, blond-brun',
    'Green-Red Triangle Buzz Cut': 'Boule à zéro à triangles vert-rouge',
    'Light Blonde Wavy Spikes': 'Pointes ondulées blond clair',
    'Platinum Undercut Mullet': 'Mulet undercut platine',
    'Rainbow Leopard Buzz Cut': 'Boule à zéro léopard arc-en-ciel',
    'Red Braided Cornrows Top Knot': 'Tresses africaines rouges et chignon',
    'Rose Buzz Cut': 'Boule à zéro rose',
    'Ear Web Buzz Cut': "Boule à zéro à toile d'araignée",
    'Floral Bun & Wavy Framing': 'Chignon fleuri et mèches ondulées',
    'High Bun & MyMy Clip': 'Chignon haut et barrette MyMy',
    'Lilac-Brown 90s Beachy Waves': 'Ondulations plage années 90, lilas-brun',
    'Pixie Cut': 'Coupe pixie',
    'Rose High Twin Buns': 'Deux chignons hauts roses',
    'Spiky Bun & Framing': 'Chignon hérissé et mèches',
    '80s Pop Shimmer': 'Paillettes pop années 80',
    'Blue Smoky': 'Smoky bleu',
    'Diamond Adorned Pink Cat Eye': 'Œil de chat rose orné de diamants',
    'Gothic Garnet': 'Grenat gothique',
    'Orange Purple Neon Cat Eye': 'Œil de chat néon orange et violet',
    'Pop Star': 'Pop star',
    'Sunset Blush': 'Blush coucher de soleil',
    'Tiger Eyes': 'Yeux de tigre'
  };
  const lookPrefixes = {
    'Facial Hairstyle': 'Pilosité faciale', 'Jason Hairstyle': 'Coiffure de Jason',
    'Lucia Hairstyle': 'Coiffure de Lucia', 'Makeup Style': 'Maquillage', 'Tattoo': 'Tatouage'
  };

  const AHOL = { Armchair: 'Fauteuil', Buckets: 'Seaux', Chair: 'Chaise', Cone: 'Cône', Container: 'Conteneur',
    Fridge: 'Frigo', Mattress: 'Matelas', Pallet: 'Palette', Tires: 'Pneus', TV: 'Télé', Wheel: 'Roue' };
  const COFFRES = {
    'Office Safe': 'Coffre-fort du bureau', 'Armory Safe': "Coffre-fort de l'armurerie",
    'Dock Warehouse Safe': "Coffre-fort de l'entrepôt du quai", 'Garage Safe': 'Coffre-fort du garage',
    'Lieutenant Room Safe': 'Coffre-fort de la chambre du lieutenant', 'Locked Safe': 'Coffre-fort verrouillé',
    'RV Safe': 'Coffre-fort du camping-car', 'Warehouse Safe': "Coffre-fort de l'entrepôt", 'Safe': 'Coffre-fort'
  };
  const LABOS = { Trailer: 'Labo de la caravane', Condo: "Labo de l'appartement", Lockup: 'Labo du box' };
  const BARS = {
    'Balcony VIP': 'bar VIP du balcon', 'Rooftop Pool': 'bar de la piscine sur le toit', 'Poolside': 'bar de la piscine',
    'Rooftop': 'bar sur le toit', 'Outdoor': 'bar extérieur', 'Lobby': 'bar du hall', 'Indoor': 'bar intérieur',
    'VIP': 'bar VIP', 'Beachside': 'bar de plage', 'Waterside': "bar au bord de l'eau", 'Deck': 'bar de la terrasse',
    'Restaurant': 'bar du restaurant', 'Main': 'bar principal', 'Pool': 'bar de la piscine', 'Lounge': 'bar lounge',
    'Vineyard': 'bar du vignoble', 'Beach': 'bar de plage'
  };
  const EPREUVES = {
    'Raceway Trial': 'Épreuve sur circuit', 'Dragway Trial': "Épreuve d'accélération", 'Speedway Trial': 'Épreuve sur speedway',
    'BMX Stunt Run': 'Parcours de cascades en BMX', 'Cycling Trial': 'Épreuve cycliste',
    'Air Time Stunt Run': 'Parcours de cascades aériennes', 'Dirt Track Trial': 'Épreuve sur piste en terre',
    'Drag Trial': "Épreuve d'accélération", 'Hill Climb Trial': 'Épreuve de course de côte', 'Oval Trial': 'Épreuve sur ovale',
    'Swamp Run Trial': 'Épreuve dans le marais', 'Motocross Stunt Run': 'Parcours de cascades en motocross',
    'Oval': 'Ovale', 'Figure 8': 'Huit', 'Introduction': 'Introduction',
    'Basic Loop': 'Boucle de base', 'Short Loop': 'Boucle courte', 'Intermediate Loop': 'Boucle intermédiaire',
    'Long Loop': 'Boucle longue', 'Full Loop': 'Boucle complète'
  };
  const CARTES = new Set(['Collectible Cards']);

  function lieuNom(s) { return titres[s] || region(s); }

  function titre(t, catEn, groupEn) {
    if (!t) return t;
    if (titres[t]) return titres[t];
    let m;
    if ((m = t.match(/^Meteorite (\d+)$/))) return 'Météorite ' + m[1];
    if ((m = t.match(/^Cocaine Flamingo (\d+)$/))) return 'Flamant rose à la cocaïne ' + m[1];
    if ((m = t.match(/^Gold Doubloon (\d+)$/))) return "Doublon d'or " + m[1];
    if ((m = t.match(/^Book Swap (\d+)$/))) return 'Boîte à livres ' + m[1];
    if ((m = t.match(/^NoFlusher Tag (\d+)$/))) return 'Tag NoFlusher ' + m[1];
    if ((m = t.match(/^Hoop (\d+) [–-] (.+)$/))) return 'Panier ' + m[1] + ' - ' + region(m[2]);
    if ((m = t.match(/^Hotspot - (.+)$/))) return 'Coin de pêche - ' + (poissons[m[1]] || m[1]);
    if ((m = t.match(/^Opponent Pool - (.+)$/))) return 'Partie de billard - ' + m[1];
    if ((m = t.match(/^(.+) Stunt Jump$/))) return 'Saut cascade - ' + m[1];
    if ((m = t.match(/^(.+) Base Jump$/))) return 'Saut en BASE - ' + m[1];
    if ((m = t.match(/^(.+) Knife Flight$/))) return 'Vol sur la tranche - ' + m[1];
    if ((m = t.match(/^(Armchair|Buckets|Chair|Cone|Container|Fridge|Mattress|Pallet|Tires|TV|Wheel) (\d+) - (.+)$/))) return AHOL[m[1]] + ' ' + m[2] + ' - ' + region(m[3]);
    if ((m = t.match(/^((?:Office|Armory|Dock Warehouse|Garage|Lieutenant Room|Locked|RV|Warehouse) )?Safe( \d+)? - (.+)$/))) return COFFRES[(m[1] || '') + 'Safe'] + (m[2] || '') + ' - ' + lieuNom(m[3]);
    if ((m = t.match(/^(?:(North|South|East|West|Central) )?(.+) (Trailer|Condo|Lockup) Lab$/))) return LABOS[m[3]] + ' - ' + m[2] + (m[1] ? ' ' + POINTS[m[1]] : '');
    if ((m = t.match(/^(.+) Big Bank( \d+)?$/))) return m[1] + ' (grande banque' + (m[2] || '') + ')';
    if ((m = t.match(/^(.+) - (.+?)( CCW)?$/)) && EPREUVES[m[2]]) return m[1] + ' - ' + EPREUVES[m[2]] + (m[3] ? ' (sens antihoraire)' : '');
    if ((m = t.match(/^(Facial Hairstyle|Jason Hairstyle|Lucia Hairstyle|Makeup Style|Tattoo) - (.+)$/))) return lookPrefixes[m[1]] + ' - ' + (looks[m[2]] || m[2]);
    if (CARTES.has(groupEn) && (m = t.match(/^(.+) - ([^-]+)$/)) && variantes[m[2]]) return m[1] + ' - ' + variantes[m[2]];
    if (catEn === 'Bar' && (m = t.match(/^(.+?) (Balcony VIP|Rooftop Pool|Poolside|Rooftop|Outdoor|Lobby|Indoor|VIP|Beachside|Waterside|Deck|Restaurant|Main|Pool|Lounge|Vineyard|Beach) Bar$/))) return m[1] + ' - ' + BARS[m[2]];
    if (catEn === 'Peewee Billboard' && (m = t.match(/^(.+) Billboard$/))) return 'Panneau publicitaire - ' + region(m[1]);
    return t;
  }

  // --- Descriptions ---
  const rubriques = {
    'Location': 'Emplacement', 'Legend': 'Emplacement', 'Security': 'Sécurité', 'Route': 'Lignes', 'Type': 'Type',
    'Features': 'Équipements', 'Take Value': 'Butin', 'Challenge': 'Défi', 'Access': 'Accès', 'Tracker': 'Traceur',
    'Era': 'Époque', 'Body Condition': 'État de la carrosserie', 'Seats': 'Places', 'Specialist': 'Spécialiste',
    'Storage': 'Rangement', 'Style': 'Style', 'Race Number': 'Numéro de course', 'Sell Value': 'Valeur de revente',
    'Par Time': 'Temps de référence', 'Cost to Register': "Coût d'immatriculation", 'Reward': 'Récompense',
    'Key Valuables': 'Objets de valeur clés', 'Max Payout': 'Gain maximum', 'Laps': 'Tours', 'Racers': 'Concurrents',
    'Buy In': "Droit d'entrée", 'Rating': 'Indice', 'Rental Car': 'Voiture de location', 'Price': 'Prix',
    'Inventory': 'Assortiment', 'Things to Steal': 'Objets à voler', 'Specialty': 'Spécialité', 'Medals': 'Médailles',
    'Cost': 'Coût', 'Class': "Types d'armes", 'Parking Spots': 'Places de parking', 'Book': 'Livre',
    'Membership Cost': "Prix de l'abonnement", 'Drop-off Prices': 'Prix de reprise', 'Treasure': 'Trésor',
    'Treasures': 'Trésors', 'Vehicle Rental': 'Location de véhicule', 'Vehicle': 'Véhicule', 'Waiver': 'Décharge',
    'Track Marshal': 'Commissaire de piste', 'Time to beat': 'Temps à battre'
  };
  const SPEC = {
    'Chopper': 'Choppers', 'Muscle': 'Muscle cars', 'Tuner': 'Tuning', 'Off-Road': 'Tout-terrain', 'Off-road': 'Tout-terrain',
    'None': 'Aucun', 'Dirt Bikes': 'Motos tout-terrain', 'Sports Bikes': 'Motos sportives', 'Lowriders': 'Lowriders',
    'Hot Rods': 'Hot rods', 'Luxury': 'Luxe', 'Retro': 'Rétro', 'Donks': 'Donks', 'Vinyl': 'Vinyles', 'Racing': 'Course'
  };
  const valeurs = {
    'Security': { 'Medium': 'Moyenne', 'High': 'Élevée', 'Low': 'Faible', 'Alarmed': 'Alarme', 'None': 'Aucune', 'Deactivated': 'Désactivée' },
    'Access': { 'Locked': 'Verrouillé', 'Unlocked': 'Ouvert', 'Key Cloner': 'Cloneur de clés' },
    'Tracker': { 'None': 'Aucun', 'Standard': 'Standard', 'Advanced': 'Avancé', 'Tracker': 'Traceur' },
    'Body Condition': { 'Top': 'Excellent', 'Scrap': 'Épave', 'Good': 'Bon', 'Average': 'Moyen', 'Poor': 'Mauvais' },
    'Storage': { 'N/A': 'Aucun', 'n/a': 'Aucun' },
    'Specialist': SPEC, 'Specialty': SPEC,
    'Style': {
      'Casual': 'Décontracté', 'Streetwear': 'Streetwear', 'Sportswear': 'Vêtements de sport', 'Formal': 'Habillé',
      'Souvenir': 'Souvenirs', 'Swimwear': 'Maillots de bain', 'Thrift': 'Friperie', 'Beauty Salon': 'Salon de beauté',
      'Beauty Salong': 'Salon de beauté', 'Barber': 'Barbier', 'Unisex': 'Unisexe',
      'Geometric & Blackwork': 'Géométrique et blackwork', 'New School': 'New school', 'Neo-Traditional': 'Néo-traditionnel',
      'Old School': 'Old school', 'Anime': 'Anime', 'Illustrative': 'Illustratif', 'Lettering': 'Lettrage',
      'Black & Gray': 'Noir et gris', 'American Traditional': 'Traditionnel américain', 'Stick & Poke': 'Stick and poke'
    },
    'Inventory': {
      'Everyday - Standard': 'Courant, standard', 'Everyday - Limited': 'Courant, limité', 'Premium - Expanded': 'Premium, élargi',
      'Hunting': 'Chasse', 'Pawn - Standard': 'Prêteur sur gages, standard'
    },
    'Class': { 'Pistol, Shotgun, Rifle': 'Pistolet, fusil à pompe, fusil', 'Sniper Rifle': 'Fusil de précision', 'Pistol': 'Pistolet' },
    'Rating': { '500-780 Car': '500-780, voiture' },
    'Vehicle': { 'Rentals Only': 'Location uniquement' },
    'Type': {
      'Requires Partner': 'Partenaire requis', 'Individual': 'Seul', 'Chopper': 'Chopper', 'Sedan': 'Berline',
      'Riverboat': 'Bateau de rivière', 'Coupe': 'Coupé', 'Personal Watercraft': 'Scooter des mers', 'Off-Road': 'Tout-terrain',
      'Bicycle': 'Vélo', 'Pickup': 'Pick-up', 'Van': 'Fourgon', 'Sport': 'Sportive', 'Plane': 'Avion', 'Muscle': 'Muscle car',
      'Utility': 'Utilitaire', 'SUV': 'SUV', 'Scooter': 'Scooter', 'Military': 'Militaire', 'Powerboat': 'Bateau à moteur',
      'Super': 'Supercar', 'Quad Bike': 'Quad', 'Helicopter': 'Hélicoptère', 'Superbike': 'Superbike', 'Dirtbike': 'Moto tout-terrain',
      'Time Trial': 'Contre-la-montre', 'Stunt Run': 'Parcours de cascades', 'Dirt Track': 'Piste en terre', 'Oval': 'Ovale',
      'Street Race': 'Course de rue', 'Supercars': 'Supercars', 'Demolition Race': 'Course de démolition', 'Superbikes': 'Superbikes'
    }
  };
  const ERA_ADJ = { Modern: 'moderne', Restored: 'restaurée', Current: 'récente', Classic: 'classique', Antique: "d'époque", Military: 'militaire' };
  function valeur(cle, v) {
    if (valeurs[cle] && valeurs[cle][v] != null) return valeurs[cle][v];
    let m;
    if (cle === 'Era' && (m = v.match(/^(\d{4})'?s(?:\s+(\w+))?$/))) return 'Années ' + m[1] + (m[2] ? ', ' + (ERA_ADJ[m[2]] || m[2]) : '');
    if (cle === 'Cost') return v.replace(/Free/g, 'Gratuit');
    if (cle === 'Challenge') return defis[v.replace(/\s+/g, ' ').trim()] || v;
    if (cle === 'Type') return region(v);
    return v;
  }

  // Défis des sauts (rubrique « Challenge »)
  const defis = {
    'Chain both jumps by the Waste Transfer Services': 'Enchaîner les deux sauts près de Waste Transfer Services',
    'Chain both jumps from 7777 Ocean Beach to the Nolan Center while listening to Honey FM': "Enchaîner les deux sauts de 7777 Ocean Beach jusqu'au Nolan Center en écoutant Honey FM",
    'Chain both jumps from Sixth & Harper to Ocean Beach Plus': "Enchaîner les deux sauts de Sixth & Harper jusqu'à Ocean Beach Plus",
    'Chain both jumps in the National Park Trail': 'Enchaîner les deux sauts sur le sentier du parc national',
    'Chain both jumps on Key Lento Bridge': 'Enchaîner les deux sauts sur le pont de Key Lento',
    'Chain both jumps on Saltrock Bridge': 'Enchaîner les deux sauts sur le pont de Saltrock',
    'Chain both jumps on the Manifest Canyon Trail': 'Enchaîner les deux sauts sur le sentier de Manifest Canyon',
    'Chain both jumps south of Lake Leonida': 'Enchaîner les deux sauts au sud du lac Leonida',
    'Land a backflip': 'Réussir un salto arrière',
    'Land a backflip over Calderone Avenue': 'Réussir un salto arrière au-dessus de Calderone Avenue',
    'Land a backflip over Gellhorn International Raceway': 'Réussir un salto arrière au-dessus du circuit international de Gellhorn',
    'Land a backflip over Interstate 404': "Réussir un salto arrière au-dessus de l'Interstate 404",
    'Land a backflip over Thundergolf': 'Réussir un salto arrière au-dessus de Thundergolf',
    'Land a backflip over the Center Of Praise & Purpose': 'Réussir un salto arrière au-dessus du Center Of Praise & Purpose',
    'Land a backflip over the train tracks': 'Réussir un salto arrière au-dessus des voies ferrées',
    'Land a backflip through the Black Holes sign': 'Réussir un salto arrière à travers le panneau Black Holes',
    'Land a backflip with your partner': 'Réussir un salto arrière avec ton partenaire',
    'Land a double backflip': 'Réussir un double salto arrière',
    'Land a double backflip using a Maibatsu Sanchez': 'Réussir un double salto arrière avec une Maibatsu Sanchez',
    'Land a double blackflip using a Maibatsu Sanchez': 'Réussir un double salto arrière avec une Maibatsu Sanchez',
    'Land a front flip': 'Réussir un salto avant',
    'Land a front flip over a train': "Réussir un salto avant au-dessus d'un train",
    'Land a front flip over the Visitor Center': "Réussir un salto avant au-dessus du centre d'accueil",
    'Land a front flip while listening to Symphony FM': 'Réussir un salto avant en écoutant Symphony FM',
    'Land the jump going over 100mph': 'Réussir le saut à plus de 100 mph (161 km/h)',
    'Land the jump going over 40mpg using a yellow taxi': 'Réussir le saut à plus de 40 mph (64 km/h) avec un taxi jaune',
    'Land the jump going over 50mph': 'Réussir le saut à plus de 50 mph (80 km/h)',
    'Land the jump going over 50mph with a 3-star wanted level': 'Réussir le saut à plus de 50 mph (80 km/h) avec 3 étoiles de recherche',
    'Land the jump going over 65mph using a personal vehicle': 'Réussir le saut à plus de 65 mph (105 km/h) avec un véhicule personnel',
    'Land the jump going over 70mph and land a backflip': 'Réussir le saut à plus de 70 mph (113 km/h) avec un salto arrière',
    'Land the jump going over 70mph using a motorcycle': 'Réussir le saut à plus de 70 mph (113 km/h) à moto',
    'Land the jump going over 70mph using a vehicle from the Muscle category': 'Réussir le saut à plus de 70 mph (113 km/h) avec une muscle car',
    'Land the jump going over 75mph': 'Réussir le saut à plus de 75 mph (121 km/h)',
    'Land the jump going over 75mph using a vehicle from the Pickups category': 'Réussir le saut à plus de 75 mph (121 km/h) avec un pick-up',
    'Land the jump going over 80mph using a personal vehicle': 'Réussir le saut à plus de 80 mph (129 km/h) avec un véhicule personnel',
    'Land the jump in the LPL parking lot': 'Réussir le saut sur le parking LPL',
    'Land the jump inside the LPL parking lot': 'Réussir le saut dans le parking LPL',
    'Land the jump on Interstate 27': "Atterrir sur l'Interstate 27",
    'Land the jump on Interstate 35': "Atterrir sur l'Interstate 35",
    'Land the jump on Interstate 97': "Atterrir sur l'Interstate 97",
    'Land the jump on West Royale Street': 'Atterrir sur West Royale Street',
    'Land the jump on the Aggro Feed & Farm Supply roof': "Atterrir sur le toit d'Aggro Feed & Farm Supply",
    'Land the jump on the Goliath Global roof': 'Atterrir sur le toit de Goliath Global',
    'Land the jump on the Mariner’s Highway': 'Atterrir sur la Mariner’s Highway',
    'Land the jump on the opposite train tracks': "Atterrir sur les voies ferrées d'en face",
    'Land the jump over Cargo Road': 'Réussir le saut au-dessus de Cargo Road',
    'Land the jump over a HVY Bulldozer': "Réussir le saut au-dessus d'un bulldozer HVY",
    'Land the jump over a boat': "Réussir le saut au-dessus d'un bateau",
    'Land the jump over a motorhome': "Réussir le saut au-dessus d'un camping-car",
    'Land the jump over a train': "Réussir le saut au-dessus d'un train",
    'Land the jump over a train using a law enforcement vehicle': "Réussir le saut au-dessus d'un train avec un véhicule de police",
    'Land the jump over the Howe Dairy barn while listening to Gloriana Blues Radio': 'Réussir le saut au-dessus de la grange de la laiterie Howe en écoutant Gloriana Blues Radio',
    'Land the jump over the abandoned barn': 'Réussir le saut au-dessus de la grange abandonnée',
    'Land the jump over the bridge': 'Réussir le saut au-dessus du pont',
    'Land the jump over the fishing hut': 'Réussir le saut au-dessus de la cabane de pêcheur',
    'Land the jump over the lower rooftop with a 4-star wanted level': 'Réussir le saut au-dessus du toit le plus bas avec 4 étoiles de recherche',
    'Land the jump using a Declasse Burrito': 'Réussir le saut avec un Declasse Burrito',
    'Land the jump using a Grotti Cheetah while listening to Vice City FM': 'Réussir le saut avec une Grotti Cheetah en écoutant Vice City FM',
    'Land the jump using a JoBuilt Rubble': 'Réussir le saut avec un JoBuilt Rubble',
    'Land the jump using a Mer-Can Blast': 'Réussir le saut avec un Mer-Can Blast',
    'Land the jump using a Mer-Can Outlaw': 'Réussir le saut avec un Mer-Can Outlaw',
    'Land the jump using a Vapid Marshall': 'Réussir le saut avec un Vapid Marshall',
    'Land the jump using a convertible with the roof down': 'Réussir le saut en cabriolet, capote baissée',
    'Land the jump using a law enforcement vehicle with the siren on': 'Réussir le saut avec un véhicule de police, sirène allumée',
    'Land the jump using a personal vehicle': 'Réussir le saut avec un véhicule personnel',
    'Land the jump using a quad bike': 'Réussir le saut en quad',
    'Land the jump using a stolen Bravado Bison': 'Réussir le saut avec un Bravado Bison volé',
    'Land the jump using a stolen Vapid Dominator GT': 'Réussir le saut avec une Vapid Dominator GT volée',
    'Land the jump using a stolen vehicle': 'Réussir le saut avec un véhicule volé',
    'Land the jump using a vehicle from the Pickups category': 'Réussir le saut avec un pick-up',
    'Land the jump using a vehicle from the Vans category': 'Réussir le saut avec un fourgon',
    'Land the jump using a yellow taxi': 'Réussir le saut avec un taxi jaune',
    'Land the jump using an Interstate Yankee': 'Réussir le saut avec un Interstate Yankee',
    'Land the jump using any stolen Bravado Bison': "Réussir le saut avec n'importe quel Bravado Bison volé",
    'Land the jump while listening to The Chamber 106.6': 'Réussir le saut en écoutant The Chamber 106.6',
    'Land the jump with a 2-star wanted level using a Maibatsu Sanchez': 'Réussir le saut avec 2 étoiles de recherche sur une Maibatsu Sanchez',
    'Land the jump with a 3-star wanted level using a stolen vehicle': 'Réussir le saut avec 3 étoiles de recherche et un véhicule volé',
    'Land the jump with a 3-star wanted level using a vehicle from the Muscle category': 'Réussir le saut avec 3 étoiles de recherche et une muscle car',
    'Land the jump with a 4-star wanted level': 'Réussir le saut avec 4 étoiles de recherche',
    'Land the jump with a 4-star wanted level using a Mammoth Patriot': 'Réussir le saut avec 4 étoiles de recherche et un Mammoth Patriot',
    'Land the jump with a distance over 150ft': 'Réussir un saut de plus de 150 pieds (46 m)',
    'Land the jump with a distance over 250ft': 'Réussir un saut de plus de 250 pieds (76 m)',
    'Land the jump with a distance over 350ft while listening to Dirty South Classics': 'Réussir un saut de plus de 350 pieds (107 m) en écoutant Dirty South Classics',
    'Land the jump with a distance over 80ft': 'Réussir un saut de plus de 80 pieds (24 m)',
    'Land the jump with distance over 350ft': 'Réussir un saut de plus de 350 pieds (107 m)',
    'Land the jump with your partner': 'Réussir le saut avec ton partenaire',
    'Land the jump with your partner using a personal vehicle': 'Réussir le saut avec ton partenaire et un véhicule personnel',
    'Land the jump with your partner using a stolen vehicle': 'Réussir le saut avec ton partenaire et un véhicule volé',
    'Land the jump with your partner while listening to Back Country Radio': 'Réussir le saut avec ton partenaire en écoutant Back Country Radio',
    'Land your jump on Interstate 45': "Atterrir sur l'Interstate 45",
    'Land your jump over a boat': "Réussir le saut au-dessus d'un bateau",
    'Land your jump over a metro train': "Réussir le saut au-dessus d'une rame de métro"
  };

  // Lignes libres (hors rubriques), traduites telles quelles
  const lignes = {
    '_Acts as an introduction to meditation spots if previously missed during Chapter 1 at the_ [Learn to Meditate Together Spot](https://mapgenie.io/grand-theft-auto-6/maps/leonida?locationIds=1097659)':
      "_Sert d'introduction aux lieux de méditation si on l'a manquée pendant le chapitre 1 au lieu_ [Apprendre à méditer ensemble](https://mapgenie.io/grand-theft-auto-6/maps/leonida?locationIds=1097659)",
    '_Available after completing all other meditation spots_': '_Disponible après avoir terminé tous les autres lieux de méditation_',
    '_This Meditation Spot is prompted automatically during Chapter 1. If missed, this can be completed later on at the [Learn to Meditate Together Spot](https://mapgenie.io/grand-theft-auto-6/maps/leonida?locationIds=1097629)_':
      '_Ce lieu de méditation est proposé automatiquement pendant le chapitre 1. Si on le manque, on peut le faire plus tard au lieu [Apprendre à méditer ensemble](https://mapgenie.io/grand-theft-auto-6/maps/leonida?locationIds=1097629)_',
    'Ranges:': 'Parcours :',
    '_An open range where you can shoot targets for as long as you want, using the weapon of your choice._': "_Un stand ouvert où l'on tire sur des cibles aussi longtemps qu'on veut, avec l'arme de son choix._",
    '_Move between three stations in a straight line, taking out the targets at each. Finish with the lowest time possible._': '_Passer par trois postes en ligne droite et abattre les cibles à chacun. Finir dans le meilleur temps possible._',
    '_Take out the targets at four stations, curving around to the right as you progress._': '_Abattre les cibles à quatre postes, en tournant vers la droite au fil du parcours._',
    '_Move in a short loop, taking out targets at seven firing stations._': '_Parcourir une petite boucle et abattre les cibles à sept postes de tir._',
    '_Move around a long circuit and shoot the targets at four firing stations._': '_Parcourir un long circuit et tirer sur les cibles à quatre postes de tir._',
    '_Negotiate a fortified compound and eliminate the targets inside._': "_Traverser un complexe fortifié et éliminer les cibles à l'intérieur._",
    '_Move through a series of residential villas, taking out targets as you go._': '_Traverser une série de villas résidentielles en abattant les cibles au passage._',
    '_A Wild West saloon-themed range, full of futuristic bandits._': '_Un parcours sur le thème du saloon du Far West, rempli de bandits futuristes._',
    '_A woodland range where you can try your hand at hunting._': "_Un parcours en forêt pour s'essayer à la chasse._",
    '_A range depicting a zombie apocalypse._': '_Un parcours qui met en scène une apocalypse zombie._',
    '_A range based on a gas station with a robbery in progress._': '_Un parcours dans une station-service en plein braquage._',
    '_A range depicting an encounter with visitors from another world._': "_Un parcours qui met en scène une rencontre avec des visiteurs venus d'un autre monde._",
    '_A range resembling a farmers’ market full of fresh product._': '_Un parcours qui ressemble à un marché de producteurs plein de produits frais._',
    '_Randy will buy certain high-end vehicles at his showroom, and offers repairs and resprays._': '_Randy achète certains véhicules haut de gamme dans son showroom, et propose réparations et peintures._',
    "_Moses will buy low-key untracked vehicles at his auto shop, and offers repairs and resprays. He'll also register them as personal vehicles, for a fee._":
      "_Moses achète dans son garage des véhicules discrets sans traceur, et propose réparations et peintures. Contre paiement, il les immatricule aussi comme véhicules personnels._",
    "_Yasmani will buy stolen goods at his shop. For an extra cut, he'll arrange a pick-up from your garage._": "_Yasmani achète les objets volés dans sa boutique. Contre une commission en plus, il les fait récupérer dans ton garage._",
    '_Tyrone will buy stolen goods at his apartment, paying a good price for narcotics._': '_Tyrone achète les objets volés chez lui, et paie bien les stupéfiants._',
    '_Dunk will pay what little he can for any stolen goods dropped off at his trailer._': '_Dunk paie le peu qu\'il peut pour les objets volés déposés à sa caravane._',
    "_Kenton runs diving tours from his shop in Key Lento. He'll pay a finder's fee for any treasure found on the ocean floor, plus a bonus if he finds the right buyer._":
      "_Kenton organise des sorties de plongée depuis sa boutique de Key Lento. Il paie une récompense pour chaque trésor trouvé au fond de l'océan, plus un bonus s'il trouve le bon acheteur._",
    '_Brian will pay for any narcotics, jewelry and marked bills dropped off at his lockup._': '_Brian paie les stupéfiants, les bijoux et les billets marqués déposés à son box._',
    "_Bret, Jason's old army friend, will buy animal carcasses at his meat processing business._": "_Bret, l'ancien camarade d'armée de Jason, achète les carcasses d'animaux dans son entreprise de transformation de viande._",
    '_Donnie will pay for any narcotics, jewelery and marked bills dropped off at his trailer._': '_Donnie paie les stupéfiants, les bijoux et les billets marqués déposés à sa caravane._',
    '_Pete will give you various aerial dropoff locations for narcotics via text to complete._': '_Pete t\'envoie par message différents points de largage aérien de stupéfiants à effectuer._',
    'This safe is a Key Valuable of the Final Chapter Illegal Operation at the Biker Hideout.': "Ce coffre-fort est un objet de valeur clé de l'opération illégale de Final Chapter au repaire des motards.",
    'A sunken Spanish galleon off the Leonida Keys': 'Un galion espagnol englouti au large des Leonida Keys',
    'Underground through the nearby bunker.': 'Sous terre, en passant par le bunker voisin.',
    "There's also a free, super early Rocket Launcher / RPG here, the Hauners H-AT Rocket Launcher and a bunch of Grenades. And you can get here in Chapter 1!":
      'Il y a aussi ici un lance-roquettes gratuit, très tôt dans le jeu, le Hauners H-AT, et plein de grenades. Et on peut venir dès le chapitre 1 !',
    'The Ride Free H&L .38 is a Key Valuable of the Final Chapter Illegal Operation at the Biker Hideout.': "Le Ride Free H&L .38 est un objet de valeur clé de l'opération illégale de Final Chapter au repaire des motards.",
    "Just a little east of the southern sand bar's north point, and east of Key Lento. This doubloon is near a yellow sea anemone and on the cliff's edge that drops down into the reef's trench.":
      "Un peu à l'est de la pointe nord du banc de sable sud, et à l'est de Key Lento. Ce doublon est près d'une anémone de mer jaune, au bord de la falaise qui plonge dans la fosse du récif.",
    'South of the sandbar within the Abismo Key area. A handful of meters away from another Gold Doubloon, beneath the coral on top of a jutting rock.':
      "Au sud du banc de sable, dans le secteur d'Abismo Key. À quelques mètres d'un autre doublon d'or, sous le corail, au sommet d'un rocher en saillie.",
    'In the hull of the wreck': "Dans la coque de l'épave",
    'Near a chest laying on the sea floor.': 'Près d\'un coffre posé au fond de la mer.',
    'In the sand outside the wreck.': "Dans le sable, à l'extérieur de l'épave.",
    'In a treasure chest beneath the coral.': 'Dans un coffre au trésor, sous le corail.',
    'Found at the Nuestra Señora de la Noche shipwreck.': "Se trouve à l'épave du Nuestra Señora de la Noche.",
    'Found at the Urca de Cinco Torres shipwreck.': "Se trouve à l'épave de l'Urca de Cinco Torres.",
    'Found at the Nuestra Señora Lujuriosa shipwreck.': "Se trouve à l'épave du Nuestra Señora Lujuriosa.",
    'Found at the Urca de Santa Sierra shipwreck.': "Se trouve à l'épave de l'Urca de Santa Sierra.",
    'Found at the Urca de Santa Sierra ship wreck.': "Se trouve à l'épave de l'Urca de Santa Sierra.",
    'Found at the Nuestra Señora del Ocio shipwreck.': "Se trouve à l'épave du Nuestra Señora del Ocio.",
    'Found at the Bobcat Dive Site.': 'Se trouve au site de plongée de Bobcat.',
    'Found at the Belpoint Strait Dive Site.': 'Se trouve au site de plongée du détroit de Belpoint.'
  };

  // Puces (« - ... ») : textes fixes
  const puces = {
    'ATM': 'Distributeur de billets', 'Safe': 'Coffre-fort', 'Changing Room': "Cabine d'essayage", 'Weapon Locker': "Armoire d'armes",
    'Cash Drawer': 'Tiroir-caisse', 'Arcade Cabinet': "Borne d'arcade", 'Makeup': 'Maquillage', 'Pool Table': 'Billard',
    'Fishing License': 'Permis de pêche', 'Vault': 'Chambre forte', 'Nail Tech': 'Onglerie', 'Bar': 'Bar', 'Drinks': 'Boissons',
    'Food': 'Nourriture', 'Distance:': 'Distance :'
  };
  const NIVEAUX = { 'Beginner': 'Débutant', 'Intermediate': 'Intermédiaire', 'Advanced': 'Avancé', 'Master': 'Maître' };
  const ARMES = { 'Pistol': 'pistolet', 'Revolver': 'revolver', 'Submachine Gun': 'mitraillette', 'Assault Rifle': "fusil d'assaut",
    'Tactical Rifle': 'fusil tactique', 'Shotgun': 'fusil à pompe', 'Sniper Rifle': 'fusil de précision', 'Rifle': 'fusil' };
  const BUTINS = { 'Jewelry': 'Bijoux', 'Marked Bills': 'Billets marqués', 'Narcotics': 'Stupéfiants' };
  const QUANT = { 'Highest': 'Maximum', 'Medium': 'Moyen', 'Low': 'Faible', 'Very Low': 'Très faible' };
  const MEDAILLES = { 'Gold': 'Or', 'Silver': 'Argent', 'Bronze': 'Bronze' };
  const TEES = { 'Red': 'Rouge', 'Yellow': 'Jaune', 'Black': 'Noir' };
  const yards = (n) => n + ' yards (' + Math.round(parseFloat(n.replace(/,/g, '')) * 0.9144) + ' m)';

  function puce(s) {
    if (puces[s]) return puces[s];
    if (titres[s]) return titres[s];
    let m;
    if ((m = s.match(/^(\w+) - (.+) to (.+)$/))) return m[1] + ' - de ' + m[2] + ' à ' + m[3];
    if ((m = s.match(/^LC - (.+) to (.+)$/))) return 'LC - de ' + m[1] + ' à ' + m[2];
    if ((m = s.match(/^Hole (\d+):\s*(.*)$/))) return 'Trou ' + m[1] + ' :' + (m[2] ? ' ' + m[2] : '');
    if ((m = s.match(/^(Red|Yellow|Black): ([\d,]+) Yards$/))) return TEES[m[1]] + ' : ' + yards(m[2]);
    if ((m = s.match(/^([\d,]+) Yards$/))) return yards(m[1]);
    if ((m = s.match(/^(Gold|Silver|Bronze): (.+)$/))) return MEDAILLES[m[1]] + ' : ' + m[2];
    if ((m = s.match(/^(Beginner|Intermediate|Advanced|Master): (.+)$/))) return NIVEAUX[m[1]] + ' : ' + m[2].split(/,\s*/).map(a => ARMES[a] || a).join(', ');
    if ((m = s.match(/^(Jewelry|Marked Bills|Narcotics): (.+)$/))) return BUTINS[m[1]] + ' : ' + (QUANT[m[2]] || m[2]).toLowerCase();
    if ((m = s.match(/^(.+) Vehicle$/))) return 'Véhicule ' + m[1];
    if ((m = s.match(/^(.+) Watch$/))) return 'Montre ' + m[1];
    if ((m = s.match(/^\[([^\]]+)\]\((.+)\)$/)) && (titres[m[1]] || puces[m[1]])) return '[' + (titres[m[1]] || puces[m[1]]) + '](' + m[2] + ')';
    return s;
  }

  // Textes de la rubrique « Location » (par numéro de lieu), fournis par donnees/lieux_fr*.js
  const lieux = () => window.LIEUX_FR || {};

  function desc(d, id) {
    if (!d) return d;
    return d.split('\n').map(raw => {
      const s = raw.trim();
      if (!s) return raw;
      if (lignes[s]) return lignes[s];
      let m;
      // Emplacement, quelle que soit la forme (« **Location:** … », « Location: … », « **Location: …** »)
      if ((m = s.match(/^\**(?:Location|Legend):(.*)$/))) {
        const fr = lieux()[id];
        return '**Emplacement :** ' + (fr || m[1].replace(/\*+/g, '').replace(/^\s*:?\s*/, '').trim());
      }
      if ((m = s.match(/^\*\*([^*]+?):?\*\*:?\s*(.*)$/))) {
        const cle = m[1];
        const k = rubriques[cle] ? rubriques[cle] : cle;
        const v = m[2] ? valeur(cle, m[2]) : '';
        return '**' + k + ' :**' + (v ? ' ' + v : '');
      }
      if ((m = s.match(/^([-*•])\s+(.*)$/))) return m[1] + ' ' + puce(m[2]);
      return raw;
    }).join('\n');
  }

  return {
    groupe: (t) => groupes[t] || t,
    categorie: (t) => categories[t] || t,
    region,
    titre,
    desc
  };
})();
