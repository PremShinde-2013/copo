// pages/TableDetail.tsx
"use client";
import { Button, Card } from "@nextui-org/react";
import { useEffect, useState } from "react";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

interface Props {
	id: string;
}

const TableDetail = ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const [table, setTable] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null); // Change to string | null for better typing

	useEffect(() => {
		const fetchTableData = async () => {
			try {
				const response = await fetch(`/api/table/${id}`);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const data = await response.json();
				setTable(data.table);
			} catch (error) {
				setError("Error fetching table data");
			} finally {
				setLoading(false);
			}
		};

		fetchTableData();
	}, [id]);

	const exportToExcel = () => {
		const ws = XLSX.utils.aoa_to_sheet([
			[
				"PO",
				"Competency",
				"Indicators",
				"Weight",
				"CO1",
				"CO2",
				"CO3",
				"CO4",
				"CO5",
				"CO6",
				"CO7",
			],
			[
				table.po11,
				table.competency11,
				table.indicators11,
				table.weight11,
				table.co111,
				table.co211,
				table.co311,
				table.co411,
				table.co511,
				table.co611,
				table.co711,
			],
			[
				table.po12,
				table.competency12,
				table.indicators12,
				table.weight12,
				table.co112,
				table.co212,
				table.co312,
				table.co412,
				table.co512,
				table.co612,
				table.co712,
			],
			[
				table.po13,
				table.competency13,
				table.indicators13,
				table.weight13,
				table.co113,
				table.co213,
				table.co313,
				table.co413,
				table.co513,
				table.co613,
				table.co713,
			],
			[
				table.po14,
				table.competency14,
				table.indicators14,
				table.weight14,
				table.co114,
				table.co214,
				table.co314,
				table.co414,
				table.co514,
				table.co614,
				table.co714,
			],
			[
				table.po15,
				table.competency15,
				table.indicators15,
				table.weight15,
				table.co115,
				table.co215,
				table.co315,
				table.co415,
				table.co515,
				table.co615,
				table.co715,
			],

			[
				// Data for the special row
				"PO1 :Mapping Level", // Label for the special row
				"", // Empty cell for Competency
				"", // Empty cell for Indicators
				"", // Empty cell for Weight
				table.po1mapco1, // Data for po1mapco1
				table.po1mapco2, // Data for po1mapco2
				table.po1mapco3, // Data for po1mapco3
				table.po1mapco4, // Data for po1mapco4
				table.po1mapco5, // Data for po1mapco5
				table.po1mapco6, // Data for po1mapco6
				table.po1mapco7, // Data for po1mapco7
			],

			// ***************************************     PO 2  **********************************************
			[
				table.po21,
				table.competency21,
				table.indicators21,
				table.weight21,
				table.co121,
				table.co221,
				table.co321,
				table.co421,
				table.co521,
				table.co621,
				table.co721,
			],
			[
				"",
				"",
				table.indicators22,
				table.weight22,
				table.co122,
				table.co222,
				table.co322,
				table.co422,
				table.co522,
				table.co622,
				table.co722,
			],
			[
				"",
				"",
				table.indicators23,
				table.weight23,
				table.co123,
				table.co223,
				table.co323,
				table.co423,
				table.co523,
				table.co623,
				table.co723,
			],
			[
				"",
				table.competency22,
				table.indicators24,
				table.weight24,
				table.co124,
				table.co224,
				table.co324,
				table.co424,
				table.co524,
				table.co624,
				table.co724,
			],
			[
				"",
				"",
				table.indicators25,
				table.weight25,
				table.co125,
				table.co225,
				table.co325,
				table.co425,
				table.co525,
				table.co625,
				table.co725,
			],
			[
				"",
				"",
				table.indicators26,
				table.weight26,
				table.co126,
				table.co226,
				table.co326,
				table.co426,
				table.co526,
				table.co626,
				table.co726,
			],
			[
				"",
				"",
				table.indicators27,
				table.weight27,
				table.co127,
				table.co227,
				table.co327,
				table.co427,
				table.co527,
				table.co627,
				table.co727,
			],
			[
				"",
				table.competency23,
				table.indicators28,
				table.weight28,
				table.co128,
				table.co228,
				table.co328,
				table.co428,
				table.co528,
				table.co628,
				table.co728,
			],
			[
				"",
				"",
				table.indicators29,
				table.weight29,
				table.co129,
				table.co229,
				table.co329,
				table.co429,
				table.co529,
				table.co629,
				table.co729,
			],
			[
				"",
				table.competency24,
				table.indicators210,
				table.weight210,
				table.co1210,
				table.co2210,
				table.co3210,
				table.co4210,
				table.co5210,
				table.co6210,
				table.co7210,
			],
			[
				"",
				"",
				table.indicators211,
				table.weight211,
				table.co1211,
				table.co2211,
				table.co3211,
				table.co4211,
				table.co5211,
				table.co6211,
				table.co7211,
			],
			[
				"",
				"",
				table.indicators212,
				table.weight212,
				table.co1212,
				table.co2212,
				table.co3212,
				table.co4212,
				table.co5212,
				table.co6212,
				table.co7212,
			],
			[
				"",
				"",
				table.indicators213,
				table.weight213,
				table.co1213,
				table.co2213,
				table.co3213,
				table.co4213,
				table.co5213,
				table.co6213,
				table.co7213,
			],
			[
				// Data for the special row
				"PO2 :Mapping Level", // Label for the special row
				"", // Empty cell for Competency
				"", // Empty cell for Indicators
				"", // Empty cell for Weight
				table.po2mapco1,
				table.po2mapco2,
				table.po2mapco3,
				table.po2mapco4,
				table.po2mapco5,
				table.po2mapco6,
				table.po2mapco7,
			],

			//  ***********************************  po3      ***************************************************
			[
				table.po31,
				table.competency31,
				table.indicators31,
				table.weight31,
				table.co131,
				table.co231,
				table.co331,
				table.co431,
				table.co531,
				table.co631,
				table.co731,
			],
			[
				"",
				"",
				table.indicators32,
				table.weight32,
				table.co132,
				table.co232,
				table.co332,
				table.co432,
				table.co532,
				table.co632,
				table.co732,
			],
			[
				"",
				"",
				table.indicators33,
				table.weight33,
				table.co133,
				table.co233,
				table.co333,
				table.co433,
				table.co533,
				table.co633,
				table.co733,
			],
			[
				"",
				"",
				table.indicators34,
				table.weight34,
				table.co134,
				table.co234,
				table.co334,
				table.co434,
				table.co534,
				table.co634,
				table.co734,
			],
			[
				"",
				"",
				table.indicators35,
				table.weight35,
				table.co135,
				table.co235,
				table.co335,
				table.co435,
				table.co535,
				table.co635,
				table.co735,
			],
			[
				"",
				"",
				table.indicators36,
				table.weight36,
				table.co136,
				table.co236,
				table.co336,
				table.co436,
				table.co536,
				table.co636,
				table.co736,
			],
			[
				"",
				table.competency32,
				table.indicators37,
				table.weight37,
				table.co137,
				table.co237,
				table.co337,
				table.co437,
				table.co537,
				table.co637,
				table.co737,
			],
			[
				"",
				"",
				table.indicators38,
				table.weight38,
				table.co138,
				table.co238,
				table.co338,
				table.co438,
				table.co538,
				table.co638,
				table.co738,
			],
			[
				"",
				"",
				table.indicators39,
				table.weight39,
				table.co139,
				table.co239,
				table.co339,
				table.co439,
				table.co539,
				table.co639,
				table.co739,
			],
			[
				"",
				table.competency33,
				table.indicators310,
				table.weight310,
				table.co1310,
				table.co2310,
				table.co3310,
				table.co4310,
				table.co5310,
				table.co6310,
				table.co7310,
			],
			[
				"",
				"",
				table.indicators311,
				table.weight311,
				table.co1311,
				table.co2311,
				table.co3311,
				table.co4311,
				table.co5311,
				table.co6311,
				table.co7311,
			],
			[
				"",
				table.competency33,
				table.indicators312,
				table.weight312,
				table.co1312,
				table.co2312,
				table.co3312,
				table.co4312,
				table.co5312,
				table.co6312,
				table.co7312,
			],
			[
				"",
				"",
				table.indicators313,
				table.weight313,
				table.co1313,
				table.co2313,
				table.co3313,
				table.co4313,
				table.co5313,
				table.co6313,
				table.co7313,
			],
			[
				"PO3 :Mapping Level",
				"",
				"",
				"",
				table.po3mapco1,
				table.po3mapco2,
				table.po3mapco3,
				table.po3mapco4,
				table.po3mapco5,
				table.po3mapco6,
				table.po3mapco7,
			],

			//  ***********************************  po4      ***************************************************
			[
				table.po41,
				table.competency41,
				table.indicators41,
				table.weight41,
				table.co141,
				table.co241,
				table.co341,
				table.co441,
				table.co541,
				table.co641,
				table.co741,
			],
			[
				"",
				"",
				table.indicators42,
				table.weight42,
				table.co142,
				table.co242,
				table.co342,
				table.co442,
				table.co542,
				table.co642,
				table.co742,
			],
			[
				"",
				"",
				table.indicators43,
				table.weight43,
				table.co143,
				table.co243,
				table.co343,
				table.co443,
				table.co543,
				table.co643,
				table.co743,
			],
			[
				"",
				"",
				table.indicators44,
				table.weight44,
				table.co144,
				table.co244,
				table.co344,
				table.co444,
				table.co544,
				table.co644,
				table.co744,
			],
			[
				"",
				table.competency42,
				table.indicators45,
				table.weight45,
				table.co145,
				table.co245,
				table.co345,
				table.co445,
				table.co545,
				table.co645,
				table.co745,
			],
			[
				"",
				"",
				table.indicators46,
				table.weight46,
				table.co146,
				table.co246,
				table.co346,
				table.co446,
				table.co546,
				table.co646,
				table.co746,
			],
			[
				"",
				table.competency43,
				table.indicators47,
				table.weight47,
				table.co147,
				table.co247,
				table.co347,
				table.co447,
				table.co547,
				table.co647,
				table.co747,
			],
			[
				"",
				"",
				table.indicators48,
				table.weight48,
				table.co148,
				table.co248,
				table.co348,
				table.co448,
				table.co548,
				table.co648,
				table.co748,
			],
			[
				"",
				"",
				table.indicators49,
				table.weight49,
				table.co149,
				table.co249,
				table.co349,
				table.co449,
				table.co549,
				table.co649,
				table.co749,
			],
			[
				"",
				"",
				table.indicators410,
				table.weight410,
				table.co1410,
				table.co2410,
				table.co3410,
				table.co4410,
				table.co5410,
				table.co6410,
				table.co7410,
			],
			[
				"PO4 :Mapping Level",
				"",
				"",
				"",
				table.po4mapco1,
				table.po4mapco2,
				table.po4mapco3,
				table.po4mapco4,
				table.po4mapco5,
				table.po4mapco6,
				table.po4mapco7,
			],
			//  ***********************************  po 5      ***************************************************
			[
				table.po51,
				table.competency51,
				table.indicators51,
				table.weight51,
				table.co151,
				table.co251,
				table.co351,
				table.co451,
				table.co551,
				table.co651,
				table.co751,
			],
			[
				"",
				"",
				table.indicators52,
				table.weight52,
				table.co152,
				table.co252,
				table.co352,
				table.co452,
				table.co552,
				table.co652,
				table.co752,
			],
			[
				"",
				table.competency52,
				table.indicators53,
				table.weight53,
				table.co153,
				table.co253,
				table.co353,
				table.co453,
				table.co553,
				table.co653,
				table.co753,
			],
			[
				"",
				"",
				table.indicators54,
				table.weight54,
				table.co154,
				table.co254,
				table.co354,
				table.co454,
				table.co554,
				table.co654,
				table.co754,
			],
			[
				"",
				table.competency53,
				table.indicators55,
				table.weight55,
				table.co155,
				table.co255,
				table.co355,
				table.co455,
				table.co555,
				table.co655,
				table.co755,
			],
			[
				"",
				"",
				table.indicators56,
				table.weight56,
				table.co156,
				table.co256,
				table.co356,
				table.co456,
				table.co556,
				table.co656,
				table.co756,
			],
			[
				"PO5 :Mapping Level",
				"",
				"",
				"",
				table.po5mapco1,
				table.po5mapco2,
				table.po5mapco3,
				table.po5mapco4,
				table.po5mapco5,
				table.po5mapco6,
				table.po5mapco7,
			],
			//  ***********************************  po 6      ***************************************************
			[
				table.po61,
				table.competency61,
				table.indicators61,
				table.weight61,
				table.co161,
				table.co261,
				table.co361,
				table.co461,
				table.co561,
				table.co661,
				table.co761,
			],
			[
				"",
				table.competency62,
				table.indicators62,
				table.weight62,
				table.co162,
				table.co262,
				table.co362,
				table.co462,
				table.co562,
				table.co662,
				table.co762,
			],
			[
				"PO6 :Mapping Level",
				"",
				"",
				"",
				table.po6mapco1,
				table.po6mapco2,
				table.po6mapco3,
				table.po6mapco4,
				table.po6mapco5,
				table.po6mapco6,
				table.po6mapco7,
			],
		]);
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
		const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
		saveAs(
			new Blob([excelBuffer], { type: "application/octet-stream" }),
			"table.xlsx"
		);
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<>
			<Card className='flex justify-center overflow-x-visible'>
				<table className='table-fixed'>
					<thead className='bg-gray-100 dark:bg-gray-800 gap-2 h-20'>
						<tr>
							<th className='px-28'>PO</th>
							<th className='px-24'>Competency</th>
							<th className='px-24'>Indicators</th>
							<th className='px-8'>Weight</th>
							<th className='px-8'>CO1</th>
							<th className='px-8'>CO2</th>
							<th className='px-8'>CO3</th>
							<th className='px-8'>CO4</th>
							<th className='px-8'>CO5</th>
							<th className='px-8'>CO6</th>
							<th className='px-8'>CO7</th>
						</tr>
					</thead>
					<tbody>
						{table && (
							<tr>
								<td>{table.po11}</td>
								<td>{table.competency11}</td>
								<td>{table.indicators11}</td>
								<td>{table.weight11}</td>
								<td>{table.co111}</td>
								<td>{table.co211}</td>
								<td>{table.co311}</td>
								<td>{table.co411}</td>
								<td>{table.co511}</td>
								<td>{table.co611}</td>
								<td>{table.co711}</td>
							</tr>
						)}

						{table && (
							<tr>
								<td>{table.po12}</td>
								<td>{table.competency12}</td>
								<td>{table.indicators12}</td>
								<td>{table.weight12}</td>
								<td>{table.co112}</td>
								<td>{table.co212}</td>
								<td>{table.co312}</td>
								<td>{table.co412}</td>
								<td>{table.co512}</td>
								<td>{table.co612}</td>
								<td>{table.co712}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.po13}</td>
								<td>{table.competency13}</td>
								<td>{table.indicators13}</td>
								<td>{table.weight13}</td>
								<td>{table.co113}</td>
								<td>{table.co213}</td>
								<td>{table.co313}</td>
								<td>{table.co413}</td>
								<td>{table.co513}</td>
								<td>{table.co613}</td>
								<td>{table.co713}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.po14}</td>
								<td>{table.competency14}</td>
								<td>{table.indicators14}</td>
								<td>{table.weight14}</td>
								<td>{table.co114}</td>
								<td>{table.co214}</td>
								<td>{table.co314}</td>
								<td>{table.co414}</td>
								<td>{table.co514}</td>
								<td>{table.co614}</td>
								<td>{table.co714}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.po15}</td>
								<td>{table.competency15}</td>
								<td>{table.indicators15}</td>
								<td>{table.weight15}</td>
								<td>{table.co115}</td>
								<td>{table.co215}</td>
								<td>{table.co315}</td>
								<td>{table.co415}</td>
								<td>{table.co515}</td>
								<td>{table.co615}</td>
								<td>{table.co715}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PO1 :Mapping Level
								</td>

								<td>{table.po1mapco1}</td>
								<td>{table.po1mapco2}</td>
								<td>{table.po1mapco3}</td>
								<td>{table.po1mapco4}</td>
								<td>{table.po1mapco5}</td>
								<td>{table.po1mapco6}</td>
								<td>{table.po1mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO2 **************************************************** */}
						{table && (
							<tr>
								<td rowSpan={13}>{table.po21}</td>
								<td rowSpan={3}>{table.competency21}</td>
								<td>{table.indicators21}</td>
								<td>{table.weight21}</td>
								<td>{table.co121}</td>
								<td>{table.co221}</td>
								<td>{table.co321}</td>
								<td>{table.co421}</td>
								<td>{table.co521}</td>
								<td>{table.co621}</td>
								<td>{table.co721}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators22}</td>
								<td>{table.weight22}</td>
								<td>{table.co122}</td>
								<td>{table.co222}</td>
								<td>{table.co322}</td>
								<td>{table.co422}</td>
								<td>{table.co522}</td>
								<td>{table.co622}</td>
								<td>{table.co722}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators23}</td>
								<td>{table.weight23}</td>
								<td>{table.co123}</td>
								<td>{table.co223}</td>
								<td>{table.co323}</td>
								<td>{table.co423}</td>
								<td>{table.co523}</td>
								<td>{table.co623}</td>
								<td>{table.co723}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={4}>{table.competency22}</td>
								<td>{table.indicators24}</td>
								<td>{table.weight24}</td>
								<td>{table.co124}</td>
								<td>{table.co224}</td>
								<td>{table.co324}</td>
								<td>{table.co424}</td>
								<td>{table.co524}</td>
								<td>{table.co624}</td>
								<td>{table.co724}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators25}</td>
								<td>{table.weight25}</td>
								<td>{table.co125}</td>
								<td>{table.co225}</td>
								<td>{table.co325}</td>
								<td>{table.co425}</td>
								<td>{table.co525}</td>
								<td>{table.co625}</td>
								<td>{table.co725}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators26}</td>
								<td>{table.weight26}</td>
								<td>{table.co126}</td>
								<td>{table.co226}</td>
								<td>{table.co326}</td>
								<td>{table.co426}</td>
								<td>{table.co526}</td>
								<td>{table.co626}</td>
								<td>{table.co726}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators27}</td>
								<td>{table.weight27}</td>
								<td>{table.co127}</td>
								<td>{table.co227}</td>
								<td>{table.co327}</td>
								<td>{table.co427}</td>
								<td>{table.co527}</td>
								<td>{table.co627}</td>
								<td>{table.co727}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={2}>{table.competency23}</td>

								<td>{table.indicators28}</td>
								<td>{table.weight28}</td>
								<td>{table.co128}</td>
								<td>{table.co228}</td>
								<td>{table.co328}</td>
								<td>{table.co428}</td>
								<td>{table.co528}</td>
								<td>{table.co628}</td>
								<td>{table.co728}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators29}</td>
								<td>{table.weight29}</td>
								<td>{table.co129}</td>
								<td>{table.co229}</td>
								<td>{table.co329}</td>
								<td>{table.co429}</td>
								<td>{table.co529}</td>
								<td>{table.co629}</td>
								<td>{table.co729}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={4}>{table.competency24}</td>

								<td>{table.indicators210}</td>
								<td>{table.weight210}</td>
								<td>{table.co1210}</td>
								<td>{table.co2210}</td>
								<td>{table.co3210}</td>
								<td>{table.co4210}</td>
								<td>{table.co5210}</td>
								<td>{table.co6210}</td>
								<td>{table.co7210}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators211}</td>
								<td>{table.weight211}</td>
								<td>{table.co1211}</td>
								<td>{table.co2211}</td>
								<td>{table.co3211}</td>
								<td>{table.co4211}</td>
								<td>{table.co5211}</td>
								<td>{table.co6211}</td>
								<td>{table.co7211}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators212}</td>
								<td>{table.weight212}</td>
								<td>{table.co1212}</td>
								<td>{table.co2212}</td>
								<td>{table.co3212}</td>
								<td>{table.co4212}</td>
								<td>{table.co5212}</td>
								<td>{table.co6212}</td>
								<td>{table.co7212}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators213}</td>
								<td>{table.weight213}</td>
								<td>{table.co1213}</td>
								<td>{table.co2213}</td>
								<td>{table.co3213}</td>
								<td>{table.co4213}</td>
								<td>{table.co5213}</td>
								<td>{table.co6213}</td>
								<td>{table.co7213}</td>
							</tr>
						)}

						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PO2 :Mapping Level
								</td>

								<td>{table.po2mapco1}</td>
								<td>{table.po2mapco2}</td>
								<td>{table.po2mapco3}</td>
								<td>{table.po2mapco4}</td>
								<td>{table.po2mapco5}</td>
								<td>{table.po2mapco6}</td>
								<td>{table.po2mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO :3  **************************************************** */}
						{table && (
							<tr>
								<td rowSpan={13}>{table.po31}</td>
								<td rowSpan={6}>{table.competency31}</td>
								<td>{table.indicators31}</td>
								<td>{table.weight31}</td>
								<td>{table.co131}</td>
								<td>{table.co231}</td>
								<td>{table.co331}</td>
								<td>{table.co431}</td>
								<td>{table.co531}</td>
								<td>{table.co631}</td>
								<td>{table.co731}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators32}</td>
								<td>{table.weight32}</td>
								<td>{table.co132}</td>
								<td>{table.co232}</td>
								<td>{table.co332}</td>
								<td>{table.co432}</td>
								<td>{table.co532}</td>
								<td>{table.co632}</td>
								<td>{table.co732}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators33}</td>
								<td>{table.weight33}</td>
								<td>{table.co133}</td>
								<td>{table.co233}</td>
								<td>{table.co333}</td>
								<td>{table.co433}</td>
								<td>{table.co533}</td>
								<td>{table.co633}</td>
								<td>{table.co733}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators34}</td>
								<td>{table.weight34}</td>
								<td>{table.co134}</td>
								<td>{table.co234}</td>
								<td>{table.co334}</td>
								<td>{table.co434}</td>
								<td>{table.co534}</td>
								<td>{table.co634}</td>
								<td>{table.co734}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators35}</td>
								<td>{table.weight35}</td>
								<td>{table.co135}</td>
								<td>{table.co235}</td>
								<td>{table.co335}</td>
								<td>{table.co435}</td>
								<td>{table.co535}</td>
								<td>{table.co635}</td>
								<td>{table.co735}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators36}</td>
								<td>{table.weight36}</td>
								<td>{table.co136}</td>
								<td>{table.co236}</td>
								<td>{table.co336}</td>
								<td>{table.co436}</td>
								<td>{table.co536}</td>
								<td>{table.co636}</td>
								<td>{table.co736}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={3}>{table.competency32}</td>

								<td>{table.indicators37}</td>
								<td>{table.weight37}</td>
								<td>{table.co137}</td>
								<td>{table.co237}</td>
								<td>{table.co337}</td>
								<td>{table.co437}</td>
								<td>{table.co537}</td>
								<td>{table.co637}</td>
								<td>{table.co737}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators38}</td>
								<td>{table.weight38}</td>
								<td>{table.co138}</td>
								<td>{table.co238}</td>
								<td>{table.co338}</td>
								<td>{table.co438}</td>
								<td>{table.co538}</td>
								<td>{table.co638}</td>
								<td>{table.co738}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators39}</td>
								<td>{table.weight39}</td>
								<td>{table.co139}</td>
								<td>{table.co239}</td>
								<td>{table.co339}</td>
								<td>{table.co439}</td>
								<td>{table.co539}</td>
								<td>{table.co639}</td>
								<td>{table.co739}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={4}>{table.competency33}</td>

								<td>{table.indicators310}</td>
								<td>{table.weight310}</td>
								<td>{table.co1310}</td>
								<td>{table.co2310}</td>
								<td>{table.co3310}</td>
								<td>{table.co4310}</td>
								<td>{table.co5310}</td>
								<td>{table.co6310}</td>
								<td>{table.co7310}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators311}</td>
								<td>{table.weight311}</td>
								<td>{table.co1311}</td>
								<td>{table.co2311}</td>
								<td>{table.co3311}</td>
								<td>{table.co4311}</td>
								<td>{table.co5311}</td>
								<td>{table.co6311}</td>
								<td>{table.co7311}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators312}</td>
								<td>{table.weight312}</td>
								<td>{table.co1312}</td>
								<td>{table.co2312}</td>
								<td>{table.co3312}</td>
								<td>{table.co4312}</td>
								<td>{table.co5312}</td>
								<td>{table.co6312}</td>
								<td>{table.co7312}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators313}</td>
								<td>{table.weight313}</td>
								<td>{table.co1313}</td>
								<td>{table.co2313}</td>
								<td>{table.co3313}</td>
								<td>{table.co4313}</td>
								<td>{table.co5313}</td>
								<td>{table.co6313}</td>
								<td>{table.co7313}</td>
							</tr>
						)}

						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PO3 :Mapping Level
								</td>

								<td>{table.po3mapco1}</td>
								<td>{table.po3mapco2}</td>
								<td>{table.po3mapco3}</td>
								<td>{table.po3mapco4}</td>
								<td>{table.po3mapco5}</td>
								<td>{table.po3mapco6}</td>
								<td>{table.po3mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO :4  **************************************************** */}
						{table && (
							<tr>
								<td rowSpan={10}>{table.po41}</td>
								<td rowSpan={4}>{table.competency41}</td>
								<td>{table.indicators41}</td>
								<td>{table.weight41}</td>
								<td>{table.co141}</td>
								<td>{table.co241}</td>
								<td>{table.co341}</td>
								<td>{table.co441}</td>
								<td>{table.co541}</td>
								<td>{table.co641}</td>
								<td>{table.co741}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators42}</td>
								<td>{table.weight42}</td>
								<td>{table.co142}</td>
								<td>{table.co242}</td>
								<td>{table.co342}</td>
								<td>{table.co442}</td>
								<td>{table.co542}</td>
								<td>{table.co642}</td>
								<td>{table.co742}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators43}</td>
								<td>{table.weight43}</td>
								<td>{table.co143}</td>
								<td>{table.co243}</td>
								<td>{table.co343}</td>
								<td>{table.co443}</td>
								<td>{table.co543}</td>
								<td>{table.co643}</td>
								<td>{table.co743}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators44}</td>
								<td>{table.weight44}</td>
								<td>{table.co144}</td>
								<td>{table.co244}</td>
								<td>{table.co344}</td>
								<td>{table.co444}</td>
								<td>{table.co544}</td>
								<td>{table.co644}</td>
								<td>{table.co744}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={2}>{table.competency42}</td>
								<td>{table.indicators45}</td>
								<td>{table.weight45}</td>
								<td>{table.co145}</td>
								<td>{table.co245}</td>
								<td>{table.co345}</td>
								<td>{table.co445}</td>
								<td>{table.co545}</td>
								<td>{table.co645}</td>
								<td>{table.co745}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators46}</td>
								<td>{table.weight46}</td>
								<td>{table.co146}</td>
								<td>{table.co246}</td>
								<td>{table.co346}</td>
								<td>{table.co446}</td>
								<td>{table.co546}</td>
								<td>{table.co646}</td>
								<td>{table.co746}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={4}>{table.competency43}</td>
								<td>{table.indicators47}</td>
								<td>{table.weight47}</td>
								<td>{table.co147}</td>
								<td>{table.co247}</td>
								<td>{table.co347}</td>
								<td>{table.co447}</td>
								<td>{table.co547}</td>
								<td>{table.co647}</td>
								<td>{table.co747}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators48}</td>
								<td>{table.weight48}</td>
								<td>{table.co148}</td>
								<td>{table.co248}</td>
								<td>{table.co348}</td>
								<td>{table.co448}</td>
								<td>{table.co548}</td>
								<td>{table.co648}</td>
								<td>{table.co748}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators49}</td>
								<td>{table.weight49}</td>
								<td>{table.co149}</td>
								<td>{table.co249}</td>
								<td>{table.co349}</td>
								<td>{table.co449}</td>
								<td>{table.co549}</td>
								<td>{table.co649}</td>
								<td>{table.co749}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators410}</td>
								<td>{table.weight410}</td>
								<td>{table.co1410}</td>
								<td>{table.co2410}</td>
								<td>{table.co3410}</td>
								<td>{table.co4410}</td>
								<td>{table.co5410}</td>
								<td>{table.co6410}</td>
								<td>{table.co7410}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PO4 :Mapping Level
								</td>

								<td>{table.po4mapco1}</td>
								<td>{table.po4mapco2}</td>
								<td>{table.po4mapco3}</td>
								<td>{table.po4mapco4}</td>
								<td>{table.po4mapco5}</td>
								<td>{table.po4mapco6}</td>
								<td>{table.po4mapco7}</td>
							</tr>
						)}
						{/* ************************************ PO :5  **************************************************** */}
						{table && (
							<tr>
								<td rowSpan={6}>{table.po51}</td>
								<td rowSpan={2}>{table.competency51}</td>
								<td>{table.indicators51}</td>
								<td>{table.weight51}</td>
								<td>{table.co151}</td>
								<td>{table.co251}</td>
								<td>{table.co351}</td>
								<td>{table.co451}</td>
								<td>{table.co551}</td>
								<td>{table.co651}</td>
								<td>{table.co751}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators52}</td>
								<td>{table.weight52}</td>
								<td>{table.co152}</td>
								<td>{table.co252}</td>
								<td>{table.co352}</td>
								<td>{table.co452}</td>
								<td>{table.co552}</td>
								<td>{table.co652}</td>
								<td>{table.co752}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={2}>{table.competency52}</td>
								<td>{table.indicators53}</td>
								<td>{table.weight53}</td>
								<td>{table.co153}</td>
								<td>{table.co253}</td>
								<td>{table.co353}</td>
								<td>{table.co453}</td>
								<td>{table.co553}</td>
								<td>{table.co653}</td>
								<td>{table.co753}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators54}</td>
								<td>{table.weight54}</td>
								<td>{table.co154}</td>
								<td>{table.co254}</td>
								<td>{table.co354}</td>
								<td>{table.co454}</td>
								<td>{table.co554}</td>
								<td>{table.co654}</td>
								<td>{table.co754}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={2}>{table.competency53}</td>
								<td>{table.indicators55}</td>
								<td>{table.weight55}</td>
								<td>{table.co155}</td>
								<td>{table.co255}</td>
								<td>{table.co355}</td>
								<td>{table.co455}</td>
								<td>{table.co555}</td>
								<td>{table.co655}</td>
								<td>{table.co755}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators56}</td>
								<td>{table.weight56}</td>
								<td>{table.co156}</td>
								<td>{table.co256}</td>
								<td>{table.co356}</td>
								<td>{table.co456}</td>
								<td>{table.co556}</td>
								<td>{table.co656}</td>
								<td>{table.co756}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PO5 :Mapping Level
								</td>

								<td>{table.po5mapco1}</td>
								<td>{table.po5mapco2}</td>
								<td>{table.po5mapco3}</td>
								<td>{table.po5mapco4}</td>
								<td>{table.po5mapco5}</td>
								<td>{table.po5mapco6}</td>
								<td>{table.po5mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO :5  **************************************************** */}
						{table && (
							<tr>
								<td rowSpan={2}>{table.po61}</td>
								<td>{table.competency61}</td>
								<td>{table.indicators61}</td>
								<td>{table.weight61}</td>
								<td>{table.co161}</td>
								<td>{table.co261}</td>
								<td>{table.co361}</td>
								<td>{table.co461}</td>
								<td>{table.co561}</td>
								<td>{table.co661}</td>
								<td>{table.co761}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.competency62}</td>
								<td>{table.indicators62}</td>
								<td>{table.weight62}</td>
								<td>{table.co162}</td>
								<td>{table.co262}</td>
								<td>{table.co362}</td>
								<td>{table.co462}</td>
								<td>{table.co562}</td>
								<td>{table.co662}</td>
								<td>{table.co762}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PO6 :Mapping Level
								</td>
								<td>{table.po6mapco1}</td>
								<td>{table.po6mapco2}</td>
								<td>{table.po6mapco3}</td>
								<td>{table.po6mapco4}</td>
								<td>{table.po6mapco5}</td>
								<td>{table.po6mapco6}</td>
								<td>{table.po6mapco7}</td>
							</tr>
						)}
					</tbody>
				</table>
			</Card>

			<Button onClick={exportToExcel}>Download as Excel</Button>
		</>
	);
};

export default TableDetail;
