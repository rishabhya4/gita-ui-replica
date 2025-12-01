import { motion } from 'framer-motion';
import gitaBanner from '@/assets/gita-banner.jpg';

export function YogaObstacles() {
    const knowledgeTypes = [
        { type: "Right knowledge", examples: ["Observing a scene - direct cognition", "Inferring fire from smoke - inference", "Wisdom - testimony from authority"], emoji: "✅", gradient: "from-green-100 to-emerald-100" },
        { type: "Wrong knowledge", examples: ["Seeing a mirage", "Belief in an illusion"], emoji: "❌", gradient: "from-red-100 to-pink-100" },
        { type: "No knowledge", examples: ["Deep sleep", "Nothingness"], emoji: "😴", gradient: "from-gray-100 to-slate-100" },
        { type: "Imaginary knowledge", examples: ["Imagination", "Conjured up by words"], emoji: "💭", gradient: "from-purple-100 to-pink-100" },
        { type: "Past knowledge", examples: ["Memory", "Retained mental impressions"], emoji: "🧠", gradient: "from-blue-100 to-cyan-100" },
    ];

    const impediments = [
        { name: "Disease", emoji: "🤒", desc: "Physical illness" },
        { name: "Apathy", emoji: "😐", desc: "Lack of interest" },
        { name: "Carelessness", emoji: "🤷", desc: "Negligence" },
        { name: "Laziness", emoji: "😴", desc: "Inertia" },
        { name: "Addiction", emoji: "🔗", desc: "Attachment to pleasures" },
        { name: "Doubt", emoji: "🤔", desc: "Uncertainty" },
        { name: "Delusion", emoji: "😵", desc: "False perception" },
    ];

    const coExisting = [
        { name: "Pain", emoji: "😣" },
        { name: "Despair", emoji: "😢" },
        { name: "Nervous twitches", emoji: "😰" },
        { name: "Irregular breathing", emoji: "💨" },
    ];

    const afflictions = [
        { name: "Ignorance", emoji: "🙈", desc: "Mistaking the non-eternal for eternal, impure for pure, evil for good", gradient: "from-gray-100 to-slate-100" },
        { name: "Feeling of ego", emoji: "👑", desc: "'I am + something' - individuality", gradient: "from-yellow-100 to-amber-100" },
        { name: "Liking", emoji: "❤️", desc: "Attraction and attachment", gradient: "from-pink-100 to-rose-100" },
        { name: "Disliking", emoji: "💔", desc: "Repulsion and aversion", gradient: "from-red-100 to-orange-100" },
        { name: "Fear of death", emoji: "☠️", desc: "Clinging to life and existence", gradient: "from-purple-100 to-indigo-100" },
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={gitaBanner}
                        alt="Yoga Obstacles"
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
                            OBSTACLES
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 font-heading italic">
                            Understanding the Barriers to Progress
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Knowledge Section */}
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
                            Five Types of Knowledge
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            Understanding the different forms of knowledge helps us discern truth from illusion.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-5 gap-6 max-w-7xl mx-auto">
                        {knowledgeTypes.map((knowledge, index) => (
                            <motion.div
                                key={index}
                                className={`bg-gradient-to-br ${knowledge.gradient} p-6 rounded-2xl shadow-xl border-2 border-white/50`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -8 }}
                            >
                                <div className="text-5xl mb-4 text-center">{knowledge.emoji}</div>
                                <h3 className="text-lg font-heading font-bold text-gray-800 mb-4 text-center">
                                    {knowledge.type}
                                </h3>
                                <ul className="space-y-2">
                                    {knowledge.examples.map((example, i) => (
                                        <li key={i} className="text-sm text-gray-700">• {example}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impediments Section */}
            <section className="bg-[#f5f1e8] py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-heading font-light text-gray-800 mb-6">
                            Impediments
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
                            These mental disturbances are the impediments to yoga practice.
                        </p>
                        <p className="text-base text-gray-600 italic">
                            "Lack of focus and instability; all these mental disturbances are the impediments." — Yoga Sūtra 1.30
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-7xl mx-auto">
                        {impediments.map((impediment, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-xl text-center border-2 border-red-100 hover:border-red-300 transition-all"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(239,68,68,0.2)" }}
                            >
                                <div className="text-5xl mb-3">{impediment.emoji}</div>
                                <h3 className="text-base font-heading font-bold text-gray-800 mb-2">
                                    {impediment.name}
                                </h3>
                                <p className="text-xs text-gray-600">{impediment.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Co-existing Symptoms */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-3xl shadow-xl border-2 border-red-200">
                            <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-8 text-center">
                                Co-existing Symptoms
                            </h3>
                            <p className="text-lg text-gray-700 mb-8 text-center">
                                These symptoms co-exist with the impediments:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {coExisting.map((symptom, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-6 rounded-xl shadow-lg text-center"
                                        whileHover={{ scale: 1.05, y: -5 }}
                                    >
                                        <div className="text-4xl mb-3">{symptom.emoji}</div>
                                        <p className="text-sm font-semibold text-gray-700">{symptom.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-sm text-red-700 italic text-center mt-8">
                                — Yoga Sūtra 1.31
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* We Suffer Because Of */}
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
                            We Suffer Because Of
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            The five afflictions (kleśas) that cause suffering and keep us bound to the cycle of rebirth.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12">
                        {afflictions.map((affliction, index) => (
                            <motion.div
                                key={index}
                                className={`bg-gradient-to-br ${affliction.gradient} p-8 rounded-2xl shadow-xl text-center border-2 border-white/50`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.08, y: -8, boxShadow: "0 25px 50px rgba(239,68,68,0.3)" }}
                            >
                                <div className="text-6xl mb-4">{affliction.emoji}</div>
                                <h3 className="text-xl font-heading font-bold text-gray-800 mb-4">
                                    {affliction.name}
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {affliction.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-amber-200">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Real happiness is not skin-deep. From the outside we cannot know if someone is suffering inside.
                                Ignorance of one's true identity leads to 'I am + something' – individuality. This leads to attraction
                                and repulsion and fear of death.
                            </p>
                            <p className="text-base text-gray-600 mb-6">
                                Ignorance here means to mistake the non-eternal for the eternal, impure for pure, evil for good and things for self.
                            </p>
                            <p className="text-lg text-amber-700 font-semibold italic text-center">
                                "As long as ignorance exists, its result will be repeated births, lives and chasing after enjoyment."
                            </p>
                            <p className="text-sm text-amber-700 text-center mt-4">
                                — Yoga Sūtra 2.13
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final Message */}
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
                            <div className="text-6xl mb-6">🌟</div>
                            <h3 className="text-3xl md:text-4xl font-heading font-semibold text-gray-800 mb-6">
                                The Path Forward
                            </h3>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                By recognizing these obstacles and afflictions, we take the first step toward overcoming them.
                                Through practice and detachment, we can transcend these barriers and move toward liberation.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
