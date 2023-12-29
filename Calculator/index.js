/*  -----------------  Calculator App --------------------------  */

const setInput = document.querySelector("#input-text")
const btnInput = document.querySelectorAll(".btnValue")
const currentYear = document.getElementById("copyright"); 
let data = ""
const symbolArr = ["+", "-", "*", "/"]
const year = new Date()

currentYear.innerHTML = `<p>Copyright ${year.getFullYear()}</p>`

btnInput.forEach((item)=>{  
   item.addEventListener("click", inputValueToInput)
})

function inputValueToInput(){

    
   

     if(this.value === "C"){
        setInput.value = "";
        data = ""
        removeLastLetter = 0
     }
     

     if(this.value === "B"){
        data = data.substring(0, data.length - 1)
        setInput.value = data
         
    }
    
    if(this.value !== "=" && this.value !== "C" && this.value !== "B"){
        data += this.value;
        setInput.value = data;
    }else{

        if(setInput.value == "")
           setInput.value = "Enter Value";
        
       
       if(data == null)
       {
          setInput.value("Enter Value")
       }else{


       
        
       if(data.includes("+")){
        let [num1, num2] = data.split("+")
        setInput.value = parseInt(num1) + parseInt(num2)
        data = ""
       }  
        if(data.includes("-")){
            let [num1, num2] = data.split("-")
          setInput.value = parseInt(num1) - parseInt(num2)
            data = ""
        }
         if(data.includes("*")){
            let [num1, num2] = data.split("*")
        setInput.value = parseInt(num1) * parseInt(num2)
            data = ""
         }
          if(data.includes("/")){
            let [num1, num2] = data.split("/")
            setInput.value = parseInt(num1) / parseInt(num2)
            data = ""
          }
           

    }
       

    }
   
   
   
}