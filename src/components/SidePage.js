import React, { Fragment } from 'react'
import MdClose from 'react-icons/lib/md/close'

const SidePage = ({ project, toggle }) => (
  <Fragment>
    {project &&
      <div>
        <div onClick={toggle}>
          <MdClose
            size={24}
            style={{
              paddingBottom: '10px',
              float: 'right',
              fontWeight: 'bold'
            }}
          />
        </div>
        <div className='ttl  b bb-ft pb2 mb3 pt-serif f3'>
          {project.projectName}
        </div>
        <img alt='' src={project.imageUrl} />
        <div className='pt2 pb4 f4 lh-copy'>{project.longDescription}</div>
      </div>}
  </Fragment>
)

export default SidePage
