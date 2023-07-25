// App.tsx
import React, { useState } from 'react';
// import './App.css';
import TabButton from './TabButtonProps';
import TabContent from './TabContentProps ';
import SliderNho from './SliderNho';
import SliderBig from './SilderBig';

const Hoptab: React.FC = () => {
    const [activeTab, setActiveTab] = useState('tab1'); // Set the initial active tab

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId); // Update the active tab based on the clicked tab button
    };

    return (
        <div className="Hoptab container">
            <div className="nav nav-tabs" id="myTab" role="tablist">
                <TabButton
                    tabId="tab1"
                    tabLabel="Sản phẩm bán chạy"
                    isActive={activeTab === 'tab1'}
                    onClick={() => handleTabClick('tab1')}
                />
                <TabButton
                    tabId="tab2"
                    tabLabel="Sản phẩm mới"
                    isActive={activeTab === 'tab2'}
                    onClick={() => handleTabClick('tab2')}
                />
            </div>

            <div className="tab-content" id="myTabContent">
                <TabContent tabId="tab1" isActive={activeTab === 'tab1'}>
                    <SliderBig></SliderBig>
                </TabContent>

                <TabContent tabId="tab2" isActive={activeTab === 'tab2'}>
                    <SliderNho></SliderNho>
                </TabContent>
            </div>
        </div>
    );
};

export default Hoptab;
