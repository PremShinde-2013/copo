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

	// *********************************    Po 3  ***************************************************
	// Define the calculation function
	const calculatePo3mapco1 = () => {
		const sumCo =
			parseInt(editedTable?.co131 || 0) +
			parseInt(editedTable?.co132 || 0) +
			parseInt(editedTable?.co133 || 0) +
			parseInt(editedTable?.co134 || 0) +
			parseInt(editedTable?.co135 || 0) +
			parseInt(editedTable?.co136 || 0) +
			parseInt(editedTable?.co137 || 0) +
			parseInt(editedTable?.co138 || 0) +
			parseInt(editedTable?.co139 || 0) +
			parseInt(editedTable?.co1310 || 0) +
			parseInt(editedTable?.co1311 || 0) +
			parseInt(editedTable?.co1312 || 0) +
			parseInt(editedTable?.co1313 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po3mapco1: calculatedValue,
		}));
	};
	const calculatePo3mapco2 = () => {
		const sumCo =
			parseInt(editedTable?.co231 || 0) +
			parseInt(editedTable?.co232 || 0) +
			parseInt(editedTable?.co233 || 0) +
			parseInt(editedTable?.co234 || 0) +
			parseInt(editedTable?.co235 || 0) +
			parseInt(editedTable?.co236 || 0) +
			parseInt(editedTable?.co237 || 0) +
			parseInt(editedTable?.co238 || 0) +
			parseInt(editedTable?.co239 || 0) +
			parseInt(editedTable?.co2310 || 0) +
			parseInt(editedTable?.co2311 || 0) +
			parseInt(editedTable?.co2312 || 0) +
			parseInt(editedTable?.co2313 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po3mapco2: calculatedValue,
		}));
	};
	const calculatePo3mapco3 = () => {
		const sumCo =
			parseInt(editedTable?.co331 || 0) +
			parseInt(editedTable?.co332 || 0) +
			parseInt(editedTable?.co333 || 0) +
			parseInt(editedTable?.co334 || 0) +
			parseInt(editedTable?.co335 || 0) +
			parseInt(editedTable?.co336 || 0) +
			parseInt(editedTable?.co337 || 0) +
			parseInt(editedTable?.co338 || 0) +
			parseInt(editedTable?.co339 || 0) +
			parseInt(editedTable?.co3310 || 0) +
			parseInt(editedTable?.co3311 || 0) +
			parseInt(editedTable?.co3312 || 0) +
			parseInt(editedTable?.co3313 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po3mapco3: calculatedValue,
		}));
	};
	const calculatePo3mapco4 = () => {
		const sumCo =
			parseInt(editedTable?.co431 || 0) +
			parseInt(editedTable?.co432 || 0) +
			parseInt(editedTable?.co433 || 0) +
			parseInt(editedTable?.co434 || 0) +
			parseInt(editedTable?.co435 || 0) +
			parseInt(editedTable?.co436 || 0) +
			parseInt(editedTable?.co437 || 0) +
			parseInt(editedTable?.co438 || 0) +
			parseInt(editedTable?.co439 || 0) +
			parseInt(editedTable?.co4310 || 0) +
			parseInt(editedTable?.co4311 || 0) +
			parseInt(editedTable?.co4312 || 0) +
			parseInt(editedTable?.co4313 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po3mapco4: calculatedValue,
		}));
	};
	const calculatePo3mapco5 = () => {
		const sumCo =
			parseInt(editedTable?.co531 || 0) +
			parseInt(editedTable?.co532 || 0) +
			parseInt(editedTable?.co533 || 0) +
			parseInt(editedTable?.co534 || 0) +
			parseInt(editedTable?.co535 || 0) +
			parseInt(editedTable?.co536 || 0) +
			parseInt(editedTable?.co537 || 0) +
			parseInt(editedTable?.co538 || 0) +
			parseInt(editedTable?.co539 || 0) +
			parseInt(editedTable?.co5310 || 0) +
			parseInt(editedTable?.co5311 || 0) +
			parseInt(editedTable?.co5312 || 0) +
			parseInt(editedTable?.co5313 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po3mapco5: calculatedValue,
		}));
	};
	const calculatePo3mapco6 = () => {
		const sumCo =
			parseInt(editedTable?.co631 || 0) +
			parseInt(editedTable?.co632 || 0) +
			parseInt(editedTable?.co633 || 0) +
			parseInt(editedTable?.co634 || 0) +
			parseInt(editedTable?.co635 || 0) +
			parseInt(editedTable?.co636 || 0) +
			parseInt(editedTable?.co637 || 0) +
			parseInt(editedTable?.co638 || 0) +
			parseInt(editedTable?.co639 || 0) +
			parseInt(editedTable?.co6310 || 0) +
			parseInt(editedTable?.co6311 || 0) +
			parseInt(editedTable?.co6312 || 0) +
			parseInt(editedTable?.co6313 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po3mapco6: calculatedValue,
		}));
	};
	const calculatePo3mapco7 = () => {
		const sumCo =
			parseInt(editedTable?.co731 || 0) +
			parseInt(editedTable?.co732 || 0) +
			parseInt(editedTable?.co733 || 0) +
			parseInt(editedTable?.co734 || 0) +
			parseInt(editedTable?.co735 || 0) +
			parseInt(editedTable?.co736 || 0) +
			parseInt(editedTable?.co737 || 0) +
			parseInt(editedTable?.co738 || 0) +
			parseInt(editedTable?.co739 || 0) +
			parseInt(editedTable?.co7310 || 0) +
			parseInt(editedTable?.co7311 || 0) +
			parseInt(editedTable?.co7312 || 0) +
			parseInt(editedTable?.co7313 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po3mapco7: calculatedValue,
		}));
	};

	// Call the calculation function whenever any of the co values change
	useEffect(() => {
		//  ************************************      po2           *******************************

		calculatePo3mapco1();
		calculatePo3mapco2();
		calculatePo3mapco3();
		calculatePo3mapco4();
		calculatePo3mapco5();
		calculatePo3mapco6();
		calculatePo3mapco7();

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
	// **************************    PO:3     *************************************

	const handleCo131Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co131: e.target.value,
		}));
	};
	const handleCo231Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co231: e.target.value,
		}));
	};
	const handleCo331Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co331: e.target.value,
		}));
	};
	const handleCo431Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co431: e.target.value,
		}));
	};
	const handleCo531Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co531: e.target.value,
		}));
	};
	const handleCo631Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co631: e.target.value,
		}));
	};
	const handleCo731Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co731: e.target.value,
		}));
	};

	const handleCo132Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co132: e.target.value,
		}));
	};
	const handleCo232Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co232: e.target.value,
		}));
	};
	const handleCo332Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co332: e.target.value,
		}));
	};
	const handleCo432Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co432: e.target.value,
		}));
	};
	const handleCo532Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co532: e.target.value,
		}));
	};
	const handleCo632Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co632: e.target.value,
		}));
	};
	const handleCo732Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co732: e.target.value,
		}));
	};

	const handleCo133Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co133: e.target.value,
		}));
	};
	const handleCo233Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co233: e.target.value,
		}));
	};
	const handleCo333Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co333: e.target.value,
		}));
	};
	const handleCo433Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co433: e.target.value,
		}));
	};
	const handleCo533Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co533: e.target.value,
		}));
	};
	const handleCo633Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co633: e.target.value,
		}));
	};
	const handleCo733Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co733: e.target.value,
		}));
	};

	const handleCo134Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co134: e.target.value,
		}));
	};
	const handleCo234Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co234: e.target.value,
		}));
	};
	const handleCo334Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co334: e.target.value,
		}));
	};
	const handleCo434Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co434: e.target.value,
		}));
	};
	const handleCo534Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co534: e.target.value,
		}));
	};
	const handleCo634Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co634: e.target.value,
		}));
	};
	const handleCo734Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co734: e.target.value,
		}));
	};

	const handleCo135Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co135: e.target.value,
		}));
	};
	const handleCo235Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co235: e.target.value,
		}));
	};
	const handleCo335Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co335: e.target.value,
		}));
	};
	const handleCo435Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co435: e.target.value,
		}));
	};
	const handleCo535Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co535: e.target.value,
		}));
	};
	const handleCo635Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co635: e.target.value,
		}));
	};
	const handleCo735Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co735: e.target.value,
		}));
	};

	const handleCo136Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co136: e.target.value,
		}));
	};
	const handleCo236Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co236: e.target.value,
		}));
	};
	const handleCo336Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co336: e.target.value,
		}));
	};
	const handleCo436Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co436: e.target.value,
		}));
	};
	const handleCo536Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co536: e.target.value,
		}));
	};
	const handleCo636Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co636: e.target.value,
		}));
	};
	const handleCo736Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co736: e.target.value,
		}));
	};

	const handleCo137Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co137: e.target.value,
		}));
	};
	const handleCo237Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co237: e.target.value,
		}));
	};
	const handleCo337Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co337: e.target.value,
		}));
	};
	const handleCo437Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co437: e.target.value,
		}));
	};
	const handleCo537Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co537: e.target.value,
		}));
	};
	const handleCo637Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co637: e.target.value,
		}));
	};
	const handleCo737Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co737: e.target.value,
		}));
	};

	const handleCo138Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co138: e.target.value,
		}));
	};
	const handleCo238Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co238: e.target.value,
		}));
	};
	const handleCo338Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co338: e.target.value,
		}));
	};
	const handleCo438Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co438: e.target.value,
		}));
	};
	const handleCo538Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co538: e.target.value,
		}));
	};
	const handleCo638Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co638: e.target.value,
		}));
	};
	const handleCo738Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co738: e.target.value,
		}));
	};

	const handleCo139Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co139: e.target.value,
		}));
	};
	const handleCo239Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co239: e.target.value,
		}));
	};
	const handleCo339Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co339: e.target.value,
		}));
	};
	const handleCo439Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co439: e.target.value,
		}));
	};
	const handleCo539Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co539: e.target.value,
		}));
	};
	const handleCo639Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co639: e.target.value,
		}));
	};
	const handleCo739Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co739: e.target.value,
		}));
	};

	const handleCo1310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1310: e.target.value,
		}));
	};
	const handleCo2310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2310: e.target.value,
		}));
	};
	const handleCo3310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3310: e.target.value,
		}));
	};
	const handleCo4310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4310: e.target.value,
		}));
	};
	const handleCo5310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5310: e.target.value,
		}));
	};
	const handleCo6310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6310: e.target.value,
		}));
	};
	const handleCo7310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7310: e.target.value,
		}));
	};

	const handleCo1311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1311: e.target.value,
		}));
	};
	const handleCo2311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2311: e.target.value,
		}));
	};
	const handleCo3311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3311: e.target.value,
		}));
	};
	const handleCo4311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4311: e.target.value,
		}));
	};
	const handleCo5311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5311: e.target.value,
		}));
	};
	const handleCo6311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6311: e.target.value,
		}));
	};
	const handleCo7311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7311: e.target.value,
		}));
	};

	const handleCo1312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1312: e.target.value,
		}));
	};
	const handleCo2312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2312: e.target.value,
		}));
	};
	const handleCo3312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3312: e.target.value,
		}));
	};
	const handleCo4312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4312: e.target.value,
		}));
	};
	const handleCo5312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5312: e.target.value,
		}));
	};
	const handleCo6312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6312: e.target.value,
		}));
	};
	const handleCo7312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7312: e.target.value,
		}));
	};

	const handleCo1313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1313: e.target.value,
		}));
	};
	const handleCo2313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2313: e.target.value,
		}));
	};
	const handleCo3313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3313: e.target.value,
		}));
	};
	const handleCo4313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4313: e.target.value,
		}));
	};
	const handleCo5313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5313: e.target.value,
		}));
	};
	const handleCo6313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6313: e.target.value,
		}));
	};
	const handleCo7313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7313: e.target.value,
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
					{/* **************************************       PO:3         ****************************************************/}

					<tr className='m-4'>
						<td rowSpan={13}>
							<Textarea readOnly value={editedTable?.po31} className='my-6' />
						</td>
						<td rowSpan={6}>
							<Textarea readOnly value={editedTable?.competency31} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators31} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight31} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co131}
								onChange={handleCo131Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co231}
								onChange={handleCo231Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co331}
								onChange={handleCo331Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co431}
								onChange={handleCo431Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co531}
								onChange={handleCo531Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co631}
								onChange={handleCo631Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co731}
								onChange={handleCo731Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators32} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight32} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co132}
								onChange={handleCo132Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co232}
								onChange={handleCo232Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co332}
								onChange={handleCo332Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co432}
								onChange={handleCo432Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co532}
								onChange={handleCo532Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co632}
								onChange={handleCo632Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co732}
								onChange={handleCo732Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators33} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight33} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co133}
								onChange={handleCo133Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co233}
								onChange={handleCo233Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co333}
								onChange={handleCo333Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co433}
								onChange={handleCo433Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co533}
								onChange={handleCo533Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co633}
								onChange={handleCo633Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co733}
								onChange={handleCo733Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators34} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight34} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co134}
								onChange={handleCo134Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co234}
								onChange={handleCo234Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co334}
								onChange={handleCo334Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co434}
								onChange={handleCo434Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co534}
								onChange={handleCo534Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co634}
								onChange={handleCo634Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co734}
								onChange={handleCo734Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators35} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight35} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co135}
								onChange={handleCo135Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co235}
								onChange={handleCo235Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co335}
								onChange={handleCo335Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co435}
								onChange={handleCo435Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co535}
								onChange={handleCo535Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co635}
								onChange={handleCo635Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co735}
								onChange={handleCo735Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators36} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight36} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co136}
								onChange={handleCo136Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co236}
								onChange={handleCo236Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co336}
								onChange={handleCo336Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co436}
								onChange={handleCo436Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co536}
								onChange={handleCo536Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co636}
								onChange={handleCo636Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co736}
								onChange={handleCo736Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={3}>
							<Textarea readOnly value={editedTable?.competency32} />
						</td>

						<td>
							<Textarea readOnly value={editedTable?.indicators37} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight37} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co137}
								onChange={handleCo137Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co237}
								onChange={handleCo237Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co337}
								onChange={handleCo337Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co437}
								onChange={handleCo437Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co537}
								onChange={handleCo537Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co637}
								onChange={handleCo637Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co737}
								onChange={handleCo737Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators38} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight38} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co138}
								onChange={handleCo138Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co238}
								onChange={handleCo238Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co338}
								onChange={handleCo338Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co438}
								onChange={handleCo438Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co538}
								onChange={handleCo538Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co638}
								onChange={handleCo638Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co738}
								onChange={handleCo738Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators39} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight39} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co139}
								onChange={handleCo139Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co239}
								onChange={handleCo239Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co339}
								onChange={handleCo339Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co439}
								onChange={handleCo439Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co539}
								onChange={handleCo539Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co639}
								onChange={handleCo639Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co739}
								onChange={handleCo739Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency33} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators310} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight310} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1310}
								onChange={handleCo1310Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2310}
								onChange={handleCo2310Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3310}
								onChange={handleCo3310Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4310}
								onChange={handleCo4310Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5310}
								onChange={handleCo5310Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6310}
								onChange={handleCo6310Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7310}
								onChange={handleCo7310Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators311} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight311} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1311}
								onChange={handleCo1311Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2311}
								onChange={handleCo2311Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3311}
								onChange={handleCo3311Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4311}
								onChange={handleCo4311Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5311}
								onChange={handleCo5311Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6311}
								onChange={handleCo6311Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7311}
								onChange={handleCo7311Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency34} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators312} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight312} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1312}
								onChange={handleCo1312Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2312}
								onChange={handleCo2312Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3312}
								onChange={handleCo3312Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4312}
								onChange={handleCo4312Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5312}
								onChange={handleCo5312Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6312}
								onChange={handleCo6312Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7312}
								onChange={handleCo7312Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators313} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight313} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1313}
								onChange={handleCo1313Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2313}
								onChange={handleCo2313Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3313}
								onChange={handleCo3313Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4313}
								onChange={handleCo4313Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5313}
								onChange={handleCo5313Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6313}
								onChange={handleCo6313Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7313}
								onChange={handleCo7313Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td colSpan={4}>
							<Textarea readOnly value='PO3 : Mapping Level' className='my-6' />
						</td>

						<td>
							<Input type='number' value={editedTable?.po3mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.po3mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po3mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po3mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po3mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po3mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po3mapco7} readOnly />{" "}
						</td>
					</tr>
				</tbody>
			</table>
			<Button onClick={handleSaveChanges}>Save Changes</Button>
		</div>
	);
};

export default TablePo2;
