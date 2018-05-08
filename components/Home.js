import HomeSection from './HomeSection'

export default ({ projects }) => (
  <div className='mw8 center f4 pa3'>
    <div className='mb4 mt3 font f3'>
      <p>
        Hi, my name's Michael. I work as an in-house lawyer in London. However in my spare time I make Internet things.
      </p>
      <p>
        In part I'm inspired by the interface between the law and programming but also in part because I just enjoy learning new technologies.
      </p>
      <p> Here's some of my work:</p>
    </div>
    <div className='flex flex-wrap'>
      {projects.map(project => {
        return (
          <div className='w-33-l w-50-ns w-100'>
            <HomeSection key={project.id} {...project} />
          </div>
        )
      })}
    </div>
    <div className='mt4'>
      I also wrote some stuff <a href='/posts'>here</a>
    </div>
  </div>
)
