import React, { useState } from 'react';

import Dropzone from 'react-dropzone-uploader';

import Tesseract from 'tesseract.js';

import Result from './Result';
import Progress from './Progress';

const ImageUpload = () => {
    const [uploadStatus, setUploadStatus] = useState({
        'progress': 0,
        'label': ''
    });
    const [resultText, setResultText] = useState('');
    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { 
        console.log(status, meta, file);
        
        if (status === 'removed') {
            setResultText('');
            setUploadStatus({
                ...uploadStatus,
                ['progress']: 0,
                ['label']: ''
            });
        }

        if (status === 'done') {
            Tesseract.recognize(
                file,
                'eng',
                { 
                    logger: m => {
                        console.log(m);
                        setUploadStatus({
                            ...uploadStatus,
                            ['progress']: m.progress,
                            ['label']: m.status
                        });
                    }
                }
              ).then(({ data: { text } }) => {
                console.log(text);
                // setUploadStatus('Done');
                setResultText(text);
              })
        }
    }

    return (
        <div>
            <Dropzone
                onChangeStatus={handleChangeStatus}
                accept="image/*,audio/*,video/*"
            />
            
            <Progress progress={ uploadStatus.progress } label={ uploadStatus.label } />
            <Result text={ resultText } />
        </div>
    )
};

export default ImageUpload;