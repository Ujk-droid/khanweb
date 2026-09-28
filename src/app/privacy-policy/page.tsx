import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read TechExa Vision's Privacy Policy to learn how we collect, use, and protect your personal information.",
};

const sections: { heading: string; body: (string | string[])[] }[] = [
  {
    heading: "1. Introduction",
    body: [
      `TechExa Vision ("we", "us", or "our") is a software development agency based in Garden East, Karachi, Pakistan. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit techexavision.com (the "Site") or use our services.`,
      `By using the Site, you agree to the collection and use of information in accordance with this policy.`,
    ],
  },
  {
    heading: "2. Information We Collect",
    body: [
      "We may collect the following types of information:",
      [
        "Personal information you provide directly — such as your name, email address, phone number, and message content when you submit a contact form, sign up for an account, or reach out to us on WhatsApp.",
        "Account information — if you create an account with us, including your email address and login credentials.",
        "Usage data — such as pages visited, time spent on the Site, device and browser type, and referring URLs, collected automatically through analytics tools.",
      ],
    ],
  },
  {
    heading: "3. How We Use Your Information",
    body: [
      "We use the information we collect to:",
      [
        "Respond to your inquiries and provide the services you request",
        "Communicate with you about projects, proposals, and support",
        "Improve our Site, services, and user experience",
        "Send occasional updates or marketing communications, where permitted",
        "Detect, prevent, and address technical issues or fraudulent activity",
      ],
    ],
  },
  {
    heading: "4. Cookies and Tracking Technologies",
    body: [
      "We use cookies and similar tracking technologies to understand how visitors interact with our Site. This includes:",
      [
        "Google Analytics — to measure traffic and usage patterns",
        "Meta (Facebook) Pixel — to measure the effectiveness of our advertising and understand visitor actions",
      ],
      "You can control or disable cookies through your browser settings, though some parts of the Site may not function properly without them.",
    ],
  },
  {
    heading: "5. How We Share Your Information",
    body: [
      "We do not sell your personal information. We may share information with:",
      [
        "Service providers who help us operate the Site and deliver services (e.g., Cloudinary for media hosting, email delivery providers)",
        "Analytics and advertising partners (Google, Meta) for the purposes described above",
        "Authorities, where required by law or to protect our legal rights",
      ],
    ],
  },
  {
    heading: "6. Data Security",
    body: [
      "We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "7. Data Retention",
    body: [
      "We retain personal information only for as long as necessary to fulfill the purposes described in this policy, or as required by applicable law.",
    ],
  },
  {
    heading: "8. Your Rights",
    body: [
      "Depending on your location, you may have the right to access, correct, update, or request deletion of your personal information. To exercise any of these rights, please contact us using the details below.",
    ],
  },
  {
    heading: "9. Children's Privacy",
    body: [
      "Our Site and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "10. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.",
    ],
  },
  {
    heading: "11. Contact Us",
    body: [
      "If you have any questions about this Privacy Policy, please contact us:",
      [
        "TechExa Vision",
        "Garden East, Karachi, Pakistan",
        "Email: info@techexavision.com",
        "UK Business: +44 7888 295318",
        "Pakistan Business: +92 329 8388739",
        "WhatsApp: +92 331 2436713",
      ],
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="relative bg-[#0B0B0C] pt-32 pb-24 min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(183,132,96,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B78460]/25 bg-[rgba(183,132,96,0.08)] text-[#B78460] text-sm font-medium mb-4">
          Legal
        </span>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3 text-[#FAFAFA]">
          Privacy Policy
        </h1>
        <p className="text-[#9A8F87] text-sm mb-12">
          Effective date: August 23, 2026
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-3">
                {section.heading}
              </h2>
              <div className="space-y-3 text-[#9A8F87] leading-relaxed">
                {section.body.map((item, i) =>
                  Array.isArray(item) ? (
                    <ul key={i} className="list-disc list-inside space-y-1.5 ml-1">
                      {item.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i}>{item}</p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
