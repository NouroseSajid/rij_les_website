"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const navItems = [
    { href: "theory", label: "Theory" },
    { href: "practical", label: "Practical" }, { href: "exams", label: "Exams" },
    { href: "about", label: "About" },
    { href: "donation", label: "Donation" },



];

export default function Navbar() {
    const params = useParams() as { locale?: string };
    const locale = params?.locale ?? "en";
    const basePath = `/${locale}`;

    return (
        <nav className="w-full bg-white border-b border-slate-200 shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-5 lg:px-7">
                <Link href={basePath} className="text-lg font-semibold text-slate-900">
                    Rijles
                </Link>

                <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-700">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={`${basePath}/${item.href}`}
                            className="rounded-md px-3 py-2 transition hover:bg-slate-200 hover:text-slate-900"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
