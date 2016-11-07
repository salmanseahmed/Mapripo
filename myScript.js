var myMap = L.map('myDiv1').setView([41.245340, 48.434252], 3);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
}).addTo(myMap);

var bachelors = L.marker([17.38468, 78.46486]).addTo(myMap);
var bachelorsPopup = bachelors.bindPopup("<p class='popupText'>B.E. in <strong><i>Industrial Engineering</i></strong> from Osmania University in Hyderabad with a final grade of 2.0 (79%)</p>")
var masters = L.marker([51.4640, 7.0060]).addTo(myMap);
var mastersPopup = masters.bindPopup("<p class='popupText'>M.Sc. in <strong><i>Sustainable Urban Technologies</i></strong> from University of Duisburg-Essen in Essen with a final grade of 1.3 <br><i>Focus:</i> &nbsp; GIS, Spatial Planning, Sustainability</p>")
var internship = L.marker([51.51528, 7.47138]).addTo(myMap);
var internshipPopup = internship.bindPopup("<p class='popupText'>at <strong><i>Research Institute for Regional and Urban Development</i></strong> in Dortmund<br><i>Tasks:</i> <br>Geo-data mining and management<br>Geo-processing to create desired maps<br>Python scripting and automation<br>OSM data extraction and enrichment<br>Statistics on spatial data in Excel<br>Collector for ArcGIS deployment<br>Maintenance of an ArcGIS online account</p>")
var summerSchool = L.marker([41.2045, 29.0712]).addTo(myMap);
var summerSchoolPopup = summerSchool.bindPopup("<p class='popupText'>Gave a presentation on <strong>Contribution of Volunteered Geographic Information to Humanitarian Logistics</strong> at Koç University in Istanbul</p>")
var job = L.marker([51.43667, 7.00094]).addTo(myMap);
var jobPopup = job.bindPopup("<p class='popupText'>at <strong><i>Institute for Medical Informatics, Biometry and Epidemiology</i></strong> in Essen<br><i>Tasks:</i> <br>Encourage spatial thinking and provide related GIS support to enhance epidemiological research <br>Imagery acquisition & processing (Landsat, MODIS)<br>Calculation of vegetation indices (NDVI, EVI)<br>Analysis of spatial & temporal changes in greenness and interactions with land cover data<br>Development of custom ArcGIS scripts and models for researchers<br>Creation of spatial variables for traditional research data</p>")

function bachelorsFunction() {
  myMap.panTo([17.38468, 78.46486])
	bachelorsPopup.openPopup()
}
function mastersFunction() {
  myMap.panTo([51.4640, 7.0060])
	mastersPopup.openPopup()
}
function internshipFunction() {
  myMap.panTo([51.51528, 7.47138])
	internshipPopup.openPopup()
}
function summerSchoolFunction() {
  myMap.panTo([41.2045, 29.0712])
	summerSchoolPopup.openPopup()
}
function jobFunction() {
  myMap.panTo([51.43667, 7.00094])
	jobPopup.openPopup()
}
$(document).ready(function(){
    $('.myHover').tooltipster({delay: 200, content: 'click for info'}); 
});