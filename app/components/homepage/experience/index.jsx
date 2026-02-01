// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
  {/* Left: GIF */}
  <div className="flex justify-center">
    <div className="self-center w-full max-w-lg">
      <AnimationLottie animationPath={experience} />
    </div>
  </div>

  {/* Right: Experience cards */}
  <div className="flex flex-col gap-6">
    {experiences.map(experience => (
      <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
        <div className="p-3 relative">
          <Image
            src="/blur-23.svg"
            alt="Hero"
            width={1080}
            height={200}
            className="absolute bottom-0 opacity-80"
          />
          <div className="flex justify-center">
            <p className="text-xs sm:text-sm text-orange-500">{experience.duration}</p>
          </div>
          <div className="flex items-center gap-x-8 px-3 py-5">
            <div className="text-orange-500 transition-all duration-300 hover:scale-125">
              {experience.icon}
            </div>
            <div>
              <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                {experience.title}
              </p>
              <p className="text-sm sm:text-base">{experience.company}</p>
            </div>
          </div>
        </div>
      </GlowCard>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default Experience;