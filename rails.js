const STANDARDS = {
    "KATO_N":  { gauge: 9.0,  space: 33.0, defWidth: 25.0, color: "#4f4", edge: "#040", label: "KATO N"  },
    "TOMIX_N": { gauge: 9.0,  space: 37.0, defWidth: 18.0, color: "#44f", edge: "#004", label: "TOMIX N" },
    "KATO_HO": { gauge: 16.5, space: 60.0, defWidth: 40.0, color: "#4f4", edge: "#040", label: "KATO HO" }
};

const railData = {
    "1.KATO ユニトラック(N)": {
        "1.1.基本(地上用・地上用スラブ含む)": [
            { name: "S248", type: "straight", length: 248, std: "KATO_N", desc: "単線直線 248mm" },
            { name: "S186", type: "straight", length: 186, std: "KATO_N", desc: "単線直線 186mm" },
            { name: "R282-45", type: "curve", radius: 282, angle: 45, std: "KATO_N", desc: "単線曲線 R282-45" }
        ],
        "1.2.複線・複線カント付レール": [
            { name: "WS248", type: "straight", length: 248, std: "KATO_N", isDouble: true, width: 57.5, desc: "複線直線 248mm" },
            { name: "WR315/282-45", type: "curve",    radius: [315,282], angle: 45, std: "KATO_N", isDouble: true, width: 57.5, desc: "複線カント曲線" }
        ],
        "1.3.高架": [],
        "1.4.ポイント": [
            { name: "EP481-15L", type: "point-L", length: 248, radius:481, angle: 15, jointRoles: ["base", "straight", "diverge"], joints: 3,  std: "KATO_N", desc: "4番ポイント左" },
            { name: "EP481-15R", type: "point-R", length: 248, radius:481, angle: 15, jointRoles: ["base", "straight", "diverge"], joints: 3,  std: "KATO_N", desc: "4番ポイント右" },
            { name: "EP718-15L", type: "point-L", length: 248, radius:718, angle: 15, jointRoles: ["base", "straight", "diverge"], joints: 3,  std: "KATO_N", desc: "6番ポイント左" },
            { name: "EP718-15R", type: "point-R", length: 248, radius:718, angle: 15, jointRoles: ["base", "straight", "diverge"], joints: 3,  std: "KATO_N", desc: "6番ポイント右" } 
        ],
        "1.5.その他(一部複線含む)": [
            { name: "S62B", type: "straight", length: 62, std: "KATO_N", joints: 1, desc: "車止め線路" }
        ]
    },
    "2.TOMIX ファイントラック(N)": {
        "2.1.基本(スラブ含めレール全色共通)": [
            { name: "S280", type: "straight", length: 280, std: "TOMIX_N", desc: "ストレートレール S280" },
            { name: "C282-45", type: "curve", radius: 282, angle: 45, std: "TOMIX_N", desc: "カーブレール C282-45" }
        ],
        "2.2.ワイドレール(地上用)": [],
        "2.3.高架": [],
        "2.4.ポイント": [],
        "2.5.その他(一部ワイド含む)": []
    },
    "3.KATO ユニトラック(HO)": {
        "3.1.基本": [
            { name: "S246", type: "straight", length: 246, std: "KATO_HO", desc: "HO単線直線 246mm" },
            { name: "R490-22.5", type: "curve", radius: 490, angle: 22.5, std: "KATO_HO", desc: "HO単線曲線 R490" }
        ],
        "3.2.PC(コンクリート枕木)": [],
        "3.3.ポイント": [],
        "3.5.その他": []
    }
};
