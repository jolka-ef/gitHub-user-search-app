export const getDate = (date) => {
  return `${new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })}`;
};
