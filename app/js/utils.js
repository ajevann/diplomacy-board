'use strict';

var utils = {
  hexGrid: function(size) {
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('title', 'hexgrid');

    var limit = Math.floor(main.svg.clientWidth / size);
    var sr3 = Math.sqrt(3);
    var s = size;
    var h = sr3 * s;
    var d = s * 2;

    var
      a = {
        x: 0,
        y: 0
      },
      b = {
        x: (h / 2),
        y: -(s / 2)
      },
      c = {
        x: (h),
        y: 0
      },
      d = {
        x: (h),
        y: s
      },
      e = {
        x: (h / 2),
        y: (s + (s / 2))
      },
      f = {
        x: 0,
        y: s
      };

    var i, j;
    for (i = 1; i < limit; i++) {
      for (j = 1; j < limit; j++) {
        var p = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        p.setAttribute('type', 'hexgrid');

        var hspace = h * j;
        i % 2 === 0 ? hspace = hspace - (h / 2) : 0;
        var vspace = (size * 2) * i - (i * (size / 2));

        p.setAttribute('points', (a.x + hspace) + ',' + (a.y + vspace) + ' ' +
          (b.x + hspace) + ',' + (b.y + vspace) + ' ' +
          (c.x + hspace) + ',' + (c.y + vspace) + ' ' +
          (d.x + hspace) + ',' + (d.y + vspace) + ' ' +
          (e.x + hspace) + ',' + (e.y + vspace) + ' ' +
          (f.x + hspace) + ',' + (f.y + vspace)
        );

        g.appendChild(p);
      }
    }

    g.setAttribute('transform', 'translate(-100, -100)');
    main.svg.appendChild(g);
  },
  squareGrid: function(size) {
    var i, j = 0, length = document.body.clientWidth;
    for (i = 0; i < length; i += size) {
      var l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      l.setAttribute('x1', 0);
      l.setAttribute('y1', i);
      l.setAttribute('x2', length);
      l.setAttribute('y2', i);
      l.setAttribute('stroke', 'grey');
      (i % (size * 10) === 0) ? l.setAttribute('stroke-width', '0.25') : l.setAttribute('stroke-width', '0.1');
      main.grid.appendChild(l);

      l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      l.setAttribute('x1', i);
      l.setAttribute('y1', 0);
      l.setAttribute('x2', i);
      l.setAttribute('y2', length);
      l.setAttribute('stroke', 'grey');
      (i % (size * 10) === 0) ? l.setAttribute('stroke-width', '0.25') : l.setAttribute('stroke-width', '0.1');
      main.grid.appendChild(l);

      if(i % (size * 10) === 0){
        if(j === 0){
          var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          var textNode = document.createTextNode("A,1");
          text.setAttribute('x', i + 0.5);
          text.setAttribute('y', size - 0.2);
          text.setAttribute('font-size', size);
          text.appendChild(textNode);

          main.grid.appendChild(text);
        }else{
          var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          var textNode = document.createTextNode(String.fromCharCode(j + 65));
          text.setAttribute('x', i + 0.2);
          text.setAttribute('y', size - 0.2);
          text.setAttribute('font-size', size);
          text.appendChild(textNode);

          main.grid.appendChild(text);

          var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          var textNode = document.createTextNode(j);
          text.setAttribute('x', 1 - 0.2);
          text.setAttribute('y', i - ((size * 10) - size) - 0.2);
          text.setAttribute('font-size', size);
          j > 1 ? text.appendChild(textNode) : 0;

          main.grid.appendChild(text);
        }

        j++;
      }
    }
  },
  drawAdjacencies: function(landSeaBothAll) {
    var i, j;

    for (i in adjacencies[landSeaBothAll]) {
      for (j = 0; j < adjacencies[landSeaBothAll][i].length; j++) {
        var from = tiles[i].loc;
        var to = tiles[adjacencies[landSeaBothAll][i][j]].loc;

        var l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        l.setAttribute('type', 'adjacencies');
        l.setAttribute('x1', from.split(',')[0]);
        l.setAttribute('x2', to.split(',')[0]);
        l.setAttribute('y1', from.split(',')[1]);
        l.setAttribute('y2', to.split(',')[1]);

        main.adjacencies.appendChild(l);
      }
    }
  },
  drawLine: function(floc, tloc, country){
    //draw movement line
    var l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    l.setAttribute('type', 'movement');
    // l.setAttribute('','');
    // l.setAttribute('marker-end', 'url(#triangle)');
    l.setAttribute('stroke-dasharray', '3, 3');
    l.setAttribute('country', country);
    l.setAttribute('x1', floc.split(',')[0]);
    l.setAttribute('y1', floc.split(',')[1]);
    l.setAttribute('x2', tloc.split(',')[0]);
    l.setAttribute('y2', tloc.split(',')[1]);

    main.movement.appendChild(l);
  },
  createSVGElement: function(params){
    var tag = params.tag || null,
      title = params.title || null,
      text = params.text || null,
      type = params.type || null,
      classTag = params.class || null,
      d = params.d || null,
      points = params.points || null;

    var element = document.createElementNS('http://www.w3.org/2000/svg', tag);
    if(title) element.setAttribute('title', o.title);
    if(text) element.setAttribute('text', o.text);
    if(type) element.setAttribute('type', o.type);
    if(classTag) element.setAttribute('class', o.classTag);
    if(d) element.setAttribute('d', o.d);
    if(points) element.setAttribute('points', o.points);

    return element
  }
};
