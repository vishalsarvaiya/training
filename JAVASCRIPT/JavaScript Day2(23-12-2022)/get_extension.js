function getFileExtension(filename){

    // get file extension
    const a = "AudioBufr.ssdf";
    const extension = a.split('.').pop();
    return extension;
}

// passing the filename
const result1 = getFileExtension('module.js');
console.log(result1);

const result2 = getFileExtension('module.txt');
console.log(result2);