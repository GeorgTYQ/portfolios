import React from "react";
import { getPayload } from "@/locales/payload";
import { formateDate } from "@/app/(landing-page)/utils/functions/FormatDate.js";
const About = async () => {
  const payload = await getPayload();
  let educations = await payload.find({
    collection: "educations",
    limit: 3,
    sort: "-createdAt",
  });

  let skillsSet = await payload.find({
    collection: "skillsSet",
    sort: "-createdAt",
  });
  console.log(skillsSet);

  let experiences = await payload.find({
    collection: "experiences",
    sort: "-startDate",
  });

  return (
    <div className="flex">
      {/* Left */}
      <div className="w-1/2 text-white p-8 ">
        {/* About Me */}
        <div className="justify-start items-center flex flex-col h-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">George Tan</h2>
            <p>tanyouquan28@gmail.com</p>
            <p>+61 432 488 682</p>
          </div>
          <div className="w-full h-px mt-3 bg-purple-200"></div>
          <div className="mt-6">
            <div className="justify-center items-center flex flex-col h-full">
              {educations.docs.map((education) => (
                <div key={education.id} className="mb-6 text-purple-200">
                  <h3 className="text-xl font-semibold text-white">
                    {education.degree}
                  </h3>
                  <div className="flex justify-between items-center space-x-4 ">
                    <div className="flex text-xl  space-x-4">
                      <p>{education.institution}</p>
                      <p>|</p>
                      <p>{formateDate(education.endDate)}</p>
                    </div>
                    <div className="text-xl space-x-4">
                      <p>{education.grade}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-px mt-3 bg-purple-200"></div>
          {/* SkillsSet */}
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4 mt-6 text-center">Skills</h2>
            <div className="flex flex-wrap gap-2 mt-5 items-center justify-center">
              {skillsSet.docs.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 text-sm rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30"
                >
                  {skill.skills}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Education */}
      </div>
      {/* Right */}
      <div className="w-1/2 text-white p-8 ">
        <h2 className="text-2xl font-bold mb-4">Experiences</h2>
        {experiences.docs.map((experience) => (
          <div
            className="mb-6 ml-5 border border-purple-500/30 rounded-2xl p-4"
            key={experience.id}
          >
            <div>
              <div className="flex justify-between items-center space-x-4 text-xl font-semibold italic text-white">
                <h3>{experience.jobTitle}</h3>

                <p>
                  {experience.startDate
                    ? formateDate(experience.startDate)
                    : "Unknown"}
                  -
                  {experience.endDate
                    ? formateDate(experience.endDate)
                    : " Current"}
                </p>
              </div>
              <p className="text-base ml-1 text-white">
                {experience.company} | {experience.location}
              </p>
            </div>
            <ul className="list-disc pl-6 space-y-2 mt-5">
              {experience.descriptions.map((desc, index) => (
                <li key={index} className="text-purple-200">
                  {desc.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
