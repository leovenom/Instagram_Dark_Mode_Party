const jsonToQueryString = (json) => {
  return (
    "?" +
    Object.keys(json)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`
      )
      .join("&")
  );
};

export default jsonToQueryString;
