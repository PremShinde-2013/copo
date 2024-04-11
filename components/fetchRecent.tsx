import React from "react";

interface TableData {
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

const fetchRecent = async (): Promise<TableData[] | null> => {
	try {
		const res = await fetch("http://localhost:3000/api/get-recent-tables", {
			// const res = await fetch(
			// 	"https://copo-attainment.vercel.app/api/get-recent-tables",
			// 	{
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to fetch recent tables");
		}

		const data = await res.json(); // Return the JSON response
		return data.recentTables;
	} catch (error) {
		console.log("Error loading recent tables", error);
		return null;
	}
};

export default fetchRecent;
