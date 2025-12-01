import { motion } from 'framer-motion';
import gitaBanner from '@/assets/gita-banner.jpg';
import G3 from '@/assets/G3.jpg';
import G4 from '@/assets/G4.jpg';
import G5 from '@/assets/G5.jpg';

export function AyurvedaIntroduction() {
    const doshas = [
        {
            name: "Vāta",
            animal: "Monkey",
            emoji: "🐒",
            description: "Vāta energy is like a monkey: playful, enthusiastic and full of movement but in turn fearful and running away leaving tasks undone.",
            gradient: "from-blue-100 to-cyan-100",
        },
        {
            name: "Pitta",
            animal: "Tiger",
            emoji: "🐅",
            description: "Pitta energy is like a tiger: majestic, in control, looking good, playing hard, but can get angry and fierce.",
            gradient: "from-orange-100 to-amber-100",
        },
        {
            name: "Kapha",
            animal: "Elephant",
            emoji: "🐘",
            description: "Kapha energy has stability and strength like an elephant with a great memory; it can hold the family together but can be stubborn and in denial of the facts.",
            gradient: "from-green-100 to-emerald-100",
        },
    ];

    const dhatus = [
        { name: "Plasma", emoji: "💧" },
        { name: "Blood", emoji: "🩸" },
        { name: "Muscle", emoji: "💪" },
        { name: "Fat", emoji: "🫒" },
        { name: "Bone", emoji: "🦴" },
        { name: "Marrow", emoji: "🧠" },
        { name: "Reproductive fluids", emoji: "✨" },
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={gitaBanner}
                        alt="Ayurveda Introduction"
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
                            ĀYURVEDA
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 font-heading italic">
                            The Science of Life
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Introduction - What is Healthy */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-12 rounded-3xl shadow-2xl border-2 border-green-200 text-center">
                            <div className="text-6xl mb-6">🌿</div>
                            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-gray-800 mb-6">
                                What is Healthy?
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Those who have balanced <span className="font-bold text-green-700">doṣas</span>, <span className="font-bold text-green-700">agnis</span>, <span className="font-bold text-green-700">dhātus</span> and <span className="font-bold text-green-700">malas</span> and who have a sense of well-being in themselves, their mind and their senses – are called <span className="font-bold text-green-700">HEALTHY</span>.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Doshas Section */}
            <section className="bg-[#f5f1e8] py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-heading font-light text-gray-800 mb-6">
                            The Three Doṣas
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            Doṣas are three energies - <span className="font-semibold">vāta</span> energy reflects characteristics of the wind, <span className="font-semibold">pitta</span> energy reflects qualities of fire; and <span className="font-semibold">kapha</span> energy reflects the nature of water. These energies make us behave in a particular way and affect the nature of movement, transformation and structures in our body.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {doshas.map((dosha, index) => (
                            <motion.div
                                key={index}
                                className={`bg-gradient-to-br ${dosha.gradient} p-10 rounded-3xl shadow-xl border-2 border-white/50`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05, y: -8, boxShadow: "0 25px 50px rgba(34,197,94,0.3)" }}
                            >
                                <div className="text-7xl mb-6 text-center">{dosha.emoji}</div>
                                <h3 className="text-3xl font-heading font-bold text-gray-800 mb-3 text-center">
                                    {dosha.name}
                                </h3>
                                <p className="text-lg text-gray-600 mb-6 text-center italic">
                                    Like a {dosha.animal}
                                </p>
                                <p className="text-base text-gray-700 leading-relaxed text-center">
                                    {dosha.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Four Key Elements */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Malas */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-3xl shadow-xl border-2 border-amber-200 h-full">
                                <div className="text-6xl mb-6 text-center">🚿</div>
                                <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-6 text-center">
                                    Malas - Waste Products
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    The seven types of malas or waste products coming from the body are stool, urine and sweat, plus excretions from the nose, eyes and ears as well as hair itself.
                                </p>
                            </div>
                        </motion.div>

                        {/* Agnis */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-3xl shadow-xl border-2 border-red-200 h-full">
                                <div className="text-6xl mb-6 text-center">🔥</div>
                                <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-6 text-center">
                                    Agnis - Digestive Fires
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    There are <span className="font-bold">13 agnis</span> or digestive fires to convert food into body and grey matter.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Dhatus Section */}
            <section className="bg-[#f5f1e8] py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-12 rounded-3xl shadow-2xl border-2 border-green-200">
                            <h3 className="text-4xl font-heading font-semibold text-gray-800 mb-8 text-center">
                                Seven Dhātus - Body Tissues
                            </h3>
                            <p className="text-lg text-gray-700 mb-10 text-center">
                                The seven dhātus that constitute the body are essential building blocks of our physical form.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
                                {dhatus.map((dhatu, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-6 rounded-xl shadow-lg text-center"
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="text-4xl mb-3">{dhatu.emoji}</div>
                                        <p className="text-sm font-semibold text-gray-700">{dhatu.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Images Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[G3, G4, G5].map((img, index) => (
                            <motion.div
                                key={index}
                                className="relative h-80 rounded-3xl overflow-hidden shadow-2xl group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={img} alt={`Ayurveda ${index + 1}`} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Quote */}
            <section className="bg-[#f5f1e8] py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-12 md:p-16 rounded-3xl shadow-2xl border-2 border-green-200 text-center">
                            <div className="text-6xl mb-6">🕉️</div>
                            <p className="text-2xl md:text-3xl font-heading text-gray-800 mb-6 leading-relaxed">
                                "Balance in body, mind, and spirit is the foundation of health."
                            </p>
                            <p className="text-lg text-green-700 font-semibold">
                                — Āyurveda Wisdom
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
