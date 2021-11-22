import { useEffect } from 'react';

import { useDropzone } from 'react-dropzone';

function FileUpload({onGetFile}) {

  
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: 'application/msword, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    multiple: false
  });
  const acceptedFileItems = acceptedFiles.map(file => (
    <span key={file.path}>
      {file.path}
    </span>
  ));
  // console.log(acceptedFiles[0])
  const onStateNow = () => {
    if (isDragAccept) {
      return "hello icon__file active"
    } else if (isDragReject) {
      return "hello icon__file non_active"
    }
    return "hello icon__file"
  }
  useEffect(() => {
     onGetFile(acceptedFiles[0]);
  }, [acceptedFiles, onGetFile]);
  const resDrop = () => {
    if (acceptedFiles.length !== 0) {
      return <p>{acceptedFileItems}</p>
    } else if (isDragReject) {
      return <p>выбраний файл не является документом</p>
    } else if(isDragAccept) {
      return <p>выбраний файл является документом</p>
    } else return <p>выберете или перетащите файл</p>
    
  }
  return (
    <div>
      <div {...getRootProps({ className: onStateNow() })}>
        <input {...getInputProps()} />
        {resDrop()}
      </div>
    </div>
  );
}

export default FileUpload;
