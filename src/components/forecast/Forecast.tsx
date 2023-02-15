import Degree from '../Degree'
import { forecastType } from '../../types'
import './forecast.styles.css'

type Props = {
  data: forecastType
}

const Forecast = ({ data }: Props) => {
  const today = data.list[0]

  return (
    <section>
      <div className='forecast-div-container'>
        <div className='current-city-weather-container'>
          <div>
            <h2 className="current-city">
              {data.name} <span>{data.country}</span>
            </h2>
          </div>
          <div>
            <h1 className="current-temp">
              <Degree temp={Math.round(today.main.temp)} />
            </h1>
            <p>
              {today.weather[0].main} ({today.weather[0].description})
            </p>
            <p>
              H: <Degree temp={Math.ceil(today.main.temp_max)} /> L:{' '}
              <Degree temp={Math.floor(today.main.temp_min)} />
            </p>
          </div>
        </div>

        <section className="days-hours-forecasts-section">
          {data.list.map((item, i) => (
            <div
              key={i}
              className="days-hours-forecasts"
            >
              <p className='hour-text'>
                {i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}
              </p>
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <p className="temp-text">
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </div>
          ))}
        </section>
      </div>
    </section>
  )
}

export default Forecast
