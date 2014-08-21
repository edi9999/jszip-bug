fs=require('fs');
JSZip=require('jszip');
content=fs.readFileSync('qrcodeTest.zip');
qrcodezip= new JSZip(content);
//console.log(qrcodezip);
data=qrcodezip.files['blabla.png'].asText();
