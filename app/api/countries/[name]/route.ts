import { NextApiResponse } from "next";
import { fetchData } from "@/app/lib/data";
import { TypeCountryDetails } from "@/app/lib/types";
export async function GET(
  res: NextApiResponse,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;

  const data: Array<TypeCountryDetails> = await fetchData();

  const countryByName = data.filter((country) => country.name === name);

  return new Response(JSON.stringify(countryByName), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
