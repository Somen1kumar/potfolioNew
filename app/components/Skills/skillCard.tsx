import styles from './styles.module.css'
import { Code } from 'lucide-react';


interface PropsInterface {
    id: number;
    skillHeading: string;
    languages: Array<string>;
    image?: string;
}

const  skillCard = (props: PropsInterface) => {
    const {skillHeading, languages} = props;
    const firstHeading = skillHeading.split(",")[0];
    const Lastheading = skillHeading.split(",")?.[1];

  return (
    <>
    {/*min-w-75 max-w-100 md:min-w-100 min-h-50 */}
      <div className={`${styles.skillsCardStyle} rounded-2xl border border-white/10 shadow-sm p-6 sm:p-8 w-full `}>
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[#d32f2f] text-lg"><Code /></span>
          <h2 className="text-xl sm:text-2xl font-semibold ">
            {firstHeading} {Lastheading && <span className="text-[#d32f2f]">{Lastheading}</span>}
          </h2>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {languages.map((lang) => (
            <span
              key={lang}
              className="px-4 py-2 rounded-full border border-gray-300 text-sm sm:text-base  hover:bg-gray-50 hover:text-black transition"
            >
              {lang}
            </span>
          ))}
        </div>

      </div>
    </>
  );
}


export default skillCard;