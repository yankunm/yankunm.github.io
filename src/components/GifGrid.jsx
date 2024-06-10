import React, { useEffect } from 'react';
import { gifData } from '../constants';

const GifGrid = () => {
    useEffect(() => {
        const calculateNumCols = () => {
            const containerWidth = window.innerWidth;
            const newNumCols = Math.floor(containerWidth / 180);
            return newNumCols <= 2 ? 3 : newNumCols;
        };

        const handleResize = () => {
            const newNumCols = calculateNumCols();
            const grid = document.querySelector('.gif-grid');
            if (grid) {
                grid.style.gridTemplateColumns = `repeat(${newNumCols}, minmax(0, 1fr))`;
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="gif-grid mt-20 grid gap-0">
            {Object.entries(gifData).map(([key, value], index) => (
                <div key={index} className="gif-item w-60 h-60 flex justify-center items-center">
                    <img src={value} alt={`GIF ${index}`} className="gif-image h-auto max-w-full" />
                </div>
            ))}
        </div>
    );
};

export default GifGrid;
