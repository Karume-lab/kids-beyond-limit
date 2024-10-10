

const MissionVission = () => {
    return (
        <div className='bg-[url("/hero-bg.png")] bg-no-repeat bg-cover bg-fixed py-32 md:py-64 text-white flex flex-col gap-20 mt-10 md:mt-20'>
            <Section
                title="MISSION"
                paragraph={`
                To use sports as a tool to unlock the potential of every child by 
                creating pathways to education, leadership, and personal development, 
                promoting a healthier and more inclusive society
                `}
            />
            <Section
                title="VISION"
                paragraph={`
                A world where every child can access education, live a healthy life,
                and contribute to the betterment of society through sports and leadership 
                development.
                `}
            />
        </div>
    )
}

export default MissionVission;


type SectionProps = {
    title: string,
    paragraph: string,
}


const Section: React.FC<SectionProps> = ({
    title,
    paragraph,
}) => {
    return (
        <div className="w-fit flex items-center justify-center flex-col mx-auto gap-5">
            <h2 className="text-3xl md:text-6xl underline">{title}</h2>
            <p className="px-10 md:w-3/5 md:text-2xl text-md text-center">
                {paragraph}
            </p>
        </div>
    );
}
