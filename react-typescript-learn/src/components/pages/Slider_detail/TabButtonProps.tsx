// TabButton.tsx
import React from 'react';

interface TabButtonProps {
    tabId: string;
    tabLabel: string;
    isActive: boolean;
    onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ tabId, tabLabel, isActive, onClick }) => {
    return (
        <button
            type="button"
            id={tabId}
            className={`nav-link ${isActive ? 'active' : ''}`}
            data-bs-toggle="tab"
            data-bs-target={`#${tabId}-content`}
            role="tab"
            aria-controls={`${tabId}-content`}
            aria-selected={isActive}
            onClick={onClick}
        >
            {tabLabel}
        </button>
    );
};

export default TabButton;
