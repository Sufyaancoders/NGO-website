import React from 'react'
import IntegrationsSection from '@/components/ui/toolsection/tool.jsx'

import Index from '@/components/toolsections';
import FooterSection from '@/components/footer';
const Tools = () => {
    return (
        <div className='min-h-screen'>
            <IntegrationsSection />
           <Index />
           <div className='lg:mt-10 mt-3 '>
           <FooterSection />
           </div>

        </div>
    );
};

export default Tools;