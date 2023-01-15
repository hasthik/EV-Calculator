const inputs = document.querySelectorAll('input');
    var onRoadPriceElectric = document.querySelector('#on-road-price-electric');
    var battery = document.querySelector('#battery');
    var range = document.querySelector('#range');
    var chargingCost = document.querySelector('#charging-cost');
    var costPerKmPetrol = document.querySelector('#cost-per-km-petrol');
    var costPerKmElectric = document.querySelector('#cost-per-km-electric');
    var onRoadPricePetrol = document.querySelector('#on-road-price-petrol');
    var fuelType = document.querySelector('#fuel-type');
    var mileage = document.querySelector('#mileage');
    var fuelCost = document.querySelector('#fuel-cost');
    var journeyDistance = document.querySelector('#journey-distance');
    var journeyFrequency = document.querySelector('#journey-frequency');
    var state = document.querySelector('#state');
    var vehicleType = document.querySelector('#vehicle-type');
    var annualJourneyDistance = document.querySelector('#annual-journey-distance');

    var onRoadPriceElectricValue = onRoadPriceElectric.value > 0 ? onRoadPriceElectric.value : 0;
    var batteryValue = battery.value > 0 ? battery.value : 0;
    var rangeValue = range.value > 0 ? range.value : 0;
    var chargingCostValue = chargingCost.value > 0 ? chargingCost.value : 0;
    var costPerKmPetrolValue = costPerKmPetrol.value > 0 ? costPerKmPetrol.value : 0;
    var costPerKmElectricValue = costPerKmElectric.value > 0 ? costPerKmElectric.value : 0;
    var onRoadPricePetrolValue = onRoadPricePetrol.value > 0 ? onRoadPricePetrol.value : 0;
    var fuelTypeValue = fuelType.value > 0 ? fuelType.value : 0;
    var mileageValue = mileage.value > 0 ? mileage.value : 0;
    var fuelCostValue = fuelCost.value > 0 ? fuelCost.value : 0;
    var journeyDistanceValue = journeyDistance.value > 0 ? journeyDistance.value : 0;
    var journeyFrequencyValue = journeyFrequency.value > 0 ? journeyFrequency.value : 0;
    var stateValue = state.value;
    var vehicleTypeValue = vehicleType.value;
    var annualJourneyDistanceValue = annualJourneyDistance.value > 0 ? annualJourneyDistance.value : 0;

    var dailySavings = document.querySelector('#daily-savings');
    var monthlySavings = document.querySelector('#monthly-savings');
    var annualSavings = document.querySelector('#annual-savings');

inputs.forEach(input => input.addEventListener('change', () => {
    if(input.id === 'charging-cost' && chargingCost.value > 0 && range.value > 0 && battery.value > 0) {
        // console.log(chargingCost.value);
        batteryValue = battery.value;
        rangeValue = range.value;
        chargingCostValue = chargingCost.value;
        costPerKmElectricValue =  batteryValue * chargingCostValue / rangeValue;
        costPerKmElectric.value = Math.round(costPerKmElectricValue * 100) / 100  ;
        // console.log(costPerKmElectricValue);
        costPerKmElectric.style.background = `white`;
        costPerKmElectric.style.color = `#3F3F3F`;
        costPerKmElectric.style.font = `normal`;
        costPerKmElectric.style.fontWeight = `300`;
        costPerKmElectric.style.lineHeight = `23px`;
        costPerKmElectric.style.display = `block`;
        var divNode = document.createElement("div");
        divNode.innerHTML = `<div><style>#${costPerKmElectric.id} + .on-selected {display: block;}</style></div>`;
         document.body.appendChild(divNode);
    }
    if(input.id === 'fuel-cost' && fuelCost.value > 0 && mileage.value > 0) {
        // console.log(fuelCost.value);
        mileageValue = mileage.value;
        fuelCostValue = fuelCost.value;
        costPerKmPetrolValue = fuelCostValue / mileageValue;
        costPerKmPetrol.value = Math.round(costPerKmPetrolValue * 100) / 100;
        // console.log(costPerKmPetrolValue);
        costPerKmPetrol.style.background = `white`;
        costPerKmPetrol.style.color = `#3F3F3F`;
        costPerKmPetrol.style.font = `normal`;
        costPerKmPetrol.style.fontWeight = `300`;
        costPerKmPetrol.style.lineHeight = `23px`;
        costPerKmPetrol.style.display = `block`;
        var divNode = document.createElement("div");
        divNode.innerHTML = `<div><style>#${costPerKmPetrol.id} + .on-selected {display: block;}</style></div>`;
        document.body.appendChild(divNode);
    }

    input.style.background = `white`;
    input.style.color = `#3F3F3F`;
    input.style.font = `normal`;
    input.style.fontWeight = `300`;
    input.style.lineHeight = `23px`;
    input.style.display = `block`;
    var id = input.id;
    console.log(id);
    var divNode = document.createElement("div");
    divNode.innerHTML = `<div><style>#${id} + .on-selected {display: block;}</style></div>`;
    document.body.appendChild(divNode);
    }));

const selects = document.querySelectorAll('select');
selects.forEach(select => select.addEventListener('change', () => {
    if(select.id === 'journey-frequency' && journeyFrequency.value > 0 && journeyDistance.value > 0) {
        // console.log(journeyFrequency.value);
        journeyDistanceValue = journeyDistance.value;
        journeyFrequencyValue = journeyFrequency.value;
        annualJourneyDistanceValue = journeyDistanceValue * journeyFrequencyValue;
        annualJourneyDistance.value = Math.round(annualJourneyDistanceValue * 100) / 100;   
        // console.log(annualJourneyDistanceValue);
        annualJourneyDistance.style.background = `white`;
        annualJourneyDistance.style.color = `#3F3F3F`;
        annualJourneyDistance.style.font = `normal`;
        annualJourneyDistance.style.fontWeight = `300`;
        annualJourneyDistance.style.lineHeight = `23px`;
        annualJourneyDistance.style.display = `block`;
        var divNode = document.createElement("div");
        divNode.innerHTML = `<div><style>#${annualJourneyDistance.id} + .on-selected {display: block;}</style></div>`;
        document.body.appendChild(divNode);
    }

    select.style.background = `white`;
    select.style.color = `#3F3F3F`;
    select.style.font = `normal`;
    select.style.fontWeight = `300`;
    select.style.lineHeight = `23px`;
    select.style.fontSize = `1em`;
    }));

const calculate = document.querySelector('#calculate');
calculate.addEventListener('click', () => {
    
    costPerKmElectricValue = batteryValue / rangeValue * chargingCostValue;

});

function runResults() {
    var diplayResults = document.createElement("div");
    diplayResults.innerHTML = `<div><style>#results {display: block;}</style></div>`;
    document.body.appendChild(diplayResults);

    var dailySavingsValue = 0;
    var monthlySavingsValue = 0;
    var annualSavingsValue = 0;

    onRoadPriceElectricValue = onRoadPriceElectric.value;
    onRoadPricePetrolValue = onRoadPricePetrol.value;
    annualSavingsValue = (costPerKmPetrolValue - costPerKmElectricValue) * annualJourneyDistanceValue;
    monthlySavingsValue = annualSavingsValue / 12;
    dailySavingsValue = annualSavingsValue / 365;

    console.log(dailySavingsValue);
    dailySavings.innerHTML = Math.round(dailySavingsValue * 100) / 100;
    monthlySavings.innerHTML = Math.round(monthlySavingsValue * 100) / 100;
    annualSavings.innerHTML = Math.round(annualSavingsValue * 100) / 100;

    var netProfit = document.querySelector('#net-profit');

    var netProfitValue = 0;
    netProfitValue = onRoadPricePetrolValue - onRoadPriceElectricValue + annualSavingsValue * 5;
    console.log(netProfitValue+ ' net profit');
    var breakEvenYears = document.querySelector('#break-even-years');
    var breakEvenMonths = document.querySelector('#break-even-months');
    var breakEvenYearsValue = 0;
    var breakEvenMonthsValue = 0;
    console.log(onRoadPriceElectricValue);
    console.log(onRoadPricePetrolValue);
    breakEvenYearsValue = Math.floor((onRoadPriceElectricValue-onRoadPricePetrolValue) / annualSavingsValue);
    breakEvenMonthsValue = Math.floor(((onRoadPriceElectricValue-onRoadPricePetrolValue) / annualSavingsValue)%12);
    console.log(breakEvenYearsValue);
    console.log(breakEvenMonthsValue);
    netProfit.innerHTML = Math.round(netProfitValue * 100) / 100;
    breakEvenYears.innerHTML = breakEvenYearsValue;
    breakEvenMonths.innerHTML = breakEvenMonthsValue;

}