import { optionType } from '../../types/index'
import './suggestion.styles.css'

type componentProps = {
  options: []
  onSelect: (option: optionType) => void
}

const Suggestions = ({ options, onSelect }: componentProps): JSX.Element => (
  <ul>
    {options.map((option: optionType, index: number) => (
      <li key={option.name + '-' + index} className="suggestion-lists">
        <button
          className="suggestion-list-select"
          onClick={() => onSelect(option)}
        >
          {option.name}, {option.country}
        </button>
      </li>
    ))}
  </ul>
)

export default Suggestions
