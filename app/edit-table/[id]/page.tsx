"use client";
import { Button, Card, Input, Spinner, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const TableDetail = ({ params }: { params: { id: string } }) => {
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
			} catch (error) {
				setError("Error fetching table data");
			} finally {
				setLoading(false);
			}
		};

		fetchTableData();
	}, [id]);

	// Define the calculation function
	const calculatePo1mapco1 = () => {
		const sumCo =
			parseInt(editedTable?.co111 || 0) +
			parseInt(editedTable?.co112 || 0) +
			parseInt(editedTable?.co113 || 0) +
			parseInt(editedTable?.co114 || 0) +
			parseInt(editedTable?.co115 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po1mapco1: calculatedValue,
		}));
	};
	const calculatePo1mapco2 = () => {
		const sumCo =
			parseInt(editedTable?.co211 || 0) +
			parseInt(editedTable?.co212 || 0) +
			parseInt(editedTable?.co213 || 0) +
			parseInt(editedTable?.co214 || 0) +
			parseInt(editedTable?.co215 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po1mapco2: calculatedValue,
		}));
	};
	const calculatePo1mapco3 = () => {
		const sumCo =
			parseInt(editedTable?.co311 || 0) +
			parseInt(editedTable?.co312 || 0) +
			parseInt(editedTable?.co313 || 0) +
			parseInt(editedTable?.co314 || 0) +
			parseInt(editedTable?.co315 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po1mapco3: calculatedValue,
		}));
	};
	const calculatePo1mapco4 = () => {
		const sumCo =
			parseInt(editedTable?.co411 || 0) +
			parseInt(editedTable?.co412 || 0) +
			parseInt(editedTable?.co413 || 0) +
			parseInt(editedTable?.co414 || 0) +
			parseInt(editedTable?.co415 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po1mapco4: calculatedValue,
		}));
	};
	const calculatePo1mapco5 = () => {
		const sumCo =
			parseInt(editedTable?.co511 || 0) +
			parseInt(editedTable?.co512 || 0) +
			parseInt(editedTable?.co513 || 0) +
			parseInt(editedTable?.co514 || 0) +
			parseInt(editedTable?.co515 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po1mapco5: calculatedValue,
		}));
	};
	const calculatePo1mapco6 = () => {
		const sumCo =
			parseInt(editedTable?.co611 || 0) +
			parseInt(editedTable?.co612 || 0) +
			parseInt(editedTable?.co613 || 0) +
			parseInt(editedTable?.co614 || 0) +
			parseInt(editedTable?.co615 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po1mapco6: calculatedValue,
		}));
	};
	const calculatePo1mapco7 = () => {
		const sumCo =
			parseInt(editedTable?.co711 || 0) +
			parseInt(editedTable?.co712 || 0) +
			parseInt(editedTable?.co713 || 0) +
			parseInt(editedTable?.co714 || 0) +
			parseInt(editedTable?.co715 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po1mapco7: calculatedValue,
		}));
	};

	// Call the calculation function whenever any of the co values change
	useEffect(() => {
		calculatePo1mapco1();
		calculatePo1mapco2();
		calculatePo1mapco3();
		calculatePo1mapco4();
		calculatePo1mapco5();
		calculatePo1mapco6();
		calculatePo1mapco7();
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
	]);

	// **************************    PO:1     *************************************

	const handleCo111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co111: e.target.value,
		}));
	};
	const handleCo211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co211: e.target.value,
		}));
	};
	const handleCo311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co311: e.target.value,
		}));
	};
	const handleCo411Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co411: e.target.value,
		}));
	};
	const handleCo511Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co511: e.target.value,
		}));
	};
	const handleCo611Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co611: e.target.value,
		}));
	};
	const handleCo711Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co711: e.target.value,
		}));
	};

	const handleCo112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co112: e.target.value,
		}));
	};
	const handleCo212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co212: e.target.value,
		}));
	};
	const handleCo312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co312: e.target.value,
		}));
	};
	const handleCo412Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co412: e.target.value,
		}));
	};
	const handleCo512Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co512: e.target.value,
		}));
	};
	const handleCo612Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co612: e.target.value,
		}));
	};
	const handleCo712Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co712: e.target.value,
		}));
	};

	const handleCo113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co113: e.target.value,
		}));
	};
	const handleCo213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co213: e.target.value,
		}));
	};
	const handleCo313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co313: e.target.value,
		}));
	};
	const handleCo413Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co413: e.target.value,
		}));
	};
	const handleCo513Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co513: e.target.value,
		}));
	};
	const handleCo613Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co613: e.target.value,
		}));
	};
	const handleCo713Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co713: e.target.value,
		}));
	};

	const handleCo114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co114: e.target.value,
		}));
	};
	const handleCo214Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co214: e.target.value,
		}));
	};
	const handleCo314Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co314: e.target.value,
		}));
	};
	const handleCo414Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co414: e.target.value,
		}));
	};
	const handleCo514Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co514: e.target.value,
		}));
	};
	const handleCo614Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co614: e.target.value,
		}));
	};
	const handleCo714Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co714: e.target.value,
		}));
	};

	const handleCo115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co115: e.target.value,
		}));
	};
	const handleCo215Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co215: e.target.value,
		}));
	};
	const handleCo315Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co315: e.target.value,
		}));
	};
	const handleCo415Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co415: e.target.value,
		}));
	};
	const handleCo515Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co515: e.target.value,
		}));
	};
	const handleCo615Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co615: e.target.value,
		}));
	};
	const handleCo715Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co715: e.target.value,
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
		<div>
			<table
				className='  table-fixed mt-20'
				aria-label='Example static collection table'
			>
				<thead>
					<tr>
						<th>PO</th>
						<th>Competency</th>
						<th>Indicators</th>
						<th>Weight</th>
						<th>CO1</th>
						<th>CO2</th>
						<th>CO3</th>
						<th>CO4</th>
						<th>CO5</th>
						<th>CO6</th>
						<th>CO7</th>
					</tr>
				</thead>
				<tbody>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.po11} className='my-6' />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.competency11} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators11} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight11} />
						</td>
						<td>
							<Input
								min={0}
								max={1}
								type='number'
								value={editedTable?.co111}
								onChange={handleCo111Change}
							/>
						</td>
						<td>
							<Input
								min={0}
								max={1}
								type='number'
								value={editedTable?.co211}
								onChange={handleCo211Change}
							/>
						</td>
						<td>
							<Input
								min={0}
								max={1}
								type='number'
								value={editedTable?.co311}
								onChange={handleCo311Change}
							/>
						</td>
						<td>
							<Input
								min={0}
								max={1}
								type='number'
								value={editedTable?.co411}
								onChange={handleCo411Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co511}
								onChange={handleCo511Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co611}
								onChange={handleCo611Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co711}
								onChange={handleCo711Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.po12} className='my-6' />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.competency12} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators12} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight12} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co112}
								onChange={handleCo112Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co212}
								onChange={handleCo212Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co312}
								onChange={handleCo312Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co412}
								onChange={handleCo412Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co512}
								onChange={handleCo512Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co612}
								onChange={handleCo612Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co712}
								onChange={handleCo712Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.po13} className='my-6' />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.competency13} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators13} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight13} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co113}
								onChange={handleCo113Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co213}
								onChange={handleCo213Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co313}
								onChange={handleCo313Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co413}
								onChange={handleCo413Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co513}
								onChange={handleCo513Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co613}
								onChange={handleCo613Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co713}
								onChange={handleCo713Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.po14} className='my-6' />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.competency14} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators14} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight14} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co114}
								onChange={handleCo114Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co214}
								onChange={handleCo214Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co314}
								onChange={handleCo314Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co414}
								onChange={handleCo414Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co514}
								onChange={handleCo514Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co614}
								onChange={handleCo614Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co714}
								onChange={handleCo714Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.po15} className='my-6' />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.competency15} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators15} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight15} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co115}
								onChange={handleCo115Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co215}
								onChange={handleCo215Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co315}
								onChange={handleCo315Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co415}
								onChange={handleCo415Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co515}
								onChange={handleCo515Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co615}
								onChange={handleCo615Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co715}
								onChange={handleCo715Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td colSpan={4}>
							<Textarea readOnly value='PO1 : Mapping Level' className='my-6' />
						</td>

						<td>
							<Input type='number' value={editedTable?.po1mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.po1mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po1mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po1mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po1mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po1mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po1mapco7} readOnly />{" "}
						</td>
					</tr>
				</tbody>
			</table>

			<Button onClick={handleSaveChanges}>Save Changes</Button>
		</div>
	);
};

export default TableDetail;
