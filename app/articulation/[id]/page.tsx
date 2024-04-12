// pages/TableDetail.tsx
"use client";
import { Button, Card, Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import toast from "react-hot-toast";

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
					toast.error("Failed to fetch data");
				}
				const data = await response.json();
				setTable(data.table);
			} catch (error) {
				setError("Error fetching table data");
				toast.error("Failed to fetch data");
			} finally {
				setLoading(false);
			}
		};

		fetchTableData();
	}, [id]);

	const exportToExcel = () => {
		const ws = XLSX.utils.aoa_to_sheet([
			[`Department 0f ${table.dept} `, "", "", "", "", "", "", ""],
			["CO PO PSO Articulation", "", "", "", "", "", "", ""],
			[
				`Name of Course with Coursecode - ${table.subject}`,
				"",

				"",
				"",
				"",
				"",
				"",
				"",
			],
			["PO", "CO1", "CO2", "CO3", "CO4", "CO5", "CO6", "CO7"],
			[
				table.po11,
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
				table.po6mapco1,
				table.po6mapco2,
				table.po6mapco3,
				table.po6mapco4,
				table.po6mapco5,
				table.po6mapco6,
				table.po6mapco7,
			],

			//  ***********************************  po 7      ***************************************************
			[
				table.po71,
				table.po7mapco1,
				table.po7mapco2,
				table.po7mapco3,
				table.po7mapco4,
				table.po7mapco5,
				table.po7mapco6,
				table.po7mapco7,
			],

			//  ***********************************  po 8      ***************************************************
			[
				table.po81,
				table.po8mapco1,
				table.po8mapco2,
				table.po8mapco3,
				table.po8mapco4,
				table.po8mapco5,
				table.po8mapco6,
				table.po8mapco7,
			],

			//  ***********************************  po : 9      ***************************************************
			[
				table.po91,
				table.po9mapco1,
				table.po9mapco2,
				table.po9mapco3,
				table.po9mapco4,
				table.po9mapco5,
				table.po9mapco6,
				table.po9mapco7,
			],

			//  ***********************************  po : 10      ***************************************************
			[
				table.po101,
				table.po10mapco1,
				table.po10mapco2,
				table.po10mapco3,
				table.po10mapco4,
				table.po10mapco5,
				table.po10mapco6,
				table.po10mapco7,
			],

			//  ***********************************  po : 11      ***************************************************
			[
				table.po111,
				table.po11mapco1,
				table.po11mapco2,
				table.po11mapco3,
				table.po11mapco4,
				table.po11mapco5,
				table.po11mapco6,
				table.po11mapco7,
			],

			//  ***********************************  po : 12      ***************************************************
			[
				table.po121,
				table.po12mapco1,
				table.po12mapco2,
				table.po12mapco3,
				table.po12mapco4,
				table.po12mapco5,
				table.po12mapco6,
				table.po12mapco7,
			],

			//  ***************************    PSO : 1  *****************************************

			[
				table.pso11,
				table.pso1mapco1,
				table.pso1mapco2,
				table.pso1mapco3,
				table.pso1mapco4,
				table.pso1mapco5,
				table.pso1mapco6,
				table.pso1mapco7,
			],

			//  ***************************    PSO : 2  *****************************************

			[
				table.pso21,
				table.pso2mapco1,
				table.pso2mapco2,
				table.pso2mapco3,
				table.pso2mapco4,
				table.pso2mapco5,
				table.pso2mapco6,
				table.pso2mapco7,
			],

			//  ***************************    PSO : 3  *****************************************

			[
				table.pso31,
				table.pso3mapco1,
				table.pso3mapco2,
				table.pso3mapco3,
				table.pso3mapco4,
				table.pso3mapco5,
				table.pso3mapco6,
				table.pso3mapco7,
			],
		]);
		// Set column widths
		const columnWidths = [
			{ wch: 30 }, // Column A

			{ wch: 5 }, // Column E
			{ wch: 5 }, // Column F
			{ wch: 5 }, // Column G
			{ wch: 5 }, // Column H
			{ wch: 5 }, // Column I
			{ wch: 5 }, // Column J
			{ wch: 5 }, // Column K
		];
		ws["!cols"] = columnWidths;

		// Set text wrapping for all cells and row height to 100
		const range = ws["!ref"];
		if (range) {
			const decodedRange = XLSX.utils.decode_range(range);
			for (let R = decodedRange.s.r; R <= decodedRange.e.r; ++R) {
				ws["!rows"] = ws["!rows"] || [];

				ws["!rows"][R] = { hpx: 60 }; // Set row height to 100

				for (let C = decodedRange.s.c; C <= decodedRange.e.c; ++C) {
					const cellAddress = { r: R, c: C };
					const cellRef = XLSX.utils.encode_cell(cellAddress);
					if (!ws[cellRef]) continue;

					if (!ws[cellRef].s) {
						ws[cellRef].s = {}; // Ensure style object exists
					}
					ws[cellRef].s.wrapText = true; // Set text wrapping
					ws[cellRef].s.alignment = {
						vertical: "middle",
						horizontal: "center",
					}; // Set middle alignment

					// Set bold font for cells in row 1
					if (R === 0) {
						if (!ws[cellRef].s.font) {
							ws[cellRef].s.font = {};
						}
						ws[cellRef].s.font.bold = true;
					}
				}
			}
		}

		// Merge cells A8 to A14
		ws["!merges"] = ws["!merges"] || [];

		// // *****************************   PO     *******************************
		// ws["!merges"].push({ s: { r: 4, c: 0 }, e: { r: 8, c: 0 } });
		// ws["!merges"].push({ s: { r: 10, c: 0 }, e: { r: 22, c: 0 } });
		// // Merge cells A25 to A37
		// ws["!merges"].push({ s: { r: 24, c: 0 }, e: { r: 36, c: 0 } });
		// ws["!merges"].push({ s: { r: 38, c: 0 }, e: { r: 47, c: 0 } });
		// ws["!merges"].push({ s: { r: 49, c: 0 }, e: { r: 54, c: 0 } });
		// ws["!merges"].push({ s: { r: 56, c: 0 }, e: { r: 57, c: 0 } });
		// ws["!merges"].push({ s: { r: 59, c: 0 }, e: { r: 62, c: 0 } });
		// ws["!merges"].push({ s: { r: 64, c: 0 }, e: { r: 66, c: 0 } });
		// ws["!merges"].push({ s: { r: 68, c: 0 }, e: { r: 74, c: 0 } });
		// ws["!merges"].push({ s: { r: 76, c: 0 }, e: { r: 82, c: 0 } });
		// ws["!merges"].push({ s: { r: 84, c: 0 }, e: { r: 88, c: 0 } });
		// ws["!merges"].push({ s: { r: 90, c: 0 }, e: { r: 95, c: 0 } });
		// ws["!merges"].push({ s: { r: 97, c: 0 }, e: { r: 101, c: 0 } });
		// ws["!merges"].push({ s: { r: 103, c: 0 }, e: { r: 106, c: 0 } });
		// ws["!merges"].push({ s: { r: 108, c: 0 }, e: { r: 111, c: 0 } });

		// // **********************    Competency   **************************

		// ws["!merges"].push({ s: { r: 4, c: 1 }, e: { r: 5, c: 1 } });
		// ws["!merges"].push({ s: { r: 10, c: 1 }, e: { r: 12, c: 1 } });
		// ws["!merges"].push({ s: { r: 13, c: 1 }, e: { r: 16, c: 1 } });
		// ws["!merges"].push({ s: { r: 17, c: 1 }, e: { r: 18, c: 1 } });
		// ws["!merges"].push({ s: { r: 19, c: 1 }, e: { r: 22, c: 1 } });
		// ws["!merges"].push({ s: { r: 24, c: 1 }, e: { r: 29, c: 1 } });
		// ws["!merges"].push({ s: { r: 30, c: 1 }, e: { r: 32, c: 1 } });
		// ws["!merges"].push({ s: { r: 33, c: 1 }, e: { r: 34, c: 1 } });
		// ws["!merges"].push({ s: { r: 35, c: 1 }, e: { r: 36, c: 1 } });
		// ws["!merges"].push({ s: { r: 38, c: 1 }, e: { r: 41, c: 1 } });
		// ws["!merges"].push({ s: { r: 42, c: 1 }, e: { r: 43, c: 1 } });
		// ws["!merges"].push({ s: { r: 44, c: 1 }, e: { r: 47, c: 1 } });
		// ws["!merges"].push({ s: { r: 49, c: 1 }, e: { r: 50, c: 1 } });
		// ws["!merges"].push({ s: { r: 51, c: 1 }, e: { r: 52, c: 1 } });
		// ws["!merges"].push({ s: { r: 53, c: 1 }, e: { r: 54, c: 1 } });
		// ws["!merges"].push({ s: { r: 59, c: 1 }, e: { r: 60, c: 1 } });
		// ws["!merges"].push({ s: { r: 61, c: 1 }, e: { r: 62, c: 1 } });
		// ws["!merges"].push({ s: { r: 65, c: 1 }, e: { r: 66, c: 1 } });
		// ws["!merges"].push({ s: { r: 68, c: 1 }, e: { r: 69, c: 1 } });
		// ws["!merges"].push({ s: { r: 70, c: 1 }, e: { r: 73, c: 1 } });
		// ws["!merges"].push({ s: { r: 76, c: 1 }, e: { r: 78, c: 1 } });
		// ws["!merges"].push({ s: { r: 79, c: 1 }, e: { r: 80, c: 1 } });
		// ws["!merges"].push({ s: { r: 81, c: 1 }, e: { r: 82, c: 1 } });
		// ws["!merges"].push({ s: { r: 84, c: 1 }, e: { r: 85, c: 1 } });
		// ws["!merges"].push({ s: { r: 87, c: 1 }, e: { r: 88, c: 1 } });
		// ws["!merges"].push({ s: { r: 90, c: 1 }, e: { r: 91, c: 1 } });
		// ws["!merges"].push({ s: { r: 92, c: 1 }, e: { r: 93, c: 1 } });
		// ws["!merges"].push({ s: { r: 94, c: 1 }, e: { r: 95, c: 1 } });
		// ws["!merges"].push({ s: { r: 97, c: 1 }, e: { r: 98, c: 1 } });
		// ws["!merges"].push({ s: { r: 99, c: 1 }, e: { r: 101, c: 1 } });
		// ws["!merges"].push({ s: { r: 103, c: 1 }, e: { r: 104, c: 1 } });
		// ws["!merges"].push({ s: { r: 105, c: 1 }, e: { r: 106, c: 1 } });
		// ws["!merges"].push({ s: { r: 108, c: 1 }, e: { r: 109, c: 1 } });

		// // ************************   PO: Mappling Level    *************************
		// ws["!merges"].push({ s: { r: 9, c: 0 }, e: { r: 9, c: 2 } });
		// ws["!merges"].push({ s: { r: 23, c: 0 }, e: { r: 23, c: 2 } });
		// ws["!merges"].push({ s: { r: 37, c: 0 }, e: { r: 37, c: 2 } });
		// ws["!merges"].push({ s: { r: 48, c: 0 }, e: { r: 48, c: 2 } });
		// ws["!merges"].push({ s: { r: 55, c: 0 }, e: { r: 55, c: 2 } });
		// ws["!merges"].push({ s: { r: 58, c: 0 }, e: { r: 58, c: 2 } });
		// ws["!merges"].push({ s: { r: 63, c: 0 }, e: { r: 63, c: 2 } });
		// ws["!merges"].push({ s: { r: 67, c: 0 }, e: { r: 67, c: 2 } });
		// ws["!merges"].push({ s: { r: 75, c: 0 }, e: { r: 75, c: 2 } });
		// ws["!merges"].push({ s: { r: 83, c: 0 }, e: { r: 83, c: 2 } });
		// ws["!merges"].push({ s: { r: 89, c: 0 }, e: { r: 89, c: 2 } });
		// ws["!merges"].push({ s: { r: 96, c: 0 }, e: { r: 96, c: 2 } });
		// ws["!merges"].push({ s: { r: 102, c: 0 }, e: { r: 102, c: 2 } });
		// ws["!merges"].push({ s: { r: 107, c: 0 }, e: { r: 107, c: 2 } });
		// ws["!merges"].push({ s: { r: 112, c: 0 }, e: { r: 112, c: 2 } });

		// designing first 3 rows
		ws["!merges"].push({ s: { r: 0, c: 0 }, e: { r: 0, c: 10 } });
		ws["!merges"].push({ s: { r: 1, c: 0 }, e: { r: 1, c: 10 } });
		ws["!merges"].push({ s: { r: 2, c: 0 }, e: { r: 2, c: 10 } });

		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
		const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
		saveAs(
			new Blob([excelBuffer], { type: "application/octet-stream" }),
			`articulation_${table.subject}.xlsx`
		);
		toast.success("Excel file downloaded successfully!");
	};

	if (loading) {
		return (
			<div className='justify-center items-center w-full h-full'>
				<Spinner />
			</div>
		);
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<>
			<Card className='flex justify-center overflow-x-visible'>
				<table className='table-fixed'>
					<thead className='bg-gray-100 dark:bg-gray-800 gap-2 h-20'>
						<tr className='my-6 !important'>
							<th className='px-28'>PO</th>
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
								<td className='py-10' rowSpan={1}>
									{table.po11}
								</td>
								<td className='py-10'>{table.po1mapco1}</td>
								<td className='py-10'>{table.po1mapco2}</td>
								<td className='py-10'>{table.po1mapco3}</td>
								<td className='py-10'>{table.po1mapco4}</td>
								<td className='py-10'>{table.po1mapco5}</td>
								<td className='py-10'>{table.po1mapco6}</td>
								<td className='py-10'>{table.po1mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO2 **************************************************** */}
						{table && (
							<tr>
								<td className='py-10' rowSpan={1}>
									{table.po21}
								</td>
								<td className='py-10'>{table.po2mapco1}</td>
								<td className='py-10'>{table.po2mapco2}</td>
								<td className='py-10'>{table.po2mapco3}</td>
								<td className='py-10'>{table.po2mapco4}</td>
								<td className='py-10'>{table.po2mapco5}</td>
								<td className='py-10'>{table.po2mapco6}</td>
								<td className='py-10'>{table.po2mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO :3  **************************************************** */}
						{table && (
							<tr>
								<td className='py-10' rowSpan={1}>
									{table.po31}
								</td>
								<td className='py-10'>{table.po3mapco1}</td>
								<td className='py-10'>{table.po3mapco2}</td>
								<td className='py-10'>{table.po3mapco3}</td>
								<td className='py-10'>{table.po3mapco4}</td>
								<td className='py-10'>{table.po3mapco5}</td>
								<td className='py-10'>{table.po3mapco6}</td>
								<td className='py-10'>{table.po3mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO :4  **************************************************** */}
						{table && (
							<tr>
								<td className='py-10' rowSpan={1}>
									{table.po41}
								</td>
								<td className='py-10'>{table.po4mapco1}</td>
								<td className='py-10'>{table.po4mapco2}</td>
								<td className='py-10'>{table.po4mapco3}</td>
								<td className='py-10'>{table.po4mapco4}</td>
								<td className='py-10'>{table.po4mapco5}</td>
								<td className='py-10'>{table.po4mapco6}</td>
								<td className='py-10'>{table.po4mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO :5  **************************************************** */}
						{table && (
							<tr>
								<td className='py-10' rowSpan={1}>
									{table.po51}
								</td>
								<td className='py-10'>{table.po5mapco1}</td>
								<td className='py-10'>{table.po5mapco2}</td>
								<td className='py-10'>{table.po5mapco3}</td>
								<td className='py-10'>{table.po5mapco4}</td>
								<td className='py-10'>{table.po5mapco5}</td>
								<td className='py-10'>{table.po5mapco6}</td>
								<td className='py-10'>{table.po5mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO :6  **************************************************** */}
						{table && (
							<tr>
								<td className='py-10' rowSpan={1}>
									{table.po61}
								</td>
								<td className='py-10'>{table.po6mapco1}</td>
								<td className='py-10'>{table.po6mapco2}</td>
								<td className='py-10'>{table.po6mapco3}</td>
								<td className='py-10'>{table.po6mapco4}</td>
								<td className='py-10'>{table.po6mapco5}</td>
								<td className='py-10'>{table.po6mapco6}</td>
								<td className='py-10'>{table.po6mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO :8  **************************************************** */}
						{table && (
							<tr>
								<td className='py-10' rowSpan={1}>
									{table.po81}
								</td>
								<td className='py-10'>{table.po8mapco1}</td>
								<td className='py-10'>{table.po8mapco2}</td>
								<td className='py-10'>{table.po8mapco3}</td>
								<td className='py-10'>{table.po8mapco4}</td>
								<td className='py-10'>{table.po8mapco5}</td>
								<td className='py-10'>{table.po8mapco6}</td>
								<td className='py-10'>{table.po8mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO :9  **************************************************** */}
						{table && (
							<tr>
								<td className='py-10' rowSpan={1}>
									{table.po91}
								</td>
								<td className='py-10'>{table.po9mapco1}</td>
								<td className='py-10'>{table.po9mapco2}</td>
								<td className='py-10'>{table.po9mapco3}</td>
								<td className='py-10'>{table.po9mapco4}</td>
								<td className='py-10'>{table.po9mapco5}</td>
								<td className='py-10'>{table.po9mapco6}</td>
								<td className='py-10'>{table.po9mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO : 10  **************************************************** */}
						{table && (
							<tr>
								<td className='py-10' rowSpan={1}>
									{table.po101}
								</td>
								<td className='py-10'>{table.po10mapco1}</td>
								<td className='py-10'>{table.po10mapco2}</td>
								<td className='py-10'>{table.po10mapco3}</td>
								<td className='py-10'>{table.po10mapco4}</td>
								<td className='py-10'>{table.po10mapco5}</td>
								<td className='py-10'>{table.po10mapco6}</td>
								<td className='py-10'>{table.po10mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO : 11  **************************************************** */}
						{table && (
							<tr>
								<td className='py-10' rowSpan={1}>
									{table.po111}
								</td>

								<td className='py-10'>{table.po11mapco1}</td>
								<td className='py-10'>{table.po11mapco2}</td>
								<td className='py-10'>{table.po11mapco3}</td>
								<td className='py-10'>{table.po11mapco4}</td>
								<td className='py-10'>{table.po11mapco5}</td>
								<td className='py-10'>{table.po11mapco6}</td>
								<td className='py-10'>{table.po11mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO : 12  **************************************************** */}
						{table && (
							<tr>
								<td className='py-10' rowSpan={1}>
									{table.po121}
								</td>

								<td className='py-10'>{table.po12mapco1}</td>
								<td className='py-10'>{table.po12mapco2}</td>
								<td className='py-10'>{table.po12mapco3}</td>
								<td className='py-10'>{table.po12mapco4}</td>
								<td className='py-10'>{table.po12mapco5}</td>
								<td className='py-10'>{table.po12mapco6}</td>
								<td className='py-10'>{table.po12mapco7}</td>
							</tr>
						)}

						{/* *******************************   PSO : 1 **************************** */}

						{table && (
							<tr>
								<td className='py-10' rowSpan={1}>
									{table.pso11}
								</td>

								<td className='py-10'>{table.pso1mapco1}</td>
								<td className='py-10'>{table.pso1mapco2}</td>
								<td className='py-10'>{table.pso1mapco3}</td>
								<td className='py-10'>{table.pso1mapco4}</td>
								<td className='py-10'>{table.pso1mapco5}</td>
								<td className='py-10'>{table.pso1mapco6}</td>
								<td className='py-10'>{table.pso1mapco7}</td>
							</tr>
						)}

						{/* *******************************   PSO : 2 **************************** */}

						{table && (
							<tr>
								<td className='py-10' rowSpan={1}>
									{table.pso21}
								</td>
								<td className='py-10'>{table.pso2mapco1}</td>
								<td className='py-10'>{table.pso2mapco2}</td>
								<td className='py-10'>{table.pso2mapco3}</td>
								<td className='py-10'>{table.pso2mapco4}</td>
								<td className='py-10'>{table.pso2mapco5}</td>
								<td className='py-10'>{table.pso2mapco6}</td>
								<td className='py-10'>{table.pso2mapco7}</td>
							</tr>
						)}

						{/* *******************************   PSO : 3  **************************** */}

						{table && (
							<tr>
								<td className='py-10' rowSpan={1}>
									{table.pso31}
								</td>
								<td className='py-10'>{table.pso3mapco1}</td>
								<td className='py-10'>{table.pso3mapco2}</td>
								<td className='py-10'>{table.pso3mapco3}</td>
								<td className='py-10'>{table.pso3mapco4}</td>
								<td className='py-10'>{table.pso3mapco5}</td>
								<td className='py-10'>{table.pso3mapco6}</td>
								<td className='py-10'>{table.pso3mapco7}</td>
							</tr>
						)}
					</tbody>
				</table>
			</Card>
			<div className='mt-10'>
				<Button color='success' size='lg' onClick={exportToExcel}>
					Download as Excel
				</Button>
			</div>
		</>
	);
};

export default TableDetail;
