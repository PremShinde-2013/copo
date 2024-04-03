"use client";
import { title } from "@/components/primitives";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Button } from "@nextui-org/button";

export default function PricingPage() {
	const [tableData, setTableData] = useState<any[][]>([]);

	useEffect(() => {
		// Fetch your table data here or set it directly
		const data = [
			["NAME", "ROLE", "STATUS"],
			["Tony Reichert", "CEO", "Active"],
			["Zoey Lang", "Technical Lead", "Paused"],
			["Jane Fisher", "Senior Developer", "Active"],
			["William Howard", "Community Manager", "Vacation"],
		];
		setTableData(data);
	}, []);

	const exportToExcel = () => {
		const wb = XLSX.utils.book_new();
		const ws = XLSX.utils.aoa_to_sheet(tableData);
		XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
		const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
		saveAs(
			new Blob([excelBuffer], { type: "application/octet-stream" }),
			"table.xlsx"
		);
	};

	return (
		<div>
			<table aria-label='Example static collection table'>
				<thead>
					<tr>
						<th>NAME</th>
						<th>ROLE</th>
						<th>STATUS</th>
					</tr>
				</thead>
				<tbody>
					{tableData.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{row.map((cell, cellIndex) => (
								<td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<Button onClick={exportToExcel}>Download as Excel</Button>
		</div>
	);
}
