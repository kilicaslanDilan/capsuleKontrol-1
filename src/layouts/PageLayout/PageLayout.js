import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import LanguageProvider from '../../routes/Home/components/LanguageProvider/LanguageProvider'
import Header from '../../components/Header'
import HomeView from '../../routes/Home/components/HomeView'
export const PageLayout = ({ children }) => (

  <div>
 

    <Header>
   
      {children}
    </Header>


  </div>



)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
