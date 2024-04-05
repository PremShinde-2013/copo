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

		po1mapco1,
		po1mapco2,
		po1mapco3,
		po1mapco4,
		po1mapco5,
		po1mapco6,
		po1mapco7,

		year,
		dept,
		sem,
		subject,

		// ************************** PO:2 ****************************

		po21,

		competency21,
		competency22,
		competency23,
		competency24,

		indicators21,
		indicators22,
		indicators23,
		indicators24,
		indicators25,
		indicators26,
		indicators27,
		indicators28,
		indicators29,
		indicators210,
		indicators211,
		indicators212,
		indicators213,

		weight21,
		weight22,
		weight23,
		weight24,
		weight25,
		weight26,
		weight27,
		weight28,
		weight29,
		weight210,
		weight211,
		weight212,
		weight213,

		co121,
		co122,
		co123,
		co124,
		co125,
		co126,
		co127,
		co128,
		co129,
		co1210,
		co1211,
		co1212,
		co1213,

		co221,
		co222,
		co223,
		co224,
		co225,
		co226,
		co227,
		co228,
		co229,
		co2210,
		co2211,
		co2212,
		co2213,

		co321,
		co322,
		co323,
		co324,
		co325,
		co326,
		co327,
		co328,
		co329,
		co3210,
		co3211,
		co3212,
		co3213,

		co421,
		co422,
		co423,
		co424,
		co425,
		co426,
		co427,
		co428,
		co429,
		co4210,
		co4211,
		co4212,
		co4213,

		co521,
		co522,
		co523,
		co524,
		co525,
		co526,
		co527,
		co528,
		co529,
		co5210,
		co5211,
		co5212,
		co5213,

		co621,
		co622,
		co623,
		co624,
		co625,
		co626,
		co627,
		co628,
		co629,
		co6210,
		co6211,
		co6212,
		co6213,

		co721,
		co722,
		co723,
		co724,
		co725,
		co726,
		co727,
		co728,
		co729,
		co7210,
		co7211,
		co7212,
		co7213,

		po2mapco1,
		po2mapco2,
		po2mapco3,
		po2mapco4,
		po2mapco5,
		po2mapco6,
		po2mapco7,

		// ************************ PO:3  ***************************************

		po31,

		competency31,
		competency32,
		competency33,
		competency34,

		indicators31,
		indicators32,
		indicators33,
		indicators34,
		indicators35,
		indicators36,
		indicators37,
		indicators38,
		indicators39,
		indicators310,
		indicators311,
		indicators312,
		indicators313,

		weight31,
		weight32,
		weight33,
		weight34,
		weight35,
		weight36,
		weight37,
		weight38,
		weight39,
		weight310,
		weight311,
		weight312,
		weight313,

		co131,
		co132,
		co133,
		co134,
		co135,
		co136,
		co137,
		co138,
		co139,
		co1310,
		co1311,
		co1312,
		co1313,

		co231,
		co232,
		co233,
		co234,
		co235,
		co236,
		co237,
		co238,
		co239,
		co2310,
		co2311,
		co2312,
		co2313,

		co331,
		co332,
		co333,
		co334,
		co335,
		co336,
		co337,
		co338,
		co339,
		co3310,
		co3311,
		co3312,
		co3313,

		co431,
		co432,
		co433,
		co434,
		co435,
		co436,
		co437,
		co438,
		co439,
		co4310,
		co4311,
		co4312,
		co4313,

		co531,
		co532,
		co533,
		co534,
		co535,
		co536,
		co537,
		co538,
		co539,
		co5310,
		co5311,
		co5312,
		co5313,

		co631,
		co632,
		co633,
		co634,
		co635,
		co636,
		co637,
		co638,
		co639,
		co6310,
		co6311,
		co6312,
		co6313,

		co731,
		co732,
		co733,
		co734,
		co735,
		co736,
		co737,
		co738,
		co739,
		co7310,
		co7311,
		co7312,
		co7313,

		po3mapco1,
		po3mapco2,
		po3mapco3,
		po3mapco4,
		po3mapco5,
		po3mapco6,
		po3mapco7,

		// ************************ PO:4  ***************************************

		po41,

		competency41,
		competency42,
		competency43,

		indicators41,
		indicators42,
		indicators43,
		indicators44,
		indicators45,
		indicators46,
		indicators47,
		indicators48,
		indicators49,
		indicators410,

		weight41,
		weight42,
		weight43,
		weight44,
		weight45,
		weight46,
		weight47,
		weight48,
		weight49,
		weight410,

		co141,
		co142,
		co143,
		co144,
		co145,
		co146,
		co147,
		co148,
		co149,
		co1410,

		co241,
		co242,
		co243,
		co244,
		co245,
		co246,
		co247,
		co248,
		co249,
		co2410,

		co341,
		co342,
		co343,
		co344,
		co345,
		co346,
		co347,
		co348,
		co349,
		co3410,

		co441,
		co442,
		co443,
		co444,
		co445,
		co446,
		co447,
		co448,
		co449,
		co4410,

		co541,
		co542,
		co543,
		co544,
		co545,
		co546,
		co547,
		co548,
		co549,
		co5410,

		co641,
		co642,
		co643,
		co644,
		co645,
		co646,
		co647,
		co648,
		co649,
		co6410,

		co741,
		co742,
		co743,
		co744,
		co745,
		co746,
		co747,
		co748,
		co749,
		co7410,

		po4mapco1,
		po4mapco2,
		po4mapco3,
		po4mapco4,
		po4mapco5,
		po4mapco6,
		po4mapco7,

		// ************************ PO:5  ***************************************

		po51,

		competency51,
		competency52,
		competency53,

		indicators51,
		indicators52,
		indicators53,
		indicators54,
		indicators55,
		indicators56,

		weight51,
		weight52,
		weight53,
		weight54,
		weight55,
		weight56,

		co151,
		co152,
		co153,
		co154,
		co155,
		co156,

		co251,
		co252,
		co253,
		co254,
		co255,
		co256,

		co351,
		co352,
		co353,
		co354,
		co355,
		co356,

		co451,
		co452,
		co453,
		co454,
		co455,
		co456,

		co551,
		co552,
		co553,
		co554,
		co555,
		co556,

		co651,
		co652,
		co653,
		co654,
		co655,
		co656,

		co751,
		co752,
		co753,
		co754,
		co755,
		co756,

		po5mapco1,
		po5mapco2,
		po5mapco3,
		po5mapco4,
		po5mapco5,
		po5mapco6,
		po5mapco7,

		// ************************ PO:6  ***************************************

		po61,

		competency61,
		competency62,

		indicators61,
		indicators62,

		weight61,
		weight62,

		co161,
		co162,

		co261,
		co262,

		co361,
		co362,

		co461,
		co462,

		co561,
		co562,

		co661,
		co662,

		co761,
		co762,

		po6mapco1,
		po6mapco2,
		po6mapco3,
		po6mapco4,
		po6mapco5,
		po6mapco6,
		po6mapco7,
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

		po1mapco1,
		po1mapco2,
		po1mapco3,
		po1mapco4,
		po1mapco5,
		po1mapco6,
		po1mapco7,

		year,
		dept,
		sem,
		subject,

		// *********************** PO:2 **************************
		po21,

		competency21,
		competency22,
		competency23,
		competency24,

		indicators21,
		indicators22,
		indicators23,
		indicators24,
		indicators25,
		indicators26,
		indicators27,
		indicators28,
		indicators29,
		indicators210,
		indicators211,
		indicators212,
		indicators213,

		weight21,
		weight22,
		weight23,
		weight24,
		weight25,
		weight26,
		weight27,
		weight28,
		weight29,
		weight210,
		weight211,
		weight212,
		weight213,

		co121,
		co122,
		co123,
		co124,
		co125,
		co126,
		co127,
		co128,
		co129,
		co1210,
		co1211,
		co1212,
		co1213,

		co221,
		co222,
		co223,
		co224,
		co225,
		co226,
		co227,
		co228,
		co229,
		co2210,
		co2211,
		co2212,
		co2213,

		co321,
		co322,
		co323,
		co324,
		co325,
		co326,
		co327,
		co328,
		co329,
		co3210,
		co3211,
		co3212,
		co3213,

		co421,
		co422,
		co423,
		co424,
		co425,
		co426,
		co427,
		co428,
		co429,
		co4210,
		co4211,
		co4212,
		co4213,

		co521,
		co522,
		co523,
		co524,
		co525,
		co526,
		co527,
		co528,
		co529,
		co5210,
		co5211,
		co5212,
		co5213,

		co621,
		co622,
		co623,
		co624,
		co625,
		co626,
		co627,
		co628,
		co629,
		co6210,
		co6211,
		co6212,
		co6213,

		co721,
		co722,
		co723,
		co724,
		co725,
		co726,
		co727,
		co728,
		co729,
		co7210,
		co7211,
		co7212,
		co7213,

		po2mapco1,
		po2mapco2,
		po2mapco3,
		po2mapco4,
		po2mapco5,
		po2mapco6,
		po2mapco7,

		// ************************ PO:3  ***************************************

		po31,

		competency31,
		competency32,
		competency33,
		competency34,

		indicators31,
		indicators32,
		indicators33,
		indicators34,
		indicators35,
		indicators36,
		indicators37,
		indicators38,
		indicators39,
		indicators310,
		indicators311,
		indicators312,
		indicators313,

		weight31,
		weight32,
		weight33,
		weight34,
		weight35,
		weight36,
		weight37,
		weight38,
		weight39,
		weight310,
		weight311,
		weight312,
		weight313,

		co131,
		co132,
		co133,
		co134,
		co135,
		co136,
		co137,
		co138,
		co139,
		co1310,
		co1311,
		co1312,
		co1313,

		co231,
		co232,
		co233,
		co234,
		co235,
		co236,
		co237,
		co238,
		co239,
		co2310,
		co2311,
		co2312,
		co2313,

		co331,
		co332,
		co333,
		co334,
		co335,
		co336,
		co337,
		co338,
		co339,
		co3310,
		co3311,
		co3312,
		co3313,

		co431,
		co432,
		co433,
		co434,
		co435,
		co436,
		co437,
		co438,
		co439,
		co4310,
		co4311,
		co4312,
		co4313,

		co531,
		co532,
		co533,
		co534,
		co535,
		co536,
		co537,
		co538,
		co539,
		co5310,
		co5311,
		co5312,
		co5313,

		co631,
		co632,
		co633,
		co634,
		co635,
		co636,
		co637,
		co638,
		co639,
		co6310,
		co6311,
		co6312,
		co6313,

		co731,
		co732,
		co733,
		co734,
		co735,
		co736,
		co737,
		co738,
		co739,
		co7310,
		co7311,
		co7312,
		co7313,

		po3mapco1,
		po3mapco2,
		po3mapco3,
		po3mapco4,
		po3mapco5,
		po3mapco6,
		po3mapco7,

		// ************************ PO:4  ***************************************

		po41,

		competency41,
		competency42,
		competency43,

		indicators41,
		indicators42,
		indicators43,
		indicators44,
		indicators45,
		indicators46,
		indicators47,
		indicators48,
		indicators49,
		indicators410,

		weight41,
		weight42,
		weight43,
		weight44,
		weight45,
		weight46,
		weight47,
		weight48,
		weight49,
		weight410,

		co141,
		co142,
		co143,
		co144,
		co145,
		co146,
		co147,
		co148,
		co149,
		co1410,

		co241,
		co242,
		co243,
		co244,
		co245,
		co246,
		co247,
		co248,
		co249,
		co2410,

		co341,
		co342,
		co343,
		co344,
		co345,
		co346,
		co347,
		co348,
		co349,
		co3410,

		co441,
		co442,
		co443,
		co444,
		co445,
		co446,
		co447,
		co448,
		co449,
		co4410,

		co541,
		co542,
		co543,
		co544,
		co545,
		co546,
		co547,
		co548,
		co549,
		co5410,

		co641,
		co642,
		co643,
		co644,
		co645,
		co646,
		co647,
		co648,
		co649,
		co6410,

		co741,
		co742,
		co743,
		co744,
		co745,
		co746,
		co747,
		co748,
		co749,
		co7410,

		po4mapco1,
		po4mapco2,
		po4mapco3,
		po4mapco4,
		po4mapco5,
		po4mapco6,
		po4mapco7,

		// ************************ PO:5  ***************************************

		po51,

		competency51,
		competency52,
		competency53,

		indicators51,
		indicators52,
		indicators53,
		indicators54,
		indicators55,
		indicators56,

		weight51,
		weight52,
		weight53,
		weight54,
		weight55,
		weight56,

		co151,
		co152,
		co153,
		co154,
		co155,
		co156,

		co251,
		co252,
		co253,
		co254,
		co255,
		co256,

		co351,
		co352,
		co353,
		co354,
		co355,
		co356,

		co451,
		co452,
		co453,
		co454,
		co455,
		co456,

		co551,
		co552,
		co553,
		co554,
		co555,
		co556,

		co651,
		co652,
		co653,
		co654,
		co655,
		co656,

		co751,
		co752,
		co753,
		co754,
		co755,
		co756,

		po5mapco1,
		po5mapco2,
		po5mapco3,
		po5mapco4,
		po5mapco5,
		po5mapco6,
		po5mapco7,

		// ************************ PO:6  ***************************************

		po61,

		competency61,
		competency62,

		indicators61,
		indicators62,

		weight61,
		weight62,

		co161,
		co162,

		co261,
		co262,

		co361,
		co362,

		co461,
		co462,

		co561,
		co562,

		co661,
		co662,

		co761,
		co762,

		po6mapco1,
		po6mapco2,
		po6mapco3,
		po6mapco4,
		po6mapco5,
		po6mapco6,
		po6mapco7,
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
