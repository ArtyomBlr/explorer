import { Currency } from "./currency.model";
import { Dictionary } from "./dictionary.model";
import { Image } from "./image.model";

export interface Country {
  name: {
    common: string;
  };
  flags: Image;
  fifa: string;
  capital?: string[];
  currencies: Dictionary<Currency>;
  population: number;
  cca3: string;
}
