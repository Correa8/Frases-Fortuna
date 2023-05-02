import './frases.css'

const Frases = ({ phrase }) => {
  return (
    <div className='user-card'>
      <p className="frase">{phrase.phrase}</p>
      <p className="autor">{phrase.author}</p>
    </div>
  )
}

export default Frases