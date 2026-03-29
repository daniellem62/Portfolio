"use client"

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiTailwindcss,
  SiVite,
  SiJest,
  SiPostman,
  SiSupabase,
  SiGit,
  SiFigma,
  SiJira,
  SiEslint,
  SiPrettier,
  SiTestinglibrary,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiStorybook,
  SiSass,
} from "react-icons/si"
import { FaAws } from "react-icons/fa";

const icons = [
  { Icon: SiJavascript },
  { Icon: SiTypescript },
  { Icon: SiReact },
  { Icon: SiNextdotjs },
  { Icon: SiNodedotjs },
  { Icon: SiExpress },
  { Icon: SiPostgresql },
  { Icon: SiDocker },
  { Icon: SiGithubactions },
  { Icon: SiVercel },
  { Icon: SiTailwindcss },
  { Icon: SiVite },
  { Icon: SiJest },
  { Icon: SiPostman },
  { Icon: SiSupabase },
  { Icon: SiGit },
  { Icon: SiFigma },
  { Icon: SiJira },
  { Icon: SiEslint },
  { Icon: SiPrettier },
  { Icon: SiTestinglibrary },
  { Icon: SiHtml5 },
  { Icon: SiCss3 },
  { Icon: FaAws },
  { Icon: SiStorybook },
]

export function ScrollingTechIcons() {
  return (
    <div className="relative w-full overflow-hidden bg-white/50 dark:bg-gray-900/50 py-8 mt-8">
      <div className="flex animate-scroll-loop">
        {/* First set of icons */}
        <div className="flex space-x-16 items-center px-8">
          {icons.map((item, index) => (
            <div key={index} className="flex items-center">
              <item.Icon className="w-10 h-10 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300" />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless scrolling */}
        <div className="flex space-x-16 items-center px-8">
          {icons.map((item, index) => (
            <div key={`duplicate-${index}`} className="flex items-center">
              <item.Icon className="w-10 h-10 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
