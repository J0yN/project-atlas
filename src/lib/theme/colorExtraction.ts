/**
 * Color Extraction — client-only utility that samples the dominant (average)
 * color from an image URL using the HTML Canvas API.
 *
 * This module must only be imported in Client Components or client-only code
 * paths. On the server it will always return null.
 */

/**
 * Convert a number 0–255 to a two-character hex string.
 */
function byteToHex(byte: number): string {
  return byte.toString(16).padStart(2, '0');
}

/**
 * Extract the dominant color from an image URL by averaging all opaque pixels
 * in a down-sampled (50×50) version of the image.
 *
 * Resolves with a CSS hex string (e.g. "#3b82f6") or null on failure.
 *
 * @param imageUrl – A same-origin URL or one with appropriate CORS headers.
 */
export function extractDominantColor(imageUrl: string): Promise<string | null> {
  if (typeof window === 'undefined') {
    return Promise.resolve(null);
  }

  return new Promise<string | null>((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = (): void => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(null);
        return;
      }

      const SIZE = 50;
      canvas.width = SIZE;
      canvas.height = SIZE;
      ctx.drawImage(img, 0, 0, SIZE, SIZE);

      const { data } = ctx.getImageData(0, 0, SIZE, SIZE);
      let totalR = 0;
      let totalG = 0;
      let totalB = 0;
      let count = 0;

      for (let i = 0; i < data.length; i += 4) {
        const alpha = data[i + 3];
        if (alpha === undefined || alpha < 128) continue; // skip transparent/semi-transparent

        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        if (r === undefined || g === undefined || b === undefined) continue;

        totalR += r;
        totalG += g;
        totalB += b;
        count++;
      }

      if (count === 0) {
        resolve(null);
        return;
      }

      const avgR = Math.round(totalR / count);
      const avgG = Math.round(totalG / count);
      const avgB = Math.round(totalB / count);

      resolve(`#${byteToHex(avgR)}${byteToHex(avgG)}${byteToHex(avgB)}`);
    };

    img.onerror = (): void => resolve(null);
    img.src = imageUrl;
  });
}
