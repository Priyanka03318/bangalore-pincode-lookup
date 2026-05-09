const pincodes = {
  "560001": "MG Road",
  "560002": "KR Market",
  "560003": "Malleshwaram",
  "560004": "Basavanagudi",
  "560005": "Frazer Town",
  "560006": "Hebbal",
  "560007": "Indiranagar",
  "560008": "Ulsoor"
};

function findArea() {
  const pin = document.getElementById("pincode").value;
  const result = document.getElementById("result");

  if (pincodes[pin]) {
    result.innerText = `Area: ${pincodes[pin]}`;
  } else {
    result.innerText = "Pincode not found";
  }
}
