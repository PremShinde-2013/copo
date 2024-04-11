"use client";
import { Button, Input, Link, Spinner, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const TablePo2 = ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const [table, setTable] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [editedTable, setEditedTable] = useState<any>(null);

	useEffect(() => {
		const fetchTableData = async () => {
			try {
				const response = await fetch(`/api/table/${id}`);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const data = await response.json();
				setTable(data.table);
				setEditedTable(data.table);
				setLoading(false); // Move setLoading to after state updates
			} catch (error) {
				setError("Error fetching table data");
				setLoading(false); // Also move setLoading here in case of error
			}
		};

		fetchTableData();
	}, [id]);

	// *********************************    Po 11  ***************************************************
	// Define the calculation function
	const calculatePo11mapco1 = () => {
		const sumCo =
			parseInt(editedTable?.co1111 || 0) +
			parseInt(editedTable?.co1112 || 0) +
			parseInt(editedTable?.co1113 || 0) +
			parseInt(editedTable?.co1114 || 0) +
			parseInt(editedTable?.co1115 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po11mapco1: calculatedValue,
		}));
	};
	const calculatePo11mapco2 = () => {
		const sumCo =
			parseInt(editedTable?.co2111 || 0) +
			parseInt(editedTable?.co2112 || 0) +
			parseInt(editedTable?.co2113 || 0) +
			parseInt(editedTable?.co2114 || 0) +
			parseInt(editedTable?.co2115 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po11mapco2: calculatedValue,
		}));
	};
	const calculatePo11mapco3 = () => {
		const sumCo =
			parseInt(editedTable?.co3111 || 0) +
			parseInt(editedTable?.co3112 || 0) +
			parseInt(editedTable?.co3113 || 0) +
			parseInt(editedTable?.co3114 || 0) +
			parseInt(editedTable?.co3115 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po11mapco3: calculatedValue,
		}));
	};
	const calculatePo11mapco4 = () => {
		const sumCo =
			parseInt(editedTable?.co4111 || 0) +
			parseInt(editedTable?.co4112 || 0) +
			parseInt(editedTable?.co4113 || 0) +
			parseInt(editedTable?.co4114 || 0) +
			parseInt(editedTable?.co4115 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po11mapco4: calculatedValue,
		}));
	};
	const calculatePo11mapco5 = () => {
		const sumCo =
			parseInt(editedTable?.co5111 || 0) +
			parseInt(editedTable?.co5112 || 0) +
			parseInt(editedTable?.co5113 || 0) +
			parseInt(editedTable?.co5114 || 0) +
			parseInt(editedTable?.co5115 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po11mapco5: calculatedValue,
		}));
	};
	const calculatePo11mapco6 = () => {
		const sumCo =
			parseInt(editedTable?.co6111 || 0) +
			parseInt(editedTable?.co6112 || 0) +
			parseInt(editedTable?.co6113 || 0) +
			parseInt(editedTable?.co6114 || 0) +
			parseInt(editedTable?.co6115 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po11mapco6: calculatedValue,
		}));
	};
	const calculatePo11mapco7 = () => {
		const sumCo =
			parseInt(editedTable?.co7111 || 0) +
			parseInt(editedTable?.co7112 || 0) +
			parseInt(editedTable?.co7113 || 0) +
			parseInt(editedTable?.co7114 || 0) +
			parseInt(editedTable?.co7115 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po11mapco7: calculatedValue,
		}));
	};
	// Call the calculation function whenever any of the co values change
	useEffect(() => {
		//  ************************************      po2           *******************************

		calculatePo11mapco1();
		calculatePo11mapco2();
		calculatePo11mapco3();
		calculatePo11mapco4();
		calculatePo11mapco5();
		calculatePo11mapco6();
		calculatePo11mapco7();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		editedTable?.co111,
		editedTable?.co112,
		editedTable?.co113,
		editedTable?.co114,
		editedTable?.co115,
		editedTable?.co211,
		editedTable?.co212,
		editedTable?.co213,
		editedTable?.co214,
		editedTable?.co215,
		editedTable?.co311,
		editedTable?.co312,
		editedTable?.co313,
		editedTable?.co314,
		editedTable?.co315,
		editedTable?.co411,
		editedTable?.co412,
		editedTable?.co413,
		editedTable?.co414,
		editedTable?.co415,
		editedTable?.co511,
		editedTable?.co512,
		editedTable?.co513,
		editedTable?.co514,
		editedTable?.co515,
		editedTable?.co611,
		editedTable?.co612,
		editedTable?.co613,
		editedTable?.co614,
		editedTable?.co615,
		editedTable?.co711,
		editedTable?.co712,
		editedTable?.co713,
		editedTable?.co714,
		editedTable?.co715,

		editedTable?.co121,
		editedTable?.co122,
		editedTable?.co123,
		editedTable?.co124,
		editedTable?.co125,
		editedTable?.co126,
		editedTable?.co127,
		editedTable?.co128,
		editedTable?.co129,
		editedTable?.co1210,
		editedTable?.co1211,
		editedTable?.co1212,
		editedTable?.co1213,

		editedTable?.co221,
		editedTable?.co222,
		editedTable?.co223,
		editedTable?.co224,
		editedTable?.co225,
		editedTable?.co226,
		editedTable?.co227,
		editedTable?.co228,
		editedTable?.co229,
		editedTable?.co2210,
		editedTable?.co2211,
		editedTable?.co2212,
		editedTable?.co2213,

		editedTable?.co321,
		editedTable?.co322,
		editedTable?.co323,
		editedTable?.co324,
		editedTable?.co325,
		editedTable?.co326,
		editedTable?.co327,
		editedTable?.co328,
		editedTable?.co329,
		editedTable?.co3210,
		editedTable?.co3211,
		editedTable?.co3212,
		editedTable?.co3213,

		editedTable?.co421,
		editedTable?.co422,
		editedTable?.co423,
		editedTable?.co424,
		editedTable?.co425,
		editedTable?.co426,
		editedTable?.co427,
		editedTable?.co428,
		editedTable?.co429,
		editedTable?.co4210,
		editedTable?.co4211,
		editedTable?.co4212,
		editedTable?.co4213,

		editedTable?.co521,
		editedTable?.co522,
		editedTable?.co523,
		editedTable?.co524,
		editedTable?.co525,
		editedTable?.co526,
		editedTable?.co527,
		editedTable?.co528,
		editedTable?.co529,
		editedTable?.co5210,
		editedTable?.co5211,
		editedTable?.co5212,
		editedTable?.co5213,

		editedTable?.co621,
		editedTable?.co622,
		editedTable?.co623,
		editedTable?.co624,
		editedTable?.co625,
		editedTable?.co626,
		editedTable?.co627,
		editedTable?.co628,
		editedTable?.co629,
		editedTable?.co6210,
		editedTable?.co6211,
		editedTable?.co6212,
		editedTable?.co6213,

		editedTable?.co721,
		editedTable?.co722,
		editedTable?.co723,
		editedTable?.co724,
		editedTable?.co725,
		editedTable?.co726,
		editedTable?.co727,
		editedTable?.co728,
		editedTable?.co729,
		editedTable?.co7210,
		editedTable?.co7211,
		editedTable?.co7212,
		editedTable?.co7213,

		// po:3

		editedTable?.co131,
		editedTable?.co132,
		editedTable?.co133,
		editedTable?.co134,
		editedTable?.co135,
		editedTable?.co136,
		editedTable?.co137,
		editedTable?.co138,
		editedTable?.co139,
		editedTable?.co1310,
		editedTable?.co1311,
		editedTable?.co1312,
		editedTable?.co1313,

		editedTable?.co231,
		editedTable?.co232,
		editedTable?.co233,
		editedTable?.co234,
		editedTable?.co235,
		editedTable?.co236,
		editedTable?.co237,
		editedTable?.co238,
		editedTable?.co239,
		editedTable?.co2310,
		editedTable?.co2311,
		editedTable?.co2312,
		editedTable?.co2313,

		editedTable?.co331,
		editedTable?.co332,
		editedTable?.co333,
		editedTable?.co334,
		editedTable?.co335,
		editedTable?.co336,
		editedTable?.co337,
		editedTable?.co338,
		editedTable?.co339,
		editedTable?.co3310,
		editedTable?.co3311,
		editedTable?.co3312,
		editedTable?.co3313,

		editedTable?.co431,
		editedTable?.co432,
		editedTable?.co433,
		editedTable?.co434,
		editedTable?.co435,
		editedTable?.co436,
		editedTable?.co437,
		editedTable?.co438,
		editedTable?.co439,
		editedTable?.co4310,
		editedTable?.co4311,
		editedTable?.co4312,
		editedTable?.co4313,

		editedTable?.co531,
		editedTable?.co532,
		editedTable?.co533,
		editedTable?.co534,
		editedTable?.co535,
		editedTable?.co536,
		editedTable?.co537,
		editedTable?.co538,
		editedTable?.co539,
		editedTable?.co5310,
		editedTable?.co5311,
		editedTable?.co5312,
		editedTable?.co5313,

		editedTable?.co631,
		editedTable?.co632,
		editedTable?.co633,
		editedTable?.co634,
		editedTable?.co635,
		editedTable?.co636,
		editedTable?.co637,
		editedTable?.co638,
		editedTable?.co639,
		editedTable?.co6310,
		editedTable?.co6311,
		editedTable?.co6312,
		editedTable?.co6313,

		editedTable?.co731,
		editedTable?.co732,
		editedTable?.co733,
		editedTable?.co734,
		editedTable?.co735,
		editedTable?.co736,
		editedTable?.co737,
		editedTable?.co738,
		editedTable?.co739,
		editedTable?.co7310,
		editedTable?.co7311,
		editedTable?.co7312,
		editedTable?.co7313,

		// ************************ PO:4  ***************************************

		editedTable?.co141,
		editedTable?.co142,
		editedTable?.co143,
		editedTable?.co144,
		editedTable?.co145,
		editedTable?.co146,
		editedTable?.co147,
		editedTable?.co148,
		editedTable?.co149,
		editedTable?.co1410,

		editedTable?.co241,
		editedTable?.co242,
		editedTable?.co243,
		editedTable?.co244,
		editedTable?.co245,
		editedTable?.co246,
		editedTable?.co247,
		editedTable?.co248,
		editedTable?.co249,
		editedTable?.co2410,

		editedTable?.co341,
		editedTable?.co342,
		editedTable?.co343,
		editedTable?.co344,
		editedTable?.co345,
		editedTable?.co346,
		editedTable?.co347,
		editedTable?.co348,
		editedTable?.co349,
		editedTable?.co3410,

		editedTable?.co441,
		editedTable?.co442,
		editedTable?.co443,
		editedTable?.co444,
		editedTable?.co445,
		editedTable?.co446,
		editedTable?.co447,
		editedTable?.co448,
		editedTable?.co449,
		editedTable?.co4410,

		editedTable?.co541,
		editedTable?.co542,
		editedTable?.co543,
		editedTable?.co544,
		editedTable?.co545,
		editedTable?.co546,
		editedTable?.co547,
		editedTable?.co548,
		editedTable?.co549,
		editedTable?.co5410,

		editedTable?.co641,
		editedTable?.co642,
		editedTable?.co643,
		editedTable?.co644,
		editedTable?.co645,
		editedTable?.co646,
		editedTable?.co647,
		editedTable?.co648,
		editedTable?.co649,
		editedTable?.co6410,

		editedTable?.co741,
		editedTable?.co742,
		editedTable?.co743,
		editedTable?.co744,
		editedTable?.co745,
		editedTable?.co746,
		editedTable?.co747,
		editedTable?.co748,
		editedTable?.co749,
		editedTable?.co7410,

		// ************************ PO:5  ***************************************

		editedTable?.co151,
		editedTable?.co152,
		editedTable?.co153,
		editedTable?.co154,
		editedTable?.co155,
		editedTable?.co156,

		editedTable?.co251,
		editedTable?.co252,
		editedTable?.co253,
		editedTable?.co254,
		editedTable?.co255,
		editedTable?.co256,

		editedTable?.co351,
		editedTable?.co352,
		editedTable?.co353,
		editedTable?.co354,
		editedTable?.co355,
		editedTable?.co356,

		editedTable?.co451,
		editedTable?.co452,
		editedTable?.co453,
		editedTable?.co454,
		editedTable?.co455,
		editedTable?.co456,

		editedTable?.co551,
		editedTable?.co552,
		editedTable?.co553,
		editedTable?.co554,
		editedTable?.co555,
		editedTable?.co556,

		editedTable?.co651,
		editedTable?.co652,
		editedTable?.co653,
		editedTable?.co654,
		editedTable?.co655,
		editedTable?.co656,

		editedTable?.co751,
		editedTable?.co752,
		editedTable?.co753,
		editedTable?.co754,
		editedTable?.co755,
		editedTable?.co756,

		// ************************ PO:6  ***************************************

		editedTable?.co161,
		editedTable?.co162,

		editedTable?.co261,
		editedTable?.co262,

		editedTable?.co361,
		editedTable?.co362,

		editedTable?.co461,
		editedTable?.co462,

		editedTable?.co561,
		editedTable?.co562,

		editedTable?.co661,
		editedTable?.co662,

		editedTable?.co761,
		editedTable?.co762,

		// ************************ PO:7  ***************************************

		editedTable?.co171,
		editedTable?.co172,
		editedTable?.co173,
		editedTable?.co174,

		editedTable?.co271,
		editedTable?.co272,
		editedTable?.co273,
		editedTable?.co274,

		editedTable?.co371,
		editedTable?.co372,
		editedTable?.co373,
		editedTable?.co374,

		editedTable?.co471,
		editedTable?.co472,
		editedTable?.co473,
		editedTable?.co474,

		editedTable?.co571,
		editedTable?.co572,
		editedTable?.co573,
		editedTable?.co574,

		editedTable?.co671,
		editedTable?.co672,
		editedTable?.co673,
		editedTable?.co674,

		editedTable?.co771,
		editedTable?.co772,
		editedTable?.co773,
		editedTable?.co774,

		// ************************ PO:8  ***************************************

		editedTable?.co181,
		editedTable?.co182,
		editedTable?.co183,

		editedTable?.co281,
		editedTable?.co282,
		editedTable?.co283,

		editedTable?.co381,
		editedTable?.co382,
		editedTable?.co383,

		editedTable?.co481,
		editedTable?.co482,
		editedTable?.co483,

		editedTable?.co581,
		editedTable?.co582,
		editedTable?.co583,

		editedTable?.co681,
		editedTable?.co682,
		editedTable?.co683,

		editedTable?.co781,
		editedTable?.co782,
		editedTable?.co783,

		// ************************ PO:9  ***************************************

		editedTable?.co191,
		editedTable?.co192,
		editedTable?.co193,
		editedTable?.co194,
		editedTable?.co195,
		editedTable?.co196,
		editedTable?.co197,

		editedTable?.co291,
		editedTable?.co292,
		editedTable?.co293,
		editedTable?.co294,
		editedTable?.co295,
		editedTable?.co296,
		editedTable?.co297,

		editedTable?.co391,
		editedTable?.co392,
		editedTable?.co393,
		editedTable?.co394,
		editedTable?.co395,
		editedTable?.co396,
		editedTable?.co397,

		editedTable?.co491,
		editedTable?.co492,
		editedTable?.co493,
		editedTable?.co494,
		editedTable?.co495,
		editedTable?.co496,
		editedTable?.co497,

		editedTable?.co591,
		editedTable?.co592,
		editedTable?.co593,
		editedTable?.co594,
		editedTable?.co595,
		editedTable?.co596,
		editedTable?.co597,

		editedTable?.co691,
		editedTable?.co692,
		editedTable?.co693,
		editedTable?.co694,
		editedTable?.co695,
		editedTable?.co696,
		editedTable?.co697,

		editedTable?.co791,
		editedTable?.co792,
		editedTable?.co793,
		editedTable?.co794,
		editedTable?.co795,
		editedTable?.co796,
		editedTable?.co797,

		// ************************ PO: 10  ***************************************

		editedTable?.co1101,
		editedTable?.co1102,
		editedTable?.co1103,
		editedTable?.co1104,
		editedTable?.co1105,
		editedTable?.co1106,
		editedTable?.co1107,

		editedTable?.co2101,
		editedTable?.co2102,
		editedTable?.co2103,
		editedTable?.co2104,
		editedTable?.co2105,
		editedTable?.co2106,
		editedTable?.co2107,

		editedTable?.co3101,
		editedTable?.co3102,
		editedTable?.co3103,
		editedTable?.co3104,
		editedTable?.co3105,
		editedTable?.co3106,
		editedTable?.co3107,

		editedTable?.co4101,
		editedTable?.co4102,
		editedTable?.co4103,
		editedTable?.co4104,
		editedTable?.co4105,
		editedTable?.co4106,
		editedTable?.co4107,

		editedTable?.co5101,
		editedTable?.co5102,
		editedTable?.co5103,
		editedTable?.co5104,
		editedTable?.co5105,
		editedTable?.co5106,
		editedTable?.co5107,

		editedTable?.co6101,
		editedTable?.co6102,
		editedTable?.co6103,
		editedTable?.co6104,
		editedTable?.co6105,
		editedTable?.co6106,
		editedTable?.co6107,

		editedTable?.co7101,
		editedTable?.co7102,
		editedTable?.co7103,
		editedTable?.co7104,
		editedTable?.co7105,
		editedTable?.co7106,
		editedTable?.co7107,

		// ************************ PO: 11  ***************************************

		editedTable?.co1111,
		editedTable?.co1112,
		editedTable?.co1113,
		editedTable?.co1114,
		editedTable?.co1115,

		editedTable?.co2111,
		editedTable?.co2112,
		editedTable?.co2113,
		editedTable?.co2114,
		editedTable?.co2115,

		editedTable?.co3111,
		editedTable?.co3112,
		editedTable?.co3113,
		editedTable?.co3114,
		editedTable?.co3115,

		editedTable?.co4111,
		editedTable?.co4112,
		editedTable?.co4113,
		editedTable?.co4114,
		editedTable?.co4115,

		editedTable?.co5111,
		editedTable?.co5112,
		editedTable?.co5113,
		editedTable?.co5114,
		editedTable?.co5115,

		editedTable?.co6111,
		editedTable?.co6112,
		editedTable?.co6113,
		editedTable?.co6114,
		editedTable?.co6115,

		editedTable?.co7111,
		editedTable?.co7112,
		editedTable?.co7113,
		editedTable?.co7114,
		editedTable?.co7115,

		// ************************ PO: 12  ***************************************

		editedTable?.co1121,
		editedTable?.co1122,
		editedTable?.co1123,
		editedTable?.co1124,
		editedTable?.co1125,
		editedTable?.co1126,

		editedTable?.co2121,
		editedTable?.co2122,
		editedTable?.co2123,
		editedTable?.co2124,
		editedTable?.co2125,
		editedTable?.co2126,

		editedTable?.co3121,
		editedTable?.co3122,
		editedTable?.co3123,
		editedTable?.co3124,
		editedTable?.co3125,
		editedTable?.co3126,

		editedTable?.co4121,
		editedTable?.co4122,
		editedTable?.co4123,
		editedTable?.co4124,
		editedTable?.co4125,
		editedTable?.co4126,

		editedTable?.co5121,
		editedTable?.co5122,
		editedTable?.co5123,
		editedTable?.co5124,
		editedTable?.co5125,
		editedTable?.co5126,

		editedTable?.co6121,
		editedTable?.co6122,
		editedTable?.co6123,
		editedTable?.co6124,
		editedTable?.co6125,
		editedTable?.co6126,

		editedTable?.co7121,
		editedTable?.co7122,
		editedTable?.co7123,
		editedTable?.co7124,
		editedTable?.co7125,
		editedTable?.co7126,

		// ******************************* PSO:1 *****************************

		editedTable?.psoco111,
		editedTable?.psoco112,
		editedTable?.psoco113,
		editedTable?.psoco114,
		editedTable?.psoco115,

		editedTable?.psoco211,
		editedTable?.psoco212,
		editedTable?.psoco213,
		editedTable?.psoco214,
		editedTable?.psoco215,

		editedTable?.psoco311,
		editedTable?.psoco312,
		editedTable?.psoco313,
		editedTable?.psoco314,
		editedTable?.psoco315,

		editedTable?.psoco411,
		editedTable?.psoco412,
		editedTable?.psoco413,
		editedTable?.psoco414,
		editedTable?.psoco415,

		editedTable?.psoco511,
		editedTable?.psoco512,
		editedTable?.psoco513,
		editedTable?.psoco514,
		editedTable?.psoco515,

		editedTable?.psoco611,
		editedTable?.psoco612,
		editedTable?.psoco613,
		editedTable?.psoco614,
		editedTable?.psoco615,

		editedTable?.psoco711,
		editedTable?.psoco712,
		editedTable?.psoco713,
		editedTable?.psoco714,
		editedTable?.psoco715,

		// ******************************* editedTable?.PSO:2 *****************************

		editedTable?.psoco121,
		editedTable?.psoco122,
		editedTable?.psoco123,
		editedTable?.psoco124,

		editedTable?.psoco221,
		editedTable?.psoco222,
		editedTable?.psoco223,
		editedTable?.psoco224,

		editedTable?.psoco321,
		editedTable?.psoco322,
		editedTable?.psoco323,
		editedTable?.psoco324,

		editedTable?.psoco421,
		editedTable?.psoco422,
		editedTable?.psoco423,
		editedTable?.psoco424,

		editedTable?.psoco521,
		editedTable?.psoco522,
		editedTable?.psoco523,
		editedTable?.psoco524,

		editedTable?.psoco621,
		editedTable?.psoco622,
		editedTable?.psoco623,
		editedTable?.psoco624,

		editedTable?.psoco721,
		editedTable?.psoco722,
		editedTable?.psoco723,
		editedTable?.psoco724,

		// ******************************* editedTable?.PSO:3 *****************************

		editedTable?.psoco131,
		editedTable?.psoco132,
		editedTable?.psoco133,
		editedTable?.psoco134,

		editedTable?.psoco231,
		editedTable?.psoco232,
		editedTable?.psoco233,
		editedTable?.psoco234,

		editedTable?.psoco331,
		editedTable?.psoco332,
		editedTable?.psoco333,
		editedTable?.psoco334,

		editedTable?.psoco431,
		editedTable?.psoco432,
		editedTable?.psoco433,
		editedTable?.psoco434,

		editedTable?.psoco531,
		editedTable?.psoco532,
		editedTable?.psoco533,
		editedTable?.psoco534,

		editedTable?.psoco631,
		editedTable?.psoco632,
		editedTable?.psoco633,
		editedTable?.psoco634,

		editedTable?.psoco731,
		editedTable?.psoco732,
		editedTable?.psoco733,
		editedTable?.psoco734,
	]);

	// **************************    PO:11     *************************************

	const handleCo1111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1111: e.target.value,
		}));
	};
	const handleCo2111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2111: e.target.value,
		}));
	};
	const handleCo3111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3111: e.target.value,
		}));
	};
	const handleCo4111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4111: e.target.value,
		}));
	};
	const handleCo5111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5111: e.target.value,
		}));
	};
	const handleCo6111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6111: e.target.value,
		}));
	};
	const handleCo7111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7111: e.target.value,
		}));
	};

	const handleCo1112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1112: e.target.value,
		}));
	};
	const handleCo2112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2112: e.target.value,
		}));
	};
	const handleCo3112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3112: e.target.value,
		}));
	};
	const handleCo4112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4112: e.target.value,
		}));
	};
	const handleCo5112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5112: e.target.value,
		}));
	};
	const handleCo6112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6112: e.target.value,
		}));
	};
	const handleCo7112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7112: e.target.value,
		}));
	};

	const handleCo1113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1113: e.target.value,
		}));
	};
	const handleCo2113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2113: e.target.value,
		}));
	};
	const handleCo3113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3113: e.target.value,
		}));
	};
	const handleCo4113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4113: e.target.value,
		}));
	};
	const handleCo5113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5113: e.target.value,
		}));
	};
	const handleCo6113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6113: e.target.value,
		}));
	};
	const handleCo7113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7113: e.target.value,
		}));
	};

	const handleCo1114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1114: e.target.value,
		}));
	};
	const handleCo2114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2114: e.target.value,
		}));
	};
	const handleCo3114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3114: e.target.value,
		}));
	};
	const handleCo4114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4114: e.target.value,
		}));
	};
	const handleCo5114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5114: e.target.value,
		}));
	};
	const handleCo6114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6114: e.target.value,
		}));
	};
	const handleCo7114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7114: e.target.value,
		}));
	};

	const handleCo1115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1115: e.target.value,
		}));
	};
	const handleCo2115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2115: e.target.value,
		}));
	};
	const handleCo3115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3115: e.target.value,
		}));
	};
	const handleCo4115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4115: e.target.value,
		}));
	};
	const handleCo5115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5115: e.target.value,
		}));
	};
	const handleCo6115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6115: e.target.value,
		}));
	};
	const handleCo7115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7115: e.target.value,
		}));
	};

	const handleSaveChanges = async () => {
		try {
			const response = await fetch(`/api/table/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(editedTable),
			});
			if (!response.ok) {
				throw new Error("Failed to save changes");
			}
			toast.success("Changes saved successfully");
		} catch (error) {
			console.error("Error saving changes:", error);
			toast.error("Failed to save changes");
		}
	};

	if (loading) {
		return (
			<div className='flex justify-center items-center w-full h-full'>
				{" "}
				<Spinner />
			</div>
		);
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<div className='overflow-x-auto'>
			<table
				className='  min-w-full divide-y divide-gray-200   mt-20 '
				aria-label='Example static collection table'
			>
				<thead className=''>
					<tr>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							PO
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							Competency
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							Indicators
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							Weight
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							CO1
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							CO2
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							CO3
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							CO4
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							CO5
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							CO6
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							CO7
						</th>
					</tr>
				</thead>
				<tbody>
					{/* **************************************       PO:11        ****************************************************/}

					<tr className='m-4'>
						<td rowSpan={5}>
							<Textarea readOnly value={editedTable?.po111} className='my-6' />
						</td>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency111} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators111} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight111} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1111}
								onChange={handleCo1111Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2111}
								onChange={handleCo2111Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3111}
								onChange={handleCo3111Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4111}
								onChange={handleCo4111Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5111}
								onChange={handleCo5111Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6111}
								onChange={handleCo6111Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7111}
								onChange={handleCo7111Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators112} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight112} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1112}
								onChange={handleCo1112Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2112}
								onChange={handleCo2112Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3112}
								onChange={handleCo3112Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4112}
								onChange={handleCo4112Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5112}
								onChange={handleCo5112Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6112}
								onChange={handleCo6112Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7112}
								onChange={handleCo7112Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.competency112} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators113} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight113} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1113}
								onChange={handleCo1113Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2113}
								onChange={handleCo2113Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3113}
								onChange={handleCo3113Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4113}
								onChange={handleCo4113Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5113}
								onChange={handleCo5113Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6113}
								onChange={handleCo6113Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7113}
								onChange={handleCo7113Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency113} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators114} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight114} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1114}
								onChange={handleCo1114Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2114}
								onChange={handleCo2114Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3114}
								onChange={handleCo3114Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4114}
								onChange={handleCo4114Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5114}
								onChange={handleCo5114Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6114}
								onChange={handleCo6114Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7114}
								onChange={handleCo7114Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators115} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight115} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1115}
								onChange={handleCo1115Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2115}
								onChange={handleCo2115Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3115}
								onChange={handleCo3115Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4115}
								onChange={handleCo4115Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5115}
								onChange={handleCo5115Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6115}
								onChange={handleCo6115Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7115}
								onChange={handleCo7115Change}
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
							<Input type='number' value={editedTable?.po11mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.po11mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po11mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po11mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po11mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po11mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po11mapco7} readOnly />{" "}
						</td>
					</tr>
				</tbody>
			</table>
			<Button onClick={handleSaveChanges}>Save Changes</Button>
		</div>
	);
};

export default TablePo2;
