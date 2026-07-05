import React, { useEffect, useState } from "react";
import "./History.css";

export const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("qrHistory")) || [];
    setHistory(savedHistory);
  }, []);

  function deleteQR(id) {
    const updatedHistory = history.filter((item) => item.id !== id);
    setHistory(updatedHistory);
    localStorage.setItem("qrHistory", JSON.stringify(updatedHistory));
  }

  function clearAll() {
    setHistory([]);
    localStorage.removeItem("qrHistory");
  }

  function downloadQR(image) {
    const link = document.createElement("a");
    link.href = image;
    link.download = "saved-qr-code.png";
    link.click();
  }

  return (
    <div className="history-container">
      <div className="history-page">
        <h1>QR History</h1>
        <p>View, download, and manage your saved QR codes.</p>

        {history.length > 0 && (
          <button className="clear-btn" onClick={clearAll}>
            Clear All
          </button>
        )}

        <div className="history-cards">
          {history.length === 0 ? (
            <h2>No QR codes saved yet</h2>
          ) : (
            history.map((item) => (
              <div className="history-card" key={item.id}>
                <img src={item.image} alt="Saved QR" />

                <h3>{item.type}</h3>
                <p>{item.value}</p>

                <div className="history-buttons">
                  <button onClick={() => downloadQR(item.image)}>
                    Download
                  </button>

                  <button onClick={() => deleteQR(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};