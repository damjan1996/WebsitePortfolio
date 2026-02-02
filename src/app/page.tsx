"use client";

import { Card, Button, Badge, Input, Navigation } from "@/components";
import {
  ArrowRight,
  Mail,
  MapPin,
  User,
  Send,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Monitor,
  Server,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
  }
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}

// ============================================
// Hero Section
// ============================================
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24 py-20 md:py-16 pt-24 md:pt-16 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary overflow-hidden"
    >
      {/* Decorative Blobs - Hidden on small mobile */}
      <motion.div
        className="absolute top-[100px] md:top-[150px] left-[50px] md:left-[100px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-radial from-accent/15 to-transparent rounded-full blur-[60px] hidden sm:block"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-[50px] md:bottom-[100px] right-[50px] md:right-[100px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gradient-radial from-accent/10 to-transparent rounded-full blur-[80px] hidden sm:block"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Glass Card with entrance animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={scaleIn}
        className="w-full max-w-[720px]"
      >
        <Card className="relative z-10 w-full text-center py-8 px-6 sm:py-10 sm:px-10 md:py-12 md:px-14" hover={false}>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary tracking-tight mb-4 sm:mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Damjan Savić
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-6 sm:mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            Software Developer and Media Producer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button variant="primary" size="lg" iconRight={<ArrowRight className="w-5 h-5" />}>
              View My Work
            </Button>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
}

// ============================================
// Projects Section
// ============================================
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory, payment processing, and analytics dashboard.",
    tags: ["Next.js", "Stripe"],
    image: "/projects/ecommerce.jpg",
  },
  {
    title: "Video Production Suite",
    description:
      "Cloud-based video editing platform with collaborative features, asset management, and export automation.",
    tags: ["React", "FFmpeg"],
    image: "/projects/video.jpg",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio with glassmorphism design, smooth animations, and optimized performance.",
    tags: ["Tailwind", "Framer"],
    image: "/projects/portfolio.jpg",
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="px-4 sm:px-6 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-8 sm:mb-10 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Badge variant="accent" className="mb-3 sm:mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-xl">
            A selection of my recent work across web development and media production.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  index,
}: {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  index: number;
}) {
  return (
    <motion.div variants={fadeInUp}>
      <motion.div
        whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
        className="h-full"
      >
        <Card hover={false} className="flex flex-col h-full group cursor-pointer transition-shadow duration-300 hover:shadow-[var(--shadow-xl)]">
          {/* Thumbnail Placeholder */}
          <div className="w-full h-40 sm:h-48 bg-bg-secondary rounded-lg mb-4 flex items-center justify-center overflow-hidden">
            <motion.div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-bg-tertiary flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
            </motion.div>
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">{title}</h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-grow">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="accent">
                {tag}
              </Badge>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

// ============================================
// Skills Section
// ============================================
const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      { name: "React / Next.js", percentage: 95 },
      { name: "TypeScript", percentage: 90 },
      { name: "Tailwind CSS", percentage: 92 },
      { name: "Vue.js", percentage: 80 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", percentage: 88 },
      { name: "Python", percentage: 75 },
      { name: "PostgreSQL", percentage: 85 },
      { name: "REST APIs", percentage: 92 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", percentage: 95 },
      { name: "Docker", percentage: 78 },
      { name: "Figma", percentage: 85 },
      { name: "AWS", percentage: 70 },
    ],
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="px-4 sm:px-6 md:px-16 lg:px-24 py-12 sm:py-16 md:py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Badge variant="accent" className="mb-3 sm:mb-4">
            Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-3 sm:mb-4">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.title} {...category} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCategoryCard({
  title,
  icon: Icon,
  skills,
  index,
}: {
  title: string;
  icon: typeof Monitor;
  skills: { name: string; percentage: number }[];
  index: number;
}) {
  return (
    <motion.div variants={fadeInUp}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Card hover={false} className="p-4 sm:p-6 group transition-shadow duration-300 hover:shadow-[var(--shadow-lg)]">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <motion.div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent-light flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            </motion.div>
            <h3 className="text-lg sm:text-xl font-semibold text-text-primary">{title}</h3>
          </div>

          {/* Skills */}
          <div className="space-y-3 sm:space-y-4">
            {skills.map((skill, skillIndex) => (
              <SkillItem key={skill.name} {...skill} delay={index * 0.1 + skillIndex * 0.05} />
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

function SkillItem({ name, percentage, delay }: { name: string; percentage: number; delay: number }) {
  return (
    <div className="space-y-1.5 sm:space-y-2">
      <div className="flex justify-between text-xs sm:text-sm">
        <span className="text-text-primary font-medium">{name}</span>
        <span className="text-text-muted">{percentage}%</span>
      </div>
      <div className="h-1.5 sm:h-2 bg-bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

// ============================================
// Contact Section
// ============================================
function ContactSection() {
  return (
    <section id="contact" className="px-4 sm:px-6 md:px-16 lg:px-24 py-12 sm:py-16 md:py-24 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div
            className="flex-1 w-full lg:max-w-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Badge variant="accent" className="mb-3 sm:mb-4">
              Get in Touch
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-3 sm:mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 sm:mb-8">
              Have a project in mind? I&apos;d love to hear about it. Send me a message and
              let&apos;s create something amazing together.
            </p>

            {/* Contact Info */}
            <motion.div
              className="space-y-3 sm:space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a
                href="mailto:hello@damjansavic.com"
                className="flex items-center gap-3 group cursor-pointer"
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent-light flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm sm:text-base text-text-primary group-hover:text-accent transition-colors duration-300">hello@damjansavic.com</span>
              </motion.a>
              <motion.div
                className="flex items-center gap-3 group cursor-pointer"
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent-light flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm sm:text-base text-text-primary group-hover:text-accent transition-colors duration-300">Available Worldwide</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            className="flex-1 w-full lg:max-w-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card hover={false} className="p-5 sm:p-6 md:p-8 transition-shadow duration-300 hover:shadow-[var(--shadow-xl)]">
                <form className="space-y-4 sm:space-y-6">
                  <Input
                    label="Name"
                    type="text"
                    placeholder="Your name"
                    icon={<User className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />}
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="your@email.com"
                    icon={<Mail className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />}
                  />
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-primary">Message</label>
                    <textarea
                      placeholder="Tell me about your project..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-primary text-text-primary placeholder:text-text-muted outline-none text-sm transition-all duration-300 ease-out focus:border-accent focus:ring-2 focus:ring-accent-muted focus:shadow-[0_0_0_4px_var(--accent-muted)] hover:border-text-muted resize-none"
                    />
                  </div>
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    iconRight={<Send className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />}
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// Footer
// ============================================
const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

function Footer() {
  return (
    <motion.footer
      className="px-4 sm:px-6 md:px-16 lg:px-24 py-8 sm:py-10 md:py-12 bg-bg-primary border-t border-border-primary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          {/* Logo & Tagline */}
          <motion.div
            className="space-y-1"
            variants={fadeInUp}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary">Damjan Savić</h3>
            <p className="text-xs sm:text-sm text-text-secondary">Software Developer & Media Producer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-3 sm:gap-4"
            variants={staggerContainer}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-bg-secondary border border-border-primary flex items-center justify-center text-text-primary transition-all duration-300"
                variants={fadeInUp}
                whileHover={{
                  y: -4,
                  backgroundColor: "var(--accent)",
                  borderColor: "var(--accent)",
                  color: "var(--text-inverse)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-border-primary"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Copyright Row */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-text-muted"
          variants={fadeIn}
        >
          <p>© 2025 Damjan Savić. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-accent transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
