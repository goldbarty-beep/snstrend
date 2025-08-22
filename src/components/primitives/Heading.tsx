export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & { level?: 1|2|3 };
export function Heading({ level = 1, className = "", ...rest }: HeadingProps) {
  const Tag = (`h${level}` as keyof JSX.IntrinsicElements);
  const size = level===1?"text-4xl md:text-6xl":level===2?"text-3xl":"text-2xl";
  return <Tag className={`${size} font-semibold tracking-tight ${className}`} {...rest}/>;
}
