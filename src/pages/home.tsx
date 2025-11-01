
import { Link } from "react-router-dom";
import shmission1 from "../assets/shmission6.jpg"
import shmission2 from "../assets/shmission8.jpg"
import shmission3 from "../assets/shmission3.jpg"
import shmission4 from "../assets/shmission4.jpg"
import shmission5 from "../assets/shmission5.jpg"
import banner from "../assets/shmissionbanner.jpg"

const Home = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-green-50 text-gray-800">
      {/* Hero Section */}
      {/* Hero Section – Static Banner */}
<div
  className="relative h-[85vh] flex flex-col justify-center items-center text-center text-white"
  style={{
    backgroundImage:
      `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay for contrast */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 px-6 max-w-3xl">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-md">
         <h3 className="text-5xl md:text-6xl font-bold text-amber-200 mb-4">
          Sardar Hameedi Taleemi Wa Samaji Mission
        </h3> 
    </h1>
    <p className="text-lg md:text-xl mb-8 text-gray-100">
     Empowering Communities, Enriching Lives, Creating Equal Opportunities Through{" "}
      <span className="text-blue-300 font-semibold">Education</span>,{" "}
      <span className="text-pink-300 font-semibold">Women Empowerment</span>,
      and <span className="text-green-300 font-semibold">Health</span>.
    </p>

    {/* CTA Buttons */}
    <div className="flex justify-center gap-6">
      <Link
        to="/aboutus"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md transition-all"
      >
        Learn More
      </Link>
      <Link
        to="/mission"
        className="border border-white text-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-full transition-all"
      >
        Our Mission
      </Link>
    </div>
  </div>

  {/* Decorative gradient line at bottom */}
  <div className="absolute bottom-0 h-1 w-2/3 bg-gradient-to-r from-blue-600 via-green-500 to-pink-500 rounded-full"></div>
</div>


      {/* Quick Stats */}
      <div className="py-16 bg-white shadow-inner">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "30+", label: "Years of Service" },
            { num: "1000+", label: "Women Empowered" },
            { num: "10,000+", label: "Children Educated" },
            { num: "500+", label: "Health Camps" },
          ].map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-4xl font-bold text-blue-700">{stat.num}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Core Focus Areas */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
          Our Core Focus Areas
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Education for All",
              desc: "Free schooling, literacy campaigns, and learning support for underprivileged children.",
              color: "blue",
              icon: "🎓",
            },
            {
              title: "Women Empowerment",
              desc: "Skill-building, vocational training, and self-help groups promoting independence.",
              color: "pink",
              icon: "💪",
            },
            {
              title: "Health & Hygiene",
              desc: "Free health camps, sanitation drives, and nutrition awareness workshops.",
              color: "green",
              icon: "🩺",
            },
          ].map((area) => (
            <div
              key={area.title}
              className={`bg-white border-t-4 border-${area.color}-500 rounded-2xl shadow-lg hover:shadow-2xl p-6 text-center transition-all`}
            >
              <div className="text-5xl mb-4">{area.icon}</div>
              <h3
                className={`text-2xl font-semibold text-${area.color}-700 mb-3`}
              >
                {area.title}
              </h3>
              <p className="text-gray-700">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Achievements Carousel Section */}
<div className="relative w-full overflow-hidden bg-linear-to-b from-white to-blue-50 py-16">
  <h2 className="text-4xl font-bold text-center text-blue-500 mb-10">
    Our Achievements in Action
  </h2>

  <div className="relative max-w-6xl mx-auto">
    <div
      id="carousel"
      className="flex animate-slide gap-6 px-6 md:px-0"
      style={{ animation: "slide 25s linear infinite" }}
    >
      {[
        {
          img: shmission1,
          title: "Educating Over 10,000 Children",
        },
        {
          img:shmission4,
          title: "Empowering Rural Women Through Skill Training",
        },
        {
          img: shmission2,
          title: "Organizing Free Health & Hygiene Camps",
        },
        {
          img: shmission3,
          title: "Youth Development & Leadership Programs",
        },
        {
          img: shmission5,
          title: "Environmental Awareness & Tree Plantation",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] bg-white shadow-md rounded-2xl overflow-hidden transform hover:scale-105 transition-transform"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <div className="p-4 text-center">
            <p className="font-semibold text-blue-700 text-lg">{item.title}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Gradient Fades (edges) */}
    <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
    <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
  </div>

  {/* Optional static tagline */}
  <p className="text-center text-gray-600 mt-10 text-lg">
    Together we’re building stronger, healthier, and more educated communities.
  </p>
</div>



      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-pink-600 text-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Together, We Create a Sustainable Future
        </h3>
        <p className="text-lg mb-8">
          Join us in empowering women, educating children, and promoting health
          for all.
        </p>
       
      </div>
    </section>
  );
};

export default Home;
