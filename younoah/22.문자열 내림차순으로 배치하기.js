const solution = s =>
  [...s].sort((a, b) => b.charCodeAt() - a.charCodeAt()).join('');
