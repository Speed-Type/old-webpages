//initialize variables
let formulaSelection = document.getElementById('formulaSelect');
let calculateButton = document.getElementById('button');
let length1 = document.getElementById('length1');
let length1Display = document.getElementById('length1Display');
let length2 = document.getElementById('length2');
let length2Display = document.getElementById('length2Display');
let length3 = document.getElementById('length3');
let length3Display = document.getElementById('length3Display');
let radius = document.getElementById('radius');
let radiusDisplay = document.getElementById('radiusDisplay');
let base = document.getElementById('base');
let baseDisplay = document.getElementById('baseDisplay');
let height = document.getElementById('height');
let heightDisplay = document.getElementById('heightDisplay');
let output = document.getElementById('output');

//calculator object
let areaCalculator = 
{
    square(sideLength)
    {
        let area = Math.pow(parseFloat(sideLength), 2);
        return area;
    },

    rectangle(side1Length, side2Length)
    {
        let area = parseFloat(side1Length) * parseFloat(side2Length);
        return area;
    },

    triangle(baseLength, heightLength)
    {
        let area = (parseFloat(baseLength) * parseFloat(heightLength)) / 2;
        return area;
    },

    circle(radius)
    {
        let area = Math.PI * Math.pow(parseFloat(radius), 2);
        return area;
    }
}

let perimeterCalculator = 
{
    square(sideLength)
    {
        let perimeter = parseFloat(sideLength) * 4;
        return perimeter;
    },

    rectangle(side1Length, side2Length)
    {
        let perimeter = parseFloat(side1Length) * 2 + parseFloat(side2Length) * 2;
        return perimeter;
    },

    triangle(sideLength1, sideLength2, sideLength3)
    {
        let perimeter = parseFloat(sideLength1) + parseFloat(sideLength2) + parseFloat(sideLength3);
        return perimeter;
    },

    circle(radius)
    {
        let perimeter = parseFloat(radius) * 2 * Math.PI;
        return perimeter;
    }
}

let volumeCalculator = 
{
    cube(sideLength)
    {
        let volume = parseFloat(sideLength) * 3;
        return volume;
    },

    rectangularPrism(side1Length, side2Length, side3Length)
    {
        let volume = parseFloat(side1Length) * parseFloat(side2Length) * parseFloat(side3Length);
        return volume;
    },

    cone(radius, height)
    {
        let volume = (1/3) * Math.PI * Math.pow(parseFloat(radius), 2) * parseFloat(height);
        return volume;
    },

    sphere(radius)
    {
        let volume = (4 / 3) * Math.PI * Math.pow(parseFloat(radius), 3);
        return volume;
    }
}

//function to hide all inputs
function hideAllInputs()
{
    length1Display.style.display = "none";
    length2Display.style.display = "none";
    length3Display.style.display = "none";
    radiusDisplay.style.display = "none";
    baseDisplay.style.display = "none";
    heightDisplay.style.display = "none";
}

//function to change the formulas and show the correct inputs
function changeFormula()
{
    hideAllInputs();

    if(formulaSelection.value === "perimeterRect" || formulaSelection.value === "areaRect")
    {
        length1Display.style.display = "block";
        length2Display.style.display = "block";
    }
    else if(formulaSelection.value === "perimeterSquare" || formulaSelection.value === "areaSquare" || formulaSelection.value === "volSquare")
    {
        length1Display.style.display = "block";
    }
    else if(formulaSelection.value === "perimeterTriangle" || formulaSelection.value === "volRect")
    {
        length1Display.style.display = "block";
        length2Display.style.display = "block";
        length3Display.style.display = "block";
    }
    else if(formulaSelection.value === "circumferenceCircle" || formulaSelection.value === "areaCircle" || formulaSelection.value === "volSphere")
    {
        radiusDisplay.style.display = "block";
    }
    else if(formulaSelection.value === "areaTriangle")
    {
        baseDisplay.style.display = "block";
        heightDisplay.style.display = "block";
    }
    else if(formulaSelection.value === "volCone")
    {
        radiusDisplay.style.display = "block";
        heightDisplay.style.display = "block";
    }
}

//function to answer formula
function answerFormula()
{
    if(formulaSelection.value === "perimeterRect" && length1.value.length > 0 && length2.value.length > 0)
    {
        output.innerHTML = "Output: " + perimeterCalculator.rectangle(length1.value, length2.value);
    }
    else if(formulaSelection.value === "perimeterSquare" && length1.value.length > 0)
    {
        output.innerHTML = "Output: " + perimeterCalculator.square(length1.value);
    }
    else if(formulaSelection.value === "perimeterTriangle" && length1.value.length > 0 && length2.value.length > 0 && length3.value.length > 0)
    {
        output.innerHTML = "Output: " + perimeterCalculator.triangle(length1.value, length2.value, length3.value);
    }
    else if(formulaSelection.value === "circumferenceCircle" && radius.value > 0)
    {
        output.innerHTML = "Output: " + perimeterCalculator.circle(radius.value);
    }
    else if(formulaSelection.value === "areaRect" && length1.value.length > 0 && length2.value.length > 0)
    {
        output.innerHTML = "Output: " + areaCalculator.rectangle(length1.value, length2.value);
    }
    else if(formulaSelection.value === "areaSquare" && length1.value.length > 0)
    {
        output.innerHTML = "Output: " + areaCalculator.square(length1.value);
    }
    else if(formulaSelection.value === "areaTriangle" && base.value.length > 0 && height.value.length > 0)
    {
        output.innerHTML = "Output: " + areaCalculator.triangle(base.value, height.value);
    }
    else if(formulaSelection.value === "areaCircle" && radius.value > 0)
    {
        output.innerHTML = "Output: " + areaCalculator.circle(radius.value);
    }
    else if(formulaSelection.value === "volSquare" && length1.value.length > 0)
    {
        output.innerHTML = "Output: " + volumeCalculator.cube(length1.value);
    }
    else if(formulaSelection.value === "volRect" && length1.value.length > 0 && length2.value.length > 0 && length3.value.length > 0)
    {
        output.innerHTML = "Output: " + volumeCalculator.rectangularPrism(length1.value, length2.value, length3.value);
    }
    else if(formulaSelection.value === "volCone" && height.value.length > 0 && radius.value.length > 0)
    {
        output.innerHTML = "Output: " + volumeCalculator.cone(radius.value, height.value);
    }
    else if(formulaSelection.value === "volSphere" && radius.value > 0)
    {
        output.innerHTML = "Output: " + volumeCalculator.sphere(radius.value);
    }
    else
    {
        alert("Error.");
    }
}

//default hide inputs
hideAllInputs();

//activates the changing
formulaSelection.onchange = changeFormula;

//activates the solving
calculateButton.onclick = answerFormula;