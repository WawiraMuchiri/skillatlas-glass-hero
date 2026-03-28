import skillatlasLogo from "@/assets/skillatlas-compass-logo.svg";

const BrandLogo = ({ className = "" }: { className?: string }) => (
  <a href="/" className={`inline-flex items-center gap-4 ${className}`}>
    <img src={skillatlasLogo} alt="SkillAtlas icon" className="h-10 w-10 md:h-16 md:w-16 object-contain" />
    <span className="inline-flex items-baseline text-[1.75rem] font-bold" style={{ letterSpacing: '-0.01em' }}>
      <span className="text-[#00E5FF]">S</span><span className="text-[#FFFFFF]">kill</span>
      <span className="text-[#00E5FF] ml-[0.04em]">A</span><span className="text-[#FFFFFF]">tlas</span>
    </span>
  </a>
);

export default BrandLogo;
