const list = [
  { qty: 10, size: 'XXL' },
  { qty: 2, size: 'XL' },
  { qty: 8, size: 'M' },
];

list.sort((a, b) => (a.qty > b.qty ? 1 : -1));

console.log(list);
