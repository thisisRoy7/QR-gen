let qrCode;

function generateQR() {
  const input = document.getElementById('qr-input').value;
  const qrContainer = document.getElementById('qrcode');
  qrContainer.innerHTML = ""; // Clear previous QR

  if (!input) {
    alert("Please enter text or a URL");
    return;
  }

  qrCode = new QRCode(qrContainer, {
    text: input,
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
}
