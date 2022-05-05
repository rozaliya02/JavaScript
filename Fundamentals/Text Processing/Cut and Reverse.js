function CutAndReverse(text) {
  let firstHalf = text
    .slice(0, text.length / 2)
    .split("")
    .reverse()
    .join("");

  let secondHalf = text
    .split("")
    .slice(text.length / 2, text.length)
    .reverse()
    .join("");
  console.log(firstHalf);
  console.log(secondHalf);
}

CutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
