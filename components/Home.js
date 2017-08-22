import React from 'react'
import Tool from './Tool'
import ClearFix from './ClearFix'
import HomeSection from './HomeSection'
import { Image, Box, Text, Link } from 'rebass'

export default () => (
  <div className='f4-ns f5 w-100 pv3 lh-copy'>
    <div>I make Internet things that no one looks at except my parents:</div>
    <HomeSection nb>
      <div className='b'>OTTGNaaS</div>
      <Text>
        Turn online terms into graphic novels at the flick of a switch (results may vary!)
      </Text>
      <Image mt={2} src='/static/demo.PNG' />
      <Link href='https://github.com/grabbeh/OTTGNaaS' children='Source' />
      <div>Tools</div>
      <ClearFix>
        <Tool>Google Cloud Vision API</Tool>
        <Tool>Node</Tool>
      </ClearFix>
    </HomeSection>
    <HomeSection>
      <div className='b mt3'>Case law emoji bot</div>
      <div>
        Emoji but not as you know it - possibly the future of fostering youth engagement with the law
      </div>
      <Image mt={2} src='/static/emoji.PNG' />
      <Link href='https://twitter.com/caselawemoji' children='Site' />
      <Box>
        <Link
          href='https://github.com/grabbeh/case-law-emoji-bot'
          children='Source'
        />
      </Box>
      <div>Tools</div>
      <ClearFix>
        <Tool>Twitter API</Tool>
        <Tool>Node</Tool>
        <Tool>IBM Watson</Tool>
        <Tool last>Dango</Tool>
      </ClearFix>
    </HomeSection>
    <HomeSection>
      <div className='mt3 b'>Fennec</div>
      <Text>Trade mark portfolio analysis and management</Text>
      <Image mt={2} className='w-100 ' src='/static/fennec.png ' />
      <Link href='https://github.com/grabbeh/fennec' children='Source' />
      <Text>Tools</Text>
      <ClearFix>
        <Tool>Angular</Tool>
        <Tool>Node</Tool>
        <Tool last>MongoDB</Tool>
      </ClearFix>

    </HomeSection>
    <HomeSection>
      <div className='mt3 b'>Instok</div>
      <Text>Send reminders to customers when stock is back in</Text>
      <Image mt={2} src='/static/instok.png ' />
      <Link href=' https://github.com/grabbeh/instok' children='Source' />
      <Text>Tools</Text>
      <ClearFix>
        <Tool>Stripe API</Tool>
        <Tool>Twilio API</Tool>
        <Tool>Angular</Tool>
        <Tool last>Node</Tool>
      </ClearFix>
    </HomeSection>
    <HomeSection>
      <div className='mt3 b'>Geophoto</div>
      <Text>
        Satisfy your virtual wanderlust by looking at photos from places it'd be just dandy to go to
      </Text>
      <Image mt={3} src='/static/geophoto.png ' />
      <Link href='https://github.com/grabbeh/geophoto' children='Source' />
      <div>Tools</div>
      <ClearFix>
        <Tool>Flickr API</Tool>
        <Tool>Angular</Tool>
        <Tool last>Node</Tool>
      </ClearFix>
    </HomeSection>

    <HomeSection>
      <div className='b'>Mapopho</div>
      <Text>
        Finally, a way to find out which part of the world has the best photos of subject matter X
      </Text>
      <Image mt={2} src='/static/mapopho.png' />
      <Link href='https://github.com/grabbeh/mapopho' children='Source' />
      <Text>Tools</Text>
      <ClearFix>
        <Tool>Flickr API</Tool>
        <Tool>Angular</Tool>
        <Tool last>Node</Tool>
      </ClearFix>
    </HomeSection>
    <HomeSection>
      <div className='mt3 b'>Routebop</div>
      <Text>
        Shares routes with people you do or don't love or feel any kind of emotion for
      </Text>
      <Image mt={2} src='/static/routebop.png' />
      <Link href='https://github.com/grabbeh/routebop' children='Source' />
      <div>Tools</div>
      <ClearFix>
        <Tool>jQuery</Tool>
        <Tool>Node</Tool>
        <Tool last>MongoDB</Tool>
      </ClearFix>
    </HomeSection>
    <div className='mt4'>I also wrote some stuff <a href='/posts'>here</a></div>

  </div>
)
