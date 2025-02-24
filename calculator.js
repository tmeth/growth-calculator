function getCompoundInterest() { 
    const initialAmount = document.getElementById('initial').value; 
    const annualInterest = document.getElementById('interest').value; 
    const retirementYear = document.getElementById('retire').value; 

    const year=retirementYear-2025
    const compound=Math.pow(1+ annualInterest/100,year);
    compoundInterest=initialAmount*compound;
    const formattedAmount = compoundInterest.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    
    const resultElement = document.getElementById('result');
    resultElement.textContent = "Your total interest amount when you retire will be: "+formattedAmount;
    resultElement.hidden = false;
        // Stops the form from submitting and refreshing 

    return false; 
    } 