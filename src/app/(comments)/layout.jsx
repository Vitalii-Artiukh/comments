import React from 'react';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div>{children}</div>
      </main>

      <Footer>Footer</Footer>
    </>
  );
}
