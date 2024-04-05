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
}

export default function App() {
	const router = useRouter();

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

	// Effect to call calculatePo1mapco1 whenever any of the co variables change
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
					</tbody>
				</table>

				<Button type='submit'>Submit</Button>
			</form>
		</>
	);
}
