'use strict';

var construct = {
  svgContainers: function(){
    var containers = [
      'tiles',
      'grid',
      'adjacencies',
      'movement',
      'currentAdjacencies',
      'tileNames',
      'supplyCenters',
      'units',
      'menu'
    ];

    var i;
    for (i in containers) {
      var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('title', containers[i]);
      main.svg.appendChild(g);
      main[containers[i]] = document.querySelector('svg > g[title="' + containers[i] + '"]');
    }
  },
  tiles: function(){
    var i;
    for (i in tiles) {
        construct.tile(tiles[i]);
    }
  },
  tile: function(o) {
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('title', o.title);
    g.setAttribute('text', o.text);
    g.setAttribute('type', 't');

    if (o.d) {
      var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      p.setAttribute('class', o.class);
      p.setAttribute('d', o.d);
      g.appendChild(p);
    } else if (o.class === 'lw') {
      var pl = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      pl.setAttribute('class', 'l');
      pl.setAttribute('points', o.pointsL);
      g.appendChild(pl);

      var pw = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      pw.setAttribute('class', 'w');
      pw.setAttribute('points', o.pointsW);
      g.appendChild(pw);
    } else {
      var p = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      p.setAttribute('class', o.class);
      p.setAttribute('points', o.points);
      g.appendChild(p);
    }

    main.tiles.appendChild(g);
  },
  tileNames: function(format){
    var i;
    for (i in tiles) {
        construct.tileName(tiles[i], format);
    }
  },
  tileName: function(o, format) {
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('title', o.title);
    g.setAttribute('text', o.text);
    g.setAttribute('type', 't');

    var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    var textNode = document.createTextNode((format === 'abbr' ? o.text : o.title));

    text.setAttribute('x', o.textX);
    text.setAttribute('y', o.textY);
    (format === 'full' && o.rotate) ? text.setAttribute('transform', 'rotate(' + o.rotate + ',' + o.textX + ',' + o.textY  + ')') : 0;
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('class', 'name');
    text.appendChild(textNode);

    g.appendChild(text);

    //
    if(o.coast){
      var i;
      for(i in o.coast){
        var coastText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        // var textNode = document.createTextNode((format === 'abbr' ? o.text : o.title));
        var textNode = document.createTextNode(o.coast[i].title);

        coastText.setAttribute('x', o.coast[i].locX);
        coastText.setAttribute('y', o.coast[i].locY);
        coastText.setAttribute('transform', 'rotate(' + o.coast[i].rotate + ',' + o.coast[i].locX + ',' + o.coast[i].locY  + ')');
        coastText.setAttribute('text-anchor', 'middle');
        coastText.setAttribute('class', 'coast');
        coastText.appendChild(textNode);

        g.appendChild(coastText);
      }
    }

    main.tileNames.appendChild(g);
  },
  supplyCenters: function(){
    var i;
    for (i in tiles) {
        construct.supplyCenter(tiles[i]);
    }
  },
  supplyCenter: function(o) {
    if (o.scloc) {
      var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('title', o.title);
      g.setAttribute('text', o.text);
      g.setAttribute('country', 'Neutral');
      g.setAttribute('type', 'sc');

      var sc = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      sc.setAttribute('r', '3');
      sc.setAttribute('uid', o.text);
      sc.setAttribute('transform', 'translate(' + o.scloc + ')');

      g.appendChild(sc);
      main.supplyCenters.appendChild(g);
    }
  },
  startingPositions: function(numOfPlayers) {
    var i, j;
    for (i in startingPositions) {
      var country = i;
      switch(numOfPlayers){
        case 2:
          if(i === 'Austria' || i === 'Germany' || i === 'Turkey'){
            country = 'Austria';
          }else if(i === 'England' || i === 'France' || i === 'Russia'){
            country = 'England';
          }else if(i === 'Italy'){
            country = 'Neutral';
          }
          // game begins in 1914, coin flip to assign italy
          // first to 24
          break;
        case 3:
          if(i === 'Austria' || i === 'Germany' || i === 'England'){
            country = 'Austria';
          }else if(i === 'Turkey' || i === 'France'){
            country = 'France';
          }else if(i === 'Russia' || i === 'Italy'){
            country = 'Russia';
          }
          break;
        case 4:
          if(i === 'Austria' || i === 'France'){
            country = 'Austria';
          }else if(i === 'Turkey' || i === 'Germany'){
            country = 'Turkey';
          }else if(i === 'Russia' || i === 'Italy'){
            country = 'Russia';
          }
          break;
        case 5:
          if(i === 'Germany' || i === 'Italy'){
            country = 'Neutral';
          }
          // neutral cannot support each other but may be supported by other players
          // if forced to retreat, they are disbanded
          break;
        case 6:
          if(i === 'Italy'){
            country = 'Neutral';
          }
          //cannot support each other but may be supported by other players
          // if forced to retreat, they are disbanded
          break;
        case 7:
          //default
          break;
        default:
          break;
      }

      for (j in startingPositions[i]) {
        if (startingPositions[i][j][0] === 'sc' && document.querySelector('g[title="' + startingPositions[i][j][1] + '"]')) {
          document.querySelector('g[type="sc"][title="' + startingPositions[i][j][1] + '"]').setAttribute('country', country);
        } else if (startingPositions[i][j][0] === 'a') {
          construct.landUnit({ country: country, title: startingPositions[i][j][1], text: startingPositions[i][j][2] });
        } else if (startingPositions[i][j][0] === 'f') {
          construct.seaUnit({ country: country, title: startingPositions[i][j][1], text: startingPositions[i][j][2] });
        }
      }

      // for (j in tiles) {
      //   construct.landUnit({
      //     country: country,
      //     title: tiles[j].title,
      //     text: tiles[j].text
      //   });
      // }
    }

  },
  seaUnit: function(o) {
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('title', o.title);
    g.setAttribute('text', o.text);
    g.setAttribute('type', 'unit');
    g.setAttribute('unittype', 'f');
    g.setAttribute('country', o.country);
    g.setAttribute('transform', 'translate(' + tiles[o.text].loc + ')');

    //boat shape
    // var p1 = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    // p1.setAttribute('points', '-2,-3 10,-3 -2,-13');
    // g.appendChild(p1);
    //
    // var p2 = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    // p2.setAttribute('points', '-12,-1 -6,5 6,5 12,-1');
    // g.appendChild(p2);

    //rectangle
    // var p = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    // p.setAttribute('points', '-5,0 10,0 10,5 -5,5');
    // g.appendChild(p);

    //triangle
    var p = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    p.setAttribute('points', '-5,5 0,-5 5,5');
    g.appendChild(p);

    main.units.appendChild(g);
  },
  landUnit: function(o) {
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('title', o.title);
    g.setAttribute('text', o.text);
    g.setAttribute('type', 'unit');
    g.setAttribute('unittype', 'a');
    g.setAttribute('country', o.country);
    g.setAttribute('transform', 'translate(' + tiles[o.text].loc + ')');

    //cannon shape
    // var p1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    // p1.setAttribute('d', 'M9,-6 L2,0 M9,6 L0,0');
    // g.appendChild(p1);
    //
    // var p2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    // p2.setAttribute('d', 'M-11,-6 v4 h17 a2,2 0,0 0 0,-4z');
    // g.appendChild(p2);
    //
    // var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    // c.setAttribute('r', '6');
    // g.appendChild(c);

    //square
    var p = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    p.setAttribute('points', '-5,-5 5,-5 5,5 -5,5');
    g.appendChild(p);

    main.units.appendChild(g);
  },
  menu:{
    construct: function(o){
      main.menu.innerHTML = '';
      main.menu.setAttribute('transform', 'translate(' + o.loc + ') scale(0.5)');

      construct.menu.menuItem('Move', 0, 0);
      construct.menu.menuItem('Hold', 0, 25);
      construct.menu.menuItem('Convoy', 0, 50);
      construct.menu.menuItem('Support', 0, 75);
    },
    menuItem: function(text, translateX, translateY){
      var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('type', 'menuItem');

      var c = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      c.setAttribute('width', 100);
      c.setAttribute('height', 20);
      c.setAttribute('x', translateX);
      c.setAttribute('y', translateY);
      c.setAttribute('rx', 5);
      c.setAttribute('ry', 5);
      c.setAttribute('fill','white');
      c.setAttribute('stroke','black');
      g.appendChild(c);

      var t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      var tNode = document.createTextNode(text);

      t.setAttribute('transform', 'translate(' + (translateX + 50) + ',' + (translateY + 17) + ')');
      t.setAttribute('class', 'menuItem');
      t.setAttribute('text-anchor', 'middle');
      t.appendChild(tNode);

      g.appendChild(t);

      main.menu.appendChild(g);
    },
    destroy: function(){
      main.menu.innerHTML = '';
    }
  }
};
