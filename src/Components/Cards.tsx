import { FaVirusCovid } from "react-icons/fa6";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { BsLungsFill } from "react-icons/bs";
import { RiMentalHealthLine } from "react-icons/ri";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const cards = [

    {
        title: 'Covid-19 Test',
        description: 'Humans depend on plants and animals for survival.Necessitatibus earum possimus non sed error eius obcaecati..',
        icon: <FaVirusCovid className="text-3xl text-[var(--darkBlue)]" />
    },
    {
        title: 'Heart Lungs',
        description: 'Humans depend on plants and animals for survival.Necessitatibus earum possimus non sed error eius obcaecati..',
        icon: <BsLungsFill className="text-3xl text-[var(--darkBlue)]" />
    },
    {
        title: 'Suppliment',
        description: 'Humans depend on plants and animals for survival.Necessitatibus earum possimus non sed error eius obcaecati..',
        icon: <PiBowlFoodDuotone className="text-3xl text-[var(--darkBlue)]" />
    },
    {
        title: 'Mental Health',
        description: 'Humans depend on plants and animals for survival.Necessitatibus earum possimus non sed error eius obcaecati..',
        icon: <RiMentalHealthLine className="text-3xl text-[var(--darkBlue)]" />
    },
];

function SelectActionCard() {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(250px, 100%), 1fr))',
                gap: 4,
            }}
        >
            {cards.map((card) => (
                <Card className='my-5'>
                    <CardActionArea
                    >
                        <CardContent className='h-60 flex flex-col gap-3 px-5 hover:bg-[var(--darkBlue)] rounded-2! border-2 border-[var(--darkBlue)] hover:text-white transition-all duration-300'>
                            <div className="w-16 h-16 bg-[var(--lightBlue)] rounded-full flex items-center justify-center mb-2">
                                {card.icon}
                            </div>
                            <Typography >
                                {card.title}
                            </Typography>
                            <Typography variant="body2" className='hover:text-white text-xs font-medium'>
                                {card.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
}


const CardSection = () => {
    return (
        <div className='min-h-[500px] p-10 my-5 sm:my-10 md:my-20 bg-amber-500'>
            <h1 className='group  text-3xl sm:text-5xl font-bold mb-5 grid gap-2'>Our Consulting Specialists
                <div className="bg-[var(--darkBlue)] rounded-2xl h-[3px] w-0 transition-all duration-500 group-hover:w-130"></div>
            </h1>

            <SelectActionCard />
        </div>
    )
}


export default CardSection;