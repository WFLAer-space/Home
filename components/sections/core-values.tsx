import { Rocket, BookOpen, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    icon: Rocket,
    title: "Innovation",
    description: "Embracing cutting-edge technology to enhance education",
  },
  {
    icon: BookOpen,
    title: "Accessibility",
    description: "Making knowledge accessible to all WFLA members",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Fostering a supportive learning community",
  },
];

export function CoreValues() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <Card key={value.title}>
              <CardHeader>
                <value.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}