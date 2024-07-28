/**
 * Capitalize first letter of a string.
 */
const capitalize = (s: string) =>
  (s && typeof s === 'string' && s[0].toUpperCase() + s.slice(1)) || s;

export { capitalize };
