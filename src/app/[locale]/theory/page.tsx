import Link from "next/link";

type PageProps = {
  params: {
    locale: string;
  };
};

const theorySections = [
  { slug: "rijbewijs_am", label: "Rijbewijs AM" },
  { slug: "rijbewijs_a", label: "Rijbewijs A" },
  { slug: "rijbewijs_b", label: "Rijbewijs B" },
  { slug: "rijbewijs_c", label: "Rijbewijs C" },
  { slug: "rijbewijs_d", label: "Rijbewijs D" },
  { slug: "rijbewijs_g", label: "Rijbewijs G" },
];

export default function Page({ params }: PageProps) {
  const locale = params.locale ?? "en";
  const basePath = `/${locale}/theory`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-slate-900 mb-6">Theory</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {theorySections.map((section) => (
          <Link
            key={section.slug}
            href={`${basePath}/${section.slug}`}
            className="group flex aspect-square items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 text-center text-lg font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
          >
            <span className="leading-tight">{section.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
