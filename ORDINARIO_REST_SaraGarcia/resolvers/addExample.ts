

import { Request, Response } from "npm:express@4.18.2";
import { Example } from "../types.ts";


const addExample = async (req: Request<{}, {}, {}, {}>, res: Response<Example | { error: unknown }>) => {
  try {
    //coger body
    //ver si falta alguno

    //si ya existe

    //hacer nuevo

    //salvarlo


  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addExample;