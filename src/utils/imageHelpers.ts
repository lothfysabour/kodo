export const getParfumImages = (parfumFolder: string, imageFiles: string[]): string[] => {
  return imageFiles.map(file => `/images/${parfumFolder}/${file}`)
}
