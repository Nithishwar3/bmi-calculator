function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);
  const resultDiv = document.getElementById("result");

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultDiv.innerHTML = `<p>Please enter valid height and weight.</p>`;
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let category = "";
  let categoryClass = "";

  if (bmi < 18.5) {
    category = "Underweight";
    categoryClass = "underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
    categoryClass = "normal";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    categoryClass = "overweight";
  } else {
    category = "Obese";
    categoryClass = "obese";
  }

  resultDiv.innerHTML = `
    <p>Your BMI is <strong>${bmi}</strong></p>
    <span class="category ${categoryClass}">${category}</span>
  `;
}
