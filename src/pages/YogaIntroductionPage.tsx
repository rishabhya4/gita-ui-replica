import { Header } from '@/components/gita/Header';
import { YogaIntroduction } from '@/components/gita/YogaIntroduction';
import { Footer } from '@/components/gita/Footer';
import { motion } from 'framer-motion';

export default function YogaIntroductionPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <YogaIntroduction />
            </motion.main>

            <Footer />
        </div>
    );
}
