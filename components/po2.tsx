// "use client";
// import React, { useEffect, useState } from "react";
// import {
// 	Table,
// 	TableHeader,
// 	TableColumn,
// 	TableBody,
// 	TableRow,
// 	TableCell,
// 	Input,
// 	Button,
// 	Textarea,
// 	Dropdown,
// 	DropdownItem,
// 	DropdownMenu,
// 	DropdownTrigger,
// 	Avatar,
// 	Select,
// 	SelectItem,
// } from "@nextui-org/react";
// import axios from "axios";

// import { useRouter } from "next/navigation";

// interface TableRowData {
// 	po11: string;
// 	po12: string;
// 	po13: string;
// 	po14: string;
// 	po15: string;

// 	competency11: string;
// 	competency12: string;
// 	competency13: string;
// 	competency14: string;
// 	competency15: string;

// 	indicators11: string;
// 	indicators12: string;
// 	indicators13: string;
// 	indicators14: string;
// 	indicators15: string;

// 	weight11: number;
// 	weight12: number;
// 	weight13: number;
// 	weight14: number;
// 	weight15: number;

// 	co111: number;
// 	co112: number;
// 	co113: number;
// 	co114: number;
// 	co115: number;

// 	co211: number;
// 	co212: number;
// 	co213: number;
// 	co214: number;
// 	co215: number;

// 	co311: number;
// 	co312: number;
// 	co313: number;
// 	co314: number;
// 	co315: number;

// 	co411: number;
// 	co412: number;
// 	co413: number;
// 	co414: number;
// 	co415: number;

// 	co511: number;
// 	co512: number;
// 	co513: number;
// 	co514: number;
// 	co515: number;

// 	co611: number;
// 	co612: number;
// 	co613: number;
// 	co614: number;
// 	co615: number;

// 	co711: number;
// 	co712: number;
// 	co713: number;
// 	co714: number;
// 	co715: number;

// 	po1mapco1: number;
// 	po1mapco2: number;
// 	po1mapco3: number;
// 	po1mapco4: number;
// 	po1mapco5: number;
// 	po1mapco6: number;
// 	po1mapco7: number;

// 	year: string;
// 	dept: string;
// 	sem: string;
// 	subject: string;

// 	// **************** PO:2      ****************************

// 	// ************************ PO:3  ***************************************

// 	po31: string;

// 	competency31: string;
// 	competency33: string;
// 	competency33: string;
// 	competency34: string;

// 	indicators31: string;
// 	indicators33: string;
// 	indicators33: string;
// 	indicators34: string;
// 	indicators35: string;
// 	indicators36: string;
// 	indicators37: string;
// 	indicators38: string;
// 	indicators39: string;
// 	indicators310: string;
// 	indicators311: string;
// 	indicators312: string;
// 	indicators313: string;

// 	weight31: string;
// 	weight33: string;
// 	weight33: string;
// 	weight34: string;
// 	weight35: string;
// 	weight36: string;
// 	weight37: string;
// 	weight38: string;
// 	weight39: string;
// 	weight310: string;
// 	weight311: string;
// 	weight312: string;
// 	weight313: string;

// 	co131: number;
// 	co133: number;
// 	co133: number;
// 	co134: number;
// 	co135: number;
// 	co136: number;
// 	co137: number;
// 	co138: number;
// 	co139: number;
// 	co1310: number;
// 	co1311: number;
// 	co1312: number;
// 	co1313: number;

// 	co231: number;
// 	co233: number;
// 	co233: number;
// 	co234: number;
// 	co235: number;
// 	co236: number;
// 	co237: number;
// 	co238: number;
// 	co239: number;
// 	co2310: number;
// 	co2311: number;
// 	co2312: number;
// 	co2313: number;

// 	co331: number;
// 	co333: number;
// 	co333: number;
// 	co334: number;
// 	co335: number;
// 	co336: number;
// 	co337: number;
// 	co338: number;
// 	co339: number;
// 	co3310: number;
// 	co3311: number;
// 	co3312: number;
// 	co3313: number;

// 	co431: number;
// 	co433: number;
// 	co433: number;
// 	co434: number;
// 	co435: number;
// 	co436: number;
// 	co437: number;
// 	co438: number;
// 	co439: number;
// 	co4310: number;
// 	co4311: number;
// 	co4312: number;
// 	co4313: number;

// 	co531: number;
// 	co533: number;
// 	co533: number;
// 	co534: number;
// 	co535: number;
// 	co536: number;
// 	co537: number;
// 	co538: number;
// 	co539: number;
// 	co5310: number;
// 	co5311: number;
// 	co5312: number;
// 	co5313: number;

// 	co631: number;
// 	co633: number;
// 	co633: number;
// 	co634: number;
// 	co635: number;
// 	co636: number;
// 	co637: number;
// 	co638: number;
// 	co639: number;
// 	co6310: number;
// 	co6311: number;
// 	co6312: number;
// 	co6313: number;

// 	co731: number;
// 	co733: number;
// 	co733: number;
// 	co734: number;
// 	co735: number;
// 	co736: number;
// 	co737: number;
// 	co738: number;
// 	co739: number;
// 	co7310: number;
// 	co7311: number;
// 	co7312: number;
// 	co7313: number;

// 	po3mapco1: number;
// 	po3mapco2: number;
// 	po3mapco3: number;
// 	po3mapco4: number;
// 	po3mapco5: number;
// 	po3mapco6: number;
// 	po3mapco7: number;
// }

// export default function App() {
// 	const router = useRouter();

// 	const [po11, setPo11] = useState(
// 		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
// 	);
// 	const [po12, setPo12] = useState(
// 		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
// 	);
// 	const [po13, setPo13] = useState(
// 		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
// 	);
// 	const [po14, setPo14] = useState(
// 		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
// 	);
// 	const [po15, setPo15] = useState(
// 		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
// 	);

// 	const [competency11, setCompetency11] = useState(
// 		"1.1  Demonstrate competence in mathematical modelling"
// 	);
// 	const [competency12, setCompetency12] = useState(
// 		"1.1  Demonstrate competence in mathematical modelling"
// 	);
// 	const [competency13, setCompetency13] = useState(
// 		"1.2 Demonstrate competence in basic sciences"
// 	);
// 	const [competency14, setCompetency14] = useState(
// 		"1.3 Demonstrate competence in engineering fundamentals"
// 	);
// 	const [competency15, setCompetency15] = useState(
// 		"1.4 Demonstrate competence in specialized engineering knowledge to the program"
// 	);

// 	const [indicators11, setIndicators11] = useState(
// 		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
// 	);
// 	const [indicators12, setIndicators12] = useState(
// 		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
// 	);
// 	const [indicators13, setIndicators13] = useState(
// 		"1.2.1  Apply laws of natural science to an engineering problem"
// 	);
// 	const [indicators14, setIndicators14] = useState(
// 		"1.3.1  Apply fundamental engineering concepts to solve engineering problems"
// 	);
// 	const [indicators15, setIndicators15] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);

// 	const [weight11, setWeight11] = useState("0.2");
// 	const [weight12, setWeight12] = useState("0.2");
// 	const [weight13, setWeight13] = useState("0.2");
// 	const [weight14, setWeight14] = useState("0.2");
// 	const [weight15, setWeight15] = useState("0.2");

// 	const [co111, setCo111] = useState("");
// 	const [co112, setCo112] = useState("");
// 	const [co113, setCo113] = useState("");
// 	const [co114, setCo114] = useState("");
// 	const [co115, setCo115] = useState("");

// 	const [co211, setCo211] = useState("");
// 	const [co212, setCo212] = useState("");
// 	const [co213, setCo213] = useState("");
// 	const [co214, setCo214] = useState("");
// 	const [co215, setCo215] = useState("");

// 	const [co311, setCo311] = useState("");
// 	const [co312, setCo312] = useState("");
// 	const [co313, setCo313] = useState("");
// 	const [co314, setCo314] = useState("");
// 	const [co315, setCo315] = useState("");

// 	const [co411, setCo411] = useState("");
// 	const [co412, setCo412] = useState("");
// 	const [co413, setCo413] = useState("");
// 	const [co414, setCo414] = useState("");
// 	const [co415, setCo415] = useState("");

// 	const [co511, setCo511] = useState("");
// 	const [co512, setCo512] = useState("");
// 	const [co513, setCo513] = useState("");
// 	const [co514, setCo514] = useState("");
// 	const [co515, setCo515] = useState("");

// 	const [co611, setCo611] = useState("");
// 	const [co612, setCo612] = useState("");
// 	const [co613, setCo613] = useState("");
// 	const [co614, setCo614] = useState("");
// 	const [co615, setCo615] = useState("");

// 	const [co711, setCo711] = useState("");
// 	const [co712, setCo712] = useState("");
// 	const [co713, setCo713] = useState("");
// 	const [co714, setCo714] = useState("");
// 	const [co715, setCo715] = useState("");

// 	const [po1mapco1, setPo1mapco1] = useState<number | string>("");
// 	const [po1mapco2, setPo1mapco2] = useState<number | string>("");
// 	const [po1mapco3, setPo1mapco3] = useState<number | string>("");
// 	const [po1mapco4, setPo1mapco4] = useState<number | string>("");
// 	const [po1mapco5, setPo1mapco5] = useState<number | string>("");
// 	const [po1mapco6, setPo1mapco6] = useState<number | string>("");
// 	const [po1mapco7, setPo1mapco7] = useState<number | string>("");

// 	const [year, setYear] = useState("");
// 	const [dept, setDept] = useState("");
// 	const [sem, setSem] = useState("");
// 	const [subject, setSubject] = useState("");

// 	// ******************** PO:2 ******************************

// 	const [po21, setPo21] = useState(
// 		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
// 	);

// 	const [competency21, setCompetency21] = useState(
// 		"1.1  Demonstrate competence in mathematical modelling"
// 	);
// 	const [competency23, setCompetency23] = useState(
// 		"1.1  Demonstrate competence in mathematical modelling"
// 	);
// 	const [competency23, setCompetency23] = useState(
// 		"1.2 Demonstrate competence in basic sciences"
// 	);
// 	const [competency24, setCompetency24] = useState(
// 		"1.3 Demonstrate competence in engineering fundamentals"
// 	);

// 	const [indicators21, setIndicators21] = useState(
// 		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
// 	);
// 	const [indicators23, setIndicators23] = useState(
// 		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
// 	);
// 	const [indicators23, setIndicators23] = useState(
// 		"1.2.1  Apply laws of natural science to an engineering problem"
// 	);
// 	const [indicators24, setIndicators24] = useState(
// 		"1.3.1  Apply fundamental engineering concepts to solve engineering problems"
// 	);
// 	const [indicators25, setIndicators25] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);
// 	const [indicators26, setIndicators26] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);
// 	const [indicators27, setIndicators27] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);
// 	const [indicators28, setIndicators28] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);
// 	const [indicators29, setIndicators29] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);
// 	const [indicators210, setIndicators210] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);
// 	const [indicators211, setIndicators211] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);
// 	const [indicators212, setIndicators212] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);
// 	const [indicators213, setIndicators213] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);

// 	const [weight21, setWeight21] = useState("0.8");
// 	const [weight23, setWeight23] = useState("0.8");
// 	const [weight23, setWeight23] = useState("0.8");
// 	const [weight24, setWeight24] = useState("0.8");
// 	const [weight25, setWeight25] = useState("0.8");
// 	const [weight26, setWeight26] = useState("0.8");
// 	const [weight27, setWeight27] = useState("0.8");
// 	const [weight28, setWeight28] = useState("0.8");
// 	const [weight29, setWeight29] = useState("0.8");
// 	const [weight210, setWeight210] = useState("0.8");
// 	const [weight211, setWeight211] = useState("0.8");
// 	const [weight212, setWeight212] = useState("0.8");
// 	const [weight213, setWeight213] = useState("0.8");

// 	const [co121, setCo121] = useState("");
// 	const [co123, setCo123] = useState("");
// 	const [co123, setCo123] = useState("");
// 	const [co124, setCo124] = useState("");
// 	const [co125, setCo125] = useState("");
// 	const [co126, setCo126] = useState("");
// 	const [co127, setCo127] = useState("");
// 	const [co128, setCo128] = useState("");
// 	const [co129, setCo129] = useState("");
// 	const [co1210, setCo1210] = useState("");
// 	const [co1211, setCo1211] = useState("");
// 	const [co1212, setCo1212] = useState("");
// 	const [co1213, setCo1213] = useState("");

// 	const [co231, setCo231] = useState("");
// 	const [co233, setCo233] = useState("");
// 	const [co233, setCo233] = useState("");
// 	const [co234, setCo234] = useState("");
// 	const [co235, setCo235] = useState("");
// 	const [co236, setCo236] = useState("");
// 	const [co237, setCo237] = useState("");
// 	const [co238, setCo238] = useState("");
// 	const [co239, setCo239] = useState("");
// 	const [co2310, setCo2310] = useState("");
// 	const [co2311, setCo2311] = useState("");
// 	const [co2312, setCo2312] = useState("");
// 	const [co2313, setCo2313] = useState("");

// 	const [co331, setCo331] = useState("");
// 	const [co333, setCo333] = useState("");
// 	const [co333, setCo333] = useState("");
// 	const [co334, setCo334] = useState("");
// 	const [co335, setCo335] = useState("");
// 	const [co336, setCo336] = useState("");
// 	const [co337, setCo337] = useState("");
// 	const [co338, setCo338] = useState("");
// 	const [co339, setCo339] = useState("");
// 	const [co3310, setCo3310] = useState("");
// 	const [co3311, setCo3311] = useState("");
// 	const [co3312, setCo3312] = useState("");
// 	const [co3313, setCo3313] = useState("");

// 	const [co421, setCo421] = useState("");
// 	const [co423, setCo423] = useState("");
// 	const [co423, setCo423] = useState("");
// 	const [co424, setCo424] = useState("");
// 	const [co425, setCo425] = useState("");
// 	const [co426, setCo426] = useState("");
// 	const [co427, setCo427] = useState("");
// 	const [co428, setCo428] = useState("");
// 	const [co429, setCo429] = useState("");
// 	const [co4210, setCo4210] = useState("");
// 	const [co4211, setCo4211] = useState("");
// 	const [co4212, setCo4212] = useState("");
// 	const [co4213, setCo4213] = useState("");

// 	const [co521, setCo521] = useState("");
// 	const [co523, setCo523] = useState("");
// 	const [co523, setCo523] = useState("");
// 	const [co524, setCo524] = useState("");
// 	const [co525, setCo525] = useState("");
// 	const [co526, setCo526] = useState("");
// 	const [co527, setCo527] = useState("");
// 	const [co528, setCo528] = useState("");
// 	const [co529, setCo529] = useState("");
// 	const [co5210, setCo5210] = useState("");
// 	const [co5211, setCo5211] = useState("");
// 	const [co5212, setCo5212] = useState("");
// 	const [co5213, setCo5213] = useState("");

// 	const [co621, setCo621] = useState("");
// 	const [co623, setCo623] = useState("");
// 	const [co623, setCo623] = useState("");
// 	const [co624, setCo624] = useState("");
// 	const [co625, setCo625] = useState("");
// 	const [co626, setCo626] = useState("");
// 	const [co627, setCo627] = useState("");
// 	const [co628, setCo628] = useState("");
// 	const [co629, setCo629] = useState("");
// 	const [co6210, setCo6210] = useState("");
// 	const [co6211, setCo6211] = useState("");
// 	const [co6212, setCo6212] = useState("");
// 	const [co6213, setCo6213] = useState("");

// 	const [co721, setCo721] = useState("");
// 	const [co723, setCo723] = useState("");
// 	const [co723, setCo723] = useState("");
// 	const [co724, setCo724] = useState("");
// 	const [co725, setCo725] = useState("");
// 	const [co726, setCo726] = useState("");
// 	const [co727, setCo727] = useState("");
// 	const [co728, setCo728] = useState("");
// 	const [co729, setCo729] = useState("");
// 	const [co7210, setCo7210] = useState("");
// 	const [co7211, setCo7211] = useState("");
// 	const [co7212, setCo7212] = useState("");
// 	const [co7213, setCo7213] = useState("");

// 	const [po2mapco1, setPo2mapco1] = useState<number | string>("");
// 	const [po2mapco2, setPo2mapco2] = useState<number | string>("");
// 	const [po2mapco3, setPo2mapco3] = useState<number | string>("");
// 	const [po2mapco4, setPo2mapco4] = useState<number | string>("");
// 	const [po2mapco5, setPo2mapco5] = useState<number | string>("");
// 	const [po2mapco6, setPo2mapco6] = useState<number | string>("");
// 	const [po2mapco7, setPo2mapco7] = useState<number | string>("");

// 	// ******************** PO:3 ******************************

// 	const [po31, setPo31] = useState(
// 		"PO 3: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
// 	);

// 	const [competency31, setCompetency31] = useState(
// 		"1.1  Demonstrate competence in mathematical modelling"
// 	);
// 	const [competency33, setCompetency33] = useState(
// 		"1.1  Demonstrate competence in mathematical modelling"
// 	);
// 	const [competency33, setCompetency33] = useState(
// 		"1.2 Demonstrate competence in basic sciences"
// 	);
// 	const [competency34, setCompetency34] = useState(
// 		"1.3 Demonstrate competence in engineering fundamentals"
// 	);

// 	const [indicators31, setIndicators31] = useState(
// 		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
// 	);
// 	const [indicators33, setIndicators33] = useState(
// 		"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems"
// 	);
// 	const [indicators33, setIndicators33] = useState(
// 		"1.2.1  Apply laws of natural science to an engineering problem"
// 	);
// 	const [indicators34, setIndicators34] = useState(
// 		"1.3.1  Apply fundamental engineering concepts to solve engineering problems"
// 	);
// 	const [indicators35, setIndicators35] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);
// 	const [indicators36, setIndicators36] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);
// 	const [indicators37, setIndicators37] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);
// 	const [indicators38, setIndicators38] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);
// 	const [indicators39, setIndicators39] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);
// 	const [indicators310, setIndicators310] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);
// 	const [indicators311, setIndicators311] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);
// 	const [indicators312, setIndicators312] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);
// 	const [indicators313, setIndicators313] = useState(
// 		"1.4.1  Apply Mechanical engineering concepts to solve engineering problems."
// 	);

// 	const [weight31, setWeight31] = useState("0.8");
// 	const [weight33, setWeight33] = useState("0.8");
// 	const [weight33, setWeight33] = useState("0.8");
// 	const [weight34, setWeight34] = useState("0.8");
// 	const [weight35, setWeight35] = useState("0.8");
// 	const [weight36, setWeight36] = useState("0.8");
// 	const [weight37, setWeight37] = useState("0.8");
// 	const [weight38, setWeight38] = useState("0.8");
// 	const [weight39, setWeight39] = useState("0.8");
// 	const [weight310, setWeight310] = useState("0.8");
// 	const [weight311, setWeight311] = useState("0.8");
// 	const [weight312, setWeight312] = useState("0.8");
// 	const [weight313, setWeight313] = useState("0.8");

// 	const [co131, setCo131] = useState("");
// 	const [co133, setCo133] = useState("");
// 	const [co133, setCo133] = useState("");
// 	const [co134, setCo134] = useState("");
// 	const [co135, setCo135] = useState("");
// 	const [co136, setCo136] = useState("");
// 	const [co137, setCo137] = useState("");
// 	const [co138, setCo138] = useState("");
// 	const [co139, setCo139] = useState("");
// 	const [co1310, setCo1310] = useState("");
// 	const [co1311, setCo1311] = useState("");
// 	const [co1312, setCo1312] = useState("");
// 	const [co1313, setCo1313] = useState("");

// 	const [co231, setCo231] = useState("");
// 	const [co233, setCo233] = useState("");
// 	const [co233, setCo233] = useState("");
// 	const [co234, setCo234] = useState("");
// 	const [co235, setCo235] = useState("");
// 	const [co236, setCo236] = useState("");
// 	const [co237, setCo237] = useState("");
// 	const [co238, setCo238] = useState("");
// 	const [co239, setCo239] = useState("");
// 	const [co2310, setCo2310] = useState("");
// 	const [co2311, setCo2311] = useState("");
// 	const [co2312, setCo2312] = useState("");
// 	const [co2313, setCo2313] = useState("");

// 	const [co331, setCo331] = useState("");
// 	const [co333, setCo333] = useState("");
// 	const [co333, setCo333] = useState("");
// 	const [co334, setCo334] = useState("");
// 	const [co335, setCo335] = useState("");
// 	const [co336, setCo336] = useState("");
// 	const [co337, setCo337] = useState("");
// 	const [co338, setCo338] = useState("");
// 	const [co339, setCo339] = useState("");
// 	const [co3310, setCo3310] = useState("");
// 	const [co3311, setCo3311] = useState("");
// 	const [co3312, setCo3312] = useState("");
// 	const [co3313, setCo3313] = useState("");

// 	const [co431, setCo431] = useState("");
// 	const [co433, setCo433] = useState("");
// 	const [co433, setCo433] = useState("");
// 	const [co434, setCo434] = useState("");
// 	const [co435, setCo435] = useState("");
// 	const [co436, setCo436] = useState("");
// 	const [co437, setCo437] = useState("");
// 	const [co438, setCo438] = useState("");
// 	const [co439, setCo439] = useState("");
// 	const [co4310, setCo4310] = useState("");
// 	const [co4311, setCo4311] = useState("");
// 	const [co4312, setCo4312] = useState("");
// 	const [co4313, setCo4313] = useState("");

// 	const [co531, setCo531] = useState("");
// 	const [co533, setCo533] = useState("");
// 	const [co533, setCo533] = useState("");
// 	const [co534, setCo534] = useState("");
// 	const [co535, setCo535] = useState("");
// 	const [co536, setCo536] = useState("");
// 	const [co537, setCo537] = useState("");
// 	const [co538, setCo538] = useState("");
// 	const [co539, setCo539] = useState("");
// 	const [co5310, setCo5310] = useState("");
// 	const [co5311, setCo5311] = useState("");
// 	const [co5312, setCo5312] = useState("");
// 	const [co5313, setCo5313] = useState("");

// 	const [co631, setCo631] = useState("");
// 	const [co633, setCo633] = useState("");
// 	const [co633, setCo633] = useState("");
// 	const [co634, setCo634] = useState("");
// 	const [co635, setCo635] = useState("");
// 	const [co636, setCo636] = useState("");
// 	const [co637, setCo637] = useState("");
// 	const [co638, setCo638] = useState("");
// 	const [co639, setCo639] = useState("");
// 	const [co6310, setCo6310] = useState("");
// 	const [co6311, setCo6311] = useState("");
// 	const [co6312, setCo6312] = useState("");
// 	const [co6313, setCo6313] = useState("");

// 	const [co731, setCo731] = useState("");
// 	const [co733, setCo733] = useState("");
// 	const [co733, setCo733] = useState("");
// 	const [co734, setCo734] = useState("");
// 	const [co735, setCo735] = useState("");
// 	const [co736, setCo736] = useState("");
// 	const [co737, setCo737] = useState("");
// 	const [co738, setCo738] = useState("");
// 	const [co739, setCo739] = useState("");
// 	const [co7310, setCo7310] = useState("");
// 	const [co7311, setCo7311] = useState("");
// 	const [co7312, setCo7312] = useState("");
// 	const [co7313, setCo7313] = useState("");

// 	const [po3mapco1, setPo3mapco1] = useState<number | string>("");
// 	const [po3mapco2, setPo3mapco2] = useState<number | string>("");
// 	const [po3mapco3, setPo3mapco3] = useState<number | string>("");
// 	const [po3mapco4, setPo3mapco4] = useState<number | string>("");
// 	const [po3mapco5, setPo3mapco5] = useState<number | string>("");
// 	const [po3mapco6, setPo3mapco6] = useState<number | string>("");
// 	const [po3mapco7, setPo3mapco7] = useState<number | string>("");

// 	const calculatePo1mapco1 = () => {
// 		const sumCo =
// 			parseInt(co111) +
// 			parseInt(co112) +
// 			parseInt(co113) +
// 			parseInt(co114) +
// 			parseInt(co115);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setPo1mapco1(calculatedValue);
// 	};
// 	const calculatePo1mapco2 = () => {
// 		const sumCo =
// 			parseInt(co211) +
// 			parseInt(co212) +
// 			parseInt(co213) +
// 			parseInt(co214) +
// 			parseInt(co215);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setPo1mapco2(calculatedValue);
// 	};
// 	const calculatePo1mapco3 = () => {
// 		const sumCo =
// 			parseInt(co311) +
// 			parseInt(co312) +
// 			parseInt(co313) +
// 			parseInt(co314) +
// 			parseInt(co315);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setPo1mapco3(calculatedValue);
// 	};
// 	const calculatePo1mapco4 = () => {
// 		const sumCo =
// 			parseInt(co411) +
// 			parseInt(co412) +
// 			parseInt(co413) +
// 			parseInt(co414) +
// 			parseInt(co415);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setPo1mapco4(calculatedValue);
// 	};
// 	const calculatePo1mapco5 = () => {
// 		const sumCo =
// 			parseInt(co511) +
// 			parseInt(co512) +
// 			parseInt(co513) +
// 			parseInt(co514) +
// 			parseInt(co515);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setPo1mapco5(calculatedValue);
// 	};
// 	const calculatePo1mapco6 = () => {
// 		const sumCo =
// 			parseInt(co611) +
// 			parseInt(co612) +
// 			parseInt(co613) +
// 			parseInt(co614) +
// 			parseInt(co615);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setPo1mapco6(calculatedValue);
// 	};
// 	const calculatePo1mapco7 = () => {
// 		const sumCo =
// 			parseInt(co711) +
// 			parseInt(co712) +
// 			parseInt(co713) +
// 			parseInt(co714) +
// 			parseInt(co715);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setPo1mapco7(calculatedValue);
// 	};

// 	// PO: 2
// 	const calculatePo2mapco1 = () => {
// 		const sumCo =
// 			parseInt(co121) +
// 			parseInt(co123) +
// 			parseInt(co123) +
// 			parseInt(co124) +
// 			parseInt(co125) +
// 			parseInt(co126) +
// 			parseInt(co127) +
// 			parseInt(co128) +
// 			parseInt(co129) +
// 			parseInt(co1210) +
// 			parseInt(co1211) +
// 			parseInt(co1212) +
// 			parseInt(co1213);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setPo2mapco1(calculatedValue);
// 	};
// 	const calculatePo2mapco2 = () => {
// 		const sumCo =
// 			parseInt(co231) +
// 			parseInt(co233) +
// 			parseInt(co233) +
// 			parseInt(co234) +
// 			parseInt(co235) +
// 			parseInt(co236) +
// 			parseInt(co237) +
// 			parseInt(co238) +
// 			parseInt(co239) +
// 			parseInt(co2310) +
// 			parseInt(co2311) +
// 			parseInt(co2312) +
// 			parseInt(co2313);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setPo2mapco2(calculatedValue);
// 	};
// 	const calculatePo2mapco3 = () => {
// 		const sumCo =
// 			parseInt(co331) +
// 			parseInt(co333) +
// 			parseInt(co333) +
// 			parseInt(co334) +
// 			parseInt(co335) +
// 			parseInt(co336) +
// 			parseInt(co337) +
// 			parseInt(co338) +
// 			parseInt(co339) +
// 			parseInt(co3310) +
// 			parseInt(co3311) +
// 			parseInt(co3312) +
// 			parseInt(co3313);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setPo2mapco3(calculatedValue);
// 	};
// 	const calculatePo2mapco4 = () => {
// 		const sumCo =
// 			parseInt(co421) +
// 			parseInt(co423) +
// 			parseInt(co423) +
// 			parseInt(co424) +
// 			parseInt(co425) +
// 			parseInt(co426) +
// 			parseInt(co427) +
// 			parseInt(co428) +
// 			parseInt(co429) +
// 			parseInt(co4210) +
// 			parseInt(co4211) +
// 			parseInt(co4212) +
// 			parseInt(co4213);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setPo2mapco4(calculatedValue);
// 	};
// 	const calculatePo2mapco5 = () => {
// 		const sumCo =
// 			parseInt(co521) +
// 			parseInt(co523) +
// 			parseInt(co523) +
// 			parseInt(co524) +
// 			parseInt(co525) +
// 			parseInt(co526) +
// 			parseInt(co527) +
// 			parseInt(co528) +
// 			parseInt(co529) +
// 			parseInt(co5210) +
// 			parseInt(co5211) +
// 			parseInt(co5212) +
// 			parseInt(co5213);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setPo2mapco5(calculatedValue);
// 	};
// 	const calculatePo2mapco6 = () => {
// 		const sumCo =
// 			parseInt(co621) +
// 			parseInt(co623) +
// 			parseInt(co623) +
// 			parseInt(co624) +
// 			parseInt(co625) +
// 			parseInt(co626) +
// 			parseInt(co627) +
// 			parseInt(co628) +
// 			parseInt(co629) +
// 			parseInt(co6210) +
// 			parseInt(co6211) +
// 			parseInt(co6212) +
// 			parseInt(co6213);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setPo2mapco6(calculatedValue);
// 	};
// 	const calculatePo2mapco7 = () => {
// 		const sumCo =
// 			parseInt(co721) +
// 			parseInt(co723) +
// 			parseInt(co723) +
// 			parseInt(co724) +
// 			parseInt(co725) +
// 			parseInt(co726) +
// 			parseInt(co727) +
// 			parseInt(co728) +
// 			parseInt(co729) +
// 			parseInt(co7210) +
// 			parseInt(co7211) +
// 			parseInt(co7212) +
// 			parseInt(co7213);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setPo2mapco7(calculatedValue);
// 	};
// 	// PO: 2
// 	const calculatePo3mapco1 = () => {
// 		const sumCo =
// 			parseInt(co131) +
// 			parseInt(co133) +
// 			parseInt(co133) +
// 			parseInt(co134) +
// 			parseInt(co135) +
// 			parseInt(co136) +
// 			parseInt(co137) +
// 			parseInt(co138) +
// 			parseInt(co139) +
// 			parseInt(co1310) +
// 			parseInt(co1311) +
// 			parseInt(co1312) +
// 			parseInt(co1313);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setPo3mapco1(calculatedValue);
// 	};
// 	const calculatePo3mapco2 = () => {
// 		const sumCo =
// 			parseInt(co231) +
// 			parseInt(co233) +
// 			parseInt(co233) +
// 			parseInt(co234) +
// 			parseInt(co235) +
// 			parseInt(co236) +
// 			parseInt(co237) +
// 			parseInt(co238) +
// 			parseInt(co239) +
// 			parseInt(co2310) +
// 			parseInt(co2311) +
// 			parseInt(co2312) +
// 			parseInt(co2313);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setPo3mapco2(calculatedValue);
// 	};
// 	const calculatePo3mapco3 = () => {
// 		const sumCo =
// 			parseInt(co331) +
// 			parseInt(co333) +
// 			parseInt(co333) +
// 			parseInt(co334) +
// 			parseInt(co335) +
// 			parseInt(co336) +
// 			parseInt(co337) +
// 			parseInt(co338) +
// 			parseInt(co339) +
// 			parseInt(co3310) +
// 			parseInt(co3311) +
// 			parseInt(co3312) +
// 			parseInt(co3313);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setPo3mapco3(calculatedValue);
// 	};
// 	const calculatePo3mapco4 = () => {
// 		const sumCo =
// 			parseInt(co431) +
// 			parseInt(co433) +
// 			parseInt(co433) +
// 			parseInt(co434) +
// 			parseInt(co435) +
// 			parseInt(co436) +
// 			parseInt(co437) +
// 			parseInt(co438) +
// 			parseInt(co439) +
// 			parseInt(co4310) +
// 			parseInt(co4311) +
// 			parseInt(co4312) +
// 			parseInt(co4313);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setPo3mapco4(calculatedValue);
// 	};
// 	const calculatePo3mapco5 = () => {
// 		const sumCo =
// 			parseInt(co531) +
// 			parseInt(co533) +
// 			parseInt(co533) +
// 			parseInt(co534) +
// 			parseInt(co535) +
// 			parseInt(co536) +
// 			parseInt(co537) +
// 			parseInt(co538) +
// 			parseInt(co539) +
// 			parseInt(co5310) +
// 			parseInt(co5311) +
// 			parseInt(co5312) +
// 			parseInt(co5313);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setPo3mapco5(calculatedValue);
// 	};
// 	const calculatePo3mapco6 = () => {
// 		const sumCo =
// 			parseInt(co631) +
// 			parseInt(co633) +
// 			parseInt(co633) +
// 			parseInt(co634) +
// 			parseInt(co635) +
// 			parseInt(co636) +
// 			parseInt(co637) +
// 			parseInt(co638) +
// 			parseInt(co639) +
// 			parseInt(co6310) +
// 			parseInt(co6311) +
// 			parseInt(co6312) +
// 			parseInt(co6313);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setPo3mapco6(calculatedValue);
// 	};
// 	const calculatePo3mapco7 = () => {
// 		const sumCo =
// 			parseInt(co731) +
// 			parseInt(co733) +
// 			parseInt(co733) +
// 			parseInt(co734) +
// 			parseInt(co735) +
// 			parseInt(co736) +
// 			parseInt(co737) +
// 			parseInt(co738) +
// 			parseInt(co739) +
// 			parseInt(co7310) +
// 			parseInt(co7311) +
// 			parseInt(co7312) +
// 			parseInt(co7313);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setPo3mapco7(calculatedValue);
// 	};

// 	// Effect to call calculatePo1mapco1 whenever any of the co variables change
// 	useEffect(() => {
// 		calculatePo1mapco1();
// 		calculatePo1mapco2();
// 		calculatePo1mapco3();
// 		calculatePo1mapco4();
// 		calculatePo1mapco5();
// 		calculatePo1mapco6();
// 		calculatePo1mapco7();
// 		//  PO: 2
// 		calculatePo2mapco1();
// 		calculatePo2mapco2();
// 		calculatePo2mapco3();
// 		calculatePo2mapco4();
// 		calculatePo2mapco5();
// 		calculatePo2mapco6();
// 		calculatePo2mapco7();
// 		//  PO: 3
// 		calculatePo3mapco1();
// 		calculatePo3mapco2();
// 		calculatePo3mapco3();
// 		calculatePo3mapco4();
// 		calculatePo3mapco5();
// 		calculatePo3mapco6();
// 		calculatePo3mapco7();
// 	}, [
// 		co111,
// 		co112,
// 		co113,
// 		co114,
// 		co115,
// 		co211,
// 		co212,
// 		co213,
// 		co214,
// 		co215,
// 		co311,
// 		co312,
// 		co313,
// 		co314,
// 		co315,

// 		co411,
// 		co412,
// 		co413,
// 		co414,
// 		co415,

// 		co511,
// 		co512,
// 		co513,
// 		co514,
// 		co515,

// 		co611,
// 		co612,
// 		co613,
// 		co614,
// 		co615,

// 		co711,
// 		co712,
// 		co713,
// 		co714,
// 		co715,

// 		co121,
// 		co123,
// 		co123,
// 		co124,
// 		co125,
// 		co126,
// 		co127,
// 		co128,
// 		co129,
// 		co1210,
// 		co1211,
// 		co1212,
// 		co1213,

// 		co231,
// 		co233,
// 		co233,
// 		co234,
// 		co235,
// 		co236,
// 		co237,
// 		co238,
// 		co239,
// 		co2310,
// 		co2311,
// 		co2312,
// 		co2313,

// 		co331,
// 		co333,
// 		co333,
// 		co334,
// 		co335,
// 		co336,
// 		co337,
// 		co338,
// 		co339,
// 		co3310,
// 		co3311,
// 		co3312,
// 		co3313,

// 		co421,
// 		co423,
// 		co423,
// 		co424,
// 		co425,
// 		co426,
// 		co427,
// 		co428,
// 		co429,
// 		co4210,
// 		co4211,
// 		co4212,
// 		co4213,

// 		co521,
// 		co523,
// 		co523,
// 		co524,
// 		co525,
// 		co526,
// 		co527,
// 		co528,
// 		co529,
// 		co5210,
// 		co5211,
// 		co5212,
// 		co5213,

// 		co621,
// 		co623,
// 		co623,
// 		co624,
// 		co625,
// 		co626,
// 		co627,
// 		co628,
// 		co629,
// 		co6210,
// 		co6211,
// 		co6212,
// 		co6213,

// 		co721,
// 		co723,
// 		co723,
// 		co724,
// 		co725,
// 		co726,
// 		co727,
// 		co728,
// 		co729,
// 		co7210,
// 		co7211,
// 		co7212,
// 		co7213,

// 		// po:3

// 		co131,
// 		co133,
// 		co133,
// 		co134,
// 		co135,
// 		co136,
// 		co137,
// 		co138,
// 		co139,
// 		co1310,
// 		co1311,
// 		co1312,
// 		co1313,

// 		co231,
// 		co233,
// 		co233,
// 		co234,
// 		co235,
// 		co236,
// 		co237,
// 		co238,
// 		co239,
// 		co2310,
// 		co2311,
// 		co2312,
// 		co2313,

// 		co331,
// 		co333,
// 		co333,
// 		co334,
// 		co335,
// 		co336,
// 		co337,
// 		co338,
// 		co339,
// 		co3310,
// 		co3311,
// 		co3312,
// 		co3313,

// 		co431,
// 		co433,
// 		co433,
// 		co434,
// 		co435,
// 		co436,
// 		co437,
// 		co438,
// 		co439,
// 		co4310,
// 		co4311,
// 		co4312,
// 		co4313,

// 		co531,
// 		co533,
// 		co533,
// 		co534,
// 		co535,
// 		co536,
// 		co537,
// 		co538,
// 		co539,
// 		co5310,
// 		co5311,
// 		co5312,
// 		co5313,

// 		co631,
// 		co633,
// 		co633,
// 		co634,
// 		co635,
// 		co636,
// 		co637,
// 		co638,
// 		co639,
// 		co6310,
// 		co6311,
// 		co6312,
// 		co6313,

// 		co731,
// 		co733,
// 		co733,
// 		co734,
// 		co735,
// 		co736,
// 		co737,
// 		co738,
// 		co739,
// 		co7310,
// 		co7311,
// 		co7312,
// 		co7313,
// 	]);

// 	const handleSubmit = async (e: any) => {
// 		e.preventDefault();

// 		// if (
// 		// 	!po ||
// 		// 	!competency ||
// 		// 	!indicators ||
// 		// 	!weight ||
// 		// 	!co1 ||
// 		// 	!co2 ||
// 		// 	!co3 ||
// 		// 	!co4 ||
// 		// 	!co5 ||
// 		// 	!co6 ||
// 		// 	!co7
// 		// ) {
// 		// 	alert("fill all fields");
// 		// 	return;
// 		// }

// 		try {
// 			const res = await fetch("http://localhost:3000/api/table", {
// 				// const res = await fetch("https://copo-attainment.vercel.app/api/table", {
// 				method: "POST",
// 				headers: {
// 					"Content-type": "application/json",
// 				},
// 				body: JSON.stringify({
// 					po11,
// 					po12,
// 					po13,
// 					po14,
// 					po15,

// 					competency11,
// 					competency12,
// 					competency13,
// 					competency14,
// 					competency15,

// 					indicators11,
// 					indicators12,
// 					indicators13,
// 					indicators14,
// 					indicators15,

// 					weight11,
// 					weight12,
// 					weight13,
// 					weight14,
// 					weight15,

// 					co111,
// 					co112,
// 					co113,
// 					co114,
// 					co115,

// 					co211,
// 					co212,
// 					co213,
// 					co214,
// 					co215,

// 					co311,
// 					co312,
// 					co313,
// 					co314,
// 					co315,

// 					co411,
// 					co412,
// 					co413,
// 					co414,
// 					co415,

// 					co511,
// 					co512,
// 					co513,
// 					co514,
// 					co515,

// 					co611,
// 					co612,
// 					co613,
// 					co614,
// 					co615,

// 					co711,
// 					co712,
// 					co713,
// 					co714,
// 					co715,

// 					po1mapco1,
// 					po1mapco2,
// 					po1mapco3,
// 					po1mapco4,
// 					po1mapco5,
// 					po1mapco6,
// 					po1mapco7,

// 					year,
// 					dept,
// 					sem,
// 					subject,

// 					//  **********************   po2    *****************************

// 					po21,

// 					competency21,
// 					competency23,
// 					competency23,
// 					competency24,

// 					indicators21,
// 					indicators23,
// 					indicators23,
// 					indicators24,
// 					indicators25,
// 					indicators26,
// 					indicators27,
// 					indicators28,
// 					indicators29,
// 					indicators210,
// 					indicators211,
// 					indicators212,
// 					indicators213,

// 					weight21,
// 					weight23,
// 					weight23,
// 					weight24,
// 					weight25,
// 					weight26,
// 					weight27,
// 					weight28,
// 					weight29,
// 					weight210,
// 					weight211,
// 					weight212,
// 					weight213,

// 					co121,
// 					co123,
// 					co123,
// 					co124,
// 					co125,
// 					co126,
// 					co127,
// 					co128,
// 					co129,
// 					co1210,
// 					co1211,
// 					co1212,
// 					co1213,

// 					co231,
// 					co233,
// 					co233,
// 					co234,
// 					co235,
// 					co236,
// 					co237,
// 					co238,
// 					co239,
// 					co2310,
// 					co2311,
// 					co2312,
// 					co2313,

// 					co331,
// 					co333,
// 					co333,
// 					co334,
// 					co335,
// 					co336,
// 					co337,
// 					co338,
// 					co339,
// 					co3310,
// 					co3311,
// 					co3312,
// 					co3313,

// 					co421,
// 					co423,
// 					co423,
// 					co424,
// 					co425,
// 					co426,
// 					co427,
// 					co428,
// 					co429,
// 					co4210,
// 					co4211,
// 					co4212,
// 					co4213,

// 					co521,
// 					co523,
// 					co523,
// 					co524,
// 					co525,
// 					co526,
// 					co527,
// 					co528,
// 					co529,
// 					co5210,
// 					co5211,
// 					co5212,
// 					co5213,

// 					co621,
// 					co623,
// 					co623,
// 					co624,
// 					co625,
// 					co626,
// 					co627,
// 					co628,
// 					co629,
// 					co6210,
// 					co6211,
// 					co6212,
// 					co6213,

// 					co721,
// 					co723,
// 					co723,
// 					co724,
// 					co725,
// 					co726,
// 					co727,
// 					co728,
// 					co729,
// 					co7210,
// 					co7211,
// 					co7212,
// 					co7213,

// 					po2mapco1,
// 					po2mapco2,
// 					po2mapco3,
// 					po2mapco4,
// 					po2mapco5,
// 					po2mapco6,
// 					po2mapco7,

// 					// ************************ PO:3  ***************************************

// 					po31,

// 					competency31,
// 					competency33,
// 					competency33,
// 					competency34,

// 					indicators31,
// 					indicators33,
// 					indicators33,
// 					indicators34,
// 					indicators35,
// 					indicators36,
// 					indicators37,
// 					indicators38,
// 					indicators39,
// 					indicators310,
// 					indicators311,
// 					indicators312,
// 					indicators313,

// 					weight31,
// 					weight33,
// 					weight33,
// 					weight34,
// 					weight35,
// 					weight36,
// 					weight37,
// 					weight38,
// 					weight39,
// 					weight310,
// 					weight311,
// 					weight312,
// 					weight313,

// 					co131,
// 					co133,
// 					co133,
// 					co134,
// 					co135,
// 					co136,
// 					co137,
// 					co138,
// 					co139,
// 					co1310,
// 					co1311,
// 					co1312,
// 					co1313,

// 					co231,
// 					co233,
// 					co233,
// 					co234,
// 					co235,
// 					co236,
// 					co237,
// 					co238,
// 					co239,
// 					co2310,
// 					co2311,
// 					co2312,
// 					co2313,

// 					co331,
// 					co333,
// 					co333,
// 					co334,
// 					co335,
// 					co336,
// 					co337,
// 					co338,
// 					co339,
// 					co3310,
// 					co3311,
// 					co3312,
// 					co3313,

// 					co431,
// 					co433,
// 					co433,
// 					co434,
// 					co435,
// 					co436,
// 					co437,
// 					co438,
// 					co439,
// 					co4310,
// 					co4311,
// 					co4312,
// 					co4313,

// 					co531,
// 					co533,
// 					co533,
// 					co534,
// 					co535,
// 					co536,
// 					co537,
// 					co538,
// 					co539,
// 					co5310,
// 					co5311,
// 					co5312,
// 					co5313,

// 					co631,
// 					co633,
// 					co633,
// 					co634,
// 					co635,
// 					co636,
// 					co637,
// 					co638,
// 					co639,
// 					co6310,
// 					co6311,
// 					co6312,
// 					co6313,

// 					co731,
// 					co733,
// 					co733,
// 					co734,
// 					co735,
// 					co736,
// 					co737,
// 					co738,
// 					co739,
// 					co7310,
// 					co7311,
// 					co7312,
// 					co7313,

// 					po3mapco1,
// 					po3mapco2,
// 					po3mapco3,
// 					po3mapco4,
// 					po3mapco5,
// 					po3mapco6,
// 					po3mapco7,
// 				}),
// 			});

// 			if (res.ok) {
// 				router.push("/");
// 			} else {
// 				throw new Error("Failed to create table");
// 			}
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

// 	const years = [
// 		{ key: "FIRST", label: "First Year" },
// 		{ key: "SECOND", label: "Second Year" },
// 		{ key: "THIRD", label: "Third Year" },
// 		{ key: "FOURTH", label: "Fourth Year" },
// 	];
// 	const depart = [
// 		{ key: "CSE", label: "Computer Science and Engineering" },
// 		{ key: "ENTC", label: "Electronics and Telecommunication Engineering" },
// 		{ key: "MECHANICAL", label: "Mechanical Engineering" },
// 		{ key: "ELECTRICAL", label: "Electrical Engineering" },
// 		{ key: "CIVIL", label: "Civil Engineering" },
// 	];
// 	const semester = [
// 		{ key: "FIRST", label: "First Semester" },
// 		{ key: "SECOND", label: "Second Semester" },
// 		{ key: "THIRD", label: "Third Semester" },
// 		{ key: "FOURTH", label: "Fourth Semester" },
// 		{ key: "FIFTH", label: "Fifth Semester" },
// 		{ key: "SIXTH", label: "Sixth Semester" },
// 		{ key: "SEVENTH", label: "Seventh Semester" },
// 		{ key: "EIGHTH", label: "Eighth Semester" },
// 	];

// 	const handleYearSelect = (selectedYear: any) => {
// 		setYear(selectedYear);
// 	};
// 	const handleDepartSelect = (selectedDept: any) => {
// 		setDept(selectedDept);
// 	};
// 	const handleSemesterSelect = (selectedSem: any) => {
// 		setSem(selectedSem);
// 	};

// 	return (
// 		<>
// 			<form onSubmit={handleSubmit}>
// 				<table
// 					className='  table-fixed'
// 					aria-label='Example static collection table'
// 				>
// 					<thead>
// 						<tr>
// 							<th>PO</th>
// 							<th>Competency</th>
// 							<th>Indicators</th>
// 							<th>Weight</th>
// 							<th>CO1</th>
// 							<th>CO2</th>
// 							<th>CO3</th>
// 							<th>CO4</th>
// 							<th>CO5</th>
// 							<th>CO6</th>
// 							<th>CO7</th>
// 						</tr>
// 					</thead>
// 					<tbody>
// 						{/* PO:3 */}

// 						<tr className='m-4'>
// 							<td rowSpan={13}>
// 								<Textarea
// 									readOnly
// 									value={po31}
// 									onChange={(e) => setPo31(e.target.value)}
// 									className='my-6'
// 								/>
// 							</td>
// 							<td rowSpan={6}>
// 								<Textarea
// 									readOnly
// 									value={competency31}
// 									onChange={(e) => setCompetency31(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Textarea
// 									readOnly
// 									value={indicators31}
// 									onChange={(e) => setIndicators31(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									readOnly
// 									value={weight31}
// 									onChange={(e) => setWeight31(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co131}
// 									onChange={(e) => setCo131(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co231}
// 									onChange={(e) => setCo231(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co331}
// 									onChange={(e) => setCo331(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co431}
// 									onChange={(e) => setCo431(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co531}
// 									onChange={(e) => setCo531(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co631}
// 									onChange={(e) => setCo631(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co731}
// 									onChange={(e) => setCo731(e.target.value)}
// 								/>
// 							</td>
// 						</tr>
// 						<tr className='m-4'>
// 							<td>
// 								<Textarea
// 									readOnly
// 									value={indicators33}
// 									onChange={(e) => setIndicators33(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									readOnly
// 									value={weight33}
// 									onChange={(e) => setWeight33(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co133}
// 									onChange={(e) => setCo133(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co233}
// 									onChange={(e) => setCo233(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co333}
// 									onChange={(e) => setCo333(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co433}
// 									onChange={(e) => setCo433(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co533}
// 									onChange={(e) => setCo533(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co633}
// 									onChange={(e) => setCo633(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co733}
// 									onChange={(e) => setCo733(e.target.value)}
// 								/>
// 							</td>
// 						</tr>
// 						<tr className='m-4'>
// 							<td>
// 								<Textarea
// 									readOnly
// 									value={indicators33}
// 									onChange={(e) => setIndicators33(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									readOnly
// 									value={weight33}
// 									onChange={(e) => setWeight33(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co133}
// 									onChange={(e) => setCo133(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co233}
// 									onChange={(e) => setCo233(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co333}
// 									onChange={(e) => setCo333(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co433}
// 									onChange={(e) => setCo433(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co533}
// 									onChange={(e) => setCo533(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co633}
// 									onChange={(e) => setCo633(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co733}
// 									onChange={(e) => setCo733(e.target.value)}
// 								/>
// 							</td>
// 						</tr>
// 						<tr className='m-4'>
// 							<td rowSpan={4}>
// 								<Textarea
// 									readOnly
// 									value={competency33}
// 									onChange={(e) => setCompetency33(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Textarea
// 									readOnly
// 									value={indicators34}
// 									onChange={(e) => setIndicators34(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									readOnly
// 									value={weight34}
// 									onChange={(e) => setWeight34(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co134}
// 									onChange={(e) => setCo134(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co234}
// 									onChange={(e) => setCo234(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co334}
// 									onChange={(e) => setCo334(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co434}
// 									onChange={(e) => setCo434(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co534}
// 									onChange={(e) => setCo534(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co634}
// 									onChange={(e) => setCo634(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co734}
// 									onChange={(e) => setCo734(e.target.value)}
// 								/>
// 							</td>
// 						</tr>
// 						<tr className='m-4'>
// 							<td>
// 								<Textarea
// 									readOnly
// 									value={indicators35}
// 									onChange={(e) => setIndicators35(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={weight35}
// 									readOnly
// 									onChange={(e) => setWeight35(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co135}
// 									onChange={(e) => setCo135(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co235}
// 									onChange={(e) => setCo235(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co335}
// 									onChange={(e) => setCo335(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co435}
// 									onChange={(e) => setCo435(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co535}
// 									onChange={(e) => setCo535(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co635}
// 									onChange={(e) => setCo635(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co735}
// 									onChange={(e) => setCo735(e.target.value)}
// 								/>
// 							</td>
// 						</tr>
// 						<tr className='m-4'>
// 							<td>
// 								<Textarea
// 									readOnly
// 									value={indicators36}
// 									onChange={(e) => setIndicators36(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={weight36}
// 									readOnly
// 									onChange={(e) => setWeight36(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co136}
// 									onChange={(e) => setCo136(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co236}
// 									onChange={(e) => setCo236(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co336}
// 									onChange={(e) => setCo336(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co436}
// 									onChange={(e) => setCo436(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co536}
// 									onChange={(e) => setCo536(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co636}
// 									onChange={(e) => setCo636(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co736}
// 									onChange={(e) => setCo736(e.target.value)}
// 								/>
// 							</td>
// 						</tr>
// 						<tr className='m-4'>
// 							<td>
// 								<Textarea
// 									readOnly
// 									value={indicators37}
// 									onChange={(e) => setIndicators37(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={weight37}
// 									readOnly
// 									onChange={(e) => setWeight37(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co137}
// 									onChange={(e) => setCo137(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co237}
// 									onChange={(e) => setCo237(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co337}
// 									onChange={(e) => setCo337(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co437}
// 									onChange={(e) => setCo437(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co537}
// 									onChange={(e) => setCo537(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co637}
// 									onChange={(e) => setCo637(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co737}
// 									onChange={(e) => setCo737(e.target.value)}
// 								/>
// 							</td>
// 						</tr>
// 						<tr className='m-4'>
// 							<td rowSpan={2}>
// 								<Textarea
// 									readOnly
// 									value={competency33}
// 									onChange={(e) => setCompetency33(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Textarea
// 									readOnly
// 									value={indicators38}
// 									onChange={(e) => setIndicators38(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={weight38}
// 									readOnly
// 									onChange={(e) => setWeight38(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co138}
// 									onChange={(e) => setCo138(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co238}
// 									onChange={(e) => setCo238(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co338}
// 									onChange={(e) => setCo338(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co438}
// 									onChange={(e) => setCo438(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co538}
// 									onChange={(e) => setCo538(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co638}
// 									onChange={(e) => setCo638(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co738}
// 									onChange={(e) => setCo738(e.target.value)}
// 								/>
// 							</td>
// 						</tr>
// 						<tr className='m-4'>
// 							<td>
// 								<Textarea
// 									readOnly
// 									value={indicators39}
// 									onChange={(e) => setIndicators39(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={weight39}
// 									readOnly
// 									onChange={(e) => setWeight39(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co139}
// 									onChange={(e) => setCo139(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co239}
// 									onChange={(e) => setCo239(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co339}
// 									onChange={(e) => setCo339(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co439}
// 									onChange={(e) => setCo439(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co539}
// 									onChange={(e) => setCo539(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co639}
// 									onChange={(e) => setCo639(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co739}
// 									onChange={(e) => setCo739(e.target.value)}
// 								/>
// 							</td>
// 						</tr>
// 						<tr className='m-4'>
// 							<td rowSpan={4}>
// 								<Textarea
// 									readOnly
// 									value={competency34}
// 									onChange={(e) => setCompetency34(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Textarea
// 									readOnly
// 									value={indicators310}
// 									onChange={(e) => setIndicators310(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={weight310}
// 									readOnly
// 									onChange={(e) => setWeight310(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co1310}
// 									onChange={(e) => setCo1310(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co2310}
// 									onChange={(e) => setCo2310(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co3310}
// 									onChange={(e) => setCo3310(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co4310}
// 									onChange={(e) => setCo4310(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co5310}
// 									onChange={(e) => setCo5310(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co6310}
// 									onChange={(e) => setCo6310(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co7310}
// 									onChange={(e) => setCo7310(e.target.value)}
// 								/>
// 							</td>
// 						</tr>
// 						<tr className='m-4'>
// 							<td>
// 								<Textarea
// 									readOnly
// 									value={indicators311}
// 									onChange={(e) => setIndicators311(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={weight311}
// 									readOnly
// 									onChange={(e) => setWeight311(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co1311}
// 									onChange={(e) => setCo1311(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co2311}
// 									onChange={(e) => setCo2311(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co3311}
// 									onChange={(e) => setCo3311(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co4311}
// 									onChange={(e) => setCo4311(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co5311}
// 									onChange={(e) => setCo5311(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co6311}
// 									onChange={(e) => setCo6311(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co7311}
// 									onChange={(e) => setCo7311(e.target.value)}
// 								/>
// 							</td>
// 						</tr>
// 						<tr className='m-4'>
// 							<td>
// 								<Textarea
// 									readOnly
// 									value={indicators312}
// 									onChange={(e) => setIndicators312(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={weight312}
// 									readOnly
// 									onChange={(e) => setWeight312(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co1312}
// 									onChange={(e) => setCo1312(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co2312}
// 									onChange={(e) => setCo2312(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co3312}
// 									onChange={(e) => setCo3312(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co4312}
// 									onChange={(e) => setCo4312(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co5312}
// 									onChange={(e) => setCo5312(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co6312}
// 									onChange={(e) => setCo6312(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co7312}
// 									onChange={(e) => setCo7312(e.target.value)}
// 								/>
// 							</td>
// 						</tr>
// 						<tr className='m-4'>
// 							<td>
// 								<Textarea
// 									readOnly
// 									value={indicators313}
// 									onChange={(e) => setIndicators313(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={weight313}
// 									readOnly
// 									onChange={(e) => setWeight313(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co1313}
// 									onChange={(e) => setCo1313(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co2313}
// 									onChange={(e) => setCo2313(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co3313}
// 									onChange={(e) => setCo3313(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co4313}
// 									onChange={(e) => setCo4313(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co5313}
// 									onChange={(e) => setCo5313(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co6313}
// 									onChange={(e) => setCo6313(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={co7313}
// 									onChange={(e) => setCo7313(e.target.value)}
// 								/>
// 							</td>
// 						</tr>
// 						<tr className='m-4'>
// 							<td colSpan={4}>
// 								<Textarea
// 									readOnly
// 									value='PO3 : Mapping Level'
// 									className='my-6'
// 								/>
// 							</td>

// 							<td>
// 								<Input
// 									type='number'
// 									value={po3mapco1.toString()}
// 									readOnly
// 									onChange={(e) => setPo3mapco1(e.target.value)}
// 								/>
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={po3mapco2.toString()}
// 									readOnly
// 									onChange={(e) => setPo3mapco2(e.target.value)}
// 								/>{" "}
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={po3mapco3.toString()}
// 									readOnly
// 									onChange={(e) => setPo3mapco3(e.target.value)}
// 								/>{" "}
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={po3mapco4.toString()}
// 									readOnly
// 									onChange={(e) => setPo3mapco4(e.target.value)}
// 								/>{" "}
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={po3mapco5.toString()}
// 									readOnly
// 									onChange={(e) => setPo3mapco5(e.target.value)}
// 								/>{" "}
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={po3mapco6.toString()}
// 									readOnly
// 									onChange={(e) => setPo3mapco6(e.target.value)}
// 								/>{" "}
// 							</td>
// 							<td>
// 								<Input
// 									type='number'
// 									value={po3mapco7.toString()}
// 									readOnly
// 									onChange={(e) => setPo3mapco7(e.target.value)}
// 								/>{" "}
// 							</td>
// 						</tr>
// 					</tbody>
// 				</table>

// 				<Button type='submit'>Submit</Button>
// 			</form>
// 		</>
// 	);
// }
