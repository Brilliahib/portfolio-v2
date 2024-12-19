import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="max-w-sm pt-24" id="footer">
        <div className="mb-8">
          <hr />
        </div>
        <div className="space-y-6">
          <div className="space-y-1">
            <h1 className="font-semibold md:text-xl">
              Have any project ideas?
            </h1>
            <h1 className="font-semibold md:text-xl">Ask something?</h1>
          </div>
          <div className="flex gap-4">
            <Image
              src="/images/brilly.jpg"
              width={1000}
              height={1000}
              className="max-w-[50px] rounded-full"
              alt="Muhammad Ahib Ibrilli"
            />
            <div>
              <p>Muhammad Ahib Ibrilli</p>
              <Link
                className="font-semibold hover:underline"
                href={"mailto:brilliahib21@gmail.com"}
              >
                brilliahib21@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
