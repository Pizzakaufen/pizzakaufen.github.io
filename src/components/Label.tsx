/**
 * Komponente für konsistente Label im gesamten Design
 * Nutzt die mono-label CSS-Klasse
 */
export function Label({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`mono-label ${className}`}>
      {children}
    </span>
  );
}
