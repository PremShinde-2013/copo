// "use client";
// import { Button, Input, Link, Spinner, Textarea } from "@nextui-org/react";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// const TableDetail = ({ params }: { params: { id: string } }) => {
// 	const { id } = params;
// 	const [table, setTable] = useState<any>(null);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState<string | null>(null);
// 	const [editedTable, setEditedTable] = useState<any>(null);

// 	useEffect(() => {
// 		const fetchTableData = async () => {
// 			setLoading(true); // Set loading to true when fetching data

// 			try {
// 				const response = await fetch(`/api/table/${id}`);
// 				if (!response.ok) {
// 					throw new Error("Failed to fetch data");
// 				}
// 				const data = await response.json();
// 				setTable(data.table);
// 				setEditedTable(data.table);
// 				console.log(data);
// 			} catch (error) {
// 				setError("Error fetching table data");
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		fetchTableData();
// 	}, [id]);

// 	// Define the calculation function
// 	const calculatePo1mapco1 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co111 || 0) +
// 			parseInt(editedTable?.co112 || 0) +
// 			parseInt(editedTable?.co113 || 0) +
// 			parseInt(editedTable?.co114 || 0) +
// 			parseInt(editedTable?.co115 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po1mapco1: calculatedValue,
// 		}));
// 	};
// 	const calculatePo1mapco2 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co211 || 0) +
// 			parseInt(editedTable?.co212 || 0) +
// 			parseInt(editedTable?.co213 || 0) +
// 			parseInt(editedTable?.co214 || 0) +
// 			parseInt(editedTable?.co215 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po1mapco2: calculatedValue,
// 		}));
// 	};
// 	const calculatePo1mapco3 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co311 || 0) +
// 			parseInt(editedTable?.co312 || 0) +
// 			parseInt(editedTable?.co313 || 0) +
// 			parseInt(editedTable?.co314 || 0) +
// 			parseInt(editedTable?.co315 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po1mapco3: calculatedValue,
// 		}));
// 	};
// 	const calculatePo1mapco4 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co411 || 0) +
// 			parseInt(editedTable?.co412 || 0) +
// 			parseInt(editedTable?.co413 || 0) +
// 			parseInt(editedTable?.co414 || 0) +
// 			parseInt(editedTable?.co415 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po1mapco4: calculatedValue,
// 		}));
// 	};
// 	const calculatePo1mapco5 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co511 || 0) +
// 			parseInt(editedTable?.co512 || 0) +
// 			parseInt(editedTable?.co513 || 0) +
// 			parseInt(editedTable?.co514 || 0) +
// 			parseInt(editedTable?.co515 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po1mapco5: calculatedValue,
// 		}));
// 	};
// 	const calculatePo1mapco6 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co611 || 0) +
// 			parseInt(editedTable?.co612 || 0) +
// 			parseInt(editedTable?.co613 || 0) +
// 			parseInt(editedTable?.co614 || 0) +
// 			parseInt(editedTable?.co615 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po1mapco6: calculatedValue,
// 		}));
// 	};
// 	const calculatePo1mapco7 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co711 || 0) +
// 			parseInt(editedTable?.co712 || 0) +
// 			parseInt(editedTable?.co713 || 0) +
// 			parseInt(editedTable?.co714 || 0) +
// 			parseInt(editedTable?.co715 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po1mapco7: calculatedValue,
// 		}));
// 	};

// 	// *********************************    Po 2  ***********************
// 	// Define the calculation function
// 	const calculatePo2mapco1 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co121 || 0) +
// 			parseInt(editedTable?.co122 || 0) +
// 			parseInt(editedTable?.co123 || 0) +
// 			parseInt(editedTable?.co124 || 0) +
// 			parseInt(editedTable?.co125 || 0) +
// 			parseInt(editedTable?.co126 || 0) +
// 			parseInt(editedTable?.co127 || 0) +
// 			parseInt(editedTable?.co128 || 0) +
// 			parseInt(editedTable?.co129 || 0) +
// 			parseInt(editedTable?.co1210 || 0) +
// 			parseInt(editedTable?.co1211 || 0) +
// 			parseInt(editedTable?.co1212 || 0) +
// 			parseInt(editedTable?.co1213 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po2mapco1: calculatedValue,
// 		}));
// 	};
// 	const calculatePo2mapco2 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co221 || 0) +
// 			parseInt(editedTable?.co222 || 0) +
// 			parseInt(editedTable?.co223 || 0) +
// 			parseInt(editedTable?.co224 || 0) +
// 			parseInt(editedTable?.co225 || 0) +
// 			parseInt(editedTable?.co226 || 0) +
// 			parseInt(editedTable?.co227 || 0) +
// 			parseInt(editedTable?.co228 || 0) +
// 			parseInt(editedTable?.co229 || 0) +
// 			parseInt(editedTable?.co2210 || 0) +
// 			parseInt(editedTable?.co2211 || 0) +
// 			parseInt(editedTable?.co2212 || 0) +
// 			parseInt(editedTable?.co2213 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po2mapco2: calculatedValue,
// 		}));
// 	};
// 	const calculatePo2mapco3 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co321 || 0) +
// 			parseInt(editedTable?.co322 || 0) +
// 			parseInt(editedTable?.co323 || 0) +
// 			parseInt(editedTable?.co324 || 0) +
// 			parseInt(editedTable?.co325 || 0) +
// 			parseInt(editedTable?.co326 || 0) +
// 			parseInt(editedTable?.co327 || 0) +
// 			parseInt(editedTable?.co328 || 0) +
// 			parseInt(editedTable?.co329 || 0) +
// 			parseInt(editedTable?.co3210 || 0) +
// 			parseInt(editedTable?.co3211 || 0) +
// 			parseInt(editedTable?.co3212 || 0) +
// 			parseInt(editedTable?.co3213 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po2mapco3: calculatedValue,
// 		}));
// 	};
// 	const calculatePo2mapco4 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co421 || 0) +
// 			parseInt(editedTable?.co422 || 0) +
// 			parseInt(editedTable?.co423 || 0) +
// 			parseInt(editedTable?.co424 || 0) +
// 			parseInt(editedTable?.co425 || 0) +
// 			parseInt(editedTable?.co426 || 0) +
// 			parseInt(editedTable?.co427 || 0) +
// 			parseInt(editedTable?.co428 || 0) +
// 			parseInt(editedTable?.co429 || 0) +
// 			parseInt(editedTable?.co4210 || 0) +
// 			parseInt(editedTable?.co4211 || 0) +
// 			parseInt(editedTable?.co4212 || 0) +
// 			parseInt(editedTable?.co4213 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po2mapco4: calculatedValue,
// 		}));
// 	};
// 	const calculatePo2mapco5 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co521 || 0) +
// 			parseInt(editedTable?.co522 || 0) +
// 			parseInt(editedTable?.co523 || 0) +
// 			parseInt(editedTable?.co524 || 0) +
// 			parseInt(editedTable?.co525 || 0) +
// 			parseInt(editedTable?.co526 || 0) +
// 			parseInt(editedTable?.co527 || 0) +
// 			parseInt(editedTable?.co528 || 0) +
// 			parseInt(editedTable?.co529 || 0) +
// 			parseInt(editedTable?.co5210 || 0) +
// 			parseInt(editedTable?.co5211 || 0) +
// 			parseInt(editedTable?.co5212 || 0) +
// 			parseInt(editedTable?.co5213 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po2mapco5: calculatedValue,
// 		}));
// 	};
// 	const calculatePo2mapco6 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co621 || 0) +
// 			parseInt(editedTable?.co622 || 0) +
// 			parseInt(editedTable?.co623 || 0) +
// 			parseInt(editedTable?.co624 || 0) +
// 			parseInt(editedTable?.co625 || 0) +
// 			parseInt(editedTable?.co626 || 0) +
// 			parseInt(editedTable?.co627 || 0) +
// 			parseInt(editedTable?.co628 || 0) +
// 			parseInt(editedTable?.co629 || 0) +
// 			parseInt(editedTable?.co6210 || 0) +
// 			parseInt(editedTable?.co6211 || 0) +
// 			parseInt(editedTable?.co6212 || 0) +
// 			parseInt(editedTable?.co6213 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po2mapco6: calculatedValue,
// 		}));
// 	};
// 	const calculatePo2mapco7 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co721 || 0) +
// 			parseInt(editedTable?.co722 || 0) +
// 			parseInt(editedTable?.co723 || 0) +
// 			parseInt(editedTable?.co724 || 0) +
// 			parseInt(editedTable?.co725 || 0) +
// 			parseInt(editedTable?.co726 || 0) +
// 			parseInt(editedTable?.co727 || 0) +
// 			parseInt(editedTable?.co728 || 0) +
// 			parseInt(editedTable?.co729 || 0) +
// 			parseInt(editedTable?.co7210 || 0) +
// 			parseInt(editedTable?.co7211 || 0) +
// 			parseInt(editedTable?.co7212 || 0) +
// 			parseInt(editedTable?.co7213 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po2mapco7: calculatedValue,
// 		}));
// 	};
// 	// *********************************    Po 3  ***************************************************
// 	// Define the calculation function
// 	const calculatePo3mapco1 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co131 || 0) +
// 			parseInt(editedTable?.co132 || 0) +
// 			parseInt(editedTable?.co133 || 0) +
// 			parseInt(editedTable?.co134 || 0) +
// 			parseInt(editedTable?.co135 || 0) +
// 			parseInt(editedTable?.co136 || 0) +
// 			parseInt(editedTable?.co137 || 0) +
// 			parseInt(editedTable?.co138 || 0) +
// 			parseInt(editedTable?.co139 || 0) +
// 			parseInt(editedTable?.co1310 || 0) +
// 			parseInt(editedTable?.co1311 || 0) +
// 			parseInt(editedTable?.co1312 || 0) +
// 			parseInt(editedTable?.co1313 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po3mapco1: calculatedValue,
// 		}));
// 	};
// 	const calculatePo3mapco2 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co231 || 0) +
// 			parseInt(editedTable?.co232 || 0) +
// 			parseInt(editedTable?.co233 || 0) +
// 			parseInt(editedTable?.co234 || 0) +
// 			parseInt(editedTable?.co235 || 0) +
// 			parseInt(editedTable?.co236 || 0) +
// 			parseInt(editedTable?.co237 || 0) +
// 			parseInt(editedTable?.co238 || 0) +
// 			parseInt(editedTable?.co239 || 0) +
// 			parseInt(editedTable?.co2310 || 0) +
// 			parseInt(editedTable?.co2311 || 0) +
// 			parseInt(editedTable?.co2312 || 0) +
// 			parseInt(editedTable?.co2313 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po3mapco2: calculatedValue,
// 		}));
// 	};
// 	const calculatePo3mapco3 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co331 || 0) +
// 			parseInt(editedTable?.co332 || 0) +
// 			parseInt(editedTable?.co333 || 0) +
// 			parseInt(editedTable?.co334 || 0) +
// 			parseInt(editedTable?.co335 || 0) +
// 			parseInt(editedTable?.co336 || 0) +
// 			parseInt(editedTable?.co337 || 0) +
// 			parseInt(editedTable?.co338 || 0) +
// 			parseInt(editedTable?.co339 || 0) +
// 			parseInt(editedTable?.co3310 || 0) +
// 			parseInt(editedTable?.co3311 || 0) +
// 			parseInt(editedTable?.co3312 || 0) +
// 			parseInt(editedTable?.co3313 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po3mapco3: calculatedValue,
// 		}));
// 	};
// 	const calculatePo3mapco4 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co431 || 0) +
// 			parseInt(editedTable?.co432 || 0) +
// 			parseInt(editedTable?.co433 || 0) +
// 			parseInt(editedTable?.co434 || 0) +
// 			parseInt(editedTable?.co435 || 0) +
// 			parseInt(editedTable?.co436 || 0) +
// 			parseInt(editedTable?.co437 || 0) +
// 			parseInt(editedTable?.co438 || 0) +
// 			parseInt(editedTable?.co439 || 0) +
// 			parseInt(editedTable?.co4310 || 0) +
// 			parseInt(editedTable?.co4311 || 0) +
// 			parseInt(editedTable?.co4312 || 0) +
// 			parseInt(editedTable?.co4313 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po3mapco4: calculatedValue,
// 		}));
// 	};
// 	const calculatePo3mapco5 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co531 || 0) +
// 			parseInt(editedTable?.co532 || 0) +
// 			parseInt(editedTable?.co533 || 0) +
// 			parseInt(editedTable?.co534 || 0) +
// 			parseInt(editedTable?.co535 || 0) +
// 			parseInt(editedTable?.co536 || 0) +
// 			parseInt(editedTable?.co537 || 0) +
// 			parseInt(editedTable?.co538 || 0) +
// 			parseInt(editedTable?.co539 || 0) +
// 			parseInt(editedTable?.co5310 || 0) +
// 			parseInt(editedTable?.co5311 || 0) +
// 			parseInt(editedTable?.co5312 || 0) +
// 			parseInt(editedTable?.co5313 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po3mapco5: calculatedValue,
// 		}));
// 	};
// 	const calculatePo3mapco6 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co631 || 0) +
// 			parseInt(editedTable?.co632 || 0) +
// 			parseInt(editedTable?.co633 || 0) +
// 			parseInt(editedTable?.co634 || 0) +
// 			parseInt(editedTable?.co635 || 0) +
// 			parseInt(editedTable?.co636 || 0) +
// 			parseInt(editedTable?.co637 || 0) +
// 			parseInt(editedTable?.co638 || 0) +
// 			parseInt(editedTable?.co639 || 0) +
// 			parseInt(editedTable?.co6310 || 0) +
// 			parseInt(editedTable?.co6311 || 0) +
// 			parseInt(editedTable?.co6312 || 0) +
// 			parseInt(editedTable?.co6313 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po3mapco6: calculatedValue,
// 		}));
// 	};
// 	const calculatePo3mapco7 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co731 || 0) +
// 			parseInt(editedTable?.co732 || 0) +
// 			parseInt(editedTable?.co733 || 0) +
// 			parseInt(editedTable?.co734 || 0) +
// 			parseInt(editedTable?.co735 || 0) +
// 			parseInt(editedTable?.co736 || 0) +
// 			parseInt(editedTable?.co737 || 0) +
// 			parseInt(editedTable?.co738 || 0) +
// 			parseInt(editedTable?.co739 || 0) +
// 			parseInt(editedTable?.co7310 || 0) +
// 			parseInt(editedTable?.co7311 || 0) +
// 			parseInt(editedTable?.co7312 || 0) +
// 			parseInt(editedTable?.co7313 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po3mapco7: calculatedValue,
// 		}));
// 	};
// 	// *********************************    Po 4  ***************************************************
// 	// Define the calculation function
// 	const calculatePo4mapco1 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co141 || 0) +
// 			parseInt(editedTable?.co142 || 0) +
// 			parseInt(editedTable?.co143 || 0) +
// 			parseInt(editedTable?.co144 || 0) +
// 			parseInt(editedTable?.co145 || 0) +
// 			parseInt(editedTable?.co146 || 0) +
// 			parseInt(editedTable?.co147 || 0) +
// 			parseInt(editedTable?.co148 || 0) +
// 			parseInt(editedTable?.co149 || 0) +
// 			parseInt(editedTable?.co1410 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po4mapco1: calculatedValue,
// 		}));
// 	};
// 	const calculatePo4mapco2 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co241 || 0) +
// 			parseInt(editedTable?.co242 || 0) +
// 			parseInt(editedTable?.co243 || 0) +
// 			parseInt(editedTable?.co244 || 0) +
// 			parseInt(editedTable?.co245 || 0) +
// 			parseInt(editedTable?.co246 || 0) +
// 			parseInt(editedTable?.co247 || 0) +
// 			parseInt(editedTable?.co248 || 0) +
// 			parseInt(editedTable?.co249 || 0) +
// 			parseInt(editedTable?.co2410 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po4mapco2: calculatedValue,
// 		}));
// 	};
// 	const calculatePo4mapco3 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co341 || 0) +
// 			parseInt(editedTable?.co342 || 0) +
// 			parseInt(editedTable?.co343 || 0) +
// 			parseInt(editedTable?.co344 || 0) +
// 			parseInt(editedTable?.co345 || 0) +
// 			parseInt(editedTable?.co346 || 0) +
// 			parseInt(editedTable?.co347 || 0) +
// 			parseInt(editedTable?.co348 || 0) +
// 			parseInt(editedTable?.co349 || 0) +
// 			parseInt(editedTable?.co3410 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po4mapco3: calculatedValue,
// 		}));
// 	};
// 	const calculatePo4mapco4 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co441 || 0) +
// 			parseInt(editedTable?.co442 || 0) +
// 			parseInt(editedTable?.co443 || 0) +
// 			parseInt(editedTable?.co444 || 0) +
// 			parseInt(editedTable?.co445 || 0) +
// 			parseInt(editedTable?.co446 || 0) +
// 			parseInt(editedTable?.co447 || 0) +
// 			parseInt(editedTable?.co448 || 0) +
// 			parseInt(editedTable?.co449 || 0) +
// 			parseInt(editedTable?.co4410 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po4mapco4: calculatedValue,
// 		}));
// 	};
// 	const calculatePo4mapco5 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co541 || 0) +
// 			parseInt(editedTable?.co542 || 0) +
// 			parseInt(editedTable?.co543 || 0) +
// 			parseInt(editedTable?.co544 || 0) +
// 			parseInt(editedTable?.co545 || 0) +
// 			parseInt(editedTable?.co546 || 0) +
// 			parseInt(editedTable?.co547 || 0) +
// 			parseInt(editedTable?.co548 || 0) +
// 			parseInt(editedTable?.co549 || 0) +
// 			parseInt(editedTable?.co5410 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po4mapco5: calculatedValue,
// 		}));
// 	};
// 	const calculatePo4mapco6 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co641 || 0) +
// 			parseInt(editedTable?.co642 || 0) +
// 			parseInt(editedTable?.co643 || 0) +
// 			parseInt(editedTable?.co644 || 0) +
// 			parseInt(editedTable?.co645 || 0) +
// 			parseInt(editedTable?.co646 || 0) +
// 			parseInt(editedTable?.co647 || 0) +
// 			parseInt(editedTable?.co648 || 0) +
// 			parseInt(editedTable?.co649 || 0) +
// 			parseInt(editedTable?.co6410 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po4mapco6: calculatedValue,
// 		}));
// 	};
// 	const calculatePo4mapco7 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co741 || 0) +
// 			parseInt(editedTable?.co742 || 0) +
// 			parseInt(editedTable?.co743 || 0) +
// 			parseInt(editedTable?.co744 || 0) +
// 			parseInt(editedTable?.co745 || 0) +
// 			parseInt(editedTable?.co746 || 0) +
// 			parseInt(editedTable?.co747 || 0) +
// 			parseInt(editedTable?.co748 || 0) +
// 			parseInt(editedTable?.co749 || 0) +
// 			parseInt(editedTable?.co7410 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po4mapco7: calculatedValue,
// 		}));
// 	};
// 	// *********************************    Po 5  ***************************************************
// 	// Define the calculation function
// 	const calculatePo5mapco1 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co151 || 0) +
// 			parseInt(editedTable?.co152 || 0) +
// 			parseInt(editedTable?.co153 || 0) +
// 			parseInt(editedTable?.co154 || 0) +
// 			parseInt(editedTable?.co155 || 0) +
// 			parseInt(editedTable?.co156 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po5mapco1: calculatedValue,
// 		}));
// 	};
// 	const calculatePo5mapco2 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co251 || 0) +
// 			parseInt(editedTable?.co252 || 0) +
// 			parseInt(editedTable?.co253 || 0) +
// 			parseInt(editedTable?.co254 || 0) +
// 			parseInt(editedTable?.co255 || 0) +
// 			parseInt(editedTable?.co256 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po5mapco2: calculatedValue,
// 		}));
// 	};
// 	const calculatePo5mapco3 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co351 || 0) +
// 			parseInt(editedTable?.co352 || 0) +
// 			parseInt(editedTable?.co353 || 0) +
// 			parseInt(editedTable?.co354 || 0) +
// 			parseInt(editedTable?.co355 || 0) +
// 			parseInt(editedTable?.co356 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po5mapco3: calculatedValue,
// 		}));
// 	};
// 	const calculatePo5mapco4 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co451 || 0) +
// 			parseInt(editedTable?.co452 || 0) +
// 			parseInt(editedTable?.co453 || 0) +
// 			parseInt(editedTable?.co454 || 0) +
// 			parseInt(editedTable?.co455 || 0) +
// 			parseInt(editedTable?.co456 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po5mapco4: calculatedValue,
// 		}));
// 	};
// 	const calculatePo5mapco5 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co551 || 0) +
// 			parseInt(editedTable?.co552 || 0) +
// 			parseInt(editedTable?.co553 || 0) +
// 			parseInt(editedTable?.co554 || 0) +
// 			parseInt(editedTable?.co555 || 0) +
// 			parseInt(editedTable?.co556 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po5mapco5: calculatedValue,
// 		}));
// 	};
// 	const calculatePo5mapco6 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co651 || 0) +
// 			parseInt(editedTable?.co652 || 0) +
// 			parseInt(editedTable?.co653 || 0) +
// 			parseInt(editedTable?.co654 || 0) +
// 			parseInt(editedTable?.co655 || 0) +
// 			parseInt(editedTable?.co656 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po5mapco6: calculatedValue,
// 		}));
// 	};
// 	const calculatePo5mapco7 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co751 || 0) +
// 			parseInt(editedTable?.co752 || 0) +
// 			parseInt(editedTable?.co753 || 0) +
// 			parseInt(editedTable?.co754 || 0) +
// 			parseInt(editedTable?.co755 || 0) +
// 			parseInt(editedTable?.co756 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po5mapco7: calculatedValue,
// 		}));
// 	};
// 	// *********************************    Po 6  ***************************************************
// 	// Define the calculation function
// 	const calculatePo6mapco1 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co161 || 0) + parseInt(editedTable?.co162 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.5) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po6mapco1: calculatedValue,
// 		}));
// 	};
// 	const calculatePo6mapco2 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co261 || 0) + parseInt(editedTable?.co262 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.5) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po6mapco2: calculatedValue,
// 		}));
// 	};
// 	const calculatePo6mapco3 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co361 || 0) + parseInt(editedTable?.co362 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.5) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po6mapco3: calculatedValue,
// 		}));
// 	};
// 	const calculatePo6mapco4 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co461 || 0) + parseInt(editedTable?.co462 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.5) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po6mapco4: calculatedValue,
// 		}));
// 	};
// 	const calculatePo6mapco5 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co561 || 0) + parseInt(editedTable?.co562 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.5) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po6mapco5: calculatedValue,
// 		}));
// 	};
// 	const calculatePo6mapco6 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co661 || 0) + parseInt(editedTable?.co662 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.5) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po6mapco6: calculatedValue,
// 		}));
// 	};
// 	const calculatePo6mapco7 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co761 || 0) + parseInt(editedTable?.co762 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.5) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po6mapco7: calculatedValue,
// 		}));
// 	};

// 	// *********************************    Po 7  ***************************************************
// 	// Define the calculation function
// 	const calculatePo7mapco1 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co171 || 0) +
// 			parseInt(editedTable?.co172 || 0) +
// 			parseInt(editedTable?.co173 || 0) +
// 			parseInt(editedTable?.co174 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po7mapco1: calculatedValue,
// 		}));
// 	};
// 	const calculatePo7mapco2 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co271 || 0) +
// 			parseInt(editedTable?.co272 || 0) +
// 			parseInt(editedTable?.co273 || 0) +
// 			parseInt(editedTable?.co274 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po7mapco2: calculatedValue,
// 		}));
// 	};
// 	const calculatePo7mapco3 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co371 || 0) +
// 			parseInt(editedTable?.co372 || 0) +
// 			parseInt(editedTable?.co373 || 0) +
// 			parseInt(editedTable?.co374 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po7mapco3: calculatedValue,
// 		}));
// 	};
// 	const calculatePo7mapco4 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co471 || 0) +
// 			parseInt(editedTable?.co472 || 0) +
// 			parseInt(editedTable?.co473 || 0) +
// 			parseInt(editedTable?.co474 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po7mapco4: calculatedValue,
// 		}));
// 	};
// 	const calculatePo7mapco5 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co571 || 0) +
// 			parseInt(editedTable?.co572 || 0) +
// 			parseInt(editedTable?.co573 || 0) +
// 			parseInt(editedTable?.co574 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po7mapco5: calculatedValue,
// 		}));
// 	};
// 	const calculatePo7mapco6 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co671 || 0) +
// 			parseInt(editedTable?.co672 || 0) +
// 			parseInt(editedTable?.co673 || 0) +
// 			parseInt(editedTable?.co674 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po7mapco6: calculatedValue,
// 		}));
// 	};
// 	const calculatePo7mapco7 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co771 || 0) +
// 			parseInt(editedTable?.co772 || 0) +
// 			parseInt(editedTable?.co773 || 0) +
// 			parseInt(editedTable?.co774 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po7mapco7: calculatedValue,
// 		}));
// 	};

// 	// *********************************    Po 8  ***************************************************
// 	// Define the calculation function
// 	const calculatePo8mapco1 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co181 || 0) +
// 			parseInt(editedTable?.co182 || 0) +
// 			parseInt(editedTable?.co183 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.33) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po8mapco1: calculatedValue,
// 		}));
// 	};
// 	const calculatePo8mapco2 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co281 || 0) +
// 			parseInt(editedTable?.co282 || 0) +
// 			parseInt(editedTable?.co283 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.33) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po8mapco2: calculatedValue,
// 		}));
// 	};
// 	const calculatePo8mapco3 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co381 || 0) +
// 			parseInt(editedTable?.co382 || 0) +
// 			parseInt(editedTable?.co383 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.33) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po8mapco3: calculatedValue,
// 		}));
// 	};
// 	const calculatePo8mapco4 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co481 || 0) +
// 			parseInt(editedTable?.co482 || 0) +
// 			parseInt(editedTable?.co483 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.33) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po8mapco4: calculatedValue,
// 		}));
// 	};
// 	const calculatePo8mapco5 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co581 || 0) +
// 			parseInt(editedTable?.co582 || 0) +
// 			parseInt(editedTable?.co583 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.33) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po8mapco5: calculatedValue,
// 		}));
// 	};
// 	const calculatePo8mapco6 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co681 || 0) +
// 			parseInt(editedTable?.co682 || 0) +
// 			parseInt(editedTable?.co683 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.33) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po8mapco6: calculatedValue,
// 		}));
// 	};
// 	const calculatePo8mapco7 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co781 || 0) +
// 			parseInt(editedTable?.co782 || 0) +
// 			parseInt(editedTable?.co783 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.33) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po8mapco7: calculatedValue,
// 		}));
// 	};

// 	// *********************************    Po 9  ***************************************************
// 	// Define the calculation function
// 	const calculatePo9mapco1 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co191 || 0) +
// 			parseInt(editedTable?.co192 || 0) +
// 			parseInt(editedTable?.co193 || 0) +
// 			parseInt(editedTable?.co194 || 0) +
// 			parseInt(editedTable?.co195 || 0) +
// 			parseInt(editedTable?.co196 || 0) +
// 			parseInt(editedTable?.co197 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po9mapco1: calculatedValue,
// 		}));
// 	};
// 	const calculatePo9mapco2 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co291 || 0) +
// 			parseInt(editedTable?.co292 || 0) +
// 			parseInt(editedTable?.co293 || 0) +
// 			parseInt(editedTable?.co294 || 0) +
// 			parseInt(editedTable?.co295 || 0) +
// 			parseInt(editedTable?.co296 || 0) +
// 			parseInt(editedTable?.co297 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po9mapco2: calculatedValue,
// 		}));
// 	};
// 	const calculatePo9mapco3 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co391 || 0) +
// 			parseInt(editedTable?.co392 || 0) +
// 			parseInt(editedTable?.co393 || 0) +
// 			parseInt(editedTable?.co394 || 0) +
// 			parseInt(editedTable?.co395 || 0) +
// 			parseInt(editedTable?.co396 || 0) +
// 			parseInt(editedTable?.co397 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po9mapco3: calculatedValue,
// 		}));
// 	};
// 	const calculatePo9mapco4 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co491 || 0) +
// 			parseInt(editedTable?.co492 || 0) +
// 			parseInt(editedTable?.co493 || 0) +
// 			parseInt(editedTable?.co494 || 0) +
// 			parseInt(editedTable?.co495 || 0) +
// 			parseInt(editedTable?.co496 || 0) +
// 			parseInt(editedTable?.co497 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po9mapco4: calculatedValue,
// 		}));
// 	};
// 	const calculatePo9mapco5 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co591 || 0) +
// 			parseInt(editedTable?.co592 || 0) +
// 			parseInt(editedTable?.co593 || 0) +
// 			parseInt(editedTable?.co594 || 0) +
// 			parseInt(editedTable?.co595 || 0) +
// 			parseInt(editedTable?.co596 || 0) +
// 			parseInt(editedTable?.co597 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po9mapco5: calculatedValue,
// 		}));
// 	};
// 	const calculatePo9mapco6 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co691 || 0) +
// 			parseInt(editedTable?.co692 || 0) +
// 			parseInt(editedTable?.co693 || 0) +
// 			parseInt(editedTable?.co694 || 0) +
// 			parseInt(editedTable?.co695 || 0) +
// 			parseInt(editedTable?.co696 || 0) +
// 			parseInt(editedTable?.co697 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po9mapco6: calculatedValue,
// 		}));
// 	};
// 	const calculatePo9mapco7 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co741 || 0) +
// 			parseInt(editedTable?.co742 || 0) +
// 			parseInt(editedTable?.co743 || 0) +
// 			parseInt(editedTable?.co744 || 0) +
// 			parseInt(editedTable?.co745 || 0) +
// 			parseInt(editedTable?.co746 || 0) +
// 			parseInt(editedTable?.co747 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po9mapco7: calculatedValue,
// 		}));
// 	};

// 	// *********************************    Po 10  ***************************************************
// 	// Define the calculation function
// 	const calculatePo10mapco1 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co1101 || 0) +
// 			parseInt(editedTable?.co1102 || 0) +
// 			parseInt(editedTable?.co1103 || 0) +
// 			parseInt(editedTable?.co1104 || 0) +
// 			parseInt(editedTable?.co1105 || 0) +
// 			parseInt(editedTable?.co1106 || 0) +
// 			parseInt(editedTable?.co1107 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po10mapco1: calculatedValue,
// 		}));
// 	};
// 	const calculatePo10mapco2 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co2101 || 0) +
// 			parseInt(editedTable?.co2102 || 0) +
// 			parseInt(editedTable?.co2103 || 0) +
// 			parseInt(editedTable?.co2104 || 0) +
// 			parseInt(editedTable?.co2105 || 0) +
// 			parseInt(editedTable?.co2106 || 0) +
// 			parseInt(editedTable?.co2107 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po10mapco2: calculatedValue,
// 		}));
// 	};
// 	const calculatePo10mapco3 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co3101 || 0) +
// 			parseInt(editedTable?.co3102 || 0) +
// 			parseInt(editedTable?.co3103 || 0) +
// 			parseInt(editedTable?.co3104 || 0) +
// 			parseInt(editedTable?.co3105 || 0) +
// 			parseInt(editedTable?.co3106 || 0) +
// 			parseInt(editedTable?.co3107 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po10mapco3: calculatedValue,
// 		}));
// 	};
// 	const calculatePo10mapco4 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co4101 || 0) +
// 			parseInt(editedTable?.co4102 || 0) +
// 			parseInt(editedTable?.co4103 || 0) +
// 			parseInt(editedTable?.co4104 || 0) +
// 			parseInt(editedTable?.co4105 || 0) +
// 			parseInt(editedTable?.co4106 || 0) +
// 			parseInt(editedTable?.co4107 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po10mapco4: calculatedValue,
// 		}));
// 	};
// 	const calculatePo10mapco5 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co5101 || 0) +
// 			parseInt(editedTable?.co5102 || 0) +
// 			parseInt(editedTable?.co5103 || 0) +
// 			parseInt(editedTable?.co5104 || 0) +
// 			parseInt(editedTable?.co5105 || 0) +
// 			parseInt(editedTable?.co5106 || 0) +
// 			parseInt(editedTable?.co5107 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po10mapco5: calculatedValue,
// 		}));
// 	};
// 	const calculatePo10mapco6 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co6101 || 0) +
// 			parseInt(editedTable?.co6102 || 0) +
// 			parseInt(editedTable?.co6103 || 0) +
// 			parseInt(editedTable?.co6104 || 0) +
// 			parseInt(editedTable?.co6105 || 0) +
// 			parseInt(editedTable?.co6106 || 0) +
// 			parseInt(editedTable?.co6107 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po10mapco6: calculatedValue,
// 		}));
// 	};
// 	const calculatePo10mapco7 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co7101 || 0) +
// 			parseInt(editedTable?.co7102 || 0) +
// 			parseInt(editedTable?.co7103 || 0) +
// 			parseInt(editedTable?.co7104 || 0) +
// 			parseInt(editedTable?.co7105 || 0) +
// 			parseInt(editedTable?.co7106 || 0) +
// 			parseInt(editedTable?.co7107 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.14) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po10mapco7: calculatedValue,
// 		}));
// 	};

// 	// *********************************    Po 11  ***************************************************
// 	// Define the calculation function
// 	const calculatePo11mapco1 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co1111 || 0) +
// 			parseInt(editedTable?.co1112 || 0) +
// 			parseInt(editedTable?.co1113 || 0) +
// 			parseInt(editedTable?.co1114 || 0) +
// 			parseInt(editedTable?.co1115 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po11mapco1: calculatedValue,
// 		}));
// 	};
// 	const calculatePo11mapco2 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co2111 || 0) +
// 			parseInt(editedTable?.co2112 || 0) +
// 			parseInt(editedTable?.co2113 || 0) +
// 			parseInt(editedTable?.co2114 || 0) +
// 			parseInt(editedTable?.co2115 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po11mapco2: calculatedValue,
// 		}));
// 	};
// 	const calculatePo11mapco3 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co3111 || 0) +
// 			parseInt(editedTable?.co3112 || 0) +
// 			parseInt(editedTable?.co3113 || 0) +
// 			parseInt(editedTable?.co3114 || 0) +
// 			parseInt(editedTable?.co3115 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po11mapco3: calculatedValue,
// 		}));
// 	};
// 	const calculatePo11mapco4 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co4111 || 0) +
// 			parseInt(editedTable?.co4112 || 0) +
// 			parseInt(editedTable?.co4113 || 0) +
// 			parseInt(editedTable?.co4114 || 0) +
// 			parseInt(editedTable?.co4115 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po11mapco4: calculatedValue,
// 		}));
// 	};
// 	const calculatePo11mapco5 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co5111 || 0) +
// 			parseInt(editedTable?.co5112 || 0) +
// 			parseInt(editedTable?.co5113 || 0) +
// 			parseInt(editedTable?.co5114 || 0) +
// 			parseInt(editedTable?.co5115 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po11mapco5: calculatedValue,
// 		}));
// 	};
// 	const calculatePo11mapco6 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co6111 || 0) +
// 			parseInt(editedTable?.co6112 || 0) +
// 			parseInt(editedTable?.co6113 || 0) +
// 			parseInt(editedTable?.co6114 || 0) +
// 			parseInt(editedTable?.co6115 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po11mapco6: calculatedValue,
// 		}));
// 	};
// 	const calculatePo11mapco7 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co7111 || 0) +
// 			parseInt(editedTable?.co7112 || 0) +
// 			parseInt(editedTable?.co7113 || 0) +
// 			parseInt(editedTable?.co7114 || 0) +
// 			parseInt(editedTable?.co7115 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po11mapco7: calculatedValue,
// 		}));
// 	};

// 	// *********************************    Po 12  ***************************************************
// 	// Define the calculation function
// 	const calculatePo12mapco1 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co1121 || 0) +
// 			parseInt(editedTable?.co1122 || 0) +
// 			parseInt(editedTable?.co1123 || 0) +
// 			parseInt(editedTable?.co1124 || 0) +
// 			parseInt(editedTable?.co1125 || 0) +
// 			parseInt(editedTable?.co1126 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po12mapco1: calculatedValue,
// 		}));
// 	};
// 	const calculatePo12mapco2 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co2121 || 0) +
// 			parseInt(editedTable?.co2122 || 0) +
// 			parseInt(editedTable?.co2123 || 0) +
// 			parseInt(editedTable?.co2124 || 0) +
// 			parseInt(editedTable?.co2125 || 0) +
// 			parseInt(editedTable?.co2126 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po12mapco2: calculatedValue,
// 		}));
// 	};
// 	const calculatePo12mapco3 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co3121 || 0) +
// 			parseInt(editedTable?.co3122 || 0) +
// 			parseInt(editedTable?.co3123 || 0) +
// 			parseInt(editedTable?.co3124 || 0) +
// 			parseInt(editedTable?.co3125 || 0) +
// 			parseInt(editedTable?.co3126 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po12mapco3: calculatedValue,
// 		}));
// 	};
// 	const calculatePo12mapco4 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co4121 || 0) +
// 			parseInt(editedTable?.co4122 || 0) +
// 			parseInt(editedTable?.co4123 || 0) +
// 			parseInt(editedTable?.co4124 || 0) +
// 			parseInt(editedTable?.co4125 || 0) +
// 			parseInt(editedTable?.co4126 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po12mapco4: calculatedValue,
// 		}));
// 	};
// 	const calculatePo12mapco5 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co5121 || 0) +
// 			parseInt(editedTable?.co5122 || 0) +
// 			parseInt(editedTable?.co5123 || 0) +
// 			parseInt(editedTable?.co5124 || 0) +
// 			parseInt(editedTable?.co5125 || 0) +
// 			parseInt(editedTable?.co5126 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po12mapco5: calculatedValue,
// 		}));
// 	};
// 	const calculatePo12mapco6 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co6121 || 0) +
// 			parseInt(editedTable?.co6122 || 0) +
// 			parseInt(editedTable?.co6123 || 0) +
// 			parseInt(editedTable?.co6124 || 0) +
// 			parseInt(editedTable?.co6125 || 0) +
// 			parseInt(editedTable?.co6126 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po12mapco6: calculatedValue,
// 		}));
// 	};
// 	const calculatePo12mapco7 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.co7121 || 0) +
// 			parseInt(editedTable?.co7122 || 0) +
// 			parseInt(editedTable?.co7123 || 0) +
// 			parseInt(editedTable?.co7124 || 0) +
// 			parseInt(editedTable?.co7125 || 0) +
// 			parseInt(editedTable?.co7126 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.17) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			po12mapco7: calculatedValue,
// 		}));
// 	};

// 	// *********************************    PSO 1  ***************************************************
// 	// Define the calculation function
// 	const calculatePso1mapco1 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco111 || 0) +
// 			parseInt(editedTable?.psoco112 || 0) +
// 			parseInt(editedTable?.psoco113 || 0) +
// 			parseInt(editedTable?.psoco114 || 0) +
// 			parseInt(editedTable?.psoco115 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso1mapco1: calculatedValue,
// 		}));
// 	};
// 	const calculatePso1mapco2 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco211 || 0) +
// 			parseInt(editedTable?.psoco212 || 0) +
// 			parseInt(editedTable?.psoco213 || 0) +
// 			parseInt(editedTable?.psoco214 || 0) +
// 			parseInt(editedTable?.psoco215 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso1mapco2: calculatedValue,
// 		}));
// 	};
// 	const calculatePso1mapco3 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco311 || 0) +
// 			parseInt(editedTable?.psoco312 || 0) +
// 			parseInt(editedTable?.psoco313 || 0) +
// 			parseInt(editedTable?.psoco314 || 0) +
// 			parseInt(editedTable?.psoco315 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso1mapco3: calculatedValue,
// 		}));
// 	};
// 	const calculatePso1mapco4 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco411 || 0) +
// 			parseInt(editedTable?.psoco412 || 0) +
// 			parseInt(editedTable?.psoco413 || 0) +
// 			parseInt(editedTable?.psoco414 || 0) +
// 			parseInt(editedTable?.psoco415 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso1mapco4: calculatedValue,
// 		}));
// 	};
// 	const calculatePso1mapco5 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco511 || 0) +
// 			parseInt(editedTable?.psoco512 || 0) +
// 			parseInt(editedTable?.psoco513 || 0) +
// 			parseInt(editedTable?.psoco514 || 0) +
// 			parseInt(editedTable?.psoco515 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso1mapco5: calculatedValue,
// 		}));
// 	};
// 	const calculatePso1mapco6 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco611 || 0) +
// 			parseInt(editedTable?.psoco612 || 0) +
// 			parseInt(editedTable?.psoco613 || 0) +
// 			parseInt(editedTable?.psoco614 || 0) +
// 			parseInt(editedTable?.psoco615 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso1mapco6: calculatedValue,
// 		}));
// 	};
// 	const calculatePso1mapco7 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco711 || 0) +
// 			parseInt(editedTable?.psoco712 || 0) +
// 			parseInt(editedTable?.psoco713 || 0) +
// 			parseInt(editedTable?.psoco714 || 0) +
// 			parseInt(editedTable?.psoco715 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.2) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso1mapco7: calculatedValue,
// 		}));
// 	};
// 	// *********************************    PSO 2  ***************************************************
// 	// Define the calculation function
// 	const calculatePso2mapco1 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco121 || 0) +
// 			parseInt(editedTable?.psoco122 || 0) +
// 			parseInt(editedTable?.psoco123 || 0) +
// 			parseInt(editedTable?.psoco124 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso2mapco1: calculatedValue,
// 		}));
// 	};
// 	const calculatePso2mapco2 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco221 || 0) +
// 			parseInt(editedTable?.psoco222 || 0) +
// 			parseInt(editedTable?.psoco223 || 0) +
// 			parseInt(editedTable?.psoco224 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso2mapco2: calculatedValue,
// 		}));
// 	};
// 	const calculatePso2mapco3 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco321 || 0) +
// 			parseInt(editedTable?.psoco322 || 0) +
// 			parseInt(editedTable?.psoco323 || 0) +
// 			parseInt(editedTable?.psoco324 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso2mapco3: calculatedValue,
// 		}));
// 	};
// 	const calculatePso2mapco4 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco421 || 0) +
// 			parseInt(editedTable?.psoco422 || 0) +
// 			parseInt(editedTable?.psoco423 || 0) +
// 			parseInt(editedTable?.psoco424 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso2mapco4: calculatedValue,
// 		}));
// 	};
// 	const calculatePso2mapco5 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco521 || 0) +
// 			parseInt(editedTable?.psoco522 || 0) +
// 			parseInt(editedTable?.psoco523 || 0) +
// 			parseInt(editedTable?.psoco524 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso2mapco5: calculatedValue,
// 		}));
// 	};
// 	const calculatePso2mapco6 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco621 || 0) +
// 			parseInt(editedTable?.psoco622 || 0) +
// 			parseInt(editedTable?.psoco623 || 0) +
// 			parseInt(editedTable?.psoco624 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso2mapco6: calculatedValue,
// 		}));
// 	};
// 	const calculatePso2mapco7 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco721 || 0) +
// 			parseInt(editedTable?.psoco722 || 0) +
// 			parseInt(editedTable?.psoco723 || 0) +
// 			parseInt(editedTable?.psoco724 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso2mapco7: calculatedValue,
// 		}));
// 	};
// 	// *********************************    PSO 2  ***************************************************
// 	// Define the calculation function
// 	const calculatePso3mapco1 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco131 || 0) +
// 			parseInt(editedTable?.psoco132 || 0) +
// 			parseInt(editedTable?.psoco133 || 0) +
// 			parseInt(editedTable?.psoco134 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso3mapco1: calculatedValue,
// 		}));
// 	};
// 	const calculatePso3mapco2 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco231 || 0) +
// 			parseInt(editedTable?.psoco232 || 0) +
// 			parseInt(editedTable?.psoco233 || 0) +
// 			parseInt(editedTable?.psoco234 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso3mapco2: calculatedValue,
// 		}));
// 	};
// 	const calculatePso3mapco3 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco331 || 0) +
// 			parseInt(editedTable?.psoco332 || 0) +
// 			parseInt(editedTable?.psoco333 || 0) +
// 			parseInt(editedTable?.psoco334 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso3mapco3: calculatedValue,
// 		}));
// 	};
// 	const calculatePso3mapco4 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco431 || 0) +
// 			parseInt(editedTable?.psoco432 || 0) +
// 			parseInt(editedTable?.psoco433 || 0) +
// 			parseInt(editedTable?.psoco434 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso3mapco4: calculatedValue,
// 		}));
// 	};
// 	const calculatePso3mapco5 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco531 || 0) +
// 			parseInt(editedTable?.psoco532 || 0) +
// 			parseInt(editedTable?.psoco533 || 0) +
// 			parseInt(editedTable?.psoco534 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso3mapco5: calculatedValue,
// 		}));
// 	};
// 	const calculatePso3mapco6 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco631 || 0) +
// 			parseInt(editedTable?.psoco632 || 0) +
// 			parseInt(editedTable?.psoco633 || 0) +
// 			parseInt(editedTable?.psoco634 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso3mapco6: calculatedValue,
// 		}));
// 	};
// 	const calculatePso3mapco7 = () => {
// 		const sumCo =
// 			parseInt(editedTable?.psoco731 || 0) +
// 			parseInt(editedTable?.psoco732 || 0) +
// 			parseInt(editedTable?.psoco733 || 0) +
// 			parseInt(editedTable?.psoco734 || 0);
// 		const calculatedValue = Math.round((sumCo * 0.25) / 0.33);
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			pso3mapco7: calculatedValue,
// 		}));
// 	};

// 	// Call the calculation function whenever any of the co values change
// 	useEffect(() => {
// 		calculatePo1mapco1();
// 		calculatePo1mapco2();
// 		calculatePo1mapco3();
// 		calculatePo1mapco4();
// 		calculatePo1mapco5();
// 		calculatePo1mapco6();
// 		calculatePo1mapco7();

// 		//  ************************************      po2           *******************************

// 		calculatePo2mapco1();
// 		calculatePo2mapco2();
// 		calculatePo2mapco3();
// 		calculatePo2mapco4();
// 		calculatePo2mapco5();
// 		calculatePo2mapco6();
// 		calculatePo2mapco7();
// 		//  ************************************      po3           *******************************

// 		calculatePo3mapco1();
// 		calculatePo3mapco2();
// 		calculatePo3mapco3();
// 		calculatePo3mapco4();
// 		calculatePo3mapco5();
// 		calculatePo3mapco6();
// 		calculatePo3mapco7();
// 		//  ************************************      po4           *******************************

// 		calculatePo4mapco1();
// 		calculatePo4mapco2();
// 		calculatePo4mapco3();
// 		calculatePo4mapco4();
// 		calculatePo4mapco5();
// 		calculatePo4mapco6();
// 		calculatePo4mapco7();
// 		//  ************************************      po5           *******************************

// 		calculatePo5mapco1();
// 		calculatePo5mapco2();
// 		calculatePo5mapco3();
// 		calculatePo5mapco4();
// 		calculatePo5mapco5();
// 		calculatePo5mapco6();
// 		calculatePo5mapco7();
// 		//  ************************************      po6           *******************************

// 		calculatePo6mapco1();
// 		calculatePo6mapco2();
// 		calculatePo6mapco3();
// 		calculatePo6mapco4();
// 		calculatePo6mapco5();
// 		calculatePo6mapco6();
// 		calculatePo6mapco7();
// 		//  ************************************      po7           *******************************

// 		calculatePo7mapco1();
// 		calculatePo7mapco2();
// 		calculatePo7mapco3();
// 		calculatePo7mapco4();
// 		calculatePo7mapco5();
// 		calculatePo7mapco6();
// 		calculatePo7mapco7();
// 		//  ************************************      po8           *******************************

// 		calculatePo8mapco1();
// 		calculatePo8mapco2();
// 		calculatePo8mapco3();
// 		calculatePo8mapco4();
// 		calculatePo8mapco5();
// 		calculatePo8mapco6();
// 		calculatePo8mapco7();
// 		//  ************************************      po9           *******************************

// 		calculatePo9mapco1();
// 		calculatePo9mapco2();
// 		calculatePo9mapco3();
// 		calculatePo9mapco4();
// 		calculatePo9mapco5();
// 		calculatePo9mapco6();
// 		calculatePo9mapco7();
// 		//  ************************************      po10          *******************************

// 		calculatePo10mapco1();
// 		calculatePo10mapco2();
// 		calculatePo10mapco3();
// 		calculatePo10mapco4();
// 		calculatePo10mapco5();
// 		calculatePo10mapco6();
// 		calculatePo10mapco7();
// 		//  ************************************      po11          *******************************

// 		calculatePo11mapco1();
// 		calculatePo11mapco2();
// 		calculatePo11mapco3();
// 		calculatePo11mapco4();
// 		calculatePo11mapco5();
// 		calculatePo11mapco6();
// 		calculatePo11mapco7();
// 		//  ************************************      po12          *******************************

// 		calculatePo12mapco1();
// 		calculatePo12mapco2();
// 		calculatePo12mapco3();
// 		calculatePo12mapco4();
// 		calculatePo12mapco5();
// 		calculatePo12mapco6();
// 		calculatePo12mapco7();
// 		//  ************************************      PSO: 1          *******************************

// 		calculatePso1mapco1();
// 		calculatePso1mapco2();
// 		calculatePso1mapco3();
// 		calculatePso1mapco4();
// 		calculatePso1mapco5();
// 		calculatePso1mapco6();
// 		calculatePso1mapco7();
// 		//  ************************************      PSO: 2          *******************************

// 		calculatePso2mapco1();
// 		calculatePso2mapco2();
// 		calculatePso2mapco3();
// 		calculatePso2mapco4();
// 		calculatePso2mapco5();
// 		calculatePso2mapco6();
// 		calculatePso2mapco7();
// 		//  ************************************      PSO: 3          *******************************

// 		calculatePso3mapco1();
// 		calculatePso3mapco2();
// 		calculatePso3mapco3();
// 		calculatePso3mapco4();
// 		calculatePso3mapco5();
// 		calculatePso3mapco6();
// 		calculatePso3mapco7();
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [
// 		editedTable?.co111,
// 		editedTable?.co112,
// 		editedTable?.co113,
// 		editedTable?.co114,
// 		editedTable?.co115,
// 		editedTable?.co211,
// 		editedTable?.co212,
// 		editedTable?.co213,
// 		editedTable?.co214,
// 		editedTable?.co215,
// 		editedTable?.co311,
// 		editedTable?.co312,
// 		editedTable?.co313,
// 		editedTable?.co314,
// 		editedTable?.co315,
// 		editedTable?.co411,
// 		editedTable?.co412,
// 		editedTable?.co413,
// 		editedTable?.co414,
// 		editedTable?.co415,
// 		editedTable?.co511,
// 		editedTable?.co512,
// 		editedTable?.co513,
// 		editedTable?.co514,
// 		editedTable?.co515,
// 		editedTable?.co611,
// 		editedTable?.co612,
// 		editedTable?.co613,
// 		editedTable?.co614,
// 		editedTable?.co615,
// 		editedTable?.co711,
// 		editedTable?.co712,
// 		editedTable?.co713,
// 		editedTable?.co714,
// 		editedTable?.co715,

// 		editedTable?.co121,
// 		editedTable?.co122,
// 		editedTable?.co123,
// 		editedTable?.co124,
// 		editedTable?.co125,
// 		editedTable?.co126,
// 		editedTable?.co127,
// 		editedTable?.co128,
// 		editedTable?.co129,
// 		editedTable?.co1210,
// 		editedTable?.co1211,
// 		editedTable?.co1212,
// 		editedTable?.co1213,

// 		editedTable?.co221,
// 		editedTable?.co222,
// 		editedTable?.co223,
// 		editedTable?.co224,
// 		editedTable?.co225,
// 		editedTable?.co226,
// 		editedTable?.co227,
// 		editedTable?.co228,
// 		editedTable?.co229,
// 		editedTable?.co2210,
// 		editedTable?.co2211,
// 		editedTable?.co2212,
// 		editedTable?.co2213,

// 		editedTable?.co321,
// 		editedTable?.co322,
// 		editedTable?.co323,
// 		editedTable?.co324,
// 		editedTable?.co325,
// 		editedTable?.co326,
// 		editedTable?.co327,
// 		editedTable?.co328,
// 		editedTable?.co329,
// 		editedTable?.co3210,
// 		editedTable?.co3211,
// 		editedTable?.co3212,
// 		editedTable?.co3213,

// 		editedTable?.co421,
// 		editedTable?.co422,
// 		editedTable?.co423,
// 		editedTable?.co424,
// 		editedTable?.co425,
// 		editedTable?.co426,
// 		editedTable?.co427,
// 		editedTable?.co428,
// 		editedTable?.co429,
// 		editedTable?.co4210,
// 		editedTable?.co4211,
// 		editedTable?.co4212,
// 		editedTable?.co4213,

// 		editedTable?.co521,
// 		editedTable?.co522,
// 		editedTable?.co523,
// 		editedTable?.co524,
// 		editedTable?.co525,
// 		editedTable?.co526,
// 		editedTable?.co527,
// 		editedTable?.co528,
// 		editedTable?.co529,
// 		editedTable?.co5210,
// 		editedTable?.co5211,
// 		editedTable?.co5212,
// 		editedTable?.co5213,

// 		editedTable?.co621,
// 		editedTable?.co622,
// 		editedTable?.co623,
// 		editedTable?.co624,
// 		editedTable?.co625,
// 		editedTable?.co626,
// 		editedTable?.co627,
// 		editedTable?.co628,
// 		editedTable?.co629,
// 		editedTable?.co6210,
// 		editedTable?.co6211,
// 		editedTable?.co6212,
// 		editedTable?.co6213,

// 		editedTable?.co721,
// 		editedTable?.co722,
// 		editedTable?.co723,
// 		editedTable?.co724,
// 		editedTable?.co725,
// 		editedTable?.co726,
// 		editedTable?.co727,
// 		editedTable?.co728,
// 		editedTable?.co729,
// 		editedTable?.co7210,
// 		editedTable?.co7211,
// 		editedTable?.co7212,
// 		editedTable?.co7213,

// 		// po:3

// 		editedTable?.co131,
// 		editedTable?.co132,
// 		editedTable?.co133,
// 		editedTable?.co134,
// 		editedTable?.co135,
// 		editedTable?.co136,
// 		editedTable?.co137,
// 		editedTable?.co138,
// 		editedTable?.co139,
// 		editedTable?.co1310,
// 		editedTable?.co1311,
// 		editedTable?.co1312,
// 		editedTable?.co1313,

// 		editedTable?.co231,
// 		editedTable?.co232,
// 		editedTable?.co233,
// 		editedTable?.co234,
// 		editedTable?.co235,
// 		editedTable?.co236,
// 		editedTable?.co237,
// 		editedTable?.co238,
// 		editedTable?.co239,
// 		editedTable?.co2310,
// 		editedTable?.co2311,
// 		editedTable?.co2312,
// 		editedTable?.co2313,

// 		editedTable?.co331,
// 		editedTable?.co332,
// 		editedTable?.co333,
// 		editedTable?.co334,
// 		editedTable?.co335,
// 		editedTable?.co336,
// 		editedTable?.co337,
// 		editedTable?.co338,
// 		editedTable?.co339,
// 		editedTable?.co3310,
// 		editedTable?.co3311,
// 		editedTable?.co3312,
// 		editedTable?.co3313,

// 		editedTable?.co431,
// 		editedTable?.co432,
// 		editedTable?.co433,
// 		editedTable?.co434,
// 		editedTable?.co435,
// 		editedTable?.co436,
// 		editedTable?.co437,
// 		editedTable?.co438,
// 		editedTable?.co439,
// 		editedTable?.co4310,
// 		editedTable?.co4311,
// 		editedTable?.co4312,
// 		editedTable?.co4313,

// 		editedTable?.co531,
// 		editedTable?.co532,
// 		editedTable?.co533,
// 		editedTable?.co534,
// 		editedTable?.co535,
// 		editedTable?.co536,
// 		editedTable?.co537,
// 		editedTable?.co538,
// 		editedTable?.co539,
// 		editedTable?.co5310,
// 		editedTable?.co5311,
// 		editedTable?.co5312,
// 		editedTable?.co5313,

// 		editedTable?.co631,
// 		editedTable?.co632,
// 		editedTable?.co633,
// 		editedTable?.co634,
// 		editedTable?.co635,
// 		editedTable?.co636,
// 		editedTable?.co637,
// 		editedTable?.co638,
// 		editedTable?.co639,
// 		editedTable?.co6310,
// 		editedTable?.co6311,
// 		editedTable?.co6312,
// 		editedTable?.co6313,

// 		editedTable?.co731,
// 		editedTable?.co732,
// 		editedTable?.co733,
// 		editedTable?.co734,
// 		editedTable?.co735,
// 		editedTable?.co736,
// 		editedTable?.co737,
// 		editedTable?.co738,
// 		editedTable?.co739,
// 		editedTable?.co7310,
// 		editedTable?.co7311,
// 		editedTable?.co7312,
// 		editedTable?.co7313,

// 		// ************************ PO:4  ***************************************

// 		editedTable?.co141,
// 		editedTable?.co142,
// 		editedTable?.co143,
// 		editedTable?.co144,
// 		editedTable?.co145,
// 		editedTable?.co146,
// 		editedTable?.co147,
// 		editedTable?.co148,
// 		editedTable?.co149,
// 		editedTable?.co1410,

// 		editedTable?.co241,
// 		editedTable?.co242,
// 		editedTable?.co243,
// 		editedTable?.co244,
// 		editedTable?.co245,
// 		editedTable?.co246,
// 		editedTable?.co247,
// 		editedTable?.co248,
// 		editedTable?.co249,
// 		editedTable?.co2410,

// 		editedTable?.co341,
// 		editedTable?.co342,
// 		editedTable?.co343,
// 		editedTable?.co344,
// 		editedTable?.co345,
// 		editedTable?.co346,
// 		editedTable?.co347,
// 		editedTable?.co348,
// 		editedTable?.co349,
// 		editedTable?.co3410,

// 		editedTable?.co441,
// 		editedTable?.co442,
// 		editedTable?.co443,
// 		editedTable?.co444,
// 		editedTable?.co445,
// 		editedTable?.co446,
// 		editedTable?.co447,
// 		editedTable?.co448,
// 		editedTable?.co449,
// 		editedTable?.co4410,

// 		editedTable?.co541,
// 		editedTable?.co542,
// 		editedTable?.co543,
// 		editedTable?.co544,
// 		editedTable?.co545,
// 		editedTable?.co546,
// 		editedTable?.co547,
// 		editedTable?.co548,
// 		editedTable?.co549,
// 		editedTable?.co5410,

// 		editedTable?.co641,
// 		editedTable?.co642,
// 		editedTable?.co643,
// 		editedTable?.co644,
// 		editedTable?.co645,
// 		editedTable?.co646,
// 		editedTable?.co647,
// 		editedTable?.co648,
// 		editedTable?.co649,
// 		editedTable?.co6410,

// 		editedTable?.co741,
// 		editedTable?.co742,
// 		editedTable?.co743,
// 		editedTable?.co744,
// 		editedTable?.co745,
// 		editedTable?.co746,
// 		editedTable?.co747,
// 		editedTable?.co748,
// 		editedTable?.co749,
// 		editedTable?.co7410,

// 		// ************************ PO:5  ***************************************

// 		editedTable?.co151,
// 		editedTable?.co152,
// 		editedTable?.co153,
// 		editedTable?.co154,
// 		editedTable?.co155,
// 		editedTable?.co156,

// 		editedTable?.co251,
// 		editedTable?.co252,
// 		editedTable?.co253,
// 		editedTable?.co254,
// 		editedTable?.co255,
// 		editedTable?.co256,

// 		editedTable?.co351,
// 		editedTable?.co352,
// 		editedTable?.co353,
// 		editedTable?.co354,
// 		editedTable?.co355,
// 		editedTable?.co356,

// 		editedTable?.co451,
// 		editedTable?.co452,
// 		editedTable?.co453,
// 		editedTable?.co454,
// 		editedTable?.co455,
// 		editedTable?.co456,

// 		editedTable?.co551,
// 		editedTable?.co552,
// 		editedTable?.co553,
// 		editedTable?.co554,
// 		editedTable?.co555,
// 		editedTable?.co556,

// 		editedTable?.co651,
// 		editedTable?.co652,
// 		editedTable?.co653,
// 		editedTable?.co654,
// 		editedTable?.co655,
// 		editedTable?.co656,

// 		editedTable?.co751,
// 		editedTable?.co752,
// 		editedTable?.co753,
// 		editedTable?.co754,
// 		editedTable?.co755,
// 		editedTable?.co756,

// 		// ************************ PO:6  ***************************************

// 		editedTable?.co161,
// 		editedTable?.co162,

// 		editedTable?.co261,
// 		editedTable?.co262,

// 		editedTable?.co361,
// 		editedTable?.co362,

// 		editedTable?.co461,
// 		editedTable?.co462,

// 		editedTable?.co561,
// 		editedTable?.co562,

// 		editedTable?.co661,
// 		editedTable?.co662,

// 		editedTable?.co761,
// 		editedTable?.co762,

// 		// ************************ PO:7  ***************************************

// 		editedTable?.co171,
// 		editedTable?.co172,
// 		editedTable?.co173,
// 		editedTable?.co174,

// 		editedTable?.co271,
// 		editedTable?.co272,
// 		editedTable?.co273,
// 		editedTable?.co274,

// 		editedTable?.co371,
// 		editedTable?.co372,
// 		editedTable?.co373,
// 		editedTable?.co374,

// 		editedTable?.co471,
// 		editedTable?.co472,
// 		editedTable?.co473,
// 		editedTable?.co474,

// 		editedTable?.co571,
// 		editedTable?.co572,
// 		editedTable?.co573,
// 		editedTable?.co574,

// 		editedTable?.co671,
// 		editedTable?.co672,
// 		editedTable?.co673,
// 		editedTable?.co674,

// 		editedTable?.co771,
// 		editedTable?.co772,
// 		editedTable?.co773,
// 		editedTable?.co774,

// 		// ************************ PO:8  ***************************************

// 		editedTable?.co181,
// 		editedTable?.co182,
// 		editedTable?.co183,

// 		editedTable?.co281,
// 		editedTable?.co282,
// 		editedTable?.co283,

// 		editedTable?.co381,
// 		editedTable?.co382,
// 		editedTable?.co383,

// 		editedTable?.co481,
// 		editedTable?.co482,
// 		editedTable?.co483,

// 		editedTable?.co581,
// 		editedTable?.co582,
// 		editedTable?.co583,

// 		editedTable?.co681,
// 		editedTable?.co682,
// 		editedTable?.co683,

// 		editedTable?.co781,
// 		editedTable?.co782,
// 		editedTable?.co783,

// 		// ************************ PO:9  ***************************************

// 		editedTable?.co191,
// 		editedTable?.co192,
// 		editedTable?.co193,
// 		editedTable?.co194,
// 		editedTable?.co195,
// 		editedTable?.co196,
// 		editedTable?.co197,

// 		editedTable?.co291,
// 		editedTable?.co292,
// 		editedTable?.co293,
// 		editedTable?.co294,
// 		editedTable?.co295,
// 		editedTable?.co296,
// 		editedTable?.co297,

// 		editedTable?.co391,
// 		editedTable?.co392,
// 		editedTable?.co393,
// 		editedTable?.co394,
// 		editedTable?.co395,
// 		editedTable?.co396,
// 		editedTable?.co397,

// 		editedTable?.co491,
// 		editedTable?.co492,
// 		editedTable?.co493,
// 		editedTable?.co494,
// 		editedTable?.co495,
// 		editedTable?.co496,
// 		editedTable?.co497,

// 		editedTable?.co591,
// 		editedTable?.co592,
// 		editedTable?.co593,
// 		editedTable?.co594,
// 		editedTable?.co595,
// 		editedTable?.co596,
// 		editedTable?.co597,

// 		editedTable?.co691,
// 		editedTable?.co692,
// 		editedTable?.co693,
// 		editedTable?.co694,
// 		editedTable?.co695,
// 		editedTable?.co696,
// 		editedTable?.co697,

// 		editedTable?.co791,
// 		editedTable?.co792,
// 		editedTable?.co793,
// 		editedTable?.co794,
// 		editedTable?.co795,
// 		editedTable?.co796,
// 		editedTable?.co797,

// 		// ************************ PO: 10  ***************************************

// 		editedTable?.co1101,
// 		editedTable?.co1102,
// 		editedTable?.co1103,
// 		editedTable?.co1104,
// 		editedTable?.co1105,
// 		editedTable?.co1106,
// 		editedTable?.co1107,

// 		editedTable?.co2101,
// 		editedTable?.co2102,
// 		editedTable?.co2103,
// 		editedTable?.co2104,
// 		editedTable?.co2105,
// 		editedTable?.co2106,
// 		editedTable?.co2107,

// 		editedTable?.co3101,
// 		editedTable?.co3102,
// 		editedTable?.co3103,
// 		editedTable?.co3104,
// 		editedTable?.co3105,
// 		editedTable?.co3106,
// 		editedTable?.co3107,

// 		editedTable?.co4101,
// 		editedTable?.co4102,
// 		editedTable?.co4103,
// 		editedTable?.co4104,
// 		editedTable?.co4105,
// 		editedTable?.co4106,
// 		editedTable?.co4107,

// 		editedTable?.co5101,
// 		editedTable?.co5102,
// 		editedTable?.co5103,
// 		editedTable?.co5104,
// 		editedTable?.co5105,
// 		editedTable?.co5106,
// 		editedTable?.co5107,

// 		editedTable?.co6101,
// 		editedTable?.co6102,
// 		editedTable?.co6103,
// 		editedTable?.co6104,
// 		editedTable?.co6105,
// 		editedTable?.co6106,
// 		editedTable?.co6107,

// 		editedTable?.co7101,
// 		editedTable?.co7102,
// 		editedTable?.co7103,
// 		editedTable?.co7104,
// 		editedTable?.co7105,
// 		editedTable?.co7106,
// 		editedTable?.co7107,

// 		// ************************ PO: 11  ***************************************

// 		editedTable?.co1111,
// 		editedTable?.co1112,
// 		editedTable?.co1113,
// 		editedTable?.co1114,
// 		editedTable?.co1115,

// 		editedTable?.co2111,
// 		editedTable?.co2112,
// 		editedTable?.co2113,
// 		editedTable?.co2114,
// 		editedTable?.co2115,

// 		editedTable?.co3111,
// 		editedTable?.co3112,
// 		editedTable?.co3113,
// 		editedTable?.co3114,
// 		editedTable?.co3115,

// 		editedTable?.co4111,
// 		editedTable?.co4112,
// 		editedTable?.co4113,
// 		editedTable?.co4114,
// 		editedTable?.co4115,

// 		editedTable?.co5111,
// 		editedTable?.co5112,
// 		editedTable?.co5113,
// 		editedTable?.co5114,
// 		editedTable?.co5115,

// 		editedTable?.co6111,
// 		editedTable?.co6112,
// 		editedTable?.co6113,
// 		editedTable?.co6114,
// 		editedTable?.co6115,

// 		editedTable?.co7111,
// 		editedTable?.co7112,
// 		editedTable?.co7113,
// 		editedTable?.co7114,
// 		editedTable?.co7115,

// 		// ************************ PO: 12  ***************************************

// 		editedTable?.co1121,
// 		editedTable?.co1122,
// 		editedTable?.co1123,
// 		editedTable?.co1124,
// 		editedTable?.co1125,
// 		editedTable?.co1126,

// 		editedTable?.co2121,
// 		editedTable?.co2122,
// 		editedTable?.co2123,
// 		editedTable?.co2124,
// 		editedTable?.co2125,
// 		editedTable?.co2126,

// 		editedTable?.co3121,
// 		editedTable?.co3122,
// 		editedTable?.co3123,
// 		editedTable?.co3124,
// 		editedTable?.co3125,
// 		editedTable?.co3126,

// 		editedTable?.co4121,
// 		editedTable?.co4122,
// 		editedTable?.co4123,
// 		editedTable?.co4124,
// 		editedTable?.co4125,
// 		editedTable?.co4126,

// 		editedTable?.co5121,
// 		editedTable?.co5122,
// 		editedTable?.co5123,
// 		editedTable?.co5124,
// 		editedTable?.co5125,
// 		editedTable?.co5126,

// 		editedTable?.co6121,
// 		editedTable?.co6122,
// 		editedTable?.co6123,
// 		editedTable?.co6124,
// 		editedTable?.co6125,
// 		editedTable?.co6126,

// 		editedTable?.co7121,
// 		editedTable?.co7122,
// 		editedTable?.co7123,
// 		editedTable?.co7124,
// 		editedTable?.co7125,
// 		editedTable?.co7126,

// 		// ******************************* PSO:1 *****************************

// 		editedTable?.psoco111,
// 		editedTable?.psoco112,
// 		editedTable?.psoco113,
// 		editedTable?.psoco114,
// 		editedTable?.psoco115,

// 		editedTable?.psoco211,
// 		editedTable?.psoco212,
// 		editedTable?.psoco213,
// 		editedTable?.psoco214,
// 		editedTable?.psoco215,

// 		editedTable?.psoco311,
// 		editedTable?.psoco312,
// 		editedTable?.psoco313,
// 		editedTable?.psoco314,
// 		editedTable?.psoco315,

// 		editedTable?.psoco411,
// 		editedTable?.psoco412,
// 		editedTable?.psoco413,
// 		editedTable?.psoco414,
// 		editedTable?.psoco415,

// 		editedTable?.psoco511,
// 		editedTable?.psoco512,
// 		editedTable?.psoco513,
// 		editedTable?.psoco514,
// 		editedTable?.psoco515,

// 		editedTable?.psoco611,
// 		editedTable?.psoco612,
// 		editedTable?.psoco613,
// 		editedTable?.psoco614,
// 		editedTable?.psoco615,

// 		editedTable?.psoco711,
// 		editedTable?.psoco712,
// 		editedTable?.psoco713,
// 		editedTable?.psoco714,
// 		editedTable?.psoco715,

// 		// ******************************* editedTable?.PSO:2 *****************************

// 		editedTable?.psoco121,
// 		editedTable?.psoco122,
// 		editedTable?.psoco123,
// 		editedTable?.psoco124,

// 		editedTable?.psoco221,
// 		editedTable?.psoco222,
// 		editedTable?.psoco223,
// 		editedTable?.psoco224,

// 		editedTable?.psoco321,
// 		editedTable?.psoco322,
// 		editedTable?.psoco323,
// 		editedTable?.psoco324,

// 		editedTable?.psoco421,
// 		editedTable?.psoco422,
// 		editedTable?.psoco423,
// 		editedTable?.psoco424,

// 		editedTable?.psoco521,
// 		editedTable?.psoco522,
// 		editedTable?.psoco523,
// 		editedTable?.psoco524,

// 		editedTable?.psoco621,
// 		editedTable?.psoco622,
// 		editedTable?.psoco623,
// 		editedTable?.psoco624,

// 		editedTable?.psoco721,
// 		editedTable?.psoco722,
// 		editedTable?.psoco723,
// 		editedTable?.psoco724,

// 		// ******************************* editedTable?.PSO:3 *****************************

// 		editedTable?.psoco131,
// 		editedTable?.psoco132,
// 		editedTable?.psoco133,
// 		editedTable?.psoco134,

// 		editedTable?.psoco231,
// 		editedTable?.psoco232,
// 		editedTable?.psoco233,
// 		editedTable?.psoco234,

// 		editedTable?.psoco331,
// 		editedTable?.psoco332,
// 		editedTable?.psoco333,
// 		editedTable?.psoco334,

// 		editedTable?.psoco431,
// 		editedTable?.psoco432,
// 		editedTable?.psoco433,
// 		editedTable?.psoco434,

// 		editedTable?.psoco531,
// 		editedTable?.psoco532,
// 		editedTable?.psoco533,
// 		editedTable?.psoco534,

// 		editedTable?.psoco631,
// 		editedTable?.psoco632,
// 		editedTable?.psoco633,
// 		editedTable?.psoco634,

// 		editedTable?.psoco731,
// 		editedTable?.psoco732,
// 		editedTable?.psoco733,
// 		editedTable?.psoco734,
// 	]);

// 	// **************************    PO:1     *************************************

// 	const handleCo111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co111: e.target.value,
// 		}));
// 	};
// 	const handleCo211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co211: e.target.value,
// 		}));
// 	};
// 	const handleCo311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co311: e.target.value,
// 		}));
// 	};
// 	const handleCo411Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co411: e.target.value,
// 		}));
// 	};
// 	const handleCo511Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co511: e.target.value,
// 		}));
// 	};
// 	const handleCo611Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co611: e.target.value,
// 		}));
// 	};
// 	const handleCo711Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co711: e.target.value,
// 		}));
// 	};

// 	const handleCo112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co112: e.target.value,
// 		}));
// 	};
// 	const handleCo212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co212: e.target.value,
// 		}));
// 	};
// 	const handleCo312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co312: e.target.value,
// 		}));
// 	};
// 	const handleCo412Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co412: e.target.value,
// 		}));
// 	};
// 	const handleCo512Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co512: e.target.value,
// 		}));
// 	};
// 	const handleCo612Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co612: e.target.value,
// 		}));
// 	};
// 	const handleCo712Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co712: e.target.value,
// 		}));
// 	};

// 	const handleCo113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co113: e.target.value,
// 		}));
// 	};
// 	const handleCo213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co213: e.target.value,
// 		}));
// 	};
// 	const handleCo313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co313: e.target.value,
// 		}));
// 	};
// 	const handleCo413Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co413: e.target.value,
// 		}));
// 	};
// 	const handleCo513Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co513: e.target.value,
// 		}));
// 	};
// 	const handleCo613Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co613: e.target.value,
// 		}));
// 	};
// 	const handleCo713Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co713: e.target.value,
// 		}));
// 	};

// 	const handleCo114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co114: e.target.value,
// 		}));
// 	};
// 	const handleCo214Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co214: e.target.value,
// 		}));
// 	};
// 	const handleCo314Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co314: e.target.value,
// 		}));
// 	};
// 	const handleCo414Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co414: e.target.value,
// 		}));
// 	};
// 	const handleCo514Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co514: e.target.value,
// 		}));
// 	};
// 	const handleCo614Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co614: e.target.value,
// 		}));
// 	};
// 	const handleCo714Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co714: e.target.value,
// 		}));
// 	};

// 	const handleCo115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co115: e.target.value,
// 		}));
// 	};
// 	const handleCo215Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co215: e.target.value,
// 		}));
// 	};
// 	const handleCo315Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co315: e.target.value,
// 		}));
// 	};
// 	const handleCo415Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co415: e.target.value,
// 		}));
// 	};
// 	const handleCo515Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co515: e.target.value,
// 		}));
// 	};
// 	const handleCo615Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co615: e.target.value,
// 		}));
// 	};
// 	const handleCo715Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co715: e.target.value,
// 		}));
// 	};

// 	// **************************    PO:2     *************************************

// 	const handleCo121Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co121: e.target.value,
// 		}));
// 	};
// 	const handleCo221Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co221: e.target.value,
// 		}));
// 	};
// 	const handleCo321Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co321: e.target.value,
// 		}));
// 	};
// 	const handleCo421Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co421: e.target.value,
// 		}));
// 	};
// 	const handleCo521Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co521: e.target.value,
// 		}));
// 	};
// 	const handleCo621Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co621: e.target.value,
// 		}));
// 	};
// 	const handleCo721Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co721: e.target.value,
// 		}));
// 	};

// 	const handleCo122Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co122: e.target.value,
// 		}));
// 	};
// 	const handleCo222Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co222: e.target.value,
// 		}));
// 	};
// 	const handleCo322Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co322: e.target.value,
// 		}));
// 	};
// 	const handleCo422Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co422: e.target.value,
// 		}));
// 	};
// 	const handleCo522Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co522: e.target.value,
// 		}));
// 	};
// 	const handleCo622Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co622: e.target.value,
// 		}));
// 	};
// 	const handleCo722Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co722: e.target.value,
// 		}));
// 	};

// 	const handleCo123Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co123: e.target.value,
// 		}));
// 	};
// 	const handleCo223Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co223: e.target.value,
// 		}));
// 	};
// 	const handleCo323Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co323: e.target.value,
// 		}));
// 	};
// 	const handleCo423Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co423: e.target.value,
// 		}));
// 	};
// 	const handleCo523Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co523: e.target.value,
// 		}));
// 	};
// 	const handleCo623Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co623: e.target.value,
// 		}));
// 	};
// 	const handleCo723Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co723: e.target.value,
// 		}));
// 	};

// 	const handleCo124Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co124: e.target.value,
// 		}));
// 	};
// 	const handleCo224Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co224: e.target.value,
// 		}));
// 	};
// 	const handleCo324Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co324: e.target.value,
// 		}));
// 	};
// 	const handleCo424Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co424: e.target.value,
// 		}));
// 	};
// 	const handleCo524Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co524: e.target.value,
// 		}));
// 	};
// 	const handleCo624Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co624: e.target.value,
// 		}));
// 	};
// 	const handleCo724Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co724: e.target.value,
// 		}));
// 	};

// 	const handleCo125Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co125: e.target.value,
// 		}));
// 	};
// 	const handleCo225Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co225: e.target.value,
// 		}));
// 	};
// 	const handleCo325Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co325: e.target.value,
// 		}));
// 	};
// 	const handleCo425Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co425: e.target.value,
// 		}));
// 	};
// 	const handleCo525Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co525: e.target.value,
// 		}));
// 	};
// 	const handleCo625Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co625: e.target.value,
// 		}));
// 	};
// 	const handleCo725Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co725: e.target.value,
// 		}));
// 	};

// 	const handleCo126Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co126: e.target.value,
// 		}));
// 	};
// 	const handleCo226Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co226: e.target.value,
// 		}));
// 	};
// 	const handleCo326Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co326: e.target.value,
// 		}));
// 	};
// 	const handleCo426Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co426: e.target.value,
// 		}));
// 	};
// 	const handleCo526Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co526: e.target.value,
// 		}));
// 	};
// 	const handleCo626Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co626: e.target.value,
// 		}));
// 	};
// 	const handleCo726Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co726: e.target.value,
// 		}));
// 	};

// 	const handleCo127Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co127: e.target.value,
// 		}));
// 	};
// 	const handleCo227Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co227: e.target.value,
// 		}));
// 	};
// 	const handleCo327Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co327: e.target.value,
// 		}));
// 	};
// 	const handleCo427Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co427: e.target.value,
// 		}));
// 	};
// 	const handleCo527Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co527: e.target.value,
// 		}));
// 	};
// 	const handleCo627Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co627: e.target.value,
// 		}));
// 	};
// 	const handleCo727Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co727: e.target.value,
// 		}));
// 	};

// 	const handleCo128Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co128: e.target.value,
// 		}));
// 	};
// 	const handleCo228Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co228: e.target.value,
// 		}));
// 	};
// 	const handleCo328Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co328: e.target.value,
// 		}));
// 	};
// 	const handleCo428Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co428: e.target.value,
// 		}));
// 	};
// 	const handleCo528Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co528: e.target.value,
// 		}));
// 	};
// 	const handleCo628Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co628: e.target.value,
// 		}));
// 	};
// 	const handleCo728Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co728: e.target.value,
// 		}));
// 	};

// 	const handleCo129Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co129: e.target.value,
// 		}));
// 	};
// 	const handleCo229Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co229: e.target.value,
// 		}));
// 	};
// 	const handleCo329Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co329: e.target.value,
// 		}));
// 	};
// 	const handleCo429Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co429: e.target.value,
// 		}));
// 	};
// 	const handleCo529Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co529: e.target.value,
// 		}));
// 	};
// 	const handleCo629Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co629: e.target.value,
// 		}));
// 	};
// 	const handleCo729Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co729: e.target.value,
// 		}));
// 	};

// 	const handleCo1210Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1210: e.target.value,
// 		}));
// 	};
// 	const handleCo2210Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2210: e.target.value,
// 		}));
// 	};
// 	const handleCo3210Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3210: e.target.value,
// 		}));
// 	};
// 	const handleCo4210Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4210: e.target.value,
// 		}));
// 	};
// 	const handleCo5210Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5210: e.target.value,
// 		}));
// 	};
// 	const handleCo6210Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6210: e.target.value,
// 		}));
// 	};
// 	const handleCo7210Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7210: e.target.value,
// 		}));
// 	};

// 	const handleCo1211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1211: e.target.value,
// 		}));
// 	};
// 	const handleCo2211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2211: e.target.value,
// 		}));
// 	};
// 	const handleCo3211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3211: e.target.value,
// 		}));
// 	};
// 	const handleCo4211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4211: e.target.value,
// 		}));
// 	};
// 	const handleCo5211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5211: e.target.value,
// 		}));
// 	};
// 	const handleCo6211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6211: e.target.value,
// 		}));
// 	};
// 	const handleCo7211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7211: e.target.value,
// 		}));
// 	};

// 	const handleCo1212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1212: e.target.value,
// 		}));
// 	};
// 	const handleCo2212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2212: e.target.value,
// 		}));
// 	};
// 	const handleCo3212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3212: e.target.value,
// 		}));
// 	};
// 	const handleCo4212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4212: e.target.value,
// 		}));
// 	};
// 	const handleCo5212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5212: e.target.value,
// 		}));
// 	};
// 	const handleCo6212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6212: e.target.value,
// 		}));
// 	};
// 	const handleCo7212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7212: e.target.value,
// 		}));
// 	};

// 	const handleCo1213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1213: e.target.value,
// 		}));
// 	};
// 	const handleCo2213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2213: e.target.value,
// 		}));
// 	};
// 	const handleCo3213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3213: e.target.value,
// 		}));
// 	};
// 	const handleCo4213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4213: e.target.value,
// 		}));
// 	};
// 	const handleCo5213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5213: e.target.value,
// 		}));
// 	};
// 	const handleCo6213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6213: e.target.value,
// 		}));
// 	};
// 	const handleCo7213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7213: e.target.value,
// 		}));
// 	};

// 	// **************************    PO:3     *************************************

// 	const handleCo131Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co131: e.target.value,
// 		}));
// 	};
// 	const handleCo231Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co231: e.target.value,
// 		}));
// 	};
// 	const handleCo331Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co331: e.target.value,
// 		}));
// 	};
// 	const handleCo431Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co431: e.target.value,
// 		}));
// 	};
// 	const handleCo531Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co531: e.target.value,
// 		}));
// 	};
// 	const handleCo631Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co631: e.target.value,
// 		}));
// 	};
// 	const handleCo731Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co731: e.target.value,
// 		}));
// 	};

// 	const handleCo132Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co132: e.target.value,
// 		}));
// 	};
// 	const handleCo232Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co232: e.target.value,
// 		}));
// 	};
// 	const handleCo332Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co332: e.target.value,
// 		}));
// 	};
// 	const handleCo432Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co432: e.target.value,
// 		}));
// 	};
// 	const handleCo532Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co532: e.target.value,
// 		}));
// 	};
// 	const handleCo632Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co632: e.target.value,
// 		}));
// 	};
// 	const handleCo732Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co732: e.target.value,
// 		}));
// 	};

// 	const handleCo133Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co133: e.target.value,
// 		}));
// 	};
// 	const handleCo233Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co233: e.target.value,
// 		}));
// 	};
// 	const handleCo333Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co333: e.target.value,
// 		}));
// 	};
// 	const handleCo433Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co433: e.target.value,
// 		}));
// 	};
// 	const handleCo533Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co533: e.target.value,
// 		}));
// 	};
// 	const handleCo633Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co633: e.target.value,
// 		}));
// 	};
// 	const handleCo733Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co733: e.target.value,
// 		}));
// 	};

// 	const handleCo134Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co134: e.target.value,
// 		}));
// 	};
// 	const handleCo234Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co234: e.target.value,
// 		}));
// 	};
// 	const handleCo334Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co334: e.target.value,
// 		}));
// 	};
// 	const handleCo434Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co434: e.target.value,
// 		}));
// 	};
// 	const handleCo534Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co534: e.target.value,
// 		}));
// 	};
// 	const handleCo634Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co634: e.target.value,
// 		}));
// 	};
// 	const handleCo734Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co734: e.target.value,
// 		}));
// 	};

// 	const handleCo135Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co135: e.target.value,
// 		}));
// 	};
// 	const handleCo235Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co235: e.target.value,
// 		}));
// 	};
// 	const handleCo335Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co335: e.target.value,
// 		}));
// 	};
// 	const handleCo435Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co435: e.target.value,
// 		}));
// 	};
// 	const handleCo535Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co535: e.target.value,
// 		}));
// 	};
// 	const handleCo635Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co635: e.target.value,
// 		}));
// 	};
// 	const handleCo735Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co735: e.target.value,
// 		}));
// 	};

// 	const handleCo136Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co136: e.target.value,
// 		}));
// 	};
// 	const handleCo236Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co236: e.target.value,
// 		}));
// 	};
// 	const handleCo336Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co336: e.target.value,
// 		}));
// 	};
// 	const handleCo436Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co436: e.target.value,
// 		}));
// 	};
// 	const handleCo536Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co536: e.target.value,
// 		}));
// 	};
// 	const handleCo636Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co636: e.target.value,
// 		}));
// 	};
// 	const handleCo736Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co736: e.target.value,
// 		}));
// 	};

// 	const handleCo137Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co137: e.target.value,
// 		}));
// 	};
// 	const handleCo237Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co237: e.target.value,
// 		}));
// 	};
// 	const handleCo337Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co337: e.target.value,
// 		}));
// 	};
// 	const handleCo437Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co437: e.target.value,
// 		}));
// 	};
// 	const handleCo537Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co537: e.target.value,
// 		}));
// 	};
// 	const handleCo637Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co637: e.target.value,
// 		}));
// 	};
// 	const handleCo737Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co737: e.target.value,
// 		}));
// 	};

// 	const handleCo138Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co138: e.target.value,
// 		}));
// 	};
// 	const handleCo238Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co238: e.target.value,
// 		}));
// 	};
// 	const handleCo338Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co338: e.target.value,
// 		}));
// 	};
// 	const handleCo438Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co438: e.target.value,
// 		}));
// 	};
// 	const handleCo538Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co538: e.target.value,
// 		}));
// 	};
// 	const handleCo638Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co638: e.target.value,
// 		}));
// 	};
// 	const handleCo738Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co738: e.target.value,
// 		}));
// 	};

// 	const handleCo139Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co139: e.target.value,
// 		}));
// 	};
// 	const handleCo239Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co239: e.target.value,
// 		}));
// 	};
// 	const handleCo339Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co339: e.target.value,
// 		}));
// 	};
// 	const handleCo439Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co439: e.target.value,
// 		}));
// 	};
// 	const handleCo539Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co539: e.target.value,
// 		}));
// 	};
// 	const handleCo639Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co639: e.target.value,
// 		}));
// 	};
// 	const handleCo739Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co739: e.target.value,
// 		}));
// 	};

// 	const handleCo1310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1310: e.target.value,
// 		}));
// 	};
// 	const handleCo2310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2310: e.target.value,
// 		}));
// 	};
// 	const handleCo3310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3310: e.target.value,
// 		}));
// 	};
// 	const handleCo4310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4310: e.target.value,
// 		}));
// 	};
// 	const handleCo5310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5310: e.target.value,
// 		}));
// 	};
// 	const handleCo6310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6310: e.target.value,
// 		}));
// 	};
// 	const handleCo7310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7310: e.target.value,
// 		}));
// 	};

// 	const handleCo1311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1311: e.target.value,
// 		}));
// 	};
// 	const handleCo2311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2311: e.target.value,
// 		}));
// 	};
// 	const handleCo3311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3311: e.target.value,
// 		}));
// 	};
// 	const handleCo4311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4311: e.target.value,
// 		}));
// 	};
// 	const handleCo5311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5311: e.target.value,
// 		}));
// 	};
// 	const handleCo6311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6311: e.target.value,
// 		}));
// 	};
// 	const handleCo7311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7311: e.target.value,
// 		}));
// 	};

// 	const handleCo1312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1312: e.target.value,
// 		}));
// 	};
// 	const handleCo2312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2312: e.target.value,
// 		}));
// 	};
// 	const handleCo3312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3312: e.target.value,
// 		}));
// 	};
// 	const handleCo4312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4312: e.target.value,
// 		}));
// 	};
// 	const handleCo5312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5312: e.target.value,
// 		}));
// 	};
// 	const handleCo6312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6312: e.target.value,
// 		}));
// 	};
// 	const handleCo7312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7312: e.target.value,
// 		}));
// 	};

// 	const handleCo1313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1313: e.target.value,
// 		}));
// 	};
// 	const handleCo2313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2313: e.target.value,
// 		}));
// 	};
// 	const handleCo3313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3313: e.target.value,
// 		}));
// 	};
// 	const handleCo4313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4313: e.target.value,
// 		}));
// 	};
// 	const handleCo5313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5313: e.target.value,
// 		}));
// 	};
// 	const handleCo6313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6313: e.target.value,
// 		}));
// 	};
// 	const handleCo7313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7313: e.target.value,
// 		}));
// 	};
// 	// **************************    PO:4     *************************************

// 	const handleCo141Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co141: e.target.value,
// 		}));
// 	};
// 	const handleCo241Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co241: e.target.value,
// 		}));
// 	};
// 	const handleCo341Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co341: e.target.value,
// 		}));
// 	};
// 	const handleCo441Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co441: e.target.value,
// 		}));
// 	};
// 	const handleCo541Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co541: e.target.value,
// 		}));
// 	};
// 	const handleCo641Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co641: e.target.value,
// 		}));
// 	};
// 	const handleCo741Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co741: e.target.value,
// 		}));
// 	};

// 	const handleCo142Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co142: e.target.value,
// 		}));
// 	};
// 	const handleCo242Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co242: e.target.value,
// 		}));
// 	};
// 	const handleCo342Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co342: e.target.value,
// 		}));
// 	};
// 	const handleCo442Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co442: e.target.value,
// 		}));
// 	};
// 	const handleCo542Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co542: e.target.value,
// 		}));
// 	};
// 	const handleCo642Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co642: e.target.value,
// 		}));
// 	};
// 	const handleCo742Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co742: e.target.value,
// 		}));
// 	};

// 	const handleCo143Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co143: e.target.value,
// 		}));
// 	};
// 	const handleCo243Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co243: e.target.value,
// 		}));
// 	};
// 	const handleCo343Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co343: e.target.value,
// 		}));
// 	};
// 	const handleCo443Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co443: e.target.value,
// 		}));
// 	};
// 	const handleCo543Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co543: e.target.value,
// 		}));
// 	};
// 	const handleCo643Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co643: e.target.value,
// 		}));
// 	};
// 	const handleCo743Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co743: e.target.value,
// 		}));
// 	};

// 	const handleCo144Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co144: e.target.value,
// 		}));
// 	};
// 	const handleCo244Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co244: e.target.value,
// 		}));
// 	};
// 	const handleCo344Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co344: e.target.value,
// 		}));
// 	};
// 	const handleCo444Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co444: e.target.value,
// 		}));
// 	};
// 	const handleCo544Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co544: e.target.value,
// 		}));
// 	};
// 	const handleCo644Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co644: e.target.value,
// 		}));
// 	};
// 	const handleCo744Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co744: e.target.value,
// 		}));
// 	};

// 	const handleCo145Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co145: e.target.value,
// 		}));
// 	};
// 	const handleCo245Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co245: e.target.value,
// 		}));
// 	};
// 	const handleCo345Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co345: e.target.value,
// 		}));
// 	};
// 	const handleCo445Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co445: e.target.value,
// 		}));
// 	};
// 	const handleCo545Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co545: e.target.value,
// 		}));
// 	};
// 	const handleCo645Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co645: e.target.value,
// 		}));
// 	};
// 	const handleCo745Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co745: e.target.value,
// 		}));
// 	};

// 	const handleCo146Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co146: e.target.value,
// 		}));
// 	};
// 	const handleCo246Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co246: e.target.value,
// 		}));
// 	};
// 	const handleCo346Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co346: e.target.value,
// 		}));
// 	};
// 	const handleCo446Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co446: e.target.value,
// 		}));
// 	};
// 	const handleCo546Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co546: e.target.value,
// 		}));
// 	};
// 	const handleCo646Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co646: e.target.value,
// 		}));
// 	};
// 	const handleCo746Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co746: e.target.value,
// 		}));
// 	};

// 	const handleCo147Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co147: e.target.value,
// 		}));
// 	};
// 	const handleCo247Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co247: e.target.value,
// 		}));
// 	};
// 	const handleCo347Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co347: e.target.value,
// 		}));
// 	};
// 	const handleCo447Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co447: e.target.value,
// 		}));
// 	};
// 	const handleCo547Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co547: e.target.value,
// 		}));
// 	};
// 	const handleCo647Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co647: e.target.value,
// 		}));
// 	};
// 	const handleCo747Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co747: e.target.value,
// 		}));
// 	};

// 	const handleCo148Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co148: e.target.value,
// 		}));
// 	};
// 	const handleCo248Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co248: e.target.value,
// 		}));
// 	};
// 	const handleCo348Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co348: e.target.value,
// 		}));
// 	};
// 	const handleCo448Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co448: e.target.value,
// 		}));
// 	};
// 	const handleCo548Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co548: e.target.value,
// 		}));
// 	};
// 	const handleCo648Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co648: e.target.value,
// 		}));
// 	};
// 	const handleCo748Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co748: e.target.value,
// 		}));
// 	};

// 	const handleCo149Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co149: e.target.value,
// 		}));
// 	};
// 	const handleCo249Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co249: e.target.value,
// 		}));
// 	};
// 	const handleCo349Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co349: e.target.value,
// 		}));
// 	};
// 	const handleCo449Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co449: e.target.value,
// 		}));
// 	};
// 	const handleCo549Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co549: e.target.value,
// 		}));
// 	};
// 	const handleCo649Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co649: e.target.value,
// 		}));
// 	};
// 	const handleCo749Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co749: e.target.value,
// 		}));
// 	};

// 	const handleCo1410Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1410: e.target.value,
// 		}));
// 	};
// 	const handleCo2410Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2410: e.target.value,
// 		}));
// 	};
// 	const handleCo3410Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3410: e.target.value,
// 		}));
// 	};
// 	const handleCo4410Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4410: e.target.value,
// 		}));
// 	};
// 	const handleCo5410Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5410: e.target.value,
// 		}));
// 	};
// 	const handleCo6410Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6410: e.target.value,
// 		}));
// 	};
// 	const handleCo7410Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7410: e.target.value,
// 		}));
// 	};
// 	// **************************    PO:5     *************************************

// 	const handleCo151Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co151: e.target.value,
// 		}));
// 	};
// 	const handleCo251Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co251: e.target.value,
// 		}));
// 	};
// 	const handleCo351Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co351: e.target.value,
// 		}));
// 	};
// 	const handleCo451Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co451: e.target.value,
// 		}));
// 	};
// 	const handleCo551Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co551: e.target.value,
// 		}));
// 	};
// 	const handleCo651Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co651: e.target.value,
// 		}));
// 	};
// 	const handleCo751Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co751: e.target.value,
// 		}));
// 	};

// 	const handleCo152Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co152: e.target.value,
// 		}));
// 	};
// 	const handleCo252Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co252: e.target.value,
// 		}));
// 	};
// 	const handleCo352Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co352: e.target.value,
// 		}));
// 	};
// 	const handleCo452Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co452: e.target.value,
// 		}));
// 	};
// 	const handleCo552Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co552: e.target.value,
// 		}));
// 	};
// 	const handleCo652Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co652: e.target.value,
// 		}));
// 	};
// 	const handleCo752Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co752: e.target.value,
// 		}));
// 	};

// 	const handleCo153Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co153: e.target.value,
// 		}));
// 	};
// 	const handleCo253Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co253: e.target.value,
// 		}));
// 	};
// 	const handleCo353Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co353: e.target.value,
// 		}));
// 	};
// 	const handleCo453Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co453: e.target.value,
// 		}));
// 	};
// 	const handleCo553Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co553: e.target.value,
// 		}));
// 	};
// 	const handleCo653Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co653: e.target.value,
// 		}));
// 	};
// 	const handleCo753Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co753: e.target.value,
// 		}));
// 	};

// 	const handleCo154Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co154: e.target.value,
// 		}));
// 	};
// 	const handleCo254Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co254: e.target.value,
// 		}));
// 	};
// 	const handleCo354Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co354: e.target.value,
// 		}));
// 	};
// 	const handleCo454Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co454: e.target.value,
// 		}));
// 	};
// 	const handleCo554Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co554: e.target.value,
// 		}));
// 	};
// 	const handleCo654Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co654: e.target.value,
// 		}));
// 	};
// 	const handleCo754Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co754: e.target.value,
// 		}));
// 	};

// 	const handleCo155Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co155: e.target.value,
// 		}));
// 	};
// 	const handleCo255Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co255: e.target.value,
// 		}));
// 	};
// 	const handleCo355Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co355: e.target.value,
// 		}));
// 	};
// 	const handleCo455Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co455: e.target.value,
// 		}));
// 	};
// 	const handleCo555Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co555: e.target.value,
// 		}));
// 	};
// 	const handleCo655Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co655: e.target.value,
// 		}));
// 	};
// 	const handleCo755Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co755: e.target.value,
// 		}));
// 	};

// 	const handleCo156Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co156: e.target.value,
// 		}));
// 	};
// 	const handleCo256Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co256: e.target.value,
// 		}));
// 	};
// 	const handleCo356Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co356: e.target.value,
// 		}));
// 	};
// 	const handleCo456Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co456: e.target.value,
// 		}));
// 	};
// 	const handleCo556Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co556: e.target.value,
// 		}));
// 	};
// 	const handleCo656Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co656: e.target.value,
// 		}));
// 	};
// 	const handleCo756Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co756: e.target.value,
// 		}));
// 	};
// 	// **************************    PO:6     *************************************

// 	const handleCo161Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co161: e.target.value,
// 		}));
// 	};
// 	const handleCo261Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co261: e.target.value,
// 		}));
// 	};
// 	const handleCo361Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co361: e.target.value,
// 		}));
// 	};
// 	const handleCo461Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co461: e.target.value,
// 		}));
// 	};
// 	const handleCo561Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co561: e.target.value,
// 		}));
// 	};
// 	const handleCo661Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co661: e.target.value,
// 		}));
// 	};
// 	const handleCo761Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co761: e.target.value,
// 		}));
// 	};

// 	const handleCo162Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co162: e.target.value,
// 		}));
// 	};
// 	const handleCo262Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co262: e.target.value,
// 		}));
// 	};
// 	const handleCo362Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co362: e.target.value,
// 		}));
// 	};
// 	const handleCo462Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co462: e.target.value,
// 		}));
// 	};
// 	const handleCo562Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co562: e.target.value,
// 		}));
// 	};
// 	const handleCo662Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co662: e.target.value,
// 		}));
// 	};
// 	const handleCo762Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co762: e.target.value,
// 		}));
// 	};

// 	// **************************    PO:7     *************************************

// 	const handleCo171Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co171: e.target.value,
// 		}));
// 	};
// 	const handleCo271Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co271: e.target.value,
// 		}));
// 	};
// 	const handleCo371Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co371: e.target.value,
// 		}));
// 	};
// 	const handleCo471Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co471: e.target.value,
// 		}));
// 	};
// 	const handleCo571Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co571: e.target.value,
// 		}));
// 	};
// 	const handleCo671Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co671: e.target.value,
// 		}));
// 	};
// 	const handleCo771Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co771: e.target.value,
// 		}));
// 	};

// 	const handleCo172Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co172: e.target.value,
// 		}));
// 	};
// 	const handleCo272Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co272: e.target.value,
// 		}));
// 	};
// 	const handleCo372Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co372: e.target.value,
// 		}));
// 	};
// 	const handleCo472Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co472: e.target.value,
// 		}));
// 	};
// 	const handleCo572Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co572: e.target.value,
// 		}));
// 	};
// 	const handleCo672Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co672: e.target.value,
// 		}));
// 	};
// 	const handleCo772Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co772: e.target.value,
// 		}));
// 	};

// 	const handleCo173Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co173: e.target.value,
// 		}));
// 	};
// 	const handleCo273Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co273: e.target.value,
// 		}));
// 	};
// 	const handleCo373Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co373: e.target.value,
// 		}));
// 	};
// 	const handleCo473Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co473: e.target.value,
// 		}));
// 	};
// 	const handleCo573Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co573: e.target.value,
// 		}));
// 	};
// 	const handleCo673Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co673: e.target.value,
// 		}));
// 	};
// 	const handleCo773Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co773: e.target.value,
// 		}));
// 	};

// 	const handleCo174Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co174: e.target.value,
// 		}));
// 	};
// 	const handleCo274Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co274: e.target.value,
// 		}));
// 	};
// 	const handleCo374Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co374: e.target.value,
// 		}));
// 	};
// 	const handleCo474Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co474: e.target.value,
// 		}));
// 	};
// 	const handleCo574Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co574: e.target.value,
// 		}));
// 	};
// 	const handleCo674Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co674: e.target.value,
// 		}));
// 	};
// 	const handleCo774Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co774: e.target.value,
// 		}));
// 	};
// 	// **************************    PO:8     *************************************

// 	const handleCo181Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co181: e.target.value,
// 		}));
// 	};
// 	const handleCo281Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co281: e.target.value,
// 		}));
// 	};
// 	const handleCo381Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co381: e.target.value,
// 		}));
// 	};
// 	const handleCo481Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co481: e.target.value,
// 		}));
// 	};
// 	const handleCo581Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co581: e.target.value,
// 		}));
// 	};
// 	const handleCo681Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co681: e.target.value,
// 		}));
// 	};
// 	const handleCo781Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co781: e.target.value,
// 		}));
// 	};

// 	const handleCo182Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co182: e.target.value,
// 		}));
// 	};
// 	const handleCo282Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co282: e.target.value,
// 		}));
// 	};
// 	const handleCo382Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co382: e.target.value,
// 		}));
// 	};
// 	const handleCo482Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co482: e.target.value,
// 		}));
// 	};
// 	const handleCo582Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co582: e.target.value,
// 		}));
// 	};
// 	const handleCo682Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co682: e.target.value,
// 		}));
// 	};
// 	const handleCo782Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co782: e.target.value,
// 		}));
// 	};

// 	const handleCo183Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co183: e.target.value,
// 		}));
// 	};
// 	const handleCo283Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co283: e.target.value,
// 		}));
// 	};
// 	const handleCo383Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co383: e.target.value,
// 		}));
// 	};
// 	const handleCo483Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co483: e.target.value,
// 		}));
// 	};
// 	const handleCo583Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co583: e.target.value,
// 		}));
// 	};
// 	const handleCo683Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co683: e.target.value,
// 		}));
// 	};
// 	const handleCo783Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co783: e.target.value,
// 		}));
// 	};

// 	// **************************    PO:9     *************************************

// 	const handleCo191Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co191: e.target.value,
// 		}));
// 	};
// 	const handleCo291Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co291: e.target.value,
// 		}));
// 	};
// 	const handleCo391Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co391: e.target.value,
// 		}));
// 	};
// 	const handleCo491Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co491: e.target.value,
// 		}));
// 	};
// 	const handleCo591Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co591: e.target.value,
// 		}));
// 	};
// 	const handleCo691Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co691: e.target.value,
// 		}));
// 	};
// 	const handleCo791Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co791: e.target.value,
// 		}));
// 	};

// 	const handleCo192Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co192: e.target.value,
// 		}));
// 	};
// 	const handleCo292Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co292: e.target.value,
// 		}));
// 	};
// 	const handleCo392Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co392: e.target.value,
// 		}));
// 	};
// 	const handleCo492Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co492: e.target.value,
// 		}));
// 	};
// 	const handleCo592Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co592: e.target.value,
// 		}));
// 	};
// 	const handleCo692Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co692: e.target.value,
// 		}));
// 	};
// 	const handleCo792Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co792: e.target.value,
// 		}));
// 	};

// 	const handleCo193Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co193: e.target.value,
// 		}));
// 	};
// 	const handleCo293Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co293: e.target.value,
// 		}));
// 	};
// 	const handleCo393Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co393: e.target.value,
// 		}));
// 	};
// 	const handleCo493Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co493: e.target.value,
// 		}));
// 	};
// 	const handleCo593Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co593: e.target.value,
// 		}));
// 	};
// 	const handleCo693Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co693: e.target.value,
// 		}));
// 	};
// 	const handleCo793Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co793: e.target.value,
// 		}));
// 	};

// 	const handleCo194Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co194: e.target.value,
// 		}));
// 	};
// 	const handleCo294Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co294: e.target.value,
// 		}));
// 	};
// 	const handleCo394Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co394: e.target.value,
// 		}));
// 	};
// 	const handleCo494Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co494: e.target.value,
// 		}));
// 	};
// 	const handleCo594Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co594: e.target.value,
// 		}));
// 	};
// 	const handleCo694Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co694: e.target.value,
// 		}));
// 	};
// 	const handleCo794Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co794: e.target.value,
// 		}));
// 	};

// 	const handleCo195Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co195: e.target.value,
// 		}));
// 	};
// 	const handleCo295Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co295: e.target.value,
// 		}));
// 	};
// 	const handleCo395Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co395: e.target.value,
// 		}));
// 	};
// 	const handleCo495Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co495: e.target.value,
// 		}));
// 	};
// 	const handleCo595Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co595: e.target.value,
// 		}));
// 	};
// 	const handleCo695Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co695: e.target.value,
// 		}));
// 	};
// 	const handleCo795Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co795: e.target.value,
// 		}));
// 	};

// 	const handleCo196Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co196: e.target.value,
// 		}));
// 	};
// 	const handleCo296Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co296: e.target.value,
// 		}));
// 	};
// 	const handleCo396Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co396: e.target.value,
// 		}));
// 	};
// 	const handleCo496Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co496: e.target.value,
// 		}));
// 	};
// 	const handleCo596Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co596: e.target.value,
// 		}));
// 	};
// 	const handleCo696Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co696: e.target.value,
// 		}));
// 	};
// 	const handleCo796Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co796: e.target.value,
// 		}));
// 	};

// 	const handleCo197Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co197: e.target.value,
// 		}));
// 	};
// 	const handleCo297Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co297: e.target.value,
// 		}));
// 	};
// 	const handleCo397Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co397: e.target.value,
// 		}));
// 	};
// 	const handleCo497Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co497: e.target.value,
// 		}));
// 	};
// 	const handleCo597Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co597: e.target.value,
// 		}));
// 	};
// 	const handleCo697Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co697: e.target.value,
// 		}));
// 	};
// 	const handleCo797Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co797: e.target.value,
// 		}));
// 	};

// 	// **************************    PO:10     *************************************

// 	const handleCo1101Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1101: e.target.value,
// 		}));
// 	};
// 	const handleCo2101Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2101: e.target.value,
// 		}));
// 	};
// 	const handleCo3101Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3101: e.target.value,
// 		}));
// 	};
// 	const handleCo4101Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4101: e.target.value,
// 		}));
// 	};
// 	const handleCo5101Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5101: e.target.value,
// 		}));
// 	};
// 	const handleCo6101Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6101: e.target.value,
// 		}));
// 	};
// 	const handleCo7101Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7101: e.target.value,
// 		}));
// 	};

// 	const handleCo1102Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1102: e.target.value,
// 		}));
// 	};
// 	const handleCo2102Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2102: e.target.value,
// 		}));
// 	};
// 	const handleCo3102Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3102: e.target.value,
// 		}));
// 	};
// 	const handleCo4102Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4102: e.target.value,
// 		}));
// 	};
// 	const handleCo5102Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5102: e.target.value,
// 		}));
// 	};
// 	const handleCo6102Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6102: e.target.value,
// 		}));
// 	};
// 	const handleCo7102Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7102: e.target.value,
// 		}));
// 	};

// 	const handleCo1103Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1103: e.target.value,
// 		}));
// 	};
// 	const handleCo2103Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2103: e.target.value,
// 		}));
// 	};
// 	const handleCo3103Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3103: e.target.value,
// 		}));
// 	};
// 	const handleCo4103Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4103: e.target.value,
// 		}));
// 	};
// 	const handleCo5103Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5103: e.target.value,
// 		}));
// 	};
// 	const handleCo6103Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6103: e.target.value,
// 		}));
// 	};
// 	const handleCo7103Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7103: e.target.value,
// 		}));
// 	};

// 	const handleCo1104Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1104: e.target.value,
// 		}));
// 	};
// 	const handleCo2104Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2104: e.target.value,
// 		}));
// 	};
// 	const handleCo3104Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3104: e.target.value,
// 		}));
// 	};
// 	const handleCo4104Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4104: e.target.value,
// 		}));
// 	};
// 	const handleCo5104Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5104: e.target.value,
// 		}));
// 	};
// 	const handleCo6104Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6104: e.target.value,
// 		}));
// 	};
// 	const handleCo7104Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7104: e.target.value,
// 		}));
// 	};

// 	const handleCo1105Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1105: e.target.value,
// 		}));
// 	};
// 	const handleCo2105Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2105: e.target.value,
// 		}));
// 	};
// 	const handleCo3105Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3105: e.target.value,
// 		}));
// 	};
// 	const handleCo4105Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4105: e.target.value,
// 		}));
// 	};
// 	const handleCo5105Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5105: e.target.value,
// 		}));
// 	};
// 	const handleCo6105Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6105: e.target.value,
// 		}));
// 	};
// 	const handleCo7105Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7105: e.target.value,
// 		}));
// 	};

// 	const handleCo1106Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1106: e.target.value,
// 		}));
// 	};
// 	const handleCo2106Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2106: e.target.value,
// 		}));
// 	};
// 	const handleCo3106Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3106: e.target.value,
// 		}));
// 	};
// 	const handleCo4106Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4106: e.target.value,
// 		}));
// 	};
// 	const handleCo5106Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5106: e.target.value,
// 		}));
// 	};
// 	const handleCo6106Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6106: e.target.value,
// 		}));
// 	};
// 	const handleCo7106Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7106: e.target.value,
// 		}));
// 	};

// 	const handleCo1107Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1107: e.target.value,
// 		}));
// 	};
// 	const handleCo2107Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2107: e.target.value,
// 		}));
// 	};
// 	const handleCo3107Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3107: e.target.value,
// 		}));
// 	};
// 	const handleCo4107Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4107: e.target.value,
// 		}));
// 	};
// 	const handleCo5107Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5107: e.target.value,
// 		}));
// 	};
// 	const handleCo6107Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6107: e.target.value,
// 		}));
// 	};
// 	const handleCo7107Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7107: e.target.value,
// 		}));
// 	};

// 	// **************************    PO:11     *************************************

// 	const handleCo1111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1111: e.target.value,
// 		}));
// 	};
// 	const handleCo2111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2111: e.target.value,
// 		}));
// 	};
// 	const handleCo3111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3111: e.target.value,
// 		}));
// 	};
// 	const handleCo4111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4111: e.target.value,
// 		}));
// 	};
// 	const handleCo5111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5111: e.target.value,
// 		}));
// 	};
// 	const handleCo6111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6111: e.target.value,
// 		}));
// 	};
// 	const handleCo7111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7111: e.target.value,
// 		}));
// 	};

// 	const handleCo1112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1112: e.target.value,
// 		}));
// 	};
// 	const handleCo2112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2112: e.target.value,
// 		}));
// 	};
// 	const handleCo3112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3112: e.target.value,
// 		}));
// 	};
// 	const handleCo4112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4112: e.target.value,
// 		}));
// 	};
// 	const handleCo5112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5112: e.target.value,
// 		}));
// 	};
// 	const handleCo6112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6112: e.target.value,
// 		}));
// 	};
// 	const handleCo7112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7112: e.target.value,
// 		}));
// 	};

// 	const handleCo1113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1113: e.target.value,
// 		}));
// 	};
// 	const handleCo2113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2113: e.target.value,
// 		}));
// 	};
// 	const handleCo3113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3113: e.target.value,
// 		}));
// 	};
// 	const handleCo4113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4113: e.target.value,
// 		}));
// 	};
// 	const handleCo5113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5113: e.target.value,
// 		}));
// 	};
// 	const handleCo6113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6113: e.target.value,
// 		}));
// 	};
// 	const handleCo7113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7113: e.target.value,
// 		}));
// 	};

// 	const handleCo1114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1114: e.target.value,
// 		}));
// 	};
// 	const handleCo2114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2114: e.target.value,
// 		}));
// 	};
// 	const handleCo3114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3114: e.target.value,
// 		}));
// 	};
// 	const handleCo4114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4114: e.target.value,
// 		}));
// 	};
// 	const handleCo5114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5114: e.target.value,
// 		}));
// 	};
// 	const handleCo6114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6114: e.target.value,
// 		}));
// 	};
// 	const handleCo7114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7114: e.target.value,
// 		}));
// 	};

// 	const handleCo1115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1115: e.target.value,
// 		}));
// 	};
// 	const handleCo2115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2115: e.target.value,
// 		}));
// 	};
// 	const handleCo3115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3115: e.target.value,
// 		}));
// 	};
// 	const handleCo4115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4115: e.target.value,
// 		}));
// 	};
// 	const handleCo5115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5115: e.target.value,
// 		}));
// 	};
// 	const handleCo6115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6115: e.target.value,
// 		}));
// 	};
// 	const handleCo7115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7115: e.target.value,
// 		}));
// 	};

// 	// **************************    PO:12     *************************************

// 	const handleCo1121Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1121: e.target.value,
// 		}));
// 	};
// 	const handleCo2121Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2121: e.target.value,
// 		}));
// 	};
// 	const handleCo3121Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3121: e.target.value,
// 		}));
// 	};
// 	const handleCo4121Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4121: e.target.value,
// 		}));
// 	};
// 	const handleCo5121Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5121: e.target.value,
// 		}));
// 	};
// 	const handleCo6121Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6121: e.target.value,
// 		}));
// 	};
// 	const handleCo7121Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7121: e.target.value,
// 		}));
// 	};

// 	const handleCo1122Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1122: e.target.value,
// 		}));
// 	};
// 	const handleCo2122Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2122: e.target.value,
// 		}));
// 	};
// 	const handleCo3122Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3122: e.target.value,
// 		}));
// 	};
// 	const handleCo4122Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4122: e.target.value,
// 		}));
// 	};
// 	const handleCo5122Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5122: e.target.value,
// 		}));
// 	};
// 	const handleCo6122Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6122: e.target.value,
// 		}));
// 	};
// 	const handleCo7122Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7122: e.target.value,
// 		}));
// 	};

// 	const handleCo1123Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1123: e.target.value,
// 		}));
// 	};
// 	const handleCo2123Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2123: e.target.value,
// 		}));
// 	};
// 	const handleCo3123Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3123: e.target.value,
// 		}));
// 	};
// 	const handleCo4123Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4123: e.target.value,
// 		}));
// 	};
// 	const handleCo5123Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5123: e.target.value,
// 		}));
// 	};
// 	const handleCo6123Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6123: e.target.value,
// 		}));
// 	};
// 	const handleCo7123Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7123: e.target.value,
// 		}));
// 	};

// 	const handleCo1124Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1124: e.target.value,
// 		}));
// 	};
// 	const handleCo2124Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2124: e.target.value,
// 		}));
// 	};
// 	const handleCo3124Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3124: e.target.value,
// 		}));
// 	};
// 	const handleCo4124Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4124: e.target.value,
// 		}));
// 	};
// 	const handleCo5124Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5124: e.target.value,
// 		}));
// 	};
// 	const handleCo6124Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6124: e.target.value,
// 		}));
// 	};
// 	const handleCo7124Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7124: e.target.value,
// 		}));
// 	};

// 	const handleCo1125Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1125: e.target.value,
// 		}));
// 	};
// 	const handleCo2125Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2125: e.target.value,
// 		}));
// 	};
// 	const handleCo3125Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3125: e.target.value,
// 		}));
// 	};
// 	const handleCo4125Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4125: e.target.value,
// 		}));
// 	};
// 	const handleCo5125Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5125: e.target.value,
// 		}));
// 	};
// 	const handleCo6125Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6125: e.target.value,
// 		}));
// 	};
// 	const handleCo7125Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7125: e.target.value,
// 		}));
// 	};

// 	const handleCo1126Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co1126: e.target.value,
// 		}));
// 	};
// 	const handleCo2126Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co2126: e.target.value,
// 		}));
// 	};
// 	const handleCo3126Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co3126: e.target.value,
// 		}));
// 	};
// 	const handleCo4126Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co4126: e.target.value,
// 		}));
// 	};
// 	const handleCo5126Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co5126: e.target.value,
// 		}));
// 	};
// 	const handleCo6126Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co6126: e.target.value,
// 		}));
// 	};
// 	const handleCo7126Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			co7126: e.target.value,
// 		}));
// 	};

// 	// **************************    PSO:1     *************************************

// 	const handlePsoCo111Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco111: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco211: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco311: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo411Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco411: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo511Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco511: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo611Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco611: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo711Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco711: e.target.value,
// 		}));
// 	};

// 	const handlePsoCo112Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco112: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco212: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco312: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo412Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco412: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo512Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco512: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo612Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco612: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo712Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco712: e.target.value,
// 		}));
// 	};

// 	const handlePsoCo113Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco113: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco213: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco313: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo413Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco413: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo513Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco513: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo613Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco613: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo713Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco713: e.target.value,
// 		}));
// 	};

// 	const handlePsoCo114Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco114: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo214Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco214: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo314Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco314: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo414Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco414: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo514Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco514: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo614Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco614: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo714Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco714: e.target.value,
// 		}));
// 	};

// 	const handlePsoCo115Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco115: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo215Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco215: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo315Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco315: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo415Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco415: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo515Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco515: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo615Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco615: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo715Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco715: e.target.value,
// 		}));
// 	};

// 	// **************************    PSO:2     *************************************

// 	const handlePsoCo121Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco121: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo221Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco221: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo321Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco321: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo421Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco421: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo521Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco521: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo621Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco621: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo721Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco721: e.target.value,
// 		}));
// 	};

// 	const handlePsoCo122Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco122: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo222Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco222: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo322Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco322: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo422Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco422: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo522Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco522: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo622Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco622: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo722Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco722: e.target.value,
// 		}));
// 	};

// 	const handlePsoCo123Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco123: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo223Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco223: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo323Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco323: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo423Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco423: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo523Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco523: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo623Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco623: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo723Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco723: e.target.value,
// 		}));
// 	};

// 	const handlePsoCo124Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco124: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo224Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco224: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo324Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco324: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo424Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco424: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo524Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco524: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo624Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco624: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo724Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco724: e.target.value,
// 		}));
// 	};

// 	// **************************    PSO:2     *************************************

// 	const handlePsoCo131Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco131: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo231Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco231: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo331Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco331: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo431Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco431: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo531Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco531: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo631Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco631: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo731Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco731: e.target.value,
// 		}));
// 	};

// 	const handlePsoCo132Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco132: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo232Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco232: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo332Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco332: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo432Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco432: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo532Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco532: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo632Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco632: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo732Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco732: e.target.value,
// 		}));
// 	};

// 	const handlePsoCo133Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco133: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo233Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco233: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo333Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco333: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo433Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco433: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo533Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco533: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo633Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco633: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo733Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco733: e.target.value,
// 		}));
// 	};

// 	const handlePsoCo134Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco134: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo234Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco234: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo334Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco334: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo434Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco434: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo534Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco534: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo634Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco634: e.target.value,
// 		}));
// 	};
// 	const handlePsoCo734Change = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setEditedTable((prevTable: any) => ({
// 			...prevTable,
// 			psoco734: e.target.value,
// 		}));
// 	};
// 	const handleSaveChanges = async () => {
// 		try {
// 			const response = await fetch(`/api/table/${id}`, {
// 				method: "PUT",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 				body: JSON.stringify(editedTable),
// 			});
// 			if (!response.ok) {
// 				throw new Error("Failed to save changes");
// 			}
// 			toast.success("Changes saved successfully");
// 		} catch (error) {
// 			console.error("Error saving changes:", error);
// 			toast.error("Failed to save changes");
// 		}
// 	};

// 	if (loading) {
// 		return (
// 			<div className='flex justify-center items-center w-full h-full'>
// 				{" "}
// 				<Spinner />
// 			</div>
// 		);
// 	}

// 	if (error) {
// 		return <p>{error}</p>;
// 	}

// 	return (
// 		<div>
// 			<table
// 				className='  table-fixed mt-20'
// 				aria-label='Example static collection table'
// 			>
// 				<thead>
// 					<tr>
// 						<th>PO</th>
// 						<th>Competency</th>
// 						<th>Indicators</th>
// 						<th>Weight</th>
// 						<th>CO1</th>
// 						<th>CO2</th>
// 						<th>CO3</th>
// 						<th>CO4</th>
// 						<th>CO5</th>
// 						<th>CO6</th>
// 						<th>CO7</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.po11} className='my-6' />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.competency11} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators11} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight11} />
// 						</td>
// 						<td>
// 							<Input
// 								min={0}
// 								max={1}
// 								type='number'
// 								value={editedTable?.co111}
// 								onChange={handleCo111Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								min={0}
// 								max={1}
// 								type='number'
// 								value={editedTable?.co211}
// 								onChange={handleCo211Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								min={0}
// 								max={1}
// 								type='number'
// 								value={editedTable?.co311}
// 								onChange={handleCo311Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								min={0}
// 								max={1}
// 								type='number'
// 								value={editedTable?.co411}
// 								onChange={handleCo411Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co511}
// 								onChange={handleCo511Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co611}
// 								onChange={handleCo611Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co711}
// 								onChange={handleCo711Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.po12} className='my-6' />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.competency12} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators12} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight12} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co112}
// 								onChange={handleCo112Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co212}
// 								onChange={handleCo212Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co312}
// 								onChange={handleCo312Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co412}
// 								onChange={handleCo412Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co512}
// 								onChange={handleCo512Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co612}
// 								onChange={handleCo612Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co712}
// 								onChange={handleCo712Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.po13} className='my-6' />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.competency13} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators13} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight13} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co113}
// 								onChange={handleCo113Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co213}
// 								onChange={handleCo213Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co313}
// 								onChange={handleCo313Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co413}
// 								onChange={handleCo413Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co513}
// 								onChange={handleCo513Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co613}
// 								onChange={handleCo613Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co713}
// 								onChange={handleCo713Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.po14} className='my-6' />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.competency14} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators14} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight14} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co114}
// 								onChange={handleCo114Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co214}
// 								onChange={handleCo214Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co314}
// 								onChange={handleCo314Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co414}
// 								onChange={handleCo414Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co514}
// 								onChange={handleCo514Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co614}
// 								onChange={handleCo614Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co714}
// 								onChange={handleCo714Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.po15} className='my-6' />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.competency15} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators15} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight15} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co115}
// 								onChange={handleCo115Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co215}
// 								onChange={handleCo215Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co315}
// 								onChange={handleCo315Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co415}
// 								onChange={handleCo415Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co515}
// 								onChange={handleCo515Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co615}
// 								onChange={handleCo615Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co715}
// 								onChange={handleCo715Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td colSpan={4}>
// 							<Textarea readOnly value='PO1 : Mapping Level' className='my-6' />
// 						</td>

// 						<td>
// 							<Input type='number' value={editedTable?.po1mapco1} readOnly />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po1mapco2} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po1mapco3} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po1mapco4} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po1mapco5} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po1mapco6} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po1mapco7} readOnly />{" "}
// 						</td>
// 					</tr>

// 					{/* *****************************************     PO:2       ****************************************/}

// 					<tr className='m-4'>
// 						<td rowSpan={13}>
// 							<Textarea readOnly value={editedTable?.po21} className='my-6' />
// 						</td>
// 						<td rowSpan={3}>
// 							<Textarea readOnly value={editedTable?.competency21} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators21} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight21} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co121}
// 								onChange={handleCo121Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co221}
// 								onChange={handleCo221Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co321}
// 								onChange={handleCo321Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co421}
// 								onChange={handleCo421Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co521}
// 								onChange={handleCo521Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co621}
// 								onChange={handleCo621Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co721}
// 								onChange={handleCo721Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators22} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight22} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co122}
// 								onChange={handleCo122Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co222}
// 								onChange={handleCo222Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co322}
// 								onChange={handleCo322Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co422}
// 								onChange={handleCo422Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co522}
// 								onChange={handleCo522Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co622}
// 								onChange={handleCo622Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co722}
// 								onChange={handleCo722Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators23} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight23} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co123}
// 								onChange={handleCo123Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co223}
// 								onChange={handleCo223Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co323}
// 								onChange={handleCo323Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co423}
// 								onChange={handleCo423Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co523}
// 								onChange={handleCo523Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co623}
// 								onChange={handleCo623Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co723}
// 								onChange={handleCo723Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={4}>
// 							<Textarea readOnly value={editedTable?.competency22} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators24} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight24} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co124}
// 								onChange={handleCo124Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co224}
// 								onChange={handleCo224Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co324}
// 								onChange={handleCo324Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co424}
// 								onChange={handleCo424Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co524}
// 								onChange={handleCo524Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co624}
// 								onChange={handleCo624Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co724}
// 								onChange={handleCo724Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators25} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight25} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co125}
// 								onChange={handleCo125Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co225}
// 								onChange={handleCo225Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co325}
// 								onChange={handleCo325Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co425}
// 								onChange={handleCo425Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co525}
// 								onChange={handleCo525Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co625}
// 								onChange={handleCo625Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co725}
// 								onChange={handleCo725Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators26} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight26} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co126}
// 								onChange={handleCo126Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co226}
// 								onChange={handleCo226Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co326}
// 								onChange={handleCo326Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co426}
// 								onChange={handleCo426Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co526}
// 								onChange={handleCo526Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co626}
// 								onChange={handleCo626Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co726}
// 								onChange={handleCo726Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators27} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight27} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co127}
// 								onChange={handleCo127Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co227}
// 								onChange={handleCo227Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co327}
// 								onChange={handleCo327Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co427}
// 								onChange={handleCo427Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co527}
// 								onChange={handleCo527Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co627}
// 								onChange={handleCo627Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co727}
// 								onChange={handleCo727Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency23} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators28} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight28} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co128}
// 								onChange={handleCo128Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co228}
// 								onChange={handleCo228Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co328}
// 								onChange={handleCo328Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co428}
// 								onChange={handleCo428Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co528}
// 								onChange={handleCo528Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co628}
// 								onChange={handleCo628Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co728}
// 								onChange={handleCo728Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators29} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight29} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co129}
// 								onChange={handleCo129Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co229}
// 								onChange={handleCo229Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co329}
// 								onChange={handleCo329Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co429}
// 								onChange={handleCo429Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co529}
// 								onChange={handleCo529Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co629}
// 								onChange={handleCo629Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co729}
// 								onChange={handleCo729Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={4}>
// 							<Textarea readOnly value={editedTable?.competency24} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators210} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight210} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1210}
// 								onChange={handleCo1210Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2210}
// 								onChange={handleCo2210Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3210}
// 								onChange={handleCo3210Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4210}
// 								onChange={handleCo4210Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5210}
// 								onChange={handleCo5210Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6210}
// 								onChange={handleCo6210Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7210}
// 								onChange={handleCo7210Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators211} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight211} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1211}
// 								onChange={handleCo1211Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2211}
// 								onChange={handleCo2211Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3211}
// 								onChange={handleCo3211Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4211}
// 								onChange={handleCo4211Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5211}
// 								onChange={handleCo5211Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6211}
// 								onChange={handleCo6211Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7211}
// 								onChange={handleCo7211Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators212} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight212} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1212}
// 								onChange={handleCo1212Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2212}
// 								onChange={handleCo2212Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3212}
// 								onChange={handleCo3212Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4212}
// 								onChange={handleCo4212Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5212}
// 								onChange={handleCo5212Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6212}
// 								onChange={handleCo6212Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7212}
// 								onChange={handleCo7212Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators213} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight213} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1213}
// 								onChange={handleCo1213Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2213}
// 								onChange={handleCo2213Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3213}
// 								onChange={handleCo3213Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4213}
// 								onChange={handleCo4213Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5213}
// 								onChange={handleCo5213Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6213}
// 								onChange={handleCo6213Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7213}
// 								onChange={handleCo7213Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td colSpan={4}>
// 							<Textarea readOnly value='PO2 : Mapping Level' className='my-6' />
// 						</td>

// 						<td>
// 							<Input type='number' value={editedTable?.po2mapco1} readOnly />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po2mapco2} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po2mapco3} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po2mapco4} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po2mapco5} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po2mapco6} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po2mapco7} readOnly />{" "}
// 						</td>
// 					</tr>

// 					{/* **************************************       PO:3         ****************************************************/}

// 					<tr className='m-4'>
// 						<td rowSpan={13}>
// 							<Textarea readOnly value={editedTable?.po31} className='my-6' />
// 						</td>
// 						<td rowSpan={6}>
// 							<Textarea readOnly value={editedTable?.competency31} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators31} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight31} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co131}
// 								onChange={handleCo131Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co231}
// 								onChange={handleCo231Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co331}
// 								onChange={handleCo331Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co431}
// 								onChange={handleCo431Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co531}
// 								onChange={handleCo531Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co631}
// 								onChange={handleCo631Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co731}
// 								onChange={handleCo731Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators32} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight32} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co132}
// 								onChange={handleCo132Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co232}
// 								onChange={handleCo232Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co332}
// 								onChange={handleCo332Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co432}
// 								onChange={handleCo432Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co532}
// 								onChange={handleCo532Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co632}
// 								onChange={handleCo632Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co732}
// 								onChange={handleCo732Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators33} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight33} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co133}
// 								onChange={handleCo133Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co233}
// 								onChange={handleCo233Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co333}
// 								onChange={handleCo333Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co433}
// 								onChange={handleCo433Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co533}
// 								onChange={handleCo533Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co633}
// 								onChange={handleCo633Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co733}
// 								onChange={handleCo733Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators34} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight34} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co134}
// 								onChange={handleCo134Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co234}
// 								onChange={handleCo234Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co334}
// 								onChange={handleCo334Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co434}
// 								onChange={handleCo434Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co534}
// 								onChange={handleCo534Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co634}
// 								onChange={handleCo634Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co734}
// 								onChange={handleCo734Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators35} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight35} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co135}
// 								onChange={handleCo135Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co235}
// 								onChange={handleCo235Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co335}
// 								onChange={handleCo335Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co435}
// 								onChange={handleCo435Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co535}
// 								onChange={handleCo535Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co635}
// 								onChange={handleCo635Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co735}
// 								onChange={handleCo735Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators36} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight36} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co136}
// 								onChange={handleCo136Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co236}
// 								onChange={handleCo236Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co336}
// 								onChange={handleCo336Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co436}
// 								onChange={handleCo436Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co536}
// 								onChange={handleCo536Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co636}
// 								onChange={handleCo636Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co736}
// 								onChange={handleCo736Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={3}>
// 							<Textarea readOnly value={editedTable?.competency32} />
// 						</td>

// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators37} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight37} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co137}
// 								onChange={handleCo137Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co237}
// 								onChange={handleCo237Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co337}
// 								onChange={handleCo337Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co437}
// 								onChange={handleCo437Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co537}
// 								onChange={handleCo537Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co637}
// 								onChange={handleCo637Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co737}
// 								onChange={handleCo737Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators38} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight38} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co138}
// 								onChange={handleCo138Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co238}
// 								onChange={handleCo238Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co338}
// 								onChange={handleCo338Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co438}
// 								onChange={handleCo438Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co538}
// 								onChange={handleCo538Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co638}
// 								onChange={handleCo638Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co738}
// 								onChange={handleCo738Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators39} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight39} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co139}
// 								onChange={handleCo139Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co239}
// 								onChange={handleCo239Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co339}
// 								onChange={handleCo339Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co439}
// 								onChange={handleCo439Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co539}
// 								onChange={handleCo539Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co639}
// 								onChange={handleCo639Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co739}
// 								onChange={handleCo739Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency33} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators310} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight310} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1310}
// 								onChange={handleCo1310Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2310}
// 								onChange={handleCo2310Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3310}
// 								onChange={handleCo3310Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4310}
// 								onChange={handleCo4310Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5310}
// 								onChange={handleCo5310Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6310}
// 								onChange={handleCo6310Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7310}
// 								onChange={handleCo7310Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators311} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight311} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1311}
// 								onChange={handleCo1311Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2311}
// 								onChange={handleCo2311Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3311}
// 								onChange={handleCo3311Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4311}
// 								onChange={handleCo4311Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5311}
// 								onChange={handleCo5311Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6311}
// 								onChange={handleCo6311Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7311}
// 								onChange={handleCo7311Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency34} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators312} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight312} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1312}
// 								onChange={handleCo1312Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2312}
// 								onChange={handleCo2312Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3312}
// 								onChange={handleCo3312Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4312}
// 								onChange={handleCo4312Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5312}
// 								onChange={handleCo5312Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6312}
// 								onChange={handleCo6312Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7312}
// 								onChange={handleCo7312Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators313} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight313} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1313}
// 								onChange={handleCo1313Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2313}
// 								onChange={handleCo2313Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3313}
// 								onChange={handleCo3313Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4313}
// 								onChange={handleCo4313Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5313}
// 								onChange={handleCo5313Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6313}
// 								onChange={handleCo6313Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7313}
// 								onChange={handleCo7313Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td colSpan={4}>
// 							<Textarea readOnly value='PO3 : Mapping Level' className='my-6' />
// 						</td>

// 						<td>
// 							<Input type='number' value={editedTable?.po3mapco1} readOnly />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po3mapco2} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po3mapco3} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po3mapco4} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po3mapco5} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po3mapco6} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po3mapco7} readOnly />{" "}
// 						</td>
// 					</tr>
// 					{/* **************************************       PO:4        ****************************************************/}

// 					<tr className='m-4'>
// 						<td rowSpan={10}>
// 							<Textarea readOnly value={editedTable?.po41} className='my-6' />
// 						</td>
// 						<td rowSpan={4}>
// 							<Textarea readOnly value={editedTable?.competency41} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators41} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight41} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co141}
// 								onChange={handleCo141Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co241}
// 								onChange={handleCo241Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co341}
// 								onChange={handleCo341Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co441}
// 								onChange={handleCo441Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co541}
// 								onChange={handleCo541Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co641}
// 								onChange={handleCo641Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co741}
// 								onChange={handleCo741Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators42} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight42} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co142}
// 								onChange={handleCo142Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co242}
// 								onChange={handleCo242Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co342}
// 								onChange={handleCo342Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co442}
// 								onChange={handleCo442Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co542}
// 								onChange={handleCo542Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co642}
// 								onChange={handleCo642Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co742}
// 								onChange={handleCo742Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators43} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight43} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co143}
// 								onChange={handleCo143Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co243}
// 								onChange={handleCo243Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co343}
// 								onChange={handleCo343Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co443}
// 								onChange={handleCo443Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co543}
// 								onChange={handleCo543Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co643}
// 								onChange={handleCo643Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co743}
// 								onChange={handleCo743Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators44} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight44} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co144}
// 								onChange={handleCo144Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co244}
// 								onChange={handleCo244Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co344}
// 								onChange={handleCo344Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co444}
// 								onChange={handleCo444Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co544}
// 								onChange={handleCo544Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co644}
// 								onChange={handleCo644Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co744}
// 								onChange={handleCo744Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency42} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators45} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight45} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								onChange={handleCo145Change}
// 								value={editedTable?.co145}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								onChange={handleCo245Change}
// 								value={editedTable?.co245}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co345}
// 								onChange={handleCo345Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co445}
// 								onChange={handleCo445Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co545}
// 								onChange={handleCo545Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co645}
// 								onChange={handleCo645Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co745}
// 								onChange={handleCo745Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators46} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight46} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co146}
// 								onChange={handleCo146Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co246}
// 								onChange={handleCo246Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co346}
// 								onChange={handleCo346Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co446}
// 								onChange={handleCo446Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co546}
// 								onChange={handleCo546Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co646}
// 								onChange={handleCo646Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co746}
// 								onChange={handleCo746Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={4}>
// 							<Textarea readOnly value={editedTable?.competency43} />
// 						</td>

// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators47} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight47} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co147}
// 								onChange={handleCo147Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co247}
// 								onChange={handleCo247Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co347}
// 								onChange={handleCo347Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co447}
// 								onChange={handleCo447Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co547}
// 								onChange={handleCo547Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co647}
// 								onChange={handleCo647Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co747}
// 								onChange={handleCo747Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators48} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight48} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co148}
// 								onChange={handleCo148Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co248}
// 								onChange={handleCo248Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co348}
// 								onChange={handleCo348Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co448}
// 								onChange={handleCo448Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co548}
// 								onChange={handleCo548Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co648}
// 								onChange={handleCo648Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co748}
// 								onChange={handleCo748Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators49} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight49} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co149}
// 								onChange={handleCo149Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co249}
// 								onChange={handleCo249Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co349}
// 								onChange={handleCo349Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co449}
// 								onChange={handleCo449Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co549}
// 								onChange={handleCo549Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co649}
// 								onChange={handleCo649Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co749}
// 								onChange={handleCo749Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators410} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight410} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1410}
// 								onChange={handleCo1410Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2410}
// 								onChange={handleCo2410Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3410}
// 								onChange={handleCo3410Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4410}
// 								onChange={handleCo4410Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5410}
// 								onChange={handleCo5410Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6410}
// 								onChange={handleCo6410Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7410}
// 								onChange={handleCo7410Change}
// 							/>
// 						</td>
// 					</tr>

// 					<tr className='m-4'>
// 						<td colSpan={4}>
// 							<Textarea readOnly value='PO4 : Mapping Level' className='my-6' />
// 						</td>

// 						<td>
// 							<Input type='number' value={editedTable?.po4mapco1} readOnly />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po4mapco2} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po4mapco3} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po4mapco4} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po4mapco5} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po4mapco6} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po4mapco7} readOnly />{" "}
// 						</td>
// 					</tr>
// 					{/* **************************************       PO:5        ****************************************************/}

// 					<tr className='m-4'>
// 						<td rowSpan={6}>
// 							<Textarea readOnly value={editedTable?.po51} className='my-6' />
// 						</td>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency51} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators51} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight51} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co151}
// 								onChange={handleCo151Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co251}
// 								onChange={handleCo251Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co351}
// 								onChange={handleCo351Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co451}
// 								onChange={handleCo451Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co551}
// 								onChange={handleCo551Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co651}
// 								onChange={handleCo651Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co751}
// 								onChange={handleCo751Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators52} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight52} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co152}
// 								onChange={handleCo152Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co252}
// 								onChange={handleCo252Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co352}
// 								onChange={handleCo352Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co452}
// 								onChange={handleCo452Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co552}
// 								onChange={handleCo552Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co652}
// 								onChange={handleCo652Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co752}
// 								onChange={handleCo752Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency52} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators53} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight53} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co153}
// 								onChange={handleCo153Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co253}
// 								onChange={handleCo253Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co353}
// 								onChange={handleCo253Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co453}
// 								onChange={handleCo353Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co553}
// 								onChange={handleCo453Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co653}
// 								onChange={handleCo553Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co753}
// 								onChange={handleCo753Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators54} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight54} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co154}
// 								onChange={handleCo154Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co254}
// 								onChange={handleCo254Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co354}
// 								onChange={handleCo354Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co454}
// 								onChange={handleCo454Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co554}
// 								onChange={handleCo554Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co654}
// 								onChange={handleCo654Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co754}
// 								onChange={handleCo754Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency53} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators55} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight55} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co155}
// 								onChange={handleCo155Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co255}
// 								onChange={handleCo255Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co355}
// 								onChange={handleCo355Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co455}
// 								onChange={handleCo455Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co555}
// 								onChange={handleCo555Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co655}
// 								onChange={handleCo655Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co755}
// 								onChange={handleCo755Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators56} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight56} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co156}
// 								onChange={handleCo156Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co256}
// 								onChange={handleCo256Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co356}
// 								onChange={handleCo356Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co456}
// 								onChange={handleCo456Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co556}
// 								onChange={handleCo556Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co656}
// 								onChange={handleCo656Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co756}
// 								onChange={handleCo756Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td colSpan={4}>
// 							<Textarea readOnly value='PO5 : Mapping Level' className='my-6' />
// 						</td>

// 						<td>
// 							<Input type='number' value={editedTable?.po5mapco1} readOnly />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po5mapco2} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po5mapco3} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po5mapco4} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po5mapco5} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po5mapco6} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po5mapco7} readOnly />{" "}
// 						</td>
// 					</tr>
// 					{/* **************************************       PO:6        ****************************************************/}

// 					<tr className='m-4'>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.po61} className='my-6' />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.competency61} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators61} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight61} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co161}
// 								onChange={handleCo161Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co261}
// 								onChange={handleCo261Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co361}
// 								onChange={handleCo361Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co461}
// 								onChange={handleCo461Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co561}
// 								onChange={handleCo561Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co661}
// 								onChange={handleCo661Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co761}
// 								onChange={handleCo761Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.competency62} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators62} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight62} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co162}
// 								onChange={handleCo162Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co262}
// 								onChange={handleCo262Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co362}
// 								onChange={handleCo362Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co462}
// 								onChange={handleCo462Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co562}
// 								onChange={handleCo562Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co662}
// 								onChange={handleCo662Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co762}
// 								onChange={handleCo762Change}
// 							/>
// 						</td>
// 					</tr>

// 					<tr className='m-4'>
// 						<td colSpan={4}>
// 							<Textarea readOnly value='PO6 : Mapping Level' className='my-6' />
// 						</td>

// 						<td>
// 							<Input type='number' value={editedTable?.po6mapco1} readOnly />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po6mapco2} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po6mapco3} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po6mapco4} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po6mapco5} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po6mapco6} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po6mapco7} readOnly />{" "}
// 						</td>
// 					</tr>

// 					{/* **************************************       PO: 7        ****************************************************/}

// 					<tr className='m-4'>
// 						<td rowSpan={4}>
// 							<Textarea readOnly value={editedTable?.po71} className='my-6' />
// 						</td>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency71} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators71} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight71} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co171}
// 								onChange={handleCo171Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co271}
// 								onChange={handleCo271Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co371}
// 								onChange={handleCo371Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co471}
// 								onChange={handleCo471Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co571}
// 								onChange={handleCo571Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co671}
// 								onChange={handleCo671Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co771}
// 								onChange={handleCo771Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators72} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight72} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co172}
// 								onChange={handleCo172Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co272}
// 								onChange={handleCo272Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co372}
// 								onChange={handleCo372Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co472}
// 								onChange={handleCo472Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co572}
// 								onChange={handleCo572Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co672}
// 								onChange={handleCo672Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co772}
// 								onChange={handleCo772Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency72} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators73} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight73} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co173}
// 								onChange={handleCo173Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co273}
// 								onChange={handleCo273Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co373}
// 								onChange={handleCo373Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co473}
// 								onChange={handleCo473Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co573}
// 								onChange={handleCo573Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co673}
// 								onChange={handleCo673Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co773}
// 								onChange={handleCo773Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators74} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight74} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co174}
// 								onChange={handleCo174Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co274}
// 								onChange={handleCo274Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co374}
// 								onChange={handleCo374Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co474}
// 								onChange={handleCo474Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co574}
// 								onChange={handleCo574Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co674}
// 								onChange={handleCo674Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co774}
// 								onChange={handleCo774Change}
// 							/>
// 						</td>
// 					</tr>

// 					<tr className='m-4'>
// 						<td colSpan={4}>
// 							<Textarea readOnly value='PO7 : Mapping Level' className='my-6' />
// 						</td>

// 						<td>
// 							<Input type='number' value={editedTable?.po7mapco1} readOnly />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po7mapco2} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po7mapco3} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po7mapco4} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po7mapco5} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po7mapco6} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po7mapco7} readOnly />{" "}
// 						</td>
// 					</tr>
// 					{/* **************************************       PO: 8        ****************************************************/}

// 					<tr className='m-4'>
// 						<td rowSpan={3}>
// 							<Textarea readOnly value={editedTable?.po81} className='my-6' />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.competency81} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators81} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight81} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co181}
// 								onChange={handleCo181Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co281}
// 								onChange={handleCo281Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co381}
// 								onChange={handleCo381Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co481}
// 								onChange={handleCo481Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co581}
// 								onChange={handleCo581Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co681}
// 								onChange={handleCo681Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co781}
// 								onChange={handleCo781Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency82} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators82} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight82} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co182}
// 								onChange={handleCo182Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co282}
// 								onChange={handleCo282Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co382}
// 								onChange={handleCo382Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co482}
// 								onChange={handleCo482Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co582}
// 								onChange={handleCo582Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co682}
// 								onChange={handleCo682Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co782}
// 								onChange={handleCo782Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators83} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight83} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co183}
// 								onChange={handleCo183Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co283}
// 								onChange={handleCo283Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co383}
// 								onChange={handleCo383Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co483}
// 								onChange={handleCo483Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co583}
// 								onChange={handleCo583Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co683}
// 								onChange={handleCo683Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co783}
// 								onChange={handleCo783Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td colSpan={4}>
// 							<Textarea readOnly value='PO8 : Mapping Level' className='my-6' />
// 						</td>

// 						<td>
// 							<Input type='number' value={editedTable?.po8mapco1} readOnly />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po8mapco2} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po8mapco3} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po8mapco4} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po8mapco5} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po8mapco6} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po8mapco7} readOnly />{" "}
// 						</td>
// 					</tr>

// 					{/* **************************************       PO:9        ****************************************************/}

// 					<tr className='m-4'>
// 						<td rowSpan={7}>
// 							<Textarea readOnly value={editedTable?.po91} className='my-6' />
// 						</td>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency91} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators91} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight91} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co191}
// 								onChange={handleCo191Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co291}
// 								onChange={handleCo291Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co391}
// 								onChange={handleCo391Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co491}
// 								onChange={handleCo491Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co591}
// 								onChange={handleCo591Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co691}
// 								onChange={handleCo691Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co791}
// 								onChange={handleCo791Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators92} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight92} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co192}
// 								onChange={handleCo192Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co292}
// 								onChange={handleCo292Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co392}
// 								onChange={handleCo392Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co492}
// 								onChange={handleCo492Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co592}
// 								onChange={handleCo592Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co692}
// 								onChange={handleCo692Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co792}
// 								onChange={handleCo792Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={4}>
// 							<Textarea readOnly value={editedTable?.competency92} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators93} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight93} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co193}
// 								onChange={handleCo193Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co293}
// 								onChange={handleCo293Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co393}
// 								onChange={handleCo393Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co493}
// 								onChange={handleCo493Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co593}
// 								onChange={handleCo593Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co693}
// 								onChange={handleCo693Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co793}
// 								onChange={handleCo793Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators94} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight94} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co194}
// 								onChange={handleCo194Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co294}
// 								onChange={handleCo294Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co394}
// 								onChange={handleCo394Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co494}
// 								onChange={handleCo494Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co594}
// 								onChange={handleCo594Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co694}
// 								onChange={handleCo694Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co794}
// 								onChange={handleCo794Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators95} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight95} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co195}
// 								onChange={handleCo195Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co295}
// 								onChange={handleCo295Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co395}
// 								onChange={handleCo395Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co495}
// 								onChange={handleCo495Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co595}
// 								onChange={handleCo595Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co695}
// 								onChange={handleCo695Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co795}
// 								onChange={handleCo795Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators96} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight96} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co196}
// 								onChange={handleCo196Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co296}
// 								onChange={handleCo296Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co396}
// 								onChange={handleCo396Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co496}
// 								onChange={handleCo496Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co596}
// 								onChange={handleCo596Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co696}
// 								onChange={handleCo696Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co796}
// 								onChange={handleCo796Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.competency93} />
// 						</td>

// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators97} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight97} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co197}
// 								onChange={handleCo197Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co297}
// 								onChange={handleCo297Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co397}
// 								onChange={handleCo397Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co497}
// 								onChange={handleCo497Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co597}
// 								onChange={handleCo597Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co697}
// 								onChange={handleCo697Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co797}
// 								onChange={handleCo797Change}
// 							/>
// 						</td>
// 					</tr>

// 					<tr className='m-4'>
// 						<td colSpan={4}>
// 							<Textarea readOnly value='PO9 : Mapping Level' className='my-6' />
// 						</td>

// 						<td>
// 							<Input type='number' value={editedTable?.po9mapco1} readOnly />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po9mapco2} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po9mapco3} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po9mapco4} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po9mapco5} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po9mapco6} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po9mapco7} readOnly />{" "}
// 						</td>
// 					</tr>

// 					{/* **************************************       PO:10        ****************************************************/}

// 					<tr className='m-4'>
// 						<td rowSpan={7}>
// 							<Textarea readOnly value={editedTable?.po101} className='my-6' />
// 						</td>
// 						<td rowSpan={3}>
// 							<Textarea readOnly value={editedTable?.competency101} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators101} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight101} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1101}
// 								onChange={handleCo1101Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2101}
// 								onChange={handleCo2101Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3101}
// 								onChange={handleCo3101Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4101}
// 								onChange={handleCo4101Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5101}
// 								onChange={handleCo5101Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6101}
// 								onChange={handleCo6101Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7101}
// 								onChange={handleCo7101Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators102} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight102} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1102}
// 								onChange={handleCo1102Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2102}
// 								onChange={handleCo2102Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3102}
// 								onChange={handleCo3102Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4102}
// 								onChange={handleCo4102Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5102}
// 								onChange={handleCo5102Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6102}
// 								onChange={handleCo6102Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7102}
// 								onChange={handleCo7102Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators103} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight103} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1103}
// 								onChange={handleCo1103Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2103}
// 								onChange={handleCo2103Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3103}
// 								onChange={handleCo3103Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4103}
// 								onChange={handleCo4103Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5103}
// 								onChange={handleCo5103Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6103}
// 								onChange={handleCo6103Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7103}
// 								onChange={handleCo7103Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency102} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators104} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight104} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1104}
// 								onChange={handleCo1104Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2104}
// 								onChange={handleCo2104Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3104}
// 								onChange={handleCo3104Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4104}
// 								onChange={handleCo4104Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5104}
// 								onChange={handleCo5104Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6104}
// 								onChange={handleCo6104Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7104}
// 								onChange={handleCo7104Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators105} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight105} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1105}
// 								onChange={handleCo1105Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2105}
// 								onChange={handleCo2105Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3105}
// 								onChange={handleCo3105Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4105}
// 								onChange={handleCo4105Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5105}
// 								onChange={handleCo5105Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6105}
// 								onChange={handleCo6105Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7105}
// 								onChange={handleCo7105Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency103} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators106} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight106} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1106}
// 								onChange={handleCo1106Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2106}
// 								onChange={handleCo2106Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3106}
// 								onChange={handleCo3106Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4106}
// 								onChange={handleCo4106Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5106}
// 								onChange={handleCo5106Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6106}
// 								onChange={handleCo6106Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7106}
// 								onChange={handleCo7106Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators107} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight107} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1107}
// 								onChange={handleCo1107Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2107}
// 								onChange={handleCo2107Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3107}
// 								onChange={handleCo3107Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4107}
// 								onChange={handleCo4107Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5107}
// 								onChange={handleCo5107Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6107}
// 								onChange={handleCo6107Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7107}
// 								onChange={handleCo7107Change}
// 							/>
// 						</td>
// 					</tr>

// 					<tr className='m-4'>
// 						<td colSpan={4}>
// 							<Textarea
// 								readOnly
// 								value='PO10 : Mapping Level'
// 								className='my-6'
// 							/>
// 						</td>

// 						<td>
// 							<Input type='number' value={editedTable?.po10mapco1} readOnly />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po10mapco2} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po10mapco3} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po10mapco4} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po10mapco5} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po10mapco6} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po10mapco7} readOnly />{" "}
// 						</td>
// 					</tr>

// 					{/* **************************************       PO:11        ****************************************************/}

// 					<tr className='m-4'>
// 						<td rowSpan={5}>
// 							<Textarea readOnly value={editedTable?.po111} className='my-6' />
// 						</td>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency111} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators111} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight111} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1111}
// 								onChange={handleCo1111Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2111}
// 								onChange={handleCo2111Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3111}
// 								onChange={handleCo3111Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4111}
// 								onChange={handleCo4111Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5111}
// 								onChange={handleCo5111Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6111}
// 								onChange={handleCo6111Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7111}
// 								onChange={handleCo7111Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators112} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight112} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1112}
// 								onChange={handleCo1112Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2112}
// 								onChange={handleCo2112Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3112}
// 								onChange={handleCo3112Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4112}
// 								onChange={handleCo4112Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5112}
// 								onChange={handleCo5112Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6112}
// 								onChange={handleCo6112Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7112}
// 								onChange={handleCo7112Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.competency112} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators113} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight113} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1113}
// 								onChange={handleCo1113Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2113}
// 								onChange={handleCo2113Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3113}
// 								onChange={handleCo3113Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4113}
// 								onChange={handleCo4113Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5113}
// 								onChange={handleCo5113Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6113}
// 								onChange={handleCo6113Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7113}
// 								onChange={handleCo7113Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency113} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators114} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight114} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1114}
// 								onChange={handleCo1114Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2114}
// 								onChange={handleCo2114Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3114}
// 								onChange={handleCo3114Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4114}
// 								onChange={handleCo4114Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5114}
// 								onChange={handleCo5114Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6114}
// 								onChange={handleCo6114Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7114}
// 								onChange={handleCo7114Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators115} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight115} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1115}
// 								onChange={handleCo1115Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2115}
// 								onChange={handleCo2115Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3115}
// 								onChange={handleCo3115Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4115}
// 								onChange={handleCo4115Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5115}
// 								onChange={handleCo5115Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6115}
// 								onChange={handleCo6115Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7115}
// 								onChange={handleCo7115Change}
// 							/>
// 						</td>
// 					</tr>

// 					<tr className='m-4'>
// 						<td colSpan={4}>
// 							<Textarea
// 								readOnly
// 								value='PO11 : Mapping Level'
// 								className='my-6'
// 							/>
// 						</td>

// 						<td>
// 							<Input type='number' value={editedTable?.po11mapco1} readOnly />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po11mapco2} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po11mapco3} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po11mapco4} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po11mapco5} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po11mapco6} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po11mapco7} readOnly />{" "}
// 						</td>
// 					</tr>

// 					{/* **************************************       PO:12        ****************************************************/}

// 					<tr className='m-4'>
// 						<td rowSpan={6}>
// 							<Textarea readOnly value={editedTable?.po121} className='my-6' />
// 						</td>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency121} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators121} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight121} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1121}
// 								onChange={handleCo1121Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2121}
// 								onChange={handleCo2121Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3121}
// 								onChange={handleCo3121Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4121}
// 								onChange={handleCo4121Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5121}
// 								onChange={handleCo5121Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6121}
// 								onChange={handleCo6121Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7121}
// 								onChange={handleCo7121Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators122} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight122} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1122}
// 								onChange={handleCo1122Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2122}
// 								onChange={handleCo2122Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3122}
// 								onChange={handleCo3122Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4122}
// 								onChange={handleCo4122Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5122}
// 								onChange={handleCo5122Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6122}
// 								onChange={handleCo6122Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7122}
// 								onChange={handleCo7122Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency122} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators123} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight123} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1123}
// 								onChange={handleCo1123Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2123}
// 								onChange={handleCo2123Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3123}
// 								onChange={handleCo3123Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4123}
// 								onChange={handleCo4123Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5123}
// 								onChange={handleCo5123Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6123}
// 								onChange={handleCo6123Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7123}
// 								onChange={handleCo7123Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators124} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.weight124} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1124}
// 								onChange={handleCo1124Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2124}
// 								onChange={handleCo2124Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3124}
// 								onChange={handleCo3124Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4124}
// 								onChange={handleCo4124Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5124}
// 								onChange={handleCo5124Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6124}
// 								onChange={handleCo6124Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7124}
// 								onChange={handleCo7124Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.competency123} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators125} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight125} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1125}
// 								onChange={handleCo1125Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2125}
// 								onChange={handleCo2125Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3125}
// 								onChange={handleCo3125Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4125}
// 								onChange={handleCo4125Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5125}
// 								onChange={handleCo5125Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6125}
// 								onChange={handleCo6125Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7125}
// 								onChange={handleCo7125Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.indicators126} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.weight126} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co1126}
// 								onChange={handleCo1126Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co2126}
// 								onChange={handleCo2126Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co3126}
// 								onChange={handleCo3126Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co4126}
// 								onChange={handleCo4126Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co5126}
// 								onChange={handleCo5126Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co6126}
// 								onChange={handleCo6126Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.co7126}
// 								onChange={handleCo7126Change}
// 							/>
// 						</td>
// 					</tr>

// 					<tr className='m-4'>
// 						<td colSpan={4}>
// 							<Textarea
// 								readOnly
// 								value='PO12 : Mapping Level'
// 								className='my-6'
// 							/>
// 						</td>

// 						<td>
// 							<Input type='number' value={editedTable?.po12mapco1} readOnly />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po12mapco2} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po12mapco3} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po12mapco4} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po12mapco5} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po12mapco6} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.po12mapco7} readOnly />{" "}
// 						</td>
// 					</tr>

// 					{/* ************************************  PSO : 1       ************************************ */}

// 					<tr className='m-4'>
// 						<td rowSpan={5}>
// 							<Textarea readOnly value={editedTable?.pso11} className='my-6' />
// 						</td>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.psocompetency11} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.psoindicators11} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.psoweight11} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco111}
// 								onChange={handlePsoCo111Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco211}
// 								onChange={handlePsoCo211Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco311}
// 								onChange={handlePsoCo311Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco411}
// 								onChange={handlePsoCo411Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco511}
// 								onChange={handlePsoCo511Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco611}
// 								onChange={handlePsoCo611Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco711}
// 								onChange={handlePsoCo711Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.psoindicators12} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.psoweight12} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco112}
// 								onChange={handlePsoCo112Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco212}
// 								onChange={handlePsoCo212Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco312}
// 								onChange={handlePsoCo312Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco412}
// 								onChange={handlePsoCo412Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco512}
// 								onChange={handlePsoCo512Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco612}
// 								onChange={handlePsoCo612Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco712}
// 								onChange={handlePsoCo712Change}
// 							/>
// 						</td>
// 					</tr>

// 					<tr className='m-4'>
// 						<td rowSpan={3}>
// 							<Textarea readOnly value={editedTable?.psocompetency12} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.psoindicators13} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.psoweight13} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco113}
// 								onChange={handlePsoCo113Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco213}
// 								onChange={handlePsoCo213Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco313}
// 								onChange={handlePsoCo313Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco413}
// 								onChange={handlePsoCo413Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco513}
// 								onChange={handlePsoCo513Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco613}
// 								onChange={handlePsoCo613Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco713}
// 								onChange={handlePsoCo713Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.psoindicators14} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.psoweight14} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco114}
// 								onChange={handlePsoCo114Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco214}
// 								onChange={handlePsoCo214Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco314}
// 								onChange={handlePsoCo314Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco414}
// 								onChange={handlePsoCo414Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco514}
// 								onChange={handlePsoCo514Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco614}
// 								onChange={handlePsoCo614Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco714}
// 								onChange={handlePsoCo714Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.psoindicators15} />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.psoweight15} readOnly />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco115}
// 								onChange={handlePsoCo115Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco215}
// 								onChange={handlePsoCo215Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco315}
// 								onChange={handlePsoCo315Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco415}
// 								onChange={handlePsoCo415Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco515}
// 								onChange={handlePsoCo515Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco615}
// 								onChange={handlePsoCo615Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco715}
// 								onChange={handlePsoCo715Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td colSpan={4}>
// 							<Textarea
// 								readOnly
// 								value='PSO 1 : Mapping Level'
// 								className='my-6'
// 							/>
// 						</td>

// 						<td>
// 							<Input type='number' value={editedTable?.pso1mapco1} readOnly />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso1mapco2} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso1mapco3} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso1mapco4} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso1mapco5} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso1mapco6} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso1mapco7} readOnly />{" "}
// 						</td>
// 					</tr>

// 					{/* ************************************  PSO : 2       ************************************ */}

// 					<tr className='m-4'>
// 						<td rowSpan={4}>
// 							<Textarea readOnly value={editedTable?.pso21} className='my-6' />
// 						</td>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.psocompetency21} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.psoindicators21} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.psoweight21} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco121}
// 								onChange={handlePsoCo121Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco221}
// 								onChange={handlePsoCo221Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco321}
// 								onChange={handlePsoCo321Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco421}
// 								onChange={handlePsoCo421Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco521}
// 								onChange={handlePsoCo521Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco621}
// 								onChange={handlePsoCo621Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco721}
// 								onChange={handlePsoCo721Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.psoindicators22} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.psoweight22} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco122}
// 								onChange={handlePsoCo122Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco222}
// 								onChange={handlePsoCo222Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco322}
// 								onChange={handlePsoCo322Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco422}
// 								onChange={handlePsoCo422Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco522}
// 								onChange={handlePsoCo522Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco622}
// 								onChange={handlePsoCo622Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco722}
// 								onChange={handlePsoCo722Change}
// 							/>
// 						</td>
// 					</tr>

// 					<tr className='m-4'>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.psocompetency22} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.psoindicators23} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.psoweight23} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco123}
// 								onChange={handlePsoCo123Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco223}
// 								onChange={handlePsoCo223Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco323}
// 								onChange={handlePsoCo323Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco423}
// 								onChange={handlePsoCo423Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco523}
// 								onChange={handlePsoCo523Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco623}
// 								onChange={handlePsoCo623Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco723}
// 								onChange={handlePsoCo723Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.psoindicators24} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.psoweight24} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco124}
// 								onChange={handlePsoCo124Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco224}
// 								onChange={handlePsoCo224Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco324}
// 								onChange={handlePsoCo324Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco424}
// 								onChange={handlePsoCo424Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco524}
// 								onChange={handlePsoCo524Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco624}
// 								onChange={handlePsoCo624Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco724}
// 								onChange={handlePsoCo724Change}
// 							/>
// 						</td>
// 					</tr>

// 					<tr className='m-4'>
// 						<td colSpan={4}>
// 							<Textarea
// 								readOnly
// 								value='PSO 2 : Mapping Level'
// 								className='my-6'
// 							/>
// 						</td>

// 						<td>
// 							<Input type='number' value={editedTable?.pso2mapco1} readOnly />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso2mapco2} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso2mapco3} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso2mapco4} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso2mapco5} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso2mapco6} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso2mapco7} readOnly />{" "}
// 						</td>
// 					</tr>

// 					{/* ************************************  PSO : 3       ************************************ */}

// 					<tr className='m-4'>
// 						<td rowSpan={4}>
// 							<Textarea readOnly value={editedTable?.pso31} className='my-6' />
// 						</td>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.psocompetency31} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.psoindicators31} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.psoweight31} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco131}
// 								onChange={handlePsoCo131Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco231}
// 								onChange={handlePsoCo231Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco331}
// 								onChange={handlePsoCo331Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco431}
// 								onChange={handlePsoCo431Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco531}
// 								onChange={handlePsoCo531Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco631}
// 								onChange={handlePsoCo631Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco731}
// 								onChange={handlePsoCo731Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.psoindicators32} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.psoweight32} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco132}
// 								onChange={handlePsoCo132Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco232}
// 								onChange={handlePsoCo232Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco332}
// 								onChange={handlePsoCo332Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco432}
// 								onChange={handlePsoCo432Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco532}
// 								onChange={handlePsoCo532Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco632}
// 								onChange={handlePsoCo632Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco732}
// 								onChange={handlePsoCo732Change}
// 							/>
// 						</td>
// 					</tr>

// 					<tr className='m-4'>
// 						<td rowSpan={2}>
// 							<Textarea readOnly value={editedTable?.psocompetency32} />
// 						</td>
// 						<td>
// 							<Textarea readOnly value={editedTable?.psoindicators33} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.psoweight33} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco133}
// 								onChange={handlePsoCo133Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco233}
// 								onChange={handlePsoCo233Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco333}
// 								onChange={handlePsoCo333Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco433}
// 								onChange={handlePsoCo433Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco533}
// 								onChange={handlePsoCo533Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco633}
// 								onChange={handlePsoCo633Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco733}
// 								onChange={handlePsoCo733Change}
// 							/>
// 						</td>
// 					</tr>
// 					<tr className='m-4'>
// 						<td>
// 							<Textarea readOnly value={editedTable?.psoindicators34} />
// 						</td>
// 						<td>
// 							<Input type='number' readOnly value={editedTable?.psoweight34} />
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco134}
// 								onChange={handlePsoCo134Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco234}
// 								onChange={handlePsoCo234Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco334}
// 								onChange={handlePsoCo334Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco434}
// 								onChange={handlePsoCo434Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco534}
// 								onChange={handlePsoCo534Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco634}
// 								onChange={handlePsoCo634Change}
// 							/>
// 						</td>
// 						<td>
// 							<Input
// 								type='number'
// 								value={editedTable?.psoco734}
// 								onChange={handlePsoCo734Change}
// 							/>
// 						</td>
// 					</tr>

// 					<tr className='m-4'>
// 						<td colSpan={4}>
// 							<Textarea
// 								readOnly
// 								value='PSO 3 : Mapping Level'
// 								className='my-6'
// 							/>
// 						</td>

// 						<td>
// 							<Input type='number' value={editedTable?.pso3mapco1} readOnly />
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso3mapco2} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso3mapco3} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso3mapco4} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso3mapco5} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso3mapco6} readOnly />{" "}
// 						</td>
// 						<td>
// 							<Input type='number' value={editedTable?.pso3mapco7} readOnly />{" "}
// 						</td>
// 					</tr>
// 				</tbody>
// 			</table>
// 			<Button onClick={handleSaveChanges}>Save Changes</Button>

// 			<div className='mt-8'>
// 				<Link href={`/po-table/${editedTable?._id}`}>
// 					<Button variant='flat' color='primary'>
// 						Edit
// 					</Button>
// 				</Link>
// 			</div>
// 		</div>
// 	);
// };

// export default TableDetail;
