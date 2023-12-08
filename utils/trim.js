export function trim(text, length) {
  return text.length > length ? text.substring(0, length) + "..." : text;
}
