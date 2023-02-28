import Head from 'next/head';

const Meta = ({ title, keywords, description, ogTitle, ogType, ogUrl, ogImage }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogType && <meta property="og:type" content={ogType} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta charSet="utf-8"></meta>
      <link rel="icon" href="/favicon.ico"></link>
      <title>{title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  title: "Opret nemt faktura PDF'er online med Lynfaktura.dk - Gratis fakturaskabelon",
  keywords:
    'faktura skabelon excel, skabelon faktura, skabelon til faktura, online faktura, gratis faktura, fakturaskabelon, faktura skabelon, gratis faktura skabelon',
  description:
    "Lynfaktura.dk er det perfekte værktøj til at oprette og danne Faktura PDF'er på en nem og hurtig måde.",
  ogTitle: "Opret nemt faktura PDF'er online med Lynfaktura.dk - Gratis fakturaskabelon",
  ogType: 'website',
  ogUrl: 'https://lynfaktura.dk',
  ogImage: 'https://lynfaktura.dk/lynfaktura-logo.png',
};
export default Meta;
