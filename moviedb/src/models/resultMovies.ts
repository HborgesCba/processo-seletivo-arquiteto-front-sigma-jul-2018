import { PopularMovie } from "./popularMovie";

export interface ResultMovies {
  page?:          number;
  total_results?: number;
  total_pages?:   number;
  results?:       PopularMovie[];
}
