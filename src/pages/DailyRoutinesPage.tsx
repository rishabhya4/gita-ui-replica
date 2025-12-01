import { Header } from '@/components/gita/Header';
import { DailyRoutines } from '@/components/gita/DailyRoutines';
import { Footer } from '@/components/gita/Footer';
import { motion } from 'framer-motion';

export default function DailyRoutinesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <DailyRoutines />
            </motion.main>

            <Footer />
        </div>
    );
}
