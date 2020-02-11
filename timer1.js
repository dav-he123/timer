const time = process.argv.slice(2);

const delay = () => {
  for (const char of time) {
    setTimeout(() => {
      if (char > 0) {
        process.stdout.write("\x07");
      }
    }, char * 1000);
  }
};

delay();
