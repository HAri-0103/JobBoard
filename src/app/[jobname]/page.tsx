import Dashboard1 from "@/components/dashboard1"

export default function JobDetail({params}:{params:{jobname:string}}){
    let name = params.jobname;
    name = name.replace("%20", ' ');
    return( 
        <div className=" bg-pink-300/20">
            <div className="bg-blue-900 w-screen h-[300px] bg-contain bg-no-repeat">
                <div className="pt-[200px] text-center">
                    <h3 className="text-7xl font-medium text-white">4536+ Jobs Availabe</h3>
                </div>
            </div>
            <div className='flex flex-row justify-center gap-10 mt-20'>
                <div className=" ">
                    <Dashboard1 title={name} img={"1"}/>
                    <div className="w-[600px] flex-cols justify-between leading-normal text-lg items-center border my-1 bg-white rounded-xl space-y-5 py-5 px-10">
                        <div className="space-y-5 py-5">
                            <h1 className="text-black text-3xl font-bold">Job Description</h1>
                            <p className="text-black">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
                            <p>Variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
                        </div>
                        <div className="space-y-5 py-5">
                            <h1 className="text-black text-3xl font-bold">Responsibiltiy</h1>
                            <ul className="text-black px-10">
                                <li className="list-disc">The applicants should have experience in the following areas.</li>
                                <li className="list-disc">Have sound knowledge of commercial activities.</li>
                                <li className="list-disc">Leadership, analytical, and problem-solving abilities.</li>
                                <li className="list-disc">Should have vast knowledge in IAS/ IFRS, Company Act, Income Tax, VAT.</li>
                            </ul>
                        </div>
                        <div className="space-y-5 py-5">
                            <h1 className="text-black text-3xl font-bold">Qualifications</h1>
                            <ul className="text-black px-10">
                                <li className="list-disc">The applicants should have experience in the following areas.</li>
                                <li className="list-disc">Have sound knowledge of commercial activities.</li>
                                <li className="list-disc">Leadership, analytical, and problem-solving abilities.</li>
                                <li className="list-disc">Should have vast knowledge in IAS/ IFRS, Company Act, Income Tax, VAT.</li>
                            </ul>
                        </div>
                        <div className="space-y-5 py-5">
                            <h1 className="text-black text-3xl font-bold">Benefits</h1>
                            <p className="text-black">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
                        </div>
                    </div>
                    <div>
                        <form className="w-[600px] flex-cols justify-between leading-normal text-lg items-center border my-1 bg-white rounded-xl space-y-5 py-5 px-10 mb-10">
                            <h1 className="text-black text-3xl font-bold">Apply for Job</h1>
                            <div className="flex items-center gap-20">
                                <input className="w-[250px] outline-none border border-gray-300 p-5 text-black rounded-lg" type="text" placeholder="Name"/>
                                <input className="w-[250px] outline-none border border-gray-300 p-5 text-black rounded-lg" type="email" placeholder="Email"/>
                            </div>
                            <input className="w-[500px] outline-none border border-gray-300 p-5 text-black rounded-lg" type="url" placeholder="Website/Portfolio link"/>
                            <div className="grid grid-flow-row">
                                <label className="p-5 border border-gray-300 rounded-lg" htmlFor="file1">Upload CV</label>
                                <input className="hidden" type="file" id="file1"/>
                            </div>
                            <textarea className="outline-none border border-gray-300 p-5 rounded-lg" rows={10} cols={65}/>
                            <button className="w-full cursor-pointer text-2xl p-5 bg-green-500 border border-green-500 rounded-lg text-white hover:bg-transparent transition-all duration:300 hover:duration-300 hover:text-green-500">Apply Now</button>
                        </form>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="w-[350px] text-center text-lg border my-1 bg-white rounded-xl space-y-5 py-5 px-10">Job Summary</div>
                    <div className="w-[350px] flex-cols justify-start leading-normal text-lg items-center border my-1 bg-white rounded-xl space-y-5 py-5 px-10">
                        <ul className="space-y-5 py-10">
                            <li className="text-2xl list-disc text-gray-400">Published on: <span className="text-black text-2xl">12 Nov,2019</span></li>
                            <li className="text-2xl list-disc text-gray-400">Vacancy: <span className="text-black text-2xl">2 Position</span></li>
                            <li className="text-2xl list-disc text-gray-400">Salary: <span className="text-black text-2xl">50K - 120K/y</span></li>
                            <li className="text-2xl list-disc text-gray-400">Location: <span className="text-black text-2xl">California, USA</span></li>
                            <li className="text-2xl list-disc text-gray-400">Job Nature: <span className="text-black text-2xl">Full Time</span></li>
                        </ul>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}