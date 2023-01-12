"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// Create an object that satisfied the 'DataReader' interface
// const csvFileReader = new CsvFileReader("football.csv");
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
// matchReader.matches
var summary = Summary_1.Summary.winsAnallysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
