import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFiles, fetchFiles } from '../../redux/features/file/fileSlice';
import FileUpload from '../FileUpload/FileUpload';
import './DocumentsSection.css'
import { useTranslation } from 'react-i18next';

const fileDisplayNames = {
    'uni-cert': 'UNI Certificate',
    'photo-3x4': 'Photo 3x4',
    'attestat': 'Attestat',
    'id-doc': 'ID Document'
};

export const DocumentsSection = () => {
    const { t } = useTranslation()
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
            <h3>{t('available_documents')}</h3>
            {fetchStatus === 'loading' && <p>{t('state_loading')}</p>}
            {fetchStatus === 'succeeded' && (
                <div className='files-container'>
                    {files && files.map(file => (
                        <div className='file-container' key={file._id}>
                            <p>{file.filename}</p>
                            {file.path && (
                                <a href={`/api/${file.path.replace(/\\/g, '/')}`} target="_blank" rel="noopener noreferrer">{t('view_document')}</a>
                            )}
                        </div>
                    ))}
                </div>
            )}
            {fetchStatus === 'failed' && <p>{t('state_failed_files')}</p>}
            <h3>{t('upload_documents')}</h3>
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
            {uploadStatus === 'loading' && <div className='server-message-block'>{t('state_uploading_files')}</div>}
            {uploadStatus === 'succeeded' && <div className='server-message-block'>{t('state_uploading_successful')}!</div>}
            {uploadStatus === 'failed' && <div className='server-message-block'>Error: {error}</div>}
            <button onClick={handleFileUpload} disabled={uploadStatus === 'loading'} className='upload-files-button'>{t('upload_files_button')}</button>
            
        </div>
    );
};
