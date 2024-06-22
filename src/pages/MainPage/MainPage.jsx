import React from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Category from '../../components/Category/Category'
import DefinitionPart from '../../components/DefinitionPart/DefinitionPart'
import UniversityCarousel from '../../components/UniversityCarousel/UniversityCarousel'
import Footer from '../../components/Footer/Footer'

export default function MainPage() {
  return (
    <div>
      <Header />
      <Main />
      <Category />
      <DefinitionPart />
      <UniversityCarousel />
      <Footer />
    </div>
  )
}
