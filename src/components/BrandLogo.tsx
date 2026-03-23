const BrandLogo = ({ className = "" }: { className?: string }) => (
  <a href="/" className={`inline-flex items-baseline font-body text-3xl font-bold tracking-tight ${className}`}>
    <span className="text-primary">S</span>
    <span className="text-[hsl(0,0%,20%)]">kill</span>
    <span className="text-accent">A</span>
    <span className="text-[hsl(0,0%,20%)]">tlas</span>
  </a>
);

export default BrandLogo;
