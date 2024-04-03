import connectDB from "@/libs/mongodb";
import Table from "@/models/Table";
import { Topic } from "@mui/icons-material";
import { NextResponse } from "next/server";

// export async function PUT(request: any, { params }: { params: any }) {
// 	const { id } = params;
// 	const {
// 		newPo: po,
// 		newCompetency: competency,
// 		newIndicators: indicators,
// 		newWeight: weight,
// 		newCo1: co1,
// 		newCo2: co2,
// 		newCo3: co3,
// 		newCo4: co4,
// 		newCo5: co5,
// 		newCo6: co6,
// 		newCo7: co7,
// 	} = await request.json();
// 	await connectDB();
// 	await Table.findByIdAndUpdate(id, {
// 		po,
// 		competency,
// 		indicators,
// 		weight,
// 		co1,
// 		co2,
// 		co3,
// 		co4,
// 		co5,
// 		co6,
// 		co7,
// 	});
// 	return NextResponse.json({ message: "Table updated" }, { status: 200 });
// }

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
