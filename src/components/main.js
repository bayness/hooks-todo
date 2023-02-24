async function main() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("world");
      resolve();
    }, 2000);
  });
  console.log("hello");
}

main();
