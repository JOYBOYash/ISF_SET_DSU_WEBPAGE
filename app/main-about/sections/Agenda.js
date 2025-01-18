import React from "react";

const Agenda = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900/10 to-blue-500/20 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">IETE Students Forum (ISF)</h1>
        <h2 className="text-2xl font-semibold text-blue-200 mb-6">
          Our Agenda
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          At the <strong>IETE Students Forum (ISF)</strong>, we are dedicated to
          inspiring innovation, fostering research, and building a community of
          future-ready technologists and engineers. Here’s how we aim to make a
          difference:
        </p>
        <ul className="text-left space-y-4 mb-8">
          <li className="flex items-center">
            <span className="text-white text-xl mr-3">★</span>
            <p>
              The IETE conducts both the Graduateship (AMIETE) Examination and
              Diploma (DIPIETE) Examination in Electronics & Telecommunication
              and Computer Science & Engineering streams.
            </p>
          </li>
          <li className="flex items-center">
            <span className="text-white text-xl mr-3">★</span>
            <p>
              The IETE conducts and sponsors technical meetings, conferences,
              symposia, and exhibitions all over India, publishes technical
              journals and provides continuing education as well as career
              advancement opportunities to its members.
            </p>
          </li>
          <li className="flex items-center">
            <span className="text-white text-xl mr-3">★</span>
            <p>
              The Institution is known for providing leadership oppurtunities in
              Scientific and Technical areas of direct importance to the
              national development and economy.
            </p>
          </li>
          <li className="flex items-center">
            <span className="text-white text-xl mr-3">★</span>
            <p>
              The IETE focuses on advancement of the Science and Technology of
              Electronics, Telecommunication, Computers, Information Technology
              and related areas.
            </p>
          </li>
          <li className="flex items-center">
            <span className="text-white text-xl mr-3">★</span>
            <p>
              Equip Engineering level students with innovation and leadership
              qualities to make them an effecient asset to the community and
              human well-being.
            </p>
          </li>
        </ul>
        <p className="text-lg italic mb-8">
          Together, let’s create a vibrant, innovative, and collaborative
          community that shapes the future of engineering and technology.
        </p>
      </div>
    </section>
  );
};

export default Agenda;
