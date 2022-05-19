import React from 'react';
import ReactModal from 'react-modal';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

ReactModal.setAppElement('#app');

type Props = {
  isOpen: boolean;
  toggleStartClaimOpen: Function;
  toggleEditClaimOpen: Function;
  toggleEndClaimOpen: Function;
  gpsData: any;
};

const EditClaim = ({
  isOpen,
  toggleStartClaimOpen,
  toggleEditClaimOpen,
  toggleEndClaimOpen,
  gpsData,
}: Props) => {
  const { position: photoGPS } = gpsData;
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleEditClaimOpen}
      contentLabel="Edit Claim Modal"
      className="modal"
    >
      <div>
        <h2 className="modal__title">Verify Claim Details</h2>
        <MapContainer
          id="edit-claim__map"
          center={photoGPS}
          zoom={17}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={photoGPS} />
        </MapContainer>
        <h6>Add relevant information for your claim</h6>
        <form>
          License Plate:
          <br />
          <input type="text" id="edit-claim__licence-plate" />
          <br />
          <label htmlFor="edit-claim__licence-state">
            License State:
            <select className="form-control" id="edit-claim__licence-state">
              <option value="N/A">N/A</option>
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AR">AR</option>
              <option value="AZ">AZ</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DC">DC</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="IA">IA</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="MA">MA</option>
              <option value="MD">MD</option>
              <option value="ME">ME</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MO">MO</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="NC">NC</option>
              <option value="NE">NE</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NV">NV</option>
              <option value="NY">NY</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WI">WI</option>
              <option value="WV">WV</option>
              <option value="WY">WY</option>
            </select>
          </label>
          <br />
          Comment:
          <br />
          <input type="text" id="edit-claim__comment" />
        </form>
        <button
          type="button"
          onClick={() => {
            toggleEditClaimOpen();
            toggleStartClaimOpen();
          }}
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => {
            toggleEditClaimOpen();
            toggleEndClaimOpen();
          }}
        >
          Submit
        </button>
      </div>
    </ReactModal>
  );
};

export default EditClaim;
