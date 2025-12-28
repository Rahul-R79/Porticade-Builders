import Reveal from './Reveal';

const reviews = [
    {
        text: "We had a great experience with this builder. The construction quality was excellent, timelines were well managed, and communication was clear throughout the project. Highly reliable and professional.",
        name: "Alisha K",
        stars: 5,
    },
    {
        text: "We had a great experience with this builder. The construction quality was excellent, timelines were well managed, and communication was clear throughout the project. Highly reliable and professional.",
        name: "Alisha K",
        stars: 5,
    },
    {
        text: "We had a great experience with this builder. The construction quality was excellent, timelines were well managed, and communication was clear throughout the project. Highly reliable and professional.",
        name: "Alisha K",
        stars: 5,
    },
    {
        text: "We had a great experience with this builder. The construction quality was excellent, timelines were well managed, and communication was clear throughout the project. Highly reliable and professional.",
        name: "Alisha K",
        stars: 5,
    },
];

const ReviewSection = () => {
    return (
        <section className="bg-sky-50 py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                {/* Left Content */}
                <Reveal className="lg:w-1/3 flex flex-col gap-6">
                    <h2 className="text-2xl font-bold text-gray-800 tracking-wider">
                        &#123;20+ HAPPY CLIENTS&#125;
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                        Our construction solutions are not only scientifically tested but also trusted and validated by industry professionals and clients.
                    </p>
                </Reveal>

                {/* Right Content - Grid */}
                <Reveal direction="right" className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between"
                        >
                            <p className="text-gray-700 mb-8 leading-relaxed text-[15px] font-medium">
                                {review.text}
                            </p>
                            <div className="flex justify-between items-center mt-auto">
                                <span className="text-gray-400 text-sm font-medium">
                                    {review.name}
                                </span>
                                <div className="flex gap-1">
                                    {[...Array(review.stars)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-4 h-4 text-yellow-400 fill-current"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Reveal>
            </div>
        </section>
    );
};

export default ReviewSection;
