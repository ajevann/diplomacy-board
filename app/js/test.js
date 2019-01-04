'use strict';

var test = {
  commands: [
    'A VIE-TRI, A BUD-GAL, F TRI-ALB',
    'A LVP-YOR, F LON-NTH, F EDI-NWG',
    'A PAR-BUR, A MAR-SPA, F BRE-PIC',
    'A BER-KIE, A MUN-RUH, F KIE-DEN',
    'A VEN-PIE, A ROM-VEN, F NAP-ION',
    'A MOS-UKR, A WAR-GAL, F STP-BOT, F SEV-BLA',
    'A CON-BUL, A SMY-CON, F ANK-BLA',
  ],
  run: function(){
    var i;
    for(i in test.commands){
      gameplay.movement.moveTextCommand(test.commands[i]);
    }
  }
}
