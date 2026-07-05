import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">

      <div className="about-page">

        <div className="about-intro">
          <h1>About SHRU's QR</h1>

          <p>
            SHRU's QR is a simple and creative QR Code Generator built using
            React. It allows users to create customized QR codes for text and
            links, choose colors, add logos, download QR codes and save them
            for future use.
          </p>
        </div>


        <div className="about-features">

          <h2>Our Features</h2>

          <div className="feature-cards">

            <div className="feature-card">
              <h3>QR Generator</h3>

              <p>
                Generate QR codes instantly for text and website links.
              </p>
            </div>


            <div className="feature-card">
              <h3>Custom Colors</h3>

              <p>
                Choose different colors and create personalized QR codes.
              </p>
            </div>


            <div className="feature-card">
              <h3>Add Logo</h3>

              <p>
                Upload your own logo and display it inside the QR code.
              </p>
            </div>


            <div className="feature-card">
              <h3>Download & Share</h3>

              <p>
                Download your QR code as an image or share its content easily.
              </p>
            </div>


            <div className="feature-card">
              <h3>QR History</h3>

              <p>
                Save generated QR codes and access them again from History.
              </p>
            </div>


            <div className="feature-card">
              <h3>Responsive Design</h3>

              <p>
                Use SHRU's QR easily on laptop, tablet and mobile devices.
              </p>
            </div>

          </div>

        </div>


        <div className="future-section">

          <h2>Future Upgrades</h2>

          <div className="future-box">

            <p>Image to QR Code</p>

            <p>Video to QR Code</p>

            <p>Wi-Fi QR Code Generator</p>

            <p>Contact Card QR Code</p>

            <p>Cloud Storage</p>

            <p>User Login and Dashboard</p>

          </div>

        </div>

      </div>

    </div>
  );
};