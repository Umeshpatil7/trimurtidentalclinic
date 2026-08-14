// Existing featured assets
import clinicImage from '../assets/d74e76532ea3a22d56844a13867595f5f9d4066d.png';
import doctorImage from '../assets/31a64498573c6787ea642688cbbab1e20a2febc4.png';
import patientImage from '../assets/1cf8df4c7b094a491f4a32e78d639a2a40fd8c9f.png';

// 17 Real clinic photos from gallery
import img01 from '../assets/gallery/clinic-01.jpg';
import img02 from '../assets/gallery/clinic-02.jpg';
import img03 from '../assets/gallery/clinic-03.jpg';
import img04 from '../assets/gallery/clinic-04.jpg';
import img05 from '../assets/gallery/clinic-05.jpg';
import img06 from '../assets/gallery/clinic-06.jpg';
import img07 from '../assets/gallery/clinic-07.jpg';
import img08 from '../assets/gallery/clinic-08.jpg';
import img09 from '../assets/gallery/clinic-09.jpg';
import img10 from '../assets/gallery/clinic-10.jpg';
import img11 from '../assets/gallery/clinic-11.jpg';
import img12 from '../assets/gallery/clinic-12.jpg';
import img13 from '../assets/gallery/clinic-13.jpg';
import img14 from '../assets/gallery/clinic-14.jpg';
import img15 from '../assets/gallery/clinic-15.jpg';
import img16 from '../assets/gallery/clinic-16.jpg';
import img17 from '../assets/gallery/clinic-17.jpg';

export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: 'all' | 'clinic' | 'equipment' | 'treatments' | 'patients';
  categoryLabel: string;
  description: string;
}

export const galleryCategories = [
  { id: 'all', label: 'All Photos' },
  { id: 'clinic', label: 'Clinic & Interior' },
  { id: 'equipment', label: 'Modern Equipment' },
  { id: 'treatments', label: 'Treatments & Care' },
  { id: 'patients', label: 'Doctor & Patients' },
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: clinicImage,
    title: 'Modern Clinic Operatory',
    category: 'clinic',
    categoryLabel: 'Clinic & Interior',
    description: 'Clean, ergonomic dental operatory equipped with advanced dental chairs.',
  },
  {
    id: 2,
    src: doctorImage,
    title: 'Expert Dental Consultation',
    category: 'patients',
    categoryLabel: 'Doctor & Patients',
    description: 'Dr. Umesh Patil consulting with patient and discussing personalized smile treatment.',
  },
  {
    id: 3,
    src: patientImage,
    title: 'Happy Patient Smiles',
    category: 'patients',
    categoryLabel: 'Doctor & Patients',
    description: 'Satisfied patient smiling after completing dental care treatment.',
  },
  {
    id: 4,
    src: img01,
    title: 'Precision Dental Examination',
    category: 'treatments',
    categoryLabel: 'Treatments & Care',
    description: 'Detailed oral cavity examination using sterile instruments & magnifying lights.',
  },
  {
    id: 5,
    src: img02,
    title: 'Advanced Operatory Suite',
    category: 'clinic',
    categoryLabel: 'Clinic & Interior',
    description: 'Spacious clinic setup ensuring utmost patient comfort and relaxed atmosphere.',
  },
  {
    id: 6,
    src: img03,
    title: 'High-Tech Dental Chair & Monitor',
    category: 'equipment',
    categoryLabel: 'Modern Equipment',
    description: 'Digital radiographic display and ergonomic motorized dental chair.',
  },
  {
    id: 7,
    src: img04,
    title: 'Dental Treatment in Progress',
    category: 'treatments',
    categoryLabel: 'Treatments & Care',
    description: 'Dr. performing root canal procedure with strict sterilization standards.',
  },
  {
    id: 8,
    src: img05,
    title: 'Sterilization & Instrument Station',
    category: 'equipment',
    categoryLabel: 'Modern Equipment',
    description: 'State-of-the-art autoclave and ultrasonic disinfection station for 100% hygiene.',
  },
  {
    id: 9,
    src: img06,
    title: 'Patient Smile Consultation',
    category: 'patients',
    categoryLabel: 'Doctor & Patients',
    description: 'Dr. explaining treatment options and dental health maintenance.',
  },
  {
    id: 10,
    src: img07,
    title: 'Digital X-Ray & Diagnostics',
    category: 'equipment',
    categoryLabel: 'Modern Equipment',
    description: 'Instant low-radiation digital radiography for accurate diagnosis.',
  },
  {
    id: 11,
    src: img08,
    title: 'Comfortable Reception & Waiting Area',
    category: 'clinic',
    categoryLabel: 'Clinic & Interior',
    description: 'Peaceful and hygienic waiting lounge designed for maximum patient convenience.',
  },
  {
    id: 12,
    src: img09,
    title: 'Orthodontic & Aligners Setup',
    category: 'treatments',
    categoryLabel: 'Treatments & Care',
    description: 'Precise bracket bonding and alignment tools for smile transformation.',
  },
  {
    id: 13,
    src: img10,
    title: 'Cosmetic Dentistry & Whitening',
    category: 'treatments',
    categoryLabel: 'Treatments & Care',
    description: 'LED whitening and aesthetic dental restoration session in progress.',
  },
  {
    id: 14,
    src: img11,
    title: 'Ultrasonic Scaling & Polishing',
    category: 'treatments',
    categoryLabel: 'Treatments & Care',
    description: 'Gentle plaque and tartar removal for healthy gums and fresh breath.',
  },
  {
    id: 15,
    src: img12,
    title: 'Pediatric Care & Gentle Treatment',
    category: 'patients',
    categoryLabel: 'Doctor & Patients',
    description: 'Friendly, fear-free environment specialized for young kids and families.',
  },
  {
    id: 16,
    src: img13,
    title: 'Modern Clinic Interior View',
    category: 'clinic',
    categoryLabel: 'Clinic & Interior',
    description: 'Pristine, well-lit dental operatories keeping hygiene at the top priority.',
  },
  {
    id: 17,
    src: img14,
    title: 'Specialized Surgical Instruments',
    category: 'equipment',
    categoryLabel: 'Modern Equipment',
    description: 'Surgical grade stainless steel instruments for dental implantology.',
  },
  {
    id: 18,
    src: img15,
    title: 'Restorative Care & Fillings',
    category: 'treatments',
    categoryLabel: 'Treatments & Care',
    description: 'Tooth-colored composite restoration preserving natural tooth structure.',
  },
  {
    id: 19,
    src: img16,
    title: 'Crown & Bridge Prosthetics',
    category: 'equipment',
    categoryLabel: 'Modern Equipment',
    description: 'Custom ceramic crowns and bridges for natural aesthetics and durable function.',
  },
  {
    id: 20,
    src: img17,
    title: 'Smiling Patient Testimonial',
    category: 'patients',
    categoryLabel: 'Doctor & Patients',
    description: 'Celebrating another successful smile restoration at Trimurti Dental Clinic.',
  },
];
