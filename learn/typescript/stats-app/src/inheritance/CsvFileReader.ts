import fs from "fs";
import { MatchResult } from "./MatchResult";

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        //utf-8 ile export etmek istiyoruz anlaminda
        //Eger encoding olmasaydi buffer seklinde donecekti bu reading islemi bize
        encoding: "utf-8"
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
