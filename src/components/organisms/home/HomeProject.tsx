import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function HomeProject() {
  return (
    <>
      <section className="pt-24" id="project">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="font-semibold text-xl">My Highlighted Projects</h1>
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
                    className="max-h-[250px] w-full object-cover rounded-md"
                  />
                  <div className="space-y-2">
                    <h1 className="text-base font-semibold">Codelingo</h1>
                    <p className="tracking-tight text-sm">
                      CodeLingo adalah program pembelajaran coding yang
                      dirancang khusus untuk anak-anak, mulai dari pemula hingga
                      level intermediate.{" "}
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
                    className="max-h-[250px] w-full object-cover rounded-md"
                  />
                  <div className="space-y-2">
                    <h1 className="text-base font-semibold">Tumbuh Sahabat</h1>
                    <p className="tracking-tight text-sm">
                      Tumbuh Sahabat adalah aplikasi berbasis web yang dirancang
                      khusus untuk membantu anak-anak dengan Down syndrome dalam
                      memantau asupan gizi mereka dan belajar melalui permainan
                      edukatif.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <Image
                    src="/images/codelingo.png"
                    width={1000}
                    height={1000}
                    alt="Project"
                    className="max-h-[250px] w-full object-cover rounded-md"
                  />
                  <div className="space-y-2">
                    <h1 className="text-base font-semibold">Codelingo</h1>
                    <p className="tracking-tight text-sm">
                      CodeLingo adalah program pembelajaran coding yang
                      dirancang khusus untuk anak-anak, mulai dari pemula hingga
                      level intermediate.{" "}
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
