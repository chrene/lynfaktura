import { InvoiceData } from '../../types/invoice-data';
import { faker } from '@faker-js/faker';

const range = (start: number, end?: number) => {
  const result = [];

  if (end == null) {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

export const dxFactory = {
  invoice: {
    create: (data?: Partial<InvoiceData>): InvoiceData => {
      return {
        ...data,
        lines:
          data?.lines ||
          range(faker.datatype.number({ min: 1, max: 5 })).map(() => {
            return {
              description: faker.lorem.sentence(3),
              quantity: faker.datatype.number({ min: 1, max: 10 }),
              price: faker.datatype.number({ min: 1, max: 1000 }),
            };
          }),
        receiver: {
          name: data?.receiver.name || faker.name.findName(),
          address: data?.receiver.address || faker.address.streetAddress(),
          zipcode: data?.receiver.zipcode || faker.address.zipCode('####'),
          city: data?.receiver.city || faker.address.city(),
          vat: data?.receiver.vat || faker.finance.account(8),
        },
        sender: {
          ...data?.sender,
          name: data?.sender.name || faker.name.findName(),
          address: data?.sender.address || faker.address.streetAddress(),
          zipcode: data?.sender.zipcode || faker.address.zipCode('####'),
          city: data?.sender.city || faker.address.city(),
          vat: data?.sender.vat || faker.finance.account(8),
          email: data?.sender.email || faker.internet.email(),
          phone: data?.sender.phone || faker.phone.phoneNumber('+45########'),
        },
        invoice: {
          ...data?.invoice,
          bankAccountNumber:
            data?.invoice.bankAccountNumber || faker.finance.account(8),
          bankRegistrationNumber:
            data?.invoice.bankRegistrationNumber || faker.finance.account(4),
          number: data?.invoice.number || faker.random.alphaNumeric(6),
          date: data?.invoice.date || new Date().toISOString().split('T')[0],
          due:
            data?.invoice.due ||
            faker.date.soon(8, new Date()).toISOString().split('T')[0],
        },
        addTax: data?.addTax || faker.datatype.boolean(),
        lateFee: data?.lateFee || faker.datatype.boolean(),
      };
    },
  },
};
