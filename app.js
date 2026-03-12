async function startLab() {

document.getElementById("status").innerText = "Starting lab...";

const response = await fetch(
"/api/startlab",
{
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
lab: "ad-lab",
user: "demo"
})
});

const data = await response.json();

document.getElementById("status").innerText = data.message;

}
