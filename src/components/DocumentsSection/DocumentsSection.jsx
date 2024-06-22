import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFiles, fetchFiles } from '../../redux/features/file/fileSlice';
import FileUpload from '../FileUpload/FileUpload';
import './DocumentsSection.css'

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const fileDisplayNames = {
    'uni-cert': 'UNI Certificate',
    'photo-3x4': 'Photo 3x4',
    'attestat': 'Attestat',
    'id-doc': 'ID Document'
};

export const DocumentsSection = () => {
    const dispatch = useDispatch();
    const { files, uploadStatus, fetchStatus, error } = useSelector(state => state.files);
    const [fileData, setFileData] = useState({
        'uni-cert': null,
        'photo-3x4': null,
        'attestat': null,
        'id-doc': null
    });
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        dispatch(fetchFiles());
    }, [dispatch]);

    const handleFileChange = (event) => {
        const { name, files } = event.target;
        setFileData(prev => ({
            ...prev,
            [name]: files[0]
        }));
    };

    const handleFileUpload = async () => {
        const formData = new FormData();
        Object.entries(fileData).forEach(([key, value]) => {
            if (value !== null) formData.append(key, value);
        });

        await dispatch(uploadFiles(formData)).then(() => {
            dispatch(fetchFiles());
            setFileData({
                'uni-cert': null,
                'photo-3x4': null,
                'attestat': null,
                'id-doc': null
            });
        });
        setUploading(false);
    };

    return (
        <div className='documents-container'>
            <h3>Available Documents</h3>
            {fetchStatus === 'loading' && <p>Loading...</p>}
            {fetchStatus === 'succeeded' && (
                <div className='files-container'>
                    {files && files.map(file => (
                        <div className='file-container' key={file._id}>
                            <p>{file.filename}</p>
                            {file.path && (
                                <a href={`http://localhost:5000/${file.path.replace(/\\/g, '/')}`} target="_blank" rel="noopener noreferrer">View</a>
                            )}
                        </div>
                    ))}
                </div>
            )}
            {fetchStatus === 'failed' && <p>Failed to get files</p>}
            <h3>Upload Documents</h3>
            {Object.entries(fileData).map(([key, value], index) => (
                <div key={`input-${key}-${index}`}> {/* Construct a unique key for inputs */}
                    <FileUpload
                    key={index}
                    uploadName={fileDisplayNames[key] || key}
                    upload_id={key}
                    name={key}
                    onFileChange={handleFileChange}
                />
                </div>
            ))}
            {uploadStatus === 'loading' && <div className='server-message-block'>Uploading...</div>}
            {uploadStatus === 'succeeded' && <div className='server-message-block'>Files uploaded successfully!</div>}
            {uploadStatus === 'failed' && <div className='server-message-block'>Error: {error}</div>}
            <button onClick={handleFileUpload} disabled={status === 'loading'} className='upload-files-button'>Upload Files</button>
            
        </div>
    );
};
