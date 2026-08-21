"use client";

// next-cloudinary's CldImage uses client-only hooks internally but doesn't
// ship its own "use client" directive, so it can't be imported directly into
// a Server Component (e.g. blog/[slug]/page.tsx, which must stay server-side
// for generateStaticParams/generateMetadata). This thin wrapper gives it a
// client boundary without forcing the page that renders it to become a
// Client Component.
import { CldImage, type CldImageProps } from "next-cloudinary";

export default function CloudinaryImage(props: CldImageProps) {
  return <CldImage {...props} />;
}
