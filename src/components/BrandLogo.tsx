import skillatlasIcon from "@/assets/skillatlas-icon.png";

const BrandLogo = ({ className = "" }: { className?: string }) => (
  <a href="/" className={`inline-flex items-center gap-4 ${className}`}>
    <img src={skillatlasIcon} alt="SkillAtlas icon" className="h-[2.4rem] w-[2.4rem] object-contain" />
    <span className="inline-flex items-baseline text-[1.75rem] font-bold" style={{ letterSpacing: '-0.01em' }}>
      <span className="text-[#FFFFFF]">Skill</span>
      <span className="text-[#00E5FF] ml-[0.04em]">Atlas</span>
    </span>
  </a>
);

export default BrandLogo;
