import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@8.0.1";

//imports-----

//----------------------------------

// Importación de función 'load' de Deno para cargar variables de entorno.
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();

// Variables de entorno.
const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL"); //1-> busca en env /2-> archivo del sistema
const PORT = env.PORT || Deno.env.get("PORT") || 3050;


if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}
if (!PORT) {
  console.log("Port found");
  Deno.exit(1);
}

await mongoose.connect(MONGO_URL);
const app = express();
app.use(express.json());
app
 
  //endpoints---
  
  //------------

app.listen(PORT, () => {
  console.log("Server listening on port 3050");
});

function post(arg0: string,addInvoice: (req: Request,res: Response) => Promise<void>) {
  throw new Error("Function not implemented.");
}
