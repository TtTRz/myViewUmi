import React from 'react';
import './video_card.scss'
import { Player } from 'video-react';
import { Card } from 'antd';

const { Meta } = Card;
class VideoCard extends React.PureComponent {

  state = {

  };

  render() {
    return (
      <div>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<Player>
            <source src="http://prl8bnm2e.bkt.clouddn.com/video%E8%80%83%E5%8B%A4%E8%AE%BE%E7%BD%AE.mp4" />
          </Player>}
        >

          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    )
  }
}

export default VideoCard;
