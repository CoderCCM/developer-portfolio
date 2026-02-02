// @flow strict
import * as React from 'react';
import Link from 'next/link';
import { timeConverter } from '@/utils/time-converter';

function ResearchCard({ paper }) {
  return (
    <div className="overflow-hidden border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg flex flex-col">

      {/* Top: Title + Date */}
      <div className="px-4 py-3 bg-gradient-to-r from-[#0a0d37] to-[#0d1224] flex flex-col">
        <Link href={paper.url}>
          <p className="text-white text-lg lg:text-xl font-semibold hover:text-orange-500 cursor-pointer">
            {paper.title}
          </p>
        </Link>
        <p className="text-orange-500 text-sm mt-1">{timeConverter(paper.published_at)}</p>
      </div>

      {/* Abstract: fixed height & scrollable */}
      <div className="px-4 py-3 text-[#d3d8e8] text-sm lg:text-base flex-1 overflow-y-auto max-h-48 hide-scrollbar">
        {paper.abstract}
      </div>

      {/* Keywords */}
      <div className="px-4 py-3 border-t border-indigo-900 font-mono text-xs md:text-sm lg:text-base">
        <div>
          <span className="text-white">keywords:</span>
          <span className="text-gray-400"> [</span>
          {paper.keywords.map((kw, i) => (
            <React.Fragment key={i}>
              <span className="text-amber-300">{kw}</span>
              {i !== paper.keywords.length - 1 && <span className="text-gray-400">, </span>}
            </React.Fragment>
          ))}
          <span className="text-gray-400">]</span>
        </div>
        <div className="mt-2">
          <Link href={paper.url} className="text-orange-500 hover:underline">
            Read Full Paper
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResearchCard;
