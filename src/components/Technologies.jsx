import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
    <h2 className="my-20 text-center text-4xl">Technologies</h2>
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap justify-center items-center gap-6  ">
        <div className="border-4 border-neutral-800 p-6 rounded-2xl">
          <RiReactjsLine className="text-5xl text-cyan-400" aria-label="React" />
        </div>
        <div className="border-4 border-neutral-800 p-6 rounded-2xl">
          <TbBrandNextjs className="text-5xl text-cyan-400" aria-label="Next.js" />
        </div>
        <div className="border-4 border-neutral-800 p-6 rounded-2xl">
          <SiMongodb className="text-5xl text-cyan-400" aria-label="MongoDB" />
        </div>
        <div className="border-4 border-neutral-800 p-6 rounded-2xl">
          <DiRedis className="text-5xl text-cyan-400" aria-label="Redis" />
        </div>
        <div className="border-4 border-neutral-800 p-6 rounded-2xl">
          <FaNodeJs className="text-5xl text-cyan-400" aria-label="Node.js" />
        </div>
        <div className="border-4 border-neutral-800 p-6 rounded-2xl">
          <BiLogoPostgresql className="text-5xl text-cyan-400" aria-label="Node.js" />
        </div>
      </div>
    </div>
  </div>
);
};

export default Technologies;
