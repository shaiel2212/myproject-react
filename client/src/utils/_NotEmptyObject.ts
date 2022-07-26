export function isEmpty<T>(obj: T):boolean {
  const isEmpty = Object.values(obj).every((x) => x !== null && x !== "");
  console.log({ isEmpty });
  return isEmpty;
}

