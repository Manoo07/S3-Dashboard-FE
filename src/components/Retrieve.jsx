import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Retrieve = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://54.90.109.188/files');
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchFiles();
  }, []);

  if (loading) {
    return <div className="p-6">Loading files...</div>; // Loading indicator
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Files Uploaded</h1>
      <ul>
        {files.map((file, index) => (
          <li key={file.fileId} className="flex justify-between p-2 border-b hover:bg-gray-200">
            <span>{file.Key}</span>
            <span>{Math.round((file.Size / 1024) * 1000) / 1000} K.B</span>
            <a 
              href={`http://54.90.109.188/download/${file.fileId}`}
              className="hover:text-blue-600 cursor-pointer"
              download
            >
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Retrieve;
