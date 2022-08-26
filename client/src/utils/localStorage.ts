export const setItem = (key: string, value: string): void => {
  if (!key || key === null) return;
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key: string): string | null => {
  if (key===null || key === undefined) return null;
  return JSON.parse(localStorage.getItem(key)!);
};
