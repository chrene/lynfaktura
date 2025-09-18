import Head from "next/head";

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
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
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
const defaultSEO = {
  title:
    "Opret nemt faktura PDF'er online med PDFFaktura.dk - Gratis fakturaskabelon",
  description:
    "Opret professionelle fakturaer nemt og hurtigt med vores gratis online faktura skabelon.",
  keywords:
    "PDFFaktura.dk er det perfekte værktøj til at oprette og danne Faktura PDF'er på en nem og hurtig måde.",
  ogTitle:
    "Opret nemt faktura PDF'er online med PDFFaktura.dk - Gratis fakturaskabelon",
  ogType: "website",
  ogUrl: "https://pdffaktura.dk",
  ogImage: "https://pdffaktura.dk/pdffaktura-logo.png",
};

Meta.defaultProps = defaultSEO;

export default Meta;
