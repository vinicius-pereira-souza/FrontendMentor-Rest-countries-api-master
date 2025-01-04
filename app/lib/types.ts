export type TypeCountryDetails = {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  Border: string[];
  flags: { png: string };
  topLevelDomain: string[];
  currencies: Array<{ name: string }>;
  Languages: Array<{ name: string }>;
};

export type TypeCard = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: { svg: string };
};
