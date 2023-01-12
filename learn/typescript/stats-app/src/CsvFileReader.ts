import fs from "fs";

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        //utf-8 ile export etmek istiyoruz anlaminda
        //Eger encoding olmasaydi buffer seklinde donecekti bu reading islemi bize
        encoding: "utf-8"
      })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}
