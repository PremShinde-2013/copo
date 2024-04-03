"use client";
import React, { useState } from "react";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Input,
	Button,
	Textarea,
} from "@nextui-org/react";
import axios from "axios";

import { useRouter } from "next/navigation";

interface TableRowData {
	po11: string;
	po12: string;
	po13: string;
	po14: string;
	po15: string;

	competency11: string;
	competency12: string;
	competency13: string;
	competency14: string;
	competency15: string;

	indicators11: string;
	indicators12: string;
	indicators13: string;
	indicators14: string;
	indicators15: string;

	weight11: number;
	weight12: number;
	weight13: number;
	weight14: number;
	weight15: number;

	co111: number;
	co112: number;
	co113: number;
	co114: number;
	co115: number;

	co211: number;
	co212: number;
	co213: number;
	co214: number;
	co215: number;

	co311: number;
	co312: number;
	co313: number;
	co314: number;
	co315: number;

	co411: number;
	co412: number;
	co413: number;
	co414: number;
	co415: number;

	co511: number;
	co512: number;
	co513: number;
	co514: number;
	co515: number;

	co611: number;
	co612: number;
	co613: number;
	co614: number;
	co615: number;

	co711: number;
	co712: number;
	co713: number;
	co714: number;
	co715: number;
}

export default function App() {
	const router = useRouter();
	const [po11, setPo11] = useState(
		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);
	const [po12, setPo12] = useState(
		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);
	const [po13, setPo13] = useState(
		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);
	const [po14, setPo14] = useState(
		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);
	const [po15, setPo15] = useState(
		"PO 1: Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialisation for the solution of complex engineering problems."
	);

	const [competency11, setCompetency11] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency12, setCompetency12] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency13, setCompetency13] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency14, setCompetency14] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);
	const [competency15, setCompetency15] = useState(
		"1.1  Demonstrate competence in mathematical modelling"
	);

	const [indicators11, setIndicators11] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [indicators12, setIndicators12] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [indicators13, setIndicators13] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [indicators14, setIndicators14] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);
	const [indicators15, setIndicators15] = useState(
		"1.1.1      Apply mathematical techniques such as calculus, linear algebra, and statistics to solve problems"
	);

	const [weight11, setWeight11] = useState("0.2");
	const [weight12, setWeight12] = useState("0.2");
	const [weight13, setWeight13] = useState("0.2");
	const [weight14, setWeight14] = useState("0.2");
	const [weight15, setWeight15] = useState("0.2");

	const [co111, setCo111] = useState("");
	const [co112, setCo112] = useState("");
	const [co113, setCo113] = useState("");
	const [co114, setCo114] = useState("");
	const [co115, setCo115] = useState("");

	const [co211, setCo211] = useState("");
	const [co212, setCo212] = useState("");
	const [co213, setCo213] = useState("");
	const [co214, setCo214] = useState("");
	const [co215, setCo215] = useState("");

	const [co311, setCo311] = useState("");
	const [co312, setCo312] = useState("");
	const [co313, setCo313] = useState("");
	const [co314, setCo314] = useState("");
	const [co315, setCo315] = useState("");

	const [co411, setCo411] = useState("");
	const [co412, setCo412] = useState("");
	const [co413, setCo413] = useState("");
	const [co414, setCo414] = useState("");
	const [co415, setCo415] = useState("");

	const [co511, setCo511] = useState("");
	const [co512, setCo512] = useState("");
	const [co513, setCo513] = useState("");
	const [co514, setCo514] = useState("");
	const [co515, setCo515] = useState("");

	const [co611, setCo611] = useState("");
	const [co612, setCo612] = useState("");
	const [co613, setCo613] = useState("");
	const [co614, setCo614] = useState("");
	const [co615, setCo615] = useState("");

	const [co711, setCo711] = useState("");
	const [co712, setCo712] = useState("");
	const [co713, setCo713] = useState("");
	const [co714, setCo714] = useState("");
	const [co715, setCo715] = useState("");

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		// if (
		// 	!po ||
		// 	!competency ||
		// 	!indicators ||
		// 	!weight ||
		// 	!co1 ||
		// 	!co2 ||
		// 	!co3 ||
		// 	!co4 ||
		// 	!co5 ||
		// 	!co6 ||
		// 	!co7
		// ) {
		// 	alert("fill all fields");
		// 	return;
		// }

		try {
			const res = await fetch("http://localhost:3000/api/table", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					po11,
					po12,
					po13,
					po14,
					po15,

					competency11,
					competency12,
					competency13,
					competency14,
					competency15,

					indicators11,
					indicators12,
					indicators13,
					indicators14,
					indicators15,

					weight11,
					weight12,
					weight13,
					weight14,
					weight15,

					co111,
					co112,
					co113,
					co114,
					co115,

					co211,
					co212,
					co213,
					co214,
					co215,

					co311,
					co312,
					co313,
					co314,
					co315,

					co411,
					co412,
					co413,
					co414,
					co415,

					co511,
					co512,
					co513,
					co514,
					co515,

					co611,
					co612,
					co613,
					co614,
					co615,

					co711,
					co712,
					co713,
					co714,
					co715,
				}),
			});

			if (res.ok) {
				router.push("/");
			} else {
				throw new Error("Failed to create table");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<table
					className='  table-fixed'
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
								<Textarea
									value={po11}
									onChange={(e) => setPo11(e.target.value)}
									className='my-6'
								/>
							</td>
							<td>
								<Textarea
									value={competency11}
									onChange={(e) => setCompetency11(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									value={indicators11}
									onChange={(e) => setIndicators11(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight11}
									onChange={(e) => setWeight11(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co111}
									onChange={(e) => setCo111(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co211}
									onChange={(e) => setCo211(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co311}
									onChange={(e) => setCo311(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co411}
									onChange={(e) => setCo411(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co511}
									onChange={(e) => setCo511(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co611}
									onChange={(e) => setCo611(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co711}
									onChange={(e) => setCo711(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									value={po12}
									onChange={(e) => setPo12(e.target.value)}
									className='my-6'
								/>
							</td>
							<td>
								<Textarea
									value={competency12}
									onChange={(e) => setCompetency12(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									value={indicators12}
									onChange={(e) => setIndicators12(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight12}
									onChange={(e) => setWeight12(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co112}
									onChange={(e) => setCo112(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co212}
									onChange={(e) => setCo212(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co312}
									onChange={(e) => setCo312(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co412}
									onChange={(e) => setCo412(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co512}
									onChange={(e) => setCo512(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co612}
									onChange={(e) => setCo612(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co712}
									onChange={(e) => setCo712(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									value={po13}
									onChange={(e) => setPo13(e.target.value)}
									className='my-6'
								/>
							</td>
							<td>
								<Textarea
									value={competency13}
									onChange={(e) => setCompetency13(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									value={indicators13}
									onChange={(e) => setIndicators13(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight13}
									onChange={(e) => setWeight13(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co113}
									onChange={(e) => setCo113(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co213}
									onChange={(e) => setCo213(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co313}
									onChange={(e) => setCo313(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co413}
									onChange={(e) => setCo413(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co513}
									onChange={(e) => setCo513(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co613}
									onChange={(e) => setCo613(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co713}
									onChange={(e) => setCo713(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									value={po14}
									onChange={(e) => setPo14(e.target.value)}
									className='my-6'
								/>
							</td>
							<td>
								<Textarea
									value={competency14}
									onChange={(e) => setCompetency14(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									value={indicators14}
									onChange={(e) => setIndicators14(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight14}
									onChange={(e) => setWeight14(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co114}
									onChange={(e) => setCo114(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co214}
									onChange={(e) => setCo214(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co314}
									onChange={(e) => setCo314(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co414}
									onChange={(e) => setCo414(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co514}
									onChange={(e) => setCo514(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co614}
									onChange={(e) => setCo614(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co714}
									onChange={(e) => setCo714(e.target.value)}
								/>
							</td>
						</tr>
						<tr className='m-4'>
							<td>
								<Textarea
									value={po15}
									onChange={(e) => setPo15(e.target.value)}
									className='my-6'
								/>
							</td>
							<td>
								<Textarea
									value={competency15}
									onChange={(e) => setCompetency15(e.target.value)}
								/>
							</td>
							<td>
								<Textarea
									value={indicators15}
									onChange={(e) => setIndicators15(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={weight15}
									onChange={(e) => setWeight15(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co115}
									onChange={(e) => setCo115(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co215}
									onChange={(e) => setCo215(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co315}
									onChange={(e) => setCo315(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co415}
									onChange={(e) => setCo415(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co515}
									onChange={(e) => setCo515(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co615}
									onChange={(e) => setCo615(e.target.value)}
								/>
							</td>
							<td>
								<Input
									type='number'
									value={co715}
									onChange={(e) => setCo715(e.target.value)}
								/>
							</td>
						</tr>
					</tbody>
				</table>

				<Button type='submit'>Submit</Button>

				{/* <Button onClick={handlePushToDatabase}>Push to Database</Button> */}
			</form>

			{/* <Button onClick={handlePushToDatabase}>Push to Database</Button> */}
		</>
	);
}
