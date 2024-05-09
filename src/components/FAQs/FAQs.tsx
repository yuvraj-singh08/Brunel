import { title } from "process";
import ExpandingAns from "./ExpandingAns";

export default function FAQs() {
    const data = [
        {
            title: 'Do you offer freelancers?',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quo numquam alias, distinctio id eaque doloremque fuga commodi aliquam quisquam non cum ipsa, sapiente facilis. Natus tempora tenetur fugit sint!'
        },
        {
            title: 'What’s the guarantee that I will be satisfied with the hired talent?',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quo numquam alias, distinctio id eaque doloremque fuga commodi aliquam quisquam non cum ipsa, sapiente facilis. Natus tempora tenetur fugit sint!'
        },
        {
            title: 'Can I hire multiple talents at once?',
            description: 'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.'
        },
        {
            title: 'Why should I not go to an agency directly?',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quo numquam alias, distinctio id eaque doloremque fuga commodi aliquam quisquam non cum ipsa, sapiente facilis. Natus tempora tenetur fugit sint!'
        },
        {
            title: 'Who can help me pick a right skillset and duration for me?',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quo numquam alias, distinctio id eaque doloremque fuga commodi aliquam quisquam non cum ipsa, sapiente facilis. Natus tempora tenetur fugit sint!'
        },
    ]
    return (
        <div className=" max-w-screen-2xl mx-auto rounded-3xl" style={{ backgroundColor: '#E8EEE7' }}>
            <div className="flex justify-between max-w-6xl mx-auto py-12">
                {/* Left Side  */}
                <div className="mx-4">
                    <div className="covered-by-your-grace-regular text-2xl mx-auto" style={{
                        color: '#9E9D9D'
                    }}  >
                        What's on your mind
                    </div>
                    <div className="text-5xl mt-2 font-semibold">Ask Questions</div>
                </div>

                {/* Right Side  */}
                <div className="mx-4" style={{ width: '550px' }}>
                    {data.map((data, index) => {
                        return (<>
                            <ExpandingAns title={data.title} description={data.description} key={index} />
                            <hr className="border-t-1 border-gray-400" />
                        </>)
                    })}
                </div>
            </div>
        </div>
    )
}