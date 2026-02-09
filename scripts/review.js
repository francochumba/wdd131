let count = localStorage.getItem("reviewCount");

if (count === null)
{
count = 0;
}

count++;

localStorage.setItem("reviewCount", count);

document.querySelector("#reviewCount").textContent =
"You have submitted " + count + " reviews.";


document.querySelector("#lastModified").textContent =
"Last Modification: " + document.lastModified;
