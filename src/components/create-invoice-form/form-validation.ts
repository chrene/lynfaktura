import * as yup from 'yup';

const invoiceLinesSchema = yup.array().of(
  yup.object({
    description: yup.string().max(50, 'Max 50 tegn').required('Påkrævet'),
    quantity: yup
      .number()
      .integer('Skal være et heltal')
      .min(1, 'Minimum 1')
      .required('Påkrævet'),
    price: yup.number().min(1, 'Minimum 1').required('Påkrævet'),
  })
);

const invoiceSenderSchema = yup.object({
  name: yup.string().required('Påkrævet'),
  address: yup.string().required('Påkrævet'),
  zipcode: yup
    .string()
    .length(4, 'Postnummer skal være på 4 tegn')
    .required('Påkrævet'),
  city: yup.string().required('Påkrævet'),
  vat: yup.string().required('Påkrævet'),
  email: yup.string().email('Ugyldig email'),
  phone: yup
    .string()
    .nullable()
    .test(
      'empty-or-8-characters-check',
      'Telefon skal være på 8 tegn',
      (phone) => !phone || phone.length >= 8
    ),
});

const invoiceReceiverSchema = yup.object({
  name: yup.string().required('Påkrævet'),
  address: yup.string().required('Påkrævet'),
  zipcode: yup.string().required('Påkrævet'),
  city: yup.string().required('Påkrævet'),
  vat: yup.string().required('Påkrævet'),
});

export const validationSchema = yup.object({
  lines: invoiceLinesSchema,
  sender: invoiceSenderSchema,
  receiver: invoiceReceiverSchema,
  invoice: yup.object({
    number: yup.string().required('Påkrævet'),
    date: yup.string().required('Påkrævet'),
    due: yup.string().required('Påkrævet'),
    bankRegistrationNumber: yup
      .string()
      .length(4, 'Registrerings nummer skal være 4 tegn')
      .required('Påkrævet'),
    bankAccountNumber: yup
      .string()
      .length(8, 'Kontonummer skal være 8 tegn')
      .required('Påkrævet'),
  }),
});
