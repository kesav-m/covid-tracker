import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import ContactTable from "../../components/table/ContactTable";
import { fetchContactData } from "../../actions/DailyReport";

const ContactData = () => {
  const dispatch = useDispatch();
  const contactData = useSelector(state => state.dailyReport.contactData);
  const { contacts } = contactData || "";
  const { primary } = contacts || "";
  const { regional } = contacts || "";

  useEffect(() => {
    dispatch(fetchContactData());
  }, [dispatch]);

  return (
    <div>
      <SocialMedia primary={primary} />
      <ContactTable regionaldata={regional} />
    </div>
  );
};

export default ContactData;
