'use strict';
angular.module('pixelRockStudiosApp')
  .factory('portMaster', function ($http) {
    // return $http.get('scripts/services/objects/portfolio.json');  
    return [
    {"name": "BMW M 40th Anniversary test",
     "link": "http://www.bmwusa.com/m",
      "img": [
          {"image":"../images/lg.jpg"},
          {"image":"../images/sm1.jpg"},
          {"image":"../images/sm2.jpg"}
      ]},
    {"name": "BMW Motorsports",
     "link": "http://www.bmwusa.com/standard/content/explore/bmwenthusiasts/bmwmotorsports.aspx"},
    {"name": "BMW ConnectedDrive",
     "link": "http://www.bmwusa.com/standard/content/innovations/bmwconnecteddrive/connecteddrive.aspx"},
    {"name": "BMW Performance Driving School",
     "link": "http://www.bmwusa.com/pds"},
    {"name": "Justin Biebers Collection",
     "link": "http://www.justinbiebercollectorsedition.com/#home"},
    {"name": "Biore Skincare",
     "link": "http://www.biore.com/en-US/biore-skincare"},
    {"name": "BMW i8 Experience",
     "link": "http://www.bmwusa.com/standard/content/vehicles/2014/bmwi/bmwi_i8redirect.aspx?from=/Standard/Content/Vehicles/2014/BMWi/BMWi8RD.aspx&return=/Standard/Content/Vehicles/2014/BMWi/BMWi8RD.aspx"},
    {"name": "Fantastic 4 Rise of the Silver Surfer",
     "link": "http://www.pixelrockstudios.com/work/f4"},
    {"name": "Chevy Flash Calculator",
     "link": "http://www.pixelrockstudios.com/work/chevy"},
    {"name": "Ritz Carlton White Plains",
     "link": "http://www.pixelrockstudios.com/work/ritz"},
    {"name": "Kodak Flash Banner",
     "link": "http://www.pixelrockstudios.com/work/kodak"},
    {"name": "Crestor Astra Zeneca",
     "link": "http://www.pixelrockstudios.com/work/astra"}
    ]
});
