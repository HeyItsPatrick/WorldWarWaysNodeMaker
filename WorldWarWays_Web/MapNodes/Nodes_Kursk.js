let kurskMapUrl = "https://cdn.discordapp.com/attachments/645036946976145409/865713420191662110/Kursk_TacMap01.png";
let kurskNodes = {
  "Node0": {"x": "421", "y": "31", "nodes": ", Node1"},
  "Node1": {"x": "470", "y": "42", "nodes": ", Node0, Node2"},
  "Node2": {"x": "519", "y": "52", "nodes": ", Node1, Node3"},
  "Node3": {"x": "568", "y": "63", "nodes": ", Node2, Node4"},
  "Node4": {"x": "599", "y": "52", "nodes": ", Node3, Node5"},
  "Node5": {"x": "657", "y": "52", "nodes": ", Node4, Node6"},
  "Node6": {"x": "709", "y": "62", "nodes": ", Node5, Node7"},
  "Node7": {"x": "744", "y": "73", "nodes": ", Node6, Node8"},
  "Node8": {"x": "792", "y": "92", "nodes": ", Node7, Node9"},
  "Node9": {"x": "840", "y": "112", "nodes": ", Node8, Node10"},
  "Node10": {"x": "889", "y": "144", "nodes": ", Node9, Node11"},
  "Node11": {"x": "935", "y": "160", "nodes": ", Node10, Node12"},
  "Node12": {"x": "981", "y": "171", "nodes": ", Node11, Node14, Node13"},
  "Node13": {"x": "992", "y": "190", "nodes": ", Node14, Node12, Node91"},
  "Node14": {"x": "1000", "y": "184", "nodes": ", Node12, Node15, Node13"},
  "Node15": {"x": "1049", "y": "205", "nodes": ", Node14, Node16"},
  "Node16": {"x": "1102", "y": "215", "nodes": ", Node15, Node17, Node23"},
  "Node17": {"x": "1088", "y": "184", "nodes": ", Node16, Node18"},
  "Node18": {"x": "1068", "y": "150", "nodes": ", Node17, Node20, Node19"},
  "Node19": {"x": "1059", "y": "178", "nodes": ", Node18"},
  "Node20": {"x": "1091", "y": "111", "nodes": ", Node18, Node21"},
  "Node21": {"x": "1105", "y": "85", "nodes": ", Node20, Node22"},
  "Node22": {"x": "1111", "y": "51", "nodes": ", Node21"},
  "Node23": {"x": "1126", "y": "230", "nodes": ", Node24, Node16"},
  "Node24": {"x": "1152", "y": "260", "nodes": ", Node25, Node23"},
  "Node25": {"x": "1173", "y": "270", "nodes": ", Node26, Node24"},
  "Node26": {"x": "1188", "y": "264", "nodes": ", Node27, Node25"},
  "Node27": {"x": "1227", "y": "233", "nodes": ", Node28, Node26, Node29"},
  "Node28": {"x": "1248", "y": "221", "nodes": ", Node38, Node27, Node29"},
  "Node29": {"x": "1226", "y": "218", "nodes": ", Node27, Node28, Node30"},
  "Node30": {"x": "1224", "y": "199", "nodes": ", Node29, Node31"},
  "Node31": {"x": "1247", "y": "181", "nodes": ", Node30, Node32"},
  "Node32": {"x": "1264", "y": "168", "nodes": ", Node31, Node33"},
  "Node33": {"x": "1276", "y": "133", "nodes": ", Node32, Node34"},
  "Node34": {"x": "1291", "y": "110", "nodes": ", Node33, Node35"},
  "Node35": {"x": "1293", "y": "94", "nodes": ", Node34, Node36"},
  "Node36": {"x": "1346", "y": "80", "nodes": ", Node35, Node37"},
  "Node37": {"x": "1364", "y": "53", "nodes": ", Node36"},
  "Node38": {"x": "1278", "y": "202", "nodes": ", Node39, Node28"},
  "Node39": {"x": "1318", "y": "201", "nodes": ", Node40, Node38"},
  "Node40": {"x": "1354", "y": "199", "nodes": ", Node42, Node41, Node39"},
  "Node41": {"x": "1346", "y": "253", "nodes": ", Node40"},
  "Node42": {"x": "1374", "y": "192", "nodes": ", Node43, Node40"},
  "Node43": {"x": "1409", "y": "161", "nodes": ", Node44, Node42"},
  "Node44": {"x": "1440", "y": "144", "nodes": ", Node45, Node43"},
  "Node45": {"x": "1491", "y": "142", "nodes": ", Node46, Node44"},
  "Node46": {"x": "1496", "y": "162", "nodes": ", Node47, Node45"},
  "Node47": {"x": "1500", "y": "227", "nodes": ", Node48, Node46"},
  "Node48": {"x": "1505", "y": "293", "nodes": ", Node49, Node47"},
  "Node49": {"x": "1497", "y": "301", "nodes": ", Node50, Node48"},
  "Node50": {"x": "1438", "y": "307", "nodes": ", Node51, Node49"},
  "Node51": {"x": "1428", "y": "319", "nodes": ", Node52, Node50"},
  "Node52": {"x": "1426", "y": "357", "nodes": ", Node54, Node53, Node51"},
  "Node53": {"x": "1401", "y": "383", "nodes": ", Node52"},
  "Node54": {"x": "1428", "y": "390", "nodes": ", Node55, Node52"},
  "Node55": {"x": "1422", "y": "417", "nodes": ", Node56, Node54"},
  "Node56": {"x": "1407", "y": "441", "nodes": ", Node57, Node55, Node62"},
  "Node57": {"x": "1374", "y": "483", "nodes": ", Node71, Node58, Node56"},
  "Node58": {"x": "1386", "y": "503", "nodes": ", Node60, Node59, Node57"},
  "Node59": {"x": "1401", "y": "518", "nodes": ", Node58"},
  "Node60": {"x": "1385", "y": "534", "nodes": ", Node61, Node58"},
  "Node61": {"x": "1393", "y": "554", "nodes": ", Node60"},
  "Node62": {"x": "1423", "y": "467", "nodes": ", Node56, Node63"},
  "Node63": {"x": "1435", "y": "493", "nodes": ", Node62, Node66, Node64"},
  "Node64": {"x": "1425", "y": "525", "nodes": ", Node65, Node63"},
  "Node65": {"x": "1421", "y": "555", "nodes": ", Node64"},
  "Node66": {"x": "1451", "y": "514", "nodes": ", Node63, Node67"},
  "Node67": {"x": "1459", "y": "557", "nodes": ", Node68, Node66"},
  "Node68": {"x": "1445", "y": "588", "nodes": ", Node69, Node67"},
  "Node69": {"x": "1421", "y": "635", "nodes": ", Node70, Node68"},
  "Node70": {"x": "1397", "y": "672", "nodes": ", Node80, Node69"},
  "Node71": {"x": "1350", "y": "520", "nodes": ", Node72, Node57"},
  "Node72": {"x": "1321", "y": "563", "nodes": ", Node73, Node71"},
  "Node73": {"x": "1297", "y": "607", "nodes": ", Node74, Node72"},
  "Node74": {"x": "1288", "y": "670", "nodes": ", Node76, Node75, Node73"},
  "Node75": {"x": "1273", "y": "681", "nodes": ", Node74"},
  "Node76": {"x": "1287", "y": "708", "nodes": ", Node77, Node79, Node74"},
  "Node77": {"x": "1296", "y": "733", "nodes": ", Node76, Node78"},
  "Node78": {"x": "1309", "y": "728", "nodes": ", Node77, Node79"},
  "Node79": {"x": "1303", "y": "713", "nodes": ", Node78, Node76"},
  "Node80": {"x": "1383", "y": "709", "nodes": ", Node81, Node70"},
  "Node81": {"x": "1364", "y": "733", "nodes": ", Node82, Node80"},
  "Node82": {"x": "1340", "y": "775", "nodes": ", Node84, Node83, Node81"},
  "Node83": {"x": "1302", "y": "807", "nodes": ", Node82"},
  "Node84": {"x": "1349", "y": "811", "nodes": ", Node85, Node82"},
  "Node85": {"x": "1350", "y": "858", "nodes": ", Node86, Node84"},
  "Node86": {"x": "1344", "y": "881", "nodes": ", Node89, Node87, Node85"},
  "Node87": {"x": "1332", "y": "911", "nodes": ", Node86, Node88"},
  "Node88": {"x": "1329", "y": "933", "nodes": ", Node87"},
  "Node89": {"x": "1368", "y": "904", "nodes": ", Node90, Node86"},
  "Node90": {"x": "1368", "y": "959", "nodes": ", Node89"},
  "Node91": {"x": "989", "y": "219", "nodes": ", Node13, Node92"},
  "Node92": {"x": "989", "y": "261", "nodes": ", Node91, Node93"},
  "Node93": {"x": "992", "y": "285", "nodes": ", Node92, Node94"},
  "Node94": {"x": "990", "y": "328", "nodes": ", Node93, Node95"},
  "Node95": {"x": "988", "y": "371", "nodes": ", Node94, Node96"},
  "Node96": {"x": "975", "y": "411", "nodes": ", Node95, Node97"},
  "Node97": {"x": "921", "y": "456", "nodes": ", Node96, Node98"},
  "Node98": {"x": "899", "y": "496", "nodes": ", Node97, Node99"},
  "Node99": {"x": "878", "y": "537", "nodes": ", Node98, Node100"},
  "Node100": {"x": "879", "y": "581", "nodes": ", Node99, Node101"},
  "Node101": {"x": "881", "y": "645", "nodes": ", Node100, Node102"},
  "Node102": {"x": "888", "y": "669", "nodes": ", Node101, Node103"},
  "Node103": {"x": "914", "y": "721", "nodes": ", Node102, Node104"},
  "Node104": {"x": "914", "y": "774", "nodes": ", Node103, Node105"},
  "Node105": {"x": "911", "y": "812", "nodes": ", Node104, Node106"},
  "Node106": {"x": "900", "y": "837", "nodes": ", Node105, Node107"},
  "Node107": {"x": "871", "y": "893", "nodes": ", Node106, Node108"},
  "Node108": {"x": "843", "y": "949", "nodes": ", Node107, Node111, Node109"},
  "Node109": {"x": "851", "y": "967", "nodes": ", Node110, Node108, Node125"},
  "Node110": {"x": "832", "y": "968", "nodes": ", Node111, Node112, Node109"},
  "Node111": {"x": "826", "y": "949", "nodes": ", Node108, Node110, Node124"},
  "Node112": {"x": "826", "y": "980", "nodes": ", Node110, Node113, Node164"},
  "Node113": {"x": "767", "y": "960", "nodes": ", Node112, Node114"},
  "Node114": {"x": "709", "y": "941", "nodes": ", Node113, Node115"},
  "Node115": {"x": "648", "y": "927", "nodes": ", Node114, Node116"},
  "Node116": {"x": "643", "y": "921", "nodes": ", Node115, Node117"},
  "Node117": {"x": "647", "y": "901", "nodes": ", Node116, Node118"},
  "Node118": {"x": "578", "y": "882", "nodes": ", Node117"},
  "Node119": {"x": "569", "y": "841", "nodes": ", Node120"},
  "Node120": {"x": "581", "y": "829", "nodes": ", Node119, Node121"},
  "Node121": {"x": "598", "y": "826", "nodes": ", Node120, Node122"},
  "Node122": {"x": "654", "y": "849", "nodes": ", Node121, Node123"},
  "Node123": {"x": "710", "y": "873", "nodes": ", Node122, Node124"},
  "Node124": {"x": "773", "y": "910", "nodes": ", Node123, Node111"},
  "Node125": {"x": "900", "y": "985", "nodes": ", Node109, Node126"},
  "Node126": {"x": "965", "y": "1006", "nodes": ", Node125, Node127"},
  "Node127": {"x": "1021", "y": "1018", "nodes": ", Node126, Node128"},
  "Node128": {"x": "1093", "y": "1020", "nodes": ", Node127, Node129"},
  "Node129": {"x": "1133", "y": "1023", "nodes": ", Node128, Node130"},
  "Node130": {"x": "1156", "y": "1028", "nodes": ", Node138, Node129, Node131"},
  "Node131": {"x": "1213", "y": "1045", "nodes": ", Node130, Node132"},
  "Node132": {"x": "1270", "y": "1062", "nodes": ", Node131, Node133"},
  "Node133": {"x": "1327", "y": "1079", "nodes": ", Node132, Node134"},
  "Node134": {"x": "1384", "y": "1096", "nodes": ", Node133, Node135"},
  "Node135": {"x": "1413", "y": "1101", "nodes": ", Node134, Node136"},
  "Node136": {"x": "1465", "y": "1115", "nodes": ", Node135, Node137"},
  "Node137": {"x": "1517", "y": "1129", "nodes": ", Node136"},
  "Node138": {"x": "1138", "y": "1055", "nodes": ", Node139, Node130"},
  "Node139": {"x": "1143", "y": "1077", "nodes": ", Node140, Node138"},
  "Node140": {"x": "1140", "y": "1122", "nodes": ", Node141, Node139"},
  "Node141": {"x": "1141", "y": "1155", "nodes": ", Node142, Node140"},
  "Node142": {"x": "1133", "y": "1188", "nodes": ", Node143, Node141"},
  "Node143": {"x": "1080", "y": "1228", "nodes": ", Node144, Node142"},
  "Node144": {"x": "1075", "y": "1246", "nodes": ", Node145, Node143"},
  "Node145": {"x": "1062", "y": "1256", "nodes": ", Node146, Node144"},
  "Node146": {"x": "1039", "y": "1262", "nodes": ", Node147, Node145"},
  "Node147": {"x": "1003", "y": "1291", "nodes": ", Node148, Node146"},
  "Node148": {"x": "985", "y": "1293", "nodes": ", Node149, Node147"},
  "Node149": {"x": "957", "y": "1308", "nodes": ", Node154, Node148, Node150"},
  "Node150": {"x": "943", "y": "1322", "nodes": ", Node149, Node151"},
  "Node151": {"x": "920", "y": "1340", "nodes": ", Node150, Node152"},
  "Node152": {"x": "917", "y": "1362", "nodes": ", Node151, Node153"},
  "Node153": {"x": "923", "y": "1385", "nodes": ", Node152"},
  "Node154": {"x": "957", "y": "1255", "nodes": ", Node155, Node149"},
  "Node155": {"x": "944", "y": "1229", "nodes": ", Node156, Node154"},
  "Node156": {"x": "930", "y": "1223", "nodes": ", Node157, Node155, Node158"},
  "Node157": {"x": "911", "y": "1219", "nodes": ", Node159, Node156, Node158"},
  "Node158": {"x": "924", "y": "1212", "nodes": ", Node157, Node156"},
  "Node159": {"x": "847", "y": "1210", "nodes": ", Node160, Node157"},
  "Node160": {"x": "793", "y": "1195", "nodes": ", Node161, Node159"},
  "Node161": {"x": "749", "y": "1190", "nodes": ", Node162, Node171, Node160"},
  "Node162": {"x": "769", "y": "1136", "nodes": ", Node163, Node161"},
  "Node163": {"x": "789", "y": "1082", "nodes": ", Node164, Node162"},
  "Node164": {"x": "809", "y": "1029", "nodes": ", Node112, Node163"},
  "Node165": {"x": "620", "y": "1199", "nodes": ", Node166"},
  "Node166": {"x": "641", "y": "1225", "nodes": ", Node165, Node167"},
  "Node167": {"x": "668", "y": "1249", "nodes": ", Node166, Node168"},
  "Node168": {"x": "694", "y": "1257", "nodes": ", Node167, Node169"},
  "Node169": {"x": "722", "y": "1249", "nodes": ", Node168, Node170"},
  "Node170": {"x": "738", "y": "1256", "nodes": ", Node171, Node172, Node169"},
  "Node171": {"x": "740", "y": "1223", "nodes": ", Node161, Node170"},
  "Node172": {"x": "739", "y": "1285", "nodes": ", Node170, Node173"},
  "Node173": {"x": "739", "y": "1345", "nodes": ", Node172, Node174"},
  "Node174": {"x": "738", "y": "1404", "nodes": ", Node173, Node175"},
  "Node175": {"x": "738", "y": "1464", "nodes": ", Node174, Node183, Node176"},
  "Node176": {"x": "741", "y": "1508", "nodes": ", Node175, Node177"},
  "Node177": {"x": "735", "y": "1532", "nodes": ", Node176, Node178"},
  "Node178": {"x": "734", "y": "1560", "nodes": ", Node177, Node179, Node184"},
  "Node179": {"x": "705", "y": "1568", "nodes": ", Node185, Node180, Node178"},
  "Node180": {"x": "690", "y": "1560", "nodes": ", Node179, Node181"},
  "Node181": {"x": "642", "y": "1549", "nodes": ", Node180, Node191, Node182"},
  "Node182": {"x": "675", "y": "1535", "nodes": ", Node181, Node183"},
  "Node183": {"x": "709", "y": "1506", "nodes": ", Node182, Node175"},
  "Node184": {"x": "745", "y": "1585", "nodes": ", Node178, Node256, Node255"},
  "Node185": {"x": "679", "y": "1610", "nodes": ", Node186, Node179, Node187"},
  "Node186": {"x": "663", "y": "1608", "nodes": ", Node189, Node185, Node187"},
  "Node187": {"x": "668", "y": "1626", "nodes": ", Node188, Node186, Node185, Node188"},
  "Node188": {"x": "665", "y": "1633", "nodes": ", Node247, Node187, Node187, Node230"},
  "Node189": {"x": "648", "y": "1585", "nodes": ", Node190, Node186"},
  "Node190": {"x": "617", "y": "1564", "nodes": ", Node191, Node189"},
  "Node191": {"x": "582", "y": "1548", "nodes": ", Node198, Node190, Node181, Node197"},
  "Node192": {"x": "405", "y": "1629", "nodes": ", Node193"},
  "Node193": {"x": "436", "y": "1604", "nodes": ", Node194, Node192"},
  "Node194": {"x": "464", "y": "1584", "nodes": ", Node195, Node193"},
  "Node195": {"x": "489", "y": "1562", "nodes": ", Node196, Node194"},
  "Node196": {"x": "518", "y": "1551", "nodes": ", Node197, Node195"},
  "Node197": {"x": "559", "y": "1548", "nodes": ", Node198, Node191, Node196"},
  "Node198": {"x": "570", "y": "1538", "nodes": ", Node217, Node191, Node199, Node197"},
  "Node199": {"x": "574", "y": "1530", "nodes": ", Node214, Node203, Node200, Node198"},
  "Node200": {"x": "588", "y": "1509", "nodes": ", Node201, Node199"},
  "Node201": {"x": "601", "y": "1501", "nodes": ", Node202, Node200"},
  "Node202": {"x": "621", "y": "1499", "nodes": ", Node201"},
  "Node203": {"x": "590", "y": "1540", "nodes": ", Node199, Node204"},
  "Node204": {"x": "634", "y": "1541", "nodes": ", Node203, Node205"},
  "Node205": {"x": "677", "y": "1523", "nodes": ", Node204, Node208, Node206"},
  "Node206": {"x": "656", "y": "1504", "nodes": ", Node207, Node205"},
  "Node207": {"x": "623", "y": "1474", "nodes": ", Node206"},
  "Node208": {"x": "696", "y": "1506", "nodes": ", Node205, Node209"},
  "Node209": {"x": "715", "y": "1483", "nodes": ", Node208, Node212, Node210"},
  "Node210": {"x": "687", "y": "1471", "nodes": ", Node209, Node211"},
  "Node211": {"x": "648", "y": "1470", "nodes": ", Node210"},
  "Node212": {"x": "727", "y": "1461", "nodes": ", Node209, Node213"},
  "Node213": {"x": "730", "y": "1436", "nodes": ", Node212"},
  "Node214": {"x": "563", "y": "1517", "nodes": ", Node215, Node199"},
  "Node215": {"x": "546", "y": "1467", "nodes": ", Node216, Node214"},
  "Node216": {"x": "546", "y": "1450", "nodes": ", Node221, Node215"},
  "Node217": {"x": "547", "y": "1514", "nodes": ", Node218, Node198"},
  "Node218": {"x": "537", "y": "1477", "nodes": ", Node219, Node217"},
  "Node219": {"x": "538", "y": "1415", "nodes": ", Node220, Node218"},
  "Node220": {"x": "552", "y": "1358", "nodes": ", Node224, Node219"},
  "Node221": {"x": "554", "y": "1414", "nodes": ", Node222, Node216"},
  "Node222": {"x": "561", "y": "1379", "nodes": ", Node223, Node221"},
  "Node223": {"x": "566", "y": "1343", "nodes": ", Node222"},
  "Node224": {"x": "552", "y": "1339", "nodes": ", Node225, Node220"},
  "Node225": {"x": "541", "y": "1324", "nodes": ", Node226, Node224"},
  "Node226": {"x": "516", "y": "1309", "nodes": ", Node227, Node225"},
  "Node227": {"x": "490", "y": "1291", "nodes": ", Node228, Node226"},
  "Node228": {"x": "460", "y": "1258", "nodes": ", Node229, Node227"},
  "Node229": {"x": "422", "y": "1224", "nodes": ", Node228"},
  "Node230": {"x": "656", "y": "1661", "nodes": ", Node188, Node235, Node231"},
  "Node231": {"x": "636", "y": "1714", "nodes": ", Node230, Node232"},
  "Node232": {"x": "615", "y": "1766", "nodes": ", Node231, Node233"},
  "Node233": {"x": "595", "y": "1819", "nodes": ", Node232, Node234"},
  "Node234": {"x": "576", "y": "1888", "nodes": ", Node233, Node248"},
  "Node235": {"x": "643", "y": "1654", "nodes": ", Node230, Node236"},
  "Node236": {"x": "629", "y": "1657", "nodes": ", Node235, Node237"},
  "Node237": {"x": "598", "y": "1676", "nodes": ", Node236, Node238"},
  "Node238": {"x": "567", "y": "1700", "nodes": ", Node237, Node239"},
  "Node239": {"x": "543", "y": "1717", "nodes": ", Node238, Node240"},
  "Node240": {"x": "519", "y": "1754", "nodes": ", Node239, Node241"},
  "Node241": {"x": "506", "y": "1785", "nodes": ", Node240"},
  "Node242": {"x": "496", "y": "1784", "nodes": ", Node243"},
  "Node243": {"x": "515", "y": "1740", "nodes": ", Node242, Node244"},
  "Node244": {"x": "536", "y": "1712", "nodes": ", Node243, Node245"},
  "Node245": {"x": "568", "y": "1689", "nodes": ", Node244, Node246"},
  "Node246": {"x": "597", "y": "1665", "nodes": ", Node245, Node247"},
  "Node247": {"x": "628", "y": "1645", "nodes": ", Node246, Node188"},
  "Node248": {"x": "591", "y": "1883", "nodes": ", Node234, Node249"},
  "Node249": {"x": "641", "y": "1883", "nodes": ", Node248, Node250"},
  "Node250": {"x": "691", "y": "1883", "nodes": ", Node249, Node251"},
  "Node251": {"x": "742", "y": "1883", "nodes": ", Node250, Node252"},
  "Node252": {"x": "766", "y": "1894", "nodes": ", Node251, Node253"},
  "Node253": {"x": "780", "y": "1898", "nodes": ", Node252, Node254"},
  "Node254": {"x": "795", "y": "1878", "nodes": ", Node253"},
  "Node255": {"x": "755", "y": "1612", "nodes": ", Node184, Node256, Node257"},
  "Node256": {"x": "767", "y": "1598", "nodes": ", Node184, Node265, Node255"},
  "Node257": {"x": "773", "y": "1625", "nodes": ", Node255, Node258"},
  "Node258": {"x": "817", "y": "1634", "nodes": ", Node257, Node259"},
  "Node259": {"x": "837", "y": "1645", "nodes": ", Node258, Node260"},
  "Node260": {"x": "859", "y": "1663", "nodes": ", Node259, Node261"},
  "Node261": {"x": "876", "y": "1665", "nodes": ", Node260, Node262, Node297"},
  "Node262": {"x": "870", "y": "1654", "nodes": ", Node261, Node263, Node266"},
  "Node263": {"x": "872", "y": "1642", "nodes": ", Node262, Node264, Node266, Node280"},
  "Node264": {"x": "878", "y": "1629", "nodes": ", Node266, Node267, Node263"},
  "Node265": {"x": "800", "y": "1606", "nodes": ", Node256, Node266"},
  "Node266": {"x": "845", "y": "1625", "nodes": ", Node265, Node264, Node263, Node262"},
  "Node267": {"x": "901", "y": "1620", "nodes": ", Node264, Node268"},
  "Node268": {"x": "939", "y": "1606", "nodes": ", Node267, Node269"},
  "Node269": {"x": "966", "y": "1585", "nodes": ", Node268, Node270"},
  "Node270": {"x": "1030", "y": "1561", "nodes": ", Node269, Node271"},
  "Node271": {"x": "1095", "y": "1538", "nodes": ", Node270, Node296, Node272"},
  "Node272": {"x": "1157", "y": "1533", "nodes": ", Node271, Node273"},
  "Node273": {"x": "1216", "y": "1530", "nodes": ", Node272, Node274"},
  "Node274": {"x": "1263", "y": "1526", "nodes": ", Node273, Node275"},
  "Node275": {"x": "1314", "y": "1514", "nodes": ", Node274, Node276"},
  "Node276": {"x": "1369", "y": "1508", "nodes": ", Node275, Node277"},
  "Node277": {"x": "1424", "y": "1502", "nodes": ", Node276, Node278"},
  "Node278": {"x": "1478", "y": "1501", "nodes": ", Node277, Node279"},
  "Node279": {"x": "1514", "y": "1498", "nodes": ", Node278"},
  "Node280": {"x": "900", "y": "1654", "nodes": ", Node263, Node281"},
  "Node281": {"x": "932", "y": "1658", "nodes": ", Node280, Node282"},
  "Node282": {"x": "957", "y": "1677", "nodes": ", Node281, Node283, Node305"},
  "Node283": {"x": "974", "y": "1688", "nodes": ", Node282, Node284"},
  "Node284": {"x": "996", "y": "1692", "nodes": ", Node283, Node285"},
  "Node285": {"x": "1019", "y": "1687", "nodes": ", Node284, Node286"},
  "Node286": {"x": "1040", "y": "1675", "nodes": ", Node285, Node288, Node287, Node314"},
  "Node287": {"x": "1043", "y": "1658", "nodes": ", Node286"},
  "Node288": {"x": "1092", "y": "1656", "nodes": ", Node286, Node289"},
  "Node289": {"x": "1142", "y": "1645", "nodes": ", Node290, Node288"},
  "Node290": {"x": "1161", "y": "1633", "nodes": ", Node291, Node289"},
  "Node291": {"x": "1168", "y": "1609", "nodes": ", Node292, Node290"},
  "Node292": {"x": "1166", "y": "1595", "nodes": ", Node294, Node293, Node291"},
  "Node293": {"x": "1167", "y": "1582", "nodes": ", Node292"},
  "Node294": {"x": "1127", "y": "1585", "nodes": ", Node295, Node292"},
  "Node295": {"x": "1108", "y": "1575", "nodes": ", Node296, Node294"},
  "Node296": {"x": "1103", "y": "1558", "nodes": ", Node271, Node295"},
  "Node297": {"x": "901", "y": "1701", "nodes": ", Node261, Node298"},
  "Node298": {"x": "931", "y": "1749", "nodes": ", Node297, Node299, Node302, Node303"},
  "Node299": {"x": "943", "y": "1749", "nodes": ", Node298, Node304, Node300"},
  "Node300": {"x": "943", "y": "1755", "nodes": ", Node299, Node301, Node302"},
  "Node301": {"x": "956", "y": "1765", "nodes": ", Node300"},
  "Node302": {"x": "942", "y": "1765", "nodes": ", Node300, Node298, Node310"},
  "Node303": {"x": "936", "y": "1770", "nodes": ", Node298, Node306"},
  "Node304": {"x": "953", "y": "1732", "nodes": ", Node299, Node305"},
  "Node305": {"x": "957", "y": "1708", "nodes": ", Node304, Node282"},
  "Node306": {"x": "939", "y": "1798", "nodes": ", Node303, Node307"},
  "Node307": {"x": "937", "y": "1830", "nodes": ", Node306, Node308"},
  "Node308": {"x": "939", "y": "1857", "nodes": ", Node307, Node309"},
  "Node309": {"x": "945", "y": "1881", "nodes": ", Node308"},
  "Node310": {"x": "964", "y": "1798", "nodes": ", Node311, Node302"},
  "Node311": {"x": "981", "y": "1840", "nodes": ", Node312, Node310"},
  "Node312": {"x": "994", "y": "1869", "nodes": ", Node313, Node311"},
  "Node313": {"x": "1019", "y": "1888", "nodes": ", Node312"},
  "Node314": {"x": "1055", "y": "1687", "nodes": ", Node286, Node315"},
  "Node315": {"x": "1073", "y": "1717", "nodes": ", Node314, Node316"},
  "Node316": {"x": "1093", "y": "1741", "nodes": ", Node315, Node317"},
  "Node317": {"x": "1112", "y": "1764", "nodes": ", Node316, Node318"},
  "Node318": {"x": "1133", "y": "1797", "nodes": ", Node317, Node319"},
  "Node319": {"x": "1157", "y": "1826", "nodes": ", Node318, Node320"},
  "Node320": {"x": "1185", "y": "1859", "nodes": ", Node319, Node321, Node322"},
  "Node321": {"x": "1208", "y": "1885", "nodes": ", Node320"},
  "Node322": {"x": "1182", "y": "1835", "nodes": ", Node320, Node323"},
  "Node323": {"x": "1195", "y": "1815", "nodes": ", Node322, Node324"},
  "Node324": {"x": "1218", "y": "1781", "nodes": ", Node323, Node325"},
  "Node325": {"x": "1233", "y": "1749", "nodes": ", Node324, Node326"},
  "Node326": {"x": "1252", "y": "1714", "nodes": ", Node325, Node327"},
  "Node327": {"x": "1266", "y": "1691", "nodes": ", Node326, Node328"},
  "Node328": {"x": "1266", "y": "1642", "nodes": ", Node327, Node329"},
  "Node329": {"x": "1276", "y": "1610", "nodes": ", Node328, Node330"},
  "Node330": {"x": "1287", "y": "1580", "nodes": ", Node329, Node331, Node333"},
  "Node331": {"x": "1305", "y": "1566", "nodes": ", Node330, Node332"},
  "Node332": {"x": "1321", "y": "1560", "nodes": ", Node331"},
  "Node333": {"x": "1303", "y": "1605", "nodes": ", Node330, Node334"},
  "Node334": {"x": "1317", "y": "1617", "nodes": ", Node333, Node335"},
  "Node335": {"x": "1338", "y": "1619", "nodes": ", Node334, Node336, Node337"},
  "Node336": {"x": "1332", "y": "1604", "nodes": ", Node335"},
  "Node337": {"x": "1373", "y": "1621", "nodes": ", Node335, Node338"},
  "Node338": {"x": "1398", "y": "1623", "nodes": ", Node337, Node339"},
  "Node339": {"x": "1417", "y": "1646", "nodes": ", Node338, Node340, Node342"},
  "Node340": {"x": "1421", "y": "1605", "nodes": ", Node339, Node341"},
  "Node341": {"x": "1421", "y": "1579", "nodes": ", Node340"},
  "Node342": {"x": "1416", "y": "1684", "nodes": ", Node339, Node343"},
  "Node343": {"x": "1418", "y": "1722", "nodes": ", Node342, Node344"},
  "Node344": {"x": "1429", "y": "1740", "nodes": ", Node343, Node345"},
  "Node345": {"x": "1472", "y": "1776", "nodes": ", Node344, Node348, Node346"},
  "Node346": {"x": "1493", "y": "1805", "nodes": ", Node347, Node345, Node350"},
  "Node347": {"x": "1515", "y": "1839", "nodes": ", Node346"},
  "Node348": {"x": "1481", "y": "1757", "nodes": ", Node345, Node349"},
  "Node349": {"x": "1515", "y": "1732", "nodes": ", Node348"},
  "Node350": {"x": "1513", "y": "1793", "nodes": ", Node346, Node351"},
  "Node351": {"x": "1501", "y": "1776", "nodes": ", Node350, Node352"},
  "Node352": {"x": "1532", "y": "1758", "nodes": ", Node351"}
};
