import React, { memo } from 'react'
import { ISkillProps } from './types';

const SkillBar = (props: ISkillProps) => {
    const { data: { name, level } } = props;

    return (
        <div className="mb-6 pl-6">
            <div className="flex justify-between">
                <span className="font-semibold">{name}</span>
                <span className="text-gray-500">{level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div
                    className="bg-[var(--theme-font-color)] h-2.5 rounded-full"
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    );
};

export default memo(SkillBar);