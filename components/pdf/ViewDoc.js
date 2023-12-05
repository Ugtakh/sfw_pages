"use client";
import React from "react";
//====================
// Plugins
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
//========================

const ViewDoc = ({ pdfUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div
      style={{
        border: "1px solid #007c48",
        height: "750px",
        width: "100%",
      }}
    >
      <div
        style={{
          height: "750px",
          width: "100%",

          marginLeft: "auto",
          marginRight: "auto",
          padding: 5,
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.js">
          <Viewer
            style={{ maxWidth: "900px" }}
            fileUrl={pdfUrl}
            // plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
    </div>
  );
};

export default ViewDoc;
