import Navbar from '@/components/navigation/navbar'
import React, {ReactNode} from 'react'

const RootLayout = ({children}:{children: ReactNode}) => {
  return (
    <div>
      <Navbar />
        {children}
    </div>
  );
};

export default RootLayout;