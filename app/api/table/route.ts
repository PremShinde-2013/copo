import connectDB from "@/libs/mongodb";
import Table from "@/models/Table";
import { NextResponse } from "next/server";

export async function POST(request: any) {
	const {
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
	} = await request.json();
	await connectDB();
	await Table.create({
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
	});

	return NextResponse.json({ message: "Topic Created" });
}

export async function GET() {
	await connectDB();
	const table = await Table.find();
	return NextResponse.json({ table });
}

export async function DELETE(request: any) {
	const id = request.nextUrl.searchParams.get("id");
	await connectDB();
	await Table.findByIdAndDelete(id);
	return NextResponse.json({ message: "Table deleted " }, { status: 200 });
}
