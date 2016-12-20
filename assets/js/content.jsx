import React from 'react';
import ReactDOM from 'react-dom';

var init = function() {
  var HTTPlinkToCaptions = {};

  var youtube_player_el = $("#player-api");
  if (youtube_player_el.childNodes) {
  } else {
    return;
  }

  var audioTrack = youtube_player_el.childNodes[0].getAudioTrack();

  if (audioTrack.captionTracks.length > 0) {
    HTTPlinkToCaptions = audioTrack.captionTracks;
  }

  console.log(HTTPlinkToCaptions);
};
