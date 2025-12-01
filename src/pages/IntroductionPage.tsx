import { Header } from '@/components/gita/Header';
import { Introduction } from '@/components/gita/Introduction';
import { Footer } from '@/components/gita/Footer';
import { motion } from 'framer-motion';

export default function IntroductionPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <Introduction />
            </motion.main>

            <Footer />
        </div>
    );
}
