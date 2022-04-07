import classNames from 'classnames';
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { getCompanyByVAT } from '../../services/cvr-api';
import Button from '../button';
import { Divider } from '../divider/divider';
import { FlexContainer } from '../flex-container';
import FormInput from '../form-input';
import FormInputCheckbox from '../form-input-checkbox';
import { CloseIcon, DownloadIcon } from '../icon';
import { defaultFormValues } from './default-form-values';
import { FormGroup } from './form-group';
import { InvoiceSection } from './invoice-section';

export const CreateInvoiceForm = () => {
  const { control, register, getValues, reset, handleSubmit } = useForm({
    defaultValues: defaultFormValues,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'lines',
  });

  const handleDownloadInvoicePDF = () => {
    fetch('/api/invoice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(getValues()),
    });
  };

  const handleFetchSenderCompany = async (e: any) => {
    e.preventDefault();
    const result = await getCompanyByVAT(getValues().sender.vat);
    reset({
      ...getValues(),
      sender: {
        ...getValues().sender,
        name: result.name,
        address: result.address,
        zipcode: result.zipcode,
        city: result.city,
      },
    });
  };

  const handleFetchReceiverCompany = async (e: any) => {
    e.preventDefault();
    const result = await getCompanyByVAT(getValues().receiver.vat);
    reset({
      ...getValues(),
      receiver: {
        ...getValues().receiver,
        name: result.name,
        address: result.address,
        zipcode: result.zipcode,
        city: result.city,
      },
    });
  };

  const onFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className='grid grid-cols-12 gap-16 mx-auto mt-16 relative'>
        <div className='col-span-8 bg-base-100 rounded-xl p-12'>
          <FlexContainer dividers>
            <InvoiceSection title='Fakturalinjer'>
              <ul className='gap-4 flex flex-col'>
                {fields.length > 0 ? (
                  fields.map((item, index) => (
                    <li
                      className='grid grid-cols-12 p-8 mb-4 xl:mb-0 xl:p-0 gap-8 xl:gap-8 border xl:border-none'
                      key={item.id}
                    >
                      <FormInput
                        className='col-span-7'
                        topLeftLabel='Beskrivelse'
                        register={{ ...register(`lines.${index}.description`) }}
                      />
                      <FormInput
                        className='col-span-2'
                        type='number'
                        topLeftLabel='Antal'
                        register={{ ...register(`lines.${index}.quantity`) }}
                      />
                      <FormInput
                        className='col-span-2'
                        type='number'
                        topLeftLabel='Enhedspris'
                        register={{ ...register(`lines.${index}.price`) }}
                      />

                      <button
                        className={classNames(
                          `btn btn-circle btn-error btn-link btn-xs set-fill text-neutral self-center mt-10 col-span-12 xl:col-span-1`,
                          {
                            hidden: index === 0,
                          }
                        )}
                        onClick={() => remove(index)}
                      >
                        <CloseIcon />
                      </button>
                    </li>
                  ))
                ) : (
                  <div className='text-center'>Ingen fakturalinjer</div>
                )}
              </ul>
              <div className='w-fit self-center'>
                <Button
                  ghost
                  onClick={() =>
                    append({ description: '', quantity: '', price: '' })
                  }
                >
                  Tilføj ny linje
                </Button>
              </div>
            </InvoiceSection>

            {/* Sender */}
            <InvoiceSection title='Afsender'>
              <FlexContainer>
                <FormGroup cols>
                  <FormInput
                    className='col-span-6'
                    placeholder='CVR'
                    topLeftLabel='CVR'
                    register={{ ...register('sender.vat') }}
                  />
                  <button
                    className='btn btn-primary gap-2 self-end col-span-3'
                    onClick={handleFetchSenderCompany}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                      />
                    </svg>
                    Hent data
                  </button>
                </FormGroup>
              </FlexContainer>
              <FlexContainer>
                <FormGroup autoCols>
                  <FormInput
                    placeholder='Navn'
                    topLeftLabel='Navn'
                    register={{ ...register('sender.name') }}
                  />
                  <FormInput
                    placeholder='Adresse'
                    topLeftLabel='Adresse'
                    register={{ ...register('sender.address') }}
                  />
                </FormGroup>
                <FormGroup autoCols>
                  <FormInput
                    placeholder='Postnummer'
                    topLeftLabel='Postnummer'
                    register={{ ...register('sender.zipcode') }}
                  />
                  <FormInput
                    placeholder='By'
                    topLeftLabel='By'
                    register={{ ...register('sender.city') }}
                  />
                </FormGroup>
              </FlexContainer>
            </InvoiceSection>

            {/* Receiver */}
            <InvoiceSection title='Modtager'>
              <FormGroup cols>
                <FormInput
                  className='col-span-6'
                  placeholder='CVR'
                  topLeftLabel='CVR'
                  register={{ ...register('receiver.vat') }}
                />
                <button
                  className='btn btn-primary gap-2 col-span-3 self-end'
                  onClick={(e) => handleFetchReceiverCompany(e)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                    />
                  </svg>
                  Hent data
                </button>
              </FormGroup>
              <FlexContainer>
                <FormGroup autoCols>
                  <FormInput
                    placeholder='Navn'
                    topLeftLabel='Navn'
                    register={{ ...register('receiver.name') }}
                  />
                  <FormInput
                    placeholder='Adresse'
                    topLeftLabel='Adresse'
                    register={{ ...register('receiver.address') }}
                  />
                </FormGroup>
                <FormGroup autoCols>
                  <FormInput
                    placeholder='Postnummer'
                    topLeftLabel='Postnummer'
                    register={{ ...register('receiver.zipcode') }}
                  />
                  <FormInput
                    placeholder='By'
                    topLeftLabel='By'
                    register={{ ...register('receiver.city') }}
                  />
                </FormGroup>
              </FlexContainer>
            </InvoiceSection>

            {/* Invoice info */}
            <InvoiceSection title='Fakturaoplysninger'>
              <FormGroup autoCols>
                <FormInput
                  placeholder='Fakturanummer'
                  topLeftLabel='Fakturanummer'
                  register={{ ...register('invoice.number') }}
                />
                <FormInput
                  type='date'
                  placeholder='Fakturadato'
                  topLeftLabel='Fakturadato'
                  register={{ ...register('invoice.date') }}
                />
                <FormInput
                  type='date'
                  placeholder='Betalingsdato'
                  topLeftLabel='Betalingsdato'
                  register={{ ...register('invoice.due') }}
                />
              </FormGroup>
              <FormGroup autoCols>
                <FormInput
                  className='col-span-2'
                  placeholder='1234'
                  topLeftLabel='Bank registreringsnummer'
                  register={{ ...register('invoice.bankRegistrationNumber') }}
                />
                <FormInput
                  className='col-span-8'
                  placeholder='12345678'
                  topLeftLabel='Bank kontonummer'
                  register={{ ...register('invoice.bankAccountNumber') }}
                />
              </FormGroup>
            </InvoiceSection>
          </FlexContainer>
        </div>

        <div className='col-span-4'>
          <div className='flex flex-col gap-4 sticky top-16'>
            <Button primary onClick={handleSubmit(onFormSubmit)}>
              <DownloadIcon />
              Hent faktura
            </Button>

            <Button primary outline>
              Forhåndsvisning
            </Button>

            <Divider />
            <FormInputCheckbox
              label='Sen betalingsgebyr'
              register={{ ...register('lateFee') }}
            />
            <FormInputCheckbox
              label='Tilføj moms'
              register={{ ...register('addTax') }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
