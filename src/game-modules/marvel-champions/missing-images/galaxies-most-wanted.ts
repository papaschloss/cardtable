const MISSING_CARD_IMAGE_MAP: { [key: string]: string } = {
  // Groot Cards
  "16001a": "https://marvelcdb.com/bundles/cards/16001a.png",
  "16001b": "https://marvelcdb.com/bundles/cards/16001b.png",
  "16002": "https://hallofheroeshome.files.wordpress.com/2021/04/g1.jpg?w=300",
  "16003": "https://hallofheroeshome.files.wordpress.com/2021/04/g3.jpg?w=300",
  "16004": "https://hallofheroeshome.files.wordpress.com/2021/04/g5.jpg?w=300",
  "16005": "https://hallofheroeshome.files.wordpress.com/2021/04/g7.jpg?w=300",
  "16006": "https://hallofheroeshome.files.wordpress.com/2021/04/g10.jpg?w=300",
  "16007": "https://hallofheroeshome.files.wordpress.com/2021/04/g11.jpg?w=300",
  "16008": "https://hallofheroeshome.files.wordpress.com/2021/04/g12.jpg?w=300",
  "16009": "https://hallofheroeshome.files.wordpress.com/2021/04/g13.jpg?w=300",
  "16010": "https://hallofheroeshome.files.wordpress.com/2021/04/g14.jpg?w=300",
  "16011": "https://hallofheroeshome.files.wordpress.com/2021/04/g15.jpg?w=300",
  "16012": "https://hallofheroeshome.files.wordpress.com/2021/04/z1.jpg?w=300",
  "16014": "https://hallofheroeshome.files.wordpress.com/2021/04/z3.jpg?w=300",
  "16016": "https://hallofheroeshome.files.wordpress.com/2021/04/z5.jpg?w=300",
  "16017": "https://hallofheroeshome.files.wordpress.com/2021/04/z6.jpg?w=300",
  "16019": "https://hallofheroeshome.files.wordpress.com/2021/04/z8.jpg?w=300",
  "16020": "https://hallofheroeshome.files.wordpress.com/2021/04/z9.jpg?w=300",
  "16024": "https://hallofheroeshome.files.wordpress.com/2021/04/z13.jpg?w=300",
  "16025": "https://hallofheroeshome.files.wordpress.com/2021/04/n1.jpg?w=300",
  "16026": "https://hallofheroeshome.files.wordpress.com/2021/04/n2.jpg?w=300",
  "16027": "https://hallofheroeshome.files.wordpress.com/2021/04/n3.jpg?w=300",
  "16028": "https://hallofheroeshome.files.wordpress.com/2021/04/n4.jpg?w=300",

  // Rocket Cards
  "16029a": "https://marvelcdb.com/bundles/cards/16029a.png",
  "16029b": "https://hallofheroeshome.files.wordpress.com/2021/04/r0a.jpg?w=300",
  "16030": "https://hallofheroeshome.files.wordpress.com/2021/04/r1.jpg?w=300",
  "16031": "https://hallofheroeshome.files.wordpress.com/2021/04/r3.jpg?w=300",
  "16032": "https://hallofheroeshome.files.wordpress.com/2021/04/r5.jpg?w=300",
  "16033": "https://hallofheroeshome.files.wordpress.com/2021/04/r6.jpg?w=300",
  "16034": "https://hallofheroeshome.files.wordpress.com/2021/04/r8.jpg?w=300",
  "16035": "https://hallofheroeshome.files.wordpress.com/2021/04/r10.jpg?w=300",
  "16036": "https://hallofheroeshome.files.wordpress.com/2021/04/r11.jpg?w=300",
  "16037": "https://hallofheroeshome.files.wordpress.com/2021/04/r12.jpg?w=300",
  "16038": "https://hallofheroeshome.files.wordpress.com/2021/04/r13.jpg?w=300",
  "16039": "https://hallofheroeshome.files.wordpress.com/2021/04/r15.jpg?w=300",
  "16040": "https://hallofheroeshome.files.wordpress.com/2021/04/z1-1.jpg?w=300",
  "16043": "https://hallofheroeshome.files.wordpress.com/2021/04/z4-1.jpg?w=300",
  "16045": "https://hallofheroeshome.files.wordpress.com/2021/04/z6-1.jpg?w=300",
  "16046": "https://hallofheroeshome.files.wordpress.com/2021/04/z7-1.jpg?w=300",
  "16047": "https://hallofheroeshome.files.wordpress.com/2021/04/z8-1.jpg?w=300",
  "16048": "https://hallofheroeshome.files.wordpress.com/2021/04/z9-1.jpg?w=300",
  "16052": "https://hallofheroeshome.files.wordpress.com/2021/04/z13-1.jpg?w=300",
  "16053": "https://hallofheroeshome.files.wordpress.com/2021/04/n0.jpg?w=300",
  "16054": "https://hallofheroeshome.files.wordpress.com/2021/04/n1-1.jpg?w=300",
  "16055": "https://hallofheroeshome.files.wordpress.com/2021/04/n2-1.jpg?w=300",
  "16056": "https://hallofheroeshome.files.wordpress.com/2021/04/n3-1.jpg?w=300",
  "16057": "https://hallofheroeshome.files.wordpress.com/2021/04/n4-1.jpg?w=300",

  // Brotherhood of Badoon
  "16058": "https://hallofheroeshome.files.wordpress.com/2021/04/d1.jpg?w=300",
  "16059": "https://hallofheroeshome.files.wordpress.com/2021/04/d2.jpg?w=300",
  "16060": "https://hallofheroeshome.files.wordpress.com/2021/04/d3.jpg?w=300",
  "16061": "https://hallofheroeshome.files.wordpress.com/2021/04/d4a.jpg?w=300",
  "16061a": "https://hallofheroeshome.files.wordpress.com/2021/04/d4a.jpg?w=300",
  "16061_double_sided_back": "https://hallofheroeshome.files.wordpress.com/2021/04/d4b.jpg?w=300",
  "16061b": "https://hallofheroeshome.files.wordpress.com/2021/04/d4b.jpg?w=300",
  "16062": "https://hallofheroeshome.files.wordpress.com/2021/04/d5a.jpg?w=300",
  "16062a": "https://hallofheroeshome.files.wordpress.com/2021/04/d5a.jpg?w=300",
  "16062_double_sided_back": "https://hallofheroeshome.files.wordpress.com/2021/04/d5b.jpg?w=300",
  "16062b": "https://hallofheroeshome.files.wordpress.com/2021/04/d5b.jpg?w=300",
  "16063": "https://hallofheroeshome.files.wordpress.com/2021/04/d6.jpg?w=300",
  "16064": "https://hallofheroeshome.files.wordpress.com/2021/04/d7.jpg?w=300",
  "16065": "https://hallofheroeshome.files.wordpress.com/2021/04/d8.jpg?w=300",
  "16066": "https://hallofheroeshome.files.wordpress.com/2021/04/d10.jpg?w=300",
  "16067": "https://hallofheroeshome.files.wordpress.com/2021/04/d11.jpg?w=300",
  "16068": "https://hallofheroeshome.files.wordpress.com/2021/04/d12.jpg?w=300",
  "16069": "https://hallofheroeshome.files.wordpress.com/2021/04/d13.jpg?w=300",

  // Collector I
  "16070": "https://hallofheroeshome.files.wordpress.com/2021/04/c1-1.jpg?w=300",
  "16071": "https://hallofheroeshome.files.wordpress.com/2021/04/c2-1.jpg?w=300",
  "16072": "https://hallofheroeshome.files.wordpress.com/2021/04/c3-1.jpg?w=300",
  "16073a": "https://hallofheroeshome.files.wordpress.com/2021/04/c4a.jpg?h=300",
  "16073b": "https://hallofheroeshome.files.wordpress.com/2021/04/c4b.jpg?h=300",
  "16074": "https://hallofheroeshome.files.wordpress.com/2021/04/c5-1.jpg?w=300",
  "16075": "https://hallofheroeshome.files.wordpress.com/2021/04/c6-1.jpg?w=300",
  "16076": "https://hallofheroeshome.files.wordpress.com/2021/04/c7-1.jpg?w=300",
  "16077": "https://hallofheroeshome.files.wordpress.com/2021/04/c9-1.jpg?w=300",
  "16078": "https://hallofheroeshome.files.wordpress.com/2021/04/c11-1.jpg?w=300",
  "16079": "https://hallofheroeshome.files.wordpress.com/2021/04/c13-1.jpg?w=300",

  // Collector II
  "16080a": "https://hallofheroeshome.files.wordpress.com/2021/04/e1a.jpg?w=300",
  "16080b": "https://hallofheroeshome.files.wordpress.com/2021/04/e1b.jpg?w=300",
  "16081a": "https://hallofheroeshome.files.wordpress.com/2021/04/e2a.jpg?w=300",
  "16081b": "https://hallofheroeshome.files.wordpress.com/2021/04/e2b.jpg?w=300",
  "16082a": "https://hallofheroeshome.files.wordpress.com/2021/04/e3a.jpg?h=300",
  "16082b": "https://hallofheroeshome.files.wordpress.com/2021/04/e3b.jpg?h=300",
  "16083a": "https://hallofheroeshome.files.wordpress.com/2021/04/e4a.jpg?h=300",
  "16083b": "https://hallofheroeshome.files.wordpress.com/2021/04/e4b.jpg?h=300",
  "16084a": "https://hallofheroeshome.files.wordpress.com/2021/04/e5a.jpg?h=300",
  "16084b": "https://hallofheroeshome.files.wordpress.com/2021/04/e5b.jpg?h=300",
  "16085a": "https://hallofheroeshome.files.wordpress.com/2021/04/e6.jpg?w=300",
  "16085b": "https://hallofheroeshome.files.wordpress.com/2021/04/z1-2.jpg?w=300",
  "16086": "https://hallofheroeshome.files.wordpress.com/2021/04/e7.jpg?w=300",
  "16087": "https://hallofheroeshome.files.wordpress.com/2021/04/e10.jpg?w=300",

  // Nebula
  "16088": "https://hallofheroeshome.files.wordpress.com/2021/04/n1-2.jpg?w=300",
  "16089": "https://hallofheroeshome.files.wordpress.com/2021/04/n2-2.jpg?w=300",
  "16090": "https://hallofheroeshome.files.wordpress.com/2021/04/n3-2.jpg?w=300",
  "16091a": "https://hallofheroeshome.files.wordpress.com/2021/04/n4a.jpg?h=300",
  "16091b": "https://hallofheroeshome.files.wordpress.com/2021/04/n4b.jpg?h=300",
  "16092a": "https://hallofheroeshome.files.wordpress.com/2021/04/n5-2.jpg?h=300",
  "16092b": "https://hallofheroeshome.files.wordpress.com/2021/04/n5b.jpg?h=300",
  "16093": "https://hallofheroeshome.files.wordpress.com/2021/04/n6.jpg?w=300",
  "16094": "https://hallofheroeshome.files.wordpress.com/2021/04/n7.jpg?w=300",
  "16095": "https://hallofheroeshome.files.wordpress.com/2021/04/n9.jpg?w=300",
  "16096": "https://hallofheroeshome.files.wordpress.com/2021/04/n10.jpg?w=300",
  "16097": "https://hallofheroeshome.files.wordpress.com/2021/04/n11.jpg?w=300",
  "16098": "https://hallofheroeshome.files.wordpress.com/2021/04/n13.jpg?w=300",
  "16099": "https://hallofheroeshome.files.wordpress.com/2021/04/n15.jpg?h=300",
  "16100": "https://hallofheroeshome.files.wordpress.com/2021/04/n17.jpg?w=300",
  "16101": "https://hallofheroeshome.files.wordpress.com/2021/04/n19.jpg?w=300",
  "16102": "https://hallofheroeshome.files.wordpress.com/2021/04/n21.jpg?w=300",

  // Ronan
  "16103": "https://hallofheroeshome.files.wordpress.com/2021/04/r1-1.jpg?w=300",
  "16104": "https://hallofheroeshome.files.wordpress.com/2021/04/r2-1.jpg?w=300",
  "16105": "https://hallofheroeshome.files.wordpress.com/2021/04/r3-1.jpg?w=300",
  "16106a": "https://hallofheroeshome.files.wordpress.com/2021/04/r4a.jpg?w=300",
  "16106b": "https://hallofheroeshome.files.wordpress.com/2021/04/r4b.jpg?w=300",
  "16107a": "https://hallofheroeshome.files.wordpress.com/2021/04/r5a.jpg?w=300",
  "16107b": "https://hallofheroeshome.files.wordpress.com/2021/04/r5b.jpg?w=300",
  "16108": "https://hallofheroeshome.files.wordpress.com/2021/04/r6-1.jpg?w=300",
  "16109": "https://hallofheroeshome.files.wordpress.com/2021/04/r7-1.jpg?w=300",
  "16110": "https://hallofheroeshome.files.wordpress.com/2021/04/r8-1.jpg?w=300",
  "16111": "https://hallofheroeshome.files.wordpress.com/2021/04/r10-1.jpg?h=300",
  "16112": "https://hallofheroeshome.files.wordpress.com/2021/04/r11-1.jpg?h=300",
  "16113": "https://hallofheroeshome.files.wordpress.com/2021/04/r13-1.jpg?h=300",
  "16114": "https://hallofheroeshome.files.wordpress.com/2021/04/r14-1.jpg?w=300",
  "16115": "https://hallofheroeshome.files.wordpress.com/2021/04/r16.jpg?w=300",
  "16116": "https://hallofheroeshome.files.wordpress.com/2021/04/r18.jpg?w=300",

  // Band of Badoon
  "16117": "https://hallofheroeshome.files.wordpress.com/2021/04/bb1.jpg?w=300",
  "16118": "https://hallofheroeshome.files.wordpress.com/2021/04/bb3.jpg?w=300",
  "16119": "https://hallofheroeshome.files.wordpress.com/2021/04/bb6.jpg?w=300",
  "16120": "https://hallofheroeshome.files.wordpress.com/2021/04/bb7.jpg?w=300",
  "16121": "https://hallofheroeshome.files.wordpress.com/2021/04/bb9.jpg?w=300",

  // Galactic Artifacts
  "16122": "https://hallofheroeshome.files.wordpress.com/2021/04/ga1.jpg?w=300",
  "16123": "https://hallofheroeshome.files.wordpress.com/2021/04/ga2.jpg?w=300",
  "16124": "https://hallofheroeshome.files.wordpress.com/2021/04/ga3.jpg?w=300",
  "16125": "https://hallofheroeshome.files.wordpress.com/2021/04/ga4.jpg?w=300",
  "16126": "https://hallofheroeshome.files.wordpress.com/2021/04/ga5.jpg?w=300",
  "16127": "https://hallofheroeshome.files.wordpress.com/2021/04/ga6.jpg?h=300",
  "16128": "https://hallofheroeshome.files.wordpress.com/2021/04/ga7.jpg?h=300",
  "16129": "https://hallofheroeshome.files.wordpress.com/2021/04/ga8.jpg?h=300",
  "16130": "https://hallofheroeshome.files.wordpress.com/2021/04/ga9.jpg?h=300",

  // Kree Militant
  "16131": "https://hallofheroeshome.files.wordpress.com/2021/04/k1.jpg?w=300",
  "16132": "https://hallofheroeshome.files.wordpress.com/2021/04/k2.jpg?w=300",
  "16133": "https://hallofheroeshome.files.wordpress.com/2021/04/k5.jpg?w=300",
  "16134": "https://hallofheroeshome.files.wordpress.com/2021/04/k7.jpg?w=300",

  // Menagerie Medley
  "16135": "https://hallofheroeshome.files.wordpress.com/2021/04/mm1.jpg?w=300",
  "16136": "https://hallofheroeshome.files.wordpress.com/2021/04/mm5.jpg?w=300",
  "16137": "https://hallofheroeshome.files.wordpress.com/2021/04/mm8.jpg?w=300",

  // Space Pirates
  "16138": "https://hallofheroeshome.files.wordpress.com/2021/04/sp1.jpg?w=300",
  "16139": "https://hallofheroeshome.files.wordpress.com/2021/04/sp2.jpg?w=300",
  "16140": "https://hallofheroeshome.files.wordpress.com/2021/04/sp6.jpg?h=300",
  "16141": "https://hallofheroeshome.files.wordpress.com/2021/04/sp7.jpg?w=300",

  // Ship Command
  "16142": "https://hallofheroeshome.files.wordpress.com/2021/04/sc1.jpg?w=300",
  "16143": "https://hallofheroeshome.files.wordpress.com/2021/04/sc2.jpg?w=300",
  "16144": "https://hallofheroeshome.files.wordpress.com/2021/04/sc3.jpg?w=300",
  "16145": "https://hallofheroeshome.files.wordpress.com/2021/04/sc4.jpg?w=300",
  "16146": "https://hallofheroeshome.files.wordpress.com/2021/04/sc5.jpg?w=300",
  "16147": "https://hallofheroeshome.files.wordpress.com/2021/04/sc6.jpg?w=300",
  "16148": "https://hallofheroeshome.files.wordpress.com/2021/04/sc7.jpg?w=300",

  // Power Stone
  "16149": "https://hallofheroeshome.files.wordpress.com/2021/04/ps.jpg?w=300",
};

export default MISSING_CARD_IMAGE_MAP;
