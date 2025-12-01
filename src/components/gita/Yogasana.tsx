import { motion } from 'framer-motion';
import gitaBanner from '@/assets/gita-banner.jpg';
import yoga1 from '@/assets/yoga1.jpg';
import yoga2 from '@/assets/yoga2.jpg';
import yoga3 from '@/assets/yoga3.jpg';
import yoga4 from '@/assets/yoga4.jpg';
import yoga5 from '@/assets/yoga5.jpg';
import yoga6 from '@/assets/yoga6.jpg';
import yoga7 from '@/assets/yoga7.jpg';
import yoga8 from '@/assets/yoga8.jpg';

export function Yogasana() {
    const sunSalutations = [
        {
            sanskrit: "ॐ मित्राय नमः।",
            transliteration: "Oṃ mitrāya namaḥ",
            english: "A bow to the sun as friend",
        },
        {
            sanskrit: "ॐ रवये नमः।",
            transliteration: "Oṃ ravaye namaḥ",
            english: "as the shining one",
        },
        {
            sanskrit: "ॐ सूर्याय नमः।",
            transliteration: "Oṃ sūryāya namaḥ",
            english: "as the motivator to act",
        },
        {
            sanskrit: "ॐ भानवे नमः।",
            transliteration: "Oṃ bhānave namaḥ",
            english: "as the brilliant one",
        },
        {
            sanskrit: "ॐ खगाय नमः।",
            transliteration: "Oṃ khagāya namaḥ",
            english: "as the mover in the sky",
        },
        {
            sanskrit: "ॐ पूष्णे नमः।",
            transliteration: "Oṃ pūṣṇe namaḥ",
            english: "as strength giver",
        },
        {
            sanskrit: "ॐ हिरण्यगर्भाय नमः।",
            transliteration: "Oṃ hiraṇyagarbhāya namaḥ",
            english: "as nourisher",
        },
        {
            sanskrit: "ॐ मरीचये नमः।",
            transliteration: "Oṃ marīchaye namaḥ",
            english: "as the golden bodied one",
        },
        {
            sanskrit: "ॐ आदित्याय नमः।",
            transliteration: "Oṃ ādityāya namaḥ",
            english: "as the Lord of the dawn",
        },
        {
            sanskrit: "ॐ सवित्रे नमः।",
            transliteration: "Oṃ savitre namaḥ",
            english: "as the mother of the gods",
        },
        {
            sanskrit: "ॐ अर्काय नमः।",
            transliteration: "Oṃ arkāya namaḥ",
            english: "as beneficent",
        },
        {
            sanskrit: "ॐ भास्कराय नमः।",
            transliteration: "Oṃ bhāskarāya namaḥ",
            english: "as the energy giver",
        },
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={gitaBanner}
                        alt="Yogasana"
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
                            YOGĀSANA
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 font-heading italic">
                            Sūrya Namaskāraḥ - Sun Salutation
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Introduction */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-12 rounded-3xl shadow-2xl border-2 border-orange-200 text-center">
                            <div className="text-6xl mb-6">☀️</div>
                            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-gray-800 mb-6">
                                सूर्य-नमस्कारः
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-heading text-orange-700 mb-6">
                                sūrya-namaskāraḥ
                            </h3>
                            <h4 className="text-2xl md:text-3xl font-heading text-gray-700 mb-8">
                                Sun Salute
                            </h4>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                A complete yogāsana cycle for early morning exercise. Various salutes to the sun are recited between each ten-step yogāsana cycle.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Sun Salutation Sequence Images */}
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
                            The Complete Sequence
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            Follow these positions in sequence for a complete Sun Salutation practice.
                        </p>
                    </motion.div>

                    {/* Main Sequence Image */}
                    <motion.div
                        className="max-w-6xl mx-auto mb-12"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-200">
                            <img src={yoga5} alt="Surya Namaskar Complete Sequence" className="w-full h-auto" />
                        </div>
                    </motion.div>

                    {/* Individual Poses Grid - All 8 Poses */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Pose 1 - Ekam */}
                        <motion.div
                            className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-orange-200"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <img src={yoga3} alt="Samasthiti and Urdhva Hastasana" className="w-full h-auto" />
                            <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50">
                                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">1. एकम् (ekam)</h3>
                                <p className="text-base text-gray-700 mb-2">
                                    <span className="font-semibold">समस्थितिः</span> (samasthitiḥ)
                                </p>
                                <p className="text-sm text-gray-600 mb-3">Balanced pose</p>
                                <p className="text-base text-gray-700">
                                    <span className="font-semibold">ऊर्ध्व-हस्तासनम्</span> (ūrdhva-hastāsanam)
                                </p>
                                <p className="text-sm text-gray-600">Vertical-hand-pose</p>
                            </div>
                        </motion.div>

                        {/* Pose 2 - Dve */}
                        <motion.div
                            className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-orange-200"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <img src={yoga2} alt="Pada Hastasana" className="w-full h-auto" />
                            <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50">
                                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">2. द्वे (dve)</h3>
                                <p className="text-base text-gray-700 mb-2">
                                    <span className="font-semibold">पाद-हस्तासनम्</span> (pāda-hastāsanam)
                                </p>
                                <p className="text-sm text-gray-600">Forward bend</p>
                            </div>
                        </motion.div>

                        {/* Pose 3 - Trini */}
                        <motion.div
                            className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-orange-200"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <img src={yoga1} alt="Ekapada Prasarana Asanam" className="w-full h-auto" />
                            <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50">
                                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">3. त्रीणि (trīṇi)</h3>
                                <p className="text-base text-gray-700 mb-2">
                                    <span className="font-semibold">एकपाद-प्रसरण-आसनम्</span> (ekapāda-prasaraṇa-āsanam)
                                </p>
                                <p className="text-sm text-gray-600">One foot stretch pose</p>
                            </div>
                        </motion.div>

                        {/* Pose 5 - Pancha */}
                        <motion.div
                            className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-orange-200"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <img src={yoga8} alt="Sashtanga Namaskara" className="w-full h-auto" />
                            <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50">
                                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">5. पञ्च (pañcha)</h3>
                                <p className="text-base text-gray-700 mb-2">
                                    <span className="font-semibold">साष्टाङ्ग-नमस्कारासनम्</span> (sāṣṭāṅga-namaskārāsanam)
                                </p>
                                <p className="text-sm text-gray-600">Salute with eight-limbs pose</p>
                            </div>
                        </motion.div>

                        {/* Pose 7 - Sapta */}
                        <motion.div
                            className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-orange-200"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <img src={yoga7} alt="Adhomukha Shvanasana" className="w-full h-auto" />
                            <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50">
                                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">7. सप्त (sapta)</h3>
                                <p className="text-base text-gray-700 mb-2">
                                    <span className="font-semibold">अधोमुख-श्वानासनम्</span> (adhomukha-śvānāsanam)
                                </p>
                                <p className="text-sm text-gray-600">Down-facing dog pose</p>
                            </div>
                        </motion.div>

                        {/* Pose 8 - Ashta */}
                        <motion.div
                            className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-orange-200"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <img src={yoga6} alt="Ekapada Prasarana Asanam" className="w-full h-auto" />
                            <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50">
                                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">8. अष्ट (aṣṭa)</h3>
                                <p className="text-base text-gray-700 mb-2">
                                    <span className="font-semibold">एकपाद-प्रसरण-आसनम्</span> (ekapāda-prasaraṇa-āsanam)
                                </p>
                                <p className="text-sm text-gray-600">One foot stretch pose (other side)</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sun Salutation Mantras */}
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
                            Twelve Sun Salutations
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            Various salutes to the sun recited between each ten-step yogāsana cycle.
                        </p>
                    </motion.div>

                    {/* Mantras Image */}
                    <motion.div
                        className="max-w-5xl mx-auto mb-12"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-200">
                            <img src={yoga4} alt="Sun Salutation Mantras" className="w-full h-auto" />
                        </div>
                    </motion.div>

                    {/* Mantras Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {sunSalutations.map((salutation, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl shadow-xl border-2 border-orange-200"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(251,146,60,0.3)" }}
                            >
                                <div className="text-4xl mb-3 text-center">☀️</div>
                                <h3 className="text-xl font-heading text-gray-800 mb-2 text-center">
                                    {salutation.sanskrit}
                                </h3>
                                <p className="text-base text-orange-700 italic mb-2 text-center font-semibold">
                                    {salutation.transliteration}
                                </p>
                                <p className="text-sm text-gray-700 text-center">
                                    {salutation.english}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-[#f5f1e8] py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-12 rounded-3xl shadow-2xl border-2 border-orange-200">
                            <div className="text-6xl mb-6 text-center">🌅</div>
                            <h3 className="text-3xl md:text-4xl font-heading font-semibold text-gray-800 mb-6 text-center">
                                Benefits of Sūrya Namaskāra
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/70 p-6 rounded-xl">
                                    <h4 className="text-xl font-heading font-bold text-orange-700 mb-3">Physical Benefits</h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Improves flexibility and strength</li>
                                        <li>• Enhances cardiovascular health</li>
                                        <li>• Stimulates digestive system</li>
                                        <li>• Balances metabolism</li>
                                    </ul>
                                </div>
                                <div className="bg-white/70 p-6 rounded-xl">
                                    <h4 className="text-xl font-heading font-bold text-orange-700 mb-3">Mental Benefits</h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Calms the mind</li>
                                        <li>• Reduces stress and anxiety</li>
                                        <li>• Improves concentration</li>
                                        <li>• Promotes inner peace</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-center text-gray-700 mt-8 text-lg italic">
                                "Practice Sūrya Namaskāra early in the morning, facing the rising sun, for maximum benefit."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
