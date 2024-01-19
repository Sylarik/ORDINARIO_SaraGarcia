// @deno-types="npm:@types/express@4"
import { Request, Response } from "npm:express@4.18.2";
import { Example } from "../types.ts";

const getExample = async (req: Request<{}, {}, {}, {}>, res: Response<Example | { error: unknown }>) => {
  try {
    
    //params

    //findOne
    //verificar

    //devolver en send

    
    res.status(200).send();
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getExample;