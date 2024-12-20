"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Contact Us</h1>
        
        <div className="max-w-xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Reach out to us through these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:service@wflaer.space" className="text-primary hover:underline">
                  service@wflaer.space
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span>WeChat: dbccccwx</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}