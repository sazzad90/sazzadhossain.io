"use client"
import axios from "axios"
import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
  
    try {
      const response = await axios.post("/api/contact", values, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      toast.success("Message sent!", {
        description: response.data.message || "Thank you for your message. I'll get back to you soon.",
      })
      form.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Failed to send message", {
        description: "Please try again",
        className: "bg-red-500 text-white", // optional custom style
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="contact" className="min-h-screen pt-24 pb-16 px-8 bg-gradient-to-b from-background to-amber-100/10">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
        <h2 className="text-3xl sm:text-3xl font-medium mb-8 text-amber-500 dark:text-amber-400">Contact Me</h2>

          <h3 className="text-xl text-amber-500 dark:text-amber-400">Get In Touch</h3>
          <p className="text-lg">
            I&#39;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="space-y-2">
            <p>
              <strong className="text-amber-500 dark:text-amber-400">Email:</strong> sazzadhossain502690@gmail.com
            </p>
            <p>
              <strong className="text-amber-500 dark:text-amber-400">Location:</strong> Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <Card className="border-amber-300 dark:border-amber-800">
          <CardHeader>
            <CardTitle className="text-amber-500 dark:text-amber-400">Send Me a Message</CardTitle>
            <CardDescription>Fill out the form below and I&#39;ll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="focus-visible:ring-amber-500" />
                      </FormControl>
                      <FormMessage className="text-red-500"/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your email"
                          type="email"
                          {...field}
                          className="focus-visible:ring-amber-500"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500"/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject" {...field} className="focus-visible:ring-amber-500" />
                      </FormControl>
                      <FormMessage className="text-red-500"/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          className="min-h-[75px] focus-visible:ring-amber-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500"/>
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white dark:text-black"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
