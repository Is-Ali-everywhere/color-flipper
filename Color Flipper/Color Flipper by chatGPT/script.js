const button = document.getElementById("btn");

button.addEventListener("click", function(){
  const hexLetters = "0123456789ABCDEF";
  let hex = "#";
  for(let i = 0; i < 6; i++){
    hex += hexLetters[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = hex;
});
