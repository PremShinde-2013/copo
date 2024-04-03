"use client";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Card } from "@nextui-org/react";
import fetchData from "../../components/fetchData";
import { Button } from "@nextui-org/button";

const DisplayTable = () => {
	const [table, setTable] = useState<any[]>([]);

	useEffect(() => {
		const fetchTableData = async () => {
			const data = await fetchData();
			if (data) {
				setTable(data);
			} else {
				// Handle error
			}
		};

		fetchTableData();
	}, []);

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
			...table.map((t: any) => [
				t.po11,
				t.competency11,
				t.indicators11,
				t.weight11,
				t.co111,
				t.co211,
				t.co311,
				t.co411,
				t.co511,
				t.co611,
				t.co711,
			]),
			...table.map((t: any) => [
				t.po12,
				t.competency12,
				t.indicators12,
				t.weight12,
				t.co112,
				t.co212,
				t.co312,
				t.co412,
				t.co512,
				t.co612,
				t.co712,
			]),
			...table.map((t: any) => [
				t.po13,
				t.competency13,
				t.indicators13,
				t.weight13,
				t.co113,
				t.co213,
				t.co313,
				t.co413,
				t.co513,
				t.co613,
				t.co713,
			]),
			...table.map((t: any) => [
				t.po14,
				t.competency14,
				t.indicators14,
				t.weight14,
				t.co114,
				t.co214,
				t.co314,
				t.co414,
				t.co514,
				t.co614,
				t.co714,
			]),
			...table.map((t: any) => [
				t.po15,
				t.competency15,
				t.indicators15,
				t.weight15,
				t.co115,
				t.co215,
				t.co315,
				t.co415,
				t.co515,
				t.co615,
				t.co715,
			]),

			[
				"PO1 :Mapping Level", // Label for the special row
				"", // Empty cell for Competency
				"", // Empty cell for Indicators
				"", // Empty cell for Weight
				table[0].po1mapco1, // Data for po1mapco1
				table[0].po1mapco2, // Data for po1mapco2
				table[0].po1mapco3, // Data for po1mapco3
				table[0].po1mapco4, // Data for po1mapco4
				table[0].po1mapco5, // Data for po1mapco5
				table[0].po1mapco6, // Data for po1mapco6
				table[0].po1mapco7, // Data for po1mapco7
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
						{table.map((t: any, index: number) => (
							<tr key={index}>
								<td>{t.po11}</td>
								<td>{t.competency11}</td>
								<td>{t.indicators11}</td>
								<td>{t.weight11}</td>
								<td>{t.co111}</td>
								<td>{t.co211}</td>
								<td>{t.co311}</td>
								<td>{t.co411}</td>
								<td>{t.co511}</td>
								<td>{t.co611}</td>
								<td>{t.co711}</td>
							</tr>
						))}
						{table.map((t: any, index: number) => (
							<tr key={index}>
								<td>{t.po12}</td>
								<td>{t.competency12}</td>
								<td>{t.indicators12}</td>
								<td>{t.weight12}</td>
								<td>{t.co112}</td>
								<td>{t.co212}</td>
								<td>{t.co312}</td>
								<td>{t.co412}</td>
								<td>{t.co512}</td>
								<td>{t.co612}</td>
								<td>{t.co712}</td>
							</tr>
						))}
						{table.map((t: any, index: number) => (
							<tr key={index}>
								<td>{t.po13}</td>
								<td>{t.competency13}</td>
								<td>{t.indicators13}</td>
								<td>{t.weight13}</td>
								<td>{t.co113}</td>
								<td>{t.co213}</td>
								<td>{t.co313}</td>
								<td>{t.co413}</td>
								<td>{t.co513}</td>
								<td>{t.co613}</td>
								<td>{t.co713}</td>
							</tr>
						))}
						{table.map((t: any, index: number) => (
							<tr key={index}>
								<td>{t.po14}</td>
								<td>{t.competency14}</td>
								<td>{t.indicators14}</td>
								<td>{t.weight14}</td>
								<td>{t.co114}</td>
								<td>{t.co214}</td>
								<td>{t.co314}</td>
								<td>{t.co414}</td>
								<td>{t.co514}</td>
								<td>{t.co614}</td>
								<td>{t.co714}</td>
							</tr>
						))}
						{table.map((t: any, index: number) => (
							<tr key={index}>
								<td>{t.po15}</td>
								<td>{t.competency15}</td>
								<td>{t.indicators15}</td>
								<td>{t.weight15}</td>
								<td>{t.co115}</td>
								<td>{t.co215}</td>
								<td>{t.co315}</td>
								<td>{t.co415}</td>
								<td>{t.co515}</td>
								<td>{t.co615}</td>
								<td>{t.co715}</td>
							</tr>
						))}
						{table.map((t: any, index: number) => (
							<tr key={index}>
								<td colSpan={4} className='h-16'>
									PO1 :Mapping Level
								</td>

								<td>{t.po1mapco1}</td>
								<td>{t.po1mapco2}</td>
								<td>{t.po1mapco3}</td>
								<td>{t.po1mapco4}</td>
								<td>{t.po1mapco5}</td>
								<td>{t.po1mapco6}</td>
								<td>{t.po1mapco7}</td>
							</tr>
						))}
					</tbody>
				</table>
			</Card>
			<Button onClick={exportToExcel}>Download as Excel</Button>
		</>
	);
};

export default DisplayTable;
