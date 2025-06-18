import React from 'react';

interface CircularLoadingProps {
    size?: number;
    color?: string;
    thickness?: number;
    className?: string;
}

const CircularLoading: React.FC<CircularLoadingProps> = ({
    size = 40,
    color = '#1976d2',
    thickness = 4,
    className = '',
}) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ display: 'block', margin: 'auto' }}
    >
        <circle
            cx={size / 2}
            cy={size / 2}
            r={(size - thickness) / 2}
            fill="none"
            stroke={color}
            strokeWidth={thickness}
            strokeDasharray={Math.PI * (size - thickness)}
            strokeDashoffset={Math.PI * (size - thickness) * 0.25}
            strokeLinecap="round"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 ${size / 2} ${size / 2}`}
                to={`360 ${size / 2} ${size / 2}`}
                dur="1s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
);

export default CircularLoading;