import React, { useState } from 'react';

const Tab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div>
            <div className="pt-[10px]">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`pr-5 ${activeTab === index ? 'text-[#2b6cfe] ' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="pt-[10px]">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default Tab;
