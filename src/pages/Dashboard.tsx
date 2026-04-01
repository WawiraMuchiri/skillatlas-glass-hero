import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, LogOut, Settings, LayoutDashboard, Zap, Map, Briefcase, FileText, ChevronRight, Check, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import BrandLogo from "@/components/BrandLogo";

const sidebarMain = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "My Skills", icon: Zap },
  { label: "Learning Roadmap", icon: Map },
  { label: "Job Opportunities", icon: Briefcase },
];

const sidebarAccount = [
  { label: "Resume Summary", icon: FileText },
  { label: "Settings", icon: Settings },
];

const notifications = [
  { text: "New job match: Senior Software Architect at WhatJobs", time: "2 hours ago", color: "bg-[#2dd4bf]" },
  { text: "Phase 1 resource unlocked — start learning now!", time: "Yesterday", color: "bg-[#fbbf24]" },
  { text: "Your role fit score improved by 8% this week", time: "3 days ago", color: "bg-[#2dd4bf]" },
];

const roadmapPhases = [
  { phase: 1, title: "Foundational Skills", duration: "2 months", tags: ["programming", "database design"], status: "Start Phase →", locked: false },
  { phase: 2, title: "Agile and Leadership", duration: "1 month", tags: ["agile", "leadership"], status: "Locked — complete Phase 1 first", locked: true },
  { phase: 3, title: "Software Architecture", duration: "2 months", tags: ["architecture"], status: "Locked", locked: true },
];

const jobs = [
  { title: "Senior Software Architect", company: "WhatJobs Direct", location: "Nyeri" },
  { title: "Software Architect", company: "Crossover", location: "Nairobi" },
  { title: "Lead Software Architect", company: "WhatJobs Direct", location: "Embu" },
];

const matchedSkills = ["Pytest", "API testing", "Postman"];
const missingSkills = ["database design", "agile methods", "cloud platforms"];

const Dashboard = () => {
  const navigate = useNavigate();
  const [notifVisible, setNotifVisible] = useState(true);
  const userName = "Rosalyne";
  const userInitials = "RM";

  return (
    <div className="flex min-h-screen bg-[#f8fffe]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-[#0f2027] text-white min-h-screen sticky top-0">
        <div className="p-5 border-b border-white/10">
          <BrandLogo />
          <p className="text-xs text-white/50 mt-1">Career Intelligence</p>
        </div>

        <div className="px-4 py-4 border-b border-white/10">
          <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Account</p>
          <p className="text-sm font-medium text-white/90">jacob.makau@gmail.com</p>
          <p className="text-xs text-[#2dd4bf]">Target: Software Architect</p>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          <p className="text-[10px] uppercase tracking-wider text-white/40 px-3 mb-2">Main</p>
          {sidebarMain.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                item.active ? "bg-white/10 text-[#2dd4bf] font-semibold" : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.active && <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf]" />}
              <item.icon size={16} />
              {item.label}
            </button>
          ))}

          <p className="text-[10px] uppercase tracking-wider text-white/40 px-3 mt-6 mb-2">Account</p>
          {sidebarAccount.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]" />
              <item.icon size={16} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors"
          >
            <LogOut size={16} />
            Logout →
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-40 bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#0f2027]">
            Good morning, {userName} 👋
          </h2>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Bell size={20} className="text-[#0f2027]" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#fbbf24] rounded-full border-2 border-white" />
            </button>
            <div className="w-9 h-9 rounded-full bg-[#0f2027] flex items-center justify-center text-white text-xs font-bold">
              JM
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 max-w-6xl mx-auto w-full space-y-6">
          {/* Heading */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#0f2027] font-display">
              Your Career <span className="text-[#2dd4bf]">Intelligence</span> Dashboard
            </h1>
            <p className="text-sm text-gray-500">Here's a snapshot of your progress toward Software Architect</p>
          </div>

          {/* Notifications */}
          {notifVisible && (
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-[#0f2027]">Notifications</h3>
                <button className="text-xs text-[#2dd4bf] hover:underline font-medium">Mark all read</button>
              </div>
              <div className="space-y-3">
                {notifications.map((n, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
                    <span className={`w-2.5 h-2.5 rounded-full ${n.color} shrink-0`} />
                    <div className="flex-1">
                      <p className="text-sm text-[#0f2027]">{n.text}</p>
                      <p className="text-xs text-gray-400">{n.time}</p>
                    </div>
                    <span className={`w-2 h-2 rounded-full ${n.color}`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-[#2dd4bf]/20 bg-[#f0fdfa] p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0f2027]">Matched<br />Skills</p>
                <span className="w-3 h-3 rounded-full bg-[#2dd4bf]" />
              </div>
              <p className="text-4xl font-bold text-[#2dd4bf]">5</p>
              <p className="text-xs text-gray-500 mt-1">of 46 total skills matched</p>
            </div>

            <div className="rounded-xl border border-[#fbbf24]/20 bg-[#fffbeb] p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0f2027]">Role Fit<br />Score</p>
                <span className="w-3 h-3 rounded-full bg-[#fbbf24]" />
              </div>
              <p className="text-4xl font-bold text-[#fbbf24]">42%</p>
              <p className="text-xs text-gray-500 mt-1">toward Software Architect</p>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0f2027]">Missing<br />Skills</p>
                <span className="w-3 h-3 rounded-full bg-red-400" />
              </div>
              <p className="text-4xl font-bold text-red-400">10</p>
              <p className="text-xs text-gray-500 mt-1">skills to close the gap</p>
            </div>
          </div>

          {/* Overall Progress */}
          <div className="rounded-xl bg-[#0f2027] p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-wider text-[#fbbf24] mb-1">Overall Progress</p>
            <div className="flex items-end justify-between mb-1">
              <div>
                <h3 className="text-lg font-bold">Software Architect Readiness</h3>
                <p className="text-sm text-white/60">Keep going — you're almost halfway there!</p>
              </div>
              <p className="text-4xl font-bold text-[#fbbf24]">42%</p>
            </div>
            <div className="mt-3 h-3 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-[#2dd4bf] to-[#fbbf24]" style={{ width: "42%" }} />
            </div>
          </div>

          {/* Two Column: Roadmap + Jobs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Learning Roadmap */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-[#0f2027]">Learning Roadmap</h3>
                <button className="text-xs text-[#2dd4bf] hover:underline font-medium">View all →</button>
              </div>
              <div className="space-y-5">
                {roadmapPhases.map((phase) => (
                  <div key={phase.phase} className="flex gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      phase.locked ? "bg-gray-100 text-gray-400" : "bg-[#2dd4bf]/15 text-[#2dd4bf]"
                    }`}>
                      {phase.phase}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-[#0f2027]">{phase.title}</p>
                      <p className="text-xs text-gray-400">{phase.duration}</p>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {phase.tags.map((tag) => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full border border-gray-200 text-gray-500">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className={`text-xs mt-2 ${phase.locked ? "text-gray-400" : "text-[#2dd4bf] font-medium cursor-pointer hover:underline"}`}>
                        {phase.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              {/* Job Opportunities */}
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#0f2027]">Job Opportunities</h3>
                  <button className="text-xs text-[#2dd4bf] hover:underline font-medium">View all →</button>
                </div>
                <div className="space-y-3">
                  {jobs.map((job, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="text-sm font-semibold text-[#2dd4bf]">{job.title}</p>
                        <p className="text-xs text-gray-500">{job.company}</p>
                        <p className="text-xs text-gray-400">{job.location}</p>
                      </div>
                      <ChevronRight size={16} className="text-[#2dd4bf]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Snapshot */}
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-bold text-[#0f2027] mb-3">Your Skills Snapshot</h3>
                <div className="grid grid-cols-2 gap-2">
                  {matchedSkills.map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#2dd4bf]/15 flex items-center justify-center">
                        <Check size={12} className="text-[#2dd4bf]" />
                      </span>
                      <span className="text-gray-700 text-xs">{s}</span>
                    </div>
                  ))}
                  {missingSkills.map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm">
                      <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                        <X size={12} className="text-red-400" />
                      </span>
                      <span className="text-gray-700 text-xs">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
