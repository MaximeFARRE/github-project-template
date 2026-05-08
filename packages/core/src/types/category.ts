export type Category =
  | "market-finance"
  | "corporate-finance"
  | "private-equity"
  | "accounting"
  | "programming";

export const CATEGORY_LABELS: Record<Category, string> = {
  "market-finance": "Finance de marché",
  "corporate-finance": "Corporate Finance",
  "private-equity": "Private Equity",
  accounting: "Comptabilité",
  programming: "Programmation",
};
