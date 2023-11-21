
let pickBtn = document.getElementById("pick-btn") 
let hexinput = document.getElementById("hex-input") 
let pickedcolor = document.getElementById("picked-color") 
let container = document.querySelector(".container");
const fileInput = document.getElementById("file");
const rgbInput = document.getElementById("rgb-input");

 
const pickcolor = async () =>{ 
    const eyeDropper =new EyeDropper(); 
    const {sRGBHex} = await eyeDropper.open(); 
    const rgbValue = hexToRgb(sRGBHex);
    console.log(sRGBHex) 
    hexinput.value = sRGBHex; 
    rgbInput.value = rgbValue;
    pickBtn.classList.remove("hide");
 
    //  container.style.backgroundColor = sRGBHex;
    pickedcolor.style.display = "grid";
    pickedcolor.style.backgroundColor = sRGBHex;
    
} 
pickBtn.addEventListener("click",pickcolor);
fileInput.addEventListener("change", () => {
        pickedcolor.style.display = "none";
        const reader = new FileReader();
        reader.onload = () => image.setAttribute("src", reader.result);
        reader.readAsDataURL(fileInput.files[0]);
       
        pickedcolor.style.backgroundColor = hex;
    });
    const hexToRgb = (hex) => {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `rgb(${r}, ${g}, ${b})`;
        };
        const copyToClipboard = (textId) => {
                const textElement = document.getElementById(textId);
                textElement.select();
                document.execCommand("copy");
            };

