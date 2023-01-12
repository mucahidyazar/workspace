const gradeCalc = (score, total) => {
  if (typeof score === "number" && typeof total === "number") {
    const feat = (score / total) * 100;
    let letterGrade = "";

    if (feat >= 0 && feat <= 59) {
      letterGrade = "F";
    } else if (feat >= 60 && feat <= 69) {
      letterGrade = "D";
    } else if (feat >= 70 && feat <= 79) {
      letterGrade = "C";
    } else if (feat >= 80 && feat <= 89) {
      letterGrade = "B";
    } else if (feat >= 90 && feat <= 100) {
      letterGrade = "A";
    }

    console.log(`You got a ${letterGrade} (${Math.floor(feat)}%)`);
  } else {
    throw Error("Please provide numbers only");
  }
};

try {
  const result = gradeCalc(95, 100);
  console.log(result);
} catch (e) {
  console.error(e.message);
}
