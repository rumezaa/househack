import PropertyCard from "../components/PropertyCard";
import h1 from "../images/houses/house1.png";
import h2 from "../images/houses/house2.png";
import h3 from "../images/houses/house3.png";
import h4 from "../images/houses/house4.png";
import h5 from "../images/houses/house5.png";
import h6 from "../images/houses/house6.png";
import BG from "../images/properties.svg"

function Property() {
  return (
    <div className="flex flex-col items-center justify-center">
     <div
        style={{ backgroundImage: `url('${BG}')` }}
        className="w-full h-96 bg-contain bg-no-repeat flex flex-row items-center px-10"
      />
      <div className="grid grid-cols-3 items-center px-20 gap-20 pt-20">
        <PropertyCard image={h1} />
        <PropertyCard image={h2} />
        <PropertyCard image={h3} />
        <PropertyCard image={h4} />
        <PropertyCard image={h5} />
        <PropertyCard image={h6} />
      </div>
    </div>
  );
}

export default Property;
