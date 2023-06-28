import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons'
import { FaFacebook, FaLinkedin, FaGithub, FaRegPaperPlane } from "react-icons/fa";
import NavigationBar from "./NavigationBar/NavigationBar";
import './Home.css'
import { TypeAnimation } from 'react-type-animation';




const Home = () => {
    const currentYear = new Date().getFullYear();


    return (
        <div className=" bg-black text-white">
            <NavigationBar></NavigationBar>
            <div id='home' className="relative px-5 pt-[45rem] bg-[url('https://i.ibb.co/7VHd17z/ismail3.png')] bg-no-repeat bg-center md:bg-right">
                <div className="absolute top-[2rem] left-[1rem] md:top-[15rem] md:left-[10rem]">
                    <h1 className="text-xl font-bold md:text-5xl md:mb-10 mt-10 uppercase">
                        <TypeAnimation
                            sequence={['MERN Stack Developer', 1000, '', 500]}
                            repeat={Infinity}
                        ></TypeAnimation>
                    </h1>

                    <h1 className="text-3xl font-bold mt-5">Hi, I am Ismail <br /> <span className="block mt-2">From Bangladesh</span></h1>

                    <a id='btn' download className="" href="https://drive.google.com/uc?export=download&id=1-V2erFHJ7-e8cCFXfEWGS90cNvcOsfAK">
                        <button className="text-white btn border-0  bg-[#e91e63] hover:bg-[#c2185b] mt-10" >Download Resume </button >
                    </a>
                </div>
                <div className="mt-16 md:mt-0">
                    {/* <img className="rounded-lg pt-24 " src="../../../public/ismail.jpg" alt="" /> */}
                </div>

            </div>

            {/* about section */}
            <hr className='w-[20rem] absolute left-[20rem] bottom-[10rem]' />
            <section id='about' className="px-5 pt md:px-24 flex  justify-center items-center md:flex-row flex-col-reverse gap-16 mt-10 duration-1000">
                <div>
                    <img className="rounded-lg" src="https://i.ibb.co/g4GZCB3/ismail.jpg" alt="" />
                </div>
                <div>

                    <h1 className="text-4xl text-center mb-5 font-bold uppercase">
                        About me
                    </h1>
                    <p>My name is Ismail. I am a junior web developer. I have acquired proficiency in HTML, CSS, Boostrap, Tailwind CSS, JavaScript, Reactjs Expressjs, Node, MongoDB.
                    </p>
                    <p className='py-2'>
                        I have proficiency also many tools like Git, Github, VS code, Netlify, Firebase, Vercel etc.
                    </p>

                    <p className='pb-2'>
                        My goal as a web developer is to craft websites that not only look stunning but also deliver seamless user experiences. I believe in the power of clean, well-structured code and pay close attention to details to ensure optimal performance and accessibility.
                    </p>

                    <p>
                        I am always ready to learn new techonology.
                    </p>

                    <h1 className="my-3 text-3xl font-semibold uppercase">Education</h1>
                    <p>
                        Degree: B.sc in Zoology   <br />
                        Institution: Abdulpur Govt. College, Nator  <br />
                        Year: 2021 to present
                    </p>


                </div>
            </section>

            {/* services section */}

            <section id='services' className="px-5 md:px-24">
                <h1 className="text-4xl text-center mt-10 font-bold uppercase">Service</h1>
                <div className="flex justify-center mt-10 ">
                    <div className="bg-black w-96 border-2 border-[#e91e63] duration-1000 hover:bg-[#e91e63] hover:scale-75 ">
                        <figure className="p-3  bg-black hover:bg-[#e91e63] duration-1000 border-0 outline-none">
                            <img src="https://i.ibb.co/71YGBkd/font-end.jpg" alt="Shoes" className="rounded" />
                        </figure>
                        <div className=" text-center">
                            <h2 className="text-2xl mb-3">Font-end Development</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* skills section */}

            <section id='skill' className="px-5 md:px-24">
                <div className="flex justify-center">
                    <div>
                        <h1 className="text-center text-4xl font-bold my-14 uppercase">Skills</h1>
                        <div className="grid md:grid-cols-4 gap-16">
                            <div className="md:border md:border-[#e91e63] hover:border-0">
                                <img className="mx-auto py-5 hover:scale-[1.5] duration-1000 origin-bottom hover:translate-y-7" src="https://i.ibb.co/SB7LsrS/html2.jpg" alt="" />
                            </div>
                            <div className=" md:border md:border-[#e91e63] hover:border-0">
                                <img className="mx-auto py-5  hover:scale-[1.5] duration-1000 origin-bottom hover:translate-y-7" src="https://i.ibb.co/3C78LJy/css2.jpg" alt="" />
                            </div>
                            <div className=" md:border md:border-[#e91e63] hover:border-0">
                                <img className="mx-auto py-5  hover:scale-[1.5] duration-1000 origin-bottom hover:translate-y-7" src="https://i.ibb.co/Jpb8c27/js2.jpg" alt="" />
                            </div>
                            <div className=" md:border md:border-[#e91e63] hover:border-0">
                                <img className="mx-auto py-3  hover:scale-[1.5] duration-1000 origin-bottom hover:translate-y-7" src="https://i.ibb.co/t2GGCf8/react2.png" alt="" />
                            </div>
                            <div className=" md:border md:border-[#e91e63] hover:border-0">
                                <img className="mx-auto py-3  hover:scale-[1.5] duration-1000 origin-bottom hover:translate-y-7" src="https://i.ibb.co/jRhfK61/react-router2.jpg" alt="" />
                            </div>
                            <div className=" md:border md:border-[#e91e63] hover:border-0">
                                <img className="mx-auto pt-5  hover:scale-[1.5] duration-1000 origin-bottom hover:translate-y-7" src="https://i.ibb.co/8jJJkWz/express2.jpg" alt="" />
                            </div>
                            <div className=" md:border md:border-[#e91e63] hover:border-0">
                                <img className="mx-auto pt-5  hover:scale-[1.5] duration-1000 origin-bottom hover:translate-y-7" src="https://i.ibb.co/BHDh6dM/node2.png" alt="" />
                            </div>
                            <div className=" md:border md:border-[#e91e63] hover:border-0">
                                <img className="mx-auto p-5  hover:scale-[1.5] duration-1000 origin-bottom hover:translate-y-7" src="https://i.ibb.co/s2bkd8D/mongodb.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project section */}

            <section id="project" className="px-5 md:px-24 ">
                <div>
                    <h1 className="text-center text-4xl font-bold my-16 uppercase">Projects</h1>
                </div>
                <div className="grid md:grid-cols-3 gap-10 ">
                    <div className="relative">
                        <img className="rounded-xl" src="https://i.ibb.co/sb76x2p/sports-academies.png" alt="" />

                        <div className="w-full absolute p-2 bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[#e91e63] h-full opacity-0 transition-all duration-1000 hover:opacity-100">
                            <h1 className="text-center text-2xl font-bold">Sports Academies</h1>
                            <div className="text-[12px] mt-4">
                                <p>
                                    01. This is a online based courses buy and sell website
                                </p>
                                <p>
                                    02. people can purchase classes.
                                </p>
                                <p>
                                    03. admin can change user role as a instructor or admin.
                                </p>

                                <a className="bg-blue-500 px-3 py-2 rounded-lg absolute bottom-[0.5rem] left-[2rem] text-[0.9rem]" href="https://sports-academies-e714f.web.app/" target="blank">Live site</a>
                                <a className="bg-blue-500 px-3 py-2 rounded-lg absolute bottom-[0.5rem] left-[8rem] text-[0.9rem]" href="https://github.com/ISMAILTODAY/sports-academies-client" target="blank">Client repo</a>
                                <a className="bg-blue-500 px-3 py-2 rounded-lg absolute bottom-[0.5rem] left-[15rem] text-[0.9rem]" href="https://github.com/ISMAILTODAY/sports-academies-server" target="blank">Server repo</a>
                            </div>

                        </div>

                    </div>
                    <div className="relative">
                        <img className="rounded-xl" src="https://i.ibb.co/6rMKydp/toyforest.png" alt="" />

                        <div className="w-full absolute p-2 bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[#e91e63] h-full opacity-0 transition-all duration-1000 hover:opacity-100">
                            <h1 className="text-center text-2xl font-bold">Toy Forest</h1>
                            <div className="text-[12px] mt-4">
                                <p>
                                    01. This is a online based toy buy and sell website
                                </p>
                                <p>
                                    02. people can oder your toy here.
                                </p>
                                <p>
                                    03. seller can Add and edit toy data.
                                </p>

                                <a className="bg-blue-500 px-3 py-2 rounded-lg absolute bottom-[0.5rem] left-[2rem] text-[0.9rem]" href="https://toy-market-94efc.web.app/" target="blank">Live site</a>
                                <a className="bg-blue-500 px-3 py-2 rounded-lg absolute bottom-[0.5rem] left-[8rem] text-[0.9rem]" href="https://github.com/ISMAILTODAY/toy-forest-client-side" target="blank">Client repo</a>
                                <a className="bg-blue-500 px-3 py-2 rounded-lg absolute bottom-[0.5rem] left-[15rem] text-[0.9rem]" href="https://github.com/ISMAILTODAY/toy-forest-server-side" target="blank">Server repo</a>
                            </div>

                        </div>
                    </div>
                    <div className="relative">
                        <img className="rounded-xl" src="https://i.ibb.co/XJgY5QK/goodchef4.png" alt="" />

                        <div className="w-full absolute p-2 bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[#e91e63] h-full opacity-0 transition-all duration-1000 hover:opacity-100">
                            <h1 className="text-center text-2xl font-bold">Good Chef</h1>
                            <div className="text-[12px] mt-4">
                                <p>
                                    01. This is a online based chef finding website
                                </p>
                                <p>
                                    02. Chefs recipe and making method.
                                </p>
                                <p>
                                    03. Chefs brief bio.
                                </p>

                                <a className="bg-blue-500 px-3 py-2 rounded-lg absolute bottom-[0.5rem] left-[2rem] text-[0.9rem]" href="https://good-chef-41eb9.web.app/" target="blank">Live site</a>
                                <a className="bg-blue-500 px-3 py-2 rounded-lg absolute bottom-[0.5rem] left-[8rem] text-[0.9rem]" href="https://github.com/ISMAILTODAY/good-chef-client" target="blank">Client repo</a>
                                <a className="bg-blue-500 px-3 py-2 rounded-lg absolute bottom-[0.5rem] left-[15rem] text-[0.9rem]" href="https://github.com/ISMAILTODAY/good-chef-server" target="blank">Server repo</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* contact section */}

            <section id='contact' className="px-5 md:px-24">
                <div className="md:flex justify-evenly items-center
                 py-10">
                    <div className="md:w-1/2 ml-16 md:ml-0 mb-10">
                        <h1 className=" text-5xl font-bold mb-5 uppercase">Contact me</h1>
                        <p><FontAwesomeIcon icon={faPhone} /> +8801887870604</p>
                        <a href='mailto:ismailw104'><FontAwesomeIcon icon={faEnvelope} /> ismailw104@gmail.com</a>
                        <div className="flex gap-6 mt-5">
                            <a target='blank' href="https://web.facebook.com/mdIsmailHossain04/"><FaFacebook></FaFacebook> </a>
                            <a href="#"><FaLinkedin></FaLinkedin></a>
                            <a target='blank' href="https://github.com/ISMAILTODAY"><FaGithub></FaGithub></a>
                        </div>
                        <a download className="" href="https://drive.google.com/uc?export=download&id=1-V2erFHJ7-e8cCFXfEWGS90cNvcOsfAK">
                            <button className="text-white btn border-0 bg-[#e91e63] hover:bg-[#c2185b] mt-10" >Download Resume </button >
                        </a>
                    </div>
                    <div className="md:w-1/2 flex flex-col gap-5">
                        <input type="text" placeholder="Your Name" className="bg-[#262626] outline-none w-full p-2 " />
                        <input type="text" placeholder="Your Email" className="bg-[#262626] outline-none w-full p-2" />
                        <textarea className="textarea bg-[#262626] outline-none " placeholder="Your message"></textarea>
                        <button className="text-white btn border-0 bg-[#e91e63] hover:bg-[#c2185b] mt-10" ><FaRegPaperPlane></FaRegPaperPlane> Send </button >
                    </div>

                </div>

            </section>

            {/* footer section */}

            <footer className="footer footer-center p-4 bg-black text-white">
                <div>
                    <p>Copyright © {currentYear} - All right reserved by Ismail</p>
                </div>
            </footer>

        </div>
    );
};

export default Home;