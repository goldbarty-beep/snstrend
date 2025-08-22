'use client';
import { useState } from "react";
export function FAQ({ items }: { items: { q:string; a:string }[] }){
  const [open, setOpen] = useState<number|null>(0);
  return (
    <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl px-6">
      <h2 id="faq-heading" className="text-2xl font-semibold mb-6">자주 묻는 질문</h2>
      <div className="divide-y divide-white/10">
        {items.map((it, idx)=>{
          const expanded = open===idx;
          return (
            <div key={idx} className="py-4">
              <button
                className="w-full text-left flex justify-between items-center py-2"
                aria-expanded={expanded}
                aria-controls={`faq-panel-${idx}`}
                onClick={()=> setOpen(expanded?null:idx)}
              >
                <span className="font-medium">{it.q}</span>
                <span aria-hidden>{expanded?"−":"+"}</span>
              </button>
              <div id={`faq-panel-${idx}`} role="region" className={`${expanded?"block":"hidden"} text-[var(--color-muted)] pt-2`}>{it.a}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
