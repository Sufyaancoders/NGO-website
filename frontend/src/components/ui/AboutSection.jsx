import { Button } from "@/components/ui/button";
import aboutImage from "../../assets/aboutimages.jpg";
import badge from "../../assets/logo/logo_page-0001.jpg";

const AboutSection = () => {
  return (
    <section className="py-15 my-16 px-4 bg-yellow-500">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Children we help"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -right-6 -bottom-6  p-4 ">
              <img
                src={badge}
                alt="Kids House Badge"
                className="w-24 h-24"
              />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">About Us</h2>
            <p className="text-white mb-4 leading-relaxed">
              Kids House is dedicated to transforming lives through compassion and action. 
              Since our founding, we have been committed to providing essential resources, 
              education, and support to children and families in need across underserved communities.
            </p>
            <p className="text-white mb-4 leading-relaxed">
              Our mission extends beyond immediate relief. We believe in creating sustainable 
              change by empowering communities with the tools they need to thrive. Through our 
              programs in education, healthcare, and community development, we've touched thousands 
              of lives and continue to expand our reach.
            </p>
            <p className="text-white mb-6 leading-relaxed">
              Every contribution, no matter how small, creates a ripple effect of positive change. 
              Together, we're building a brighter future where every child has the opportunity to 
              reach their full potential.
            </p>
            <Button variant="default" size="lg">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default AboutSection;
