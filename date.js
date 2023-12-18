const inputDate = document.getElementById("inputDate");
const resultAD = document.getElementById("resultAD");
const resultBS = document.getElementById("resultBS");

function convertDate() {
  const conversionSelector = document.getElementById("conversionSelector");
  const selectedConversion = conversionSelector.value;

  if (selectedConversion === "ADtoBS") {
    convertToBS();
  } else if (selectedConversion === "BStoAD") {
    convertToAD();
  }
}

function convertToAD() {
  let bsDate = inputDate.value;
  let [bsYear, bsMonth, bsDay] = bsDate.split("-").map(Number);

  if (bsDay > 17) {
    bsDay -= 17;
  } else {
    bsDay += 13;
    bsMonth--;
    bsDay -= 17;
  }

  if (bsMonth > 9) { // corrected line
    bsMonth -= 9; // corrected line
  } else {
    bsMonth += 3;
    bsYear--;
    bsMonth += 9;
  }

  bsYear -= 56;

  // Display the converted date in the resultAD div
  resultAD.textContent = `Converted AD Date: ${bsYear}-${bsMonth}-${bsDay}`;
  // Clear the resultBS div
  resultBS.textContent = '';
}

function convertToBS() {
  let adDate = inputDate.value;
  let [adYear, adMonth, adDay] = adDate.split("-").map(Number);

  adYear += 56;

  if (adMonth > 8) {
    adMonth -= 8;
  } else {
    adMonth += 4;
    adYear--;
  }

  if (adDay > 16) {
    adDay -= 16;
  } else {
    adDay += 30;
    adMonth--;
    adDay -= 16;
  }

  if (adMonth < 5) {
    adMonth += 8;
    adYear--;
  }

  // Display the converted date in the resultBS div
  resultBS.textContent = `Converted BS Date: ${adYear}-${adMonth}-${adDay}`;
  // Clear the resultAD div
  resultAD.textContent = '';
}
