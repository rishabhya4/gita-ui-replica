import { motion } from 'framer-motion';
import gitaBanner from '@/assets/gita-banner.jpg';
import G3 from '@/assets/G3.jpg';
import G4 from '@/assets/G4.jpg';

export function YogaIntroduction() {
    const gunas = [
        { name: "Rājasika", description: "Passionate, active, restless", emoji: "🔥", gradient: "from-red-100 to-orange-100" },
        { name: "Tāmasika", description: "Dull, inert, ignorant", emoji: "😴", gradient: "from-gray-100 to-slate-100" },
        { name: "Sāttvika and Rājasika", description: "Mixed qualities", emoji: "⚖️", gradient: "from-yellow-100 to-amber-100" },
        { name: "Sāttvika", description: "Pure, harmonious, balanced", emoji: "✨", gradient: "from-blue-100 to-cyan-100" },
        { name: "No Guṇas: Samādhi", description: "Beyond all qualities", emoji: "🕉️", gradient: "from-purple-100 to-pink-100" },
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={gitaBanner}
                        alt="Yoga Introduction"
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
                            INTRODUCTION
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 font-heading italic">
                            Patañjali Yogasūtras
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Patanjali Yoga Sutras Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-heading font-light text-gray-800 mb-8 text-center">
                            Patañjali Yogasūtras
                        </h2>
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-10 rounded-3xl shadow-xl border-2 border-purple-200">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                A few thousand years ago, <span className="font-bold text-purple-700">Patañjali</span>, a sage from India,
                                developed a scientific step-by-step approach to lead ordinary human beings from the common experience of
                                chaos, confusion and negative emotions to the highest level of well-being.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                This manual contains <span className="font-bold">196 statements (sūtras)</span> in four chapters.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bhagavad Gita Quote */}
            <section className="bg-[#f5f1e8] py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-white p-12 rounded-3xl shadow-2xl border-2 border-amber-200">
                            <p className="text-xl text-gray-700 leading-relaxed mb-4">
                                "For one who has conquered the self by himself, the self is a friend."
                            </p>
                            <p className="text-base text-gray-600 italic mb-6">
                                bandurātmā'tmanastasya yenātmaivātmanā jitaḥ.
                            </p>
                            <p className="text-xl text-gray-700 leading-relaxed mb-4">
                                "But for the unconquered self in conflict, the self is indeed like an enemy."
                            </p>
                            <p className="text-base text-gray-600 italic mb-6">
                                anātmanastu śatrutve vartetātmaiva śatruvat.
                            </p>
                            <p className="text-sm text-amber-700 font-semibold text-center">
                                — Bhagavad Gītā 6.6
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Samadhi Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-3xl shadow-xl border-2 border-purple-200 h-full">
                                <div className="text-6xl mb-6 text-center">🕉️</div>
                                <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-6 text-center">
                                    Samādhi
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    Etymology of Yoga is <span className="font-semibold">'yuj samādhau.'</span>
                                    'In samādhi' and 'in joining, uniting.'
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Samādhi is <span className="font-bold text-purple-700">unconditional happiness</span>.
                                    Glimpses of samādhi on this journey should be taken as encouragement and proof of progress
                                    that mind and heart are getting calmer.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-3xl shadow-xl border-2 border-blue-200 h-full">
                                <div className="text-6xl mb-6 text-center">🧘</div>
                                <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-6 text-center">
                                    Haṭha Yoga
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    Yoga teachers, yoga courses and books usually teach <span className="font-semibold">āsanas</span> or postures
                                    and <span className="font-semibold">prāṇāyāma</span> or breathing techniques. This is called Haṭha Yoga.
                                    It is a preparation for meditation.
                                </p>
                                <div className="bg-white/70 p-4 rounded-xl mb-4">
                                    <p className="text-center text-gray-700 font-semibold">
                                        ha - ṭha - yoga
                                    </p>
                                    <p className="text-center text-gray-600">
                                        breath - mind - joining
                                    </p>
                                </div>
                                <p className="text-base text-gray-600">
                                    Haṭha Yoga also describes methods for cleaning the physical body inside and outside in preparation for meditation.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gunas Section */}
            <section className="bg-[#f5f1e8] py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-heading font-light text-gray-800 mb-6">
                            Guṇas - Qualities of Nature
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            These movements can be classified according to the three guṇas - fundamental qualities that influence our thoughts and actions.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-5 gap-6 max-w-7xl mx-auto mb-16">
                        {gunas.map((guna, index) => (
                            <motion.div
                                key={index}
                                className={`bg-gradient-to-br ${guna.gradient} p-8 rounded-2xl shadow-xl text-center border-2 border-white/50`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -8 }}
                            >
                                <div className="text-5xl mb-4">{guna.emoji}</div>
                                <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">
                                    {guna.name}
                                </h3>
                                <p className="text-sm text-gray-700">{guna.description}</p>
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
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-10 rounded-3xl shadow-2xl border-2 border-purple-200">
                            <p className="text-2xl text-gray-800 leading-relaxed mb-6 text-center font-heading">
                                "तदा द्रष्टुः स्वरूपेऽवस्थानम्"
                            </p>
                            <p className="text-xl text-gray-700 leading-relaxed mb-4 text-center">
                                tadā draṣṭuḥ svarūpe'vasthānam
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed text-center">
                                Then the seer abides in its own true nature.
                            </p>
                            <p className="text-sm text-purple-700 font-semibold text-center mt-4">
                                — Yoga Sūtra 1.3
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Otherwise Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-3xl shadow-xl border-2 border-amber-200">
                            <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-6 text-center">
                                Otherwise...
                            </h3>
                            <p className="text-xl text-gray-700 leading-relaxed mb-4 text-center">
                                "Otherwise, the seer takes on the same form as the thoughts."
                            </p>
                            <p className="text-lg text-gray-600 italic text-center">
                                vṛittisārūpyamitaratra
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bhagavad Gita Quote 2 */}
            <section className="bg-[#f5f1e8] py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-white p-12 rounded-3xl shadow-2xl border-2 border-green-200">
                            <div className="text-6xl mb-6 text-center">🧘‍♂️</div>
                            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
                                "Yoga eliminates misery in a person who is moderate with food, leisure and work and also measured in sleep and wakefulness."
                            </p>
                            <p className="text-base text-gray-600 italic mb-4 text-center">
                                yuktāhāravihārasya yuktaceṣṭasya karmasu. yuktasvapnāvabodhasya yogo bhavati duḥkhahā.
                            </p>
                            <p className="text-sm text-green-700 font-semibold text-center">
                                — Bhagavad Gītā 6.17
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Speech Discipline */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-12 rounded-3xl shadow-2xl border-2 border-blue-200">
                            <div className="text-6xl mb-6 text-center">💬</div>
                            <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-6 text-center">
                                The Discipline of Speech
                            </h3>
                            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
                                "Speech that hurts no one, that is true, loving, beneficial and supported by regular study constitutes the discipline of speech."
                            </p>
                            <p className="text-base text-gray-600 italic text-center">
                                anudvegakaraṃ vākyaṃ satyaṃ priyahitaṃ ca yat. svādhyāya-abhyasanaṃ caiva vāṅmayaṃ tapa ucyate.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
