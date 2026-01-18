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
      <div className={`${styles.skillsCardStyle1} bordercolor rounded-2xl border border-gray-200 bg-white shadow-sm my-10 mx-4 sm:p-8 max-w-[93%] min-h-55 `}>
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[#d32f2f] text-lg"><Code /></span>
          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            {firstHeading} {Lastheading && <span className="text-[#d32f2f]">{Lastheading}</span>}
          </h2>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {languages.map((lang) => (
            <span
              key={lang}
              className="px-4 py-2 rounded-full border border-gray-300 text-sm sm:text-base  hover:bg-gray-100 transition"
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