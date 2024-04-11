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

	// *********************************    Po 10  ***************************************************
	// Define the calculation function
	const calculatePo10mapco1 = () => {
		const sumCo =
			parseInt(editedTable?.co1101 || 0) +
			parseInt(editedTable?.co1102 || 0) +
			parseInt(editedTable?.co1103 || 0) +
			parseInt(editedTable?.co1104 || 0) +
			parseInt(editedTable?.co1105 || 0) +
			parseInt(editedTable?.co1106 || 0) +
			parseInt(editedTable?.co1107 || 0);
		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po10mapco1: calculatedValue,
		}));
	};
	const calculatePo10mapco2 = () => {
		const sumCo =
			parseInt(editedTable?.co2101 || 0) +
			parseInt(editedTable?.co2102 || 0) +
			parseInt(editedTable?.co2103 || 0) +
			parseInt(editedTable?.co2104 || 0) +
			parseInt(editedTable?.co2105 || 0) +
			parseInt(editedTable?.co2106 || 0) +
			parseInt(editedTable?.co2107 || 0);
		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po10mapco2: calculatedValue,
		}));
	};
	const calculatePo10mapco3 = () => {
		const sumCo =
			parseInt(editedTable?.co3101 || 0) +
			parseInt(editedTable?.co3102 || 0) +
			parseInt(editedTable?.co3103 || 0) +
			parseInt(editedTable?.co3104 || 0) +
			parseInt(editedTable?.co3105 || 0) +
			parseInt(editedTable?.co3106 || 0) +
			parseInt(editedTable?.co3107 || 0);
		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po10mapco3: calculatedValue,
		}));
	};
	const calculatePo10mapco4 = () => {
		const sumCo =
			parseInt(editedTable?.co4101 || 0) +
			parseInt(editedTable?.co4102 || 0) +
			parseInt(editedTable?.co4103 || 0) +
			parseInt(editedTable?.co4104 || 0) +
			parseInt(editedTable?.co4105 || 0) +
			parseInt(editedTable?.co4106 || 0) +
			parseInt(editedTable?.co4107 || 0);
		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po10mapco4: calculatedValue,
		}));
	};
	const calculatePo10mapco5 = () => {
		const sumCo =
			parseInt(editedTable?.co5101 || 0) +
			parseInt(editedTable?.co5102 || 0) +
			parseInt(editedTable?.co5103 || 0) +
			parseInt(editedTable?.co5104 || 0) +
			parseInt(editedTable?.co5105 || 0) +
			parseInt(editedTable?.co5106 || 0) +
			parseInt(editedTable?.co5107 || 0);
		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po10mapco5: calculatedValue,
		}));
	};
	const calculatePo10mapco6 = () => {
		const sumCo =
			parseInt(editedTable?.co6101 || 0) +
			parseInt(editedTable?.co6102 || 0) +
			parseInt(editedTable?.co6103 || 0) +
			parseInt(editedTable?.co6104 || 0) +
			parseInt(editedTable?.co6105 || 0) +
			parseInt(editedTable?.co6106 || 0) +
			parseInt(editedTable?.co6107 || 0);
		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po10mapco6: calculatedValue,
		}));
	};
	const calculatePo10mapco7 = () => {
		const sumCo =
			parseInt(editedTable?.co7101 || 0) +
			parseInt(editedTable?.co7102 || 0) +
			parseInt(editedTable?.co7103 || 0) +
			parseInt(editedTable?.co7104 || 0) +
			parseInt(editedTable?.co7105 || 0) +
			parseInt(editedTable?.co7106 || 0) +
			parseInt(editedTable?.co7107 || 0);
		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po10mapco7: calculatedValue,
		}));
	};

	// Call the calculation function whenever any of the co values change
	useEffect(() => {
		//  ************************************      po2           *******************************

		calculatePo10mapco1();
		calculatePo10mapco2();
		calculatePo10mapco3();
		calculatePo10mapco4();
		calculatePo10mapco5();
		calculatePo10mapco6();
		calculatePo10mapco7();

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
	// **************************    PO:10     *************************************

	const handleCo1101Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1101: e.target.value,
		}));
	};
	const handleCo2101Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2101: e.target.value,
		}));
	};
	const handleCo3101Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3101: e.target.value,
		}));
	};
	const handleCo4101Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4101: e.target.value,
		}));
	};
	const handleCo5101Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5101: e.target.value,
		}));
	};
	const handleCo6101Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6101: e.target.value,
		}));
	};
	const handleCo7101Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7101: e.target.value,
		}));
	};

	const handleCo1102Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1102: e.target.value,
		}));
	};
	const handleCo2102Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2102: e.target.value,
		}));
	};
	const handleCo3102Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3102: e.target.value,
		}));
	};
	const handleCo4102Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4102: e.target.value,
		}));
	};
	const handleCo5102Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5102: e.target.value,
		}));
	};
	const handleCo6102Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6102: e.target.value,
		}));
	};
	const handleCo7102Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7102: e.target.value,
		}));
	};

	const handleCo1103Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1103: e.target.value,
		}));
	};
	const handleCo2103Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2103: e.target.value,
		}));
	};
	const handleCo3103Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3103: e.target.value,
		}));
	};
	const handleCo4103Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4103: e.target.value,
		}));
	};
	const handleCo5103Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5103: e.target.value,
		}));
	};
	const handleCo6103Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6103: e.target.value,
		}));
	};
	const handleCo7103Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7103: e.target.value,
		}));
	};

	const handleCo1104Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1104: e.target.value,
		}));
	};
	const handleCo2104Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2104: e.target.value,
		}));
	};
	const handleCo3104Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3104: e.target.value,
		}));
	};
	const handleCo4104Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4104: e.target.value,
		}));
	};
	const handleCo5104Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5104: e.target.value,
		}));
	};
	const handleCo6104Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6104: e.target.value,
		}));
	};
	const handleCo7104Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7104: e.target.value,
		}));
	};

	const handleCo1105Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1105: e.target.value,
		}));
	};
	const handleCo2105Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2105: e.target.value,
		}));
	};
	const handleCo3105Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3105: e.target.value,
		}));
	};
	const handleCo4105Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4105: e.target.value,
		}));
	};
	const handleCo5105Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5105: e.target.value,
		}));
	};
	const handleCo6105Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6105: e.target.value,
		}));
	};
	const handleCo7105Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7105: e.target.value,
		}));
	};

	const handleCo1106Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1106: e.target.value,
		}));
	};
	const handleCo2106Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2106: e.target.value,
		}));
	};
	const handleCo3106Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3106: e.target.value,
		}));
	};
	const handleCo4106Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4106: e.target.value,
		}));
	};
	const handleCo5106Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5106: e.target.value,
		}));
	};
	const handleCo6106Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6106: e.target.value,
		}));
	};
	const handleCo7106Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7106: e.target.value,
		}));
	};

	const handleCo1107Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1107: e.target.value,
		}));
	};
	const handleCo2107Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2107: e.target.value,
		}));
	};
	const handleCo3107Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3107: e.target.value,
		}));
	};
	const handleCo4107Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4107: e.target.value,
		}));
	};
	const handleCo5107Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5107: e.target.value,
		}));
	};
	const handleCo6107Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6107: e.target.value,
		}));
	};
	const handleCo7107Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7107: e.target.value,
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
					{/* **************************************       PO:10        ****************************************************/}

					<tr className='m-4'>
						<td rowSpan={7}>
							<Textarea readOnly value={editedTable?.po101} className='my-6' />
						</td>
						<td rowSpan={3}>
							<Textarea readOnly value={editedTable?.competency101} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators101} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight101} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1101}
								onChange={handleCo1101Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2101}
								onChange={handleCo2101Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3101}
								onChange={handleCo3101Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4101}
								onChange={handleCo4101Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5101}
								onChange={handleCo5101Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6101}
								onChange={handleCo6101Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7101}
								onChange={handleCo7101Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators102} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight102} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1102}
								onChange={handleCo1102Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2102}
								onChange={handleCo2102Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3102}
								onChange={handleCo3102Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4102}
								onChange={handleCo4102Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5102}
								onChange={handleCo5102Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6102}
								onChange={handleCo6102Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7102}
								onChange={handleCo7102Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators103} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight103} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1103}
								onChange={handleCo1103Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2103}
								onChange={handleCo2103Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3103}
								onChange={handleCo3103Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4103}
								onChange={handleCo4103Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5103}
								onChange={handleCo5103Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6103}
								onChange={handleCo6103Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7103}
								onChange={handleCo7103Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency102} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators104} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight104} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1104}
								onChange={handleCo1104Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2104}
								onChange={handleCo2104Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3104}
								onChange={handleCo3104Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4104}
								onChange={handleCo4104Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5104}
								onChange={handleCo5104Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6104}
								onChange={handleCo6104Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7104}
								onChange={handleCo7104Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators105} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight105} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1105}
								onChange={handleCo1105Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2105}
								onChange={handleCo2105Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3105}
								onChange={handleCo3105Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4105}
								onChange={handleCo4105Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5105}
								onChange={handleCo5105Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6105}
								onChange={handleCo6105Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7105}
								onChange={handleCo7105Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency103} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators106} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight106} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1106}
								onChange={handleCo1106Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2106}
								onChange={handleCo2106Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3106}
								onChange={handleCo3106Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4106}
								onChange={handleCo4106Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5106}
								onChange={handleCo5106Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6106}
								onChange={handleCo6106Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7106}
								onChange={handleCo7106Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators107} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight107} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1107}
								onChange={handleCo1107Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2107}
								onChange={handleCo2107Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3107}
								onChange={handleCo3107Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4107}
								onChange={handleCo4107Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5107}
								onChange={handleCo5107Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6107}
								onChange={handleCo6107Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7107}
								onChange={handleCo7107Change}
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
							<Input type='number' value={editedTable?.po10mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.po10mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po10mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po10mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po10mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po10mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po10mapco7} readOnly />{" "}
						</td>
					</tr>
				</tbody>
			</table>
			<Button onClick={handleSaveChanges}>Save Changes</Button>
		</div>
	);
};

export default TablePo2;
