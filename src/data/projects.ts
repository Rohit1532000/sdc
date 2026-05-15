import imgVilla from "@/assets/proj-villa.jpg";
import imgApartment from "@/assets/proj-apartment.jpg";
import imgLab from "@/assets/proj-lab.jpg";
import imgHospital from "@/assets/proj-hospital.jpg";
import imgCta from "@/assets/cta-interior.jpg";
import imgHvac from "@/assets/svc-hvac.jpg";
import imgElec from "@/assets/svc-electrical.jpg";

export type Project = {
  title: string;
  category: "Apartments / Villas" | "High-End Residences" | "Lab Sector" | "Ongoing Projects" | "Hospitals" | "Restaurants";
  location?: string;
  image: string;
};

export const projects: Project[] = [
  // High-End Residences
  { title: "Hari Sanjana Residence", category: "High-End Residences", location: "Poers Garden, Chennai", image: imgVilla },
  { title: "Ravindra Residence", category: "High-End Residences", location: "Hyderabad", image: imgCta },
  { title: "Glade One Villaments", category: "High-End Residences", location: "Ahmedabad, Gujarat", image: imgVilla },
  { title: "Shadab Residence", category: "High-End Residences", location: "Kerala", image: imgCta },
  { title: "Vasanth Namratha Residence", category: "High-End Residences", location: "Bengaluru", image: imgVilla },
  { title: "Abhimanyu Residence", category: "High-End Residences", location: "Hyderabad", image: imgCta },
  { title: "Sandeep Khosla Residence", category: "High-End Residences", location: "Epsilon, Bengaluru", image: imgVilla },
  { title: "Roopa Karthik Residence", category: "High-End Residences", location: "Brookefield, Bengaluru", image: imgCta },

  // Apartments / Villas
  { title: "Maheshwari 200 Apartments", category: "Apartments / Villas", location: "Hennur, Bengaluru", image: imgApartment },
  { title: "Venus Builders Villa Layout", category: "Apartments / Villas", location: "Whitefield, Bengaluru", image: imgVilla },
  { title: "Trestle 150 Apartments", category: "Apartments / Villas", location: "Bengaluru", image: imgApartment },
  { title: "Aura Villa Layout", category: "Apartments / Villas", location: "Bengaluru", image: imgVilla },
  { title: "Nandi Retreat 150 Apartments", category: "Apartments / Villas", location: "Nandi Hills", image: imgApartment },
  { title: "Bekal Resorts & Villas", category: "Apartments / Villas", location: "Kerala", image: imgVilla },
  { title: "Lake View Apartments", category: "Apartments / Villas", location: "Bengaluru", image: imgApartment },
  { title: "Green IV Apartments (Viridis)", category: "Apartments / Villas", location: "Bengaluru", image: imgApartment },

  // Lab Sector
  { title: "HiTech Lab", category: "Lab Sector", location: "Anand, Gujarat", image: imgLab },
  { title: "RCA Lab", category: "Lab Sector", location: "Mumbai", image: imgLab },
  { title: "RCA Lab", category: "Lab Sector", location: "Kolkata", image: imgLab },
  { title: "RCA Lab", category: "Lab Sector", location: "Chennai", image: imgLab },
  { title: "RCA Lab", category: "Lab Sector", location: "Kochi", image: imgLab },

  // Hospitals
  { title: "Altius Hospital", category: "Hospitals", location: "Kalyan Nagar, Bengaluru", image: imgHospital },
  { title: "Arth Ayurvedic Hospital", category: "Hospitals", location: "Doddaballapur", image: imgHospital },
  { title: "Shyres Hospital", category: "Hospitals", location: "Belgaum", image: imgHospital },

  // Restaurants
  { title: "1522 Bar & Restaurant", category: "Restaurants", location: "Malleshwaram, Bengaluru", image: imgCta },
  { title: "1522 Bar & Restaurant", category: "Restaurants", location: "Halasur, Bengaluru", image: imgCta },
  { title: "Hangover Restaurant", category: "Restaurants", location: "Indiranagar, Bengaluru", image: imgCta },

  // Ongoing
  { title: "KKWS Industrial Facility", category: "Ongoing Projects", location: "Karnataka", image: imgElec },
  { title: "Premium Villa Layout", category: "Ongoing Projects", location: "Devanahalli", image: imgVilla },
  { title: "Commercial Tower MEP", category: "Ongoing Projects", location: "Bengaluru", image: imgApartment },
  { title: "Heritage Residence", category: "Ongoing Projects", location: "Mysuru", image: imgHvac },
];

export const projectCategories = [
  "All",
  "Apartments / Villas",
  "High-End Residences",
  "Lab Sector",
  "Ongoing Projects",
  "Hospitals",
  "Restaurants",
] as const;
