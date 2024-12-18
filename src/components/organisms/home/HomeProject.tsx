import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function HomeProject() {
  return (
    <>
      <section className="pt-24">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">My Highlighted Projects</h1>
            <p className="tracking-tight">
              I have worked on various projects, ranging from dummy projects
              created for learning purposes to real-world projects implemented
              in production.
            </p>
          </div>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <Image
                    src="/images/codelingo.png"
                    width={1000}
                    height={1000}
                    alt="Project"
                    className="max-h-[250px] w-full rounded-md object-cover"
                  />
                  <div className="space-y-2">
                    <h1 className="text-base font-semibold">Codelingo</h1>
                    <p className="text-sm tracking-tight">
                      CodeLingo is a coding learning program designed
                      specifically for children, from beginners to intermediate
                      levels.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <Image
                    src="/images/tumbuhsahabat.png"
                    width={1000}
                    height={1000}
                    alt="Project"
                    className="max-h-[250px] w-full rounded-md object-cover"
                  />
                  <div className="space-y-2">
                    <h1 className="text-base font-semibold">Tumbuh Sahabat</h1>
                    <p className="text-sm tracking-tight">
                      Tumbuh Sahabat is a web-based application designed to help
                      children with Down syndrome monitor their nutritional
                      intake and learn through educational games.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <Image
                    src="/images/charingcub.png"
                    width={1000}
                    height={1000}
                    alt="Project"
                    className="max-h-[250px] w-full rounded-md object-cover"
                  />
                  <div className="space-y-2">
                    <h1 className="text-base font-semibold">Charingcub</h1>
                    <p className="text-sm tracking-tight">
                      Charingcub is a web application designed to help parents
                      find daycare or childcare facilities that meet their
                      needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
