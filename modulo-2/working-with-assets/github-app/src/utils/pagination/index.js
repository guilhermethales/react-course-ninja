'use strict';

const centerRule = ({ total, activePage }) => {
  if(activePage - 1 <= 0)
    return 1;
  return activePage - 1;
}

const pagination = ({total, activePage}) => { 
  if(total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const visiblePages = 3;
  let pages = [
    1, 
    ...Array.from({ length: visiblePages }, (_, i) => i + centerRule({ total, activePage })),
    total
  ];

  pages = pages.filter((page, index, array) => array.indexOf(page) === index);

  return pages;
}

export default pagination;