const getDateAndTime = (value, type, inMS) => {
  if (!type) return value;

  if (!inMS) {
    value = value * 1000;
  }

  const date = new Date(value);
  let options;
  if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }

  if (type === "date") {
    options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
  }

  return new Intl.DateTimeFormat("en-us", options).format(date);
};

export { getDateAndTime };
