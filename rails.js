/**
 * rails.js - レール・ストラクチャー定義データ
 * * 【記述ルール】
 * 1. キー名（例: "KATO_S248"）は自動的に sId として処理されます。
 * 2. 型を厳守（s=文字列, n=数値, b=真偽値）。
 * 3. 全てのデータで全17項目（sId除く）を必ず記述してください。
 */

const railData = {
    // --- 直線レール ---
    "KATO_S248": {
        sName: "直線レール S248",
        sProductCode: "20-000",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "straight",
        nLength: 248,
        nRadius: 0,
        nAngle: 0,
        bIsDouble: false,
        nTrackGap: 33,
        sDirection: "none",
        nViewWidth: 25,
        nHeight: 0,
        nGauge: 9,
        sColor: "#cccccc",
        sComment: "標準的な直線レール。PC枕木版と共通で使用可能。",
        sExtra: ""
    },

    "KATO_R317-45": {
        sName: "曲線レール R317-45",
        sProductCode: "2x-xxx",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "curve",
        nLength: 0,
        nRadius: 317,
        nAngle: 45,
        bIsDouble: false,
        nTrackGap: 33,
        sDirection: "none",
        nViewWidth: 25,
        nHeight: 0,
        nGauge: 9,
        sColor: "#cccccc",
        sComment: "標準的な曲線レール。PC枕木版と共通で使用可能。",
        sExtra: ""
    },
    
    // --- 複線曲線レール (代表半径 414mm / 381mm) ---
    "KATO_R414_45_W": {
        sName: "複線曲線 R414/381-45",
        sProductCode: "20-540",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "curve",
        nLength: 0,
        nRadius: 414,        // 外側を代表半径として指定
        nAngle: 45,
        bIsDouble: true,      // 複線フラグをON
        nTrackGap: 33,       // 内側レールは (414 - 33) で自動計算される
        sDirection: "none",
        nViewWidth: 50,       // 道床2本分の幅
        nHeight: 0,
        nGauge: 9,
        sColor: "#999999",
        sComment: "カント付き複線曲線。内側はR381。",
        sExtra: ""
    },

    // --- 複線アプローチレール (左) ---
    "KATO_WR414_22_5L": {
        sName: "複線アプローチ R414/381-22.5L",
        sProductCode: "20-544",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "approach",
        nLength: 0,
        nRadius: 414,
        nAngle: 22.5,
        bIsDouble: true,
        nTrackGap: 33,
        sDirection: "left",  // 左方向にカーブが始まるアプローチ
        nViewWidth: 50,
        nHeight: 0,
        nGauge: 9,
        sColor: "#888888",
        sComment: "カント導入用アプローチレール（左用）。",
        sExtra: ""
    },

    // --- ストラクチャー (駅舎) ---
    "KATO_23_210": {
        sName: "地上駅舎",
        sProductCode: "23-210",
        sMaker: "KATO",
        sSeries: "STRUCTURE",
        sRole: "structure",
        nLength: 160,        // 建物の奥行きとして使用
        nRadius: 0,
        nAngle: 0,
        bIsDouble: false,
        nTrackGap: 0,
        sDirection: "none",
        nViewWidth: 80,       // 建物の横幅として使用
        nHeight: 0,
        nGauge: 9,
        sColor: "#d2b48c",
        sComment: "木造の標準的な駅舎。",
        sExtra: ""
    },

    // --- 備品 (会議机) ---
    "DESK_1800_450": {
        sName: "会議用長机",
        sProductCode: "MTG-1845",
        sMaker: "ASKUL",
        sSeries: "OFFICE",
        sRole: "furniture",
        nLength: 450,        // 奥行き
        nRadius: 0,
        nAngle: 0,
        bIsDouble: false,
        nTrackGap: 0,
        sDirection: "front",
        nViewWidth: 1800,      // 横幅
        nHeight: 700,         // 机の高さ
        nGauge: 9,
        sColor: "#ffffff",
        sComment: "設営シミュレーション用。1800x450サイズ。",
        sExtra: ""
    }
};
