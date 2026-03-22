// ═══════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════
let MODELS = [{"id":1,"gamintojas":"Daikin","modelis":"FTXC25C","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A++","plotas_m2":20,"triuksmas_dB":19,"kaina_EUR":450,"aukstis_cm":28.5,"plotis_cm":77.0,"storis_cm":19.0},{"id":2,"gamintojas":"Daikin","modelis":"FTXC35C","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A++","plotas_m2":30,"triuksmas_dB":21,"kaina_EUR":520,"aukstis_cm":29.0,"plotis_cm":89.0,"storis_cm":20.5},{"id":3,"gamintojas":"Mitsubishi Electric","modelis":"MSZ-HR25VF","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A++","plotas_m2":20,"triuksmas_dB":20,"kaina_EUR":480,"aukstis_cm":29.0,"plotis_cm":79.0,"storis_cm":21.5},{"id":4,"gamintojas":"Mitsubishi Electric","modelis":"MSZ-HR35VF","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A++","plotas_m2":30,"triuksmas_dB":22,"kaina_EUR":560,"aukstis_cm":30.0,"plotis_cm":99.0,"storis_cm":22.0},{"id":5,"gamintojas":"Mitsubishi Electric","modelis":"MSZ-HR50VF","tipas":"Sieninis vidinis blokas","galia_kW":5.0,"energijos_klase":"A+","plotas_m2":45,"triuksmas_dB":24,"kaina_EUR":680,"aukstis_cm":31.5,"plotis_cm":112.0,"storis_cm":23.5},{"id":6,"gamintojas":"Samsung","modelis":"AR09TXHQASINEU","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A+++","plotas_m2":20,"triuksmas_dB":16,"kaina_EUR":430,"aukstis_cm":27.5,"plotis_cm":78.0,"storis_cm":19.5},{"id":7,"gamintojas":"Samsung","modelis":"AR12TXHQASINEU","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A+++","plotas_m2":30,"triuksmas_dB":18,"kaina_EUR":500,"aukstis_cm":28.5,"plotis_cm":89.0,"storis_cm":20.5},{"id":8,"gamintojas":"LG","modelis":"S09ET.NSJ","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A++","plotas_m2":20,"triuksmas_dB":18,"kaina_EUR":410,"aukstis_cm":28.0,"plotis_cm":80.0,"storis_cm":20.0},{"id":9,"gamintojas":"LG","modelis":"S12ET.NSJ","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A++","plotas_m2":30,"triuksmas_dB":20,"kaina_EUR":490,"aukstis_cm":29.0,"plotis_cm":90.0,"storis_cm":21.0},{"id":10,"gamintojas":"LG","modelis":"S18ET.NSJ","tipas":"Sieninis vidinis blokas","galia_kW":5.0,"energijos_klase":"A+","plotas_m2":45,"triuksmas_dB":22,"kaina_EUR":620,"aukstis_cm":31.0,"plotis_cm":110.0,"storis_cm":23.0},{"id":11,"gamintojas":"Panasonic","modelis":"CS-TZ25WKEW","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A+++","plotas_m2":20,"triuksmas_dB":19,"kaina_EUR":460,"aukstis_cm":28.0,"plotis_cm":79.8,"storis_cm":19.5},{"id":12,"gamintojas":"Panasonic","modelis":"CS-TZ35WKEW","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A+++","plotas_m2":30,"triuksmas_dB":21,"kaina_EUR":540,"aukstis_cm":29.0,"plotis_cm":89.8,"storis_cm":21.0},{"id":13,"gamintojas":"Hitachi","modelis":"RAK-25RXE","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A++","plotas_m2":20,"triuksmas_dB":20,"kaina_EUR":440,"aukstis_cm":29.5,"plotis_cm":80.0,"storis_cm":20.5},{"id":14,"gamintojas":"Hitachi","modelis":"RAK-35RXE","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A++","plotas_m2":30,"triuksmas_dB":22,"kaina_EUR":510,"aukstis_cm":30.0,"plotis_cm":98.0,"storis_cm":22.0},{"id":15,"gamintojas":"Fujitsu","modelis":"ASYG09KETA","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A+++","plotas_m2":20,"triuksmas_dB":19,"kaina_EUR":470,"aukstis_cm":27.5,"plotis_cm":78.0,"storis_cm":19.0},{"id":16,"gamintojas":"Fujitsu","modelis":"ASYG12KETA","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A+++","plotas_m2":30,"triuksmas_dB":21,"kaina_EUR":550,"aukstis_cm":29.0,"plotis_cm":88.0,"storis_cm":20.5},{"id":17,"gamintojas":"Bosch","modelis":"Climate 5000i RAC 2,6-3 IBW","tipas":"Sieninis vidinis blokas","galia_kW":2.6,"energijos_klase":"A++","plotas_m2":22,"triuksmas_dB":22,"kaina_EUR":390,"aukstis_cm":29.0,"plotis_cm":82.0,"storis_cm":20.5},{"id":18,"gamintojas":"Bosch","modelis":"Climate 5000i RAC 3,5-3 IBW","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A++","plotas_m2":30,"triuksmas_dB":24,"kaina_EUR":460,"aukstis_cm":30.0,"plotis_cm":92.0,"storis_cm":21.5},{"id":19,"gamintojas":"Midea","modelis":"MSMABU-09HRDN8","tipas":"Sieninis vidinis blokas","galia_kW":2.6,"energijos_klase":"A++","plotas_m2":22,"triuksmas_dB":20,"kaina_EUR":320,"aukstis_cm":28.5,"plotis_cm":80.0,"storis_cm":20.0},{"id":20,"gamintojas":"Midea","modelis":"MSMABU-12HRDN8","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A++","plotas_m2":30,"triuksmas_dB":22,"kaina_EUR":380,"aukstis_cm":29.5,"plotis_cm":91.0,"storis_cm":21.5},{"id":21,"gamintojas":"Daikin","modelis":"FTXC50C","tipas":"Sieninis vidinis blokas","galia_kW":5.0,"energijos_klase":"A++","plotas_m2":45,"triuksmas_dB":23,"kaina_EUR":620,"aukstis_cm":31.5,"plotis_cm":113.0,"storis_cm":23.0},{"id":22,"gamintojas":"Daikin","modelis":"FTXM25R","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A+++","plotas_m2":20,"triuksmas_dB":19,"kaina_EUR":590,"aukstis_cm":27.5,"plotis_cm":77.0,"storis_cm":18.5},{"id":23,"gamintojas":"Daikin","modelis":"FTXM35R","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A+++","plotas_m2":30,"triuksmas_dB":20,"kaina_EUR":670,"aukstis_cm":28.5,"plotis_cm":88.0,"storis_cm":19.5},{"id":24,"gamintojas":"Daikin","modelis":"FTXM50R","tipas":"Sieninis vidinis blokas","galia_kW":5.0,"energijos_klase":"A+++","plotas_m2":45,"triuksmas_dB":22,"kaina_EUR":750,"aukstis_cm":30.0,"plotis_cm":100.0,"storis_cm":21.0},{"id":25,"gamintojas":"Mitsubishi Electric","modelis":"MSZ-EF25VGKW","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A+++","plotas_m2":20,"triuksmas_dB":19,"kaina_EUR":720,"aukstis_cm":27.0,"plotis_cm":79.8,"storis_cm":22.3},{"id":26,"gamintojas":"Mitsubishi Electric","modelis":"MSZ-EF35VGKW","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A+++","plotas_m2":30,"triuksmas_dB":21,"kaina_EUR":820,"aukstis_cm":29.5,"plotis_cm":87.0,"storis_cm":20.0},{"id":27,"gamintojas":"Samsung","modelis":"AR09TXCAAWKNEU","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A+++","plotas_m2":20,"triuksmas_dB":17,"kaina_EUR":550,"aukstis_cm":28.0,"plotis_cm":79.0,"storis_cm":19.5},{"id":28,"gamintojas":"Samsung","modelis":"AR12TXCAAWKNEU","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A+++","plotas_m2":30,"triuksmas_dB":19,"kaina_EUR":630,"aukstis_cm":29.0,"plotis_cm":89.0,"storis_cm":20.5},{"id":29,"gamintojas":"LG","modelis":"S09EQ.NSJ","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A+++","plotas_m2":20,"triuksmas_dB":17,"kaina_EUR":520,"aukstis_cm":27.5,"plotis_cm":79.0,"storis_cm":19.5},{"id":30,"gamintojas":"LG","modelis":"S12EQ.NSJ","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A+++","plotas_m2":30,"triuksmas_dB":19,"kaina_EUR":600,"aukstis_cm":28.5,"plotis_cm":89.0,"storis_cm":20.5},{"id":31,"gamintojas":"Panasonic","modelis":"CS-TZ50WKEW","tipas":"Sieninis vidinis blokas","galia_kW":5.0,"energijos_klase":"A+++","plotas_m2":45,"triuksmas_dB":22,"kaina_EUR":660,"aukstis_cm":30.5,"plotis_cm":102.0,"storis_cm":22.0},{"id":32,"gamintojas":"Hitachi","modelis":"RAK-50RXE","tipas":"Sieninis vidinis blokas","galia_kW":5.0,"energijos_klase":"A+","plotas_m2":45,"triuksmas_dB":26,"kaina_EUR":620,"aukstis_cm":32.0,"plotis_cm":114.0,"storis_cm":24.0},{"id":33,"gamintojas":"Daikin","modelis":"FTXC71C","tipas":"Sieninis vidinis blokas","galia_kW":7.1,"energijos_klase":"A+","plotas_m2":60,"triuksmas_dB":28,"kaina_EUR":780,"aukstis_cm":33.0,"plotis_cm":126.0,"storis_cm":25.0},{"id":34,"gamintojas":"Mitsubishi Electric","modelis":"MSZ-HR71VF","tipas":"Sieninis vidinis blokas","galia_kW":7.1,"energijos_klase":"A+","plotas_m2":60,"triuksmas_dB":29,"kaina_EUR":850,"aukstis_cm":34.0,"plotis_cm":130.0,"storis_cm":26.0},{"id":35,"gamintojas":"Samsung","modelis":"AR18TXHQASINEU","tipas":"Sieninis vidinis blokas","galia_kW":5.0,"energijos_klase":"A++","plotas_m2":45,"triuksmas_dB":21,"kaina_EUR":620,"aukstis_cm":30.0,"plotis_cm":104.0,"storis_cm":22.5},{"id":36,"gamintojas":"LG","modelis":"S24ET.NSJ","tipas":"Sieninis vidinis blokas","galia_kW":7.0,"energijos_klase":"A+","plotas_m2":60,"triuksmas_dB":26,"kaina_EUR":750,"aukstis_cm":33.5,"plotis_cm":124.0,"storis_cm":24.5},{"id":37,"gamintojas":"Panasonic","modelis":"CS-TZ25ZKEW","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A+++","plotas_m2":20,"triuksmas_dB":18,"kaina_EUR":580,"aukstis_cm":27.5,"plotis_cm":79.8,"storis_cm":19.5},{"id":38,"gamintojas":"Panasonic","modelis":"CS-TZ35ZKEW","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A+++","plotas_m2":30,"triuksmas_dB":20,"kaina_EUR":660,"aukstis_cm":29.0,"plotis_cm":89.8,"storis_cm":21.0},{"id":39,"gamintojas":"Hitachi","modelis":"RAK-25PEC","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A+++","plotas_m2":20,"triuksmas_dB":18,"kaina_EUR":560,"aukstis_cm":28.5,"plotis_cm":79.0,"storis_cm":20.0},{"id":40,"gamintojas":"Hitachi","modelis":"RAK-35PEC","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A+++","plotas_m2":30,"triuksmas_dB":20,"kaina_EUR":640,"aukstis_cm":29.5,"plotis_cm":97.0,"storis_cm":21.5},{"id":41,"gamintojas":"Fujitsu","modelis":"ASYG14KETA","tipas":"Sieninis vidinis blokas","galia_kW":4.0,"energijos_klase":"A+++","plotas_m2":35,"triuksmas_dB":22,"kaina_EUR":620,"aukstis_cm":30.0,"plotis_cm":98.0,"storis_cm":21.5},{"id":42,"gamintojas":"Fujitsu","modelis":"ASYG18KETA","tipas":"Sieninis vidinis blokas","galia_kW":5.0,"energijos_klase":"A++","plotas_m2":45,"triuksmas_dB":24,"kaina_EUR":680,"aukstis_cm":32.0,"plotis_cm":112.0,"storis_cm":23.0},{"id":43,"gamintojas":"Bosch","modelis":"Climate 5000i RAC 5,3-3 IBW","tipas":"Sieninis vidinis blokas","galia_kW":5.3,"energijos_klase":"A++","plotas_m2":48,"triuksmas_dB":26,"kaina_EUR":530,"aukstis_cm":32.0,"plotis_cm":113.0,"storis_cm":23.5},{"id":44,"gamintojas":"Midea","modelis":"MSMABU-18HRDN8","tipas":"Sieninis vidinis blokas","galia_kW":5.0,"energijos_klase":"A++","plotas_m2":45,"triuksmas_dB":24,"kaina_EUR":450,"aukstis_cm":31.0,"plotis_cm":110.0,"storis_cm":22.5},{"id":45,"gamintojas":"Daikin","modelis":"FTXM71R","tipas":"Sieninis vidinis blokas","galia_kW":7.1,"energijos_klase":"A++","plotas_m2":60,"triuksmas_dB":24,"kaina_EUR":850,"aukstis_cm":32.5,"plotis_cm":120.0,"storis_cm":23.5},{"id":46,"gamintojas":"Mitsubishi Electric","modelis":"MSZ-EF50VGKW","tipas":"Sieninis vidinis blokas","galia_kW":5.0,"energijos_klase":"A+++","plotas_m2":45,"triuksmas_dB":22,"kaina_EUR":950,"aukstis_cm":31.5,"plotis_cm":108.0,"storis_cm":22.5},{"id":47,"gamintojas":"LG","modelis":"S18EQ.NSJ","tipas":"Sieninis vidinis blokas","galia_kW":5.0,"energijos_klase":"A+++","plotas_m2":45,"triuksmas_dB":22,"kaina_EUR":660,"aukstis_cm":30.5,"plotis_cm":108.0,"storis_cm":22.0},{"id":48,"gamintojas":"Fujitsu","modelis":"ASYG07KETA","tipas":"Sieninis vidinis blokas","galia_kW":2.0,"energijos_klase":"A+++","plotas_m2":15,"triuksmas_dB":18,"kaina_EUR":430,"aukstis_cm":26.5,"plotis_cm":72.0,"storis_cm":18.5},{"id":49,"gamintojas":"Fujitsu","modelis":"ASYG24KETA","tipas":"Sieninis vidinis blokas","galia_kW":7.0,"energijos_klase":"A++","plotas_m2":60,"triuksmas_dB":25,"kaina_EUR":780,"aukstis_cm":33.0,"plotis_cm":126.0,"storis_cm":24.5},{"id":50,"gamintojas":"Fujitsu","modelis":"ASYG09LMCA","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A++","plotas_m2":20,"triuksmas_dB":20,"kaina_EUR":400,"aukstis_cm":28.5,"plotis_cm":80.0,"storis_cm":20.0},{"id":51,"gamintojas":"Bosch","modelis":"Climate 5000i RAC 5,3-3 IBW","tipas":"Sieninis vidinis blokas","galia_kW":5.3,"energijos_klase":"A++","plotas_m2":48,"triuksmas_dB":26,"kaina_EUR":530,"aukstis_cm":32.0,"plotis_cm":113.0,"storis_cm":23.5},{"id":52,"gamintojas":"Bosch","modelis":"Climate 8000i RAC 2,6-3 IBW","tipas":"Sieninis vidinis blokas","galia_kW":2.6,"energijos_klase":"A+++","plotas_m2":22,"triuksmas_dB":19,"kaina_EUR":520,"aukstis_cm":28.0,"plotis_cm":80.0,"storis_cm":19.5},{"id":53,"gamintojas":"Bosch","modelis":"Climate 8000i RAC 3,5-3 IBW","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A+++","plotas_m2":30,"triuksmas_dB":21,"kaina_EUR":600,"aukstis_cm":29.5,"plotis_cm":92.0,"storis_cm":21.0},{"id":54,"gamintojas":"Midea","modelis":"MSMABU-18HRDN8","tipas":"Sieninis vidinis blokas","galia_kW":5.0,"energijos_klase":"A++","plotas_m2":45,"triuksmas_dB":24,"kaina_EUR":450,"aukstis_cm":31.0,"plotis_cm":110.0,"storis_cm":22.5},{"id":55,"gamintojas":"Midea","modelis":"MSMABU-24HRDN8","tipas":"Sieninis vidinis blokas","galia_kW":7.0,"energijos_klase":"A+","plotas_m2":60,"triuksmas_dB":26,"kaina_EUR":520,"aukstis_cm":33.5,"plotis_cm":128.0,"storis_cm":25.0},{"id":56,"gamintojas":"Midea","modelis":"MA-09NXD0","tipas":"Sieninis vidinis blokas","galia_kW":2.6,"energijos_klase":"A+++","plotas_m2":22,"triuksmas_dB":18,"kaina_EUR":410,"aukstis_cm":27.5,"plotis_cm":78.0,"storis_cm":19.0},{"id":57,"gamintojas":"Midea","modelis":"MA-12NXD0","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A+++","plotas_m2":30,"triuksmas_dB":20,"kaina_EUR":480,"aukstis_cm":29.0,"plotis_cm":89.0,"storis_cm":20.5},{"id":58,"gamintojas":"Toshiba","modelis":"RAS-B10J2KVSG-E","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A+++","plotas_m2":20,"triuksmas_dB":19,"kaina_EUR":510,"aukstis_cm":28.0,"plotis_cm":79.0,"storis_cm":19.5},{"id":59,"gamintojas":"Toshiba","modelis":"RAS-B13J2KVSG-E","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A+++","plotas_m2":30,"triuksmas_dB":21,"kaina_EUR":590,"aukstis_cm":29.5,"plotis_cm":91.0,"storis_cm":21.0},{"id":60,"gamintojas":"Toshiba","modelis":"RAS-B18J2KVSG-E","tipas":"Sieninis vidinis blokas","galia_kW":5.0,"energijos_klase":"A++","plotas_m2":45,"triuksmas_dB":23,"kaina_EUR":680,"aukstis_cm":31.0,"plotis_cm":111.0,"storis_cm":23.0},{"id":61,"gamintojas":"Toshiba","modelis":"RAS-B10G3KVSG-E","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A++","plotas_m2":20,"triuksmas_dB":21,"kaina_EUR":430,"aukstis_cm":28.5,"plotis_cm":81.0,"storis_cm":20.5},{"id":62,"gamintojas":"Toshiba","modelis":"RAS-B24J2KVSG-E","tipas":"Sieninis vidinis blokas","galia_kW":7.0,"energijos_klase":"A+","plotas_m2":60,"triuksmas_dB":26,"kaina_EUR":800,"aukstis_cm":33.5,"plotis_cm":129.0,"storis_cm":25.5},{"id":63,"gamintojas":"Sharp","modelis":"AY-X09BER","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A++","plotas_m2":20,"triuksmas_dB":21,"kaina_EUR":350,"aukstis_cm":29.0,"plotis_cm":82.0,"storis_cm":20.5},{"id":64,"gamintojas":"Sharp","modelis":"AY-X12BER","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A++","plotas_m2":30,"triuksmas_dB":23,"kaina_EUR":410,"aukstis_cm":30.0,"plotis_cm":93.0,"storis_cm":21.5},{"id":65,"gamintojas":"Sharp","modelis":"AY-X18BER","tipas":"Sieninis vidinis blokas","galia_kW":5.0,"energijos_klase":"A+","plotas_m2":45,"triuksmas_dB":25,"kaina_EUR":490,"aukstis_cm":32.0,"plotis_cm":112.0,"storis_cm":23.5},{"id":66,"gamintojas":"Gree","modelis":"GWH09ACC-K6DNA1A","tipas":"Sieninis vidinis blokas","galia_kW":2.6,"energijos_klase":"A++","plotas_m2":22,"triuksmas_dB":20,"kaina_EUR":290,"aukstis_cm":28.5,"plotis_cm":80.0,"storis_cm":20.0},{"id":67,"gamintojas":"Gree","modelis":"GWH12ACC-K6DNA1A","tipas":"Sieninis vidinis blokas","galia_kW":3.5,"energijos_klase":"A++","plotas_m2":30,"triuksmas_dB":22,"kaina_EUR":340,"aukstis_cm":29.5,"plotis_cm":91.0,"storis_cm":21.5},{"id":68,"gamintojas":"Gree","modelis":"GWH18ACC-K6DNA1A","tipas":"Sieninis vidinis blokas","galia_kW":5.0,"energijos_klase":"A+","plotas_m2":45,"triuksmas_dB":24,"kaina_EUR":400,"aukstis_cm":31.5,"plotis_cm":110.0,"storis_cm":23.0},{"id":69,"gamintojas":"Gree","modelis":"GWH09AKC-K6DNA1F","tipas":"Sieninis vidinis blokas","galia_kW":2.6,"energijos_klase":"A+++","plotas_m2":22,"triuksmas_dB":19,"kaina_EUR":360,"aukstis_cm":27.5,"plotis_cm":78.5,"storis_cm":19.5},{"id":70,"gamintojas":"Haier","modelis":"AS25S2SF1FA-WH","tipas":"Sieninis vidinis blokas","galia_kW":2.5,"energijos_klase":"A++","plotas_m2":20,"triuksmas_dB":20,"kaina_EUR":310,"aukstis_cm":28.5,"plotis_cm":81.0,"storis_cm":20.0}];

// If we have scraped models (salna-models.js), use them instead of placeholders.
if (window.SALNA_MODELS && Array.isArray(window.SALNA_MODELS) && window.SALNA_MODELS.length) {
  MODELS = window.SALNA_MODELS;
}

// ═══════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════
let wallImg = null;
let selModel = null;
let cmpList = [];
let blockX = 0.5, blockY = 0.2;
let dragging = false, dox = 0, doy = 0;
let stream = null;
let activeFilter = 'all';
let recKw = 2.5;
let wallCanvasInited = false;
const unitImgCache = new Map();
const unitImgLoading = new Set();

function modelTypeKey(m) {
  const t = (m.tipas || '').toLowerCase();
  return t.includes('isor') ? 'outdoor' : 'indoor';
}

function fmtVal(v, suffix = '') {
  if (v === null || v === undefined || v === '' || Number.isNaN(Number(v))) return 'N/A';
  const n = Number(v);
  if (n <= 0) return 'N/A';
  return `${v}${suffix}`;
}

// ═══════════════════════════════════════════════
// STEP NAVIGATION
// ═══════════════════════════════════════════════
function goTo(n) {
  if (n === 2 && !wallImg) { toast('Pirma nufotografuokite sieną!', 'warn'); return; }
  if (n === 3 && !selModel) { toast('Pirma pasirinkite bloką!', 'warn'); return; }
  [1,2,3].forEach(i => {
    document.getElementById('panel'+i).classList.toggle('active', i===n);
    const s = document.getElementById('st'+i);
    s.classList.remove('active','done');
    if (i < n) s.classList.add('done');
    else if (i === n) s.classList.add('active');
    if (i < 3) document.getElementById('sep'+i).classList.toggle('done', i < n);
  });
  if (n === 2) { initWallCanvas(); renderModels(); calcRoom(); }
  if (n === 3) fillSummary();
}

// ═══════════════════════════════════════════════
// CAMERA
// ═══════════════════════════════════════════════
(async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video:{ facingMode:'environment', width:{ideal:1920}, height:{ideal:1080} } });
    document.getElementById('videoEl').srcObject = stream;
  } catch(e) { toast('Kamera nepasiekiama – naudokite failų įkėlimą', 'warn'); }
})();

document.getElementById('btnCap').addEventListener('click', () => {
  const v = document.getElementById('videoEl');
  const c = document.getElementById('photoCanvas');
  if (!v.srcObject) { toast('Kamera neaktyvi', 'warn'); return; }
  c.width = v.videoWidth || 1280; c.height = v.videoHeight || 720;
  c.getContext('2d').drawImage(v, 0, 0);
  c.style.display = 'block'; v.style.display = 'none';
  wallImg = c.toDataURL('image/jpeg', 0.92);
  document.getElementById('toP2').disabled = false;
  toast('Nuotrauka padaryta ✓', 'ok');
});

document.getElementById('fi').addEventListener('change', e => {
  const f = e.target.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = ev => {
    wallImg = ev.target.result;
    const c = document.getElementById('photoCanvas');
    const v = document.getElementById('videoEl');
    const img = new Image();
    img.onload = () => { c.width=img.width; c.height=img.height; c.getContext('2d').drawImage(img,0,0); };
    img.src = wallImg;
    c.style.display='block'; v.style.display='none';
    document.getElementById('toP2').disabled = false;
    toast('Nuotrauka įkelta ✓', 'ok');
  };
  r.readAsDataURL(f);
});

// ═══════════════════════════════════════════════
// ROOM CALCULATOR
// ═══════════════════════════════════════════════
function calcRoom() {
  const w = parseFloat(document.getElementById('rW').value)||4;
  const l = parseFloat(document.getElementById('rL').value)||5;
  const h = parseFloat(document.getElementById('rH').value)||2.7;
  const area = w * l;
  // HVAC rule of thumb: ~100W/m² base + height correction
  const kwNeeded = (area * 100 * (h / 2.5)) / 1000;
  const lo = (kwNeeded * 0.9).toFixed(1);
  const hi = (kwNeeded * 1.2).toFixed(1);
  recKw = kwNeeded;
  document.getElementById('rcResult').innerHTML =
    `<div class="rc-kw">${lo}–${hi} kW rekomenduojama</div>
     <div class="rc-note" id="rcNote">${area.toFixed(0)} m² · aukštis ${h} m</div>`;
}

// ═══════════════════════════════════════════════
// FILTERS & MODELS
// ═══════════════════════════════════════════════
function buildFilters() {
  const brands = [...new Set(MODELS.map(m => m.gamintojas))].sort();
  const fr = document.getElementById('filterRow');
  fr.innerHTML = '<button class="fb on" data-f="all" onclick="setFilter(this,\'all\')">Visi</button>';
  fr.innerHTML += '<button class="fb" data-f="indoor" onclick="setFilter(this,\'indoor\')">Vidiniai</button>';
  fr.innerHTML += '<button class="fb" data-f="outdoor" onclick="setFilter(this,\'outdoor\')">Išoriniai</button>';
  brands.forEach(b => {
    const short = b.split(' ')[0];
    fr.innerHTML += `<button class="fb" data-f="${b}" onclick="setFilter(this,'${b}')">${short}</button>`;
  });
  const kwBtns = [2.0,2.5,3.5,5.0,7.0];
  kwBtns.forEach(k => {
    fr.innerHTML += `<button class="fb" data-f="kw${k}" onclick="setFilter(this,'kw${k}')">${k} kW</button>`;
  });
}
function setFilter(el, val) {
  document.querySelectorAll('.fb').forEach(b => b.classList.remove('on'));
  el.classList.add('on'); activeFilter = val; renderModels();
}

function renderModels() {
  const q = document.getElementById('searchBox').value.toLowerCase();
  let list = MODELS.filter(m => {
    const matchQ = !q || m.gamintojas.toLowerCase().includes(q) || m.modelis.toLowerCase().includes(q);
    const typ = modelTypeKey(m);
    const matchF = activeFilter === 'all' || m.gamintojas === activeFilter ||
                   activeFilter === typ ||
                   (activeFilter.startsWith('kw') && Number(m.galia_kW) > 0 && m.galia_kW === parseFloat(activeFilter.slice(2)));
    return matchQ && matchF;
  });

  list.sort((a, b) => {
    const aIndoor = modelTypeKey(a) === 'indoor' ? 0 : 1;
    const bIndoor = modelTypeKey(b) === 'indoor' ? 0 : 1;
    if (aIndoor !== bIndoor) return aIndoor - bIndoor;
    const ap = Number(a.kaina_EUR) || 999999;
    const bp = Number(b.kaina_EUR) || 999999;
    if (ap !== bp) return ap - bp;
    return `${a.gamintojas} ${a.modelis}`.localeCompare(`${b.gamintojas} ${b.modelis}`);
  });

  const ml = document.getElementById('modelList');
  ml.innerHTML = '';
  if (!list.length) { ml.innerHTML = '<div style="text-align:center;color:var(--muted);padding:20px;font-size:.85rem">Nerasta modelių</div>'; return; }

  list.forEach(m => {
    const isSel = selModel?.id === m.id;
    const isCmp = cmpList.some(c => c.id === m.id);
    const rec = modelTypeKey(m) === 'indoor' && Number(m.galia_kW) > 0 && m.galia_kW >= recKw * 0.85 && m.galia_kW <= recKw * 1.4;
    // Map "A+++", "A++", "A+" -> CSS classes: eeea / eea / ea
    const ecls = (m.energijos_klase || '').toUpperCase().trim();
    let ecClass = '';
    if (ecls === 'A+++') ecClass = 'eeea';
    else if (ecls === 'A++') ecClass = 'eea';
    else if (ecls === 'A+') ecClass = 'ea';

    const thumb = m.imageUrl
      ? `<img class="mc-thumb" src="${m.imageUrl}" alt="${m.modelis}" loading="lazy" />`
      : '';
    const typeLabel = modelTypeKey(m) === 'outdoor' ? 'Išorinis' : 'Vidinis';
    const energyTag = ecls && ecls !== '-' ? `<span class="tag en ${ecClass}">${m.energijos_klase}</span>` : '<span class="tag">Energija: N/A</span>';
    const kwTag = Number(m.galia_kW) > 0 ? `<span class="tag">${m.galia_kW} kW</span>` : '<span class="tag">Galia: N/A</span>';
    const areaTag = Number(m.plotas_m2) > 0 ? `<span class="tag">≤${m.plotas_m2} m²</span>` : '<span class="tag">Plotas: N/A</span>';
    const priceText = Number(m.kaina_EUR) > 0 ? `${m.kaina_EUR} €` : 'Kaina pagal užklausą';
    const noiseText = Number(m.triuksmas_dB) > 0 ? `🔇 ${m.triuksmas_dB} dB(A)` : '🔇 N/A';

    const el = document.createElement('div');
    el.className = 'mc' + (isSel?' sel':'') + (isCmp?' cmp':'');
    el.innerHTML = `
      <div class="mc-brand">${m.gamintojas}</div>
      ${thumb ? `<div class="mc-thumb-wrap">${thumb}</div>` : ''}
      <div class="mc-name">${m.modelis}</div>
      <div class="mc-tags">
        <span class="tag">${typeLabel}</span>
        ${energyTag}
        ${kwTag}
        ${areaTag}
        ${rec ? '<span class="tag" style="background:rgba(0,200,232,.1);border-color:var(--accent);color:var(--accent)">⭐ Rekomenduojama</span>' : ''}
      </div>
      <div class="mc-dims">📐 ${m.plotis_cm}×${m.aukstis_cm}×${m.storis_cm} cm</div>
      <div class="mc-bottom">
        <div class="mc-price">${priceText}</div>
        <div class="mc-noise">${noiseText}</div>
      </div>
      <div class="mc-sel-badge">✓</div>
      <button class="mc-cmp-btn" onclick="toggleCompare(event,${m.id})">${isCmp?'✓ Lyginimui':'+ Lyginti'}</button>
    `;
    el.addEventListener('click', (e) => { if (!e.target.classList.contains('mc-cmp-btn')) selectModel(m); });
    ml.appendChild(el);
  });
}

function selectModel(m) {
  selModel = m;
  renderModels();
  drawWall();
  document.getElementById('toP3').disabled = false;
  document.getElementById('phint').textContent = `${m.gamintojas} ${m.modelis} – vilkite norimą vietą`;
  toast(`${m.gamintojas} ${m.modelis} pasirinktas`, 'ok');
}

function toggleCompare(e, id) {
  e.stopPropagation();
  const m = MODELS.find(x => x.id === id);
  const idx = cmpList.findIndex(c => c.id === id);
  if (idx >= 0) { cmpList.splice(idx, 1); }
  else if (cmpList.length < 4) { cmpList.push(m); }
  else { toast('Maksimaliai 4 modeliai lyginimui', 'warn'); return; }
  updateCmpBadge();
  renderModels();
}

function updateCmpBadge() {
  const n = cmpList.length;
  document.getElementById('cmpN').textContent = n;
  const cc = document.getElementById('cmpCount');
  cc.style.display = n ? 'block' : 'none';
  cc.textContent = n + ' lyginimui';
}

// ═══════════════════════════════════════════════
// WALL CANVAS + AR
// ═══════════════════════════════════════════════
function initWallCanvas() {
  if (!wallImg) return;
  const canvas = document.getElementById('wallCanvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    if (selModel) drawBlock(ctx, img.width, img.height);
  };
  img.src = wallImg;

  if (wallCanvasInited) return;

  // Drag
  canvas.addEventListener('mousedown', e => {
    dragging = true;
    const r = canvas.getBoundingClientRect();
    const sx = canvas.width / r.width;
    const sy = canvas.height / r.height;
    dox = (e.clientX - r.left) * sx - blockX * canvas.width;
    doy = (e.clientY - r.top) * sy - blockY * canvas.height;
  });
  canvas.addEventListener('mousemove', e => {
    if (!dragging || !selModel) return;
    const r = canvas.getBoundingClientRect();
    const sx = canvas.width / r.width;
    const sy = canvas.height / r.height;
    blockX = Math.max(0, Math.min(1, ((e.clientX - r.left) * sx - dox) / canvas.width));
    blockY = Math.max(0, Math.min(1, ((e.clientY - r.top) * sy - doy) / canvas.height));
    drawWall();
  });
  canvas.addEventListener('mouseup', () => { dragging = false; });

  // Touch
  canvas.addEventListener('touchstart', e => {
    e.preventDefault();
    dragging = true;
    const t = e.touches[0];
    const r = canvas.getBoundingClientRect();
    const sx = canvas.width / r.width;
    const sy = canvas.height / r.height;
    dox = (t.clientX - r.left) * sx - blockX * canvas.width;
    doy = (t.clientY - r.top) * sy - blockY * canvas.height;
  }, { passive: false });
  canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    if (!dragging || !selModel) return;
    const t = e.touches[0];
    const r = canvas.getBoundingClientRect();
    const sx = canvas.width / r.width;
    const sy = canvas.height / r.height;
    blockX = Math.max(0, Math.min(1, ((t.clientX - r.left) * sx - dox) / canvas.width));
    blockY = Math.max(0, Math.min(1, ((t.clientY - r.top) * sy - doy) / canvas.height));
    drawWall();
  }, { passive: false });
  canvas.addEventListener('touchend', () => { dragging = false; });

  wallCanvasInited = true;
}

function drawWall() {
  const canvas = document.getElementById('wallCanvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
    if (selModel) drawBlock(ctx, canvas.width, canvas.height);
  };
  img.src = wallImg;
}

function drawBlock(ctx, cw, ch) {
  const m = selModel;
  // Scale: assume ~3m wide wall = canvas width → real width in meters
  const wallWidthM = 3.5;
  const scale = cw / (wallWidthM * 100); // px per cm
  const bw = m.plotis_cm * scale;
  const bh = m.aukstis_cm * scale;
  const x = blockX * cw - bw / 2;
  const y = blockY * ch - bh / 2;

  // Shadow
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.5)';
  ctx.shadowBlur = 18; ctx.shadowOffsetX = 4; ctx.shadowOffsetY = 6;

  // Main body – white AC unit
  const grad = ctx.createLinearGradient(x, y, x, y+bh);
  grad.addColorStop(0, '#f8f8f8');
  grad.addColorStop(1, '#d8d8d8');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.roundRect(x, y, bw, bh, 8);
  ctx.fill();
  ctx.restore();

  // Optional: draw real indoor unit photo inside the rounded block.
  // Since the photo is remote, we cache loaded images and re-draw once loaded.
  if (m.imageUrl) {
    const url = m.imageUrl;
    const cached = unitImgCache.get(url);
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(x, y, bw, bh, 8);
    ctx.clip();

    if (cached && cached.complete) {
      ctx.drawImage(cached, x, y, bw, bh);
    } else {
      // Start loading once.
      if (!unitImgCache.has(url)) unitImgCache.set(url, null);
      if (!cached && !unitImgLoading.has(url)) {
        unitImgLoading.add(url);
        const img = new Image();
        img.onload = () => {
          unitImgCache.set(url, img);
          unitImgLoading.delete(url);
          drawWall(); // redraw wall to show the image
        };
        img.src = url;
      }
      // Keep gradient placeholder until image loads.
    }
    ctx.restore();
  }

  // Front panel detail
  ctx.save();
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.beginPath();
  ctx.roundRect(x+bw*0.04, y+bh*0.12, bw*0.92, bh*0.35, 4);
  ctx.fill();

  // Air vents (horizontal lines)
  ctx.strokeStyle = 'rgba(180,180,180,0.8)';
  ctx.lineWidth = Math.max(1, bh*0.025);
  for (let i=1; i<=3; i++) {
    const vy = y + bh*0.55 + i*(bh*0.09);
    ctx.beginPath();
    ctx.moveTo(x+bw*0.12, vy);
    ctx.lineTo(x+bw*0.88, vy);
    ctx.stroke();
  }

  // LED dot
  ctx.fillStyle = '#00e676';
  ctx.shadowColor = '#00e676';
  ctx.shadowBlur = 6;
  ctx.beginPath();
  ctx.arc(x+bw*0.85, y+bh*0.25, Math.max(2, bw*0.018), 0, Math.PI*2);
  ctx.fill();
  ctx.restore();

  // Dimension labels
  ctx.save();
  ctx.font = `bold ${Math.max(11, bw*0.07)}px 'Syne', sans-serif`;
  ctx.fillStyle = '#00c8e8';
  ctx.strokeStyle = 'rgba(0,0,0,0.8)';
  ctx.lineWidth = 3;
  ctx.lineJoin = 'round';

  // Width label (bottom)
  const wLabel = `${m.plotis_cm} cm`;
  ctx.textAlign = 'center';
  ctx.strokeText(wLabel, x+bw/2, y+bh+Math.max(14,bh*0.2));
  ctx.fillText(wLabel, x+bw/2, y+bh+Math.max(14,bh*0.2));

  // Height label (right side)
  ctx.save();
  ctx.translate(x+bw+Math.max(10,bw*0.08), y+bh/2);
  ctx.rotate(Math.PI/2);
  const hLabel = `${m.aukstis_cm} cm`;
  ctx.strokeText(hLabel, 0, 0);
  ctx.fillText(hLabel, 0, 0);
  ctx.restore();

  // Brand label on unit
  ctx.font = `bold ${Math.max(9, bw*0.055)}px 'Syne', sans-serif`;
  ctx.fillStyle = 'rgba(60,60,60,0.9)';
  ctx.strokeStyle = 'rgba(255,255,255,0.5)';
  ctx.lineWidth = 2;
  ctx.textAlign = 'center';
  ctx.strokeText(m.gamintojas, x+bw/2, y+bh*0.32);
  ctx.fillText(m.gamintojas, x+bw/2, y+bh*0.32);

  ctx.restore();
}

// ═══════════════════════════════════════════════
// COMPARISON MODAL
// ═══════════════════════════════════════════════
function openCompare() {
  if (!cmpList.length) { toast('Pasirinkite modelius lyginimui (+ Lyginti)', 'warn'); return; }
  const fields = [
    ['Gamintojas', m => m.gamintojas],
    ['Modelis', m => m.modelis],
    ['Galia', m => m.galia_kW+' kW', 'max'],
    ['Energijos klasė', m => m.energijos_klase],
    ['Rec. plotas', m => m.plotas_m2+' m²', 'max'],
    ['Triukšmas', m => m.triuksmas_dB+' dB(A)', 'min'],
    ['Plotis', m => m.plotis_cm+' cm'],
    ['Aukštis', m => m.aukstis_cm+' cm'],
    ['Storis', m => m.storis_cm+' cm'],
    ['Kaina', m => m.kaina_EUR+' €', 'min'],
  ];

  let html = `<div style="overflow-x:auto"><table class="cmp-table"><thead><tr><th>Parametras</th>`;
  cmpList.forEach(m => { html += `<th>${m.gamintojas}<br><span style="color:var(--text)">${m.modelis}</span></th>`; });
  html += `</tr></thead><tbody>`;

  fields.forEach(([label, fn, best]) => {
    html += `<tr><td>${label}</td>`;
    const vals = cmpList.map(m => fn(m));
    const nums = vals
      .map(v => parseFloat(v))
      .filter(n => !Number.isNaN(n) && n > 0);
    let bestVal;
    if (nums.length) {
      if (best === 'max') bestVal = Math.max(...nums);
      if (best === 'min') bestVal = Math.min(...nums);
    }
    cmpList.forEach((m, i) => {
      const v = fn(m); const n = parseFloat(v);
      const isBest = best && bestVal !== undefined && ((best==='max'&&n===bestVal)||(best==='min'&&n===bestVal));
      html += `<td class="${isBest?'best':''}">${v}</td>`;
    });
    html += `</tr>`;
  });

  html += `</tbody></table></div><div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap">`;
  cmpList.forEach(m => {
    html += `<button class="btn-cmp-sel" onclick="selectModel(MODELS.find(x=>x.id===${m.id}));closeCompare()">Pasirinkti ${m.modelis}</button>`;
  });
  html += `</div>`;

  document.getElementById('cmpContent').innerHTML = html;
  document.getElementById('cmpModal').classList.add('open');
}
function closeCompare() { document.getElementById('cmpModal').classList.remove('open'); }

// ═══════════════════════════════════════════════
// SUMMARY (Step 3)
// ═══════════════════════════════════════════════
function fillSummary() {
  const m = selModel;
  document.getElementById('sBrand').textContent = m.gamintojas;
  document.getElementById('sName').textContent = m.modelis;
  document.getElementById('sPrice').textContent = Number(m.kaina_EUR) > 0 ? (m.kaina_EUR + ' €') : 'Kaina pagal užklausą';

  const rows = [
    ['Tipas', modelTypeKey(m) === 'outdoor' ? 'Išorinis blokas' : 'Vidinis blokas'],
    ['Galia', fmtVal(m.galia_kW, ' kW')],
    ['Energijos klasė', (m.energijos_klase && m.energijos_klase !== '-') ? m.energijos_klase : 'N/A'],
    ['Rekomenduojamas plotas', Number(m.plotas_m2) > 0 ? ('≤'+m.plotas_m2+' m²') : 'N/A'],
    ['Matmenys (PlxAxS)', `${m.plotis_cm}×${m.aukstis_cm}×${m.storis_cm} cm`],
    ['Triukšmas', fmtVal(m.triuksmas_dB, ' dB(A)')],
  ];
  document.getElementById('sTbl').innerHTML = rows.map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('');

  // Draw summary canvas with the wall+block
  const sc = document.getElementById('summCanvas');
  const sctx = sc.getContext('2d');
  const img = new Image();
  img.onload = () => {
    sc.width = img.width; sc.height = img.height;
    sctx.drawImage(img, 0, 0);
    drawBlock(sctx, sc.width, sc.height);
  };
  img.src = wallImg;
}

// ═══════════════════════════════════════════════
// SUBMIT ORDER
// ═══════════════════════════════════════════════
function submitOrder() {
  const v = document.getElementById('fVardas').value.trim();
  const p = document.getElementById('fPavarde').value.trim();
  const e = document.getElementById('fEmail').value.trim();
  const t = document.getElementById('fTel').value.trim();
  const adr = document.getElementById('fAdr').value.trim();
  const laikas = document.getElementById('fLaikas').value;
  const past = document.getElementById('fPast').value.trim();

  if (!v || !e || !t) { toast('Užpildykite vardą, el. paštą ir telefoną', 'warn'); return; }
  if (!selModel) { toast('Pirma pasirinkite bloką!', 'warn'); return; }

  const w = parseFloat(document.getElementById('rW').value) || 0;
  const l = parseFloat(document.getElementById('rL').value) || 0;
  const h = parseFloat(document.getElementById('rH').value) || 0;
  const area = w * l;

  document.getElementById('orderContent').style.display = 'none';
  document.getElementById('orderNav').style.display = 'none';
  const ss = document.getElementById('successScreen');
  ss.style.display = 'block';
  const ref = 'KV-' + Date.now().toString(36).toUpperCase().slice(-6);
  document.getElementById('refNum').textContent = ref;

  // Also open user's email client (no backend in this project).
  const to = 'lukmantas@gmail.com';
  const subject = `KlimaViz užsakymas ${ref}`;
  const body = [
    `Užsakymo numeris: ${ref}`,
    '',
    `Klientas: ${v} ${p}`.trim(),
    `El. paštas: ${e}`,
    `Telefonas: ${t}`,
    `Adresas: ${adr || '-'}`,
    `Pageidaujamas laikas: ${laikas || '-'}`,
    past ? `Pastabos: ${past}` : '',
    '',
    `Pasirinktas modelis: ${selModel.gamintojas} ${selModel.modelis}`,
    `Tipas: ${modelTypeKey(selModel) === 'outdoor' ? 'Išorinis blokas' : 'Vidinis blokas'}`,
    `Galia: ${fmtVal(selModel.galia_kW, ' kW')}`,
    `Energijos klasė: ${(selModel.energijos_klase && selModel.energijos_klase !== '-') ? selModel.energijos_klase : 'N/A'}`,
    `Kaina: ${Number(selModel.kaina_EUR) > 0 ? (selModel.kaina_EUR + ' EUR') : 'pagal užklausą'}`,
    `Matmenys: ${selModel.plotis_cm}×${selModel.aukstis_cm}×${selModel.storis_cm} cm`,
    '',
    `Kambario skaičiuoklė: ${w}×${l}×${h} m`,
    `Plotas: ${area ? area.toFixed(0) : '-'} m²`,
    `Rekomenduojama galia: ~${recKw.toFixed(1)} kW`,
  ].filter(Boolean).join('\n');

  const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  setTimeout(() => { window.location.href = mailto; }, 400);
}

// ═══════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════
let toastTimer;
function toast(msg, type='info') {
  const el = document.getElementById('toast');
  el.textContent = msg; el.className = 'toast show '+type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
buildFilters();
calcRoom();
