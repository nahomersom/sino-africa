import type { Config } from "tailwindcss";

export default {
  // Prevent Tailwind's `dark:` styles from following the browser setting.
  // We will only use dark styles if you explicitly add `class="dark"` to the <html>.
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
} satisfies Config;

