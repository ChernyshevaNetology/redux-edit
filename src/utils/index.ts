export const handleSearch = (str: string, query: string): boolean => {
  const words = str.split(" ");

  for (const word of words) {
    if (word.toLowerCase().startsWith(query.toLowerCase())) {
      return true;
    }
  }
  return false;
};
