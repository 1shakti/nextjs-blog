import TopBar from '@/components/TopBar/TopBar';
import Workspace from '@/components/Workspace/Workspace';
import React, {FC} from 'react';

type ProblemsPageProps = {
    
};

const ProblemsPage:FC<ProblemsPageProps> = () => {
    
    return (
        <>
        <TopBar problemsPage={true} />
        <Workspace />
        </>
    )
}
export default ProblemsPage;