// rails.js

const DEFAULTS_STRAIGHTDATA_KATO = {
    sMaker: "KATO", sSeries: "UNITRACK", sRole: "straight",
    nRadius: 0, nAngle: 0, bIsDouble: false, nTrackGap: 33,
    nJunctionCount: 2, sDirection: "none", sKant: "none",
    nViewWidth: 25, nHeight: 0, nGauge: 9, sColor: "Green",
    sComment: null, sExtra: ""
};
const straightData_kato = {
    "KATO_S248":     { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "直線線路 S248",            sProductCode: "20-000",      nLength: 248,   sComment: "標準的な直線レール。PC枕木版と共通で使用可能。" },
    "KATO_S186":     { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "直線線路 S186",            sProductCode: "20-010",      nLength: 186,   sComment: "標準的な直線レール。PC枕木版と共通で使用可能。" },
    "KATO_S124":     { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "直線線路 S124",            sProductCode: "20-020",      nLength: 124,   sComment: "標準的な直線レール。" },
    "KATO_S124C":    { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "リレーラー線路 S124C",     sProductCode: "20-026",      nLength: 124,   sComment: "踏板別途。" },
    "KATO_S124C #2": { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "踏切線路#2 S124C",         sProductCode: "20-027",      nLength: 124,   sComment: "踏切パーツ別途。" },
    "KATO_S64":      { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "直線線路 S64",             sProductCode: "20-030",      nLength: 64,    sComment: "標準的な直線レール。4番ポイントに2本付属。" },
    "KATO_S62":      { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "直線線路 S62",             sProductCode: "20-040",      nLength: 62,    sComment: "標準的な直線レール。" },
    "KATO_S60R":     { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "分岐部専用直線線路(右欠)",  sProductCode: "20-220(付属)", nLength: 60,    sComment: "4番ポイント左用の右側カット直線線路。" },
    "KATO_S60L":     { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "分岐部専用直線線路(左欠)",  sProductCode: "20-221(付属)", nLength: 60,    sComment: "4番ポイント右用の左側カット直線線路。" }
};

const DEFAULTS_DOUBLESTRAIGHT_KATO = {
    sMaker: "KATO", sSeries: "UNITRACK", sRole: "straight",
    nRadius: 0, nAngle: 0, bIsDouble: true, nTrackGap: 33,
    nJunctionCount: 4, sDirection: "none", sKant: "none",
    nViewWidth: 57.5, nHeight: 0, nGauge: 9, sColor: "Green",
    sExtra: ""
};
const doubleStraightData_kato = {
    "KATO_WS248": { ...DEFAULTS_DOUBLESTRAIGHT_KATO, sName: "複線直線線路 WS248", sProductCode: "20-014", nLength: 248, sComment: "複線レール。" },
    "KATO_WS186": { ...DEFAULTS_DOUBLESTRAIGHT_KATO, sName: "複線直線線路 WS186", sProductCode: "20-012", nLength: 186, sComment: "複線レール。" }
};

const DEFAULTS_CURVEDATA_KATO = {
    sMaker: "KATO", sSeries: "UNITRACK",  sRole: "curve",nLength: 0,
    nRadius: 0, nAngle: 0,  bIsDouble: false, nTrackGap: 33,
    nJunctionCount: 2, sDirection: "none",  sKant: "none",nViewWidth: 25, 
    nHeight: 0, nGauge: 9,  sColor: "Green",sComment: "",sExtra: ""
};
const curveData_kato = {
    "KATO_R315-45": { ...DEFAULTS_CURVEDATA_KATO,  sName: "曲線線路 R315-45", sProductCode: "2x-xxx", nRadius: 315, nAngle: 45,  sComment: "標準的な曲線レール。PC枕木版と共通で使用可能。"  },
    "KATO_R282-45": { ...DEFAULTS_CURVEDATA_KATO,  sName: "曲線線路 R282-45", sProductCode: "2x-xxx", nRadius: 282, nAngle: 45,  sComment: "標準的な曲線レール。PC枕木版と共通で使用可能。"  },
    "KATO_R481-15": { ...DEFAULTS_CURVEDATA_KATO,  sName: "曲線線路 R481-15", sProductCode: "20-160", nRadius: 481, nAngle: 15,  sComment: "4番ポイントと同一半径。"  },
    "KATO_R718-15": { ...DEFAULTS_CURVEDATA_KATO,  sName: "曲線線路 R718-15", sProductCode: "20-150", nRadius: 718, nAngle: 15,  sComment: "6番ポイントと同一半径。"  }
};

const DEFAULTS_DOUBLECURVEDATA_KATO = {
    sMaker: "KATO", sSeries: "UNITRACK", sRole: "curve",
    nLength: 0, nRadius: 0, nAngle: 45,  bIsDouble: true,     // 複線固定
    nTrackGap: 33, nJunctionCount: 4,                         // 複線のため接続箇所が多い
    sDirection: "none", sKant: "both",                        // カント付きが標準
    nViewWidth: 57.5,  nHeight: 0, nGauge: 9, sColor: "Green",
    sComment: "", sExtra: ""
};
const doubleCurveData_kato = {
    "KATO_WR480_447-45": { ...DEFAULTS_DOUBLECURVEDATA_KATO, sName: "複線曲線線路 WR480/447-45", sProductCode: "20-185", nRadius: 480, sComment: "カント付き複線曲線。内側はR447。" },
    "KATO_WR414_381-45": { ...DEFAULTS_DOUBLECURVEDATA_KATO, sName: "複線曲線線路 WR414/381-45", sProductCode: "20-181", nRadius: 414, sComment: "カント付き複線曲線。内側はR381。" },
    "KATO_WR315_282-45": { ...DEFAULTS_DOUBLECURVEDATA_KATO, sName: "複線曲線線路 WR315/282-45", sProductCode: "20-183", nRadius: 315, sComment: "カント付き複線曲線。内側はR282。" }
};

const DEFAULTS_APPROACHCURVEDATA_KATO = {
    sMaker: "KATO", sSeries: "UNITRACK", sRole: "approach",
    nLength: 0, nAngle: 22.5, bIsDouble: true,
    nTrackGap: 33, nJunctionCount: 4,
    nViewWidth: 57.5, nHeight: 0, nGauge: 9,
    sColor: "Green", sExtra: ""
};
const approachCurveData_kato = {
    "KATO_WR480_447-22.5L": { ...DEFAULTS_APPROACHCURVEDATA_KATO, sName: "複線アプローチ線路 R480/447-22.5L", sProductCode: "20-186(L)", nRadius: 480, sDirection: "left",　sKant: "left",  sComment: "カント導入用アプローチレール（左用）。" },
    "KATO_WR480_447-22.5R": { ...DEFAULTS_APPROACHCURVEDATA_KATO, sName: "複線アプローチ線路 R480/447-22.5R", sProductCode: "20-186(R)", nRadius: 480, sDirection: "right", sKant: "right", sComment: "カント導入用アプローチレール（右用）。" },
    "KATO_WR414_381-22.5L": { ...DEFAULTS_APPROACHCURVEDATA_KATO, sName: "複線アプローチ線路 R414/381-22.5L", sProductCode: "20-182(L)", nRadius: 414, sDirection: "left",　sKant: "left",  sComment: "カント導入用アプローチレール（左用）。" },
    "KATO_WR414_381-22.5R": { ...DEFAULTS_APPROACHCURVEDATA_KATO, sName: "複線アプローチ線路 R414/381-22.5R", sProductCode: "20-182(R)", nRadius: 414, sDirection: "right", sKant: "right", sComment: "カント導入用アプローチレール（右用）。" },
    "KATO_WR315_282-22.5L": { ...DEFAULTS_APPROACHCURVEDATA_KATO, sName: "複線アプローチ線路 R315/282-22.5L", sProductCode: "20-184(L)", nRadius: 315, sDirection: "left",　sKant: "left",  sComment: "カント導入用アプローチレール（左用）。" },
    "KATO_WR315_282-22.5R": { ...DEFAULTS_APPROACHCURVEDATA_KATO, sName: "複線アプローチ線路 R315/282-22.5R", sProductCode: "20-184(R)", nRadius: 315, sDirection: "right", sKant: "right", sComment: "カント導入用アプローチレール（右用）。" }
};

const DEFAULTS_STRAIGHTDATA_TOMIX = {
    sMaker: "TOMIX", sSeries: "FINETRACK", sRole: "straight",
    nRadius: 0, nAngle: 0, bIsDouble: false, nTrackGap: 37,
    nJunctionCount: 2, sDirection: "none", sKant: "none",
    nViewWidth: 18, nHeight: 0, nGauge: 9, sColor: "Green",
    sComment: null, sExtra: ""
};
const straightData_tomix = {
    "TOMIX_S280":    { ...DEFAULTS_STRAIGHTDATA_TOMIX, sName: "直線線路 S280",          sProductCode: "1802",  nLength: 280,   sComment: "標準的な直線レール。" },
    "TOMIX_S158.5":  { ...DEFAULTS_STRAIGHTDATA_TOMIX, sName: "直線線路 S158.5",        sProductCode: "1806",  nLength: 158.5, sComment: "標準的な直線レール。" },
    "TOMIX_S140":    { ...DEFAULTS_STRAIGHTDATA_TOMIX, sName: "直線線路 S140",          sProductCode: "1801",  nLength: 140,   sComment: "標準的な直線レール。" },
    "TOMIX_S140-RE": { ...DEFAULTS_STRAIGHTDATA_TOMIX, sName: "リレーラー線路 S140-RE", sProductCode: "1523",  nLength: 140,   sComment: "踏板別途。" },
    "TOMIX_S99":     { ...DEFAULTS_STRAIGHTDATA_TOMIX, sName: "直線線路 S99",           sProductCode: "1805",  nLength: 99,    sComment: "標準的な直線レール。" },
    "TOMIX_S72.5":   { ...DEFAULTS_STRAIGHTDATA_TOMIX, sName: "直線線路 S72.5",         sProductCode: "1803",  nLength: 72.5,  sComment: "ポイント・カーブ組み合わせ用。" },
    "TOMIX_S70":     { ...DEFAULTS_STRAIGHTDATA_TOMIX, sName: "直線線路 S70",           sProductCode: "1804",  nLength: 70,    sComment: "標準的な直線レール。" }
};

const data_others = {  };

// --- テスト用データ（正常・異常） ---
//const testData = {
//    "TEST_OK":         { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "正常データ", sProductCode: "TEST-01", nLength: 100, sComment: "正常テスト" },
//    "TEST_MISSING":    { sMaker: "KATO", sName: "項目不足エラーテスト" },
//    "TEST_INVALID_KANT": { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "カント不正テスト", sProductCode: "TEST-02", nLength: 100, sKant: "invalid" },
//    "TEST_WRONG_TYPE": { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "数値型不正テスト", sProductCode: "TEST-03", nLength: "100mm" }
//};

// --- 統合 ---
const railData = {
//    ...testData,
    ...straightData_kato,
    ...doubleStraightData_kato,
    ...curveData_kato,
    ...doubleCurveData_kato,
    ...approachCurveData_kato,
    ...straightData_tomix,
    ...data_others
};
