use yoga_locations;
db.dropDatabase();

db.manage.insertMany([
  {
   name: "Hope Studio Yoga",
   location: "5th Floor, Central Chambers, 404, 93 Hope St Glasgow G2 6LD",
   latLng: [55.861138, -4.259079]
 },
 {
   name: "Merchant City Yoga",
   location: "2, 49 Virgina St, Glasgow G1 1TS",
   latLng: [55.859569, -4.250090]
 },
 {
   name: "The Yoga extension",
   location: "Suite A, 5 Newton Terrace Ln, Glasgow G3 7PB",
   latLng: [55.865791, -4.274662]
 },
 {
   name: "Infintity Yoga",
   location: "11 Osborne St, Glasgow G1 5QN",
   latLng: [55.855893, -4.245787]
 },
 {
   name: "Move Studios",
   location: "27-45 Stockwell Pl, Glasgow G1 4HS",
   latLng: [55.856735, -4.250980]
 },
 {
   name: "Shanti Yoga Glasgow",
   location: "20 Sandyford St, Yorkhill St, Glasgow G3 8QJ",
   latLng: [55.865124, -4.296059]
 }
])
