import React from 'react'
import styles from './styles.module.scss'
//import SearchSvg from '../../../public/static/assets/svgs/search.svg'

interface BoilerPlateProps {
  title?: string
}

const BoilerPlate: React.FC<BoilerPlateProps> = ({ title }) => {
  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default BoilerPlate
