export const defaultFormValues = {
  lateFee: false,
  addTax: true,
  lines: [
    {
      description: '',
      quantity: '',
      price: '',
    },
  ],
  sender: {
    name: '',
    address: '',
    zipcode: '',
    city: '',
    vat: '',
  },
  receiver: {
    name: '',
    address: '',
    zipcode: '',
    city: '',
    vat: '',
  },
  invoice: {
    number: '',
    date: '',
    due: '',
    bankRegistrationNumber: '',
    bankAccountNumber: '',
  },
};
