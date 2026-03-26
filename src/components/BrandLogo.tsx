import skillatlasIcon from "@/assets/skillatlas-icon.png";

const BrandLogo = ({ className = "" }: { className?: string }) => (
  <a href="/" className={`inline-flex items-center gap-3 text-3xl font-bold tracking-tighter ${className}`}>
    <img src={skillatlasIcon} alt="SkillAtlas icon" className="h-10 w-10 object-contain" />
    <span className="inline-flex items-baseline">
      <span className="text-white">Skill</span>
      <span className="text-[#00E5FF]">Atlas</span>
    </span>
  </a>
);

export default BrandLogo;
