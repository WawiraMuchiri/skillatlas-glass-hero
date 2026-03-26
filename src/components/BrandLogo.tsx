const BrandLogo = ({ className = "" }: { className?: string }) => (
  <a href="/" className={`inline-flex items-baseline font-body text-3xl font-bold tracking-tight ${className}`}>
    <span className="text-white">S</span>
    <span className="text-white/80">kill</span>
    <span className="text-[#2dd4bf]">A</span>
    <span className="text-white/80">tlas</span>
  </a>
);

export default BrandLogo;
