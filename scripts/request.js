
function daddy() {
  alert("daddy");
}
async function SendRequest(url) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(Data),
    headers: {
      "Content-Type": "application/json"
    }
  });


}