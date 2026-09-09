import React from 'react';

const SKILLS_DATA = {
  Languages: [
    { name: 'Python', icon: '🐍' },
    { name: 'SQL / T-SQL', icon: '🗄️' },
    { name: 'Java', icon: '☕' },
    { name: 'TypeScript', icon: '🟦' },
    { name: 'JavaScript', icon: '🟨' }
  ],
  'Data & Infra': [
    { name: 'Kafka', icon: '🔀' },
    { name: 'Azure', icon: '☁️' },
    { name: 'Spark', icon: '⚡' },
    { name: 'Databricks', icon: '🧱' },
    { name: 'dbt', icon: '🔧' },
    { name: 'Airflow', icon: '🌬️' },
    { name: 'Snowflake', icon: '❄️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '☸️' }
  ],
  'ML & AI': [
    { name: 'PyTorch', icon: '🔥' },
    { name: 'XGBoost', icon: '🌲' },
    { name: 'scikit-learn', icon: '🤖' },
    { name: 'LangChain', icon: '🔗' },
    { name: 'NLP', icon: '💬' },
    { name: 'Clustering', icon: '🧩' }
  ],
  Frameworks: [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'FastAPI', icon: '🚀' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Flask', icon: '🍶' }
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-8 transition-colors flex flex-col gap-8">
        {Object.entries(SKILLS_DATA).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4 glow-text">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <div key={skill.name} className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 text-md font-medium text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <span className="text-lg">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 