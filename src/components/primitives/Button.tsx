import { forwardRef, ButtonHTMLAttributes } from "react";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary"|"ghost"; full?: boolean };
export const Button = forwardRef<HTMLButtonElement, Props>(({ variant="primary", full, className="", ...rest }, ref)=>{
  const base = "inline-flex items-center justify-center px-5 py-3 rounded-2xl font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const styles = variant==="primary"
    ? "bg-[var(--color-accent)] text-black hover:opacity-90 focus-visible:ring-[var(--color-accent)]"
    : "bg-transparent border border-white/20 text-[var(--color-fg)] hover:bg-white/5";
  const width = full?"w-full":"";
  return <button ref={ref} className={`${base} ${styles} ${width} ${className}`} {...rest}/>;
});
Button.displayName = "Button";
