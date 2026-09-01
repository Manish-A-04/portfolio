export default function Skills() {
  return (
    <section className="w-full px-margin-mobile md:px-margin-desktop" id="skills">
      <div className="py-section-gap border-t border-fg/30 max-w-6xl mx-auto w-full">
        <h2 className="font-display tracking-wide font-extrabold text-3xl md:text-4xl mb-16">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <div className="break-words">
            <h3 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-5">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {['Python', 'SQL', 'JavaScript'].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 font-body-lg text-base font-semibold text-fg/90 hover:border-accent/50 hover:bg-white/10 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="break-words">
            <h3 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-5">Libraries &amp; Frameworks</h3>
            <div className="flex flex-wrap gap-3">
              {['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'XGBoost', 'LightGBM', 'CatBoost', 'Prophet', 'Optuna', 'SHAP', 'Matplotlib', 'Seaborn', 'Plotly'].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 font-body-lg text-base font-semibold text-fg/90 hover:border-accent/50 hover:bg-white/10 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="break-words">
            <h3 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-5">Tools &amp; Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {['Excel', 'Power BI', 'PostgreSQL', 'Jupyter Notebook', 'Git & GitHub', 'Streamlit', 'MLflow'].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 font-body-lg text-base font-semibold text-fg/90 hover:border-accent/50 hover:bg-white/10 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="break-words md:col-span-2">
            <h3 className="font-display tracking-widest font-bold text-sm uppercase text-accent mb-5">Core Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Exploratory Data Analysis',
                'Predictive Modeling',
                'Time Series Forecasting',
                'Feature Engineering',
                'Data Cleaning & Preprocessing',
                'Dashboard & KPI Reporting',
                'Database Design',
                'SQL Querying',
              ].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 font-body-lg text-base font-semibold text-fg/90 hover:border-accent/50 hover:bg-white/10 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
