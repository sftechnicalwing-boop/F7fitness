export interface Program {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string; // Placeholder or empty if pricing not provided
  period: string;
  features: string[];
  recommended: boolean;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image?: string;
}

export interface GymDetails {
  brandName: string;
  brandDescriptor: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  openingHours: string[];
  googleMapsUrl: string;
}

export const gymDetails: GymDetails = {
  brandName: "F7 FITNESS",
  brandDescriptor: "BY PRASAD KONDA",
  address: "Plot No. 7, High-Performance Avenue, Jubilee Hills, Hyderabad, TS, 500033",
  phone: "+91 99999 77777",
  whatsapp: "https://wa.me/919999977777?text=Hi%20F7%20Fitness!%20I%20am%20interested%20in%20joining.",
  email: "info@f7fitness.in",
  openingHours: [
    "Monday – Saturday: 5:30 AM – 10:00 PM",
    "Sunday: 6:00 AM – 12:00 PM (Recovery Sessions Only)"
  ],
  googleMapsUrl: "https://maps.google.com/?q=Jubilee+Hills,+Hyderabad"
};

export const programs: Program[] = [
  {
    id: "strength-training",
    name: "Strength Training",
    description: "Build a bulletproof foundation. Focus on heavy compound lifts, proper mechanics, and progressive overload under professional guidance.",
    image: "/images/program_strength.png",
    features: ["Barbell fundamentals", "Powerlifting & Weightlifting", "Progressive overload tracking"]
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description: "One-on-one coaching tailored precisely to your biomechanics, fitness levels, and goals. Maximum accountability, maximum results.",
    image: "/images/gym.jpg",
    features: ["Custom program design", "Nutrition guidance", "1-on-1 dedicated coaching sessions"]
  },
  {
    id: "muscle-building",
    name: "Muscle Building",
    description: "Hypertrophy-focused training designed to increase muscle volume, improve body composition, and elevate metabolic rate.",
    image: "/images/team.jpg",
    features: ["High-volume hypertrophy sets", "Recovery coaching", "Body composition assessments"]
  },
  {
    id: "functional-training",
    name: "Functional Training",
    description: "Enhance your athleticism and everyday movement. High-intensity conditioning, kettlebells, and dynamic movement patterns.",
    image: "/images/team2.jpg",
    features: ["Kettlebell & dumbbell circuits", "Core stability & mobility", "Agility and cardiovascular conditioning"]
  },
  {
    id: "fat-loss",
    name: "Fat Loss & Conditioning",
    description: "High-energy training combined with metabolic conditioning to burn fat, build endurance, and boost your cardiovascular capacity.",
    image: "/images/hero_gym_poster.png",
    features: ["Metcon intervals", "Heart-rate zone training", "Sustainable lifestyle coaching"]
  }
];

export const trainers: Trainer[] = [
  {
    id: "prasad-konda",
    name: "Prasad Konda",
    role: "Founder & Head Coach",
    specialization: "Strength & Conditioning, Athletic Performance",
    experience: "10+ Years",
    bio: "Prasad Konda is dedicated to helping individuals build their strongest, most resilient selves. His coaching methodology merges science-backed strength programming with rigid discipline to achieve measurable physical results.",
    image: "/images/trainer_prasad_konda.png"
  }
];

export const facilities: Facility[] = [
  {
    id: "strength-floor",
    name: "Strength Floor",
    description: "Heavy-duty commercial cages, squat racks, and premium Barbells designed for serious lifters.",
    image: "/images/facilities_floor.png"
  },
  {
    id: "free-weights",
    name: "Free Weights Zone",
    description: "A wide range of high-quality steel dumbbells and kettlebells organized for accessibility.",
    image: "/images/gym.jpg"
  },
  {
    id: "cardio-rigs",
    name: "Cardio & Conditioning",
    description: "Premium self-powered curved treadmills, air bikes, and rowing machines for metabolic training.",
    image: "/images/hero_gym_poster.png"
  },
  {
    id: "recovery-zone",
    name: "Recovery & Locker Rooms",
    description: "Modern locker facilities and dedicated stretching area to ensure post-workout revitalization.",
    image: "/images/team2.jpg"
  }
];

export const membershipPlans: MembershipPlan[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: "₹3,500",
    period: "month",
    features: [
      "Access to all F7 training zones",
      "General trainer guidance",
      "Locker & shower facilities",
      "1 fitness assessment"
    ],
    recommended: false,
    ctaText: "Choose Monthly"
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: "₹9,000",
    period: "3 months",
    features: [
      "Access to all F7 training zones",
      "Personalized workout template",
      "2 body composition audits",
      "General trainer guidance",
      "Save 15% vs monthly"
    ],
    recommended: true,
    ctaText: "Choose Quarterly"
  },
  {
    id: "half-yearly",
    name: "Half-Yearly",
    price: "₹16,000",
    period: "6 months",
    features: [
      "Access to all F7 training zones",
      "Custom nutrition guide plan",
      "4 body composition audits",
      "General trainer guidance",
      "Save 25% vs monthly"
    ],
    recommended: false,
    ctaText: "Choose Half-Yearly"
  },
  {
    id: "yearly",
    name: "Yearly",
    price: "₹28,000",
    period: "year",
    features: [
      "Unlimited access to F7 facilities",
      "12 body composition audits",
      "Tailored strength programming",
      "1-on-1 personal session (1hr)",
      "General trainer support",
      "Save 33% vs monthly"
    ],
    recommended: false,
    ctaText: "Choose Yearly"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Vikram Reddy",
    role: "Member since 2024",
    quote: "F7 has completely changed my perspective on fitness. The focus on compound movements, programming, and coaches' guidance keeps me highly consistent and disciplined.",
  },
  {
    id: "t2",
    name: "Sneha Nair",
    role: "Member since 2025",
    quote: "The atmosphere here is electric yet serious. There are no gimmicks—just hard training, professional equipment, and a fantastic community that keeps you showing up.",
  },
  {
    id: "t3",
    name: "Abhishek Sen",
    role: "Member since 2024",
    quote: "Prasad Konda’s coaching philosophy is elite. My squat form and deadlift strength have skyrocketed under his direction. If you want results, this is the gym.",
  }
];
