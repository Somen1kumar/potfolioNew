

import { useTranslation } from "react-i18next";
import { GraduationCap, ExternalLink } from "lucide-react";
import styles from "./styles.module.css";


export default function PublicationCard() {
    const { t } = useTranslation();
  return (
    <div className={`max-w-5xl my-4 mx-auto `}>
      <div className={`${styles.researchCardStyle} relative rounded-3xl border border-white/10 shadow-sm p-6 sm:p-10`}>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-red-50 text-[#d32f2f]">
            <GraduationCap size={36} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center leading-snug">
          {t("A proficient approach to maximize the overall weight in ")}
          <span className="text-[#d32f2f]">
            {t("virtual machine allocation ")}
          </span>
          {t("and optimize energy consumption using DVFS")}
        </h3>

        {/* Meta */}
        <p className="mt-4 text-center text-sm sm:text-base text-gray-600">
          {t("Published in ")}
          <span className="font-semibold">
            {t("IJRAR, E-ISSN Journals")}
          </span>{" "}
          · <span className="text-[#d32f2f]">{t("March, 2020")}</span>
        </p>

        {/* Description */}
        <p className="mt-6 text-sm sm:text-base text-gray-700 leading-relaxed text-center">
          {t(`his paper gives the brief information of Cloud Computing to allocate the task to suitable VM so as to locate the Maximum share(weight). It depends on the way that when allotting Cloud-lets(task) in Virtual Machine(VM) which is inside Data-Center,Request may Only Consume some bit of Total Capacity of a Single Hardware Resource(Physical Machine),So we Model WISWCS(Weight Interval Scheduling With Capacity Sharing) utilizing Cloud-sim which is a Cloud Information Service(CIS) .In Traditional WIS(Weight Interval Scheduling) the solicitation compares to an UN-Interrupted Interval with Start and Finish Time related with various weight. It essentially discovers Subset of commonly Compatible Interval .Now in our proposed System WISWCS which is like Traditional System with an alternate methodology of sharing Capacity whenever if their absolute Capacity doesn't outperform the all out limit of a machine.As far as we could possibly know this model have a Computation Complexity of O(nd). We likewise Aim to locate the absolute Optimized vitality for this proposed System.`)}
        </p>

        {/* Authors */}
        <p className="mt-6 text-center text-sm sm:text-base">
          <span className="font-semibold">Authors: </span>
          <span className="text-[#d32f2f]">
            {t("Somen Kumar, Rahul Kumar Singh,  Sonu Kumar Yadav,  Dr Anwar Basha H")}
          </span>
        </p>

        {/* Action */}
        <div className="mt-8 flex justify-center">
          <a href="https://ijrar.org/viewfull.php?&p_id=IJRAR2002028" className="flex items-center gap-2 rounded-full border border-red-600 px-5 py-2 text-sm sm:text-base text-[#d32f2f] hover:bg-red-50 transition">
            {t("View Publication")}
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
