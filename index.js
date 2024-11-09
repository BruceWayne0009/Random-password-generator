function generatePassword() {
 // const length = document.getElementById("textbox").value;
  const length = parseInt(document.getElementById("textbox").value, 10);
  const includeUppercase = document.getElementById("Uppercasechars").checked;
  const includeLowercase = document.getElementById("Lowercasechars").checked;
  const includeNumbers = document.getElementById("Numberschars").checked;
  const includeSymbols = document.getElementById("Symbolschars").checked;
  const button = document.getElementById("button")

  if (length < 8 || length > 12) {
    document.getElementById("result").textContent = "Please enter a length between 8 and 12.";
    return;
}
 
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const Numbers = "0123456789";
  const Symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let allChars = "";
  if (includeUppercase) allChars += Uppercasechars;
  if (includeLowercase) allChars += Lowercasechars;
  if (includeNumbers) allChars += Numbers;
  if (includeSymbols) allChars += Symbols;

  if (allChars === "") {
      document.getElementById("result").textContent = "Please select at least one character type.";
      return;
  }

 
  let password = "";
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
  }

 
  document.getElementById("result").textContent = `Generated Password: ${password}`;
}


document.querySelector("button").onclick = generatePassword;













/*function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols ){
  
  const Lowercasechars = "abcdefghijklmnopqrstuvwxyz";
  const Uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const Numberschars = "0123456789";
  const Symbolschar = "!@#$%^&*()_+=-";

  let allowedchars = "";
  let password = "";

  allowedchars += includeLowercase ? Lowercasechars : "";
  allowedchars += includeUppercase ? Uppercasechars : "";
  allowedchars += includeNumbers ? Numberschars : "";
  allowedchars += includeSymbols ? Symbolschar : "";

  if(length<8){
       result.innerText=`Password length must be atleast 8..`;
  }else if(length>12){
      result.innerText=`Password length must be atleast 8..`;
  }
  if(allowedchars.length === 0){
       return `(Atleast on set of characters needs to be selected)`;
  }

  for(let i=0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * allowedchars.length);
    password += allowedchars[randomIndex];
  }
  
    return password;
}

const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                  includeUppercase, 
                                  includeLowercase, 
                                  includeNumbers, 
                                  includeSymbols);*/

//result.innerText=(`Generated Password : ${password}`);                                  
