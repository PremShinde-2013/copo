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
				table.po2mapco1, // Data for po1mapco1
				table.po2mapco2, // Data for po1mapco2
				table.po2mapco3, // Data for po1mapco3
				table.po2mapco4, // Data for po1mapco4
				table.po2mapco5, // Data for po1mapco5
				table.po2mapco6, // Data for po1mapco6
				table.po2mapco7, // Data for po1mapco7
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
									PO1 :Mapping Level
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
					</tbody>
				</table>
			</Card>

			<Button onClick={exportToExcel}>Download as Excel</Button>
		</>
	);
};

export default TableDetail;
