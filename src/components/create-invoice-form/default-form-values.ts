import { InvoiceData } from '../../../types/invoice-data';

export const defaultFormValues: InvoiceData = {
  lateFee: false,
  addTax: true,
  lines: [
    {
      description: '',
      quantity: 1,
      price: 0,
    },
  ],
  sender: {
    name: '',
    address: '',
    zipcode: '',
    city: '',
    vat: '',
    email: '',
    phone: '',
  },
  receiver: {
    name: '',
    address: '',
    zipcode: '',
    city: '',
    vat: '',
  },
  invoice: {
    number: '100',
    date: new Date().toISOString().split('T')[0],
    due: new Date(new Date().getTime() + 8 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0],
    bankRegistrationNumber: '',
    bankAccountNumber: '',
  },
};
