import { useState, useRef, Children } from 'react';
import { motion } from "framer-motion";

export const Tab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);

  return (
    <div className=" w-full h-full overflow-x-auto">
      <motion.div className="flex w-5/6 mx-auto overflow-x-auto scrollbar-hide" ref={ref}>
      {Children.count(children) > 1 ? (
            Children.map(children, (child, index) => (
              <button
                key={index}
                className={`${
                  index === activeTab
                    ? 'border-b-4 border-primary text-primary'
                    : 'border-b border-gray-500 text-[#9A9A9D] hover:text-gray-700'
                } px-4 font-bold text-lg focus:outline-none`}
                onClick={() => setActiveTab(index)}
              >
                {child.props.title}
              </button>
            ))
          ) : (
            <button
              className={`${
                activeTab === 0
                  ? 'border-b-4 border-primary text-primary'
                  : 'border-b border-gray-500 text-[#9A9A9D] hover:text-gray-700'
              } w-fit px-4 font-bold text-lg focus:outline-none`}
              onClick={() => setActiveTab(0)}
            >
              {children.props.title}
            </button>
          )}

      </motion.div>  
      <div className=" h-full flex overflow-x-auto w-full">
        {
          Children.count(children) > 1 ? (
            children[activeTab]
          ) : (
            children
          )
        }
      </div>
    </div>
  );
};

export const TabPanel = ({ children }) => <div className=' flex'>{children}</div>;


