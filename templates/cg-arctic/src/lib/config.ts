import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "FaithFul Air-Conditioning & Heating Services",
    tagline: "Reliable comfort. Professional HVAC service.",
    phone: "(909) 609-5919",
    phoneHref: "tel:+19096095919",
    email: "",
    address: "8287 Palms Ave, Fontana, CA 92335, USA",
    city: "Fontana",
    serviceAreas: ["Fontana"],
    license: "",
    since: "day one",
    google_rating: "5",
    review_count: "5",
    emergency: true,
    theme: "clean",
    niche: "hvac",
    hours: "Open 24 hours, 7 days a week",
    googleMapsUri: "https://maps.google.com/?cid=1084036285180618513",
    galleryCount: 6,
    googlePlaceId: "ChIJ7SnWtzBLw4ARESfTBUJFCw8",
    aiConfigId: "14fe39fe-fba3-484e-8bd1-7310de2a815c",
  },

  services: [
    { 
      icon: "thermometer", 
      title: "Central Air Conditioning Installation", 
      desc: "Complete cooling system setups designed for optimal home comfort.", 
      urgent: false 
    },
    { 
      icon: "zap", 
      title: "Emergency AC Repair", 
      desc: "Around-the-clock troubleshooting to get your cooling back online.", 
      urgent: true 
    },
    { 
      icon: "flame", 
      title: "Furnace Repair and Maintenance", 
      desc: "Thorough inspections and fixes to keep your heating reliable.", 
      urgent: false 
    },
    { 
      icon: "home", 
      title: "Ductless Mini-Split Installation", 
      desc: "Targeted climate control for specific rooms without ductwork.", 
      urgent: false 
    },
    { 
      icon: "wrench", 
      title: "Heat Pump Replacement", 
      desc: "Efficient heating and cooling upgrades for year-round performance.", 
      urgent: false 
    },
    { 
      icon: "shield-check", 
      title: "Air Duct Repair and Sealing", 
      desc: "Restoring proper airflow and improving your indoor air quality.", 
      urgent: false 
    }
  ],

  testimonials: [
    {
        "name": "Mario Vela",
        "location": "Google review · 3 months ago",
        "stars": 5,
        "text": "I highly recommend Vincent Godoy for any HVAC or air conditioning work. This is actually the second time I’ve used him. He completed a repair for me about two years ago, and I’ve had absolutely no issues with that work since. That alone gave me confidence to call him again. …"
    },
    {
        "name": "ProTint",
        "location": "Google review · 4 months ago",
        "stars": 5,
        "text": "… Overall, I got a great deal, met a great person, and found an honest businessman. Hats off to you, Vince. You are an impressive, honest young man, and I wish you all the success in the world."
    },
    {
        "name": "Toni Tautolo",
        "location": "Google review · 4 months ago",
        "stars": 5,
        "text": "Vincent was to my home last year. He was very honest and did not do what did not need to. I called this past Wednesday for a year check up. So this was his second time to our home. He took before, and after pictures of everything he found. We trust him really appreciate his advice!"
    },
    {
        "name": "Joel Tramble",
        "location": "Google review · 3 months ago",
        "stars": 5,
        "text": "Excellent service very professional and clear on details. Highly recommended🤩"
    },
    {
        "name": "Neifa Cosenza",
        "location": "Google review · 2 months ago",
        "stars": 5,
        "text": ""
    }
],

  trustBadges: ["Open 24 hours", "5.0 on Google", "Based in Fontana"],

  stats: [
    { value: 5, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 5, label: "Verified Reviews", suffix: "", decimals: 0 },
    { value: 1, label: "Service Area", suffix: "", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Open 24 hours", desc: "Google lists us open around the clock, every day of the week." },
    { icon: "phone", title: "Call a real person", desc: "Reach the team directly at (909) 609-5919." },
    { icon: "star", title: "Rated 5.0 on Google", desc: "Our neighbors in Fontana rate us five stars." }
  ],

  about: {
    heading: "Reliable HVAC care in Fontana.",
    body: "FaithFul Air-Conditioning & Heating Services provides professional heating and cooling solutions to the Fontana community. We are available 24 hours a day to ensure your home stays comfortable year-round.",
    highlights: [
      { icon: "star", text: "Available 24/7" },
      { icon: "home", text: "Locally based in Fontana" }
    ]
  },

  process: [
    { 
      title: "Tell us what you need", 
      desc: "Reach out to discuss your heating or cooling issue." 
    },
    { 
      title: "We evaluate the system", 
      desc: "We look at your equipment and explain the options." 
    },
    { 
      title: "We restore your comfort", 
      desc: "We complete the necessary repairs or installation efficiently." 
    }
  ],

  faq: [
    { 
      q: "Do you offer emergency HVAC services?", 
      a: "Yes, we are open 24 hours a day to handle urgent heating and cooling issues in Fontana." 
    },
    { 
      q: "How do I get a quote?", 
      a: "Call us at (909) 609-5919 and we will talk through your system and the next steps." 
    },
    { 
      q: "What areas do you serve?", 
      a: "We proudly provide air conditioning and heating services throughout Fontana, CA." 
    },
    { 
      q: "How do I schedule an appointment?", 
      a: "You can call us directly at (909) 609-5919 to book a service visit at your convenience." 
    }
  ],

  formServiceOptions: [
    "Central Air Conditioning Installation",
    "Emergency AC Repair",
    "Furnace Repair and Maintenance",
    "Ductless Mini-Split Installation",
    "Heat Pump Replacement",
    "Air Duct Repair and Sealing"
  ]
}

export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!