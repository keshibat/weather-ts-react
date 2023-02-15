import { ChangeEvent } from 'react'

import Header from '../header/Header'
import Suggestions from '../suggestion/Suggestions'

import { optionType } from '../../types/index'

import './search.styles.css'

type Props = {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmit: () => void
}

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props) => (
  <div className="search-container">
    <Header />

    <div className="">
      <input
        type="text"
        value={term}
        className="search-box"
        onChange={onInputChange}
        placeholder='enter your city...'
      />
      <button
        className="search-button"
        onClick={onSubmit}
      >
        search
      </button>
      <div className='suggestion-container'>
        <Suggestions options={options} onSelect={onOptionSelect} />
      </div>
    </div>
  </div>
)

export default Search
