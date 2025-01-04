import type { NextApiRequest, NextApiResponse } from "next";
import { TypeCountryDetails } from "@/app/lib/types";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { country } = req.query;

  const response = await fetch("/data.json");
  try {
    if (!response.ok) {
      return res.status(500).json({ message: "Erro ao buscar dados" });
    }
    const data: TypeCountryDetails[] = await response.json();
    const filteredData = data.find((item) => item.name === country);

    if (!filteredData) {
      return res.status(404).json({ message: "País não encontrado" });
    }

    return res.status(200).json(filteredData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}
