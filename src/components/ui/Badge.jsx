import cn from "@/lib/utils";
import { color } from "framer-motion/debug";

const colors = {
  pink: "bg-pink",
  blue: "bg-blue",
  yellow: "bg-yellow",
  mint: "bg-mint",
  purple: "bg-purple",
  surface: "bg-surface",
}

export default function Badge({
  children,
  color = "surface",
  withDot = false,
  classname
}) {
  return(
    <span className={cn(
      "inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-ink text-xs font-bold uppercase tracking-wide text-ink",
      colors[color],
      classname
    )}>
      {withDot && (
        <span className="w-2 h-2 rounded-full bg-mint" aria-hidden="true"></span>
      )}

      {children}
    </span>
  )
}