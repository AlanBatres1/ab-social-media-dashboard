import './App.css'
import FollowersCard from './components/FollowersCard'
import Facebook from "/images/icon-facebook.svg"
import Twitter from "/images/icon-twitter.svg"
import Instagram from "/images/icon-instagram.svg"
import Youtube from "/images/icon-youtube.svg"
import Up from "/images/icon-up.svg"
import Down from "/images/icon-down.svg"
import OverviewCard from './components/OverviewCard'
import Header from './components/header'

function App() {

  return (
    <>
      <div className='bg-[hsl(0,0%,100%)] p-8 min-h-screen dark:bg-[hsl(230,17%,14%)]'>
        <div className="bg-slate-100 dark:bg-[hsl(232,19%,15%)] h-52 w-full absolute top-0 left-0 rounded-b-3xl" style={{ zIndex: 0, }}></div>
        <Header />
        <div className='relative mt-10 z-10 max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <FollowersCard platform="Facebook" userName="@nathanf" followers={1987} thousand="" change={12} icon={Facebook} changeIcon={Up} textColor={"text-green-500"} Type={"F O L L O W E R S"} border={"bg-blue-600"} />
          <FollowersCard platform="Twitter" userName="@nathanf" followers={1044} thousand="" change={99} icon={Twitter} changeIcon={Up} textColor={"text-green-500"} Type={"F O L L O W E R S"} border={"bg-blue-500"} />
          <FollowersCard platform="Instagram" userName="@realnathanf" followers={11} thousand="k" change={1099} icon={Instagram} changeIcon={Up} textColor={"text-green-500"} Type={"F O L L O W E R S"} border={"bg-gradient-to-r from-yellow-400 to-pink-500"} />
          <FollowersCard platform="Youtube" userName="Nathan F." followers={1987} thousand="" change={144} icon={Youtube} changeIcon={Down} textColor={"text-red-500"} Type={"S U B S C R I B E R S"} border={"bg-red-700"} />
        </div>
        <div>
          <h1 className='mt-5 relative z-10 max-w-7xl mx-auto text-slate-600 dark:text-white font-bold mb-5 text-2xl md:text-3xl'>Overview - Today</h1>
        </div>
        <div className='relative z-10 max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <OverviewCard platform="Facebook" overview="Page Views" followers={87} thousand="" change={3} icon={Facebook} changeIcon={Up} textColor={"text-green-500"} />
          <OverviewCard platform="Facebook" overview="Likes" followers={52} thousand="" change={2} icon={Facebook} changeIcon={Down} textColor={"text-red-500"} />
          <OverviewCard platform="Instagram" overview="Likes" followers={5462} thousand="" change={2257} icon={Instagram} changeIcon={Up} textColor={"text-green-500"} />
          <OverviewCard platform="Instagram" overview="Profile Views" followers={52} thousand="k" change={1375} icon={Instagram} changeIcon={Up} textColor={"text-green-500"} />
          <OverviewCard platform="Twitter" overview="Retweets" followers={117} thousand="" change={303} icon={Twitter} changeIcon={Up} textColor={"text-green-500"} />
          <OverviewCard platform="Twitter" overview="Likes" followers={507} thousand="" change={553} icon={Twitter} changeIcon={Up} textColor={"text-green-500"} />
          <OverviewCard platform="Youtube" overview="Likes" followers={107} thousand="" change={19} icon={Youtube} changeIcon={Down} textColor={"text-red-500"} />
          <OverviewCard platform="Youtube" overview="Total Views" followers={1047} thousand="" change={12} icon={Youtube} changeIcon={Down} textColor={"text-red-500"} />
        </div>
      </div>

    </>
  )
}

export default App
