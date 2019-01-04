"use strict";

var main = {
  svg: document.querySelector('svg'),
  tileNamePref: 'abbr', //full/abbr
  squareGridSize: 5,
  adjacenciesToShow: 'all', // land, sea, or all
  init: function() {
    main.svg = document.querySelector('svg');
    construct.svgContainers();
    construct.tiles();
    // utils.hexGrid(5);
    utils.squareGrid(main.squareGridSize);
    // utils.drawAdjacencies(main.adjacenciesToShow);
    construct.supplyCenters();
    construct.tileNames(main.tileNamePref);
    construct.startingPositions(main.numOfPlayers);

    // events.init();

    // test.run();
  }
};

main.init();
// construct.svgContainers();
// construct.menu.construct({ loc: '100, 200' });
