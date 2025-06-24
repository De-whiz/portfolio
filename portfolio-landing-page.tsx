"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  Play,
  ArrowRight,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function PortfolioLandingPage() {
  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState<number | null>(1)

  // State for testimonial carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      rating: 5.0,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas",
      author: "Leslie Alexander",
      position: "Founder, EV Charger Station",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      rating: 5.0,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas",
      author: "Albert Flores",
      position: "CTO, Software Agency",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ]

  const faqs = [
    {
      question: "What industries have you worked in as a graphic designer?",
      answer:
        "I have worked across various industries including technology, healthcare, retail, hospitality, and more, providing comprehensive graphic design solutions.",
    },
    {
      question: "Can I download your resume/CV for information?",
      answer:
        "You can download my resume/CV directly from my website. It provides a comprehensive overview of my education, work experience, and design achievements.",
    },
    {
      question: "Are you available for freelance design work?",
      answer:
        "Yes, I am available for freelance graphic design projects. Feel free to contact me to discuss your requirements and timeline.",
    },
    {
      question: "What tools do you use for your design work?",
      answer:
        "I use industry-standard tools including Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma, Sketch, and other specialized design software.",
    },
    {
      question: "How do I navigate through your portfolio projects?",
      answer:
        "You can browse through my portfolio projects by category or use the navigation filters to find specific types of work that interest you.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER SECTION - Navigation bar with logo and menu items */}
      <header className="bg-blue-900 text-white px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo with orange circle background */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-lg">O</span>
            </div>
            <span className="text-xl font-semibold">Oluitan.</span>
          </div>

          {/* Navigation menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-orange-400 hover:text-orange-300">
              Home
            </Link>
            <Link href="#services" className="hover:text-orange-400">
              Services
            </Link>
            <Link href="#about" className="hover:text-orange-400">
              About
            </Link>
            <Link href="#projects" className="hover:text-orange-400">
              Projects
            </Link>
            <Link href="#blogs" className="hover:text-orange-400">
              Blogs
            </Link>
            <Link href="#testimonials" className="hover:text-orange-400">
              Testimonials
            </Link>
          </div>

          {/* Contact button */}
          <Button className="bg-white text-blue-900 hover:bg-gray-100 rounded-full px-6">Contact Me</Button>
        </nav>
      </header>

      {/* HERO SECTION - Main introduction with image and call-to-action */}
      <section id="home" className="bg-white text-gray-900 py-20 px-6 relative overflow-hidden">
        {/* Animated background text */}
        <div className="absolute top-0 left-0 w-full bg-orange-400 text-blue-900 py-2 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap text-lg font-semibold">
            Logo Design ✦ Branding ✦ Social Media Design ✦ Print Design ✦ Logo Design ✦ Branding ✦ Social Media Design ✦
            Print Design ✦
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Left side - Text content */}
          <div className="space-y-6">
            {/* Greeting badge */}
            <div className="inline-block border-2 border-dashed border-orange-400 px-4 py-2 rounded">
              <span className="text-orange-400">Hello There!</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              I'm <span className="text-orange-400">Oluitan Wisdom</span>,<br />
              Graphic Designer
              <br />
              Based in Lagos, NG.
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg max-w-lg">
              I'm an experienced Graphic Designer with 18+ years in the field, collaborating with various companies and
              startups.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full flex items-center gap-2">
                View My Portfolio
                <Play className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-full"
              >
                Hire Me
              </Button>
            </div>
          </div>

          {/* Right side - Hero image with floating skill tags */}
          <div className="relative">
            {/* Main circular background */}
            <div className="w-96 h-96 bg-orange-400 rounded-full mx-auto relative">
              {/* Profile image placeholder - Replace with your actual image */}
              <div className="absolute inset-4 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">Your Photo Here</span>
              </div>

              {/* Floating skill badges */}
              <div className="absolute -top-4 right-8 bg-orange-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                UI/UX Designer
              </div>
              <div className="absolute top-20 -right-8 bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Graphic Designer
              </div>
              <div className="absolute bottom-20 -left-8 bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Brand Designer
              </div>
            </div>

            {/* Hire me floating button */}
            <div className="absolute top-8 right-8 w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs text-white">HIRE ME</div>
                <div className="text-xs text-orange-400">★ HIRE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Display graphic design services offered */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-orange-400 font-semibold mb-2">— Services</p>
              <h2 className="text-4xl font-bold text-gray-900">
                Services <span className="text-orange-400">I Provide</span>
              </h2>
            </div>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-full flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo Design Service */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-orange-400 font-bold">L</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Logo Design</h3>
                <p className="text-gray-600 mb-6">
                  Creating memorable and impactful logos that represent your brand identity and leave a lasting
                  impression on your audience.
                </p>
                <Link
                  href="#"
                  className="text-orange-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Branding Service */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-orange-400 font-bold">B</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Branding</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive brand identity development including color schemes, typography, and visual guidelines
                  for consistent brand presence.
                </p>
                <Link
                  href="#"
                  className="text-orange-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Social Media Design Service */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-orange-400 font-bold">S</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Social Media Design</h3>
                <p className="text-gray-600 mb-6">
                  Eye-catching social media graphics, posts, and campaigns that engage your audience and boost your
                  online presence.
                </p>
                <Link
                  href="#"
                  className="text-orange-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Personal information and statistics */}
      <section id="about" className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with floating skills */}
          <div className="relative">
            <div className="w-96 h-96 bg-orange-400 rounded-full mx-auto relative">
              {/* Profile image placeholder */}
              <div className="absolute inset-4 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">Your Photo Here</span>
              </div>

              {/* Floating skill tags around the image */}
              <div className="absolute top-8 left-8 bg-orange-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                Logo Design
              </div>
              <div className="absolute top-16 right-4 bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Branding
              </div>
              <div className="absolute right-8 top-32 bg-orange-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                Social Media Design
              </div>
              <div className="absolute bottom-16 right-8 bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Print Design
              </div>
              <div className="absolute bottom-8 left-16 bg-orange-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                Brand Identity
              </div>
              <div className="absolute left-4 top-40 bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Creative Design
              </div>
            </div>
          </div>

          {/* Right side - About content */}
          <div className="space-y-8">
            <div>
              <p className="text-orange-400 font-semibold mb-2">— About Me</p>
              <h2 className="text-4xl font-bold mb-6">
                Who is <span className="text-orange-400">Oluitan Wisdom</span>?
              </h2>
              <p className="text-gray-300 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">600+</div>
                <div className="text-gray-300">Project Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
                <div className="text-gray-300">Industry Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">18+</div>
                <div className="text-gray-300">Years of Experience</div>
              </div>
            </div>

            {/* Download CV button and signature */}
            <div className="flex items-center gap-8">
              <Button className="bg-orange-400 hover:bg-orange-500 text-blue-900 px-8 py-3 rounded-full flex items-center gap-2">
                Download CV
                <ArrowRight className="w-4 h-4" />
              </Button>
              <div className="text-2xl font-script text-orange-400">Oluitan Wisdom</div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION - Showcase of recent projects */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-orange-400 font-semibold mb-2">— My Portfolio</p>
              <h2 className="text-4xl font-bold text-gray-900">
                My Latest <span className="text-orange-400">Projects</span>
              </h2>
            </div>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-full flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Projects grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Project 1 - Brand Identity Design */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-orange-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-orange-400 text-2xl font-bold">B</span>
                  </div>
                  <p className="text-gray-600">Brand Identity Project Showcase</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Logo Design
                  </span>
                  <span className="bg-orange-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Branding
                  </span>
                  <span className="bg-orange-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Brand Identity
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 - Social Media Campaign */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-blue-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-orange-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-blue-900 text-2xl font-bold">S</span>
                  </div>
                  <p className="text-gray-600">Social Media Design Showcase</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Social Media Design
                  </span>
                  <span className="bg-orange-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Creative Design
                  </span>
                  <span className="bg-orange-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Campaign
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION - Education and work history */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            My <span className="text-orange-400">Academic and Professional</span> Journey
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-blue-900 font-bold">🎓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                </div>

                <div className="space-y-8 text-left">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">2012 -2014</div>
                    <h4 className="text-lg font-bold text-gray-900">Harmony Institute</h4>
                    <p className="text-gray-600">Master in Visual Arts</p>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">2008 -2012</div>
                    <h4 className="text-lg font-bold text-gray-900">Aurora Academy</h4>
                    <p className="text-gray-600">Master in Visual Arts</p>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">1996 -2008</div>
                    <h4 className="text-lg font-bold text-gray-900">Crystalbrook</h4>
                    <p className="text-gray-600">Master in Visual Arts</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Experience Timeline */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-blue-900 font-bold">💼</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
                </div>

                <div className="space-y-8 text-left">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">2018 -2024</div>
                    <h4 className="text-lg font-bold text-gray-900">Insightlancer</h4>
                    <p className="text-gray-600">Master in Visual Arts</p>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">2016 -2018</div>
                    <h4 className="text-lg font-bold text-gray-900">Self-Employed</h4>
                    <p className="text-gray-600">Master in Visual Arts</p>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">2014 -2016</div>
                    <h4 className="text-lg font-bold text-gray-900">KG Graphics Studio</h4>
                    <p className="text-gray-600">Master in Visual Arts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - Client feedback and reviews */}
      <section id="testimonials" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-orange-400 font-semibold mb-2">— Clients Testimonials</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            The Impact of My Work: <span className="text-orange-400">Client Testimonials</span>
          </h2>

          {/* Testimonial carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className={`p-8 ${index === currentTestimonial ? "ring-2 ring-orange-400" : ""}`}>
                  <CardContent className="p-0 text-left">
                    {/* Star rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                      ))}
                      <span className="ml-2 font-bold text-gray-900">{testimonial.rating}</span>
                    </div>

                    {/* Testimonial text */}
                    <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.text}</p>

                    {/* Author info */}
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-500">{testimonial.position}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                onClick={() =>
                  setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1)
                }
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                className="rounded-full bg-orange-400 hover:bg-orange-500 text-blue-900"
                onClick={() =>
                  setCurrentTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1)
                }
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - Frequently asked questions */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-400 font-semibold mb-2">— FAQs</p>
            <h2 className="text-4xl font-bold">
              Questions? <span className="text-orange-400">Look here.</span>
            </h2>
          </div>

          {/* FAQ accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-blue-800 rounded-lg overflow-hidden">
                <button
                  className={`w-full px-6 py-4 text-left flex items-center justify-between ${
                    openFaq === index ? "bg-orange-400 text-blue-900" : "bg-blue-800 hover:bg-blue-700"
                  }`}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-orange-400 text-blue-900">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - Contact form and information */}
      <section id="contact" className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div>
            <p className="text-orange-400 font-semibold mb-2">— Contact Us</p>
            <h2 className="text-4xl font-bold mb-6">
              Let's Talk for <span className="text-orange-400">Your Next Projects</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-900" />
                </div>
                <span>+1 (406) 555-0120</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-900" />
                </div>
                <span>example@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-blue-900 font-bold">$</span>
                </div>
                <span>example</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-900" />
                </div>
                <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-white rounded-lg p-8 text-gray-900">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name *</label>
                  <Input placeholder="Ex. John Doe" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <Input type="email" placeholder="example@gmail.com" className="w-full" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone *</label>
                  <Input placeholder="Enter Phone Number" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">I'm Interested in *</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>Select</option>
                    <option>Logo Design</option>
                    <option>Branding</option>
                    <option>Social Media Design</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Budget Range (USD) *</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>Select Range</option>
                    <option>$500 - $1000</option>
                    <option>$1000 - $5000</option>
                    <option>$5000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Country *</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>Select Country</option>
                    <option>Nigeria</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Your Message *</label>
                <textarea
                  placeholder="Enter here..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>

              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION - Links, social media, and newsletter */}
      <footer className="bg-blue-900 text-white py-16 px-6">
        {/* Animated background text */}
        <div className="bg-orange-400 text-blue-900 py-2 overflow-hidden mb-12">
          <div className="animate-scroll whitespace-nowrap text-lg font-semibold">
            Logo Design ✦ Branding ✦ Social Media Design ✦ Print Design ✦ Logo Design ✦ Branding ✦ Social Media Design ✦
            Print Design ✦
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Company info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-full flex items-center gap-2">
                  View All Blogs
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Let's <span className="text-orange-400">Connect</span> there
              </h3>

              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-blue-900 font-bold">O</span>
                </div>
                <span className="text-xl font-semibold">Oluitan</span>
              </div>

              <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>

              {/* Social media links */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                  <Facebook className="w-5 h-5 text-blue-900" />
                </div>
                <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-blue-900 font-bold">Be</span>
                </div>
                <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-blue-900" />
                </div>
                <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                  <Twitter className="w-5 h-5 text-blue-900" />
                </div>
                <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-blue-900" />
                </div>
              </div>
            </div>

            {/* Navigation links */}
            <div>
              <h4 className="text-lg font-bold text-orange-400 mb-4">Navigation</h4>
              <div className="space-y-3">
                <Link href="#home" className="block hover:text-orange-400">
                  Home
                </Link>
                <Link href="#services" className="block hover:text-orange-400">
                  Services
                </Link>
                <Link href="#about" className="block hover:text-orange-400">
                  About
                </Link>
                <Link href="#projects" className="block hover:text-orange-400">
                  Projects
                </Link>
                <Link href="#blogs" className="block hover:text-orange-400">
                  Blogs
                </Link>
                <Link href="#faqs" className="block hover:text-orange-400">
                  FAQs
                </Link>
              </div>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-lg font-bold text-orange-400 mb-4">Contact</h4>
              <div className="space-y-3">
                <p>+0123-456-789</p>
                <p>www.example.com</p>
                <p>example@gmail.com</p>
                <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
              </div>
            </div>

            {/* Newsletter signup */}
            <div>
              <h4 className="text-lg font-bold text-orange-400 mb-4">Get the latest information</h4>
              <div className="flex">
                <Input placeholder="Email address" className="rounded-r-none border-r-0 bg-white text-gray-900" />
                <Button className="bg-orange-400 hover:bg-orange-500 text-blue-900 rounded-l-none">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              Copyright © 2024 <span className="text-orange-400">Oluitan</span>. All Rights Reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-300 hover:text-orange-400">
                User Terms & Conditions
              </Link>
              <Link href="#" className="text-gray-300 hover:text-orange-400">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
