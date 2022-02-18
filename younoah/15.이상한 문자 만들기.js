const convert = s =>
  [...s]
    .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
    .join('');

const solution = s => s.split(' ').map(convert).join(' ');
