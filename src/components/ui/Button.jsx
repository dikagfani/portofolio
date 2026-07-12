import cn from "@/lib/utils";

const variants = {
  primary: "bg-yellow text-ink",
  secondary: "bg-surface text-ink",
  dark: "bg-ink text-background"
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  return (
    <button className={cn(
      "inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-ink font-bold text-sm uppercase tracking-wide",
      "shadow-[4px_4px_0px_var(--color-ink)]",
      "transition-all duration-150",
      "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--color-ink)]",
      "active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_var(--color-ink)]",
      variants[variant],
      className
    )}
    {...props}
    >
      {children}
    </button>
  )
}

