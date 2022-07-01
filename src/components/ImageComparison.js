import { ComparisonSlider, onlyHandleDraggable, BiMoveHorizontal } from 'react-comparison-slider';


export const ImageComparison = ({beforeImage , afterImage}) => {
  return (
    <div className="max-w-lg border border-black">
      <ComparisonSlider
        defaultValue={50}
        handleBefore={<div className="bg-white w-1 bottom-0 h-full"></div>}
        handleAfter={<div className="bg-white w-1 bottom-0 h-full"></div>}
        itemOne={
          <img
            className="w-full object-cover"
            src={beforeImage}
          />
        }
        itemTwo={
          <img
            className="w-full object-cover"
            src={afterImage}
          />
        }
        aspectRatio={1 / 1}
        onlyHandleDraggable
        
      />
      
    </div>
  );

};