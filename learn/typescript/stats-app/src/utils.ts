export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2018
  const dateParts = dateString
    .split("/") //['28', '10', '2018']
    .map((value: string): number => parseInt(value));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // Aylar ocakdan basliyor ve Ocak 0 oldugu icin ay icin gelen degerleri -1 yaparak tum degerleri 1 tane dusuruyoruz
};
