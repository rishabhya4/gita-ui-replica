// Bhagavad Gita Chapter and Verse Data
// API Integration Points: Replace with actual API calls when available

export interface Chapter {
  id: number;
  number: number;
  title: string;
  sanskritTitle: string;
  transliteration: string;
  verseCount: number;
  summary: string;
}

export interface Verse {
  id: number;
  chapterId: number;
  verseNumber: string;
  sanskritText: string;
  transliteration: string;
  translation: string;
  audioUrl?: string;
}

// Complete 18 chapters of Bhagavad Gita
export const chapters: Chapter[] = [
  {
    id: 1,
    number: 1,
    title: "Arjuna's Dilemma",
    sanskritTitle: "अर्जुनविषादयोग",
    transliteration: "Arjuna Viṣāda Yoga",
    verseCount: 47,
    summary: "Arjuna's despondency on seeing his relatives arrayed for battle."
  },
  {
    id: 2,
    number: 2,
    title: "The Yoga of Knowledge",
    sanskritTitle: "सांख्ययोग",
    transliteration: "Sāṅkhya Yoga",
    verseCount: 72,
    summary: "Krishna begins his teachings on the immortal soul and duty."
  },
  {
    id: 3,
    number: 3,
    title: "The Yoga of Action",
    sanskritTitle: "कर्मयोग",
    transliteration: "Karma Yoga",
    verseCount: 43,
    summary: "The importance of performing one's duty without attachment."
  },
  {
    id: 4,
    number: 4,
    title: "The Yoga of Knowledge and Action",
    sanskritTitle: "ज्ञानकर्मसंन्यासयोग",
    transliteration: "Jñāna Karma Sannyāsa Yoga",
    verseCount: 42,
    summary: "The yoga of renunciation of action through knowledge."
  },
  {
    id: 5,
    number: 5,
    title: "The Yoga of Renunciation",
    sanskritTitle: "कर्मसंन्यासयोग",
    transliteration: "Karma Sannyāsa Yoga",
    verseCount: 29,
    summary: "The renunciation of actions and the path to liberation."
  },
  {
    id: 6,
    number: 6,
    title: "The Yoga of Meditation",
    sanskritTitle: "आत्मसंयमयोग",
    transliteration: "Ātma Saṁyama Yoga",
    verseCount: 47,
    summary: "The practice of meditation and self-control."
  },
  {
    id: 7,
    number: 7,
    title: "The Yoga of Knowledge and Wisdom",
    sanskritTitle: "ज्ञानविज्ञानयोग",
    transliteration: "Jñāna Vijñāna Yoga",
    verseCount: 30,
    summary: "Knowledge of the Absolute and the relative manifestation."
  },
  {
    id: 8,
    number: 8,
    title: "The Yoga of the Imperishable Brahman",
    sanskritTitle: "अक्षरब्रह्मयोग",
    transliteration: "Akṣara Brahma Yoga",
    verseCount: 28,
    summary: "The path to the imperishable Brahman."
  },
  {
    id: 9,
    number: 9,
    title: "The Yoga of Royal Knowledge",
    sanskritTitle: "राजविद्याराजगुह्ययोग",
    transliteration: "Rāja Vidyā Rāja Guhya Yoga",
    verseCount: 34,
    summary: "The most secret and sovereign knowledge."
  },
  {
    id: 10,
    number: 10,
    title: "The Yoga of Divine Manifestations",
    sanskritTitle: "विभूतियोग",
    transliteration: "Vibhūti Yoga",
    verseCount: 42,
    summary: "The divine glories and manifestations of the Lord."
  },
  {
    id: 11,
    number: 11,
    title: "The Yoga of the Vision of the Universal Form",
    sanskritTitle: "विश्वरूपदर्शनयोग",
    transliteration: "Viśvarūpa Darśana Yoga",
    verseCount: 55,
    summary: "Arjuna beholds the cosmic form of the Lord."
  },
  {
    id: 12,
    number: 12,
    title: "The Yoga of Devotion",
    sanskritTitle: "भक्तियोग",
    transliteration: "Bhakti Yoga",
    verseCount: 20,
    summary: "The path of loving devotion to the Lord."
  },
  {
    id: 13,
    number: 13,
    title: "The Yoga of the Field and the Knower",
    sanskritTitle: "क्षेत्रक्षेत्रज्ञविभागयोग",
    transliteration: "Kṣetra Kṣetrajña Vibhāga Yoga",
    verseCount: 35,
    summary: "The distinction between the body and the soul."
  },
  {
    id: 14,
    number: 14,
    title: "The Yoga of the Three Gunas",
    sanskritTitle: "गुणत्रयविभागयोग",
    transliteration: "Guṇatraya Vibhāga Yoga",
    verseCount: 27,
    summary: "The three modes of material nature."
  },
  {
    id: 15,
    number: 15,
    title: "The Yoga of the Supreme Person",
    sanskritTitle: "पुरुषोत्तमयोग",
    transliteration: "Puruṣottama Yoga",
    verseCount: 20,
    summary: "The Supreme Person and the eternal tree of existence."
  },
  {
    id: 16,
    number: 16,
    title: "The Yoga of Divine and Demoniac Natures",
    sanskritTitle: "दैवासुरसम्पद्विभागयोग",
    transliteration: "Daivāsura Sampad Vibhāga Yoga",
    verseCount: 24,
    summary: "The divine and demoniac qualities in humans."
  },
  {
    id: 17,
    number: 17,
    title: "The Yoga of Threefold Faith",
    sanskritTitle: "श्रद्धात्रयविभागयोग",
    transliteration: "Śraddhātraya Vibhāga Yoga",
    verseCount: 28,
    summary: "The three types of faith according to the gunas."
  },
  {
    id: 18,
    number: 18,
    title: "The Yoga of Liberation",
    sanskritTitle: "मोक्षसंन्यासयोग",
    transliteration: "Mokṣa Sannyāsa Yoga",
    verseCount: 78,
    summary: "The conclusion: renunciation and liberation."
  }
];

// Sample verses for demonstration (Chapter 2 - most famous verses)
export const sampleVerses: Record<number, Verse[]> = {
  1: [
    {
      id: 101,
      chapterId: 1,
      verseNumber: "1.1",
      sanskritText: "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||१||",
      transliteration: "dhṛtarāṣṭra uvāca | dharmakṣetre kurukṣetre samavetā yuyutsavaḥ | māmakāḥ pāṇḍavāścaiva kimakurvata sañjaya ||1||",
      translation: "Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu do when they assembled on the sacred field of Kurukshetra, eager for battle?"
    },
    {
      id: 102,
      chapterId: 1,
      verseNumber: "1.2",
      sanskritText: "सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | आचार्यमुपसंगम्य राजा वचनमब्रवीत् ||२||",
      transliteration: "sañjaya uvāca | dṛṣṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanastadā | ācāryamupasaṅgamya rājā vacanamabravīt ||2||",
      translation: "Sanjaya said: Having seen the army of the Pandavas arrayed in battle formation, King Duryodhana approached his teacher Drona and spoke these words."
    },
    {
      id: 103,
      chapterId: 1,
      verseNumber: "1.3",
      sanskritText: "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् | व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ||३||",
      transliteration: "paśyaitāṁ pāṇḍuputrāṇāmācārya mahatīṁ camūm | vyūḍhāṁ drupadaputreṇa tava śiṣyeṇa dhīmatā ||3||",
      translation: "Behold, O teacher, this mighty army of the sons of Pandu, arrayed by the son of Drupada, your wise disciple."
    }
  ],
  2: [
    {
      id: 201,
      chapterId: 2,
      verseNumber: "2.1",
      sanskritText: "सञ्जय उवाच | तं तथा कृपयाविष्टमश्रुपूर्णाकुलेक्षणम् | विषीदन्तमिदं वाक्यमुवाच मधुसूदनः ||१||",
      transliteration: "sañjaya uvāca | taṁ tathā kṛpayāviṣṭamaśrupūrṇākulekṣaṇam | viṣīdantamidaṁ vākyamuvāca madhusūdanaḥ ||1||",
      translation: "Sanjaya said: To him who was thus overcome with pity, whose eyes were filled with tears and troubled, and who was despondent, Madhusudana spoke these words."
    },
    {
      id: 202,
      chapterId: 2,
      verseNumber: "2.11",
      sanskritText: "श्रीभगवानुवाच | अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे | गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः ||११||",
      transliteration: "śrībhagavānuvāca | aśocyānanvaśocastvaṁ prajñāvādāṁśca bhāṣase | gatāsūnagatāsūṁśca nānuśocanti paṇḍitāḥ ||11||",
      translation: "The Blessed Lord said: You grieve for those who should not be grieved for, yet you speak words of wisdom. The wise grieve neither for the living nor for the dead."
    },
    {
      id: 203,
      chapterId: 2,
      verseNumber: "2.12",
      sanskritText: "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः | न चैव न भविष्यामः सर्वे वयमतः परम् ||१२||",
      transliteration: "na tvevāhaṁ jātu nāsaṁ na tvaṁ neme janādhipāḥ | na caiva na bhaviṣyāmaḥ sarve vayamataḥ param ||12||",
      translation: "Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be."
    },
    {
      id: 204,
      chapterId: 2,
      verseNumber: "2.13",
      sanskritText: "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा | तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति ||१३||",
      transliteration: "dehino'sminyathā dehe kaumāraṁ yauvanaṁ jarā | tathā dehāntaraprāptirdhīrastatra na muhyati ||13||",
      translation: "Just as the embodied soul passes through childhood, youth, and old age in this body, so also does it pass into another body. The wise are not deluded by this."
    },
    {
      id: 205,
      chapterId: 2,
      verseNumber: "2.47",
      sanskritText: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन | मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||४७||",
      transliteration: "karmaṇyevādhikāraste mā phaleṣu kadācana | mā karmaphalaheturbhūrmā te saṅgo'stvakarmaṇi ||47||",
      translation: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty."
    }
  ],
  3: [
    {
      id: 301,
      chapterId: 3,
      verseNumber: "3.1",
      sanskritText: "अर्जुन उवाच | ज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन | तत्किं कर्मणि घोरे मां नियोजयसि केशव ||१||",
      transliteration: "arjuna uvāca | jyāyasī cetkarmaṇaste matā buddhirjanārdana | tatkiṁ karmaṇi ghore māṁ niyojayasi keśava ||1||",
      translation: "Arjuna said: O Janardana, O Keshava, if you consider knowledge superior to action, why then do you urge me to engage in this terrible action?"
    },
    {
      id: 302,
      chapterId: 3,
      verseNumber: "3.3",
      sanskritText: "श्रीभगवानुवाच | लोकेऽस्मिन्द्विविधा निष्ठा पुरा प्रोक्ता मयानघ | ज्ञानयोगेन साङ्ख्यानां कर्मयोगेन योगिनाम् ||३||",
      transliteration: "śrībhagavānuvāca | loke'smindvividhā niṣṭhā purā proktā mayānagha | jñānayogena sāṅkhyānāṁ karmayogena yoginām ||3||",
      translation: "The Blessed Lord said: O sinless one, I have already explained that there are two classes of men who realize the Self. Some are inclined to understand it by empirical, philosophical speculation, and others by devotional service."
    }
  ]
};

// API Integration Functions
// TODO: Replace these with actual API calls using VITE_API_BASE and VITE_API_KEY

const API_BASE = import.meta.env.VITE_API_BASE || '';
const API_KEY = import.meta.env.VITE_API_KEY || '';

export async function fetchChapters(): Promise<Chapter[]> {
  // API Integration Point: Replace with actual API call
  // Example:
  // const response = await fetch(`${API_BASE}/chapters`, {
  //   headers: { 'Authorization': `Bearer ${API_KEY}` }
  // });
  // return response.json();
  
  return new Promise((resolve) => {
    setTimeout(() => resolve(chapters), 300);
  });
}

export async function fetchVerses(chapterId: number): Promise<Verse[]> {
  // API Integration Point: Replace with actual API call
  // Example:
  // const response = await fetch(`${API_BASE}/chapters/${chapterId}/verses`, {
  //   headers: { 'Authorization': `Bearer ${API_KEY}` }
  // });
  // return response.json();
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sampleVerses[chapterId] || []);
    }, 300);
  });
}

export async function fetchAudioUrl(chapterId: number, verseId: number): Promise<string | null> {
  // API Integration Point: Replace with actual API call
  // Example:
  // const response = await fetch(`${API_BASE}/audio/${chapterId}/${verseId}`, {
  //   headers: { 'Authorization': `Bearer ${API_KEY}` }
  // });
  // const data = await response.json();
  // return data.audioUrl;
  
  return null; // No audio available in placeholder data
}
