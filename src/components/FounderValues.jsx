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
        description: "We Believe Great Projects Are Built Through Strong Collaboration. Our Team Works Together Across All Levels To Achieve Shared Goals With Efficiency And Unity."
    },
    {
        icon: "/icons/integrity.svg",
        title: "Integrity",
        description: "We Conduct Every Aspect Of Our Work With Honesty, Transparency, And Accountability, Ensuring Trust At Every Stage Of A Project."
    },
    {
        icon: "/icons/handshake.svg",
        title: "Mutual Respect",
        description: "We Foster An Inclusive And Professional Environment Where Every Team Member, Partner, And Client Is Treated With Dignity And Respect."
    },
    {
        icon: "/icons/user.svg",
        title: "Innovation",
        description: "We Embrace New Ideas, Modern Technologies, And Creative Problem-Solving To Deliver Better, Smarter, And More Sustainable Project Outcomes."
    },
    {
        icon: "/icons/Vector.svg",
        title: "Loyalty",
        description: "We Value Long-Standing Relationships And Remain Committed To Our Clients, Partners, And Team Members Through Every Phase Of Our Journey."
    },
    {
        icon: "/icons/customerCare.png",
        title: "Customer Focus",
        description: "We Prioritize Customer Satisfaction By Delivering Quality Workmanship, Dependable Service, And Continuous Support Throughout Each Project."
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
                                <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-8 uppercase tracking-wide">
                                    Founder’s Detail
                                </h2>
                                <div className="text-gray-600 font-medium leading-loose text-base md:text-lg space-y-4 text-justify">
                                    <p>
                                        <strong className="text-gray-900">Sajeev Mathai</strong>, The Founder And Director Of Porticade Builders & Developers, Brings Extensive Professional Experience From Both Kerala And Saudi Arabia’s Construction Sectors. With A Strong Background In Civil Works, Project Management, And Architectural Coordination, He Established Porticade With The Vision Of Delivering High-Quality, Reliable, And Innovative Construction Solutions.
                                    </p>
                                    <p>
                                        Under His Leadership, The Company Has Successfully Executed Multiple Government, Institutional, And Residential Projects, Consistently Maintaining High Standards Of Safety, Transparency, And Timely Delivery. His Commitment To Excellence, Client Satisfaction, And Ethical Project Execution Continues To Guide Porticade’s Steady Growth And Reputation In The Industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Core Values Grid / Carousel Section */}
                <div>
                    <Reveal direction="left" className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#333333] uppercase tracking-wide">
                            Our Core Values
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
