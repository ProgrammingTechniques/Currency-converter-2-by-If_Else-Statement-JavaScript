// This is Faizan's Currency Converter
alert("Faizan's Currency Converter");
alert("Please Follow me on GitHub A Software Development Platform");

// Result and Currencies 
let result;
let dollar = 82.41
let euro = 90.97
let pound = 100.10
let riyal = 21.90
let kd = 278

// If Else Statement for Currency Converter
let rupee = prompt("Enter number");
let sign = prompt("Enter Sign");
if (sign == "USD") {
  result = rupee * dollar;
}
else if (sign == "Euro") {
  result = rupee * euro;
}
else if (sign == "Pound") {
  result = rupee * pound;
}
else if (sign == "Riyal") {
  result = rupee * riyal;
}
else if (sign == "KD") {
  result = rupee * kd;
}
console.log(`${rupee} ${sign} ${result}`);
alert("I hope You give feedback to me");
// End of Code
