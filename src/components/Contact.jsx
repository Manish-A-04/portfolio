export default function Contact() {
  return (
    <section className="py-section-gap border-t border-fg/30" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <h2 className="font-display font-extrabold text-headline-lg-mobile md:text-headline-lg mb-8">Let's Connect</h2>
        <p className="font-body-lg text-fg/70 max-w-2xl mx-auto mb-12">
          I'm always interested in hearing about new projects, technical challenges, or research collaborations. 
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <a className="flex items-center gap-2 font-display font-bold uppercase tracking-widest hover:text-accent transition-colors" href="mailto:hello@manish.ai">
            <span className="material-symbols-outlined">mail</span> Email
          </a>
          <a className="flex items-center gap-2 font-display font-bold uppercase tracking-widest hover:text-accent transition-colors" href="#">
            <span className="material-symbols-outlined">link</span> LinkedIn
          </a>
          <a className="flex items-center gap-2 font-display font-bold uppercase tracking-widest hover:text-accent transition-colors" href="#">
            <span className="material-symbols-outlined">code</span> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
