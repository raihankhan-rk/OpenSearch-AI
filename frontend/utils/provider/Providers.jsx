'use client';

import React from 'react'

//Context
import { GlobalContextProvider } from '../../context/MainContext';

import { SessionProvider } from 'next-auth/react';

const Providers = ({ children }) => {

  return (
    <SessionProvider>
      <GlobalContextProvider>
          {children}
      </GlobalContextProvider>
    </SessionProvider>
  )
}

export default Providers