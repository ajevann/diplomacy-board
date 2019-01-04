'use strict';

var events = {
  clickedElement: null,
  mousedown: false,
  init: function(){
    if(main.units){
      main.units.onclick = events.unitMovement.click;
      main.units.onmousedown = events.unitMovement.mousedown;
      main.units.onmouseup = events.unitMovement.mouseup;
      main.units.onmouseover = events.unitMovement.mouseover;
    }
    if(main.tiles){
      main.tiles.onclick = events.tileEvents.click;
      main.tiles.onmousedown = events.tileEvents.mousedown;
      main.tiles.onmouseup = events.tileEvents.mouseup;
      main.tiles.onmouseover = events.tileEvents.mouseover;
    }
  },
  unitMovement: {
    click: function(e) {
      main.currentAdjacencies.innerHTML = '';
    },
    mouseover: function(e) {

    },
    mousedown: function(e) {
      if(e.target.parentNode.getAttribute('type') === 'unit'){
        events.mousedown = true;
        events.clickedElement = e.target.parentNode;
        var abbr = e.target.parentNode.getAttribute('text');

        var i;
        for(i in adjacencies[main.adjacenciesToShow][abbr]){
          var sloc = tiles[abbr].loc;
          var sX = parseInt(sloc.split(',')[0]);
          var sY = parseInt(sloc.split(',')[1]);

          var dloc = tiles[adjacencies[main.adjacenciesToShow][abbr][i]].loc;
          var dX = parseInt(dloc.split(',')[0]);
          var dY = parseInt(dloc.split(',')[1]);


          var g = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
          g.setAttribute('points', sX + ' ' + sY + ' ' + (dX) + ' ' + (dY));
          g.setAttribute('marker-end', 'url(#circleFilled)');
          g.setAttribute('stroke', 'red');
          g.setAttribute('stroke-width', '1');
          g.setAttribute('stroke-dasharray', '5, 5');

          main.currentAdjacencies.appendChild(g);
        }
      }
    },
    mouseup: function(e) {
      events.mousedown = false;
      main.currentAdjacencies.innerHTML = '';
    },
    mousemove: function(e){

    }
  },
  tileEvents: {
    click: function(e) {
      main.currentAdjacencies.innerHTML = '';
    },
    mouseover: function(e) {
      if(events.mousedown && e.target.parentNode.getAttribute('type') === 't'){
        construct.menu.construct({
          loc: tiles[e.target.parentNode.getAttribute('text')].loc
        });
      }
    },
    mousedown: function(e) {
      if(e.target.tagName === 'text' || e.target.tagName === 'polygon'){
        events.mousedown = true;
        events.clickedElement = e.target.parentNode;

        var abbr = e.target.parentNode.getAttribute('text');

        var i;
        for(i in adjacencies[main.adjacenciesToShow][abbr]){
          var dX = parseInt(tiles[adjacencies[main.adjacenciesToShow][abbr][i]].textX);
          var dY = parseInt(tiles[adjacencies[main.adjacenciesToShow][abbr][i]].textY);

          var g = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
          g.setAttribute('points', tiles[abbr].textX + ' ' + tiles[abbr].textY + ' ' + (dX + 5) + ' ' + (dY - 1));
          g.setAttribute('marker-end', 'url(#circleOutline)');
          g.setAttribute('stroke', 'red');
          g.setAttribute('stroke-width', '1');
          g.setAttribute('stroke-dasharray', '5, 5');

          main.currentAdjacencies.appendChild(g);
        }
      }
    },
    mouseup: function(e) {
      events.mousedown = false;
      main.currentAdjacencies.innerHTML = '';
    },
    mousemove: function(e){

    }
  }
};
