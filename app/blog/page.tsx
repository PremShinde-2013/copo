"use client";
import * as React from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import {
	randomCreatedDate,
	randomTraderName,
	randomUpdatedDate,
} from "@mui/x-data-grid-generator";

export default function BasicRowEditingGrid() {
	const columns: GridColDef[] = [
		// Define your columns with editable set to true
		{ field: "PO", headerName: "PO", width: 180, editable: true },
		{
			field: "Competency",
			headerName: "Competency",
			type: "string",
			width: 180,
			editable: true,
		},
		{
			field: "Indicators",
			headerName: "Indicators",
			type: "string",
			width: 220,
			editable: true,
		},
		{
			field: "Weight",
			headerName: "Weight",
			type: "number",
			width: 220,
			editable: true,
		},
		{
			field: "CO1",
			headerName: "CO1",
			type: "number",
			width: 220,
			editable: true,
		},
		{
			field: "CO2",
			headerName: "CO2",
			type: "number",
			width: 220,
			editable: true,
		},
		{
			field: "CO3",
			headerName: "CO3",
			type: "number",
			width: 220,
			editable: true,
		},
		{
			field: "CO4",
			headerName: "CO4",
			type: "number",
			width: 220,
			editable: true,
		},
		{
			field: "CO5",
			headerName: "CO5",
			type: "number",
			width: 220,
			editable: true,
		},
		{
			field: "CO6",
			headerName: "CO6",
			type: "number",
			width: 220,
			editable: true,
		},
		{
			field: "CO7",
			headerName: "CO7",
			type: "number",
			width: 220,
			editable: true,
		},
	];

	const rows: GridRowsProp = [
		/* Your rows data */
		{
			id: 1,
			PO: "PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems.",
			Competency: "1.1  Demonstrate competence in mathematical modelling",
			Indicators:
				"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems",
			Weight: 0.2,
			CO1: 1,
			CO2: 1,
			CO3: 1,
			CO4: 1,
			CO5: 1,
			CO6: 1,
			CO7: 1,
		},
		{
			id: 2,
			PO: "PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems.",
			Competency: "1.1  Demonstrate competence in mathematical modelling",
			Indicators:
				"1.1.2      Apply advanced mathematical techniques to model and solve mechanical engineering problems",
			Weight: 0.2,
			CO1: 1,
			CO2: 1,
			CO3: 1,
			CO4: 1,
			CO5: 1,
			CO6: 1,
			CO7: 1,
		},
		{
			id: 3,
			PO: "PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems.",
			Competency: "1.2 Demonstrate competence in basic sciences",
			Indicators:
				"1.2.1  Apply laws of natural science to an engineering problem",
			Weight: 0.2,
			CO1: 1,
			CO2: 1,
			CO3: 1,
			CO4: 1,
			CO5: 1,
			CO6: 1,
			CO7: 1,
		},
		{
			id: 4,
			PO: "PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems.",
			Competency: "1.3 Demonstrate competence in engineering fundamentals",
			Indicators:
				"1.3.1  Apply fundamental engineering concepts to solve engineering problems",
			Weight: 0.2,
			CO1: 1,
			CO2: 1,
			CO3: 1,
			CO4: 1,
			CO5: 1,
			CO6: 1,
			CO7: 1,
		},
		{
			id: 5,
			PO: "PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems.",
			Competency:
				"1.4 Demonstrate competence in specialized engineering knowledge to the program",
			Indicators:
				"1.4.1  Apply Mechanical engineering concepts to solve engineering problems.",
			Weight: 0.2,
			CO1: 1,
			CO2: 1,
			CO3: 1,
			CO4: 1,
			CO5: 1,
			CO6: 1,
			CO7: 1,
		},
		{
			id: 6,
			PO: "Mapping Level",
			colSpan: 4,
			hideable: false,

			CO1: 1,
			CO2: 1,
			CO3: 1,
			CO4: 1,
			CO5: 1,
			CO6: 1,
			CO7: 1,
		},
	];

	rows.forEach((row) => {
		const { CO1, CO2, CO3, CO4, CO5 } = row;
		const sumCO1toCO5 = CO1 + CO2 + CO3 + CO4 + CO5;
		row.CO6 = Math.round((sumCO1toCO5 * 0.2) / 0.33);
	});
	return (
		<div style={{ height: 1000, width: "100%" }}>
			<DataGrid editMode='row' rows={rows} columns={columns} />
		</div>
	);
}
