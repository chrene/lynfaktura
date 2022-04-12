import type { NextPage } from 'next';
import Head from 'next/head';
import CreateInvoiceForm from '../components/create-invoice-form';

const IndexPage: NextPage = () => {
  return (
    <div className='w-screen h-screen relative overflow-y-scroll flex flex-col bg-base-200 px-12 md:px-32 2xl:px-48'>
      <Head>
        <title>Redux Toolkit</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='mt-12'>
        <h1 className='text-2xl font-bold'>simpelfaktura.dk</h1>
      </header>
      <main>
        <CreateInvoiceForm dx={{ enabled: process.env.dxEnabled === 'true' }} />
      </main>
      <footer className='footer footer-center p-12 bg-base-200 text-base-content mt-auto mx-auto'>
        <div>
          <p>Copyright © 2022 - simpelfaktura.dk</p>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
