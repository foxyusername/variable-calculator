let equationValue=document.getElementById('equation');
let letterValue=document.getElementById('letter');
let submitBtn=document.getElementById('submit');
let form=document.getElementById('form');
let documentBtn=document.getElementById('documentBtn');

let result=document.getElementById('result');

let body=document.querySelector('body');

let found=false;
let resultArray=[];
let symbolArray=["* - MULTIPLY","/ - DIVIDE","+ - PLUS","- MINUS"];

let resultDiv=document.createElement('div');
let resultShower=document.createElement('h3');
let preText=document.createElement('h1');
let backBtn=document.createElement('button');

resultDiv.id="resultDiv";
resultShower.id="resultShower";
preText.id='preText';
backBtn.id='backBtn';

backBtn.innerText="Calculate Again";

//About and Symbol page

let mainDiv=document.createElement('div');      
let aboutDiv=document.createElement('div');
let symbolsDiv=document.createElement('div');
let aboutInfo=document.createElement('p');
let aboutDivHeader=document.createElement('h1');

mainDiv.id="mainDiv";
aboutInfo.id="aboutInfo";
aboutDivHeader.id='aboutDivHeader';

aboutInfo.innerText="This website provides a versatile tool for calculating all the potential values of 'N' needed to ensure that your entered formula results in a whole number. It's important to note that 'N' itself must also be a whole number. Whether you're working with complex equations or seeking precision in your calculations, this resource empowers you to effortlessly explore the integer solutions that make your formulas yield whole numbers.";

aboutDivHeader.innerText="About"

mainDiv.appendChild(aboutDiv);
mainDiv.appendChild(symbolsDiv);
aboutDiv.appendChild(aboutDivHeader);
aboutDiv.appendChild(aboutInfo);

 
for(let i=0;i<symbolArray.length;i++){          //using for loop for p element creation in about div
let symbol=document.createElement('p');           
symbol.innerText=symbolArray[i];   
symbolsDiv.appendChild(symbol);
}

form.addEventListener('submit',onSubmit);
letterValue.addEventListener('input',showLetter);
backBtn.addEventListener('click',restart);
documentBtn.addEventListener('click',showAbout);

function showLetter(){
 submitBtn.innerText="Find "+letterValue.value;
}


function onSubmit(e){
e.preventDefault();

let value=equationValue.value.split('').find(n => n===letterValue.value);

if(value){
    insertNumber();
    closeCalculator();
}else{
    alert("Error something went wrong, we couldn't find specified Letter/Symbol in your equation, Please make sure that you insert correct value in second box.");
}

}

function closeCalculator(){
    body.removeChild(form);                 //removing the calculator structure
    body.removeChild(documentBtn);          //removing documents button

    body.appendChild(resultDiv);            //changing with new div to show result
    resultDiv.appendChild(preText);         //pre text for this text "(chosen letter) - values are"
    resultDiv.appendChild(resultShower);    //showing result with h1 tag
    resultDiv.appendChild(backBtn);         //button for getting back to calculation

    preText.innerText=""+letterValue.value+" - VALUES ARE : ";   //showing the specific letter and result 

}



function showAbout(){
    if(documentBtn.innerText==='About & Symbols'){
  body.removeChild(form);
  documentBtn.innerText="Back";

  body.appendChild(mainDiv);
}else if(documentBtn.innerText==="Back"){
  body.removeChild(mainDiv);
  body.appendChild(form);
  documentBtn.innerText="About & Symbols";
}
}



function insertNumber(){
 let equationArray=equationValue.value.split('');
 let testFormulaArray=equationValue.value.split('');

for(let i=-100;i<100;i++){

 testFormulaArray.map((result,index)=>{
    if(result===letterValue.value){
        equationArray[index]=i
    }
 })
   let joinedArray=equationArray.join('');
  calculate(eval(joinedArray),i);

}
}


function calculate(equation,number){

 if(Number.isInteger(equation)){
    foundInteger(number);
 }else{
    //console.log('equation is not integer :'+ equation);
 }
}

function foundInteger(number){
  resultArray.push(number);

  resultShower.innerText=resultArray.toString();

}

function restart(){
    body.removeChild(resultDiv);            //changing with new div to show result

    body.appendChild(documentBtn);                 //removing the calculator structure
    body.appendChild(form); 

    resultArray=[];
    equationValue.value='';
    letterValue.value='';
    submitBtn.innerText="Find";
}