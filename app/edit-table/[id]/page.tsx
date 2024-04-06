// pages/TableDetail.tsx
"use client";
import { Button, Card, Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import toast from "react-hot-toast";

interface Props {
	id: string;
}

const TableDetail = ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const [table, setTable] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null); // Change to string | null for better typing

	useEffect(() => {
		const fetchTableData = async () => {
			try {
				const response = await fetch(`/api/table/${id}`);
				if (!response.ok) {
					toast.error("Failed to fetch data");
					throw new Error("Failed to fetch data");
				}
				const data = await response.json();
				setTable(data.table);
				console.log(data);
			} catch (error) {
				setError("Error fetching table data");
				toast.error("Failed to fetch data");
			} finally {
				setLoading(false);
			}
		};

		fetchTableData();
	}, [id]);

	if (loading) {
		return (
			<div className='flex justify-center items-center w-full h-full'>
				<Spinner color='success' />
			</div>
		);
	}

	if (error) {
		return <div>{error}</div>;
	}

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
						{table && (
							<tr>
								<td>{table.po11}</td>
								<td>{table.competency11}</td>
								<td>{table.indicators11}</td>
								<td>{table.weight11}</td>
								<td>{table.co111}</td>
								<td>{table.co211}</td>
								<td>{table.co311}</td>
								<td>{table.co411}</td>
								<td>{table.co511}</td>
								<td>{table.co611}</td>
								<td>{table.co711}</td>
							</tr>
						)}

						{table && (
							<tr>
								<td>{table.po12}</td>
								<td>{table.competency12}</td>
								<td>{table.indicators12}</td>
								<td>{table.weight12}</td>
								<td>{table.co112}</td>
								<td>{table.co212}</td>
								<td>{table.co312}</td>
								<td>{table.co412}</td>
								<td>{table.co512}</td>
								<td>{table.co612}</td>
								<td>{table.co712}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.po13}</td>
								<td>{table.competency13}</td>
								<td>{table.indicators13}</td>
								<td>{table.weight13}</td>
								<td>{table.co113}</td>
								<td>{table.co213}</td>
								<td>{table.co313}</td>
								<td>{table.co413}</td>
								<td>{table.co513}</td>
								<td>{table.co613}</td>
								<td>{table.co713}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.po14}</td>
								<td>{table.competency14}</td>
								<td>{table.indicators14}</td>
								<td>{table.weight14}</td>
								<td>{table.co114}</td>
								<td>{table.co214}</td>
								<td>{table.co314}</td>
								<td>{table.co414}</td>
								<td>{table.co514}</td>
								<td>{table.co614}</td>
								<td>{table.co714}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.po15}</td>
								<td>{table.competency15}</td>
								<td>{table.indicators15}</td>
								<td>{table.weight15}</td>
								<td>{table.co115}</td>
								<td>{table.co215}</td>
								<td>{table.co315}</td>
								<td>{table.co415}</td>
								<td>{table.co515}</td>
								<td>{table.co615}</td>
								<td>{table.co715}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PO1 :Mapping Level
								</td>

								<td>{table.po1mapco1}</td>
								<td>{table.po1mapco2}</td>
								<td>{table.po1mapco3}</td>
								<td>{table.po1mapco4}</td>
								<td>{table.po1mapco5}</td>
								<td>{table.po1mapco6}</td>
								<td>{table.po1mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO2 **************************************************** */}
						{table && (
							<tr>
								<td rowSpan={13}>{table.po21}</td>
								<td rowSpan={3}>{table.competency21}</td>
								<td>{table.indicators21}</td>
								<td>{table.weight21}</td>
								<td>{table.co121}</td>
								<td>{table.co221}</td>
								<td>{table.co321}</td>
								<td>{table.co421}</td>
								<td>{table.co521}</td>
								<td>{table.co621}</td>
								<td>{table.co721}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators22}</td>
								<td>{table.weight22}</td>
								<td>{table.co122}</td>
								<td>{table.co222}</td>
								<td>{table.co322}</td>
								<td>{table.co422}</td>
								<td>{table.co522}</td>
								<td>{table.co622}</td>
								<td>{table.co722}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators23}</td>
								<td>{table.weight23}</td>
								<td>{table.co123}</td>
								<td>{table.co223}</td>
								<td>{table.co323}</td>
								<td>{table.co423}</td>
								<td>{table.co523}</td>
								<td>{table.co623}</td>
								<td>{table.co723}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={4}>{table.competency22}</td>
								<td>{table.indicators24}</td>
								<td>{table.weight24}</td>
								<td>{table.co124}</td>
								<td>{table.co224}</td>
								<td>{table.co324}</td>
								<td>{table.co424}</td>
								<td>{table.co524}</td>
								<td>{table.co624}</td>
								<td>{table.co724}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators25}</td>
								<td>{table.weight25}</td>
								<td>{table.co125}</td>
								<td>{table.co225}</td>
								<td>{table.co325}</td>
								<td>{table.co425}</td>
								<td>{table.co525}</td>
								<td>{table.co625}</td>
								<td>{table.co725}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators26}</td>
								<td>{table.weight26}</td>
								<td>{table.co126}</td>
								<td>{table.co226}</td>
								<td>{table.co326}</td>
								<td>{table.co426}</td>
								<td>{table.co526}</td>
								<td>{table.co626}</td>
								<td>{table.co726}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators27}</td>
								<td>{table.weight27}</td>
								<td>{table.co127}</td>
								<td>{table.co227}</td>
								<td>{table.co327}</td>
								<td>{table.co427}</td>
								<td>{table.co527}</td>
								<td>{table.co627}</td>
								<td>{table.co727}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={2}>{table.competency23}</td>

								<td>{table.indicators28}</td>
								<td>{table.weight28}</td>
								<td>{table.co128}</td>
								<td>{table.co228}</td>
								<td>{table.co328}</td>
								<td>{table.co428}</td>
								<td>{table.co528}</td>
								<td>{table.co628}</td>
								<td>{table.co728}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators29}</td>
								<td>{table.weight29}</td>
								<td>{table.co129}</td>
								<td>{table.co229}</td>
								<td>{table.co329}</td>
								<td>{table.co429}</td>
								<td>{table.co529}</td>
								<td>{table.co629}</td>
								<td>{table.co729}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={4}>{table.competency24}</td>

								<td>{table.indicators210}</td>
								<td>{table.weight210}</td>
								<td>{table.co1210}</td>
								<td>{table.co2210}</td>
								<td>{table.co3210}</td>
								<td>{table.co4210}</td>
								<td>{table.co5210}</td>
								<td>{table.co6210}</td>
								<td>{table.co7210}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators211}</td>
								<td>{table.weight211}</td>
								<td>{table.co1211}</td>
								<td>{table.co2211}</td>
								<td>{table.co3211}</td>
								<td>{table.co4211}</td>
								<td>{table.co5211}</td>
								<td>{table.co6211}</td>
								<td>{table.co7211}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators212}</td>
								<td>{table.weight212}</td>
								<td>{table.co1212}</td>
								<td>{table.co2212}</td>
								<td>{table.co3212}</td>
								<td>{table.co4212}</td>
								<td>{table.co5212}</td>
								<td>{table.co6212}</td>
								<td>{table.co7212}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators213}</td>
								<td>{table.weight213}</td>
								<td>{table.co1213}</td>
								<td>{table.co2213}</td>
								<td>{table.co3213}</td>
								<td>{table.co4213}</td>
								<td>{table.co5213}</td>
								<td>{table.co6213}</td>
								<td>{table.co7213}</td>
							</tr>
						)}

						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PO2 :Mapping Level
								</td>

								<td>{table.po2mapco1}</td>
								<td>{table.po2mapco2}</td>
								<td>{table.po2mapco3}</td>
								<td>{table.po2mapco4}</td>
								<td>{table.po2mapco5}</td>
								<td>{table.po2mapco6}</td>
								<td>{table.po2mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO :3  **************************************************** */}
						{table && (
							<tr>
								<td rowSpan={13}>{table.po31}</td>
								<td rowSpan={6}>{table.competency31}</td>
								<td>{table.indicators31}</td>
								<td>{table.weight31}</td>
								<td>{table.co131}</td>
								<td>{table.co231}</td>
								<td>{table.co331}</td>
								<td>{table.co431}</td>
								<td>{table.co531}</td>
								<td>{table.co631}</td>
								<td>{table.co731}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators32}</td>
								<td>{table.weight32}</td>
								<td>{table.co132}</td>
								<td>{table.co232}</td>
								<td>{table.co332}</td>
								<td>{table.co432}</td>
								<td>{table.co532}</td>
								<td>{table.co632}</td>
								<td>{table.co732}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators33}</td>
								<td>{table.weight33}</td>
								<td>{table.co133}</td>
								<td>{table.co233}</td>
								<td>{table.co333}</td>
								<td>{table.co433}</td>
								<td>{table.co533}</td>
								<td>{table.co633}</td>
								<td>{table.co733}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators34}</td>
								<td>{table.weight34}</td>
								<td>{table.co134}</td>
								<td>{table.co234}</td>
								<td>{table.co334}</td>
								<td>{table.co434}</td>
								<td>{table.co534}</td>
								<td>{table.co634}</td>
								<td>{table.co734}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators35}</td>
								<td>{table.weight35}</td>
								<td>{table.co135}</td>
								<td>{table.co235}</td>
								<td>{table.co335}</td>
								<td>{table.co435}</td>
								<td>{table.co535}</td>
								<td>{table.co635}</td>
								<td>{table.co735}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators36}</td>
								<td>{table.weight36}</td>
								<td>{table.co136}</td>
								<td>{table.co236}</td>
								<td>{table.co336}</td>
								<td>{table.co436}</td>
								<td>{table.co536}</td>
								<td>{table.co636}</td>
								<td>{table.co736}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={3}>{table.competency32}</td>

								<td>{table.indicators37}</td>
								<td>{table.weight37}</td>
								<td>{table.co137}</td>
								<td>{table.co237}</td>
								<td>{table.co337}</td>
								<td>{table.co437}</td>
								<td>{table.co537}</td>
								<td>{table.co637}</td>
								<td>{table.co737}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators38}</td>
								<td>{table.weight38}</td>
								<td>{table.co138}</td>
								<td>{table.co238}</td>
								<td>{table.co338}</td>
								<td>{table.co438}</td>
								<td>{table.co538}</td>
								<td>{table.co638}</td>
								<td>{table.co738}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators39}</td>
								<td>{table.weight39}</td>
								<td>{table.co139}</td>
								<td>{table.co239}</td>
								<td>{table.co339}</td>
								<td>{table.co439}</td>
								<td>{table.co539}</td>
								<td>{table.co639}</td>
								<td>{table.co739}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={4}>{table.competency33}</td>

								<td>{table.indicators310}</td>
								<td>{table.weight310}</td>
								<td>{table.co1310}</td>
								<td>{table.co2310}</td>
								<td>{table.co3310}</td>
								<td>{table.co4310}</td>
								<td>{table.co5310}</td>
								<td>{table.co6310}</td>
								<td>{table.co7310}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators311}</td>
								<td>{table.weight311}</td>
								<td>{table.co1311}</td>
								<td>{table.co2311}</td>
								<td>{table.co3311}</td>
								<td>{table.co4311}</td>
								<td>{table.co5311}</td>
								<td>{table.co6311}</td>
								<td>{table.co7311}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators312}</td>
								<td>{table.weight312}</td>
								<td>{table.co1312}</td>
								<td>{table.co2312}</td>
								<td>{table.co3312}</td>
								<td>{table.co4312}</td>
								<td>{table.co5312}</td>
								<td>{table.co6312}</td>
								<td>{table.co7312}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators313}</td>
								<td>{table.weight313}</td>
								<td>{table.co1313}</td>
								<td>{table.co2313}</td>
								<td>{table.co3313}</td>
								<td>{table.co4313}</td>
								<td>{table.co5313}</td>
								<td>{table.co6313}</td>
								<td>{table.co7313}</td>
							</tr>
						)}

						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PO3 :Mapping Level
								</td>

								<td>{table.po3mapco1}</td>
								<td>{table.po3mapco2}</td>
								<td>{table.po3mapco3}</td>
								<td>{table.po3mapco4}</td>
								<td>{table.po3mapco5}</td>
								<td>{table.po3mapco6}</td>
								<td>{table.po3mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO :4  **************************************************** */}
						{table && (
							<tr>
								<td rowSpan={10}>{table.po41}</td>
								<td rowSpan={4}>{table.competency41}</td>
								<td>{table.indicators41}</td>
								<td>{table.weight41}</td>
								<td>{table.co141}</td>
								<td>{table.co241}</td>
								<td>{table.co341}</td>
								<td>{table.co441}</td>
								<td>{table.co541}</td>
								<td>{table.co641}</td>
								<td>{table.co741}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators42}</td>
								<td>{table.weight42}</td>
								<td>{table.co142}</td>
								<td>{table.co242}</td>
								<td>{table.co342}</td>
								<td>{table.co442}</td>
								<td>{table.co542}</td>
								<td>{table.co642}</td>
								<td>{table.co742}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators43}</td>
								<td>{table.weight43}</td>
								<td>{table.co143}</td>
								<td>{table.co243}</td>
								<td>{table.co343}</td>
								<td>{table.co443}</td>
								<td>{table.co543}</td>
								<td>{table.co643}</td>
								<td>{table.co743}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators44}</td>
								<td>{table.weight44}</td>
								<td>{table.co144}</td>
								<td>{table.co244}</td>
								<td>{table.co344}</td>
								<td>{table.co444}</td>
								<td>{table.co544}</td>
								<td>{table.co644}</td>
								<td>{table.co744}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={2}>{table.competency42}</td>
								<td>{table.indicators45}</td>
								<td>{table.weight45}</td>
								<td>{table.co145}</td>
								<td>{table.co245}</td>
								<td>{table.co345}</td>
								<td>{table.co445}</td>
								<td>{table.co545}</td>
								<td>{table.co645}</td>
								<td>{table.co745}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators46}</td>
								<td>{table.weight46}</td>
								<td>{table.co146}</td>
								<td>{table.co246}</td>
								<td>{table.co346}</td>
								<td>{table.co446}</td>
								<td>{table.co546}</td>
								<td>{table.co646}</td>
								<td>{table.co746}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={4}>{table.competency43}</td>
								<td>{table.indicators47}</td>
								<td>{table.weight47}</td>
								<td>{table.co147}</td>
								<td>{table.co247}</td>
								<td>{table.co347}</td>
								<td>{table.co447}</td>
								<td>{table.co547}</td>
								<td>{table.co647}</td>
								<td>{table.co747}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators48}</td>
								<td>{table.weight48}</td>
								<td>{table.co148}</td>
								<td>{table.co248}</td>
								<td>{table.co348}</td>
								<td>{table.co448}</td>
								<td>{table.co548}</td>
								<td>{table.co648}</td>
								<td>{table.co748}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators49}</td>
								<td>{table.weight49}</td>
								<td>{table.co149}</td>
								<td>{table.co249}</td>
								<td>{table.co349}</td>
								<td>{table.co449}</td>
								<td>{table.co549}</td>
								<td>{table.co649}</td>
								<td>{table.co749}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators410}</td>
								<td>{table.weight410}</td>
								<td>{table.co1410}</td>
								<td>{table.co2410}</td>
								<td>{table.co3410}</td>
								<td>{table.co4410}</td>
								<td>{table.co5410}</td>
								<td>{table.co6410}</td>
								<td>{table.co7410}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PO4 :Mapping Level
								</td>

								<td>{table.po4mapco1}</td>
								<td>{table.po4mapco2}</td>
								<td>{table.po4mapco3}</td>
								<td>{table.po4mapco4}</td>
								<td>{table.po4mapco5}</td>
								<td>{table.po4mapco6}</td>
								<td>{table.po4mapco7}</td>
							</tr>
						)}
						{/* ************************************ PO :5  **************************************************** */}
						{table && (
							<tr>
								<td rowSpan={6}>{table.po51}</td>
								<td rowSpan={2}>{table.competency51}</td>
								<td>{table.indicators51}</td>
								<td>{table.weight51}</td>
								<td>{table.co151}</td>
								<td>{table.co251}</td>
								<td>{table.co351}</td>
								<td>{table.co451}</td>
								<td>{table.co551}</td>
								<td>{table.co651}</td>
								<td>{table.co751}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators52}</td>
								<td>{table.weight52}</td>
								<td>{table.co152}</td>
								<td>{table.co252}</td>
								<td>{table.co352}</td>
								<td>{table.co452}</td>
								<td>{table.co552}</td>
								<td>{table.co652}</td>
								<td>{table.co752}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={2}>{table.competency52}</td>
								<td>{table.indicators53}</td>
								<td>{table.weight53}</td>
								<td>{table.co153}</td>
								<td>{table.co253}</td>
								<td>{table.co353}</td>
								<td>{table.co453}</td>
								<td>{table.co553}</td>
								<td>{table.co653}</td>
								<td>{table.co753}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators54}</td>
								<td>{table.weight54}</td>
								<td>{table.co154}</td>
								<td>{table.co254}</td>
								<td>{table.co354}</td>
								<td>{table.co454}</td>
								<td>{table.co554}</td>
								<td>{table.co654}</td>
								<td>{table.co754}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={2}>{table.competency53}</td>
								<td>{table.indicators55}</td>
								<td>{table.weight55}</td>
								<td>{table.co155}</td>
								<td>{table.co255}</td>
								<td>{table.co355}</td>
								<td>{table.co455}</td>
								<td>{table.co555}</td>
								<td>{table.co655}</td>
								<td>{table.co755}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators56}</td>
								<td>{table.weight56}</td>
								<td>{table.co156}</td>
								<td>{table.co256}</td>
								<td>{table.co356}</td>
								<td>{table.co456}</td>
								<td>{table.co556}</td>
								<td>{table.co656}</td>
								<td>{table.co756}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PO5 :Mapping Level
								</td>

								<td>{table.po5mapco1}</td>
								<td>{table.po5mapco2}</td>
								<td>{table.po5mapco3}</td>
								<td>{table.po5mapco4}</td>
								<td>{table.po5mapco5}</td>
								<td>{table.po5mapco6}</td>
								<td>{table.po5mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO :6  **************************************************** */}
						{table && (
							<tr>
								<td rowSpan={2}>{table.po61}</td>
								<td>{table.competency61}</td>
								<td>{table.indicators61}</td>
								<td>{table.weight61}</td>
								<td>{table.co161}</td>
								<td>{table.co261}</td>
								<td>{table.co361}</td>
								<td>{table.co461}</td>
								<td>{table.co561}</td>
								<td>{table.co661}</td>
								<td>{table.co761}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.competency62}</td>
								<td>{table.indicators62}</td>
								<td>{table.weight62}</td>
								<td>{table.co162}</td>
								<td>{table.co262}</td>
								<td>{table.co362}</td>
								<td>{table.co462}</td>
								<td>{table.co562}</td>
								<td>{table.co662}</td>
								<td>{table.co762}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PO6 :Mapping Level
								</td>
								<td>{table.po6mapco1}</td>
								<td>{table.po6mapco2}</td>
								<td>{table.po6mapco3}</td>
								<td>{table.po6mapco4}</td>
								<td>{table.po6mapco5}</td>
								<td>{table.po6mapco6}</td>
								<td>{table.po6mapco7}</td>
							</tr>
						)}
						{/* ************************************ PO :8  **************************************************** */}
						{table && (
							<tr>
								<td rowSpan={4}>{table.po81}</td>
								<td>{table.competency81}</td>
								<td>{table.indicators81}</td>
								<td>{table.weight81}</td>
								<td>{table.co181}</td>
								<td>{table.co281}</td>
								<td>{table.co381}</td>
								<td>{table.co481}</td>
								<td>{table.co581}</td>
								<td>{table.co681}</td>
								<td>{table.co781}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={2}>{table.competency82}</td>
								<td>{table.indicators82}</td>
								<td>{table.weight82}</td>
								<td>{table.co182}</td>
								<td>{table.co282}</td>
								<td>{table.co382}</td>
								<td>{table.co482}</td>
								<td>{table.co582}</td>
								<td>{table.co682}</td>
								<td>{table.co782}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators83}</td>
								<td>{table.weight83}</td>
								<td>{table.co183}</td>
								<td>{table.co283}</td>
								<td>{table.co383}</td>
								<td>{table.co483}</td>
								<td>{table.co583}</td>
								<td>{table.co683}</td>
								<td>{table.co783}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PO8 :Mapping Level
								</td>

								<td>{table.po8mapco1}</td>
								<td>{table.po8mapco2}</td>
								<td>{table.po8mapco3}</td>
								<td>{table.po8mapco4}</td>
								<td>{table.po8mapco5}</td>
								<td>{table.po8mapco6}</td>
								<td>{table.po8mapco7}</td>
							</tr>
						)}

						{/* ************************************ PO :9  **************************************************** */}
						{table && (
							<tr>
								<td rowSpan={7}>{table.po91}</td>
								<td rowSpan={2}>{table.competency91}</td>
								<td>{table.indicators91}</td>
								<td>{table.weight91}</td>
								<td>{table.co191}</td>
								<td>{table.co291}</td>
								<td>{table.co391}</td>
								<td>{table.co491}</td>
								<td>{table.co591}</td>
								<td>{table.co691}</td>
								<td>{table.co791}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators92}</td>
								<td>{table.weight92}</td>
								<td>{table.co192}</td>
								<td>{table.co292}</td>
								<td>{table.co392}</td>
								<td>{table.co492}</td>
								<td>{table.co592}</td>
								<td>{table.co692}</td>
								<td>{table.co792}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={4}>{table.competency92}</td>
								<td>{table.indicators93}</td>
								<td>{table.weight93}</td>
								<td>{table.co193}</td>
								<td>{table.co293}</td>
								<td>{table.co393}</td>
								<td>{table.co493}</td>
								<td>{table.co593}</td>
								<td>{table.co693}</td>
								<td>{table.co793}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators94}</td>
								<td>{table.weight94}</td>
								<td>{table.co194}</td>
								<td>{table.co294}</td>
								<td>{table.co394}</td>
								<td>{table.co494}</td>
								<td>{table.co594}</td>
								<td>{table.co694}</td>
								<td>{table.co794}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators95}</td>
								<td>{table.weight95}</td>
								<td>{table.co195}</td>
								<td>{table.co295}</td>
								<td>{table.co395}</td>
								<td>{table.co495}</td>
								<td>{table.co595}</td>
								<td>{table.co695}</td>
								<td>{table.co795}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators96}</td>
								<td>{table.weight96}</td>
								<td>{table.co196}</td>
								<td>{table.co296}</td>
								<td>{table.co396}</td>
								<td>{table.co496}</td>
								<td>{table.co596}</td>
								<td>{table.co696}</td>
								<td>{table.co796}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.competency93}</td>
								<td>{table.indicators97}</td>
								<td>{table.weight97}</td>
								<td>{table.co197}</td>
								<td>{table.co297}</td>
								<td>{table.co397}</td>
								<td>{table.co497}</td>
								<td>{table.co597}</td>
								<td>{table.co697}</td>
								<td>{table.co797}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PO9 :Mapping Level
								</td>

								<td>{table.po9mapco1}</td>
								<td>{table.po9mapco2}</td>
								<td>{table.po9mapco3}</td>
								<td>{table.po9mapco4}</td>
								<td>{table.po9mapco5}</td>
								<td>{table.po9mapco6}</td>
								<td>{table.po9mapco7}</td>
							</tr>
						)}
						{/* ************************************ PO : 10  **************************************************** */}
						{table && (
							<tr>
								<td rowSpan={7}>{table.po101}</td>
								<td rowSpan={3}>{table.competency101}</td>
								<td>{table.indicators101}</td>
								<td>{table.weight101}</td>
								<td>{table.co1101}</td>
								<td>{table.co2101}</td>
								<td>{table.co3101}</td>
								<td>{table.co4101}</td>
								<td>{table.co5101}</td>
								<td>{table.co6101}</td>
								<td>{table.co7101}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators102}</td>
								<td>{table.weight102}</td>
								<td>{table.co1102}</td>
								<td>{table.co2102}</td>
								<td>{table.co3102}</td>
								<td>{table.co4102}</td>
								<td>{table.co5102}</td>
								<td>{table.co6102}</td>
								<td>{table.co7102}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators103}</td>
								<td>{table.weight103}</td>
								<td>{table.co1103}</td>
								<td>{table.co2103}</td>
								<td>{table.co3103}</td>
								<td>{table.co4103}</td>
								<td>{table.co5103}</td>
								<td>{table.co6103}</td>
								<td>{table.co7103}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={2}>{table.competency102}</td>
								<td>{table.indicators104}</td>
								<td>{table.weight104}</td>
								<td>{table.co1104}</td>
								<td>{table.co2104}</td>
								<td>{table.co3104}</td>
								<td>{table.co4104}</td>
								<td>{table.co5104}</td>
								<td>{table.co6104}</td>
								<td>{table.co7104}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators105}</td>
								<td>{table.weight105}</td>
								<td>{table.co1105}</td>
								<td>{table.co2105}</td>
								<td>{table.co3105}</td>
								<td>{table.co4105}</td>
								<td>{table.co5105}</td>
								<td>{table.co6105}</td>
								<td>{table.co7105}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={2}>{table.competency103}</td>
								<td>{table.indicators106}</td>
								<td>{table.weight106}</td>
								<td>{table.co1106}</td>
								<td>{table.co2106}</td>
								<td>{table.co3106}</td>
								<td>{table.co4106}</td>
								<td>{table.co5106}</td>
								<td>{table.co6106}</td>
								<td>{table.co7106}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators107}</td>
								<td>{table.weight107}</td>
								<td>{table.co1107}</td>
								<td>{table.co2107}</td>
								<td>{table.co3107}</td>
								<td>{table.co4107}</td>
								<td>{table.co5107}</td>
								<td>{table.co6107}</td>
								<td>{table.co7107}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PO10 :Mapping Level
								</td>

								<td>{table.po10mapco1}</td>
								<td>{table.po10mapco2}</td>
								<td>{table.po10mapco3}</td>
								<td>{table.po10mapco4}</td>
								<td>{table.po10mapco5}</td>
								<td>{table.po10mapco6}</td>
								<td>{table.po10mapco7}</td>
							</tr>
						)}
						{/* ************************************ PO : 11  **************************************************** */}
						{table && (
							<tr>
								<td rowSpan={5}>{table.po111}</td>
								<td rowSpan={2}>{table.competency111}</td>
								<td>{table.indicators111}</td>
								<td>{table.weight111}</td>
								<td>{table.co1111}</td>
								<td>{table.co2111}</td>
								<td>{table.co3111}</td>
								<td>{table.co4111}</td>
								<td>{table.co5111}</td>
								<td>{table.co6111}</td>
								<td>{table.co7111}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators112}</td>
								<td>{table.weight112}</td>
								<td>{table.co1112}</td>
								<td>{table.co2112}</td>
								<td>{table.co3112}</td>
								<td>{table.co4112}</td>
								<td>{table.co5112}</td>
								<td>{table.co6112}</td>
								<td>{table.co7112}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.competency112}</td>
								<td>{table.indicators113}</td>
								<td>{table.weight113}</td>
								<td>{table.co1113}</td>
								<td>{table.co2113}</td>
								<td>{table.co3113}</td>
								<td>{table.co4113}</td>
								<td>{table.co5113}</td>
								<td>{table.co6113}</td>
								<td>{table.co7113}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={2}>{table.competency113}</td>
								<td>{table.indicators114}</td>
								<td>{table.weight114}</td>
								<td>{table.co1114}</td>
								<td>{table.co2114}</td>
								<td>{table.co3114}</td>
								<td>{table.co4114}</td>
								<td>{table.co5114}</td>
								<td>{table.co6114}</td>
								<td>{table.co7114}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators115}</td>
								<td>{table.weight115}</td>
								<td>{table.co1115}</td>
								<td>{table.co2115}</td>
								<td>{table.co3115}</td>
								<td>{table.co4115}</td>
								<td>{table.co5115}</td>
								<td>{table.co6115}</td>
								<td>{table.co7115}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PO11 :Mapping Level
								</td>

								<td>{table.po11mapco1}</td>
								<td>{table.po11mapco2}</td>
								<td>{table.po11mapco3}</td>
								<td>{table.po11mapco4}</td>
								<td>{table.po11mapco5}</td>
								<td>{table.po11mapco6}</td>
								<td>{table.po11mapco7}</td>
							</tr>
						)}
						{/* ************************************ PO : 12  **************************************************** */}
						{table && (
							<tr>
								<td rowSpan={6}>{table.po121}</td>
								<td rowSpan={2}>{table.competency121}</td>
								<td>{table.indicators121}</td>
								<td>{table.weight121}</td>
								<td>{table.co1121}</td>
								<td>{table.co2121}</td>
								<td>{table.co3121}</td>
								<td>{table.co4121}</td>
								<td>{table.co5121}</td>
								<td>{table.co6121}</td>
								<td>{table.co7121}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators122}</td>
								<td>{table.weight122}</td>
								<td>{table.co1122}</td>
								<td>{table.co2122}</td>
								<td>{table.co3122}</td>
								<td>{table.co4122}</td>
								<td>{table.co5122}</td>
								<td>{table.co6122}</td>
								<td>{table.co7122}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={2}>{table.competency122}</td>

								<td>{table.indicators123}</td>
								<td>{table.weight123}</td>
								<td>{table.co1123}</td>
								<td>{table.co2123}</td>
								<td>{table.co3123}</td>
								<td>{table.co4123}</td>
								<td>{table.co5123}</td>
								<td>{table.co6123}</td>
								<td>{table.co7123}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators124}</td>
								<td>{table.weight124}</td>
								<td>{table.co1124}</td>
								<td>{table.co2124}</td>
								<td>{table.co3124}</td>
								<td>{table.co4124}</td>
								<td>{table.co5124}</td>
								<td>{table.co6124}</td>
								<td>{table.co7124}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={2}>{table.competency123}</td>
								<td>{table.indicators125}</td>
								<td>{table.weight125}</td>
								<td>{table.co1125}</td>
								<td>{table.co2125}</td>
								<td>{table.co3125}</td>
								<td>{table.co4125}</td>
								<td>{table.co5125}</td>
								<td>{table.co6125}</td>
								<td>{table.co7125}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.indicators126}</td>
								<td>{table.weight126}</td>
								<td>{table.co1126}</td>
								<td>{table.co2126}</td>
								<td>{table.co3126}</td>
								<td>{table.co4126}</td>
								<td>{table.co5126}</td>
								<td>{table.co6126}</td>
								<td>{table.co7126}</td>
							</tr>
						)}

						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PO12 :Mapping Level
								</td>

								<td>{table.po12mapco1}</td>
								<td>{table.po12mapco2}</td>
								<td>{table.po12mapco3}</td>
								<td>{table.po12mapco4}</td>
								<td>{table.po12mapco5}</td>
								<td>{table.po12mapco6}</td>
								<td>{table.po12mapco7}</td>
							</tr>
						)}

						{/* *******************************   PSO : 1 **************************** */}

						{table && (
							<tr>
								<td rowSpan={5}>{table.pso11}</td>
								<td rowSpan={2}>{table.psocompetency11}</td>
								<td>{table.psoindicators11}</td>
								<td>{table.psoweight11}</td>
								<td>{table.psoco111}</td>
								<td>{table.psoco211}</td>
								<td>{table.psoco311}</td>
								<td>{table.psoco411}</td>
								<td>{table.psoco511}</td>
								<td>{table.psoco611}</td>
								<td>{table.psoco711}</td>
							</tr>
						)}

						{table && (
							<tr>
								<td>{table.psoindicators12}</td>
								<td>{table.psoweight12}</td>
								<td>{table.psoco112}</td>
								<td>{table.psoco212}</td>
								<td>{table.psoco312}</td>
								<td>{table.psoco412}</td>
								<td>{table.psoco512}</td>
								<td>{table.psoco612}</td>
								<td>{table.psoco712}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={3}>{table.psocompetency12}</td>
								<td>{table.psoindicators13}</td>
								<td>{table.psoweight13}</td>
								<td>{table.psoco113}</td>
								<td>{table.psoco213}</td>
								<td>{table.psoco313}</td>
								<td>{table.psoco413}</td>
								<td>{table.psoco513}</td>
								<td>{table.psoco613}</td>
								<td>{table.psoco713}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.psoindicators14}</td>
								<td>{table.psoweight14}</td>
								<td>{table.psoco114}</td>
								<td>{table.psoco214}</td>
								<td>{table.psoco314}</td>
								<td>{table.psoco414}</td>
								<td>{table.psoco514}</td>
								<td>{table.psoco614}</td>
								<td>{table.psoco714}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.psoindicators15}</td>
								<td>{table.psoweight15}</td>
								<td>{table.psoco115}</td>
								<td>{table.psoco215}</td>
								<td>{table.psoco315}</td>
								<td>{table.psoco415}</td>
								<td>{table.psoco515}</td>
								<td>{table.psoco615}</td>
								<td>{table.psoco715}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PSO 1 :Mapping Level
								</td>

								<td>{table.pso1mapco1}</td>
								<td>{table.pso1mapco2}</td>
								<td>{table.pso1mapco3}</td>
								<td>{table.pso1mapco4}</td>
								<td>{table.pso1mapco5}</td>
								<td>{table.pso1mapco6}</td>
								<td>{table.pso1mapco7}</td>
							</tr>
						)}
						{/* *******************************   PSO : 2 **************************** */}

						{table && (
							<tr>
								<td rowSpan={4}>{table.pso21}</td>
								<td rowSpan={2}>{table.psocompetency21}</td>
								<td>{table.psoindicators21}</td>
								<td>{table.psoweight21}</td>
								<td>{table.psoco121}</td>
								<td>{table.psoco221}</td>
								<td>{table.psoco321}</td>
								<td>{table.psoco421}</td>
								<td>{table.psoco521}</td>
								<td>{table.psoco621}</td>
								<td>{table.psoco721}</td>
							</tr>
						)}

						{table && (
							<tr>
								<td>{table.psoindicators22}</td>
								<td>{table.psoweight22}</td>
								<td>{table.psoco122}</td>
								<td>{table.psoco222}</td>
								<td>{table.psoco322}</td>
								<td>{table.psoco422}</td>
								<td>{table.psoco522}</td>
								<td>{table.psoco622}</td>
								<td>{table.psoco722}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={2}>{table.psocompetency22}</td>
								<td>{table.psoindicators23}</td>
								<td>{table.psoweight23}</td>
								<td>{table.psoco123}</td>
								<td>{table.psoco223}</td>
								<td>{table.psoco323}</td>
								<td>{table.psoco423}</td>
								<td>{table.psoco523}</td>
								<td>{table.psoco623}</td>
								<td>{table.psoco723}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.psoindicators24}</td>
								<td>{table.psoweight24}</td>
								<td>{table.psoco124}</td>
								<td>{table.psoco224}</td>
								<td>{table.psoco324}</td>
								<td>{table.psoco424}</td>
								<td>{table.psoco524}</td>
								<td>{table.psoco624}</td>
								<td>{table.psoco724}</td>
							</tr>
						)}

						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PSO 2 :Mapping Level
								</td>

								<td>{table.pso2mapco1}</td>
								<td>{table.pso2mapco2}</td>
								<td>{table.pso2mapco3}</td>
								<td>{table.pso2mapco4}</td>
								<td>{table.pso2mapco5}</td>
								<td>{table.pso2mapco6}</td>
								<td>{table.pso2mapco7}</td>
							</tr>
						)}
						{/* *******************************   PSO : 3  **************************** */}

						{table && (
							<tr>
								<td rowSpan={4}>{table.pso31}</td>
								<td rowSpan={2}>{table.psocompetency31}</td>
								<td>{table.psoindicators31}</td>
								<td>{table.psoweight31}</td>
								<td>{table.psoco131}</td>
								<td>{table.psoco231}</td>
								<td>{table.psoco331}</td>
								<td>{table.psoco431}</td>
								<td>{table.psoco531}</td>
								<td>{table.psoco631}</td>
								<td>{table.psoco731}</td>
							</tr>
						)}

						{table && (
							<tr>
								<td>{table.psoindicators32}</td>
								<td>{table.psoweight32}</td>
								<td>{table.psoco132}</td>
								<td>{table.psoco232}</td>
								<td>{table.psoco332}</td>
								<td>{table.psoco432}</td>
								<td>{table.psoco532}</td>
								<td>{table.psoco632}</td>
								<td>{table.psoco732}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td rowSpan={2}>{table.psocompetency32}</td>
								<td>{table.psoindicators33}</td>
								<td>{table.psoweight33}</td>
								<td>{table.psoco133}</td>
								<td>{table.psoco233}</td>
								<td>{table.psoco333}</td>
								<td>{table.psoco433}</td>
								<td>{table.psoco533}</td>
								<td>{table.psoco633}</td>
								<td>{table.psoco733}</td>
							</tr>
						)}
						{table && (
							<tr>
								<td>{table.psoindicators34}</td>
								<td>{table.psoweight34}</td>
								<td>{table.psoco134}</td>
								<td>{table.psoco234}</td>
								<td>{table.psoco334}</td>
								<td>{table.psoco434}</td>
								<td>{table.psoco534}</td>
								<td>{table.psoco634}</td>
								<td>{table.psoco734}</td>
							</tr>
						)}

						{table && (
							<tr>
								<td colSpan={4} className='h-16'>
									PSO 3 :Mapping Level
								</td>

								<td>{table.pso3mapco1}</td>
								<td>{table.pso3mapco2}</td>
								<td>{table.pso3mapco3}</td>
								<td>{table.pso3mapco4}</td>
								<td>{table.pso3mapco5}</td>
								<td>{table.pso3mapco6}</td>
								<td>{table.pso3mapco7}</td>
							</tr>
						)}
					</tbody>
				</table>
			</Card>
		</>
	);
};

export default TableDetail;
