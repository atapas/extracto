import React, { useState } from 'react';

import Dropzone from 'react-dropzone-uploader';

const ImageUpload = () => {
    const [uploadStatus, setUploadStatus] = useState('');
    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { 
        console.log(status, meta, file);
        setUploadStatus(status);
    }

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }
    return (
        <div>
            { uploadStatus }
            <Dropzone
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="image/*,audio/*,video/*"
            />
        </div>
    )
};
export default ImageUpload;