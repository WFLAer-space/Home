"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "Derive AI",
    url: "https://ai.wflaer.space",
    description: "Advanced AIGC platform for WFLA students and teachers",
    status: "beta",
    featured: true,
  },
  {
    name: "Resource Hub",
    url: "https://files.wflaer.space",
    description: "Centralized platform for academic resources",
    status: "active",
  },
  {
    name: "GDC Tutorial",
    url: "https://gdc.wflaer.space",
    description: "Exclusive GDC user guide for quick start for beginners",
    status: "active",
  },
  {
    name: "Campus Guide",
    url: "https://campus.wflaer.space",
    description: "Quick Search for Campus and Teacher Information",
    status: "legacy",
  },
  {
    name: "Links Collection",
    url: "https://links.wflaer.space",
    description: "Collection of useful links and resources",
    status: "legacy",
  },
];

export default function ProjectsPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Our Projects</h1>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="legacy">Legacy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.name} className={project.featured ? "border-primary" : ""}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <Badge variant={project.status === "beta" ? "default" : project.status === "active" ? "secondary" : "outline"}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={project.url} target="_blank">
                      Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="active" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => p.status === "active" || p.status === "beta").map((project) => (
              <Card key={project.name} className={project.featured ? "border-primary" : ""}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <Badge variant={project.status === "beta" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={project.url} target="_blank">
                      Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="legacy" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => p.status === "legacy").map((project) => (
              <Card key={project.name}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <Badge variant="outline">legacy</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={project.url} target="_blank">
                      Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}