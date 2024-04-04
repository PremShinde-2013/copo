// models/Table.ts

import mongoose, { Schema, Document } from "mongoose";

export interface TableInterface extends Document {
	year: string;
	dept: string;
	sem: string;
	subject: string;

	// ******************************* PO:1 *****************************

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

	// ************************ PO:2  ***************************************

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
	co126: number;
	co127: number;
	co128: number;
	co129: number;
	co1210: number;
	co1211: number;
	co1212: number;
	co1213: number;

	co221: number;
	co222: number;
	co223: number;
	co224: number;
	co225: number;
	co226: number;
	co227: number;
	co228: number;
	co229: number;
	co2210: number;
	co2211: number;
	co2212: number;
	co2213: number;

	co321: number;
	co322: number;
	co323: number;
	co324: number;
	co325: number;
	co326: number;
	co327: number;
	co328: number;
	co329: number;
	co3210: number;
	co3211: number;
	co3212: number;
	co3213: number;

	co421: number;
	co422: number;
	co423: number;
	co424: number;
	co425: number;
	co426: number;
	co427: number;
	co428: number;
	co429: number;
	co4210: number;
	co4211: number;
	co4212: number;
	co4213: number;

	co521: number;
	co522: number;
	co523: number;
	co524: number;
	co525: number;
	co526: number;
	co527: number;
	co528: number;
	co529: number;
	co5210: number;
	co5211: number;
	co5212: number;
	co5213: number;

	co621: number;
	co622: number;
	co623: number;
	co624: number;
	co625: number;
	co626: number;
	co627: number;
	co628: number;
	co629: number;
	co6210: number;
	co6211: number;
	co6212: number;
	co6213: number;

	co721: number;
	co722: number;
	co723: number;
	co724: number;
	co725: number;
	co726: number;
	co727: number;
	co728: number;
	co729: number;
	co7210: number;
	co7211: number;
	co7212: number;
	co7213: number;

	po2mapco1: number;
	po2mapco2: number;
	po2mapco3: number;
	po2mapco4: number;
	po2mapco5: number;
	po2mapco6: number;
	po2mapco7: number;
}

const TableSchema = new Schema<TableInterface>({
	po11: { type: String, required: true },
	po12: { type: String, required: true },
	po13: { type: String, required: true },
	po14: { type: String, required: true },
	po15: { type: String, required: true },

	competency11: { type: String, required: true },
	competency12: { type: String, required: true },
	competency13: { type: String, required: true },
	competency14: { type: String, required: true },
	competency15: { type: String, required: true },

	indicators11: { type: String, required: true },
	indicators12: { type: String, required: true },
	indicators13: { type: String, required: true },
	indicators14: { type: String, required: true },
	indicators15: { type: String, required: true },

	weight11: { type: Number, required: true },
	weight12: { type: Number, required: true },
	weight13: { type: Number, required: true },
	weight14: { type: Number, required: true },
	weight15: { type: Number, required: true },

	co111: { type: Number, required: true },
	co112: { type: Number, required: true },
	co113: { type: Number, required: true },
	co114: { type: Number, required: true },
	co115: { type: Number, required: true },

	co211: { type: Number, required: true },
	co212: { type: Number, required: true },
	co213: { type: Number, required: true },
	co214: { type: Number, required: true },
	co215: { type: Number, required: true },

	co311: { type: Number, required: true },
	co312: { type: Number, required: true },
	co313: { type: Number, required: true },
	co314: { type: Number, required: true },
	co315: { type: Number, required: true },

	co411: { type: Number, required: true },
	co412: { type: Number, required: true },
	co413: { type: Number, required: true },
	co414: { type: Number, required: true },
	co415: { type: Number, required: true },

	co511: { type: Number, required: true },
	co512: { type: Number, required: true },
	co513: { type: Number, required: true },
	co514: { type: Number, required: true },
	co515: { type: Number, required: true },

	co611: { type: Number, required: true },
	co612: { type: Number, required: true },
	co613: { type: Number, required: true },
	co614: { type: Number, required: true },
	co615: { type: Number, required: true },

	co711: { type: Number, required: true },
	co712: { type: Number, required: true },
	co713: { type: Number, required: true },
	co714: { type: Number, required: true },
	co715: { type: Number, required: true },

	po1mapco1: { type: Number, required: true },
	po1mapco2: { type: Number, required: true },
	po1mapco3: { type: Number, required: true },
	po1mapco4: { type: Number, required: true },
	po1mapco5: { type: Number, required: true },
	po1mapco6: { type: Number, required: true },
	po1mapco7: { type: Number, required: true },

	year: { type: String, required: true },
	dept: { type: String, required: true },
	sem: { type: String, required: true },
	subject: { type: String, required: true },

	// ************************ PO:2  ***************************************

	po21: { type: String, required: true },

	competency21: { type: String, required: true },
	competency22: { type: String, required: true },
	competency23: { type: String, required: true },
	competency24: { type: String, required: true },

	indicators21: { type: String, required: true },
	indicators22: { type: String, required: true },
	indicators23: { type: String, required: true },
	indicators24: { type: String, required: true },
	indicators25: { type: String, required: true },
	indicators26: { type: String, required: true },
	indicators27: { type: String, required: true },
	indicators28: { type: String, required: true },
	indicators29: { type: String, required: true },
	indicators210: { type: String, required: true },
	indicators211: { type: String, required: true },
	indicators212: { type: String, required: true },
	indicators213: { type: String, required: true },

	weight21: { type: String, required: true },
	weight22: { type: String, required: true },
	weight23: { type: String, required: true },
	weight24: { type: String, required: true },
	weight25: { type: String, required: true },
	weight26: { type: String, required: true },
	weight27: { type: String, required: true },
	weight28: { type: String, required: true },
	weight29: { type: String, required: true },
	weight210: { type: String, required: true },
	weight211: { type: String, required: true },
	weight212: { type: String, required: true },
	weight213: { type: String, required: true },

	co121: { type: Number, required: true },
	co122: { type: Number, required: true },
	co123: { type: Number, required: true },
	co124: { type: Number, required: true },
	co125: { type: Number, required: true },
	co126: { type: Number, required: true },
	co127: { type: Number, required: true },
	co128: { type: Number, required: true },
	co129: { type: Number, required: true },
	co1210: { type: Number, required: true },
	co1211: { type: Number, required: true },
	co1212: { type: Number, required: true },
	co1213: { type: Number, required: true },

	co221: { type: Number, required: true },
	co222: { type: Number, required: true },
	co223: { type: Number, required: true },
	co224: { type: Number, required: true },
	co225: { type: Number, required: true },
	co226: { type: Number, required: true },
	co227: { type: Number, required: true },
	co228: { type: Number, required: true },
	co229: { type: Number, required: true },
	co2210: { type: Number, required: true },
	co2211: { type: Number, required: true },
	co2212: { type: Number, required: true },
	co2213: { type: Number, required: true },

	co321: { type: Number, required: true },
	co322: { type: Number, required: true },
	co323: { type: Number, required: true },
	co324: { type: Number, required: true },
	co325: { type: Number, required: true },
	co326: { type: Number, required: true },
	co327: { type: Number, required: true },
	co328: { type: Number, required: true },
	co329: { type: Number, required: true },
	co3210: { type: Number, required: true },
	co3211: { type: Number, required: true },
	co3212: { type: Number, required: true },
	co3213: { type: Number, required: true },

	co421: { type: Number, required: true },
	co422: { type: Number, required: true },
	co423: { type: Number, required: true },
	co424: { type: Number, required: true },
	co425: { type: Number, required: true },
	co426: { type: Number, required: true },
	co427: { type: Number, required: true },
	co428: { type: Number, required: true },
	co429: { type: Number, required: true },
	co4210: { type: Number, required: true },
	co4211: { type: Number, required: true },
	co4212: { type: Number, required: true },
	co4213: { type: Number, required: true },

	co521: { type: Number, required: true },
	co522: { type: Number, required: true },
	co523: { type: Number, required: true },
	co524: { type: Number, required: true },
	co525: { type: Number, required: true },
	co526: { type: Number, required: true },
	co527: { type: Number, required: true },
	co528: { type: Number, required: true },
	co529: { type: Number, required: true },
	co5210: { type: Number, required: true },
	co5211: { type: Number, required: true },
	co5212: { type: Number, required: true },
	co5213: { type: Number, required: true },

	co621: { type: Number, required: true },
	co622: { type: Number, required: true },
	co623: { type: Number, required: true },
	co624: { type: Number, required: true },
	co625: { type: Number, required: true },
	co626: { type: Number, required: true },
	co627: { type: Number, required: true },
	co628: { type: Number, required: true },
	co629: { type: Number, required: true },
	co6210: { type: Number, required: true },
	co6211: { type: Number, required: true },
	co6212: { type: Number, required: true },
	co6213: { type: Number, required: true },

	co721: { type: Number, required: true },
	co722: { type: Number, required: true },
	co723: { type: Number, required: true },
	co724: { type: Number, required: true },
	co725: { type: Number, required: true },
	co726: { type: Number, required: true },
	co727: { type: Number, required: true },
	co728: { type: Number, required: true },
	co729: { type: Number, required: true },
	co7210: { type: Number, required: true },
	co7211: { type: Number, required: true },
	co7212: { type: Number, required: true },
	co7213: { type: Number, required: true },

	po2mapco1: { type: Number, required: true },
	po2mapco2: { type: Number, required: true },
	po2mapco3: { type: Number, required: true },
	po2mapco4: { type: Number, required: true },
	po2mapco5: { type: Number, required: true },
	po2mapco6: { type: Number, required: true },
	po2mapco7: { type: Number, required: true },
});

const Table =
	mongoose.models.Table || mongoose.model<TableInterface>("Table", TableSchema);

export default Table;
