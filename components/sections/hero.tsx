import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            WFLAer.space
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Enhancing educational experiences through innovative technology
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/projects">
                Explore Projects
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">
                Get Involved
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}