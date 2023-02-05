// android migration
const source = [];
const brands = [4, 80, 57, 82, 95, 44, 45, 106, 74, 72, 73, 62, 6, 7, 1, 110, 114];
const res = source.filter(man => man.released > 2012 && brands.includes(Number(man.brandId))).map(man => ({ ...man, brandId: Number(man.brandId) }));

console.log(JSON.stringify(res));

// apple migration
const brandId = 999;
const minIphoneVersion = 1428;
const apple = [
   {
      Generation: 'iPhone',
      ANumber: 'A1203',
      Bootrom: ['Bootrom Rev.2'],
      FCCID: 'BCGA1203',
      InternalName: 'M68AP',
      Identifier: 'iPhone1,1',
      Models: [
         {
            Color: 'Black',
            Storage: '4 GB',
            Model: ['MA501']
         },
         {
            Color: 'Black',
            Storage: '8 GB',
            Model: ['MA712']
         },
         {
            Color: 'Black',
            Storage: '16 GB',
            Model: ['MB384']
         }
      ]
   },
   {
      Generation: 'iPhone 3G',
      ANumber: ['A1241', 'A1324'],
      Bootrom: ['Bootrom Rev.2'],
      FCCID: 'BCGA1241',
      InternalName: 'N82AP',
      Identifier: 'iPhone1,2',
      Models: [
         {
            Color: 'Black',
            Storage: '8 GB',
            Model: ['MB046', 'MB489', 'MB639', 'MB702', 'MC176', 'MB490', 'MB757']
         },
         {
            Color: 'Black',
            Storage: '16 GB',
            Model: ['MB048', 'MB496', 'MB497', 'MB631', 'MB704']
         },
         {
            Color: 'White',
            Storage: '16 GB',
            Model: ['MB499', 'MB500', 'MB501', 'MB632', 'MB705']
         }
      ]
   },
   {
      Generation: 'iPhone 3GS',
      ANumber: ['A1303', 'A1325'],
      Bootrom: ['Bootrom 359.3', 'Bootrom 359.3.2'],
      FCCID: ['BCGA1303A', 'BCGA1303B'],
      InternalName: 'N88AP',
      Identifier: 'iPhone2,1',
      Models: [
         {
            Color: 'Black',
            Storage: '8 GB',
            Model: ['MC555', 'MC637', 'MC640']
         },
         {
            Color: 'Black',
            Storage: '16 GB',
            Model: ['MC131', 'MC135', 'MC139', 'MC143', 'MB715', 'MB719', 'MB735']
         },
         {
            Color: 'Black',
            Storage: '32 GB',
            Model: ['MC133', 'MC137', 'MC141', 'MC158', 'MB717', 'MB737']
         },
         {
            Color: 'White',
            Storage: '16 GB',
            Model: ['MC132', 'MC136', 'MC140', 'MC144', 'MB716', 'MB736']
         },
         {
            Color: 'White',
            Storage: '32 GB',
            Model: ['MC134', 'MC138', 'MC160', 'MB718', 'MB738']
         }
      ]
   },
   {
      Generation: 'iPhone 4',
      ANumber: 'A1332',
      Bootrom: ['Bootrom 574.4'],
      FCCID: ['BCG‑E2380A', 'BCG‑E2380B'],
      InternalName: 'N90AP',
      Identifier: 'iPhone3,1',
      Models: [
         {
            Color: 'Black',
            Storage: '8 GB',
            Model: ['MD126', 'MD127', 'MD128']
         },
         {
            Color: 'Black',
            Storage: '16 GB',
            Model: ['MC318', 'MC603', 'MC608']
         },
         {
            Color: 'Black',
            Storage: '32 GB',
            Model: ['MC319', 'MC605', 'MC610']
         },
         {
            Color: 'White',
            Storage: '8 GB',
            Model: ['MD196', 'MD197', 'MD198']
         },
         {
            Color: 'White',
            Storage: '16 GB',
            Model: ['MC536', 'MC604', 'MC607', 'MC609']
         },
         {
            Color: 'White',
            Storage: '32 GB',
            Model: ['MC537', 'MC606', 'MC611']
         }
      ]
   },
   {
      Generation: 'iPhone 4',
      ANumber: 'A1332',
      Bootrom: ['Bootrom 574.4'],
      FCCID: ['BCG‑E2380A', 'BCG‑E2380B'],
      InternalName: 'N90bAP',
      Identifier: 'iPhone3,2',
      Models: [
         {
            Color: 'Black',
            Storage: '8 GB',
            Model: ['MD128', 'ME798']
         },
         {
            Color: 'White',
            Storage: '8 GB',
            Model: ['ME799']
         }
      ]
   },
   {
      Generation: 'iPhone 4',
      ANumber: 'A1349',
      Bootrom: ['Bootrom 574.4'],
      FCCID: ['BCG‑E2422A', 'BCG‑E2422B'],
      InternalName: 'N92AP',
      Identifier: 'iPhone3,3',
      Models: [
         {
            Color: 'Black',
            Storage: '8 GB',
            Model: ['MD146', 'MD439', 'MD873', 'ME639']
         },
         {
            Color: 'Black',
            Storage: '16 GB',
            Model: ['MC676']
         },
         {
            Color: 'Black',
            Storage: '32 GB',
            Model: ['MC678']
         },
         {
            Color: 'White',
            Storage: '8 GB',
            Model: ['MD200', 'MD440', 'MD874']
         },
         {
            Color: 'White',
            Storage: '16 GB',
            Model: ['MC677']
         },
         {
            Color: 'White',
            Storage: '32 GB',
            Model: ['MC679']
         }
      ]
   },
   {
      Generation: 'iPhone 4S',
      ANumber: ['A1387', 'A1431'],
      Bootrom: ['Bootrom 838.3'],
      FCCID: 'BCG‑E2430A',
      InternalName: 'N94AP',
      Identifier: 'iPhone4,1',
      Models: [
         {
            Color: 'Black',
            Storage: '8 GB',
            Model: ['ME259', 'MF257', 'MF259', 'MF261', 'MF263', 'MF265', 'MF269', 'MF267']
         },
         {
            Color: 'Black',
            Storage: '16 GB',
            Model: ['MC918', 'MC922', 'MD234', 'MD235', 'MD236', 'MD251', 'MD254', 'MD276', 'MD377', 'MD865', 'ME804']
         },
         {
            Color: 'Black',
            Storage: '32 GB',
            Model: ['MC919', 'MC923', 'MD241', 'MD242', 'MD243', 'MD261', 'MD278', 'MD379']
         },
         {
            Color: 'Black',
            Storage: '64 GB',
            Model: ['MD257', 'MD258', 'MD259', 'MD269', 'MD270', 'MD280', 'MD381']
         },
         {
            Color: 'White',
            Storage: '8 GB',
            Model: ['MF258', 'MF260', 'MF262', 'MF264', 'MF266', 'MF268', 'MF270']
         },
         {
            Color: 'White',
            Storage: '16 GB',
            Model: ['MC920', 'MC924', 'MD237', 'MD239', 'MD240', 'MD277', 'MD378', 'MD866', 'MD920', 'ME805']
         },
         {
            Color: 'White',
            Storage: '32 GB',
            Model: ['MC921', 'MC925', 'MD244', 'MD245', 'MD246', 'MD279', 'MD380']
         },
         {
            Color: 'White',
            Storage: '64 GB',
            Model: ['MD260', 'MD262', 'MD271', 'MD272', 'MD281', 'MD382']
         }
      ]
   },
   {
      Generation: 'iPhone 5',
      ANumber: 'A1428',
      Bootrom: ['Bootrom 1145.3'],
      FCCID: 'BCG‑E2599A',
      InternalName: 'N41AP',
      Identifier: 'iPhone5,1',
      Models: [
         {
            Color: 'Black',
            Storage: '16 GB',
            Model: ['MD293', 'MD634', 'MD638', 'ME486']
         },
         {
            Color: 'Black',
            Storage: '32 GB',
            Model: ['MD295', 'MD636', 'MD640', 'ME488']
         },
         {
            Color: 'Black',
            Storage: '64 GB',
            Model: ['MD642', 'MD644', 'MD646', 'ME490']
         },
         {
            Color: 'White',
            Storage: '16 GB',
            Model: ['MD294', 'MD635', 'MD639', 'ME487']
         },
         {
            Color: 'White',
            Storage: '32 GB',
            Model: ['MD296', 'MD637', 'MD641', 'ME489']
         },
         {
            Color: 'White',
            Storage: '64 GB',
            Model: ['MD643', 'MD645', 'MD647', 'ME491']
         }
      ]
   },
   {
      Generation: 'iPhone 5',
      ANumber: ['A1429', 'A1442'],
      Bootrom: ['Bootrom 1145.3'],
      FCCID: 'BCG‑E2599A',
      InternalName: 'N42AP',
      Identifier: 'iPhone5,2',
      Models: [
         {
            Color: 'Black',
            Storage: '16 GB',
            Model: ['MD097', 'MD297', 'MD654', 'MD656', 'MD669', 'MD671', 'ME039']
         },
         {
            Color: 'Black',
            Storage: '32 GB',
            Model: ['MD299', 'MD658', 'MD660', 'ME041']
         },
         {
            Color: 'Black',
            Storage: '64 GB',
            Model: ['MD662', 'MD664', 'MD667', 'ME043']
         },
         {
            Color: 'White',
            Storage: '16 GB',
            Model: ['MD105', 'MD298', 'MD655', 'MD657', 'MD672', 'ME040']
         },
         {
            Color: 'White',
            Storage: '32 GB',
            Model: ['MD144', 'MD300', 'MD659', 'MD661', 'ME042']
         },
         {
            Color: 'White',
            Storage: '64 GB',
            Model: ['MD663', 'MD665', 'MD668', 'ME044']
         }
      ]
   },
   {
      Generation: 'iPhone 5c',
      ANumber: ['A1456', 'A1532'],
      Bootrom: ['Bootrom 1145.3'],
      FCCID: 'BCG‑E2644A',
      InternalName: 'N48AP',
      Identifier: 'iPhone5,3',
      Models: [
         {
            Color: 'Blue',
            Storage: '16 GB',
            Model: ['ME507', 'ME531', 'ME543']
         },
         {
            Color: 'Blue',
            Storage: '32 GB',
            Model: ['MF136', 'MF151']
         },
         {
            Color: 'Green',
            Storage: '16 GB',
            Model: ['ME496', 'ME508', 'ME544', 'ME568']
         },
         {
            Color: 'Green',
            Storage: '32 GB',
            Model: ['MF137', 'MF152']
         },
         {
            Color: 'Pink',
            Storage: '16 GB',
            Model: ['ME509', 'ME533', 'ME545']
         },
         {
            Color: 'Pink',
            Storage: '32 GB',
            Model: ['MF133', 'MF138', 'MF153']
         },
         {
            Color: 'White',
            Storage: '16 GB',
            Model: ['ME493', 'ME505', 'ME541', 'ME565']
         },
         {
            Color: 'White',
            Storage: '32 GB',
            Model: ['MF134', 'MF149']
         },
         {
            Color: 'Yellow',
            Storage: '8 GB',
            Model: ['MGF12']
         },
         {
            Color: 'Yellow',
            Storage: '16 GB',
            Model: ['ME506']
         },
         {
            Color: 'Yellow',
            Storage: '32 GB',
            Model: ['MF135']
         }
      ]
   },
   {
      Generation: 'iPhone 5c',
      ANumber: ['A1507', 'A1516', 'A1526', 'A1529'],
      Bootrom: ['Bootrom 1145.3'],
      FCCID: ['BCG‑E2694A', 'BCG‑E2694B'],
      InternalName: 'N49AP',
      Identifier: 'iPhone5,4',
      Models: [
         {
            Color: 'Blue',
            Storage: '8 GB',
            Model: ['MG0T2', 'MG1U2', 'MG902']
         },
         {
            Color: 'Blue',
            Storage: '16 GB',
            Model: ['ME501', 'MF323', 'MF333', 'ME555', 'ME561']
         },
         {
            Color: 'Blue',
            Storage: '32 GB',
            Model: ['MF156']
         },
         {
            Color: 'Green',
            Storage: '8 GB',
            Model: ['MG0V2', 'MG1W2', 'MG912']
         },
         {
            Color: 'Green',
            Storage: '16 GB',
            Model: ['ME502', 'ME556', 'MF324']
         },
         {
            Color: 'Green',
            Storage: '32 GB',
            Model: ['MF095', 'MF157', 'MF329']
         },
         {
            Color: 'Pink',
            Storage: '8 GB',
            Model: ['MG0V2', 'MG1W2', 'MG922']
         },
         {
            Color: 'Pink',
            Storage: '16 GB',
            Model: ['ME503', 'ME557']
         },
         {
            Color: 'Pink',
            Storage: '32 GB',
            Model: ['MF158', 'MF330']
         },
         {
            Color: 'White',
            Storage: '8 GB',
            Model: ['MG0Q2', 'MG1Q2', 'MG8X2']
         },
         {
            Color: 'White',
            Storage: '16 GB',
            Model: ['ME499', 'ME553', 'MF321']
         },
         {
            Color: 'White',
            Storage: '32 GB',
            Model: ['MF154', 'MF326']
         },
         {
            Color: 'Yellow',
            Storage: '8 GB',
            Model: ['MG0R2', 'MG1R2', 'MG8Y2']
         },
         {
            Color: 'Yellow',
            Storage: '16 GB',
            Model: ['ME554', 'MF322']
         },
         {
            Color: 'Yellow',
            Storage: '32 GB',
            Model: ['MF155', 'MF327']
         }
      ]
   },
   {
      Generation: 'iPhone 5s',
      ANumber: ['A1453', 'A1533'],
      Bootrom: ['Bootrom 1704.10'],
      FCCID: 'BCG‑E2642A',
      InternalName: 'N51AP',
      Identifier: 'iPhone6,1',
      Models: [
         {
            Color: 'Gold',
            Storage: '16 GB',
            Model: ['ME298', 'ME307', 'ME325', 'ME334', 'ME343']
         },
         {
            Color: 'Gold',
            Storage: '32 GB',
            Model: ['ME301', 'ME310', 'ME328', 'ME337', 'ME346']
         },
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['ME304', 'ME313', 'ME331', 'ME340', 'ME349']
         },
         {
            Color: 'Silver',
            Storage: '16 GB',
            Model: ['ME297', 'ME306', 'ME324', 'ME333', 'ME342']
         },
         {
            Color: 'Silver',
            Storage: '32 GB',
            Model: ['ME300', 'ME309', 'ME327', 'ME336', 'ME345']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['ME303', 'ME312', 'ME330', 'ME339', 'ME348', 'ME436', 'MF359']
         },
         {
            Color: 'Space Gray',
            Storage: '16 GB',
            Model: ['ME296', 'ME305', 'ME323', 'ME332', 'ME341', 'MF797']
         },
         {
            Color: 'Space Gray',
            Storage: '32 GB',
            Model: ['ME299', 'ME308', 'ME326', 'ME335', 'ME344', 'MF384']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['ME302', 'ME311', 'ME329', 'ME338', 'ME347']
         }
      ]
   },
   {
      Generation: 'iPhone 5s',
      ANumber: ['A1457', 'A1518', 'A1528', 'A1530'],
      Bootrom: ['Bootrom 1704.10'],
      FCCID: ['BCG‑E2643A', 'BCG‑E2643B'],
      InternalName: 'N53AP',
      Identifier: 'iPhone6,2',
      Models: [
         {
            Color: 'Gold',
            Storage: '16 GB',
            Model: ['ME434', 'MF354', 'MF398', 'MF363']
         },
         {
            Color: 'Gold',
            Storage: '32 GB',
            Model: ['ME437', 'MF357']
         },
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['ME440', 'MF360']
         },
         {
            Color: 'Silver',
            Storage: '16 GB',
            Model: ['ME433', 'MF353', 'MF362']
         },
         {
            Color: 'Silver',
            Storage: '32 GB',
            Model: ['ME436', 'MF356']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['ME439']
         },
         {
            Color: 'Space Gray',
            Storage: '16 GB',
            Model: ['ME432', 'MF352']
         },
         {
            Color: 'Space Gray',
            Storage: '32 GB',
            Model: ['ME435', 'MF355']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['ME438', 'MF358']
         }
      ]
   },
   {
      Generation: 'iPhone SE (1st generation)',
      ANumber: ['A1662', 'A1723', 'A1724'],
      Bootrom: ['Bootrom 2234.0.0.3.3 (S8000)', 'Bootrom 2234.0.0.2.22 (S8003)'],
      FCCID: 'BCG‑E2945A',
      InternalName: ['N69AP', 'N69uAP'],
      Identifier: 'iPhone8,4',
      Models: [
         {
            Color: 'Gold',
            Storage: '16 GB',
            Model: ['MLXH2', 'MLXM2', 'MLXW2', 'MLY12', 'MLY52', 'MLY92']
         },
         {
            Color: 'Gold',
            Storage: '32 GB',
            Model: ['MP8D2', 'MP8R2', 'MP8H2', 'MP8M2', 'MP7V2', 'MP842']
         },
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MLXK2', 'MLXP2', 'MLXY2', 'MLY32', 'MLY72', 'MLYC2']
         },
         {
            Color: 'Gold',
            Storage: '128 GB',
            Model: ['MP952', 'MP9J2', 'MP992', 'MP9E2', 'MP802', 'MP882']
         },
         {
            Color: 'Rose Gold',
            Storage: '16 GB',
            Model: ['MLXJ2', 'MLXN2', 'MLXX2', 'MLY22', 'MLY62', 'MLYA2']
         },
         {
            Color: 'Rose Gold',
            Storage: '32 GB',
            Model: ['MP8E2', 'MP8T2', 'MP8J2', 'MP8N2', 'MP7W2', 'MP852']
         },
         {
            Color: 'Rose Gold',
            Storage: '64 GB',
            Model: ['MLXL2', 'MLXQ2', 'MLY02', 'MLY42', 'MLY82', 'MLYD2']
         },
         {
            Color: 'Rose Gold',
            Storage: '128 GB',
            Model: ['MP962', 'MP9K2', 'MP9A2', 'MP9F2', 'MP812', 'MP892']
         },
         {
            Color: 'Silver',
            Storage: '16 GB',
            Model: ['MLLM2', 'MLLP2', 'MLLV2', 'MLLX2', 'MLM02', 'MLM32']
         },
         {
            Color: 'Silver',
            Storage: '32 GB',
            Model: ['MP8C2', 'MP8Q2', 'MP8G2', 'MP8L2', 'MP7U2', 'MP832']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MLM52', 'MLM72', 'MLMC2', 'MLME2', 'MLMG2', 'MLMJ2']
         },
         {
            Color: 'Silver',
            Storage: '128 GB',
            Model: ['MP942', 'MP9H2', 'MP982', 'MP9D2', 'MP7Y2', 'MP872']
         },
         {
            Color: 'Space Gray',
            Storage: '16 GB',
            Model: ['MLLL2', 'MLLN2', 'MLLU2', 'MLLW2', 'MLLY2', 'MLM22']
         },
         {
            Color: 'Space Gray',
            Storage: '32 GB',
            Model: ['MP8A2', 'MP8P2', 'MP8F2', 'MP8K2', 'MP7T2', 'MP822']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MLM42', 'MLM62', 'MLMA2', 'MLMD2', 'MLMF2', 'MLMH2']
         },
         {
            Color: 'Space Gray',
            Storage: '128 GB',
            Model: ['MP932', 'MP9G2', 'MP972', 'MP9C2', 'MP7X2', 'MP862']
         }
      ]
   },
   {
      Generation: 'iPhone 6',
      ANumber: ['A1549', 'A1586', 'A1589'],
      Bootrom: ['Bootrom 1992.0.0.1.19'],
      FCCID: 'BCG‑E2816A',
      InternalName: 'N61AP',
      Identifier: 'iPhone7,2',
      Models: [
         {
            Color: 'Gold',
            Storage: '16 GB',
            Model: ['MG3D2', 'MG492', 'MG4Q2', 'MG562', 'MG5Y2', 'MG6C2']
         },
         {
            Color: 'Gold',
            Storage: '32 GB',
            Model: ['MQ3E2']
         },
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MG3L2', 'MG4J2', 'MG502', 'MG652', 'MG6J2', 'MG842']
         },
         {
            Color: 'Gold',
            Storage: '128 GB',
            Model: ['MG3G2', 'MG4E2', 'MG4V2', 'MG622']
         },
         {
            Color: 'Silver',
            Storage: '16 GB',
            Model: ['MG3C2', 'MG4P2', 'MG482', 'MG5X2', 'MG552', 'MG6A2', 'MG7W2']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MG3K2', 'MG4H2', 'MG4X2', 'MG5C2', 'MG6H2', 'MG642', 'MG822']
         },
         {
            Color: 'Silver',
            Storage: '128 GB',
            Model: ['MG3F2', 'MG4C2', 'MG612']
         },
         {
            Color: 'Space Gray',
            Storage: '16 GB',
            Model: ['MG3A2', 'MG4N2', 'MG472', 'MG5H2', 'MG5W2', 'MG542', 'MG692']
         },
         {
            Color: 'Space Gray',
            Storage: '32 GB',
            Model: ['MQ3D2', 'MQ462']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MG3H2', 'MG4F2', 'MG4W2', 'MG5A2', 'MG6G2', 'MG632']
         },
         {
            Color: 'Space Gray',
            Storage: '128 GB',
            Model: ['MG3E2', 'MG4A2', 'MG4R2', 'MG602']
         }
      ]
   },
   {
      Generation: 'iPhone 6 Plus',
      ANumber: ['A1522', 'A1524', 'A1593'],
      Bootrom: ['Bootrom 1992.0.0.1.19'],
      FCCID: 'BCG‑E2817A',
      InternalName: 'N56AP',
      Identifier: 'iPhone7,1',
      Models: [
         {
            Color: 'Gold',
            Storage: '16 GB',
            Model: ['MGAA2', 'MGAN2', 'MGC12', 'MGCM2', 'MGCX2']
         },
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MGAK2', 'MGAW2', 'MGC72', 'MGCU2']
         },
         {
            Color: 'Gold',
            Storage: '128 GB',
            Model: ['MGAF2', 'MGAR2', 'MGC42', 'MGCQ2']
         },
         {
            Color: 'Silver',
            Storage: '16 GB',
            Model: ['MGA92', 'MGAM2', 'MGC02', 'MGC92', 'MGCL2']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MGAJ2', 'MGAV2', 'MGC62', 'MGCT2']
         },
         {
            Color: 'Silver',
            Storage: '128 GB',
            Model: ['MGAE2', 'MGAQ2', 'MGC32', 'MGCP2']
         },
         {
            Color: 'Space Gray',
            Storage: '16 GB',
            Model: ['MGA82', 'MGAL2', 'MGAX2', 'MGCK2']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MGAH2', 'MGAU2', 'MGC52', 'MGCR2']
         },
         {
            Color: 'Space Gray',
            Storage: '128 GB',
            Model: ['MGAC2', 'MGAP2', 'MGC22', 'MGCN2']
         }
      ]
   },
   {
      Generation: 'iPhone 6s',
      ANumber: ['A1633', 'A1688', 'A1691', 'A1700'],
      Bootrom: ['Bootrom 2234.0.0.3.3 (S8000)', 'Bootrom 2234.0.0.2.22 (S8003)'],
      FCCID: 'BCG-E2946A',
      InternalName: ['N71AP', 'N71mAP'],
      Identifier: 'iPhone8,1',
      Models: [
         {
            Color: 'Gold',
            Storage: '16 GB',
            Model: ['MKQL2', 'MKQ72', 'MKR12', 'MKRE2', 'MKRW2', 'MKT92', 'ML7E2']
         },
         {
            Color: 'Gold',
            Storage: '32 GB',
            Model: ['MN0P2', 'MN172', 'MN1K2', 'MN1U2', 'MN1Y2', 'MN112']
         },
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MKQC2', 'MKQQ2', 'MKR52', 'MKRJ2', 'MKT12', 'MKTE2', 'ML7J2']
         },
         {
            Color: 'Gold',
            Storage: '128 GB',
            Model: ['MKQG2', 'MKQV2', 'MKR92', 'MKRP2', 'MKT52', 'MKTJ2', 'ML7N2']
         },
         {
            Color: 'Rose Gold',
            Storage: '16 GB',
            Model: ['MKQM2', 'MKQ82', 'MKRF2', 'MKRX2', 'MKR22', 'MKTA2', 'ML7F2']
         },
         {
            Color: 'Rose Gold',
            Storage: '32 GB',
            Model: ['MN0V2', 'MN192', 'MN1L2', 'MN1V2', 'MN202', 'MN122']
         },
         {
            Color: 'Rose Gold',
            Storage: '64 GB',
            Model: ['MKQD2', 'MKQR2', 'MKR62', 'MKRK2', 'MKT22', 'MKTF2', 'ML7K2']
         },
         {
            Color: 'Rose Gold',
            Storage: '128 GB',
            Model: ['MKQH2', 'MKQW2', 'MKRA2', 'MKRQ2', 'MKT62', 'MKTK2', 'ML7P2']
         },
         {
            Color: 'Silver',
            Storage: '16 GB',
            Model: ['MKQ62', 'MKQK2', 'MKQY2', 'MKRD2', 'MKRT2', 'MKT82', 'ML7D2', 'NKQJ2']
         },
         {
            Color: 'Silver',
            Storage: '32 GB',
            Model: ['MN0N2', 'MN162', 'MN1G2', 'MN1Q2', 'MN1X2', 'MN0X2']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MKQA2', 'MKQP2', 'MKR42', 'MKRH2', 'MKT02', 'MKTD2', 'ML7H2']
         },
         {
            Color: 'Silver',
            Storage: '128 GB',
            Model: ['MKQF2', 'MKQU2', 'MKR82', 'MKRM2', 'MKT42', 'MKTH2', 'ML7M2']
         },
         {
            Color: 'Space Gray',
            Storage: '16 GB',
            Model: ['MKQ52', 'MKQJ2', 'MKQX2', 'MKRC2', 'MKRR2', 'MKT72', 'ML7C2']
         },
         {
            Color: 'Space Gray',
            Storage: '32 GB',
            Model: ['MN0M2', 'MN132', 'MN1E2', 'MN1M2', 'MN1W2', 'MN0W2']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MKQN2', 'MKQ92', 'MKR32', 'MKRG2', 'MKRY2', 'MKTC2', 'ML7G2']
         },
         {
            Color: 'Space Gray',
            Storage: '128 GB',
            Model: ['MKQE2', 'MKQT2', 'MKR72', 'MKRL2', 'MKT32', 'MKTG2', 'ML7L2']
         }
      ]
   },
   {
      Generation: 'iPhone 6s Plus',
      ANumber: ['A1634', 'A1687', 'A1690', 'A1699'],
      Bootrom: ['Bootrom 2234.0.0.3.3 (S8000)', 'Bootrom 2234.0.0.2.22 (S8003)'],
      FCCID: 'BCG-E2944A',
      InternalName: ['N66AP', 'N66mAP'],
      Identifier: 'iPhone8,2',
      Models: [
         {
            Color: 'Gold',
            Storage: '16 GB',
            Model: ['MKTN2', 'MKU32', 'MKUN2', 'MKV62', 'MKVQ2', 'MKW72', 'ML6D2']
         },
         {
            Color: 'Gold',
            Storage: '32 GB',
            Model: ['MN2X2']
         },
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MKTT2', 'MKU82', 'MKUV2', 'MKVD2', 'MKVX2', 'MKWD2', 'ML6H2']
         },
         {
            Color: 'Gold',
            Storage: '128 GB',
            Model: ['MKTX2', 'MKUF2', 'MKV12', 'MKVH2', 'MKW22', 'MKWH2', 'ML6M2']
         },
         {
            Color: 'Rose Gold',
            Storage: '16 GB',
            Model: ['MKU52', 'MKTP2', 'MKUP2', 'MKV72', 'MKVU2', 'MKW82', 'ML6E2']
         },
         {
            Color: 'Rose Gold',
            Storage: '32 GB',
            Model: ['MN2Y2']
         },
         {
            Color: 'Rose Gold',
            Storage: '64 GB',
            Model: ['MKU92', 'MKTU2', 'MKUW2', 'MKVE2', 'MKVY2', 'MKWE2', 'ML6J2']
         },
         {
            Color: 'Rose Gold',
            Storage: '128 GB',
            Model: ['MKUG2', 'MKV22', 'MKVJ2', 'MKTY2', 'ML6N2']
         },
         {
            Color: 'Silver',
            Storage: '16 GB',
            Model: ['MKTM2', 'MKU22', 'MKUJ2', 'MKV52', 'MKVP2', 'MKW62', 'ML6C2']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MKTR2', 'MKU72', 'MKUU2', 'MKV92', 'MKVW2', 'MKWC2', 'ML6G2']
         },
         {
            Color: 'Silver',
            Storage: '128 GB',
            Model: ['MKTW2', 'MKUE2', 'MKUY2', 'MKVG2', 'MKW12', 'MKWG2', 'ML6L2']
         },
         {
            Color: 'Space Gray',
            Storage: '16 GB',
            Model: ['MKU12', 'MKV32', 'MKTL2', 'MKUH2', 'MKVN2', 'MKW52', 'ML6A2']
         },
         {
            Color: 'Space Gray',
            Storage: '32 GB',
            Model: ['MN2V2']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MKU62', 'MKTQ2', 'MKUQ2', 'MKV82', 'MKVV2', 'MKW92', 'ML642', 'ML6F2']
         },
         {
            Color: 'Space Gray',
            Storage: '128 GB',
            Model: ['MKUD2', 'MKTV2', 'MKUX2', 'MKVF2', 'MKW02', 'MKWF2', 'ML6K2']
         }
      ]
   },
   {
      Generation: 'iPhone 7',
      ANumber: ['A1660', 'A1779', 'A1780'],
      Bootrom: ['Bootrom 2696.0.0.1.33'],
      FCCID: ['BCG‑E3085A', 'BCG‑E3086A'],
      InternalName: ['D10AP'],
      Identifier: 'iPhone9,1',
      Models: [
         {
            Color: 'Black',
            Storage: '32 GB',
            Model: ['MN8G2', 'MNAC2', 'MNAY2', 'MNCE2', 'MNGQ2']
         },
         {
            Color: 'Black',
            Storage: '128 GB',
            Model: ['MN8L2', 'MNAJ2', 'MNC32', 'MNCK2', 'MNGX2']
         },
         {
            Color: 'Black',
            Storage: '256 GB',
            Model: ['MN8R2', 'MNAQ2', 'MNC82', 'MNCQ2']
         },
         {
            Color: 'Gold',
            Storage: '32 GB',
            Model: ['MN8J2', 'MNAE2', 'MNC12', 'MNCG2']
         },
         {
            Color: 'Gold',
            Storage: '128 GB',
            Model: ['MN8N2', 'MNAL2', 'MNC52', 'MNCM2', 'MNH02']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MN8U2', 'MNAV2', 'MNCA2', 'MNCT2', 'MN992']
         },
         {
            Color: 'Jet Black',
            Storage: '128 GB',
            Model: ['MN8Q2', 'MNAP2', 'MNC72', 'MNCP2']
         },
         {
            Color: 'Jet Black',
            Storage: '256 GB',
            Model: ['MN8W2', 'MNAX2', 'MNCD2', 'MNCV2']
         },
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MPRV2', 'MPRT2', 'MPRH2', 'MPRL2']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MPRW2', 'MPRU2', 'MPRJ2', 'MPRM2']
         },
         {
            Color: 'Rose Gold',
            Storage: '32 GB',
            Model: ['MN8K2', 'MNAF2', 'MNC22', 'MNCJ2']
         },
         {
            Color: 'Rose Gold',
            Storage: '128 GB',
            Model: ['MN8P2', 'MNAM2', 'MNC62', 'MNCN2', 'MNH12']
         },
         {
            Color: 'Rose Gold',
            Storage: '256 GB',
            Model: ['MN8V2', 'MNAW2', 'MNCC2', 'MNCU2', 'MN9A2']
         },
         {
            Color: 'Silver',
            Storage: '32 GB',
            Model: ['MN8H2', 'MNAD2', 'MNC02', 'MNCF2', 'MN8Y2']
         },
         {
            Color: 'Silver',
            Storage: '128 GB',
            Model: ['MN8M2', 'MNAK2', 'MNC42', 'MNCL2', 'MN932']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MN8T2', 'MNAU2', 'MNC92', 'MNCR2', 'MN982']
         }
      ]
   },
   {
      Generation: 'iPhone 7',
      ANumber: 'A1778',
      Bootrom: ['Bootrom 2696.0.0.1.33'],
      FCCID: 'BCG‑E3091A',
      InternalName: ['D101AP'],
      Identifier: 'iPhone9,3',
      Models: [
         {
            Color: 'Black',
            Storage: '32 GB',
            Model: ['MN8X2', 'MN9D2', 'MN9U2']
         },
         {
            Color: 'Black',
            Storage: '128 GB',
            Model: ['MN922', 'MN9H2', 'MN9Y2']
         },
         {
            Color: 'Black',
            Storage: '256 GB',
            Model: ['MN972', 'MN9N2', 'MNA62']
         },
         {
            Color: 'Gold',
            Storage: '32 GB',
            Model: ['MN902', 'MN9F2', 'MN9W2']
         },
         {
            Color: 'Gold',
            Storage: '128 GB',
            Model: ['MN942', 'MN9K2', 'MNA32']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MN9Q2', 'MNA82']
         },
         {
            Color: 'Jet Black',
            Storage: '32 GB',
            Model: ['MQTR2', 'MQTX2']
         },
         {
            Color: 'Jet Black',
            Storage: '128 GB',
            Model: ['MN962', 'MN9M2', 'MNA52']
         },
         {
            Color: 'Jet Black',
            Storage: '256 GB',
            Model: ['MN9C2', 'MN9T2', 'MNAA2']
         },
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MPRN2', 'MPRQ2']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MPRP2', 'MPRR2']
         },
         {
            Color: 'Rose Gold',
            Storage: '32 GB',
            Model: ['MN912', 'MN9G2', 'MN9X2']
         },
         {
            Color: 'Rose Gold',
            Storage: '128 GB',
            Model: ['MN952', 'MN9L2', 'MNA42']
         },
         {
            Color: 'Rose Gold',
            Storage: '256 GB',
            Model: ['MN9R2', 'MNA92']
         },
         {
            Color: 'Silver',
            Storage: '32 GB',
            Model: ['MN9E2', 'MN9V2', 'MN8Y2']
         },
         {
            Color: 'Silver',
            Storage: '128 GB',
            Model: ['MN9J2', 'MNA02']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MN9P2', 'MNA72']
         }
      ]
   },
   {
      Generation: 'iPhone 7 Plus',
      ANumber: ['A1661', 'A1785', 'A1786'],
      Bootrom: ['Bootrom 2696.0.0.1.33'],
      FCCID: ['BCG‑E3087A', 'BCG‑E3088A'],
      InternalName: ['D11AP'],
      Identifier: 'iPhone9,2',
      Models: [
         {
            Color: 'Black',
            Storage: '32 GB',
            Model: ['MNQH2', 'MNR12', 'MNR52', 'MNR92', 'MNRJ2']
         },
         {
            Color: 'Black',
            Storage: '128 GB',
            Model: ['MN482', 'MN5T2', 'MN642', 'MN6F2', 'MNFP2']
         },
         {
            Color: 'Black',
            Storage: '256 GB',
            Model: ['MN4E2', 'MN5Y2', 'MN692', 'MN6L2', 'MNFV2']
         },
         {
            Color: 'Gold',
            Storage: '32 GB',
            Model: ['MNQK2', 'MNR32', 'MNR72', 'MNRC2', 'MNRL2']
         },
         {
            Color: 'Gold',
            Storage: '128 GB',
            Model: ['MN4A2', 'MN5V2', 'MN662', 'MN6H2', 'MNFR2']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MN4J2', 'MN612', 'MN6C2', 'MN6N2']
         },
         {
            Color: 'Jet Black',
            Storage: '32 GB',
            Model: ['MQU22']
         },
         {
            Color: 'Jet Black',
            Storage: '128 GB',
            Model: ['MN4D2', 'MN5X2', 'MN682', 'MN6K2']
         },
         {
            Color: 'Jet Black',
            Storage: '256 GB',
            Model: ['MN4L2', 'MN632', 'MN6E2', 'MN6Q2']
         },
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MPR12', 'MPR02', 'MPQV2', 'MPQW2']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MPRA2', 'MPR92', 'MPR52', 'MPR62']
         },
         {
            Color: 'Rose Gold',
            Storage: '32 GB',
            Model: ['MNQL2', 'MNR42', 'MNR82', 'MNRD2', 'MNRM2']
         },
         {
            Color: 'Rose Gold',
            Storage: '128 GB',
            Model: ['MN4C2', 'MN5W2', 'MN672', 'MN6J2', 'MNFT2']
         },
         {
            Color: 'Rose Gold',
            Storage: '256 GB',
            Model: ['MN4K2', 'MN622', 'MN6D2', 'MN6P2', 'MNFY2']
         },
         {
            Color: 'Silver',
            Storage: '32 GB',
            Model: ['MNQJ2', 'MNR22', 'MNR62', 'MNRA2', 'MNRK2']
         },
         {
            Color: 'Silver',
            Storage: '128 GB',
            Model: ['MN492', 'MN5U2', 'MN652', 'MN6G2', 'MNFQ2']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MN4F2', 'MN602', 'MN6A2', 'MN6M2']
         }
      ]
   },
   {
      Generation: 'iPhone 7 Plus',
      ANumber: 'A1784',
      Bootrom: ['Bootrom 2696.0.0.1.33'],
      FCCID: 'BCG‑E3092A',
      InternalName: ['D111AP'],
      Identifier: 'iPhone9,4',
      Models: [
         {
            Color: 'Black',
            Storage: '32 GB',
            Model: ['MNQM2', 'MNQR2', 'MNQW2']
         },
         {
            Color: 'Black',
            Storage: '128 GB',
            Model: ['MN4M2', 'MN522', 'MN5G2']
         },
         {
            Color: 'Black',
            Storage: '256 GB',
            Model: ['MN4W2', 'MN592', 'MN5M2']
         },
         {
            Color: 'Gold',
            Storage: '32 GB',
            Model: ['MNQP2', 'MNQU2', 'MNQY2']
         },
         {
            Color: 'Gold',
            Storage: '128 GB',
            Model: ['MN4Q2', 'MN552', 'MN5J2']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MN4Y2', 'MN5D2', 'MN5P2']
         },
         {
            Color: 'Jet Black',
            Storage: '128 GB',
            Model: ['MN572', 'MN5L2', 'MN4V2']
         },
         {
            Color: 'Jet Black',
            Storage: '256 GB',
            Model: ['MN5F2', 'MN5R2', 'MN512']
         },
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MPQW2', 'MPQY2']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MPR72', 'MPR82']
         },
         {
            Color: 'Rose Gold',
            Storage: '32 GB',
            Model: ['MNQQ2', 'MNQV2', 'MNR02']
         },
         {
            Color: 'Rose Gold',
            Storage: '128 GB',
            Model: ['MN4U2', 'MN562', 'MN5K2']
         },
         {
            Color: 'Rose Gold',
            Storage: '256 GB',
            Model: ['MN5E2', 'MN5Q2']
         },
         {
            Color: 'Silver',
            Storage: '32 GB',
            Model: ['MNQN2', 'MNQT2', 'MNQX2']
         },
         {
            Color: 'Silver',
            Storage: '128 GB',
            Model: ['MN4P2', 'MN532', 'MN5H2']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MN4X2', 'MN502', 'MN5C2', 'MN5N2']
         }
      ]
   },
   {
      Generation: 'iPhone 8',
      ANumber: ['A1863', 'A1906', 'A1907'],
      Bootrom: ['Bootrom 3332.0.0.1.23'],
      FCCID: ['BCG-E3159A', 'BCG-E3171A'],
      InternalName: 'D20AP',
      Identifier: 'iPhone10,1',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MQ6M2', 'MQ742', 'MQ772', 'MQ7A2']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MQ7H2', 'MQ802', 'MQ832', 'MQ862']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MQ6L2', 'MQ732', 'MQ762', 'MQ792']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MQ7G2', 'MQ7Y2', 'MQ822', 'MQ852']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MQ6K2', 'MQ722', 'MQ752', 'MQ782']
         },
         {
            Color: 'Space Gray',
            Storage: '128 GB',
            Model: ['MX132']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MQ7F2', 'MQ7X2', 'MQ812', 'MQ842']
         }
      ]
   },
   {
      Generation: 'iPhone 8',
      ANumber: ['A1863', 'A1906', 'A1907'],
      Bootrom: ['Bootrom 3332.0.0.1.23'],
      FCCID: ['BCG-E3159A', 'BCG-E3171A'],
      InternalName: 'D20AAP',
      Identifier: 'iPhone10,1',
      Models: [
         {
            Color: 'Red',
            Storage: '64 GB',
            Model: ['MRRK2', 'MRRR2', 'MRRT2']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MRRL2', 'MRRW2', 'MRRX2']
         }
      ]
   },
   {
      Generation: 'iPhone 8',
      ANumber: ['A1905'],
      Bootrom: ['Bootrom 3332.0.0.1.23'],
      FCCID: ['BCG-E3172A'],
      InternalName: 'D201AP',
      Identifier: 'iPhone10,4',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MQ6J2', 'MQ6X2', 'MQ712']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MQ7E2', 'MQ7T2', 'MQ7W2']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MQ6H2', 'MQ6W2', 'MQ702']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MQ7D2', 'MQ7R2', 'MQ7V2']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MQ6G2', 'MQ6V2', 'MQ6Y2']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MQ7C2', 'MQ7Q2', 'MQ7U2']
         }
      ]
   },
   {
      Generation: 'iPhone 8',
      ANumber: ['A1905'],
      Bootrom: ['Bootrom 3332.0.0.1.23'],
      FCCID: ['BCG-E3172A'],
      InternalName: 'D201AAP',
      Identifier: 'iPhone10,4',
      Models: [
         {
            Color: 'Red',
            Storage: '64 GB',
            Model: ['MRRM2', 'MRRP2', 'MRRQ2']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MRRN2', 'MRRU2', 'MRRV2']
         }
      ]
   },
   {
      Generation: 'iPhone 8 Plus',
      ANumber: ['A1864', 'A1898', 'A1899'],
      Bootrom: ['Bootrom 3332.0.0.1.23'],
      FCCID: ['BCG-E3160A', 'BCG-E3173A'],
      InternalName: 'D21AP',
      Identifier: 'iPhone10,2',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MQ8F2', 'MQ9F2', 'MQ982', 'MQ9M2']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MQ8J2', 'MQ9C2', 'MQ9J2', 'MQ9Q2']
         },
         {
            Color: 'Red',
            Storage: '64 GB',
            Model: ['MRTG2', 'MRTJ2', 'MRT72']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MRTH2', 'MRTK2', 'MRT82']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MQ8E2', 'MQ9E2', 'MQ972', 'MQ9L2']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MQ8H2', 'MQ9A2', 'MQ9H2', 'MQ9P2']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MQ8D2', 'MQ9D2', 'MQ962', 'MQ9K2']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MQ8G2', 'MQ9G2', 'MQ992', 'MQ9N2']
         }
      ]
   },
   {
      Generation: 'iPhone 8 Plus',
      ANumber: ['A1897'],
      Bootrom: ['Bootrom 3332.0.0.1.23'],
      FCCID: ['BCG-E3174A'],
      InternalName: 'D211AP',
      Identifier: 'iPhone10,5',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MQ8N2', 'MQ8V2', 'MQ922']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MQ8R2', 'MQ8Y2', 'MQ952']
         },
         {
            Color: 'Red',
            Storage: '64 GB',
            Model: ['MRTC2', 'MRTE2', 'MRT92']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MRTA2', 'MRTD2', 'MRTF2']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MQ8M2', 'MQ8U2', 'MQ912']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MQ8Q2', 'MQ8X2', 'MQ942']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MQ8L2', 'MQ8T2', 'MQ902']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MQ8P2', 'MQ8W2', 'MQ932']
         }
      ]
   },
   {
      Generation: 'iPhone X',
      ANumber: ['A1865', 'A1902'],
      Bootrom: ['Bootrom 3332.0.0.1.23'],
      FCCID: ['BCG-E3161A'],
      InternalName: 'D22AP',
      Identifier: 'iPhone10,3',
      Models: [
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MQCT2', 'MQCL2', 'MQAY2', 'MQA62']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MQCW2', 'MQCP2', 'MQC22', 'MQA92']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MQCR2', 'MQCK2', 'MQAX2', 'MQA52']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MQCV2', 'MQCN2', 'MQC12', 'MQA82']
         }
      ]
   },
   {
      Generation: 'iPhone X',
      ANumber: ['A1901'],
      Bootrom: ['Bootrom 3332.0.0.1.23'],
      FCCID: ['BCG-E3175A'],
      InternalName: 'D221AP',
      Identifier: 'iPhone10,6',
      Models: [
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MQAK2', 'MQAR2', 'MQAD2']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MQAN2', 'MQAV2', 'MQAG2']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MQAJ2', 'MQAQ2', 'MQAC2']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MQAM2', 'MQAU2', 'MQAF2']
         }
      ]
   },
   {
      Generation: 'iPhone XR',
      ANumber: ['A1984'],
      Bootrom: ['Bootrom 3865.0.0.4.7'],
      FCCID: ['BCG-E3220A'],
      InternalName: 'N841AP',
      Identifier: 'iPhone11,8',
      Models: [
         {
            Color: 'Black',
            Storage: '64 GB',
            Model: ['MT3K2', 'MT2E2', 'MT302', 'MT472']
         },
         {
            Color: 'Black',
            Storage: '128 GB',
            Model: ['MT3T2', 'MT2L2', 'MT362', 'MT4G2']
         },
         {
            Color: 'Black',
            Storage: '256 GB',
            Model: ['MT402', 'MT2T2', 'MT3D2', 'MT4R2']
         },
         {
            Color: 'Blue',
            Storage: '64 GB',
            Model: ['MT3R2', 'MT2K2', 'MT352', 'MT4F2']
         },
         {
            Color: 'Blue',
            Storage: '128 GB',
            Model: ['MT3Y2', 'MT2R2', 'MT3C2', 'MT4Q2']
         },
         {
            Color: 'Blue',
            Storage: '256 GB',
            Model: ['MT462', 'MT2Y2', 'MT3J2', 'MT4Y2']
         },
         {
            Color: 'Coral',
            Storage: '64 GB',
            Model: ['MT3Q2', 'MT2J2', 'MT342', 'MT4D2']
         },
         {
            Color: 'Coral',
            Storage: '128 GB',
            Model: ['MT3X2', 'MT2Q2', 'MT3A2', 'MT4N2']
         },
         {
            Color: 'Coral',
            Storage: '256 GB',
            Model: ['MT452', 'MT2X2', 'MT3H2', 'MT4X2']
         },
         {
            Color: 'Red',
            Storage: '64 GB',
            Model: ['MT3M2', 'MT2G2', 'MT322', 'MT492']
         },
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MT3V2', 'MT2N2', 'MT382', 'MT4J2']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MT422', 'MT2V2', 'MT3F2', 'MT4V2']
         },
         {
            Color: 'White',
            Storage: '64 GB',
            Model: ['MT3L2', 'MT2F2', 'MT312', 'MT482']
         },
         {
            Color: 'White',
            Storage: '128 GB',
            Model: ['MT3U2', 'MT2M2', 'MT372', 'MT4H2']
         },
         {
            Color: 'White',
            Storage: '256 GB',
            Model: ['MT412', 'MT2U2', 'MT3E2', 'MT4U2']
         },
         {
            Color: 'Yellow',
            Storage: '64 GB',
            Model: ['MT3N2', 'MT2H2', 'MT332', 'MT4A2']
         },
         {
            Color: 'Yellow',
            Storage: '128 GB',
            Model: ['MT3W2', 'MT2P2', 'MT392', 'MT4L2']
         },
         {
            Color: 'Yellow',
            Storage: '256 GB',
            Model: ['MT442', 'MT2W2', 'MT3G2', 'MT4W2']
         }
      ]
   },
   {
      Generation: 'iPhone XR',
      ANumber: ['A2105'],
      Bootrom: ['Bootrom 3865.0.0.4.7'],
      FCCID: ['BCG-E3237A'],
      InternalName: 'N841AP',
      Identifier: 'iPhone11,8',
      Models: [
         {
            Color: 'Black',
            Storage: '64 GB',
            Model: ['MRY42']
         },
         {
            Color: 'Black',
            Storage: '128 GB',
            Model: ['MRY92']
         },
         {
            Color: 'Black',
            Storage: '256 GB',
            Model: ['MRYJ2']
         },
         {
            Color: 'Blue',
            Storage: '64 GB',
            Model: ['MRYA2']
         },
         {
            Color: 'Blue',
            Storage: '128 GB',
            Model: ['MRYH2']
         },
         {
            Color: 'Blue',
            Storage: '256 GB',
            Model: ['MRYQ2']
         },
         {
            Color: 'Coral',
            Storage: '64 GB',
            Model: ['MRY82']
         },
         {
            Color: 'Coral',
            Storage: '128 GB',
            Model: ['MRYG2']
         },
         {
            Color: 'Coral',
            Storage: '256 GB',
            Model: ['MRYP2']
         },
         {
            Color: 'Red',
            Storage: '64 GB',
            Model: ['MRY62']
         },
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MRYE2']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MRYM2']
         },
         {
            Color: 'White',
            Storage: '64 GB',
            Model: ['MRY52']
         },
         {
            Color: 'White',
            Storage: '128 GB',
            Model: ['MRYD2']
         },
         {
            Color: 'White',
            Storage: '256 GB',
            Model: ['MRYL2']
         },
         {
            Color: 'Yellow',
            Storage: '64 GB',
            Model: ['MRY72']
         },
         {
            Color: 'Yellow',
            Storage: '128 GB',
            Model: ['MRYF2']
         },
         {
            Color: 'Yellow',
            Storage: '256 GB',
            Model: ['MRYN2']
         }
      ]
   },
   {
      Generation: 'iPhone XR',
      ANumber: ['A2106'],
      Bootrom: ['Bootrom 3865.0.0.4.7'],
      FCCID: ['BCG-E3238A'],
      InternalName: 'N841AP',
      Identifier: 'iPhone11,8',
      Models: [
         {
            Color: 'Black',
            Storage: '64 GB',
            Model: ['MT002']
         },
         {
            Color: 'Black',
            Storage: '128 GB',
            Model: ['MT0G2']
         },
         {
            Color: 'Black',
            Storage: '256 GB',
            Model: ['MT0V2']
         },
         {
            Color: 'Blue',
            Storage: '64 GB',
            Model: ['MT0E2']
         },
         {
            Color: 'Blue',
            Storage: '128 GB',
            Model: ['MT0U2']
         },
         {
            Color: 'Blue',
            Storage: '256 GB',
            Model: ['MT112']
         },
         {
            Color: 'Coral',
            Storage: '64 GB',
            Model: ['MT0A2']
         },
         {
            Color: 'Coral',
            Storage: '128 GB',
            Model: ['MT0T2']
         },
         {
            Color: 'Coral',
            Storage: '256 GB',
            Model: ['MT102']
         },
         {
            Color: 'Red',
            Storage: '64 GB',
            Model: ['MT062']
         },
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MT0N2']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MT0X2']
         },
         {
            Color: 'White',
            Storage: '64 GB',
            Model: ['MT032']
         },
         {
            Color: 'White',
            Storage: '128 GB',
            Model: ['MT0J2']
         },
         {
            Color: 'White',
            Storage: '256 GB',
            Model: ['MT0W2']
         },
         {
            Color: 'Yellow',
            Storage: '64 GB',
            Model: ['MT082']
         },
         {
            Color: 'Yellow',
            Storage: '128 GB',
            Model: ['MT0Q2']
         },
         {
            Color: 'Yellow',
            Storage: '256 GB',
            Model: ['MT0Y2']
         }
      ]
   },
   {
      Generation: 'iPhone XR',
      ANumber: ['A2108'],
      Bootrom: ['Bootrom 3865.0.0.4.7'],
      FCCID: ['BCG-E3220A'],
      InternalName: 'N841AP',
      Identifier: 'iPhone11,8',
      Models: [
         {
            Color: 'Black',
            Storage: '64 GB',
            Model: ['MT122']
         },
         {
            Color: 'Black',
            Storage: '128 GB',
            Model: ['MT192']
         },
         {
            Color: 'Black',
            Storage: '256 GB',
            Model: ['MT1H2']
         },
         {
            Color: 'Blue',
            Storage: '64 GB',
            Model: ['MT182']
         },
         {
            Color: 'Blue',
            Storage: '128 GB',
            Model: ['MT1G2']
         },
         {
            Color: 'Blue',
            Storage: '256 GB',
            Model: ['MT1Q2']
         },
         {
            Color: 'Coral',
            Storage: '64 GB',
            Model: ['MT172']
         },
         {
            Color: 'Coral',
            Storage: '128 GB',
            Model: ['MT1F2']
         },
         {
            Color: 'Coral',
            Storage: '256 GB',
            Model: ['MT1P2']
         },
         {
            Color: 'Red',
            Storage: '64 GB',
            Model: ['MT142']
         },
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MT1D2']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MT1L2']
         },
         {
            Color: 'White',
            Storage: '64 GB',
            Model: ['MT132']
         },
         {
            Color: 'White',
            Storage: '128 GB',
            Model: ['MT1A2']
         },
         {
            Color: 'White',
            Storage: '256 GB',
            Model: ['MT1J2']
         },
         {
            Color: 'Yellow',
            Storage: '64 GB',
            Model: ['MT162']
         },
         {
            Color: 'Yellow',
            Storage: '128 GB',
            Model: ['MT1E2']
         },
         {
            Color: 'Yellow',
            Storage: '256 GB',
            Model: ['MT1M2']
         }
      ]
   },
   {
      Generation: 'iPhone XS',
      ANumber: ['A1920'],
      Bootrom: ['Bootrom 3865.0.0.4.7'],
      FCCID: ['BCG-E3218A'],
      InternalName: 'D321AP',
      Identifier: 'iPhone11,2',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MT8W2', 'MTA22', 'MT8L2', 'MTAJ2', 'MT962']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MT902', 'MTA92', 'MT8P2', 'MTAQ2', 'MT992']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MT932', 'MTAF2', 'MT8T2', 'MTAV2', 'MT9D2']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MT8V2', 'MTA12', 'MT8K2', 'MTAH2', 'MT952']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MT8Y2', 'MTA82', 'MT8N2', 'MTAN2', 'MT982']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MT922', 'MTAD2', 'MT8R2', 'MTAU2', 'MT9C2']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MT8U2', 'MTA02', 'MT8J2', 'MTAG2', 'MT942']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MT8X2', 'MTA72', 'MT8M2', 'MTAL2', 'MT972']
         },
         {
            Color: 'Space Gray',
            Storage: '512 GB',
            Model: ['MT912', 'MTAA2', 'MT8Q2', 'MTAR2', 'MT9A2']
         }
      ]
   },
   {
      Generation: 'iPhone XS',
      ANumber: ['A2097'],
      Bootrom: ['Bootrom 3865.0.0.4.7'],
      FCCID: ['BCG-E3232A'],
      InternalName: 'D321AP',
      Identifier: 'iPhone11,2',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MT9G2']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MT9K2']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MT9N2']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MT9F2']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MT9J2']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MT9M2']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MT9E2']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MT9H2']
         },
         {
            Color: 'Space Gray',
            Storage: '512 GB',
            Model: ['MT9L2']
         }
      ]
   },
   {
      Generation: 'iPhone XS',
      ANumber: ['A2098'],
      Bootrom: ['Bootrom 3865.0.0.4.7'],
      FCCID: ['BCG-E3233A'],
      InternalName: 'D321AP',
      Identifier: 'iPhone11,2',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MTAY2']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MTE22']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MTE52']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MTAX2']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MTE12']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MTE42']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MTAW2']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MTE02']
         },
         {
            Color: 'Space Gray',
            Storage: '512 GB',
            Model: ['MTE32']
         }
      ]
   },
   {
      Generation: 'iPhone XS',
      ANumber: ['A2100'],
      Bootrom: ['Bootrom 3865.0.0.4.7'],
      FCCID: ['BCG-E3218A'],
      InternalName: 'D321AP',
      Identifier: 'iPhone11,2',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MT9R2']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MT9V2']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MT9Y2']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MT9Q2']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MT9U2']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MT9X2']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MT9P2']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MT9T2']
         },
         {
            Color: 'Space Gray',
            Storage: '512 GB',
            Model: ['MT9W2']
         }
      ]
   },
   {
      Generation: 'iPhone XS Max',
      ANumber: ['A1921'],
      Bootrom: ['Bootrom 3865.0.0.4.7'],
      FCCID: ['BCG-E3219A'],
      InternalName: 'D331pAP',
      Identifier: 'iPhone11,6',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MT5X2', 'MT672', 'MT5M2', 'MT6H2', 'MT5C2', '3D897']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MT612', 'MT6A2', 'MT5Q2', 'MT6L2', 'MT5F2']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MT642', 'MT6E2', 'MT5U2', 'MT6P2', 'MT5J2']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MT5W2', 'MT662', 'MT5L2', 'MT6G2', 'MT5A2']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MT602', 'MT692', 'MT5P2', 'MT6K2', 'MT5E2']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MT632', 'MT6D2', 'MT5T2', 'MT6N2', 'MT5H2']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MT5V2', 'MT652', 'MT5K2', 'MT6F2', 'MT592']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MT5Y2', 'MT682', 'MT5N2', 'MT6J2', 'MT5D2']
         },
         {
            Color: 'Space Gray',
            Storage: '512 GB',
            Model: ['MT622', 'MT6C2', 'MT5R2', 'MT6M2', 'MT5G2']
         }
      ]
   },
   {
      Generation: 'iPhone XS Max',
      ANumber: ['A2101'],
      Bootrom: ['Bootrom 3865.0.0.4.7'],
      FCCID: ['BCG-E3234A'],
      InternalName: 'D331pAP',
      Identifier: 'iPhone11,6',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MT522', '3D879']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MT552']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MT582']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MT512']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MT542']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MT572']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MT502']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MT532']
         },
         {
            Color: 'Space Gray',
            Storage: '512 GB',
            Model: ['MT562']
         }
      ]
   },
   {
      Generation: 'iPhone XS Max',
      ANumber: ['A2102'],
      Bootrom: ['Bootrom 3865.0.0.4.7'],
      FCCID: ['BCG-E3235A'],
      InternalName: 'D331pAP',
      Identifier: 'iPhone11,6',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MT6T2']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MT6W2']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MT702']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MT6R2']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MT6V2']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MT6Y2']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MT6Q2']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MT6U2']
         },
         {
            Color: 'Space Gray',
            Storage: '512 GB',
            Model: ['MT6X2']
         }
      ]
   },
   {
      Generation: 'iPhone XS Max',
      ANumber: ['A2104'],
      Bootrom: ['Bootrom 3865.0.0.4.7'],
      FCCID: ['BCG-E3219A'],
      InternalName: 'D331pAP',
      Identifier: 'iPhone11,6',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MT732']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MT762']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MT792']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MT722']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MT752']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MT782']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MT712']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MT742']
         },
         {
            Color: 'Space Gray',
            Storage: '512 GB',
            Model: ['MT772']
         }
      ]
   },
   {
      Generation: 'iPhone XS Max',
      ANumber: ['A2103'],
      Bootrom: ['Bootrom 3865.0.0.4.7'],
      FCCID: [''],
      InternalName: 'D331AP',
      Identifier: 'iPhone11,4',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MT7D2']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MT7G2']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: []
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: []
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: []
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: []
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: []
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MT7E2']
         },
         {
            Color: 'Space Gray',
            Storage: '512 GB',
            Model: []
         }
      ]
   },
   {
      Generation: 'iPhone 11',
      ANumber: ['A2111'],
      Bootrom: ['Bootrom 4479.0.0.100.4'],
      FCCID: ['BCG-E3309A'],
      InternalName: 'N104AP',
      Identifier: 'iPhone12,1',
      Models: [
         {
            Color: 'Black',
            Storage: '64 GB',
            Model: ['MWHT2', 'MWK02', 'MWJE2', 'MWKM2', 'MWL72']
         },
         {
            Color: 'Black',
            Storage: '128 GB',
            Model: ['MWJ02', 'MWK72', 'MWJL2', 'MWKU2', 'MWLE2']
         },
         {
            Color: 'Black',
            Storage: '256 GB',
            Model: ['MWJ62', 'MWKF2', 'MWJT2', 'MWL12', 'MWLL2']
         },
         {
            Color: 'Green',
            Storage: '64 GB',
            Model: ['MWHY2', 'MWK62', 'MWJK2', 'MWKT2', 'MWLD2']
         },
         {
            Color: 'Green',
            Storage: '128 GB',
            Model: ['MWJ52', 'MWKE2', 'MWJR2', 'MWL02', 'MWLK2']
         },
         {
            Color: 'Green',
            Storage: '256 GB',
            Model: ['MWJD2', 'MWKL2', 'MWJY2', 'MWL62', 'MWLR2']
         },
         {
            Color: 'Red',
            Storage: '64 GB',
            Model: ['MWHV2', 'MWK22', 'MWJG2', 'MWKP2', 'MWL92']
         },
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MWJ22', 'MWK92', 'MWJN2', 'MWKW2', 'MWLG2']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MWJ92', 'MWKH2', 'MWJV2', 'MWL32', 'MWLN2']
         },
         {
            Color: 'Purple',
            Storage: '64 GB',
            Model: ['MWHX2', 'MWK52', 'MWJJ2', 'MWKR2', 'MWLC2']
         },
         {
            Color: 'Purple',
            Storage: '128 GB',
            Model: ['MWJ42', 'MWKD2', 'MWJQ2', 'MWKY2', 'MWLJ2']
         },
         {
            Color: 'Purple',
            Storage: '256 GB',
            Model: ['MWJC2', 'MWKK2', 'MWJX2', 'MWL52', 'MWLQ2']
         },
         {
            Color: 'White',
            Storage: '64 GB',
            Model: ['MWHU2', 'MWK12', 'MWJF2', 'MWKN2', 'MWL82']
         },
         {
            Color: 'White',
            Storage: '128 GB',
            Model: ['MWJ12', 'MWK82', 'MWJM2', 'MWKV2', 'MWLF2']
         },
         {
            Color: 'White',
            Storage: '256 GB',
            Model: ['MWJ72', 'MWKG2', 'MWJU2', 'MWL22', 'MWLM2']
         },
         {
            Color: 'Yellow',
            Storage: '64 GB',
            Model: ['MWHW2', 'MWK32', 'MWJH2', 'MWKQ2', 'MWLA2']
         },
         {
            Color: 'Yellow',
            Storage: '128 GB',
            Model: ['MWJ32', 'MWKC2', 'MWJP2', 'MWKX2', 'MWLH2']
         },
         {
            Color: 'Yellow',
            Storage: '256 GB',
            Model: ['MWJA2', 'MWKJ2', 'MWJW2', 'MWL42', 'MWLP2']
         }
      ]
   },
   {
      Generation: 'iPhone 11',
      ANumber: ['A2221'],
      Bootrom: ['Bootrom 4479.0.0.100.4'],
      FCCID: ['BCG-E3309A'],
      InternalName: 'N104AP',
      Identifier: 'iPhone12,1',
      Models: [
         {
            Color: 'Black',
            Storage: '64 GB',
            Model: ['MWLT2']
         },
         {
            Color: 'Black',
            Storage: '128 GB',
            Model: ['MWM02']
         },
         {
            Color: 'Black',
            Storage: '256 GB',
            Model: ['MWM72']
         },
         {
            Color: 'Green',
            Storage: '64 GB',
            Model: ['MWLY2']
         },
         {
            Color: 'Green',
            Storage: '128 GB',
            Model: ['MWM62']
         },
         {
            Color: 'Green',
            Storage: '256 GB',
            Model: ['MWMD2']
         },
         {
            Color: 'Red',
            Storage: '64 GB',
            Model: ['MWLV2']
         },
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MWM32']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MWM92']
         },
         {
            Color: 'Purple',
            Storage: '64 GB',
            Model: ['MWLX2']
         },
         {
            Color: 'Purple',
            Storage: '128 GB',
            Model: ['MWM52']
         },
         {
            Color: 'Purple',
            Storage: '256 GB',
            Model: ['MWMC2']
         },
         {
            Color: 'White',
            Storage: '64 GB',
            Model: ['MWLU2']
         },
         {
            Color: 'White',
            Storage: '128 GB',
            Model: ['MWM22']
         },
         {
            Color: 'White',
            Storage: '256 GB',
            Model: ['MWM82']
         },
         {
            Color: 'Yellow',
            Storage: '64 GB',
            Model: ['MWLW2']
         },
         {
            Color: 'Yellow',
            Storage: '128 GB',
            Model: ['MWM42']
         },
         {
            Color: 'Yellow',
            Storage: '256 GB',
            Model: ['MWMA2']
         }
      ]
   },
   {
      Generation: 'iPhone 11',
      ANumber: ['A2223'],
      Bootrom: ['Bootrom 4479.0.0.100.4'],
      FCCID: ['BCG-E3309A'],
      InternalName: 'N104AP',
      Identifier: 'iPhone12,1',
      Models: [
         {
            Color: 'Black',
            Storage: '64 GB',
            Model: ['MWN02']
         },
         {
            Color: 'Black',
            Storage: '128 GB',
            Model: ['MWN72']
         },
         {
            Color: 'Black',
            Storage: '256 GB',
            Model: ['MWNF2']
         },
         {
            Color: 'Green',
            Storage: '64 GB',
            Model: ['MWN62']
         },
         {
            Color: 'Green',
            Storage: '128 GB',
            Model: ['MWNE2']
         },
         {
            Color: 'Green',
            Storage: '256 GB',
            Model: ['MWNL2']
         },
         {
            Color: 'Red',
            Storage: '64 GB',
            Model: ['MWN22']
         },
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MWN92']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MWNH2']
         },
         {
            Color: 'Purple',
            Storage: '64 GB',
            Model: ['MWN52']
         },
         {
            Color: 'Purple',
            Storage: '128 GB',
            Model: ['MWND2']
         },
         {
            Color: 'Purple',
            Storage: '256 GB',
            Model: ['MWNK2']
         },
         {
            Color: 'White',
            Storage: '64 GB',
            Model: ['MWN12']
         },
         {
            Color: 'White',
            Storage: '128 GB',
            Model: ['MWN82']
         },
         {
            Color: 'White',
            Storage: '256 GB',
            Model: ['MWNG2']
         },
         {
            Color: 'Yellow',
            Storage: '64 GB',
            Model: ['MWN32']
         },
         {
            Color: 'Yellow',
            Storage: '128 GB',
            Model: ['MWNC2']
         },
         {
            Color: 'Yellow',
            Storage: '256 GB',
            Model: ['MWNJ2']
         }
      ]
   },
   {
      Generation: 'iPhone 11 Pro',
      ANumber: ['A2160'],
      Bootrom: ['Bootrom 4479.0.0.100.4'],
      FCCID: ['BCG-E3309A'],
      InternalName: 'D421AP',
      Identifier: 'iPhone12,3',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MW9E2', 'MWA82', 'MW9T2', 'MWAQ2', 'MWCK2']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MW9J2', 'MWAE2', 'MW9X2', 'MWAV2', 'MWCP2']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MW9N2', 'MWAJ2', 'MWA42', 'MWC02', 'MWCU2']
         },
         {
            Color: 'Midnight Green',
            Storage: '64 GB',
            Model: ['MW9F2', 'MWA92', 'MW9U2', 'MWAR2', 'MWCL2']
         },
         {
            Color: 'Midnight Green',
            Storage: '256 GB',
            Model: ['MW9K2', 'MWAF2', 'MW9Y2', 'MWAW2', 'MWCQ2']
         },
         {
            Color: 'Midnight Green',
            Storage: '512 GB',
            Model: ['MW9P2', 'MWAL2', 'MWA52', 'MWC12', 'MWCV2']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MW9D2', 'MWA72', 'MW9R2', 'MWAP2', 'MWCJ2']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MW9H2', 'MWAD2', 'MW9W2', 'MWAU2', 'MWCN2']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MW9M2', 'MWAH2', 'MWA32', 'MWAY2', 'MWCT2']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MW9C2', 'MWA62', 'MW9Q2', 'MWAM2', 'MWCH2']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MW9G2', 'MWAA2', 'MW9V2', 'MWAT2', 'MWCM2']
         },
         {
            Color: 'Space Gray',
            Storage: '512 GB',
            Model: ['MW9L2', 'MWAG2', 'MWA12', 'MWAX2', 'MWCR2']
         }
      ]
   },
   {
      Generation: 'iPhone 11 Pro',
      ANumber: ['A2215'],
      Bootrom: ['Bootrom 4479.0.0.100.4'],
      FCCID: ['BCG-E3309A'],
      InternalName: 'D421AP',
      Identifier: 'iPhone12,3',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MWC52']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MWC92']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MWCF2']
         },
         {
            Color: 'Midnight Green',
            Storage: '64 GB',
            Model: ['MWC62']
         },
         {
            Color: 'Midnight Green',
            Storage: '256 GB',
            Model: ['MWCC2']
         },
         {
            Color: 'Midnight Green',
            Storage: '512 GB',
            Model: ['MWCG2']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MWC32']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MWC82']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MWCE2']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MWC22']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MWC72']
         },
         {
            Color: 'Space Gray',
            Storage: '512 GB',
            Model: ['MWCD']
         }
      ]
   },
   {
      Generation: 'iPhone 11 Pro',
      ANumber: ['A2217'],
      Bootrom: ['Bootrom 4479.0.0.100.4'],
      FCCID: ['BCG-E3309A'],
      InternalName: 'D421AP',
      Identifier: 'iPhone12,3',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MWDC2']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MWDG2']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MWDL2']
         },
         {
            Color: 'Midnight Green',
            Storage: '64 GB',
            Model: ['MWDD2']
         },
         {
            Color: 'Midnight Green',
            Storage: '256 GB',
            Model: ['MWDH2']
         },
         {
            Color: 'Midnight Green',
            Storage: '512 GB',
            Model: ['MWDM2']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MWDA2']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MWDF2']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MWDK2']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MWD92']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MWDE2']
         },
         {
            Color: 'Space Gray',
            Storage: '512 GB',
            Model: ['MWDJ2']
         }
      ]
   },
   {
      Generation: 'iPhone 11 Pro Max',
      ANumber: ['A2161'],
      Bootrom: ['Bootrom 4479.0.0.100.4'],
      FCCID: ['BCG-E3309A'],
      InternalName: 'D431AP',
      Identifier: 'iPhone12,5',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MWFC2', 'MWG42', 'MWFQ2', 'MWGH2', 'MWH12']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MWFG2', 'MWG82', 'MWFV2', 'MWGM2', 'MWH62']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MWFL2', 'MWGD2', 'MWG02', 'MWGR2', 'MWHA2']
         },
         {
            Color: 'Midnight Green',
            Storage: '64 GB',
            Model: ['MWFD2', 'MWG52', 'MWFR2', 'MWGJ2', 'MWH22']
         },
         {
            Color: 'Midnight Green',
            Storage: '256 GB',
            Model: ['MWFH2', 'MWG92', 'MWFW2', 'MWGN2', 'MWH72']
         },
         {
            Color: 'Midnight Green',
            Storage: '512 GB',
            Model: ['MWFM2', 'MWGE2', 'MWG12', 'MWGT2', 'MWHC2']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MWFA2', 'MWG32', 'MWFP2', 'MWGG2', 'MWH02']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MWFF2', 'MWG72', 'MWFU2', 'MWGL2', 'MWH52']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MWFK2', 'MWGC2', 'MWFY2', 'MWGQ2', 'MWH92']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MWF92', 'MWG22', 'MWFN2', 'MWGF2', 'MWGY2']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MWFE2', 'MWG62', 'MWFT2', 'MWGK2', 'MWH42']
         },
         {
            Color: 'Space Gray',
            Storage: '512 GB',
            Model: ['MWFJ2', 'MWGA2', 'MWFX2', 'MWGP2', 'MWH82']
         }
      ]
   },
   {
      Generation: 'iPhone 11 Pro Max',
      ANumber: ['A2220'],
      Bootrom: ['Bootrom 4479.0.0.100.4'],
      FCCID: ['BCG-E3309A'],
      InternalName: 'D431AP',
      Identifier: 'iPhone12,5',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MWHG2']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MWHL2']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MWHQ2']
         },
         {
            Color: 'Midnight Green',
            Storage: '64 GB',
            Model: ['MWHH2']
         },
         {
            Color: 'Midnight Green',
            Storage: '256 GB',
            Model: ['MWHM2']
         },
         {
            Color: 'Midnight Green',
            Storage: '512 GB',
            Model: ['MWHR2']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MWHF2']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MWHK2']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MWHP2']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MWHD2']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MWHJ2']
         },
         {
            Color: 'Space Gray',
            Storage: '512 GB',
            Model: ['MWHN2']
         }
      ]
   },
   {
      Generation: 'iPhone 11 Pro Max',
      ANumber: ['A2218'],
      Bootrom: ['Bootrom 4479.0.0.100.4'],
      FCCID: ['BCG-E3309A'],
      InternalName: 'D431AP',
      Identifier: 'iPhone12,5',
      Models: [
         {
            Color: 'Gold',
            Storage: '64 GB',
            Model: ['MWEX2']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MWF32']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MWF72']
         },
         {
            Color: 'Midnight Green',
            Storage: '64 GB',
            Model: ['MWF02']
         },
         {
            Color: 'Midnight Green',
            Storage: '256 GB',
            Model: ['MWF42']
         },
         {
            Color: 'Midnight Green',
            Storage: '512 GB',
            Model: ['MWF82']
         },
         {
            Color: 'Silver',
            Storage: '64 GB',
            Model: ['MWEW2']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MWF22']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MWF62']
         },
         {
            Color: 'Space Gray',
            Storage: '64 GB',
            Model: ['MWEV2']
         },
         {
            Color: 'Space Gray',
            Storage: '256 GB',
            Model: ['MWF12']
         },
         {
            Color: 'Space Gray',
            Storage: '512 GB',
            Model: ['MWF52']
         }
      ]
   },
   {
      Generation: 'iPhone SE (2nd generation)',
      ANumber: ['A2275', 'A2296', 'A2298'],
      Bootrom: 'Bootrom 4479.0.0.100.4',
      FCCID: ['E3500A', 'E3501A'],
      InternalName: 'D79AP',
      Identifier: 'iPhone12,8',
      Models: [
         {
            Color: 'White',
            Storage: '64 GB',
            Model: ['MX9T2', 'MX9A2', 'MX9H2', 'MX9E2', 'MX9L2', 'MX9P2', 'MXAN2', 'MHGQ3']
         },
         {
            Color: 'White',
            Storage: '128 GB',
            Model: ['MXD12', 'MXCJ2', 'MXCQ2', 'MXCM2', 'MXCU2', 'MXCX2', 'MXD72', 'MHGU3']
         },
         {
            Color: 'White',
            Storage: '256 GB',
            Model: ['MXVU2', 'MXVC2', 'MXVJ2', 'MXVF2', 'MXVM2', 'MXVQ2', 'MXW12', 'MHGX3']
         },
         {
            Color: 'Black',
            Storage: '64 GB',
            Model: ['MX9R2', 'MX992', 'MX9G2', 'MX9D2', 'MX9K2', 'MX9N2', 'MXAM2', 'MHGP3']
         },
         {
            Color: 'Black',
            Storage: '128 GB',
            Model: ['MXD02', 'MXCH2', 'MXCP2', 'MXCL2', 'MXCT2', 'MXCW2', 'MXD62', 'MHGT3']
         },
         {
            Color: 'Black',
            Storage: '256 GB',
            Model: ['MXVT2', 'MXVA2', 'MXVH2', 'MXVE2', 'MXVL2', 'MXVP2', 'MXW02', 'MHGW3']
         },
         {
            Color: 'Red',
            Storage: '64 GB',
            Model: ['MX9U2', 'MX9C2', 'MX9J2', 'MX9F2', 'MX9M2', 'MX9Q2', 'MXAP2', 'MHGR3']
         },
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MXD22', 'MXCK2', 'MXCR2', 'MXCN2', 'MXCV2', 'MXCY2', 'MXD82']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MXVV2', 'MXVD2', 'MXVK2', 'MXVG2', 'MXVN2', 'MXVR2', 'MXW22', 'MHGY3']
         }
      ]
   },
   {
      Generation: 'iPhone 12 mini',
      ANumber: ['A2176', 'A2398', 'A2400', 'A2399'],
      Bootrom: 'Bootrom 5281.0.0.100.45',
      FCCID: ['BCG-E3539A'],
      InternalName: 'D52gAP',
      Identifier: 'iPhone13,1',
      Models: [
         {
            Color: 'White',
            Storage: '64 GB',
            Model: ['MG803', 'MGDY3', 'MG613', 'MG7H3', 'MG713', 'MG6H3', 'MG8G3', 'MGA63']
         },
         {
            Color: 'White',
            Storage: '128 GB',
            Model: ['MG853', 'MGE43', 'MG8M3', 'MG663', 'MG7N3', 'MG763', 'MG6N3', 'MGDM3']
         },
         {
            Color: 'White',
            Storage: '256 GB',
            Model: ['MG8A3', 'MGEA3', 'MG6C3', 'MG7U3', 'MG7C3', 'MG6V3', 'MG8T3', 'MGDT3']
         },
         {
            Color: 'Black',
            Storage: '64 GB',
            Model: ['MG7Y3', 'MGDX3', 'MG603', 'MG7G3', 'MG703', 'MG6G3', 'MG8F3', 'MGA03']
         },
         {
            Color: 'Black',
            Storage: '128 GB',
            Model: ['MG843', 'MGE33', 'MG653', 'MG7M3', 'MG753', 'MG6M3', 'MG8L3', 'MGDJ3']
         },
         {
            Color: 'Black',
            Storage: '256 GB',
            Model: ['MG893C', 'MGE93', 'MG8R3', 'MG6A3', 'MG7T3', 'MG7A3', 'MG6U3', 'MGDR3']
         },
         {
            Color: 'Red',
            Storage: '64 GB',
            Model: ['MG813', 'MGE03', 'MG623', 'MG7J3', 'MG723', 'MG6J3', 'MG8H3', 'MGAE3']
         },
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MG863', 'MGE53', 'MG8N3', 'MG673', 'MG7P3', 'MG6P3', 'MG773', 'MGDN3']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MG8C3', 'MGEC3', 'MG6D3', 'MG7V3', 'MG7D3', 'MG6W3', 'MG8U3', 'MGDU3']
         },
         {
            Color: 'Green',
            Storage: '64 GB',
            Model: ['MG833', 'MGE23', 'MG8K3', 'MG643', 'MG7L3', 'MG743', 'MG6L3', 'MGAV3']
         },
         {
            Color: 'Green',
            Storage: '128 GB',
            Model: ['MG883', 'MGE73', 'MG693', 'MG7R3', 'MG793', 'MG6T3', 'MG8Q3', 'MGDQ3']
         },
         {
            Color: 'Green',
            Storage: '256 GB',
            Model: ['MG8E3', 'MGEE3', 'MG8W3', 'MG6F3', 'MG7X3', 'MG7F3', 'MG6Y3', 'MGDW3']
         },
         {
            Color: 'Blue',
            Storage: '64 GB',
            Model: ['MG823', 'MGE13', 'MG8J3', 'MG633', 'MG7K3', 'MG733', 'MG6K3', 'MGAP3']
         },
         {
            Color: 'Blue',
            Storage: '128 GB',
            Model: ['MG873', 'MGE63', 'MG683', 'MG7Q3', 'MG783', 'MG6Q3', 'MG8P3', 'MGDP3']
         },
         {
            Color: 'Blue',
            Storage: '256 GB',
            Model: ['MG8D3', 'MGED3', 'MG6E3', 'MG7W3', 'MG7E3', 'MG6X3', 'MG8V3', 'MGDV3']
         },
         {
            Color: 'Purple',
            Storage: '64 GB',
            Model: ['MJNL3', 'MJQ23', 'MJNY3', 'MJNT3', 'MJQ83', 'MJQF3', 'MJQ53', 'MJQC3']
         },
         {
            Color: 'Purple',
            Storage: '128 GB',
            Model: ['MJQ93', 'MJNN3', 'MJQ33', 'MJQ03', 'MJNW3', 'MJQG3', 'MJQ63', 'MJQD3']
         },
         {
            Color: 'Purple',
            Storage: '256 GB',
            Model: ['MJNR3', 'MJQ43', 'MJQ13', 'MJNX3', 'MJQA3', 'MJQH3', 'MJQ73', 'MJQE3']
         }
      ]
   },
   {
      Generation: 'iPhone 12',
      ANumber: ['A2172', 'A2402', 'A2404', 'A2403'],
      Bootrom: 'Bootrom 5281.0.0.100.45',
      FCCID: ['BCG-E3542A'],
      InternalName: 'D53gAP',
      Identifier: 'iPhone13,2',
      Models: [
         {
            Color: 'White',
            Storage: '64 GB',
            Model: ['MGGN3', 'MGJ63', 'MGEG3', 'MGG63', 'MGFM3', 'MGF53', 'MGH73', 'MGHP3']
         },
         {
            Color: 'White',
            Storage: '128 GB',
            Model: ['MGGV3', 'MGJC3', 'MGHD3', 'MGET3', 'MGGC3', 'MGFT3', 'MGFA3', 'MGHV3']
         },
         {
            Color: 'White',
            Storage: '256 GB',
            Model: ['MGH23', 'MGJH3', 'MGF03', 'MGGH3', 'MGG13', 'MGFG3', 'MGHJ3', 'MGJ13']
         },
         {
            Color: 'Black',
            Storage: '64 GB',
            Model: ['MGGM3', 'MGJ53', 'MGEF3', 'MGG53', 'MGFL3', 'MGF43', 'MGH63', 'MGHN3']
         },
         {
            Color: 'Black',
            Storage: '128 GB',
            Model: ['MGGU3', 'MGJA3', 'MGHC3', 'MGER3', 'MGGA3', 'MGFR3', 'MGF93', 'MGHU3']
         },
         {
            Color: 'Black',
            Storage: '256 GB',
            Model: ['MGH13', 'MGJG3', 'MGHH3', 'MGEX3', 'MGGG3', 'MGG03', 'MGFF3', 'MGJ03']
         },
         {
            Color: 'Red',
            Storage: '64 GB',
            Model: ['MGGP3', 'MGJ73', 'MGEH3', 'MGG73', 'MGFN3', 'MGF63', 'MGH83', 'MGHQ3']
         },
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MGGW3', 'MGJD3', 'MGHE3', 'MGEU3', 'MGGD3', 'MGFW3', 'MGFC3', 'MGHW3']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MGH33', 'MGJJ3', 'MGF13', 'MGGJ3', 'MGG23', 'MGFH3', 'MGHK3', 'MGJ23']
         },
         {
            Color: 'Green',
            Storage: '64 GB',
            Model: ['MGGT3', 'MGJ93', 'MGEQ3', 'MGG93', 'MGFQ3', 'MGF83', 'MGHA3', 'MGHT3']
         },
         {
            Color: 'Green',
            Storage: '128 GB',
            Model: ['MGGY3', 'MGJF3', 'MGHG3', 'MGEW3', 'MGGF3', 'MGFY3', 'MGFE3', 'MGHY3']
         },
         {
            Color: 'Green',
            Storage: '256 GB',
            Model: ['MGH53', 'MGJL3', 'MGHM3', 'MGF33', 'MGGL3', 'MGG43', 'MGFK3', 'MGJ43']
         },
         {
            Color: 'Blue',
            Storage: '64 GB',
            Model: ['MGGQ3', 'MGJ83', 'MGH93', 'MGEK3', 'MGG83', 'MGFP3', 'MGF73', 'MGHR3']
         },
         {
            Color: 'Blue',
            Storage: '128 GB',
            Model: ['MGGX3', 'MGJE3', 'MGEV3', 'MGGE3', 'MGFX3', 'MGFD3', 'MGHF3', 'MGHX3']
         },
         {
            Color: 'Blue',
            Storage: '256 GB',
            Model: ['MGH43', 'MGJK3', 'MGF23', 'MGGK3', 'MGG33', 'MGFJ3', 'MGHL3', 'MGJ33']
         },
         {
            Color: 'Purple',
            Storage: '64 GB',
            Model: ['MJMX3', 'MJN73', 'MJN43', 'MJN13', 'MJNE3', 'MJNM3', 'MJNA3', 'MJNH3']
         },
         {
            Color: 'Purple',
            Storage: '128 GB',
            Model: ['MJNF3', 'MJMY3', 'MJN83', 'MJN53', 'MJN23', 'MJNP3', 'MJNC3', 'MJNJ3']
         },
         {
            Color: 'Purple',
            Storage: '256 GB',
            Model: ['MJN03', 'MJN93', 'MJN63', 'MJN33', 'MJNG3', 'MJNQ3', 'MJND3', 'MJNK3']
         }
      ]
   },
   {
      Generation: 'iPhone 12 Pro',
      ANumber: ['A2341', 'A2406', 'A2407', 'A2408'],
      Bootrom: 'Bootrom 5281.0.0.100.45',
      FCCID: ['BCG-E3545A'],
      InternalName: 'D53pAP',
      Identifier: 'iPhone13,3',
      Models: [
         {
            Color: 'Silver',
            Storage: '128 GB',
            Model: ['MGLA3', 'MGML3', 'MGJN3', 'MGKW3', 'MGKH3', 'MGK23', 'MGLP3', 'MGM63']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MGLF3', 'MGMQ3', 'MGLU3', 'MGJT3', 'MGL23', 'MGKM3', 'MGK63', 'MGMA3']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MGLK3', 'MGMV3', 'MGJX3', 'MGL63', 'MGKR3', 'MGKC3', 'MGLY3', 'MGMG3']
         },
         {
            Color: 'Graphite',
            Storage: '128 GB',
            Model: ['MGL93', 'MGMK3', 'MGJM3', 'MGKV3', 'MGKG3', 'MGK13', 'MGLN3', 'MGM53']
         },
         {
            Color: 'Graphite',
            Storage: '256 GB',
            Model: ['MGLE3', 'MGMP3', 'MGLT3', 'MGJR3', 'MGKL3', 'MGK53', 'MGL03', 'MGM93']
         },
         {
            Color: 'Graphite',
            Storage: '512 GB',
            Model: ['MGLJ3', 'MGMU3', 'MGLX3', 'MGJW3', 'MGL53', 'MGKQ3', 'MGKA3', 'MGMF3']
         },
         {
            Color: 'Gold',
            Storage: '128 GB',
            Model: ['MGLC3', 'MGMM3', 'MGJP3', 'MGKX3', 'MGKJ3', 'MGK33', 'MGLQ3', 'MGM73']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MGLG3', 'MGMR3', 'MGJU3', 'MGL33', 'MGKN3', 'MGK73', 'MGLV3', 'MGMC3']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MGLL3', 'MGMW3', 'MGM23', 'MGJY3', 'MGL73', 'MGKT3', 'MGKE3', 'MGMH3']
         },
         {
            Color: 'Pacific Blue',
            Storage: '128 GB',
            Model: ['MGLD3', 'MGMN3', 'MGJQ3', 'MGKY3', 'MGKK3', 'MGK43', 'MGLR3', 'MGM83']
         },
         {
            Color: 'Pacific Blue',
            Storage: '256 GB',
            Model: ['MGLH3', 'MGMT3', 'MGJV3', 'MGL43', 'MGKP3', 'MGK93', 'MGLW3', 'MGMD3']
         },
         {
            Color: 'Pacific Blue',
            Storage: '512 GB',
            Model: ['MGLM3', 'MGMX3', 'MGK03', 'MGL83', 'MGKU3', 'MGKF3', 'MGM43', 'MGMJ3']
         }
      ]
   },
   {
      Generation: 'iPhone 12 Pro Max',
      ANumber: ['A2342', 'A2410', 'A2411', 'A2412'],
      Bootrom: 'Bootrom 5281.0.0.100.45',
      FCCID: ['BCG-E3548A'],
      InternalName: 'D54pAP',
      Identifier: 'iPhone13,4',
      Models: [
         {
            Color: 'Silver',
            Storage: '128 GB',
            Model: ['MGC13', 'MGD83', 'MG8Y3', 'MGA93', 'MG9Q3', 'MG9C3', 'MGCG3', 'MGCV3']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MGC53', 'MGDD3', 'MGCL3', 'MG933', 'MGAJ3', 'MG9V3', 'MG9G3', 'MGD03']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MGCA3', 'MGDH3', 'MG973', 'MGAU3', 'MGA23', 'MG9L3', 'MGCQ3', 'MGD43']
         },
         {
            Color: 'Graphite',
            Storage: '128 GB',
            Model: ['MGC03', 'MGD73', 'MG8X3', 'MGA73', 'MG9P3', 'MG9A3', 'MGCF3', 'MGCU3']
         },
         {
            Color: 'Graphite',
            Storage: '256 GB',
            Model: ['MGC43', 'MGDC3', 'MGCK3', 'MG923', 'MGAH3', 'MG9U3', 'MG9F3', 'MGCY3']
         },
         {
            Color: 'Graphite',
            Storage: '512 GB',
            Model: ['MGC93', 'MGDG3', 'MGCP3', 'MG963', 'MGAR3', 'MG9Y3', 'MG9K3', 'MGD33']
         },
         {
            Color: 'Gold',
            Storage: '128 GB',
            Model: ['MGC23', 'MGD93', 'MG903', 'MGAA3', 'MG9R3', 'MG9D3', 'MGCH3', 'MGCW3']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MGC63', 'MGDE3', 'MG943', 'MGAM3', 'MG9W3', 'MG9H3', 'MGCM3', 'MGD13']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MGCC3', 'MGDK3', 'MGCR3', 'MG983', 'MGAW3', 'MGA33', 'MG9M3', 'MGD53']
         },
         {
            Color: 'Pacific Blue',
            Storage: '128 GB',
            Model: ['MGC33', 'MGDA3', 'MGCJ3', 'MG913', 'MGAF3', 'MG9T3', 'MG9E3', 'MGCX3']
         },
         {
            Color: 'Pacific Blue',
            Storage: '256 GB',
            Model: ['MGC73', 'MGDF3', 'MG953', 'MGAQ3', 'MG9X3', 'MG9J3', 'MGCN3', 'MGD23']
         },
         {
            Color: 'Pacific Blue',
            Storage: '512 GB',
            Model: ['MGCE3', 'MGDL3', 'MG993', 'MGAX3', 'MGA43', 'MG9N3', 'MGCT3', 'MGD63']
         }
      ]
   },
   {
      Generation: 'iPhone 13 mini',
      ANumber: ['A2481', 'A2626', 'A2629', 'A2630', 'A2628'],
      Bootrom: 'Bootrom 6338.0.0.200.19',
      FCCID: [],
      InternalName: 'D16AP',
      Identifier: 'iPhone14,4',
      Models: [
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MLK33', 'MLHQ3', 'MLDF3']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MLK83', 'MLHW3', 'MLDL3']
         },
         {
            Color: 'Red',
            Storage: '512 GB',
            Model: ['MLKE3', 'MLJ23', 'MLDR3']
         },
         {
            Color: 'Starlight',
            Storage: '128 GB',
            Model: ['MLK13', 'MLHN3', 'MLDD3']
         },
         {
            Color: 'Starlight',
            Storage: '256 GB',
            Model: ['MLK63', 'MLHU3', 'MLDJ3']
         },
         {
            Color: 'Starlight',
            Storage: '512 GB',
            Model: ['MLKC3', 'MLJ03', 'MLDP3']
         },
         {
            Color: 'Midnight',
            Storage: '128 GB',
            Model: ['MLK03', 'MLHM3', 'MLDC3']
         },
         {
            Color: 'Midnight',
            Storage: '256 GB',
            Model: ['MLK53', 'MLHT3', 'MLDH3']
         },
         {
            Color: 'Midnight',
            Storage: '512 GB',
            Model: ['MLKA3', 'MLHY3', 'MLDN3']
         },
         {
            Color: 'Blue',
            Storage: '128 GB',
            Model: ['MLK43', 'MLHR3', 'MLDG3']
         },
         {
            Color: 'Blue',
            Storage: '256 GB',
            Model: ['MLK93', 'MLHX3', 'MLDM3']
         },
         {
            Color: 'Blue',
            Storage: '512 GB',
            Model: ['MLKF3', 'MLJ33', 'MLDT3']
         },
         {
            Color: 'Pink',
            Storage: '128 GB',
            Model: ['MLK23', 'MLHP3', 'MLDE3']
         },
         {
            Color: 'Pink',
            Storage: '256 GB',
            Model: ['MLK73', 'MLHV3', 'MLDK3']
         },
         {
            Color: 'Pink',
            Storage: '512 GB',
            Model: ['MLKD3', 'MLJ13', 'MLDQ3']
         },
         {
            Color: 'Green',
            Storage: '128 GB',
            Model: ['MNF83', 'MNF53', 'MNFF3']
         },
         {
            Color: 'Green',
            Storage: '256 GB',
            Model: ['MNF93', 'MNF63', 'MNFG3']
         },
         {
            Color: 'Green',
            Storage: '512 GB',
            Model: ['MNFA3', 'MNF73', 'MNFH3']
         }
      ]
   },
   {
      Generation: 'iPhone 13',
      ANumber: ['A2482', 'A2631', 'A2634', 'A2635', 'A2633'],
      Bootrom: 'Bootrom 6338.0.0.200.19',
      FCCID: [],
      InternalName: 'D17AP',
      Identifier: 'iPhone14,5',
      Models: [
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MLPJ3', 'MLMQ3', 'MLDX3']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MLQ93', 'MLN03', 'MLE33']
         },
         {
            Color: 'Red',
            Storage: '512 GB',
            Model: ['MLQF3', 'MLN53', 'MLEA3']
         },
         {
            Color: 'Starlight',
            Storage: '128 GB',
            Model: ['MLPG3', 'MLMM3', 'MLDV3']
         },
         {
            Color: 'Starlight',
            Storage: '256 GB',
            Model: ['MLQ73', 'MLMX3', 'MLE13']
         },
         {
            Color: 'Starlight',
            Storage: '512 GB',
            Model: ['MLQD3', 'MLN33', 'MLE73']
         },
         {
            Color: 'Midnight',
            Storage: '128 GB',
            Model: ['MLPF3', 'MLML3', 'MLDU3']
         },
         {
            Color: 'Midnight',
            Storage: '256 GB',
            Model: ['MLQ63', 'MLN23', 'MLE03']
         },
         {
            Color: 'Midnight',
            Storage: '512 GB',
            Model: ['MLQC3', 'MLN23', 'MLE63']
         },
         {
            Color: 'Blue',
            Storage: '128 GB',
            Model: ['MLPK3', 'MLMT3', 'MLDY3']
         },
         {
            Color: 'Blue',
            Storage: '256 GB',
            Model: ['MLQA3', 'MLN13', 'MLE43']
         },
         {
            Color: 'Blue',
            Storage: '512 GB',
            Model: ['MLQG3', 'MLN83', 'MLEC3']
         },
         {
            Color: 'Pink',
            Storage: '128 GB',
            Model: ['MLPH3', 'MLMN3', 'MLDW3']
         },
         {
            Color: 'Pink',
            Storage: '256 GB',
            Model: ['MLQ83', 'MLMY3', 'MLE23']
         },
         {
            Color: 'Pink',
            Storage: '512 GB',
            Model: ['MLQE3', 'MLN43', 'MLE93']
         },
         {
            Color: 'Green',
            Storage: '128 GB',
            Model: ['MNGD3', 'MNG93', 'MNGK3']
         },
         {
            Color: 'Green',
            Storage: '256 GB',
            Model: ['MNGE3', 'MNGA3', 'MNGL3']
         },
         {
            Color: 'Green',
            Storage: '512 GB',
            Model: ['MNGF3', 'MNGC3', 'MNGM3']
         }
      ]
   },
   {
      Generation: 'iPhone 13 Pro',
      ANumber: ['A2483', 'A2636', 'A2639', 'A2640', 'A2638'],
      Bootrom: 'Bootrom 6338.0.0.200.19',
      FCCID: [],
      InternalName: 'D63AP',
      Identifier: 'iPhone14,2',
      Models: [
         {
            Color: 'Graphite',
            Storage: '128 GB',
            Model: ['MLV93', 'MLTP3', 'MLT53']
         },
         {
            Color: 'Graphite',
            Storage: '256 GB',
            Model: ['MLVE3', 'MLTW3', 'MLT93']
         },
         {
            Color: 'Graphite',
            Storage: '512 GB',
            Model: ['MLVH3', 'MLU13', 'MLTF3']
         },
         {
            Color: 'Graphite',
            Storage: '1 TB',
            Model: ['MLVV3', 'MLU93', 'MLTK3']
         },
         {
            Color: 'Gold',
            Storage: '128 GB',
            Model: ['MLVC3', 'MLTR3', 'MLT73']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MLVK3', 'MLTY3', 'MLTH3']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MLVQ3', 'MLU43', 'MLTH3']
         },
         {
            Color: 'Gold',
            Storage: '1 TB',
            Model: ['MLVY3', 'MLUC3', 'MLTM3']
         },
         {
            Color: 'Silver',
            Storage: '128 GB',
            Model: ['MLVA3', 'MLTQ3', 'MLT63']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MLVF3', 'MLTX3', 'MLTC3']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MLVN3', 'MLU33', 'MLTG3']
         },
         {
            Color: 'Silver',
            Storage: '1 TB',
            Model: ['MLVW3', 'MLUA3', 'MLTL3']
         },
         {
            Color: 'Sierra Blue',
            Storage: '128 GB',
            Model: ['MLVD3', 'MLTT3', 'MLT83']
         },
         {
            Color: 'Sierra Blue',
            Storage: '256 GB',
            Model: ['MLVP3', 'MLU03', 'MLTE3']
         },
         {
            Color: 'Sierra Blue',
            Storage: '512 GB',
            Model: ['MLVU3', 'MLU73', 'MLTJ3']
         },
         {
            Color: 'Sierra Blue',
            Storage: '1 TB',
            Model: ['MLW03', 'MLUD3', 'MLTN3']
         },
         {
            Color: 'Alpine Green',
            Storage: '128 GB',
            Model: ['MNDT3', 'MNDN3', 'MNE23']
         },
         {
            Color: 'Alpine Green',
            Storage: '256 GB',
            Model: ['MNDU3', 'MNDP3', 'MNE33']
         },
         {
            Color: 'Alpine Green',
            Storage: '512 GB',
            Model: ['MNDV3', 'MNDQ3', 'MNE43']
         },
         {
            Color: 'Alpine Green',
            Storage: '1 TB',
            Model: ['MNDW3', 'MNDR3', 'MNE53']
         }
      ]
   },
   {
      Generation: 'iPhone 13 Pro Max',
      ANumber: ['A2484', 'A2641', 'A2644', 'A2645', 'A2643'],
      Bootrom: 'Bootrom 6338.0.0.200.19',
      FCCID: [],
      InternalName: 'D64AP',
      Identifier: 'iPhone14,3',
      Models: [
         {
            Color: 'Graphite',
            Storage: '128 GB',
            Model: ['MLL63', 'MLKL3', 'MLH43']
         },
         {
            Color: 'Graphite',
            Storage: '256 GB',
            Model: ['MLLA3', 'MLKR3', 'MLH83']
         },
         {
            Color: 'Graphite',
            Storage: '512 GB',
            Model: ['MLLF3', 'MLKW3', 'MLHD3']
         },
         {
            Color: 'Graphite',
            Storage: '1 TB',
            Model: ['MLLK3', 'MLL23', 'MLHH3']
         },
         {
            Color: 'Gold',
            Storage: '128 GB',
            Model: ['MLL83', 'MLKN3', 'MLH63']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MLLD3', 'MLKU3', 'MLHA3']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MLLH3', 'MLKY3', 'MLHF3']
         },
         {
            Color: 'Gold',
            Storage: '1 TB',
            Model: ['MLLM3', 'MLL43', 'MLHK3']
         },
         {
            Color: 'Silver',
            Storage: '128 GB',
            Model: ['MLL73', 'MLKM3', 'MLH53']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MLLC3', 'MLKT3', 'MLH93']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MLLG3', 'MLKX3', 'MLHE3']
         },
         {
            Color: 'Silver',
            Storage: '1 TB',
            Model: ['MLLL3', 'MLL33', 'MLHJ3']
         },
         {
            Color: 'Sierra Blue',
            Storage: '128 GB',
            Model: ['MLL93', 'MLKP3', 'MLH73']
         },
         {
            Color: 'Sierra Blue',
            Storage: '256 GB',
            Model: ['MLLE3', 'MLKV3', 'MLHC3']
         },
         {
            Color: 'Sierra Blue',
            Storage: '512 GB',
            Model: ['MLLJ3', 'MLL03', 'MLHG3']
         },
         {
            Color: 'Sierra Blue',
            Storage: '1 TB',
            Model: ['MLLN3', 'MLL53', 'MLHL3']
         },
         {
            Color: 'Alpine Green',
            Storage: '128 GB',
            Model: ['MNCP3', 'MNCK3', 'MNCY3']
         },
         {
            Color: 'Alpine Green',
            Storage: '256 GB',
            Model: ['MNCQ3', 'MNCL3', 'MND03']
         },
         {
            Color: 'Alpine Green',
            Storage: '512 GB',
            Model: ['MNCR3', 'MNCM3', 'MND13']
         },
         {
            Color: 'Alpine Green',
            Storage: '1 TB',
            Model: ['MNCT3', 'MNCN3', 'MND23']
         }
      ]
   },
   {
      Generation: 'iPhone SE (3rd generation)',
      ANumber: ['A2595', 'A2782', 'A2783', 'A2784', 'A2785'],
      Bootrom: '',
      FCCID: ['BCG-E4082A', 'BCG-E8064A', 'BCG-E4083A', 'BCG-E8076A'],
      InternalName: 'D49AP',
      Identifier: 'iPhone14,6',
      Models: [
         {
            Color: 'Midnight',
            Storage: '64 GB',
            Model: ['MMX53', 'MMWV3', 'MMXF3', 'MMYC3']
         },
         {
            Color: 'Midnight',
            Storage: '128 GB',
            Model: ['MMX83', 'MMWY3', 'MMXJ3', 'MMYF3']
         },
         {
            Color: 'Midnight',
            Storage: '256 GB',
            Model: ['MMXC3', 'MMX23', 'MMXM3', 'MMYJ3']
         },
         {
            Color: 'Starlight',
            Storage: '64 GB',
            Model: ['MMX63', 'MMWW3', 'MMXG3', 'MMYD3']
         },
         {
            Color: 'Starlight',
            Storage: '128 GB',
            Model: ['MMX93', 'MMX03', 'MMXK3', 'MMYG3']
         },
         {
            Color: 'Starlight',
            Storage: '256 GB',
            Model: ['MMXD3', 'MMX33', 'MMXN3', 'MMYK3']
         },
         {
            Color: 'Red',
            Storage: '64 GB',
            Model: ['MMX73', 'MMWX3', 'MMXH3', 'MMYE3']
         },
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MMXA3', 'MMX13', 'MMXL3', 'MMYH3']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MMXE3', 'MMX43', 'MMXP3', 'MMYL3']
         }
      ]
   },
   {
      Generation: 'iPhone 14',
      ANumber: [],
      Bootrom: '',
      FCCID: [],
      InternalName: 'D27AP',
      Identifier: 'iPhone14,7',
      Models: [
         {
            Color: 'Blue',
            Storage: '128 GB',
            Model: ['MPVN3', 'MPVH3', 'MPVG3']
         },
         {
            Color: 'Blue',
            Storage: '256 GB',
            Model: ['MPWP3', 'MPWM3', 'MPWL3']
         },
         {
            Color: 'Blue',
            Storage: '512 GB',
            Model: ['MPXN3', 'MPXL3', 'MPXK3']
         },
         {
            Color: 'Midnight',
            Storage: '128 GB',
            Model: ['MPUF3', 'MPUA3', 'MPU93']
         },
         {
            Color: 'Midnight',
            Storage: '256 GB',
            Model: ['MPVX3', 'MPVV3', 'MPVU3']
         },
         {
            Color: 'Midnight',
            Storage: '512 GB',
            Model: ['MPWW3', 'MPWU3', 'MPWT3']
         },
         {
            Color: 'Starlight',
            Storage: '128 GB',
            Model: ['MPUR3', 'MPUN3', 'MPUJ3']
         },
         {
            Color: 'Starlight',
            Storage: '256 GB',
            Model: ['MPW43', 'MPW23', 'MPW13']
         },
         {
            Color: 'Starlight',
            Storage: '512 GB',
            Model: ['MPX33', 'MPX13', 'MPX03']
         },
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MPVA3', 'MPV73', 'MPV63']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MPWH3', 'MPWF3', 'MPWE3']
         },
         {
            Color: 'Red',
            Storage: '512 GB',
            Model: ['MPXG3', 'MPXE3', 'MPXD3']
         },
         {
            Color: 'Purple',
            Storage: '128 GB',
            Model: ['MPV03', 'MPUX3', 'MPUW3']
         },
         {
            Color: 'Purple',
            Storage: '256 GB',
            Model: ['MPWA3', 'MPW83', 'MPW73']
         },
         {
            Color: 'Purple',
            Storage: '512 GB',
            Model: ['MPX93', 'MPX73', 'MPX63']
         }
      ]
   },
   {
      Generation: 'iPhone 14 Plus',
      ANumber: [],
      Bootrom: '',
      FCCID: [],
      InternalName: 'D28AP',
      Identifier: 'iPhone14,8',
      Models: [
         {
            Color: 'Blue',
            Storage: '128 GB',
            Model: ['MQ523', 'MQ3W3', 'MQ3A3']
         },
         {
            Color: 'Blue',
            Storage: '256 GB',
            Model: ['MQ583', 'MQ423', 'MQ3G3']
         },
         {
            Color: 'Blue',
            Storage: '512 GB',
            Model: ['MQ5G3', 'MQ493', 'MQ3Q3']
         },
         {
            Color: 'Midnight',
            Storage: '128 GB',
            Model: ['MQ4X3', 'MQ3R3', 'MQ353']
         },
         {
            Color: 'Midnight',
            Storage: '256 GB',
            Model: ['MQ533', 'MQ3X3', 'MQ3C3']
         },
         {
            Color: 'Midnight',
            Storage: '512 GB',
            Model: ['MQ593', 'MQ433', 'MQ3H3']
         },
         {
            Color: 'Starlight',
            Storage: '128 GB',
            Model: ['MQ4Y3', 'MQ3T3', 'MQ363']
         },
         {
            Color: 'Starlight',
            Storage: '256 GB',
            Model: ['MQ553', 'MQ3Y3', 'MQ3D3']
         },
         {
            Color: 'Starlight',
            Storage: '512 GB',
            Model: ['MQ5D3', 'MQ443', 'MQ3J3']
         },
         {
            Color: 'Red',
            Storage: '128 GB',
            Model: ['MQ513', 'MQ3V3', 'MQ393']
         },
         {
            Color: 'Red',
            Storage: '256 GB',
            Model: ['MQ573', 'MQ413', 'MQ3F3']
         },
         {
            Color: 'Red',
            Storage: '512 GB',
            Model: ['MQ5F3', 'MQ473', 'MQ3P3']
         },
         {
            Color: 'Purple',
            Storage: '128 GB',
            Model: ['MQ503', 'MQ3U3', 'MQ373']
         },
         {
            Color: 'Purple',
            Storage: '256 GB',
            Model: ['MQ563', 'MQ403', 'MQ3E3']
         },
         {
            Color: 'Purple',
            Storage: '512 GB',
            Model: ['MQ5E3', 'MQ463', 'MQ3K3']
         }
      ]
   },
   {
      Generation: 'iPhone 14 Pro',
      ANumber: [],
      Bootrom: '',
      FCCID: [],
      InternalName: 'D73AP',
      Identifier: 'iPhone15,2',
      Models: [
         {
            Color: 'Deep Purple',
            Storage: '128 GB',
            Model: ['MQ0E3', 'MQ0G3', 'MQ0D3']
         },
         {
            Color: 'Deep Purple',
            Storage: '256 GB',
            Model: ['MQ1D3', 'MQ1F3', 'MQ1C3']
         },
         {
            Color: 'Deep Purple',
            Storage: '512 GB',
            Model: ['MQ273', 'MQ293', 'MQ263']
         },
         {
            Color: 'Deep Purple',
            Storage: '1 TB',
            Model: ['MQ303', 'MQ323', 'MQ2Y3']
         },
         {
            Color: 'Gold',
            Storage: '128 GB',
            Model: ['MQ063', 'MQ083', 'MQ053']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MQ163', 'MQ183', 'MQ143']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MQ213', 'MQ233', 'MQ203']
         },
         {
            Color: 'Gold',
            Storage: '1 TB',
            Model: ['MQ2T3', 'MQ2V3', 'MQ2R3']
         },
         {
            Color: 'Silver',
            Storage: '128 GB',
            Model: ['MQ003', 'MQ023', 'MPXY3']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MQ0X3', 'MQ103', 'MQ0W3']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MQ1U3', 'MQ1W3', 'MQ1R3']
         },
         {
            Color: 'Silver',
            Storage: '1 TB',
            Model: ['MQ2L3', 'MQ2N3', 'MQ2K3']
         },
         {
            Color: 'Space Black',
            Storage: '128 GB',
            Model: ['MPXT3', 'MPXV3', 'MPXR3']
         },
         {
            Color: 'Space Black',
            Storage: '256 GB',
            Model: ['MQ0N3', 'MQ0T3', 'MQ0M3']
         },
         {
            Color: 'Space Black',
            Storage: '512 GB',
            Model: ['MQ1K3', 'MQ1M3', 'MQ1J3']
         },
         {
            Color: 'Space Black',
            Storage: '1 TB',
            Model: ['MQ2E3', 'MQ2G3', 'MQ2D3']
         }
      ]
   },
   {
      Generation: 'iPhone 14 Pro Max',
      ANumber: [],
      Bootrom: '',
      FCCID: [],
      InternalName: 'D74AP',
      Identifier: 'iPhone15,3',
      Models: [
         {
            Color: 'Deep Purple',
            Storage: '128 GB',
            Model: ['MQ9T3', 'MQ8R3', 'MQ863']
         },
         {
            Color: 'Deep Purple',
            Storage: '256 GB',
            Model: ['MQ9X3', 'MQ8W3', 'MQ8A3']
         },
         {
            Color: 'Deep Purple',
            Storage: '512 GB',
            Model: ['MQAM3', 'MQ913', 'MQ8G3']
         },
         {
            Color: 'Deep Purple',
            Storage: '1 TB',
            Model: ['MQC53', 'MQ953', 'MQ8M3']
         },
         {
            Color: 'Gold',
            Storage: '128 GB',
            Model: ['MQ9R3', 'MQ8Q3', 'MQ853']
         },
         {
            Color: 'Gold',
            Storage: '256 GB',
            Model: ['MQ9W3', 'MQ8V3', 'MQ893']
         },
         {
            Color: 'Gold',
            Storage: '512 GB',
            Model: ['MQAJ3', 'MQ903', 'MQ8F3']
         },
         {
            Color: 'Gold',
            Storage: '1 TB',
            Model: ['MQC43', 'MQ943', 'MQ8L3']
         },
         {
            Color: 'Silver',
            Storage: '128 GB',
            Model: ['MQ9Q3', 'MQ8P3', 'MQ843']
         },
         {
            Color: 'Silver',
            Storage: '256 GB',
            Model: ['MQ9V3', 'MQ8U3', 'MQ883']
         },
         {
            Color: 'Silver',
            Storage: '512 GB',
            Model: ['MQAH3', 'MQ8Y3', 'MQ8E3']
         },
         {
            Color: 'Silver',
            Storage: '1 TB',
            Model: ['MQC33', 'MQ933', 'MQ8J3']
         },
         {
            Color: 'Space Black',
            Storage: '128 GB',
            Model: ['MQ9P3', 'MQ8N3', 'MQ833']
         },
         {
            Color: 'Space Black',
            Storage: '256 GB',
            Model: ['MQ9U3', 'MQ8T3', 'MQ873']
         },
         {
            Color: 'Space Black',
            Storage: '512 GB',
            Model: ['MQAF3', 'MQ8X3', 'MQ8D3']
         },
         {
            Color: 'Space Black',
            Storage: '1 TB',
            Model: ['MQC23', 'MQ923', 'MQ8H3']
         }
      ]
   }
];

const appleRes = apple.reduce((acc, device, index) => {
   if (typeof device.ANumber === 'string') {
      if (Number(device.ANumber.substr(1)) < minIphoneVersion) {
         return acc;
      }

      acc.push({
         brandId, id: 99900000 + index * 10, name: device.Generation, aNumber: device.ANumber
      });
   } else if (device.ANumber.length === 0) {
      acc.push({
         brandId, id: 99900000 + index * 10 + 1, name: device.Generation, aNumber: ''
      });
   } else {
      if (Number(device.ANumber[0].substr(1)) < minIphoneVersion) {
         return acc;
      }

      device.ANumber.forEach((aNumber, aindex) => {
         acc.push({
            brandId, id: 99900000 + index * 10 + aindex, name: device.Generation, aNumber
         });
      });
   }

   return acc;
}, []);

console.log(JSON.stringify(appleRes));
