const capitalizeFirstLetter = (element) => {
  const firstLetter = element.charAt(0)

  const firstLetterCap = firstLetter.toUpperCase()

  const remainingLetters = element.slice(1)

  return firstLetterCap + remainingLetters
}
export { capitalizeFirstLetter }
