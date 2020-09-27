/*
   Helper methods
 */
import { mockData } from "./mock";

/*
   Temporary helper to search for client based on location
   In future would be done through API
 */
export const getClient = (searchString) => {
  let targetClient = false;

  mockData.forEach((client) => {
    if (searchString.includes(client.id)) {
      targetClient = client;
    }
  });

  return targetClient;
};

const filterHelper = (data, moods) => {
  const dataCopy = [...data];

  const filtered = dataCopy.filter((clientItem) => {
    return moods.includes(clientItem.status);
  });

  return filtered;
};

export const filterDataByMood = (data, moodId) => {
  switch (moodId) {
    case "all":
      return data;
    case "champ":
      return filterHelper(data, [
        "champBoy",
        "champGirl",
        "happyBoy",
        "happyGirl",
      ]);
    case "attention":
      return filterHelper(data, ["curiousBoy", "curiousBoy"]);
    case "cold":
      return filterHelper(data, ["indiffBoy", "indiffGirl"]);
    case "risk":
      return filterHelper(data, ["sadBoy", "sadGirl"]);
    default:
      return data;
  }
};

export const getError = (err) => {
  let msg = "Problem witht the request";

  if (err.response) {
    const data = err.response.data;

    if (data.message) {
      msg = data.message;
    } else if (typeof data === "object") {
      const errors = Object.values(data);
      msg = errors.flat().join(", ");
    }

    return msg;
  }

  console.error(err);
  return msg;
};
