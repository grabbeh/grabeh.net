import React from 'react'
import Tool from './Tool'
import ClearFix from './ClearFix'
import HomeSection from './HomeSection'
import { Image, Text, Link } from 'rebass'

export default () => (
  <div className='f4-ns f5 w-100 pv3 lh-copy'>
    <div>I make Internet things that no one looks at except my parents:</div>
    <HomeSection nb>
      <div className='b'>OTTGNaaS</div>
      <Text children=' Turn online terms into graphic novels at the flick of a switch (results may vary!)' />
      <Image mt={2} src='/static/demo.jpg' />
      <Link href='https://github.com/grabbeh/OTTGNaaS' children='Source' />
      <div>Tools</div>
      <ClearFix>
        <Tool>Google Cloud Vision API</Tool>
        <Tool>Node</Tool>
        <Tool>React</Tool>
      </ClearFix>

    </HomeSection>
    <HomeSection>
      <div className='b mt3'>Case law emoji bot</div>
      <Text children='Emoji but not as you know it - possibly the future of fostering youth engagement with the law' />
      <Image src='/static/emoji.jpg' />
      <Link href='https://twitter.com/caselawemoji' children='Site' />
      <Link
        href='https://github.com/grabbeh/case-law-emoji-bot'
        children='Source'
      />
      <div>Tools</div>
      <ClearFix>
        <Tool>Twitter API</Tool>
        <Tool>Node</Tool>
        <Tool>IBM Watson</Tool>
        <Tool>Dango</Tool>
      </ClearFix>
    </HomeSection>
    <HomeSection>
      <div className='mt3 b'>Fennec</div>
      <Text children='Trade mark portfolio analysis and management' />
      <Image mt={2} src='/static/fennec.jpg' />
      <Link href='https://github.com/grabbeh/fennec' children='Source' />
      <Text>Tools</Text>
      <ClearFix>
        <Tool>Angular</Tool>
        <Tool>Node</Tool>
        <Tool>MongoDB</Tool>
      </ClearFix>

    </HomeSection>
    <HomeSection>
      <div className='mt3 b'>Instok</div>
      <Text children='Send reminders to customers when stock is back in' />
      <Image mt={2} src='/static/instok.jpg' />
      <Link href=' https://github.com/grabbeh/instok' children='Source' />
      <Text>Tools</Text>
      <ClearFix>
        <Tool>Stripe API</Tool>
        <Tool>Twilio API</Tool>
        <Tool>Angular</Tool>
        <Tool>Node</Tool>
      </ClearFix>
    </HomeSection>
    <HomeSection>
      <div className='mt3 b'>Geophoto</div>
      <Text children="Satisfy your virtual wanderlust by looking at photos from places it'd be just dandy to go to" />
      <Image mt={2} src='/static/geophoto.jpg' />
      <Link href='https://github.com/grabbeh/geophoto' children='Source' />
      <div>Tools</div>
      <ClearFix>
        <Tool>Flickr API</Tool>
        <Tool>Angular</Tool>
        <Tool>Node</Tool>
      </ClearFix>
    </HomeSection>

    <HomeSection>
      <div className='mt3 b'>Mapopho</div>
      <Text children='Finally, a way to find out which part of the world has the best photos of subject matter X' />
      <Image mt={2} src='/static/mapopho.jpg' />
      <Link href='https://github.com/grabbeh/mapopho' children='Source' />
      <Text>Tools</Text>
      <ClearFix>
        <Tool>Flickr API</Tool>
        <Tool>Angular</Tool>
        <Tool>Node</Tool>
      </ClearFix>
    </HomeSection>
    <HomeSection>
      <div className='mt3 b'>Routebop</div>
      <Text children="Shares routes with people you do or don't love or feel any kind of emotion for" />
      <Image mt={2} src='/static/routebop.jpg' />
      <Link href='https://github.com/grabbeh/routebop' children='Source' />
      <div>Tools</div>
      <ClearFix>
        <Tool>jQuery</Tool>
        <Tool>Node</Tool>
        <Tool>MongoDB</Tool>
      </ClearFix>
    </HomeSection>
    <div className='mt4'>I also wrote some stuff <a href='/posts'>here</a></div>

  </div>
)
