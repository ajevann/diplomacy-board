'use strict';

var stats = {
  supplyCenters: [],
  units: {
    f: [],
    a: []
  },

  refresh: function(){
    var i, unitElements = document.querySelectorAll('g[unittype="f"]');
    for(i = 0; i < unitElements.length; i++){
      stats.units.f.push({
        country: unitElements[i].getAttribute('country'),
        title: unitElements[i].getAttribute('title'),
        text: unitElements[i].getAttribute('text')
      });
    }

    unitElements = document.querySelectorAll('g[unittype="a"]');
    for(i = 0; i < unitElements.length; i++){
      stats.units.a.push({
        country: unitElements[i].getAttribute('country'),
        title: unitElements[i].getAttribute('title'),
        text: unitElements[i].getAttribute('text')
      });
    }

    unitElements = document.querySelectorAll('g[type="sc"]:not([country="Neutral"])');
    for(i = 0; i < unitElements.length; i++){
      stats.supplyCenters.push({
        country: unitElements[i].getAttribute('country'),
        title: unitElements[i].getAttribute('title'),
        text: unitElements[i].getAttribute('text')
      });
    }

    console.log(stats.supplyCenters.length, stats.units.a.length, stats.units.f.length);


  }
};
