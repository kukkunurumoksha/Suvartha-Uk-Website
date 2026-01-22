export default function LocalBusinessSchema() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "ReligiousOrganization",
    "name": "Suvartha Ministries UK",
    "description": "Welcome to Suvartha Ministries UK - Spreading the Gospel since 1925",
    "url": "https://suvarthaministries.org.uk",
    "telephone": "+44 7427527524",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "England"
    },
    "openingHours": [
      "Su 10:00-12:00",
      "Su 18:00-20:00"
    ],
    "foundingDate": "1925"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessData)
      }}
    />
  );
}