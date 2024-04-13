"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import fetchRecent from "@/components/fetchRecent";
import DeleteBtn from "@/components/DeleteBtn";

export default function Home() {
	const [tables, setTables] = useState<any[]>([]);

	useEffect(() => {
		const fetchTableData = async () => {
			const data = await fetchRecent();
			if (data) {
				setTables(data);
				console.log(data);
			} else {
				// Handle error
			}
		};

		fetchTableData();
	}, []);
	return (
		<>
			<section className='flex size-full flex-col gap-5 text-white '>
				<div className='h-[303px] w-full rounded-[20px] bg-hero bg-cover'>
					<div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
						<h2 className='glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal'></h2>
						<div className='flex xl:flex-row  flex-col gap-2'>
							<Link href='/create-mapping-table'>
								<Button variant='solid' color='success'>
									Create Mapping Table
								</Button>
							</Link>
							<Link href='/all-tables'>
								<Button variant='solid' color='success'>
									View All Tables
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<div className='text-4xl font-bold my-8 mt-56'>Recent Work</div>

			<div className='flex flex-wrap gap-6 justify-center'>
				{tables.map((table: any, index: number) => (
					<div
						key={index}
						className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3'
					>
						<Card className='max-w-[400px] cursor-pointer'>
							<CardHeader className='flex gap-3'>
								<div className='flex flex-col'>
									<p className='text-md'>Mapping Table : </p>
								</div>
							</CardHeader>
							<Divider />
							<CardBody>
								<h1 className='text-lg font-bold'> Year : {table.year}</h1>

								<h1 className='text-lg font-bold'>
									{" "}
									Department : {table.dept}
								</h1>
								<h1 className='text-lg font-bold'> Semester : {table.sem}</h1>
								<h1 className='text-lg font-bold'>
									{" "}
									Subject : {table.subject}
								</h1>
							</CardBody>
							<Divider />
							<CardFooter className='flex justify-between flex-wrap '>
								<div className=' flex gap-4 my-4'>
									<Link href={`/table/${table._id}`}>
										<Button variant='flat' color='success'>
											Enter
										</Button>
									</Link>
									<Link href={`/articulation/${table._id}`}>
										<Button variant='flat' color='success'>
											Articulation
										</Button>
									</Link>
									<Link href={`/po-table/${table._id}`}>
										<Button variant='flat' color='success'>
											Edit PO&apos;s
										</Button>
									</Link>
								</div>

								<DeleteBtn id={table._id} />
							</CardFooter>
						</Card>
					</div>
				))}
			</div>
		</>
	);
}
