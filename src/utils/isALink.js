export const isALink = (string) => {
  if (!string) return false;

  const regex =
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;

  return regex.test(String(string).toLowerCase());
};
