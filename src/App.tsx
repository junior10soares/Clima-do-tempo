import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import {
  Container,
  DefaultTheme,
  ImgIcons,
  Table,
  Title,
  Titleh2,
} from './styles/themes/default'
import { MagnifyingGlass } from '@phosphor-icons/react'
import sol from './assets/sol.png'
import chuva from './assets/chuva.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ContainerTmp } from './components/ContainerTmp'

interface WeatherData {
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

export function App() {
  const [inputCity, setInputCity] = useState('')
  const [cityData, setCityData] = useState<WeatherData | null>(null)
  const [capitalData, setCapitalData] = useState<WeatherData[]>([])
  const [, setShowContainerTmp] = useState(false)
  const API_KEY = 'a0cb396b6b8a31e54e68423100a2f5c7'

  const fetchWeatherData = async (cities: string[]) => {
    try {
      const promises = cities.map((city) =>
        axios.get<WeatherData>(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
        ),
      )
      const responses = await Promise.all(promises)
      const data = responses.map((response) => response.data)
      setCapitalData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const capitals = [
      'recife',
      'sao paulo',
      'natal',
      'fortaleza',
      'rio de janeiro',
    ]
    fetchWeatherData(capitals)
  }, [])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (inputCity.trim() === '') {
      return alert('Por favor, digite o nome da cidade.')
    }
    try {
      const response = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}`,
      )
      const data = response.data
      setCityData(data)
      setInputCity('')
      setShowContainerTmp(true)
      console.log(cityData)
    } catch (error) {
      alert(
        'Ocorreu um erro ao buscar a previsão do tempo. Por favor, verifique o nome da cidade.',
      )
      setInputCity('')
    }
  }

  const handleCloseContainerTmp = () => {
    setCityData(null)
    setShowContainerTmp(false)
  }

  return (
    <ThemeProvider theme={DefaultTheme}>
      <ImgIcons>
        <img src={sol} alt="sol" height={90} />
        <img src={chuva} alt="chuva" height={50} />
      </ImgIcons>
      <Title>Previsão do tempo</Title>

      {cityData && (
        <ContainerTmp cityData={cityData} onClose={handleCloseContainerTmp} />
      )}

      <Container>
        <input
          type="text"
          placeholder="Digite sua cidade..."
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          onClick={() => setShowContainerTmp(false)}
        />
        <button type="submit" onClick={handleSearch}>
          <MagnifyingGlass />
        </button>
      </Container>
      <Titleh2>Capitais</Titleh2>
      <Table>
        <table>
          <thead>
            <tr>
              <th>MÍN</th>
              <th>MÁX</th>
            </tr>
          </thead>
          <tbody>
            {capitalData.map((data, index) => (
              <tr key={index}>
                <td>{Math.round(data.main.temp_min - 273.15)}ºC</td>
                <td>{Math.round(data.main.temp_max - 273.15)}ºC</td>
                <td>{data.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Table>
      <GlobalStyle />
    </ThemeProvider>
  )
}
