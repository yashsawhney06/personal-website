import React from 'react';

const PROJECTS = [
  {
    title: 'Crypto Volatility Forecasting (Coming Soon!)',
    image: '/crypto-project.png',
    description: 'Predicting cryptocurrency price movements and modeling market volatility using time series forecasting (LSTM, ARIMA) and financial risk models (GARCH).',
    tech: ['Python', 'Flask', 'React', 'LSTM Models'],
    github: null,
    demo: '#',
  },
  {
    title: 'NBA Shot Progression',
    image: '/nba-project.png',
    description: 'Developed a machine learning model using YOLOv8 for object detection and XGBoost for shot prediction. The system analyzes defender positions and player statistics to predict NBA shot success rates with accuracy.',
    tech: ['Python', 'OpenCV', 'Sklearn', 'NBA API'],
    github: 'https://github.com/yashsawhney06/nba-shot-progression',
    demo: '#',
  },
  {
    title: 'Personal Portfolio',
    image: '/personal-portfolio.png',
    description: 'A sleek, responsive portfolio website to showcase my work and skills.',
    tech: ['React', 'Tailwind CSS', 'HTML'],
    github: 'https://github.com/yashsawhney06/personal-website',
    demo: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Portfolio</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-2 duration-300 glow-card"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className={`h-40 bg-gray-200 dark:bg-gray-800 flex justify-center ${
              project.title === 'NBA Shot Progression' 
                ? 'items-center' 
                : project.title === 'Personal Portfolio'
                ? 'items-end'
                : 'items-center'
            }`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="object-cover h-full w-full" 
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg mb-2">
                {project.title === 'Crypto Volatility Forecasting (Coming Soon!)' ? (
                  <>
                    Crypto Volatility Forecasting <span className="text-sm font-normal">(Coming Soon!)</span>
                  </>
                ) : (
                  project.title
                )}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="inline-block px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-md text-sm font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors underline">GitHub</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resume Download Section */}
      <div className="text-center mt-16">
        <p className="text-cyan-400 font-medium text-lg mb-4">
          Take a look at my resume to learn more about my experience and skills!
        </p>
        <a 
          href="/Yash-Sawhney Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-cyan-400 text-gray-900 dark:text-white hover:bg-cyan-400 hover:text-gray-900 font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </a>
      </div>
    </section>
  );
} 