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
  phone?: string;
  location?: string;
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

export interface GymLocation {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  googleMapsUrl: string;
}

export interface GymDetails {
  brandName: string;
  brandDescriptor: string;
  phone: string;
  whatsapp: string;
  email: string;
  openingHours: string[];
}

export const gymDetails: GymDetails = {
  brandName: "F7 FITNESS",
  brandDescriptor: "BY PRASAD KONDA",
  phone: "+91 99081 91614",
  whatsapp: "https://wa.me/919908191614?text=Hi%20F7%20Fitness!%20I%20am%20interested%20in%20joining.",
  email: "info@f7fitness.in",
  openingHours: [
    "Monday – Saturday: 5:30 AM – 10:00 PM",
    "Sunday: 6:00 AM – 12:00 PM (Recovery Sessions Only)"
  ]
};

export const locations: GymLocation[] = [
  {
    id: "loc-bolarum",
    name: "Bolarum",
    address: "1st Floor, Shruthi Pride / Shruthi Infra Complex, Vijay Vihar Colony, Bolarum Road, opposite Brindavan Enclave, New Bolarum, Hyderabad, Telangana 500010",
    lat: 17.5343441,
    lng: 78.5113217,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=17.5343441,78.5113217"
  },
  {
    id: "loc-risala",
    name: "Risala Bazar",
    address: "1st Floor, above Reliance Smart Point, Stewart Road, Rizala Bazar, Banjara Village Colony, Bolarum, Secunderabad, Telangana 500010",
    lat: 17.52896,
    lng: 78.51780,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=17.52896,78.51780"
  },
  {
    id: "loc-alwal",
    name: "Alwal",
    address: "4th Floor, SRM Square Building, Citizen Colony Road, HT Road, Old Alwal, Secunderabad, Telangana 500010",
    lat: 17.5124144,
    lng: 78.4985516,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=17.5124144,78.4985516"
  }
];

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
    id: "rajesh",
    name: "Rajesh",
    role: "Fitness Trainer",
    specialization: "Strength & Conditioning",
    experience: "Pro",
    bio: "Rajesh brings dedicated coaching expertise to F7 Fitness Alwal. His commitment to member progress and technical training ensures results-driven workouts every session.",
    image: "/images/trainer_prasad_konda.png",
    phone: "9032271341",
    location: "Alwal"
  },
  {
    id: "marco",
    name: "Marco",
    role: "Fitness Trainer",
    specialization: "Functional Training & Muscle Building",
    experience: "Pro",
    bio: "Marco leads training at the Bolarum Risala branch with high energy and precision. Specializing in functional movement and muscle development for all fitness levels.",
    image: "/images/gym.jpg",
    phone: "6281976965",
    location: "Bolarum Risala"
  },
  {
    id: "chandu-goud",
    name: "Chandu Goud",
    role: "Fitness Trainer",
    specialization: "Fat Loss & Performance",
    experience: "Pro",
    bio: "Chandu Goud is the go-to trainer at F7 New Bolarum, known for his motivating style and expert programming in fat loss, endurance, and performance training.",
    image: "/images/team.jpg",
    phone: "9640318855",
    location: "New Bolarum"
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
    price: "₹1,499",
    period: "month",
    features: [
      "Access to all F7 training zones",
      "General trainer guidance",
      "Locker & shower facilities",
      "1 fitness assessment"
    ],
    recommended: true,
    ctaText: "Choose Monthly"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Vikram Reddy",
    role: "Member since 2024",
    quote: "F7 has completely changed my perspective on fitness. The focus on compound movements, programming, and coaches' guidance keeps me highly consistent and disciplined.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "t2",
    name: "Sneha Nair",
    role: "Member since 2025",
    quote: "The atmosphere here is electric yet serious. There are no gimmicks—just hard training, professional equipment, and a fantastic community that keeps you showing up.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: "t3",
    name: "Abhishek Sen",
    role: "Member since 2024",
    quote: "Prasad Konda’s coaching philosophy is elite. My squat form and deadlift strength have skyrocketed under his direction. If you want results, this is the gym.",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
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
