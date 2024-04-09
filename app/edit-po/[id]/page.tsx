"use client";
import { Button, Input, Link, Spinner, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const TableDetail = ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const [table, setTable2] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [editedTable2, setEditedTable2] = useState<any>(null);

	useEffect(() => {
		const fetchTableData = async () => {
			try {
				const response = await fetch(`/api/table/${id}`);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const data = await response.json();
				setTable2(data.table);
				setEditedTable2(data.table);
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
			parseInt(editedTable2?.co111 || 0) +
			parseInt(editedTable2?.co112 || 0) +
			parseInt(editedTable2?.co113 || 0) +
			parseInt(editedTable2?.co114 || 0) +
			parseInt(editedTable2?.co115 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			po1mapco1: calculatedValue,
		}));
	};
	const calculatePo1mapco2 = () => {
		const sumCo =
			parseInt(editedTable2?.co211 || 0) +
			parseInt(editedTable2?.co212 || 0) +
			parseInt(editedTable2?.co213 || 0) +
			parseInt(editedTable2?.co214 || 0) +
			parseInt(editedTable2?.co215 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			po1mapco2: calculatedValue,
		}));
	};
	const calculatePo1mapco3 = () => {
		const sumCo =
			parseInt(editedTable2?.co311 || 0) +
			parseInt(editedTable2?.co312 || 0) +
			parseInt(editedTable2?.co313 || 0) +
			parseInt(editedTable2?.co314 || 0) +
			parseInt(editedTable2?.co315 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			po1mapco3: calculatedValue,
		}));
	};
	const calculatePo1mapco4 = () => {
		const sumCo =
			parseInt(editedTable2?.co411 || 0) +
			parseInt(editedTable2?.co412 || 0) +
			parseInt(editedTable2?.co413 || 0) +
			parseInt(editedTable2?.co414 || 0) +
			parseInt(editedTable2?.co415 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			po1mapco4: calculatedValue,
		}));
	};
	const calculatePo1mapco5 = () => {
		const sumCo =
			parseInt(editedTable2?.co511 || 0) +
			parseInt(editedTable2?.co512 || 0) +
			parseInt(editedTable2?.co513 || 0) +
			parseInt(editedTable2?.co514 || 0) +
			parseInt(editedTable2?.co515 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			po1mapco5: calculatedValue,
		}));
	};
	const calculatePo1mapco6 = () => {
		const sumCo =
			parseInt(editedTable2?.co611 || 0) +
			parseInt(editedTable2?.co612 || 0) +
			parseInt(editedTable2?.co613 || 0) +
			parseInt(editedTable2?.co614 || 0) +
			parseInt(editedTable2?.co615 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			po1mapco6: calculatedValue,
		}));
	};
	const calculatePo1mapco7 = () => {
		const sumCo =
			parseInt(editedTable2?.co711 || 0) +
			parseInt(editedTable2?.co712 || 0) +
			parseInt(editedTable2?.co713 || 0) +
			parseInt(editedTable2?.co714 || 0) +
			parseInt(editedTable2?.co715 || 0);
		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
		setEditedTable2((prevTable: any) => ({
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
		editedTable2?.co111,
		editedTable2?.co112,
		editedTable2?.co113,
		editedTable2?.co114,
		editedTable2?.co115,
		editedTable2?.co211,
		editedTable2?.co212,
		editedTable2?.co213,
		editedTable2?.co214,
		editedTable2?.co215,
		editedTable2?.co311,
		editedTable2?.co312,
		editedTable2?.co313,
		editedTable2?.co314,
		editedTable2?.co315,
		editedTable2?.co411,
		editedTable2?.co412,
		editedTable2?.co413,
		editedTable2?.co414,
		editedTable2?.co415,
		editedTable2?.co511,
		editedTable2?.co512,
		editedTable2?.co513,
		editedTable2?.co514,
		editedTable2?.co515,
		editedTable2?.co611,
		editedTable2?.co612,
		editedTable2?.co613,
		editedTable2?.co614,
		editedTable2?.co615,
		editedTable2?.co711,
		editedTable2?.co712,
		editedTable2?.co713,
		editedTable2?.co714,
		editedTable2?.co715,

		editedTable2?.co121,
		editedTable2?.co122,
		editedTable2?.co123,
		editedTable2?.co124,
		editedTable2?.co125,
		editedTable2?.co126,
		editedTable2?.co127,
		editedTable2?.co128,
		editedTable2?.co129,
		editedTable2?.co1210,
		editedTable2?.co1211,
		editedTable2?.co1212,
		editedTable2?.co1213,

		editedTable2?.co221,
		editedTable2?.co222,
		editedTable2?.co223,
		editedTable2?.co224,
		editedTable2?.co225,
		editedTable2?.co226,
		editedTable2?.co227,
		editedTable2?.co228,
		editedTable2?.co229,
		editedTable2?.co2210,
		editedTable2?.co2211,
		editedTable2?.co2212,
		editedTable2?.co2213,

		editedTable2?.co321,
		editedTable2?.co322,
		editedTable2?.co323,
		editedTable2?.co324,
		editedTable2?.co325,
		editedTable2?.co326,
		editedTable2?.co327,
		editedTable2?.co328,
		editedTable2?.co329,
		editedTable2?.co3210,
		editedTable2?.co3211,
		editedTable2?.co3212,
		editedTable2?.co3213,

		editedTable2?.co421,
		editedTable2?.co422,
		editedTable2?.co423,
		editedTable2?.co424,
		editedTable2?.co425,
		editedTable2?.co426,
		editedTable2?.co427,
		editedTable2?.co428,
		editedTable2?.co429,
		editedTable2?.co4210,
		editedTable2?.co4211,
		editedTable2?.co4212,
		editedTable2?.co4213,

		editedTable2?.co521,
		editedTable2?.co522,
		editedTable2?.co523,
		editedTable2?.co524,
		editedTable2?.co525,
		editedTable2?.co526,
		editedTable2?.co527,
		editedTable2?.co528,
		editedTable2?.co529,
		editedTable2?.co5210,
		editedTable2?.co5211,
		editedTable2?.co5212,
		editedTable2?.co5213,

		editedTable2?.co621,
		editedTable2?.co622,
		editedTable2?.co623,
		editedTable2?.co624,
		editedTable2?.co625,
		editedTable2?.co626,
		editedTable2?.co627,
		editedTable2?.co628,
		editedTable2?.co629,
		editedTable2?.co6210,
		editedTable2?.co6211,
		editedTable2?.co6212,
		editedTable2?.co6213,

		editedTable2?.co721,
		editedTable2?.co722,
		editedTable2?.co723,
		editedTable2?.co724,
		editedTable2?.co725,
		editedTable2?.co726,
		editedTable2?.co727,
		editedTable2?.co728,
		editedTable2?.co729,
		editedTable2?.co7210,
		editedTable2?.co7211,
		editedTable2?.co7212,
		editedTable2?.co7213,
	]);

	// **************************    PO:1     *************************************

	const handleCo111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co111: e.target.value,
		}));
	};
	const handleCo211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co211: e.target.value,
		}));
	};
	const handleCo311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co311: e.target.value,
		}));
	};
	const handleCo411Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co411: e.target.value,
		}));
	};
	const handleCo511Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co511: e.target.value,
		}));
	};
	const handleCo611Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co611: e.target.value,
		}));
	};
	const handleCo711Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co711: e.target.value,
		}));
	};

	const handleCo112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co112: e.target.value,
		}));
	};
	const handleCo212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co212: e.target.value,
		}));
	};
	const handleCo312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co312: e.target.value,
		}));
	};
	const handleCo412Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co412: e.target.value,
		}));
	};
	const handleCo512Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co512: e.target.value,
		}));
	};
	const handleCo612Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co612: e.target.value,
		}));
	};
	const handleCo712Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co712: e.target.value,
		}));
	};

	const handleCo113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co113: e.target.value,
		}));
	};
	const handleCo213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co213: e.target.value,
		}));
	};
	const handleCo313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co313: e.target.value,
		}));
	};
	const handleCo413Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co413: e.target.value,
		}));
	};
	const handleCo513Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co513: e.target.value,
		}));
	};
	const handleCo613Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co613: e.target.value,
		}));
	};
	const handleCo713Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co713: e.target.value,
		}));
	};

	const handleCo114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co114: e.target.value,
		}));
	};
	const handleCo214Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co214: e.target.value,
		}));
	};
	const handleCo314Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co314: e.target.value,
		}));
	};
	const handleCo414Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co414: e.target.value,
		}));
	};
	const handleCo514Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co514: e.target.value,
		}));
	};
	const handleCo614Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co614: e.target.value,
		}));
	};
	const handleCo714Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co714: e.target.value,
		}));
	};

	const handleCo115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co115: e.target.value,
		}));
	};
	const handleCo215Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co215: e.target.value,
		}));
	};
	const handleCo315Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co315: e.target.value,
		}));
	};
	const handleCo415Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co415: e.target.value,
		}));
	};
	const handleCo515Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co515: e.target.value,
		}));
	};
	const handleCo615Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
			...prevTable,
			co615: e.target.value,
		}));
	};
	const handleCo715Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable2((prevTable: any) => ({
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
				body: JSON.stringify(editedTable2),
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
							<Textarea readOnly value={editedTable2?.po11} className='my-6' />
						</td>
						<td>
							<Textarea readOnly value={editedTable2?.competency11} />
						</td>
						<td>
							<Textarea readOnly value={editedTable2?.indicators11} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable2?.weight11} />
						</td>
						<td>
							<Input
								min={0}
								max={1}
								type='number'
								value={editedTable2?.co111}
								onChange={handleCo111Change}
							/>
						</td>
						<td>
							<Input
								min={0}
								max={1}
								type='number'
								value={editedTable2?.co211}
								onChange={handleCo211Change}
							/>
						</td>
						<td>
							<Input
								min={0}
								max={1}
								type='number'
								value={editedTable2?.co311}
								onChange={handleCo311Change}
							/>
						</td>
						<td>
							<Input
								min={0}
								max={1}
								type='number'
								value={editedTable2?.co411}
								onChange={handleCo411Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co511}
								onChange={handleCo511Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co611}
								onChange={handleCo611Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co711}
								onChange={handleCo711Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable2?.po12} className='my-6' />
						</td>
						<td>
							<Textarea readOnly value={editedTable2?.competency12} />
						</td>
						<td>
							<Textarea readOnly value={editedTable2?.indicators12} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable2?.weight12} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co112}
								onChange={handleCo112Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co212}
								onChange={handleCo212Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co312}
								onChange={handleCo312Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co412}
								onChange={handleCo412Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co512}
								onChange={handleCo512Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co612}
								onChange={handleCo612Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co712}
								onChange={handleCo712Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable2?.po13} className='my-6' />
						</td>
						<td>
							<Textarea readOnly value={editedTable2?.competency13} />
						</td>
						<td>
							<Textarea readOnly value={editedTable2?.indicators13} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable2?.weight13} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co113}
								onChange={handleCo113Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co213}
								onChange={handleCo213Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co313}
								onChange={handleCo313Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co413}
								onChange={handleCo413Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co513}
								onChange={handleCo513Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co613}
								onChange={handleCo613Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co713}
								onChange={handleCo713Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable2?.po14} className='my-6' />
						</td>
						<td>
							<Textarea readOnly value={editedTable2?.competency14} />
						</td>
						<td>
							<Textarea readOnly value={editedTable2?.indicators14} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable2?.weight14} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co114}
								onChange={handleCo114Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co214}
								onChange={handleCo214Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co314}
								onChange={handleCo314Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co414}
								onChange={handleCo414Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co514}
								onChange={handleCo514Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co614}
								onChange={handleCo614Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co714}
								onChange={handleCo714Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable2?.po15} className='my-6' />
						</td>
						<td>
							<Textarea readOnly value={editedTable2?.competency15} />
						</td>
						<td>
							<Textarea readOnly value={editedTable2?.indicators15} />
						</td>
						<td>
							<Input type='number' value={editedTable2?.weight15} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co115}
								onChange={handleCo115Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co215}
								onChange={handleCo215Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co315}
								onChange={handleCo315Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co415}
								onChange={handleCo415Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co515}
								onChange={handleCo515Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co615}
								onChange={handleCo615Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable2?.co715}
								onChange={handleCo715Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td colSpan={4}>
							<Textarea readOnly value='PO1 : Mapping Level' className='my-6' />
						</td>

						<td>
							<Input type='number' value={editedTable2?.po1mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable2?.po1mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable2?.po1mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable2?.po1mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable2?.po1mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable2?.po1mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable2?.po1mapco7} readOnly />{" "}
						</td>
					</tr>
				</tbody>
			</table>
			<Button onClick={handleSaveChanges}>Save Changes</Button>

			<div className='mt-8'>
				<Link href={`/po-table/${editedTable2?._id}`}>
					<Button variant='flat' color='primary'>
						Edit
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default TableDetail;
