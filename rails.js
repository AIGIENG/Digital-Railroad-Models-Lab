/**
 * rails.js - レール・ストラクチャー定義データ
 * * 【記述ルール】
 * 1. キー名（例: "KATO_S248"）は自動的に sId として処理されます。
 * 2. 型を厳守（s=文字列, n=数値, b=真偽値）。
 * 3. 全てのデータで全18項目（sId除く）を必ず記述してください。
 *    sRoleの種類によって無視される項目もありますが、省略はできません。
 *    Black	#000000	無彩色
 *    White	#ffffff	無彩色
 *    Gray	#808080	無彩色
 *    Red	#ff0000	赤系
 *    Blue	#0000ff	青系
 *    Green	#008000	緑系
 *    Yellow	#ffff00	黄色系
 *    Cyan	#00ffff	シアン系
 *    Magenta	#ff00ff	マゼンタ系
 *    Orange	#ffa500	オレンジ系
  */

const railData = {

    // KATO(N)
    // --- 直線線路 ---
    "KATO_S248": {
        sName: "直線線路 S248",
        sProductCode: "20-000",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "straight",
        nLength: 248,
        nRadius: 0,
        nAngle: 0,
        bIsDouble: false,
        nTrackGap: 33,
        junctionCount: 2,
        sDirection: "none",
        nViewWidth: 25,
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "標準的な直線レール。PC枕木版と共通で使用可能。",
        sExtra: ""
    },

    "KATO_S186": {
        sName: "直線線路 S186",
        sProductCode: "20-010",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "straight",
        nLength: 186,
        nRadius: 0,
        nAngle: 0,
        bIsDouble: false,
        nTrackGap: 33,
        junctionCount: 2,
        sDirection: "none",
        nViewWidth: 25,
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "標準的な直線レール。PC枕木版と共通で使用可能。",
        sExtra: ""
    },

     "KATO_S124": {
        sName: "直線線路 S124",
        sProductCode: "20-020",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "straight",
        nLength: 124,
        nRadius: 0,
        nAngle: 0,
        bIsDouble: false,
        nTrackGap: 33,
        junctionCount: 2,
        sDirection: "none",
        nViewWidth: 25,
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "標準的な直線レール。",
        sExtra: ""
    },

    "KATO_S124C": {
        sName: "リレーラー線路 S124C",
        sProductCode: "20-026",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "straight",
        nLength: 124,
        nRadius: 0,
        nAngle: 0,
        bIsDouble: false,
        nTrackGap: 33,
        junctionCount: 2,
        sDirection: "none",
        nViewWidth: 25,
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "踏板別途。",
        sExtra: ""
    },
 
    "KATO_S124C #2": {
        sName: "踏切線路#2 S124C",
        sProductCode: "20-027",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "straight",
        nLength: 124,
        nRadius: 0,
        nAngle: 0,
        bIsDouble: false,
        nTrackGap: 33,
        junctionCount: 2,
        sDirection: "none",
        nViewWidth: 25,
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "踏切パーツ別途。",
        sExtra: ""
    },
  
    "KATO_S64": {
        sName: "直線線路 S64",
        sProductCode: "20-030",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "straight",
        nLength: 64,
        nRadius: 0,
        nAngle: 0,
        bIsDouble: false,
        nTrackGap: 33,
        junctionCount: 2,
        sDirection: "none",
        nViewWidth: 25,
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "標準的な直線レール。",
        sExtra: ""
    },
 
    "KATO_S62": {
        sName: "直線線路 S62",
        sProductCode: "20-040",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "straight",
        nLength: 62,
        nRadius: 0,
        nAngle: 0,
        bIsDouble: false,
        nTrackGap: 33,
        junctionCount: 2,
        sDirection: "none",
        nViewWidth: 25,
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "標準的な直線レール。",
        sExtra: ""
    },

    "KATO_S60": {
        sName: "4番ポイント用補助線路60mm",
        sProductCode: "20-220/221(付属)",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "straight",
        nLength: 60,
        nRadius: 0,
        nAngle: 0,
        bIsDouble: false,
        nTrackGap: 33,
        junctionCount: 2,
        sDirection: "none",
        nViewWidth: 25,
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "4番ポイントで使用する60mmの補助線路。単品販売なし。",
        sExtra: ""
    },
 
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
        sDirection: "left",
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
 
    // --- 6番ポイント (左) ---
    "KATO_EP718-15L": {
        sName: "電動ポイント6番(左) EP718-15L",
        sProductCode: "20-202",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "point",
        nLength: 186,
        nRadius: 718,
        nAngle: 15,
        bIsDouble: false,
        nTrackGap: 0,
        junctionCount: 3,
        sDirection: "left",  // 左方向にカーブが始まるポイント
        nViewWidth: 25,
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "V1/V3付属電動ポイント",
        sExtra: ""
    },

    // --- 6番ポイント (右) ---
    "KATO_EP718-15R": {
        sName: "電動ポイント6番(右) EP718-15R",
        sProductCode: "20-203",
        sMaker: "KATO",
        sSeries: "UNITRACK",
        sRole: "point",
        nLength: 186,
        nRadius: 718,
        nAngle: 15,
        bIsDouble: false,
        nTrackGap: 0,
        junctionCount: 3,
        sDirection: "right",  // 右方向にカーブが始まるポイント
        nViewWidth: 25,
        nHeight: 0,
        nGauge: 9,
        sColor: "Green",
        sComment: "V1/V3付属電動ポイント",
        sExtra: ""
    },
 
    // TOMIX(N)
    // --- 直線レール ---
    "TOMIX_S280": {
        sName: "ストレートレール S280",
        sProductCode: "1022",
        sMaker: "TOMIX",
        sSeries: "FINETRACK",
        sRole: "straight",
        nLength: 280,
        nRadius: 0,
        nAngle: 0,
        bIsDouble: false,
        nTrackGap: 37,
        junctionCount: 2,
        sDirection: "none",
        nViewWidth: 18,
        nHeight: 0,
        nGauge: 9,
        sColor: "blue",
        sComment: "標準的な直線レール。PC枕木版と共通で使用可能。",
        sExtra: ""
    },

    "TOMIX_S280-WP": {
        sName: "ワイドPCストレートレール S280",
        sProductCode: "1022",
        sMaker: "TOMIX",
        sSeries: "FINETRACK",
        sRole: "straight",
        nLength: 280,
        nRadius: 0,
        nAngle: 0,
        bIsDouble: false,
        nTrackGap: 37,
        junctionCount: 2,
        sDirection: "none",
        nViewWidth: 37.5,
        nHeight: 0,
        nGauge: 9,
        sColor: "blue",
        sComment: "標準的な直線レール。PC枕木版と共通で使用可能。",
        sExtra: ""
    },
    
    // --- 曲線レール ---
    "TOMIX_C282-45": {
        sName: "カーブレール C282-45",
        sProductCode: "1851",
        sMaker: "TOMIX",
        sSeries: "FINETRACK",
        sRole: "curve",
        nLength: 0,
        nRadius: 282,
        nAngle: 45,
        bIsDouble: false,
        nTrackGap: 37,
        junctionCount: 2,
        sDirection: "none",
        nViewWidth: 18,
        nHeight: 0,
        nGauge: 9,
        sColor: "blue",
        sComment: "標準的な曲線レール。PC枕木版と共通で使用可能。",
        sExtra: ""
    },

    "TOMIX_C282-45-WP": {
        sName: "ワイドPCカーブレール C282-45-WP",
        sProductCode: "1771",
        sMaker: "TOMIX",
        sSeries: "FINETRACK",
        sRole: "curve",
        nLength: 0,
        nRadius: 282,
        nAngle: 45,
        bIsDouble: false,
        nTrackGap: 37,
        junctionCount: 2,
        sDirection: "none",
        nViewWidth: 37.5,
        nHeight: 0,
        nGauge: 9,
        sColor: "blue",
        sComment: "ワイドレール。",
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
        junctionCount: 0,
        sDirection: "none",
        nViewWidth: 80,       // 建物の横幅として使用
        nHeight: 0,
        nGauge: 9,
        sColor: "Orange",
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
        junctionCount: 0,
        sDirection: "front",
        nViewWidth: 1800,      // 横幅
        nHeight: 700,         // 机の高さ
        nGauge: 9,
        sColor: "red",
        sComment: "設営シミュレーション用。1800x450サイズ。",
        sExtra: ""

    }
};
