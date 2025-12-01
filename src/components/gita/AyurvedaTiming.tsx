import { motion } from 'framer-motion';
import gitaBanner from '@/assets/gita-banner.jpg';

export function AyurvedaTiming() {
    const healthyLifestyle = [
        { title: "Get physical", emoji: "🤸", description: "Exercise and movement" },
        { title: "Stop for a little peace", emoji: "🧘", description: "Meditation and mindfulness" },
        { title: "There is a time for everything", emoji: "⏰", description: "Proper scheduling" },
        { title: "Sleep", emoji: "😴", description: "Restful sleep" },
        { title: "Friendships", emoji: "👥", description: "Social connections" },
        { title: "Study", emoji: "📚", description: "Learning and growth" },
        { title: "Enough is enough", emoji: "🍽️", description: "Moderation in all things" },
        { title: "Food for the brain", emoji: "🥗", description: "Nourishing meals" },
    ];

    const timeManagementTypes = [
        {
            type: "A Wise Person",
            quote: "I own time.",
            description: "Lives in harmony with natural rhythms, follows a disciplined routine, and maintains balance in all activities.",
            color: "from-green-100 to-emerald-100",
            textColor: "text-green-800",
            icon: "🧘‍♂️"
        },
        {
            type: "An Inbetweener",
            quote: "I struggle with time.",
            description: "Sometimes follows routines, occasionally misses practices, and is working towards better time management.",
            color: "from-amber-100 to-yellow-100",
            textColor: "text-amber-800",
            icon: "🤔"
        },
        {
            type: "A Confused Person",
            quote: "I cannot manage time.",
            description: "Lacks structure, struggles with consistency, and needs guidance to establish healthy daily rhythms.",
            color: "from-red-100 to-orange-100",
            textColor: "text-red-800",
            icon: "😵"
        }
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={gitaBanner}
                        alt="Ayurveda Timing"
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
                            TIMING
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 font-heading italic">
                            Living in Harmony with Natural Rhythms
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* A Healthy Lifestyle Section */}
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
                            A Healthy Lifestyle
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            Balance and discipline in daily life brings harmony to body, mind, and spirit.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {healthyLifestyle.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-2xl shadow-xl text-center border-2 border-white/50"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.08, y: -8, boxShadow: "0 25px 50px rgba(34,197,94,0.3)" }}
                            >
                                <div className="text-6xl mb-4">{item.emoji}</div>
                                <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-700">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Super Lifestyle Section */}
            <section className="bg-[#f5f1e8] py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl shadow-2xl border-2 border-amber-200">
                            <div className="text-6xl mb-6 text-center">🌅</div>
                            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-gray-800 mb-6 text-center">
                                Super Lifestyle - Morning Routines
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
                                The most important part of the day is the start, when you can prepare for a wholesome and healthy day.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed text-center">
                                Before going to school or to work there are many activities that will set you up properly to have a brilliant day, so you should <span className="font-bold text-amber-700">get up as early as possible</span>.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Time Management Types Section */}
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
                            If You Were Living Like...
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            How did you rate in the routines below? Reflect on your relationship with time and daily routines.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {timeManagementTypes.map((type, index) => (
                            <motion.div
                                key={index}
                                className={`bg-gradient-to-br ${type.color} p-10 rounded-3xl shadow-2xl border-2 border-white/50 relative overflow-hidden`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05, boxShadow: "0 30px 60px rgba(0,0,0,0.2)" }}
                            >
                                <div className="absolute top-4 right-4 text-6xl opacity-20">{type.icon}</div>
                                <div className="text-5xl mb-4">{type.icon}</div>
                                <h3 className={`text-2xl font-heading font-bold ${type.textColor} mb-4 text-center`}>
                                    {type.type}
                                </h3>
                                <p className={`text-2xl font-heading italic ${type.textColor} mb-6 text-center font-bold`}>
                                    "{type.quote}"
                                </p>
                                <p className="text-gray-700 leading-relaxed text-center text-base">
                                    {type.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
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
                            <div className="text-6xl mb-6">⏰</div>
                            <h3 className="text-3xl md:text-4xl font-heading font-semibold text-gray-800 mb-6">
                                Master Your Time, Master Your Life
                            </h3>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                Living in harmony with natural rhythms and maintaining a consistent daily routine is the foundation of health and well-being in Āyurveda.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-3 rounded-full">
                                    <span className="text-gray-800 font-semibold">🌄 Wake Early</span>
                                </div>
                                <div className="bg-gradient-to-r from-amber-100 to-orange-100 px-6 py-3 rounded-full">
                                    <span className="text-gray-800 font-semibold">⏰ Follow Routine</span>
                                </div>
                                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 px-6 py-3 rounded-full">
                                    <span className="text-gray-800 font-semibold">😴 Rest Well</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
