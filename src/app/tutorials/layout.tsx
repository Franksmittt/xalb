import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tutorials & How-To Guides',
  description: 'Learn professional techniques for vehicle wrapping, vinyl application, and signage installation. Expert guides from Xsphere.',
};

export default function TutorialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

