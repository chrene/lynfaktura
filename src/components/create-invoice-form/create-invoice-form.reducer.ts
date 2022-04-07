export const initialFormState = {
  fetchingSenderInfo: false,
  fetchingReceiverInfo: false,
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
    date: new Date().toISOString().split('T')[0],
    dueDate: new Date(new Date().setDate(new Date().getDate() + 8))
      .toISOString()
      .split('T')[0],
    bankAccountNumber: '',
    bankRegNumber: '',
    dateError: '',
  },
  lateFee: false,
  addTax: true,
  invoiceLines: [{ description: '', quantity: '', price: '' }],
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE_SENDER_INPUT_CHANGE': {
      const { name, value } = action;
      return {
        ...state,
        sender: {
          ...state.sender,
          [name]: value,
        },
      };
    }
    case 'HANDLE_INVOICE_INPUT_CHANGE': {
      const { name, value } = action;
      const suggesteddueDate = new Date(
        new Date(value).setDate(new Date(value).getDate() + 8)
      );

      let nextState = {
        ...state,
        invoice: { ...state.invoice, dateError: '' },
      };

      if (name === 'date' && state.invoice.dueDate === '') {
        // Set the pay date to 8 days after the invoice date
        nextState = {
          ...nextState,
          invoice: {
            ...nextState.invoice,
            [name]: value,
            dueDate: suggesteddueDate.toISOString().split('T')[0],
          },
        };
      } else {
        nextState = {
          ...nextState,
          invoice: {
            ...nextState.invoice,
            [name]: value,
          },
        };
      }

      if (
        new Date(nextState.invoice.dueDate).valueOf() <
        new Date(nextState.invoice.date).valueOf()
      ) {
        nextState = {
          ...nextState,
          invoice: {
            ...nextState.invoice,
            dateError: 'Betalingsdato kan ikke være før fakturadato',
          },
        };
      }

      return nextState;
    }
    case 'HANDLE_RECEIVER_INPUT_CHANGE': {
      const { name, value } = action;
      return {
        ...state,
        receiver: {
          ...state.receiver,
          [name]: value,
        },
      };
    }
    case 'HANDLE_INPUT_CHANGE':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'HANDLE_ADD_INVOICE_LINE':
      return {
        ...state,
        invoiceLines: [
          ...state.invoiceLines,
          {
            description: '',
            quantity: '',
            price: '',
          },
        ],
      };
    case 'HANDLE_INVOICE_LINE':
      return {
        ...state,
        invoiceLines: state.invoiceLines.map((invoiceLine, index) => {
          if (index === action.index) {
            return {
              ...invoiceLine,
              [action.name]: action.value,
            };
          }
          return invoiceLine;
        }),
      };
    case 'HANDLE_REMOVE_INVOICE_LINE':
      return {
        ...state,
        invoiceLines: state.invoiceLines.filter(
          (invoiceLine, index) => index !== action.index
        ),
      };
    case 'FETCH_SENDER_INFO':
      return {
        ...state,
        fetchingSenderInfo: true,
      };
    case 'FETCH_SENDER_INFO_SUCCESS':
      return {
        ...state,
        fetchingSenderInfo: false,
        sender: {
          vat: action.payload.vat,
          name: action.payload.name,
          address: action.payload.address,
          city: action.payload.city,
          zipcode: action.payload.zipcode,
        },
      };
    case 'FETCH_SENDER_INFO_FAILURE':
      return {
        ...state,
        fetchingSenderInfo: false,
      };
    case 'FETCH_RECEIVER_INFO':
      return {
        ...state,
        fetchingReceiverInfo: true,
      };
    case 'FETCH_RECEIVER_INFO_SUCCESS':
      return {
        ...state,
        fetchingReceiverInfo: false,
        receiver: {
          vat: action.payload.vat,
          name: action.payload.name,
          address: action.payload.address,
          city: action.payload.city,
          zipcode: action.payload.zipcode,
        },
      };
    case 'FETCH_RECEIVER_INFO_FAILURE':
      return {
        ...state,
        fetchingReceiverInfo: false,
      };
    case 'HANDLE_SET_TEST_PAYLOAD':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
