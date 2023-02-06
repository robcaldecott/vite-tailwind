// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("@ianvs/prettier-plugin-sort-imports"),
  ],
  importOrder: [
    "^react",
    "<THIRD_PARTY_MODULES>",
    "^@/(.*)$",
    "^\\.\\.(?!/?$)",
    "^\\.\\./?$",
    "^\\./(?=.*/)(?!/?$)",
    "^\\.(?!/?$)",
    "^\\./?$",
  ],
};
