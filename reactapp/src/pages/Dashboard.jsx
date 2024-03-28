
import React, { useEffect, useState } from 'react'
import MainContent from '../components/MainContent'
import { Menu } from '../components/Menu'
import Footer from '../components/Footer';

export const Dashboard = () => {

    const [selection, setSelection] = useState(() => {
      const storedSelection = localStorage.getItem('selection');
      return storedSelection ? parseInt(storedSelection) : 1;
    }
    ) ;

    useEffect(() => {
      // Save the count in localStorage whenever it changes
      localStorage.setItem('selection', selection.toString());
    }, [selection]);

  return (

    <>
        <div className="flex">
        {/* Navigation Bar */}
            <Menu selection={selection} setSelection={setSelection}/>
        {/* Main Components */}
          <MainContent selection={selection}/>
        </div>

        

        

    </>
  )
}
