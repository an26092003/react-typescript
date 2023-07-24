// TabContent.tsx
import React from 'react';

interface TabContentProps {
    tabId: string;
    isActive: boolean;
    children: React.ReactNode; // Add children prop here
}

const TabContent: React.FC<TabContentProps> = ({ tabId, isActive, children }) => {
    return (
        <div
            className={`tab-pane fade ${isActive ? 'show active' : ''}`}
            id={`${tabId}-content`}
            role="tabpanel"
            aria-labelledby={tabId}
        >
            {children}
        </div>
    );
};

export default TabContent;
