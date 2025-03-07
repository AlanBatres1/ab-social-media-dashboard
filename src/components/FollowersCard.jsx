import React from 'react';
import { useState } from 'react';

const FollowersCard = ({ platform, userName, followers, change, icon, changeIcon, thousand, textColor, Type, border }) => {

    return (
        <>
        <div className={`relative pt-1 rounded-lg ${border}`}>
            <div className="bg-[hsl(227,47%,96%)] dark:bg-[hsl(228,28%,20%)] cursor-pointer dark:hover:bg-slate-600 hover:bg-slate-300 w-full p-5 rounded-b-lg">
                <div className="flex items-center justify-center text-center gap-1 pt-3">
                    <img src={icon} alt={`${platform}`} className="mr-2" />
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-bold">{userName}</p>
                </div>

                <h2 className="flex justify-center text-5xl font-bold text-slate-800 dark:text-white text-center mt-5 mb-1">
                    {followers}{thousand}
                </h2>
                <p className="mb-5 text-sm flex justify-center text-slate-600 dark:text-slate-400 font-normal uppercase tracking-widest">
                    {Type}
                </p>

                <div className=" pb-4 flex items-center justify-center text-sm font-bold">
                    <img src={changeIcon} alt="Up/Down" className="w-3 mr-2" />
                    <p className={`${textColor}`}>{change} Today</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default FollowersCard;
