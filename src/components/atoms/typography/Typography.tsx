interface TypographyProps {
  title: string;
  description: string;
}

export default function Typography({ title, description }: TypographyProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-jakarta-sans text-md font-bold uppercase leading-none text-foreground">
        {title}
      </h3>
      <p className="tracking-tight text-muted-foreground">{description}</p>
    </div>
  );
}
