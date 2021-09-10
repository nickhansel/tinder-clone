export const renewalSort = (items) => {
  if (!items && !items?.length) return items;

  return items.sort((a, b) => {
    if (moment(b.renewalDate).isBefore(a.renewalDate)) {
      return -1;
    } 
    return 1;
  });
};

export const createAtSort = (items) => {
  if (!items && !items?.length) return items;

  return items.sort((a, b) => {
    if (moment(b.createdAt).isBefore(a.createdAt)) {
      return -1;
    } 
    return 1;
  });
};

export const creatAtSort = (items) => {
  if (!items && !items?.length) return items;

  return list.sort((a, b) => (a.contract > b.contract) ? 1 : -1).reverse();
};




