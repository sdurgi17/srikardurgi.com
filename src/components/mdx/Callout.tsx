export function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "tip";
}) {
  const styles = {
    info: "border-blue-500/50 bg-blue-500/10",
    warning: "border-yellow-500/50 bg-yellow-500/10",
    tip: "border-green-500/50 bg-green-500/10",
  };

  const icons = {
    info: "i",
    warning: "!",
    tip: "~",
  };

  return (
    <div className={`my-6 rounded-lg border-l-4 p-4 ${styles[type]}`}>
      <div className="flex gap-3">
        <span className="font-mono text-sm font-bold opacity-60">
          {icons[type]}
        </span>
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
