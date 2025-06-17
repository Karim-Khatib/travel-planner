import { useTranslation } from 'react-i18next'
import footer from "../../public/footer.png"
import flyIcon from '../../public/fly.svg'
import fly2 from '../../public/fly2.svg'
import pic from '../../public/pic.svg'
import erath from '../../public/erath.svg'
import money from '../../public/money.png'
import money2 from '../../public/money2.png'
import clock from '../../public/clock.png'
import MainCard from './MainCard'
import CitySelector from './CitySelector'




export default function MainLayout() {
    const { t } = useTranslation()
    return (
        <div
            className='w-full gap-[96px] mt-30 h-full flex flex-col items-center justify-center text-3xl font-bold text-foreground'
        >
            <h1 className=' text-[96px] font-bold text-background '>
                {t('welcome_to_travel_planner')}
            </h1>
            <div className='w-full rounded-2xl m-1 flex flex-col justify-between items-center p-4 shadow-accent-foreground/5 shadow-xl  bg-background h-72 max-w-[960px] text-center text-2xl font-semibold text-foreground'>
                <img src={flyIcon} alt="Fly Icon" />
                <p className='text-[#A8A29E] text-3xl'>{t('travel_planner_description')}</p>
                <CitySelector />
            </div>
            <div className='flex h-64 flex-row justify-center items-center gap-4 w-full '>
                <MainCard
                    titleIcon={<img src={fly2} alt="Fly Icon" />}
                    content={"23,973"}
                    footer='Travel to over 23 thousand locations around the world.'
                />
                <MainCard
                    titleIcon={<img src={erath} alt="erath" />}
                    content={"82,000"}
                    footer='Read tens of thousands of reviews of destinations.'
                />
                <MainCard
                    titleIcon={<img src={pic} alt="pic" />}
                    content={"4,000,000"}
                    footer='Visited by millions of travelers every single day.'
                />
            </div>
            <div className='w-full max-w-[960px] gap-2'>
                <h1 className="text-[16px]  w-full font-bold bg-gradient-to-r from-teal-700 via-green-600 to-yellow-600 bg-clip-text text-transparent">
                    {t("tool_list")}
                </h1>
                <div className='flex flex-row  w-full justify-between max-w-[960px]'>
                    <p className='text-2xl font-semibold text-foreground'>
                        {t("travel_plan_tools")}
                    </p>
                    <p className='text-foreground text-lg font-normal max-w-80'>
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar lorem justo, Lorem ipsum dolor sit amet."}
                    </p>
                </div>
                <div className='flex flex-row  gap-4'>
                    <MainCard
                        titleIcon={<img src={clock} alt='clock' />}
                        content={"Plan Trip Dates"}
                        className='text-[20px] text-center'
                        footer={"orem ipsum dolor sit amet, consectetur adipiscing elit. "}
                    />
                    <MainCard
                        titleIcon={<img src={money} alt='money' />}
                        content={"Plan Trip Dates"}
                        className='text-[20px] text-center'
                        footer={"orem ipsum dolor sit amet, consectetur adipiscing elit. "}
                    />
                    <MainCard
                        titleIcon={<img src={money2} alt='money2' />}
                        content={"Plan Trip Dates"}
                        className='text-[20px] text-center'
                        footer={"orem ipsum dolor sit amet, consectetur adipiscing elit. "}
                    />

                </div>
            </div>
            <div className='w-full  max-w-[600px] gap-10 flec flex-col justify-center items-center'>
                <h1 className="text-[16px] mb-10 text-center w-full font-bold bg-gradient-to-r from-teal-700 via-green-600 to-yellow-600 bg-clip-text text-transparent">
                    {t("planing_ahead")}
                   
                </h1>
                 <img 
                 className='self-center'
                    src={footer}
                    
                    alt='footer'
                    />
            </div>
        </div>
    )
}
