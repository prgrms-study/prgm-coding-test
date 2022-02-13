process.stdin.setEncoding('utf8');

process.stdin.on('data', data => {
  const [n, m] = data.split(' ').map(Number);

  [...Array(m)].forEach(() => {
    process.stdout.write('*'.repeat(n));
    process.stdout.write('\n');
  });
});
