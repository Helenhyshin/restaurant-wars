// api key: Lvc2CTknhHILb1nFpIfEA4Ed4Tu44m1e1X84xDDrfvlX5w48143TsSQhIw6vbcK6vDW79-x3vl_JaUY4BwiQNtUBFNs0qCsLS5gtUo98N6nqMoLEprbrFpKdVYnIY3Yx

const onInputChange = (evt) => {
  console.log(evt.target.value);
  fetchData();
};

const input = document.querySelector("input");
input.addEventListener("input", onInputChange);

const fetchData = async () => {
  const response = await axios.get("https://api.yelp.com/v3/businesses", {
    params: {
      apikey:
        "Lvc2CTknhHILb1nFpIfEA4Ed4Tu44m1e1X84xDDrfvlX5w48143TsSQhIw6vbcK6vDW79-x3vl_JaUY4BwiQNtUBFNs0qCsLS5gtUo98N6nqMoLEprbrFpKdVYnIY3Yx",
    },
  });
  console.log(response.data);
};

// fetchData: async (searchTerm) => {
//     const response = await axios.get("https://www.omdbapi.com/", {
//       params: {
//         apikey: "89579383",
//         s: searchTerm,
//       },
//     });
//     if (response.data.Error) {
//       return [];
//     }
//     return response.data.Search;
//   },
