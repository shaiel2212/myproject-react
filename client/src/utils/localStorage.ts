export const setItem = (key: string, value: string): void => {
  if (!key || key === null) return;
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string): string | null => {
  if (!key) return null;
  return key && JSON.parse(localStorage.getItem(key)!);
};
