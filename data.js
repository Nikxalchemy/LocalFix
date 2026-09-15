// LocalFix Sample Data - Cities, Localities, Services & Providers
// Fully compatible with local preview and Netlify static hosting

var CITIES_DATA = {
  "All Cities": [
    "All Localities"
  ],
  "Bengaluru": [
    "All Localities",
    "Koramangala",
    "Indiranagar",
    "HSR Layout",
    "Whitefield",
    "Jayanagar"
  ],
  "Mumbai": [
    "All Localities",
    "Andheri",
    "Borivali",
    "Bandra",
    "Powai",
    "Thane"
  ],
  "Delhi": [
    "All Localities",
    "Dwarka",
    "Rohini",
    "Saket",
    "Lajpat Nagar"
  ],
  "Pune": [
    "All Localities",
    "Baner",
    "Wakad",
    "Kothrud",
    "Viman Nagar"
  ],
  "Hyderabad": [
    "All Localities",
    "Madhapur",
    "Gachibowli",
    "Kondapur",
    "Banjara Hills"
  ],
  "Chennai": [
    "All Localities",
    "Anna Nagar",
    "Adyar",
    "Velachery",
    "T Nagar"
  ],
  "Ahmedabad": [
    "All Localities",
    "Navrangpura",
    "Satellite",
    "Vastrapur",
    "Bopal"
  ]
};

var SERVICES = [
  { id: "all", label: "All Services", icon: "sparkles" },
  { id: "electrician", label: "Electrician", icon: "zap" },
  { id: "plumber", label: "Plumber", icon: "wrench" },
  { id: "ac-repair", label: "AC Repair", icon: "snowflake" },
  { id: "carpenter", label: "Carpenter", icon: "hammer" },
  { id: "painter", label: "Painter", icon: "paint-bucket" },
  { id: "cleaning", label: "Cleaning", icon: "sparkle" },
  { id: "pest-control", label: "Pest Control", icon: "shield-alert" },
  { id: "appliance-repair", label: "Appliance Repair", icon: "tv" },
  { id: "locksmith", label: "Locksmith", icon: "key" },
  { id: "other", label: "Other Service / Can't find my service", icon: "search" }
];

var PROVIDERS_DATA = [
  // ===================== ELECTRICIANS (Bengaluru) =====================
  {
    id: "elec-1",
    name: "Ramesh Kumar",
    service: "Electrician",
    category: "electrician",
    rating: 4.9,
    reviewCount: 94,
    experience: 8,
    startingPrice: 249,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "Koramangala",
    city: "Bengaluru",
    phone: "+91 98450 12389",
    avatar: "RK",
    badge: "Top Rated",
    statusText: "Listed Provider",
    featuredSnippet: "Fixed our circuit breaker and power surge issue in under 40 minutes. Extremely polite and neat work!",
    snippetAuthor: "Ananya S., 4th Block",
    about: "Ramesh is an experienced residential electrician with 8+ years handling switchboard replacements, fuse diagnostics, and inverter installations.",
    servicesOffered: [
      "Switchboard & Socket Installation",
      "Short Circuit & Fuse Tripping Diagnostic",
      "Ceiling Fan Installation & Repair",
      "Inverter & UPS Wiring"
    ],
    rateCard: [
      { item: "Visiting & Diagnostic Fee", price: "Rs 199" },
      { item: "Switch / Socket Replacement", price: "Rs 99 per unit" },
      { item: "Ceiling Fan Installation", price: "Rs 249 per unit" },
      { item: "MCB Replacement", price: "Rs 349" }
    ],
    reviews: [
      { author: "Ananya Sharma", rating: 5, date: "3 days ago", comment: "Fixed our circuit breaker and power surge issue in under 40 minutes. Arrived on time." },
      { author: "Vikram Mehta", rating: 5, date: "1 week ago", comment: "Very reasonable pricing and replaced two burnt switches cleanly." }
    ]
  },
  {
    id: "elec-2",
    name: "Suresh Reddy",
    service: "Electrician",
    category: "electrician",
    rating: 4.8,
    reviewCount: 142,
    experience: 12,
    startingPrice: 299,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "Indiranagar",
    city: "Bengaluru",
    phone: "+91 98452 77810",
    avatar: "SR",
    badge: "12+ Yrs Exp",
    statusText: "Listed Provider",
    featuredSnippet: "12 years of experience really shows. Resolved complex wiring glitch in our modular kitchen effortlessly.",
    snippetAuthor: "Karthik R., 100ft Road",
    about: "Suresh Reddy specializes in modern apartment wiring, smart lighting setups, and heavy load appliance connections.",
    servicesOffered: [
      "Modular Kitchen Concealed Wiring",
      "Heavy Appliance Connection (Geyser, AC)",
      "Smart Switch & Chandelier Setup"
    ],
    rateCard: [
      { item: "Visiting & Inspection", price: "Rs 249" },
      { item: "Geyser Electrical Connection", price: "Rs 299" },
      { item: "Chandelier & Fancy Light Fitting", price: "Rs 499" }
    ],
    reviews: [
      { author: "Karthik Rajan", rating: 5, date: "Yesterday", comment: "Resolved complex wiring glitch in our modular kitchen effortlessly." },
      { author: "Sneha Nair", rating: 4.6, date: "5 days ago", comment: "Installed our heavy geyser power line with proper isolator switch." }
    ]
  },
  {
    id: "elec-3",
    name: "Amit Verma",
    service: "Electrician",
    category: "electrician",
    rating: 4.7,
    reviewCount: 68,
    experience: 5,
    startingPrice: 199,
    availability: "Next Day",
    isAvailableToday: false,
    locality: "HSR Layout",
    city: "Bengaluru",
    phone: "+91 99001 44521",
    avatar: "AV",
    badge: "Budget Friendly",
    statusText: "Listed Provider",
    featuredSnippet: "Very budget-friendly and quick! Repaired our fan regulator and doorbell without hassle.",
    snippetAuthor: "Deepak S., Sector 2",
    about: "Amit is an ITI-trained electrician known for budget-friendly rates and fast turnarounds on standard residential repairs.",
    servicesOffered: [
      "Fan Regulator & Motor Check",
      "Doorbell & Intercom Setup",
      "LED Strip & False Ceiling Lights"
    ],
    rateCard: [
      { item: "Visiting Charge", price: "Rs 149" },
      { item: "Fan Repair / Regulator Fix", price: "Rs 199" },
      { item: "Doorbell Setup", price: "Rs 179" }
    ],
    reviews: [
      { author: "Deepak Somani", rating: 5, date: "4 days ago", comment: "Repaired our fan regulator and doorbell without hassle." }
    ]
  },
  {
    id: "elec-4",
    name: "Dinesh Patel",
    service: "Electrician",
    category: "electrician",
    rating: 4.8,
    reviewCount: 89,
    experience: 10,
    startingPrice: 299,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "Whitefield",
    city: "Bengaluru",
    phone: "+91 97412 88902",
    avatar: "DP",
    badge: "Apartment Specialist",
    statusText: "Listed Provider",
    featuredSnippet: "Very punctual and brings genuine replacement parts. Best electrician in Whitefield gated communities.",
    snippetAuthor: "Preeti K., Prestige",
    about: "Dinesh brings a decade of commercial and residential electrical expertise, frequently serving major apartment societies.",
    servicesOffered: [
      "Apartment Sub-meter Installation",
      "Emergency Short-Circuit Repair",
      "Balcony & Garden Lighting"
    ],
    rateCard: [
      { item: "Standard Visit & Inspection", price: "Rs 249" },
      { item: "Sub-meter Setup", price: "Rs 550" },
      { item: "Outdoor Weatherproof Light Fitting", price: "Rs 349" }
    ],
    reviews: [
      { author: "Preeti Kashyap", rating: 5, date: "3 days ago", comment: "Very punctual and brings genuine replacement parts." }
    ]
  },

  // ===================== PLUMBERS (Bengaluru) =====================
  {
    id: "plumb-1",
    name: "Rajesh Gowda",
    service: "Plumber",
    category: "plumber",
    rating: 4.9,
    reviewCount: 126,
    experience: 11,
    startingPrice: 249,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "Jayanagar",
    city: "Bengaluru",
    phone: "+91 98453 55601",
    avatar: "RG",
    badge: "Top Rated",
    statusText: "Listed Provider",
    featuredSnippet: "Stopped a bathroom concealed pipe leak without breaking extra tiles. Master craftsman!",
    snippetAuthor: "Sunil M., 4th T Block",
    about: "Rajesh Gowda has 11+ years of experience across South Bengaluru, known for precision leak detection and sanitary fittings.",
    servicesOffered: [
      "Concealed Pipe Leakage Detection",
      "Commode & Flush Tank Repair",
      "Tap, Mixer & Shower Installation"
    ],
    rateCard: [
      { item: "Visit & Diagnostic Fee", price: "Rs 199" },
      { item: "Tap / Mixer Cartridge Change", price: "Rs 249" },
      { item: "Flush Tank Repair", price: "Rs 399" }
    ],
    reviews: [
      { author: "Sunil Murthy", rating: 5, date: "2 days ago", comment: "Stopped a concealed bathroom pipe leak without breaking extra tiles." }
    ]
  },
  {
    id: "plumb-2",
    name: "Manoj Tiwari",
    service: "Plumber",
    category: "plumber",
    rating: 4.7,
    reviewCount: 74,
    experience: 7,
    startingPrice: 199,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "Koramangala",
    city: "Bengaluru",
    phone: "+91 99160 33412",
    avatar: "MT",
    badge: "Quick Response",
    statusText: "Listed Provider",
    featuredSnippet: "Super fast response on a clogged kitchen sink. Cleaned up after work without asking.",
    snippetAuthor: "Divya N., 6th Block",
    about: "Manoj specializes in clogged drains, kitchen sinks, and RO water purifiers in Koramangala.",
    servicesOffered: [
      "Kitchen Sink De-clogging",
      "RO Water Line Plumbing",
      "Washing Machine Tap Setup"
    ],
    rateCard: [
      { item: "Visiting Inspection", price: "Rs 149" },
      { item: "Sink Clog Removal", price: "Rs 199" }
    ],
    reviews: [
      { author: "Divya Nair", rating: 5, date: "Yesterday", comment: "Super fast response on a clogged kitchen sink." }
    ]
  },
  {
    id: "plumb-3",
    name: "Vijay Chauhan",
    service: "Plumber",
    category: "plumber",
    rating: 4.8,
    reviewCount: 98,
    experience: 9,
    startingPrice: 249,
    availability: "Next Day",
    isAvailableToday: false,
    locality: "Indiranagar",
    city: "Bengaluru",
    phone: "+91 98801 92834",
    avatar: "VC",
    badge: "Sanitary Expert",
    statusText: "Listed Provider",
    featuredSnippet: "Installed our complete bathroom sanitary ware including rain shower. Perfect water pressure balance.",
    snippetAuthor: "Raghav B., Defence Colony",
    about: "Vijay Chauhan handles sanitary fittings, pressure pump connections, and bathroom overhauls.",
    servicesOffered: [
      "Rain Shower Fitting",
      "Pressure Booster Pump Connection",
      "Wall-Hung Commode Servicing"
    ],
    rateCard: [
      { item: "Standard Visit", price: "Rs 199" },
      { item: "Diverter Internal Cartridge Fix", price: "Rs 349" }
    ],
    reviews: [
      { author: "Raghav Bansal", rating: 5, date: "3 days ago", comment: "Installed bathroom sanitary ware with perfect water pressure balance." }
    ]
  },
  {
    id: "plumb-4",
    name: "Santosh Nair",
    service: "Plumber",
    category: "plumber",
    rating: 4.6,
    reviewCount: 52,
    experience: 6,
    startingPrice: 179,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "HSR Layout",
    city: "Bengaluru",
    phone: "+91 97311 00293",
    avatar: "SN",
    badge: "Best Value",
    statusText: "Listed Provider",
    featuredSnippet: "Quick, neat, and honest about parts pricing. Fixed a dripping tap that was driving us crazy.",
    snippetAuthor: "Meera C., Sector 4",
    about: "Santosh is a dependable local plumber serving HSR Layout and Bellandur, known for fair pricing on standard repairs.",
    servicesOffered: [
      "Tap Washer Replacement",
      "Under-basin Drainage Fix",
      "Drain Outlet Unblocking"
    ],
    rateCard: [
      { item: "Inspection Fee", price: "Rs 149" },
      { item: "Tap Washer & Leak Fix", price: "Rs 179" }
    ],
    reviews: [
      { author: "Meera Chandran", rating: 4.8, date: "5 days ago", comment: "Quick, neat, and honest about parts pricing." }
    ]
  },
  // ===================== AC REPAIR (Bengaluru) =====================
  {
    id: "ac-1",
    name: "Imran Khan",
    service: "AC Repair",
    category: "ac-repair",
    rating: 4.9,
    reviewCount: 110,
    experience: 8,
    startingPrice: 399,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "Whitefield",
    city: "Bengaluru",
    phone: "+91 96112 34509",
    avatar: "IK",
    badge: "Top Rated",
    statusText: "Listed Provider",
    featuredSnippet: "Deep foam jet cleaning made our 4-year-old AC cool like brand new! Accurate gas level check.",
    snippetAuthor: "Arvind V., Hope Farm",
    about: "Imran Khan is an HVAC specialist with 8 years experience in inverter ACs, gas charging, and PCB diagnostics.",
    servicesOffered: [
      "Jet Foam Deep AC Servicing",
      "Eco Gas Refilling",
      "Indoor Unit Water Leakage Repair"
    ],
    rateCard: [
      { item: "Standard AC Deep Servicing", price: "Rs 399" },
      { item: "Water Leakage Fix", price: "Rs 349" },
      { item: "Gas Top-up", price: "Rs 799" }
    ],
    reviews: [
      { author: "Arvind V.", rating: 5, date: "Yesterday", comment: "Deep foam jet cleaning made our AC cool like brand new!" }
    ]
  },
  {
    id: "ac-2",
    name: "Pradeep Joshi",
    service: "AC Repair",
    category: "ac-repair",
    rating: 4.8,
    reviewCount: 85,
    experience: 10,
    startingPrice: 449,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "Koramangala",
    city: "Bengaluru",
    phone: "+91 99805 11982",
    avatar: "PJ",
    badge: "Inverter AC Pro",
    statusText: "Listed Provider",
    featuredSnippet: "Diagnosed a compressor capacitor failure instantly. Did not try to push expensive gas refill.",
    snippetAuthor: "Rohit T., 5th Block",
    about: "Pradeep has 10 years of cooling appliance experience across major brands.",
    servicesOffered: [
      "Compressor & Capacitor Replacement",
      "Coil Leakage Brazing",
      "Blower Noise Repair"
    ],
    rateCard: [
      { item: "Diagnostic Fee", price: "Rs 299" },
      { item: "Capacitor Replacement", price: "Rs 650" }
    ],
    reviews: [
      { author: "Rohit Thakur", rating: 5, date: "3 days ago", comment: "Diagnosed capacitor failure instantly." }
    ]
  },
  {
    id: "ac-3",
    name: "Karthik Subramanian",
    service: "AC Repair",
    category: "ac-repair",
    rating: 4.7,
    reviewCount: 63,
    experience: 6,
    startingPrice: 349,
    availability: "Next Day",
    isAvailableToday: false,
    locality: "Indiranagar",
    city: "Bengaluru",
    phone: "+91 98440 67321",
    avatar: "KS",
    badge: "Routine Care",
    statusText: "Listed Provider",
    featuredSnippet: "Very thorough service. Replaced copper insulation pipes that birds had damaged.",
    snippetAuthor: "Gautam P., HAL",
    about: "Karthik specializes in routine servicing and copper piping insulation for apartments.",
    servicesOffered: [
      "AC Health Inspection",
      "Outdoor Unit Mounting",
      "Copper Pipe Insulation"
    ],
    rateCard: [
      { item: "Basic Filter Clean", price: "Rs 349" },
      { item: "Copper Pipe Foam Insulation", price: "Rs 399" }
    ],
    reviews: [
      { author: "Gautam Prasad", rating: 4.8, date: "6 days ago", comment: "Replaced copper insulation neatly." }
    ]
  },

  // ===================== CARPENTERS (Bengaluru) =====================
  {
    id: "carp-1",
    name: "Satish Mistry",
    service: "Carpenter",
    category: "carpenter",
    rating: 4.9,
    reviewCount: 153,
    experience: 14,
    startingPrice: 349,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "HSR Layout",
    city: "Bengaluru",
    phone: "+91 97401 55678",
    avatar: "SM",
    badge: "14+ Yrs Exp",
    statusText: "Listed Provider",
    featuredSnippet: "Fixed sagging wardrobe hydraulic hinges and misaligned sliding door in 1 hour.",
    snippetAuthor: "Siddharth K., Sector 1",
    about: "Satish has 14 years woodworking experience in modular wardrobe hardware, locks, and shelving.",
    servicesOffered: [
      "Wardrobe Hinges & Channel Alignment",
      "Main Door Lock Installation",
      "Wall Shelf Mounting"
    ],
    rateCard: [
      { item: "Visiting Consultation", price: "Rs 199" },
      { item: "Hinge / Hydraulic Fix", price: "Rs 249 per hinge" },
      { item: "Lock Fitting", price: "Rs 499" }
    ],
    reviews: [
      { author: "Siddharth K.", rating: 5, date: "Yesterday", comment: "Fixed sagging wardrobe hinges in an hour." }
    ]
  },
  {
    id: "carp-2",
    name: "Jagdish Sharma",
    service: "Carpenter",
    category: "carpenter",
    rating: 4.8,
    reviewCount: 87,
    experience: 9,
    startingPrice: 299,
    availability: "Next Day",
    isAvailableToday: false,
    locality: "Jayanagar",
    city: "Bengaluru",
    phone: "+91 98459 22340",
    avatar: "JS",
    badge: "Solid Wood Pro",
    statusText: "Listed Provider",
    featuredSnippet: "Repaired our antique teakwood dining chair joints seamlessly.",
    snippetAuthor: "Vasanth K., 7th Block",
    about: "Jagdish specializes in solid wood repairs, curtain rods, and door trimming.",
    servicesOffered: [
      "Antique Wood Repair",
      "Door Planing (Floor Rubbing Fix)",
      "Curtain Rod Installation"
    ],
    rateCard: [
      { item: "Visiting Charge", price: "Rs 199" },
      { item: "Door Planing Adjustment", price: "Rs 299" }
    ],
    reviews: [
      { author: "Vasanth Kumar", rating: 5, date: "4 days ago", comment: "Repaired dining chair joints seamlessly." }
    ]
  },
  {
    id: "carp-3",
    name: "Balram Saini",
    service: "Carpenter",
    category: "carpenter",
    rating: 4.7,
    reviewCount: 61,
    experience: 7,
    startingPrice: 279,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "Whitefield",
    city: "Bengaluru",
    phone: "+91 96200 81923",
    avatar: "BS",
    badge: "Flatpack Specialist",
    statusText: "Listed Provider",
    featuredSnippet: "Assembled our flatpack study desk and wardrobe flawlessly with zero wobbling.",
    snippetAuthor: "Mohit G., ITPL",
    about: "Balram is an expert in flatpack furniture assembly and kitchen cabinet adjustments.",
    servicesOffered: [
      "Flatpack Furniture Assembly",
      "Cabinet Latch & Handle Fitting",
      "Bookshelf Alignment"
    ],
    rateCard: [
      { item: "Visiting Charge", price: "Rs 149" },
      { item: "Study Desk Assembly", price: "Rs 499" }
    ],
    reviews: [
      { author: "Mohit Goel", rating: 4.9, date: "3 days ago", comment: "Assembled flatpack desk flawlessly." }
    ]
  },

  // ===================== PAINTERS =====================
  {
    id: "paint-1",
    name: "Sunil Jadhav",
    service: "Painter",
    category: "painter",
    rating: 4.9,
    reviewCount: 92,
    experience: 11,
    startingPrice: 499,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "Andheri",
    city: "Mumbai",
    phone: "+91 98201 44321",
    avatar: "SJ",
    badge: "Waterproofing & Colors",
    statusText: "Listed Provider",
    featuredSnippet: "Fixed monsoon ceiling dampness and repainted our living room with zero paint smell.",
    snippetAuthor: "Pooja K., Lokhandwala",
    about: "Sunil has 11 years painting and waterproofing experience across residential societies in Western Mumbai.",
    servicesOffered: [
      "Interior Wall Repainting",
      "Monsoon Water Leakage & Putty Treatment",
      "Accent Wall Texture Designing",
      "Wood Polish & Door Enamel Coating"
    ],
    rateCard: [
      { item: "Site Inspection & Area Measurement", price: "Rs 199" },
      { item: "Single Wall Touch-up & Putty", price: "Rs 499" },
      { item: "1 BHK Full Interior Painting (Labor)", price: "Rs 4,999" }
    ],
    reviews: [
      { author: "Pooja Kamat", rating: 5, date: "4 days ago", comment: "Neat masking and zero paint droplets on our floor." }
    ]
  },
  {
    id: "paint-2",
    name: "Ajay Verma",
    service: "Painter",
    category: "painter",
    rating: 4.7,
    reviewCount: 54,
    experience: 8,
    startingPrice: 449,
    availability: "Next Day",
    isAvailableToday: false,
    locality: "HSR Layout",
    city: "Bengaluru",
    phone: "+91 97410 33819",
    avatar: "AV",
    badge: "Eco-Friendly Paints",
    statusText: "Listed Provider",
    featuredSnippet: "Repainted our 2BHK rental apartment quickly before tenant move-in. Clean and affordable.",
    snippetAuthor: "Nikhil T., Sector 3",
    about: "Ajay handles fast rental repainting, putty sanding, and mildew treatment across South Bengaluru.",
    servicesOffered: [
      "Rental Move-in Touchups",
      "Anti-Fungal Balcony Paint",
      "POP Ceiling Painting"
    ],
    rateCard: [
      { item: "Wall Patch & Primer Touchup", price: "Rs 449" },
      { item: "Room Painting (Labor only)", price: "Rs 1,499" }
    ],
    reviews: [
      { author: "Nikhil Tiwari", rating: 4.8, date: "1 week ago", comment: "Clean job and finished right on time." }
    ]
  },

  // ===================== CLEANING =====================
  {
    id: "clean-1",
    name: "Neha Deep Cleaners",
    service: "Cleaning",
    category: "cleaning",
    rating: 4.9,
    reviewCount: 135,
    experience: 6,
    startingPrice: 599,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "Saket",
    city: "Delhi",
    phone: "+91 98111 87234",
    avatar: "NC",
    badge: "Deep Clean Specialist",
    statusText: "Listed Provider",
    featuredSnippet: "De-greased kitchen chimney and scrubbed bathroom tiles to perfection. High-grade machines used.",
    snippetAuthor: "Gaurav M., J Block",
    about: "Neha runs a trusted residential cleaning crew serving South Delhi apartments and villas.",
    servicesOffered: [
      "Intense Bathroom Tile & Grout Scrubbing",
      "Modular Kitchen Degreasing",
      "Sofa & Carpet Vacuum Shampooing",
      "Balcony & Window Track Cleaning"
    ],
    rateCard: [
      { item: "Single Bathroom Deep Scrub", price: "Rs 599" },
      { item: "Kitchen Intensive Degrease", price: "Rs 999" },
      { item: "3-Seater Sofa Shampoo Wash", price: "Rs 699" }
    ],
    reviews: [
      { author: "Gaurav Mathur", rating: 5, date: "2 days ago", comment: "De-greased our modular kitchen flawlessly." }
    ]
  },
  {
    id: "clean-2",
    name: "Pooja Shinde",
    service: "Cleaning",
    category: "cleaning",
    rating: 4.8,
    reviewCount: 78,
    experience: 5,
    startingPrice: 499,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "Baner",
    city: "Pune",
    phone: "+91 99220 54128",
    avatar: "PS",
    badge: "Fast Turnaround",
    statusText: "Listed Provider",
    featuredSnippet: "Deep cleaned our newly rented flat before furniture arrived. Very polite crew.",
    snippetAuthor: "Aditya S., Pancard Road",
    about: "Pooja provides residential move-in/move-out deep cleaning across Baner and Wakad.",
    servicesOffered: [
      "Move-in Empty Flat Cleaning",
      "Floor Machine Polishing",
      "Glass Window Cleaning"
    ],
    rateCard: [
      { item: "Basic Flat Dust & Mop", price: "Rs 499" },
      { item: "Full Flat Move-in Clean (2BHK)", price: "Rs 2,499" }
    ],
    reviews: [
      { author: "Aditya Sawant", rating: 4.8, date: "5 days ago", comment: "Polite staff and spotless floor finish." }
    ]
  },
  // ===================== PEST CONTROL =====================
  {
    id: "pest-1",
    name: "SafeShield Pest Care",
    service: "Pest Control",
    category: "pest-control",
    rating: 4.9,
    reviewCount: 118,
    experience: 9,
    startingPrice: 549,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "Madhapur",
    city: "Hyderabad",
    phone: "+91 98490 66521",
    avatar: "SS",
    badge: "Odorless Spray",
    statusText: "Listed Provider",
    featuredSnippet: "Odorless cockroach gel treatment completely eliminated kitchen roaches. Safe for our pet dog.",
    snippetAuthor: "Venkatesh R., Hitec City",
    about: "SafeShield specializes in odorless gel baiting and anti-termite treatments for IT corridor apartments.",
    servicesOffered: [
      "Odorless Kitchen Cockroach Gel Treatment",
      "Bedbug Eradication & Steam Wash",
      "Anti-Termite Drilling"
    ],
    rateCard: [
      { item: "Standard Cockroach Gel", price: "Rs 549" },
      { item: "Bed Bug Treatment", price: "Rs 1,199" }
    ],
    reviews: [
      { author: "Venkatesh Rao", rating: 5, date: "3 days ago", comment: "Safe for our pet dog and very effective." }
    ]
  },
  {
    id: "pest-2",
    name: "Apex Pest Solutions",
    service: "Pest Control",
    category: "pest-control",
    rating: 4.8,
    reviewCount: 64,
    experience: 7,
    startingPrice: 499,
    availability: "Next Day",
    isAvailableToday: false,
    locality: "Adyar",
    city: "Chennai",
    phone: "+91 98401 22910",
    avatar: "AP",
    badge: "Approved",
    statusText: "Listed Provider",
    featuredSnippet: "Quick herbal paste application behind wooden cabinets solved recurring ant and termite issues.",
    snippetAuthor: "Suresh S., Gandhinagar",
    about: "Apex provides herbal and eco-friendly pest protection across coastal Chennai neighborhoods.",
    servicesOffered: [
      "Herbal Cockroach Control",
      "Wood Boring Beetle Treatment"
    ],
    rateCard: [
      { item: "Herbal Kitchen Treatment", price: "Rs 499" },
      { item: "Termite Spot Treatment", price: "Rs 899" }
    ],
    reviews: [
      { author: "Suresh S.", rating: 4.8, date: "1 week ago", comment: "No strong smell and worked very well." }
    ]
  },

  // ===================== APPLIANCE REPAIR =====================
  {
    id: "app-1",
    name: "Rakesh Sharma",
    service: "Appliance Repair",
    category: "appliance-repair",
    rating: 4.8,
    reviewCount: 104,
    experience: 12,
    startingPrice: 299,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "Bandra",
    city: "Mumbai",
    phone: "+91 98205 91823",
    avatar: "RS",
    badge: "Washing Machine & Microwave",
    statusText: "Listed Provider",
    featuredSnippet: "Fixed our front-load washing machine drain motor noise on the same day. Very transparent on spare part price.",
    snippetAuthor: "Farhan M., Hill Road",
    about: "Rakesh has 12 years repairing washing machines, microwaves, and refrigerators across Western Mumbai.",
    servicesOffered: [
      "Front & Top Load Washing Machine Repair",
      "Microwave Heating Diagnostic",
      "Refrigerator Cooling Repair"
    ],
    rateCard: [
      { item: "Diagnostic Fee", price: "Rs 299" },
      { item: "Inlet Valve Fix", price: "Rs 399" }
    ],
    reviews: [
      { author: "Farhan Merchant", rating: 5, date: "Yesterday", comment: "Fixed washing machine drainage on the spot." }
    ]
  },
  {
    id: "app-2",
    name: "Jignesh Shah",
    service: "Appliance Repair",
    category: "appliance-repair",
    rating: 4.7,
    reviewCount: 71,
    experience: 8,
    startingPrice: 249,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "Satellite",
    city: "Ahmedabad",
    phone: "+91 98250 33145",
    avatar: "JS",
    badge: "Refrigerator Expert",
    statusText: "Listed Provider",
    featuredSnippet: "Replaced faulty defrost timer on our refrigerator in 30 mins. Saved all our frozen groceries!",
    snippetAuthor: "Bhavik P., Ramdevnagar",
    about: "Jignesh provides doorstep repairs for kitchen and laundry appliances in West Ahmedabad.",
    servicesOffered: [
      "Fridge Gas Charging & Thermostat",
      "Washing Machine Belt & Drum Noise Fix"
    ],
    rateCard: [
      { item: "Doorstep Inspection", price: "Rs 199" },
      { item: "Defrost Timer Replacement", price: "Rs 449" }
    ],
    reviews: [
      { author: "Bhavik Patel", rating: 4.9, date: "4 days ago", comment: "Prompt visit and fair pricing on spare parts." }
    ]
  },

  // ===================== LOCKSMITH =====================
  {
    id: "lock-1",
    name: "MasterKey Locksmiths",
    service: "Locksmith",
    category: "locksmith",
    rating: 4.9,
    reviewCount: 88,
    experience: 10,
    startingPrice: 299,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "Koramangala",
    city: "Bengaluru",
    phone: "+91 98455 77123",
    avatar: "MK",
    badge: "Emergency Unlock",
    statusText: "Listed Provider",
    featuredSnippet: "Arrived in 25 mins when we got locked out of our flat. Non-destructive lock opening!",
    snippetAuthor: "Swati G., 5th Block",
    about: "Specialized in emergency residential door unlocking, duplicate keys, and digital smart locks.",
    servicesOffered: [
      "Emergency Door Lockout Opening",
      "Smart Digital Door Lock Installation",
      "Key Duplication"
    ],
    rateCard: [
      { item: "Emergency Door Lockout Unlock", price: "Rs 399" },
      { item: "Standard Cylinder Replacement", price: "Rs 499" }
    ],
    reviews: [
      { author: "Swati Goyal", rating: 5, date: "2 days ago", comment: "Arrived in 25 mins when locked out. Master skill." }
    ]
  },
  {
    id: "lock-2",
    name: "Shankar Key Maker",
    service: "Locksmith",
    category: "locksmith",
    rating: 4.8,
    reviewCount: 65,
    experience: 13,
    startingPrice: 249,
    availability: "Available Today",
    isAvailableToday: true,
    locality: "Lajpat Nagar",
    city: "Delhi",
    phone: "+91 98103 44812",
    avatar: "SK",
    badge: "13+ Yrs Exp",
    statusText: "Listed Provider",
    featuredSnippet: "Crafted laser cut duplicate keys for our Godrej main lock on the spot. Worked like butter.",
    snippetAuthor: "Harman S., Central Market",
    about: "Shankar has 13+ years creating dimple keys, Godrej door locks, and car key replacements in South Delhi.",
    servicesOffered: [
      "Godrej & Yale Lock Repair",
      "Door Handle & Latch Alignment"
    ],
    rateCard: [
      { item: "Inspection / Doorstep Fee", price: "Rs 149" },
      { item: "Main Door Lock Repair", price: "Rs 349" }
    ],
    reviews: [
      { author: "Harman Singh", rating: 4.8, date: "5 days ago", comment: "Crafted duplicate keys that worked perfectly." }
    ]
  }
];

// Explicitly attach to window object for bulletproof global accessibility on Netlify
if (typeof window !== "undefined") {
  window.CITIES_DATA = CITIES_DATA;
  window.SERVICES = SERVICES;
  window.PROVIDERS_DATA = PROVIDERS_DATA;
}
