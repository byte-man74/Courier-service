import React from 'react'
import { LogoContainer } from './logo'
import { MapView } from './maps'
import { SearchContainer } from './search_container'
import { ResultSummaryContainer } from './result_summary'

const HomePage = () => {
  return (
    <div className="main-section">
    <LogoContainer />
    <MapView />
    <SearchContainer />
    <ResultSummaryContainer />
  </div>
  )
}

export default HomePage