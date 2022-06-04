// declaration
const controls = document.querySelectorAll(".controls");
const resultBox = document.querySelector(".result-box");
const generateBtn = document.querySelector(".generating-btn");

//  values
let yValue = 0;
let xValue = 0;
let blurValue = 6;
let spreadValue = 0;
let opacityValue = 0.3;
let colorValue = "rgba(0, 0, 0,0.3)";
let insetValue = false;
//  converting color to rgba
const hexRgba = (hex)=>{
    let r = parseInt(hex.slice(1,3), 16);
    let g = parseInt(hex.slice(3,5), 16);
    let b = parseInt(hex.slice(5,7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacityValue})`
};


// the display of the box shadow;
const resultBoxShadow = () =>{
    if (insetValue) {
        resultBox.style.boxShadow = `inset ${xValue}px ${yValue}px ${blurValue}px
        ${spreadValue}px ${colorValue}`;
        
        
    } else {
        resultBox.style.boxShadow = `${xValue}px ${yValue}px ${blurValue}px
         ${spreadValue}px ${colorValue}`;
        
    }
};

// for each loop function declare;
const updateValues =()=>{
    xValue = document.querySelector("#x-offset").value;   
            yValue = document.querySelector("#y-value").value;   
            blurValue = document.querySelector("#blur").value;   
            spreadValue = document.querySelector("#spread").value;   
            opacityValue = document.querySelector("#opacity").value;   
            colorValue = hexRgba (document.querySelector("#color").value);   
            insetValue = document.querySelector("#mark").checked; 

            resultBoxShadow();
};
// for each loop function
controls.forEach(c => {
        c.addEventListener("input", updateValues);   
    });
       

    // the button to be clicked to display the code generated
    let code = document.querySelector(".code code")
    generateBtn.addEventListener("click", function () {
        if (insetValue) {
            code.textContent =`inset ${xValue}px ${yValue}px ${blurValue}px
             ${spreadValue}px ${colorValue}`;
            
            
        } else {
            code.textContent = `${xValue}px ${yValue}px ${blurValue}px
             ${spreadValue}px ${colorValue}`;
            
        }
    })