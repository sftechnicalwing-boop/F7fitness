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

export interface GymLocation {
  id: string;
  name: string;
  address: string;
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
    address: "Vijay Vihar colony, Bolarum Road, opposite brudhavan colony enclave, Sruthi pride building, New Bolarum, Hyderabad, Telangana 500010",
    googleMapsUrl: "https://www.google.com/maps/dir/17.551213,78.492814/F7+Fitness+by+Prasad+Konda,+Vijay+Vihar+colony,+Bolarum+Road,+opposite+brudhavan+colony+enclave,+Sruthi+pride+building,+New+Bolarum,+Hyderabad,+Telangana+500010/@17.5425641,78.4796999,13.81z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bcb976d66d8069f:0xe2afc2e8411d264!2m2!1d78.5113217!2d17.5343441!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: "loc1",
    name: "Jubilee Hills",
    address: "Location 1, Jubilee Hills, Hyderabad",
    googleMapsUrl: "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiA0fiHkaKWAxUAAAAAHQAAAAAQJA..i&channel=entpr&client=firefox-b-e&pvq=Cg0vZy8xMXM1al9wOHdiIhAKCmY3IGZpdG5lc3MQAhgD&lqi=CgpmNyBmaXRuZXNzSOrG6o-WuICACFoUEAAQARgAGAEiCmY3IGZpdG5lc3OSAQNneW0&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3bcb976d66d8069f:0xe2afc2e8411d264"
  },
  {
    id: "loc2",
    name: "Banjara Hills",
    address: "Location 2, Banjara Hills, Hyderabad",
    googleMapsUrl: "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwjoqNHDkaKWAxUAAAAAHQAAAAAQGg..i&channel=entpr&sca_esv=c4b1addd543662be&udm=1&client=firefox-b-e&hs=WD7&pvq=Cg0vZy8xMWYwM240ampmIhAKCmY3IGZpdG5lc3MQAhgD&lqi=CgpmNyBmaXRuZXNzSI2EibqArYCACFoUEAAQARgAGAEiCmY3IGZpdG5lc3OSAQ5maXRuZXNzX2NlbnRlcg&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3bcb9ac828dbeec7:0xa03fffcc4176c311"
  },
  {
    id: "loc3",
    name: "Madhapur",
    address: "Location 3, Madhapur, Hyderabad",
    googleMapsUrl: "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiA0fiHkaKWAxUAAAAAHQAAAAAQFw..i&channel=entpr&client=firefox-b-e&pvq=Cg0vZy8xMWtxbTVtcG56IhAKCmY3IGZpdG5lc3MQAhgD&lqi=CgpmNyBmaXRuZXNzSJ6t57LasYCACFoUEAAQARgAGAEiCmY3IGZpdG5lc3OSAQNneW0&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3bcb854c2c36193f:0xe47c3fe434f08bb8"
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
    id: "prasad-konda",
    name: "Prasad Konda",
    role: "Founder & Head Coach",
    specialization: "Strength & Conditioning",
    experience: "10+ Years",
    bio: "Prasad is dedicated to helping individuals build their strongest, most resilient selves. His coaching methodology merges science-backed programming with discipline.",
    image: "/images/trainer_prasad_konda.png"
  },
  {
    id: "arjun-reddy",
    name: "Arjun Reddy",
    role: "Senior Coach",
    specialization: "Functional Training & Mobility",
    experience: "7+ Years",
    bio: "Arjun specializes in functional fitness and athletic conditioning. He focuses on improving movement quality and building bulletproof joints for long-term health.",
    image: "/images/gym.jpg"
  },
  {
    id: "neha-sharma",
    name: "Neha Sharma",
    role: "Fitness Coach",
    specialization: "Fat Loss & Nutrition",
    experience: "5+ Years",
    bio: "Neha is an expert in metabolic conditioning and sustainable fat loss. She empowers clients through high-energy workouts and tailored nutritional guidance.",
    image: "/images/team2.jpg"
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
