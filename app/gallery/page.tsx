import type { Metadata } from "next";
import { BeforeAfterShowcase } from "@/components/gallery/before-after-showcase";

export const metadata: Metadata = {
  title: "Gallery - Before & After",
  description:
    "See the amazing before and after transformations at PawfectGlow Grooming studio in Butwal, Nepal.",
};

const transformations = [
  {
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
    petName: "Snowball",
    breed: "Maltese",
    highlight: "From fluffy and tangled to a clean teddy-style finish.",
  },
  {
    before: "/images/before-2.jpg",
    after: "/images/after-2.jpg",
    petName: "Coco",
    breed: "Poodle",
    highlight: "A fresh trim and paw cleanup for a brighter, lighter look.",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-secondary py-16 text-center">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-extrabold text-foreground">
            Before & After Gallery
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            See the amazing transformations our groomers create
          </p>
        </div>
      </section>

      {/* Interactive Before/After Showcase */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <BeforeAfterShowcase transformations={transformations} />
        </div>
      </section>
    </>
  );
}
