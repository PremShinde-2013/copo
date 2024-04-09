"use client";
import DeleteBtn from "@/components/DeleteBtn";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Input,
	Link,
	Spinner,
	Textarea,
} from "@nextui-org/react";
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

	// Call the calculation function whenever any of the co values change

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
		<div className='flex flex-wrap gap-6 justify-center'>
			<div className='w-full '>
				<Card className=' cursor-pointer'>
					<CardHeader className='flex gap-3'>
						<div className='flex flex-col'>
							<p className='text-2xl font-bold'>Edit PO&apos;s</p>
						</div>
					</CardHeader>
					<Divider />
					<CardBody className='flex justify-center items-center'>
						<h1 className='text-lg font-bold'> Year : {editedTable?.year}</h1>

						<h1 className='text-lg font-bold'>
							{" "}
							Department : {editedTable?.dept}
						</h1>
						<h1 className='text-lg font-bold'>
							{" "}
							Semester : {editedTable?.sem}
						</h1>
						<h1 className='text-lg font-bold'>
							{" "}
							Subject : {editedTable?.subject}
						</h1>
					</CardBody>
					<Divider />
					<CardFooter className='flex gap-6'>
						<Card>
							<CardHeader>Edit PO : 1</CardHeader>
							<CardBody></CardBody>

							<CardFooter>
								<Link href={`/edit-po/${editedTable?._id}`}>
									<Button color='secondary'>Edit</Button>
								</Link>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>Edit PO : 2</CardHeader>
							<CardBody></CardBody>

							<CardFooter>
								<Link href={`/edit-po2/${editedTable?._id}`}>
									<Button color='secondary'>Edit</Button>
								</Link>
							</CardFooter>
						</Card>
						{/* <div className=' flex gap-4'>
							<Link href={`/table/${editedTable?._id}`}>
								<Button variant='flat' color='primary'>
									Enter
								</Button>
							</Link>
							<Link href={`/edit-table/${editedTable?._id}`}>
								<Button variant='flat' color='primary'>
									Edit
								</Button>
							</Link>
							<Link href={`/edit-po/${editedTable?._id}`}>
								<Button variant='flat' color='primary'>
									Edit PO&apos;s
								</Button>
							</Link>
						</div> */}

						<DeleteBtn id={editedTable?._id} />
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default TableDetail;
