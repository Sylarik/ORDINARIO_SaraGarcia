// @deno-types="npm:@types/express@4"
import { Request, Response } from "npm:express@4.18.2";
import { Example } from "../types.ts";

const deleteCliente = async (req: Request<{}, {}, {}, {}>, res: Response<Example | { error: unknown }>) => {
  try {
    //coger parametro
    //coger body de lo que se quiere mod + verificar q esta

    //encontrar por parametro + comprobar si existe

    //update




    
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default deleteCliente;