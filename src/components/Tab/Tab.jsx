import { useState } from 'react';

export const Tab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full mt-10">
      <div className="flex ml-12">
        {children.map((child, index) => (
          <button
            key={index}
            className={`${
              index === activeTab
                ? 'border-b-4 rounded border-primary text-primary'
                : 'border-b border-transparent text-[#9A9A9D] hover:text-gray-700'
            } py-2 px-4 font-bold text-lg focus:outline-none`}
            onClick={() => setActiveTab(index)}
          >
            {child.props.title}
          </button>
        ))}
      </div>
      
      <div className=" mt-20">{children[activeTab]}</div>
    </div>
  );
};

export const TabPanel = ({ children }) => <div>{children}</div>;


