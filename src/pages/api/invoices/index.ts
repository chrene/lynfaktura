import path from 'path';
import PdfPrinter from 'pdfmake';
import { documentData } from './template';

function createPdfBinary(pdfDoc): Promise<Buffer> {
  const fontDescriptors = {
    Montserrat: {
      normal: path.resolve('./public/', 'fonts/Montserrat-Regular.ttf'),
      bold: path.resolve('./public/', 'fonts/Montserrat-Bold.ttf'),
      italics: path.resolve('./public/', 'fonts/Montserrat-Italic.ttf'),
      bolditalics: path.resolve(
        './public/',
        'fonts/Montserrat-MediumItalic.ttf'
      ),
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
