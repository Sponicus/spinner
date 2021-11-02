const spinSpinner = (spinner) => {
  let x = -100;
  for (const spin of spinner) {
    setTimeout(() => {
      process.stdout.write(spin)
    }, x+= 200);
  }
};

spinSpinner(['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|']);