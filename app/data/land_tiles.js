var land_tiles_template = [
  {
    name: 'CLY',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'ENGLAND',
    adjacentTiles: [
      'EDI','LVP','NAT'
    ],
  },
  {
    name: 'EDI',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'ENGLAND',
    adjacentTiles: [
      'CLY','NRG','NTH','YOR','LVP'
    ],
  },
  {
    name: 'LVP',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'ENGLAND',
    adjacentTiles: [
      'CLY','NAT','EDI','YOR','WAL','IRI'
    ],
  },
  {
    name: 'YOR',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'ENGLAND',
    adjacentTiles: [
      'EDI','LVP','NTH','LON','WAL'
    ],
  },
  {
    name: 'WAL',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'ENGLAND',
    adjacentTiles: [
      'IRI','ENG','LON','LVP','YOR'
    ],
  },
  {
    name: 'LON',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'ENGLAND',
    adjacentTiles: [
      'ENG','WAL','YOR','NTH'
    ],
  },
  {
    name: 'BEL',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: '',
    adjacentTiles: [
      'PIC','BUR','RUH','HOL','NTH','ENG'
    ],
  },
  {
    name: 'HOL',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: '',
    adjacentTiles: [
      'NTH','BEL','RUH','KIE','HEL'
    ],
  },
  {
    name: 'PIC',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'FRANCE',
    adjacentTiles: [
      'ENG','BEL','BUR','PAR','BRE'
    ],
  },
  {
    name: 'BRE',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'FRANCE',
    adjacentTiles: [
      'PIC','ENG','MID','PAR','GAS'
    ],
  },
  {
    name: 'PAR',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'FRANCE',
    adjacentTiles: [
      'PIC','BRE','GAS','BUR'
    ],
  },
  {
    name: 'GAS',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'FRANCE',
    adjacentTiles: [
      'MID','BRE','PAR','BUR','MAR','SPA'
    ],
  },
  {
    name: 'MAR',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'FRANCE',
    adjacentTiles: [
      'GAS','BUR','PIE','GOL','SPA'
    ],
  },
  {
    name: 'POR',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: '',
    adjacentTiles: [
      'SPA','MID'
    ],
  },
  {
    name: 'SPA',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: '',
    adjacentTiles: [
      'MID','GAS','MAR','GOL','WES','POR'
    ],
  },
  {
    name: 'NAF',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: '',
    adjacentTiles: [
      'MID','WES','TUN'
    ],
  },
  {
    name: 'TUN',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: '',
    adjacentTiles: [
      'NAF','WES','TYN','ION'
    ],
  },
  {
    name: 'PIE',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'ITALY',
    adjacentTiles: [
      'MAR','GOL','TUS','VEN','TYR'
    ]
  },
  {
    name: 'VEN',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'ITALY',
    adjacentTiles: [
      'TYR','TRI','ADR','APU','ROM','TUS','PIE'
    ]
  },
  {
    name: 'TUS',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'ITALY',
    adjacentTiles: [
      'GOL','PIE','VEN','ROM','TYN'
    ]
  },
  {
    name: 'ROM',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'ITALY',
    adjacentTiles: [
      'TUS','VEN','APU','NAP','TYN'
    ]
  },
  {
    name: 'NAP',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'ITALY',
    adjacentTiles: [
      'APU','ROM','ION','TYN'
    ]
  },
  {
    name: 'APU',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'ITALY',
    adjacentTiles: [
      'VEN','ADR','ION','NAP','ROM'
    ]
  },
  {
    name: 'TYR',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'AUSTRIA-HUNGARY',
    adjacentTiles: [
      'PIE','MUN','BOH','VIE','TRI','VEN'
    ]
  },
  {
    name: 'BOH',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'AUSTRIA-HUNGARY',
    adjacentTiles: [
      'MUN','SIL','GAL','VIE','TYR'
    ]
  },
  {
    name: 'TRI',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'AUSTRIA-HUNGARY',
    adjacentTiles: [
      'VEN','TYR','VIE','BUD','SER','ALB','ADR'
    ]
  },
  {
    name: 'VIE',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'AUSTRIA-HUNGARY',
    adjacentTiles: [
      'TYR','BOH','GAL','BUD','TRI'
    ]
  },
  {
    name: 'BUD',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'AUSTRIA-HUNGARY',
    adjacentTiles: [
      'VIE','GAL','RUM','SER','TRI'
    ]
  },
  {
    name: 'GAL',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'AUSTRIA-HUNGARY',
    adjacentTiles: [
      'BOH','SIL','WAR','UKR','RUM','RUM','BUD'
    ]
  },
  {
    name: 'MUN',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'GERMANY',
    adjacentTiles: [
      'BUR','RUH','KIE','BER','SIL','BOH','TYR'
    ]
  },
  {
    name: 'RUH',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'GERMANY',
    adjacentTiles: [
      'BUR','BEL','HOL','KIE','MUN'
    ]
  },
  {
    name: 'KIE',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'GERMANY',
    adjacentTiles: [
      'HOL','HEL','DEN','BER','MUN','RUH'
    ]
  },
  {
    name: 'BER',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'GERMANY',
    adjacentTiles: [
      'KIE','BAL','PRU','SIL','MUN'
    ]
  },
  {
    name: 'SIL',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'GERMANY',
    adjacentTiles: [
      'MUN','BER','PRU','WAR','GAL','BOH'
    ]
  },
  {
    name: 'PRU',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'GERMANY',
    adjacentTiles: [
      'BER','BAL','LVN','WAR','SIL'
    ]
  },
  {
    name: 'DEN',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: '',
    adjacentTiles: [
      'NTH','SKA','SWE','BAL','KIE','HEL'
    ]
  },
  {
    name: 'NWY',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: '',
    adjacentTiles: [
      'NRG','BAR','FIN','SWE','SKA','NTH'
    ]
  },
  {
    name: 'SWE',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: '',
    adjacentTiles: [
      'SKA','NWY','FIN','BOT','BAL','DEN'
    ]
  },
  {
    name: 'FIN',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'RUSSIA',
    adjacentTiles: [
      'SWE','NWY','STP','BOT'
    ]
  },
  {
    name: 'STP',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'RUSSIA',
    adjacentTiles: [
      'BAR','FIN','BOT','LVN','MOS'
    ]
  },
  {
    name: 'LVN',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'RUSSIA',
    adjacentTiles: [
      'BOT','STP','MOS','WAR','PRU','BAL'
    ]
  },
  {
    name: 'MOS',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'RUSSIA',
    adjacentTiles: [
      'STP','SEV','UKR','WAR','LVN'
    ]
  },
  {
    name: 'WAR',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'RUSSIA',
    adjacentTiles: [
      'PRU','LVN','MOS','UKR','GAL','SIL'
    ]
  },
  {
    name: 'UKR',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'RUSSIA',
    adjacentTiles: [
      'WAR','MOS','SEV','RUM','GAL'
    ]
  },
  {
    name: 'SEV',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'RUSSIA',
    adjacentTiles: [
      'UKR','MOS','ARM','BLA','RUM'
    ]
  },
  {
    name: 'ALB',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: '',
    adjacentTiles: [
      'TRI','SER','GRE','ION','ADR'
    ]
  },
  {
    name: 'SER',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: '',
    adjacentTiles: [
      'TRI','BUD','RUM','BUL','GRE','ALB'
    ]
  },
  {
    name: 'RUM',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: '',
    adjacentTiles: [
      'SER','BUD','GAL','UKR','SEV','BAL','BUL'
    ]
  },
  {
    name: 'BUL',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: '',
    adjacentTiles: [
      'SER','RUM','BLA','CON','AEG','GRE'
    ]
  },
  {
    name: 'GRE',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: '',
    adjacentTiles: [
      'ALN','SER','BUL','AEG','ION'
    ]
  },
  {
    name: 'CON',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'TURKEY',
    adjacentTiles: [
      'BLA','ANK','SMY','AEG','BUL'
    ]
  },
  {
    name: 'ANK',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'TURKEY',
    adjacentTiles: [
      'BLA','ARM','SMY','SON'
    ]
  },
  {
    name: 'ARM',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'TURKEY',
    adjacentTiles: [
      'SEV','SYR','SMY','ANK','BLA'
    ]
  },
  {
    name: 'SYR',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: false,
    nation: 'TURKEY',
    adjacentTiles: [
      'AMR','EAS','SMY'
    ]
  },
  {
    name: 'SMY',
    currentPiece: '',
    isLand: true,
    isSea: false,
    isSupplyCenter: true,
    nation: 'TURKEY',
    adjacentTiles: [
      'AEG','CON','ANK','ARM','SYR','EAS'
    ]
  }
];
