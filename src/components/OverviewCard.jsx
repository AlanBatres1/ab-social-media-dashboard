import React from 'react'

const OverviewCard = ({ platform, overview, followers, change, icon, changeIcon, thousand, textColor }) => {


  return (
    <>
      <div className="bg-[hsl(227,47%,96%)] dark:bg-[hsl(228,28%,20%)] cursor-pointer dark:hover:bg-slate-600 hover:bg-slate-300  w-full px-5 pt-5 rounded-lg">
        <div className="flex items-center justify-between text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400 font-bold">{overview}</p>
          <img src={icon} alt={`${platform}`} className="mr-2" />
        </div>

        <div className='flex flex-row justify-between pt-4'>
          <h2 className="bg-wflex justify-center text-3xl font-bold text-slate-800 dark:text-white text-center my-5">
            {followers}{thousand}
          </h2>

          <div className="flex items-center justify-center text-sm font-bold">
            {changeIcon && <img src={changeIcon} alt="Up/Down" className="w-3 mr-2" />}
            <p className={`${textColor}`}>{change}%</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OverviewCard