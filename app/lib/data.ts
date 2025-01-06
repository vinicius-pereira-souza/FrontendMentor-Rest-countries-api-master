import { promises as fs } from "fs";
import path from "path";

export async function fetchData() {
  const filePath = path.resolve(process.cwd(), "public", "json", "data.json");
  const file = await fs.readFile(filePath, "utf-8");
  return JSON.parse(file);
}

export async function fetcher(url: string) {
  const data = await fetch(url);
  return await data.json();
}
