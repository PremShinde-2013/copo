import { useState, useEffect } from "react";
import toast from "react-hot-toast";

interface TableData {
	_id: string;

	// Define your table data structure here
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

	po1mapco1: number;
	po1mapco2: number;
	po1mapco3: number;
	po1mapco4: number;
	po1mapco5: number;
	po1mapco6: number;
	po1mapco7: number;

	year: string;
	dept: string;
	sem: string;
	subject: string;

	// **************** PO:2      ****************************

	po21: string;

	competency21: string;
	competency22: string;
	competency23: string;
	competency24: string;

	indicators21: string;
	indicators22: string;
	indicators23: string;
	indicators24: string;
	indicators25: string;
	indicators26: string;
	indicators27: string;
	indicators28: string;
	indicators29: string;
	indicators210: string;
	indicators211: string;
	indicators212: string;
	indicators213: string;

	weight21: string;
	weight22: string;
	weight23: string;
	weight24: string;
	weight25: string;
	weight26: string;
	weight27: string;
	weight28: string;
	weight29: string;
	weight210: string;
	weight211: string;
	weight212: string;
	weight213: string;

	co121: number;
	co122: number;
	co123: number;
	co124: number;
	co125: number;
	co221: number;
	co222: number;
	co223: number;
	co224: number;
	co225: number;
	co321: number;
	co322: number;
	co323: number;
	co324: number;
	co325: number;
	co421: number;
	co422: number;
	co423: number;
	co424: number;
	co425: number;
	co521: number;
	co522: number;
	co523: number;
	co524: number;
	co525: number;
	co621: number;
	co622: number;
	co623: number;
	co624: number;
	co625: number;
	co721: number;
	co722: number;
	co723: number;
	co724: number;
	co725: number;

	po2mapco1: number;
	po2mapco2: number;
	po2mapco3: number;
	po2mapco4: number;
	po2mapco5: number;
	po2mapco6: number;
	po2mapco7: number;
	// ************************ PO:3  ***************************************

	po31: string;

	competency31: string;
	competency32: string;
	competency33: string;
	competency34: string;

	indicators31: string;
	indicators32: string;
	indicators33: string;
	indicators34: string;
	indicators35: string;
	indicators36: string;
	indicators37: string;
	indicators38: string;
	indicators39: string;
	indicators310: string;
	indicators311: string;
	indicators312: string;
	indicators313: string;

	weight31: string;
	weight32: string;
	weight33: string;
	weight34: string;
	weight35: string;
	weight36: string;
	weight37: string;
	weight38: string;
	weight39: string;
	weight310: string;
	weight311: string;
	weight312: string;
	weight313: string;

	co131: number;
	co132: number;
	co133: number;
	co134: number;
	co135: number;
	co136: number;
	co137: number;
	co138: number;
	co139: number;
	co1310: number;
	co1311: number;
	co1312: number;
	co1313: number;

	co231: number;
	co232: number;
	co233: number;
	co234: number;
	co235: number;
	co236: number;
	co237: number;
	co238: number;
	co239: number;
	co2310: number;
	co2311: number;
	co2312: number;
	co2313: number;

	co331: number;
	co332: number;
	co333: number;
	co334: number;
	co335: number;
	co336: number;
	co337: number;
	co338: number;
	co339: number;
	co3310: number;
	co3311: number;
	co3312: number;
	co3313: number;

	co431: number;
	co432: number;
	co433: number;
	co434: number;
	co435: number;
	co436: number;
	co437: number;
	co438: number;
	co439: number;
	co4310: number;
	co4311: number;
	co4312: number;
	co4313: number;

	co531: number;
	co532: number;
	co533: number;
	co534: number;
	co535: number;
	co536: number;
	co537: number;
	co538: number;
	co539: number;
	co5310: number;
	co5311: number;
	co5312: number;
	co5313: number;

	co631: number;
	co632: number;
	co633: number;
	co634: number;
	co635: number;
	co636: number;
	co637: number;
	co638: number;
	co639: number;
	co6310: number;
	co6311: number;
	co6312: number;
	co6313: number;

	co731: number;
	co732: number;
	co733: number;
	co734: number;
	co735: number;
	co736: number;
	co737: number;
	co738: number;
	co739: number;
	co7310: number;
	co7311: number;
	co7312: number;
	co7313: number;

	po3mapco1: number;
	po3mapco2: number;
	po3mapco3: number;
	po3mapco4: number;
	po3mapco5: number;
	po3mapco6: number;
	po3mapco7: number;

	// ************************ PO:4  ***************************************

	po41: string;

	competency41: string;
	competency42: string;
	competency43: string;

	indicators41: string;
	indicators42: string;
	indicators43: string;
	indicators44: string;
	indicators45: string;
	indicators46: string;
	indicators47: string;
	indicators48: string;
	indicators49: string;
	indicators410: string;

	weight41: string;
	weight42: string;
	weight43: string;
	weight44: string;
	weight45: string;
	weight46: string;
	weight47: string;
	weight48: string;
	weight49: string;
	weight410: string;

	co141: number;
	co142: number;
	co143: number;
	co144: number;
	co145: number;
	co146: number;
	co147: number;
	co148: number;
	co149: number;
	co1410: number;

	co241: number;
	co242: number;
	co243: number;
	co244: number;
	co245: number;
	co246: number;
	co247: number;
	co248: number;
	co249: number;
	co2410: number;

	co341: number;
	co342: number;
	co343: number;
	co344: number;
	co345: number;
	co346: number;
	co347: number;
	co348: number;
	co349: number;
	co3410: number;

	co441: number;
	co442: number;
	co443: number;
	co444: number;
	co445: number;
	co446: number;
	co447: number;
	co448: number;
	co449: number;
	co4410: number;

	co541: number;
	co542: number;
	co543: number;
	co544: number;
	co545: number;
	co546: number;
	co547: number;
	co548: number;
	co549: number;
	co5410: number;

	co641: number;
	co642: number;
	co643: number;
	co644: number;
	co645: number;
	co646: number;
	co647: number;
	co648: number;
	co649: number;
	co6410: number;

	co741: number;
	co742: number;
	co743: number;
	co744: number;
	co745: number;
	co746: number;
	co747: number;
	co748: number;
	co749: number;
	co7410: number;

	po4mapco1: number;
	po4mapco2: number;
	po4mapco3: number;
	po4mapco4: number;
	po4mapco5: number;
	po4mapco6: number;
	po4mapco7: number;

	// ************************ PO:5  ***************************************

	po51: string;

	competency51: string;
	competency52: string;
	competency53: string;

	indicators51: string;
	indicators52: string;
	indicators53: string;
	indicators54: string;
	indicators55: string;
	indicators56: string;

	weight51: string;
	weight52: string;
	weight53: string;
	weight54: string;
	weight55: string;
	weight56: string;

	co151: number;
	co152: number;
	co153: number;
	co154: number;
	co155: number;
	co156: number;

	co251: number;
	co252: number;
	co253: number;
	co254: number;
	co255: number;
	co256: number;

	co351: number;
	co352: number;
	co353: number;
	co354: number;
	co355: number;
	co356: number;

	co451: number;
	co452: number;
	co453: number;
	co454: number;
	co455: number;
	co456: number;

	co551: number;
	co552: number;
	co553: number;
	co554: number;
	co555: number;
	co556: number;

	co651: number;
	co652: number;
	co653: number;
	co654: number;
	co655: number;
	co656: number;

	co751: number;
	co752: number;
	co753: number;
	co754: number;
	co755: number;
	co756: number;

	po5mapco1: number;
	po5mapco2: number;
	po5mapco3: number;
	po5mapco4: number;
	po5mapco5: number;
	po5mapco6: number;
	po5mapco7: number;

	// ************************ PO:6  ***************************************

	po61: string;

	competency61: string;
	competency62: string;

	indicators61: string;
	indicators62: string;

	weight61: string;
	weight62: string;

	co161: number;
	co162: number;

	co261: number;
	co262: number;

	co361: number;
	co362: number;

	co461: number;
	co462: number;

	co561: number;
	co562: number;

	co661: number;
	co662: number;

	co761: number;
	co762: number;

	po6mapco1: number;
	po6mapco2: number;
	po6mapco3: number;
	po6mapco4: number;
	po6mapco5: number;
	po6mapco6: number;
	po6mapco7: number;

	// ************************ PO:7  ***************************************

	po71: string;

	competency71: string;
	competency72: string;

	indicators71: string;
	indicators72: string;
	indicators73: string;
	indicators74: string;

	weight71: string;
	weight72: string;
	weight73: string;
	weight74: string;

	co171: number;
	co172: number;
	co173: number;
	co174: number;

	co271: number;
	co272: number;
	co273: number;
	co274: number;

	co371: number;
	co372: number;
	co373: number;
	co374: number;

	co471: number;
	co472: number;
	co473: number;
	co474: number;

	co571: number;
	co572: number;
	co573: number;
	co574: number;

	co671: number;
	co672: number;
	co673: number;
	co674: number;

	co771: number;
	co772: number;
	co773: number;
	co774: number;

	po7mapco1: number;
	po7mapco2: number;
	po7mapco3: number;
	po7mapco4: number;
	po7mapco5: number;
	po7mapco6: number;
	po7mapco7: number;

	// ************************ PO:8  ***************************************

	po81: string;

	competency81: string;
	competency82: string;

	indicators81: string;
	indicators82: string;
	indicators83: string;

	weight81: string;
	weight82: string;
	weight83: string;

	co181: number;
	co182: number;
	co183: number;

	co281: number;
	co282: number;
	co283: number;

	co381: number;
	co382: number;
	co383: number;

	co481: number;
	co482: number;
	co483: number;

	co581: number;
	co582: number;
	co583: number;

	co681: number;
	co682: number;
	co683: number;

	co781: number;
	co782: number;
	co783: number;

	po8mapco1: number;
	po8mapco2: number;
	po8mapco3: number;
	po8mapco4: number;
	po8mapco5: number;
	po8mapco6: number;
	po8mapco7: number;

	// ************************ PO:9  ***************************************

	po91: string;

	competency91: string;
	competency92: string;
	competency93: string;

	indicators91: string;
	indicators92: string;
	indicators93: string;
	indicators94: string;
	indicators95: string;
	indicators96: string;
	indicators97: string;

	weight91: string;
	weight92: string;
	weight93: string;
	weight94: string;
	weight95: string;
	weight96: string;
	weight97: string;

	co191: number;
	co192: number;
	co193: number;
	co194: number;
	co195: number;
	co196: number;
	co197: number;

	co291: number;
	co292: number;
	co293: number;
	co294: number;
	co295: number;
	co296: number;
	co297: number;

	co391: number;
	co392: number;
	co393: number;
	co394: number;
	co395: number;
	co396: number;
	co397: number;

	co491: number;
	co492: number;
	co493: number;
	co494: number;
	co495: number;
	co496: number;
	co497: number;

	co591: number;
	co592: number;
	co593: number;
	co594: number;
	co595: number;
	co596: number;
	co597: number;

	co691: number;
	co692: number;
	co693: number;
	co694: number;
	co695: number;
	co696: number;
	co697: number;

	co791: number;
	co792: number;
	co793: number;
	co794: number;
	co795: number;
	co796: number;
	co797: number;

	po9mapco1: number;
	po9mapco2: number;
	po9mapco3: number;
	po9mapco4: number;
	po9mapco5: number;
	po9mapco6: number;
	po9mapco7: number;

	// ************************ PO: 10  ***************************************

	po101: string;

	competency101: string;
	competency102: string;
	competency103: string;

	indicators101: string;
	indicators102: string;
	indicators103: string;
	indicators104: string;
	indicators105: string;
	indicators106: string;
	indicators107: string;

	weight101: string;
	weight102: string;
	weight103: string;
	weight104: string;
	weight105: string;
	weight106: string;
	weight107: string;

	co1101: number;
	co1102: number;
	co1103: number;
	co1104: number;
	co1105: number;
	co1106: number;
	co1107: number;

	co2101: number;
	co2102: number;
	co2103: number;
	co2104: number;
	co2105: number;
	co2106: number;
	co2107: number;

	co3101: number;
	co3102: number;
	co3103: number;
	co3104: number;
	co3105: number;
	co3106: number;
	co3107: number;

	co4101: number;
	co4102: number;
	co4103: number;
	co4104: number;
	co4105: number;
	co4106: number;
	co4107: number;

	co5101: number;
	co5102: number;
	co5103: number;
	co5104: number;
	co5105: number;
	co5106: number;
	co5107: number;

	co6101: number;
	co6102: number;
	co6103: number;
	co6104: number;
	co6105: number;
	co6106: number;
	co6107: number;

	co7101: number;
	co7102: number;
	co7103: number;
	co7104: number;
	co7105: number;
	co7106: number;
	co7107: number;

	po10mapco1: number;
	po10mapco2: number;
	po10mapco3: number;
	po10mapco4: number;
	po10mapco5: number;
	po10mapco6: number;
	po10mapco7: number;

	// ************************ PO: 10  ***************************************

	po111: string;

	competency111: string;
	competency112: string;
	competency113: string;

	indicators111: string;
	indicators112: string;
	indicators113: string;
	indicators114: string;
	indicators115: string;

	weight111: string;
	weight112: string;
	weight113: string;
	weight114: string;
	weight115: string;

	co1111: number;
	co1112: number;
	co1113: number;
	co1114: number;
	co1115: number;

	co2111: number;
	co2112: number;
	co2113: number;
	co2114: number;
	co2115: number;

	co3111: number;
	co3112: number;
	co3113: number;
	co3114: number;
	co3115: number;

	co4111: number;
	co4112: number;
	co4113: number;
	co4114: number;
	co4115: number;

	co5111: number;
	co5112: number;
	co5113: number;
	co5114: number;
	co5115: number;

	co6111: number;
	co6112: number;
	co6113: number;
	co6114: number;
	co6115: number;

	co7111: number;
	co7112: number;
	co7113: number;
	co7114: number;
	co7115: number;

	po11mapco1: number;
	po11mapco2: number;
	po11mapco3: number;
	po11mapco4: number;
	po11mapco5: number;
	po11mapco6: number;
	po11mapco7: number;

	// ************************ PO: 12  ***************************************

	po121: string;

	competency121: string;
	competency122: string;
	competency123: string;

	indicators121: string;
	indicators122: string;
	indicators123: string;
	indicators124: string;
	indicators125: string;
	indicators126: string;

	weight121: string;
	weight122: string;
	weight123: string;
	weight124: string;
	weight125: string;
	weight126: string;

	co1121: number;
	co1122: number;
	co1123: number;
	co1124: number;
	co1125: number;
	co1126: number;

	co2121: number;
	co2122: number;
	co2123: number;
	co2124: number;
	co2125: number;
	co2126: number;

	co3121: number;
	co3122: number;
	co3123: number;
	co3124: number;
	co3125: number;
	co3126: number;

	co4121: number;
	co4122: number;
	co4123: number;
	co4124: number;
	co4125: number;
	co4126: number;

	co5121: number;
	co5122: number;
	co5123: number;
	co5124: number;
	co5125: number;
	co5126: number;

	co6121: number;
	co6122: number;
	co6123: number;
	co6124: number;
	co6125: number;
	co6126: number;

	co7121: number;
	co7122: number;
	co7123: number;
	co7124: number;
	co7125: number;
	co7126: number;

	po12mapco1: number;
	po12mapco2: number;
	po12mapco3: number;
	po12mapco4: number;
	po12mapco5: number;
	po12mapco6: number;
	po12mapco7: number;

	// ******************************* PSO:1 *****************************

	pso11: string;

	psocompetency11: string;
	psocompetency12: string;

	psoindicators11: string;
	psoindicators12: string;
	psoindicators13: string;
	psoindicators14: string;
	psoindicators15: string;

	psoweight11: number;
	psoweight12: number;
	psoweight13: number;
	psoweight14: number;
	psoweight15: number;

	psoco111: number;
	psoco112: number;
	psoco113: number;
	psoco114: number;
	psoco115: number;

	psoco211: number;
	psoco212: number;
	psoco213: number;
	psoco214: number;
	psoco215: number;

	psoco311: number;
	psoco312: number;
	psoco313: number;
	psoco314: number;
	psoco315: number;

	psoco411: number;
	psoco412: number;
	psoco413: number;
	psoco414: number;
	psoco415: number;

	psoco511: number;
	psoco512: number;
	psoco513: number;
	psoco514: number;
	psoco515: number;

	psoco611: number;
	psoco612: number;
	psoco613: number;
	psoco614: number;
	psoco615: number;

	psoco711: number;
	psoco712: number;
	psoco713: number;
	psoco714: number;
	psoco715: number;

	pso1mapco1: number;
	pso1mapco2: number;
	pso1mapco3: number;
	pso1mapco4: number;
	pso1mapco5: number;
	pso1mapco6: number;
	pso1mapco7: number;

	// ******************************* PSO:2 *****************************

	pso21: string;

	psocompetency21: string;
	psocompetency22: string;

	psoindicators21: string;
	psoindicators22: string;
	psoindicators23: string;
	psoindicators24: string;

	psoweight21: number;
	psoweight22: number;
	psoweight23: number;
	psoweight24: number;

	psoco121: number;
	psoco122: number;
	psoco123: number;
	psoco124: number;

	psoco221: number;
	psoco222: number;
	psoco223: number;
	psoco224: number;

	psoco321: number;
	psoco322: number;
	psoco323: number;
	psoco324: number;

	psoco421: number;
	psoco422: number;
	psoco423: number;
	psoco424: number;

	psoco521: number;
	psoco522: number;
	psoco523: number;
	psoco524: number;

	psoco621: number;
	psoco622: number;
	psoco623: number;
	psoco624: number;

	psoco721: number;
	psoco722: number;
	psoco723: number;
	psoco724: number;

	pso2mapco1: number;
	pso2mapco2: number;
	pso2mapco3: number;
	pso2mapco4: number;
	pso2mapco5: number;
	pso2mapco6: number;
	pso2mapco7: number;

	// ******************************* PSO:3 *****************************

	pso31: string;

	psocompetency31: string;
	psocompetency32: string;

	psoindicators31: string;
	psoindicators32: string;
	psoindicators33: string;
	psoindicators34: string;

	psoweight31: number;
	psoweight32: number;
	psoweight33: number;
	psoweight34: number;

	psoco131: number;
	psoco132: number;
	psoco133: number;
	psoco134: number;

	psoco231: number;
	psoco232: number;
	psoco233: number;
	psoco234: number;

	psoco331: number;
	psoco332: number;
	psoco333: number;
	psoco334: number;

	psoco431: number;
	psoco432: number;
	psoco433: number;
	psoco434: number;

	psoco531: number;
	psoco532: number;
	psoco533: number;
	psoco534: number;

	psoco631: number;
	psoco632: number;
	psoco633: number;
	psoco634: number;

	psoco731: number;
	psoco732: number;
	psoco733: number;
	psoco734: number;

	pso3mapco1: number;
	pso3mapco2: number;
	pso3mapco3: number;
	pso3mapco4: number;
	pso3mapco5: number;
	pso3mapco6: number;
	pso3mapco7: number;
}

interface UseTableDataProps {
	id: string;
}

interface UseTableDataReturn {
	table: TableData | null;
	editedTable: TableData | null;
	loading: boolean;
	error: string | null;
	fetchTableData: () => void;
	handleSaveChanges: () => void;
}

const useTableData = ({ id }: UseTableDataProps): UseTableDataReturn => {
	const [table, setTable] = useState<TableData | null>(null);
	const [editedTable, setEditedTable] = useState<TableData | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

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

	useEffect(() => {
		fetchTableData();
	}, [id]);

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

	return {
		table,
		editedTable,
		loading,
		error,
		fetchTableData,
		handleSaveChanges,
	};
};

export default useTableData;
