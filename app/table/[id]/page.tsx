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
					</tbody>
				</table>
			</Card>

			<Button onClick={exportToExcel}>Download as Excel</Button>
		</>
	);
};

export default TableDetail;
