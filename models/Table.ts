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
});

const Table =
	mongoose.models.Table || mongoose.model<TableInterface>("Table", TableSchema);

export default Table;
