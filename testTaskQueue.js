setTimeout(() => {
  console.log("timeout");
}, 100);

for (let i of new Array(1_000_000).fill(0)) {
  console.log(i);
}
