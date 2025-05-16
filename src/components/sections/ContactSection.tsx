
"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormValues } from './ContactFormSchema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label'; // Label is not directly used, FormLabel is. Keeping for now if needed later.
import { Card } from '@/components/ui/card'; // Added Card import
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Github, Linkedin, Twitter, Send, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { ScrollAnimationWrapper } from '@/components/animations/ScrollAnimationWrapper';
import Link from 'next/link';
import { X as XIcon } from 'lucide-react'; // if available


const socialLinks = [
  { name: "GitHub", url: "https://github.com/Arijeet-10", icon: Github, hint:"My GitHub profile" },
  { name: "LinkedIn", url: "www.linkedin.com/in/arijeetdas10", icon: Linkedin, hint:"My LinkedIn profile" },
  { name: "X", url: "https://x.com/ArijeetD94617", icon: XIcon, hint: "My X profile" },
  { name: "Email", url: "mailto:arijeetdas999@gmail.com", icon: Mail, hint:"Send me an email" },
];

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormValues) {
    // For now, log to console and show a toast.
    // In a real app, you'd send this to a backend or email service.
    console.log(data); 
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      variant: "default",
    });
    // Example mailto link generation (optional, can conflict with backend handling)
    // const mailtoLink = `mailto:your.email@example.com?subject=Contact from ${data.name}&body=${data.message}%0A%0AFrom: ${data.email}`;
    // window.location.href = mailtoLink;
    form.reset();
  }

  return (
    <section id="contact">
      <div className="container mx-auto">
        <ScrollAnimationWrapper>
          <h2 className="section-title">Get in Touch</h2>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollAnimationWrapper delay="delay-200" className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I&apos;m always excited to connect with new people and discuss interesting projects or opportunities. Whether you have a question, a proposal, or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-primary">Connect with me:</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button key={social.name} variant="outline" size="icon" asChild className="rounded-full hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 transform hover:scale-110">
                    <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.hint}>
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
             <div className="pt-4">
                
                <h4 className="font-semibold text-primary mt-2">Phone (Optional)</h4>
                <p className="text-muted-foreground">+91 9339038689</p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay="delay-400">
            <Card className="p-6 sm:p-8 shadow-xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="text-base"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your Email" {...field} className="text-base"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Hi, I'd like to discuss..." {...field} rows={5} className="text-base"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </Button>
                </form>
              </Form>
            </Card>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
