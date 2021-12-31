function GetValue()
{
   function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const d = randomDate(new Date(1000, 0, 1), new Date());
document.getElementById("message").innerHTML=d;
}


function displayHello() {
  document.getElementById("hello").innerHTML += "just 1 one more";
}

setInterval(displayHello, 2700);
setInterval(GetValue, 1200);
