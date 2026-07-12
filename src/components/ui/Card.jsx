import cn from "@/lib/utils";

export default function Card({ children, color = "surface", hover = true, className }) {
  const colors = {
    pink: "bg-pink",
    blue: "bg-blue",
    yellow: "bg-yellow",
    mint: "bg-mint",
    purple: "bg-purple",
    surface: "bg-surface",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border-2 border-ink p-5",
        "shadow-[4px_4px_0px_var(--color-ink)]",
        hover &&
          "transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--color-ink)]",
        colors[color],
        className
      )}
    >
      {children}
    </div>
  );
}