export default function Logo({
  className,
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={`tenada text-primary translate-y-2 text-4xl font-extrabold italic ${className}`}
    >
      서울한바퀴
    </p>
  );
}
