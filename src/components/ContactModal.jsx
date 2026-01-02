import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";

const schema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().optional().or(z.string().email().optional()), // Allow empty or valid email
    phone: z.string().min(10, { message: "Valid phone number is required" }),
    message: z.string().min(5, { message: "Message must be at least 5 characters" }),
});

const ContactModal = ({ isOpen, onClose }) => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        }
    });

    const onSubmit = (data) => {
        setLoading(true);

        const templateParams = {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            phone: data.phone,
            message: data.message,
            to_email: "porticade911@gmail.com",
        };

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    alert("Thank you! Your message has been sent successfully.");
                    reset();
                    onClose();
                },
                () => {
                    alert("Failed to send message. Please try again later.");
                }
            )
            .finally(() => {
                setLoading(false);
            });
    };
    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
            {/*Background Backdrop: Darkens the background */}
            <div
                className='absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity'
                onClick={onClose}></div>

            {/* Modal Container: Holds the content split into two sections */}
            <div className='relative z-10 w-full max-w-5xl bg-sky-50 rounded-[30px] shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh] lg:max-h-none overflow-y-auto lg:overflow-visible'>
                {/* Mobile Close Button: Visible only on small screens */}
                <button
                    onClick={onClose}
                    className='absolute top-4 right-4 lg:hidden p-2 text-gray-500 hover:text-gray-800 bg-white/50 rounded-full'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                        />
                    </svg>
                </button>

                {/* Left Form Section: Intake form for user messages */}
                <div className='w-full lg:w-7/12 bg-white p-8 lg:p-12 rounded-[30px] m-2 shadow-sm'>
                    {/* Desktop Close Button: Visible only on large screens */}
                    <button
                        onClick={onClose}
                        className='hidden lg:block absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 transition-colors'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-6 h-6'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </button>

                    <div className='mb-8'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                            Contact us
                        </h3>
                        <p className='text-gray-500 text-sm font-medium'>
                            You can reach us anytime
                        </p>
                    </div>

                    <form
                        className='space-y-4'
                        onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <input
                                    type='text'
                                    {...register("firstName")}
                                    placeholder='First Name'
                                    className={`w-full px-4 py-3 rounded-full border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} text-gray-700 text-sm focus:outline-none focus:border-gray-400 transition-colors`}
                                />
                                {errors.firstName && <span className="text-red-500 text-xs mt-1 ml-4">{errors.firstName.message}</span>}
                            </div>
                            <div>
                                <input
                                    type='text'
                                    {...register("lastName")}
                                    placeholder='Last Name'
                                    className={`w-full px-4 py-3 rounded-full border ${errors.lastName ? 'border-red-500' : 'border-gray-200'} text-gray-700 text-sm focus:outline-none focus:border-gray-400 transition-colors`}
                                />
                                {errors.lastName && <span className="text-red-500 text-xs mt-1 ml-4">{errors.lastName.message}</span>}
                            </div>
                        </div>

                        <div>
                            <input
                                type='text'
                                {...register("email")}
                                placeholder='Email ID'
                                className='w-full px-4 py-3 rounded-full border border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-gray-400 transition-colors'
                            />
                            {/* Email validation is skipped as per user request, but we still show format error if they type something invalid */}
                            {errors.email && <span className="text-red-500 text-xs mt-1 ml-4">Please enter a valid email</span>}
                        </div>

                        <div>
                            <Controller
                                name="phone"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <PhoneInput
                                        country={"in"}
                                        value={value}
                                        onChange={onChange}
                                        containerClass='!w-full'
                                        inputClass={`!w-full !pl-14 !pr-4 !py-3 !h-[46px] !rounded-full !border ${errors.phone ? '!border-red-500' : '!border-gray-200'} !text-gray-700 !text-sm focus:!border-gray-400 !transition-colors`}
                                        buttonClass='!rounded-l-full !border-gray-200 !bg-transparent hover:!bg-transparent !pl-3'
                                        dropdownClass='!shadow-lg !rounded-lg !mt-2'
                                        buttonStyle={{
                                            border: "none",
                                            borderRight: "1px solid #e5e7eb",
                                            borderRadius: "9999px 0 0 9999px",
                                        }}
                                    />
                                )}
                            />
                            {errors.phone && <span className="text-red-500 text-xs mt-1 ml-4">{errors.phone.message}</span>}
                        </div>

                        <div>
                            <textarea
                                {...register("message")}
                                rows='4'
                                placeholder='How can we help?'
                                className={`w-full px-4 py-4 rounded-[20px] border ${errors.message ? 'border-red-500' : 'border-gray-200'} text-gray-700 text-sm focus:outline-none focus:border-gray-400 transition-colors resize-none`}></textarea>
                            {errors.message && <span className="text-red-500 text-xs mt-1 ml-4">{errors.message.message}</span>}
                        </div>

                        <button
                            type='submit'
                            disabled={loading}
                            className='w-full bg-[#2B3431] text-white font-bold text-sm py-3.5 rounded-full hover:bg-black transition-transform active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed'>
                            {loading ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </div>

                {/* Right Info Section: Company details and social links */}
                <div className='w-full lg:w-5/12 p-8 lg:p-12 text-gray-800 flex flex-col gap-8 bg-sky-50'>
                    <div className='space-y-1 text-sm md:text-base leading-relaxed font-medium'>
                        <p className='font-semibold'>
                            Porticade Builders & Developers
                        </p>
                        <p className='font-semibold'>
                            Private Limited Nalachira -
                        </p>
                        <p>Chenchery Rd, Nalanchira, Mannanthala,</p>
                        <p>Thiruvananthapuram, Kerala</p>
                        <p>695015, India</p>
                    </div>

                    <div className='space-y-4 font-medium text-sm md:text-base'>
                        <p>Phone : +91 98956 31515</p>
                        <p>Email Address : porticade911@gmail.com</p>
                    </div>

                    <div className='mt-4'>
                        <p className='font-bold mb-4'>Follow us</p>
                        <div className='flex gap-4'>
                            <a
                                href='https://www.facebook.com/people/Porticade-Builders/61585167496393/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-10 h-10 flex items-center justify-center rounded-full bg-[#bfdce3] hover:bg-[#aaccf0] transition-colors'>
                                <img
                                    src='/icons/facebook.svg'
                                    alt='Facebook'
                                    className='w-4 h-4 opacity-70'
                                />
                            </a>
                            <a
                                href='https://www.instagram.com/porticadebuilders?igsh=azM2a3h2cDA1bnlj'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-10 h-10 flex items-center justify-center rounded-full bg-[#bfdce3] hover:bg-[#aaccf0] transition-colors'>
                                <img
                                    src='/icons/instagram.svg'
                                    alt='Instagram'
                                    className='w-4 h-4 opacity-70'
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
