import { Heading } from "@/components/primitives/Heading";
import { Button } from "@/components/primitives/Button";

type HeroProps = {
  eyebrow?: string; title: string; subtitle?: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: { src:string; alt:string };
};
export function Hero({eyebrow,title,subtitle,cta,secondaryCta,image}: HeroProps){
  return (
    <section role="banner" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {eyebrow && <p className="mb-3 text-sm uppercase tracking-widest text-white/60">{eyebrow}</p>}
        <Heading level={1} className="mb-4">{title}</Heading>
        {subtitle && <p className="mb-8 text-lg text-white/80 max-w-2xl">{subtitle}</p>}
        <div className="flex flex-col sm:flex-row gap-3">
          {cta && <Button><a href={cta.href} aria-label={cta.label}>{cta.label}</a></Button>}
          {secondaryCta && <Button variant="ghost"><a href={secondaryCta.href} aria-label={secondaryCta.label}>{secondaryCta.label}</a></Button>}
        </div>
      </div>
      {image && <img src={image.src} alt={image.alt} className="absolute inset-y-0 right-0 h-full w-auto object-cover opacity-20 pointer-events-none" loading="lazy" decoding="async" />}
    </section>
  );
}
