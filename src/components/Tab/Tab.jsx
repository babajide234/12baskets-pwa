import { useState } from 'react';

export const Tab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className=" w-full  h-full">
      <div className="flex w-5/6 mx-auto">
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
      <div className=" h-full flex overflow-x-auto w-full">{children[activeTab]}</div>
    </div>
  );
};

export const TabPanel = ({ children }) => <div>{children}</div>;


