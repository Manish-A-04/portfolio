export default function Milestones() {
  const certifications = [
    {
      title: "TensorFlow Keras Bootcamp",
      issuer: "OpenCV University",
      link: "https://courses.opencv.org/certificates/fd9dde7bf8024e15be8b5eb88fc807d2",
      tag: "Certificate",
    },
    {
      title: "MLOps Bootcamp",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-900ea863-1dab-4574-a4fb-cc75aff87fe0/",
      tag: "Certificate",
    },
    {
      title: "Machine Learning Complete Course",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-de647704-7b7e-44e7-b2c8-a960c16933e8/",
      tag: "Certificate",
    },
    {
      title: "Data Science Complete Course",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-938f8da6-984f-49b9-8b7c-56f6a4eb3184/",
      tag: "Certificate",
    },
  ];

  return (
    <section className="w-full px-margin-mobile md:px-margin-desktop" id="milestones">
      <div className="py-section-gap border-t border-fg/30 max-w-6xl mx-auto w-full">
        <h2 className="font-display tracking-wide font-extrabold text-3xl md:text-4xl mb-16">Certifications &amp; Milestones</h2>
        <div className="space-y-10 max-w-4xl">

          {/* Education */}
          <div className="flex flex-col md:flex-row justify-between gap-3 pb-8 border-b border-fg/10 border-l-2 border-l-accent/30 pl-4 md:border-l-0 md:pl-0">
            <div>
              <p className="font-display tracking-wide font-bold text-xl md:text-2xl">B.Tech. in AI and Data Science</p>
              <p className="font-body-lg text-base md:text-lg font-normal text-fg/60 mt-2">Kings Engineering College – Chennai &nbsp;|&nbsp; CGPA: 8.3/10</p>
            </div>
            <p className="font-display tracking-widest text-sm font-bold uppercase text-accent shrink-0">Sep 2022 — Apr 2026</p>
          </div>

          {/* Certificates */}
          {certifications.map((cert, idx) => (
            <div key={idx} className="flex flex-col md:flex-row justify-between gap-3 pb-8 border-b border-fg/10 border-l-2 border-l-accent/30 pl-4 md:border-l-0 md:pl-0">
              <div>
                <p className="font-display tracking-wide font-bold text-xl md:text-2xl">{cert.title}</p>
                <p className="font-body-lg text-base md:text-lg font-normal text-fg/60 mt-2">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-display tracking-widest font-bold uppercase text-xs text-accent hover:opacity-70 transition-opacity mt-3"
                >
                  View Certificate →
                </a>
              </div>
              <p className="font-display tracking-widest text-sm font-bold uppercase text-accent shrink-0">{cert.tag}</p>
            </div>
          ))}

          {/* Vice President */}
          <div className="flex flex-col md:flex-row justify-between gap-3 pb-8 border-b border-fg/10 border-l-2 border-l-accent/30 pl-4 md:border-l-0 md:pl-0">
            <div>
              <p className="font-display tracking-wide font-bold text-xl md:text-2xl">Vice President, AI Club</p>
              <p className="font-body-lg text-base md:text-lg font-normal text-fg/60 mt-2">Organized AI and machine learning seminars, mentored junior students, and conducted hands-on technical sessions.</p>
            </div>
            <p className="font-display tracking-widest text-sm font-bold uppercase text-accent shrink-0">College</p>
          </div>

          {/* Chatbot Competition */}
          <div className="flex flex-col md:flex-row justify-between gap-3 border-l-2 border-l-accent/30 pl-4 md:border-l-0 md:pl-0">
            <div>
              <p className="font-display tracking-wide font-bold text-xl md:text-2xl">Chatbot Challenge Runner-Up</p>
              <p className="font-body-lg text-base md:text-lg font-normal text-fg/60 mt-2">Secured 2nd place in a chatbot development competition at Sairam Institute by building a functional chatbot within 60 minutes.</p>
            </div>
            <p className="font-display tracking-widest text-sm font-bold uppercase text-accent shrink-0">Competition</p>
          </div>

        </div>
      </div>
    </section>
  );
}
