import { join } from 'path';
import PdfPrinter from 'pdfmake';
import { documentData } from './template';

const basePath =
  process.env.NODE_ENV === 'production' ? 'https://lynfaktura.dk/' : './';
function createPdfBinary(pdfDoc): Promise<Buffer> {
  const fontDescriptors = {
    Montserrat: {
      normal: join(basePath, 'fonts/Montserrat-Regular.ttf'),
      bold: join(basePath, 'fonts/Montserrat-Bold.ttf'),
      italics: join(basePath, 'fonts/Montserrat-Italic.ttf'),
      bolditalics: join(basePath, 'fonts/Montserrat-MediumItalic.ttf'),
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
