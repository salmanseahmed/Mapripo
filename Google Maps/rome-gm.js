var map,

markers = [],

infoWindow = new google.maps.InfoWindow(),

terminiText = "Termini is the main railway station of Rome. It is named after the district of the same name, which in turn took its name from ancient Baths of Diocletian, which lie across the street from the main entrance." + " <a href='https://en.wikipedia.org/wiki/Roma_Termini_railway_station'>Wikipedia</a>",

colosseumText = "The Colosseum also known as the Flavian Amphitheatre, is an oval amphitheatre in the centre of the city of Rome. Built of concrete and sand, it is the largest amphitheatre ever built." + " <a href='https://en.wikipedia.org/wiki/Colosseum'>Wikipedia</a>",

forumText = "The Roman Forum is a rectangular forum surrounded by the ruins of several important ancient government buildings at the center of the city of Rome. Citizens of the ancient city referred to this space, originally a marketplace, as the Forum Magnum, or simply the Forum." + " <a href='https://en.wikipedia.org/wiki/Roman_Forum'>Wikipedia</a>",

palantineText = "The Palatine Hill is the centermost of the Seven Hills of Rome and is one of the most ancient parts of the city. It stands 40 metres above the Forum, looking down upon it on one side, and upon the Circus Maximus on the other." + " <a href='https://en.wikipedia.org/wiki/Palatine_Hill'>Wikipedia</a>",

pantheonText = "The Pantheon is a building in Rome, on the site of an earlier building commissioned by Marcus Agrippa during the reign of Augustus. The present building was completed by the emperor Hadrian and probably dedicated about 126 AD." + " <a href='https://en.wikipedia.org/wiki/Pantheon,_Rome'>Wikipedia</a>",

lateranText = "The St. John Lateran Basilica, is the cathedral church of Rome and the official episcopal seat of the Bishop of Rome. It is the oldest and ranks first among the five Papal Basilicas of the world, and is also the oldest church in the west." + " <a href='https://en.wikipedia.org/wiki/Archbasilica_of_St._John_Lateran'>Wikipedia</a>",

peterText = "St. Peter's Basilica in the Vatican, is an Italian Renaissance church in Vatican City, the papal enclave within the city of Rome. It has been described as 'holding a unique position in the Christian world' and as 'the greatest of all churches of Christendom'." + " <a href='https://en.wikipedia.org/wiki/St._Peter%27s_Basilica'>Wikipedia</a>",

vaticanText = "The Vatican Museums are located within the Vatican city's boundaries. They display works from the immense collection built up by the Popes throughout the centuries including some of the most renowned classical sculptures and most important masterpieces of Renaissance art in the world." + " <a href='https://en.wikipedia.org/wiki/Vatican_Museums'>Wikipedia</a>",

treviText = "The Trevi Fountain is a fountain in the Trevi district in Rome, designed by Italian architect Nicola Salvi and completed by Pietro Bracci." + " <a href='https://en.wikipedia.org/wiki/Trevi_Fountain'>Wikipedia</a>",

navonaText = "Piazza Navona is a piazza in Rome. It is built on the site of the Stadium of Domitian, built in 1st century AD, and follows the form of the open space of the stadium." + " <a href='https://en.wikipedia.org/wiki/Piazza_Navona'>Wikipedia</a>",

gianicoloText = "The Janiculum is the second-tallest hill in the contemporary city of Rome. It does not figure among the proverbial Seven Hills of Rome, being west of the Tiber and outside the boundaries of the ancient city. It is one of the best locations in Rome for a scenic view of central Rome with its domes and bell towers." + " <a href='https://en.wikipedia.org/wiki/Janiculum'>Wikipedia</a>",

spanishText = "The Spanish Steps are a set of steps in Rome, climbing a steep slope between the Piazza di Spagna at the base and Piazza Trinita dei Monti, dominated by the Trinita dei Monti church at the top." + " <a href='https://en.wikipedia.org/wiki/Spanish_Steps'>Wikipedia</a>",

trastevereText = "Trastevere is the 13th district of Rome, on the west bank of the Tiber, south of Vatican City, and within Municipio I. Its name comes from the Latin trans Tiberim, meaning literally 'beyond the Tiber'." + " <a href='https://en.wikipedia.org/wiki/Trastevere'>Wikipedia</a>",

villaText = "Villa Borghese is a landscape garden in the naturalistic English manner in Rome, containing a number of buildings, museums and attractions. It is the third largest public park in Rome after the ones of the Villa Doria Pamphili and Villa Ada." + " <a href='https://en.wikipedia.org/wiki/Villa_Borghese_gardens'>Wikipedia</a>";


function initMap() {
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 41.902728, lng: 12.496246},
  scrollwheel: false,
  zoom: 13
  });

  termini = new google.maps.Marker({
  position: {lat: 41.900819, lng: 12.501757},
  title: "Termini"   
  });

  google.maps.event.addListener(termini, 'click', function() {
  infoWindow.setContent(terminiText)
  infoWindow.open(map, termini)
  });

  colosseum = new google.maps.Marker({
  position: {lat: 41.890426, lng: 12.492177},
  title: "Colosseum"   
  });

  google.maps.event.addListener(colosseum, 'click', function() {
  infoWindow.setContent(colosseumText)
  infoWindow.open(map, colosseum)
  });

  forum = new google.maps.Marker({
  position: {lat: 41.892441, lng: 12.485323},
  title: "Roman Forum"   
  });

  google.maps.event.addListener(forum, 'click', function() {
  infoWindow.setContent(forumText)
  infoWindow.open(map, forum)
  });

  palantine = new google.maps.Marker({
  position: {lat: 41.889497, lng: 12.486661},
  title: "Palantine Hill"   
  });

  google.maps.event.addListener(palantine, 'click', function() {
  infoWindow.setContent(palantineText)
  infoWindow.open(map, palantine)
  });

  pantheon = new google.maps.Marker({
  position: {lat: 41.898583, lng: 12.476851},
  title: "Pantheon"   
  });

  google.maps.event.addListener(pantheon, 'click', function() {
  infoWindow.setContent(pantheonText)
  infoWindow.open(map, pantheon)
  });

  lateran = new google.maps.Marker({
  position: {lat: 41.885889, lng: 12.505657},
  title: "Archbasilica of St. John Lateran" 
  });

  google.maps.event.addListener(lateran, 'click', function() {
  infoWindow.setContent(lateranText)
  infoWindow.open(map, lateran)
  });

  peter = new google.maps.Marker({
  position: {lat: 41.902175, lng: 12.453926},
  title: "St. Peter's Basilica" 
  });

  google.maps.event.addListener(peter, 'click', function() {
  infoWindow.setContent(peterText)
  infoWindow.open(map, peter)
  });

  vatican = new google.maps.Marker({
  position: {lat: 41.906659, lng: 12.453502},
  title: "Vatican Museums"   
  });

  google.maps.event.addListener(vatican, 'click', function() {
  infoWindow.setContent(vaticanText)
  infoWindow.open(map, vatican)
  });

  trevi = new google.maps.Marker({
  position: {lat: 41.900940, lng: 12.483313},
  title: "Trevi Fountain"   
  });

  google.maps.event.addListener(trevi, 'click', function() {
  infoWindow.setContent(treviText)
  infoWindow.open(map, trevi)
  });

  navona = new google.maps.Marker({
  position: {lat: 41.899166, lng: 12.473066},
  title: "Piazza Navona"   
  });

  google.maps.event.addListener(navona, 'click', function() {
  infoWindow.setContent(navonaText)
  infoWindow.open(map, navona)
  });

  gianicolo = new google.maps.Marker({
  position: {lat: 41.891374, lng: 12.461445},
  title: "Gianicolo Hill"   
  });

  google.maps.event.addListener(gianicolo, 'click', function() {
  infoWindow.setContent(gianicoloText)
  infoWindow.open(map, gianicolo)
  });

  spanish = new google.maps.Marker({
  position: {lat: 41.905990, lng: 12.482770},
  title: "Spanish Steps"   
  });

  google.maps.event.addListener(spanish, 'click', function() {
  infoWindow.setContent(spanishText)
  infoWindow.open(map, spanish)
  });

  trastevere = new google.maps.Marker({
  position: {lat: 41.876331, lng: 12.469071},
  title: "Trastevere District"   
  });

  google.maps.event.addListener(trastevere, 'click', function() {
  infoWindow.setContent(trastevereText)
  infoWindow.open(map, trastevere)
  });

  villa = new google.maps.Marker({
  position: {lat: 41.912881, lng: 12.485200},
  title: "Villa Borghese"   
  });

  google.maps.event.addListener(villa, 'click', function() {
  infoWindow.setContent(villaText)
  infoWindow.open(map, villa)
  });
}


function terminiFunction() {
   termini.setMap(map)
   map.panTo(termini.getPosition())
   infoWindow.setContent(terminiText) 
   infoWindow.open(map, termini) 
   markers.push(termini)
}  

function colosseumFunction() {
   colosseum.setMap(map)
   map.panTo(colosseum.getPosition()) 
   infoWindow.setContent(colosseumText)
   infoWindow.open(map, colosseum) 
   markers.push(colosseum)
}  

function forumFunction() {
   forum.setMap(map)
   map.panTo(forum.getPosition()) 
   infoWindow.setContent(forumText)
   infoWindow.open(map, forum) 
   markers.push(forum)
}  

function palantineFunction() {
   palantine.setMap(map)
   map.panTo(palantine.getPosition()) 
   infoWindow.setContent(palantineText)
   infoWindow.open(map, palantine) 
   markers.push(palantine)
}  

function pantheonFunction() {
   pantheon.setMap(map)
   map.panTo(pantheon.getPosition()) 
   infoWindow.setContent(pantheonText)
   infoWindow.open(map, pantheon) 
   markers.push(pantheon)
}  

function lateranFunction() {
   lateran.setMap(map)
   map.panTo(lateran.getPosition()) 
   infoWindow.setContent(lateranText)
   infoWindow.open(map, lateran) 
   markers.push(lateran)
}  

function peterFunction() {
   peter.setMap(map)
   map.panTo(peter.getPosition()) 
   infoWindow.setContent(peterText)
   infoWindow.open(map, peter) 
   markers.push(peter)
}  

function vaticanFunction() {
   vatican.setMap(map)
   map.panTo(vatican.getPosition()) 
   infoWindow.setContent(vaticanText)
   infoWindow.open(map, vatican) 
   markers.push(vatican)
}  

function treviFunction() {
   trevi.setMap(map)
   map.panTo(trevi.getPosition()) 
   infoWindow.setContent(treviText)
   infoWindow.open(map, trevi) 
   markers.push(trevi)
}  

function navonaFunction() {
   navona.setMap(map)
   map.panTo(navona.getPosition()) 
   infoWindow.setContent(navonaText)
   infoWindow.open(map, navona) 
   markers.push(navona)
}  

function gianicoloFunction() {
   gianicolo.setMap(map)
   map.panTo(gianicolo.getPosition()) 
   infoWindow.setContent(gianicoloText)
   infoWindow.open(map, gianicolo) 
   markers.push(gianicolo)
}

function spanishFunction() {
   spanish.setMap(map)
   map.panTo(spanish.getPosition()) 
   infoWindow.setContent(spanishText)
   infoWindow.open(map, spanish) 
   markers.push(spanish)
}  

function trastevereFunction() {
   trastevere.setMap(map)
   map.panTo(trastevere.getPosition()) 
   infoWindow.setContent(trastevereText)
   infoWindow.open(map, trastevere) 
   markers.push(trastevere)
}  

function villaFunction() {
   villa.setMap(map)
   map.panTo(villa.getPosition()) 
   infoWindow.setContent(villaText)
   infoWindow.open(map, villa) 
   markers.push(villa)
}  

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function clearMarkers() {
  setMapOnAll(null);
}


google.maps.event.addDomListener(window, 'load', initMap)