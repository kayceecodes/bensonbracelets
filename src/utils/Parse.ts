/**
 * Shorten the length an item name and add '...'.This is to even out each title that represents an item/product
 * @param str: string[]
 * @param numOfChar: number
 * @return str : shortenedStr
 */
export const fixedStrLength = (str: string[], numOfChar: number) => {
  let shortenedStr: string[] = str.filter((val, index) => index < numOfChar - 4)

  return str.length > numOfChar ? shortenedStr.concat("...") : str
}
