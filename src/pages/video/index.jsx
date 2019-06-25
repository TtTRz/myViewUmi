import React from 'react';
import styles from '@/pages/index.scss';
import VideoCard from '../../components/widgets/video_card';
import { Row, Col } from 'antd'

class PhotoView extends React.PureComponent {

  state = {

  }
  renderVideoCard = () => {
    const a = [...new Array(24).keys()];
    return a.map((item) => {
      return <Col span={6}>
        <VideoCard />c
      </Col>
    });
  };
  render() {
    return (
      <div className={styles.normal}>
        <Row gutter={16}>
          {this.renderVideoCard()}
        </Row>
      </div>
    )
  }
}

export default PhotoView;
