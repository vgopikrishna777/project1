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
    const waterContent = weight * 0.55;
    return waterContent.toFixed(2);
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
    if (muscleWeight < 30) {
        healthStatus += "Low muscle mass. ";
    }
    if (fatContent > 25) {
        healthStatus += "High fat content. ";
    }
    return healthStatus;
}
