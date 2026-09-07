import { Reveal } from './Reveal';

type Props = {
  label: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ label, title, text, align = 'left' }: Props) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="mono-label">{label}</p>
      <h2 className="mt-3" style={{ fontSize: 'var(--text-xl)' }}>
        {title}
      </h2>
      {text && (
        <p className="mt-4 text-[color:var(--color-text-muted)]" style={{ maxWidth: '58ch' }}>
          {text}
        </p>
      )}
    </Reveal>
  );
}
