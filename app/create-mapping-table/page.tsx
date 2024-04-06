"use client";
import React, { useEffect, useState } from "react";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Input,
	Button,
	Textarea,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Avatar,
	Select,
	SelectItem,
} from "@nextui-org/react";
import axios from "axios";

import { useRouter } from "next/navigation";

interface TableRowData {
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

	year: string;
	dept: string;
	sem: string;
	subject: string;

	// **************** PO:2      ****************************

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
	co221: number;
	co222: number;
	co223: number;
	co224: number;
	co225: number;
	co321: number;
	co322: number;
	co323: number;
	co324: number;
	co325: number;
	co421: number;
	co422: number;
	co423: number;
	co424: number;
	co425: number;
	co521: number;
	co522: number;
	co523: number;
	co524: number;
	co525: number;
	co621: number;
	co622: number;
	co623: number;
	co624: number;
	co625: number;
	co721: number;
	co722: number;
	co723: number;
	co724: number;
	co725: number;

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

	// ************************ PO: 10  ***************************************

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

	// ******************************* PSO:2 *****************************

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

	// ******************************* PSO:3 *****************************

	pso31: string;

	psocompetency31: string;
	psocompetency32: string;

	psoindicators31: string;
	psoindicators32: string;
	psoindicators33: string;
	psoindicators34: string;

	psoweight31: number;
	psoweight32: number;
	psoweight33: number;
	psoweight34: number;

	psoco131: number;
	psoco132: number;
	psoco133: number;
	psoco134: number;

	psoco231: number;
	psoco232: number;
	psoco233: number;
	psoco234: number;

	psoco331: number;
	psoco332: number;
	psoco333: number;
	psoco334: number;

	psoco431: number;
	psoco432: number;
	psoco433: number;
	psoco434: number;

	psoco531: number;
	psoco532: number;
	psoco533: number;
	psoco534: number;

	psoco631: number;
	psoco632: number;
	psoco633: number;
	psoco634: number;

	psoco731: number;
	psoco732: number;
	psoco733: number;
	psoco734: number;

	pso3mapco1: number;
	pso3mapco2: number;
	pso3mapco3: number;
	pso3mapco4: number;
	pso3mapco5: number;
	pso3mapco6: number;
	pso3mapco7: number;
}

export default function App() {
	const router = useRouter();
	//  ************************************      PO:1   *****************************************
	const [po11, setPo11] = useState(
		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);
	const [po12, setPo12] = useState(
		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);
	const [po13, setPo13] = useState(
		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);
	const [po14, setPo14] = useState(
		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);
	const [po15, setPo15] = useState(
		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);

	const [competency11, setCompetency11] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency12, setCompetency12] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency13, setCompetency13] = useState(
		"1.2 Demonstrate competence in basic sciences"
	);
	const [competency14, setCompetency14] = useState(
		"1.3 Demonstrate competence in engineering fundamentals"
	);
	const [competency15, setCompetency15] = useState(
		"1.4 Demonstrate competence in specialized engineering knowledge to the program"
	);

	const [indicators11, setIndicators11] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [indicators12, setIndicators12] = useState(
		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
	);
	const [indicators13, setIndicators13] = useState(
		"1.2.1  Apply laws of natural science to an engineering problem"
	);
	const [indicators14, setIndicators14] = useState(
		"1.3.1  Apply fundamental engineering concepts to solve engineering problems"
	);
	const [indicators15, setIndicators15] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);

	const [weight11, setWeight11] = useState("0.2");
	const [weight12, setWeight12] = useState("0.2");
	const [weight13, setWeight13] = useState("0.2");
	const [weight14, setWeight14] = useState("0.2");
	const [weight15, setWeight15] = useState("0.2");

	const [co111, setCo111] = useState("");
	const [co112, setCo112] = useState("");
	const [co113, setCo113] = useState("");
	const [co114, setCo114] = useState("");
	const [co115, setCo115] = useState("");

	const [co211, setCo211] = useState("");
	const [co212, setCo212] = useState("");
	const [co213, setCo213] = useState("");
	const [co214, setCo214] = useState("");
	const [co215, setCo215] = useState("");

	const [co311, setCo311] = useState("");
	const [co312, setCo312] = useState("");
	const [co313, setCo313] = useState("");
	const [co314, setCo314] = useState("");
	const [co315, setCo315] = useState("");

	const [co411, setCo411] = useState("");
	const [co412, setCo412] = useState("");
	const [co413, setCo413] = useState("");
	const [co414, setCo414] = useState("");
	const [co415, setCo415] = useState("");

	const [co511, setCo511] = useState("");
	const [co512, setCo512] = useState("");
	const [co513, setCo513] = useState("");
	const [co514, setCo514] = useState("");
	const [co515, setCo515] = useState("");

	const [co611, setCo611] = useState("");
	const [co612, setCo612] = useState("");
	const [co613, setCo613] = useState("");
	const [co614, setCo614] = useState("");
	const [co615, setCo615] = useState("");

	const [co711, setCo711] = useState("");
	const [co712, setCo712] = useState("");
	const [co713, setCo713] = useState("");
	const [co714, setCo714] = useState("");
	const [co715, setCo715] = useState("");

	const [po1mapco1, setPo1mapco1] = useState<number | string>("");
	const [po1mapco2, setPo1mapco2] = useState<number | string>("");
	const [po1mapco3, setPo1mapco3] = useState<number | string>("");
	const [po1mapco4, setPo1mapco4] = useState<number | string>("");
	const [po1mapco5, setPo1mapco5] = useState<number | string>("");
	const [po1mapco6, setPo1mapco6] = useState<number | string>("");
	const [po1mapco7, setPo1mapco7] = useState<number | string>("");

	const [year, setYear] = useState("");
	const [dept, setDept] = useState("");
	const [sem, setSem] = useState("");
	const [subject, setSubject] = useState("");

	// ******************** PO:2 ******************************

	const [po21, setPo21] = useState(
		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);

	const [competency21, setCompetency21] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency22, setCompetency22] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency23, setCompetency23] = useState(
		"1.2 Demonstrate competence in basic sciences"
	);
	const [competency24, setCompetency24] = useState(
		"1.3 Demonstrate competence in engineering fundamentals"
	);

	const [indicators21, setIndicators21] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [indicators22, setIndicators22] = useState(
		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
	);
	const [indicators23, setIndicators23] = useState(
		"1.2.1  Apply laws of natural science to an engineering problem"
	);
	const [indicators24, setIndicators24] = useState(
		"1.3.1  Apply fundamental engineering concepts to solve engineering problems"
	);
	const [indicators25, setIndicators25] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators26, setIndicators26] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators27, setIndicators27] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators28, setIndicators28] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators29, setIndicators29] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators210, setIndicators210] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators211, setIndicators211] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators212, setIndicators212] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators213, setIndicators213] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);

	const [weight21, setWeight21] = useState("0.8");
	const [weight22, setWeight22] = useState("0.8");
	const [weight23, setWeight23] = useState("0.8");
	const [weight24, setWeight24] = useState("0.8");
	const [weight25, setWeight25] = useState("0.8");
	const [weight26, setWeight26] = useState("0.8");
	const [weight27, setWeight27] = useState("0.8");
	const [weight28, setWeight28] = useState("0.8");
	const [weight29, setWeight29] = useState("0.8");
	const [weight210, setWeight210] = useState("0.8");
	const [weight211, setWeight211] = useState("0.8");
	const [weight212, setWeight212] = useState("0.8");
	const [weight213, setWeight213] = useState("0.8");

	const [co121, setCo121] = useState("");
	const [co122, setCo122] = useState("");
	const [co123, setCo123] = useState("");
	const [co124, setCo124] = useState("");
	const [co125, setCo125] = useState("");
	const [co126, setCo126] = useState("");
	const [co127, setCo127] = useState("");
	const [co128, setCo128] = useState("");
	const [co129, setCo129] = useState("");
	const [co1210, setCo1210] = useState("");
	const [co1211, setCo1211] = useState("");
	const [co1212, setCo1212] = useState("");
	const [co1213, setCo1213] = useState("");

	const [co221, setCo221] = useState("");
	const [co222, setCo222] = useState("");
	const [co223, setCo223] = useState("");
	const [co224, setCo224] = useState("");
	const [co225, setCo225] = useState("");
	const [co226, setCo226] = useState("");
	const [co227, setCo227] = useState("");
	const [co228, setCo228] = useState("");
	const [co229, setCo229] = useState("");
	const [co2210, setCo2210] = useState("");
	const [co2211, setCo2211] = useState("");
	const [co2212, setCo2212] = useState("");
	const [co2213, setCo2213] = useState("");

	const [co321, setCo321] = useState("");
	const [co322, setCo322] = useState("");
	const [co323, setCo323] = useState("");
	const [co324, setCo324] = useState("");
	const [co325, setCo325] = useState("");
	const [co326, setCo326] = useState("");
	const [co327, setCo327] = useState("");
	const [co328, setCo328] = useState("");
	const [co329, setCo329] = useState("");
	const [co3210, setCo3210] = useState("");
	const [co3211, setCo3211] = useState("");
	const [co3212, setCo3212] = useState("");
	const [co3213, setCo3213] = useState("");

	const [co421, setCo421] = useState("");
	const [co422, setCo422] = useState("");
	const [co423, setCo423] = useState("");
	const [co424, setCo424] = useState("");
	const [co425, setCo425] = useState("");
	const [co426, setCo426] = useState("");
	const [co427, setCo427] = useState("");
	const [co428, setCo428] = useState("");
	const [co429, setCo429] = useState("");
	const [co4210, setCo4210] = useState("");
	const [co4211, setCo4211] = useState("");
	const [co4212, setCo4212] = useState("");
	const [co4213, setCo4213] = useState("");

	const [co521, setCo521] = useState("");
	const [co522, setCo522] = useState("");
	const [co523, setCo523] = useState("");
	const [co524, setCo524] = useState("");
	const [co525, setCo525] = useState("");
	const [co526, setCo526] = useState("");
	const [co527, setCo527] = useState("");
	const [co528, setCo528] = useState("");
	const [co529, setCo529] = useState("");
	const [co5210, setCo5210] = useState("");
	const [co5211, setCo5211] = useState("");
	const [co5212, setCo5212] = useState("");
	const [co5213, setCo5213] = useState("");

	const [co621, setCo621] = useState("");
	const [co622, setCo622] = useState("");
	const [co623, setCo623] = useState("");
	const [co624, setCo624] = useState("");
	const [co625, setCo625] = useState("");
	const [co626, setCo626] = useState("");
	const [co627, setCo627] = useState("");
	const [co628, setCo628] = useState("");
	const [co629, setCo629] = useState("");
	const [co6210, setCo6210] = useState("");
	const [co6211, setCo6211] = useState("");
	const [co6212, setCo6212] = useState("");
	const [co6213, setCo6213] = useState("");

	const [co721, setCo721] = useState("");
	const [co722, setCo722] = useState("");
	const [co723, setCo723] = useState("");
	const [co724, setCo724] = useState("");
	const [co725, setCo725] = useState("");
	const [co726, setCo726] = useState("");
	const [co727, setCo727] = useState("");
	const [co728, setCo728] = useState("");
	const [co729, setCo729] = useState("");
	const [co7210, setCo7210] = useState("");
	const [co7211, setCo7211] = useState("");
	const [co7212, setCo7212] = useState("");
	const [co7213, setCo7213] = useState("");

	const [po2mapco1, setPo2mapco1] = useState<number | string>("");
	const [po2mapco2, setPo2mapco2] = useState<number | string>("");
	const [po2mapco3, setPo2mapco3] = useState<number | string>("");
	const [po2mapco4, setPo2mapco4] = useState<number | string>("");
	const [po2mapco5, setPo2mapco5] = useState<number | string>("");
	const [po2mapco6, setPo2mapco6] = useState<number | string>("");
	const [po2mapco7, setPo2mapco7] = useState<number | string>("");

	// ******************** PO:3 ******************************

	const [po31, setPo31] = useState(
		"PO 3: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);

	const [competency31, setCompetency31] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency32, setCompetency32] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency33, setCompetency33] = useState(
		"1.2 Demonstrate competence in basic sciences"
	);
	const [competency34, setCompetency34] = useState(
		"1.3 Demonstrate competence in engineering fundamentals"
	);

	const [indicators31, setIndicators31] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [indicators32, setIndicators32] = useState(
		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
	);
	const [indicators33, setIndicators33] = useState(
		"1.2.1  Apply laws of natural science to an engineering problem"
	);
	const [indicators34, setIndicators34] = useState(
		"1.3.1  Apply fundamental engineering concepts to solve engineering problems"
	);
	const [indicators35, setIndicators35] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators36, setIndicators36] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators37, setIndicators37] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators38, setIndicators38] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators39, setIndicators39] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators310, setIndicators310] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators311, setIndicators311] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators312, setIndicators312] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators313, setIndicators313] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);

	const [weight31, setWeight31] = useState("0.8");
	const [weight32, setWeight32] = useState("0.8");
	const [weight33, setWeight33] = useState("0.8");
	const [weight34, setWeight34] = useState("0.8");
	const [weight35, setWeight35] = useState("0.8");
	const [weight36, setWeight36] = useState("0.8");
	const [weight37, setWeight37] = useState("0.8");
	const [weight38, setWeight38] = useState("0.8");
	const [weight39, setWeight39] = useState("0.8");
	const [weight310, setWeight310] = useState("0.8");
	const [weight311, setWeight311] = useState("0.8");
	const [weight312, setWeight312] = useState("0.8");
	const [weight313, setWeight313] = useState("0.8");

	const [co131, setCo131] = useState("");
	const [co132, setCo132] = useState("");
	const [co133, setCo133] = useState("");
	const [co134, setCo134] = useState("");
	const [co135, setCo135] = useState("");
	const [co136, setCo136] = useState("");
	const [co137, setCo137] = useState("");
	const [co138, setCo138] = useState("");
	const [co139, setCo139] = useState("");
	const [co1310, setCo1310] = useState("");
	const [co1311, setCo1311] = useState("");
	const [co1312, setCo1312] = useState("");
	const [co1313, setCo1313] = useState("");

	const [co231, setCo231] = useState("");
	const [co232, setCo232] = useState("");
	const [co233, setCo233] = useState("");
	const [co234, setCo234] = useState("");
	const [co235, setCo235] = useState("");
	const [co236, setCo236] = useState("");
	const [co237, setCo237] = useState("");
	const [co238, setCo238] = useState("");
	const [co239, setCo239] = useState("");
	const [co2310, setCo2310] = useState("");
	const [co2311, setCo2311] = useState("");
	const [co2312, setCo2312] = useState("");
	const [co2313, setCo2313] = useState("");

	const [co331, setCo331] = useState("");
	const [co332, setCo332] = useState("");
	const [co333, setCo333] = useState("");
	const [co334, setCo334] = useState("");
	const [co335, setCo335] = useState("");
	const [co336, setCo336] = useState("");
	const [co337, setCo337] = useState("");
	const [co338, setCo338] = useState("");
	const [co339, setCo339] = useState("");
	const [co3310, setCo3310] = useState("");
	const [co3311, setCo3311] = useState("");
	const [co3312, setCo3312] = useState("");
	const [co3313, setCo3313] = useState("");

	const [co431, setCo431] = useState("");
	const [co432, setCo432] = useState("");
	const [co433, setCo433] = useState("");
	const [co434, setCo434] = useState("");
	const [co435, setCo435] = useState("");
	const [co436, setCo436] = useState("");
	const [co437, setCo437] = useState("");
	const [co438, setCo438] = useState("");
	const [co439, setCo439] = useState("");
	const [co4310, setCo4310] = useState("");
	const [co4311, setCo4311] = useState("");
	const [co4312, setCo4312] = useState("");
	const [co4313, setCo4313] = useState("");

	const [co531, setCo531] = useState("");
	const [co532, setCo532] = useState("");
	const [co533, setCo533] = useState("");
	const [co534, setCo534] = useState("");
	const [co535, setCo535] = useState("");
	const [co536, setCo536] = useState("");
	const [co537, setCo537] = useState("");
	const [co538, setCo538] = useState("");
	const [co539, setCo539] = useState("");
	const [co5310, setCo5310] = useState("");
	const [co5311, setCo5311] = useState("");
	const [co5312, setCo5312] = useState("");
	const [co5313, setCo5313] = useState("");

	const [co631, setCo631] = useState("");
	const [co632, setCo632] = useState("");
	const [co633, setCo633] = useState("");
	const [co634, setCo634] = useState("");
	const [co635, setCo635] = useState("");
	const [co636, setCo636] = useState("");
	const [co637, setCo637] = useState("");
	const [co638, setCo638] = useState("");
	const [co639, setCo639] = useState("");
	const [co6310, setCo6310] = useState("");
	const [co6311, setCo6311] = useState("");
	const [co6312, setCo6312] = useState("");
	const [co6313, setCo6313] = useState("");

	const [co731, setCo731] = useState("");
	const [co732, setCo732] = useState("");
	const [co733, setCo733] = useState("");
	const [co734, setCo734] = useState("");
	const [co735, setCo735] = useState("");
	const [co736, setCo736] = useState("");
	const [co737, setCo737] = useState("");
	const [co738, setCo738] = useState("");
	const [co739, setCo739] = useState("");
	const [co7310, setCo7310] = useState("");
	const [co7311, setCo7311] = useState("");
	const [co7312, setCo7312] = useState("");
	const [co7313, setCo7313] = useState("");

	const [po3mapco1, setPo3mapco1] = useState<number | string>("");
	const [po3mapco2, setPo3mapco2] = useState<number | string>("");
	const [po3mapco3, setPo3mapco3] = useState<number | string>("");
	const [po3mapco4, setPo3mapco4] = useState<number | string>("");
	const [po3mapco5, setPo3mapco5] = useState<number | string>("");
	const [po3mapco6, setPo3mapco6] = useState<number | string>("");
	const [po3mapco7, setPo3mapco7] = useState<number | string>("");

	// ******************** PO:4 ******************************

	const [po41, setPo41] = useState(
		"PO 3: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);

	const [competency41, setCompetency41] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency42, setCompetency42] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency43, setCompetency43] = useState(
		"1.2 Demonstrate competence in basic sciences"
	);

	const [indicators41, setIndicators41] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [indicators42, setIndicators42] = useState(
		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
	);
	const [indicators43, setIndicators43] = useState(
		"1.2.1  Apply laws of natural science to an engineering problem"
	);
	const [indicators44, setIndicators44] = useState(
		"1.3.1  Apply fundamental engineering concepts to solve engineering problems"
	);
	const [indicators45, setIndicators45] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators46, setIndicators46] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators47, setIndicators47] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators48, setIndicators48] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators49, setIndicators49] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators410, setIndicators410] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);

	const [weight41, setWeight41] = useState("0.8");
	const [weight42, setWeight42] = useState("0.8");
	const [weight43, setWeight43] = useState("0.8");
	const [weight44, setWeight44] = useState("0.8");
	const [weight45, setWeight45] = useState("0.8");
	const [weight46, setWeight46] = useState("0.8");
	const [weight47, setWeight47] = useState("0.8");
	const [weight48, setWeight48] = useState("0.8");
	const [weight49, setWeight49] = useState("0.8");
	const [weight410, setWeight410] = useState("0.8");

	const [co141, setCo141] = useState("");
	const [co142, setCo142] = useState("");
	const [co143, setCo143] = useState("");
	const [co144, setCo144] = useState("");
	const [co145, setCo145] = useState("");
	const [co146, setCo146] = useState("");
	const [co147, setCo147] = useState("");
	const [co148, setCo148] = useState("");
	const [co149, setCo149] = useState("");
	const [co1410, setCo1410] = useState("");

	const [co241, setCo241] = useState("");
	const [co242, setCo242] = useState("");
	const [co243, setCo243] = useState("");
	const [co244, setCo244] = useState("");
	const [co245, setCo245] = useState("");
	const [co246, setCo246] = useState("");
	const [co247, setCo247] = useState("");
	const [co248, setCo248] = useState("");
	const [co249, setCo249] = useState("");
	const [co2410, setCo2410] = useState("");

	const [co341, setCo341] = useState("");
	const [co342, setCo342] = useState("");
	const [co343, setCo343] = useState("");
	const [co344, setCo344] = useState("");
	const [co345, setCo345] = useState("");
	const [co346, setCo346] = useState("");
	const [co347, setCo347] = useState("");
	const [co348, setCo348] = useState("");
	const [co349, setCo349] = useState("");
	const [co3410, setCo3410] = useState("");

	const [co441, setCo441] = useState("");
	const [co442, setCo442] = useState("");
	const [co443, setCo443] = useState("");
	const [co444, setCo444] = useState("");
	const [co445, setCo445] = useState("");
	const [co446, setCo446] = useState("");
	const [co447, setCo447] = useState("");
	const [co448, setCo448] = useState("");
	const [co449, setCo449] = useState("");
	const [co4410, setCo4410] = useState("");

	const [co541, setCo541] = useState("");
	const [co542, setCo542] = useState("");
	const [co543, setCo543] = useState("");
	const [co544, setCo544] = useState("");
	const [co545, setCo545] = useState("");
	const [co546, setCo546] = useState("");
	const [co547, setCo547] = useState("");
	const [co548, setCo548] = useState("");
	const [co549, setCo549] = useState("");
	const [co5410, setCo5410] = useState("");

	const [co641, setCo641] = useState("");
	const [co642, setCo642] = useState("");
	const [co643, setCo643] = useState("");
	const [co644, setCo644] = useState("");
	const [co645, setCo645] = useState("");
	const [co646, setCo646] = useState("");
	const [co647, setCo647] = useState("");
	const [co648, setCo648] = useState("");
	const [co649, setCo649] = useState("");
	const [co6410, setCo6410] = useState("");

	const [co741, setCo741] = useState("");
	const [co742, setCo742] = useState("");
	const [co743, setCo743] = useState("");
	const [co744, setCo744] = useState("");
	const [co745, setCo745] = useState("");
	const [co746, setCo746] = useState("");
	const [co747, setCo747] = useState("");
	const [co748, setCo748] = useState("");
	const [co749, setCo749] = useState("");
	const [co7410, setCo7410] = useState("");

	const [po4mapco1, setPo4mapco1] = useState<number | string>("");
	const [po4mapco2, setPo4mapco2] = useState<number | string>("");
	const [po4mapco3, setPo4mapco3] = useState<number | string>("");
	const [po4mapco4, setPo4mapco4] = useState<number | string>("");
	const [po4mapco5, setPo4mapco5] = useState<number | string>("");
	const [po4mapco6, setPo4mapco6] = useState<number | string>("");
	const [po4mapco7, setPo4mapco7] = useState<number | string>("");

	// ******************** PO:5 ******************************

	const [po51, setPo51] = useState(
		"PO 5: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);

	const [competency51, setCompetency51] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency52, setCompetency52] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency53, setCompetency53] = useState(
		"1.2 Demonstrate competence in basic sciences"
	);

	const [indicators51, setIndicators51] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [indicators52, setIndicators52] = useState(
		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
	);
	const [indicators53, setIndicators53] = useState(
		"1.2.1  Apply laws of natural science to an engineering problem"
	);
	const [indicators54, setIndicators54] = useState(
		"1.3.1  Apply fundamental engineering concepts to solve engineering problems"
	);
	const [indicators55, setIndicators55] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators56, setIndicators56] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);

	const [weight51, setWeight51] = useState("0.8");
	const [weight52, setWeight52] = useState("0.8");
	const [weight53, setWeight53] = useState("0.8");
	const [weight54, setWeight54] = useState("0.8");
	const [weight55, setWeight55] = useState("0.8");
	const [weight56, setWeight56] = useState("0.8");

	const [co151, setCo151] = useState("");
	const [co152, setCo152] = useState("");
	const [co153, setCo153] = useState("");
	const [co154, setCo154] = useState("");
	const [co155, setCo155] = useState("");
	const [co156, setCo156] = useState("");

	const [co251, setCo251] = useState("");
	const [co252, setCo252] = useState("");
	const [co253, setCo253] = useState("");
	const [co254, setCo254] = useState("");
	const [co255, setCo255] = useState("");
	const [co256, setCo256] = useState("");

	const [co351, setCo351] = useState("");
	const [co352, setCo352] = useState("");
	const [co353, setCo353] = useState("");
	const [co354, setCo354] = useState("");
	const [co355, setCo355] = useState("");
	const [co356, setCo356] = useState("");

	const [co451, setCo451] = useState("");
	const [co452, setCo452] = useState("");
	const [co453, setCo453] = useState("");
	const [co454, setCo454] = useState("");
	const [co455, setCo455] = useState("");
	const [co456, setCo456] = useState("");

	const [co551, setCo551] = useState("");
	const [co552, setCo552] = useState("");
	const [co553, setCo553] = useState("");
	const [co554, setCo554] = useState("");
	const [co555, setCo555] = useState("");
	const [co556, setCo556] = useState("");

	const [co651, setCo651] = useState("");
	const [co652, setCo652] = useState("");
	const [co653, setCo653] = useState("");
	const [co654, setCo654] = useState("");
	const [co655, setCo655] = useState("");
	const [co656, setCo656] = useState("");

	const [co751, setCo751] = useState("");
	const [co752, setCo752] = useState("");
	const [co753, setCo753] = useState("");
	const [co754, setCo754] = useState("");
	const [co755, setCo755] = useState("");
	const [co756, setCo756] = useState("");

	const [po5mapco1, setPo5mapco1] = useState<number | string>("");
	const [po5mapco2, setPo5mapco2] = useState<number | string>("");
	const [po5mapco3, setPo5mapco3] = useState<number | string>("");
	const [po5mapco4, setPo5mapco4] = useState<number | string>("");
	const [po5mapco5, setPo5mapco5] = useState<number | string>("");
	const [po5mapco6, setPo5mapco6] = useState<number | string>("");
	const [po5mapco7, setPo5mapco7] = useState<number | string>("");

	// ******************** PO:6 ******************************

	const [po61, setPo61] = useState(
		"PO 5: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);

	const [competency61, setCompetency61] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency62, setCompetency62] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);

	const [indicators61, setIndicators61] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [indicators62, setIndicators62] = useState(
		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
	);

	const [weight61, setWeight61] = useState("0.5");
	const [weight62, setWeight62] = useState("0.5");

	const [co161, setCo161] = useState("");
	const [co162, setCo162] = useState("");

	const [co261, setCo261] = useState("");
	const [co262, setCo262] = useState("");

	const [co361, setCo361] = useState("");
	const [co362, setCo362] = useState("");

	const [co461, setCo461] = useState("");
	const [co462, setCo462] = useState("");

	const [co561, setCo561] = useState("");
	const [co562, setCo562] = useState("");

	const [co661, setCo661] = useState("");
	const [co662, setCo662] = useState("");

	const [co761, setCo761] = useState("");
	const [co762, setCo762] = useState("");

	const [po6mapco1, setPo6mapco1] = useState<number | string>("");
	const [po6mapco2, setPo6mapco2] = useState<number | string>("");
	const [po6mapco3, setPo6mapco3] = useState<number | string>("");
	const [po6mapco4, setPo6mapco4] = useState<number | string>("");
	const [po6mapco5, setPo6mapco5] = useState<number | string>("");
	const [po6mapco6, setPo6mapco6] = useState<number | string>("");
	const [po6mapco7, setPo6mapco7] = useState<number | string>("");

	// ******************** PO:7 ******************************

	const [po71, setPo71] = useState(
		"PO 5: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);

	const [competency71, setCompetency71] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency72, setCompetency72] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);

	const [indicators71, setIndicators71] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [indicators72, setIndicators72] = useState(
		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
	);
	const [indicators73, setIndicators73] = useState(
		"1.2.1  Apply laws of natural science to an engineering problem"
	);
	const [indicators74, setIndicators74] = useState(
		"1.3.1  Apply fundamental engineering concepts to solve engineering problems"
	);

	const [weight71, setWeight71] = useState("0.8");
	const [weight72, setWeight72] = useState("0.8");
	const [weight73, setWeight73] = useState("0.8");
	const [weight74, setWeight74] = useState("0.8");

	const [co171, setCo171] = useState("");
	const [co172, setCo172] = useState("");
	const [co173, setCo173] = useState("");
	const [co174, setCo174] = useState("");

	const [co271, setCo271] = useState("");
	const [co272, setCo272] = useState("");
	const [co273, setCo273] = useState("");
	const [co274, setCo274] = useState("");

	const [co371, setCo371] = useState("");
	const [co372, setCo372] = useState("");
	const [co373, setCo373] = useState("");
	const [co374, setCo374] = useState("");

	const [co471, setCo471] = useState("");
	const [co472, setCo472] = useState("");
	const [co473, setCo473] = useState("");
	const [co474, setCo474] = useState("");

	const [co571, setCo571] = useState("");
	const [co572, setCo572] = useState("");
	const [co573, setCo573] = useState("");
	const [co574, setCo574] = useState("");

	const [co671, setCo671] = useState("");
	const [co672, setCo672] = useState("");
	const [co673, setCo673] = useState("");
	const [co674, setCo674] = useState("");

	const [co771, setCo771] = useState("");
	const [co772, setCo772] = useState("");
	const [co773, setCo773] = useState("");
	const [co774, setCo774] = useState("");

	const [po7mapco1, setPo7mapco1] = useState<number | string>("");
	const [po7mapco2, setPo7mapco2] = useState<number | string>("");
	const [po7mapco3, setPo7mapco3] = useState<number | string>("");
	const [po7mapco4, setPo7mapco4] = useState<number | string>("");
	const [po7mapco5, setPo7mapco5] = useState<number | string>("");
	const [po7mapco6, setPo7mapco6] = useState<number | string>("");
	const [po7mapco7, setPo7mapco7] = useState<number | string>("");

	// ******************** PO:8 ******************************

	const [po81, setPo81] = useState(
		"PO 5: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);

	const [competency81, setCompetency81] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency82, setCompetency82] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);

	const [indicators81, setIndicators81] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [indicators82, setIndicators82] = useState(
		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
	);
	const [indicators83, setIndicators83] = useState(
		"1.2.1  Apply laws of natural science to an engineering problem"
	);

	const [weight81, setWeight81] = useState("0.8");
	const [weight82, setWeight82] = useState("0.8");
	const [weight83, setWeight83] = useState("0.8");

	const [co181, setCo181] = useState("");
	const [co182, setCo182] = useState("");
	const [co183, setCo183] = useState("");

	const [co281, setCo281] = useState("");
	const [co282, setCo282] = useState("");
	const [co283, setCo283] = useState("");

	const [co381, setCo381] = useState("");
	const [co382, setCo382] = useState("");
	const [co383, setCo383] = useState("");

	const [co481, setCo481] = useState("");
	const [co482, setCo482] = useState("");
	const [co483, setCo483] = useState("");

	const [co581, setCo581] = useState("");
	const [co582, setCo582] = useState("");
	const [co583, setCo583] = useState("");

	const [co681, setCo681] = useState("");
	const [co682, setCo682] = useState("");
	const [co683, setCo683] = useState("");

	const [co781, setCo781] = useState("");
	const [co782, setCo782] = useState("");
	const [co783, setCo783] = useState("");

	const [po8mapco1, setPo8mapco1] = useState<number | string>("");
	const [po8mapco2, setPo8mapco2] = useState<number | string>("");
	const [po8mapco3, setPo8mapco3] = useState<number | string>("");
	const [po8mapco4, setPo8mapco4] = useState<number | string>("");
	const [po8mapco5, setPo8mapco5] = useState<number | string>("");
	const [po8mapco6, setPo8mapco6] = useState<number | string>("");
	const [po8mapco7, setPo8mapco7] = useState<number | string>("");

	// ******************** PO:9 ******************************

	const [po91, setPo91] = useState(
		"PO 9: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);

	const [competency91, setCompetency91] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency92, setCompetency92] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency93, setCompetency93] = useState(
		"1.2 Demonstrate competence in basic sciences"
	);

	const [indicators91, setIndicators91] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [indicators92, setIndicators92] = useState(
		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
	);
	const [indicators93, setIndicators93] = useState(
		"1.2.1  Apply laws of natural science to an engineering problem"
	);
	const [indicators94, setIndicators94] = useState(
		"1.3.1  Apply fundamental engineering concepts to solve engineering problems"
	);
	const [indicators95, setIndicators95] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators96, setIndicators96] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators97, setIndicators97] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);

	const [weight91, setWeight91] = useState("0.8");
	const [weight92, setWeight92] = useState("0.8");
	const [weight93, setWeight93] = useState("0.8");
	const [weight94, setWeight94] = useState("0.8");
	const [weight95, setWeight95] = useState("0.8");
	const [weight96, setWeight96] = useState("0.8");
	const [weight97, setWeight97] = useState("0.8");

	const [co191, setCo191] = useState("");
	const [co192, setCo192] = useState("");
	const [co193, setCo193] = useState("");
	const [co194, setCo194] = useState("");
	const [co195, setCo195] = useState("");
	const [co196, setCo196] = useState("");
	const [co197, setCo197] = useState("");

	const [co291, setCo291] = useState("");
	const [co292, setCo292] = useState("");
	const [co293, setCo293] = useState("");
	const [co294, setCo294] = useState("");
	const [co295, setCo295] = useState("");
	const [co296, setCo296] = useState("");
	const [co297, setCo297] = useState("");

	const [co391, setCo391] = useState("");
	const [co392, setCo392] = useState("");
	const [co393, setCo393] = useState("");
	const [co394, setCo394] = useState("");
	const [co395, setCo395] = useState("");
	const [co396, setCo396] = useState("");
	const [co397, setCo397] = useState("");

	const [co491, setCo491] = useState("");
	const [co492, setCo492] = useState("");
	const [co493, setCo493] = useState("");
	const [co494, setCo494] = useState("");
	const [co495, setCo495] = useState("");
	const [co496, setCo496] = useState("");
	const [co497, setCo497] = useState("");

	const [co591, setCo591] = useState("");
	const [co592, setCo592] = useState("");
	const [co593, setCo593] = useState("");
	const [co594, setCo594] = useState("");
	const [co595, setCo595] = useState("");
	const [co596, setCo596] = useState("");
	const [co597, setCo597] = useState("");

	const [co691, setCo691] = useState("");
	const [co692, setCo692] = useState("");
	const [co693, setCo693] = useState("");
	const [co694, setCo694] = useState("");
	const [co695, setCo695] = useState("");
	const [co696, setCo696] = useState("");
	const [co697, setCo697] = useState("");

	const [co791, setCo791] = useState("");
	const [co792, setCo792] = useState("");
	const [co793, setCo793] = useState("");
	const [co794, setCo794] = useState("");
	const [co795, setCo795] = useState("");
	const [co796, setCo796] = useState("");
	const [co797, setCo797] = useState("");

	const [po9mapco1, setPo9mapco1] = useState<number | string>("");
	const [po9mapco2, setPo9mapco2] = useState<number | string>("");
	const [po9mapco3, setPo9mapco3] = useState<number | string>("");
	const [po9mapco4, setPo9mapco4] = useState<number | string>("");
	const [po9mapco5, setPo9mapco5] = useState<number | string>("");
	const [po9mapco6, setPo9mapco6] = useState<number | string>("");
	const [po9mapco7, setPo9mapco7] = useState<number | string>("");

	// ******************** PO:10 ******************************

	const [po101, setPo101] = useState(
		"PO 9: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);

	const [competency101, setCompetency101] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency102, setCompetency102] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency103, setCompetency103] = useState(
		"1.2 Demonstrate competence in basic sciences"
	);

	const [indicators101, setIndicators101] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [indicators102, setIndicators102] = useState(
		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
	);
	const [indicators103, setIndicators103] = useState(
		"1.2.1  Apply laws of natural science to an engineering problem"
	);
	const [indicators104, setIndicators104] = useState(
		"1.3.1  Apply fundamental engineering concepts to solve engineering problems"
	);
	const [indicators105, setIndicators105] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators106, setIndicators106] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators107, setIndicators107] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);

	const [weight101, setWeight101] = useState("0.8");
	const [weight102, setWeight102] = useState("0.8");
	const [weight103, setWeight103] = useState("0.8");
	const [weight104, setWeight104] = useState("0.8");
	const [weight105, setWeight105] = useState("0.8");
	const [weight106, setWeight106] = useState("0.8");
	const [weight107, setWeight107] = useState("0.8");

	const [co1101, setCo1101] = useState("");
	const [co1102, setCo1102] = useState("");
	const [co1103, setCo1103] = useState("");
	const [co1104, setCo1104] = useState("");
	const [co1105, setCo1105] = useState("");
	const [co1106, setCo1106] = useState("");
	const [co1107, setCo1107] = useState("");

	const [co2101, setCo2101] = useState("");
	const [co2102, setCo2102] = useState("");
	const [co2103, setCo2103] = useState("");
	const [co2104, setCo2104] = useState("");
	const [co2105, setCo2105] = useState("");
	const [co2106, setCo2106] = useState("");
	const [co2107, setCo2107] = useState("");

	const [co3101, setCo3101] = useState("");
	const [co3102, setCo3102] = useState("");
	const [co3103, setCo3103] = useState("");
	const [co3104, setCo3104] = useState("");
	const [co3105, setCo3105] = useState("");
	const [co3106, setCo3106] = useState("");
	const [co3107, setCo3107] = useState("");

	const [co4101, setCo4101] = useState("");
	const [co4102, setCo4102] = useState("");
	const [co4103, setCo4103] = useState("");
	const [co4104, setCo4104] = useState("");
	const [co4105, setCo4105] = useState("");
	const [co4106, setCo4106] = useState("");
	const [co4107, setCo4107] = useState("");

	const [co5101, setCo5101] = useState("");
	const [co5102, setCo5102] = useState("");
	const [co5103, setCo5103] = useState("");
	const [co5104, setCo5104] = useState("");
	const [co5105, setCo5105] = useState("");
	const [co5106, setCo5106] = useState("");
	const [co5107, setCo5107] = useState("");

	const [co6101, setCo6101] = useState("");
	const [co6102, setCo6102] = useState("");
	const [co6103, setCo6103] = useState("");
	const [co6104, setCo6104] = useState("");
	const [co6105, setCo6105] = useState("");
	const [co6106, setCo6106] = useState("");
	const [co6107, setCo6107] = useState("");

	const [co7101, setCo7101] = useState("");
	const [co7102, setCo7102] = useState("");
	const [co7103, setCo7103] = useState("");
	const [co7104, setCo7104] = useState("");
	const [co7105, setCo7105] = useState("");
	const [co7106, setCo7106] = useState("");
	const [co7107, setCo7107] = useState("");

	const [po10mapco1, setPo10mapco1] = useState<number | string>("");
	const [po10mapco2, setPo10mapco2] = useState<number | string>("");
	const [po10mapco3, setPo10mapco3] = useState<number | string>("");
	const [po10mapco4, setPo10mapco4] = useState<number | string>("");
	const [po10mapco5, setPo10mapco5] = useState<number | string>("");
	const [po10mapco6, setPo10mapco6] = useState<number | string>("");
	const [po10mapco7, setPo10mapco7] = useState<number | string>("");

	// ******************** PO:11 ******************************

	const [po111, setPo111] = useState(
		"PO 11: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);

	const [competency111, setCompetency111] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency112, setCompetency112] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency113, setCompetency113] = useState(
		"1.2 Demonstrate competence in basic sciences"
	);

	const [indicators111, setIndicators111] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [indicators112, setIndicators112] = useState(
		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
	);
	const [indicators113, setIndicators113] = useState(
		"1.2.1  Apply laws of natural science to an engineering problem"
	);
	const [indicators114, setIndicators114] = useState(
		"1.3.1  Apply fundamental engineering concepts to solve engineering problems"
	);
	const [indicators115, setIndicators115] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);

	const [weight111, setWeight111] = useState("0.8");
	const [weight112, setWeight112] = useState("0.8");
	const [weight113, setWeight113] = useState("0.8");
	const [weight114, setWeight114] = useState("0.8");
	const [weight115, setWeight115] = useState("0.8");

	const [co1111, setCo1111] = useState("");
	const [co1112, setCo1112] = useState("");
	const [co1113, setCo1113] = useState("");
	const [co1114, setCo1114] = useState("");
	const [co1115, setCo1115] = useState("");

	const [co2111, setCo2111] = useState("");
	const [co2112, setCo2112] = useState("");
	const [co2113, setCo2113] = useState("");
	const [co2114, setCo2114] = useState("");
	const [co2115, setCo2115] = useState("");

	const [co3111, setCo3111] = useState("");
	const [co3112, setCo3112] = useState("");
	const [co3113, setCo3113] = useState("");
	const [co3114, setCo3114] = useState("");
	const [co3115, setCo3115] = useState("");

	const [co4111, setCo4111] = useState("");
	const [co4112, setCo4112] = useState("");
	const [co4113, setCo4113] = useState("");
	const [co4114, setCo4114] = useState("");
	const [co4115, setCo4115] = useState("");

	const [co5111, setCo5111] = useState("");
	const [co5112, setCo5112] = useState("");
	const [co5113, setCo5113] = useState("");
	const [co5114, setCo5114] = useState("");
	const [co5115, setCo5115] = useState("");

	const [co6111, setCo6111] = useState("");
	const [co6112, setCo6112] = useState("");
	const [co6113, setCo6113] = useState("");
	const [co6114, setCo6114] = useState("");
	const [co6115, setCo6115] = useState("");

	const [co7111, setCo7111] = useState("");
	const [co7112, setCo7112] = useState("");
	const [co7113, setCo7113] = useState("");
	const [co7114, setCo7114] = useState("");
	const [co7115, setCo7115] = useState("");

	const [po11mapco1, setPo11mapco1] = useState<number | string>("");
	const [po11mapco2, setPo11mapco2] = useState<number | string>("");
	const [po11mapco3, setPo11mapco3] = useState<number | string>("");
	const [po11mapco4, setPo11mapco4] = useState<number | string>("");
	const [po11mapco5, setPo11mapco5] = useState<number | string>("");
	const [po11mapco6, setPo11mapco6] = useState<number | string>("");
	const [po11mapco7, setPo11mapco7] = useState<number | string>("");

	// ******************** PO:12 ******************************

	const [po121, setPo121] = useState(
		"PO 12: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);

	const [competency121, setCompetency121] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency122, setCompetency122] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency123, setCompetency123] = useState(
		"1.2 Demonstrate competence in basic sciences"
	);

	const [indicators121, setIndicators121] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [indicators122, setIndicators122] = useState(
		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
	);
	const [indicators123, setIndicators123] = useState(
		"1.2.1  Apply laws of natural science to an engineering problem"
	);
	const [indicators124, setIndicators124] = useState(
		"1.3.1  Apply fundamental engineering concepts to solve engineering problems"
	);
	const [indicators125, setIndicators125] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);
	const [indicators126, setIndicators126] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);

	const [weight121, setWeight121] = useState("0.8");
	const [weight122, setWeight122] = useState("0.8");
	const [weight123, setWeight123] = useState("0.8");
	const [weight124, setWeight124] = useState("0.8");
	const [weight125, setWeight125] = useState("0.8");
	const [weight126, setWeight126] = useState("0.8");

	const [co1121, setCo1121] = useState("");
	const [co1122, setCo1122] = useState("");
	const [co1123, setCo1123] = useState("");
	const [co1124, setCo1124] = useState("");
	const [co1125, setCo1125] = useState("");
	const [co1126, setCo1126] = useState("");

	const [co2121, setCo2121] = useState("");
	const [co2122, setCo2122] = useState("");
	const [co2123, setCo2123] = useState("");
	const [co2124, setCo2124] = useState("");
	const [co2125, setCo2125] = useState("");
	const [co2126, setCo2126] = useState("");

	const [co3121, setCo3121] = useState("");
	const [co3122, setCo3122] = useState("");
	const [co3123, setCo3123] = useState("");
	const [co3124, setCo3124] = useState("");
	const [co3125, setCo3125] = useState("");
	const [co3126, setCo3126] = useState("");

	const [co4121, setCo4121] = useState("");
	const [co4122, setCo4122] = useState("");
	const [co4123, setCo4123] = useState("");
	const [co4124, setCo4124] = useState("");
	const [co4125, setCo4125] = useState("");
	const [co4126, setCo4126] = useState("");

	const [co5121, setCo5121] = useState("");
	const [co5122, setCo5122] = useState("");
	const [co5123, setCo5123] = useState("");
	const [co5124, setCo5124] = useState("");
	const [co5125, setCo5125] = useState("");
	const [co5126, setCo5126] = useState("");

	const [co6121, setCo6121] = useState("");
	const [co6122, setCo6122] = useState("");
	const [co6123, setCo6123] = useState("");
	const [co6124, setCo6124] = useState("");
	const [co6125, setCo6125] = useState("");
	const [co6126, setCo6126] = useState("");

	const [co7121, setCo7121] = useState("");
	const [co7122, setCo7122] = useState("");
	const [co7123, setCo7123] = useState("");
	const [co7124, setCo7124] = useState("");
	const [co7125, setCo7125] = useState("");
	const [co7126, setCo7126] = useState("");

	const [po12mapco1, setPo12mapco1] = useState<number | string>("");
	const [po12mapco2, setPo12mapco2] = useState<number | string>("");
	const [po12mapco3, setPo12mapco3] = useState<number | string>("");
	const [po12mapco4, setPo12mapco4] = useState<number | string>("");
	const [po12mapco5, setPo12mapco5] = useState<number | string>("");
	const [po12mapco6, setPo12mapco6] = useState<number | string>("");
	const [po12mapco7, setPo12mapco7] = useState<number | string>("");

	//   **************************************   PSO : 1 ************************************************

	const [pso11, setPso11] = useState(
		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);

	const [psocompetency11, setPsocompetency11] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [psocompetency12, setPsocompetency12] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);

	const [psoindicators11, setPsoindicators11] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [psoindicators12, setPsoindicators12] = useState(
		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
	);
	const [psoindicators13, setPsoindicators13] = useState(
		"1.2.1  Apply laws of natural science to an engineering problem"
	);
	const [psoindicators14, setPsoindicators14] = useState(
		"1.3.1  Apply fundamental engineering concepts to solve engineering problems"
	);
	const [psoindicators15, setPsoindicators15] = useState(
		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
	);

	const [psoweight11, setPsoweight11] = useState("0.2");
	const [psoweight12, setPsoweight12] = useState("0.2");
	const [psoweight13, setPsoweight13] = useState("0.2");
	const [psoweight14, setPsoweight14] = useState("0.2");
	const [psoweight15, setPsoweight15] = useState("0.2");

	const [psoco111, setPsoco111] = useState("");
	const [psoco112, setPsoco112] = useState("");
	const [psoco113, setPsoco113] = useState("");
	const [psoco114, setPsoco114] = useState("");
	const [psoco115, setPsoco115] = useState("");

	const [psoco211, setPsoco211] = useState("");
	const [psoco212, setPsoco212] = useState("");
	const [psoco213, setPsoco213] = useState("");
	const [psoco214, setPsoco214] = useState("");
	const [psoco215, setPsoco215] = useState("");

	const [psoco311, setPsoco311] = useState("");
	const [psoco312, setPsoco312] = useState("");
	const [psoco313, setPsoco313] = useState("");
	const [psoco314, setPsoco314] = useState("");
	const [psoco315, setPsoco315] = useState("");

	const [psoco411, setPsoco411] = useState("");
	const [psoco412, setPsoco412] = useState("");
	const [psoco413, setPsoco413] = useState("");
	const [psoco414, setPsoco414] = useState("");
	const [psoco415, setPsoco415] = useState("");

	const [psoco511, setPsoco511] = useState("");
	const [psoco512, setPsoco512] = useState("");
	const [psoco513, setPsoco513] = useState("");
	const [psoco514, setPsoco514] = useState("");
	const [psoco515, setPsoco515] = useState("");

	const [psoco611, setPsoco611] = useState("");
	const [psoco612, setPsoco612] = useState("");
	const [psoco613, setPsoco613] = useState("");
	const [psoco614, setPsoco614] = useState("");
	const [psoco615, setPsoco615] = useState("");

	const [psoco711, setPsoco711] = useState("");
	const [psoco712, setPsoco712] = useState("");
	const [psoco713, setPsoco713] = useState("");
	const [psoco714, setPsoco714] = useState("");
	const [psoco715, setPsoco715] = useState("");

	const [pso1mapco1, setPso1mapco1] = useState<number | string>("");
	const [pso1mapco2, setPso1mapco2] = useState<number | string>("");
	const [pso1mapco3, setPso1mapco3] = useState<number | string>("");
	const [pso1mapco4, setPso1mapco4] = useState<number | string>("");
	const [pso1mapco5, setPso1mapco5] = useState<number | string>("");
	const [pso1mapco6, setPso1mapco6] = useState<number | string>("");
	const [pso1mapco7, setPso1mapco7] = useState<number | string>("");

	//   **************************************   PSO : 2 ************************************************

	const [pso21, setPso21] = useState(
		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);

	const [psocompetency21, setPsocompetency21] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [psocompetency22, setPsocompetency22] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);

	const [psoindicators21, setPsoindicators21] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [psoindicators22, setPsoindicators22] = useState(
		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
	);
	const [psoindicators23, setPsoindicators23] = useState(
		"1.2.1  Apply laws of natural science to an engineering problem"
	);
	const [psoindicators24, setPsoindicators24] = useState(
		"1.3.1  Apply fundamental engineering concepts to solve engineering problems"
	);

	const [psoweight21, setPsoweight21] = useState("0.2");
	const [psoweight22, setPsoweight22] = useState("0.2");
	const [psoweight23, setPsoweight23] = useState("0.2");
	const [psoweight24, setPsoweight24] = useState("0.2");

	const [psoco121, setPsoco121] = useState("");
	const [psoco122, setPsoco122] = useState("");
	const [psoco123, setPsoco123] = useState("");
	const [psoco124, setPsoco124] = useState("");

	const [psoco221, setPsoco221] = useState("");
	const [psoco222, setPsoco222] = useState("");
	const [psoco223, setPsoco223] = useState("");
	const [psoco224, setPsoco224] = useState("");

	const [psoco321, setPsoco321] = useState("");
	const [psoco322, setPsoco322] = useState("");
	const [psoco323, setPsoco323] = useState("");
	const [psoco324, setPsoco324] = useState("");

	const [psoco421, setPsoco421] = useState("");
	const [psoco422, setPsoco422] = useState("");
	const [psoco423, setPsoco423] = useState("");
	const [psoco424, setPsoco424] = useState("");

	const [psoco521, setPsoco521] = useState("");
	const [psoco522, setPsoco522] = useState("");
	const [psoco523, setPsoco523] = useState("");
	const [psoco524, setPsoco524] = useState("");

	const [psoco621, setPsoco621] = useState("");
	const [psoco622, setPsoco622] = useState("");
	const [psoco623, setPsoco623] = useState("");
	const [psoco624, setPsoco624] = useState("");

	const [psoco721, setPsoco721] = useState("");
	const [psoco722, setPsoco722] = useState("");
	const [psoco723, setPsoco723] = useState("");
	const [psoco724, setPsoco724] = useState("");

	const [pso2mapco1, setPso2mapco1] = useState<number | string>("");
	const [pso2mapco2, setPso2mapco2] = useState<number | string>("");
	const [pso2mapco3, setPso2mapco3] = useState<number | string>("");
	const [pso2mapco4, setPso2mapco4] = useState<number | string>("");
	const [pso2mapco5, setPso2mapco5] = useState<number | string>("");
	const [pso2mapco6, setPso2mapco6] = useState<number | string>("");
	const [pso2mapco7, setPso2mapco7] = useState<number | string>("");

	//   **************************************   PSO : 3 ************************************************

	const [pso31, setPso31] = useState(
		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);

	const [psocompetency31, setPsocompetency31] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [psocompetency32, setPsocompetency32] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);

	const [psoindicators31, setPsoindicators31] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [psoindicators32, setPsoindicators32] = useState(
		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
	);
	const [psoindicators33, setPsoindicators33] = useState(
		"1.2.1  Apply laws of natural science to an engineering problem"
	);
	const [psoindicators34, setPsoindicators34] = useState(
		"1.3.1  Apply fundamental engineering concepts to solve engineering problems"
	);

	const [psoweight31, setPsoweight31] = useState("0.2");
	const [psoweight32, setPsoweight32] = useState("0.2");
	const [psoweight33, setPsoweight33] = useState("0.2");
	const [psoweight34, setPsoweight34] = useState("0.2");

	const [psoco131, setPsoco131] = useState("");
	const [psoco132, setPsoco132] = useState("");
	const [psoco133, setPsoco133] = useState("");
	const [psoco134, setPsoco134] = useState("");

	const [psoco231, setPsoco231] = useState("");
	const [psoco232, setPsoco232] = useState("");
	const [psoco233, setPsoco233] = useState("");
	const [psoco234, setPsoco234] = useState("");

	const [psoco331, setPsoco331] = useState("");
	const [psoco332, setPsoco332] = useState("");
	const [psoco333, setPsoco333] = useState("");
	const [psoco334, setPsoco334] = useState("");

	const [psoco431, setPsoco431] = useState("");
	const [psoco432, setPsoco432] = useState("");
	const [psoco433, setPsoco433] = useState("");
	const [psoco434, setPsoco434] = useState("");

	const [psoco531, setPsoco531] = useState("");
	const [psoco532, setPsoco532] = useState("");
	const [psoco533, setPsoco533] = useState("");
	const [psoco534, setPsoco534] = useState("");

	const [psoco631, setPsoco631] = useState("");
	const [psoco632, setPsoco632] = useState("");
	const [psoco633, setPsoco633] = useState("");
	const [psoco634, setPsoco634] = useState("");

	const [psoco731, setPsoco731] = useState("");
	const [psoco732, setPsoco732] = useState("");
	const [psoco733, setPsoco733] = useState("");
	const [psoco734, setPsoco734] = useState("");

	const [pso3mapco1, setPso3mapco1] = useState<number | string>("");
	const [pso3mapco2, setPso3mapco2] = useState<number | string>("");
	const [pso3mapco3, setPso3mapco3] = useState<number | string>("");
	const [pso3mapco4, setPso3mapco4] = useState<number | string>("");
	const [pso3mapco5, setPso3mapco5] = useState<number | string>("");
	const [pso3mapco6, setPso3mapco6] = useState<number | string>("");
	const [pso3mapco7, setPso3mapco7] = useState<number | string>("");

	const calculatePo1mapco1 = () => {
		const sumCo =
			parseInt(co111) +
			parseInt(co112) +
			parseInt(co113) +
			parseInt(co114) +
			parseInt(co115);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPo1mapco1(calculatedValue);
	};
	const calculatePo1mapco2 = () => {
		const sumCo =
			parseInt(co211) +
			parseInt(co212) +
			parseInt(co213) +
			parseInt(co214) +
			parseInt(co215);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPo1mapco2(calculatedValue);
	};
	const calculatePo1mapco3 = () => {
		const sumCo =
			parseInt(co311) +
			parseInt(co312) +
			parseInt(co313) +
			parseInt(co314) +
			parseInt(co315);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPo1mapco3(calculatedValue);
	};
	const calculatePo1mapco4 = () => {
		const sumCo =
			parseInt(co411) +
			parseInt(co412) +
			parseInt(co413) +
			parseInt(co414) +
			parseInt(co415);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPo1mapco4(calculatedValue);
	};
	const calculatePo1mapco5 = () => {
		const sumCo =
			parseInt(co511) +
			parseInt(co512) +
			parseInt(co513) +
			parseInt(co514) +
			parseInt(co515);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPo1mapco5(calculatedValue);
	};
	const calculatePo1mapco6 = () => {
		const sumCo =
			parseInt(co611) +
			parseInt(co612) +
			parseInt(co613) +
			parseInt(co614) +
			parseInt(co615);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPo1mapco6(calculatedValue);
	};
	const calculatePo1mapco7 = () => {
		const sumCo =
			parseInt(co711) +
			parseInt(co712) +
			parseInt(co713) +
			parseInt(co714) +
			parseInt(co715);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPo1mapco7(calculatedValue);
	};

	// PO: 2
	const calculatePo2mapco1 = () => {
		const sumCo =
			parseInt(co121) +
			parseInt(co122) +
			parseInt(co123) +
			parseInt(co124) +
			parseInt(co125) +
			parseInt(co126) +
			parseInt(co127) +
			parseInt(co128) +
			parseInt(co129) +
			parseInt(co1210) +
			parseInt(co1211) +
			parseInt(co1212) +
			parseInt(co1213);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setPo2mapco1(calculatedValue);
	};
	const calculatePo2mapco2 = () => {
		const sumCo =
			parseInt(co221) +
			parseInt(co222) +
			parseInt(co223) +
			parseInt(co224) +
			parseInt(co225) +
			parseInt(co226) +
			parseInt(co227) +
			parseInt(co228) +
			parseInt(co229) +
			parseInt(co2210) +
			parseInt(co2211) +
			parseInt(co2212) +
			parseInt(co2213);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setPo2mapco2(calculatedValue);
	};
	const calculatePo2mapco3 = () => {
		const sumCo =
			parseInt(co321) +
			parseInt(co322) +
			parseInt(co323) +
			parseInt(co324) +
			parseInt(co325) +
			parseInt(co326) +
			parseInt(co327) +
			parseInt(co328) +
			parseInt(co329) +
			parseInt(co3210) +
			parseInt(co3211) +
			parseInt(co3212) +
			parseInt(co3213);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setPo2mapco3(calculatedValue);
	};
	const calculatePo2mapco4 = () => {
		const sumCo =
			parseInt(co421) +
			parseInt(co422) +
			parseInt(co423) +
			parseInt(co424) +
			parseInt(co425) +
			parseInt(co426) +
			parseInt(co427) +
			parseInt(co428) +
			parseInt(co429) +
			parseInt(co4210) +
			parseInt(co4211) +
			parseInt(co4212) +
			parseInt(co4213);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setPo2mapco4(calculatedValue);
	};
	const calculatePo2mapco5 = () => {
		const sumCo =
			parseInt(co521) +
			parseInt(co522) +
			parseInt(co523) +
			parseInt(co524) +
			parseInt(co525) +
			parseInt(co526) +
			parseInt(co527) +
			parseInt(co528) +
			parseInt(co529) +
			parseInt(co5210) +
			parseInt(co5211) +
			parseInt(co5212) +
			parseInt(co5213);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setPo2mapco5(calculatedValue);
	};
	const calculatePo2mapco6 = () => {
		const sumCo =
			parseInt(co621) +
			parseInt(co622) +
			parseInt(co623) +
			parseInt(co624) +
			parseInt(co625) +
			parseInt(co626) +
			parseInt(co627) +
			parseInt(co628) +
			parseInt(co629) +
			parseInt(co6210) +
			parseInt(co6211) +
			parseInt(co6212) +
			parseInt(co6213);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setPo2mapco6(calculatedValue);
	};
	const calculatePo2mapco7 = () => {
		const sumCo =
			parseInt(co721) +
			parseInt(co722) +
			parseInt(co723) +
			parseInt(co724) +
			parseInt(co725) +
			parseInt(co726) +
			parseInt(co727) +
			parseInt(co728) +
			parseInt(co729) +
			parseInt(co7210) +
			parseInt(co7211) +
			parseInt(co7212) +
			parseInt(co7213);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setPo2mapco7(calculatedValue);
	};
	//  *************************************************** PO: 3    **********************************************
	const calculatePo3mapco1 = () => {
		const sumCo =
			parseInt(co131) +
			parseInt(co132) +
			parseInt(co133) +
			parseInt(co134) +
			parseInt(co135) +
			parseInt(co136) +
			parseInt(co137) +
			parseInt(co138) +
			parseInt(co139) +
			parseInt(co1310) +
			parseInt(co1311) +
			parseInt(co1312) +
			parseInt(co1313);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setPo3mapco1(calculatedValue);
	};
	const calculatePo3mapco2 = () => {
		const sumCo =
			parseInt(co231) +
			parseInt(co232) +
			parseInt(co233) +
			parseInt(co234) +
			parseInt(co235) +
			parseInt(co236) +
			parseInt(co237) +
			parseInt(co238) +
			parseInt(co239) +
			parseInt(co2310) +
			parseInt(co2311) +
			parseInt(co2312) +
			parseInt(co2313);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setPo3mapco2(calculatedValue);
	};
	const calculatePo3mapco3 = () => {
		const sumCo =
			parseInt(co331) +
			parseInt(co332) +
			parseInt(co333) +
			parseInt(co334) +
			parseInt(co335) +
			parseInt(co336) +
			parseInt(co337) +
			parseInt(co338) +
			parseInt(co339) +
			parseInt(co3310) +
			parseInt(co3311) +
			parseInt(co3312) +
			parseInt(co3313);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setPo3mapco3(calculatedValue);
	};
	const calculatePo3mapco4 = () => {
		const sumCo =
			parseInt(co431) +
			parseInt(co432) +
			parseInt(co433) +
			parseInt(co434) +
			parseInt(co435) +
			parseInt(co436) +
			parseInt(co437) +
			parseInt(co438) +
			parseInt(co439) +
			parseInt(co4310) +
			parseInt(co4311) +
			parseInt(co4312) +
			parseInt(co4313);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setPo3mapco4(calculatedValue);
	};
	const calculatePo3mapco5 = () => {
		const sumCo =
			parseInt(co531) +
			parseInt(co532) +
			parseInt(co533) +
			parseInt(co534) +
			parseInt(co535) +
			parseInt(co536) +
			parseInt(co537) +
			parseInt(co538) +
			parseInt(co539) +
			parseInt(co5310) +
			parseInt(co5311) +
			parseInt(co5312) +
			parseInt(co5313);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setPo3mapco5(calculatedValue);
	};
	const calculatePo3mapco6 = () => {
		const sumCo =
			parseInt(co631) +
			parseInt(co632) +
			parseInt(co633) +
			parseInt(co634) +
			parseInt(co635) +
			parseInt(co636) +
			parseInt(co637) +
			parseInt(co638) +
			parseInt(co639) +
			parseInt(co6310) +
			parseInt(co6311) +
			parseInt(co6312) +
			parseInt(co6313);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setPo3mapco6(calculatedValue);
	};
	const calculatePo3mapco7 = () => {
		const sumCo =
			parseInt(co731) +
			parseInt(co732) +
			parseInt(co733) +
			parseInt(co734) +
			parseInt(co735) +
			parseInt(co736) +
			parseInt(co737) +
			parseInt(co738) +
			parseInt(co739) +
			parseInt(co7310) +
			parseInt(co7311) +
			parseInt(co7312) +
			parseInt(co7313);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setPo3mapco7(calculatedValue);
	};
	//  *************************************************** PO: 4    **********************************************
	const calculatePo4mapco1 = () => {
		const sumCo =
			parseInt(co141) +
			parseInt(co142) +
			parseInt(co143) +
			parseInt(co144) +
			parseInt(co145) +
			parseInt(co146) +
			parseInt(co147) +
			parseInt(co148) +
			parseInt(co149) +
			parseInt(co1410);

		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
		setPo4mapco1(calculatedValue);
	};
	const calculatePo4mapco2 = () => {
		const sumCo =
			parseInt(co241) +
			parseInt(co242) +
			parseInt(co243) +
			parseInt(co244) +
			parseInt(co245) +
			parseInt(co246) +
			parseInt(co247) +
			parseInt(co248) +
			parseInt(co249) +
			parseInt(co2410);

		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
		setPo4mapco2(calculatedValue);
	};
	const calculatePo4mapco3 = () => {
		const sumCo =
			parseInt(co341) +
			parseInt(co342) +
			parseInt(co343) +
			parseInt(co344) +
			parseInt(co345) +
			parseInt(co346) +
			parseInt(co347) +
			parseInt(co348) +
			parseInt(co349) +
			parseInt(co3410);

		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
		setPo4mapco3(calculatedValue);
	};
	const calculatePo4mapco4 = () => {
		const sumCo =
			parseInt(co441) +
			parseInt(co442) +
			parseInt(co443) +
			parseInt(co444) +
			parseInt(co445) +
			parseInt(co446) +
			parseInt(co447) +
			parseInt(co448) +
			parseInt(co449) +
			parseInt(co4410);

		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
		setPo4mapco4(calculatedValue);
	};
	const calculatePo4mapco5 = () => {
		const sumCo =
			parseInt(co541) +
			parseInt(co542) +
			parseInt(co543) +
			parseInt(co544) +
			parseInt(co545) +
			parseInt(co546) +
			parseInt(co547) +
			parseInt(co548) +
			parseInt(co549) +
			parseInt(co5410);

		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
		setPo4mapco5(calculatedValue);
	};
	const calculatePo4mapco6 = () => {
		const sumCo =
			parseInt(co641) +
			parseInt(co642) +
			parseInt(co643) +
			parseInt(co644) +
			parseInt(co645) +
			parseInt(co646) +
			parseInt(co647) +
			parseInt(co648) +
			parseInt(co649) +
			parseInt(co6410);

		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
		setPo4mapco6(calculatedValue);
	};
	const calculatePo4mapco7 = () => {
		const sumCo =
			parseInt(co741) +
			parseInt(co742) +
			parseInt(co743) +
			parseInt(co744) +
			parseInt(co745) +
			parseInt(co746) +
			parseInt(co747) +
			parseInt(co748) +
			parseInt(co749) +
			parseInt(co7410);

		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
		setPo4mapco7(calculatedValue);
	};

	//  *************************************************** PO: 5    **********************************************
	const calculatePo5mapco1 = () => {
		const sumCo =
			parseInt(co151) +
			parseInt(co152) +
			parseInt(co153) +
			parseInt(co154) +
			parseInt(co155) +
			parseInt(co156);

		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
		setPo5mapco1(calculatedValue);
	};
	const calculatePo5mapco2 = () => {
		const sumCo =
			parseInt(co251) +
			parseInt(co252) +
			parseInt(co253) +
			parseInt(co254) +
			parseInt(co255) +
			parseInt(co256);

		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
		setPo5mapco2(calculatedValue);
	};
	const calculatePo5mapco3 = () => {
		const sumCo =
			parseInt(co351) +
			parseInt(co352) +
			parseInt(co353) +
			parseInt(co354) +
			parseInt(co355) +
			parseInt(co356);

		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
		setPo5mapco3(calculatedValue);
	};
	const calculatePo5mapco4 = () => {
		const sumCo =
			parseInt(co451) +
			parseInt(co452) +
			parseInt(co453) +
			parseInt(co454) +
			parseInt(co455) +
			parseInt(co456);

		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
		setPo5mapco4(calculatedValue);
	};
	const calculatePo5mapco5 = () => {
		const sumCo =
			parseInt(co551) +
			parseInt(co552) +
			parseInt(co553) +
			parseInt(co554) +
			parseInt(co555) +
			parseInt(co556);

		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
		setPo5mapco5(calculatedValue);
	};
	const calculatePo5mapco6 = () => {
		const sumCo =
			parseInt(co651) +
			parseInt(co652) +
			parseInt(co653) +
			parseInt(co654) +
			parseInt(co655) +
			parseInt(co656);

		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
		setPo5mapco6(calculatedValue);
	};
	const calculatePo5mapco7 = () => {
		const sumCo =
			parseInt(co751) +
			parseInt(co752) +
			parseInt(co753) +
			parseInt(co754) +
			parseInt(co755) +
			parseInt(co756);

		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
		setPo5mapco7(calculatedValue);
	};

	//  *************************************************** PO: 6    **********************************************
	const calculatePo6mapco1 = () => {
		const sumCo = parseInt(co161) + parseInt(co162);

		const calculatedValue = Math.round((sumCo * 0.5) / 0.33);
		setPo6mapco1(calculatedValue);
	};
	const calculatePo6mapco2 = () => {
		const sumCo = parseInt(co261) + parseInt(co262);

		const calculatedValue = Math.round((sumCo * 0.5) / 0.33);
		setPo6mapco2(calculatedValue);
	};
	const calculatePo6mapco3 = () => {
		const sumCo = parseInt(co361) + parseInt(co362);

		const calculatedValue = Math.round((sumCo * 0.5) / 0.33);
		setPo6mapco3(calculatedValue);
	};
	const calculatePo6mapco4 = () => {
		const sumCo = parseInt(co461) + parseInt(co462);

		const calculatedValue = Math.round((sumCo * 0.5) / 0.33);
		setPo6mapco4(calculatedValue);
	};
	const calculatePo6mapco5 = () => {
		const sumCo = parseInt(co561) + parseInt(co562);

		const calculatedValue = Math.round((sumCo * 0.5) / 0.33);
		setPo6mapco5(calculatedValue);
	};
	const calculatePo6mapco6 = () => {
		const sumCo = parseInt(co661) + parseInt(co662);

		const calculatedValue = Math.round((sumCo * 0.5) / 0.33);
		setPo6mapco6(calculatedValue);
	};
	const calculatePo6mapco7 = () => {
		const sumCo = parseInt(co761) + parseInt(co762);

		const calculatedValue = Math.round((sumCo * 0.5) / 0.33);
		setPo6mapco7(calculatedValue);
	};

	//  *************************************************** PO: 7    **********************************************
	const calculatePo7mapco1 = () => {
		const sumCo =
			parseInt(co171) + parseInt(co172) + parseInt(co173) + parseInt(co174);

		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPo7mapco1(calculatedValue);
	};
	const calculatePo7mapco2 = () => {
		const sumCo =
			parseInt(co271) + parseInt(co272) + parseInt(co273) + parseInt(co274);

		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPo7mapco2(calculatedValue);
	};
	const calculatePo7mapco3 = () => {
		const sumCo =
			parseInt(co371) + parseInt(co372) + parseInt(co373) + parseInt(co374);

		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPo7mapco3(calculatedValue);
	};
	const calculatePo7mapco4 = () => {
		const sumCo =
			parseInt(co471) + parseInt(co472) + parseInt(co473) + parseInt(co474);

		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPo7mapco4(calculatedValue);
	};
	const calculatePo7mapco5 = () => {
		const sumCo =
			parseInt(co571) + parseInt(co572) + parseInt(co573) + parseInt(co574);

		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPo7mapco5(calculatedValue);
	};
	const calculatePo7mapco6 = () => {
		const sumCo =
			parseInt(co671) + parseInt(co672) + parseInt(co673) + parseInt(co674);

		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPo7mapco6(calculatedValue);
	};
	const calculatePo7mapco7 = () => {
		const sumCo =
			parseInt(co771) + parseInt(co772) + parseInt(co773) + parseInt(co774);

		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPo7mapco7(calculatedValue);
	};
	//  *************************************************** PO: 8    **********************************************
	const calculatePo8mapco1 = () => {
		const sumCo = parseInt(co181) + parseInt(co182) + parseInt(co183);

		const calculatedValue = Math.round((sumCo * 0.33) / 0.33);
		setPo8mapco1(calculatedValue);
	};
	const calculatePo8mapco2 = () => {
		const sumCo = parseInt(co281) + parseInt(co282) + parseInt(co283);

		const calculatedValue = Math.round((sumCo * 0.33) / 0.33);
		setPo8mapco2(calculatedValue);
	};
	const calculatePo8mapco3 = () => {
		const sumCo = parseInt(co381) + parseInt(co382) + parseInt(co383);

		const calculatedValue = Math.round((sumCo * 0.33) / 0.33);
		setPo8mapco3(calculatedValue);
	};
	const calculatePo8mapco4 = () => {
		const sumCo = parseInt(co481) + parseInt(co482) + parseInt(co483);

		const calculatedValue = Math.round((sumCo * 0.33) / 0.33);
		setPo8mapco4(calculatedValue);
	};
	const calculatePo8mapco5 = () => {
		const sumCo = parseInt(co581) + parseInt(co582) + parseInt(co583);

		const calculatedValue = Math.round((sumCo * 0.33) / 0.33);
		setPo8mapco5(calculatedValue);
	};
	const calculatePo8mapco6 = () => {
		const sumCo = parseInt(co681) + parseInt(co682) + parseInt(co683);

		const calculatedValue = Math.round((sumCo * 0.33) / 0.33);
		setPo8mapco6(calculatedValue);
	};
	const calculatePo8mapco7 = () => {
		const sumCo = parseInt(co781) + parseInt(co782) + parseInt(co783);

		const calculatedValue = Math.round((sumCo * 0.33) / 0.33);
		setPo8mapco7(calculatedValue);
	};

	//  *************************************************** PO: 9    **********************************************
	const calculatePo9mapco1 = () => {
		const sumCo =
			parseInt(co191) +
			parseInt(co192) +
			parseInt(co193) +
			parseInt(co194) +
			parseInt(co195) +
			parseInt(co196) +
			parseInt(co197);

		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setPo9mapco1(calculatedValue);
	};
	const calculatePo9mapco2 = () => {
		const sumCo =
			parseInt(co291) +
			parseInt(co292) +
			parseInt(co293) +
			parseInt(co294) +
			parseInt(co295) +
			parseInt(co296) +
			parseInt(co297);

		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setPo9mapco2(calculatedValue);
	};
	const calculatePo9mapco3 = () => {
		const sumCo =
			parseInt(co391) +
			parseInt(co392) +
			parseInt(co393) +
			parseInt(co394) +
			parseInt(co395) +
			parseInt(co396) +
			parseInt(co397);
		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setPo9mapco3(calculatedValue);
	};
	const calculatePo9mapco4 = () => {
		const sumCo =
			parseInt(co491) +
			parseInt(co492) +
			parseInt(co493) +
			parseInt(co494) +
			parseInt(co495) +
			parseInt(co496) +
			parseInt(co497);

		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setPo9mapco4(calculatedValue);
	};
	const calculatePo9mapco5 = () => {
		const sumCo =
			parseInt(co591) +
			parseInt(co592) +
			parseInt(co593) +
			parseInt(co594) +
			parseInt(co595) +
			parseInt(co596) +
			parseInt(co597);

		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setPo9mapco5(calculatedValue);
	};
	const calculatePo9mapco6 = () => {
		const sumCo =
			parseInt(co691) +
			parseInt(co692) +
			parseInt(co693) +
			parseInt(co694) +
			parseInt(co695) +
			parseInt(co696) +
			parseInt(co697);

		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setPo9mapco6(calculatedValue);
	};
	const calculatePo9mapco7 = () => {
		const sumCo =
			parseInt(co791) +
			parseInt(co792) +
			parseInt(co793) +
			parseInt(co794) +
			parseInt(co795) +
			parseInt(co796) +
			parseInt(co797);

		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setPo9mapco7(calculatedValue);
	};

	//  *************************************************** PO: 10    **********************************************
	const calculatePo10mapco1 = () => {
		const sumCo =
			parseInt(co1101) +
			parseInt(co1102) +
			parseInt(co1103) +
			parseInt(co1104) +
			parseInt(co1105) +
			parseInt(co1106) +
			parseInt(co1107);

		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setPo10mapco1(calculatedValue);
	};
	const calculatePo10mapco2 = () => {
		const sumCo =
			parseInt(co2101) +
			parseInt(co2102) +
			parseInt(co2103) +
			parseInt(co2104) +
			parseInt(co2105) +
			parseInt(co2106) +
			parseInt(co2107);

		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setPo10mapco2(calculatedValue);
	};
	const calculatePo10mapco3 = () => {
		const sumCo =
			parseInt(co3101) +
			parseInt(co3102) +
			parseInt(co3103) +
			parseInt(co3104) +
			parseInt(co3105) +
			parseInt(co3106) +
			parseInt(co3107);
		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setPo10mapco3(calculatedValue);
	};
	const calculatePo10mapco4 = () => {
		const sumCo =
			parseInt(co4101) +
			parseInt(co4102) +
			parseInt(co4103) +
			parseInt(co4104) +
			parseInt(co4105) +
			parseInt(co4106) +
			parseInt(co4107);

		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setPo10mapco4(calculatedValue);
	};
	const calculatePo10mapco5 = () => {
		const sumCo =
			parseInt(co5101) +
			parseInt(co5102) +
			parseInt(co5103) +
			parseInt(co5104) +
			parseInt(co5105) +
			parseInt(co5106) +
			parseInt(co5107);

		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setPo10mapco5(calculatedValue);
	};
	const calculatePo10mapco6 = () => {
		const sumCo =
			parseInt(co6101) +
			parseInt(co6102) +
			parseInt(co6103) +
			parseInt(co6104) +
			parseInt(co6105) +
			parseInt(co6106) +
			parseInt(co6107);

		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setPo10mapco6(calculatedValue);
	};
	const calculatePo10mapco7 = () => {
		const sumCo =
			parseInt(co7101) +
			parseInt(co7102) +
			parseInt(co7103) +
			parseInt(co7104) +
			parseInt(co7105) +
			parseInt(co7106) +
			parseInt(co7107);

		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setPo10mapco7(calculatedValue);
	};
	//  *************************************************** PO: 11    **********************************************
	const calculatePo11mapco1 = () => {
		const sumCo =
			parseInt(co1111) +
			parseInt(co1112) +
			parseInt(co1113) +
			parseInt(co1114) +
			parseInt(co1115);

		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPo11mapco1(calculatedValue);
	};
	const calculatePo11mapco2 = () => {
		const sumCo =
			parseInt(co2111) +
			parseInt(co2112) +
			parseInt(co2113) +
			parseInt(co2114) +
			parseInt(co2115);

		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPo11mapco2(calculatedValue);
	};
	const calculatePo11mapco3 = () => {
		const sumCo =
			parseInt(co3111) +
			parseInt(co3112) +
			parseInt(co3113) +
			parseInt(co3114) +
			parseInt(co3115);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPo11mapco3(calculatedValue);
	};
	const calculatePo11mapco4 = () => {
		const sumCo =
			parseInt(co4111) +
			parseInt(co4112) +
			parseInt(co4113) +
			parseInt(co4114) +
			parseInt(co4115);

		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPo11mapco4(calculatedValue);
	};
	const calculatePo11mapco5 = () => {
		const sumCo =
			parseInt(co5111) +
			parseInt(co5112) +
			parseInt(co5113) +
			parseInt(co5114) +
			parseInt(co5115);

		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPo11mapco5(calculatedValue);
	};
	const calculatePo11mapco6 = () => {
		const sumCo =
			parseInt(co6111) +
			parseInt(co6112) +
			parseInt(co6113) +
			parseInt(co6114) +
			parseInt(co6115);

		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPo11mapco6(calculatedValue);
	};
	const calculatePo11mapco7 = () => {
		const sumCo =
			parseInt(co7111) +
			parseInt(co7112) +
			parseInt(co7113) +
			parseInt(co7114) +
			parseInt(co7115);

		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPo11mapco7(calculatedValue);
	};

	//  *************************************************** PO: 12    **********************************************
	const calculatePo12mapco1 = () => {
		const sumCo =
			parseInt(co1121) +
			parseInt(co1122) +
			parseInt(co1123) +
			parseInt(co1124) +
			parseInt(co1125) +
			parseInt(co1126);

		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
		setPo12mapco1(calculatedValue);
	};
	const calculatePo12mapco2 = () => {
		const sumCo =
			parseInt(co2121) +
			parseInt(co2122) +
			parseInt(co2123) +
			parseInt(co2124) +
			parseInt(co2125) +
			parseInt(co2126);

		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
		setPo12mapco2(calculatedValue);
	};
	const calculatePo12mapco3 = () => {
		const sumCo =
			parseInt(co3121) +
			parseInt(co3122) +
			parseInt(co3123) +
			parseInt(co3124) +
			parseInt(co3125) +
			parseInt(co3126);
		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
		setPo12mapco3(calculatedValue);
	};
	const calculatePo12mapco4 = () => {
		const sumCo =
			parseInt(co4121) +
			parseInt(co4122) +
			parseInt(co4123) +
			parseInt(co4124) +
			parseInt(co4125) +
			parseInt(co4126);

		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
		setPo12mapco4(calculatedValue);
	};
	const calculatePo12mapco5 = () => {
		const sumCo =
			parseInt(co5121) +
			parseInt(co5122) +
			parseInt(co5123) +
			parseInt(co5124) +
			parseInt(co5125) +
			parseInt(co5126);

		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
		setPo12mapco5(calculatedValue);
	};
	const calculatePo12mapco6 = () => {
		const sumCo =
			parseInt(co6121) +
			parseInt(co6122) +
			parseInt(co6123) +
			parseInt(co6124) +
			parseInt(co6125) +
			parseInt(co6126);

		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
		setPo12mapco6(calculatedValue);
	};
	const calculatePo12mapco7 = () => {
		const sumCo =
			parseInt(co7121) +
			parseInt(co7122) +
			parseInt(co7123) +
			parseInt(co7124) +
			parseInt(co7125) +
			parseInt(co7126);

		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
		setPo12mapco7(calculatedValue);
	};

	//   *********************************        pso : 1   *****************************************

	const calculatePso1mapco1 = () => {
		const sumCo =
			parseInt(psoco111) +
			parseInt(psoco112) +
			parseInt(psoco113) +
			parseInt(psoco114) +
			parseInt(psoco115);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPso1mapco1(calculatedValue);
	};
	const calculatePso1mapco2 = () => {
		const sumCo =
			parseInt(psoco211) +
			parseInt(psoco212) +
			parseInt(psoco213) +
			parseInt(psoco214) +
			parseInt(psoco215);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPso1mapco2(calculatedValue);
	};
	const calculatePso1mapco3 = () => {
		const sumCo =
			parseInt(psoco311) +
			parseInt(psoco312) +
			parseInt(psoco313) +
			parseInt(psoco314) +
			parseInt(psoco315);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPso1mapco3(calculatedValue);
	};
	const calculatePso1mapco4 = () => {
		const sumCo =
			parseInt(psoco411) +
			parseInt(psoco412) +
			parseInt(psoco413) +
			parseInt(psoco414) +
			parseInt(psoco415);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPso1mapco4(calculatedValue);
	};
	const calculatePso1mapco5 = () => {
		const sumCo =
			parseInt(psoco511) +
			parseInt(psoco512) +
			parseInt(psoco513) +
			parseInt(psoco514) +
			parseInt(psoco515);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPso1mapco5(calculatedValue);
	};
	const calculatePso1mapco6 = () => {
		const sumCo =
			parseInt(psoco611) +
			parseInt(psoco612) +
			parseInt(psoco613) +
			parseInt(psoco614) +
			parseInt(psoco615);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPso1mapco6(calculatedValue);
	};
	const calculatePso1mapco7 = () => {
		const sumCo =
			parseInt(psoco711) +
			parseInt(psoco712) +
			parseInt(psoco713) +
			parseInt(psoco714) +
			parseInt(psoco715);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setPso1mapco7(calculatedValue);
	};

	//   *********************************        pso : 2   *****************************************

	const calculatePso2mapco1 = () => {
		const sumCo =
			parseInt(psoco121) +
			parseInt(psoco122) +
			parseInt(psoco123) +
			parseInt(psoco124);
		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPso2mapco1(calculatedValue);
	};
	const calculatePso2mapco2 = () => {
		const sumCo =
			parseInt(psoco221) +
			parseInt(psoco222) +
			parseInt(psoco223) +
			parseInt(psoco224);
		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPso2mapco2(calculatedValue);
	};
	const calculatePso2mapco3 = () => {
		const sumCo =
			parseInt(psoco321) +
			parseInt(psoco322) +
			parseInt(psoco323) +
			parseInt(psoco324);
		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPso2mapco3(calculatedValue);
	};
	const calculatePso2mapco4 = () => {
		const sumCo =
			parseInt(psoco421) +
			parseInt(psoco422) +
			parseInt(psoco423) +
			parseInt(psoco424);
		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPso2mapco4(calculatedValue);
	};
	const calculatePso2mapco5 = () => {
		const sumCo =
			parseInt(psoco521) +
			parseInt(psoco522) +
			parseInt(psoco523) +
			parseInt(psoco524);
		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPso2mapco5(calculatedValue);
	};
	const calculatePso2mapco6 = () => {
		const sumCo =
			parseInt(psoco621) +
			parseInt(psoco622) +
			parseInt(psoco623) +
			parseInt(psoco624);
		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPso2mapco6(calculatedValue);
	};
	const calculatePso2mapco7 = () => {
		const sumCo =
			parseInt(psoco721) +
			parseInt(psoco722) +
			parseInt(psoco723) +
			parseInt(psoco724);
		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPso2mapco7(calculatedValue);
	};
	//   *********************************        pso : 2   *****************************************

	const calculatePso3mapco1 = () => {
		const sumCo =
			parseInt(psoco131) +
			parseInt(psoco132) +
			parseInt(psoco133) +
			parseInt(psoco134);
		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPso3mapco1(calculatedValue);
	};
	const calculatePso3mapco2 = () => {
		const sumCo =
			parseInt(psoco231) +
			parseInt(psoco232) +
			parseInt(psoco233) +
			parseInt(psoco234);
		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPso3mapco2(calculatedValue);
	};
	const calculatePso3mapco3 = () => {
		const sumCo =
			parseInt(psoco331) +
			parseInt(psoco332) +
			parseInt(psoco333) +
			parseInt(psoco334);
		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPso3mapco3(calculatedValue);
	};
	const calculatePso3mapco4 = () => {
		const sumCo =
			parseInt(psoco431) +
			parseInt(psoco432) +
			parseInt(psoco433) +
			parseInt(psoco434);
		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPso3mapco4(calculatedValue);
	};
	const calculatePso3mapco5 = () => {
		const sumCo =
			parseInt(psoco531) +
			parseInt(psoco532) +
			parseInt(psoco533) +
			parseInt(psoco534);
		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPso3mapco5(calculatedValue);
	};
	const calculatePso3mapco6 = () => {
		const sumCo =
			parseInt(psoco631) +
			parseInt(psoco632) +
			parseInt(psoco633) +
			parseInt(psoco634);
		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPso3mapco6(calculatedValue);
	};
	const calculatePso3mapco7 = () => {
		const sumCo =
			parseInt(psoco731) +
			parseInt(psoco732) +
			parseInt(psoco733) +
			parseInt(psoco734);
		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
		setPso3mapco7(calculatedValue);
	};

	useEffect(() => {
		calculatePo1mapco1();
		calculatePo1mapco2();
		calculatePo1mapco3();
		calculatePo1mapco4();
		calculatePo1mapco5();
		calculatePo1mapco6();
		calculatePo1mapco7();
		//  PO: 2
		calculatePo2mapco1();
		calculatePo2mapco2();
		calculatePo2mapco3();
		calculatePo2mapco4();
		calculatePo2mapco5();
		calculatePo2mapco6();
		calculatePo2mapco7();
		//  PO: 3
		calculatePo3mapco1();
		calculatePo3mapco2();
		calculatePo3mapco3();
		calculatePo3mapco4();
		calculatePo3mapco5();
		calculatePo3mapco6();
		calculatePo3mapco7();
		//  PO: 4
		calculatePo4mapco1();
		calculatePo4mapco2();
		calculatePo4mapco3();
		calculatePo4mapco4();
		calculatePo4mapco5();
		calculatePo4mapco6();
		calculatePo4mapco7();
		//  PO: 5
		calculatePo5mapco1();
		calculatePo5mapco2();
		calculatePo5mapco3();
		calculatePo5mapco4();
		calculatePo5mapco5();
		calculatePo5mapco6();
		calculatePo5mapco7();
		//  PO: 6
		calculatePo6mapco1();
		calculatePo6mapco2();
		calculatePo6mapco3();
		calculatePo6mapco4();
		calculatePo6mapco5();
		calculatePo6mapco6();
		calculatePo6mapco7();
		//  PO: 7
		calculatePo7mapco1();
		calculatePo7mapco2();
		calculatePo7mapco3();
		calculatePo7mapco4();
		calculatePo7mapco5();
		calculatePo7mapco6();
		calculatePo7mapco7();
		//  PO: 8
		calculatePo8mapco1();
		calculatePo8mapco2();
		calculatePo8mapco3();
		calculatePo8mapco4();
		calculatePo8mapco5();
		calculatePo8mapco6();
		calculatePo8mapco7();
		//  PO: 9
		calculatePo9mapco1();
		calculatePo9mapco2();
		calculatePo9mapco3();
		calculatePo9mapco4();
		calculatePo9mapco5();
		calculatePo9mapco6();
		calculatePo9mapco7();
		//  PO: 10
		calculatePo10mapco1();
		calculatePo10mapco2();
		calculatePo10mapco3();
		calculatePo10mapco4();
		calculatePo10mapco5();
		calculatePo10mapco6();
		calculatePo10mapco7();
		//  PO: 11
		calculatePo11mapco1();
		calculatePo11mapco2();
		calculatePo11mapco3();
		calculatePo11mapco4();
		calculatePo11mapco5();
		calculatePo11mapco6();
		calculatePo11mapco7();
		//  PO: 12
		calculatePo12mapco1();
		calculatePo12mapco2();
		calculatePo12mapco3();
		calculatePo12mapco4();
		calculatePo12mapco5();
		calculatePo12mapco6();
		calculatePo12mapco7();
		calculatePo11mapco7();
		//  PSO: 1
		calculatePso1mapco1();
		calculatePso1mapco2();
		calculatePso1mapco3();
		calculatePso1mapco4();
		calculatePso1mapco5();
		calculatePso1mapco6();
		calculatePso1mapco7();
		//  PSO: 2
		calculatePso2mapco1();
		calculatePso2mapco2();
		calculatePso2mapco3();
		calculatePso2mapco4();
		calculatePso2mapco5();
		calculatePso2mapco6();
		calculatePso2mapco7();
		//  PSO: 3
		calculatePso3mapco1();
		calculatePso3mapco2();
		calculatePso3mapco3();
		calculatePso3mapco4();
		calculatePso3mapco5();
		calculatePso3mapco6();
		calculatePso3mapco7();
	}, [
		co111,
		co112,
		co113,
		co114,
		co115,
		co211,
		co212,
		co213,
		co214,
		co215,
		co311,
		co312,
		co313,
		co314,
		co315,

		co411,
		co412,
		co413,
		co414,
		co415,

		co511,
		co512,
		co513,
		co514,
		co515,

		co611,
		co612,
		co613,
		co614,
		co615,

		co711,
		co712,
		co713,
		co714,
		co715,

		co121,
		co122,
		co123,
		co124,
		co125,
		co126,
		co127,
		co128,
		co129,
		co1210,
		co1211,
		co1212,
		co1213,

		co221,
		co222,
		co223,
		co224,
		co225,
		co226,
		co227,
		co228,
		co229,
		co2210,
		co2211,
		co2212,
		co2213,

		co321,
		co322,
		co323,
		co324,
		co325,
		co326,
		co327,
		co328,
		co329,
		co3210,
		co3211,
		co3212,
		co3213,

		co421,
		co422,
		co423,
		co424,
		co425,
		co426,
		co427,
		co428,
		co429,
		co4210,
		co4211,
		co4212,
		co4213,

		co521,
		co522,
		co523,
		co524,
		co525,
		co526,
		co527,
		co528,
		co529,
		co5210,
		co5211,
		co5212,
		co5213,

		co621,
		co622,
		co623,
		co624,
		co625,
		co626,
		co627,
		co628,
		co629,
		co6210,
		co6211,
		co6212,
		co6213,

		co721,
		co722,
		co723,
		co724,
		co725,
		co726,
		co727,
		co728,
		co729,
		co7210,
		co7211,
		co7212,
		co7213,

		// po:3

		co131,
		co132,
		co133,
		co134,
		co135,
		co136,
		co137,
		co138,
		co139,
		co1310,
		co1311,
		co1312,
		co1313,

		co231,
		co232,
		co233,
		co234,
		co235,
		co236,
		co237,
		co238,
		co239,
		co2310,
		co2311,
		co2312,
		co2313,

		co331,
		co332,
		co333,
		co334,
		co335,
		co336,
		co337,
		co338,
		co339,
		co3310,
		co3311,
		co3312,
		co3313,

		co431,
		co432,
		co433,
		co434,
		co435,
		co436,
		co437,
		co438,
		co439,
		co4310,
		co4311,
		co4312,
		co4313,

		co531,
		co532,
		co533,
		co534,
		co535,
		co536,
		co537,
		co538,
		co539,
		co5310,
		co5311,
		co5312,
		co5313,

		co631,
		co632,
		co633,
		co634,
		co635,
		co636,
		co637,
		co638,
		co639,
		co6310,
		co6311,
		co6312,
		co6313,

		co731,
		co732,
		co733,
		co734,
		co735,
		co736,
		co737,
		co738,
		co739,
		co7310,
		co7311,
		co7312,
		co7313,

		// ************************ PO:4  ***************************************

		co141,
		co142,
		co143,
		co144,
		co145,
		co146,
		co147,
		co148,
		co149,
		co1410,

		co241,
		co242,
		co243,
		co244,
		co245,
		co246,
		co247,
		co248,
		co249,
		co2410,

		co341,
		co342,
		co343,
		co344,
		co345,
		co346,
		co347,
		co348,
		co349,
		co3410,

		co441,
		co442,
		co443,
		co444,
		co445,
		co446,
		co447,
		co448,
		co449,
		co4410,

		co541,
		co542,
		co543,
		co544,
		co545,
		co546,
		co547,
		co548,
		co549,
		co5410,

		co641,
		co642,
		co643,
		co644,
		co645,
		co646,
		co647,
		co648,
		co649,
		co6410,

		co741,
		co742,
		co743,
		co744,
		co745,
		co746,
		co747,
		co748,
		co749,
		co7410,

		// ************************ PO:5  ***************************************

		co151,
		co152,
		co153,
		co154,
		co155,
		co156,

		co251,
		co252,
		co253,
		co254,
		co255,
		co256,

		co351,
		co352,
		co353,
		co354,
		co355,
		co356,

		co451,
		co452,
		co453,
		co454,
		co455,
		co456,

		co551,
		co552,
		co553,
		co554,
		co555,
		co556,

		co651,
		co652,
		co653,
		co654,
		co655,
		co656,

		co751,
		co752,
		co753,
		co754,
		co755,
		co756,

		// ************************ PO:6  ***************************************

		co161,
		co162,

		co261,
		co262,

		co361,
		co362,

		co461,
		co462,

		co561,
		co562,

		co661,
		co662,

		co761,
		co762,

		// ************************ PO:7  ***************************************

		co171,
		co172,
		co173,
		co174,

		co271,
		co272,
		co273,
		co274,

		co371,
		co372,
		co373,
		co374,

		co471,
		co472,
		co473,
		co474,

		co571,
		co572,
		co573,
		co574,

		co671,
		co672,
		co673,
		co674,

		co771,
		co772,
		co773,
		co774,

		// ************************ PO:8  ***************************************

		co181,
		co182,
		co183,

		co281,
		co282,
		co283,

		co381,
		co382,
		co383,

		co481,
		co482,
		co483,

		co581,
		co582,
		co583,

		co681,
		co682,
		co683,

		co781,
		co782,
		co783,

		// ************************ PO:9  ***************************************

		co191,
		co192,
		co193,
		co194,
		co195,
		co196,
		co197,

		co291,
		co292,
		co293,
		co294,
		co295,
		co296,
		co297,

		co391,
		co392,
		co393,
		co394,
		co395,
		co396,
		co397,

		co491,
		co492,
		co493,
		co494,
		co495,
		co496,
		co497,

		co591,
		co592,
		co593,
		co594,
		co595,
		co596,
		co597,

		co691,
		co692,
		co693,
		co694,
		co695,
		co696,
		co697,

		co791,
		co792,
		co793,
		co794,
		co795,
		co796,
		co797,

		// ************************ PO: 10  ***************************************

		co1101,
		co1102,
		co1103,
		co1104,
		co1105,
		co1106,
		co1107,

		co2101,
		co2102,
		co2103,
		co2104,
		co2105,
		co2106,
		co2107,

		co3101,
		co3102,
		co3103,
		co3104,
		co3105,
		co3106,
		co3107,

		co4101,
		co4102,
		co4103,
		co4104,
		co4105,
		co4106,
		co4107,

		co5101,
		co5102,
		co5103,
		co5104,
		co5105,
		co5106,
		co5107,

		co6101,
		co6102,
		co6103,
		co6104,
		co6105,
		co6106,
		co6107,

		co7101,
		co7102,
		co7103,
		co7104,
		co7105,
		co7106,
		co7107,

		// ************************ PO: 11  ***************************************

		co1111,
		co1112,
		co1113,
		co1114,
		co1115,

		co2111,
		co2112,
		co2113,
		co2114,
		co2115,

		co3111,
		co3112,
		co3113,
		co3114,
		co3115,

		co4111,
		co4112,
		co4113,
		co4114,
		co4115,

		co5111,
		co5112,
		co5113,
		co5114,
		co5115,

		co6111,
		co6112,
		co6113,
		co6114,
		co6115,

		co7111,
		co7112,
		co7113,
		co7114,
		co7115,

		// ************************ PO: 12  ***************************************

		co1121,
		co1122,
		co1123,
		co1124,
		co1125,
		co1126,

		co2121,
		co2122,
		co2123,
		co2124,
		co2125,
		co2126,

		co3121,
		co3122,
		co3123,
		co3124,
		co3125,
		co3126,

		co4121,
		co4122,
		co4123,
		co4124,
		co4125,
		co4126,

		co5121,
		co5122,
		co5123,
		co5124,
		co5125,
		co5126,

		co6121,
		co6122,
		co6123,
		co6124,
		co6125,
		co6126,

		co7121,
		co7122,
		co7123,
		co7124,
		co7125,
		co7126,

		// ******************************* PSO:1 *****************************

		psoco111,
		psoco112,
		psoco113,
		psoco114,
		psoco115,

		psoco211,
		psoco212,
		psoco213,
		psoco214,
		psoco215,

		psoco311,
		psoco312,
		psoco313,
		psoco314,
		psoco315,

		psoco411,
		psoco412,
		psoco413,
		psoco414,
		psoco415,

		psoco511,
		psoco512,
		psoco513,
		psoco514,
		psoco515,

		psoco611,
		psoco612,
		psoco613,
		psoco614,
		psoco615,

		psoco711,
		psoco712,
		psoco713,
		psoco714,
		psoco715,

		// ******************************* PSO:2 *****************************

		psoco121,
		psoco122,
		psoco123,
		psoco124,

		psoco221,
		psoco222,
		psoco223,
		psoco224,

		psoco321,
		psoco322,
		psoco323,
		psoco324,

		psoco421,
		psoco422,
		psoco423,
		psoco424,

		psoco521,
		psoco522,
		psoco523,
		psoco524,

		psoco621,
		psoco622,
		psoco623,
		psoco624,

		psoco721,
		psoco722,
		psoco723,
		psoco724,

		// ******************************* PSO:3 *****************************

		psoco131,
		psoco132,
		psoco133,
		psoco134,

		psoco231,
		psoco232,
		psoco233,
		psoco234,

		psoco331,
		psoco332,
		psoco333,
		psoco334,

		psoco431,
		psoco432,
		psoco433,
		psoco434,

		psoco531,
		psoco532,
		psoco533,
		psoco534,

		psoco631,
		psoco632,
		psoco633,
		psoco634,

		psoco731,
		psoco732,
		psoco733,
		psoco734,
	]);

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		// if (
		// 	!po ||
		// 	!competency ||
		// 	!indicators ||
		// 	!weight ||
		// 	!co1 ||
		// 	!co2 ||
		// 	!co3 ||
		// 	!co4 ||
		// 	!co5 ||
		// 	!co6 ||
		// 	!co7
		// ) {
		// 	alert("fill all fields");
		// 	return;
		// }

		try {
			const res = await fetch("http://localhost:3000/api/table", {
				// const res = await fetch("https://copo-attainment.vercel.app/api/table", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					po11,
					po12,
					po13,
					po14,
					po15,

					competency11,
					competency12,
					competency13,
					competency14,
					competency15,

					indicators11,
					indicators12,
					indicators13,
					indicators14,
					indicators15,

					weight11,
					weight12,
					weight13,
					weight14,
					weight15,

					co111,
					co112,
					co113,
					co114,
					co115,

					co211,
					co212,
					co213,
					co214,
					co215,

					co311,
					co312,
					co313,
					co314,
					co315,

					co411,
					co412,
					co413,
					co414,
					co415,

					co511,
					co512,
					co513,
					co514,
					co515,

					co611,
					co612,
					co613,
					co614,
					co615,

					co711,
					co712,
					co713,
					co714,
					co715,

					po1mapco1,
					po1mapco2,
					po1mapco3,
					po1mapco4,
					po1mapco5,
					po1mapco6,
					po1mapco7,

					year,
					dept,
					sem,
					subject,

					//  **********************   po2    *****************************

					po21,

					competency21,
					competency22,
					competency23,
					competency24,

					indicators21,
					indicators22,
					indicators23,
					indicators24,
					indicators25,
					indicators26,
					indicators27,
					indicators28,
					indicators29,
					indicators210,
					indicators211,
					indicators212,
					indicators213,

					weight21,
					weight22,
					weight23,
					weight24,
					weight25,
					weight26,
					weight27,
					weight28,
					weight29,
					weight210,
					weight211,
					weight212,
					weight213,

					co121,
					co122,
					co123,
					co124,
					co125,
					co126,
					co127,
					co128,
					co129,
					co1210,
					co1211,
					co1212,
					co1213,

					co221,
					co222,
					co223,
					co224,
					co225,
					co226,
					co227,
					co228,
					co229,
					co2210,
					co2211,
					co2212,
					co2213,

					co321,
					co322,
					co323,
					co324,
					co325,
					co326,
					co327,
					co328,
					co329,
					co3210,
					co3211,
					co3212,
					co3213,

					co421,
					co422,
					co423,
					co424,
					co425,
					co426,
					co427,
					co428,
					co429,
					co4210,
					co4211,
					co4212,
					co4213,

					co521,
					co522,
					co523,
					co524,
					co525,
					co526,
					co527,
					co528,
					co529,
					co5210,
					co5211,
					co5212,
					co5213,

					co621,
					co622,
					co623,
					co624,
					co625,
					co626,
					co627,
					co628,
					co629,
					co6210,
					co6211,
					co6212,
					co6213,

					co721,
					co722,
					co723,
					co724,
					co725,
					co726,
					co727,
					co728,
					co729,
					co7210,
					co7211,
					co7212,
					co7213,

					po2mapco1,
					po2mapco2,
					po2mapco3,
					po2mapco4,
					po2mapco5,
					po2mapco6,
					po2mapco7,

					// ************************ PO:3  ***************************************

					po31,

					competency31,
					competency32,
					competency33,
					competency34,

					indicators31,
					indicators32,
					indicators33,
					indicators34,
					indicators35,
					indicators36,
					indicators37,
					indicators38,
					indicators39,
					indicators310,
					indicators311,
					indicators312,
					indicators313,

					weight31,
					weight32,
					weight33,
					weight34,
					weight35,
					weight36,
					weight37,
					weight38,
					weight39,
					weight310,
					weight311,
					weight312,
					weight313,

					co131,
					co132,
					co133,
					co134,
					co135,
					co136,
					co137,
					co138,
					co139,
					co1310,
					co1311,
					co1312,
					co1313,

					co231,
					co232,
					co233,
					co234,
					co235,
					co236,
					co237,
					co238,
					co239,
					co2310,
					co2311,
					co2312,
					co2313,

					co331,
					co332,
					co333,
					co334,
					co335,
					co336,
					co337,
					co338,
					co339,
					co3310,
					co3311,
					co3312,
					co3313,

					co431,
					co432,
					co433,
					co434,
					co435,
					co436,
					co437,
					co438,
					co439,
					co4310,
					co4311,
					co4312,
					co4313,

					co531,
					co532,
					co533,
					co534,
					co535,
					co536,
					co537,
					co538,
					co539,
					co5310,
					co5311,
					co5312,
					co5313,

					co631,
					co632,
					co633,
					co634,
					co635,
					co636,
					co637,
					co638,
					co639,
					co6310,
					co6311,
					co6312,
					co6313,

					co731,
					co732,
					co733,
					co734,
					co735,
					co736,
					co737,
					co738,
					co739,
					co7310,
					co7311,
					co7312,
					co7313,

					po3mapco1,
					po3mapco2,
					po3mapco3,
					po3mapco4,
					po3mapco5,
					po3mapco6,
					po3mapco7,

					// ************************ PO:4  ***************************************

					po41,

					competency41,
					competency42,
					competency43,

					indicators41,
					indicators42,
					indicators43,
					indicators44,
					indicators45,
					indicators46,
					indicators47,
					indicators48,
					indicators49,
					indicators410,

					weight41,
					weight42,
					weight43,
					weight44,
					weight45,
					weight46,
					weight47,
					weight48,
					weight49,
					weight410,

					co141,
					co142,
					co143,
					co144,
					co145,
					co146,
					co147,
					co148,
					co149,
					co1410,

					co241,
					co242,
					co243,
					co244,
					co245,
					co246,
					co247,
					co248,
					co249,
					co2410,

					co341,
					co342,
					co343,
					co344,
					co345,
					co346,
					co347,
					co348,
					co349,
					co3410,

					co441,
					co442,
					co443,
					co444,
					co445,
					co446,
					co447,
					co448,
					co449,
					co4410,

					co541,
					co542,
					co543,
					co544,
					co545,
					co546,
					co547,
					co548,
					co549,
					co5410,

					co641,
					co642,
					co643,
					co644,
					co645,
					co646,
					co647,
					co648,
					co649,
					co6410,

					co741,
					co742,
					co743,
					co744,
					co745,
					co746,
					co747,
					co748,
					co749,
					co7410,

					po4mapco1,
					po4mapco2,
					po4mapco3,
					po4mapco4,
					po4mapco5,
					po4mapco6,
					po4mapco7,

					// ************************ PO:5  ***************************************

					po51,

					competency51,
					competency52,
					competency53,

					indicators51,
					indicators52,
					indicators53,
					indicators54,
					indicators55,
					indicators56,

					weight51,
					weight52,
					weight53,
					weight54,
					weight55,
					weight56,

					co151,
					co152,
					co153,
					co154,
					co155,
					co156,

					co251,
					co252,
					co253,
					co254,
					co255,
					co256,

					co351,
					co352,
					co353,
					co354,
					co355,
					co356,

					co451,
					co452,
					co453,
					co454,
					co455,
					co456,

					co551,
					co552,
					co553,
					co554,
					co555,
					co556,

					co651,
					co652,
					co653,
					co654,
					co655,
					co656,

					co751,
					co752,
					co753,
					co754,
					co755,
					co756,

					po5mapco1,
					po5mapco2,
					po5mapco3,
					po5mapco4,
					po5mapco5,
					po5mapco6,
					po5mapco7,

					// ************************ PO:6  ***************************************

					po61,

					competency61,
					competency62,

					indicators61,
					indicators62,

					weight61,
					weight62,

					co161,
					co162,

					co261,
					co262,

					co361,
					co362,

					co461,
					co462,

					co561,
					co562,

					co661,
					co662,

					co761,
					co762,

					po6mapco1,
					po6mapco2,
					po6mapco3,
					po6mapco4,
					po6mapco5,
					po6mapco6,
					po6mapco7,

					// ************************ PO:7  ***************************************

					po71,

					competency71,
					competency72,

					indicators71,
					indicators72,
					indicators73,
					indicators74,

					weight71,
					weight72,
					weight73,
					weight74,

					co171,
					co172,
					co173,
					co174,

					co271,
					co272,
					co273,
					co274,

					co371,
					co372,
					co373,
					co374,

					co471,
					co472,
					co473,
					co474,

					co571,
					co572,
					co573,
					co574,

					co671,
					co672,
					co673,
					co674,

					co771,
					co772,
					co773,
					co774,

					po7mapco1,
					po7mapco2,
					po7mapco3,
					po7mapco4,
					po7mapco5,
					po7mapco6,
					po7mapco7,

					// ************************ PO:8  ***************************************

					po81,

					competency81,
					competency82,

					indicators81,
					indicators82,
					indicators83,

					weight81,
					weight82,
					weight83,

					co181,
					co182,
					co183,

					co281,
					co282,
					co283,

					co381,
					co382,
					co383,

					co481,
					co482,
					co483,

					co581,
					co582,
					co583,

					co681,
					co682,
					co683,

					co781,
					co782,
					co783,

					po8mapco1,
					po8mapco2,
					po8mapco3,
					po8mapco4,
					po8mapco5,
					po8mapco6,
					po8mapco7,

					// ************************ PO:9  ***************************************

					po91,

					competency91,
					competency92,
					competency93,

					indicators91,
					indicators92,
					indicators93,
					indicators94,
					indicators95,
					indicators96,
					indicators97,

					weight91,
					weight92,
					weight93,
					weight94,
					weight95,
					weight96,
					weight97,

					co191,
					co192,
					co193,
					co194,
					co195,
					co196,
					co197,

					co291,
					co292,
					co293,
					co294,
					co295,
					co296,
					co297,

					co391,
					co392,
					co393,
					co394,
					co395,
					co396,
					co397,

					co491,
					co492,
					co493,
					co494,
					co495,
					co496,
					co497,

					co591,
					co592,
					co593,
					co594,
					co595,
					co596,
					co597,

					co691,
					co692,
					co693,
					co694,
					co695,
					co696,
					co697,

					co791,
					co792,
					co793,
					co794,
					co795,
					co796,
					co797,

					po9mapco1,
					po9mapco2,
					po9mapco3,
					po9mapco4,
					po9mapco5,
					po9mapco6,
					po9mapco7,

					// ************************ PO: 10  ***************************************

					po101,

					competency101,
					competency102,
					competency103,

					indicators101,
					indicators102,
					indicators103,
					indicators104,
					indicators105,
					indicators106,
					indicators107,

					weight101,
					weight102,
					weight103,
					weight104,
					weight105,
					weight106,
					weight107,

					co1101,
					co1102,
					co1103,
					co1104,
					co1105,
					co1106,
					co1107,

					co2101,
					co2102,
					co2103,
					co2104,
					co2105,
					co2106,
					co2107,

					co3101,
					co3102,
					co3103,
					co3104,
					co3105,
					co3106,
					co3107,

					co4101,
					co4102,
					co4103,
					co4104,
					co4105,
					co4106,
					co4107,

					co5101,
					co5102,
					co5103,
					co5104,
					co5105,
					co5106,
					co5107,

					co6101,
					co6102,
					co6103,
					co6104,
					co6105,
					co6106,
					co6107,

					co7101,
					co7102,
					co7103,
					co7104,
					co7105,
					co7106,
					co7107,

					po10mapco1,
					po10mapco2,
					po10mapco3,
					po10mapco4,
					po10mapco5,
					po10mapco6,
					po10mapco7,

					// ************************ PO: 10  ***************************************

					po111,

					competency111,
					competency112,
					competency113,

					indicators111,
					indicators112,
					indicators113,
					indicators114,
					indicators115,

					weight111,
					weight112,
					weight113,
					weight114,
					weight115,

					co1111,
					co1112,
					co1113,
					co1114,
					co1115,

					co2111,
					co2112,
					co2113,
					co2114,
					co2115,

					co3111,
					co3112,
					co3113,
					co3114,
					co3115,

					co4111,
					co4112,
					co4113,
					co4114,
					co4115,

					co5111,
					co5112,
					co5113,
					co5114,
					co5115,

					co6111,
					co6112,
					co6113,
					co6114,
					co6115,

					co7111,
					co7112,
					co7113,
					co7114,
					co7115,

					po11mapco1,
					po11mapco2,
					po11mapco3,
					po11mapco4,
					po11mapco5,
					po11mapco6,
					po11mapco7,

					// ************************ PO: 12  ***************************************

					po121,

					competency121,
					competency122,
					competency123,

					indicators121,
					indicators122,
					indicators123,
					indicators124,
					indicators125,
					indicators126,

					weight121,
					weight122,
					weight123,
					weight124,
					weight125,
					weight126,

					co1121,
					co1122,
					co1123,
					co1124,
					co1125,
					co1126,

					co2121,
					co2122,
					co2123,
					co2124,
					co2125,
					co2126,

					co3121,
					co3122,
					co3123,
					co3124,
					co3125,
					co3126,

					co4121,
					co4122,
					co4123,
					co4124,
					co4125,
					co4126,

					co5121,
					co5122,
					co5123,
					co5124,
					co5125,
					co5126,

					co6121,
					co6122,
					co6123,
					co6124,
					co6125,
					co6126,

					co7121,
					co7122,
					co7123,
					co7124,
					co7125,
					co7126,

					po12mapco1,
					po12mapco2,
					po12mapco3,
					po12mapco4,
					po12mapco5,
					po12mapco6,
					po12mapco7,

					// ******************************* PSO:1 *****************************

					pso11,

					psocompetency11,
					psocompetency12,

					psoindicators11,
					psoindicators12,
					psoindicators13,
					psoindicators14,
					psoindicators15,

					psoweight11,
					psoweight12,
					psoweight13,
					psoweight14,
					psoweight15,

					psoco111,
					psoco112,
					psoco113,
					psoco114,
					psoco115,

					psoco211,
					psoco212,
					psoco213,
					psoco214,
					psoco215,

					psoco311,
					psoco312,
					psoco313,
					psoco314,
					psoco315,

					psoco411,
					psoco412,
					psoco413,
					psoco414,
					psoco415,

					psoco511,
					psoco512,
					psoco513,
					psoco514,
					psoco515,

					psoco611,
					psoco612,
					psoco613,
					psoco614,
					psoco615,

					psoco711,
					psoco712,
					psoco713,
					psoco714,
					psoco715,

					pso1mapco1,
					pso1mapco2,
					pso1mapco3,
					pso1mapco4,
					pso1mapco5,
					pso1mapco6,
					pso1mapco7,

					// ******************************* PSO:2 *****************************

					pso21,

					psocompetency21,
					psocompetency22,

					psoindicators21,
					psoindicators22,
					psoindicators23,
					psoindicators24,

					psoweight21,
					psoweight22,
					psoweight23,
					psoweight24,

					psoco121,
					psoco122,
					psoco123,
					psoco124,

					psoco221,
					psoco222,
					psoco223,
					psoco224,

					psoco321,
					psoco322,
					psoco323,
					psoco324,

					psoco421,
					psoco422,
					psoco423,
					psoco424,

					psoco521,
					psoco522,
					psoco523,
					psoco524,

					psoco621,
					psoco622,
					psoco623,
					psoco624,

					psoco721,
					psoco722,
					psoco723,
					psoco724,

					pso2mapco1,
					pso2mapco2,
					pso2mapco3,
					pso2mapco4,
					pso2mapco5,
					pso2mapco6,
					pso2mapco7,

					// ******************************* PSO:3 *****************************

					pso31,

					psocompetency31,
					psocompetency32,

					psoindicators31,
					psoindicators32,
					psoindicators33,
					psoindicators34,

					psoweight31,
					psoweight32,
					psoweight33,
					psoweight34,

					psoco131,
					psoco132,
					psoco133,
					psoco134,

					psoco231,
					psoco232,
					psoco233,
					psoco234,

					psoco331,
					psoco332,
					psoco333,
					psoco334,

					psoco431,
					psoco432,
					psoco433,
					psoco434,

					psoco531,
					psoco532,
					psoco533,
					psoco534,

					psoco631,
					psoco632,
					psoco633,
					psoco634,

					psoco731,
					psoco732,
					psoco733,
					psoco734,

					pso3mapco1,
					pso3mapco2,
					pso3mapco3,
					pso3mapco4,
					pso3mapco5,
					pso3mapco6,
					pso3mapco7,
				}),
			});

			if (res.ok) {
				router.push("/");
			} else {
				throw new Error("Failed to create table");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const years = [
		{ key: "FIRST", label: "First Year" },
		{ key: "SECOND", label: "Second Year" },
		{ key: "THIRD", label: "Third Year" },
		{ key: "FOURTH", label: "Fourth Year" },
	];
	const depart = [
		{ key: "CSE", label: "Computer Science and Engineering" },
		{ key: "ENTC", label: "Electronics and Telecommunication Engineering" },
		{ key: "MECHANICAL", label: "Mechanical Engineering" },
		{ key: "ELECTRICAL", label: "Electrical Engineering" },
		{ key: "CIVIL", label: "Civil Engineering" },
	];
	const semester = [
		{ key: "FIRST", label: "First Semester" },
		{ key: "SECOND", label: "Second Semester" },
		{ key: "THIRD", label: "Third Semester" },
		{ key: "FOURTH", label: "Fourth Semester" },
		{ key: "FIFTH", label: "Fifth Semester" },
		{ key: "SIXTH", label: "Sixth Semester" },
		{ key: "SEVENTH", label: "Seventh Semester" },
		{ key: "EIGHTH", label: "Eighth Semester" },
	];

	const handleYearSelect = (selectedYear: any) => {
		setYear(selectedYear);
	};
	const handleDepartSelect = (selectedDept: any) => {
		setDept(selectedDept);
	};
	const handleSemesterSelect = (selectedSem: any) => {
		setSem(selectedSem);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className='flex gap-4 justify-center my-16'>
					<Select
						className='max-w-xs'
						label='Select Year'
						onChange={(e) => handleYearSelect(e.target.value)}
					>
						{years.map((year) => (
							<SelectItem key={year.key} value={year.key}>
								{year.label}
							</SelectItem>
						))}
					</Select>

					<Select
						className='max-w-xs'
						label='Select Department'
						onChange={(e) => handleDepartSelect(e.target.value)}
					>
						{depart.map((dept) => (
							<SelectItem key={dept.key} value={dept.key}>
								{dept.label}
							</SelectItem>
						))}
					</Select>

					<Select
						className='max-w-xs'
						label='Select Semester'
						onChange={(e) => handleSemesterSelect(e.target.value)}
					>
						{semester.map((sem) => (
							<SelectItem key={sem.key} value={sem.key}>
								{sem.label}
							</SelectItem>
						))}
					</Select>

					<Input
						placeholder='Please Enter Subject Name'
						className='w-auto'
						type='text'
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
					/>
				</div>

				<table
					className='  table-fixed'
					aria-label='Example static collection table'
				>
					<thead>
						<tr>
							<th>PO</th>
							<th>Competency</th>
							<th>Indicators</th>
							<th>Weight</th>
							<th>CO1</th>
							<th>CO2</th>
							<th>CO3</th>
							<th>CO4</th>
							<th>CO5</th>
							<th>CO6</th>
							<th>CO7</th>
						</tr>
					</thead>
					<tbody>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={po11}
									onChange={(e) => setPo11(e.target.value)}
									className='my-6'
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={competency11}
									onChange={(e) => setCompetency11(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators11}
									onChange={(e) => setIndicators11(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight11}
									onChange={(e) => setWeight11(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co111}
									onChange={(e) => setCo111(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co211}
									onChange={(e) => setCo211(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co311}
									onChange={(e) => setCo311(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co411}
									onChange={(e) => setCo411(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co511}
									onChange={(e) => setCo511(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co611}
									onChange={(e) => setCo611(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co711}
									onChange={(e) => setCo711(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={po12}
									onChange={(e) => setPo12(e.target.value)}
									className='my-6'
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={competency12}
									onChange={(e) => setCompetency12(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators12}
									onChange={(e) => setIndicators12(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight12}
									onChange={(e) => setWeight12(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co112}
									onChange={(e) => setCo112(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co212}
									onChange={(e) => setCo212(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co312}
									onChange={(e) => setCo312(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co412}
									onChange={(e) => setCo412(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co512}
									onChange={(e) => setCo512(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co612}
									onChange={(e) => setCo612(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co712}
									onChange={(e) => setCo712(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={po13}
									onChange={(e) => setPo13(e.target.value)}
									className='my-6'
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={competency13}
									onChange={(e) => setCompetency13(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators13}
									onChange={(e) => setIndicators13(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight13}
									onChange={(e) => setWeight13(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co113}
									onChange={(e) => setCo113(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co213}
									onChange={(e) => setCo213(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co313}
									onChange={(e) => setCo313(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co413}
									onChange={(e) => setCo413(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co513}
									onChange={(e) => setCo513(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co613}
									onChange={(e) => setCo613(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co713}
									onChange={(e) => setCo713(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={po14}
									onChange={(e) => setPo14(e.target.value)}
									className='my-6'
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={competency14}
									onChange={(e) => setCompetency14(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators14}
									onChange={(e) => setIndicators14(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight14}
									onChange={(e) => setWeight14(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co114}
									onChange={(e) => setCo114(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co214}
									onChange={(e) => setCo214(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co314}
									onChange={(e) => setCo314(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co414}
									onChange={(e) => setCo414(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co514}
									onChange={(e) => setCo514(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co614}
									onChange={(e) => setCo614(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co714}
									onChange={(e) => setCo714(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={po15}
									onChange={(e) => setPo15(e.target.value)}
									className='my-6'
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={competency15}
									onChange={(e) => setCompetency15(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators15}
									onChange={(e) => setIndicators15(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight15}
									readOnly
									onChange={(e) => setWeight15(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co115}
									onChange={(e) => setCo115(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co215}
									onChange={(e) => setCo215(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co315}
									onChange={(e) => setCo315(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co415}
									onChange={(e) => setCo415(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co515}
									onChange={(e) => setCo515(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co615}
									onChange={(e) => setCo615(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co715}
									onChange={(e) => setCo715(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td colSpan={4}>
								<Textarea
									readOnly
									value='PO1 : Mapping Level'
									className='my-6'
								/>
							</td>

							<td>
								<Input
									type='number'
									value={po1mapco1.toString()}
									readOnly
									onChange={(e) => setPo1mapco1(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={po1mapco2.toString()}
									readOnly
									onChange={(e) => setPo1mapco2(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po1mapco3.toString()}
									readOnly
									onChange={(e) => setPo1mapco3(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po1mapco4.toString()}
									readOnly
									onChange={(e) => setPo1mapco4(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po1mapco5.toString()}
									readOnly
									onChange={(e) => setPo1mapco5(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po1mapco6.toString()}
									readOnly
									onChange={(e) => setPo1mapco6(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po1mapco7.toString()}
									readOnly
									onChange={(e) => setPo1mapco7(e.target.value)}
								/>{" "}
							</td>
						</tr>

						{/* *****************************************     PO:2       ****************************************/}

						<tr className='m-4'>
							<td rowSpan={13}>
								<Textarea
									readOnly
									value={po21}
									onChange={(e) => setPo21(e.target.value)}
									className='my-6'
								/>
							</td>
							<td rowSpan={3}>
								<Textarea
									readOnly
									value={competency21}
									onChange={(e) => setCompetency21(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators21}
									onChange={(e) => setIndicators21(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight21}
									onChange={(e) => setWeight21(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co121}
									onChange={(e) => setCo121(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co221}
									onChange={(e) => setCo221(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co321}
									onChange={(e) => setCo321(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co421}
									onChange={(e) => setCo421(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co521}
									onChange={(e) => setCo521(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co621}
									onChange={(e) => setCo621(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co721}
									onChange={(e) => setCo721(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators22}
									onChange={(e) => setIndicators22(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight22}
									onChange={(e) => setWeight22(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co122}
									onChange={(e) => setCo122(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co222}
									onChange={(e) => setCo222(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co322}
									onChange={(e) => setCo322(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co422}
									onChange={(e) => setCo422(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co522}
									onChange={(e) => setCo522(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co622}
									onChange={(e) => setCo622(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co722}
									onChange={(e) => setCo722(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators23}
									onChange={(e) => setIndicators23(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight23}
									onChange={(e) => setWeight23(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co123}
									onChange={(e) => setCo123(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co223}
									onChange={(e) => setCo223(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co323}
									onChange={(e) => setCo323(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co423}
									onChange={(e) => setCo423(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co523}
									onChange={(e) => setCo523(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co623}
									onChange={(e) => setCo623(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co723}
									onChange={(e) => setCo723(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={4}>
								<Textarea
									readOnly
									value={competency22}
									onChange={(e) => setCompetency22(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators24}
									onChange={(e) => setIndicators24(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight24}
									onChange={(e) => setWeight24(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co124}
									onChange={(e) => setCo124(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co224}
									onChange={(e) => setCo224(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co324}
									onChange={(e) => setCo324(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co424}
									onChange={(e) => setCo424(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co524}
									onChange={(e) => setCo524(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co624}
									onChange={(e) => setCo624(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co724}
									onChange={(e) => setCo724(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators25}
									onChange={(e) => setIndicators25(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight25}
									readOnly
									onChange={(e) => setWeight25(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co125}
									onChange={(e) => setCo125(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co225}
									onChange={(e) => setCo225(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co325}
									onChange={(e) => setCo325(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co425}
									onChange={(e) => setCo425(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co525}
									onChange={(e) => setCo525(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co625}
									onChange={(e) => setCo625(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co725}
									onChange={(e) => setCo725(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators26}
									onChange={(e) => setIndicators26(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight26}
									readOnly
									onChange={(e) => setWeight26(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co126}
									onChange={(e) => setCo126(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co226}
									onChange={(e) => setCo226(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co326}
									onChange={(e) => setCo326(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co426}
									onChange={(e) => setCo426(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co526}
									onChange={(e) => setCo526(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co626}
									onChange={(e) => setCo626(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co726}
									onChange={(e) => setCo726(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators27}
									onChange={(e) => setIndicators27(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight27}
									readOnly
									onChange={(e) => setWeight27(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co127}
									onChange={(e) => setCo127(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co227}
									onChange={(e) => setCo227(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co327}
									onChange={(e) => setCo327(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co427}
									onChange={(e) => setCo427(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co527}
									onChange={(e) => setCo527(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co627}
									onChange={(e) => setCo627(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co727}
									onChange={(e) => setCo727(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency23}
									onChange={(e) => setCompetency23(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators28}
									onChange={(e) => setIndicators28(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight28}
									readOnly
									onChange={(e) => setWeight28(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co128}
									onChange={(e) => setCo128(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co228}
									onChange={(e) => setCo228(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co328}
									onChange={(e) => setCo328(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co428}
									onChange={(e) => setCo428(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co528}
									onChange={(e) => setCo528(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co628}
									onChange={(e) => setCo628(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co728}
									onChange={(e) => setCo728(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators29}
									onChange={(e) => setIndicators29(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight29}
									readOnly
									onChange={(e) => setWeight29(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co129}
									onChange={(e) => setCo129(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co229}
									onChange={(e) => setCo229(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co329}
									onChange={(e) => setCo329(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co429}
									onChange={(e) => setCo429(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co529}
									onChange={(e) => setCo529(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co629}
									onChange={(e) => setCo629(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co729}
									onChange={(e) => setCo729(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={4}>
								<Textarea
									readOnly
									value={competency24}
									onChange={(e) => setCompetency24(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators210}
									onChange={(e) => setIndicators210(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight210}
									readOnly
									onChange={(e) => setWeight210(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1210}
									onChange={(e) => setCo1210(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2210}
									onChange={(e) => setCo2210(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3210}
									onChange={(e) => setCo3210(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4210}
									onChange={(e) => setCo4210(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5210}
									onChange={(e) => setCo5210(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6210}
									onChange={(e) => setCo6210(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7210}
									onChange={(e) => setCo7210(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators211}
									onChange={(e) => setIndicators211(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight211}
									readOnly
									onChange={(e) => setWeight211(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1211}
									onChange={(e) => setCo1211(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2211}
									onChange={(e) => setCo2211(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3211}
									onChange={(e) => setCo3211(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4211}
									onChange={(e) => setCo4211(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5211}
									onChange={(e) => setCo5211(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6211}
									onChange={(e) => setCo6211(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7211}
									onChange={(e) => setCo7211(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators212}
									onChange={(e) => setIndicators212(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight212}
									readOnly
									onChange={(e) => setWeight212(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1212}
									onChange={(e) => setCo1212(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2212}
									onChange={(e) => setCo2212(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3212}
									onChange={(e) => setCo3212(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4212}
									onChange={(e) => setCo4212(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5212}
									onChange={(e) => setCo5212(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6212}
									onChange={(e) => setCo6212(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7212}
									onChange={(e) => setCo7212(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators213}
									onChange={(e) => setIndicators213(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight213}
									readOnly
									onChange={(e) => setWeight213(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1213}
									onChange={(e) => setCo1213(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2213}
									onChange={(e) => setCo2213(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3213}
									onChange={(e) => setCo3213(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4213}
									onChange={(e) => setCo4213(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5213}
									onChange={(e) => setCo5213(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6213}
									onChange={(e) => setCo6213(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7213}
									onChange={(e) => setCo7213(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td colSpan={4}>
								<Textarea
									readOnly
									value='PO2 : Mapping Level'
									className='my-6'
								/>
							</td>

							<td>
								<Input
									type='number'
									value={po2mapco1.toString()}
									readOnly
									onChange={(e) => setPo2mapco1(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={po2mapco2.toString()}
									readOnly
									onChange={(e) => setPo2mapco2(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po2mapco3.toString()}
									readOnly
									onChange={(e) => setPo2mapco3(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po2mapco4.toString()}
									readOnly
									onChange={(e) => setPo2mapco4(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po2mapco5.toString()}
									readOnly
									onChange={(e) => setPo2mapco5(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po2mapco6.toString()}
									readOnly
									onChange={(e) => setPo2mapco6(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po2mapco7.toString()}
									readOnly
									onChange={(e) => setPo2mapco7(e.target.value)}
								/>{" "}
							</td>
						</tr>

						{/* **************************************       PO:3         ****************************************************/}

						<tr className='m-4'>
							<td rowSpan={13}>
								<Textarea
									readOnly
									value={po31}
									onChange={(e) => setPo31(e.target.value)}
									className='my-6'
								/>
							</td>
							<td rowSpan={6}>
								<Textarea
									readOnly
									value={competency31}
									onChange={(e) => setCompetency31(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators31}
									onChange={(e) => setIndicators31(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight31}
									onChange={(e) => setWeight31(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co131}
									onChange={(e) => setCo131(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co231}
									onChange={(e) => setCo231(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co331}
									onChange={(e) => setCo331(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co431}
									onChange={(e) => setCo431(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co531}
									onChange={(e) => setCo531(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co631}
									onChange={(e) => setCo631(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co731}
									onChange={(e) => setCo731(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators32}
									onChange={(e) => setIndicators32(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight32}
									onChange={(e) => setWeight32(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co132}
									onChange={(e) => setCo132(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co232}
									onChange={(e) => setCo232(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co332}
									onChange={(e) => setCo332(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co432}
									onChange={(e) => setCo432(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co532}
									onChange={(e) => setCo532(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co632}
									onChange={(e) => setCo632(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co732}
									onChange={(e) => setCo732(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators33}
									onChange={(e) => setIndicators33(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight33}
									onChange={(e) => setWeight33(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co133}
									onChange={(e) => setCo133(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co233}
									onChange={(e) => setCo233(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co333}
									onChange={(e) => setCo333(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co433}
									onChange={(e) => setCo433(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co533}
									onChange={(e) => setCo533(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co633}
									onChange={(e) => setCo633(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co733}
									onChange={(e) => setCo733(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators34}
									onChange={(e) => setIndicators34(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight34}
									onChange={(e) => setWeight34(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co134}
									onChange={(e) => setCo134(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co234}
									onChange={(e) => setCo234(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co334}
									onChange={(e) => setCo334(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co434}
									onChange={(e) => setCo434(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co534}
									onChange={(e) => setCo534(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co634}
									onChange={(e) => setCo634(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co734}
									onChange={(e) => setCo734(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators35}
									onChange={(e) => setIndicators35(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight35}
									readOnly
									onChange={(e) => setWeight35(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co135}
									onChange={(e) => setCo135(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co235}
									onChange={(e) => setCo235(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co335}
									onChange={(e) => setCo335(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co435}
									onChange={(e) => setCo435(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co535}
									onChange={(e) => setCo535(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co635}
									onChange={(e) => setCo635(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co735}
									onChange={(e) => setCo735(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators36}
									onChange={(e) => setIndicators36(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight36}
									readOnly
									onChange={(e) => setWeight36(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co136}
									onChange={(e) => setCo136(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co236}
									onChange={(e) => setCo236(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co336}
									onChange={(e) => setCo336(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co436}
									onChange={(e) => setCo436(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co536}
									onChange={(e) => setCo536(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co636}
									onChange={(e) => setCo636(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co736}
									onChange={(e) => setCo736(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={3}>
								<Textarea
									readOnly
									value={competency32}
									onChange={(e) => setCompetency32(e.target.value)}
								/>
							</td>

							<td>
								<Textarea
									readOnly
									value={indicators37}
									onChange={(e) => setIndicators37(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight37}
									readOnly
									onChange={(e) => setWeight37(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co137}
									onChange={(e) => setCo137(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co237}
									onChange={(e) => setCo237(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co337}
									onChange={(e) => setCo337(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co437}
									onChange={(e) => setCo437(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co537}
									onChange={(e) => setCo537(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co637}
									onChange={(e) => setCo637(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co737}
									onChange={(e) => setCo737(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators38}
									onChange={(e) => setIndicators38(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight38}
									readOnly
									onChange={(e) => setWeight38(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co138}
									onChange={(e) => setCo138(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co238}
									onChange={(e) => setCo238(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co338}
									onChange={(e) => setCo338(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co438}
									onChange={(e) => setCo438(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co538}
									onChange={(e) => setCo538(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co638}
									onChange={(e) => setCo638(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co738}
									onChange={(e) => setCo738(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators39}
									onChange={(e) => setIndicators39(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight39}
									readOnly
									onChange={(e) => setWeight39(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co139}
									onChange={(e) => setCo139(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co239}
									onChange={(e) => setCo239(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co339}
									onChange={(e) => setCo339(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co439}
									onChange={(e) => setCo439(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co539}
									onChange={(e) => setCo539(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co639}
									onChange={(e) => setCo639(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co739}
									onChange={(e) => setCo739(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency33}
									onChange={(e) => setCompetency33(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators310}
									onChange={(e) => setIndicators310(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight310}
									readOnly
									onChange={(e) => setWeight310(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1310}
									onChange={(e) => setCo1310(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2310}
									onChange={(e) => setCo2310(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3310}
									onChange={(e) => setCo3310(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4310}
									onChange={(e) => setCo4310(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5310}
									onChange={(e) => setCo5310(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6310}
									onChange={(e) => setCo6310(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7310}
									onChange={(e) => setCo7310(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators311}
									onChange={(e) => setIndicators311(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight311}
									readOnly
									onChange={(e) => setWeight311(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1311}
									onChange={(e) => setCo1311(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2311}
									onChange={(e) => setCo2311(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3311}
									onChange={(e) => setCo3311(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4311}
									onChange={(e) => setCo4311(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5311}
									onChange={(e) => setCo5311(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6311}
									onChange={(e) => setCo6311(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7311}
									onChange={(e) => setCo7311(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency34}
									onChange={(e) => setCompetency34(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators312}
									onChange={(e) => setIndicators312(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight312}
									readOnly
									onChange={(e) => setWeight312(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1312}
									onChange={(e) => setCo1312(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2312}
									onChange={(e) => setCo2312(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3312}
									onChange={(e) => setCo3312(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4312}
									onChange={(e) => setCo4312(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5312}
									onChange={(e) => setCo5312(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6312}
									onChange={(e) => setCo6312(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7312}
									onChange={(e) => setCo7312(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators313}
									onChange={(e) => setIndicators313(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight313}
									readOnly
									onChange={(e) => setWeight313(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1313}
									onChange={(e) => setCo1313(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2313}
									onChange={(e) => setCo2313(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3313}
									onChange={(e) => setCo3313(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4313}
									onChange={(e) => setCo4313(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5313}
									onChange={(e) => setCo5313(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6313}
									onChange={(e) => setCo6313(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7313}
									onChange={(e) => setCo7313(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td colSpan={4}>
								<Textarea
									readOnly
									value='PO3 : Mapping Level'
									className='my-6'
								/>
							</td>

							<td>
								<Input
									type='number'
									value={po3mapco1.toString()}
									readOnly
									onChange={(e) => setPo3mapco1(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={po3mapco2.toString()}
									readOnly
									onChange={(e) => setPo3mapco2(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po3mapco3.toString()}
									readOnly
									onChange={(e) => setPo3mapco3(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po3mapco4.toString()}
									readOnly
									onChange={(e) => setPo3mapco4(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po3mapco5.toString()}
									readOnly
									onChange={(e) => setPo3mapco5(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po3mapco6.toString()}
									readOnly
									onChange={(e) => setPo3mapco6(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po3mapco7.toString()}
									readOnly
									onChange={(e) => setPo3mapco7(e.target.value)}
								/>{" "}
							</td>
						</tr>
						{/* **************************************       PO:4        ****************************************************/}

						<tr className='m-4'>
							<td rowSpan={10}>
								<Textarea
									readOnly
									value={po41}
									onChange={(e) => setPo41(e.target.value)}
									className='my-6'
								/>
							</td>
							<td rowSpan={4}>
								<Textarea
									readOnly
									value={competency41}
									onChange={(e) => setCompetency41(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators41}
									onChange={(e) => setIndicators41(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight41}
									onChange={(e) => setWeight41(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co141}
									onChange={(e) => setCo141(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co241}
									onChange={(e) => setCo241(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co341}
									onChange={(e) => setCo341(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co441}
									onChange={(e) => setCo441(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co541}
									onChange={(e) => setCo541(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co641}
									onChange={(e) => setCo641(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co741}
									onChange={(e) => setCo741(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators42}
									onChange={(e) => setIndicators42(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight42}
									onChange={(e) => setWeight42(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co142}
									onChange={(e) => setCo142(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co242}
									onChange={(e) => setCo242(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co342}
									onChange={(e) => setCo342(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co442}
									onChange={(e) => setCo442(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co542}
									onChange={(e) => setCo542(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co642}
									onChange={(e) => setCo642(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co742}
									onChange={(e) => setCo742(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators43}
									onChange={(e) => setIndicators43(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight43}
									onChange={(e) => setWeight43(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co143}
									onChange={(e) => setCo143(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co243}
									onChange={(e) => setCo243(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co343}
									onChange={(e) => setCo343(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co443}
									onChange={(e) => setCo443(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co543}
									onChange={(e) => setCo543(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co643}
									onChange={(e) => setCo643(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co743}
									onChange={(e) => setCo743(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators44}
									onChange={(e) => setIndicators44(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight44}
									onChange={(e) => setWeight44(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co144}
									onChange={(e) => setCo144(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co244}
									onChange={(e) => setCo244(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co344}
									onChange={(e) => setCo344(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co444}
									onChange={(e) => setCo444(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co544}
									onChange={(e) => setCo544(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co644}
									onChange={(e) => setCo644(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co744}
									onChange={(e) => setCo744(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency42}
									onChange={(e) => setCompetency42(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators45}
									onChange={(e) => setIndicators45(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight45}
									readOnly
									onChange={(e) => setWeight45(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co145}
									onChange={(e) => setCo145(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co245}
									onChange={(e) => setCo245(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co345}
									onChange={(e) => setCo345(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co445}
									onChange={(e) => setCo445(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co545}
									onChange={(e) => setCo545(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co645}
									onChange={(e) => setCo645(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co745}
									onChange={(e) => setCo745(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators46}
									onChange={(e) => setIndicators46(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight46}
									readOnly
									onChange={(e) => setWeight46(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co146}
									onChange={(e) => setCo146(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co246}
									onChange={(e) => setCo246(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co346}
									onChange={(e) => setCo346(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co446}
									onChange={(e) => setCo446(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co546}
									onChange={(e) => setCo546(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co646}
									onChange={(e) => setCo646(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co746}
									onChange={(e) => setCo746(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={4}>
								<Textarea
									readOnly
									value={competency43}
									onChange={(e) => setCompetency43(e.target.value)}
								/>
							</td>

							<td>
								<Textarea
									readOnly
									value={indicators47}
									onChange={(e) => setIndicators47(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight47}
									readOnly
									onChange={(e) => setWeight47(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co147}
									onChange={(e) => setCo147(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co247}
									onChange={(e) => setCo247(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co347}
									onChange={(e) => setCo347(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co447}
									onChange={(e) => setCo447(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co547}
									onChange={(e) => setCo547(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co647}
									onChange={(e) => setCo647(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co747}
									onChange={(e) => setCo747(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators48}
									onChange={(e) => setIndicators48(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight48}
									readOnly
									onChange={(e) => setWeight48(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co148}
									onChange={(e) => setCo148(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co248}
									onChange={(e) => setCo248(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co348}
									onChange={(e) => setCo348(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co448}
									onChange={(e) => setCo448(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co548}
									onChange={(e) => setCo548(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co648}
									onChange={(e) => setCo648(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co748}
									onChange={(e) => setCo748(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators49}
									onChange={(e) => setIndicators49(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight49}
									readOnly
									onChange={(e) => setWeight49(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co149}
									onChange={(e) => setCo149(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co249}
									onChange={(e) => setCo249(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co349}
									onChange={(e) => setCo349(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co449}
									onChange={(e) => setCo449(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co549}
									onChange={(e) => setCo549(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co649}
									onChange={(e) => setCo649(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co749}
									onChange={(e) => setCo749(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators410}
									onChange={(e) => setIndicators410(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight410}
									readOnly
									onChange={(e) => setWeight410(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1410}
									onChange={(e) => setCo1410(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2410}
									onChange={(e) => setCo2410(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3410}
									onChange={(e) => setCo3410(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4410}
									onChange={(e) => setCo4410(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5410}
									onChange={(e) => setCo5410(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6410}
									onChange={(e) => setCo6410(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7410}
									onChange={(e) => setCo7410(e.target.value)}
								/>
							</td>
						</tr>

						<tr className='m-4'>
							<td colSpan={4}>
								<Textarea
									readOnly
									value='PO4 : Mapping Level'
									className='my-6'
								/>
							</td>

							<td>
								<Input
									type='number'
									value={po4mapco1.toString()}
									readOnly
									onChange={(e) => setPo4mapco1(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={po4mapco2.toString()}
									readOnly
									onChange={(e) => setPo4mapco2(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po4mapco3.toString()}
									readOnly
									onChange={(e) => setPo4mapco3(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po4mapco4.toString()}
									readOnly
									onChange={(e) => setPo4mapco4(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po4mapco5.toString()}
									readOnly
									onChange={(e) => setPo4mapco5(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po4mapco6.toString()}
									readOnly
									onChange={(e) => setPo4mapco6(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po4mapco7.toString()}
									readOnly
									onChange={(e) => setPo4mapco7(e.target.value)}
								/>{" "}
							</td>
						</tr>
						{/* **************************************       PO:5        ****************************************************/}

						<tr className='m-4'>
							<td rowSpan={6}>
								<Textarea
									readOnly
									value={po51}
									onChange={(e) => setPo51(e.target.value)}
									className='my-6'
								/>
							</td>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency51}
									onChange={(e) => setCompetency51(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators51}
									onChange={(e) => setIndicators51(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight51}
									onChange={(e) => setWeight51(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co151}
									onChange={(e) => setCo151(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co251}
									onChange={(e) => setCo251(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co351}
									onChange={(e) => setCo351(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co451}
									onChange={(e) => setCo451(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co551}
									onChange={(e) => setCo551(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co651}
									onChange={(e) => setCo651(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co751}
									onChange={(e) => setCo751(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators52}
									onChange={(e) => setIndicators52(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight52}
									onChange={(e) => setWeight52(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co152}
									onChange={(e) => setCo152(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co252}
									onChange={(e) => setCo252(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co352}
									onChange={(e) => setCo352(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co452}
									onChange={(e) => setCo452(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co552}
									onChange={(e) => setCo552(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co652}
									onChange={(e) => setCo652(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co752}
									onChange={(e) => setCo752(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency52}
									onChange={(e) => setCompetency52(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators53}
									onChange={(e) => setIndicators53(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight53}
									onChange={(e) => setWeight53(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co153}
									onChange={(e) => setCo153(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co253}
									onChange={(e) => setCo253(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co353}
									onChange={(e) => setCo353(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co453}
									onChange={(e) => setCo453(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co553}
									onChange={(e) => setCo553(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co653}
									onChange={(e) => setCo653(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co753}
									onChange={(e) => setCo753(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators54}
									onChange={(e) => setIndicators54(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight54}
									onChange={(e) => setWeight54(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co154}
									onChange={(e) => setCo154(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co254}
									onChange={(e) => setCo254(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co354}
									onChange={(e) => setCo354(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co454}
									onChange={(e) => setCo454(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co554}
									onChange={(e) => setCo554(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co654}
									onChange={(e) => setCo654(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co754}
									onChange={(e) => setCo754(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency53}
									onChange={(e) => setCompetency53(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators55}
									onChange={(e) => setIndicators55(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight55}
									readOnly
									onChange={(e) => setWeight55(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co155}
									onChange={(e) => setCo155(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co255}
									onChange={(e) => setCo255(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co355}
									onChange={(e) => setCo355(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co455}
									onChange={(e) => setCo455(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co555}
									onChange={(e) => setCo555(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co655}
									onChange={(e) => setCo655(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co755}
									onChange={(e) => setCo755(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators56}
									onChange={(e) => setIndicators56(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight56}
									readOnly
									onChange={(e) => setWeight56(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co156}
									onChange={(e) => setCo156(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co256}
									onChange={(e) => setCo256(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co356}
									onChange={(e) => setCo356(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co456}
									onChange={(e) => setCo456(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co556}
									onChange={(e) => setCo556(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co656}
									onChange={(e) => setCo656(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co756}
									onChange={(e) => setCo756(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td colSpan={4}>
								<Textarea
									readOnly
									value='PO5 : Mapping Level'
									className='my-6'
								/>
							</td>

							<td>
								<Input
									type='number'
									value={po5mapco1.toString()}
									readOnly
									onChange={(e) => setPo5mapco1(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={po5mapco2.toString()}
									readOnly
									onChange={(e) => setPo5mapco2(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po5mapco3.toString()}
									readOnly
									onChange={(e) => setPo5mapco3(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po5mapco4.toString()}
									readOnly
									onChange={(e) => setPo5mapco4(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po5mapco5.toString()}
									readOnly
									onChange={(e) => setPo5mapco5(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po5mapco6.toString()}
									readOnly
									onChange={(e) => setPo5mapco6(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po5mapco7.toString()}
									readOnly
									onChange={(e) => setPo5mapco7(e.target.value)}
								/>{" "}
							</td>
						</tr>
						{/* **************************************       PO:6        ****************************************************/}

						<tr className='m-4'>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={po61}
									onChange={(e) => setPo61(e.target.value)}
									className='my-6'
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={competency61}
									onChange={(e) => setCompetency61(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators61}
									onChange={(e) => setIndicators61(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight61}
									onChange={(e) => setWeight61(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co161}
									onChange={(e) => setCo161(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co261}
									onChange={(e) => setCo261(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co361}
									onChange={(e) => setCo361(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co461}
									onChange={(e) => setCo461(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co561}
									onChange={(e) => setCo561(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co661}
									onChange={(e) => setCo661(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co761}
									onChange={(e) => setCo761(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={competency62}
									onChange={(e) => setCompetency62(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators62}
									onChange={(e) => setIndicators62(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight62}
									onChange={(e) => setWeight62(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co162}
									onChange={(e) => setCo162(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co262}
									onChange={(e) => setCo262(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co362}
									onChange={(e) => setCo362(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co462}
									onChange={(e) => setCo462(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co562}
									onChange={(e) => setCo562(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co662}
									onChange={(e) => setCo662(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co762}
									onChange={(e) => setCo762(e.target.value)}
								/>
							</td>
						</tr>

						<tr className='m-4'>
							<td colSpan={4}>
								<Textarea
									readOnly
									value='PO6 : Mapping Level'
									className='my-6'
								/>
							</td>

							<td>
								<Input
									type='number'
									value={po6mapco1.toString()}
									readOnly
									onChange={(e) => setPo6mapco1(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={po6mapco2.toString()}
									readOnly
									onChange={(e) => setPo6mapco2(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po6mapco3.toString()}
									readOnly
									onChange={(e) => setPo6mapco3(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po6mapco4.toString()}
									readOnly
									onChange={(e) => setPo6mapco4(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po6mapco5.toString()}
									readOnly
									onChange={(e) => setPo6mapco5(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po6mapco6.toString()}
									readOnly
									onChange={(e) => setPo6mapco6(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po6mapco7.toString()}
									readOnly
									onChange={(e) => setPo6mapco7(e.target.value)}
								/>{" "}
							</td>
						</tr>

						{/* **************************************       PO: 7        ****************************************************/}

						<tr className='m-4'>
							<td rowSpan={4}>
								<Textarea
									readOnly
									value={po71}
									onChange={(e) => setPo71(e.target.value)}
									className='my-6'
								/>
							</td>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency71}
									onChange={(e) => setCompetency71(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators71}
									onChange={(e) => setIndicators71(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight71}
									onChange={(e) => setWeight71(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co171}
									onChange={(e) => setCo171(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co271}
									onChange={(e) => setCo271(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co371}
									onChange={(e) => setCo371(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co471}
									onChange={(e) => setCo471(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co571}
									onChange={(e) => setCo571(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co671}
									onChange={(e) => setCo671(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co771}
									onChange={(e) => setCo771(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators72}
									onChange={(e) => setIndicators72(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight72}
									onChange={(e) => setWeight72(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co172}
									onChange={(e) => setCo172(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co272}
									onChange={(e) => setCo272(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co372}
									onChange={(e) => setCo372(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co472}
									onChange={(e) => setCo472(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co572}
									onChange={(e) => setCo572(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co672}
									onChange={(e) => setCo672(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co772}
									onChange={(e) => setCo772(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency72}
									onChange={(e) => setCompetency72(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators73}
									onChange={(e) => setIndicators73(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight73}
									onChange={(e) => setWeight73(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co173}
									onChange={(e) => setCo173(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co273}
									onChange={(e) => setCo273(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co373}
									onChange={(e) => setCo373(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co473}
									onChange={(e) => setCo473(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co573}
									onChange={(e) => setCo573(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co673}
									onChange={(e) => setCo673(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co773}
									onChange={(e) => setCo773(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators74}
									onChange={(e) => setIndicators74(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight74}
									onChange={(e) => setWeight74(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co174}
									onChange={(e) => setCo174(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co274}
									onChange={(e) => setCo274(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co374}
									onChange={(e) => setCo374(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co474}
									onChange={(e) => setCo474(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co574}
									onChange={(e) => setCo574(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co674}
									onChange={(e) => setCo674(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co774}
									onChange={(e) => setCo774(e.target.value)}
								/>
							</td>
						</tr>

						<tr className='m-4'>
							<td colSpan={4}>
								<Textarea
									readOnly
									value='PO7 : Mapping Level'
									className='my-6'
								/>
							</td>

							<td>
								<Input
									type='number'
									value={po7mapco1.toString()}
									readOnly
									onChange={(e) => setPo7mapco1(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={po7mapco2.toString()}
									readOnly
									onChange={(e) => setPo7mapco2(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po7mapco3.toString()}
									readOnly
									onChange={(e) => setPo7mapco3(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po7mapco4.toString()}
									readOnly
									onChange={(e) => setPo7mapco4(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po7mapco5.toString()}
									readOnly
									onChange={(e) => setPo7mapco5(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po7mapco6.toString()}
									readOnly
									onChange={(e) => setPo7mapco6(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po7mapco7.toString()}
									readOnly
									onChange={(e) => setPo7mapco7(e.target.value)}
								/>{" "}
							</td>
						</tr>
						{/* **************************************       PO: 8        ****************************************************/}

						<tr className='m-4'>
							<td rowSpan={3}>
								<Textarea
									readOnly
									value={po81}
									onChange={(e) => setPo81(e.target.value)}
									className='my-6'
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={competency81}
									onChange={(e) => setCompetency81(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators81}
									onChange={(e) => setIndicators81(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight81}
									onChange={(e) => setWeight81(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co181}
									onChange={(e) => setCo181(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co281}
									onChange={(e) => setCo281(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co381}
									onChange={(e) => setCo381(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co481}
									onChange={(e) => setCo481(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co581}
									onChange={(e) => setCo581(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co681}
									onChange={(e) => setCo681(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co781}
									onChange={(e) => setCo781(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency82}
									onChange={(e) => setCompetency82(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators82}
									onChange={(e) => setIndicators82(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight82}
									onChange={(e) => setWeight82(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co182}
									onChange={(e) => setCo182(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co282}
									onChange={(e) => setCo282(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co382}
									onChange={(e) => setCo382(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co482}
									onChange={(e) => setCo482(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co582}
									onChange={(e) => setCo582(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co682}
									onChange={(e) => setCo682(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co782}
									onChange={(e) => setCo782(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators83}
									onChange={(e) => setIndicators83(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight83}
									onChange={(e) => setWeight83(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co183}
									onChange={(e) => setCo183(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co283}
									onChange={(e) => setCo283(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co383}
									onChange={(e) => setCo383(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co483}
									onChange={(e) => setCo483(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co583}
									onChange={(e) => setCo583(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co683}
									onChange={(e) => setCo683(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co783}
									onChange={(e) => setCo783(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td colSpan={4}>
								<Textarea
									readOnly
									value='PO8 : Mapping Level'
									className='my-6'
								/>
							</td>

							<td>
								<Input
									type='number'
									value={po8mapco1.toString()}
									readOnly
									onChange={(e) => setPo8mapco1(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={po8mapco2.toString()}
									readOnly
									onChange={(e) => setPo8mapco2(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po8mapco3.toString()}
									readOnly
									onChange={(e) => setPo8mapco3(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po8mapco4.toString()}
									readOnly
									onChange={(e) => setPo8mapco4(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po8mapco5.toString()}
									readOnly
									onChange={(e) => setPo8mapco5(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po8mapco6.toString()}
									readOnly
									onChange={(e) => setPo8mapco6(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po8mapco7.toString()}
									readOnly
									onChange={(e) => setPo8mapco7(e.target.value)}
								/>{" "}
							</td>
						</tr>

						{/* **************************************       PO:9        ****************************************************/}

						<tr className='m-4'>
							<td rowSpan={7}>
								<Textarea
									readOnly
									value={po91}
									onChange={(e) => setPo91(e.target.value)}
									className='my-6'
								/>
							</td>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency91}
									onChange={(e) => setCompetency91(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators91}
									onChange={(e) => setIndicators91(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight91}
									onChange={(e) => setWeight91(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co191}
									onChange={(e) => setCo191(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co291}
									onChange={(e) => setCo291(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co391}
									onChange={(e) => setCo391(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co491}
									onChange={(e) => setCo491(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co591}
									onChange={(e) => setCo591(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co691}
									onChange={(e) => setCo691(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co791}
									onChange={(e) => setCo791(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators92}
									onChange={(e) => setIndicators92(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight92}
									onChange={(e) => setWeight92(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co192}
									onChange={(e) => setCo192(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co292}
									onChange={(e) => setCo292(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co392}
									onChange={(e) => setCo392(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co492}
									onChange={(e) => setCo492(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co592}
									onChange={(e) => setCo592(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co692}
									onChange={(e) => setCo692(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co792}
									onChange={(e) => setCo792(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={4}>
								<Textarea
									readOnly
									value={competency92}
									onChange={(e) => setCompetency92(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators93}
									onChange={(e) => setIndicators93(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight93}
									onChange={(e) => setWeight93(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co193}
									onChange={(e) => setCo193(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co293}
									onChange={(e) => setCo293(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co393}
									onChange={(e) => setCo393(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co493}
									onChange={(e) => setCo493(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co593}
									onChange={(e) => setCo593(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co693}
									onChange={(e) => setCo693(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co793}
									onChange={(e) => setCo793(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators94}
									onChange={(e) => setIndicators94(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight94}
									onChange={(e) => setWeight94(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co194}
									onChange={(e) => setCo194(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co294}
									onChange={(e) => setCo294(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co394}
									onChange={(e) => setCo394(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co494}
									onChange={(e) => setCo494(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co594}
									onChange={(e) => setCo594(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co694}
									onChange={(e) => setCo694(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co794}
									onChange={(e) => setCo794(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators95}
									onChange={(e) => setIndicators95(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight95}
									readOnly
									onChange={(e) => setWeight95(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co195}
									onChange={(e) => setCo195(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co295}
									onChange={(e) => setCo295(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co395}
									onChange={(e) => setCo395(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co495}
									onChange={(e) => setCo495(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co595}
									onChange={(e) => setCo595(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co695}
									onChange={(e) => setCo695(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co795}
									onChange={(e) => setCo795(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators96}
									onChange={(e) => setIndicators96(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight96}
									readOnly
									onChange={(e) => setWeight96(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co196}
									onChange={(e) => setCo196(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co296}
									onChange={(e) => setCo296(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co396}
									onChange={(e) => setCo396(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co496}
									onChange={(e) => setCo496(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co596}
									onChange={(e) => setCo596(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co696}
									onChange={(e) => setCo696(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co796}
									onChange={(e) => setCo796(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={competency93}
									onChange={(e) => setCompetency93(e.target.value)}
								/>
							</td>

							<td>
								<Textarea
									readOnly
									value={indicators97}
									onChange={(e) => setIndicators97(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight97}
									readOnly
									onChange={(e) => setWeight97(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co197}
									onChange={(e) => setCo197(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co297}
									onChange={(e) => setCo297(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co397}
									onChange={(e) => setCo397(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co497}
									onChange={(e) => setCo497(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co597}
									onChange={(e) => setCo597(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co697}
									onChange={(e) => setCo697(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co797}
									onChange={(e) => setCo797(e.target.value)}
								/>
							</td>
						</tr>

						<tr className='m-4'>
							<td colSpan={4}>
								<Textarea
									readOnly
									value='PO9 : Mapping Level'
									className='my-6'
								/>
							</td>

							<td>
								<Input
									type='number'
									value={po9mapco1.toString()}
									readOnly
									onChange={(e) => setPo9mapco1(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={po9mapco2.toString()}
									readOnly
									onChange={(e) => setPo9mapco2(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po9mapco3.toString()}
									readOnly
									onChange={(e) => setPo9mapco3(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po9mapco4.toString()}
									readOnly
									onChange={(e) => setPo9mapco4(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po9mapco5.toString()}
									readOnly
									onChange={(e) => setPo9mapco5(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po9mapco6.toString()}
									readOnly
									onChange={(e) => setPo9mapco6(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po9mapco7.toString()}
									readOnly
									onChange={(e) => setPo9mapco7(e.target.value)}
								/>{" "}
							</td>
						</tr>

						{/* **************************************       PO:10        ****************************************************/}

						<tr className='m-4'>
							<td rowSpan={7}>
								<Textarea
									readOnly
									value={po101}
									onChange={(e) => setPo101(e.target.value)}
									className='my-6'
								/>
							</td>
							<td rowSpan={3}>
								<Textarea
									readOnly
									value={competency101}
									onChange={(e) => setCompetency101(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators101}
									onChange={(e) => setIndicators101(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight101}
									onChange={(e) => setWeight101(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1101}
									onChange={(e) => setCo1101(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2101}
									onChange={(e) => setCo2101(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3101}
									onChange={(e) => setCo3101(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4101}
									onChange={(e) => setCo4101(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5101}
									onChange={(e) => setCo5101(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6101}
									onChange={(e) => setCo6101(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7101}
									onChange={(e) => setCo7101(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators102}
									onChange={(e) => setIndicators102(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight102}
									onChange={(e) => setWeight102(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1102}
									onChange={(e) => setCo1102(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2102}
									onChange={(e) => setCo2102(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3102}
									onChange={(e) => setCo3102(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4102}
									onChange={(e) => setCo4102(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5102}
									onChange={(e) => setCo5102(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6102}
									onChange={(e) => setCo6102(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7102}
									onChange={(e) => setCo7102(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators103}
									onChange={(e) => setIndicators103(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight103}
									onChange={(e) => setWeight103(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1103}
									onChange={(e) => setCo1103(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2103}
									onChange={(e) => setCo2103(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3103}
									onChange={(e) => setCo3103(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4103}
									onChange={(e) => setCo4103(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5103}
									onChange={(e) => setCo5103(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6103}
									onChange={(e) => setCo6103(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7103}
									onChange={(e) => setCo7103(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency102}
									onChange={(e) => setCompetency102(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators104}
									onChange={(e) => setIndicators104(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight104}
									onChange={(e) => setWeight104(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1104}
									onChange={(e) => setCo1104(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2104}
									onChange={(e) => setCo2104(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3104}
									onChange={(e) => setCo3104(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4104}
									onChange={(e) => setCo4104(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5104}
									onChange={(e) => setCo5104(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6104}
									onChange={(e) => setCo6104(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7104}
									onChange={(e) => setCo7104(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators105}
									onChange={(e) => setIndicators105(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight105}
									readOnly
									onChange={(e) => setWeight105(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1105}
									onChange={(e) => setCo1105(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2105}
									onChange={(e) => setCo2105(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3105}
									onChange={(e) => setCo3105(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4105}
									onChange={(e) => setCo4105(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5105}
									onChange={(e) => setCo5105(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6105}
									onChange={(e) => setCo6105(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7105}
									onChange={(e) => setCo7105(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency103}
									onChange={(e) => setCompetency103(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators106}
									onChange={(e) => setIndicators106(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight106}
									readOnly
									onChange={(e) => setWeight106(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1106}
									onChange={(e) => setCo1106(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2106}
									onChange={(e) => setCo2106(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3106}
									onChange={(e) => setCo3106(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4106}
									onChange={(e) => setCo4106(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5106}
									onChange={(e) => setCo5106(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6106}
									onChange={(e) => setCo6106(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7106}
									onChange={(e) => setCo7106(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators107}
									onChange={(e) => setIndicators107(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight107}
									readOnly
									onChange={(e) => setWeight107(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1107}
									onChange={(e) => setCo1107(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2107}
									onChange={(e) => setCo2107(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3107}
									onChange={(e) => setCo3107(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4107}
									onChange={(e) => setCo4107(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5107}
									onChange={(e) => setCo5107(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6107}
									onChange={(e) => setCo6107(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7107}
									onChange={(e) => setCo7107(e.target.value)}
								/>
							</td>
						</tr>

						<tr className='m-4'>
							<td colSpan={4}>
								<Textarea
									readOnly
									value='PO10 : Mapping Level'
									className='my-6'
								/>
							</td>

							<td>
								<Input
									type='number'
									value={po10mapco1.toString()}
									readOnly
									onChange={(e) => setPo10mapco1(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={po10mapco2.toString()}
									readOnly
									onChange={(e) => setPo10mapco2(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po10mapco3.toString()}
									readOnly
									onChange={(e) => setPo10mapco3(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po10mapco4.toString()}
									readOnly
									onChange={(e) => setPo10mapco4(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po10mapco5.toString()}
									readOnly
									onChange={(e) => setPo10mapco5(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po10mapco6.toString()}
									readOnly
									onChange={(e) => setPo10mapco6(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po10mapco7.toString()}
									readOnly
									onChange={(e) => setPo10mapco7(e.target.value)}
								/>{" "}
							</td>
						</tr>

						{/* **************************************       PO:11        ****************************************************/}

						<tr className='m-4'>
							<td rowSpan={5}>
								<Textarea
									readOnly
									value={po111}
									onChange={(e) => setPo111(e.target.value)}
									className='my-6'
								/>
							</td>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency111}
									onChange={(e) => setCompetency111(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators111}
									onChange={(e) => setIndicators111(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight111}
									onChange={(e) => setWeight111(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1111}
									onChange={(e) => setCo1111(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2111}
									onChange={(e) => setCo2111(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3111}
									onChange={(e) => setCo3111(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4111}
									onChange={(e) => setCo4111(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5111}
									onChange={(e) => setCo5111(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6111}
									onChange={(e) => setCo6111(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7111}
									onChange={(e) => setCo7111(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators112}
									onChange={(e) => setIndicators112(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight112}
									onChange={(e) => setWeight112(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1112}
									onChange={(e) => setCo1112(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2112}
									onChange={(e) => setCo2112(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3112}
									onChange={(e) => setCo3112(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4112}
									onChange={(e) => setCo4112(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5112}
									onChange={(e) => setCo5112(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6112}
									onChange={(e) => setCo6112(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7112}
									onChange={(e) => setCo7112(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={competency112}
									onChange={(e) => setCompetency112(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators113}
									onChange={(e) => setIndicators113(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight113}
									onChange={(e) => setWeight113(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1113}
									onChange={(e) => setCo1113(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2113}
									onChange={(e) => setCo2113(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3113}
									onChange={(e) => setCo3113(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4113}
									onChange={(e) => setCo4113(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5113}
									onChange={(e) => setCo5113(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6113}
									onChange={(e) => setCo6113(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7113}
									onChange={(e) => setCo7113(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency113}
									onChange={(e) => setCompetency113(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators114}
									onChange={(e) => setIndicators114(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight114}
									onChange={(e) => setWeight114(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1114}
									onChange={(e) => setCo1114(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2114}
									onChange={(e) => setCo2114(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3114}
									onChange={(e) => setCo3114(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4114}
									onChange={(e) => setCo4114(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5114}
									onChange={(e) => setCo5114(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6114}
									onChange={(e) => setCo6114(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7114}
									onChange={(e) => setCo7114(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators115}
									onChange={(e) => setIndicators115(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight115}
									readOnly
									onChange={(e) => setWeight115(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1115}
									onChange={(e) => setCo1115(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2115}
									onChange={(e) => setCo2115(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3115}
									onChange={(e) => setCo3115(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4115}
									onChange={(e) => setCo4115(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5115}
									onChange={(e) => setCo5115(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6115}
									onChange={(e) => setCo6115(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7115}
									onChange={(e) => setCo7115(e.target.value)}
								/>
							</td>
						</tr>

						<tr className='m-4'>
							<td colSpan={4}>
								<Textarea
									readOnly
									value='PO11 : Mapping Level'
									className='my-6'
								/>
							</td>

							<td>
								<Input
									type='number'
									value={po11mapco1.toString()}
									readOnly
									onChange={(e) => setPo11mapco1(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={po11mapco2.toString()}
									readOnly
									onChange={(e) => setPo11mapco2(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po11mapco3.toString()}
									readOnly
									onChange={(e) => setPo11mapco3(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po11mapco4.toString()}
									readOnly
									onChange={(e) => setPo11mapco4(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po11mapco5.toString()}
									readOnly
									onChange={(e) => setPo11mapco5(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po11mapco6.toString()}
									readOnly
									onChange={(e) => setPo11mapco6(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po11mapco7.toString()}
									readOnly
									onChange={(e) => setPo11mapco7(e.target.value)}
								/>{" "}
							</td>
						</tr>

						{/* **************************************       PO:12        ****************************************************/}

						<tr className='m-4'>
							<td rowSpan={6}>
								<Textarea
									readOnly
									value={po121}
									onChange={(e) => setPo121(e.target.value)}
									className='my-6'
								/>
							</td>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency121}
									onChange={(e) => setCompetency121(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators121}
									onChange={(e) => setIndicators121(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight121}
									onChange={(e) => setWeight121(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1121}
									onChange={(e) => setCo1121(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2121}
									onChange={(e) => setCo2121(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3121}
									onChange={(e) => setCo3121(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4121}
									onChange={(e) => setCo4121(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5121}
									onChange={(e) => setCo5121(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6121}
									onChange={(e) => setCo6121(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7121}
									onChange={(e) => setCo7121(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators122}
									onChange={(e) => setIndicators122(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight122}
									onChange={(e) => setWeight122(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1122}
									onChange={(e) => setCo1122(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2122}
									onChange={(e) => setCo2122(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3122}
									onChange={(e) => setCo3122(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4122}
									onChange={(e) => setCo4122(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5122}
									onChange={(e) => setCo5122(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6122}
									onChange={(e) => setCo6122(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7122}
									onChange={(e) => setCo7122(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency122}
									onChange={(e) => setCompetency122(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators123}
									onChange={(e) => setIndicators123(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight123}
									onChange={(e) => setWeight123(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1123}
									onChange={(e) => setCo1123(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2123}
									onChange={(e) => setCo2123(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3123}
									onChange={(e) => setCo3123(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4123}
									onChange={(e) => setCo4123(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5123}
									onChange={(e) => setCo5123(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6123}
									onChange={(e) => setCo6123(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7123}
									onChange={(e) => setCo7123(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators124}
									onChange={(e) => setIndicators124(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={weight124}
									onChange={(e) => setWeight124(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1124}
									onChange={(e) => setCo1124(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2124}
									onChange={(e) => setCo2124(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3124}
									onChange={(e) => setCo3124(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4124}
									onChange={(e) => setCo4124(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5124}
									onChange={(e) => setCo5124(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6124}
									onChange={(e) => setCo6124(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7124}
									onChange={(e) => setCo7124(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={competency123}
									onChange={(e) => setCompetency123(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={indicators125}
									onChange={(e) => setIndicators125(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight125}
									readOnly
									onChange={(e) => setWeight125(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1125}
									onChange={(e) => setCo1125(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2125}
									onChange={(e) => setCo2125(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3125}
									onChange={(e) => setCo3125(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4125}
									onChange={(e) => setCo4125(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5125}
									onChange={(e) => setCo5125(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6125}
									onChange={(e) => setCo6125(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7125}
									onChange={(e) => setCo7125(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={indicators126}
									onChange={(e) => setIndicators126(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight126}
									readOnly
									onChange={(e) => setWeight126(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co1126}
									onChange={(e) => setCo1126(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co2126}
									onChange={(e) => setCo2126(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co3126}
									onChange={(e) => setCo3126(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co4126}
									onChange={(e) => setCo4126(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co5126}
									onChange={(e) => setCo5126(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co6126}
									onChange={(e) => setCo6126(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co7126}
									onChange={(e) => setCo7126(e.target.value)}
								/>
							</td>
						</tr>

						<tr className='m-4'>
							<td colSpan={4}>
								<Textarea
									readOnly
									value='PO12 : Mapping Level'
									className='my-6'
								/>
							</td>

							<td>
								<Input
									type='number'
									value={po12mapco1.toString()}
									readOnly
									onChange={(e) => setPo12mapco1(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={po12mapco2.toString()}
									readOnly
									onChange={(e) => setPo12mapco2(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po12mapco3.toString()}
									readOnly
									onChange={(e) => setPo12mapco3(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po12mapco4.toString()}
									readOnly
									onChange={(e) => setPo12mapco4(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po12mapco5.toString()}
									readOnly
									onChange={(e) => setPo12mapco5(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po12mapco6.toString()}
									readOnly
									onChange={(e) => setPo12mapco6(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={po12mapco7.toString()}
									readOnly
									onChange={(e) => setPo12mapco7(e.target.value)}
								/>{" "}
							</td>
						</tr>

						{/* ************************************  PSO : 1       ************************************ */}

						<tr className='m-4'>
							<td rowSpan={5}>
								<Textarea
									readOnly
									value={pso11}
									onChange={(e) => setPso11(e.target.value)}
									className='my-6'
								/>
							</td>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={psocompetency11}
									onChange={(e) => setPsocompetency11(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={psoindicators11}
									onChange={(e) => setPsoindicators11(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={psoweight11}
									onChange={(e) => setPsoweight11(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco111}
									onChange={(e) => setPsoco111(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco211}
									onChange={(e) => setPsoco211(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco311}
									onChange={(e) => setPsoco311(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco411}
									onChange={(e) => setPsoco411(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco511}
									onChange={(e) => setPsoco511(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco611}
									onChange={(e) => setPsoco611(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco711}
									onChange={(e) => setPsoco711(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={psoindicators12}
									onChange={(e) => setPsoindicators12(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={psoweight12}
									onChange={(e) => setPsoweight12(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco112}
									onChange={(e) => setPsoco112(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco212}
									onChange={(e) => setPsoco212(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco312}
									onChange={(e) => setPsoco312(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco412}
									onChange={(e) => setPsoco412(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco512}
									onChange={(e) => setPsoco512(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco612}
									onChange={(e) => setPsoco612(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco712}
									onChange={(e) => setPsoco712(e.target.value)}
								/>
							</td>
						</tr>

						<tr className='m-4'>
							<td rowSpan={3}>
								<Textarea
									readOnly
									value={psocompetency12}
									onChange={(e) => setPsocompetency12(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={psoindicators13}
									onChange={(e) => setPsoindicators13(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={psoweight13}
									onChange={(e) => setPsoweight13(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco113}
									onChange={(e) => setPsoco113(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco213}
									onChange={(e) => setPsoco213(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco313}
									onChange={(e) => setPsoco313(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco413}
									onChange={(e) => setPsoco413(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco513}
									onChange={(e) => setPsoco513(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco613}
									onChange={(e) => setPsoco613(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco713}
									onChange={(e) => setPsoco713(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={psoindicators14}
									onChange={(e) => setPsoindicators14(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={psoweight14}
									onChange={(e) => setPsoweight14(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco114}
									onChange={(e) => setPsoco114(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco214}
									onChange={(e) => setPsoco214(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco314}
									onChange={(e) => setPsoco314(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco414}
									onChange={(e) => setPsoco414(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco514}
									onChange={(e) => setPsoco514(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco614}
									onChange={(e) => setPsoco614(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco714}
									onChange={(e) => setPsoco714(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={psoindicators15}
									onChange={(e) => setPsoindicators15(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoweight15}
									readOnly
									onChange={(e) => setPsoweight15(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco115}
									onChange={(e) => setPsoco115(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco215}
									onChange={(e) => setPsoco215(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco315}
									onChange={(e) => setPsoco315(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco415}
									onChange={(e) => setPsoco415(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco515}
									onChange={(e) => setPsoco515(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco615}
									onChange={(e) => setPsoco615(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco715}
									onChange={(e) => setPsoco715(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td colSpan={4}>
								<Textarea
									readOnly
									value='PSO 1 : Mapping Level'
									className='my-6'
								/>
							</td>

							<td>
								<Input
									type='number'
									value={pso1mapco1.toString()}
									readOnly
									onChange={(e) => setPso1mapco1(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={pso1mapco2.toString()}
									readOnly
									onChange={(e) => setPso1mapco2(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={pso1mapco3.toString()}
									readOnly
									onChange={(e) => setPso1mapco3(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={pso1mapco4.toString()}
									readOnly
									onChange={(e) => setPso1mapco4(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={pso1mapco5.toString()}
									readOnly
									onChange={(e) => setPso1mapco5(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={pso1mapco6.toString()}
									readOnly
									onChange={(e) => setPso1mapco6(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={pso1mapco7.toString()}
									readOnly
									onChange={(e) => setPso1mapco7(e.target.value)}
								/>{" "}
							</td>
						</tr>

						{/* ************************************  PSO : 2       ************************************ */}

						<tr className='m-4'>
							<td rowSpan={4}>
								<Textarea
									readOnly
									value={pso21}
									onChange={(e) => setPso21(e.target.value)}
									className='my-6'
								/>
							</td>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={psocompetency21}
									onChange={(e) => setPsocompetency21(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={psoindicators21}
									onChange={(e) => setPsoindicators21(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={psoweight21}
									onChange={(e) => setPsoweight21(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco121}
									onChange={(e) => setPsoco121(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco221}
									onChange={(e) => setPsoco221(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco321}
									onChange={(e) => setPsoco321(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco421}
									onChange={(e) => setPsoco421(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco521}
									onChange={(e) => setPsoco521(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco621}
									onChange={(e) => setPsoco621(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco721}
									onChange={(e) => setPsoco721(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={psoindicators22}
									onChange={(e) => setPsoindicators22(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={psoweight22}
									onChange={(e) => setPsoweight22(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco122}
									onChange={(e) => setPsoco122(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco222}
									onChange={(e) => setPsoco222(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco322}
									onChange={(e) => setPsoco322(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco422}
									onChange={(e) => setPsoco422(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco522}
									onChange={(e) => setPsoco522(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco622}
									onChange={(e) => setPsoco622(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco722}
									onChange={(e) => setPsoco722(e.target.value)}
								/>
							</td>
						</tr>

						<tr className='m-4'>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={psocompetency22}
									onChange={(e) => setPsocompetency22(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={psoindicators23}
									onChange={(e) => setPsoindicators23(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={psoweight23}
									onChange={(e) => setPsoweight23(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco123}
									onChange={(e) => setPsoco123(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco223}
									onChange={(e) => setPsoco223(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco323}
									onChange={(e) => setPsoco323(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco423}
									onChange={(e) => setPsoco423(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco523}
									onChange={(e) => setPsoco523(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco623}
									onChange={(e) => setPsoco623(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco723}
									onChange={(e) => setPsoco723(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={psoindicators24}
									onChange={(e) => setPsoindicators24(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={psoweight24}
									onChange={(e) => setPsoweight24(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco124}
									onChange={(e) => setPsoco124(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco224}
									onChange={(e) => setPsoco224(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco324}
									onChange={(e) => setPsoco324(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco424}
									onChange={(e) => setPsoco424(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco524}
									onChange={(e) => setPsoco524(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco624}
									onChange={(e) => setPsoco624(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco724}
									onChange={(e) => setPsoco724(e.target.value)}
								/>
							</td>
						</tr>

						<tr className='m-4'>
							<td colSpan={4}>
								<Textarea
									readOnly
									value='PSO 2 : Mapping Level'
									className='my-6'
								/>
							</td>

							<td>
								<Input
									type='number'
									value={pso2mapco1.toString()}
									readOnly
									onChange={(e) => setPso2mapco1(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={pso2mapco2.toString()}
									readOnly
									onChange={(e) => setPso2mapco2(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={pso2mapco3.toString()}
									readOnly
									onChange={(e) => setPso2mapco3(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={pso2mapco4.toString()}
									readOnly
									onChange={(e) => setPso2mapco4(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={pso2mapco5.toString()}
									readOnly
									onChange={(e) => setPso2mapco5(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={pso2mapco6.toString()}
									readOnly
									onChange={(e) => setPso2mapco6(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={pso2mapco7.toString()}
									readOnly
									onChange={(e) => setPso2mapco7(e.target.value)}
								/>{" "}
							</td>
						</tr>

						{/* ************************************  PSO : 3       ************************************ */}

						<tr className='m-4'>
							<td rowSpan={4}>
								<Textarea
									readOnly
									value={pso31}
									onChange={(e) => setPso31(e.target.value)}
									className='my-6'
								/>
							</td>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={psocompetency31}
									onChange={(e) => setPsocompetency31(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={psoindicators31}
									onChange={(e) => setPsoindicators31(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={psoweight31}
									onChange={(e) => setPsoweight31(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco131}
									onChange={(e) => setPsoco131(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco231}
									onChange={(e) => setPsoco231(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco331}
									onChange={(e) => setPsoco331(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco431}
									onChange={(e) => setPsoco431(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco531}
									onChange={(e) => setPsoco531(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco631}
									onChange={(e) => setPsoco631(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco731}
									onChange={(e) => setPsoco731(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={psoindicators32}
									onChange={(e) => setPsoindicators32(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={psoweight32}
									onChange={(e) => setPsoweight32(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco132}
									onChange={(e) => setPsoco132(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco232}
									onChange={(e) => setPsoco232(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco332}
									onChange={(e) => setPsoco332(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco432}
									onChange={(e) => setPsoco432(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco532}
									onChange={(e) => setPsoco532(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco632}
									onChange={(e) => setPsoco632(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco732}
									onChange={(e) => setPsoco732(e.target.value)}
								/>
							</td>
						</tr>

						<tr className='m-4'>
							<td rowSpan={2}>
								<Textarea
									readOnly
									value={psocompetency32}
									onChange={(e) => setPsocompetency32(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									readOnly
									value={psoindicators33}
									onChange={(e) => setPsoindicators33(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={psoweight33}
									onChange={(e) => setPsoweight33(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco133}
									onChange={(e) => setPsoco133(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco233}
									onChange={(e) => setPsoco233(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco333}
									onChange={(e) => setPsoco333(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco433}
									onChange={(e) => setPsoco433(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco533}
									onChange={(e) => setPsoco533(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco633}
									onChange={(e) => setPsoco633(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco733}
									onChange={(e) => setPsoco733(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									readOnly
									value={psoindicators34}
									onChange={(e) => setPsoindicators34(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									readOnly
									value={psoweight34}
									onChange={(e) => setPsoweight34(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco134}
									onChange={(e) => setPsoco134(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco234}
									onChange={(e) => setPsoco234(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco334}
									onChange={(e) => setPsoco334(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco434}
									onChange={(e) => setPsoco434(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco534}
									onChange={(e) => setPsoco534(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco634}
									onChange={(e) => setPsoco634(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={psoco734}
									onChange={(e) => setPsoco734(e.target.value)}
								/>
							</td>
						</tr>

						<tr className='m-4'>
							<td colSpan={4}>
								<Textarea
									readOnly
									value='PSO 3 : Mapping Level'
									className='my-6'
								/>
							</td>

							<td>
								<Input
									type='number'
									value={pso3mapco1.toString()}
									readOnly
									onChange={(e) => setPso3mapco1(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={pso3mapco2.toString()}
									readOnly
									onChange={(e) => setPso3mapco2(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={pso3mapco3.toString()}
									readOnly
									onChange={(e) => setPso3mapco3(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={pso3mapco4.toString()}
									readOnly
									onChange={(e) => setPso3mapco4(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={pso3mapco5.toString()}
									readOnly
									onChange={(e) => setPso3mapco5(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={pso3mapco6.toString()}
									readOnly
									onChange={(e) => setPso3mapco6(e.target.value)}
								/>{" "}
							</td>
							<td>
								<Input
									type='number'
									value={pso3mapco7.toString()}
									readOnly
									onChange={(e) => setPso3mapco7(e.target.value)}
								/>{" "}
							</td>
						</tr>
					</tbody>
				</table>

				<Button type='submit'>Submit</Button>
			</form>
		</>
	);
}
