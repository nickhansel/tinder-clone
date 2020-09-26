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

/*
   Temporary helper to get location name for nav bar
 */
export const getLocationName = (pathname) => {
  if (pathname === "/") {
    return "Client Dashboard";
  }

  if (pathname.includes("client")) {
    let cl = "";
    const client = getClient(pathname);

    return client ? client.name : cl;
  }

  if (pathname.includes("settings")) {
    return "Settings";
  }

  if (pathname.includes("insights")) {
    return "Insights";
  }
};

const filterHelper = (moods) => {
  const mockCopy = [...mockData];

  const filtered = mockCopy.filter((clientItem) => {
    return moods.includes(clientItem.status);
  });

  return filtered;
};

export const filterDataByMood = (moodId) => {
  switch (moodId) {
    case "all":
      return mockData;
    case "champ":
      return filterHelper(["champBoy", "champGirl", "happyBoy", "happyGirl"]);
    case "attention":
      return filterHelper(["curiousBoy", "curiousBoy"]);
    case "cold":
      return filterHelper(["indiffBoy", "indiffGirl"]);
    case "risk":
      return filterHelper(["sadBoy", "sadGirl"]);
    default:
      return mockData;
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
