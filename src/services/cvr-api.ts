export const getCompanyByVAT = async (vat: string) => {
  console.log(vat);
  try {
    const result = await fetch(
      'https://cvrapi.dk/api?country=dk&vat=' + vat
    ).then((res) => res.json());

    return result;
  } catch (error) {
    console.log(error);
  }
};
