export async function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = reject
  })
}


// https://stackoverflow.com/questions/52903386/how-to-get-byte-length-of-a-base64-string-in-node-js
export function checkBase64Size(base64, maxSizeMb) {
  const size = base64?.length / 1_000_000;

  return size <= maxSizeMb;
}

export function checkBase64FileType(base64, allowedTypes) {
  const allowedTypesRegex = new RegExp(`^data:(${allowedTypes.join("|")})`, "");

  return allowedTypesRegex.test(base64);
}