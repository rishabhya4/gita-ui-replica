import { motion } from 'framer-motion';
import G3 from '@/assets/G3.jpg';
import G4 from '@/assets/G4.jpg';
import G5 from '@/assets/G5.jpg';
import G6 from '@/assets/G6.jpg';
import gitaBanner from '@/assets/gita-banner.jpg';

export function Introduction() {
    return (
        <div className="w-full">
            {/* Hero Section with Large Title */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={gitaBanner}
                        alt="Bhagavad Gita"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
                </div>

                <motion.div
                    className="relative h-full flex items-center justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-light tracking-wider text-gray-700 text-center px-4">
                        INTRODUCTION
                    </h1>
                </motion.div>
            </section>

            {/* The Bhagavad Gita Section */}
            <section className="bg-[#f5f1e8] py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                                    </svg>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-heading font-light text-gray-800">
                                    The Bhagavad Gītā
                                </h2>
                            </div>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                The <span className="font-semibold">Bhagavad Gītā</span>, often referred to as the Gita,
                                is a 700-verse Hindu scripture that forms part of the epic Mahabharata. It is a sacred
                                dialogue between Lord Krishna and the warrior prince Arjuna on the battlefield of Kurukshetra,
                                addressing profound questions about duty, righteousness, and the path to spiritual liberation.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                The Gita synthesizes various schools of Hindu philosophy and presents timeless wisdom
                                applicable to all aspects of life, making it one of the most revered and studied texts
                                in Indian spirituality and philosophy.
                            </p>
                        </motion.div>

                        <motion.div
                            className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src={G3}
                                alt="Krishna and Arjuna"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Three Gunas Section (like Doshas) */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-heading font-light text-gray-800 mb-6">
                            The Three Guṇas
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            The three guṇas are fundamental qualities of nature that influence our thoughts, actions, and character.
                            Understanding them helps us navigate life with greater awareness.
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto space-y-20">
                        {/* Sattva */}
                        <motion.div
                            className="grid lg:grid-cols-2 gap-12 items-center"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="order-2 lg:order-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <svg className="w-10 h-10 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-4xl font-heading font-light text-gray-800">Sattva</h3>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    Sattva represents purity, harmony, and wisdom. Like a serene swan gliding on still waters,
                                    it embodies clarity, knowledge, and inner peace. Those influenced by sattva seek truth and
                                    understanding.
                                </p>
                                <p className="text-base text-gray-600 italic">
                                    "When sattva predominates, the light of knowledge shines through all the gates of the body."
                                </p>
                            </div>
                            <div className="order-1 lg:order-2 relative h-80 rounded-lg overflow-hidden shadow-xl">
                                <img src={G4} alt="Sattva" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>

                        {/* Rajas */}
                        <motion.div
                            className="grid lg:grid-cols-2 gap-12 items-center"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                                <img src={G5} alt="Rajas" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <svg className="w-10 h-10 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-4xl font-heading font-light text-gray-800">Rajas</h3>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    Rajas embodies passion, activity, and desire. Like a tiger full of energy and ambition,
                                    it drives action and achievement but can lead to restlessness and attachment to results.
                                </p>
                                <p className="text-base text-gray-600 italic">
                                    "From rajas arises greed, activity, the undertaking of actions, restlessness, and desire."
                                </p>
                            </div>
                        </motion.div>

                        {/* Tamas */}
                        <motion.div
                            className="grid lg:grid-cols-2 gap-12 items-center"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="order-2 lg:order-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <svg className="w-10 h-10 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-4xl font-heading font-light text-gray-800">Tamas</h3>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    Tamas represents inertia, darkness, and ignorance. Like an elephant that can be stubborn
                                    and slow to move, it brings lethargy and delusion but also provides stability and rest.
                                </p>
                                <p className="text-base text-gray-600 italic">
                                    "From tamas arise negligence, laziness, delusion, and ignorance."
                                </p>
                            </div>
                            <div className="order-1 lg:order-2 relative h-80 rounded-lg overflow-hidden shadow-xl">
                                <img src={G6} alt="Tamas" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How Can the Gita Help Section */}
            <section className="bg-[#f5f1e8] py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-heading font-light text-gray-800 mb-6">
                            How Can the Gītā Guide You?
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            className="bg-white p-8 rounded-xl shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-4">
                                Finding Inner Peace
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                The Gita teaches us to perform our duties without attachment to results, freeing us from
                                anxiety and stress. By understanding the eternal nature of the soul, we find peace amidst
                                life's challenges.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-xl shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-4">
                                Understanding Your Purpose
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Through Krishna's teachings, we learn about dharma—our righteous duty. The Gita helps us
                                discover our true purpose and align our actions with our highest values and principles.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-xl shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-4">
                                Developing Wisdom
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                The Gita provides profound insights into the nature of reality, consciousness, and the self.
                                It cultivates discrimination between the eternal and temporary, leading to true wisdom.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-xl shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-4">
                                Achieving Balance
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                By understanding the three gunas and practicing yoga, we learn to balance our energies,
                                emotions, and actions, creating harmony in body, mind, and spirit.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sage Quote Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-12 md:p-16 rounded-2xl shadow-2xl border border-amber-200">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl md:text-4xl font-heading font-semibold text-gray-800 mb-2">
                                    Lord Krishna
                                </h3>
                                <p className="text-lg text-amber-700 font-medium">Bhagavad Gītā</p>
                            </div>
                            <p className="text-2xl md:text-3xl font-heading italic text-gray-800 mb-6 leading-relaxed text-center">
                                "You have the right to perform your duty, but you are not entitled to the fruits of your actions."
                            </p>
                            <p className="text-base text-gray-600 text-center">
                                This timeless wisdom teaches us to focus on our efforts rather than outcomes,
                                freeing us from anxiety and attachment.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bring Gita Into Your Life Section */}
            <section className="bg-[#f5f1e8] py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-heading font-light text-gray-800 mb-8">
                            Bring the Gītā Into Your Life!
                        </h2>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            As a holistic guide to life, the Bhagavad Gita addresses the body, mind, and spirit.
                            It looks at the root causes of suffering and provides practical wisdom for daily living.
                            Since each person's journey is unique, the Gita's teachings can be applied individually,
                            resulting in truly personalized spiritual growth.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Because of this universal yet personal approach, the Bhagavad Gita has immense value
                            and effectiveness in restoring inner peace, clarity, and purpose to our lives.
                        </p>
                    </motion.div>

                    {/* Three Layers Visualization */}
                    <motion.div
                        className="mt-16 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-heading font-light text-gray-800 mb-4">
                                Three Layers of Existence
                            </h3>
                            <p className="text-lg text-gray-600 italic">
                                "Just as an onion has layers, so does our existence."
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <motion.div
                                className="bg-white p-6 rounded-xl shadow-lg text-center"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245,158,11,0.2)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-4xl mb-4">🧘</div>
                                <h4 className="text-xl font-heading font-semibold text-gray-800 mb-2">Physical</h4>
                                <p className="text-gray-600">The body and senses</p>
                            </motion.div>
                            <motion.div
                                className="bg-white p-6 rounded-xl shadow-lg text-center"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245,158,11,0.2)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-4xl mb-4">🧠</div>
                                <h4 className="text-xl font-heading font-semibold text-gray-800 mb-2">Mental</h4>
                                <p className="text-gray-600">Thoughts and emotions</p>
                            </motion.div>
                            <motion.div
                                className="bg-white p-6 rounded-xl shadow-lg text-center"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245,158,11,0.2)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-4xl mb-4">✨</div>
                                <h4 className="text-xl font-heading font-semibold text-gray-800 mb-2">Spiritual</h4>
                                <p className="text-gray-600">The eternal soul</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final Quote Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-12 md:p-16 rounded-2xl shadow-xl border border-amber-200">
                            <p className="text-3xl md:text-4xl font-heading italic text-gray-800 mb-6 leading-relaxed">
                                "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।"
                            </p>
                            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
                                "Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure."
                            </p>
                            <p className="text-sm text-amber-700 font-semibold tracking-wide">
                                — BHAGAVAD GITA 2.48
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
