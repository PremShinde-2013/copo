"use client";
import React, { useEffect, useState } from "react";
import fetchData from "../../components/fetchData";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Image,
	Link,
} from "@nextui-org/react";
import { DeleteOutlineRounded } from "@mui/icons-material";
import DeleteBtn from "@/components/DeleteBtn";

const Page = () => {
	const [table, setTable] = useState<any[]>([]);

	useEffect(() => {
		const fetchTableData = async () => {
			const data = await fetchData();
			if (data) {
				setTable(data);
				console.log(data);
			} else {
				// Handle error
			}
		};

		fetchTableData();
	}, []);

	return (
		<div className='flex flex-wrap gap-6 justify-center'>
			{table.map((t: any, index: number) => (
				<div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3'>
					<Card className='max-w-[400px] cursor-pointer'>
						<CardHeader className='flex gap-3'>
							<div className='flex flex-col'>
								<p className='text-md'>Mapping Table : </p>
							</div>
						</CardHeader>
						<Divider />
						<CardBody>
							<h1 className='text-lg font-bold'> Year : {t.year}</h1>

							<h1 className='text-lg font-bold'> Department : {t.dept}</h1>
							<h1 className='text-lg font-bold'> Semester : {t.sem}</h1>
							<h1 className='text-lg font-bold'> Subject : {t.subject}</h1>
						</CardBody>
						<Divider />
						<CardFooter className='flex justify-between'>
							<div className=' flex gap-2'>
								<Link href={`/table/${t._id}`}>
									<Button variant='flat' color='primary'>
										Enter
									</Button>
								</Link>

								<Link href={`/po-table/${t._id}`}>
									<Button variant='flat' color='primary'>
										Edit PO&apos;s
									</Button>
								</Link>
							</div>

							<DeleteBtn id={t._id} />
						</CardFooter>
					</Card>
				</div>
			))}
		</div>
	);
};

export default Page;
