export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "MD Digital Solutions",
    "description": "Professional graphics design services specializing in branding, social media design, flyers, and posters.",
    "url": "https://md-porfolio.vercel.app",
    "founder": {
      "@type": "Person",
      "name": "Aduragnemi Michael",
      "jobTitle": "Professional Graphics Designer"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "Mdgraphics04@gmail.com",
      "contactType": "customer service",
      "areaServed": "NG",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://instagram.com/Md_digitals01",
      "https://www.behance.net/mdgraphics04",
      "https://pin.it/1QnbXeKy4"
    ],
    "serviceType": [
      "Brand Identity Design",
      "Logo Design",
      "Social Media Design",
      "Flyer Design",
      "Poster Design",
      "Print Design",
      "Digital Graphics"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NG"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
