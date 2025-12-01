import { motion } from 'framer-motion';
import { BookOpen, Heart, Sparkles, Users } from 'lucide-react';
import G3 from '@/assets/G3.jpg';
import G4 from '@/assets/G4.jpg';
import G5 from '@/assets/G5.jpg';

export function Introduction() {
    const features = [
        {
            icon: BookOpen,
            title: "Sacred Scripture",
            description: "700 verses of timeless wisdom"
        },
        {
            icon: Heart,
            title: "Spiritual Guidance",
            description: "Path to self-realization"
        },
        {
            icon: Sparkles,
            title: "Universal Truth",
            description: "Teachings for all humanity"
        },
        {
            icon: Users,
            title: "Divine Dialogue",
            description: "Between Krishna and Arjuna"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        The Bhagavad Gītā
                    </motion.h2>
                    <motion.p
                        className="text-xl md:text-2xl font-heading italic text-amber-800/80"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        श्रीमद्भगवद्गीता - The Song of the Divine
                    </motion.p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Text Content */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed text-lg">
                                The <span className="font-semibold text-amber-700">Bhagavad Gītā</span>, often referred to as the Gita,
                                is a 700-verse Hindu scripture that is part of the epic Mahabharata. It is a sacred dialogue between
                                <span className="font-semibold text-amber-700"> Lord Krishna</span> and the warrior prince
                                <span className="font-semibold text-amber-700"> Arjuna</span> on the battlefield of Kurukshetra.
                            </p>

                            <p className="text-gray-700 leading-relaxed text-lg">
                                Set in a narrative framework of a dialogue, the Gita addresses the moral and philosophical dilemmas
                                faced by Arjuna. Through Krishna's teachings, it explores profound concepts of duty (dharma),
                                righteousness, devotion, and the paths to spiritual liberation.
                            </p>

                            <p className="text-gray-700 leading-relaxed text-lg">
                                The Gita synthesizes various schools of Hindu philosophy and presents a comprehensive guide to
                                spiritual wisdom, making it one of the most revered texts in Indian philosophy and spirituality.
                            </p>
                        </div>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            <motion.div
                                className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-xl shadow-lg border border-amber-200"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245,158,11,0.3)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-3xl font-bold text-amber-700">18</div>
                                <div className="text-sm text-amber-900/70 font-medium">Chapters</div>
                            </motion.div>
                            <motion.div
                                className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-xl shadow-lg border border-orange-200"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251,146,60,0.3)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="text-3xl font-bold text-orange-700">700</div>
                                <div className="text-sm text-orange-900/70 font-medium">Verses</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Image Gallery */}
                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="col-span-2 rounded-2xl overflow-hidden shadow-2xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={G3}
                                alt="Krishna and Arjuna"
                                className="w-full h-64 object-cover"
                            />
                        </motion.div>
                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-xl"
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={G4}
                                alt="Bhagavad Gita Scripture"
                                className="w-full h-48 object-cover"
                            />
                        </motion.div>
                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-xl"
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={G5}
                                alt="Ancient Wisdom"
                                className="w-full h-48 object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 hover:border-amber-300 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                            whileHover={{
                                y: -8,
                                boxShadow: "0 20px 40px rgba(245,158,11,0.2)"
                            }}
                        >
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full">
                                    <feature.icon className="w-6 h-6 text-amber-700" />
                                </div>
                                <h3 className="font-heading font-semibold text-lg text-gray-800">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Quote Section */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 p-8 md:p-12 rounded-2xl shadow-xl border border-amber-200">
                        <motion.div
                            className="text-2xl md:text-3xl font-heading italic text-amber-900 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                        >
                            "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।"
                        </motion.div>
                        <motion.p
                            className="text-lg md:text-xl text-gray-700 font-medium"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                        >
                            "Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure."
                        </motion.p>
                        <motion.p
                            className="text-sm text-amber-700 mt-4 font-semibold"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.1, duration: 0.6 }}
                        >
                            — Bhagavad Gita 2.48
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
