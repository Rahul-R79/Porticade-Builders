import { Helmet } from "react-helmet-async";

const LocalBusinessSchema = () => (
    <Helmet>
        <script type='application/ld+json'>
            {`
      {
        "@context": "https://schema.org",
        "@type": "ConstructionCompany",
        "name": "Porticade Builders & Developers Private Limited",
        "url": "https://porticadebuilders.com",
        "telephone": "+91 98956 31515",
        "email": "porticade911@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Trivandrum",
          "addressRegion": "Kerala",
          "addressCountry": "IN"
        },
        "areaServed": ["Trivandrum", "Mannanthala", "Nalanchira"]
      }
      `}
        </script>
    </Helmet>
);

export default LocalBusinessSchema;
