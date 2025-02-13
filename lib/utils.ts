import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to safely get image URL
export function getImageUrl(url: string): string {
  if (!url) return "";
  // Remove any existing 'https:' prefix to avoid doubles
  const cleanUrl = url.replace("https:", "");
  // Add 'https:' only if the URL doesn't start with it
  return cleanUrl.startsWith("//") ? `https:${cleanUrl}` : cleanUrl;
}
