export type NavItem = {
  id: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const owner = {
  name: "MERIEM BABORI",
  title:
    "Master's Student in Geomatics | GIS - Remote Sensing - Photogrammetry",
  location: "Casablanca, Morocco",
  email: "baborimeriem@gmail.com",
  phone: "+212 722 457682",
  photoUrl: "",
  photoAlt: "Meriem Babori profile photo",
  linkedin: "meriem-babori",
  linkedinUrl: "https://www.linkedin.com/in/meriem-babori",
  profile:
    "Passionate about GIS, Remote Sensing and Photogrammetry. Skilled in spatial analysis, satellite image processing, thematic cartography and geographic databases. Seeking opportunities to contribute to innovative geospatial and environmental projects.",
};

export const education = [
  {
    degree:
      "Master en Geomatique Appliquee aux Geosciences et a l'Environnement",
    year: "2025 - Present",
  },
  {
    degree: "Licence Geomatique et Amenagement du Territoire",
    year: "2024",
  },
  {
    degree: "DEUST Sciences et Techniques",
    year: "2023",
  },
  {
    degree: "Baccalaureat Sciences Physiques",
    year: "2020",
  },
];

export const skills = {
  gis: ["QGIS", "ArcGIS"],
  remoteSensing: ["ENVI", "SNAP", "Agisoft Metashape", "Pix4D"],
  programming: ["Python", "SQL"],
  specializations: [
    "Spatial Analysis",
    "Drone Photogrammetry",
    "Satellite Image Processing",
    "Thematic Mapping",
  ],
};

export const skillMeters = [
  { name: "GIS & Cartography", value: 92 },
  { name: "Remote Sensing", value: 90 },
  { name: "Photogrammetry", value: 88 },
  { name: "Programming", value: 78 },
];

export const experience = [
  {
    title: "Internship - Civil Engineering Consulting Office",
    points: [
      "Road network optimization using aerial imagery",
      "Drone surveying",
      "Agisoft Metashape and Pix4D processing",
      "Creation of thematic maps",
    ],
  },
  {
    title: "Scientific Caravan \"Let's Understand Earth\"",
    points: [
      "Public awareness about earthquakes",
      "Scientific communication",
    ],
  },
];

export const projects = [
  {
    title: "Spatial Interpolation Methods Comparison (IDW vs Kriging)",
    stack: ["Geostatistics", "GIS"],
    outcome: "Compared precision and robustness of interpolation methods.",
  },
  {
    title: "Topographic and Hydrological Parameters Extraction",
    stack: ["DEM", "Hydrology", "Spatial Analysis"],
    outcome: "Automated extraction workflow for topographic and hydrological indicators.",
  },
  {
    title: "Land Use Mapping using Machine Learning",
    stack: ["Landsat 8", "SVM", "Random Forest", "k-NN", "ANN"],
    outcome: "Achieved high classification performance with strong thematic reliability.",
  },
  {
    title: "Interactive Geo Apps Development",
    stack: ["ArcGIS Experience Builder", "Dashboard", "Web GIS"],
    outcome: "Built interactive map-driven interfaces for decision support.",
  },
  {
    title: "Landsat and Sentinel-2 Comparative Analysis",
    stack: ["ENVI", "SNAP", "Remote Sensing"],
    outcome: "Compared sensor behavior and output quality for earth observation tasks.",
  },
];

export const certifications = [
  "Make an Impact with Modern Geo Apps (Esri)",
  "Getting Started with Spatial Analysis (Esri)",
  "Getting Academic AI Right (Clarivate)",
  "AI in the Web of Science (Clarivate)",
  "Remote Sensing Certificate (Alison)",
];

export const languages = [
  "Arabic (Native)",
  "French (Fluent)",
  "English (Intermediate)",
];

export const strengths = [
  "Adaptability",
  "Analytical Thinking",
  "Project Management",
  "Autonomy",
  "Teamwork",
  "Research & Innovation",
];
