// playground requires you to assign document definition to a variable called dd

import { InvoiceData } from '../../../types/invoice-data';

export const documentData = (data: InvoiceData) => ({
  content: [
    {
      alignment: 'right',
      columns: [
        {},
        {
          stack: [
            {
              stack: [data.sender.name, `CVR ${data.sender.vat}`],
              margin: [0, 2],
            },
            {
              stack: [
                data.sender.address,
                `${data.sender.zipcode} ${data.sender.city}`,
              ],
              margin: [0, 2],
            },
            {
              stack: [data.sender.email, data.sender.phone].filter(Boolean),
              margin: [0, 2],
            },
          ],
        },
      ],
    },
    { text: 'Faktura', style: ['header'] },
    {
      columns: [
        {
          width: '55%',
          stack: [
            data.receiver.name,
            `${data.receiver.address}, ${data.receiver.zipcode} ${data.receiver.city}`,
            `CVR ${data.receiver.vat}`,
          ],
        },
        {
          width: '*',
          layout: 'noBorders', // optional
          table: {
            widths: ['*', 'auto'],
            body: [
              [{ text: 'Fakturanummer:', bold: true }, data.invoice.number],
              // date iso format: DD-MM-YYYY
              [{ text: 'Fakturadato:', bold: true }, data.invoice.date],
              [{ text: 'Betalingsdato:', bold: true }, data.invoice.due],
              [
                { text: 'Reg nr.:', bold: true },
                data.invoice.bankRegistrationNumber,
              ],
              [
                { text: 'Konto nr.:', bold: true },
                data.invoice.bankAccountNumber,
              ],
            ],
          },
        },
      ],
    },
    {
      marginTop: 50,
      width: '100%',
      layout: 'headerLineOnly', // optional
      table: {
        headerRows: 1,
        widths: ['60%', '*', '*', 'auto'],
        body: [
          [
            { text: 'Beskrivelse', bold: true, fontSize: 10 },
            { text: 'Antal', bold: true, fontSize: 10 },
            { text: 'Pris', bold: true, fontSize: 10 },
            { text: 'Sum', bold: true, alignment: 'right', fontSize: 10 },
          ],
          ...data.lines.map((line) => {
            return [
              {
                text: line.description,
                style: ['smaller'],
              },
              { text: line.quantity, style: ['smaller'] },
              {
                text: `DKK ${parseFloat(line.price).toFixed(2)}`,
                style: ['smaller'],
              },
              {
                text: `DKK ${(
                  parseFloat(line.price) * parseFloat(line.quantity)
                ).toFixed(2)}`,
                style: ['smaller', 'alignRight'],
              },
            ];
          }),
        ],
      },
    },
    {
      marginTop: 20,
      width: '100%',
      layout: 'headerLineOnly', // optional
      table: {
        widths: ['60%', '*', '*', 'auto'],
        body: [
          [
            {},
            {},
            { text: 'Subtotal:', bold: true },
            {
              text: `DKK ${data.lines.reduce(
                (acc, cur) =>
                  parseFloat(cur.price) * parseFloat(cur.quantity) + acc,
                0
              )}`,
              alignment: 'right',
            },
          ],
          [
            {},
            {},
            { text: 'Moms (25%):', bold: true },
            {
              text: `DKK ${
                data.lines.reduce(
                  (acc, cur) =>
                    parseFloat(cur.price) * parseFloat(cur.quantity) + acc,
                  0
                ) * 0.25
              }`,
              alignment: 'right',
            },
          ],
          [{}, {}, {}, {}],
          [
            {},
            {},
            { text: 'Total:', bold: true },
            {
              text: `DKK ${
                data.lines.reduce(
                  (acc, cur) =>
                    parseFloat(cur.price) * parseFloat(cur.quantity) + acc,
                  0
                ) * 1.25
              }`,
              alignment: 'right',
              decoration: 'underline',
            },
          ],
        ],
      },
    },
  ],
  styles: {
    header: {
      fontSize: 28,
      bold: true,
      margin: [0, 50],
    },
    bigger: {
      fontSize: 15,
      italics: true,
    },
    alignRight: {
      alignment: 'right',
    },
  },
  defaultStyle: {
    columnGap: 30,
    lineHeight: 1.1,
    fontSize: 10,
  },
});
