import { ReactNode } from "react";

interface IExperience {
    role: string,
    company: string,
    duration: string,
    description?: string,
    place?: string
}

interface IEducation extends IExperience {
    grade?: string,
}

interface ISkills {
    name: string,
    level: number
}

type ITimeLineProps = {
    data: IExperience[] | IEducation[];
};

interface ISkillProps {
    data: ISkills
}

interface ILayoutProps {
    children: ReactNode;
}

interface IProjects {
    title: string,
    description: string,
    link: string,
    type: string,
    image?: string,
    imageName?: string,
}

export type {
    ISkills,
    ISkillProps,
    IExperience,
    IEducation,
    ITimeLineProps,
    ILayoutProps,
    IProjects
}