// playground requires you to assign document definition to a variable called dd

export const pdfDocument = {
  content: [
    {
      alignment: 'right',
      columns: [
        {},
        {
          stack: [
            {
              stack: ['Enevoldsen.io', 'CVR 42080462'],
              margin: [0, 2],
            },
            {
              stack: ['Harevænget 3', '4200 Slagelse'],
              margin: [0, 2],
            },

            'c@enevoldsen.io',
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
            'YOURLOCAL ApS',
            'Østerbrogade 50, 5. th., 2100 København Ø',
            'CVR 35874739',
          ],
        },
        {
          width: '*',
          layout: 'noBorders', // optional
          table: {
            widths: ['*', 'auto'],
            body: [
              [{ text: 'Fakturanummer:', bold: true }, '1007'],
              [{ text: 'Fakturadato:', bold: true }, '29/3/2022'],
              [{ text: 'Betalingsdato:', bold: true }, '12/4/2022'],
              [{ text: 'Konto nr.:', bold: true }, '6295149890'],
              [{ text: 'Reg nr.:', bold: true }, '2433'],
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
          [
            {
              text: 'Udført timebaseret arbejde YL-492, YL-496, YL-500',
              style: ['smaller'],
            },
            { text: '5,00', style: ['smaller'] },
            { text: 'DKK 500,00', style: ['smaller'] },
            { text: 'DKK 2500,00', style: ['smaller', 'alignRight'] },
          ],
          [
            {
              text: 'Udført timebaseret arbejde YL-492, YL-496, YL-500',
              style: ['smaller'],
            },
            { text: '5,00', style: ['smaller'] },
            { text: 'DKK 500,00', style: ['smaller'] },
            { text: 'DKK 2500,00', style: ['smaller', 'alignRight'] },
          ],
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
            { text: 'DKK 2.500,00', alignment: 'right' },
          ],
          [
            {},
            {},
            { text: 'Moms (25%):', bold: true },
            { text: 'DKK 625,00', alignment: 'right' },
          ],
          [{}, {}, {}, {}],
          [
            {},
            {},
            { text: 'Total:', bold: true },
            {
              text: 'DKK 3.125,00',
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
};
