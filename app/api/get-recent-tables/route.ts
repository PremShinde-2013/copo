import connectDB from "@/libs/mongodb"; // Import your database connection function
import Table from "@/models/Table"; // Import your Table model
import { NextResponse } from "next/server"; // Import Next.js response handling

export async function GET() {
	try {
		await connectDB(); // Connect to the database
		const recentTables = await Table.find().sort({ createdAt: -1 }).limit(4); // Fetch recent 6 tables
		return NextResponse.json({ recentTables }); // Return data as JSON response
	} catch (error: any) {
		// Handle any errors that might occur
		console.error("Error:", error);
		// return NextResponse.error("Internal Server Error", { status: 500 });
	}
}
