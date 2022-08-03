import * as yup from 'yup';

const invoiceLinesSchema = yup.array().of(
  yup.object({
    description: yup.string().max(50, 'Max 50 tegn').required('Påkrævet'),
    quantity: yup
      .number()
      .typeError('Skal være et tal')
      .min(1, 'Skal minimum være 1')
      .required('Påkrævet'),
    price: yup
      .number()
      .typeError('Skal være et tal')
      .min(1, 'Skal minimum være 1')
      .required('Påkrævet'),
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
  phone: yup.string().nullable(),
});

const invoiceReceiverSchema = yup.object({
  name: yup.string().required('Påkrævet'),
  address: yup.string().required('Påkrævet'),
  zipcode: yup.string().required('Påkrævet'),
  city: yup.string().required('Påkrævet'),
  isCompany: yup.boolean().required('Påkrævet'),
  vat: yup.string().when('isCompany', {
    is: true,
    then: yup.string().required('Påkrævet'),
  }),
});

export const validationSchema = yup.object({
  lines: invoiceLinesSchema,
  sender: invoiceSenderSchema,
  receiver: invoiceReceiverSchema,
  invoice: yup.object({
    number: yup.string().required('Påkrævet'),
    date: yup.string().required('Påkrævet'),
    due: yup.string().required('Påkrævet'),
    bankRegistrationNumber: yup.string().required('Påkrævet'),
    bankAccountNumber: yup.string().required('Påkrævet'),
  }),
});
