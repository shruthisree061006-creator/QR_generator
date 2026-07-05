import React, { useRef, useState } from "react";
import "./Create.css";
import { QRCodeCanvas } from "qrcode.react";

export const Create = () => {
  const [qrType, setQrType] = useState("text");
  const [inputValue, setInputValue] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [qrColor, setQrColor] = useState("#000000");
  const [logoImage, setLogoImage] = useState("");

  const qrRef = useRef(null);

  function generateQR() {
    if (inputValue.trim() === "") {
      alert("Please enter text or link");
      return;
    }

    setQrValue(inputValue);
  }

  function handleLogoUpload(event) {
    const file = event.target.files[0];

    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Logo size must be below 2MB");
      return;
    }

    const imageURL = URL.createObjectURL(file);
    setLogoImage(imageURL);
  }

  function downloadPNG() {
    if (!qrValue) {
      alert("Please generate a QR code first");
      return;
    }

    const canvas = qrRef.current.querySelector("canvas");
    const imageURL = canvas.toDataURL("image/png");

    const downloadLink = document.createElement("a");
    downloadLink.href = imageURL;
    downloadLink.download = "shrus-qr-code.png";
    downloadLink.click();
  }

  async function shareQRCode() {
    if (!qrValue) {
      alert("Please generate a QR code first");
      return;
    }

    if (navigator.share) {
      await navigator.share({
        title: "SHRU's QR Code",
        text: qrValue,
      });
    } else {
      navigator.clipboard.writeText(qrValue);
      alert("QR content copied to clipboard");
    }
  }

  function downloadPNG() {
  if (!qrValue) {
    alert("Please generate a QR code first");
    return;
  }

  const qrCanvas = qrRef.current.querySelector("canvas");

  const finalCanvas = document.createElement("canvas");
  finalCanvas.width = 260;
  finalCanvas.height = 260;

  const ctx = finalCanvas.getContext("2d");

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 260, 260);

  ctx.drawImage(qrCanvas, 20, 20, 220, 220);

  if (logoImage) {
    const logo = new Image();
    logo.crossOrigin = "anonymous";
    logo.src = logoImage;

    logo.onload = () => {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(105, 105, 50, 50);

      ctx.drawImage(logo, 110, 110, 40, 40);

      const imageURL = finalCanvas.toDataURL("image/png");

      const downloadLink = document.createElement("a");
      downloadLink.href = imageURL;
      downloadLink.download = "shrus-qr-code.png";
      downloadLink.click();
    };
  } else {
    const imageURL = finalCanvas.toDataURL("image/png");

    const downloadLink = document.createElement("a");
    downloadLink.href = imageURL;
    downloadLink.download = "shrus-qr-code.png";
    downloadLink.click();
  }
}

function saveToHistory() {
  if (!qrValue) {
    alert("Please generate a QR code first");
    return;
  }

  const canvas = qrRef.current.querySelector("canvas");
  const qrImage = canvas.toDataURL("image/png");

  const newQR = {
    id: Date.now(),
    type: qrType,
    value: qrValue,
    color: qrColor,
    image: qrImage,
  };

  const oldHistory = JSON.parse(localStorage.getItem("qrHistory")) || [];

  localStorage.setItem("qrHistory", JSON.stringify([...oldHistory, newQR]));

  alert("QR saved to history");
}

  return (
    <div className="create-container">
      <div className="create-page">
        <div className="create-left">
          <h1>Create Your QR Code</h1>
          <p>Choose type, enter details and generate your QR code.</p>

          <div className="type-buttons">
            <button onClick={() => setQrType("text")}>Text</button>
            <button onClick={() => setQrType("link")}>Link</button>
          </div>

          <label>{qrType === "text" ? "Enter Text" : "Enter Link"}</label>

          <textarea
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder={
              qrType === "text"
                ? "Type your text here..."
                : "Paste your link here..."
            }
          ></textarea>

          <h3>Choose Color</h3>

          <div className="color-boxes">
            <span className="purple" onClick={() => setQrColor("#7c3aed")}></span>
            <span className="blue" onClick={() => setQrColor("#2563eb")}></span>
            <span className="green" onClick={() => setQrColor("#22c55e")}></span>
            <span className="orange" onClick={() => setQrColor("#f97316")}></span>
            <span className="red" onClick={() => setQrColor("#ef4444")}></span>
            <span className="black" onClick={() => setQrColor("#000000")}></span>
          </div>

          <h3>Add Logo Optional</h3>

          <div className="upload-box">
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleLogoUpload}
            />
            <small>PNG, JPG Max 2MB</small>
          </div>

          <button className="generate-btn" onClick={generateQR}>
            Generate QR Code
          </button>
        </div>

        <div className="create-right">
          <h2>QR Code Preview</h2>

          <div className="qr-preview" ref={qrRef}>
            {qrValue ? (
              <>
                <QRCodeCanvas
                  value={qrValue}
                  size={220}
                  fgColor={qrColor}
                  bgColor="#ffffff"
                  level="H"
                />

                {logoImage && (
                  <img src={logoImage} alt="QR Logo" className="qr-logo" />
                )}
              </>
            ) : (
              <p>QR Preview</p>
            )}
          </div>

          <button onClick={downloadPNG}>Download PNG</button>
          <button onClick={shareQRCode}>Share QR Code</button>
          <button onClick={saveToHistory}>Save to History</button>
        </div>
      </div>
    </div>
  );
};