import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ExpandibleComp = ({ definition, example, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-3">
      <div className="flex items-start gap-2">
        <div className="flex-1 min-w-0">
          <div 
            className={`transition-all duration-300 ${
              isExpanded 
                ? 'whitespace-normal' 
                : 'whitespace-nowrap overflow-hidden text-ellipsis'
            }`}
          >
            <span className="">{index + 1}. {definition}</span>
            {example && (
              <>
                <br />
                <span className="text-sm text-black/80 ml-3">eg. {example}</span>
              </>
            )}
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-shrink-0 p-1 rounded-full hover:bg-white/10 transition-colors duration-200 text-white/60 hover:text-white/80"
          aria-label={isExpanded ? 'Collapse definition' : 'Expand definition'}
        >
          {isExpanded ? <ChevronUp className='text-black' size={16} /> : <ChevronDown className='text-black' size={16} />}
        </button>
      </div>
    </div>
  );
};

export default ExpandibleComp;
