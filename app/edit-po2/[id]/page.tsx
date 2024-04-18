"use client";
import { Button, Input, Link, Spinner, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const TablePo2 = ({ params }: { params: { id: string } }) => {
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
				setLoading(false); // Move setLoading to after state updates
			} catch (error) {
				setError("Error fetching table data");
				setLoading(false); // Also move setLoading here in case of error
			}
		};

		fetchTableData();
	}, [id]);

	// *********************************    Po 2  ***********************
	// Define the calculation function
	const calculatePo2mapco1 = () => {
		const sumCo =
			parseInt(editedTable?.co121 || "") +
			parseInt(editedTable?.co122 || "") +
			parseInt(editedTable?.co123 || "") +
			parseInt(editedTable?.co124 || "") +
			parseInt(editedTable?.co125 || "") +
			parseInt(editedTable?.co126 || "") +
			parseInt(editedTable?.co127 || "") +
			parseInt(editedTable?.co128 || "") +
			parseInt(editedTable?.co129 || "") +
			parseInt(editedTable?.co1210 || "") +
			parseInt(editedTable?.co1211 || "") +
			parseInt(editedTable?.co1212 || "") +
			parseInt(editedTable?.co1213 || "");
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po2mapco1: calculatedValue,
		}));
	};
	const calculatePo2mapco2 = () => {
		const sumCo =
			parseInt(editedTable?.co221 || "") +
			parseInt(editedTable?.co222 || "") +
			parseInt(editedTable?.co223 || "") +
			parseInt(editedTable?.co224 || "") +
			parseInt(editedTable?.co225 || "") +
			parseInt(editedTable?.co226 || "") +
			parseInt(editedTable?.co227 || "") +
			parseInt(editedTable?.co228 || "") +
			parseInt(editedTable?.co229 || "") +
			parseInt(editedTable?.co2210 || "") +
			parseInt(editedTable?.co2211 || "") +
			parseInt(editedTable?.co2212 || "") +
			parseInt(editedTable?.co2213 || "");
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po2mapco2: calculatedValue,
		}));
	};
	const calculatePo2mapco3 = () => {
		const sumCo =
			parseInt(editedTable?.co321 || "") +
			parseInt(editedTable?.co322 || "") +
			parseInt(editedTable?.co323 || "") +
			parseInt(editedTable?.co324 || "") +
			parseInt(editedTable?.co325 || "") +
			parseInt(editedTable?.co326 || "") +
			parseInt(editedTable?.co327 || "") +
			parseInt(editedTable?.co328 || "") +
			parseInt(editedTable?.co329 || "") +
			parseInt(editedTable?.co3210 || "") +
			parseInt(editedTable?.co3211 || "") +
			parseInt(editedTable?.co3212 || "") +
			parseInt(editedTable?.co3213 || "");
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po2mapco3: calculatedValue,
		}));
	};
	const calculatePo2mapco4 = () => {
		const sumCo =
			parseInt(editedTable?.co421 || "") +
			parseInt(editedTable?.co422 || "") +
			parseInt(editedTable?.co423 || "") +
			parseInt(editedTable?.co424 || "") +
			parseInt(editedTable?.co425 || "") +
			parseInt(editedTable?.co426 || "") +
			parseInt(editedTable?.co427 || "") +
			parseInt(editedTable?.co428 || "") +
			parseInt(editedTable?.co429 || "") +
			parseInt(editedTable?.co4210 || "") +
			parseInt(editedTable?.co4211 || "") +
			parseInt(editedTable?.co4212 || "") +
			parseInt(editedTable?.co4213 || "");
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po2mapco4: calculatedValue,
		}));
	};
	const calculatePo2mapco5 = () => {
		const sumCo =
			parseInt(editedTable?.co521 || "") +
			parseInt(editedTable?.co522 || "") +
			parseInt(editedTable?.co523 || "") +
			parseInt(editedTable?.co524 || "") +
			parseInt(editedTable?.co525 || "") +
			parseInt(editedTable?.co526 || "") +
			parseInt(editedTable?.co527 || "") +
			parseInt(editedTable?.co528 || "") +
			parseInt(editedTable?.co529 || "") +
			parseInt(editedTable?.co5210 || "") +
			parseInt(editedTable?.co5211 || "") +
			parseInt(editedTable?.co5212 || "") +
			parseInt(editedTable?.co5213 || "");
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po2mapco5: calculatedValue,
		}));
	};
	const calculatePo2mapco6 = () => {
		const sumCo =
			parseInt(editedTable?.co621 || "") +
			parseInt(editedTable?.co622 || "") +
			parseInt(editedTable?.co623 || "") +
			parseInt(editedTable?.co624 || "") +
			parseInt(editedTable?.co625 || "") +
			parseInt(editedTable?.co626 || "") +
			parseInt(editedTable?.co627 || "") +
			parseInt(editedTable?.co628 || "") +
			parseInt(editedTable?.co629 || "") +
			parseInt(editedTable?.co6210 || "") +
			parseInt(editedTable?.co6211 || "") +
			parseInt(editedTable?.co6212 || "") +
			parseInt(editedTable?.co6213 || "");
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po2mapco6: calculatedValue,
		}));
	};
	const calculatePo2mapco7 = () => {
		const sumCo =
			parseInt(editedTable?.co721 || "") +
			parseInt(editedTable?.co722 || "") +
			parseInt(editedTable?.co723 || "") +
			parseInt(editedTable?.co724 || "") +
			parseInt(editedTable?.co725 || "") +
			parseInt(editedTable?.co726 || "") +
			parseInt(editedTable?.co727 || "") +
			parseInt(editedTable?.co728 || "") +
			parseInt(editedTable?.co729 || "") +
			parseInt(editedTable?.co7210 || "") +
			parseInt(editedTable?.co7211 || "") +
			parseInt(editedTable?.co7212 || "") +
			parseInt(editedTable?.co7213 || "");
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po2mapco7: calculatedValue,
		}));
	};

	// Call the calculation function whenever any of the co values change
	useEffect(() => {
		//  ************************************      po2           *******************************

		calculatePo2mapco1();
		calculatePo2mapco2();
		calculatePo2mapco3();
		calculatePo2mapco4();
		calculatePo2mapco5();
		calculatePo2mapco6();
		calculatePo2mapco7();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		editedTable?.co121,
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

		editedTable?.co121,
		editedTable?.co122,
		editedTable?.co123,
		editedTable?.co124,
		editedTable?.co125,
		editedTable?.co126,
		editedTable?.co127,
		editedTable?.co128,
		editedTable?.co129,
		editedTable?.co1210,
		editedTable?.co1211,
		editedTable?.co1212,
		editedTable?.co1213,

		editedTable?.co221,
		editedTable?.co222,
		editedTable?.co223,
		editedTable?.co224,
		editedTable?.co225,
		editedTable?.co226,
		editedTable?.co227,
		editedTable?.co228,
		editedTable?.co229,
		editedTable?.co2210,
		editedTable?.co2211,
		editedTable?.co2212,
		editedTable?.co2213,

		editedTable?.co321,
		editedTable?.co322,
		editedTable?.co323,
		editedTable?.co324,
		editedTable?.co325,
		editedTable?.co326,
		editedTable?.co327,
		editedTable?.co328,
		editedTable?.co329,
		editedTable?.co3210,
		editedTable?.co3211,
		editedTable?.co3212,
		editedTable?.co3213,

		editedTable?.co421,
		editedTable?.co422,
		editedTable?.co423,
		editedTable?.co424,
		editedTable?.co425,
		editedTable?.co426,
		editedTable?.co427,
		editedTable?.co428,
		editedTable?.co429,
		editedTable?.co4210,
		editedTable?.co4211,
		editedTable?.co4212,
		editedTable?.co4213,

		editedTable?.co521,
		editedTable?.co522,
		editedTable?.co523,
		editedTable?.co524,
		editedTable?.co525,
		editedTable?.co526,
		editedTable?.co527,
		editedTable?.co528,
		editedTable?.co529,
		editedTable?.co5210,
		editedTable?.co5211,
		editedTable?.co5212,
		editedTable?.co5213,

		editedTable?.co621,
		editedTable?.co622,
		editedTable?.co623,
		editedTable?.co624,
		editedTable?.co625,
		editedTable?.co626,
		editedTable?.co627,
		editedTable?.co628,
		editedTable?.co629,
		editedTable?.co6210,
		editedTable?.co6211,
		editedTable?.co6212,
		editedTable?.co6213,

		editedTable?.co721,
		editedTable?.co722,
		editedTable?.co723,
		editedTable?.co724,
		editedTable?.co725,
		editedTable?.co726,
		editedTable?.co727,
		editedTable?.co728,
		editedTable?.co729,
		editedTable?.co7210,
		editedTable?.co7211,
		editedTable?.co7212,
		editedTable?.co7213,
	]);

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
	const handleInputChange = (value: string, fieldName: string) => {
		const parsedValue = parseFloat(value);

		if (parsedValue > 1) {
			toast.error("Value cannot be greater than 1");
		} else {
			setEditedTable((prevTable: any) => ({
				...prevTable,
				[fieldName]: String(Math.min(Math.max(parsedValue, 0), 1)),
			}));
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
		<div className='overflow-x-auto'>
			<table
				className='  min-w-full divide-y divide-gray-200   mt-20 '
				aria-label='Example static collection table'
			>
				<thead className=''>
					<tr>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							PO
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							Competency
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							Indicators
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							Weight
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							CO1
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							CO2
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							CO3
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							CO4
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							CO5
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							CO6
						</th>
						<th className='px-6 py-3 text-left  font-medium  uppercase tracking-wider'>
							CO7
						</th>
					</tr>
				</thead>
				<tbody className=' '>
					{/* *****************************************     PO:2       ****************************************/}

					<tr className='m-4'>
						<td rowSpan={13}>
							<Textarea readOnly value={editedTable?.po21} className='my-6' />
						</td>
						<td rowSpan={3}>
							<Textarea readOnly value={editedTable?.competency21} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators21} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight21} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co121 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co121")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co221 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co221")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co321 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co321")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co421 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co421")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co521 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co521")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co621 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co621")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co721 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co721")}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators22} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight22} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co122 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co122")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co222 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co222")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co322 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co322")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co422 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co422")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co522 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co522")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co622 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co622")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co722 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co722")}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators23} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight23} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co123 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co123")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co223 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co223")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co323 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co323")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co423 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co423")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co523 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co523")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co623 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co623")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co723 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co723")}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={4}>
							<Textarea readOnly value={editedTable?.competency22} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators24} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight24} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co124 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co124")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co224 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co224")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co324 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co324")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co424 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co424")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co524 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co524")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co624 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co624")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co724 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co724")}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators25} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight25} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co125 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co125")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co225 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co225")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co325 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co325")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co425 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co425")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co525 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co525")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co625 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co625")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co725 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co725")}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators26} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight26} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co126 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co126")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co226 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co226")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co326 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co326")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co426 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co426")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co526 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co526")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co626 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co626")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co726 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co726")}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators27} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight27} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co127 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co127")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co227 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co227")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co327 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co327")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co427 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co427")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co527 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co527")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co627 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co627")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co727 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co727")}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency23} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators28} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight28} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co128 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co128")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co228 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co228")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co328 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co328")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co428 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co428")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co528 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co528")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co628 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co628")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co728 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co728")}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators29} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight29} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co129 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co129")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co229 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co229")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co329 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co329")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co429 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co429")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co529 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co529")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co629 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co629")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co729 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co729")}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={4}>
							<Textarea readOnly value={editedTable?.competency24} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators210} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight210} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1210 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co1210")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2210 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co2210")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3210 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co3210")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4210 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co4210")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5210 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co5210")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6210 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co6210")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7210 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co7210")}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators211} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight211} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1211 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co1211")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2211 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co2211")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3211 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co3211")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4211 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co4211")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5211 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co5211")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6211 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co6211")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7211 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co7211")}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators212} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight212} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1212 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co1212")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2212 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co2212")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3212 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co3212")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4212 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co4212")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5212 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co5212")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6212 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co6212")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7212 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co7212")}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators213} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight213} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1213 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co1213")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2213 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co2213")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3213 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co3213")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4213 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co4213")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5213 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co5213")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6213 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co6213")}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7213 || ""}
								onChange={(e) => handleInputChange(e.target.value, "co7213")}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td colSpan={4}>
							<Textarea readOnly value='PO2 : Mapping Level' className='my-6' />
						</td>

						<td>
							<Input type='number' value={editedTable?.po2mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.po2mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po2mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po2mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po2mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po2mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po2mapco7} readOnly />{" "}
						</td>
					</tr>
				</tbody>
			</table>
			<Button onClick={handleSaveChanges}>Save Changes</Button>
		</div>
	);
};

export default TablePo2;
