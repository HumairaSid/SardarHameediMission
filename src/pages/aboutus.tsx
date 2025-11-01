import founderImage from '../assets/founder_iftikhar.jpg'

const AboutUs = () => {
  return (
    <section className="bg-linear-to-b from-blue-50 to-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">
          About Us
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          “Creating Equal Opportunities Through Knowledge and Care.”
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Established in <strong>1988</strong>,{" "}
              <span className="text-blue-700 font-semibold">
                Sardar Hameedi Taleemi Wa Samaji Mission
              </span>{" "}
              is a non-governmental organization dedicated to empowering
              underprivileged communities through{" "}
              <span className="text-green-700 font-medium">
                education, health
              </span>
              , and{" "}
              <span className="text-pink-700 font-medium">
                women empowerment
              </span>
              . The mission began by promoting elementary education among poor
              children and gradually expanded to include skill development,
              youth training, and environmental awareness programs.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              We conduct healthcare camps, cultural events, and awareness drives
              to build an informed and responsible society. Our goal is to
              create a community where every individual is{" "}
              <span className="font-semibold">educated, self-reliant</span>, and
              capable of contributing to sustainable development.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-600">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Vision
            </h3>
            <p className="text-gray-700 mb-6">
              To create an educated, empowered, and self-reliant society where
              women, youth, and children actively contribute to sustainable
              development and social harmony.
            </p>

            <h3 className="text-2xl font-semibold text-green-700 mb-3">
              Mission
            </h3>
            <p className="text-gray-700">
              To promote education, skill development, healthcare, and
              environmental awareness while empowering women and youth through
              training, self-help initiatives, and community participation.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold text-blue-500 mb-10">
             Our Visionary Founder
          </h3>
          <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 border-l-4 border-purple-950 flex flex-col md:flex-row items-center gap-18">
            <img src={founderImage}
      alt="Iftikhar Anees Siddiqui"
      className="w-48 h-48 object-cover rounded-full border-4 border-blue-600 shadow-md"
      loading="lazy"
    />
             <div className="text-left">
      <h4 className="text-2xl font-semibold text-blue-800 mb-1">
        Iftikhar Anees Siddiqui
      </h4> <h6 className="text-blue-750">  — Renowned Educator & Advocate for Women Empowerment</h6>
      <p className="text-gray-600 mb-4 italic">Founder & Social Reformer</p>

      <p className="text-gray-700 leading-relaxed mb-4">
        With a lifelong commitment to inclusive education and community development, Mr. Siddiqui has transformed lives across rural India through grassroots initiatives and nonprofit leadership.
      </p>

      <h5 className="text-lg font-semibold text-green-700 mb-2">
        Key Achievements:
      </h5>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          Founded over <strong>40+ learning and vocational centers</strong> across District Amroha, Uttar Pradesh, India.
        </li>
        <li>
          Spearheaded <strong>women’s self-help group (SHG)</strong> programs, empowering <strong>2,000+ women</strong> toward financial independence.
        </li>
        <li>
          Organized <strong>free health and awareness camps</strong> for underserved families in multiple rural communities.
        </li>
        <li>
          Authored <strong>inspirational and moral Urdu stories</strong> for children as part of the Urdu Literacy Program.
        </li>
        <li>
          Honored for <strong>Outstanding Contribution to Community Development</strong> by state-level NGOs.
        </li>
        <li>
          Recognized for <strong>Excellence in Educational Outreach</strong> and nonprofit impact.
        </li>
      </ul>
    </div>
          </div>
       
  


        </div>
      </div>
    </section>
  );
};

export default AboutUs;
