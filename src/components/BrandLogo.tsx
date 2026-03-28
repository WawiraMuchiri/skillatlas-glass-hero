import skillatlasLogo from "@/assets/skillatlas-compass-logo.svg";

const BrandLogo = ({ className = "" }: { className?: string }) => (
  <a href="/" className={`inline-flex items-center gap-4 ${className}`}>
    <img src={skillatlasLogo} alt="SkillAtlas icon" className="h-10 w-10 md:h-16 md:w-16 object-contain" />
    <span className="inline-flex items-baseline text-[1.75rem] font-bold" style={{ letterSpacing: '-0.01em' }}>
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-[#00E5FF] text-[#00E5FF] text-[1rem] leading-none">S</span><span className="text-[#FFFFFF]">kill</span>
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-[#00E5FF] text-[#00E5FF] text-[1rem] leading-none ml-[0.04em]">A</span><span className="text-[#FFFFFF]">tlas</span>
    </span>
  </a>
);

export default BrandLogo;
