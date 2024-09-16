import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
const About = () => {
    return (
      <section className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
          About <span className="text-neutral-500">Me</span>
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="flex items-center justify-center lg:justify-start">
              <img 
                src={aboutImg} 
                alt="A brief description of the image" 
                className="rounded-2xl max-w-full h-auto" 
              />
            </div>
          </div>
  
          {/* Text Section */}
          <div className="w-full lg:w-1/2 p-6 flex items-center">
            <p className="text-center lg:text-left">{ABOUT_TEXT}</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;