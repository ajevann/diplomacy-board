'use strict';

var gameplay = {
  movement: {
    moveMouseCommand: function(from, to){

    },
    moveTextCommand: function(command){
      var indvCommands = command.toUpperCase().split(', ');

      var i;
      for(i in indvCommands){
        if(indvCommands.indexOf(' S ') > -1 && indvCommands[i].split(' ').length === 5){ // support

        }else if(indvCommands.indexOf(' C ') > -1 && indvCommands[i].split(' ').length === 5){ // support

        }else if(indvCommands.indexOf(' HOLDS ') > -1){

        }else if(indvCommands[i].split(' ').length === 2){ //
          var unitType = indvCommands[i].split(' ')[0]
          var from = indvCommands[i].split(' ')[1].split('-')[0];
          var to = indvCommands[i].split(' ')[1].split('-')[1];
          // console.log(unitType, from, to);
          gameplay.movement.move(from, to);
        }
      }
    },
    move: function(from, to){
      if(adjacencies.all[from].indexOf(to) > -1){
        var piece = document.querySelector('g[text="' + from + '"][type="unit"]');
        // console.log('g[text="' + from + '"][type="f"], g[text="' + from + '"][type="a"]');

        if(piece){
          piece.setAttribute('transform', 'translate(' + tiles[to].loc + ')');
          piece.setAttribute('title', tiles[to].title);
          piece.setAttribute('text', tiles[to].text);

          var country = piece.getAttribute('country');

          //if sc exists
          var scTo = document.querySelector('g[text="' + to + '"][type="sc"] circle');
          if (scTo) {
            scTo.setAttribute('country', country);
          }

          utils.drawLine(tiles[from].loc, tiles[to].loc, country);
        }else{
          console.log('no piece at (' + from + ', ' + to + ')');
        }
      }else{
        console.log('invalid move, tiles are not adjacent (' + from + ', ' + to + ')', adjacencies.all[from]);
      }

    }
  },

};
