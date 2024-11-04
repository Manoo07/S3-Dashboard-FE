import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Download = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await axios.get('http://3.212.165.152/api/downloads');
      setFiles(response.data);
    };

    fetchFiles();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Downloaded Files Information</h1>
      <ul>
        {files.map((file, index) => (
          <li key={index} className="flex justify-between p-2 border-b hover:bg-gray-200">
            <span>{file.filename}</span>
            <span>{file.downloadCount} downloads</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Download;
