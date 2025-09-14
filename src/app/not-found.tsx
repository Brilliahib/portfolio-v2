import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[40vh] flex-col items-center justify-center">
      <p className="italic text-muted-foreground">
        Looks like you&apos;re lost,{" "}
        <Link href="/" className="text-foreground underline">
          go back
        </Link>
      </p>
    </section>
  );
}
