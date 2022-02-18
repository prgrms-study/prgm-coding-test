const solution = s => {
  const cntDict = {
    p: 0,
    y: 0,
  };

  s.split('').forEach(c => {
    ['p', 'P', 'y', 'Y'].includes(c) && cntDict[c.toLowerCase()]++;
  });

  return cntDict.p === cntDict.y;
};
