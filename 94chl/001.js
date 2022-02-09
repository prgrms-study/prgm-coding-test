process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const [columns, rows] = data.split(" ");
  const column = new Array(parseInt(columns)).fill("*").join("");
  const rect = new Array(parseInt(rows)).fill(column).join("\n");
  console.log(rect);
});
