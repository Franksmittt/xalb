import Link from 'next/link';
import Image from 'next/image';
import type { CatalogService } from '@/data/catalog';
import { serviceCardImage, servicePath } from '@/data/catalog';

type Props = {
  service: CatalogService;
  showCapacity?: boolean;
};

export default function ServiceCard({ service, showCapacity = true }: Props) {
  return (
    <Link
      href={servicePath(service)}
      className="group flex h-full flex-col overflow-hidden border border-line bg-surface transition-colors hover:border-accent"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
        <Image
          src={serviceCardImage(service)}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          unoptimized
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-foreground group-hover:text-accent sm:text-xl">
          {service.navLabel}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.tagline}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-steel">
          {service.leadTime}
          {showCapacity ? ` · ${service.capacity}` : ''}
        </p>
      </div>
    </Link>
  );
}
