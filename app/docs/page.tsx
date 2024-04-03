import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from "@nextui-org/react";

const getTable = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/table", {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to fetch toptics");
		}

		return await res.json(); // Return the JSON response
	} catch (error) {
		console.log("error loding topics", error);
	}
};

export default async function DocsPage() {
	const { table } = await getTable();

	if (!table) {
		// Handle the case where table is null
		return <div>Error loading data</div>;
	}
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

	return (
		<>
			{table.map(
				(
					t: any,
					index: number // Correct the typing for 't'
				) => (
					<div key={index} className='flex justify-center'>
						<table className='table-fixed  '>
							<thead>
								<tr>
									<th>Song</th>
									<th>Artist</th>
									<th>Year</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{t.p12} </td>
									<td>Malcolm Lockyer</td>
									<td>1961</td>
								</tr>
								<tr>
									<td>Witchy Woman</td>
									<td>The Eagles</td>
									<td>1972</td>
								</tr>
								<tr>
									<td>Shining Star</td>
									<td>Earth, Wind, and Fire</td>
									<td>1975</td>
								</tr>
							</tbody>
						</table>
					</div> // Add a key prop
				)
			)}

			<DataGrid rows={rows} columns={columns} />
			{/* <div>
				<Table>
					<TableHeader>
						<TableColumn>PO</TableColumn>
						<TableColumn>Competency</TableColumn>
						<TableColumn>Indicators</TableColumn>
						<TableColumn>Indicators</TableColumn>
						<TableColumn>Weight</TableColumn>
						<TableColumn>CO1</TableColumn>
						<TableColumn>CO2</TableColumn>
						<TableColumn>CO3</TableColumn>
						<TableColumn>CO4</TableColumn>
						<TableColumn>CO5</TableColumn>
						<TableColumn>CO6</TableColumn>
						<TableColumn>CO7</TableColumn>
					</TableHeader>
					<TableBody>
						<TableRow key='1'>
							<TableCell>{table.po11}</TableCell>
							<TableCell>CEO</TableCell>
							<TableCell>Active</TableCell>
							<TableCell>Active</TableCell>
							<TableCell>Active</TableCell>
							<TableCell>Active</TableCell>
							<TableCell>Active</TableCell>
							<TableCell>Active</TableCell>
							<TableCell>Active</TableCell>
							<TableCell>Active</TableCell>
							<TableCell>Active</TableCell>
							<TableCell>Active</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div> */}
		</>
	);
}
