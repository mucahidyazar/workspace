import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/consoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";

// Create an object that satisfied the 'DataReader' interface
// const csvFileReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();
// matchReader.matches

const summary = Summary.winsAnallysisWithHtmlReport("Man United");

summary.buildAndPrintReport(matchReader.matches);
