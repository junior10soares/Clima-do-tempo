import { ArrowDown, ArrowUp, X } from '@phosphor-icons/react'
import { Container } from './styles'

interface CityDataProps {
  name: string
  main: {
    temp_min: number
    temp_max: number
  }
  sys: {
    country: string
  }
  weather: {
    main: string
  }[]
  wind: {
    speed: string
  }
}

interface ContainerTmpProps {
  cityData: CityDataProps
  onClose: () => void
}

const weatherTranslations: Record<string, string> = {
  Thunderstorm: 'Tempestade',
  Drizzle: 'Chuvisco',
  Rain: 'Chuva',
  Snow: 'Neve',
  Mist: 'Névoa',
  Smoke: 'Fumaça',
  Haze: 'Neblina',
  Dust: 'Poeira',
  Fog: 'Nevoeiro',
  Sand: 'Areia',
  Ash: 'Cinzas',
  Squall: 'Saracura',
  Tornado: 'Tornado',
  Clear: 'Céu Limpo',
  Clouds: 'Nuvens',
}

export function ContainerTmp({ cityData, onClose }: ContainerTmpProps) {
  const weatherDescription = cityData.weather[0].main
  const translatedWeather =
    weatherTranslations[weatherDescription] || weatherDescription

  const handleClose = () => {
    onClose()
  }

  return (
    <Container>
      <button onClick={handleClose}>
        <X />
      </button>

      <header>
        {cityData.name}, {cityData.sys.country}
      </header>

      <div>
        <h5>{Math.round(cityData.main.temp_max - 273.15)}ºC</h5>
        <span>{translatedWeather}</span>
      </div>

      <footer>
        <ArrowDown size={20} />
        <span>Mín {Math.round(cityData.main.temp_min - 273.15)}ºC</span>
        <ArrowUp size={20} />
        <span>Máx {Math.round(cityData.main.temp_max - 273.15)}ºC</span>
        <p>Vento {cityData.wind.speed}km/h</p>
      </footer>
    </Container>
  )
}
