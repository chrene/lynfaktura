import { InvoiceData } from '../../../../types/invoice-data';
const numberFormatter = new Intl.NumberFormat('da-DK', {
  style: 'currency',
  currency: 'DKK',
  currencyDisplay: 'code',
});

const dateFormatter = new Intl.DateTimeFormat('da-DK', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const formatDate = (value: string) => {
  const date = new Date(value);
  return dateFormatter.format(date);
};

const formatDKK = (value: number | string) => {
  if (typeof value === 'string') {
    return numberFormatter.format(parseFloat(value));
  }
  return numberFormatter.format(value);
};

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
          width: '70%',
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
              [
                { text: 'Fakturanummer:', bold: true },
                { text: data.invoice.number, alignment: 'right' },
              ],
              // date iso format: DD-MM-YYYY
              [
                { text: 'Fakturadato:', bold: true },
                { text: formatDate(data.invoice.date), alignment: 'right' },
              ],
              [
                { text: 'Betalingsdato:', bold: true },
                { text: formatDate(data.invoice.due), alignment: 'right' },
              ],
              [
                { text: 'Reg nr.:', bold: true },
                {
                  text: data.invoice.bankRegistrationNumber,
                  alignment: 'right',
                },
              ],
              [
                { text: 'Konto nr.:', bold: true },
                { text: data.invoice.bankAccountNumber, alignment: 'right' },
              ],
            ],
          },
        },
      ],
    },
    {
      marginTop: 50,
      width: '100%',
      layout: {
        hLineColor: '#cccccc',
        paddingTop: function (i, node) {
          return i === 1 ? 10 : 2;
        },
        paddingBottom: function (i, node) {
          return i === node.table.body.length - 1 ? 10 : 2;
        },
        paddingRight: function (i, node) {
          return 0;
        },

        paddingLeft: function (i, node) {
          return 0;
        },

        hLineWidth: function (i, node) {
          if (i === 1 || i === node.table.body.length) {
            return 0.5;
          }
          return 0;
        },
        vLineWidth: function (i, node) {
          return 0;
        },
      },
      table: {
        width: '100%',
        headerRows: 1,
        widths: ['60%', '10%', '*', 'auto'],
        body: [
          [
            { text: 'Beskrivelse', bold: true },
            { text: 'Antal', bold: true },
            { text: 'Pris', bold: true },
            { text: 'Sum', bold: true, alignment: 'right' },
          ],
          ...data.lines.map((line) => {
            return [
              {
                text: line.description,
                style: ['smaller'],
              },
              { text: line.quantity, style: ['smaller'] },
              {
                text: formatDKK(line.price),
                style: ['smaller'],
              },
              {
                text: formatDKK(line.price * line.quantity),
                style: ['smaller', 'alignRight'],
              },
            ];
          }),
        ],
      },
    },
    {
      width: '100%',
      marginTop: 20,
      layout: 'headerLineOnly', // optional
      table: {
        widths: ['60%', '10%', '*', 'auto'],
        body: [
          [
            {},
            {},
            { text: 'Subtotal:', bold: true },
            {
              text: formatDKK(
                data.lines.reduce(
                  (acc, cur) => cur.price * cur.quantity + acc,
                  0
                )
              ),
              alignment: 'right',
            },
          ],
          [
            {},
            {},
            { text: data.addTax ? 'Moms (25%):' : '', bold: true },
            {
              text: data.addTax
                ? formatDKK(
                    data.lines.reduce(
                      (acc, cur) => cur.price * cur.quantity + acc,
                      0
                    ) * 0.25
                  )
                : '',
              alignment: 'right',
            },
          ],
          [{}, {}, {}, {}],
          [
            {},
            {},
            { text: 'Total:', bold: true },
            {
              text: formatDKK(
                data.lines.reduce(
                  (acc, cur) => cur.price * cur.quantity + acc,
                  0
                ) * (data.addTax ? 1.25 : 1)
              ),
              alignment: 'right',
              decoration: 'underline',
            },
          ],
        ],
      },
    },
    data.lateFee
      ? {
          marginTop: 50,
          text: 'Ved for sen betaling pålægges rykkergebyr på kr. 100.\nDer tilskrives endvidere renter på 2% pr. påbegyndt måned.',
        }
      : {},
  ],
  styles: {
    header: {
      paddingLeft: 0,
      fontSize: 32,
      bold: true,
      margin: [-3, 50, 0, 50],
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
    font: 'Montserrat',
    columnGap: 0,
    lineHeight: 1.1,
    fontSize: 9,
  },
});
