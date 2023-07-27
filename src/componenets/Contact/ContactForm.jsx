import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="C-Container">
      <div className="myform">
        <h5>We want to hear from you!</h5>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email ID" />
          <textarea name="msg" id="msg" cols="30" rows="2"></textarea>
          <button>Submit</button>
        </form>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d109755.08962313691!2d76.85215!3d30.722713999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f931ebfffffc5%3A0x3f0e13e7ce622efa!2sChitkara%20Innovation%20Incubator%20Foundation!5e0!3m2!1sen!2sus!4v1690434358899!5m2!1sen!2sus"
          width="400"
          height="500"
        ></iframe>
      </div>
    </div>
  );
};
export default ContactForm;
