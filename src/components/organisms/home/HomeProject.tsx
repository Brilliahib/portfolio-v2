import { Card, CardContent } from "@/components/ui/card";

export default function HomeProject() {
  return (
    <>
      <section>
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
              <CardContent className="p-4"></CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
