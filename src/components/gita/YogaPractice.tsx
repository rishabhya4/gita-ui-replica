import { motion } from 'framer-motion';
import gitaBanner from '@/assets/gita-banner.jpg';
import G3 from '@/assets/G3.jpg';
import G4 from '@/assets/G4.jpg';
import G5 from '@/assets/G5.jpg';
import G6 from '@/assets/G6.jpg';

export function YogaPractice() {
    const fourAttitudes = [
        { title: "Friendliness", emoji: "🤝", description: "Among friends", gradient: "from-blue-100 to-cyan-100" },
        { title: "Compassion", emoji: "💝", description: "When meeting those in weaker or unhappy circumstances", gradient: "from-pink-100 to-rose-100" },
        { title: "Gladness", emoji: "😊", description: "Towards others when they are better or more successful", gradient: "from-yellow-100 to-amber-100" },
        { title: "Equanimity", emoji: "🧘", description: "Showing indifference to those who intentionally try to hurt you at an emotional level", gradient: "from-purple-100 to-indigo-100" },
    ];

    const fiveRestraints = [
        { name: "Ahiṃsā", english: "Harmlessness", emoji: "🕊️", desc: "Non-violence in thought, word, and deed" },
        { name: "Satya", english: "Truthfulness", emoji: "💬", desc: "Speaking and living in truth" },
        { name: "Asteya", english: "Non-stealing", emoji: "🙏", desc: "Not taking what is not freely given" },
        { name: "Brahmacharya", english: "Chastity", emoji: "✨", desc: "Control of sensual desires" },
        { name: "Aparigraha", english: "Unselfishness", emoji: "🎁", desc: "Non-possessiveness and generosity" },
    ];

    const eightLimbs = [
        { name: "Yama", english: "Restraints", emoji: "🛡️", desc: "Ethical disciplines" },
        { name: "Niyama", english: "Observances", emoji: "📿", desc: "Personal practices" },
        { name: "Āsana", english: "Posture", emoji: "🧘‍♀️", desc: "Physical poses" },
        { name: "Prāṇāyāma", english: "Breath Control", emoji: "🌬️", desc: "Regulation of breath" },
        { name: "Pratyāhāra", english: "Withdrawal", emoji: "🔇", desc: "Withdrawal of senses" },
        { name: "Dhāraṇā", english: "Concentration", emoji: "🎯", desc: "Focused attention" },
        { name: "Dhyāna", english: "Meditation", emoji: "🧘", desc: "Sustained meditation" },
        { name: "Samādhi", english: "Absorption", emoji: "✨", desc: "Complete absorption" },
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={gitaBanner}
                        alt="Yoga Practice"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/40 to-white/50 backdrop-blur-[2px]" />
                </div>

                <motion.div
                    className="relative h-full flex items-center justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="text-center">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-light tracking-wider text-gray-700 px-4 mb-4">
                            PRACTICE
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 font-heading italic">
                            Yogasūtras - The Path of Discipline
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Introduction Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-light text-gray-800 mb-8">
                            The Foundation of Practice
                        </h2>
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-10 rounded-3xl shadow-xl border-2 border-purple-200">
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                "These movements are restrained through <span className="font-bold text-purple-700">practice</span> and <span className="font-bold text-purple-700">detachment</span>."
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                The practice is making the effort to maintain steadiness.
                            </p>
                            <p className="text-base text-gray-600 italic">
                                "This practice becomes well-grounded when continued with reverent devotion and without interruption over a long period of time." — Yoga Sūtra 1.14
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Detachment Section */}
            <section className="bg-[#f5f1e8] py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-amber-200">
                            <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-6 text-center">
                                Vairāgya - Detachment
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed text-center">
                                "Desirelessness towards the seen and the unseen gives rise to detachment, which is called 'control'."
                            </p>
                            <p className="text-sm text-amber-700 text-center mt-4 italic">— Yoga Sūtra 1.15</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Four Attitudes Section */}
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
                            Four Attitudes
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            Cultivate these four attitudes to maintain peace of mind and harmonious relationships.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {fourAttitudes.map((attitude, index) => (
                            <motion.div
                                key={index}
                                className={`bg-gradient-to-br ${attitude.gradient} p-8 rounded-3xl shadow-xl text-center border-2 border-white/50`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -8, boxShadow: "0 25px 50px rgba(139,92,246,0.3)" }}
                            >
                                <div className="text-6xl mb-4">{attitude.emoji}</div>
                                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">
                                    {attitude.title}
                                </h3>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    {attitude.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kriya Yoga Section */}
            <section className="bg-[#f5f1e8] py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-12 rounded-3xl shadow-2xl border-2 border-purple-200 text-center">
                            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-gray-800 mb-6">
                                Kriyā Yoga
                            </h2>
                            <p className="text-2xl text-gray-700 leading-relaxed">
                                Helps to remain blissful and is instrumental in reducing afflictions.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Eight Limbs Section */}
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
                            The Eight Limbs of Yoga
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            Aṣṭāṅga Yoga - The eightfold path to spiritual liberation and self-realization.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {eightLimbs.map((limb, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 rounded-2xl shadow-xl text-center border-2 border-purple-200"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.08, y: -8, boxShadow: "0 20px 40px rgba(139,92,246,0.3)" }}
                            >
                                <div className="text-5xl mb-4">{limb.emoji}</div>
                                <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">
                                    {limb.name}
                                </h3>
                                <p className="text-base font-semibold text-purple-700 mb-2">{limb.english}</p>
                                <p className="text-sm text-gray-600">{limb.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Five Restraints Section */}
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
                            The Five Restraints - Yama
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
                            These five restraints can be practised voluntarily at all times, because they are not limited by rank, place, time or circumstance and constitute the great vow.
                        </p>
                        <p className="text-base text-gray-600 italic">— Yoga Sūtra 2.31</p>
                    </motion.div>

                    <div className="grid md:grid-cols-5 gap-6 max-w-7xl mx-auto">
                        {fiveRestraints.map((restraint, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-xl text-center border-2 border-purple-100 hover:border-purple-300 transition-all"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(139,92,246,0.2)" }}
                            >
                                <div className="text-5xl mb-4">{restraint.emoji}</div>
                                <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">
                                    {restraint.english}
                                </h3>
                                <p className="text-sm text-purple-700 italic mb-2">{restraint.name}</p>
                                <p className="text-xs text-gray-600">{restraint.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reflection & Contentment Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            className="bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-3xl shadow-2xl border-2 border-amber-200"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-6xl mb-6 text-center">🤔</div>
                            <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-4 text-center">
                                Reflection
                            </h3>
                            <p className="text-lg text-gray-700 text-center leading-relaxed">
                                Self-study and contemplation deepen our understanding of ourselves and our practice.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl shadow-2xl border-2 border-green-200"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-6xl mb-6 text-center">😌</div>
                            <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-4 text-center">
                                Contentment
                            </h3>
                            <p className="text-lg text-gray-700 text-center leading-relaxed">
                                The highest form of happiness comes with contentment.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Meditation & Pranayama Section */}
            <section className="bg-[#f5f1e8] py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Meditation */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-purple-200 h-full">
                                <div className="flex justify-center mb-6">
                                    <img src={G3} alt="Meditation" className="w-full h-64 object-cover rounded-2xl" />
                                </div>
                                <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-4 text-center">
                                    Meditation
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    The posture should be balanced and comfortable…
                                </p>
                                <p className="text-base text-gray-600 italic text-center">
                                    … reducing movements in body and mind, while meditating on the infinite.
                                </p>
                            </div>
                        </motion.div>

                        {/* Pranayama */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-blue-200 h-full">
                                <div className="flex justify-center mb-6">
                                    <img src={G4} alt="Pranayama" className="w-full h-64 object-cover rounded-2xl" />
                                </div>
                                <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-4 text-center">
                                    Prāṇāyāma
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed text-center">
                                    With that posture, practise control of inhalation and exhalation.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final Quote */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-12 md:p-16 rounded-3xl shadow-2xl border-2 border-purple-200 text-center">
                            <div className="text-6xl mb-6">🕉️</div>
                            <p className="text-3xl md:text-4xl font-heading italic text-gray-800 mb-6 leading-relaxed">
                                "Yogaś citta-vṛtti-nirodhaḥ"
                            </p>
                            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
                                "Yoga is the cessation of the fluctuations of the mind."
                            </p>
                            <p className="text-sm text-purple-700 font-semibold tracking-wide">
                                — YOGA SŪTRA 1.2
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
