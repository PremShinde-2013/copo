"use client";
import { Button, Input, Link, Spinner, Textarea } from "@nextui-org/react";
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
				</tbody>
			</table>
			<Button onClick={handleSaveChanges}>Save Changes</Button>

			<div className='mt-8'>
				<Link href={`/po-table/${editedTable?._id}`}>
					<Button variant='flat' color='primary'>
						Edit
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default TableDetail;
