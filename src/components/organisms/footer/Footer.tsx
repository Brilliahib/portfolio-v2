import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section
        className="flex w-full px-5 md:justify-center md:px-0"
        id="footer"
      >
        <div className="space-y-12 py-12 pb-24 md:max-w-2xl md:py-28">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 md:gap-y-12">
            <div className="space-y-4">
              <div className="flex gap-4">
                <Image
                  src="/images/brilly.jpg"
                  width={1000}
                  height={1000}
                  className="max-w-[50px] rounded-full"
                  alt="Muhammad Ahib Ibrilli"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Building digital experiences that matter.
              </p>
            </div>
            <div className="flex flex-col gap-x-12 gap-y-12 md:flex-row">
              <div className="space-y-4">
                <h1 className="text-sm font-semibold">Site</h1>
                <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                  <Link href={"https://blog.brilliahib.tech"} target="_blank">
                    Blog
                  </Link>
                  <Link href={"/personal"}>Personal</Link>
                  <Link href={"/collections"}>Collection</Link>
                  <Link href={"/bot"}>Assistant</Link>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-sm font-semibold">Link</h1>
                <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                  <Link href={"https://github.com/Brilliahib"} target="_blank">
                    Github
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/muhammadahibibrilli/"}
                    target="_blank"
                  >
                    Linkedin
                  </Link>
                  <Link
                    href={"https://www.instagram.com/brilliahib69/"}
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-sm font-semibold">Never Miss an Update</h1>
              <p className="text-sm text-muted-foreground">
                Get an email when there&apos;s something new.
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Muhammad Ahib Ibrilli. All rights
              reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
