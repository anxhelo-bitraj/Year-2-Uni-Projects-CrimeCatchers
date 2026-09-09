import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { GeoJSON } from "react-leaflet";
import boroughData from "../data/london-boroughs_1179.json";
import "./BoroughBoundaries.css"; // your styling

// Default style for borough polygons.
const defaultStyle = {
  color: "black",
  weight: 1,
  fillColor: "black",
  fillOpacity: 0.1,
};

// Hover style (light red) when the mouse is inside a polygon.
const hoverStyle = {
  color: "#ff6666", // Light red border
  weight: 2,
  fillColor: "#ffcccc", // Light red fill
  fillOpacity: 0.3,
};

// Selected style (dark red) when a borough is clicked.
const selectedStyle = {
  color: "#8b0000", // Dark red border
  weight: 2,
  fillColor: "#ff0040", // Dark red fill
  fillOpacity: 0.5,
};

const BoroughBoundaries = forwardRef(function BoroughBoundaries(
  { selectedBorough, onBoundaryClick, onHoverChange },
  ref
) {
  const geoJsonRef = useRef();
  // Store refs to each borough layer
  const boroughLayersRef = useRef({});

  // Expose getBoroughLayerBounds method to parent component
  useImperativeHandle(ref, () => ({
    getBoroughLayerBounds: (boroughName) => {
      const layer = boroughLayersRef.current[boroughName];
      if (layer) {
        return layer.getBounds();
      }
      return null;
    },
  }));

  function onEachFeature(feature, layer) {
    const boroughName = feature.properties.name;

    // Store reference to this layer for getBoroughLayerBounds
    boroughLayersRef.current[boroughName] = layer;

    // Mouseover: if not selected, apply hover style and bind a tooltip.
    layer.on("mouseover", function () {
      if (boroughName !== selectedBorough) {
        layer.setStyle(hoverStyle);
        layer
          .bindTooltip(boroughName, {
            permanent: false,
            direction: "center",
            className: "borough-tooltip",
          })
          .openTooltip();
      }
      if (onHoverChange) onHoverChange(boroughName);
    });

    // Mouseout: if not selected, revert style and unbind tooltip.
    layer.on("mouseout", function () {
      if (boroughName !== selectedBorough) {
        layer.setStyle(defaultStyle);
        layer.unbindTooltip();
      }
      if (onHoverChange) onHoverChange(null);
    });

    // Click: toggle selection.
    layer.on("click", function () {
      if (boroughName === selectedBorough) {
        // Deselect if already selected.
        onBoundaryClick(null);
        layer.setStyle(defaultStyle);
        layer.unbindTooltip();
      } else {
        // Select this borough.
        onBoundaryClick(boroughName);
        layer.setStyle(selectedStyle);
        layer
          .bindTooltip(boroughName, {
            permanent: true,
            direction: "center",
            className: "borough-tooltip",
          })
          .openTooltip();
      }
    });
  }

  // When selectedBorough changes, update all layers.
  useEffect(() => {
    if (geoJsonRef.current) {
      geoJsonRef.current.eachLayer((layer) => {
        const boroughName = layer.feature.properties.name;
        if (boroughName === selectedBorough) {
          layer.setStyle(selectedStyle);
          layer
            .bindTooltip(boroughName, {
              permanent: true,
              direction: "center",
              className: "borough-tooltip",
            })
            .openTooltip();
        } else {
          layer.setStyle(defaultStyle);
          layer.unbindTooltip();
        }
      });
    }
  }, [selectedBorough]);

  return (
    <GeoJSON
      ref={geoJsonRef}
      data={boroughData}
      style={defaultStyle}
      onEachFeature={onEachFeature}
    />
  );
});

export default BoroughBoundaries;
