import React from "react";

const GoogleMapEmbed = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.1443019776502!2d-73.9847577233465!3d40.6928194713965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bb4da432cff%3A0xcc14ab15977ae489!2s147%20Prince%20St%2C%20Brooklyn%2C%20NY%2011201!5e0!3m2!1sen!2sus!4v1695065918304!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Embedded Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
