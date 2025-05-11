import { Card, CardContent } from "@/components/ui/card";
import { collection } from "@/data/data";
import { SquareArrowOutUpRightIcon, Youtube } from "lucide-react";
import Link from "next/link";

export default function CollectionContent() {
  return (
    <div className="space-y-4">
      {collection.map((item) => (
        <div key={item.id}>
          <Link href={item.link} target="_blank">
            <Card className="transition-all duration-200 ease-in-out hover:bg-muted-foreground/10">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500">
                      <Youtube />
                    </div>
                    <div className="space-y-1">
                      <h1>{item.title}</h1>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <SquareArrowOutUpRightIcon className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}
