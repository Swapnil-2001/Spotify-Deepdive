import { featureDescriptionMapping } from "../../../../../utils/constants";
import "./SelectedTrackFeature.scss";

const SelectedTrackFeature = ({ feature, value }) => {
  return (
    <div>
      <div className="feature_name_and_value">
        <h2 className="feature_name">
          {feature.charAt(0).toUpperCase() + feature.substring(1)}
        </h2>
        <h2>{value}</h2>
      </div>
      <p>{featureDescriptionMapping[feature]}</p>
    </div>
  );
};

export default SelectedTrackFeature;
