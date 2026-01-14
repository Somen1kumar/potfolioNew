



import { useTranslation } from "react-i18next";

import {
  GraduationCap,
  MapPin,
  Percent,
  Calendar,
} from "lucide-react";

interface PropsInterface {
    degree: string,
    institute: string,
    percentage?: string,
    duration: string;
}

export default function EducationCard(props: PropsInterface) {
    const {t} = useTranslation();
    const {degree, institute, percentage, duration} = props
  return (
    <>
      <div className="w-full border border-white/10  rounded-xl p-6 shadow-sm hover:shadow-md">

        {/* Degree */}
        <div className="flex items-start gap-3">
          <GraduationCap className=" mt-1" size={22} />
          <h2 className="text-lg sm:text-xl font-semibold leading-snug">
           {t(degree)}
          </h2>
        </div>

        {/* Institute */}
        <div className="flex items-center gap-3 mt-3">
          <MapPin className="text-[#d32f2f]" size={18} />
          <p className="text-[#d32f2f] font-medium text-sm sm:text-base">
            {t(institute)}
          </p>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-5 text-sm ">

          {percentage &&<div className="flex items-center gap-2">
            <Percent size={16} />
            <span>{t(percentage)}</span>
          </div>}

          {duration && <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{t(duration)}</span>
          </div>}

        </div>
      </div>
    </>
  );
}
