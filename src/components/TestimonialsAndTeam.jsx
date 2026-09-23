import React from 'react';
import { Star, Quote, GraduationCap, Microscope, Award, ShieldCheck } from 'lucide-react';
import './TestimonialsAndTeam.css';
import useReveal from './useReveal';
import { getAssetUrl } from '../utils/asset';

const TEAM_MEMBERS = [
  {
    name: 'Dr. Suresh',
    role: 'Biotechnologist',
    degree: 'Ph.D.',
    university: 'Maharana Pratap University, Udaipur (Rajasthan)',
    image: '/images/team/dr_suresh.jpeg',
    specialty: 'Plant Biotechnology & Soil Biology',
    bio: 'Leading scientific approaches in plant genetics, root-ball revitalization, soil microbiology, and advanced hormonal therapies for mature tree transplantation.',
  },
  {
    name: 'Parul',
    role: 'Food Technologist',
    degree: 'M.Sc Food Technology',
    university: 'Central University of Haryana',
    image: '/images/team/parul.jpeg',
    specialty: 'Flora Nutrition & Orchard Sciences',
    bio: 'Specializing in horticultural nutrition regimes, soil enrichment science, organic turf cultivation, and edible fruit orchard design for private country estates.',
  },
  {
    name: 'Pawan Saini',
    role: 'Entomologist',
    degree: 'M.Sc Entomology',
    university: 'Sam Higginbottom University of Agriculture, Technology and Sciences (Deemed-to-be-University)',
    image: '/images/team/pawan_saini.jpeg',
    specialty: 'Integrated Pest Management (IPM)',
    bio: 'Expert in insect ecology, biological pest suppression, and plant protection protocols, safeguarding delicate ornamental gardens against infestations.',
  },
];

const REVIEWS = [
  {
    name: 'Col. Devendra Rathore (Retd.)',
    project: '2.5-Acre Farmhouse Estate, Chattarpur',
    rating: 5,
    review:
      'Oxford Landscape transformed our empty acreage into a breathtaking resort-like sanctuary. The bespoke pergola, cascading water wall, and fruit orchard were delivered with immaculate craftsmanship.',
  },
  {
    name: 'Megha Singhania',
    project: 'Corporate Biophilic Campus, DLF CyberCity, Gurgaon',
    rating: 5,
    review:
      'Their AMC team keeps our commercial plaza looking vibrant 365 days a year. The water plaza and vertical greenery have drastically boosted employee wellness and visitor impressions.',
  },
  {
    name: 'Rohan & Shweta Agarwal',
    project: 'Luxury Penthouse Terrace Garden, Golf Course Ext.',
    rating: 5,
    review:
      "Zero water leakage, brilliant smart lighting, and exquisite plant health. Oxford Landscape's superiority is evident in every detail of our rooftop sanctuary.",
  },
];

export default function TestimonialsAndTeam() {
  useReveal();

  return (
    <div className="team-and-testimonials-wrap">
      {/* Team Section */}
      <section id="team" className="team-section">
        <div className="container">
          <div className="section-header reveal">
            <p className="eyebrow gold">Scientific & Technical Leadership</p>
            <h2 className="section-title">The Scientific Minds Behind Our Landscapes</h2>
            <p className="section-subtitle">
              Unlike ordinary landscapers, Oxford Landscape combines artistic architecture
              with accredited scientific expertise in biotechnology, plant nutrition, and entomology.
            </p>
          </div>

          <div className="team-grid">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className={`team-card reveal delay-${i + 1}`}>
                <div className="team-card-image-wrap">
                  <img
                    src={getAssetUrl(member.image)}
                    alt={member.name}
                    loading="lazy"
                  />
                  <div className="team-role-pill">
                    <Microscope size={13} />
                    <span>{member.role}</span>
                  </div>
                </div>

                <div className="team-card-body">
                  <h3 className="team-member-name">{member.name}</h3>
                  <div className="team-member-degree">
                    <GraduationCap size={15} />
                    <span>{member.degree}</span>
                  </div>
                  <p className="team-member-uni">{member.university}</p>

                  <div className="team-card-divider" />

                  <div className="team-specialty-badge">
                    <ShieldCheck size={13} />
                    <span>{member.specialty}</span>
                  </div>

                  <p className="team-member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="section-header reveal">
            <p className="eyebrow">Client Satisfaction</p>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              From luxury farmhouse estates to corporate green campuses — our clients
              speak for the quality of our craftsmanship.
            </p>
          </div>

          <div className="testimonials-grid">
            {REVIEWS.map((rev, i) => (
              <div key={i} className={`testimonial-card reveal delay-${i + 1}`}>
                <div className="tc-stars">
                  {Array.from({ length: rev.rating }).map((_, s) => (
                    <Star key={s} size={15} fill="#c49a2a" color="#c49a2a" />
                  ))}
                </div>
                <Quote size={32} className="tc-quote-icon" />
                <p className="tc-text">"{rev.review}"</p>
                <div className="tc-author">
                  <div className="tc-avatar">{rev.name[0]}</div>
                  <div className="tc-author-info">
                    <strong>{rev.name}</strong>
                    <span>{rev.project}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="satisfaction-bar reveal">
            <div className="sat-item">
              <strong>100%</strong>
              <span>Client Satisfaction Rate</span>
            </div>
            <div className="sat-item">
              <strong>500+</strong>
              <span>Projects Completed</span>
            </div>
            <div className="sat-item">
              <strong>10+</strong>
              <span>Years of Excellence</span>
            </div>
            <div className="sat-item">
              <strong>24+</strong>
              <span>Prestigious Clients</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
