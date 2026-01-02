import Reveal from './Reveal';
import Carousel from './Carousel';

const CoreValueCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start h-full">
        <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6">
            <img src={icon} alt={title} className="w-6 h-6 object-contain" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <div className="w-full h-[2px] bg-gray-200 mb-4"></div>
        <p className="text-gray-500 text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

const coreValuesData = [
    {
        icon: "/icons/light.svg",
        title: "Teamwork",
        description: "We believe great projects are built through strong collaboration. Our team works together across all levels to achieve shared goals with efficiency and unity."
    },
    {
        icon: "/icons/integrity.svg",
        title: "Integrity",
        description: "We conduct every aspect of our work with honesty, transparency, and accountability, ensuring trust at every stage of a project."
    },
    {
        icon: "/icons/handshake.svg",
        title: "Mutual Respect",
        description: "We foster an inclusive and professional environment where every team member, partner, and client is treated with dignity and respect."
    },
    {
        icon: "/icons/user.svg",
        title: "Innovation",
        description: "We embrace new ideas, modern technologies, and creative problem-solving to deliver better, smarter, and more sustainable project outcomes."
    },
    {
        icon: "/icons/Vector.svg",
        title: "Loyalty",
        description: "We value long-standing relationships and remain committed to our clients, partners, and team members through every phase of our journey."
    },
    {
        icon: "/icons/customerCare.png",
        title: "Customer Focus",
        description: "We prioritize customer satisfaction by delivering quality workmanship, dependable service, and continuous support throughout each project."
    }
];

const FounderValues = () => {
    return (
        <section className="w-full bg-[#F2F9FD] py-20 px-6 md:px-12 lg:px-20 xl:px-32 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Founder Information Section: Bio and Image */}
                <Reveal direction="up" className="mb-32">
                    <div className="p-0 md:p-12 relative">
                        <div className="flex flex-col lg:flex-row gap-12 items-center">

                            {/* Profile Image Container */}
                            <div className="w-full lg:w-1/3 shrink-0">
                                <div className="rounded-[2rem] overflow-hidden h-[400px] lg:h-[450px] shadow-lg">
                                    <img
                                        src="/images/Rectangle 7.webp"
                                        alt="Sajeev Mathai - Founder"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>

                            {/* Founder Biography Content */}
                            <div className="w-full lg:w-2/3">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-8 tracking-wide">
                                    Founder’s detail
                                </h2>
                                <div className="text-gray-600 font-medium leading-loose text-base md:text-lg space-y-4 text-justify">
                                    <p>
                                        <strong className="text-gray-900">Sajeev Mathai</strong>, the founder and director of Porticade Builders & Developers, brings extensive professional experience from both Kerala and Saudi Arabia’s construction sectors. With a strong background in civil works, project management, and architectural coordination, he established Porticade with the vision of delivering high-quality, reliable, and innovative construction solutions.
                                    </p>
                                    <p>
                                        Under his leadership, the company has successfully executed multiple government, institutional, and residential projects, consistently maintaining high standards of safety, transparency, and timely delivery. His commitment to excellence, client satisfaction, and ethical project execution continues to guide Porticade’s steady growth and reputation in the industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Core Values Grid / Carousel Section */}
                <div>
                    <Reveal direction="left" className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#333333] tracking-wide">
                            Our core values
                        </h2>
                    </Reveal>

                    {/* Mobile View: Swipeable Carousel for Values */}
                    <div className="block md:hidden">
                        <Carousel autoPlay={true} interval={3000}>
                            {coreValuesData.map((value, index) => (
                                <div key={index} className="p-4 w-full">
                                    <CoreValueCard {...value} />
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    {/* Desktop View: Grid Layout for Values */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreValuesData.map((value, index) => (
                            <Reveal key={index} direction="up" delay={0.1 * (index + 1)}>
                                <CoreValueCard {...value} />
                            </Reveal>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FounderValues;
