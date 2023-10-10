export const getCompanyName = (company) => {
  let companyName = null;
  if (company) {
    companyName = company.charAt(0) === "@" ? company.substring(1) : company;
  }
  return companyName;
};
