
import { useTranslation } from "react-i18next";
import { CalendarDays, MapPin } from "lucide-react";
import styles from './styles.module.css'

interface ExperienceCardProps {
  company: string;
  role: string;
  location: string;
  duration: string;
  descriptions: string[];
}
const ExperienceCard = ({
  company,
  role,
  location,
  duration,
  descriptions,
}: ExperienceCardProps) => {
    const {t}= useTranslation();
  return (
    <div className={`${styles.experienceCardStyle} relative w-full lg:w-[90%] max-w-5xl rounded-2xl border border-white/10 p-6 md:p-8 shadow-xl backdrop-blur m-inherit`}>

      {/* Header */}
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold ">
            {t(company)}
          </h3>
          <p className="mt-1 text-lg text-[#D32F2F]">
            {t(role)}
          </p>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
            <MapPin size={16} />
            <span>{t(location)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
          <CalendarDays size={16} />
          <span>{t(duration)}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-3 h-px w-full bg-red/10" />

      {/* Description List */}
      <ul className="space-y-4">
        {descriptions.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 "
          >
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-600" />
            <p className="leading-relaxed">{t(item)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
