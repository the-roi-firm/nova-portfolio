/* ============================================================
   Single source of truth for all site copy and links.
   Written deliberately without em-dashes or en-dashes.
   ============================================================ */

export const contact = {
  whatsapp: "94710409535",
  whatsappHref: "https://wa.me/94710409535",
  instagram:
    "https://www.instagram.com/shan_winchester?igsh=ZHJ1bmF3YmJucHE4&utm_source=qr",
  tiktok: "https://www.tiktok.com/@shanwinchester0?_r=1&_t=ZS-9663l219POP",
  google: "https://share.google/VEbYPeQg5WZqXOqTm",
  web3formsKey: "5afebc0f-499a-4cd6-b0ff-375b8df46e66",
};

export const nav = [
  { label: "Experiences", href: "#services" },
  { label: "The Work", href: "#work" },
  { label: "Shan", href: "#shan" },
  { label: "Availability", href: "#availability" },
];

export const hero = {
  eyebrow: "Kandy · By Appointment Only",
  line1: "Some things",
  line2: "are better",
  line3: "private.",
  sub: "A quiet grooming experience in Kandy, handled from first message to final look by one specialist. For those who would rather not leave the result to chance.",
  primaryCta: "Request an appointment",
  secondaryCta: "Meet Shan",
};

export const manifesto = {
  label: "The idea",
  aside:
    "Not a salon. Not a chain. A room you come to when a bad haircut is not an option.",
  lines: [
    "Nova is not a salon.",
    "It is a reserved session. Unhurried, uninterrupted, and handled start to finish by one specialist.",
    "Limited availability. Intentional by design.",
  ],
  note: "Every booking is confirmed personally by Shan.",
};

export const pillars = {
  label: "Why Nova",
  title: "Three quiet",
  titleEm: "promises",
  items: [
    {
      num: "01",
      title: "One specialist. Every time.",
      text: "Every session is handled personally by Shan. No handoffs, no assistants, just a single standard you can rely on visit after visit.",
    },
    {
      num: "02",
      title: "Reserved, not walk-in.",
      text: "Your slot is yours. Prepared, protected, and unhurried. The kind of appointment that does not run late because someone else ran long.",
    },
    {
      num: "03",
      title: "At the lounge, or yours.",
      text: "Sessions at Hideout Lounge in Kandy, or at your hotel suite or residence. Discretion and convenience for those whose time is worth protecting.",
    },
  ],
};

export const services = {
  label: "Experiences",
  title: "What Shan",
  titleEm: "does well",
  intro:
    "Each session is tailored and nothing is rushed. Every service is performed from start to finish by Shan, with no exceptions.",
  cta: "Request a session",
  items: [
    {
      no: "01",
      tagline: "A cut shaped around you.",
      name: "Haircut, Ladies and Gents",
      desc: "Before anything else, Shan takes the time to read your hair, your preferences, and the look you are after. The result is considered, consistent, and yours.",
    },
    {
      no: "02",
      tagline: "Precision without the rush.",
      name: "Beard Styling",
      desc: "Shaping, trimming, sculpting. Every beard treated as a detail that deserves to be exactly right. Not close enough. Exactly right.",
    },
    {
      no: "03",
      tagline: "A finish that holds.",
      name: "Hair Setting",
      desc: "Styled for your face, your occasion, and the way you actually live in your look. For events, meetings, or simply arriving looking the part.",
    },
    {
      no: "04",
      tagline: "Intentional, clean, lasting.",
      name: "Braiding",
      desc: "Shan works with the pattern and texture of your hair to create braids that are precise and personal. Technically exact, uniquely yours.",
    },
    {
      no: "05",
      tagline: "Never an afterthought.",
      name: "Head Massage",
      desc: "A full, deliberate massage designed to release tension and reset. Often the quiet highlight of a session. Taken alone or paired with any service.",
    },
  ],
};

export const work = {
  label: "The work",
  title: "Handled",
  titleEm: "personally",
  intro:
    "A small selection of recent sessions. Every result below was shaped by Shan, start to finish.",
  cta: "Follow the work on Instagram",
  // Note: these are on-brand placeholder frames. Drop real session photos
  // in at public/images/portfolio-*.jpg (same names) to go live.
  items: [
    { src: "/images/portfolio-haircut-2.jpg", label: "Haircut", name: "Ladies and Gents" },
    { src: "/images/portfolio-beard.jpg", label: "Beard", name: "Styling and Shaping" },
    { src: "/images/portfolio-setting.jpg", label: "Hair Setting", name: "Finish and Style" },
    { src: "/images/portfolio-braiding.jpg", label: "Braiding", name: "Pattern and Precision" },
  ],
};

export const shan = {
  label: "About Shan",
  quote: ["Not a brand.", "A person.", "That is the difference."],
  story: [
    "Nova exists because of a simple belief, that good grooming should never feel like a gamble.",
    "Shan has spent years developing something most salons do not offer: the ability to read a person. To understand not just the cut they describe, but the result they actually want. The gap between those two things is where most haircuts go wrong.",
    "At Nova, every client works directly with Shan, from the first message to the final look. No assistants, no handoffs, no version of your usual stylist being unavailable today. The limited availability is not a restriction. It is a guarantee that when you sit down, you have Shan's full attention.",
  ],
  link: "View the portfolio",
};

export const availability = {
  label: "Schedule",
  title: "Limited",
  titleEm: "by design",
  cards: [
    {
      slots: "5 to 8",
      tag: "Monday and Friday",
      days: "Evening Sessions",
      time: "6:00 PM to 11:00 PM",
      location:
        "At Hideout Lounge, Kandy. Five to eight reserved slots per evening. These fill quickly, so inquire early.",
    },
    {
      slots: "By request",
      tag: "All other days",
      days: "Personal Request",
      time: "9:00 AM to 5:30 PM",
      location:
        "At the Nova lounge or your preferred location, whether hotel, residence, or wherever suits your schedule. Shan confirms each booking personally by call or WhatsApp.",
    },
  ],
  note: "Shan personally curates a small number of sessions each week. If you have a preferred time, reach out early. Slots are not held without confirmation.",
};

export const testimonials = {
  label: "What clients say",
  title: "Trusted",
  titleEm: "quietly",
  items: [
    {
      text: "I have never had a haircut that felt this considered.",
      attr: "Kandy Resident",
      via: "Via Google",
    },
    {
      text: "Shan noticed things about my hair I had not thought to mention. The result was exactly right.",
      attr: "Regular Client",
      via: "Direct",
    },
    {
      text: "I have tried most of the well known places in Kandy. This is the only one I come back to.",
      attr: "Kandy Professional",
      via: "Via Instagram",
    },
    {
      text: "I was in Kandy for three days and genuinely did not want to risk a bad haircut. Shan was exactly what I needed.",
      attr: "Visiting Guest",
      via: "Via Google",
    },
  ],
};

export const tourist = {
  badge: "Visiting Kandy?",
  title: "Nova",
  titleEm: "at your door.",
  text: "For guests staying in Kandy, Shan brings the same standard directly to your hotel or residence. The same discretion, the same quality, without the commute. Trusted by guests at Kandy's boutique hotels and heritage properties. A travel premium applies, confirmed at booking.",
  cta: "Book an in-suite session",
  note: "No need to navigate the city. Request wherever you are staying.",
};

export const booking = {
  eyebrow: "Request an appointment",
  title: "Ready",
  titleEm: "when you are.",
  sub: "Tell us your preferred time, service, and location. Shan will be in touch to confirm personally, usually within a few hours.",
  details: [
    { strong: "Mon and Fri evenings.", rest: " Hideout Lounge, Kandy. 6 PM to 11 PM." },
    { strong: "Other days.", rest: " Lounge or your location. 9 AM to 5:30 PM." },
    { strong: "Personal confirmation.", rest: " Shan confirms every booking by call or WhatsApp." },
    { strong: "Travel premium applies.", rest: " In-suite and hotel sessions available." },
  ],
  formNote:
    "Shan personally reviews every inquiry and will confirm your session by call or WhatsApp, usually within a few hours. Session details are shared on confirmation.",
  serviceOptions: [
    "Haircut, Ladies",
    "Haircut, Gents",
    "Beard Styling",
    "Hair Setting",
    "Braiding",
    "Head Massage",
    "Multiple or Combined",
  ],
  locationOptions: ["Hideout Lounge, Kandy", "My Hotel or Residence (In-Suite)"],
};

export const footer = {
  tagline: [
    "Kandy's private grooming experience.",
    "By appointment only.",
    "Handled personally by Shan.",
  ],
  copyright: "Nova Style Lounge, Kandy. All rights reserved.",
};
