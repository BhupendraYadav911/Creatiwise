
const MarqueeBanner = () => {
    const icons = [
        { src: "/assets/star-2.svg", width: 64, height: 64 },
        { src: "/assets/designer-logo.svg", width: 88, height: 341 },
        { src: "/assets/star-2.svg", width: 64, height: 64 },
        { src: "/assets/figma-logo.svg", width: 88, height: 217 }
    ];

    const repeatIcons = new Array(4).fill(icons); // Repeat for smooth scroll

    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-scroll gap-[40px]">
                {repeatIcons.map((group, groupIndex) => (
                    <div key={groupIndex} className="flex gap-[40px]">
                        {group.map((icon, i) => (
                            <img
                                key={i}
                                alt="icon"
                                src={icon.src}
                                width={icon.width}
                                height={icon.height}
                                className="w-fit"
                                loading="lazy"
                                style={{ color: "transparent" }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarqueeBanner;
