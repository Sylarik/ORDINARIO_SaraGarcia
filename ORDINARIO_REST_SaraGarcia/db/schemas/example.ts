import mongoose from "npm:mongoose@8.0.1";

//IMPORTS
import { Example } from "../../types.ts";
//MIDDLEWARE
import { examplePost } from "../middlewares/middExample.ts";

const Schema = mongoose.Schema;

const exampleSchema = new Schema(
  {
    
    
  },
  { timestamps: true }
);

//validaciones

//middleware
exampleSchema.post("save", examplePost)


export type ExampleModel = mongoose.Document & Omit<Example, "id">;

export default mongoose.model<ExampleModel>("Example", exampleSchema);