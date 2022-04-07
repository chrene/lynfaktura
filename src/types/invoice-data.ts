interface InvoiceLine {
  description: string;
  quantity: string;
  price: string;
}

export interface InvoiceData {
  lateFee: boolean;
  addTax: boolean;
  lines: InvoiceLine[];
  sender: {
    name: string;
    address: string;
    zipcode: string;
    city: string;
    vat: string;
    email: string;
    phone: string;
  };
  receiver: {
    name: string;
    address: string;
    zipcode: string;
    city: string;
    vat: string;
  };
  invoice: {
    number: string;
    date: string;
    due: string;
    bankRegistrationNumber: string;
    bankAccountNumber: string;
  };
}
