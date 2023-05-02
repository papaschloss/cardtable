const MISSING_CARD_IMAGE_MAP: { [key: string]: string } = {
  // Spectrum
  "21001a": "https://hallofheroeshome.files.wordpress.com/2021/08/m0b.jpg?w=300",
  "21001b": "https://hallofheroeshome.files.wordpress.com/2021/08/m0a.jpg?w=300",
  "21002": "https://hallofheroeshome.files.wordpress.com/2021/08/m1.jpg?w=300",
  "21003": "https://hallofheroeshome.files.wordpress.com/2021/08/m2.jpg?w=300",
  "21004": "https://hallofheroeshome.files.wordpress.com/2021/08/m3.jpg?w=300",
  "21005": "https://hallofheroeshome.files.wordpress.com/2021/08/m4.jpg?w=300",
  "21006": "https://hallofheroeshome.files.wordpress.com/2021/08/m5.jpg?w=300",
  "21007": "https://hallofheroeshome.files.wordpress.com/2021/08/m7.jpg?w=300",
  "21008": "https://hallofheroeshome.files.wordpress.com/2021/08/m10.jpg?w=300",
  "21009": "https://hallofheroeshome.files.wordpress.com/2021/08/m13.jpg?w=300",
  "21010": "https://hallofheroeshome.files.wordpress.com/2021/08/m16.jpg?w=300",
  "21011": "https://hallofheroeshome.files.wordpress.com/2021/08/a1.jpg?w=300",
  "21012": "https://hallofheroeshome.files.wordpress.com/2021/08/a2.jpg?w=300",
  "21013": "https://hallofheroeshome.files.wordpress.com/2021/08/a3.jpg?w=300",
  "21014": "https://hallofheroeshome.files.wordpress.com/2021/08/a4.jpg?w=300",
  "21015": "https://hallofheroeshome.files.wordpress.com/2021/08/a5.jpg?w=300",
  "21016": "https://hallofheroeshome.files.wordpress.com/2021/08/a6.jpg?w=300",
  "21017": "https://hallofheroeshome.files.wordpress.com/2021/08/a7.jpg?w=300",
  "21018": "https://hallofheroeshome.files.wordpress.com/2021/08/a8.jpg?w=300",
  "21019": "https://hallofheroeshome.files.wordpress.com/2021/08/a9.jpg?w=300",
  "21020": "https://hallofheroeshome.files.wordpress.com/2021/08/a10.jpg?w=300",
  "21021": "https://hallofheroeshome.files.wordpress.com/2021/08/a11.jpg?w=300",
  "21022": "https://hallofheroeshome.files.wordpress.com/2021/08/a12.jpg?w=300",
  "21023": "https://hallofheroeshome.files.wordpress.com/2021/08/a13.jpg?w=300",
  "21024": "https://hallofheroeshome.files.wordpress.com/2021/08/a14.jpg?w=300",
  "21025": "https://hallofheroeshome.files.wordpress.com/2021/08/a15.jpg?w=300",
  "21026": "https://hallofheroeshome.files.wordpress.com/2021/08/n00.jpg?w=300",
  "21027": "https://hallofheroeshome.files.wordpress.com/2021/08/n2.jpg?w=300",
  "21028": "https://hallofheroeshome.files.wordpress.com/2021/08/n3.jpg?w=300",
  "21029": "https://hallofheroeshome.files.wordpress.com/2021/08/n5.jpg?w=300",
  "21030": "https://hallofheroeshome.files.wordpress.com/2021/08/n6.jpg?w=300",

  //Adam Warlock
  "21031a": "https://hallofheroeshome.files.wordpress.com/2021/08/a0b.jpg?w=300",
  "21031b": "https://hallofheroeshome.files.wordpress.com/2021/08/a0a.jpg?w=300",
  "21032": "https://hallofheroeshome.files.wordpress.com/2021/08/a1-1.jpg?w=300",
  "21033": "https://hallofheroeshome.files.wordpress.com/2021/08/a2-1.jpg?w=300",
  "21034": "https://hallofheroeshome.files.wordpress.com/2021/08/a3-1.jpg?w=300",
  "21035": "https://hallofheroeshome.files.wordpress.com/2021/08/a4-1.jpg?w=300",
  "21036": "https://hallofheroeshome.files.wordpress.com/2021/08/a5-1.jpg?w=300",
  "21037": "https://hallofheroeshome.files.wordpress.com/2021/08/a7-1.jpg?w=300",
  "21038": "https://hallofheroeshome.files.wordpress.com/2021/08/a9-1.jpg?w=300",
  "21039": "https://hallofheroeshome.files.wordpress.com/2021/08/a12-1.jpg?w=300",
  "21040": "https://hallofheroeshome.files.wordpress.com/2021/08/a14-1.jpg?w=300",
  "21041": "https://hallofheroeshome.files.wordpress.com/2021/08/b1.jpg?w=300",
  "21042": "https://hallofheroeshome.files.wordpress.com/2021/08/b2.jpg?w=300",
  "21043": "https://hallofheroeshome.files.wordpress.com/2021/08/b3.jpg?w=300",
  "21044": "https://hallofheroeshome.files.wordpress.com/2021/08/b4.jpg?w=300",
  "21045": "https://hallofheroeshome.files.wordpress.com/2021/08/b5.jpg?w=300",
  "21046": "https://hallofheroeshome.files.wordpress.com/2021/08/b6.jpg?w=300",
  "21047": "https://hallofheroeshome.files.wordpress.com/2021/08/b7.jpg?w=300",
  "21048": "https://hallofheroeshome.files.wordpress.com/2021/08/b8.jpg?w=300",
  "21049": "https://hallofheroeshome.files.wordpress.com/2021/08/b9.jpg?w=300",
  "21050": "https://hallofheroeshome.files.wordpress.com/2021/08/b10.jpg?w=300",
  "21051": "https://hallofheroeshome.files.wordpress.com/2021/08/b11.jpg?w=300",
  "21052": "https://hallofheroeshome.files.wordpress.com/2021/08/b12.jpg?w=300",
  "21053": "https://hallofheroeshome.files.wordpress.com/2021/08/b13.jpg?w=300",
  "21054": "https://hallofheroeshome.files.wordpress.com/2021/08/b14.jpg?w=300",
  "21055": "https://hallofheroeshome.files.wordpress.com/2021/08/b15.jpg?w=300",
  "21056": "https://hallofheroeshome.files.wordpress.com/2021/08/b16.jpg?w=300",
  "21057": "https://hallofheroeshome.files.wordpress.com/2021/08/b17.jpg?w=300",
  "21058": "https://hallofheroeshome.files.wordpress.com/2021/08/b18.jpg?w=300",
  "21059": "https://hallofheroeshome.files.wordpress.com/2021/08/b19.jpg?w=300",
  "21060": "https://hallofheroeshome.files.wordpress.com/2021/08/b20.jpg?w=300",
  "21061": "https://hallofheroeshome.files.wordpress.com/2021/08/b21.jpg?w=300",
  "21062": "https://hallofheroeshome.files.wordpress.com/2021/08/b22.jpg?w=300",
  "21063": "https://hallofheroeshome.files.wordpress.com/2021/08/b23.jpg?w=300",
  "21064": "https://hallofheroeshome.files.wordpress.com/2021/08/b24.jpg?w=300",
  "21065": "https://hallofheroeshome.files.wordpress.com/2021/08/b25.jpg?w=300",
  "21066": "https://hallofheroeshome.files.wordpress.com/2021/08/n0.jpg?w=300",
  "21067": "https://hallofheroeshome.files.wordpress.com/2021/08/n1-1.jpg?w=300",
  "21068": "https://hallofheroeshome.files.wordpress.com/2021/08/n2-1.jpg?w=300",
  "21069": "https://hallofheroeshome.files.wordpress.com/2021/08/n3-1.jpg?w=300",
  "21070": "https://hallofheroeshome.files.wordpress.com/2021/08/n5-1.jpg?w=300",

  // Ebony Maw
  "21071": "https://hallofheroeshome.files.wordpress.com/2021/08/e1.jpg?w=300",
  "21072": "https://hallofheroeshome.files.wordpress.com/2021/08/e2.jpg?w=300",
  "21073": "https://hallofheroeshome.files.wordpress.com/2021/08/e3.jpg?w=300",
  "21074": "https://hallofheroeshome.files.wordpress.com/2021/08/e4a.jpg?h=300",
  "21074_double_sided_back": "https://hallofheroeshome.files.wordpress.com/2021/08/e4b.jpg?h=300",
  "21075": "https://hallofheroeshome.files.wordpress.com/2021/08/e5a.jpg?h=300",
  "21075_double_sided_back": "https://hallofheroeshome.files.wordpress.com/2021/08/e5b.jpg?h=300",
  "21076": "https://hallofheroeshome.files.wordpress.com/2021/08/e6.jpg?w=300",
  "21077": "https://hallofheroeshome.files.wordpress.com/2021/08/e8.jpg?w=300",
  "21078": "https://hallofheroeshome.files.wordpress.com/2021/08/e10.jpg?w=300",
  "21079": "https://hallofheroeshome.files.wordpress.com/2021/08/e12.jpg?w=300",
  "21080": "https://hallofheroeshome.files.wordpress.com/2021/08/e14.jpg?w=300",
  "21081": "https://hallofheroeshome.files.wordpress.com/2021/08/e16.jpg?w=300",
  "21082": "https://hallofheroeshome.files.wordpress.com/2021/08/e19.jpg?w=300",
  "21083": "https://hallofheroeshome.files.wordpress.com/2021/08/e20.jpg?w=300",
  "21084": "https://hallofheroeshome.files.wordpress.com/2021/08/e21.jpg?w=300",

  // Black Order
  "21085": "https://hallofheroeshome.files.wordpress.com/2021/08/b1-1.jpg?w=300",
  "21086": "https://hallofheroeshome.files.wordpress.com/2021/08/b2-1.jpg?w=300",
  "21087": "https://hallofheroeshome.files.wordpress.com/2021/08/b3-1.jpg?w=300",
  "21088": "https://hallofheroeshome.files.wordpress.com/2021/08/b4-1.jpg?w=300",

  // Armies of Titan
  "21089": "https://hallofheroeshome.files.wordpress.com/2021/08/a1-2.jpg?w=300",
  "21090": "https://hallofheroeshome.files.wordpress.com/2021/08/a3-2.jpg?w=300",
  "21091": "https://hallofheroeshome.files.wordpress.com/2021/08/a5-2.jpg?w=300",

  // Tower Defense
  "21092": "https://hallofheroeshome.files.wordpress.com/2021/08/t1.jpg?w=300",
  "21093": "https://hallofheroeshome.files.wordpress.com/2021/08/t2.jpg?w=300",
  "21094": "https://hallofheroeshome.files.wordpress.com/2021/08/t3.jpg?w=300",
  "21095": "https://hallofheroeshome.files.wordpress.com/2021/08/t4.jpg?w=300",
  "21096": "https://hallofheroeshome.files.wordpress.com/2021/08/t5.jpg?w=300",
  "21097": "https://hallofheroeshome.files.wordpress.com/2021/08/t6.jpg?w=300",
  "21098": "https://hallofheroeshome.files.wordpress.com/2021/08/t7a.jpg?h=300",
  "21098_double_sided_back": "https://hallofheroeshome.files.wordpress.com/2021/08/t7b.jpg?h=300",
  "21099": "https://hallofheroeshome.files.wordpress.com/2021/08/t8a.jpg?h=300",
  "21099_double_sided_back": "https://hallofheroeshome.files.wordpress.com/2021/08/t8b.jpg?h=300",
  "21100": "https://hallofheroeshome.files.wordpress.com/2021/08/t9a.jpg?h=300",
  "21100_double_sided_back": "https://hallofheroeshome.files.wordpress.com/2021/08/t9b.jpg?h=300",
  "21101": "https://hallofheroeshome.files.wordpress.com/2021/08/t10.jpg?w=300",
  "21102": "https://hallofheroeshome.files.wordpress.com/2021/08/t11.jpg?w=300",
  "21103": "https://hallofheroeshome.files.wordpress.com/2021/08/t15.jpg?w=300",
  "21104": "https://hallofheroeshome.files.wordpress.com/2021/08/t16.jpg?w=300",
  "21105": "https://hallofheroeshome.files.wordpress.com/2021/08/t17.jpg?w=300",
  "21106": "https://hallofheroeshome.files.wordpress.com/2021/08/t19.jpg?w=300",
  "21107": "https://hallofheroeshome.files.wordpress.com/2021/08/t21.jpg?w=300",
  "21108": "https://hallofheroeshome.files.wordpress.com/2021/08/t23.jpg?w=300",
  "21109": "https://hallofheroeshome.files.wordpress.com/2021/08/t24.jpg?w=300",
  "21110": "https://hallofheroeshome.files.wordpress.com/2021/08/t26.jpg?w=300",

  // Thanos
  "21111": "https://hallofheroeshome.files.wordpress.com/2021/08/t1-1.jpg?w=300",
  "21112": "https://hallofheroeshome.files.wordpress.com/2021/08/t2-1.jpg?w=300",
  "21113": "https://hallofheroeshome.files.wordpress.com/2021/08/t3-1.jpg?w=300",
  "21114a": "https://hallofheroeshome.files.wordpress.com/2021/08/t4a.jpg?w=300",
  "21114b": "https://hallofheroeshome.files.wordpress.com/2021/08/t4b.jpg?w=300",
  "21115a": "https://hallofheroeshome.files.wordpress.com/2021/08/t5a.jpg?w=300",
  "21115b": "https://hallofheroeshome.files.wordpress.com/2021/08/t5b.jpg?w=300",
  "21116": "https://hallofheroeshome.files.wordpress.com/2021/08/t6-1.jpg?w=300",
  "21117": "https://hallofheroeshome.files.wordpress.com/2021/08/t7.jpg?w=300",
  "21118": "https://hallofheroeshome.files.wordpress.com/2021/08/t8.jpg?w=300",
  "21119": "https://hallofheroeshome.files.wordpress.com/2021/08/t9.jpg?w=300",
  "21120": "https://hallofheroeshome.files.wordpress.com/2021/08/t11-1.jpg?w=300",
  "21121": "https://hallofheroeshome.files.wordpress.com/2021/08/t13-1.jpg?w=300",
  "21122": "https://hallofheroeshome.files.wordpress.com/2021/08/t15-1.jpg?w=300",
  "21123": "https://hallofheroeshome.files.wordpress.com/2021/08/t17-1.jpg?w=300",
  "21124": "https://hallofheroeshome.files.wordpress.com/2021/08/t19-1.jpg?w=300",

  // Children of Thanos
  "21125": "https://hallofheroeshome.files.wordpress.com/2021/08/c1.jpg?w=300",
  "21126": "https://hallofheroeshome.files.wordpress.com/2021/08/c2-1.jpg?w=300",
  "21127": "https://hallofheroeshome.files.wordpress.com/2021/08/c3.jpg?w=300",
  "21128": "https://hallofheroeshome.files.wordpress.com/2021/08/c4-1.jpg?w=300",

  // Infinity Guantlet
  "21129": "https://hallofheroeshome.files.wordpress.com/2021/08/i1.jpg?w=300",
  "21130": "https://hallofheroeshome.files.wordpress.com/2021/08/i2.jpg?w=300",
  "21131": "https://hallofheroeshome.files.wordpress.com/2021/08/i3.jpg?w=300",
  "21132": "https://hallofheroeshome.files.wordpress.com/2021/08/i4.jpg?w=300",
  "21133": "https://hallofheroeshome.files.wordpress.com/2021/08/i5.jpg?w=300",
  "21134": "https://hallofheroeshome.files.wordpress.com/2021/08/i6.jpg?w=300",
  "21135": "https://hallofheroeshome.files.wordpress.com/2021/08/i7.jpg?w=300",

  // Hela
  "21136a": "https://hallofheroeshome.files.wordpress.com/2021/08/h1a.jpg?w=300",
  "21136b": "https://hallofheroeshome.files.wordpress.com/2021/08/h1b.jpg?w=300",
  "21137a": "https://hallofheroeshome.files.wordpress.com/2021/08/h2a.jpg?w=300",
  "21137b": "https://hallofheroeshome.files.wordpress.com/2021/08/h2b.jpg?w=300",
  "21138": "https://hallofheroeshome.files.wordpress.com/2021/08/h3a.jpg?h=300",
  "21138_double_sided_back": "https://hallofheroeshome.files.wordpress.com/2021/08/h3b.jpg?h=300",
  "21139a": "https://hallofheroeshome.files.wordpress.com/2021/08/h4a.jpg?w=300",
  "21139b": "https://hallofheroeshome.files.wordpress.com/2021/08/h4b.jpg?w=300",
  "21140": "https://hallofheroeshome.files.wordpress.com/2021/08/h5.jpg?h=300",
  "21141": "https://hallofheroeshome.files.wordpress.com/2021/08/h6.jpg?h=300",
  "21142": "https://hallofheroeshome.files.wordpress.com/2021/08/h7.jpg?h=300",
  "21143": "https://hallofheroeshome.files.wordpress.com/2021/08/h8.jpg?w=300",
  "21144": "https://hallofheroeshome.files.wordpress.com/2021/08/h9.jpg?w=300",
  "21145": "https://hallofheroeshome.files.wordpress.com/2021/08/h10.jpg?w=300",
  "21146": "https://hallofheroeshome.files.wordpress.com/2021/08/h11.jpg?w=300",
  "21147": "https://hallofheroeshome.files.wordpress.com/2021/08/h12.jpg?w=300",
  "21148": "https://hallofheroeshome.files.wordpress.com/2021/08/h13.jpg?w=300",
  "21149": "https://hallofheroeshome.files.wordpress.com/2021/08/h14.jpg?w=300",
  "21150": "https://hallofheroeshome.files.wordpress.com/2021/08/h16.jpg?w=300",
  "21151": "https://hallofheroeshome.files.wordpress.com/2021/08/h18.jpg?w=300",

  // Legions of Hel
  "21152": "https://hallofheroeshome.files.wordpress.com/2021/08/l1-1.jpg?w=300",
  "21153": "https://hallofheroeshome.files.wordpress.com/2021/08/l3-1.jpg?w=300",
  "21154": "https://hallofheroeshome.files.wordpress.com/2021/08/l5-1.jpg?w=300",
  "21155": "https://hallofheroeshome.files.wordpress.com/2021/08/l6.jpg?w=300",

  // Frost Giants
  "21156": "https://hallofheroeshome.files.wordpress.com/2021/08/f1.jpg?w=300",
  "21157": "https://hallofheroeshome.files.wordpress.com/2021/08/f2.jpg?w=300",
  "21158": "https://hallofheroeshome.files.wordpress.com/2021/08/f4.jpg?w=300",
  "21159": "https://hallofheroeshome.files.wordpress.com/2021/08/f6.jpg?w=300",

  // Loki
  "21160": "https://hallofheroeshome.files.wordpress.com/2021/08/l1.jpg?w=300",
  "21161": "https://hallofheroeshome.files.wordpress.com/2021/08/l2.jpg?w=300",
  "21162": "https://hallofheroeshome.files.wordpress.com/2021/08/l3.jpg?w=300",
  "21163": "https://hallofheroeshome.files.wordpress.com/2021/08/l4.jpg?w=300",
  "21164": "https://hallofheroeshome.files.wordpress.com/2021/08/l5.jpg?w=300",
  "21165a": "https://hallofheroeshome.files.wordpress.com/2021/08/l6a.jpg?w=300",
  "21165b": "https://hallofheroeshome.files.wordpress.com/2021/08/l6b.jpg?w=300",
  "21166": "https://hallofheroeshome.files.wordpress.com/2021/08/l7.jpg?w=300",
  "21167": "https://hallofheroeshome.files.wordpress.com/2021/08/l8.jpg?w=300",
  "21168": "https://hallofheroeshome.files.wordpress.com/2021/08/l9.jpg?w=300",
  "21169": "https://hallofheroeshome.files.wordpress.com/2021/08/l10.jpg?w=300",
  "21170": "https://hallofheroeshome.files.wordpress.com/2021/08/l11.jpg?w=300",
  "21171": "https://hallofheroeshome.files.wordpress.com/2021/08/l12.jpg?w=300",
  "21172": "https://hallofheroeshome.files.wordpress.com/2021/08/l13.jpg?w=300",
  "21173": "https://hallofheroeshome.files.wordpress.com/2021/08/l14.jpg?w=300",
  "21174": "https://hallofheroeshome.files.wordpress.com/2021/08/l15.jpg?w=300",
  "21175": "https://hallofheroeshome.files.wordpress.com/2021/08/l17.jpg?w=300",
  "21176": "https://hallofheroeshome.files.wordpress.com/2021/08/l19.jpg?w=300",

  // Enchantress
  "21177": "https://hallofheroeshome.files.wordpress.com/2021/08/e1-1.jpg?w=300",
  "21178": "https://hallofheroeshome.files.wordpress.com/2021/08/e2-1.jpg?w=300",
  "21179": "https://hallofheroeshome.files.wordpress.com/2021/08/e4.jpg?w=300",

  // MTS Campaign
  "21180a": "https://hallofheroeshome.files.wordpress.com/2021/08/c1a.jpg?w=300",
  "21180b": "https://hallofheroeshome.files.wordpress.com/2021/08/c1b.jpg?w=300",
  "21181": "https://hallofheroeshome.files.wordpress.com/2021/08/c2.jpg?w=300",
  "21182a": "https://hallofheroeshome.files.wordpress.com/2021/08/c3a.jpg?w=300",
  "21182b": "https://hallofheroeshome.files.wordpress.com/2021/08/c3b.jpg?w=300",
  "21183": "https://hallofheroeshome.files.wordpress.com/2021/08/c4.jpg?w=300",
  "21184a": "https://hallofheroeshome.files.wordpress.com/2021/08/c8a.jpg?w=300",
  "21184b": "https://hallofheroeshome.files.wordpress.com/2021/08/c8b.jpg?w=300",
  "21185": "https://hallofheroeshome.files.wordpress.com/2021/08/c9.jpg?w=300",
  "21186a": "https://hallofheroeshome.files.wordpress.com/2021/08/c13a.jpg?w=300",
  "21186b": "https://hallofheroeshome.files.wordpress.com/2021/08/c13b.jpg?w=300",
  "21187a": "https://hallofheroeshome.files.wordpress.com/2021/08/c14a.jpg?w=300",
  "21187b": "https://hallofheroeshome.files.wordpress.com/2021/08/c14b.jpg?w=300",
  "21188": "https://hallofheroeshome.files.wordpress.com/2021/08/c18.jpg?w=300",
  "21189a": "https://hallofheroeshome.files.wordpress.com/2021/08/c19a.jpg?w=300",
  "21189b": "https://hallofheroeshome.files.wordpress.com/2021/08/c19b.jpg?w=300",
  "21190": "https://hallofheroeshome.files.wordpress.com/2021/08/c20.jpg?w=300",
  "21191": "https://hallofheroeshome.files.wordpress.com/2021/08/c21.jpg?w=300",
  "21192": "https://hallofheroeshome.files.wordpress.com/2021/08/c22.jpg?w=300",
  "21193": "https://hallofheroeshome.files.wordpress.com/2021/08/c23.jpg?w=300",
};

export default MISSING_CARD_IMAGE_MAP;
