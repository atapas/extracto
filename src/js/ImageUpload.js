import React, { useState } from 'react';

import Dropzone from 'react-dropzone-uploader';

import Tesseract from 'tesseract.js';

import Result from './Result';

const ImageUpload = () => {
    const [uploadStatus, setUploadStatus] = useState('');
    const [resultText, setResultText] = useState('');
    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { 
        console.log(status, meta, file);
        
        if (status === 'removed') {
            setResultText('');
            setUploadStatus('');
        }

        if (status === 'done') {
            Tesseract.recognize(
                file,
                'eng',
                { 
                    logger: m => {
                        console.log(m);
                        setUploadStatus(m.status);
                    }
                }
              ).then(({ data: { text } }) => {
                console.log(text);
                setUploadStatus('Done');
                setResultText(text);
              })
        }
    }

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }
    return (
        <div>
            <Dropzone
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="image/*,audio/*,video/*"
            />
            <span>{ uploadStatus }</span>
            <Result text={ resultText } />
        </div>
    )
};
export default ImageUpload;