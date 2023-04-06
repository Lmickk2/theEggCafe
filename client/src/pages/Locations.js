import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Locations() {
  return (
    <div>
      <h1 className="locations">Locations</h1>

      <section className="contact-us-section">
        <div className="row medium-unstack">
          <div className="columns contact-us-section-left">
            <div className="responsive-embed">
              <h3 className="location">Davidson</h3>
            </div>

            <ul className="contact-us-list">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.1017260173685!2d-80.85175734926854!3d35.50176278013958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856aa35f0c61ba1%3A0x650b91b9c0e8d054!2s231%20Griffith%20St%2C%20Davidson%2C%20NC%2028036!5e0!3m2!1sen!2sus!4v1680288731393!5m2!1sen!2sus"
                width="400"
                height="250"
                frameBorder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                className="map"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <li className="address">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> 231 Griffith St,
                Davidson, NC
              </li>
              <li className="hours">
                <FontAwesomeIcon icon={faClock} /> Mon-Sat: 7 AM - 8 PM,
                Sundays: 8 AM - 4 PM
              </li>
              <li className="phone">
                <FontAwesomeIcon icon={faPhone} /> 704-987-1885
              </li>
            </ul>
          </div>
        </div>

        <div className="row medium-unstack">
          <div className="columns contact-us-section-right">
            <div className="responsive-embed">
              <div className="responsive-embed">
                <h3 className="location">Huntersville</h3>
              </div>

              <ul className="contact-us-list">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.4825710675855!2d-80.8900880085923!3d35.44284571728011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a9264c350a5f%3A0x9cd5e7c45a573789!2s9525%20Birkdale%20Crossing%20Dr%2C%20Huntersville%2C%20NC%2028078!5e0!3m2!1sen!2sus!4v1680288968123!5m2!1sen!2sus"
                  width="400"
                  height="250"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  className="map"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <li className="address">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> 9525 Birkdale
                  Crossing, Suite 101, Huntersville, NC
                </li>
                <li className="hours">
                  <FontAwesomeIcon icon={faClock} /> Mon-Sat: 7 AM - 2 PM,
                  Sundays 8 AM - 2 PM
                </li>
                <li className="phone">
                  <FontAwesomeIcon icon={faPhone} /> 980-689-2538
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="cont-space"></div>
    </div>
  );
}

export default Locations;
