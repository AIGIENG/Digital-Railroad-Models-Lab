// 規格定義データ: standards.js

const STANDARDS = {
    // KATO Nゲージ (ユニトラック)
    "KATO_N": {
        gauge: 9.0,      // 軌間(mm)
        space: 33.0,     // 複線間隔(mm)
        defWidth: 25.0,  // デフォルトの道床幅(mm)
        label: "KATO N"
    },
    // TOMIX Nゲージ (ファイントラック)
    "TOMIX_N": {
        gauge: 9.0,      // 軌間(mm)
        space: 37.0,     // 複線間隔(mm)
        defWidth: 18.0,  // デフォルトの道床幅(mm)
        label: "TOMIX N"
    },
    // KATO HOゲージ (ユニトラックHO)
    "KATO_HO": {
        gauge: 16.5,     // 軌間(mm)
        space: 60.0,     // 複線間隔(mm)
        defWidth: 40.0,  // デフォルトの道床幅(mm)
        label: "KATO HO"
    },
    // 参考: ナローゲージ (等)
    "NARROW_65": {
        gauge: 6.5,
        space: 20.0,
        defWidth: 12.0,
        label: "Z/Narrow"
    }
};

// プログラム側で使いやすくするためのヘルパー関数（任意）
function getStandard(stdKey) {
    return STANDARDS[stdKey] || { gauge: 9, space: 33, defWidth: 18 };
}