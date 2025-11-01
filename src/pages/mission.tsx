import news1 from "../assets/shmission1.jpg";
import news2 from "../assets/shmission6.jpg";
import news3 from "../assets/shmission2.jpg";
import news4 from "../assets/shmission7.jpg";

const Mission = () => {
  const initiatives = [
    {
      title: "Education Support",
      color: "border-blue-500 text-blue-700",
      description:
        "Establishing schools and literacy programs to provide free, quality education for underprivileged children.",
    },
    {
      title: "Women Empowerment",
      color: "border-pink-500 text-pink-700",
      description:
        "Conducting skill development, vocational training, and SHG formation to promote financial independence among women.",
    },
    {
      title: "Youth Development",
      color: "border-purple-500 text-purple-700",
      description:
        "Offering leadership and soft-skill training to help youth become confident, capable change-makers.",
    },
    {
      title: "Health Awareness",
      color: "border-green-500 text-green-700",
      description:
        "Organizing free health camps, hygiene workshops, and nutrition sessions for community well-being.",
    },
    {
      title: "Environmental Initiatives",
      color: "border-teal-500 text-teal-700",
      description:
        "Running awareness drives, tree plantation, and clean environment campaigns to promote sustainability.",
    },
  ];

  const newsItems = [news1, news2, news3, news4];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 px-6 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-700 mb-4">
          Our Mission & Core Initiatives
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Empowering communities through education, health, and empowerment
          programs for sustainable and inclusive growth.
        </p>

        {/* Initiatives Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((item) => (
            <div
              key={item.title}
              className={`bg-white shadow-md hover:shadow-xl transition-shadow rounded-2xl p-6 border-t-4 ${item.color}`}
            >
              <h3 className={`text-2xl font-semibold mb-3 ${item.color.split(" ")[1]}`}>
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

        {/* News Section */}
        <div className="relative w-full overflow-hidden mt-20">
          <h6 className="text-3xl md:text-2xl font-bold text-center text-blue-600 mb-10">
            Sardar Hameedi Taleemi Samaji Mission — Real Impact, Real Stories
          </h6>

          <div className="relative max-w-6xl mx-auto">
            <div
              id="carousel"
              className="flex animate-slide gap-6 px-6 md:px-0"
              style={{ animation: "slide 25s linear infinite" }}
            >
              {newsItems.map((img, idx) => (
                <div
                  key={idx}
                  className="min-w-[280px] sm:min-w-[350px] md:min-w-[450px] bg-white shadow-md rounded-2xl overflow-hidden transform hover:scale-105 transition-transform"
                >
                  <img
                    src={img}
                    alt={`Sardar Hameedi Taleemi Mission News ${idx + 1}`}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Gradient Fades on Carousel Edges */}
            <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>

          <p className="text-center text-gray-600 mt-10 text-lg">
            Together we’re building stronger, healthier, and more educated communities.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mt-20 max-w-3xl mx-auto bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-semibold text-blue-800 mb-4">
            Our Vision for the Future
          </h3>
          <ul className="text-left text-gray-700 space-y-3 list-disc list-inside">
            <li>Expand educational and vocational centers in rural regions.</li>
            <li>
              Strengthen women’s SHGs and provide leadership training for
              financial independence.
            </li>
            <li>
              Collaborate with government and corporates for program
              sustainability.
            </li>
            <li>
              Introduce digital learning and awareness programs for wider reach.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mission;
