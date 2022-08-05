import SelectedTrackFeature from "./SelectedTrackFeature/SelectedTrackFeature";
import "./SelectedTrackFeatures.scss";

const SelectedTrackFeatures = ({ features }) => {
  return (
    <>
      <h2 className="audio_features_heading">Audio Features for Track</h2>
      <div>
        {Object.keys(features).map((feature) => (
          <div className="audio_feature_div" key={feature}>
            <SelectedTrackFeature feature={feature} value={features[feature]} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectedTrackFeatures;
