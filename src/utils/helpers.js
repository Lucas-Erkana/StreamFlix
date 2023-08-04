export const dateFormat = (date) => {
  if (!date) {
    return "Not available";
  } else {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
};

export const moneyConverter = (money) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  if (!money) {
    return "Not available";
  } else {
    return formatter.format(money);
  }
};

export const timeConverter = (time) => {
  const hour = Math.floor(time / 60);
  const min = time % 60;

  if (!time) {
    return "Not available";
  } else {
    return `${hour}h ${min}m`;
  }
};

export const arrayToString = (array) => {
  if (!array?.length) {
    return "Not available";
  }
  return array?.map((el) => el.name).join(", ");
};
