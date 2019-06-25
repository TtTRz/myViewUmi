import React from 'react';

import { TrackModeSession, deviceManager, version, StreamModeSession } from "pili-rtc-web";

const myRoom = new StreamModeSession();
class PublishView extends React.PureComponent {
  state = {

  };

  async joinRoom() {
    await myRoom.joinRoomWithToken('IjWcG0Gb5wJHY-dHchHydu_RMYtkYLHR-irbpYdk:g_WJklzAjdO4Z3KZGNgM-piyjls=:eyJhcHBJZCI6ImU4czNodHFpZiIsInJvb21OYW1lIjoidGVzdCIsInVzZXJJZCI6InJvbSIsImV4cGlyZUF0IjoxNTYxNjI3NDIzLCJwZXJtaXNzaW9uIjoiYWRtaW4ifQ==');
    console.log("joinRoom success!");
    const localStream = await deviceManager.getLocalStream({
      audio: { enabled: true },
      video: { enabled: true },
    });
    // 将刚刚的 Stream 对象发布到房间中
    await myRoom.publish(localStream);
    console.log("publish success!");
    const localElement = document.getElementById("localstream");
    localStream.play(localElement, true);
  };
  async cancelRoom () {
    myRoom.leaveRoom()
  }
  render() {
    return (
      <div>
        <div id="localstream" style={{width: "640px", height: "480px", background: "#000"}}></div>
        <button onClick={this.joinRoom}>加入房间</button>
        <button onClick={this.cancelRoom}>退出房间</button>
      </div>
    )
  }
}

export default PublishView;
