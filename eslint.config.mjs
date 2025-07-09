import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Add stricter rules that will catch errors
      "no-unused-vars": "error",
      "no-console": "error",
      "prefer-const": "error",
      "no-var": "error",
      "eqeqeq": "error",
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "@typescript-eslint/no-unused-vars": "error",
      "react-hooks/exhaustive-deps": "error"
    }
  }
];

export default eslintConfig;
