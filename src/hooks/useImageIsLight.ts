import { useEffect, useState } from "react";

/**
 * Returns whether an image appears mostly light (white-ish) by sampling non-transparent pixels.
 * Useful for deciding whether to invert a monochrome logo against light/dark backgrounds.
 */
export function useImageIsLight(src: string, sampleSize = 32) {
  const [isLight, setIsLight] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.decoding = "async";

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = sampleSize;
        canvas.height = sampleSize;

        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        ctx.clearRect(0, 0, sampleSize, sampleSize);
        ctx.drawImage(img, 0, 0, sampleSize, sampleSize);

        const { data } = ctx.getImageData(0, 0, sampleSize, sampleSize);

        let lumSum = 0;
        let count = 0;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i] / 255;
          const g = data[i + 1] / 255;
          const b = data[i + 2] / 255;
          const a = data[i + 3] / 255;

          // Ignore mostly transparent pixels
          if (a < 0.15) continue;

          // Relative luminance
          const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          lumSum += lum;
          count++;
        }

        const avg = count ? lumSum / count : 0;
        if (!cancelled) setIsLight(avg > 0.6);
      } catch {
        if (!cancelled) setIsLight(undefined);
      }
    };

    img.onerror = () => {
      if (!cancelled) setIsLight(undefined);
    };

    setIsLight(undefined);
    img.src = src;

    return () => {
      cancelled = true;
    };
  }, [src, sampleSize]);

  return isLight;
}
