export function getDisplayCategory(categoryName: string) {
  const match = categoryName.match(/^(.*?\d+)/);
  return match ? match[1] : categoryName;
}
