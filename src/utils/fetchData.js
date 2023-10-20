export const exerciseOptions = {
  method: "GET",
  // params: { limit: "10" },
  headers: {
    "X-RapidAPI-Key": "ce155671d6msh9e9536aa4cc2ad4p15163ejsn11ac3d4fd12a",
    //"X-RapidAPI-Key": process.env.Keys,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
