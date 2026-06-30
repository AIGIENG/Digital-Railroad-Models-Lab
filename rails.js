// rails.js

// --- 直線データ定義 ---

const DEFAULTS_STRAIGHTDATA_KATO = {
    sMaker: "KATO", sSeries: "UNITRACK", sRole: "straight",
    nRadius: 0, nAngle: 0, bIsDouble: false, nTrackGap: 33,
    nJunctionCount: 2, sDirection: "none", sKant: "none",
    nViewWidth: 25, nHeight: 0, nGauge: 9, sColor: "Green",
    sComment: null, sExtra: ""
};
const straightData_kato = {
    "KATO_S248":     { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "直線線路 S248",        sProductCode: "20-000",        nLength: 248,   sComment: "標準的な直線レール。PC枕木版と共通で使用可能。" },
    "KATO_S186":     { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "直線線路 S186",        sProductCode: "20-010",        nLength: 186,   sComment: "標準的な直線レール。PC枕木版と共通で使用可能。" },
    "KATO_S124":     { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "直線線路 S124",        sProductCode: "20-020",        nLength: 124,   sComment: "標準的な直線レール。" },
    "KATO_S124C":    { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "リレーラー線路 S124C",  sProductCode: "20-026",        nLength: 124,   sComment: "踏板別途。" },
    "KATO_S124C #2": { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "踏切線路#2 S124C",    sProductCode: "20-027",        nLength: 124,   sComment: "踏切パーツ別途。" },
    "KATO_S64":      { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "直線線路 S64",         sProductCode: "20-030",        nLength: 64,    sComment: "標準的な直線レール。" },
    "KATO_S62":      { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "直線線路 S62",         sProductCode: "20-040",        nLength: 62,    sComment: "標準的な直線レール。" },
    "KATO_S60":      { ...DEFAULTS_STRAIGHTDATA_KATO, sName: "4番ポイント用補助線路", sProductCode: "20-220/221(付属)", nLength: 60,    sComment: "4番ポイント用。" }
};
const DEFAULTS_STRAIGHTDATA_TOMIX = {
    sMaker: "TOMIX", sSeries: "FINETRACK", sRole: "straight",
    nRadius: 0, nAngle: 0, bIsDouble: false, nTrackGap: 37,
    nJunctionCount: 2, sDirection: "none", sKant: "none",
    nViewWidth: 18, nHeight: 0, nGauge: 9, sColor: "Green",
    sComment: null, sExtra: ""
};
const straightData_tomix = {
    "TOMIX_S280":    { ...DEFAULTS_STRAIGHTDATA_TOMIX, sName: "直線線路 S280",        sProductCode: "1802",  nLength: 280,   sComment: "標準的な直線レール。" },
    "TOMIX_S158.5":  { ...DEFAULTS_STRAIGHTDATA_TOMIX, sName: "直線線路 S158.5",      sProductCode: "1806",  nLength: 158.5, sComment: "標準的な直線レール。" },
    "TOMIX_S140":    { ...DEFAULTS_STRAIGHTDATA_TOMIX, sName: "直線線路 S140",        sProductCode: "1801",  nLength: 140,   sComment: "標準的な直線レール。" },
    "TOMIX_S140-RE": { ...DEFAULTS_STRAIGHTDATA_TOMIX, sName: "リレーラー線路 S140-RE", sProductCode: "1523",  nLength: 140,   sComment: "踏板別途。" },
    "TOMIX_S99":     { ...DEFAULTS_STRAIGHTDATA_TOMIX, sName: "直線線路 S99",         sProductCode: "1805",  nLength: 99,    sComment: "標準的な直線レール。" },
    "TOMIX_S72.5":   { ...DEFAULTS_STRAIGHTDATA_TOMIX, sName: "直線線路 S72.5",       sProductCode: "1803",  nLength: 72.5,  sComment: "ポイント・カーブ組み合わせ用。" },
    "TOMIX_S70":     { ...DEFAULTS_STRAIGHTDATA_TOMIX, sName: "直線線路 S70",         sProductCode: "1804",  nLength: 70,    sComment: "標準的な直線レール。" }
};

const data_others = {
 // --- 曲線レール ---
    "KATO_R315-45": {
        sName: "曲線線路 R315-45",
        sProductCode: "2x-xxx",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "curve",
        nLength: 0,
        nRadius: 315,
        nAngle: 45,
        bIsDouble: false,
        nTrackGap: 33,
        junctionCount: 2,
        sDirection: "none",
        nViewWidth: 25,
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "標準的な曲線レール。PC枕木版と共通で使用可能。",
        sExtra: ""
    },

    "KATO_R282-45": {
        sName: "曲線線路 R282-45",
        sProductCode: "2x-xxx",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "curve",
        nLength: 0,
        nRadius: 282,
        nAngle: 45,
        bIsDouble: false,
        nTrackGap: 33,
        junctionCount: 2,
        sDirection: "none",
        nViewWidth: 25,
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "標準的な曲線レール。PC枕木版と共通で使用可能。",
        sExtra: ""
    },

    "KATO_R481-15": {
        sName: "曲線線路 R481-15",
        sProductCode: "20-160",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "curve",
        nLength: 0,
        nRadius: 481,
        nAngle: 15,
        bIsDouble: false,
        nTrackGap: 33,
        junctionCount: 2,
        sDirection: "none",
        nViewWidth: 25,
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "4番ポイントと同一半径。",
        sExtra: ""
    },    

    "KATO_R718-15": {
        sName: "曲線線路 R718-15",
        sProductCode: "20-150",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "curve",
        nLength: 0,
        nRadius: 718,
        nAngle: 15,
        bIsDouble: false,
        nTrackGap: 33,
        junctionCount: 2,
        sDirection: "none",
        nViewWidth: 25,
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "6番ポイントと同一半径。",
        sExtra: ""
    }, 
 
 // --- 複線直線レール (248mm) ---
    "KATO_WS248": {
        sName: "複線直線線路 WS248",
        sProductCode: "20-xxx",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "straight",
        nLength: 248,
        nRadius: 0,
        nAngle: 0,
        bIsDouble: true,      // 複線フラグをON
        nTrackGap: 33,       // 内側レールは (414 - 33) で自動計算される
        junctionCount: 4,
        sDirection: "none",
        nViewWidth: 57.5,       // 道床2本分の幅
        nHeight: 0,
        nGauge: 9,
         sColor: "Green",
        sComment: "複線レール。",
        sExtra: ""
    },
    
    // --- 複線曲線レール (代表半径 315mm / 282mm) ---
    "KATO_WR315_282-45": {
        sName: "複線曲線線路 WR315/282-45",
        sProductCode: "20-xxx",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "curve",
        nLength: 0,
        nRadius: 315,        // 外側を代表半径として指定
        nAngle: 45,
        bIsDouble: true,      // 複線フラグをON
        nTrackGap: 33,       // 内側レールは (414 - 33) で自動計算される
        junctionCount: 4,
        sDirection: "none",
        nViewWidth: 57.5,       // 道床2本分の幅
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "カント付き複線曲線。内側はR381。",
        sExtra: ""
    },
    
    // --- 複線曲線レール (代表半径 414mm / 381mm) ---
    "KATO_WR414_381-45": {
        sName: "複線曲線線路 WR414/381-45",
        sProductCode: "20-540",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "curve",
        nLength: 0,
        nRadius: 414,        // 外側を代表半径として指定
        nAngle: 45,
        bIsDouble: true,      // 複線フラグをON
        nTrackGap: 33,       // 内側レールは (414 - 33) で自動計算される
        junctionCount: 4,
        sDirection: "none",
        nViewWidth: 57.5,       // 道床2本分の幅
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "カント付き複線曲線。内側はR381。",
        sExtra: ""
    },

    // --- 複線アプローチレール (左) ---
    "KATO_WR414_381-22.5L": {
        sName: "複線アプローチ線路 R414/381-22.5L",
        sProductCode: "20-544",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "approach",
        nLength: 0,
        nRadius: 414,
        nAngle: 22.5,
        bIsDouble: true,
        nTrackGap: 33,
        junctionCount: 4,
        sDirection: "left",  // 左方向にカーブが始まるアプローチ
        nViewWidth: 57.5,
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "カント導入用アプローチレール（左用）。",
        sExtra: ""
    },

    // --- 複線アプローチレール (右) ---
    "KATO_WR414_381-22.5R": {
        sName: "複線アプローチ線路 R414/381-22.5R",
        sProductCode: "20-544",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "approach",
        nLength: 0,
        nRadius: 414,
        nAngle: 22.5,
        bIsDouble: true,
        nTrackGap: 33,
        junctionCount: 4,
        sDirection: "right",
        nViewWidth: 57.5,
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "カント導入用アプローチレール（右用）。",
        sExtra: ""
    },

     // --- 複線曲線レール (代表半径 414mm / 381mm) ---
    "KATO_WR414_381-45": {
        sName: "複線曲線線路 WR414/381-45",
        sProductCode: "20-540",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "curve",
        nLength: 0,
        nRadius: 414,        // 外側を代表半径として指定
        nAngle: 45,
        bIsDouble: true,      // 複線フラグをON
        nTrackGap: 33,       // 内側レールは (414 - 33) で自動計算される
        junctionCount: 4,
        sDirection: "none",
        nViewWidth: 57.5,       // 道床2本分の幅
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "カント付き複線曲線。内側はR381。",
        sExtra: ""
    },
}

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
    ...straightData_tomix,
    ...data_others
};
