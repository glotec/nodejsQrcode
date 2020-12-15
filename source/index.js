const express = require('express');
const QRCode = require('qrcode');

const app = express();

const generateQRCode = async content => {
    try
    {
        console.log(await QRCode.toString(content, { type: 'terminal' }));
    }
    catch(err)
    {
        console.log('Error :', err);
    }
}

//call function
generateQRCode("Generate QR code in terminal using Node js");

//QRCode for to be used leter
const generateQRCodeImage = async url => {
    try
    {
        console.log(await QRCode.toDataURL(url));
    }
    catch(err)
    {
        console.log('Error :', err);
    }
}

generateQRCodeImage('https://www.techyhunger.com/');

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`localhost: http://localhost:${port}/`));

module.exports = { app };