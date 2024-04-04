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

	// Effect to call calculatePo1mapco1 whenever any of the co variables change
	useEffect(() => {
		calculatePo1mapco1();
		calculatePo1mapco2();
		calculatePo1mapco3();
		calculatePo1mapco4();
		calculatePo1mapco5();
		calculatePo1mapco6();
		calculatePo1mapco7();

		calculatePo2mapco1();
		calculatePo2mapco2();
		calculatePo2mapco3();
		calculatePo2mapco4();
		calculatePo2mapco5();
		calculatePo2mapco6();
		calculatePo2mapco7();
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
			// const res = await fetch("http://localhost:3000/api/table", {
			const res = await fetch("https://copo-attainment.vercel.app/api/table", {
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

	// const [items, setItems] = useState([
	// 	{ key: "FIRST", label: "First Year" },
	// 	{ key: "SECOND", label: "Second Year" },
	// 	{ key: "THIRD", label: "Third Year" },
	// 	{ key: "FOURTH", label: "Fourth Year" },
	// ]);

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
					</tbody>
				</table>

				<Button type='submit'>Submit</Button>
			</form>
		</>
	);
}
