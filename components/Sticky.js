import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaRegComments } from 'react-icons/fa';
import styles from '@/styles/Sticky.module.css'


const Sticky = () => {
  return (
    <>
      <div className={styles.stickycontainer}>
        <ul className={styles.sticky}>
          <li>
            <BsFillTelephoneFill size={28} />
            <p><a href="tel:+13465023898" target="_self">(346) 502-3898</a></p>
          </li>
          <li>
            <FaRegComments size={28} />
            <p><a href="javascript:$zopim.livechat.window.show();" >Let's Discuss</a></p>
          </li>
        </ul>
      </div>

    </>
  )
}

export default Sticky