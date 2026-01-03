import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error on change
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const validateForm = () => {
        let valid = true;
        let newErrors = { name: '', email: '', message: '' };

        if (!formData.name.trim()) {
            newErrors.name = 'This field required!';
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'This field required!';
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email!';
            valid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'This field required!';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        const serviceID = "service_zbtnk6v";
        const templateID = "template_5q6yqpo";
        // publicKey is set in index.html

        const templateParams = {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message
        };

        // Assuming window.emailjs is available from script in index.html, 
        // or we can use the object if global. The script runs emailjs.init.
        // We can access via window.emailjs

        if (window.emailjs) {
            window.emailjs.send(serviceID, templateID, templateParams)
                .then(() => {
                    setFormData({ name: '', email: '', message: '', success: true });
                    setIsSubmitting(false);
                    setTimeout(() => setFormData(prev => ({ ...prev, success: false })), 5000);
                })
                .catch((err) => {
                    console.error("❌ EmailJS error:", err);
                    setFormData(prev => ({ ...prev, error: "Failed to send message. Please try again." }));
                    setIsSubmitting(false);
                    setTimeout(() => setFormData(prev => ({ ...prev, error: "" })), 5000);
                });
        } else {
            setFormData(prev => ({ ...prev, error: "EmailJS service not loaded." }));
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-40 relative overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none bg-[url('/assets/svg/common-bg.svg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-dark-bg dark:to-transparent z-0"></div>

            <div className="relative z-10 max-w-[80rem] mx-auto px-8 text-center text-light-text dark:text-dark-text">
                <div className="mb-16">
                    <h2 className="text-[4rem] uppercase font-bold tracking-[3px] mb-8 relative inline-block text-black dark:text-white">
                        Contact
                        <span className="absolute left-1/2 -bottom-6 w-12 h-2 bg-primary -translate-x-1/2 rounded"></span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-[2rem] font-medium mt-8">
                        “Feel free to reach out regarding opportunities, collaborations, or any professional inquiries.”
                    </p>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="bg-white dark:bg-dark-card p-12 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 text-left max-w-[60rem] mx-auto text-light-text dark:text-dark-text relative z-20"
                >
                    <AnimatePresence>
                        {formData.success && (
                            <motion.div
                                initial={{ opacity: 0, y: -20, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: 'auto' }}
                                exit={{ opacity: 0, y: -20, height: 0 }}
                                className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-4 rounded-lg mb-6 border border-green-200 dark:border-green-800 flex items-center gap-3"
                            >
                                <span className="text-2xl">✅</span>
                                <span className="text-[1.6rem] font-medium">Message sent successfully!</span>
                            </motion.div>
                        )}
                        {formData.error && (
                            <motion.div
                                initial={{ opacity: 0, y: -20, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: 'auto' }}
                                exit={{ opacity: 0, y: -20, height: 0 }}
                                className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-4 rounded-lg mb-6 border border-red-200 dark:border-red-800 flex items-center gap-3"
                            >
                                <span className="text-2xl">❌</span>
                                <span className="text-[1.6rem] font-medium">{formData.error}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <FormGroup
                        label="Name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                    />
                    <FormGroup
                        label="Email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                    />

                    <div className="mb-10">
                        <label htmlFor="message" className={`block font-bold text-[1.4rem] mb-2 uppercase tracking-wider ${errors.message ? 'text-red-500' : 'text-slate-500 dark:text-slate-400'}`}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            placeholder="Enter Your Message"
                            className={`w-full bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border outline-none transition-all text-slate-800 dark:text-slate-100 text-[1.6rem] resize-none focus:ring-2 focus:ring-primary/50 ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-primary'
                                }`}
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        {errors.message && <div className="text-red-500 text-[1.2rem] mt-1">{errors.message}</div>}
                    </div>

                    <div className="text-right">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="py-4 px-12 bg-primary hover:bg-blue-600 text-white font-bold text-[1.6rem] uppercase rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-1 transition-all w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Submit'}
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

const FormGroup = ({ label, id, value, onChange, error }) => (
    <div className="mb-8">
        <label htmlFor={id} className={`block font-bold text-[1.4rem] mb-2 uppercase tracking-wider ${error ? 'text-red-500' : 'text-slate-500 dark:text-slate-400'}`}>{label}</label>
        <input
            type="text"
            id={id}
            name={id}
            placeholder={`Enter Your ${label}`}
            className={`w-full bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border outline-none transition-all text-slate-800 dark:text-slate-100 text-[1.6rem] focus:ring-2 focus:ring-primary/50 ${error ? 'border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-primary'
                }`}
            value={value}
            onChange={onChange}
        />
        {error && <div className="text-red-500 text-[1.2rem] mt-1">{error}</div>}
    </div>
);

export default Contact;
