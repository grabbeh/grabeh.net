import Title from './Title'
import Render from '../lib/render'

export default ({ title, text }) => {
  const Body = Render(text)
  let cleanTitle = title.slice(0, title.search('.md')).replace(/-/gi, ' ')
  return (
    <div className='mw7 center pa3'>
      <Title title={cleanTitle} />
      <Body />
    </div>
  )
}
