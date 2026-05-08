import { CATEGORY_LABELS } from "@finance-app/core";
import type { Category } from "@finance-app/core";

const categories: Category[] = [
  "market-finance",
  "corporate-finance",
  "private-equity",
  "accounting",
  "programming",
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Finance Learning App</h1>
        <p className="mt-4 text-lg text-gray-600">
          Prépare tes entretiens techniques en finance.
          <br />
          Micro-cartes, répétition espacée, progression gamifiée.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category}
            className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2 className="text-lg font-semibold">{CATEGORY_LABELS[category]}</h2>
            <p className="mt-2 text-sm text-gray-500">Bientot disponible</p>
          </div>
        ))}
      </div>
    </main>
  );
}
