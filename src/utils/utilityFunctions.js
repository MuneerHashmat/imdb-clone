export const getPages = (totalPages, currentPage) => {
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (totalPages <= 5) {
      pages.push(i);
    } else if (currentPage <= 3) {
      pages = [1, 2, 3, 4, "...", totalPages];
    } else if (currentPage >= totalPages - 2) {
      pages = [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    } else {
      pages = [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ];
    }
  }
  return pages;
};

export const saveToSessionStorage = (query, item) => {
  let array = JSON.parse(sessionStorage.getItem(query));
  if (!array) {
    array = [];
  }
  array.push(item);
  sessionStorage.setItem(query, JSON.stringify(array));
};

export const isPresentInSessionStorage = (query, page) => {
  let array = JSON.parse(sessionStorage.getItem(query));
  if (!array) {
    return false;
  }

  let item = array.find((item) => {
    return item.page === page;
  });

  if (!item) {
    return false;
  }

  return item;
};
