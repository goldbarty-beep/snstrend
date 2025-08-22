import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Header(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-[color:rgba(11,16,32,0.6)]">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">SNSTrend.AI</Link>
        <nav aria-label="Primary" className="hidden md:flex gap-6">
          {nav.map(i => <Link key={i.href} href={i.href} className="text-sm text-white/80 hover:text-white">{i.label}</Link>)}
        </nav>
        <Link href="/contact" className="text-sm px-4 py-2 rounded-xl bg-[var(--color-accent)] text-black font-medium">Request Demo</Link>
      </div>
    </header>
  );
}
