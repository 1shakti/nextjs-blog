import React, { FC } from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";


type WorkspaceProps  = {};

const Workspace: FC<WorkspaceProps> = () => {
    return (
        <Split className="split" minSize={0}>
            <ProblemDescription />
            <div>right side panel</div>
        </Split>
    )
}

export default Workspace;