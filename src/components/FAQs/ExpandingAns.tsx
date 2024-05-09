import React, { useState } from "react";

interface Props {
    title: String;
    description: String;
}

export default function ExpandingAns({ title, description }: Props) {
    const [active, setActive] = useState(false);
    return (
        <div className="my-8">
            <button className="w-full block text-left" type="button" onClick={() => setActive((active) => !active)}>
                <div className="flex justify-between text-xl w-full" >
                    <div className="font-medium text-xl">{title}</div>
                    <div className="font-medium">{active ? '-' : '+'}</div>
                </div>
            </button>
            {active &&
                <div className="mt-5" style={{ color: '#617275' }}>
                    {description}
                </div>
            }
        </div>
    )
}

