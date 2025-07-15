"use client";

import { FormSelect } from "../ui/form-select";
import { FormData } from "@/types";

interface Step3Props {
  data: FormData;
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const religions = [
  { value: "hindu", label: "Hindu" },
  { value: "muslim", label: "Muslim" },
  { value: "christian", label: "Christian" },
  { value: "sikh", label: "Sikh" },
  { value: "buddhist", label: "Buddhist" },
  { value: "jain", label: "Jain" },
  { value: "parsi", label: "Parsi" },
  { value: "jewish", label: "Jewish" },
  { value: "no religion", label: "No Religion" },
  {
    value: "spiritual but not religious",
    label: "Spiritual but not Religious",
  },
  { value: "other", label: "Other" },
];

const communityOptions = [
  {
    label: "Frequently Used Communities",
    options: [
      { value: "Hindi", label: "Hindi" },
      { value: "Marathi", label: "Marathi" },
      { value: "Gujarati", label: "Gujarati" },
      { value: "Punjabi", label: "Punjabi" },
      { value: "Bengali", label: "Bengali" },
      { value: "Urdu", label: "Urdu" },
      { value: "marvari", label: "Marwari" },
      { value: "english", label: "English" },
      { value: "Tamil", label: "Tamil" },
      { value: "Telugu", label: "Telugu" },
      { value: "Kannada", label: "Kannada" },
      { value: "Odia", label: "Odia" },
    ],
  },
  {
    label: "All Communities",
    options: [
      { value: "aka", label: "Aka" },
      { value: "arabic", label: "Arabic" },
      { value: "arunachali", label: "Arunachali" },
      { value: "assamese", label: "Assamese" },
      { value: "awadi", label: "Awadhi" },

      { value: "baluchi", label: "Baluchi" },
      { value: "bhojpuri", label: "Bhojpuri" },
      { value: "bhutia", label: "Bhutia" },
      { value: "brahui", label: "Brahui" },
      { value: "brij", label: "Brij" },
      { value: "Burmese", label: "Burmese" },

      { value: "chattisgarhi", label: "Chhattisgarhi" },
      { value: "chinese", label: "Chinese" },
      { value: "coorgi", label: "Coorgi" },

      { value: "dogri", label: "Dogri" },

      { value: "french", label: "French" },

      { value: "garhwali", label: "Garhwali" },
      { value: "garo", label: "Garo" },
      { value: "gondi", label: "Gondi" },

      { value: "haryanvi", label: "Haryanvi" },
      { value: "himachali", label: "Himachali" },

      { value: "kachchi", label: "Kachchi" },
      { value: "kakbarak", label: "Kakbarak" },
      { value: "kanauji", label: "Kanauji" },
      { value: "kashmiri", label: "Kashmiri" },
      { value: "khandeshi", label: "khandeshi" },
      { value: "khasi", label: "Khasi" },
      { value: "kokani", label: "kokani" },
      { value: "koshali", label: "koshali" },
      { value: "kumaoni", label: "Kumaoni" },
      { value: "kutchi", label: "Kutchi" },

      { value: "ladakhi", label: "Ladakhi" },
      { value: "lepcha", label: "Lepcha" },

      { value: "magahi", label: "Magahi" },
      { value: "maithili", label: "Maithili" },
      { value: "malay", label: "Malay" },
      { value: "malayalam", label: "Malayalam" },
      { value: "manipuri", label: "Manipuri" },
      { value: "miji", label: "Miji" },
      { value: "mizo", label: "Mizo" },
      { value: "monpa", label: "Monpa" },

      { value: "nepali", label: "Nepali" },
      { value: "nishi", label: "Nishi" },

      { value: "oriya", label: "Oriya" },

      { value: "pahari", label: "Pahari" },
      { value: "pashto", label: "Pashto" },
      { value: "persian", label: "Persian" },

      { value: "rajasthani", label: "Rajasthani" },

      { value: "sanskrit", label: "Sanskrit" },
      { value: "santhali", label: "Santhali" },
      { value: "seraiki", label: "Seraiki" },
      { value: "sinhala", label: "Sinhala" },
      { value: "sourashtra", label: "Sourashtra" },
      { value: "spanish", label: "Spanish" },
      { value: "swedish", label: "Swedish" },

      { value: "tagalog", label: "Tagalog" },
      { value: "tulu", label: "Tulu" },
      { value: "Other", label: "Other" },
    ],
  },
];

const horoscopes = [
  { value: "aries", label: "♈ Aries (Mar 21 – Apr 19)" },
  { value: "taurus", label: "♉ Taurus (Apr 20 – May 20)" },
  { value: "gemini", label: "♊ Gemini (May 21 – Jun 20)" },
  { value: "cancer", label: "♋ Cancer (Jun 21 – Jul 22)" },
  { value: "leo", label: "♌ Leo (Jul 23 – Aug 22)" },
  { value: "virgo", label: "♍ Virgo (Aug 23 – Sep 22)" },
  { value: "libra", label: "♎ Libra (Sep 23 – Oct 22)" },
  { value: "scorpio", label: "♏ Scorpio (Oct 23 – Nov 21)" },
  { value: "sagittarius", label: "♐ Sagittarius (Nov 22 – Dec 21)" },
  { value: "capricorn", label: "♑ Capricorn (Dec 22 – Jan 19)" },
  { value: "aquarius", label: "♒ Aquarius (Jan 20 – Feb 18)" },
  { value: "pisces", label: "♓ Pisces (Feb 19 – Mar 20)" },
  { value: "other", label: "Other" },
];

const languages = [
  { value: "hindi", label: "Hindi" },
  { value: "english", label: "English" },
  { value: "bengali", label: "Bengali" },
  { value: "telugu", label: "Telugu" },
  { value: "marathi", label: "Marathi" },
  { value: "tamil", label: "Tamil" },
  { value: "gujarati", label: "Gujarati" },
  { value: "kannada", label: "Kannada" },
  { value: "malayalam", label: "Malayalam" },
  { value: "punjabi", label: "Punjabi" },
  { value: "other", label: "Other" },
];

export function Step3CasteReligion({ data, onChange, errors }: Step3Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
          Cultural Background
        </h2>
        <p className="text-gray-600">
          Tell us about your cultural and religious background
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormSelect
          title="Religion"
          label="Your Religion"
          options={religions}
          value={data.religion || ""}
          onChange={(e) => onChange("religion", e.target.value)}
          error={errors.religion}
          required
        />

        <FormSelect
          label="Caste/Community"
          title="Community"
          options={communityOptions}
          value={data.caste || ""}
          onChange={(e) => onChange("caste", e.target.value)}
          error={errors.caste}
          required
        />
      </div>

      <FormSelect
        title="Mother Tongue"
        label="Mother Tongue"
        options={languages}
        value={data.motherTongue || ""}
        onChange={(e) => onChange("motherTongue", e.target.value)}
        error={errors.motherTongue}
        required
      />

      <FormSelect
        label="Horoscope Details"
        options={horoscopes}
        title="Horoscope"
        value={data.horoscope || ""}
        onChange={(e) => onChange("horoscope", e.target.value)}
        error={errors.horoscope}
      />
    </div>
  );
}
