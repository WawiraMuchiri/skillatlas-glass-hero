import skillatlasIcon from "@/assets/skillatlas-icon.png";

const BrandLogo = ({ className = "" }: { className?: string }) => (
  <a href="/" className={`inline-flex items-center gap-2.5 font-body text-3xl font-bold tracking-tight ${className}`}>
    <img src={skillatlasIcon} alt="SkillAtlas icon" className="h-8 w-8 object-contain" />
    <span className="inline-flex items-baseline">
      <span className="text-white">S</span>
      <span className="text-white/80">kill</span>
      <span className="text-[#2dd4bf]">A</span>
      <span className="text-white/80">tlas</span>
    </span>
  </a>
);

export default BrandLogo;
