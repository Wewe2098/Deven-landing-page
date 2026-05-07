import React from 'react';


const featuredArticle = {
  title: 'The Mobility Moat: Engineering Trust in Digital Marketplaces',
  quote:
    '“In a zero-trust digital economy, the platform that successfully integrates verified data layers into the consumer journey doesn\'t just win on UX—it builds an impenetrable ecosystem moat.”',
  categories: ['#MarketplaceDynamics', '#Fintech', '#TrustArchitecture'],
  link: '/articles/the-mobility-moat',
};

const smallArticles = [
  {
    title: 'AI Insights',
    description:
      'Stay updated with shorter insights on AI transformation, capital shifts, and emerging marketplace signals.',
    link: '/articles/ai-insights',
  },
  {
    title: 'AI Insights',
    description:
      'Stay updated with shorter insights on AI transformation, capital shifts, and emerging marketplace signals.',
    link: '/articles/ai-insights',
  },
  {
    title: 'AI Insights',
    description:
      'Stay updated with shorter insights on AI transformation, capital shifts, and emerging marketplace signals.',
    link: '/articles/ai-insights',
  },
];

const StrategicInsightsSection: React.FC = () => {


  return (
    <section className="py-16 px-4 bg-white" id="strategic-insights">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">STRATEGIC INSIGHTS</h2>
        <p className="text-lg text-gray-600 mb-6">
          The Intersection of AI, Capital & Marketplace Evolution
        </p>
        <div className="bg-gray-100 rounded-lg p-8 shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-2">FEATURED ARTICLE</h3>
          <h4 className="text-2xl font-bold mb-4">{featuredArticle.title}</h4>
          <blockquote className="italic text-gray-700 mb-4">{featuredArticle.quote}</blockquote>
          <div className="mb-4">
            {featuredArticle.categories.map((cat) => (
              <span
                key={cat}
                className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2 mb-2"
              >
                {cat}
              </span>
            ))}
          </div>
          <a
            href={featuredArticle.link}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Read Full Insight →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {smallArticles.map((article, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg p-6 shadow-sm flex flex-col items-center"
            >
              <h5 className="font-semibold text-lg mb-2">{article.title}</h5>
              <p className="text-gray-600 mb-4 text-sm">{article.description}</p>
              <a
                href={article.link}
                className="mt-auto bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition text-sm"
              >
                Go to Article
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicInsightsSection;
