import React, { useEffect, useRef, useState } from 'react';


const ClientsSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const imageContainerRef = useRef<HTMLDivElement | null>(null);

    const images = [
        '/images/png-thumbnail.png',
        '/images/comp.PNG',
        '/images/png-thumbnail.png',
        '/images/comp.PNG',
        '/images/png-thumbnail.png',
        '/images/png-thumbnail.png',
        '/images/comp.PNG',
        '/images/png-thumbnail.png',
    ];

    const [imageList, setImageList] = useState<string[]>([]);

    useEffect(() => {
        const totalImages = 20; // How many times to repeat the images (for example, 20)
        const repeatedImages = [];

        // Repeat images
        for (let i = 0; i < totalImages; i++) {
            repeatedImages.push(...images);
        }

        setImageList(repeatedImages);

        // Start animation
        const imageContainer = imageContainerRef.current;
        if (!imageContainer) return;

        const imageWidth = 100; // Assuming the width of each image is 100px
        const totalWidth = imageWidth * repeatedImages.length; // Total width of the container
        let currentX = 0;

        const animateSlide = () => {
            if (currentX <= -totalWidth) {
                currentX = 0; // Reset position once images are fully scrolled
                imageContainer.style.transition = 'none'; // Disable transition for reset
                imageContainer.style.transform = `translateX(${currentX}px)`;
                setTimeout(() => {
                    imageContainer.style.transition = 'transform 20s linear'; // Re-enable transition
                }, 50); // Short delay before restarting the transition
            } else {
                currentX -= 1; // Move left by 1px for each frame
            }

            imageContainer.style.transform = `translateX(${currentX}px)`;
        };

        const interval = setInterval(animateSlide, 16); // ~60fps

        // Cleanup on unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="lg:w-[1120px] overflow-hidden my-10" ref={containerRef} id='client'>
            <p className="text-center mb-12 text-4xl md:text-5xl font-extrabold text-orange-600" >
                Trusted by Leading Organizations
            </p>
            <div
                className="flex"
                ref={imageContainerRef}
                style={{ display: 'flex', transition: 'transform 5s linear' }}
            >
                {/* Loop over the imageList and create images dynamically */}
                {imageList.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`image ${index + 1}`}
                        className="w-[40px] sm:w-[90px] sm:h-[90px] mr-5 h-[40px] flex-shrink-0"
                    />
                ))}
            </div>
        </div>
    );
};
export default ClientsSection;