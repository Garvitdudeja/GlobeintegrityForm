export const estimateCoverageAndValue = (formData) => {
    const age = calculateAge(formData.dob);
    const bmi = parseFloat(formData.weight) / Math.pow(parseFloat(formData.height) / 100, 2);
    const riskyActivities = formData.activities.length > 0;
    const smoker = formData.substanceUse.includes('Tobacco') || formData.substanceUse.includes('Marijuana');
    const hiv = formData.hivStatus === 'Yes';
    const monthlyContribution = parseFloat(formData.monthlyContribution);
    const personalIncome = parseFloat(formData.personalIncome);
  
    let baseCoverage = monthlyContribution * 12 * 20; // e.g., 20 years worth of contributions
    let baseValue = baseCoverage * 0.5;
  
    // Adjust based on age
    if (age > 50) {
      baseCoverage *= 0.85;
      baseValue *= 0.85;
    } else if (age < 30) {
      baseCoverage *= 1.1;
      baseValue *= 1.1;
    }
  
    // Adjust for smoker
    if (smoker) {
      baseCoverage *= 0.8;
      baseValue *= 0.75;
    }
  
    // Adjust for risky activities
    if (riskyActivities) {
      baseCoverage *= 0.85;
      baseValue *= 0.9;
    }
  
    // Adjust for HIV
    if (hiv) {
      baseCoverage *= 0.5;
      baseValue *= 0.4;
    }
  
    // Adjust for BMI
    if (bmi < 18.5 || bmi > 30) {
      baseCoverage *= 0.9;
      baseValue *= 0.9;
    }
  
    // Cap based on income
    const maxCoverage = personalIncome * 20;
    if (baseCoverage > maxCoverage) baseCoverage = maxCoverage;
  
    // Round
    baseCoverage = Math.round(baseCoverage / 1000) * 1000;
    baseValue = Math.round(baseValue / 1000) * 1000;
  
    return {
      coverage: baseCoverage,
      estimatedValue: baseValue
    };
  };
  


  export const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
  };

  