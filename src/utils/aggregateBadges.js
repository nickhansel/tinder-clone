export const aggregateBadges = (strategies = []) => {
  if (!strategies.length) return [];
  
  const map = {};

  strategies.forEach((item) => {
    let { badgeName } = item;
  
    if (!map[badgeName]) {
      map[badgeName] = 1;
    } else {
      map[badgeName] += 1;
    }
  });

  const scores = [];

  Object.keys(map).forEach((name) => {
    scores.push({
      name,
      score: map[name]
    });
  });

  return scores;
};
