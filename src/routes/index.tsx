import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Globe2,
  Calculator,
  BookOpen,
  Palette,
  Users,
  Key,
  Award,
  Check,
  ShieldCheck,
  Star,
  Clock,
  ChevronDown,
  ClipboardList,
  Download as DownloadIcon,
  GraduationCap,
  Printer,
  Play,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import productMockup from "@/assets/product-mockup.png.asset.json";
import superstarZone from "@/assets/superstar-zone.png.asset.json";
import geographyPage from "@/assets/geography.png.asset.json";
import mathsPage from "@/assets/maths.png.asset.json";
import englishPage from "@/assets/english.png.asset.json";
import artDesignPage from "@/assets/art-design.png.asset.json";
import teamworkPage from "@/assets/teamwork.png.asset.json";
import inAction1 from "@/assets/in-action-1.png.asset.json";
import inAction2 from "@/assets/in-action-2.png.asset.json";
import inAction3 from "@/assets/in-action-3.png.asset.json";
import inAction4 from "@/assets/in-action-4.png.asset.json";
import inAction5 from "@/assets/in-action-5.png.asset.json";
import inAction6 from "@/assets/in-action-6.png.asset.json";
import superstarNoah from "@/assets/superstar-noah.png.asset.json";
import superstarFairplay from "@/assets/superstar-fairplay.png.asset.json";
import superstarEthan from "@/assets/superstar-ethan.png.asset.json";
import parentsAtHome1 from "@/assets/parents-at-home-1.jpg";
import parentsAtHome2 from "@/assets/parents-at-home-2.jpg";
import parentsAtHome3 from "@/assets/parents-at-home-3.jpg";
import parentsAtHome4 from "@/assets/parents-at-home-4.jpg";
import parentsAtHome5 from "@/assets/parents-at-home-5.jpg";
import parentsAtHome6 from "@/assets/parents-at-home-6.jpg";
import parentsAtHome7 from "@/assets/parents-at-home-7.jpg";
import teachersClassroom1 from "@/assets/teachers-classroom-1.jpg";
import teachersClassroom2 from "@/assets/teachers-classroom-2.jpg";
import teachersClassroom3 from "@/assets/teachers-classroom-3.jpg";
import teachersClassroom4 from "@/assets/teachers-classroom-4.jpg";
import teachersClassroom5 from "@/assets/teachers-classroom-5.jpg";
import teachersClassroom6 from "@/assets/teachers-classroom-6.jpg";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import testimonialJames from "@/assets/testimonial-james.jpg";
import testimonialPriya from "@/assets/testimonial-priya.jpg";
import footballCoaches1 from "@/assets/football-coaches-1.jpg";
import footballCoaches2 from "@/assets/football-coaches-2.jpg";
import footballCoaches3 from "@/assets/football-coaches-3.jpg";
import footballCoaches4 from "@/assets/football-coaches-4.jpg";
import footballCoaches5 from "@/assets/football-coaches-5.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import previewDrawFlag from "@/assets/preview-draw-flag.png";
import previewMatchNumber from "@/assets/preview-match-number.png";
import previewFlagMatch from "@/assets/preview-flag-match.png";
import previewWhereWorld from "@/assets/preview-where-world.png";
import previewCountKit from "@/assets/preview-count-kit.png";
import previewDesignStadium from "@/assets/preview-design-stadium.png";
import previewGoalCounting from "@/assets/preview-goal-counting.jpg";
import previewWordSearch from "@/assets/preview-word-search.png";
import previewCrossword from "@/assets/preview-crossword.png";
import previewVocabulary from "@/assets/preview-vocabulary.png";
import previewTeamBadge from "@/assets/preview-team-badge.png";
import previewFairPlay from "@/assets/preview-fair-play.png";
import previewFootballShirt from "@/assets/preview-football-shirt.png";
import previewChooseCaptain from "@/assets/preview-choose-captain.png";
import previewTeamStrategy from "@/assets/preview-team-strategy.png";
import previewTeamworkCertificate from "@/assets/preview-teamwork-certificate.jpg";
import previewCompletionCertificate from "@/assets/preview-completion-certificate.jpg";
import previewAnswerKey from "@/assets/preview-answer-key.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kick & Learn™ — World Cup 2026 Activity Pack for Kids 5–11" },
      {
        name: "description",
        content:
          "Printable World Cup 2026 activity book. Help kids 5–11 learn Maths, Geography, English, Art & Teamwork through football. Instant PDF — £9.99.",
      },
      { property: "og:title", content: "Kick & Learn™ — World Cup 2026 Activity Pack" },
      {
        property: "og:description",
        content:
          "30+ printable football-themed activities for kids 5–11. Perfect for parents, PE teachers and football coaches.",
      },
    ],
  }),
  component: SalesPage,
});

function useCountdown(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const i = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(i);
  }, []);
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return { h, m, s };
}

function CTA({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#offer"
      className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.99]"
      style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-cta)" }}
    >
      {children}
    </a>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function SalesPage() {
  const { h, m, s } = useCountdown(15 * 60);
  const [activeActionCategory, setActiveActionCategory] = useState(0);


  const included = [
    { icon: Globe2, title: "Geography Zone", desc: "Flags, countries, continents and world map activities." },
    { icon: Calculator, title: "Maths Zone", desc: "Counting, scores, statistics and football number challenges." },
    { icon: BookOpen, title: "English Zone", desc: "Vocabulary, word search, crossword, commentator and story writing." },
    { icon: Palette, title: "Art & Design Zone", desc: "Stadiums, team badges, football shirts, mascots and poster design." },
    { icon: Users, title: "Teamwork Zone", desc: "Dream team building, captain choices, strategy, fair play and leadership." },
    { icon: Key, title: "Teacher Answer Key", desc: "Quick answers for Geography, Maths and English activities." },
    { icon: Award, title: "Completion Certificate", desc: "A final reward children can proudly complete and keep." },
  ];

  const activities = [
    {
      icon: Globe2,
      title: "🌍 Flag Match Challenge",
      zone: "Geography",
      desc: "Children match World Cup flags to the correct countries — Brazil, France, Japan, Argentina, Spain and Germany. Builds geography knowledge through visual recognition.",
    },
    {
      icon: Palette,
      title: "🖍️ Draw the Flag",
      zone: "Geography",
      desc: "Children colour each country's flag using the correct colours. Combines creativity with geography — perfect for KS1.",
    },
    {
      icon: Globe2,
      title: "🗺️ Where in the World?",
      zone: "Geography",
      desc: "Children find and circle World Cup countries on a world map. Teaches continents, locations and global awareness.",
    },
    {
      icon: Calculator,
      title: "➕ Goal Counting Challenge",
      zone: "Maths",
      desc: "Children count goals from real-style match results and write the totals. Builds number recognition and addition skills.",
    },
    {
      icon: Calculator,
      title: "📊 World Cup Statistics",
      zone: "Maths",
      desc: "Children analyse match data — most goals, fewest goals, total goals, differences. Introduces data handling and statistics.",
    },
    {
      icon: BookOpen,
      title: "🎙️ Commentator Challenge",
      zone: "English",
      desc: "Children describe a match scene as if they are a live football commentator. Develops descriptive writing and vocabulary.",
    },
    {
      icon: BookOpen,
      title: "✍️ Football Story Writing",
      zone: "English",
      desc: "Children complete a story that begins: \"It was the final minute of the World Cup Final…\" Builds creative writing and narrative skills.",
    },
    {
      icon: Palette,
      title: "👕 Design a Football Shirt",
      zone: "Art & Design",
      desc: "Children design their own kit — team name, number, colours, logo, stripes and motto. Combines creativity with personal expression.",
    },
    {
      icon: Users,
      title: "🏟️ My World Cup Player Card",
      zone: "PE & Teamwork",
      desc: "Children create their own player card with photo space, position, favourite skill, age and star ratings for Speed, Passing, Shooting and Defending.",
    },
    {
      icon: Users,
      title: "♟️ Team Strategy Challenge",
      zone: "Teamwork",
      desc: "Children become the coach — filling in a real tactical pitch with formation, key player, main tactic and match goal. Develops strategic thinking and leadership.",
    },
    {
      icon: Key,
      title: "📋 Teacher Answer Key",
      zone: "For Teachers & Parents",
      desc: "3 full answer key pages for Geography, Maths and English activities. Check answers in seconds — no prep needed.",
    },
    {
      icon: Award,
      title: "🏆 Certificate of Completion",
      zone: "Final Reward",
      desc: "Children earn the \"World Cup Learning Champion\" certificate listing all 6 subjects completed. A proud moment for children — and a great photo for parents.",
    },
  ];

  const getZoneBadgeStyle = (zone: string) => {
    switch (zone) {
      case "Geography":
        return { bg: "#e0f2fe", text: "#0369a1" };
      case "Maths":
        return { bg: "#dcfce7", text: "#15803d" };
      case "English":
        return { bg: "#fee2e2", text: "#b91c1c" };
      case "Art & Design":
        return { bg: "#fef9c3", text: "#a16207" };
      case "PE & Teamwork":
      case "Teamwork":
        return { bg: "#f3e8ff", text: "#6b21a8" };
      case "For Teachers & Parents":
        return { bg: "#f3f4f6", text: "#4b5563" };
      default:
        return { bg: "#ffedd5", text: "#c2410c" };
    }
  };

  const previewImages = [
    { src: previewDrawFlag, alt: "Draw the Flag page preview" },
    { src: previewMatchNumber, alt: "Match Number to Quantity page preview" },
    { src: previewFlagMatch, alt: "Flag Match Challenge page preview" },
    { src: previewWhereWorld, alt: "Where in the World page preview" },
    { src: previewCountKit, alt: "Count the Kit page preview" },
    { src: previewDesignStadium, alt: "Design your dream stadium page preview" },
    { src: previewGoalCounting, alt: "Goal Counting Challenge page preview" },
    { src: previewWordSearch, alt: "World Cup Word Search page preview" },
    { src: previewCrossword, alt: "Football Crossword page preview" },
    { src: previewVocabulary, alt: "Match the Vocabulary page preview" },
    { src: previewTeamBadge, alt: "Create a Team Badge page preview" },
    { src: previewFairPlay, alt: "Fair Play Mission page preview" },
    { src: previewFootballShirt, alt: "Design a Football Shirt page preview" },
    { src: previewChooseCaptain, alt: "Choose Your Captain page preview" },
    { src: previewTeamStrategy, alt: "Team Strategy Challenge page preview" },
    { src: previewTeamworkCertificate, alt: "Teamwork Champion Certificate page preview" },
    { src: previewCompletionCertificate, alt: "Certificate of Completion page preview" },
    { src: previewAnswerKey, alt: "Teacher Answer Key page preview" },
  ];

  const audiences = [
    {
      title: "For PE Teachers",
      color: "from-primary/10 to-primary/5",
      points: [
        "Connects football to real curriculum goals (KS1 & KS2)",
        "Covers Maths, Geography, English, Art and Teamwork",
        "No planning needed — print and use in minutes",
        "Helps justify football-based lessons with educational outcomes",
      ],
    },
    {
      title: "For Parents",
      color: "from-accent/15 to-accent/5",
      points: [
        "Screen-free activity that keeps children focused",
        "Uses football to make learning feel like fun, not homework",
        "Works at home, on weekends, holidays and rainy days",
        "Includes answer key so you can check work easily",
      ],
    },
    {
      title: "For Football Coaches",
      color: "from-primary/10 to-accent/10",
      points: [
        "Perfect for rainy days, warm-ups, camps and club sessions",
        "Builds teamwork, fair play, focus and football knowledge off the pitch",
        "Great bonus material to share with parents",
        "Keeps young players engaged beyond training",
      ],
    },
  ];

  const samples = [
    {
      src: superstarZone.url,
      alt: "SUPERSTAR ZONE - Create your own World Cup player profile.",
    },
    {
      src: geographyPage.url,
      alt: "GEOGRAPHY - Explore countries, flags and continents through the World Cup.",
    },
    {
      src: mathsPage.url,
      alt: "MATHS - Learn with football scores, numbers and World Cup statistics.",
    },
    {
      src: englishPage.url,
      alt: "ENGLISH - Read, write and tell your own football stories.",
    },
    {
      src: artDesignPage.url,
      alt: "ART & DESIGN - Create shirts, badges, mascots, stadiums and posters.",
    },
    {
      src: teamworkPage.url,
      alt: "TEAMWORK - Learn fair play, leadership and champion team spirit.",
    },
  ];

  const inActionImages = [
    { src: inAction1.url, alt: "Child holding a completed World Cup superstar card on a football pitch." },
    { src: inAction2.url, alt: "Printable World Cup superstar worksheet with profile details and star ratings." },
    { src: inAction3.url, alt: "Boy showing his completed World Cup superstar card at home." },
    { src: inAction4.url, alt: "Goalkeeper-themed World Cup superstar worksheet ready to print." },
    { src: inAction5.url, alt: "Child proudly holding a completed football-themed printable worksheet at home." },
    { src: inAction6.url, alt: "Student showing a football maths worksheet in the classroom." },
    { src: superstarNoah.url, alt: "Noah Harrison's completed My World Cup Superstar Card with 5-star Speed rating." },
    { src: superstarFairplay.url, alt: "Young player proudly showing his completed Fair Play Mission worksheet at football training." },
    { src: superstarEthan.url, alt: "Ethan Walker's World Cup Superstar Card completed in the classroom." },
  ];

  const actionCategories = [
    {
      label: "Student Superstar Moments",
      description: "Let children become part of the World Cup experience.",
      items: [
        { src: inAction1.url, alt: "Child holding a completed World Cup superstar card on a football pitch.", caption: "Add your photo. Rate your skills. Become a World Cup superstar." },
        { src: inAction2.url, alt: "Printable World Cup superstar worksheet with profile details and star ratings.", caption: "A personalized football card kids will be excited to complete." },
        { src: inAction3.url, alt: "Boy showing his completed World Cup superstar card at home.", caption: "A special keepsake activity parents and teachers can proudly display." },
        { src: inAction4.url, alt: "Goalkeeper-themed World Cup superstar worksheet ready to print.", caption: "Fun profile pages that make every child feel part of the tournament." },
        { src: inAction5.url, alt: "Child proudly holding a completed football-themed printable worksheet at home.", caption: "Print, personalize and celebrate every child’s football identity." },
        { src: inAction6.url, alt: "Student showing a football maths worksheet in the classroom.", caption: "A memorable worksheet children will want to show again and again." },
        { src: superstarNoah.url, alt: "Noah Harrison's completed My World Cup Superstar Card with 5-star Speed rating.", caption: "⚡ Meet Noah — 5-star Speed, Midfielder, and proud Manchester United superfan!" },
        { src: superstarFairplay.url, alt: "Young player proudly showing his completed Fair Play Mission worksheet at football training.", caption: "🤝 Fair Play Mission complete — real champions win with respect and teamwork!" },
        { src: superstarEthan.url, alt: "Ethan Walker's World Cup Superstar Card completed in the classroom.", caption: "⚽ Ethan the Forward dreams of scoring the winning goal — print yours today!" },
      ],
    },
    {
      label: "Parents at Home",
      description: "Turn screen time into learning time.",
      items: [
        { src: parentsAtHome1, alt: "Mother and son coloring Leo the Lion worksheet", caption: "Printable football activities for focused screen-free learning." },
        { src: parentsAtHome2, alt: "Mother and two kids holding Draw the Flag and Create a Team Badge worksheets", caption: "Fun World Cup learning activities kids can complete at home." },
        { src: parentsAtHome3, alt: "Boy coloring Leo the Lion worksheet on coffee table", caption: "Perfect for weekends, holidays and rainy days." },
        { src: parentsAtHome4, alt: "Father and daughter holding Goal Counting Challenge maths worksheet", caption: "Fun counting and maths activities parents can print in minutes." },
        { src: parentsAtHome5, alt: "Redhead mother and son showing Certificate of Achievement worksheet", caption: "A proud moment showing the certificate of achievement at home." },
        { src: parentsAtHome6, alt: "Mother and son holding Colour the World Cup Trophy worksheet", caption: "Fun coloring and creative worksheets that kids genuinely love." },
        { src: parentsAtHome7, alt: "Mother kissing son holding Score Predictor worksheet with stats pages", caption: "Interactive football score predictors and maths stats pages." },
      ],
    },
    {
      label: "Teachers in the Classroom",
      description: "Make classroom learning feel like the World Cup.",
      items: [
        { src: teachersClassroom1, alt: "Teacher and student holding Draw the Flag geography worksheet in classroom", caption: "Ready-to-print activities for KS1 and KS2." },
        { src: teachersClassroom2, alt: "Male teacher holding Score Predictor maths worksheet with students in background", caption: "Make Maths, Geography and English more engaging." },
        { src: teachersClassroom3, alt: "Female teacher and student holding My World Cup Superstar Card in classroom", caption: "No prep needed — just print and use." },
        { src: teachersClassroom4, alt: "Teacher and students proudly holding Certificate of Achievement worksheets", caption: "Certificates children are proud to complete and display." },
        { src: teachersClassroom5, alt: "Teacher giving thumbs up while students hold Fair Play Mission worksheets", caption: "Teamwork and fair play activities that spark real discussions." },
        { src: teachersClassroom6, alt: "Teacher and student holding Commentator Challenge worksheet in classroom", caption: "Commentator and writing challenges that spark real creativity." },
      ],
    },
    {
      label: "Football Coaches",
      description: "Give young footballers more than just training.",
      items: [
        { src: footballCoaches1, alt: "Group of kids with teacher holding World Cup Passport books", caption: "Fun off-pitch activities for young players." },
        { src: footballCoaches2, alt: "Teacher/mother with child holding My World Cup Superstar Card", caption: "Give young footballers more than just training." },
        { src: footballCoaches3, alt: "Coach high-fiving student holding Fair Play Mission worksheet", caption: "Build teamwork, focus and confidence beyond the pitch." },
        { src: footballCoaches4, alt: "Coach pointing to child's Fair Play Mission worksheet on the training field", caption: "Perfect for football clubs, camps and rainy days." },
        { src: footballCoaches5, alt: "Coach showing Find the Differences worksheet to a group of young players sitting on the grass", caption: "Interactive games and challenges players love to solve together." },
      ],
    },
  ];

  const currentCategory = actionCategories[activeActionCategory] || actionCategories[0];


  const testimonials = [
    {
      name: "Sarah M.",
      role: "Mum of two (ages 7 and 9), London",
      initials: "SM",
      bg: "bg-accent/30",
      image: testimonialSarah,
      quote:
        "My boys are obsessed with football and I was struggling to get them off their tablets. Kick & Learn was a game changer. They spent an entire afternoon doing the activities without me asking once. The geography pages were their favourite — they now know every continent!",
    },
    {
      name: "Mr. James T.",
      role: "Primary School PE Teacher, Manchester",
      initials: "JT",
      bg: "bg-primary/20",
      image: testimonialJames,
      quote:
        "I used Kick & Learn during the last week of term when the kids were already in World Cup mode. It covered geography, maths and teamwork — all aligned with KS2. The answer key saved me so much time. I'll be using it every tournament from now on.",
    },
    {
      name: "Coach Priya S.",
      role: "Under-9s Football Academy, Birmingham",
      initials: "PS",
      bg: "bg-accent/30",
      image: testimonialPriya,
      quote:
        "We used this during a rainy session and the kids absolutely loved it. The teamwork and strategy activities sparked a brilliant conversation about fair play and leadership. Parents loved that we sent the journal home too. Brilliant resource.",
    },
  ];

  const faqs = [
    {
      q: "What age is Kick & Learn™ suitable for?",
      a: "Kick & Learn is designed for children aged 5 to 11, covering KS1 (ages 5–7) and KS2 (ages 7–11). Activities are clearly organised by difficulty so you can choose the right pages for each child.",
    },
    {
      q: "Is this a physical book or a digital download?",
      a: "Kick & Learn is a digital PDF product. After purchase, you receive instant access to download the file and print it as many times as you like — at home, school or a print shop.",
    },
    {
      q: "Do I need any special software or apps to use it?",
      a: "No apps or subscriptions needed. You just need a PDF reader (like Adobe Acrobat or any standard PDF viewer) and a printer. That's it.",
    },
    {
      q: "Can I use Kick & Learn in my classroom or football club?",
      a: "Yes. Kick & Learn is ideal for classrooms, PE sessions, football clubs, holiday camps and home learning. You can print and use it with multiple children.",
    },
    {
      q: "What if I'm not happy with the product?",
      a: "We offer a full 7-day money-back guarantee. If you're not satisfied for any reason, contact us within 7 days and we'll refund your full payment — no questions asked.",
    },
  ];

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* HERO */}
      <section style={{ background: "#f5f9f0" }}>
        {/* Announcement bar */}
        <div
          className="w-full px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-white sm:text-sm"
          style={{ background: "#1a4d1a", letterSpacing: "0.08em" }}
        >
          ★ Limited Edition — World Cup 2026 Activity Pack
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-10 md:grid-cols-2 md:gap-12 md:px-8 md:py-16">
          {/* Image first on mobile, right on desktop */}
          <div className="order-1 flex justify-center md:order-2">
            <div
              className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-2"
              style={{ border: "3px solid #1a6b1a", boxShadow: "0 20px 40px -20px rgba(26,77,26,0.35)" }}
            >
              <img
                src={productMockup.url}
                alt="Kick & Learn Activity Pack"
                width={1200}
                height={1200}
                className="h-auto w-full rounded-xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-2 md:order-1">
            <p
              className="text-xs font-semibold uppercase tracking-wider sm:text-sm"
              style={{ color: "#1a6b1a" }}
            >
              ● World Cup 2026 Edition · 30+ Activities + 3 Bonuses
            </p>
            <h1
              className="mt-4 font-extrabold leading-[1.1]"
              style={{ color: "#1a1a1a", fontSize: "clamp(28px, 5vw, 48px)" }}
            >
              30+ fun activities to turn{" "}
              <span
                className="inline-block px-2"
                style={{ background: "#FFE066", color: "#1a1a1a", borderRadius: 4 }}
              >
                World Cup 2026
              </span>{" "}
              excitement into real learning
            </h1>
            <p className="mt-5 text-base leading-relaxed sm:text-lg" style={{ color: "#3a5c3a" }}>
              The World Cup becoming real education — at school, in training or at home. Aligned with KS1 &amp; KS2. Perfect for PE teachers, parents and football coaches.
            </p>

            <a
              href="#oferta"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-7 inline-flex w-full items-center justify-center gap-3 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.01] sm:w-auto sm:text-base"
              style={{ background: "#1a6b1a", borderRadius: 8, boxShadow: "0 10px 24px -10px rgba(26,107,26,0.6)" }}
            >
              Get Instant Access Now <Play className="h-4 w-4 fill-current" />
            </a>

            {/* Reviews */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-3">
                {[avatar1, avatar2, avatar3, avatar4].map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Reviewer avatar ${idx + 1}`}
                    className="h-9 w-9 rounded-full border-2 border-white object-cover animate-fade-in"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: "#f5b301" }} className="text-base">★★★★★</span>
                <span className="font-bold" style={{ color: "#1a1a1a" }}>4.9</span>
              </div>
              <p className="basis-full text-sm" style={{ color: "#3a5c3a" }}>
                +500 teachers &amp; parents approved
              </p>
            </div>
          </div>
        </div>

        {/* Features bar */}
        <div className="border-t" style={{ borderColor: "rgba(26,107,26,0.15)", background: "#f5f9f0" }}>
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-y divide-x md:grid-cols-4 md:divide-y-0"
            style={{ borderColor: "rgba(26,107,26,0.15)" }}>
            {[
              { Icon: ClipboardList, title: "30+ Activities", sub: "6 subjects + 3 bonuses" },
              { Icon: DownloadIcon, title: "Instant Access", sub: "Download right away" },
              { Icon: GraduationCap, title: "KS1 & KS2", sub: "Ages 5 to 11" },
              { Icon: Printer, title: "Print-Ready", sub: "Tested on A4 & Letter" },
            ].map(({ Icon, title, sub }) => (
              <div key={title} className="flex flex-col items-center gap-1 px-3 py-5 text-center">
                <Icon className="h-6 w-6" style={{ color: "#1a6b1a" }} />
                <p className="text-xs font-bold uppercase tracking-wide sm:text-sm" style={{ color: "#1a4d1a" }}>
                  {title}
                </p>
                <p className="text-xs" style={{ color: "#3a5c3a" }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* WHAT'S INCLUDED */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Everything Included in Your Kick & Learn™ Pack</h2>
          <p className="mt-3 text-muted-foreground">30+ ready-to-print activities covering KS1 & KS2.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {included.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border bg-card p-6 transition-transform hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm font-normal text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
          <span className="rounded-full bg-secondary px-4 py-2 font-medium text-secondary-foreground">Instant PDF download</span>
          <span className="rounded-full bg-secondary px-4 py-2 font-medium text-secondary-foreground">No apps</span>
          <span className="rounded-full bg-secondary px-4 py-2 font-medium text-secondary-foreground">No subscriptions</span>
        </div>
      </section>

      {/* EVERY ACTIVITY, EXPLAINED */}
      <section className="py-20" style={{ backgroundColor: "#faf8f4" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl" style={{ color: "#1a1a1a" }}>
              Every Activity, Explained
            </h2>
            <p className="mt-3 text-base font-medium" style={{ color: "#555555" }}>
              Here's exactly what your child will do inside each zone
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {activities.map((act, index) => {
              const badgeStyle = getZoneBadgeStyle(act.zone);
              const Icon = act.icon;
              return (
                <div
                  key={index}
                  className="relative flex flex-col rounded-2xl border bg-white p-6 transition-transform hover:-translate-y-1"
                  style={{
                    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                    borderColor: "#e2e8f0",
                  }}
                >
                  {/* Zone Badge */}
                  <div className="flex justify-between items-start">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: "rgba(26, 107, 26, 0.1)", color: "#1a6b1a" }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span
                      className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                      style={{ backgroundColor: badgeStyle.bg, color: badgeStyle.text }}
                    >
                      {act.zone}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold" style={{ color: "#1a1a1a" }}>
                    {act.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "#555555" }}>
                    {act.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TAKE A LOOK INSIDE */}
      <section className="py-20" style={{ backgroundColor: "#faf8f4" }}>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl" style={{ color: "#1a1a1a" }}>
            Take a Look Inside Kick & Learn™
          </h2>
          <p className="mt-3 text-base font-medium" style={{ color: "#555555" }}>
            All activities are print-ready. Just download, print and start learning.
          </p>
        </div>

        <div className="marquee-pause action-carousel-scroll relative mt-10 overflow-x-auto overflow-y-visible pb-4">
          <div
            className="flex w-max gap-4 animate-marquee-x-reverse pr-4 will-change-transform"
            style={{ animationDuration: "25s" }}
          >
            {[...previewImages, ...previewImages].map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-[200px] md:h-[280px] w-auto rounded-[12px] bg-white object-contain"
                style={{
                  boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs sm:text-sm font-medium text-slate-500">
            Print once. Use with every child, every class, every season.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Why Educators, Parents and Coaches Choose Kick & Learn™
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audiences.map((a) => (
              <div
                key={a.title}
                className={`rounded-2xl border bg-gradient-to-b ${a.color} p-7`}
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <h3 className="text-xl font-bold">{a.title}</h3>
                <ul className="mt-5 space-y-3">
                  {a.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm font-normal text-foreground">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEE KICK & LEARN IN ACTION */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p
              className="text-sm font-semibold uppercase tracking-[0.08em]"
              style={{ color: "#1f57c3" }}
            >
              SEE KICK &amp; LEARN IN ACTION
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl" style={{ color: "#12305f" }}>
              See Kick &amp; Learn in Action
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed md:text-lg" style={{ color: "#4c6086" }}>
              One printable World Cup activity pack. So many ways to make learning more exciting.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {actionCategories.map((category, index) => {
              const isActive = activeActionCategory === index;
              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => setActiveActionCategory(index)}
                  className="rounded-full border px-5 py-2.5 text-sm font-semibold transition-all sm:text-base"
                  style={{
                    background: isActive ? "#1f57c3" : "#ffffff",
                    color: isActive ? "#ffffff" : "#12305f",
                    borderColor: isActive ? "#1f57c3" : "#d7e2fb",
                    boxShadow: isActive ? "0 12px 24px -12px rgba(31,87,195,0.45)" : "0 8px 18px -14px rgba(18,48,95,0.18)",
                  }}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div
            className="mt-8 rounded-[32px] border px-5 py-6 md:px-7"
            style={{
              borderColor: "#d7e2fb",
              background: "linear-gradient(180deg, #ffffff 0%, #fbfdff 100%)",
              boxShadow: "0 24px 60px -36px rgba(18,48,95,0.28)",
            }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold" style={{ color: "#12305f" }}>
                {currentCategory.label}
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base" style={{ color: "#4c6086" }}>
                {currentCategory.description}
              </p>
            </div>

            <div className="marquee-pause action-carousel-scroll mt-8 overflow-x-auto overflow-y-visible pb-2">
              <div
                className="flex w-max gap-5 animate-marquee-x pr-5 will-change-transform"
                style={{ animationDuration: "36s" }}
              >
                {[...currentCategory.items, ...currentCategory.items].map((item, index) => {
                  return (
                    <figure
                      key={`${currentCategory.label}-${item.alt}-${index}`}
                      className="group relative w-[280px] shrink-0 rounded-[32px] border bg-white p-3 transition-transform duration-300 hover:scale-[1.02] sm:w-[340px]"
                      style={{
                        borderColor: "#1f57c3",
                        boxShadow: "0 20px 44px -26px rgba(18,48,95,0.3)",
                      }}
                    >
                      <span
                        className="absolute right-5 top-5 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full"
                        style={{ background: "#ffe066", boxShadow: "0 10px 20px -14px rgba(255, 187, 0, 0.9)" }}
                        aria-hidden="true"
                      >
                        <Star className="h-4 w-4 fill-current" style={{ color: "#12305f" }} />
                      </span>
                      <div className="overflow-hidden rounded-[24px] bg-white">
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="lazy"
                          className="aspect-square w-full object-cover object-center"
                        />
                      </div>
                      <figcaption className="px-2 pb-2 pt-4 text-sm font-medium leading-relaxed" style={{ color: "#23406d" }}>
                        {item.caption}
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* OFFER */}
      <section id="offer" className="py-20" style={{ backgroundColor: "#faf8f4" }}>
        <span id="oferta" className="block -mt-20 pt-20" aria-hidden="true" />
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
              style={{ backgroundColor: "rgba(230, 57, 70, 0.1)", color: "#e63946" }}
            >
              <Clock className="h-4 w-4" /> ⚡ WORLD CUP 2026 — LIMITED OFFER
            </span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl" style={{ color: "#1a1a1a" }}>
              Get Everything Your Child Needs to Learn Through Football
            </h2>
            <p className="mt-3 text-base font-medium" style={{ color: "#555555" }}>
              This price disappears when the timer hits zero — and it won't come back.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 sm:gap-3">
              <TimeBlock value={h} label="HRS" />
              <span className="text-xl sm:text-2xl font-extrabold text-[#1a1a1a]">:</span>
              <TimeBlock value={m} label="MIN" />
              <span className="text-xl sm:text-2xl font-extrabold text-[#1a1a1a]">:</span>
              <TimeBlock value={s} label="SEC" />
            </div>
            <p className="mt-3 text-xs sm:text-sm font-bold" style={{ color: "#e63946" }}>
              ⚠️ Price increases to £27 when timer ends
            </p>
          </div>

          <div
            className="mt-10 overflow-hidden rounded-3xl border bg-white"
            style={{
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              borderColor: "#e2e8f0",
            }}
          >
            <div className="p-4 sm:p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-slate-400 line-through">£27</span>
                <span className="text-5xl font-extrabold md:text-6xl" style={{ color: "#1a6b1a" }}>£9.99</span>
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: "#e63946" }}
                >
                  Save £17 today
                </span>
              </div>

              <div className="relative my-7 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <span className="relative bg-white px-4 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500 text-center">
                  EVERYTHING INCLUDED IN THIS OFFER:
                </span>
              </div>

              <ul className="mt-5 space-y-4 text-left">
                {[
                  {
                    icon: "✅",
                    text: "Kick & Learn™ Activity Pack — 30+ print-ready World Cup activities across Maths, Geography, English, Art & Teamwork",
                    val: "Value: £27",
                  },
                  {
                    icon: "🎁",
                    text: "BONUS #1: World Cup Country Fact Cards — Flags, capitals & football stats for every 2026 nation",
                    val: "Value: £9",
                  },
                  {
                    icon: "🎁",
                    text: "BONUS #2: My Football Journal — Personal journal to track predictions, favourite players & World Cup memories",
                    val: "Value: £7",
                  },
                  {
                    icon: "🎁",
                    text: "BONUS #3: Football Coach Activity Planner — Weekly session planner for coaches, teachers & holiday camps",
                    val: "Value: £8",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm sm:text-base font-normal leading-relaxed text-[#1a1a1a]">
                    <span className="text-lg flex-shrink-0 select-none">{item.icon}</span>
                    <span className="text-[#1a1a1a]">
                      {item.text}{" "}
                      <span className="font-bold text-slate-500">({item.val})</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="relative my-7 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <span className="relative bg-white px-4 text-center text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#e63946]">
                  TOTAL VALUE: <span className="line-through text-slate-400">£51</span> — TODAY ONLY: £9.99
                </span>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://pay.hotmart.com/I106390561S?off=avodgx0x&checkoutMode=10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full py-4 text-base font-extrabold text-white transition-all hover:scale-[1.01] active:scale-[0.99] md:text-lg hover:brightness-110"
                  style={{
                    backgroundColor: "#1a6b1a",
                    boxShadow: "0 10px 24px -10px rgba(26,107,26,0.6)",
                  }}
                >
                  ⚽ Yes! I Want Kick & Learn™ for £9.99 →
                </a>
                <div className="mt-4 flex flex-col items-center gap-1.5 text-xs text-[#555555] font-semibold leading-relaxed">
                  <p className="flex items-center gap-1">
                    <span>🔒</span> Secure checkout — SSL encrypted
                  </p>
                  <p className="flex flex-wrap items-center justify-center gap-1 text-center">
                    <span>📥</span> Instant PDF download · <span>✅</span> 7-Day Money-Back Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLES */}
      <section className="py-20" style={{ backgroundColor: "#faf8f4" }}>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl" style={{ color: "#1a1a1a" }}>
            What You’ll Receive Inside Kick & Learn
          </h2>
        </div>

        <div className="marquee-pause action-carousel-scroll relative mt-10 overflow-x-auto overflow-y-visible pb-4">
          <div
            className="flex w-max gap-4 animate-marquee-x pr-4 will-change-transform"
            style={{ animationDuration: "25s" }}
          >
            {[...samples, ...samples].map((s, index) => (
              <figure
                key={`${s.alt}-${index}`}
                className="flex flex-col items-center"
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-[200px] md:h-[280px] w-auto rounded-[12px] bg-white object-contain"
                  style={{
                    boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                  }}
                />
                <figcaption className="mt-3 text-center text-xs sm:text-sm font-semibold text-slate-500 max-w-[200px] sm:max-w-[280px] line-clamp-2">
                  {s.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center px-6">
          <p className="text-sm font-medium text-slate-500">
            All activities are print-ready. Just download, print and start learning.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            What Parents, Teachers and Coaches Are Saying
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-2xl border bg-card p-7"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <Stars />
                <p className="mt-4 flex-1 text-sm font-normal leading-relaxed text-foreground">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3 border-t pt-5">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${t.bg} font-bold text-foreground`}>
                      {t.initials}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div
          className="rounded-3xl border bg-card p-10"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
            <ShieldCheck className="h-10 w-10" />
          </div>
          <h2 className="mt-6 text-2xl font-bold md:text-3xl">
            7-Day No-Questions-Asked Money-Back Guarantee
          </h2>
          <p className="mt-4 text-base font-normal text-muted-foreground">
            We're 100% confident you'll love Kick & Learn™. But if for any reason you're not
            completely satisfied, simply send us an email within 7 days of purchase and we'll refund
            every penny — no questions asked. Your purchase is completely risk-free.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border bg-card px-5 [&[data-state=open]]:shadow"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm font-normal text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <CTA>Get Kick & Learn™ for £9.99 →</CTA>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-background py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <p>© 2026 Kick & Learn™. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms & Conditions</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function TimeBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex w-16 sm:w-20 md:w-24 flex-col items-center rounded-2xl bg-[#1a1a1a] py-2 sm:py-3 text-white">
      <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tabular-nums">{value}</span>
      <span className="mt-0.5 sm:mt-1 text-[8px] sm:text-[10px] font-bold tracking-widest text-[#a3a3a3]">{label}</span>
    </div>
  );
}

// Suppress unused import warning for ChevronDown (Accordion provides its own)
void ChevronDown;
