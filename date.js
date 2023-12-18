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
    bsDay += 30;
    --bsMonth;
    bsDay -= 17;
  }

  if (bsMonth > 8) {
    bsMonth -= 8;
  } else {
    bsMonth += 12;
    --bsYear;
    bsMonth -= 8;
  }

  bsYear -= 56;

  // Display the converted date in the resultAD div
  resultAD.textContent = `Converted AD Date: ${bsYear}-${bsMonth}-${bsDay}`;
  // Clear the resultBS div
  resultBS.textContent = "";
}

function convertToBS() {
  let adDate = inputDate.value;
  let [adYear, adMonth, adDay] = adDate.split("-").map(Number);

  if (adDay < 13) {
    adDay += 17;
  } else {
    adDay -= 13;
    ++adMonth;
  }
  if (adMonth < 4) {
    adMonth += 8;
  } else {
    adMonth -= 4;
    ++adYear;
  }
  adYear += 56;

  // Display the converted date in the resultBS div
  resultBS.textContent = `Converted BS Date: ${adYear}-${adMonth}-${adDay}`;
  // Clear the resultAD div
  resultAD.textContent = "";
}
