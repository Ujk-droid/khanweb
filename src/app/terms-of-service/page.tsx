import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for using TechExa Vision's website and software development services.",
};

const sections: { heading: string; body: (string | string[])[] }[] = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      `These Terms of Service ("Terms") govern your access to and use of techexavision.com (the "Site") and the services provided by TechExa Vision ("we", "us", or "our"), a software development agency based in Garden East, Karachi, Pakistan. By accessing the Site or engaging our services, you agree to be bound by these Terms.`,
    ],
  },
  {
    heading: "2. Our Services",
    body: [
      "TechExa Vision provides software development services, including but not limited to web design, full-stack development, mobile applications, UI/UX design, and AI solutions. The specific scope, deliverables, timelines, and fees for any engagement will be set out in a separate written proposal, quotation, or contract agreed between TechExa Vision and the client.",
    ],
  },
  {
    heading: "3. Use of the Site",
    body: [
      "You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the Site by, any third party. You must not attempt to gain unauthorized access to any part of the Site, its systems, or related networks.",
    ],
  },
  {
    heading: "4. User Accounts",
    body: [
      "Certain features of the Site may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately if you suspect any unauthorized use of your account.",
    ],
  },
  {
    heading: "5. Intellectual Property",
    body: [
      "All content on the Site — including text, graphics, logos, and software — is the property of TechExa Vision or its licensors and is protected by applicable intellectual property laws, unless otherwise stated. For client projects, intellectual property ownership and transfer terms are governed by the individual project agreement.",
    ],
  },
  {
    heading: "6. Payments and Project Terms",
    body: [
      "Pricing, payment schedules, and project-specific terms are agreed separately in writing for each engagement. Unless otherwise stated in that agreement, quotations are estimates and final costs may vary based on the confirmed scope of work.",
    ],
  },
  {
    heading: "7. Third-Party Links and Services",
    body: [
      "The Site may contain links to third-party websites or services (such as social media platforms) that are not owned or controlled by TechExa Vision. We are not responsible for the content, policies, or practices of any third-party sites.",
    ],
  },
  {
    heading: "8. Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, TechExa Vision shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Site or our services. Our total liability for any claim arising from a service engagement shall not exceed the amount paid by you for that engagement.",
    ],
  },
  {
    heading: "9. Indemnification",
    body: [
      "You agree to indemnify and hold TechExa Vision harmless from any claims, damages, or expenses arising from your misuse of the Site or violation of these Terms.",
    ],
  },
  {
    heading: "10. Termination",
    body: [
      "We reserve the right to suspend or terminate your access to the Site at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.",
    ],
  },
  {
    heading: "11. Governing Law",
    body: [
      "These Terms are governed by and construed in accordance with the laws of Pakistan. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Karachi, Pakistan.",
    ],
  },
  {
    heading: "12. Changes to These Terms",
    body: [
      "We may update these Terms from time to time. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "13. Contact Us",
    body: [
      "If you have any questions about these Terms, please contact us:",
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

export default function TermsOfServicePage() {
  return (
    <section className="relative bg-[#0B0B0C] pt-32 pb-24 min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(183,132,96,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B78460]/25 bg-[rgba(183,132,96,0.08)] text-[#B78460] text-sm font-medium mb-4">
          Legal
        </span>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3 text-[#FAFAFA]">
          Terms of Service
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
