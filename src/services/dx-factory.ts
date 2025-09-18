import { faker } from '@faker-js/faker';
import { InvoiceData } from '../../types/invoice-data';

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
          range(faker.number.int({ min: 1, max: 5 })).map(() => {
            return {
              description: faker.lorem.sentence(3),
              quantity: faker.number.int({ min: 1, max: 10 }),
              price: faker.number.int({ min: 1, max: 1000 }),
            };
          }),
        receiver: {
          name: data?.receiver.name || faker.person.fullName(),
          address: data?.receiver.address || faker.location.streetAddress(),
          zipcode: data?.receiver.zipcode || faker.location.zipCode('####'),
          city: data?.receiver.city || faker.location.city(),
          vat: data?.receiver.vat || faker.finance.accountNumber(8),
          isCompany: true,
        },
        sender: {
          ...data?.sender,
          name: data?.sender.name || faker.person.fullName(),
          address: data?.sender.address || faker.location.streetAddress(),
          zipcode: data?.sender.zipcode || faker.location.zipCode('####'),
          city: data?.sender.city || faker.location.city(),
          vat: data?.sender.vat || faker.finance.accountNumber(8),
          email: data?.sender.email || faker.internet.email(),
          phone: data?.sender.phone || faker.phone.number(),
        },
        invoice: {
          ...data?.invoice,
          bankAccountNumber:
            data?.invoice.bankAccountNumber || faker.finance.accountNumber(8),
          bankRegistrationNumber:
            data?.invoice.bankRegistrationNumber || faker.finance.accountNumber(4),
          number: data?.invoice.number || faker.string.alphanumeric(6),
          date: data?.invoice.date || new Date().toISOString().split('T')[0],
          due:
            data?.invoice.due ||
            faker.date.soon({ days: 8 }).toISOString().split('T')[0],
        },
        addTax: data?.addTax || faker.datatype.boolean(),
        lateFee: data?.lateFee || faker.datatype.boolean(),
      };
    },
  },
};
