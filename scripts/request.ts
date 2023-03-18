enum ERequest {
  Create,
  Update,
  Delete
}
interface DataBlock {
  Steam64ID: Number;
  DiscordID: Number;
  Message: String;
  RequestType: ERequest;
}
function daddy() {
  alert("daddy");
}
async function SendRequest(url: URL, Data: DataBlock) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(Data),
    headers: {
      "Content-Type": "application/json"
    }
  });


}