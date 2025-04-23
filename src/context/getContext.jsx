import React, { createContext, useContext, useState, useEffect } from 'react';

const CardContext = createContext();

export const MyProvider = ({ children }) => {
  const [cardDetail, setCardDetail] = useState(() => {
    
    const storedDetail = localStorage.getItem('cardDetail');
    return storedDetail ? JSON.parse(storedDetail) : undefined;
  });

 
  useEffect(() => {
    if (cardDetail !== undefined) {
      localStorage.setItem('cardDetail', JSON.stringify(cardDetail));
    }
  }, [cardDetail]);

  return (
    <CardContext.Provider value={{ cardDetail, setCardDetail }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => useContext(CardContext);
