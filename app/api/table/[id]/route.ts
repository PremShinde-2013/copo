import connectDB from "@/libs/mongodb";
import Table from "@/models/Table";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }: { params: any }) {
	const { id } = params;
	const newData = await request.json(); // Extracting all data from request body
	await connectDB();
	await Table.findByIdAndUpdate(id, newData); // Passing all received data to update
	return NextResponse.json({ message: "Table updated" }, { status: 200 });
}

export async function GET(
	request: any,
	{ params }: { params: { id: string } }
) {
	const { id } = params;
	await connectDB();

	try {
		const table = await Table.findById(id);

		if (!table) {
			return NextResponse.json({ message: "Table not found" }, { status: 404 });
		}

		return NextResponse.json({ table }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: "Error fetching table", error },
			{ status: 500 }
		);
	}
}
