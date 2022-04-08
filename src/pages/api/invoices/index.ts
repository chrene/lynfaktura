import { documentData } from './template';
import PdfPrinter from 'pdfmake';
import { join } from 'path';

function createPdfBinary(pdfDoc): Promise<Buffer> {
  const fontDescriptors = {
    Roboto: {
      normal: 'public/fonts/Roboto-Regular.ttf',
      bold: 'public/fonts/Roboto-Bold.ttf',
      italics: 'public/fonts/Roboto-Italic.ttf',
      bolditalics: 'public/fonts/Roboto-MediumItalic.ttf',
    },
    Montserrat: {
      normal: 'public/fonts/Montserrat-Regular.ttf',
      bold: 'public/fonts/Montserrat-Bold.ttf',
      italics: 'public/fonts/Montserrat-Italic.ttf',
      bolditalics: 'public/fonts/Montserrat-MediumItalic.ttf',
    },
  };
  const printer = new PdfPrinter(fontDescriptors);
  const doc = printer.createPdfKitDocument(pdfDoc);

  return new Promise((resolve, reject) => {
    const chunks = [];
    let result;
    doc.on('data', function (chunk) {
      chunks.push(chunk);
    });
    doc.on('end', function () {
      result = Buffer.concat(chunks);
      return resolve(result);
    });
    doc.end();
  });
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const dd = documentData(req.body);

    const data = await createPdfBinary(dd);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline;filename=invoice.pdf');

    res.send(data);
  } else {
    // Handle any other HTTP method
  }
}
