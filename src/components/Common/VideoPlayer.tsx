import 'plyr-react/dist/plyr.css'

import Plyr from 'plyr-react'
import React, { FC } from 'react'

interface Props {
  source: string
  poster?: string
  controls?: string[]
  autoPlay?: boolean
  ratio?: string | undefined
}

const defaultControls = [
  'play-large',
  'play',
  'progress',
  'current-time',
  'mute',
  'volume',
  'captions',
  'settings',
  'pip',
  'airplay',
  'fullscreen'
]

const VideoPlayer: FC<Props> = ({
  source,
  controls = defaultControls,
  poster,
  autoPlay = true,
  ratio = undefined
}) => {
  return (
    <div className="rounded-lg">
      <Plyr
        autoPlay={autoPlay}
        source={{
          type: 'video',
          sources: [
            {
              src: source,
              provider: 'html5'
            }
          ],
          poster: poster ?? source
        }}
        options={{
          controls: controls,
          autoplay: autoPlay,
          autopause: true,
          tooltips: { controls: true, seek: true },
          ratio
        }}
      />
    </div>
  )
}

export default VideoPlayer