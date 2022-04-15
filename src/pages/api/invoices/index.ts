import getConfig from 'next/config';
import { join } from 'path';
import PdfPrinter from 'pdfmake';
import { documentData } from './template';

const { serverRuntimeConfig } = getConfig();

function createPdfBinary(pdfDoc): Promise<Buffer> {
  const fontDescriptors = {
    Roboto: {
      normal: join(
        serverRuntimeConfig.PROJECT_ROOT,
        './public/fonts/Roboto-Regular.ttf'
      ),
      bold: join(
        serverRuntimeConfig.PROJECT_ROOT,
        './public/fonts/Roboto-Bold.ttf'
      ),
      italics: join(
        serverRuntimeConfig.PROJECT_ROOT,
        './public/fonts/Roboto-Italic.ttf'
      ),
      bolditalics: join(
        serverRuntimeConfig.PROJECT_ROOT,
        './public/fonts/Roboto-MediumItalic.ttf'
      ),
    },
    Montserrat: {
      normal: join(
        serverRuntimeConfig.PROJECT_ROOT,
        './public/fonts/Montserrat-Regular.ttf'
      ),
      bold: join(
        serverRuntimeConfig.PROJECT_ROOT,
        './public/fonts/Montserrat-Bold.ttf'
      ),
      italics: join(
        serverRuntimeConfig.PROJECT_ROOT,
        './public/fonts/Montserrat-Italic.ttf'
      ),
      bolditalics: join(
        serverRuntimeConfig.PROJECT_ROOT,
        './public/fonts/Montserrat-MediumItalic.ttf'
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
