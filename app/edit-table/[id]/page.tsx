"use client";
import { Button, Input, Spinner, Textarea } from "@nextui-org/react";
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

	// *********************************    Po 2  ***********************
	// Define the calculation function
	const calculatePo2mapco1 = () => {
		const sumCo =
			parseInt(editedTable?.co121 || 0) +
			parseInt(editedTable?.co122 || 0) +
			parseInt(editedTable?.co123 || 0) +
			parseInt(editedTable?.co124 || 0) +
			parseInt(editedTable?.co125 || 0) +
			parseInt(editedTable?.co126 || 0) +
			parseInt(editedTable?.co127 || 0) +
			parseInt(editedTable?.co128 || 0) +
			parseInt(editedTable?.co129 || 0) +
			parseInt(editedTable?.co1210 || 0) +
			parseInt(editedTable?.co1211 || 0) +
			parseInt(editedTable?.co1212 || 0) +
			parseInt(editedTable?.co1213 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po2mapco1: calculatedValue,
		}));
	};
	const calculatePo2mapco2 = () => {
		const sumCo =
			parseInt(editedTable?.co221 || 0) +
			parseInt(editedTable?.co222 || 0) +
			parseInt(editedTable?.co223 || 0) +
			parseInt(editedTable?.co224 || 0) +
			parseInt(editedTable?.co225 || 0) +
			parseInt(editedTable?.co226 || 0) +
			parseInt(editedTable?.co227 || 0) +
			parseInt(editedTable?.co228 || 0) +
			parseInt(editedTable?.co229 || 0) +
			parseInt(editedTable?.co2210 || 0) +
			parseInt(editedTable?.co2211 || 0) +
			parseInt(editedTable?.co2212 || 0) +
			parseInt(editedTable?.co2213 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po2mapco2: calculatedValue,
		}));
	};
	const calculatePo2mapco3 = () => {
		const sumCo =
			parseInt(editedTable?.co321 || 0) +
			parseInt(editedTable?.co322 || 0) +
			parseInt(editedTable?.co323 || 0) +
			parseInt(editedTable?.co324 || 0) +
			parseInt(editedTable?.co325 || 0) +
			parseInt(editedTable?.co326 || 0) +
			parseInt(editedTable?.co327 || 0) +
			parseInt(editedTable?.co328 || 0) +
			parseInt(editedTable?.co329 || 0) +
			parseInt(editedTable?.co3210 || 0) +
			parseInt(editedTable?.co3211 || 0) +
			parseInt(editedTable?.co3212 || 0) +
			parseInt(editedTable?.co3213 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po2mapco3: calculatedValue,
		}));
	};
	const calculatePo2mapco4 = () => {
		const sumCo =
			parseInt(editedTable?.co421 || 0) +
			parseInt(editedTable?.co422 || 0) +
			parseInt(editedTable?.co423 || 0) +
			parseInt(editedTable?.co424 || 0) +
			parseInt(editedTable?.co425 || 0) +
			parseInt(editedTable?.co426 || 0) +
			parseInt(editedTable?.co427 || 0) +
			parseInt(editedTable?.co428 || 0) +
			parseInt(editedTable?.co429 || 0) +
			parseInt(editedTable?.co4210 || 0) +
			parseInt(editedTable?.co4211 || 0) +
			parseInt(editedTable?.co4212 || 0) +
			parseInt(editedTable?.co4213 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po2mapco4: calculatedValue,
		}));
	};
	const calculatePo2mapco5 = () => {
		const sumCo =
			parseInt(editedTable?.co521 || 0) +
			parseInt(editedTable?.co522 || 0) +
			parseInt(editedTable?.co523 || 0) +
			parseInt(editedTable?.co524 || 0) +
			parseInt(editedTable?.co525 || 0) +
			parseInt(editedTable?.co526 || 0) +
			parseInt(editedTable?.co527 || 0) +
			parseInt(editedTable?.co528 || 0) +
			parseInt(editedTable?.co529 || 0) +
			parseInt(editedTable?.co5210 || 0) +
			parseInt(editedTable?.co5211 || 0) +
			parseInt(editedTable?.co5212 || 0) +
			parseInt(editedTable?.co5213 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po2mapco5: calculatedValue,
		}));
	};
	const calculatePo2mapco6 = () => {
		const sumCo =
			parseInt(editedTable?.co621 || 0) +
			parseInt(editedTable?.co622 || 0) +
			parseInt(editedTable?.co623 || 0) +
			parseInt(editedTable?.co624 || 0) +
			parseInt(editedTable?.co625 || 0) +
			parseInt(editedTable?.co626 || 0) +
			parseInt(editedTable?.co627 || 0) +
			parseInt(editedTable?.co628 || 0) +
			parseInt(editedTable?.co629 || 0) +
			parseInt(editedTable?.co6210 || 0) +
			parseInt(editedTable?.co6211 || 0) +
			parseInt(editedTable?.co6212 || 0) +
			parseInt(editedTable?.co6213 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po2mapco6: calculatedValue,
		}));
	};
	const calculatePo2mapco7 = () => {
		const sumCo =
			parseInt(editedTable?.co721 || 0) +
			parseInt(editedTable?.co722 || 0) +
			parseInt(editedTable?.co723 || 0) +
			parseInt(editedTable?.co724 || 0) +
			parseInt(editedTable?.co725 || 0) +
			parseInt(editedTable?.co726 || 0) +
			parseInt(editedTable?.co727 || 0) +
			parseInt(editedTable?.co728 || 0) +
			parseInt(editedTable?.co729 || 0) +
			parseInt(editedTable?.co7210 || 0) +
			parseInt(editedTable?.co7211 || 0) +
			parseInt(editedTable?.co7212 || 0) +
			parseInt(editedTable?.co7213 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po2mapco7: calculatedValue,
		}));
	};
	// *********************************    Po 3  ***************************************************
	// Define the calculation function
	const calculatePo3mapco1 = () => {
		const sumCo =
			parseInt(editedTable?.co131 || 0) +
			parseInt(editedTable?.co132 || 0) +
			parseInt(editedTable?.co133 || 0) +
			parseInt(editedTable?.co134 || 0) +
			parseInt(editedTable?.co135 || 0) +
			parseInt(editedTable?.co136 || 0) +
			parseInt(editedTable?.co137 || 0) +
			parseInt(editedTable?.co138 || 0) +
			parseInt(editedTable?.co139 || 0) +
			parseInt(editedTable?.co1310 || 0) +
			parseInt(editedTable?.co1311 || 0) +
			parseInt(editedTable?.co1312 || 0) +
			parseInt(editedTable?.co1313 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po3mapco1: calculatedValue,
		}));
	};
	const calculatePo3mapco2 = () => {
		const sumCo =
			parseInt(editedTable?.co231 || 0) +
			parseInt(editedTable?.co232 || 0) +
			parseInt(editedTable?.co233 || 0) +
			parseInt(editedTable?.co234 || 0) +
			parseInt(editedTable?.co235 || 0) +
			parseInt(editedTable?.co236 || 0) +
			parseInt(editedTable?.co237 || 0) +
			parseInt(editedTable?.co238 || 0) +
			parseInt(editedTable?.co239 || 0) +
			parseInt(editedTable?.co2310 || 0) +
			parseInt(editedTable?.co2311 || 0) +
			parseInt(editedTable?.co2312 || 0) +
			parseInt(editedTable?.co2313 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po3mapco2: calculatedValue,
		}));
	};
	const calculatePo3mapco3 = () => {
		const sumCo =
			parseInt(editedTable?.co331 || 0) +
			parseInt(editedTable?.co332 || 0) +
			parseInt(editedTable?.co333 || 0) +
			parseInt(editedTable?.co334 || 0) +
			parseInt(editedTable?.co335 || 0) +
			parseInt(editedTable?.co336 || 0) +
			parseInt(editedTable?.co337 || 0) +
			parseInt(editedTable?.co338 || 0) +
			parseInt(editedTable?.co339 || 0) +
			parseInt(editedTable?.co3310 || 0) +
			parseInt(editedTable?.co3311 || 0) +
			parseInt(editedTable?.co3312 || 0) +
			parseInt(editedTable?.co3313 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po3mapco3: calculatedValue,
		}));
	};
	const calculatePo3mapco4 = () => {
		const sumCo =
			parseInt(editedTable?.co431 || 0) +
			parseInt(editedTable?.co432 || 0) +
			parseInt(editedTable?.co433 || 0) +
			parseInt(editedTable?.co434 || 0) +
			parseInt(editedTable?.co435 || 0) +
			parseInt(editedTable?.co436 || 0) +
			parseInt(editedTable?.co437 || 0) +
			parseInt(editedTable?.co438 || 0) +
			parseInt(editedTable?.co439 || 0) +
			parseInt(editedTable?.co4310 || 0) +
			parseInt(editedTable?.co4311 || 0) +
			parseInt(editedTable?.co4312 || 0) +
			parseInt(editedTable?.co4313 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po3mapco4: calculatedValue,
		}));
	};
	const calculatePo3mapco5 = () => {
		const sumCo =
			parseInt(editedTable?.co531 || 0) +
			parseInt(editedTable?.co532 || 0) +
			parseInt(editedTable?.co533 || 0) +
			parseInt(editedTable?.co534 || 0) +
			parseInt(editedTable?.co535 || 0) +
			parseInt(editedTable?.co536 || 0) +
			parseInt(editedTable?.co537 || 0) +
			parseInt(editedTable?.co538 || 0) +
			parseInt(editedTable?.co539 || 0) +
			parseInt(editedTable?.co5310 || 0) +
			parseInt(editedTable?.co5311 || 0) +
			parseInt(editedTable?.co5312 || 0) +
			parseInt(editedTable?.co5313 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po3mapco5: calculatedValue,
		}));
	};
	const calculatePo3mapco6 = () => {
		const sumCo =
			parseInt(editedTable?.co631 || 0) +
			parseInt(editedTable?.co632 || 0) +
			parseInt(editedTable?.co633 || 0) +
			parseInt(editedTable?.co634 || 0) +
			parseInt(editedTable?.co635 || 0) +
			parseInt(editedTable?.co636 || 0) +
			parseInt(editedTable?.co637 || 0) +
			parseInt(editedTable?.co638 || 0) +
			parseInt(editedTable?.co639 || 0) +
			parseInt(editedTable?.co6310 || 0) +
			parseInt(editedTable?.co6311 || 0) +
			parseInt(editedTable?.co6312 || 0) +
			parseInt(editedTable?.co6313 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po3mapco6: calculatedValue,
		}));
	};
	const calculatePo3mapco7 = () => {
		const sumCo =
			parseInt(editedTable?.co731 || 0) +
			parseInt(editedTable?.co732 || 0) +
			parseInt(editedTable?.co733 || 0) +
			parseInt(editedTable?.co734 || 0) +
			parseInt(editedTable?.co735 || 0) +
			parseInt(editedTable?.co736 || 0) +
			parseInt(editedTable?.co737 || 0) +
			parseInt(editedTable?.co738 || 0) +
			parseInt(editedTable?.co739 || 0) +
			parseInt(editedTable?.co7310 || 0) +
			parseInt(editedTable?.co7311 || 0) +
			parseInt(editedTable?.co7312 || 0) +
			parseInt(editedTable?.co7313 || 0);
		const calculatedValue = Math.round((sumCo * 0.08) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po3mapco7: calculatedValue,
		}));
	};
	// *********************************    Po 4  ***************************************************
	// Define the calculation function
	const calculatePo4mapco1 = () => {
		const sumCo =
			parseInt(editedTable?.co141 || 0) +
			parseInt(editedTable?.co142 || 0) +
			parseInt(editedTable?.co143 || 0) +
			parseInt(editedTable?.co144 || 0) +
			parseInt(editedTable?.co145 || 0) +
			parseInt(editedTable?.co146 || 0) +
			parseInt(editedTable?.co147 || 0) +
			parseInt(editedTable?.co148 || 0) +
			parseInt(editedTable?.co149 || 0) +
			parseInt(editedTable?.co1410 || 0);
		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po4mapco1: calculatedValue,
		}));
	};
	const calculatePo4mapco2 = () => {
		const sumCo =
			parseInt(editedTable?.co241 || 0) +
			parseInt(editedTable?.co242 || 0) +
			parseInt(editedTable?.co243 || 0) +
			parseInt(editedTable?.co244 || 0) +
			parseInt(editedTable?.co245 || 0) +
			parseInt(editedTable?.co246 || 0) +
			parseInt(editedTable?.co247 || 0) +
			parseInt(editedTable?.co248 || 0) +
			parseInt(editedTable?.co249 || 0) +
			parseInt(editedTable?.co2410 || 0);
		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po4mapco2: calculatedValue,
		}));
	};
	const calculatePo4mapco3 = () => {
		const sumCo =
			parseInt(editedTable?.co341 || 0) +
			parseInt(editedTable?.co342 || 0) +
			parseInt(editedTable?.co343 || 0) +
			parseInt(editedTable?.co344 || 0) +
			parseInt(editedTable?.co345 || 0) +
			parseInt(editedTable?.co346 || 0) +
			parseInt(editedTable?.co347 || 0) +
			parseInt(editedTable?.co348 || 0) +
			parseInt(editedTable?.co349 || 0) +
			parseInt(editedTable?.co3410 || 0);
		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po4mapco3: calculatedValue,
		}));
	};
	const calculatePo4mapco4 = () => {
		const sumCo =
			parseInt(editedTable?.co441 || 0) +
			parseInt(editedTable?.co442 || 0) +
			parseInt(editedTable?.co443 || 0) +
			parseInt(editedTable?.co444 || 0) +
			parseInt(editedTable?.co445 || 0) +
			parseInt(editedTable?.co446 || 0) +
			parseInt(editedTable?.co447 || 0) +
			parseInt(editedTable?.co448 || 0) +
			parseInt(editedTable?.co449 || 0) +
			parseInt(editedTable?.co4410 || 0);
		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po4mapco4: calculatedValue,
		}));
	};
	const calculatePo4mapco5 = () => {
		const sumCo =
			parseInt(editedTable?.co541 || 0) +
			parseInt(editedTable?.co542 || 0) +
			parseInt(editedTable?.co543 || 0) +
			parseInt(editedTable?.co544 || 0) +
			parseInt(editedTable?.co545 || 0) +
			parseInt(editedTable?.co546 || 0) +
			parseInt(editedTable?.co547 || 0) +
			parseInt(editedTable?.co548 || 0) +
			parseInt(editedTable?.co549 || 0) +
			parseInt(editedTable?.co5410 || 0);
		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po4mapco5: calculatedValue,
		}));
	};
	const calculatePo4mapco6 = () => {
		const sumCo =
			parseInt(editedTable?.co641 || 0) +
			parseInt(editedTable?.co642 || 0) +
			parseInt(editedTable?.co643 || 0) +
			parseInt(editedTable?.co644 || 0) +
			parseInt(editedTable?.co645 || 0) +
			parseInt(editedTable?.co646 || 0) +
			parseInt(editedTable?.co647 || 0) +
			parseInt(editedTable?.co648 || 0) +
			parseInt(editedTable?.co649 || 0) +
			parseInt(editedTable?.co6410 || 0);
		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po4mapco6: calculatedValue,
		}));
	};
	const calculatePo4mapco7 = () => {
		const sumCo =
			parseInt(editedTable?.co741 || 0) +
			parseInt(editedTable?.co742 || 0) +
			parseInt(editedTable?.co743 || 0) +
			parseInt(editedTable?.co744 || 0) +
			parseInt(editedTable?.co745 || 0) +
			parseInt(editedTable?.co746 || 0) +
			parseInt(editedTable?.co747 || 0) +
			parseInt(editedTable?.co748 || 0) +
			parseInt(editedTable?.co749 || 0) +
			parseInt(editedTable?.co7410 || 0);
		const calculatedValue = Math.round((sumCo * 0.1) / 0.33);
		setEditedTable((prevTable: any) => ({
			...prevTable,
			po4mapco7: calculatedValue,
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

		//  ************************************      po2           *******************************

		calculatePo2mapco1();
		calculatePo2mapco2();
		calculatePo2mapco3();
		calculatePo2mapco4();
		calculatePo2mapco5();
		calculatePo2mapco6();
		calculatePo2mapco7();
		//  ************************************      po3           *******************************

		calculatePo3mapco1();
		calculatePo3mapco2();
		calculatePo3mapco3();
		calculatePo3mapco4();
		calculatePo3mapco5();
		calculatePo3mapco6();
		calculatePo3mapco7();
		//  ************************************      po4           *******************************

		calculatePo4mapco1();
		calculatePo4mapco2();
		calculatePo4mapco3();
		calculatePo4mapco4();
		calculatePo4mapco5();
		calculatePo4mapco6();
		calculatePo4mapco7();
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

		// po:3

		editedTable?.co131,
		editedTable?.co132,
		editedTable?.co133,
		editedTable?.co134,
		editedTable?.co135,
		editedTable?.co136,
		editedTable?.co137,
		editedTable?.co138,
		editedTable?.co139,
		editedTable?.co1310,
		editedTable?.co1311,
		editedTable?.co1312,
		editedTable?.co1313,

		editedTable?.co231,
		editedTable?.co232,
		editedTable?.co233,
		editedTable?.co234,
		editedTable?.co235,
		editedTable?.co236,
		editedTable?.co237,
		editedTable?.co238,
		editedTable?.co239,
		editedTable?.co2310,
		editedTable?.co2311,
		editedTable?.co2312,
		editedTable?.co2313,

		editedTable?.co331,
		editedTable?.co332,
		editedTable?.co333,
		editedTable?.co334,
		editedTable?.co335,
		editedTable?.co336,
		editedTable?.co337,
		editedTable?.co338,
		editedTable?.co339,
		editedTable?.co3310,
		editedTable?.co3311,
		editedTable?.co3312,
		editedTable?.co3313,

		editedTable?.co431,
		editedTable?.co432,
		editedTable?.co433,
		editedTable?.co434,
		editedTable?.co435,
		editedTable?.co436,
		editedTable?.co437,
		editedTable?.co438,
		editedTable?.co439,
		editedTable?.co4310,
		editedTable?.co4311,
		editedTable?.co4312,
		editedTable?.co4313,

		editedTable?.co531,
		editedTable?.co532,
		editedTable?.co533,
		editedTable?.co534,
		editedTable?.co535,
		editedTable?.co536,
		editedTable?.co537,
		editedTable?.co538,
		editedTable?.co539,
		editedTable?.co5310,
		editedTable?.co5311,
		editedTable?.co5312,
		editedTable?.co5313,

		editedTable?.co631,
		editedTable?.co632,
		editedTable?.co633,
		editedTable?.co634,
		editedTable?.co635,
		editedTable?.co636,
		editedTable?.co637,
		editedTable?.co638,
		editedTable?.co639,
		editedTable?.co6310,
		editedTable?.co6311,
		editedTable?.co6312,
		editedTable?.co6313,

		editedTable?.co731,
		editedTable?.co732,
		editedTable?.co733,
		editedTable?.co734,
		editedTable?.co735,
		editedTable?.co736,
		editedTable?.co737,
		editedTable?.co738,
		editedTable?.co739,
		editedTable?.co7310,
		editedTable?.co7311,
		editedTable?.co7312,
		editedTable?.co7313,

		// ************************ PO:4  ***************************************

		editedTable?.co141,
		editedTable?.co142,
		editedTable?.co143,
		editedTable?.co144,
		editedTable?.co145,
		editedTable?.co146,
		editedTable?.co147,
		editedTable?.co148,
		editedTable?.co149,
		editedTable?.co1410,

		editedTable?.co241,
		editedTable?.co242,
		editedTable?.co243,
		editedTable?.co244,
		editedTable?.co245,
		editedTable?.co246,
		editedTable?.co247,
		editedTable?.co248,
		editedTable?.co249,
		editedTable?.co2410,

		editedTable?.co341,
		editedTable?.co342,
		editedTable?.co343,
		editedTable?.co344,
		editedTable?.co345,
		editedTable?.co346,
		editedTable?.co347,
		editedTable?.co348,
		editedTable?.co349,
		editedTable?.co3410,

		editedTable?.co441,
		editedTable?.co442,
		editedTable?.co443,
		editedTable?.co444,
		editedTable?.co445,
		editedTable?.co446,
		editedTable?.co447,
		editedTable?.co448,
		editedTable?.co449,
		editedTable?.co4410,

		editedTable?.co541,
		editedTable?.co542,
		editedTable?.co543,
		editedTable?.co544,
		editedTable?.co545,
		editedTable?.co546,
		editedTable?.co547,
		editedTable?.co548,
		editedTable?.co549,
		editedTable?.co5410,

		editedTable?.co641,
		editedTable?.co642,
		editedTable?.co643,
		editedTable?.co644,
		editedTable?.co645,
		editedTable?.co646,
		editedTable?.co647,
		editedTable?.co648,
		editedTable?.co649,
		editedTable?.co6410,

		editedTable?.co741,
		editedTable?.co742,
		editedTable?.co743,
		editedTable?.co744,
		editedTable?.co745,
		editedTable?.co746,
		editedTable?.co747,
		editedTable?.co748,
		editedTable?.co749,
		editedTable?.co7410,

		// ************************ PO:5  ***************************************

		editedTable?.co151,
		editedTable?.co152,
		editedTable?.co153,
		editedTable?.co154,
		editedTable?.co155,
		editedTable?.co156,

		editedTable?.co251,
		editedTable?.co252,
		editedTable?.co253,
		editedTable?.co254,
		editedTable?.co255,
		editedTable?.co256,

		editedTable?.co351,
		editedTable?.co352,
		editedTable?.co353,
		editedTable?.co354,
		editedTable?.co355,
		editedTable?.co356,

		editedTable?.co451,
		editedTable?.co452,
		editedTable?.co453,
		editedTable?.co454,
		editedTable?.co455,
		editedTable?.co456,

		editedTable?.co551,
		editedTable?.co552,
		editedTable?.co553,
		editedTable?.co554,
		editedTable?.co555,
		editedTable?.co556,

		editedTable?.co651,
		editedTable?.co652,
		editedTable?.co653,
		editedTable?.co654,
		editedTable?.co655,
		editedTable?.co656,

		editedTable?.co751,
		editedTable?.co752,
		editedTable?.co753,
		editedTable?.co754,
		editedTable?.co755,
		editedTable?.co756,

		// ************************ PO:6  ***************************************

		editedTable?.co161,
		editedTable?.co162,

		editedTable?.co261,
		editedTable?.co262,

		editedTable?.co361,
		editedTable?.co362,

		editedTable?.co461,
		editedTable?.co462,

		editedTable?.co561,
		editedTable?.co562,

		editedTable?.co661,
		editedTable?.co662,

		editedTable?.co761,
		editedTable?.co762,

		// ************************ PO:7  ***************************************

		editedTable?.co171,
		editedTable?.co172,
		editedTable?.co173,
		editedTable?.co174,

		editedTable?.co271,
		editedTable?.co272,
		editedTable?.co273,
		editedTable?.co274,

		editedTable?.co371,
		editedTable?.co372,
		editedTable?.co373,
		editedTable?.co374,

		editedTable?.co471,
		editedTable?.co472,
		editedTable?.co473,
		editedTable?.co474,

		editedTable?.co571,
		editedTable?.co572,
		editedTable?.co573,
		editedTable?.co574,

		editedTable?.co671,
		editedTable?.co672,
		editedTable?.co673,
		editedTable?.co674,

		editedTable?.co771,
		editedTable?.co772,
		editedTable?.co773,
		editedTable?.co774,

		// ************************ PO:8  ***************************************

		editedTable?.co181,
		editedTable?.co182,
		editedTable?.co183,

		editedTable?.co281,
		editedTable?.co282,
		editedTable?.co283,

		editedTable?.co381,
		editedTable?.co382,
		editedTable?.co383,

		editedTable?.co481,
		editedTable?.co482,
		editedTable?.co483,

		editedTable?.co581,
		editedTable?.co582,
		editedTable?.co583,

		editedTable?.co681,
		editedTable?.co682,
		editedTable?.co683,

		editedTable?.co781,
		editedTable?.co782,
		editedTable?.co783,

		// ************************ PO:9  ***************************************

		editedTable?.co191,
		editedTable?.co192,
		editedTable?.co193,
		editedTable?.co194,
		editedTable?.co195,
		editedTable?.co196,
		editedTable?.co197,

		editedTable?.co291,
		editedTable?.co292,
		editedTable?.co293,
		editedTable?.co294,
		editedTable?.co295,
		editedTable?.co296,
		editedTable?.co297,

		editedTable?.co391,
		editedTable?.co392,
		editedTable?.co393,
		editedTable?.co394,
		editedTable?.co395,
		editedTable?.co396,
		editedTable?.co397,

		editedTable?.co491,
		editedTable?.co492,
		editedTable?.co493,
		editedTable?.co494,
		editedTable?.co495,
		editedTable?.co496,
		editedTable?.co497,

		editedTable?.co591,
		editedTable?.co592,
		editedTable?.co593,
		editedTable?.co594,
		editedTable?.co595,
		editedTable?.co596,
		editedTable?.co597,

		editedTable?.co691,
		editedTable?.co692,
		editedTable?.co693,
		editedTable?.co694,
		editedTable?.co695,
		editedTable?.co696,
		editedTable?.co697,

		editedTable?.co791,
		editedTable?.co792,
		editedTable?.co793,
		editedTable?.co794,
		editedTable?.co795,
		editedTable?.co796,
		editedTable?.co797,

		// ************************ PO: 10  ***************************************

		editedTable?.co1101,
		editedTable?.co1102,
		editedTable?.co1103,
		editedTable?.co1104,
		editedTable?.co1105,
		editedTable?.co1106,
		editedTable?.co1107,

		editedTable?.co2101,
		editedTable?.co2102,
		editedTable?.co2103,
		editedTable?.co2104,
		editedTable?.co2105,
		editedTable?.co2106,
		editedTable?.co2107,

		editedTable?.co3101,
		editedTable?.co3102,
		editedTable?.co3103,
		editedTable?.co3104,
		editedTable?.co3105,
		editedTable?.co3106,
		editedTable?.co3107,

		editedTable?.co4101,
		editedTable?.co4102,
		editedTable?.co4103,
		editedTable?.co4104,
		editedTable?.co4105,
		editedTable?.co4106,
		editedTable?.co4107,

		editedTable?.co5101,
		editedTable?.co5102,
		editedTable?.co5103,
		editedTable?.co5104,
		editedTable?.co5105,
		editedTable?.co5106,
		editedTable?.co5107,

		editedTable?.co6101,
		editedTable?.co6102,
		editedTable?.co6103,
		editedTable?.co6104,
		editedTable?.co6105,
		editedTable?.co6106,
		editedTable?.co6107,

		editedTable?.co7101,
		editedTable?.co7102,
		editedTable?.co7103,
		editedTable?.co7104,
		editedTable?.co7105,
		editedTable?.co7106,
		editedTable?.co7107,

		// ************************ PO: 11  ***************************************

		editedTable?.co1111,
		editedTable?.co1112,
		editedTable?.co1113,
		editedTable?.co1114,
		editedTable?.co1115,

		editedTable?.co2111,
		editedTable?.co2112,
		editedTable?.co2113,
		editedTable?.co2114,
		editedTable?.co2115,

		editedTable?.co3111,
		editedTable?.co3112,
		editedTable?.co3113,
		editedTable?.co3114,
		editedTable?.co3115,

		editedTable?.co4111,
		editedTable?.co4112,
		editedTable?.co4113,
		editedTable?.co4114,
		editedTable?.co4115,

		editedTable?.co5111,
		editedTable?.co5112,
		editedTable?.co5113,
		editedTable?.co5114,
		editedTable?.co5115,

		editedTable?.co6111,
		editedTable?.co6112,
		editedTable?.co6113,
		editedTable?.co6114,
		editedTable?.co6115,

		editedTable?.co7111,
		editedTable?.co7112,
		editedTable?.co7113,
		editedTable?.co7114,
		editedTable?.co7115,

		// ************************ PO: 12  ***************************************

		editedTable?.co1121,
		editedTable?.co1122,
		editedTable?.co1123,
		editedTable?.co1124,
		editedTable?.co1125,
		editedTable?.co1126,

		editedTable?.co2121,
		editedTable?.co2122,
		editedTable?.co2123,
		editedTable?.co2124,
		editedTable?.co2125,
		editedTable?.co2126,

		editedTable?.co3121,
		editedTable?.co3122,
		editedTable?.co3123,
		editedTable?.co3124,
		editedTable?.co3125,
		editedTable?.co3126,

		editedTable?.co4121,
		editedTable?.co4122,
		editedTable?.co4123,
		editedTable?.co4124,
		editedTable?.co4125,
		editedTable?.co4126,

		editedTable?.co5121,
		editedTable?.co5122,
		editedTable?.co5123,
		editedTable?.co5124,
		editedTable?.co5125,
		editedTable?.co5126,

		editedTable?.co6121,
		editedTable?.co6122,
		editedTable?.co6123,
		editedTable?.co6124,
		editedTable?.co6125,
		editedTable?.co6126,

		editedTable?.co7121,
		editedTable?.co7122,
		editedTable?.co7123,
		editedTable?.co7124,
		editedTable?.co7125,
		editedTable?.co7126,

		// ******************************* PSO:1 *****************************

		editedTable?.psoco111,
		editedTable?.psoco112,
		editedTable?.psoco113,
		editedTable?.psoco114,
		editedTable?.psoco115,

		editedTable?.psoco211,
		editedTable?.psoco212,
		editedTable?.psoco213,
		editedTable?.psoco214,
		editedTable?.psoco215,

		editedTable?.psoco311,
		editedTable?.psoco312,
		editedTable?.psoco313,
		editedTable?.psoco314,
		editedTable?.psoco315,

		editedTable?.psoco411,
		editedTable?.psoco412,
		editedTable?.psoco413,
		editedTable?.psoco414,
		editedTable?.psoco415,

		editedTable?.psoco511,
		editedTable?.psoco512,
		editedTable?.psoco513,
		editedTable?.psoco514,
		editedTable?.psoco515,

		editedTable?.psoco611,
		editedTable?.psoco612,
		editedTable?.psoco613,
		editedTable?.psoco614,
		editedTable?.psoco615,

		editedTable?.psoco711,
		editedTable?.psoco712,
		editedTable?.psoco713,
		editedTable?.psoco714,
		editedTable?.psoco715,

		// ******************************* editedTable?.PSO:2 *****************************

		editedTable?.psoco121,
		editedTable?.psoco122,
		editedTable?.psoco123,
		editedTable?.psoco124,

		editedTable?.psoco221,
		editedTable?.psoco222,
		editedTable?.psoco223,
		editedTable?.psoco224,

		editedTable?.psoco321,
		editedTable?.psoco322,
		editedTable?.psoco323,
		editedTable?.psoco324,

		editedTable?.psoco421,
		editedTable?.psoco422,
		editedTable?.psoco423,
		editedTable?.psoco424,

		editedTable?.psoco521,
		editedTable?.psoco522,
		editedTable?.psoco523,
		editedTable?.psoco524,

		editedTable?.psoco621,
		editedTable?.psoco622,
		editedTable?.psoco623,
		editedTable?.psoco624,

		editedTable?.psoco721,
		editedTable?.psoco722,
		editedTable?.psoco723,
		editedTable?.psoco724,

		// ******************************* editedTable?.PSO:3 *****************************

		editedTable?.psoco131,
		editedTable?.psoco132,
		editedTable?.psoco133,
		editedTable?.psoco134,

		editedTable?.psoco231,
		editedTable?.psoco232,
		editedTable?.psoco233,
		editedTable?.psoco234,

		editedTable?.psoco331,
		editedTable?.psoco332,
		editedTable?.psoco333,
		editedTable?.psoco334,

		editedTable?.psoco431,
		editedTable?.psoco432,
		editedTable?.psoco433,
		editedTable?.psoco434,

		editedTable?.psoco531,
		editedTable?.psoco532,
		editedTable?.psoco533,
		editedTable?.psoco534,

		editedTable?.psoco631,
		editedTable?.psoco632,
		editedTable?.psoco633,
		editedTable?.psoco634,

		editedTable?.psoco731,
		editedTable?.psoco732,
		editedTable?.psoco733,
		editedTable?.psoco734,
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

	// **************************    PO:2     *************************************

	const handleCo121Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co121: e.target.value,
		}));
	};
	const handleCo221Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co221: e.target.value,
		}));
	};
	const handleCo321Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co321: e.target.value,
		}));
	};
	const handleCo421Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co421: e.target.value,
		}));
	};
	const handleCo521Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co521: e.target.value,
		}));
	};
	const handleCo621Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co621: e.target.value,
		}));
	};
	const handleCo721Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co721: e.target.value,
		}));
	};

	const handleCo122Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co122: e.target.value,
		}));
	};
	const handleCo222Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co222: e.target.value,
		}));
	};
	const handleCo322Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co322: e.target.value,
		}));
	};
	const handleCo422Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co422: e.target.value,
		}));
	};
	const handleCo522Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co522: e.target.value,
		}));
	};
	const handleCo622Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co622: e.target.value,
		}));
	};
	const handleCo722Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co722: e.target.value,
		}));
	};

	const handleCo123Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co123: e.target.value,
		}));
	};
	const handleCo223Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co223: e.target.value,
		}));
	};
	const handleCo323Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co323: e.target.value,
		}));
	};
	const handleCo423Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co423: e.target.value,
		}));
	};
	const handleCo523Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co523: e.target.value,
		}));
	};
	const handleCo623Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co623: e.target.value,
		}));
	};
	const handleCo723Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co723: e.target.value,
		}));
	};

	const handleCo124Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co124: e.target.value,
		}));
	};
	const handleCo224Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co224: e.target.value,
		}));
	};
	const handleCo324Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co324: e.target.value,
		}));
	};
	const handleCo424Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co424: e.target.value,
		}));
	};
	const handleCo524Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co524: e.target.value,
		}));
	};
	const handleCo624Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co624: e.target.value,
		}));
	};
	const handleCo724Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co724: e.target.value,
		}));
	};

	const handleCo125Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co125: e.target.value,
		}));
	};
	const handleCo225Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co225: e.target.value,
		}));
	};
	const handleCo325Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co325: e.target.value,
		}));
	};
	const handleCo425Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co425: e.target.value,
		}));
	};
	const handleCo525Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co525: e.target.value,
		}));
	};
	const handleCo625Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co625: e.target.value,
		}));
	};
	const handleCo725Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co725: e.target.value,
		}));
	};

	const handleCo126Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co126: e.target.value,
		}));
	};
	const handleCo226Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co226: e.target.value,
		}));
	};
	const handleCo326Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co326: e.target.value,
		}));
	};
	const handleCo426Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co426: e.target.value,
		}));
	};
	const handleCo526Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co526: e.target.value,
		}));
	};
	const handleCo626Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co626: e.target.value,
		}));
	};
	const handleCo726Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co726: e.target.value,
		}));
	};

	const handleCo127Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co127: e.target.value,
		}));
	};
	const handleCo227Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co227: e.target.value,
		}));
	};
	const handleCo327Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co327: e.target.value,
		}));
	};
	const handleCo427Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co427: e.target.value,
		}));
	};
	const handleCo527Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co527: e.target.value,
		}));
	};
	const handleCo627Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co627: e.target.value,
		}));
	};
	const handleCo727Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co727: e.target.value,
		}));
	};

	const handleCo128Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co128: e.target.value,
		}));
	};
	const handleCo228Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co228: e.target.value,
		}));
	};
	const handleCo328Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co328: e.target.value,
		}));
	};
	const handleCo428Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co428: e.target.value,
		}));
	};
	const handleCo528Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co528: e.target.value,
		}));
	};
	const handleCo628Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co628: e.target.value,
		}));
	};
	const handleCo728Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co728: e.target.value,
		}));
	};

	const handleCo129Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co129: e.target.value,
		}));
	};
	const handleCo229Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co229: e.target.value,
		}));
	};
	const handleCo329Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co329: e.target.value,
		}));
	};
	const handleCo429Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co429: e.target.value,
		}));
	};
	const handleCo529Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co529: e.target.value,
		}));
	};
	const handleCo629Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co629: e.target.value,
		}));
	};
	const handleCo729Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co729: e.target.value,
		}));
	};

	const handleCo1210Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1210: e.target.value,
		}));
	};
	const handleCo2210Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2210: e.target.value,
		}));
	};
	const handleCo3210Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3210: e.target.value,
		}));
	};
	const handleCo4210Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4210: e.target.value,
		}));
	};
	const handleCo5210Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5210: e.target.value,
		}));
	};
	const handleCo6210Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6210: e.target.value,
		}));
	};
	const handleCo7210Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7210: e.target.value,
		}));
	};

	const handleCo1211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1211: e.target.value,
		}));
	};
	const handleCo2211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2211: e.target.value,
		}));
	};
	const handleCo3211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3211: e.target.value,
		}));
	};
	const handleCo4211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4211: e.target.value,
		}));
	};
	const handleCo5211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5211: e.target.value,
		}));
	};
	const handleCo6211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6211: e.target.value,
		}));
	};
	const handleCo7211Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7211: e.target.value,
		}));
	};

	const handleCo1212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1212: e.target.value,
		}));
	};
	const handleCo2212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2212: e.target.value,
		}));
	};
	const handleCo3212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3212: e.target.value,
		}));
	};
	const handleCo4212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4212: e.target.value,
		}));
	};
	const handleCo5212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5212: e.target.value,
		}));
	};
	const handleCo6212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6212: e.target.value,
		}));
	};
	const handleCo7212Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7212: e.target.value,
		}));
	};

	const handleCo1213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1213: e.target.value,
		}));
	};
	const handleCo2213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2213: e.target.value,
		}));
	};
	const handleCo3213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3213: e.target.value,
		}));
	};
	const handleCo4213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4213: e.target.value,
		}));
	};
	const handleCo5213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5213: e.target.value,
		}));
	};
	const handleCo6213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6213: e.target.value,
		}));
	};
	const handleCo7213Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7213: e.target.value,
		}));
	};

	// **************************    PO:3     *************************************

	const handleCo131Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co131: e.target.value,
		}));
	};
	const handleCo231Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co231: e.target.value,
		}));
	};
	const handleCo331Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co331: e.target.value,
		}));
	};
	const handleCo431Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co431: e.target.value,
		}));
	};
	const handleCo531Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co531: e.target.value,
		}));
	};
	const handleCo631Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co631: e.target.value,
		}));
	};
	const handleCo731Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co731: e.target.value,
		}));
	};

	const handleCo132Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co132: e.target.value,
		}));
	};
	const handleCo232Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co232: e.target.value,
		}));
	};
	const handleCo332Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co332: e.target.value,
		}));
	};
	const handleCo432Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co432: e.target.value,
		}));
	};
	const handleCo532Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co532: e.target.value,
		}));
	};
	const handleCo632Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co632: e.target.value,
		}));
	};
	const handleCo732Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co732: e.target.value,
		}));
	};

	const handleCo133Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co133: e.target.value,
		}));
	};
	const handleCo233Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co233: e.target.value,
		}));
	};
	const handleCo333Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co333: e.target.value,
		}));
	};
	const handleCo433Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co433: e.target.value,
		}));
	};
	const handleCo533Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co533: e.target.value,
		}));
	};
	const handleCo633Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co633: e.target.value,
		}));
	};
	const handleCo733Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co733: e.target.value,
		}));
	};

	const handleCo134Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co134: e.target.value,
		}));
	};
	const handleCo234Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co234: e.target.value,
		}));
	};
	const handleCo334Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co334: e.target.value,
		}));
	};
	const handleCo434Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co434: e.target.value,
		}));
	};
	const handleCo534Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co534: e.target.value,
		}));
	};
	const handleCo634Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co634: e.target.value,
		}));
	};
	const handleCo734Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co734: e.target.value,
		}));
	};

	const handleCo135Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co135: e.target.value,
		}));
	};
	const handleCo235Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co235: e.target.value,
		}));
	};
	const handleCo335Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co335: e.target.value,
		}));
	};
	const handleCo435Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co435: e.target.value,
		}));
	};
	const handleCo535Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co535: e.target.value,
		}));
	};
	const handleCo635Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co635: e.target.value,
		}));
	};
	const handleCo735Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co735: e.target.value,
		}));
	};

	const handleCo136Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co136: e.target.value,
		}));
	};
	const handleCo236Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co236: e.target.value,
		}));
	};
	const handleCo336Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co336: e.target.value,
		}));
	};
	const handleCo436Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co436: e.target.value,
		}));
	};
	const handleCo536Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co536: e.target.value,
		}));
	};
	const handleCo636Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co636: e.target.value,
		}));
	};
	const handleCo736Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co736: e.target.value,
		}));
	};

	const handleCo137Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co137: e.target.value,
		}));
	};
	const handleCo237Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co237: e.target.value,
		}));
	};
	const handleCo337Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co337: e.target.value,
		}));
	};
	const handleCo437Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co437: e.target.value,
		}));
	};
	const handleCo537Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co537: e.target.value,
		}));
	};
	const handleCo637Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co637: e.target.value,
		}));
	};
	const handleCo737Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co737: e.target.value,
		}));
	};

	const handleCo138Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co138: e.target.value,
		}));
	};
	const handleCo238Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co238: e.target.value,
		}));
	};
	const handleCo338Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co338: e.target.value,
		}));
	};
	const handleCo438Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co438: e.target.value,
		}));
	};
	const handleCo538Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co538: e.target.value,
		}));
	};
	const handleCo638Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co638: e.target.value,
		}));
	};
	const handleCo738Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co738: e.target.value,
		}));
	};

	const handleCo139Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co139: e.target.value,
		}));
	};
	const handleCo239Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co239: e.target.value,
		}));
	};
	const handleCo339Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co339: e.target.value,
		}));
	};
	const handleCo439Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co439: e.target.value,
		}));
	};
	const handleCo539Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co539: e.target.value,
		}));
	};
	const handleCo639Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co639: e.target.value,
		}));
	};
	const handleCo739Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co739: e.target.value,
		}));
	};

	const handleCo1310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1310: e.target.value,
		}));
	};
	const handleCo2310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2310: e.target.value,
		}));
	};
	const handleCo3310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3310: e.target.value,
		}));
	};
	const handleCo4310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4310: e.target.value,
		}));
	};
	const handleCo5310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5310: e.target.value,
		}));
	};
	const handleCo6310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6310: e.target.value,
		}));
	};
	const handleCo7310Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7310: e.target.value,
		}));
	};

	const handleCo1311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1311: e.target.value,
		}));
	};
	const handleCo2311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2311: e.target.value,
		}));
	};
	const handleCo3311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3311: e.target.value,
		}));
	};
	const handleCo4311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4311: e.target.value,
		}));
	};
	const handleCo5311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5311: e.target.value,
		}));
	};
	const handleCo6311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6311: e.target.value,
		}));
	};
	const handleCo7311Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7311: e.target.value,
		}));
	};

	const handleCo1312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1312: e.target.value,
		}));
	};
	const handleCo2312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2312: e.target.value,
		}));
	};
	const handleCo3312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3312: e.target.value,
		}));
	};
	const handleCo4312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4312: e.target.value,
		}));
	};
	const handleCo5312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5312: e.target.value,
		}));
	};
	const handleCo6312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6312: e.target.value,
		}));
	};
	const handleCo7312Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7312: e.target.value,
		}));
	};

	const handleCo1313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1313: e.target.value,
		}));
	};
	const handleCo2313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2313: e.target.value,
		}));
	};
	const handleCo3313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3313: e.target.value,
		}));
	};
	const handleCo4313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4313: e.target.value,
		}));
	};
	const handleCo5313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5313: e.target.value,
		}));
	};
	const handleCo6313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6313: e.target.value,
		}));
	};
	const handleCo7313Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7313: e.target.value,
		}));
	};
	// **************************    PO:3     *************************************

	const handleCo141Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co141: e.target.value,
		}));
	};
	const handleCo241Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co241: e.target.value,
		}));
	};
	const handleCo341Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co341: e.target.value,
		}));
	};
	const handleCo441Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co441: e.target.value,
		}));
	};
	const handleCo541Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co541: e.target.value,
		}));
	};
	const handleCo641Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co641: e.target.value,
		}));
	};
	const handleCo741Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co741: e.target.value,
		}));
	};

	const handleCo142Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co142: e.target.value,
		}));
	};
	const handleCo242Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co242: e.target.value,
		}));
	};
	const handleCo342Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co342: e.target.value,
		}));
	};
	const handleCo442Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co442: e.target.value,
		}));
	};
	const handleCo542Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co542: e.target.value,
		}));
	};
	const handleCo642Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co642: e.target.value,
		}));
	};
	const handleCo742Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co742: e.target.value,
		}));
	};

	const handleCo143Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co143: e.target.value,
		}));
	};
	const handleCo243Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co243: e.target.value,
		}));
	};
	const handleCo343Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co343: e.target.value,
		}));
	};
	const handleCo443Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co443: e.target.value,
		}));
	};
	const handleCo543Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co543: e.target.value,
		}));
	};
	const handleCo643Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co643: e.target.value,
		}));
	};
	const handleCo743Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co743: e.target.value,
		}));
	};

	const handleCo144Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co144: e.target.value,
		}));
	};
	const handleCo244Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co244: e.target.value,
		}));
	};
	const handleCo344Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co344: e.target.value,
		}));
	};
	const handleCo444Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co444: e.target.value,
		}));
	};
	const handleCo544Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co544: e.target.value,
		}));
	};
	const handleCo644Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co644: e.target.value,
		}));
	};
	const handleCo744Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co744: e.target.value,
		}));
	};

	const handleCo145Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co145: e.target.value,
		}));
	};
	const handleCo245Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co245: e.target.value,
		}));
	};
	const handleCo345Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co345: e.target.value,
		}));
	};
	const handleCo445Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co445: e.target.value,
		}));
	};
	const handleCo545Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co545: e.target.value,
		}));
	};
	const handleCo645Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co645: e.target.value,
		}));
	};
	const handleCo745Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co745: e.target.value,
		}));
	};

	const handleCo146Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co146: e.target.value,
		}));
	};
	const handleCo246Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co246: e.target.value,
		}));
	};
	const handleCo346Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co346: e.target.value,
		}));
	};
	const handleCo446Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co446: e.target.value,
		}));
	};
	const handleCo546Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co546: e.target.value,
		}));
	};
	const handleCo646Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co646: e.target.value,
		}));
	};
	const handleCo746Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co746: e.target.value,
		}));
	};

	const handleCo147Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co147: e.target.value,
		}));
	};
	const handleCo247Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co247: e.target.value,
		}));
	};
	const handleCo347Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co347: e.target.value,
		}));
	};
	const handleCo447Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co447: e.target.value,
		}));
	};
	const handleCo547Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co547: e.target.value,
		}));
	};
	const handleCo647Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co647: e.target.value,
		}));
	};
	const handleCo747Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co747: e.target.value,
		}));
	};

	const handleCo148Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co148: e.target.value,
		}));
	};
	const handleCo248Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co248: e.target.value,
		}));
	};
	const handleCo348Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co348: e.target.value,
		}));
	};
	const handleCo448Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co448: e.target.value,
		}));
	};
	const handleCo548Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co548: e.target.value,
		}));
	};
	const handleCo648Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co648: e.target.value,
		}));
	};
	const handleCo748Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co748: e.target.value,
		}));
	};

	const handleCo149Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co149: e.target.value,
		}));
	};
	const handleCo249Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co249: e.target.value,
		}));
	};
	const handleCo349Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co349: e.target.value,
		}));
	};
	const handleCo449Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co449: e.target.value,
		}));
	};
	const handleCo549Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co549: e.target.value,
		}));
	};
	const handleCo649Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co649: e.target.value,
		}));
	};
	const handleCo749Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co749: e.target.value,
		}));
	};

	const handleCo1410Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co1410: e.target.value,
		}));
	};
	const handleCo2410Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co2410: e.target.value,
		}));
	};
	const handleCo3410Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co3410: e.target.value,
		}));
	};
	const handleCo4410Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co4410: e.target.value,
		}));
	};
	const handleCo5410Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co5410: e.target.value,
		}));
	};
	const handleCo6410Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co6410: e.target.value,
		}));
	};
	const handleCo7410Change = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTable((prevTable: any) => ({
			...prevTable,
			co7410: e.target.value,
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
								value={editedTable?.co121}
								onChange={handleCo121Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co221}
								onChange={handleCo221Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co321}
								onChange={handleCo321Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co421}
								onChange={handleCo421Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co521}
								onChange={handleCo521Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co621}
								onChange={handleCo621Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co721}
								onChange={handleCo721Change}
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
								value={editedTable?.co122}
								onChange={handleCo122Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co222}
								onChange={handleCo222Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co322}
								onChange={handleCo322Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co422}
								onChange={handleCo422Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co522}
								onChange={handleCo522Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co622}
								onChange={handleCo622Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co722}
								onChange={handleCo722Change}
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
								value={editedTable?.co123}
								onChange={handleCo123Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co223}
								onChange={handleCo223Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co323}
								onChange={handleCo323Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co423}
								onChange={handleCo423Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co523}
								onChange={handleCo523Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co623}
								onChange={handleCo623Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co723}
								onChange={handleCo723Change}
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
								value={editedTable?.co124}
								onChange={handleCo124Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co224}
								onChange={handleCo224Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co324}
								onChange={handleCo324Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co424}
								onChange={handleCo424Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co524}
								onChange={handleCo524Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co624}
								onChange={handleCo624Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co724}
								onChange={handleCo724Change}
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
								value={editedTable?.co125}
								onChange={handleCo125Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co225}
								onChange={handleCo225Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co325}
								onChange={handleCo325Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co425}
								onChange={handleCo425Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co525}
								onChange={handleCo525Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co625}
								onChange={handleCo625Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co725}
								onChange={handleCo725Change}
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
								value={editedTable?.co126}
								onChange={handleCo126Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co226}
								onChange={handleCo226Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co326}
								onChange={handleCo326Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co426}
								onChange={handleCo426Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co526}
								onChange={handleCo526Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co626}
								onChange={handleCo626Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co726}
								onChange={handleCo726Change}
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
								value={editedTable?.co127}
								onChange={handleCo127Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co227}
								onChange={handleCo227Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co327}
								onChange={handleCo327Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co427}
								onChange={handleCo427Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co527}
								onChange={handleCo527Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co627}
								onChange={handleCo627Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co727}
								onChange={handleCo727Change}
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
								value={editedTable?.co128}
								onChange={handleCo128Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co228}
								onChange={handleCo228Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co328}
								onChange={handleCo328Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co428}
								onChange={handleCo428Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co528}
								onChange={handleCo528Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co628}
								onChange={handleCo628Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co728}
								onChange={handleCo728Change}
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
								value={editedTable?.co129}
								onChange={handleCo129Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co229}
								onChange={handleCo229Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co329}
								onChange={handleCo329Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co429}
								onChange={handleCo429Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co529}
								onChange={handleCo529Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co629}
								onChange={handleCo629Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co729}
								onChange={handleCo729Change}
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
								value={editedTable?.co1210}
								onChange={handleCo1210Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2210}
								onChange={handleCo2210Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3210}
								onChange={handleCo3210Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4210}
								onChange={handleCo4210Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5210}
								onChange={handleCo5210Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6210}
								onChange={handleCo6210Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7210}
								onChange={handleCo7210Change}
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
								value={editedTable?.co1211}
								onChange={handleCo1211Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2211}
								onChange={handleCo2211Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3211}
								onChange={handleCo3211Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4211}
								onChange={handleCo4211Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5211}
								onChange={handleCo5211Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6211}
								onChange={handleCo6211Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7211}
								onChange={handleCo7211Change}
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
								value={editedTable?.co1212}
								onChange={handleCo1212Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2212}
								onChange={handleCo2212Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3212}
								onChange={handleCo3212Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4212}
								onChange={handleCo4212Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5212}
								onChange={handleCo5212Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6212}
								onChange={handleCo6212Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7212}
								onChange={handleCo7212Change}
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
								value={editedTable?.co1213}
								onChange={handleCo1213Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2213}
								onChange={handleCo2213Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3213}
								onChange={handleCo3213Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4213}
								onChange={handleCo4213Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5213}
								onChange={handleCo5213Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6213}
								onChange={handleCo6213Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7213}
								onChange={handleCo7213Change}
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

					{/* **************************************       PO:3         ****************************************************/}

					<tr className='m-4'>
						<td rowSpan={13}>
							<Textarea readOnly value={editedTable?.po31} className='my-6' />
						</td>
						<td rowSpan={6}>
							<Textarea readOnly value={editedTable?.competency31} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators31} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight31} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co131}
								onChange={handleCo131Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co231}
								onChange={handleCo231Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co331}
								onChange={handleCo331Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co431}
								onChange={handleCo431Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co531}
								onChange={handleCo531Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co631}
								onChange={handleCo631Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co731}
								onChange={handleCo731Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators32} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight32} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co132}
								onChange={handleCo132Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co232}
								onChange={handleCo232Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co332}
								onChange={handleCo332Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co432}
								onChange={handleCo432Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co532}
								onChange={handleCo532Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co632}
								onChange={handleCo632Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co732}
								onChange={handleCo732Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators33} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight33} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co133}
								onChange={handleCo133Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co233}
								onChange={handleCo233Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co333}
								onChange={handleCo333Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co433}
								onChange={handleCo433Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co533}
								onChange={handleCo533Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co633}
								onChange={handleCo633Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co733}
								onChange={handleCo733Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators34} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight34} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co134}
								onChange={handleCo134Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co234}
								onChange={handleCo234Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co334}
								onChange={handleCo334Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co434}
								onChange={handleCo434Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co534}
								onChange={handleCo534Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co634}
								onChange={handleCo634Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co734}
								onChange={handleCo734Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators35} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight35} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co135}
								onChange={handleCo135Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co235}
								onChange={handleCo235Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co335}
								onChange={handleCo335Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co435}
								onChange={handleCo435Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co535}
								onChange={handleCo535Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co635}
								onChange={handleCo635Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co735}
								onChange={handleCo735Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators36} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight36} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co136}
								onChange={handleCo136Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co236}
								onChange={handleCo236Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co336}
								onChange={handleCo336Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co436}
								onChange={handleCo436Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co536}
								onChange={handleCo536Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co636}
								onChange={handleCo636Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co736}
								onChange={handleCo736Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={3}>
							<Textarea readOnly value={editedTable?.competency32} />
						</td>

						<td>
							<Textarea readOnly value={editedTable?.indicators37} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight37} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co137}
								onChange={handleCo137Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co237}
								onChange={handleCo237Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co337}
								onChange={handleCo337Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co437}
								onChange={handleCo437Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co537}
								onChange={handleCo537Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co637}
								onChange={handleCo637Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co737}
								onChange={handleCo737Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators38} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight38} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co138}
								onChange={handleCo138Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co238}
								onChange={handleCo238Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co338}
								onChange={handleCo338Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co438}
								onChange={handleCo438Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co538}
								onChange={handleCo538Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co638}
								onChange={handleCo638Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co738}
								onChange={handleCo738Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators39} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight39} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co139}
								onChange={handleCo139Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co239}
								onChange={handleCo239Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co339}
								onChange={handleCo339Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co439}
								onChange={handleCo439Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co539}
								onChange={handleCo539Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co639}
								onChange={handleCo639Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co739}
								onChange={handleCo739Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency33} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators310} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight310} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1310}
								onChange={handleCo1310Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2310}
								onChange={handleCo2310Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3310}
								onChange={handleCo3310Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4310}
								onChange={handleCo4310Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5310}
								onChange={handleCo5310Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6310}
								onChange={handleCo6310Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7310}
								onChange={handleCo7310Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators311} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight311} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1311}
								onChange={handleCo1311Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2311}
								onChange={handleCo2311Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3311}
								onChange={handleCo3311Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4311}
								onChange={handleCo4311Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5311}
								onChange={handleCo5311Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6311}
								onChange={handleCo6311Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7311}
								onChange={handleCo7311Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency34} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators312} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight312} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1312}
								onChange={handleCo1312Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2312}
								onChange={handleCo2312Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3312}
								onChange={handleCo3312Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4312}
								onChange={handleCo4312Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5312}
								onChange={handleCo5312Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6312}
								onChange={handleCo6312Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7312}
								onChange={handleCo7312Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators313} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight313} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1313}
								onChange={handleCo1313Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2313}
								onChange={handleCo2313Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3313}
								onChange={handleCo3313Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4313}
								onChange={handleCo4313Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5313}
								onChange={handleCo5313Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6313}
								onChange={handleCo6313Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7313}
								onChange={handleCo7313Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td colSpan={4}>
							<Textarea readOnly value='PO3 : Mapping Level' className='my-6' />
						</td>

						<td>
							<Input type='number' value={editedTable?.po3mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.po3mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po3mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po3mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po3mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po3mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po3mapco7} readOnly />{" "}
						</td>
					</tr>
					{/* **************************************       PO:4        ****************************************************/}

					<tr className='m-4'>
						<td rowSpan={10}>
							<Textarea readOnly value={editedTable?.po41} className='my-6' />
						</td>
						<td rowSpan={4}>
							<Textarea readOnly value={editedTable?.competency41} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators41} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight41} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co141}
								onChange={handleCo141Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co241}
								onChange={handleCo241Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co341}
								onChange={handleCo341Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co441}
								onChange={handleCo441Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co541}
								onChange={handleCo541Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co641}
								onChange={handleCo641Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co741}
								onChange={handleCo741Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators42} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight42} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co142}
								onChange={handleCo142Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co242}
								onChange={handleCo242Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co342}
								onChange={handleCo342Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co442}
								onChange={handleCo442Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co542}
								onChange={handleCo542Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co642}
								onChange={handleCo642Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co742}
								onChange={handleCo742Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators43} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight43} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co143}
								onChange={handleCo143Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co243}
								onChange={handleCo243Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co343}
								onChange={handleCo343Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co443}
								onChange={handleCo443Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co543}
								onChange={handleCo543Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co643}
								onChange={handleCo643Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co743}
								onChange={handleCo743Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators44} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight44} />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co144}
								onChange={handleCo144Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co244}
								onChange={handleCo244Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co344}
								onChange={handleCo344Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co444}
								onChange={handleCo444Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co544}
								onChange={handleCo544Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co644}
								onChange={handleCo644Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co744}
								onChange={handleCo744Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency42} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators45} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight45} readOnly />
						</td>
						<td>
							<Input
								type='number'
								onChange={handleCo145Change}
								value={editedTable?.co145}
							/>
						</td>
						<td>
							<Input
								type='number'
								onChange={handleCo245Change}
								value={editedTable?.co245}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co345}
								onChange={handleCo345Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co445}
								onChange={handleCo445Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co545}
								onChange={handleCo545Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co645}
								onChange={handleCo645Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co745}
								onChange={handleCo745Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators46} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight46} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co146}
								onChange={handleCo146Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co246}
								onChange={handleCo246Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co346}
								onChange={handleCo346Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co446}
								onChange={handleCo446Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co546}
								onChange={handleCo546Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co646}
								onChange={handleCo646Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co746}
								onChange={handleCo746Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={4}>
							<Textarea readOnly value={editedTable?.competency43} />
						</td>

						<td>
							<Textarea readOnly value={editedTable?.indicators47} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight47} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co147}
								onChange={handleCo147Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co247}
								onChange={handleCo247Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co347}
								onChange={handleCo347Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co447}
								onChange={handleCo447Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co547}
								onChange={handleCo547Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co647}
								onChange={handleCo647Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co747}
								onChange={handleCo747Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators48} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight48} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co148}
								onChange={handleCo148Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co248}
								onChange={handleCo248Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co348}
								onChange={handleCo348Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co448}
								onChange={handleCo448Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co548}
								onChange={handleCo548Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co648}
								onChange={handleCo648Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co748}
								onChange={handleCo748Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators49} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight49} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co149}
								onChange={handleCo149Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co249}
								onChange={handleCo249Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co349}
								onChange={handleCo349Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co449}
								onChange={handleCo449Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co549}
								onChange={handleCo549Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co649}
								onChange={handleCo649Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co749}
								onChange={handleCo749Change}
							/>
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators410} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight410} readOnly />
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co1410}
								onChange={handleCo1410Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co2410}
								onChange={handleCo2410Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co3410}
								onChange={handleCo3410Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co4410}
								onChange={handleCo4410Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co5410}
								onChange={handleCo5410Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co6410}
								onChange={handleCo6410Change}
							/>
						</td>
						<td>
							<Input
								type='number'
								value={editedTable?.co7410}
								onChange={handleCo7410Change}
							/>
						</td>
					</tr>

					<tr className='m-4'>
						<td colSpan={4}>
							<Textarea readOnly value='PO4 : Mapping Level' className='my-6' />
						</td>

						<td>
							<Input type='number' value={editedTable?.po4mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.po4mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po4mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po4mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po4mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po4mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po4mapco7} readOnly />{" "}
						</td>
					</tr>
					{/* **************************************       PO:5        ****************************************************/}

					<tr className='m-4'>
						<td rowSpan={6}>
							<Textarea readOnly value={editedTable?.po51} className='my-6' />
						</td>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency51} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators51} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight51} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co151} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co251} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co351} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co451} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co551} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co651} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co751} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators52} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight52} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co152} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co252} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co352} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co452} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co552} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co652} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co752} />
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency52} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators53} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight53} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co153} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co253} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co353} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co453} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co553} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co653} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co753} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators54} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight54} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co154} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co254} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co354} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co454} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co554} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co654} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co754} />
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency53} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators55} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight55} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.co155} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co255} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co355} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co455} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co555} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co655} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co755} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators56} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight56} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.co156} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co256} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co356} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co456} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co556} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co656} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co756} />
						</td>
					</tr>
					<tr className='m-4'>
						<td colSpan={4}>
							<Textarea readOnly value='PO5 : Mapping Level' className='my-6' />
						</td>

						<td>
							<Input type='number' value={editedTable?.po5mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.po5mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po5mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po5mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po5mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po5mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po5mapco7} readOnly />{" "}
						</td>
					</tr>
					{/* **************************************       PO:6        ****************************************************/}

					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.po61} className='my-6' />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.competency61} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators61} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight61} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co161} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co261} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co361} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co461} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co561} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co661} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co761} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.competency62} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators62} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight62} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co162} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co262} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co362} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co462} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co562} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co662} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co762} />
						</td>
					</tr>

					<tr className='m-4'>
						<td colSpan={4}>
							<Textarea readOnly value='PO6 : Mapping Level' className='my-6' />
						</td>

						<td>
							<Input type='number' value={editedTable?.po6mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.po6mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po6mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po6mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po6mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po6mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po6mapco7} readOnly />{" "}
						</td>
					</tr>

					{/* **************************************       PO: 7        ****************************************************/}

					<tr className='m-4'>
						<td rowSpan={4}>
							<Textarea readOnly value={editedTable?.po71} className='my-6' />
						</td>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency71} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators71} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight71} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co171} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co271} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co371} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co471} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co571} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co671} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co771} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators72} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight72} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co172} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co272} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co372} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co472} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co572} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co672} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co772} />
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency72} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators73} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight73} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co173} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co273} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co373} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co473} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co573} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co673} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co773} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators74} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight74} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co174} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co274} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co374} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co474} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co574} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co674} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co774} />
						</td>
					</tr>

					<tr className='m-4'>
						<td colSpan={4}>
							<Textarea readOnly value='PO7 : Mapping Level' className='my-6' />
						</td>

						<td>
							<Input type='number' value={editedTable?.po7mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.po7mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po7mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po7mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po7mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po7mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po7mapco7} readOnly />{" "}
						</td>
					</tr>
					{/* **************************************       PO: 8        ****************************************************/}

					<tr className='m-4'>
						<td rowSpan={3}>
							<Textarea readOnly value={editedTable?.po81} className='my-6' />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.competency81} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators81} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight81} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co181} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co281} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co381} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co481} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co581} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co681} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co781} />
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency82} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators82} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight82} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co182} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co282} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co382} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co482} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co582} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co682} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co782} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators83} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight83} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co183} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co283} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co383} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co483} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co583} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co683} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co783} />
						</td>
					</tr>
					<tr className='m-4'>
						<td colSpan={4}>
							<Textarea readOnly value='PO8 : Mapping Level' className='my-6' />
						</td>

						<td>
							<Input type='number' value={editedTable?.po8mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.po8mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po8mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po8mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po8mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po8mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po8mapco7} readOnly />{" "}
						</td>
					</tr>

					{/* **************************************       PO:9        ****************************************************/}

					<tr className='m-4'>
						<td rowSpan={7}>
							<Textarea readOnly value={editedTable?.po91} className='my-6' />
						</td>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency91} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators91} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight91} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co191} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co291} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co391} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co491} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co591} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co691} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co791} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators92} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight92} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co192} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co292} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co392} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co492} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co592} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co692} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co792} />
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={4}>
							<Textarea readOnly value={editedTable?.competency92} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators93} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight93} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co193} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co293} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co393} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co493} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co593} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co693} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co793} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators94} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight94} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co194} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co294} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co394} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co494} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co594} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co694} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co794} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators95} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight95} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.co195} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co295} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co395} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co495} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co595} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co695} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co795} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators96} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight96} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.co196} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co296} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co396} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co496} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co596} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co696} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co796} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.competency93} />
						</td>

						<td>
							<Textarea readOnly value={editedTable?.indicators97} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight97} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.co197} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co297} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co397} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co497} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co597} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co697} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co797} />
						</td>
					</tr>

					<tr className='m-4'>
						<td colSpan={4}>
							<Textarea readOnly value='PO9 : Mapping Level' className='my-6' />
						</td>

						<td>
							<Input type='number' value={editedTable?.po9mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.po9mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po9mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po9mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po9mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po9mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po9mapco7} readOnly />{" "}
						</td>
					</tr>

					{/* **************************************       PO:10        ****************************************************/}

					<tr className='m-4'>
						<td rowSpan={7}>
							<Textarea readOnly value={editedTable?.po101} className='my-6' />
						</td>
						<td rowSpan={3}>
							<Textarea readOnly value={editedTable?.competency101} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators101} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight101} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1101} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2101} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3101} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4101} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5101} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6101} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7101} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators102} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight102} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1102} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2102} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3102} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4102} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5102} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6102} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7102} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators103} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight103} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1103} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2103} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3103} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4103} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5103} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6103} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7103} />
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency102} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators104} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight104} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1104} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2104} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3104} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4104} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5104} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6104} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7104} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators105} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight105} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1105} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2105} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3105} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4105} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5105} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6105} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7105} />
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency103} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators106} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight106} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1106} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2106} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3106} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4106} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5106} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6106} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7106} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators107} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight107} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1107} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2107} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3107} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4107} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5107} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6107} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7107} />
						</td>
					</tr>

					<tr className='m-4'>
						<td colSpan={4}>
							<Textarea
								readOnly
								value='PO10 : Mapping Level'
								className='my-6'
							/>
						</td>

						<td>
							<Input type='number' value={editedTable?.po10mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.po10mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po10mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po10mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po10mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po10mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po10mapco7} readOnly />{" "}
						</td>
					</tr>

					{/* **************************************       PO:11        ****************************************************/}

					<tr className='m-4'>
						<td rowSpan={5}>
							<Textarea readOnly value={editedTable?.po111} className='my-6' />
						</td>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency111} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators111} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight111} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1111} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2111} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3111} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4111} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5111} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6111} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7111} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators112} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight112} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1112} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2112} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3112} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4112} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5112} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6112} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7112} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.competency112} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators113} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight113} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1113} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2113} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3113} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4113} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5113} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6113} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7113} />
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency113} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators114} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight114} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1114} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2114} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3114} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4114} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5114} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6114} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7114} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators115} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight115} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1115} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2115} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3115} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4115} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5115} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6115} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7115} />
						</td>
					</tr>

					<tr className='m-4'>
						<td colSpan={4}>
							<Textarea
								readOnly
								value='PO11 : Mapping Level'
								className='my-6'
							/>
						</td>

						<td>
							<Input type='number' value={editedTable?.po11mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.po11mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po11mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po11mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po11mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po11mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po11mapco7} readOnly />{" "}
						</td>
					</tr>

					{/* **************************************       PO:12        ****************************************************/}

					<tr className='m-4'>
						<td rowSpan={6}>
							<Textarea readOnly value={editedTable?.po121} className='my-6' />
						</td>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency121} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators121} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight121} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1121} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2121} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3121} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4121} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5121} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6121} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7121} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators122} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight122} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1122} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2122} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3122} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4122} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5122} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6122} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7122} />
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency122} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators123} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight123} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1123} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2123} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3123} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4123} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5123} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6123} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7123} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators124} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.weight124} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1124} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2124} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3124} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4124} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5124} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6124} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7124} />
						</td>
					</tr>
					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.competency123} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.indicators125} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight125} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1125} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2125} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3125} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4125} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5125} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6125} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7125} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.indicators126} />
						</td>
						<td>
							<Input type='number' value={editedTable?.weight126} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.co1126} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co2126} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co3126} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co4126} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co5126} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co6126} />
						</td>
						<td>
							<Input type='number' value={editedTable?.co7126} />
						</td>
					</tr>

					<tr className='m-4'>
						<td colSpan={4}>
							<Textarea
								readOnly
								value='PO12 : Mapping Level'
								className='my-6'
							/>
						</td>

						<td>
							<Input type='number' value={editedTable?.po12mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.po12mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po12mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po12mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po12mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po12mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.po12mapco7} readOnly />{" "}
						</td>
					</tr>

					{/* ************************************  PSO : 1       ************************************ */}

					<tr className='m-4'>
						<td rowSpan={5}>
							<Textarea readOnly value={editedTable?.pso11} className='my-6' />
						</td>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.psocompetency11} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.psoindicators11} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.psoweight11} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco111} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco211} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco311} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco411} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco511} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco611} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco711} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.psoindicators12} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.psoweight12} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco112} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco212} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco312} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco412} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco512} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco612} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco712} />
						</td>
					</tr>

					<tr className='m-4'>
						<td rowSpan={3}>
							<Textarea readOnly value={editedTable?.psocompetency12} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.psoindicators13} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.psoweight13} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco113} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco213} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco313} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco413} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco513} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco613} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco713} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.psoindicators14} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.psoweight14} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco114} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco214} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco314} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco414} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco514} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco614} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco714} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.psoindicators15} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoweight15} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco115} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco215} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco315} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco415} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco515} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco615} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco715} />
						</td>
					</tr>
					<tr className='m-4'>
						<td colSpan={4}>
							<Textarea
								readOnly
								value='PSO 1 : Mapping Level'
								className='my-6'
							/>
						</td>

						<td>
							<Input type='number' value={editedTable?.pso1mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.pso1mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.pso1mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.pso1mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.pso1mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.pso1mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.pso1mapco7} readOnly />{" "}
						</td>
					</tr>

					{/* ************************************  PSO : 2       ************************************ */}

					<tr className='m-4'>
						<td rowSpan={4}>
							<Textarea readOnly value={editedTable?.pso21} className='my-6' />
						</td>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.psocompetency21} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.psoindicators21} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.psoweight21} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco121} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco221} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco321} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco421} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco521} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco621} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco721} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.psoindicators22} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.psoweight22} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco122} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco222} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco322} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco422} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco522} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco622} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco722} />
						</td>
					</tr>

					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.psocompetency22} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.psoindicators23} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.psoweight23} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco123} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco223} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco323} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco423} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco523} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco623} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco723} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.psoindicators24} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.psoweight24} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco124} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco224} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco324} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco424} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco524} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco624} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco724} />
						</td>
					</tr>

					<tr className='m-4'>
						<td colSpan={4}>
							<Textarea
								readOnly
								value='PSO 2 : Mapping Level'
								className='my-6'
							/>
						</td>

						<td>
							<Input type='number' value={editedTable?.pso2mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.pso2mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.pso2mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.pso2mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.pso2mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.pso2mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.pso2mapco7} readOnly />{" "}
						</td>
					</tr>

					{/* ************************************  PSO : 3       ************************************ */}

					<tr className='m-4'>
						<td rowSpan={4}>
							<Textarea readOnly value={editedTable?.pso31} className='my-6' />
						</td>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.psocompetency31} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.psoindicators31} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.psoweight31} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco131} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco231} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco331} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco431} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco531} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco631} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco731} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.psoindicators32} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.psoweight32} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco132} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco232} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco332} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco432} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco532} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco632} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco732} />
						</td>
					</tr>

					<tr className='m-4'>
						<td rowSpan={2}>
							<Textarea readOnly value={editedTable?.psocompetency32} />
						</td>
						<td>
							<Textarea readOnly value={editedTable?.psoindicators33} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.psoweight33} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco133} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco233} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco333} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco433} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco533} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco633} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco733} />
						</td>
					</tr>
					<tr className='m-4'>
						<td>
							<Textarea readOnly value={editedTable?.psoindicators34} />
						</td>
						<td>
							<Input type='number' readOnly value={editedTable?.psoweight34} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco134} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco234} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco334} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco434} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco534} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco634} />
						</td>
						<td>
							<Input type='number' value={editedTable?.psoco734} />
						</td>
					</tr>

					<tr className='m-4'>
						<td colSpan={4}>
							<Textarea
								readOnly
								value='PSO 3 : Mapping Level'
								className='my-6'
							/>
						</td>

						<td>
							<Input type='number' value={editedTable?.pso3mapco1} readOnly />
						</td>
						<td>
							<Input type='number' value={editedTable?.pso3mapco2} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.pso3mapco3} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.pso3mapco4} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.pso3mapco5} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.pso3mapco6} readOnly />{" "}
						</td>
						<td>
							<Input type='number' value={editedTable?.pso3mapco7} readOnly />{" "}
						</td>
					</tr>
				</tbody>
			</table>

			<Button onClick={handleSaveChanges}>Save Changes</Button>
		</div>
	);
};

export default TableDetail;
