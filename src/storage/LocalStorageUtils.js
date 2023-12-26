export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, value);
};

export const getLocalStorageItem = (key, defaultValue = null) => {
  const storedValue = localStorage.getItem(key);
  return storedValue !== null ? storedValue : defaultValue;
};
