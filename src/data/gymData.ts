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

export interface GymVideo {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
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
  phone: "+91 99081 91614",
  whatsapp: "https://wa.me/919908191614?text=Hi%20F7%20Fitness!%20I%20am%20interested%20in%20joining.",
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

export const gymVideos: GymVideo[] = [
  {
    id: "v1",
    title: "F7 Gym Tour",
    description: "A premium walkthrough of our state-of-the-art strength floor, training rigs, and coaching environment.",
    videoUrl: "/videos/video1.MOV",
    thumbnail: "/images/facilities_floor.png"
  },
  {
    id: "v2",
    title: "Compound & Strength Training",
    description: "Elite strength training floor with premium barbell rigs, squat racks, and coaching guidance.",
    videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227e339f37c355ab09000a6e0337fb&profile_id=139&oauth2_token_id=57447761",
    thumbnail: "/images/program_strength.png"
  },
  {
    id: "v3",
    title: "Olympic Weightlifting",
    description: "Professional weightlifting setup for compound movements, clean and jerk, and snatch execution.",
    videoUrl: "https://player.vimeo.com/external/538902581.sd.mp4?s=d001602492f1f0a514d3f3f5b08c903fb5cdbe2e&profile_id=165&oauth2_token_id=57447761",
    thumbnail: "/images/hero_gym_poster.png"
  },
  {
    id: "v4",
    title: "High-Intensity Conditioning",
    description: "High energy functional training, athletic conditioning, and cardiovascular routines.",
    videoUrl: "https://player.vimeo.com/external/434418689.sd.mp4?s=90c8280eaac95dc91e0b21d16f2d812f1515a883&profile_id=165&oauth2_token_id=57447761",
    thumbnail: "/images/team.jpg"
  }
];
