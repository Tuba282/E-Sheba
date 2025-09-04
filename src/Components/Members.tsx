import { Avatar, AvatarGroup, Typography } from "@mui/material";

const Members = () => {
    return (
        <div
            className="my-10 mx-auto max-w-7xl flex lg:justify-between gap-8 bg-[var(--lightBlue)] flex-col-reverse lg:flex-row">


            <div className="w-full lg:w-[50%] lg:h-[380px] lg:p-15 flex flex-col jus gap-8  p-5  ">
                <div className="text flex flex-col">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center md:text-left  leading-tight ">
                        What Our
                        <span className="relative text-[var(--darkBlue)] mx-3">Member's
                            <img src="/Vector5.png" alt="Vector5" className="absolute -bottom-2 right-0" /></span>
                        Saying About Us
                    </h2>
                    <Typography variant="body2" className='text-xs font-medium my-5!'>
                        Mumquam nisi laudantium sapiente laborum blanditiis voluptate recusandae excepturi, voluptatibus corporis, placeat adipisci voluptas.
                    </Typography>
                </div>
                <AvatarGroup max={7} className="w-70! p-2 rounded-full">
                    <Avatar alt="Remy Sharp" className="bg-[var(--darkBlue)]!" src="/Ellipse-7.png" />
                    <Avatar alt="Remy Sharp" className="bg-[var(--darkBlue)]!" src="/Ellipse-8.png" />
                    <Avatar alt="Remy Sharp" className="bg-[var(--darkBlue)]!" src="/Ellipse-9.png" />
                    <Avatar alt="Remy Sharp" className="bg-[var(--darkBlue)]!" src="/Ellipse-10.png" />
                    <Avatar alt="Remy Sharp" className="bg-[var(--darkBlue)]!" src="/Ellipse-11.png" />
                    <Avatar alt="Remy Sharp" className="bg-[var(--darkBlue)]!" src="/Ellipse-12.png" />
                    <Avatar alt="Remy Sharp" className="bg-[var(--darkBlue)]!" src="/Ellipse-12.png" />
                    <Avatar alt="Remy Sharp" className="bg-[var(--darkBlue)]!" src="/Ellipse-12.png" />
                </AvatarGroup>

            </div>


            <div className="w-full lg:w-[50%] lg:h-[380px] p-5 lg:p-15 flex justify-center items-center">
                <div className="bg-white p-5 rounded-2xl shadow-lg">
                    <div className="grid sm:flex justify-between items-center ">
                        <div className="flex gap-3 items-end">
                            <Avatar
                            alt="Remy Sharp"
                            src="/Ellipse-10.png"
                            sx={{ width: 56, height: 56 }}
                            />
                            <span className="flex flex-col text-xl font-semibold">Jane Cooper
                                <span className="text-xs text-gray-300 font-medium">12/4/17</span>
                            </span>
                        </div>
                        <span className="flex mt-5 sm:mt-0 sm:justify-between items-center gap-2">
                            <img src="/Star-5.png" alt="Star-5"  className="w-4 h-4 sm:w-7 sm:h-7"/>
                            <img src="/Star-5.png" alt="Star-5"  className="w-4 h-4 sm:w-7 sm:h-7"/>
                            <img src="/Star-5.png" alt="Star-5"  className="w-4 h-4 sm:w-7 sm:h-7"/>
                            <img src="/Star-5.png" alt="Star-5"  className="w-4 h-4 sm:w-7 sm:h-7"/>
                            <img src="/Star-5.png" alt="Star-5"  className="w-4 h-4 sm:w-7 sm:h-7"/>
                        </span>
                    </div>
                    <Typography variant="body2" className='text-xs font-medium my-5!'>
                        Mumquam nisi laudantium sapiente laborum blanditiis voluptate recusandae excepturi, voluptatibus corporis, placeat adipisci voluptas.
                        Coluptate recusandae excepturi, voluptatibus corporis, placeat adipisci voluptas.
                        Mumquam nisi laudantium sapiente laborum blanditiis voluptate recusandae excepturi, voluptatibus corporis, placeat adipisci voluptas.
                    </Typography>
                </div>
            </div>




        </div>
    );
}

export default Members;