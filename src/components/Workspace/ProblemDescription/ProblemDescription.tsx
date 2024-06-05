import React, { FC } from "react";

type problemdescriptionProps = {};

const ProblemDescription: FC<problemdescriptionProps> = () => {
    return (
        <div className="h-screen bg-dark-layer-1">
            <div className="w-full h-11 flex items-center pt-2 bg-dark-layer-2 text-white">
                <div className="bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-sm cursor-pointer">
                    Description
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default ProblemDescription;