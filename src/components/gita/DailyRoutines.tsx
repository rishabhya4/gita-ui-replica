import { motion } from 'framer-motion';
import gitaBanner from '@/assets/gita-banner.jpg';
import G3 from '@/assets/G3.jpg';
import G4 from '@/assets/G4.jpg';
import G5 from '@/assets/G5.jpg';
import G6 from '@/assets/G6.jpg';

export function DailyRoutines() {
    const healthyLifestyleItems = [
        { title: "Get physical", emoji: "🤸", description: "Exercise and movement", gradient: "from-blue-100 to-cyan-100" },
        { title: "Stop for a little peace", emoji: "🧘", description: "Meditation and mindfulness", gradient: "from-purple-100 to-pink-100" },
        { title: "There is a time for everything", emoji: "⏰", description: "Proper scheduling", gradient: "from-amber-100 to-orange-100" },
        { title: "Sleep", emoji: "😴", description: "Restful sleep", gradient: "from-indigo-100 to-blue-100" },
        { title: "Friendships", emoji: "👥", description: "Social connections", gradient: "from-green-100 to-emerald-100" },
        { title: "Study", emoji: "📚", description: "Learning and growth", gradient: "from-yellow-100 to-amber-100" },
        { title: "Enough is enough", emoji: "🍽️", description: "Moderation in all things", gradient: "from-red-100 to-pink-100" },
        { title: "Food for the brain", emoji: "🥗", description: "Nourishing meals", gradient: "from-lime-100 to-green-100" },
    ];

    const morningRoutines = [
        { title: "Previous night prep", emoji: "🌙", description: "Prepare for tomorrow", gradient: "from-indigo-100 to-purple-100" },
        { title: "Adequate sleep", emoji: "😴", description: "7-8 hours of quality rest", gradient: "from-blue-100 to-indigo-100" },
        { title: "Drinking warm water", emoji: "💧", description: "Hydrate upon waking", gradient: "from-cyan-100 to-blue-100" },
        { title: "Expressing gratitude", emoji: "🙏", description: "Start with thankfulness", gradient: "from-amber-100 to-orange-100" },
        { title: "Oral hygiene & shower", emoji: "🚿", description: "Cleanse body and mind", gradient: "from-teal-100 to-cyan-100" },
        { title: "Evacuation", emoji: "🚽", description: "Natural bodily functions", gradient: "from-gray-100 to-slate-100" },
        { title: "Physical exercise", emoji: "🏃", description: "Energize your body", gradient: "from-green-100 to-emerald-100" },
        { title: "Conscious breathing", emoji: "🌬️", description: "Prāṇāyāma practice", gradient: "from-sky-100 to-blue-100" },
        { title: "Mental relaxation", emoji: "🧘", description: "Meditation and peace", gradient: "from-purple-100 to-pink-100" },
        { title: "Breakfast", emoji: "🍳", description: "Nourishing first meal", gradient: "from-yellow-100 to-amber-100" },
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
                        alt="Daily Routines"
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
                            DAILY ROUTINES
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 font-heading italic">
                            Dinacharya - The Art of Daily Living
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* A Healthy Lifestyle Section */}
            <section className="bg-[#f5f1e8] py-20 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
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
                            A Healthy Lifestyle
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            The Bhagavad Gita teaches us the importance of balance and discipline in daily life.
                            A structured routine aligned with natural rhythms brings harmony to body, mind, and spirit.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {healthyLifestyleItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`bg-gradient-to-br ${item.gradient} p-8 rounded-2xl shadow-xl text-center border-2 border-white/50 backdrop-blur-sm`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.08, y: -8, boxShadow: "0 25px 50px rgba(245,158,11,0.3)" }}
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

            {/* Best Time For Section with Images */}
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
                            Best Time For...?
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            According to Vedic wisdom, different times of day are suited for different activities,
                            aligning with the natural energy cycles.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
                        {/* Morning/Day Activities */}
                        <motion.div
                            className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 p-10 rounded-3xl shadow-2xl border-2 border-amber-200 relative overflow-hidden"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-300/20 rounded-full blur-2xl" />
                            <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-8 text-center relative z-10">
                                ☀️ Morning & Day (Pitta Time)
                            </h3>
                            <div className="space-y-6 relative z-10">
                                <div className="flex items-start gap-4 bg-white/70 p-4 rounded-xl backdrop-blur-sm">
                                    <span className="text-3xl">🔥</span>
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-lg">10 AM - 2 PM</h4>
                                        <p className="text-gray-700">Pitta fiery digestion, intellectual work, decision making</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 bg-white/70 p-4 rounded-xl backdrop-blur-sm">
                                    <span className="text-3xl">🌬️</span>
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-lg">2 PM - 6 PM</h4>
                                        <p className="text-gray-700">Vāta airy revision, meditation, creative activities</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Evening/Night Activities */}
                        <motion.div
                            className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 p-10 rounded-3xl shadow-2xl border-2 border-blue-200 relative overflow-hidden"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-300/20 rounded-full blur-2xl" />
                            <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-8 text-center relative z-10">
                                🌙 Evening & Night (Kapha Time)
                            </h3>
                            <div className="space-y-6 relative z-10">
                                <div className="flex items-start gap-4 bg-white/70 p-4 rounded-xl backdrop-blur-sm">
                                    <span className="text-3xl">💧</span>
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-lg">6 PM - 10 PM</h4>
                                        <p className="text-gray-700">Kapha watery structure building, family time, light dinner</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 bg-white/70 p-4 rounded-xl backdrop-blur-sm">
                                    <span className="text-3xl">🌙</span>
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-lg">10 PM - 2 AM</h4>
                                        <p className="text-gray-700">Pitta fiery sleep, body repair and rejuvenation</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Grid Section */}
                    <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[G3, G4, G5, G6].map((img, index) => (
                            <motion.div
                                key={index}
                                className="relative h-64 rounded-2xl overflow-hidden shadow-xl group"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={img} alt={`Routine ${index + 1}`} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Morning Routines Section */}
            <section className="bg-[#f5f1e8] py-20 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-amber-300/30 rounded-full blur-xl" />
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-300/30 rounded-full blur-xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-heading font-light text-gray-800 mb-6">
                            Morning Routines
                        </h2>
                        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
                            The most important part of the day is the start, when you can prepare for a wholesome and healthy day.
                        </p>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Before beginning your daily activities, these practices will set you up properly to have a brilliant day,
                            so you should wake up as early as possible—ideally before sunrise (Brahma Muhurta).
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-7xl mx-auto">
                        {morningRoutines.map((routine, index) => (
                            <motion.div
                                key={index}
                                className={`bg-gradient-to-br ${routine.gradient} p-6 rounded-2xl shadow-xl text-center border-2 border-white/50`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ scale: 1.08, y: -8, boxShadow: "0 20px 40px rgba(245,158,11,0.3)" }}
                            >
                                <div className="text-5xl mb-4">{routine.emoji}</div>
                                <h4 className="text-sm font-heading font-bold text-gray-800 mb-2">
                                    {routine.title}
                                </h4>
                                <p className="text-xs text-gray-700">{routine.description}</p>
                            </motion.div>
                        ))}
                    </div>
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
                            Reflect on your relationship with time and daily routines. Which type are you?
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

            {/* FOOD Section - Annam */}
            <section className="bg-[#f5f1e8] py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-200/20 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-heading font-light text-gray-800 mb-6">
                            Annam - Sacred Food
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
                            "Food is Brahman" - The Gita teaches that what we consume affects not just our body,
                            but also our mind and spirit. Mindful eating is a form of yoga.
                        </p>
                        <p className="text-base text-gray-600 max-w-3xl mx-auto italic">
                            "Taste your food, don't eat your ideas. Fresh, local, pure, seasonal, wholesome, delicious."
                        </p>
                    </motion.div>

                    {/* Six Tastes */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-8 text-center">
                            Six Tastes - षड् रसाः (Ṣaḍ Rasāḥ)
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                            {[
                                { name: "Madhuram", english: "Sweet", emoji: "🍯", gradient: "from-yellow-100 to-amber-100" },
                                { name: "Amlam", english: "Sour", emoji: "🍋", gradient: "from-lime-100 to-green-100" },
                                { name: "Lavaṇam", english: "Salty", emoji: "🧂", gradient: "from-blue-100 to-cyan-100" },
                                { name: "Kaṭuḥ", english: "Spicy", emoji: "🌶️", gradient: "from-red-100 to-orange-100" },
                                { name: "Tiktam", english: "Bitter", emoji: "🌿", gradient: "from-green-100 to-emerald-100" },
                                { name: "Kaśāyam", english: "Astringent", emoji: "🫘", gradient: "from-purple-100 to-pink-100" },
                            ].map((taste, index) => (
                                <motion.div
                                    key={index}
                                    className={`bg-gradient-to-br ${taste.gradient} p-6 rounded-2xl shadow-lg text-center border-2 border-white/50`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                >
                                    <div className="text-4xl mb-2">{taste.emoji}</div>
                                    <h4 className="text-sm font-heading font-bold text-gray-800 mb-1">{taste.english}</h4>
                                    <p className="text-xs text-gray-600">{taste.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Eating Guidelines - 12 Principles */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-8 text-center">
                            Twelve Principles of Mindful Eating
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {[
                                { sanskrit: "uṣṇaṃ bhuñjītha", english: "Eat freshly prepared food", emoji: "🍲", desc: "Warm, fresh meals nourish body and soul" },
                                { sanskrit: "snigdhaṃ bhuñjītha", english: "Eat tasty food", emoji: "😋", desc: "Food should be delicious and satisfying" },
                                { sanskrit: "mātrāvat bhuñjītha", english: "Eat moderate quantities", emoji: "⚖️", desc: "Half full of food, quarter liquid, quarter empty" },
                                { sanskrit: "jīrṇe sati eva bhuñjītha", english: "Eat after proper digestion", emoji: "⏰", desc: "Wait for previous meal to digest" },
                                { sanskrit: "vīryāviruddhaṃ bhuñjītha", english: "Eat compatible foods", emoji: "🥗", desc: "Combine foods suited to your nature" },
                                { sanskrit: "ajalpan bhuñjītha", english: "Eat without chatting", emoji: "🤫", desc: "Focus on your food, not conversation" },
                                { sanskrit: "nāti drutaṃ bhuñjītha", english: "Don't eat too quickly", emoji: "🐌", desc: "Take time to chew and savor" },
                                { sanskrit: "nāti vilambitaṃ bhuñjītha", english: "Don't eat too slowly", emoji: "🕐", desc: "Maintain a steady, mindful pace" },
                                { sanskrit: "ahasan bhuñjītha", english: "Avoid extreme emotions", emoji: "😌", desc: "Eat in a calm, peaceful state" },
                                { sanskrit: "iṣṭadeśa-iṣṭasarvopakaraṇaḥ", english: "Eat in pleasant surroundings", emoji: "🏡", desc: "Choose a comfortable, clean place" },
                                { sanskrit: "ātmānamabhisamīkṣya bhuñjītha", english: "Eat until satisfied, not full", emoji: "✨", desc: "Listen to your body's signals" },
                                { sanskrit: "tanmanāḥ bhuñjītha", english: "Eat with full awareness", emoji: "🧘", desc: "Be present and grateful for your meal" },
                            ].map((principle, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-100 hover:border-green-300 transition-all"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(34,197,94,0.2)" }}
                                >
                                    <div className="text-4xl mb-3">{principle.emoji}</div>
                                    <h4 className="text-lg font-heading font-bold text-gray-800 mb-2">{principle.english}</h4>
                                    <p className="text-sm text-green-700 italic mb-2">{principle.sanskrit}</p>
                                    <p className="text-sm text-gray-600">{principle.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Seven Dhatus */}
                    <motion.div
                        className="mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl shadow-2xl border-2 border-green-200 max-w-5xl mx-auto">
                            <h3 className="text-3xl font-heading font-semibold text-gray-800 mb-6 text-center">
                                Seven Dhātus - Body Tissues
                            </h3>
                            <p className="text-lg text-gray-700 mb-8 text-center">
                                From what we eat and drink, our body creates seven essential tissues.
                                Wholesome food creates a strong body and pure mind.
                            </p>
                            <div className="grid md:grid-cols-7 gap-4">
                                {[
                                    { name: "Plasma", emoji: "💧" },
                                    { name: "Blood", emoji: "🩸" },
                                    { name: "Muscle", emoji: "💪" },
                                    { name: "Fat", emoji: "🫒" },
                                    { name: "Bone", emoji: "🦴" },
                                    { name: "Marrow", emoji: "🧠" },
                                    { name: "Reproductive", emoji: "✨" },
                                ].map((dhatu, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-4 rounded-xl shadow-md text-center"
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="text-3xl mb-2">{dhatu.emoji}</div>
                                        <p className="text-xs font-semibold text-gray-700">{dhatu.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-8 text-center">
                                <p className="text-base text-gray-700 italic">
                                    "If we ingest wholesome food, we get a strong and vigorous body and better-quality thoughts and feelings."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-[#f5f1e8] py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-orange-100/50" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-white/80 backdrop-blur-sm p-12 md:p-16 rounded-3xl shadow-2xl border-2 border-amber-200">
                            <div className="text-6xl mb-6">🌅</div>
                            <h3 className="text-4xl md:text-5xl font-heading font-semibold text-gray-800 mb-6">
                                Start Your Journey Today
                            </h3>
                            <p className="text-2xl text-gray-700 mb-6 leading-relaxed font-heading italic">
                                "Yoga is the journey of the self, through the self, to the self."
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Begin with one routine at a time. Small, consistent steps lead to lasting transformation.
                                The Gita teaches us that discipline and dedication bring us closer to our true nature.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <div className="bg-gradient-to-r from-amber-100 to-orange-100 px-6 py-3 rounded-full">
                                    <span className="text-gray-800 font-semibold">🌄 Wake Early</span>
                                </div>
                                <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-3 rounded-full">
                                    <span className="text-gray-800 font-semibold">🧘 Practice Daily</span>
                                </div>
                                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 rounded-full">
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
