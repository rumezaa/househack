import House from "../images/houses/house1.png";

function PropertyShow() {
  return (
    <div className="flex flex-row items-center px-20">
      <div className="w-1/2">
        <img src={House} width={500} />
      </div>

      <div className="w-1/2 flex flex-col gap-5">
        <h2 className="font-semi-bold text-2xl ">Investment Profile</h2>
        <div className="bg-orange-b bg-opacity-15 text-white">
          <h2 className="text-lg font-bold">
            82% <span className="text-base font-thin">available equity</span>
          </h2>
          <div className="flex flex-row">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.398 19.804L12.8585 20.6917L12.8585 20.6917L12.398 19.804ZM11.602 19.804L11.1415 20.6917L11.1415 20.6917L11.602 19.804ZM18 11C18 13.1458 16.9079 14.9159 15.545 16.2906C14.183 17.6644 12.6342 18.555 11.9376 18.9163L12.8585 20.6917C13.6448 20.2838 15.397 19.2805 16.9653 17.6987C18.5326 16.1178 20 13.8706 20 11H18ZM12 5C15.3137 5 18 7.68629 18 11H20C20 6.58172 16.4183 3 12 3V5ZM6 11C6 7.68629 8.68629 5 12 5V3C7.58172 3 4 6.58172 4 11H6ZM12.0624 18.9163C11.3658 18.555 9.81702 17.6644 8.45503 16.2906C7.09211 14.9159 6 13.1458 6 11H4C4 13.8706 5.46741 16.1178 7.03474 17.6987C8.60299 19.2805 10.3552 20.2838 11.1415 20.6917L12.0624 18.9163ZM11.9376 18.9163C11.9514 18.9091 11.9733 18.9023 12 18.9023C12.0267 18.9023 12.0486 18.9091 12.0624 18.9163L11.1415 20.6917C11.6831 20.9726 12.3169 20.9726 12.8585 20.6917L11.9376 18.9163ZM14 11C14 12.1046 13.1046 13 12 13V15C14.2091 15 16 13.2091 16 11H14ZM12 9C13.1046 9 14 9.89543 14 11H16C16 8.79086 14.2091 7 12 7V9ZM10 11C10 9.89543 10.8954 9 12 9V7C9.79086 7 8 8.79086 8 11H10ZM12 13C10.8954 13 10 12.1046 10 11H8C8 13.2091 9.79086 15 12 15V13Z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>{" "}
            <span className="text-base ">
              195 Evanscrest Way NW, Calgary, AB
            </span>
          </div>
          <h2>
            123%{" "}
            <span span className="text-base font-thin">
              estimated ROI
            </span>
          </h2>
          <h2>
            20%{" "}
            <span span className="text-base font-thin">
              estimated IRR
            </span>
          </h2>
        </div>

        <div className="italic">
          Investment Rationale: Situated on 6500 square feet in Evanston, this
          mint property offers the luxury of a separate walkout basement at the
          acquisition cost of a single family home. This growing community
          offers a serene home with nearby schools, shopping centers and lakes.
        </div>

        <div className="flex flex-row text-center gap-4">
            <div className="border border-orange-b rounded-md w-56 text-center p-3 ">Take a Tour</div>
            <div className="bg-orange-b rounded-md w-56 text-white text-center p-3">94% Match</div>
        </div>
      </div>
    </div>
  );
}
export default PropertyShow;
