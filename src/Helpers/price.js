export const priceDoll = (price) =>
    price
        ? price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
              .concat(' $')
        : 'unknown';
