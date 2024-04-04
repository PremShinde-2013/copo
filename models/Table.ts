// models/Table.ts

import mongoose, { Schema, Document } from "mongoose";

export interface TableInterface extends Document {
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
});

const Table =
	mongoose.models.Table || mongoose.model<TableInterface>("Table", TableSchema);

export default Table;
