'use client';

import ConditionalLayout from './ConditionalLayout';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <ConditionalLayout>{children}</ConditionalLayout>;
}

