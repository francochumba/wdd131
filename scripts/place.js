document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

const temp = 8;
const speed = 10;

document.getElementById("temp").textContent = temp;
document.getElementById("speed").textContent = speed;

function calculateWindChill(t, s) {
  return 13.12 + 0.6215*t - 11.37*Math.pow(s, 0.16) + 0.3965*t*Math.pow(s, 0.16);
}

let windChill = "N/A";

if (temp <= 10 && speed > 4.8) {
  windChill = calculateWindChill(temp, speed).toFixed(1) + " °C";
}

document.getElementById("windchill").textContent = windChill;
