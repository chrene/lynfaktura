import Head from 'next/head';

const Meta = ({
  title,
  keywords,
  description,
  ogTitle,
  ogType,
  ogUrl,
  ogImage,
}) => {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      ></meta>
      <meta name='keywords' content={keywords}></meta>
      <meta name='description' content={description}></meta>
      {ogTitle && <meta property='og:title' content={ogTitle} />}
      {ogType && <meta property='og:type' content={ogType} />}
      {ogUrl && <meta property='og:url' content={ogUrl} />}
      {ogImage && <meta property='og:image' content={ogImage} />}
      <meta charSet='utf-8'></meta>
      <link rel='icon' href='/favicon.ico'></link>
      <title>{title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  title: 'Lynfaktura - nem oprettelse af fakturaer online',
  keywords:
    'faktura, lynfaktura, faktura online, gratis, nem oprettelse af faktura, gratis, fakturaservice, hurtig, skabelon, e-faktura',
  description:
    'Hurtig og nem service til gratis oprettelse af fakturaer online.',
  ogTitle: 'Lynfaktura - nem oprettelse af fakturaer online',
  ogType: 'website',
  ogUrl: 'https://lynfaktura.dk',
  ogImage: 'https://lynfaktura.dk/lynfaktura-logo.png',
};
export default Meta;
