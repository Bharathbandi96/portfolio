import React, { memo } from 'react';
import { ITimeLineProps } from './types';

const Timeline = (props: ITimeLineProps) => {

    const { data } = props;

    return (
        <div className="max-w-lg mx-auto p-6">
            <div className="relative pl-6 top-1">
                {data.map((exp, index) => {
                    const { role, company, duration, description, place } = exp;
                    return (
                        <div key={index} className="mb-6 relative">
                            <div className="absolute w-4 h-4 bg-[var(--theme-font-color)] rounded-full left-[-34px] top-[6px]"></div>
                            <div className="absolute w-[2px] h-[calc(100%+10px)] bg-[var(--theme-font-color)] top-[20px] left-[-27px]"></div>
                            <h3 className="text-lg font-semibold">{role}</h3>
                            <p className="text-gray-500">{company} | {duration}</p>
                            <p className="text-gray-700 whitespace-pre-line mt-2">{description || place}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default memo(Timeline);