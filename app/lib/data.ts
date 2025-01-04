import { TypeCountryDetails } from "./types";

export async function fetchByCountryName(
  name: string,
): Promise<TypeCountryDetails> {
  const data = await fetch(`data.json/${name}`);
  return await data.json();
}
