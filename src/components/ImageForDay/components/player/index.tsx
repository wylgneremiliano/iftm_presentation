import React from "react";
import PropTypes from "prop-types";
import { IframeContainer } from "./styles";

const YoutubeEmbed = ({ embedId }: any) => (
  <div className="video-responsive">
    <IframeContainer
      width="853"
      height="480"
      src={`${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
