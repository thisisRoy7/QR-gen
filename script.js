let qrCode;

function generateQR() {
  const input = document.getElementById('qr-input').value;
  const qrContainer = document.getElementById('qrcode');
  const downloadBtn = document.getElementById('download-btn');

  qrContainer.innerHTML = ""; // Clear previous QR
  downloadBtn.style.display = "none"; // Hide until generated

  if (!input) {
    alert("Please enter text or a URL");
    return;
  }

  // Generate QR
  const qrCode = new QRCode(qrContainer, {
    text: input,
    width: 200,
    height: 200,
    colorDark : "#1F1C51",
    colorLight : "white",
    correctLevel : QRCode.CorrectLevel.H
  });

  // Wait a bit for the canvas to load
  setTimeout(() => {
    const img = qrContainer.querySelector('img') || qrContainer.querySelector('canvas');
    if (img) {
      downloadBtn.style.display = "inline-block";
      downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.href = img.src || img.toDataURL(); // support canvas fallback
        link.download = "qrcode.png";
        link.click();
      };
    }
  }, 300);
}
