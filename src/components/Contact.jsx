import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiSend,
  FiAlertCircle,
} from 'react-icons/fi';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const SOCIAL_LINKS = [
    {
      id: 'linkedin',
      icon: <IoLogoLinkedin size={21} />,
      link: 'https://www.linkedin.com/in/firdoshkhan',
    },
    {
      id: 'twitter',
      icon: <IoLogoTwitter size={21} />,
      link: 'https://x.com/The_Firdosh',
    },
    {
      id: 'github',
      icon: <BsGithub size={21} />,
      link: 'https://github.com/Curious-Firdosh',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus('');
    setIsSuccess(false);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setIsSuccess(true);
      setStatus('Your message is on its way to my inbox.');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setIsSuccess(false);
      setStatus(
        'Something went wrong while sending your message. Please try again or email me directly.'
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-100 bg-white px-6 py-24 text-slate-900 lg:px-28 lg:py-32"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl" />

      <div
        ref={ref}
        className="relative mx-auto flex max-w-6xl flex-col justify-between gap-14 lg:flex-row lg:gap-20"
      >
        {/* Left Side */}
        <motion.div
          initial={{ x: -35, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex flex-col justify-center lg:w-5/12"
        >
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            Open to opportunities
          </div>

          <h2 className="text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Let's build
            <br />
            something
            <span className="mt-2 block font-black text-blue-600">
              meaningful.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-slate-500 lg:text-lg">
            Have a project, an opportunity, or an idea worth building?
            I'd love to hear about it. Let's connect and make it happen.
          </p>

          {/* Email */}
          <a
            href="mailto:thefirdosh@gmail.com"
            className="group mt-10 flex w-fit items-center gap-4"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
              <IoMdMail size={21} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Email me directly
              </p>
              <p className="mt-1 break-all text-base font-semibold text-slate-800 transition-colors group-hover:text-blue-600 sm:text-lg">
                thefirdosh@gmail.com
              </p>
            </div>
          </a>

          {/* Response time */}
          <div className="mt-6 flex items-start gap-3 text-sm text-slate-500">
            <FiClock className="mt-0.5 shrink-0 text-blue-600" size={18} />
            <p>
              <span className="font-semibold text-slate-700">
                Response time
              </span>
              <br />
              I usually reply within 24 hours.
            </p>
          </div>

          {/* Social links */}
          <div className="mt-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Find me online
            </p>

            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ id, icon, link }) => (
                <motion.a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={id}
                  title={id}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form Card */}
        <motion.div
          initial={{ x: 35, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
          className="lg:w-7/12"
        >
          <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.18)] backdrop-blur-sm sm:p-9 lg:p-10">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Get in touch
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Tell me about your project.
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Share a few details and I'll get back to you.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="from_name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    maxLength={100}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    name="from_email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    maxLength={254}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-semibold text-slate-700"
                >
                  How can I help?
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project, opportunity, or idea..."
                  required
                  minLength={10}
                  maxLength={4000}
                  rows={5}
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
                <p className="text-right text-xs text-slate-400">
                  Minimum 10 characters
                </p>
              </div>

              <motion.button
                whileHover={{ y: isSending ? 0 : -2 }}
                whileTap={{ scale: isSending ? 1 : 0.98 }}
                type="submit"
                disabled={isSending}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white shadow-lg shadow-slate-900/10 transition-colors duration-300 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending your message...
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend size={17} />
                  </>
                )}
              </motion.button>

              {/* Animated success and error feedback */}
              <AnimatePresence mode="wait">
                {status && (
                  <motion.div
                    key={isSuccess ? 'success' : 'error'}
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    role={isSuccess ? 'status' : 'alert'}
                    aria-live="polite"
                    className={`overflow-hidden rounded-2xl border p-5 ${
                      isSuccess
                        ? 'border-emerald-200 bg-emerald-50'
                        : 'border-red-200 bg-red-50'
                    }`}
                  >
                    {isSuccess ? (
                      <div className="flex items-start gap-3">
                        <motion.div
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            type: 'spring',
                            stiffness: 220,
                            damping: 12,
                            delay: 0.1,
                          }}
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
                        >
                          <FiCheck size={23} strokeWidth={3} />
                        </motion.div>

                        <div>
                          <h4 className="font-bold text-emerald-900">
                            Thanks for reaching out!
                          </h4>
                          <p className="mt-1 text-sm leading-6 text-emerald-800">
                            Your message has been sent successfully. I
                            appreciate you getting in touch and will reply
                            as soon as I can, usually within 24 hours.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-3">
                        <FiAlertCircle
                          size={21}
                          className="mt-0.5 shrink-0 text-red-600"
                        />
                        <div>
                          <h4 className="font-bold text-red-900">
                            Message not sent
                          </h4>
                          <p className="mt-1 text-sm leading-6 text-red-800">
                            {status}
                          </p>
                          <a
                            href="mailto:thefirdosh@gmail.com"
                            className="mt-2 inline-flex items-center gap-1 font-semibold text-red-900 underline underline-offset-4"
                          >
                            Email me directly <FiArrowRight />
                          </a>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-center text-xs leading-5 text-slate-400">
                Your details will only be used to respond to your message.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}