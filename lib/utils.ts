import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateText(text: string, limit: number): string {
  const words = text.split(" ");

  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }

  return text;
}
