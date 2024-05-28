import React, { useState } from 'react';
import './FileUpload.css';

export default function FileUpload({uploadName, upload_id}) {
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFileName(file ? file.name : '');
  };

  const handleClearFile = () => {
    setSelectedFileName('');
    document.getElementById(`${upload_id}`).value = '';
  };

  return (
    <div className="file-upload-container">
      <div className="file-upload-wrapper">
        <label htmlFor={upload_id} className="file-upload-label">
          {uploadName}
        </label>
        <input type="file" id={upload_id} className="file-upload-input" onChange={handleFileUpload} />
        <div className="file-upload-name">{selectedFileName}</div>
        {selectedFileName && (
          <button className="file-upload-clear" onClick={handleClearFile}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
}