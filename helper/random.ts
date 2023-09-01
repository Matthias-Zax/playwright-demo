/**
 * Generates a random text of the specified length.
 *
 * @param {number} length - The length of the random text to generate.
 * @return {string} The randomly generated text.
 */
export function generateRandomText(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomText = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters.charAt(randomIndex);
  }

  return randomText;
}

