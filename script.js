// Your Script here.
function rot13(str) {
  let decoded = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) { // uppercase letters only
      const decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
      decoded += String.fromCharCode(decodedCharCode);
    } else {
      decoded += str[i];
    }
  }
  return decoded;
}