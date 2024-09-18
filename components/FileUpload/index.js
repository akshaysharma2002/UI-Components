import React, { useState } from "react";
const FileUpload = ({ autoUpload, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const handleFileUpload = (file) => {
    setSelectedFile(file);
    if (autoUpload) {
      const uploadSuccess = Math.random() < 1;
      setUploadStatus(
        uploadSuccess ? "File uploaded successfully" : "Failed to upload file"
      );
      console.log("Auto-uploading file:", file);
    }
    if (onUpload) {
      onUpload(file);
    }
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFileUpload(file);
  };

  return (
    <div style={{width: '25rem'}}>
      <div
        className="border border-primary p-4"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <label htmlFor="fileInput" className="btn btn-primary">
          Browse
          <input
            id="fileInput"
            type="file"
            className="d-none"
            onChange={(e) => handleFileUpload(e.target.files[0])}
          />
        </label>

        <p className="text-center mb-0">Or drop files here</p>
      </div>

      <div className="mt-3">
        {/* {uploadStatus && <p className="alert alert-info">{uploadStatus}</p>} */}

        {selectedFile && (
          <div className="alert alert-success d-flex align-items-center">
            <span>{selectedFile.name}</span>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => setSelectedFile(null)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
