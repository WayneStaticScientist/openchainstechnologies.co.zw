import React from "react";
import { Metadata } from "next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Globals } from "@/utils/globals";
// Assuming you would use these icons or others for formatting/links
import { IoLogoInstagram } from "react-icons/io";
import BreadCrump from "@/components/breadcrump";
import { BiLogoFacebook, BiLogoWhatsapp, BiLogoYoutube } from "react-icons/bi";

// ⚠️ IMPORTANT: Replace 'YourAppName' and 'YourCompanyName' with your actual names.
const APP_NAME = "Nyikarise";
const COMPANY_NAME = "Openchains Technologies";
const EFFECTIVE_DATE = "November 7, 2025";
const CONTACT_EMAIL = "support@openchains.shop";

export const metadata: Metadata = Globals.getMetaData({
  title: `${APP_NAME} - Privacy Policy`,
  description: `Our commitment to protecting your privacy and data security for ${APP_NAME}.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <BreadCrump
        page={"privacy-policy"}
        title={"Privacy Policy"}
        summary={`Last Updated: ${EFFECTIVE_DATE}`}
      />
      <section
        className="singleblog-section blogpage-section gradient"
        id="privacy-policy"
      >
        <div
          className="container wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="main-box">
                <div className="content1">
                  <h4>
                    Privacy Policy for {APP_NAME}
                  </h4>
                  <p className="text-size-14">
                    This Privacy Policy explains how **{COMPANY_NAME}** ("We," "Us," or "Our") collects, uses, protects, and otherwise handles your **Personally Identifiable Information (PII)** and other data when you use our **{APP_NAME}** mobile application (the "Service"). By using the Service, you consent to the data practices described in this policy.
                  </p>

                  <h5 className="mt-4">
                    1. Information We Collect
                  </h5>
                  <p className="text-size-14">
                    We collect a significant amount of data to provide and improve the Service, including highly sensitive categories of information:
                  </p>
                  <ul className="list-unstyled mb-3">
                    <li className="text-size-14 mb-2">
                      **Account Information:** We collect information you provide when you register, including your **phone number**, **name**, and profile picture.
                    </li>
                    <li className="text-size-14 mb-2">
                      **Authentication Data (Passwords):** We collect and securely store your password/PIN for authentication purposes. **Note: We use industry-standard encryption (hashing) techniques and do not store passwords in plain text.**
                    </li>
                    <li className="text-size-14 mb-2">
                      **Device Location:** With your explicit permission, we collect and process information about your **precise geographical location** via GPS, Wi-Fi, or cell tower triangulation. This is used for location-sharing features and general service functionality.
                    </li>
                    <li className="text-size-14 mb-2">
                      **User Files and Media Access:** With your explicit permission, we access your device’s media, including the ability to **read, store, and display images, videos, and files** from your device's storage. This access is strictly necessary for you to send and receive multimedia messages.
                    </li>
                    <li className="text-size-14 mb-2">
                      **Messages and Communications:** We collect the content of your messages (including text, audio, and video) and files you share. **Our Service utilizes end-to-end encryption, meaning that the content of your messages is encrypted and cannot be read by us or any third parties during transit.** However, metadata (sender, recipient, time, and date) may be collected.
                    </li>
                    <li className="text-size-14 mb-2">
                      **Contacts Information:** With your permission, we access and sync your device's address book to connect you with contacts who also use the Service.
                    </li>
                    <li className="text-size-14 mb-2">
                      **Device and Usage Data:** Information about how you access and use the Service, including your IP address, device model, operating system, app crashes, and usage logs.
                    </li>
                  </ul>

                  <h5 className="mt-4">
                    2. How We Use Your Information
                  </h5>
                  <p className="text-size-14">
                    We use the collected information for various purposes:
                  </p>
                  <ul className="list-unstyled mb-3">
                    <li className="text-size-14 mb-1">
                      To **provide and maintain the Service**, including message transmission and account verification.
                    </li>
                    <li className="text-size-14 mb-1">
                      To **facilitate communication** with your contacts.
                    </li>
                    <li className="text-size-14 mb-1">
                      To **improve, personalize, and expand** the Service.
                    </li>
                    <li className="text-size-14 mb-1">
                      To **monitor and analyze** usage and trends to improve your experience.
                    </li>
                    <li className="text-size-14 mb-1">
                      To **detect, prevent, and address** technical issues, fraud, and illegal activity.
                    </li>
                    <li className="text-size-14 mb-1">
                      To **comply with legal obligations** and law enforcement requests.
                    </li>
                  </ul>

                  <h5 className="mt-4">
                    3. How We Share Your Information
                  </h5>
                  <p className="text-size-14">
                    We do not sell or rent your PII to third parties for their marketing purposes. We may share your information in the following situations:
                  </p>
                  <ul className="list-unstyled mb-3">
                    <li className="text-size-14 mb-1">
                      **Service Providers:** We share data with third-party vendors and service providers (e.g., hosting, analytics) who require access to perform services on our behalf, and they are bound by confidentiality agreements.
                    </li>
                    <li className="text-size-14 mb-1">
                      **Legal Requirements:** If required to do so by law or in response to valid requests by public authorities (e.g., a court order or subpoena).
                    </li>
                    <li className="text-size-14 mb-1">
                      **Business Transfers:** In connection with a merger, acquisition, or sale of assets, your data may be transferred, provided the new entity agrees to adhere to this Privacy Policy.
                    </li>
                    <li className="text-size-14 mb-1">
                      **With Your Consent:** We may share your information with any other third party with your prior consent.
                    </li>
                  </ul>

                  <h5 className="mt-4">
                    4. Data Security and Encryption
                  </h5>
                  <p className="text-size-14">
                    **Security is a primary focus.** Given the sensitive nature of the data we collect (passwords, location, media), we implement appropriate technical and organizational measures to protect your PII.
                  </p>
                  <ul className="list-unstyled mb-3">
                    <li className="text-size-14 mb-1">
                      **End-to-End Encryption:** Your messages, photos, videos, voice messages, documents, and calls are secured with end-to-end encryption. Only you and the recipient can read or listen to them.
                    </li>
                    <li className="text-size-14 mb-1">
                      **Password Hashing:** Passwords are not stored in plain text but are secured using cryptographic hashing techniques.
                    </li>
                  </ul>

                  <h5 className="mt-4">
                    5. Data Retention
                  </h5>
                  <p className="text-size-14">
                    We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. For instance:
                  </p>
                  <ul className="list-unstyled mb-3">
                    <li className="text-size-14 mb-1">
                      **Message Content:** Due to end-to-end encryption, message content is typically only retained temporarily on our servers until delivery.
                    </li>
                    <li className="text-size-14 mb-1">
                      **Account Data:** We retain your account information for as long as your account is active. If you delete your account, we will initiate the deletion of your PII, though some data may persist for a short period in backups or for legal compliance.
                    </li>
                  </ul>

                  <h5 className="mt-4">
                    6. Your Rights
                  </h5>
                  <p className="text-size-14">
                    Depending on your jurisdiction, you may have the following rights regarding your personal data:
                  </p>
                  <ul className="list-unstyled mb-3">
                    <li className="text-size-14 mb-1">
                      **Right to Access:** The right to request copies of your personal data.
                    </li>
                    <li className="text-size-14 mb-1">
                      **Right to Rectification:** The right to request that we correct any information you believe is inaccurate.
                    </li>
                    <li className="text-size-14 mb-1">
                      **Right to Erasure:** The right to request that we delete your personal data (subject to legal exceptions).
                    </li>
                    <li className="text-size-14 mb-1">
                      **Right to Object:** The right to object to our processing of your personal data.
                    </li>
                  </ul>

                  <h5 className="mt-4">
                    7. Changes to This Privacy Policy
                  </h5>
                  <p className="text-size-14">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the **"Last Updated"** date at the top. You are advised to review this Privacy Policy periodically for any changes.
                  </p>

                  <h5 className="mt-4">
                    8. Contact Us
                  </h5>
                  <p className="text-size-14">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <p className="text-size-14">
                    **Email:** <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
