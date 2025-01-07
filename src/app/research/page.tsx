'use client';

import React from 'react';
import PdfViewer from '@/components/PdfViewer';

type TabId = 'powerbi' | 'agents' | 'interpreter' | 'ml';

interface ResearchPaper {
  title: string;
  pdfPath: string;
  audioPath: string;
}

type Papers = {
  [K in TabId]: ResearchPaper;
};

const ResearchPage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<TabId>('powerbi');

  const papers: Papers = {
    powerbi: {
      title: 'Power BI Analytics Development',
      pdfPath: '/media/pdfs/powerbi-analytics-development-a.pdf',
      audioPath: '/media/audio/power-bi-analytics-for-at-the-money-trading.mp3'
    },
    agents: {
      title: 'AI Agent Systems Research',
      pdfPath: '/media/pdfs/agents-research-b.pdf',
      audioPath: '/media/audio/ai-agent-systems-for-finance-and-macroeconomics.mp3'
    },
    interpreter: {
      title: 'Open Interpreter Integration',
      pdfPath: '/media/pdfs/open-interpreter-c.pdf',
      audioPath: '/media/audio/automating-workflows-with-open-interpreter.mp3'
    },
    ml: {
      title: 'Independent Machine Learning Research',
      pdfPath: '/media/pdfs/independent-ml-learning-model-d.pdf',
      audioPath: '/media/audio/independent-machine-learning-research-in-financial-trading.mp3'
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Research Papers</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of research papers exploring AI innovation, machine learning applications,
            and advanced analytics in financial systems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('powerbi')}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors
              ${activeTab === 'powerbi' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            Power BI Analytics Development
          </button>
          <button
            onClick={() => setActiveTab('agents')}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors
              ${activeTab === 'agents' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            AI Agent Systems Research
          </button>
          <button
            onClick={() => setActiveTab('interpreter')}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors
              ${activeTab === 'interpreter' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            Open Interpreter Integration
          </button>
          <button
            onClick={() => setActiveTab('ml')}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors
              ${activeTab === 'ml' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            Independent Machine Learning Research
          </button>
        </div>

        <div className="glass-card p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-white">{papers[activeTab].title}</h2>
          <PdfViewer src={papers[activeTab].pdfPath} />
        </div>
      </div>
    </div>
  );
};

export default ResearchPage; 