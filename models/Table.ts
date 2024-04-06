// models/Table.ts

import mongoose, { Schema, Document } from "mongoose";

export interface TableInterface extends Document {
	year: string;
	dept: string;
	sem: string;
	subject: string;

	// ******************************* PO:1 *****************************

	po11: string;
	po12: string;
	po13: string;
	po14: string;
	po15: string;

	competency11: string;
	competency12: string;
	competency13: string;
	competency14: string;
	competency15: string;

	indicators11: string;
	indicators12: string;
	indicators13: string;
	indicators14: string;
	indicators15: string;

	weight11: number;
	weight12: number;
	weight13: number;
	weight14: number;
	weight15: number;

	co111: number;
	co112: number;
	co113: number;
	co114: number;
	co115: number;

	co211: number;
	co212: number;
	co213: number;
	co214: number;
	co215: number;

	co311: number;
	co312: number;
	co313: number;
	co314: number;
	co315: number;

	co411: number;
	co412: number;
	co413: number;
	co414: number;
	co415: number;

	co511: number;
	co512: number;
	co513: number;
	co514: number;
	co515: number;

	co611: number;
	co612: number;
	co613: number;
	co614: number;
	co615: number;

	co711: number;
	co712: number;
	co713: number;
	co714: number;
	co715: number;

	po1mapco1: number;
	po1mapco2: number;
	po1mapco3: number;
	po1mapco4: number;
	po1mapco5: number;
	po1mapco6: number;
	po1mapco7: number;

	// ************************ PO:2  ***************************************

	po21: string;

	competency21: string;
	competency22: string;
	competency23: string;
	competency24: string;

	indicators21: string;
	indicators22: string;
	indicators23: string;
	indicators24: string;
	indicators25: string;
	indicators26: string;
	indicators27: string;
	indicators28: string;
	indicators29: string;
	indicators210: string;
	indicators211: string;
	indicators212: string;
	indicators213: string;

	weight21: string;
	weight22: string;
	weight23: string;
	weight24: string;
	weight25: string;
	weight26: string;
	weight27: string;
	weight28: string;
	weight29: string;
	weight210: string;
	weight211: string;
	weight212: string;
	weight213: string;

	co121: number;
	co122: number;
	co123: number;
	co124: number;
	co125: number;
	co126: number;
	co127: number;
	co128: number;
	co129: number;
	co1210: number;
	co1211: number;
	co1212: number;
	co1213: number;

	co221: number;
	co222: number;
	co223: number;
	co224: number;
	co225: number;
	co226: number;
	co227: number;
	co228: number;
	co229: number;
	co2210: number;
	co2211: number;
	co2212: number;
	co2213: number;

	co321: number;
	co322: number;
	co323: number;
	co324: number;
	co325: number;
	co326: number;
	co327: number;
	co328: number;
	co329: number;
	co3210: number;
	co3211: number;
	co3212: number;
	co3213: number;

	co421: number;
	co422: number;
	co423: number;
	co424: number;
	co425: number;
	co426: number;
	co427: number;
	co428: number;
	co429: number;
	co4210: number;
	co4211: number;
	co4212: number;
	co4213: number;

	co521: number;
	co522: number;
	co523: number;
	co524: number;
	co525: number;
	co526: number;
	co527: number;
	co528: number;
	co529: number;
	co5210: number;
	co5211: number;
	co5212: number;
	co5213: number;

	co621: number;
	co622: number;
	co623: number;
	co624: number;
	co625: number;
	co626: number;
	co627: number;
	co628: number;
	co629: number;
	co6210: number;
	co6211: number;
	co6212: number;
	co6213: number;

	co721: number;
	co722: number;
	co723: number;
	co724: number;
	co725: number;
	co726: number;
	co727: number;
	co728: number;
	co729: number;
	co7210: number;
	co7211: number;
	co7212: number;
	co7213: number;

	po2mapco1: number;
	po2mapco2: number;
	po2mapco3: number;
	po2mapco4: number;
	po2mapco5: number;
	po2mapco6: number;
	po2mapco7: number;

	// ************************ PO:3  ***************************************

	po31: string;

	competency31: string;
	competency32: string;
	competency33: string;
	competency34: string;

	indicators31: string;
	indicators32: string;
	indicators33: string;
	indicators34: string;
	indicators35: string;
	indicators36: string;
	indicators37: string;
	indicators38: string;
	indicators39: string;
	indicators310: string;
	indicators311: string;
	indicators312: string;
	indicators313: string;

	weight31: string;
	weight32: string;
	weight33: string;
	weight34: string;
	weight35: string;
	weight36: string;
	weight37: string;
	weight38: string;
	weight39: string;
	weight310: string;
	weight311: string;
	weight312: string;
	weight313: string;

	co131: number;
	co132: number;
	co133: number;
	co134: number;
	co135: number;
	co136: number;
	co137: number;
	co138: number;
	co139: number;
	co1310: number;
	co1311: number;
	co1312: number;
	co1313: number;

	co231: number;
	co232: number;
	co233: number;
	co234: number;
	co235: number;
	co236: number;
	co237: number;
	co238: number;
	co239: number;
	co2310: number;
	co2311: number;
	co2312: number;
	co2313: number;

	co331: number;
	co332: number;
	co333: number;
	co334: number;
	co335: number;
	co336: number;
	co337: number;
	co338: number;
	co339: number;
	co3310: number;
	co3311: number;
	co3312: number;
	co3313: number;

	co431: number;
	co432: number;
	co433: number;
	co434: number;
	co435: number;
	co436: number;
	co437: number;
	co438: number;
	co439: number;
	co4310: number;
	co4311: number;
	co4312: number;
	co4313: number;

	co531: number;
	co532: number;
	co533: number;
	co534: number;
	co535: number;
	co536: number;
	co537: number;
	co538: number;
	co539: number;
	co5310: number;
	co5311: number;
	co5312: number;
	co5313: number;

	co631: number;
	co632: number;
	co633: number;
	co634: number;
	co635: number;
	co636: number;
	co637: number;
	co638: number;
	co639: number;
	co6310: number;
	co6311: number;
	co6312: number;
	co6313: number;

	co731: number;
	co732: number;
	co733: number;
	co734: number;
	co735: number;
	co736: number;
	co737: number;
	co738: number;
	co739: number;
	co7310: number;
	co7311: number;
	co7312: number;
	co7313: number;

	po3mapco1: number;
	po3mapco2: number;
	po3mapco3: number;
	po3mapco4: number;
	po3mapco5: number;
	po3mapco6: number;
	po3mapco7: number;

	// ************************ PO:4  ***************************************

	po41: string;

	competency41: string;
	competency42: string;
	competency43: string;

	indicators41: string;
	indicators42: string;
	indicators43: string;
	indicators44: string;
	indicators45: string;
	indicators46: string;
	indicators47: string;
	indicators48: string;
	indicators49: string;
	indicators410: string;

	weight41: string;
	weight42: string;
	weight43: string;
	weight44: string;
	weight45: string;
	weight46: string;
	weight47: string;
	weight48: string;
	weight49: string;
	weight410: string;

	co141: number;
	co142: number;
	co143: number;
	co144: number;
	co145: number;
	co146: number;
	co147: number;
	co148: number;
	co149: number;
	co1410: number;

	co241: number;
	co242: number;
	co243: number;
	co244: number;
	co245: number;
	co246: number;
	co247: number;
	co248: number;
	co249: number;
	co2410: number;

	co341: number;
	co342: number;
	co343: number;
	co344: number;
	co345: number;
	co346: number;
	co347: number;
	co348: number;
	co349: number;
	co3410: number;

	co441: number;
	co442: number;
	co443: number;
	co444: number;
	co445: number;
	co446: number;
	co447: number;
	co448: number;
	co449: number;
	co4410: number;

	co541: number;
	co542: number;
	co543: number;
	co544: number;
	co545: number;
	co546: number;
	co547: number;
	co548: number;
	co549: number;
	co5410: number;

	co641: number;
	co642: number;
	co643: number;
	co644: number;
	co645: number;
	co646: number;
	co647: number;
	co648: number;
	co649: number;
	co6410: number;

	co741: number;
	co742: number;
	co743: number;
	co744: number;
	co745: number;
	co746: number;
	co747: number;
	co748: number;
	co749: number;
	co7410: number;

	po4mapco1: number;
	po4mapco2: number;
	po4mapco3: number;
	po4mapco4: number;
	po4mapco5: number;
	po4mapco6: number;
	po4mapco7: number;

	// ************************ PO:5  ***************************************

	po51: string;

	competency51: string;
	competency52: string;
	competency53: string;

	indicators51: string;
	indicators52: string;
	indicators53: string;
	indicators54: string;
	indicators55: string;
	indicators56: string;

	weight51: string;
	weight52: string;
	weight53: string;
	weight54: string;
	weight55: string;
	weight56: string;

	co151: number;
	co152: number;
	co153: number;
	co154: number;
	co155: number;
	co156: number;

	co251: number;
	co252: number;
	co253: number;
	co254: number;
	co255: number;
	co256: number;

	co351: number;
	co352: number;
	co353: number;
	co354: number;
	co355: number;
	co356: number;

	co451: number;
	co452: number;
	co453: number;
	co454: number;
	co455: number;
	co456: number;

	co551: number;
	co552: number;
	co553: number;
	co554: number;
	co555: number;
	co556: number;

	co651: number;
	co652: number;
	co653: number;
	co654: number;
	co655: number;
	co656: number;

	co751: number;
	co752: number;
	co753: number;
	co754: number;
	co755: number;
	co756: number;

	po5mapco1: number;
	po5mapco2: number;
	po5mapco3: number;
	po5mapco4: number;
	po5mapco5: number;
	po5mapco6: number;
	po5mapco7: number;

	// ************************ PO:6  ***************************************

	po61: string;

	competency61: string;
	competency62: string;

	indicators61: string;
	indicators62: string;

	weight61: string;
	weight62: string;

	co161: number;
	co162: number;

	co261: number;
	co262: number;

	co361: number;
	co362: number;

	co461: number;
	co462: number;

	co561: number;
	co562: number;

	co661: number;
	co662: number;

	co761: number;
	co762: number;

	po6mapco1: number;
	po6mapco2: number;
	po6mapco3: number;
	po6mapco4: number;
	po6mapco5: number;
	po6mapco6: number;
	po6mapco7: number;

	// ************************ PO:7  ***************************************

	po71: string;

	competency71: string;
	competency72: string;

	indicators71: string;
	indicators72: string;
	indicators73: string;
	indicators74: string;

	weight71: string;
	weight72: string;
	weight73: string;
	weight74: string;

	co171: number;
	co172: number;
	co173: number;
	co174: number;

	co271: number;
	co272: number;
	co273: number;
	co274: number;

	co371: number;
	co372: number;
	co373: number;
	co374: number;

	co471: number;
	co472: number;
	co473: number;
	co474: number;

	co571: number;
	co572: number;
	co573: number;
	co574: number;

	co671: number;
	co672: number;
	co673: number;
	co674: number;

	co771: number;
	co772: number;
	co773: number;
	co774: number;

	po7mapco1: number;
	po7mapco2: number;
	po7mapco3: number;
	po7mapco4: number;
	po7mapco5: number;
	po7mapco6: number;
	po7mapco7: number;
	// ************************ PO:8  ***************************************

	po81: string;

	competency81: string;
	competency82: string;

	indicators81: string;
	indicators82: string;
	indicators83: string;

	weight81: string;
	weight82: string;
	weight83: string;

	co181: number;
	co182: number;
	co183: number;

	co281: number;
	co282: number;
	co283: number;

	co381: number;
	co382: number;
	co383: number;

	co481: number;
	co482: number;
	co483: number;

	co581: number;
	co582: number;
	co583: number;

	co681: number;
	co682: number;
	co683: number;

	co781: number;
	co782: number;
	co783: number;

	po8mapco1: number;
	po8mapco2: number;
	po8mapco3: number;
	po8mapco4: number;
	po8mapco5: number;
	po8mapco6: number;
	po8mapco7: number;

	// ************************ PO:9  ***************************************

	po91: string;

	competency91: string;
	competency92: string;
	competency93: string;

	indicators91: string;
	indicators92: string;
	indicators93: string;
	indicators94: string;
	indicators95: string;
	indicators96: string;
	indicators97: string;

	weight91: string;
	weight92: string;
	weight93: string;
	weight94: string;
	weight95: string;
	weight96: string;
	weight97: string;

	co191: number;
	co192: number;
	co193: number;
	co194: number;
	co195: number;
	co196: number;
	co197: number;

	co291: number;
	co292: number;
	co293: number;
	co294: number;
	co295: number;
	co296: number;
	co297: number;

	co391: number;
	co392: number;
	co393: number;
	co394: number;
	co395: number;
	co396: number;
	co397: number;

	co491: number;
	co492: number;
	co493: number;
	co494: number;
	co495: number;
	co496: number;
	co497: number;

	co591: number;
	co592: number;
	co593: number;
	co594: number;
	co595: number;
	co596: number;
	co597: number;

	co691: number;
	co692: number;
	co693: number;
	co694: number;
	co695: number;
	co696: number;
	co697: number;

	co791: number;
	co792: number;
	co793: number;
	co794: number;
	co795: number;
	co796: number;
	co797: number;

	po9mapco1: number;
	po9mapco2: number;
	po9mapco3: number;
	po9mapco4: number;
	po9mapco5: number;
	po9mapco6: number;
	po9mapco7: number;

	// ************************ PO: 10  ***************************************

	po101: string;

	competency101: string;
	competency102: string;
	competency103: string;

	indicators101: string;
	indicators102: string;
	indicators103: string;
	indicators104: string;
	indicators105: string;
	indicators106: string;
	indicators107: string;

	weight101: string;
	weight102: string;
	weight103: string;
	weight104: string;
	weight105: string;
	weight106: string;
	weight107: string;

	co1101: number;
	co1102: number;
	co1103: number;
	co1104: number;
	co1105: number;
	co1106: number;
	co1107: number;

	co2101: number;
	co2102: number;
	co2103: number;
	co2104: number;
	co2105: number;
	co2106: number;
	co2107: number;

	co3101: number;
	co3102: number;
	co3103: number;
	co3104: number;
	co3105: number;
	co3106: number;
	co3107: number;

	co4101: number;
	co4102: number;
	co4103: number;
	co4104: number;
	co4105: number;
	co4106: number;
	co4107: number;

	co5101: number;
	co5102: number;
	co5103: number;
	co5104: number;
	co5105: number;
	co5106: number;
	co5107: number;

	co6101: number;
	co6102: number;
	co6103: number;
	co6104: number;
	co6105: number;
	co6106: number;
	co6107: number;

	co7101: number;
	co7102: number;
	co7103: number;
	co7104: number;
	co7105: number;
	co7106: number;
	co7107: number;

	po10mapco1: number;
	po10mapco2: number;
	po10mapco3: number;
	po10mapco4: number;
	po10mapco5: number;
	po10mapco6: number;
	po10mapco7: number;

	// ************************ PO: 11  ***************************************

	po111: string;

	competency111: string;
	competency112: string;
	competency113: string;

	indicators111: string;
	indicators112: string;
	indicators113: string;
	indicators114: string;
	indicators115: string;

	weight111: string;
	weight112: string;
	weight113: string;
	weight114: string;
	weight115: string;

	co1111: number;
	co1112: number;
	co1113: number;
	co1114: number;
	co1115: number;

	co2111: number;
	co2112: number;
	co2113: number;
	co2114: number;
	co2115: number;

	co3111: number;
	co3112: number;
	co3113: number;
	co3114: number;
	co3115: number;

	co4111: number;
	co4112: number;
	co4113: number;
	co4114: number;
	co4115: number;

	co5111: number;
	co5112: number;
	co5113: number;
	co5114: number;
	co5115: number;

	co6111: number;
	co6112: number;
	co6113: number;
	co6114: number;
	co6115: number;

	co7111: number;
	co7112: number;
	co7113: number;
	co7114: number;
	co7115: number;

	po11mapco1: number;
	po11mapco2: number;
	po11mapco3: number;
	po11mapco4: number;
	po11mapco5: number;
	po11mapco6: number;
	po11mapco7: number;

	// ************************ PO: 12  ***************************************

	po121: string;

	competency121: string;
	competency122: string;
	competency123: string;

	indicators121: string;
	indicators122: string;
	indicators123: string;
	indicators124: string;
	indicators125: string;
	indicators126: string;

	weight121: string;
	weight122: string;
	weight123: string;
	weight124: string;
	weight125: string;
	weight126: string;

	co1121: number;
	co1122: number;
	co1123: number;
	co1124: number;
	co1125: number;
	co1126: number;

	co2121: number;
	co2122: number;
	co2123: number;
	co2124: number;
	co2125: number;
	co2126: number;

	co3121: number;
	co3122: number;
	co3123: number;
	co3124: number;
	co3125: number;
	co3126: number;

	co4121: number;
	co4122: number;
	co4123: number;
	co4124: number;
	co4125: number;
	co4126: number;

	co5121: number;
	co5122: number;
	co5123: number;
	co5124: number;
	co5125: number;
	co5126: number;

	co6121: number;
	co6122: number;
	co6123: number;
	co6124: number;
	co6125: number;
	co6126: number;

	co7121: number;
	co7122: number;
	co7123: number;
	co7124: number;
	co7125: number;
	co7126: number;

	po12mapco1: number;
	po12mapco2: number;
	po12mapco3: number;
	po12mapco4: number;
	po12mapco5: number;
	po12mapco6: number;
	po12mapco7: number;

	// ******************************* PSO:1 *****************************

	pso11: string;

	psocompetency11: string;
	psocompetency12: string;

	psoindicators11: string;
	psoindicators12: string;
	psoindicators13: string;
	psoindicators14: string;
	psoindicators15: string;

	psoweight11: number;
	psoweight12: number;
	psoweight13: number;
	psoweight14: number;
	psoweight15: number;

	psoco111: number;
	psoco112: number;
	psoco113: number;
	psoco114: number;
	psoco115: number;

	psoco211: number;
	psoco212: number;
	psoco213: number;
	psoco214: number;
	psoco215: number;

	psoco311: number;
	psoco312: number;
	psoco313: number;
	psoco314: number;
	psoco315: number;

	psoco411: number;
	psoco412: number;
	psoco413: number;
	psoco414: number;
	psoco415: number;

	psoco511: number;
	psoco512: number;
	psoco513: number;
	psoco514: number;
	psoco515: number;

	psoco611: number;
	psoco612: number;
	psoco613: number;
	psoco614: number;
	psoco615: number;

	psoco711: number;
	psoco712: number;
	psoco713: number;
	psoco714: number;
	psoco715: number;

	pso1mapco1: number;
	pso1mapco2: number;
	pso1mapco3: number;
	pso1mapco4: number;
	pso1mapco5: number;
	pso1mapco6: number;
	pso1mapco7: number;

	// ******************************* PSO:1 *****************************

	pso21: string;

	psocompetency21: string;
	psocompetency22: string;

	psoindicators21: string;
	psoindicators22: string;
	psoindicators23: string;
	psoindicators24: string;

	psoweight21: number;
	psoweight22: number;
	psoweight23: number;
	psoweight24: number;

	psoco121: number;
	psoco122: number;
	psoco123: number;
	psoco124: number;

	psoco221: number;
	psoco222: number;
	psoco223: number;
	psoco224: number;

	psoco321: number;
	psoco322: number;
	psoco323: number;
	psoco324: number;

	psoco421: number;
	psoco422: number;
	psoco423: number;
	psoco424: number;

	psoco521: number;
	psoco522: number;
	psoco523: number;
	psoco524: number;

	psoco621: number;
	psoco622: number;
	psoco623: number;
	psoco624: number;

	psoco721: number;
	psoco722: number;
	psoco723: number;
	psoco724: number;

	pso2mapco1: number;
	pso2mapco2: number;
	pso2mapco3: number;
	pso2mapco4: number;
	pso2mapco5: number;
	pso2mapco6: number;
	pso2mapco7: number;
}

const TableSchema = new Schema<TableInterface>({
	po11: { type: String },
	po12: { type: String },
	po13: { type: String },
	po14: { type: String },
	po15: { type: String },

	competency11: { type: String },
	competency12: { type: String },
	competency13: { type: String },
	competency14: { type: String },
	competency15: { type: String },

	indicators11: { type: String },
	indicators12: { type: String },
	indicators13: { type: String },
	indicators14: { type: String },
	indicators15: { type: String },

	weight11: { type: Number },
	weight12: { type: Number },
	weight13: { type: Number },
	weight14: { type: Number },
	weight15: { type: Number },

	co111: { type: Number },
	co112: { type: Number },
	co113: { type: Number },
	co114: { type: Number },
	co115: { type: Number },

	co211: { type: Number },
	co212: { type: Number },
	co213: { type: Number },
	co214: { type: Number },
	co215: { type: Number },

	co311: { type: Number },
	co312: { type: Number },
	co313: { type: Number },
	co314: { type: Number },
	co315: { type: Number },

	co411: { type: Number },
	co412: { type: Number },
	co413: { type: Number },
	co414: { type: Number },
	co415: { type: Number },

	co511: { type: Number },
	co512: { type: Number },
	co513: { type: Number },
	co514: { type: Number },
	co515: { type: Number },

	co611: { type: Number },
	co612: { type: Number },
	co613: { type: Number },
	co614: { type: Number },
	co615: { type: Number },

	co711: { type: Number },
	co712: { type: Number },
	co713: { type: Number },
	co714: { type: Number },
	co715: { type: Number },

	po1mapco1: { type: Number },
	po1mapco2: { type: Number },
	po1mapco3: { type: Number },
	po1mapco4: { type: Number },
	po1mapco5: { type: Number },
	po1mapco6: { type: Number },
	po1mapco7: { type: Number },

	year: { type: String },
	dept: { type: String },
	sem: { type: String },
	subject: { type: String },

	// ************************ PO:2  ***************************************

	po21: { type: String },

	competency21: { type: String },
	competency22: { type: String },
	competency23: { type: String },
	competency24: { type: String },

	indicators21: { type: String },
	indicators22: { type: String },
	indicators23: { type: String },
	indicators24: { type: String },
	indicators25: { type: String },
	indicators26: { type: String },
	indicators27: { type: String },
	indicators28: { type: String },
	indicators29: { type: String },
	indicators210: { type: String },
	indicators211: { type: String },
	indicators212: { type: String },
	indicators213: { type: String },

	weight21: { type: String },
	weight22: { type: String },
	weight23: { type: String },
	weight24: { type: String },
	weight25: { type: String },
	weight26: { type: String },
	weight27: { type: String },
	weight28: { type: String },
	weight29: { type: String },
	weight210: { type: String },
	weight211: { type: String },
	weight212: { type: String },
	weight213: { type: String },

	co121: { type: Number },
	co122: { type: Number },
	co123: { type: Number },
	co124: { type: Number },
	co125: { type: Number },
	co126: { type: Number },
	co127: { type: Number },
	co128: { type: Number },
	co129: { type: Number },
	co1210: { type: Number },
	co1211: { type: Number },
	co1212: { type: Number },
	co1213: { type: Number },

	co221: { type: Number },
	co222: { type: Number },
	co223: { type: Number },
	co224: { type: Number },
	co225: { type: Number },
	co226: { type: Number },
	co227: { type: Number },
	co228: { type: Number },
	co229: { type: Number },
	co2210: { type: Number },
	co2211: { type: Number },
	co2212: { type: Number },
	co2213: { type: Number },

	co321: { type: Number },
	co322: { type: Number },
	co323: { type: Number },
	co324: { type: Number },
	co325: { type: Number },
	co326: { type: Number },
	co327: { type: Number },
	co328: { type: Number },
	co329: { type: Number },
	co3210: { type: Number },
	co3211: { type: Number },
	co3212: { type: Number },
	co3213: { type: Number },

	co421: { type: Number },
	co422: { type: Number },
	co423: { type: Number },
	co424: { type: Number },
	co425: { type: Number },
	co426: { type: Number },
	co427: { type: Number },
	co428: { type: Number },
	co429: { type: Number },
	co4210: { type: Number },
	co4211: { type: Number },
	co4212: { type: Number },
	co4213: { type: Number },

	co521: { type: Number },
	co522: { type: Number },
	co523: { type: Number },
	co524: { type: Number },
	co525: { type: Number },
	co526: { type: Number },
	co527: { type: Number },
	co528: { type: Number },
	co529: { type: Number },
	co5210: { type: Number },
	co5211: { type: Number },
	co5212: { type: Number },
	co5213: { type: Number },

	co621: { type: Number },
	co622: { type: Number },
	co623: { type: Number },
	co624: { type: Number },
	co625: { type: Number },
	co626: { type: Number },
	co627: { type: Number },
	co628: { type: Number },
	co629: { type: Number },
	co6210: { type: Number },
	co6211: { type: Number },
	co6212: { type: Number },
	co6213: { type: Number },

	co721: { type: Number },
	co722: { type: Number },
	co723: { type: Number },
	co724: { type: Number },
	co725: { type: Number },
	co726: { type: Number },
	co727: { type: Number },
	co728: { type: Number },
	co729: { type: Number },
	co7210: { type: Number },
	co7211: { type: Number },
	co7212: { type: Number },
	co7213: { type: Number },

	po2mapco1: { type: Number },
	po2mapco2: { type: Number },
	po2mapco3: { type: Number },
	po2mapco4: { type: Number },
	po2mapco5: { type: Number },
	po2mapco6: { type: Number },
	po2mapco7: { type: Number },

	// ************************ PO:3  ***************************************

	po31: { type: String },

	competency31: { type: String },
	competency32: { type: String },
	competency33: { type: String },
	competency34: { type: String },

	indicators31: { type: String },
	indicators32: { type: String },
	indicators33: { type: String },
	indicators34: { type: String },
	indicators35: { type: String },
	indicators36: { type: String },
	indicators37: { type: String },
	indicators38: { type: String },
	indicators39: { type: String },
	indicators310: { type: String },
	indicators311: { type: String },
	indicators312: { type: String },
	indicators313: { type: String },

	weight31: { type: String },
	weight32: { type: String },
	weight33: { type: String },
	weight34: { type: String },
	weight35: { type: String },
	weight36: { type: String },
	weight37: { type: String },
	weight38: { type: String },
	weight39: { type: String },
	weight310: { type: String },
	weight311: { type: String },
	weight312: { type: String },
	weight313: { type: String },

	co131: { type: Number },
	co132: { type: Number },
	co133: { type: Number },
	co134: { type: Number },
	co135: { type: Number },
	co136: { type: Number },
	co137: { type: Number },
	co138: { type: Number },
	co139: { type: Number },
	co1310: { type: Number },
	co1311: { type: Number },
	co1312: { type: Number },
	co1313: { type: Number },

	co231: { type: Number },
	co232: { type: Number },
	co233: { type: Number },
	co234: { type: Number },
	co235: { type: Number },
	co236: { type: Number },
	co237: { type: Number },
	co238: { type: Number },
	co239: { type: Number },
	co2310: { type: Number },
	co2311: { type: Number },
	co2312: { type: Number },
	co2313: { type: Number },

	co331: { type: Number },
	co332: { type: Number },
	co333: { type: Number },
	co334: { type: Number },
	co335: { type: Number },
	co336: { type: Number },
	co337: { type: Number },
	co338: { type: Number },
	co339: { type: Number },
	co3310: { type: Number },
	co3311: { type: Number },
	co3312: { type: Number },
	co3313: { type: Number },

	co431: { type: Number },
	co432: { type: Number },
	co433: { type: Number },
	co434: { type: Number },
	co435: { type: Number },
	co436: { type: Number },
	co437: { type: Number },
	co438: { type: Number },
	co439: { type: Number },
	co4310: { type: Number },
	co4311: { type: Number },
	co4312: { type: Number },
	co4313: { type: Number },

	co531: { type: Number },
	co532: { type: Number },
	co533: { type: Number },
	co534: { type: Number },
	co535: { type: Number },
	co536: { type: Number },
	co537: { type: Number },
	co538: { type: Number },
	co539: { type: Number },
	co5310: { type: Number },
	co5311: { type: Number },
	co5312: { type: Number },
	co5313: { type: Number },

	co631: { type: Number },
	co632: { type: Number },
	co633: { type: Number },
	co634: { type: Number },
	co635: { type: Number },
	co636: { type: Number },
	co637: { type: Number },
	co638: { type: Number },
	co639: { type: Number },
	co6310: { type: Number },
	co6311: { type: Number },
	co6312: { type: Number },
	co6313: { type: Number },

	co731: { type: Number },
	co732: { type: Number },
	co733: { type: Number },
	co734: { type: Number },
	co735: { type: Number },
	co736: { type: Number },
	co737: { type: Number },
	co738: { type: Number },
	co739: { type: Number },
	co7310: { type: Number },
	co7311: { type: Number },
	co7312: { type: Number },
	co7313: { type: Number },

	po3mapco1: { type: Number },
	po3mapco2: { type: Number },
	po3mapco3: { type: Number },
	po3mapco4: { type: Number },
	po3mapco5: { type: Number },
	po3mapco6: { type: Number },
	po3mapco7: { type: Number },

	// ************************ PO:4  ***************************************

	po41: { type: String },

	competency41: { type: String },
	competency42: { type: String },
	competency43: { type: String },

	indicators41: { type: String },
	indicators42: { type: String },
	indicators43: { type: String },
	indicators44: { type: String },
	indicators45: { type: String },
	indicators46: { type: String },
	indicators47: { type: String },
	indicators48: { type: String },
	indicators49: { type: String },
	indicators410: { type: String },

	weight41: { type: String },
	weight42: { type: String },
	weight43: { type: String },
	weight44: { type: String },
	weight45: { type: String },
	weight46: { type: String },
	weight47: { type: String },
	weight48: { type: String },
	weight49: { type: String },
	weight410: { type: String },

	co141: { type: Number },
	co142: { type: Number },
	co143: { type: Number },
	co144: { type: Number },
	co145: { type: Number },
	co146: { type: Number },
	co147: { type: Number },
	co148: { type: Number },
	co149: { type: Number },
	co1410: { type: Number },

	co241: { type: Number },
	co242: { type: Number },
	co243: { type: Number },
	co244: { type: Number },
	co245: { type: Number },
	co246: { type: Number },
	co247: { type: Number },
	co248: { type: Number },
	co249: { type: Number },
	co2410: { type: Number },

	co341: { type: Number },
	co342: { type: Number },
	co343: { type: Number },
	co344: { type: Number },
	co345: { type: Number },
	co346: { type: Number },
	co347: { type: Number },
	co348: { type: Number },
	co349: { type: Number },
	co3410: { type: Number },

	co441: { type: Number },
	co442: { type: Number },
	co443: { type: Number },
	co444: { type: Number },
	co445: { type: Number },
	co446: { type: Number },
	co447: { type: Number },
	co448: { type: Number },
	co449: { type: Number },
	co4410: { type: Number },

	co541: { type: Number },
	co542: { type: Number },
	co543: { type: Number },
	co544: { type: Number },
	co545: { type: Number },
	co546: { type: Number },
	co547: { type: Number },
	co548: { type: Number },
	co549: { type: Number },
	co5410: { type: Number },

	co641: { type: Number },
	co642: { type: Number },
	co643: { type: Number },
	co644: { type: Number },
	co645: { type: Number },
	co646: { type: Number },
	co647: { type: Number },
	co648: { type: Number },
	co649: { type: Number },
	co6410: { type: Number },

	co741: { type: Number },
	co742: { type: Number },
	co743: { type: Number },
	co744: { type: Number },
	co745: { type: Number },
	co746: { type: Number },
	co747: { type: Number },
	co748: { type: Number },
	co749: { type: Number },
	co7410: { type: Number },

	po4mapco1: { type: Number },
	po4mapco2: { type: Number },
	po4mapco3: { type: Number },
	po4mapco4: { type: Number },
	po4mapco5: { type: Number },
	po4mapco6: { type: Number },
	po4mapco7: { type: Number },

	// ************************ PO:5  ***************************************

	po51: { type: String },

	competency51: { type: String },
	competency52: { type: String },
	competency53: { type: String },

	indicators51: { type: String },
	indicators52: { type: String },
	indicators53: { type: String },
	indicators54: { type: String },
	indicators55: { type: String },
	indicators56: { type: String },

	weight51: { type: String },
	weight52: { type: String },
	weight53: { type: String },
	weight54: { type: String },
	weight55: { type: String },
	weight56: { type: String },

	co151: { type: Number },
	co152: { type: Number },
	co153: { type: Number },
	co154: { type: Number },
	co155: { type: Number },
	co156: { type: Number },

	co251: { type: Number },
	co252: { type: Number },
	co253: { type: Number },
	co254: { type: Number },
	co255: { type: Number },
	co256: { type: Number },

	co351: { type: Number },
	co352: { type: Number },
	co353: { type: Number },
	co354: { type: Number },
	co355: { type: Number },
	co356: { type: Number },

	co451: { type: Number },
	co452: { type: Number },
	co453: { type: Number },
	co454: { type: Number },
	co455: { type: Number },
	co456: { type: Number },

	co551: { type: Number },
	co552: { type: Number },
	co553: { type: Number },
	co554: { type: Number },
	co555: { type: Number },
	co556: { type: Number },

	co651: { type: Number },
	co652: { type: Number },
	co653: { type: Number },
	co654: { type: Number },
	co655: { type: Number },
	co656: { type: Number },

	co751: { type: Number },
	co752: { type: Number },
	co753: { type: Number },
	co754: { type: Number },
	co755: { type: Number },
	co756: { type: Number },

	po5mapco1: { type: Number },
	po5mapco2: { type: Number },
	po5mapco3: { type: Number },
	po5mapco4: { type: Number },
	po5mapco5: { type: Number },
	po5mapco6: { type: Number },
	po5mapco7: { type: Number },

	// ************************ PO:6  ***************************************

	po61: { type: String },

	competency61: { type: String },
	competency62: { type: String },

	indicators61: { type: String },
	indicators62: { type: String },

	weight61: { type: String },
	weight62: { type: String },

	co161: { type: Number },
	co162: { type: Number },

	co261: { type: Number },
	co262: { type: Number },

	co361: { type: Number },
	co362: { type: Number },

	co461: { type: Number },
	co462: { type: Number },

	co561: { type: Number },
	co562: { type: Number },

	co661: { type: Number },
	co662: { type: Number },

	co761: { type: Number },
	co762: { type: Number },

	po6mapco1: { type: Number },
	po6mapco2: { type: Number },
	po6mapco3: { type: Number },
	po6mapco4: { type: Number },
	po6mapco5: { type: Number },
	po6mapco6: { type: Number },
	po6mapco7: { type: Number },

	// ************************ PO:7  ***************************************

	po71: { type: String },

	competency71: { type: String },
	competency72: { type: String },

	indicators71: { type: String },
	indicators72: { type: String },
	indicators73: { type: String },
	indicators74: { type: String },

	weight71: { type: String },
	weight72: { type: String },
	weight73: { type: String },
	weight74: { type: String },

	co171: { type: Number },
	co172: { type: Number },
	co173: { type: Number },
	co174: { type: Number },

	co271: { type: Number },
	co272: { type: Number },
	co273: { type: Number },
	co274: { type: Number },

	co371: { type: Number },
	co372: { type: Number },
	co373: { type: Number },
	co374: { type: Number },

	co471: { type: Number },
	co472: { type: Number },
	co473: { type: Number },
	co474: { type: Number },

	co571: { type: Number },
	co572: { type: Number },
	co573: { type: Number },
	co574: { type: Number },

	co671: { type: Number },
	co672: { type: Number },
	co673: { type: Number },
	co674: { type: Number },

	co771: { type: Number },
	co772: { type: Number },
	co773: { type: Number },
	co774: { type: Number },

	po7mapco1: { type: Number },
	po7mapco2: { type: Number },
	po7mapco3: { type: Number },
	po7mapco4: { type: Number },
	po7mapco5: { type: Number },
	po7mapco6: { type: Number },
	po7mapco7: { type: Number },

	// ************************ PO:8  ***************************************

	po81: { type: String },

	competency81: { type: String },
	competency82: { type: String },

	indicators81: { type: String },
	indicators82: { type: String },
	indicators83: { type: String },

	weight81: { type: String },
	weight82: { type: String },
	weight83: { type: String },

	co181: { type: Number },
	co182: { type: Number },
	co183: { type: Number },

	co281: { type: Number },
	co282: { type: Number },
	co283: { type: Number },

	co381: { type: Number },
	co382: { type: Number },
	co383: { type: Number },

	co481: { type: Number },
	co482: { type: Number },
	co483: { type: Number },

	co581: { type: Number },
	co582: { type: Number },
	co583: { type: Number },

	co681: { type: Number },
	co682: { type: Number },
	co683: { type: Number },

	co781: { type: Number },
	co782: { type: Number },
	co783: { type: Number },

	po8mapco1: { type: Number },
	po8mapco2: { type: Number },
	po8mapco3: { type: Number },
	po8mapco4: { type: Number },
	po8mapco5: { type: Number },
	po8mapco6: { type: Number },
	po8mapco7: { type: Number },

	// ************************ PO:9  ***************************************

	po91: { type: String },

	competency91: { type: String },
	competency92: { type: String },
	competency93: { type: String },

	indicators91: { type: String },
	indicators92: { type: String },
	indicators93: { type: String },
	indicators94: { type: String },
	indicators95: { type: String },
	indicators96: { type: String },
	indicators97: { type: String },

	weight91: { type: String },
	weight92: { type: String },
	weight93: { type: String },
	weight94: { type: String },
	weight95: { type: String },
	weight96: { type: String },
	weight97: { type: String },

	co191: { type: Number },
	co192: { type: Number },
	co193: { type: Number },
	co194: { type: Number },
	co195: { type: Number },
	co196: { type: Number },
	co197: { type: Number },

	co291: { type: Number },
	co292: { type: Number },
	co293: { type: Number },
	co294: { type: Number },
	co295: { type: Number },
	co296: { type: Number },
	co297: { type: Number },

	co391: { type: Number },
	co392: { type: Number },
	co393: { type: Number },
	co394: { type: Number },
	co395: { type: Number },
	co396: { type: Number },
	co397: { type: Number },

	co491: { type: Number },
	co492: { type: Number },
	co493: { type: Number },
	co494: { type: Number },
	co495: { type: Number },
	co496: { type: Number },
	co497: { type: Number },

	co591: { type: Number },
	co592: { type: Number },
	co593: { type: Number },
	co594: { type: Number },
	co595: { type: Number },
	co596: { type: Number },
	co597: { type: Number },

	co691: { type: Number },
	co692: { type: Number },
	co693: { type: Number },
	co694: { type: Number },
	co695: { type: Number },
	co696: { type: Number },
	co697: { type: Number },

	co791: { type: Number },
	co792: { type: Number },
	co793: { type: Number },
	co794: { type: Number },
	co795: { type: Number },
	co796: { type: Number },
	co797: { type: Number },

	po9mapco1: { type: Number },
	po9mapco2: { type: Number },
	po9mapco3: { type: Number },
	po9mapco4: { type: Number },
	po9mapco5: { type: Number },
	po9mapco6: { type: Number },
	po9mapco7: { type: Number },

	// ************************ PO: 10  ***************************************

	po101: { type: String },

	competency101: { type: String },
	competency102: { type: String },
	competency103: { type: String },

	indicators101: { type: String },
	indicators102: { type: String },
	indicators103: { type: String },
	indicators104: { type: String },
	indicators105: { type: String },
	indicators106: { type: String },
	indicators107: { type: String },

	weight101: { type: String },
	weight102: { type: String },
	weight103: { type: String },
	weight104: { type: String },
	weight105: { type: String },
	weight106: { type: String },
	weight107: { type: String },

	co1101: { type: Number },
	co1102: { type: Number },
	co1103: { type: Number },
	co1104: { type: Number },
	co1105: { type: Number },
	co1106: { type: Number },
	co1107: { type: Number },

	co2101: { type: Number },
	co2102: { type: Number },
	co2103: { type: Number },
	co2104: { type: Number },
	co2105: { type: Number },
	co2106: { type: Number },
	co2107: { type: Number },

	co3101: { type: Number },
	co3102: { type: Number },
	co3103: { type: Number },
	co3104: { type: Number },
	co3105: { type: Number },
	co3106: { type: Number },
	co3107: { type: Number },

	co4101: { type: Number },
	co4102: { type: Number },
	co4103: { type: Number },
	co4104: { type: Number },
	co4105: { type: Number },
	co4106: { type: Number },
	co4107: { type: Number },

	co5101: { type: Number },
	co5102: { type: Number },
	co5103: { type: Number },
	co5104: { type: Number },
	co5105: { type: Number },
	co5106: { type: Number },
	co5107: { type: Number },

	co6101: { type: Number },
	co6102: { type: Number },
	co6103: { type: Number },
	co6104: { type: Number },
	co6105: { type: Number },
	co6106: { type: Number },
	co6107: { type: Number },

	co7101: { type: Number },
	co7102: { type: Number },
	co7103: { type: Number },
	co7104: { type: Number },
	co7105: { type: Number },
	co7106: { type: Number },
	co7107: { type: Number },

	po10mapco1: { type: Number },
	po10mapco2: { type: Number },
	po10mapco3: { type: Number },
	po10mapco4: { type: Number },
	po10mapco5: { type: Number },
	po10mapco6: { type: Number },
	po10mapco7: { type: Number },

	// ************************ PO: 10  ***************************************

	po111: { type: String },

	competency111: { type: String },
	competency112: { type: String },
	competency113: { type: String },

	indicators111: { type: String },
	indicators112: { type: String },
	indicators113: { type: String },
	indicators114: { type: String },
	indicators115: { type: String },

	weight111: { type: String },
	weight112: { type: String },
	weight113: { type: String },
	weight114: { type: String },
	weight115: { type: String },

	co1111: { type: Number },
	co1112: { type: Number },
	co1113: { type: Number },
	co1114: { type: Number },
	co1115: { type: Number },

	co2111: { type: Number },
	co2112: { type: Number },
	co2113: { type: Number },
	co2114: { type: Number },
	co2115: { type: Number },

	co3111: { type: Number },
	co3112: { type: Number },
	co3113: { type: Number },
	co3114: { type: Number },
	co3115: { type: Number },

	co4111: { type: Number },
	co4112: { type: Number },
	co4113: { type: Number },
	co4114: { type: Number },
	co4115: { type: Number },

	co5111: { type: Number },
	co5112: { type: Number },
	co5113: { type: Number },
	co5114: { type: Number },
	co5115: { type: Number },

	co6111: { type: Number },
	co6112: { type: Number },
	co6113: { type: Number },
	co6114: { type: Number },
	co6115: { type: Number },

	co7111: { type: Number },
	co7112: { type: Number },
	co7113: { type: Number },
	co7114: { type: Number },
	co7115: { type: Number },

	po11mapco1: { type: Number },
	po11mapco2: { type: Number },
	po11mapco3: { type: Number },
	po11mapco4: { type: Number },
	po11mapco5: { type: Number },
	po11mapco6: { type: Number },
	po11mapco7: { type: Number },

	// ************************ PO: 12  ***************************************

	po121: { type: String },

	competency121: { type: String },
	competency122: { type: String },
	competency123: { type: String },

	indicators121: { type: String },
	indicators122: { type: String },
	indicators123: { type: String },
	indicators124: { type: String },
	indicators125: { type: String },
	indicators126: { type: String },

	weight121: { type: String },
	weight122: { type: String },
	weight123: { type: String },
	weight124: { type: String },
	weight125: { type: String },
	weight126: { type: String },

	co1121: { type: Number },
	co1122: { type: Number },
	co1123: { type: Number },
	co1124: { type: Number },
	co1125: { type: Number },
	co1126: { type: Number },

	co2121: { type: Number },
	co2122: { type: Number },
	co2123: { type: Number },
	co2124: { type: Number },
	co2125: { type: Number },
	co2126: { type: Number },

	co3121: { type: Number },
	co3122: { type: Number },
	co3123: { type: Number },
	co3124: { type: Number },
	co3125: { type: Number },
	co3126: { type: Number },

	co4121: { type: Number },
	co4122: { type: Number },
	co4123: { type: Number },
	co4124: { type: Number },
	co4125: { type: Number },
	co4126: { type: Number },

	co5121: { type: Number },
	co5122: { type: Number },
	co5123: { type: Number },
	co5124: { type: Number },
	co5125: { type: Number },
	co5126: { type: Number },

	co6121: { type: Number },
	co6122: { type: Number },
	co6123: { type: Number },
	co6124: { type: Number },
	co6125: { type: Number },
	co6126: { type: Number },

	co7121: { type: Number },
	co7122: { type: Number },
	co7123: { type: Number },
	co7124: { type: Number },
	co7125: { type: Number },
	co7126: { type: Number },

	po12mapco1: { type: Number },
	po12mapco2: { type: Number },
	po12mapco3: { type: Number },
	po12mapco4: { type: Number },
	po12mapco5: { type: Number },
	po12mapco6: { type: Number },
	po12mapco7: { type: Number },

	// ******************************* PSO:1 *****************************

	pso11: { type: String },

	psocompetency11: { type: String },
	psocompetency12: { type: String },

	psoindicators11: { type: String },
	psoindicators12: { type: String },
	psoindicators13: { type: String },
	psoindicators14: { type: String },
	psoindicators15: { type: String },

	psoweight11: { type: Number },
	psoweight12: { type: Number },
	psoweight13: { type: Number },
	psoweight14: { type: Number },
	psoweight15: { type: Number },

	psoco111: { type: Number },
	psoco112: { type: Number },
	psoco113: { type: Number },
	psoco114: { type: Number },
	psoco115: { type: Number },

	psoco211: { type: Number },
	psoco212: { type: Number },
	psoco213: { type: Number },
	psoco214: { type: Number },
	psoco215: { type: Number },

	psoco311: { type: Number },
	psoco312: { type: Number },
	psoco313: { type: Number },
	psoco314: { type: Number },
	psoco315: { type: Number },

	psoco411: { type: Number },
	psoco412: { type: Number },
	psoco413: { type: Number },
	psoco414: { type: Number },
	psoco415: { type: Number },

	psoco511: { type: Number },
	psoco512: { type: Number },
	psoco513: { type: Number },
	psoco514: { type: Number },
	psoco515: { type: Number },

	psoco611: { type: Number },
	psoco612: { type: Number },
	psoco613: { type: Number },
	psoco614: { type: Number },
	psoco615: { type: Number },

	psoco711: { type: Number },
	psoco712: { type: Number },
	psoco713: { type: Number },
	psoco714: { type: Number },
	psoco715: { type: Number },

	pso1mapco1: { type: Number },
	pso1mapco2: { type: Number },
	pso1mapco3: { type: Number },
	pso1mapco4: { type: Number },
	pso1mapco5: { type: Number },
	pso1mapco6: { type: Number },
	pso1mapco7: { type: Number },

	// ******************************* PSO:1 *****************************

	pso21: { type: String },

	psocompetency21: { type: String },
	psocompetency22: { type: String },

	psoindicators21: { type: String },
	psoindicators22: { type: String },
	psoindicators23: { type: String },
	psoindicators24: { type: String },

	psoweight21: { type: Number },
	psoweight22: { type: Number },
	psoweight23: { type: Number },
	psoweight24: { type: Number },

	psoco121: { type: Number },
	psoco122: { type: Number },
	psoco123: { type: Number },
	psoco124: { type: Number },

	psoco221: { type: Number },
	psoco222: { type: Number },
	psoco223: { type: Number },
	psoco224: { type: Number },

	psoco321: { type: Number },
	psoco322: { type: Number },
	psoco323: { type: Number },
	psoco324: { type: Number },

	psoco421: { type: Number },
	psoco422: { type: Number },
	psoco423: { type: Number },
	psoco424: { type: Number },

	psoco521: { type: Number },
	psoco522: { type: Number },
	psoco523: { type: Number },
	psoco524: { type: Number },

	psoco621: { type: Number },
	psoco622: { type: Number },
	psoco623: { type: Number },
	psoco624: { type: Number },

	psoco721: { type: Number },
	psoco722: { type: Number },
	psoco723: { type: Number },
	psoco724: { type: Number },

	pso2mapco1: { type: Number },
	pso2mapco2: { type: Number },
	pso2mapco3: { type: Number },
	pso2mapco4: { type: Number },
	pso2mapco5: { type: Number },
	pso2mapco6: { type: Number },
	pso2mapco7: { type: Number },
});

const Table =
	mongoose.models.Table || mongoose.model<TableInterface>("Table", TableSchema);

export default Table;
