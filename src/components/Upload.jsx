import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false); // State to manage loading

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      await axios.post('http://54.90.109.188/upload', formData);
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file. Please try again.');
    } finally {
      setLoading(false); // Reset loading state after the upload attempt
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upload File</h1>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button onClick={handleUpload} className="btn" disabled={loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
      {loading && <div className="loader">Loading...</div>}
    </div>
  );
};

export default Upload;
