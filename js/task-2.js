function formatMessage(message, maxLength) {
  //   let theLeng = maxLength.length;
  //   console.log(theLeng);
  let messageLength = message.length;
  console.log(messageLength);
  if (maxLength === messageLength) {
    return `"${message}"`;
  } else {
    let partMessage = message.slice(0, maxLength);
    return `"${partMessage}..."`;
  }
}
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
