var myIcon = L.icon({
    iconUrl: "iconred.png",
    iconSize: [20, 20]
}),

myIcon2 = L.icon({
  iconUrl: "iconblue.png",
  iconSize: [15, 15]
});


var termini = L.marker([41.90165, 12.50079], {icon: myIcon}),
terminiPopup = termini.bindPopup("Termini is the main railway station of Rome. It is named after the district of the same name, which in turn took its name from ancient Baths of Diocletian, which lie across the street from the main entrance." + " <a href='https://en.wikipedia.org/wiki/Roma_Termini_railway_station'>Wikipedia</a>"),

colosseum = L.marker([41.89029, 12.49231]),
colosseumPopup = colosseum.bindPopup("The Colosseum also known as the Flavian Amphitheatre, is an oval amphitheatre in the centre of the city of Rome. Built of concrete and sand, it is the largest amphitheatre ever built." + " <a href='https://en.wikipedia.org/wiki/Colosseum'>Wikipedia</a>"),
   
forum = L.marker([41.892574, 12.486913]),
forumPopup = forum.bindPopup("The Roman Forum is a rectangular forum surrounded by the ruins of several important ancient government buildings at the center of the city of Rome. Citizens of the ancient city referred to this space, originally a marketplace, as the Forum Magnum, or simply the Forum." + " <a href='https://en.wikipedia.org/wiki/Roman_Forum'>Wikipedia</a>"),

palantine = L.marker([41.892592, 12.487466]),
palantinePopup = palantine.bindPopup("The Palatine Hill is the centermost of the Seven Hills of Rome and is one of the most ancient parts of the city. It stands 40 metres above the Forum, looking down upon it on one side, and upon the Circus Maximus on the other." + " <a href='https://en.wikipedia.org/wiki/Palatine_Hill'>Wikipedia</a>"),

pantheon = L.marker([41.898539, 12.477216]),
pantheonPopup = pantheon.bindPopup("The Pantheon is a building in Rome, on the site of an earlier building commissioned by Marcus Agrippa during the reign of Augustus. The present building was completed by the emperor Hadrian and probably dedicated about 126 AD." + " <a href='https://en.wikipedia.org/wiki/Pantheon,_Rome'>Wikipedia</a>"),

lateran = L.marker([41.885913, 12.505952]),
lateranPopup = lateran.bindPopup("The St. John Lateran Basilica, is the cathedral church of Rome and the official episcopal seat of the Bishop of Rome. It is the oldest and ranks first among the five Papal Basilicas of the world, and is also the oldest church in the west." + " <a href='https://en.wikipedia.org/wiki/Archbasilica_of_St._John_Lateran'>Wikipedia</a>"),

peter = L.marker([41.902143, 12.454312]),
peterPopup = peter.bindPopup("St. Peter's Basilica in the Vatican, is an Italian Renaissance church in Vatican City, the papal enclave within the city of Rome. It has been described as 'holding a unique position in the Christian world' and as 'the greatest of all churches of Christendom'." + " <a href='https://en.wikipedia.org/wiki/St._Peter%27s_Basilica'>Wikipedia</a>"),

vatican = L.marker([41.906659, 12.453765]),
vaticanPopup = vatican.bindPopup("The Vatican Museums are located within the Vatican city's boundaries. They display works from the immense collection built up by the Popes throughout the centuries including some of the most renowned classical sculptures and most important masterpieces of Renaissance art in the world." + " <a href='https://en.wikipedia.org/wiki/Vatican_Museums'>Wikipedia</a>"),

trevi = L.marker([41.901108, 12.483388]),
treviPopup = trevi.bindPopup("The Trevi Fountain is a fountain in the Trevi district in Rome, designed by Italian architect Nicola Salvi and completed by Pietro Bracci." + " <a href='https://en.wikipedia.org/wiki/Trevi_Fountain'>Wikipedia</a>"),

navona = L.marker([41.899210, 12.473340]),
navonaPopup = navona.bindPopup("Piazza Navona is a piazza in Rome. It is built on the site of the Stadium of Domitian, built in 1st century AD, and follows the form of the open space of the stadium." + " <a href='https://en.wikipedia.org/wiki/Piazza_Navona'>Wikipedia</a>"),

gianicolo = L.marker([41.891518, 12.461428]),
gianicoloPopup = gianicolo.bindPopup("The Janiculum is the second-tallest hill in the contemporary city of Rome. It does not figure among the proverbial Seven Hills of Rome, being west of the Tiber and outside the boundaries of the ancient city. It is one of the best locations in Rome for a scenic view of central Rome with its domes and bell towers." + " <a href='https://en.wikipedia.org/wiki/Janiculum'>Wikipedia</a>"),   
  
spanish = L.marker([41.905932, 12.483083]),
spanishPopup = spanish.bindPopup("The Spanish Steps are a set of steps in Rome, climbing a steep slope between the Piazza di Spagna at the base and Piazza Trinita dei Monti, dominated by the Trinita dei Monti church at the top." + " <a href='https://en.wikipedia.org/wiki/Spanish_Steps'>Wikipedia</a>"),

trastevere = L.marker([41.879897, 12.469241]),
trasteverePopup = trastevere.bindPopup("Trastevere is the 13th district of Rome, on the west bank of the Tiber, south of Vatican City, and within Municipio I. Its name comes from the Latin trans Tiberim, meaning literally 'beyond the Tiber'." + " <a href='https://en.wikipedia.org/wiki/Trastevere'>Wikipedia</a>"),

villaBorghese = L.marker([41.912793, 12.485364]),
villaBorghesePopup = villaBorghese.bindPopup("Villa Borghese is a landscape garden in the naturalistic English manner in Rome, containing a number of buildings, museums and attractions. It is the third largest public park in Rome after the ones of the Villa Doria Pamphili and Villa Ada." + " <a href='https://en.wikipedia.org/wiki/Villa_Borghese_gardens'>Wikipedia</a>"),

repubblica = L.marker([41.90276, 12.49583], {icon: myIcon}).bindPopup("Repubblica"),

barberini = L.marker([41.90383, 12.48876], {icon: myIcon}).bindPopup("Barberini"),

spagna = L.marker([41.90680, 12.48450], {icon: myIcon}).bindPopup("Spagna"),
   
flaminio = L.marker([41.91282, 12.47712], {icon: myIcon}).bindPopup("Flaminio"),

lepanto = L.marker([41.91136, 12.46617], {icon: myIcon}).bindPopup("Lepanto"),

ottaviano = L.marker([41.90941, 12.45831], {icon: myIcon}).bindPopup("Ottaviano"),

cipro = L.marker([41.90737, 12.44769], {icon: myIcon}).bindPopup("Cipro"),

valleAurelia = L.marker([41.90288, 12.44139], {icon: myIcon}).bindPopup("Valle Aurelia"),

baldoDegli = L.marker([41.89889, 12.43305], {icon: myIcon}).bindPopup("Baldo Degli Ubadli"),

cornelia = L.marker([41.90053, 12.42642], {icon: myIcon}).bindPopup("Cornelia")

battistini = L.marker([41.90614, 12.41510], {icon: myIcon}).bindPopup("Battistini"),

vittorioE = L.marker([41.89489, 12.50446], {icon: myIcon}).bindPopup("Vittorio Emanuele"),

manzoni = L.marker([41.89034, 12.50685], {icon: myIcon}).bindPopup("Manzoni"),

sanGiovanni = L.marker([41.88669, 12.50918], {icon: myIcon}).bindPopup("San Giovanni"),

reDiRoma = L.marker([41.88163, 12.51440], {icon: myIcon}).bindPopup("Re Di Roma"),

ponteLungo = L.marker([41.87785, 12.51896], {icon: myIcon}).bindPopup("Ponte Lungo"),

furioCamillo = L.marker([41.87475, 12.52302], {icon: myIcon}).bindPopup("Furio Camillo"),

colliAlbani = L.marker([41.86939, 12.53009], {icon: myIcon}).bindPopup("Colli Albani"),

arcoDiTravertino = L.marker([41.86638, 12.53509], {icon: myIcon}).bindPopup("Arco Di Travertino"),

portaFurba = L.marker([41.86379, 12.54821], {icon: myIcon}).bindPopup("Porta Furba Quadraro"),

numidio = L.marker([41.86213, 12.55266], {icon: myIcon}).bindPopup("Numidio Quadrato"),

lucioSestio = L.marker([41.85970, 12.55728], {icon: myIcon}).bindPopup("Lucio Sestio"),

giulioAgricola = L.marker([41.85660, 12.56263], {icon: myIcon}).bindPopup("Giulio Agricola"),

subaugusta = L.marker([41.85383, 12.56770], {icon: myIcon}).bindPopup("Subaugusta"),

cinecitta = L.marker([41.84930, 12.57438], {icon: myIcon}).bindPopup("Cinecitta"),

anagnina = L.marker([41.84257, 12.58601], {icon: myIcon}).bindPopup("Anagnina"),

cavour = L.marker([41.89482, 12.49352], {icon: myIcon2}).bindPopup("Cavour"),

colosseo = L.marker([41.89143, 12.49149], {icon: myIcon2}).bindPopup("Colosseo"),
   
circoMassimo = L.marker([41.88352, 12.48803], {icon: myIcon2}).bindPopup("Circo Massimo"),

piramide = L.marker([41.87487, 12.48246], {icon: myIcon2}).bindPopup("Piramide"),

garbatella = L.marker([41.86633, 12.48308], {icon: myIcon2}).bindPopup("Garbatella"),

basilicaSPaolo = L.marker([41.85588, 12.47818], {icon: myIcon2}).bindPopup("Basilica San Paolo"),

marconi = L.marker([41.84934, 12.47563], {icon: myIcon2}).bindPopup("Marconi"),

eurMagliana = L.marker([41.83958, 12.46330], {icon: myIcon2}).bindPopup("EUR Magliana"),

eurPalasport = L.marker([41.83004, 12.46670], {icon: myIcon2}).bindPopup("EUR Palasport"),

eurFermi = L.marker([41.82886, 12.47087], {icon: myIcon2}).bindPopup("EUR Fermi"),

laurentina = L.marker([41.82706, 12.48128], {icon: myIcon2}).bindPopup("Laurentina"),

castroPretorio = L.marker([41.90630, 12.50555], {icon: myIcon2}).bindPopup("Castro Pretorio"), 

policlinico = L.marker([41.90866, 12.51211], {icon: myIcon2}).bindPopup("Policlinico"),

bologna = L.marker([41.91366, 12.52081], {icon: myIcon2}).bindPopup("Bologna"),

tiburtina = L.marker([41.91076, 12.53033], {icon: myIcon2}).bindPopup("Tiburtina"),

quintiliani = L.marker([41.91522, 12.53883], {icon: myIcon2}).bindPopup("Quintiliani"),

montiTiburtini = L.marker([41.91575, 12.54800], {icon: myIcon2}).bindPopup("Monti Tiburtini"),

pietralata = L.marker([41.91493, 12.55508], {icon: myIcon2}).bindPopup("Pietralata"),

delSoccorso = L.marker([41.91550, 12.56060], {icon: myIcon2}).bindPopup("Santa Maria del Soccorso"),

ponteMammolo = L.marker([41.92080, 12.56514], {icon: myIcon2}).bindPopup("Ponte Mammolo"),

rebibbia = L.marker([41.92571, 12.57291], {icon: myIcon2}).bindPopup("Rebibbia");


var myTrip = L.layerGroup([termini, colosseum, forum, palantine, pantheon, lateran, peter,   vatican, trevi, navona, gianicolo, spanish, trastevere, villaBorghese]),

metroStops = L.layerGroup([anagnina, cinecitta, subaugusta, lucioSestio,      numidio, portaFurba, arcoDiTravertino, colliAlbani, furioCamillo, ponteLungo, reDiRoma, sanGiovanni, manzoni, vittorioE, battistini, cornelia, baldoDegli, valleAurelia, cipro, ottaviano, lepanto, flaminio, spagna, barberini, repubblica, cavour, rebibbia, ponteMammolo, pietralata, montiTiburtini, quintiliani, tiburtina, bologna, policlinico, castroPretorio, laurentina, eurFermi, eurPalasport, eurMagliana, marconi, basilicaSPaolo, garbatella, piramide, circoMassimo, colosseo]);


function terminiFunction() {
  map.panTo([41.901042, 12.500272])
	terminiPopup.openPopup()
}
function colosseumFunction() {
  map.panTo([41.89029, 12.49231])
  colosseumPopup.openPopup()
}
function forumFunction() {
  map.panTo([41.892574, 12.486913])
  forumPopup.openPopup()
}
function palantineFunction() {
  map.panTo([41.892592, 12.487466])
  palantinePopup.openPopup()
}
function pantheonFunction() {
  map.panTo([41.898539, 12.477216])
  pantheonPopup.openPopup()
}
function lateranFunction() {
  map.panTo([41.886089, 12.505684])
	lateranPopup.openPopup()
}
function treviFunction() {
  map.panTo([41.901108, 12.483388])
	treviPopup.openPopup()
}
function navonaFunction() {
  map.panTo([41.899210, 12.473340])
	navonaPopup.openPopup()
}
function peterFunction() {
  map.panTo([41.902143, 12.454312])
	peterPopup.openPopup()
}
function vaticanFunction() {
  map.panTo([41.906659, 12.453765])
	vaticanPopup.openPopup()
}
function gianicoloFunction() {
  map.panTo([41.891518, 12.461428])
	gianicoloPopup.openPopup()
}
function spanishFunction() {
  map.panTo([41.905932, 12.483083])
	spanishPopup.openPopup()
}
function trastevereFunction() {
  map.panTo([41.879897, 12.469241])
	trasteverePopup.openPopup()
}
function villaBorgheseFunction() {
  map.panTo([41.914250, 12.492380])
	villaBorghesePopup.openPopup()
}

var osmBase = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}),

map = L.map("map", {
  center: [41.901318, 12.496635],
  zoom: 13, 
  layers: [osmBase, myTrip]
});

var overlayMaps = {
  "Metro Stops": metroStops,
  "My Trip": myTrip
};

L.control.layers(null, overlayMaps, {
  collapsed:false, 
  position: "bottomleft"
}).addTo(map); 

L.Control.geocoder({
  position: "bottomleft"
}).addTo(map);

L.Routing.control({
  routeWhileDragging: true,
  geocoder: L.Control.Geocoder.nominatim(),
  reverseWaypoints: true,
  showAlternatives: true,
  altLineOptions: {
    styles: [
      {color: 'black', opacity: 0.15, weight: 9},
      {color: 'white', opacity: 0.8, weight: 6},
      {color: 'blue', opacity: 0.5, weight: 2}
    ]}
}).addTo(map);


 