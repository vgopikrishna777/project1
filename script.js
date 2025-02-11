document.getElementById("metric-form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form inputs
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const heightUnit = document.getElementById("height-unit").value;
  const weightUnit = document.getElementById("weight-unit").value;
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const activityLevel = document.getElementById("activity-level").value;

  // Calculate BMI
  const bmi = calculateBMI(height, weight, heightUnit, weightUnit);

  // Calculate water content
  const waterContent = calculateWaterContent(weight);

  // Calculate body fat percentage (assuming a basic formula)
  const bodyFatPercentage = calculateBodyFatPercentage(age, gender);

  // Calculate muscle weight
  const muscleWeight = calculateMuscleWeight(weight, bodyFatPercentage);

  // Calculate fat content
  const fatContent = calculateFatContent(weight, bodyFatPercentage);

  // Assess health status
  const healthStatus = assessHealthStatus(bmi, waterContent, muscleWeight, fatContent);




  // Redirect to results page with parameters
  redirectToResults(bmi, waterContent, muscleWeight, fatContent, healthStatus,heightUnit,weightUnit);
});

// Function to calculate BMI
function calculateBMI(height, weight, heightUnit, weightUnit) {
  if (heightUnit === 'in') {
      height = height * 2.54; // convert inches to cm
  }
  if (weightUnit === 'lb') {
      weight = weight * 0.453592; // convert pounds to kg
  }
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi.toFixed(2);
}

// Function to calculate water content
function calculateWaterContent(weight) {
  const waterContent = weight * 0.55; // assuming water content is 55% of body weight
  return waterContent.toFixed(2);
}

// Function to calculate body fat percentage
function calculateBodyFatPercentage(age, gender) {
  // Basic formula for body fat percentage estimation
  // For simplicity, we assume different constants for male and female
  if (gender === 'male') {
      return 10 + 0.25 * age; // Example formula for males
  } else {
      return 20 + 0.25 * age; // Example formula for females
  }
}

// Function to calculate muscle weight
function calculateMuscleWeight(weight, bodyFatPercentage) {
  const muscleWeight = weight * (1 - bodyFatPercentage / 100);
  return muscleWeight.toFixed(2);
}

// Function to calculate fat content
function calculateFatContent(weight, bodyFatPercentage) {
  const fatContent = weight * (bodyFatPercentage / 100);
  return fatContent.toFixed(2);
}

// Function to assess health status
function assessHealthStatus(bmi, waterContent, muscleWeight, fatContent) {
  let healthStatus = "";
  if (bmi < 18.5) {
      healthStatus += "Underweight. ";
  } else if (bmi < 25) {
      healthStatus += "Normal weight. ";
  } else {
      healthStatus += "Overweight. ";
  }
  if (waterContent < 50) {
      healthStatus += "Low water content. ";
  }
  if(waterContent>65)
    {
      healthStatus+="Stable water content";
    }
  if (muscleWeight < 30) {
      healthStatus += "Low muscle mass. ";
  }
  if (fatContent > 25) {
      healthStatus += "High fat content. ";
  }
  if(fatContent==18)
    {
      healthStatus+="Stable fat content";
    }
  return healthStatus.trim(); // Trim to remove any leading/trailing whitespace
}

// Function to redirect to results page with parameters
function redirectToResults(bmi, waterContent, muscleWeight, fatContent, healthStatus, heightUnit, weightUnit) {
  const params = new URLSearchParams({
      bmi: bmi,
      waterContent: waterContent,
      muscleWeight: muscleWeight,
      fatContent: fatContent,
      healthStatus: healthStatus,
      heightUnit:heightUnit,
      weightUnit:weightUnit
  });
  window.location.href = 'results.html?' + params.toString();
}
