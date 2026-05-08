'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const patientEducationMeta: Record<string, { title: string; description: string }> = {
  "/patient-education/cosmetic-general-dentistry": {
    title: "Cosmetic & General Dentistry | NuSmile Dental",
    description: "Learn about cosmetic and general dentistry services, including smile improvements, restorations, and preventive care at NuSmile Dental Care.",
  },
  "/patient-education/educational-videos": {
    title: "Dental Educational Videos | NuSmile Dental",
    description: "Watch informative dental videos to understand treatments, procedures, and oral care tips from the experts at NuSmile Dental Care.",
  },
  "/patient-education/teeth-whitening": {
    title: "Professional Teeth Whitening | NuSmile Dental",
    description: "Discover safe and effective teeth whitening options to brighten your smile with professional care at NuSmile Dental Care.",
  },
  "/patient-education/dental-crowns": {
    title: "Dental Crowns for Tooth Repair | NuSmile Dental",
    description: "Learn how dental crowns restore damaged teeth, improve strength, and enhance your smile with long-lasting results.",
  },
  "/patient-education/dental-cleanings": {
    title: "Professional Dental Cleanings | NuSmile Dental",
    description: "Maintain healthy teeth and gums with routine dental cleanings that remove plaque, tartar, and prevent oral health issues.",
  },
  "/patient-education/veneers": {
    title: "Porcelain Veneers for Smile Makeover | NuSmile Dental",
    description: "Transform your smile with custom porcelain veneers designed to correct chips, gaps, and discoloration effectively.",
  },
  "/patient-education/bonding": {
    title: "Dental Bonding for Smile Repair | NuSmile Dental",
    description: "Fix chipped, cracked, or discolored teeth with affordable dental bonding solutions for a natural-looking smile.",
  },
  "/patient-education/bridges": {
    title: "Dental Bridges for Missing Teeth | NuSmile Dental",
    description: "Replace missing teeth with durable dental bridges that restore function, appearance, and oral health.",
  },
  "/patient-education/periodontal-therapy": {
    title: "Periodontal Therapy for Gum Health | NuSmile Dental",
    description: "Treat gum disease effectively with periodontal therapy to restore healthy gums and protect your smile.",
  },
  "/patient-education/dental-implants": {
    title: "Dental Implants for Tooth Replacement | NuSmile Dental",
    description: "Restore missing teeth permanently with dental implants that look, feel, and function like natural teeth.",
  },
  "/patient-education/dental-fillings": {
    title: "Tooth-Colored Dental Fillings | NuSmile Dental",
    description: "Repair cavities with natural-looking dental fillings that restore strength and protect your teeth from further decay.",
  },
  "/patient-education/laser-dentistry": {
    title: "Advanced Laser Dentistry | NuSmile Dental",
    description: "Experience precise, comfortable treatments with laser dentistry for gum care, decay removal, and more.",
  },
  "/patient-education/oral-hygiene": {
    title: "Oral Hygiene Tips for Healthy Teeth | NuSmile Dental",
    description: "Learn essential oral hygiene practices to maintain strong teeth, healthy gums, and prevent dental problems.",
  },
  "/patient-education/bone-grafting": {
    title: "Bone Grafting for Dental Implants | NuSmile Dental",
    description: "Prepare your jaw for dental implants with bone grafting procedures that rebuild bone structure effectively.",
  },
  "/patient-education/technology": {
    title: "Advanced Dental Technology | NuSmile Dental",
    description: "Discover modern dental technology used to enhance accuracy, comfort, and treatment outcomes at NuSmile Dental Care.",
  },
  "/patient-education/air-abrasion": {
    title: "Air Abrasion for Gentle Decay Removal | NuSmile Dental",
    description: "Learn about air abrasion, a drill-free method for removing tooth decay comfortably and efficiently.",
  },
  "/patient-education/laser-decay-diagnostics": {
    title: "Laser Decay Detection | NuSmile Dental",
    description: "Detect cavities early with advanced laser decay diagnostics for accurate and preventive dental care.",
  },
  "/patient-education/toothpaste": {
    title: "Choosing the Right Toothpaste | NuSmile Dental",
    description: "Find out how to choose the best toothpaste for your dental needs and maintain optimal oral hygiene.",
  },
  "/patient-education/mouthwash": {
    title: "Benefits of Mouthwash for Oral Care | NuSmile Dental",
    description: "Learn how mouthwash supports oral hygiene by reducing bacteria, freshening breath, and protecting teeth.",
  },
  "/patient-education/how-to-brush-and-floss": {
    title: "How to Brush and Floss Properly | NuSmile Dental",
    description: "Master proper brushing and flossing techniques to keep your teeth clean, healthy, and free from plaque.",
  },
  "/patient-education/digital-x-rays": {
    title: "Digital Dental X-Rays | NuSmile Dental",
    description: "Explore the benefits of digital X-rays for safer, faster, and more accurate dental diagnosis.",
  },
  "/patient-education/how-to-prevent-cavities": {
    title: "Tips to Prevent Cavities | NuSmile Dental",
    description: "Discover simple ways to prevent cavities with proper oral hygiene, diet, and regular dental visits.",
  },
  "/patient-education/cone-beam-ct-imaging": {
    title: "Cone Beam CT Imaging in Dentistry | NuSmile Dental",
    description: "Learn how cone beam CT imaging provides detailed 3D scans for precise diagnosis and treatment planning.",
  },
  "/patient-education/bad-breath": {
    title: "Causes & Treatment of Bad Breath | NuSmile Dental",
    description: "Understand the causes of bad breath and effective treatments to maintain fresh breath and oral health.",
  },
  "/patient-education/oral-hygiene-for-kids": {
    title: "Oral Hygiene Tips for Kids | NuSmile Dental",
    description: "Help your child build healthy habits with simple oral hygiene tips designed for kids' dental care.",
  },
  "/patient-education/intraoral-camera": {
    title: "Intraoral Camera in Dentistry | NuSmile Dental",
    description: "See how intraoral cameras improve diagnosis by providing clear images of your teeth and gums.",
  },
  "/patient-education/oral-health": {
    title: "Importance of Oral Health | NuSmile Dental",
    description: "Learn why maintaining good oral health is essential for overall well-being and disease prevention.",
  },
  "/patient-education/antibiotic-premedication": {
    title: "Antibiotic Premedication Guide | NuSmile Dental",
    description: "Understand when antibiotic premedication is needed before dental procedures for safe treatment.",
  },
  "/patient-education/aging-and-oral-health": {
    title: "Aging and Oral Health Tips | NuSmile Dental",
    description: "Discover how aging affects oral health and tips to maintain healthy teeth and gums as you grow older.",
  },
};

export default function PatientEducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const pageMeta = patientEducationMeta[pathname];

    if (!pageMeta) return;

    document.title = pageMeta.title;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute("content", pageMeta.description);
  }, [pathname]);

  return children;
}
