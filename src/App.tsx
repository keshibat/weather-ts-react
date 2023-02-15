import Forecast from './components/forecast/Forecast'
import Search from './components/search/Search'

import useForecast from './hooks/useForecast'
import "./App.css";

const App = () => {
  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } =
    useForecast()

  return (
    <main className="container">
      {forecast ? (
        <div className="forecast-container"><Forecast data={forecast} /></div>
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  )
}

export default App
