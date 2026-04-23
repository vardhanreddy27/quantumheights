import { cn } from "../utils/cn";

export default function Marquee({
  className,
  reverse,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-wrap gap-3 p-2",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around", {
              "flex-row": !vertical,
              "flex-col": vertical,
              "flex-row-reverse": reverse && !vertical,
              "flex-col-reverse": reverse && vertical,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
