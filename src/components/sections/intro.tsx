import { Socials } from "./socials";

export function Intro() {
  return (
    <div className="flex items-center flex-wrap justify-between mt-6">
      <h1 className="font-semibold text-xl md:text-2xl tracking-tight">Hi <span className="wave">👋</span> I'm <span className="inline-block transition-colors duration-200 hover:text-chart-2 dark:hover:text-gitmap-ocean-4 cursor-default">Abu Qais</span></h1>
      <Socials />
    </div>
  );
}
