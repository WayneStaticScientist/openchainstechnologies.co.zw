import { Globals } from "@/utils/globals";
import React from "react";

// Main App component for the Terms and Conditions page
export const Terms = () => {
  return (
    <div className="tw:min-h-screen! tw:bg-gray-50! tw:flex! tw:flex-col! tw:items-center! tw:p-4! sm:tw:p-6! lg:tw:p-8! tw:font-inter!">
      <div className="tw:max-w-4xl! tw:w-full! tw:bg-white! tw:shadow-xl! tw:rounded-2xl! tw:p-6! sm:tw:p-8! lg:tw:p-10! tw:mb-8! tw:mt-4!">
        {/* Header Section */}
        <h1 className="tw:text-3xl! sm:tw:text-4xl! tw:font-extrabold! tw:text-gray-800! tw:text-center! tw:mb-6! sm:tw:mb-8! tw:leading-tight!">
          Terms and Conditions for Openchains Technologies
        </h1>
        <p className="tw:text-sm! tw:text-gray-500! tw:text-center! tw:mb-8!">
          <span className="tw:font-semibold!">Last Updated:</span> December 13,
          2024
        </p>
        <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-6!">
          Please read these Terms and Conditions ("Terms", "Terms and
          Conditions") carefully before using the Openchains.shop website ("the
          Service") operated by{" "}
          <span className="tw:font-bold! tw:text-blue-600!">
            Openchains Technologies
          </span>{" "}
          ("us", "we", or "our").
        </p>
        <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-6!">
          Your access to and use of the Service is conditioned on your
          acceptance of and compliance with these Terms. These Terms apply to
          all visitors, users, and others who access or use the Service,
          including clients engaging our website development services and
          customers purchasing electronics.
        </p>
        <p className="tw:text-gray-700! tw:leading-relaxed! tw:mb-8!">
          By accessing or using the Service, you agree to be bound by these
          Terms. If you disagree with any part of the terms, then you may not
          access the Service.
        </p>

        {/* Section 1: Definitions */}
        <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-blue-200! tw:pb-2!">
          1. Definitions
        </h2>
        <ul className="tw:list-disc! tw:list-inside! tw:text-gray-700! tw:mb-8! tw:space-y-2!">
          <li>
            <strong className="tw:text-gray-900!">
              "Company," "We," "Us," "Our":
            </strong>{" "}
            Refers to Openchains Technologies and its operators.
          </li>
          <li>
            <strong className="tw:text-gray-900!">"Client," "You":</strong>{" "}
            Refers to any individual, business, or entity engaging our website
            development services.
          </li>
          <li>
            <strong className="tw:text-gray-900!">"Customer":</strong> Refers to
            any individual, business, or entity purchasing electronics from
            Openchains Technologies.
          </li>
          <li>
            <strong className="tw:text-gray-900!">"Services":</strong> Refers
            collectively to the website development services and the sale of
            electronics offered by Openchains Technologies.
          </li>
          <li>
            <strong className="tw:text-gray-900!">"Project":</strong> Refers to
            a specific website development undertaking agreed upon between the
            Company and the Client.
          </li>
          <li>
            <strong className="tw:text-gray-900!">"Website":</strong> Refers to
            the digital product developed by Openchains Technologies for the
            Client as part of a Project.
          </li>
          <li>
            <strong className="tw:text-gray-900!">"Electronics":</strong> Refers
            to any electronic products offered for sale by Openchains
            Technologies through its website.
          </li>
          <li>
            <strong className="tw:text-gray-900!">"Contract Expiry":</strong>{" "}
            The date after which the grace period for a Project ends, and the
            Client's right to complete payment for and own the Project ceases.
          </li>
        </ul>

        {/* Section 2: Website Development Services */}
        <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-blue-200! tw:pb-2!">
          2. Website Development Services
        </h2>

        {/* Subsection 2.1 */}
        <h3
          className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!"
          id="agreement"
        >
          2.1. Agreement and Scope of Work
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            All website development Projects will be governed by a separate
            Project Proposal or Service Agreement which, once signed by both
            parties, shall form an integral part of these Terms.
          </li>
          <li>
            The Project Proposal will detail the scope of work, features,
            functionality, deliverables, and estimated timelines for the
            Website.
          </li>
          <li>
            Any work or features requested by the Client outside the agreed-upon
            scope of work may incur additional charges and require a revised
            Project Proposal.
          </li>
          <li>
            The Client is solely responsible for providing all necessary content
            (text, images, logos, videos, etc.) in a timely manner as required
            for the Project. Delays in content provision may impact the Project
            timeline.
          </li>
          <li>
            A reasonable number of revision rounds will be specified in the
            Project Proposal. Additional revisions may be subject to extra
            charges.
          </li>
        </ul>

        {/* Subsection 2.2 */}
        <h3
          className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!"
          id="payment-terms"
        >
          2.2. Payment Terms
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            <strong className="tw:text-gray-900!">Initial Deposit:</strong> The
            Client is required to pay a non-refundable upfront deposit of{" "}
            <strong className="tw:text-blue-600!">
              35% (thirty-five percent)
            </strong>{" "}
            of the total Project cost before any work commences. No work will
            begin until this deposit is received and cleared. This deposit
            covers initial setup, planning, and resource allocation.
          </li>
          <li>
            <strong className="tw:text-gray-900!">Remaining Balance:</strong>{" "}
            The outstanding 65% (sixty-five percent) of the Project cost, along
            with any agreed-upon additional charges for out-of-scope work, shall
            be paid by the Client according to the payment schedule outlined in
            the Project Proposal.
          </li>
          <li>
            <strong className="tw:text-gray-900!">Ownership Transfer:</strong>{" "}
            Ownership of the developed Website, including all intellectual
            property rights (except as specified in Section 2.6), shall only
            transfer to the Client upon{" "}
            <strong className="tw:text-gray-900!">
              receipt of full and final payment
            </strong>{" "}
            of the entire Project cost by the Company. Until full payment is
            received, the Website remains the sole property of Openchains
            Technologies.
          </li>
        </ul>

        {/* Subsection 2.3 */}
        <h3
          className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!"
          id="timelime"
        >
          2.3. Project Timeline and Client Responsibilities
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            The Company will make every reasonable effort to complete the
            Project within the agreed-upon timelines. However, these timelines
            are estimates and are subject to change based on client feedback,
            content provision, and unforeseen technical issues.
          </li>
          <li>
            The Client agrees to provide timely feedback, approvals, and content
            as requested by the Company to ensure the Project progresses
            smoothly. Delays caused by the Client in providing necessary
            information or feedback may extend the Project timeline.
          </li>
        </ul>

        {/* Subsection 2.4 */}
        <h3
          className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!"
          id="graceperiod"
        >
          2.4. Grace Period and Contract Expiry
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            Upon completion of the Project as per the agreed scope, the Client
            will be notified that the remaining balance is due. From the date of
            this notification, the Client will be granted a{" "}
            <strong className="tw:text-gray-900!">
              grace period of{" "}
              <span className="tw:font-bold! tw:text-blue-600!">17</span> days
            </strong>{" "}
            to settle all outstanding payments for the Project.
          </li>
          <li>
            <strong className="tw:text-gray-900!">
              Consequences of Non-Payment:
            </strong>{" "}
            If full payment is not received by the Company within the specified
            grace period, the Project will be deemed to have reached its{" "}
            <strong className="tw:text-red-600!">Contract Expiry</strong>. Upon
            Contract Expiry:
            <ul className="tw:list-alpha! tw:list-inside! tw:pl-6! tw:mt-2! tw:space-y-1!">
              <li>
                The Client's right to complete the payment for and take
                ownership of the Website is forfeited.
              </li>
              <li>
                The Project, including all design files, code, and associated
                intellectual property, becomes the sole property of Openchains
                Technologies once again.
              </li>
              <li>
                Openchains Technologies reserves the right to resell or
                repurpose the Project to recover resources and costs incurred,
                without any obligation to the original Client.
              </li>
              <li>
                Any payments made by the Client (including the 35% deposit) are
                non-refundable and will be retained by Openchains Technologies
                to cover the work completed and resources expended on the
                Project up to the point of Contract Expiry.
              </li>
            </ul>
          </li>
        </ul>

        {/* Subsection 2.5 */}
        <h3
          className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!"
          id="engagment"
        >
          2.5. Re-engagement and New Projects
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            If a Client whose Project has reached Contract Expiry subsequently
            wishes to acquire the Website or a similar website, it will be
            treated as an entirely{" "}
            <strong className="tw:text-gray-900!">new Project</strong>.
          </li>
          <li>
            The Client will be required to enter into a new Project Proposal and
            pay a new, non-refundable 35% deposit as per the terms of the new
            agreement, regardless of any prior payments made on the expired
            Project.
          </li>
        </ul>

        {/* Subsection 2.6 */}
        <h3
          className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!"
          id="licencing"
        >
          2.6. Intellectual Property and Licensing
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            Upon full and final payment, the Client will own the intellectual
            property rights to the unique design, content, and custom code
            specifically developed for their Website within the Project scope.
          </li>
          <li>
            Openchains Technologies retains the right to use, develop, and own
            any underlying code, platforms, tools, libraries, or generic
            components used in the development process that are not unique to
            the Client's specific Website.
          </li>
          <li>
            Openchains Technologies reserves the right to display the completed
            Website in its portfolio and for marketing purposes.
          </li>
        </ul>

        {/* Subsection 2.7 */}
        <h3
          className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!"
          id="maintainance"
        >
          2.7. Hosting, Maintenance, and Support
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            Unless explicitly stated otherwise in the Project Proposal, website
            development services{" "}
            <strong className="tw:text-red-600!">do not include</strong> ongoing
            hosting, domain registration, maintenance, security updates, or
            technical support after Project completion and launch.
          </li>
          <li>
            Separate agreements and fees will apply for such ongoing services,
            if offered by Openchains Technologies. The Client is responsible for
            arranging their own hosting and maintenance or engaging Openchains
            Technologies for these separate services.
          </li>
        </ul>

        {/* Subsection 2.8 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          2.8. Warranty and Guarantees for Web Services
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            Openchains Technologies warrants that the Website developed will
            function substantially in accordance with the agreed-upon Project
            Proposal for a period of{" "}
            <strong className="tw:text-gray-900!">31 days</strong> following
            launch, provided that the Website has not been modified by the
            Client or any third party.
          </li>
          <li>
            This warranty covers major bugs or errors directly attributable to
            our development work. It does not cover issues arising from:
            <ul className="tw:list-alpha! tw:list-inside! tw:pl-6! tw:mt-2! tw:space-y-1!">
              <li>Client or third-party modifications to the Website.</li>
              <li>
                Hosting or server issues not managed by Openchains Technologies.
              </li>
              <li>Third-party software, plugins, or services.</li>
              <li>
                Browser compatibility issues not specified in the Project
                Proposal.
              </li>
              <li>
                Changes in third-party service APIs or external conditions.
              </li>
            </ul>
          </li>
          <li>
            Any modifications or fixes requested outside this warranty period
            will be billed at our standard hourly rates.
          </li>
        </ul>

        {/* Subsection 2.9 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          2.9. Termination of Website Development Services
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            Either party may terminate a Project if the other party breaches a
            material term of the Project Proposal or these Terms and fails to
            remedy such breach within the given period
          </li>
          <li>
            If the Client terminates a Project for convenience prior to
            completion, all payments made up to the date of termination are
            non-refundable, and the Client remains liable for payment for all
            work completed and expenses incurred by Openchains Technologies up
            to the date of termination, calculated at Openchains Technologies's
            standard rates, less any non-refundable deposit already paid.
          </li>
        </ul>

        {/* Section 3: Electronics Sales */}
        <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-blue-200! tw:pb-2!">
          3. Electronics Sales
        </h2>

        {/* Subsection 3.1 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          3.1. Product Information and Accuracy
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            Openchains Technologies strives to provide accurate product
            descriptions, images, and specifications for all Electronics sold.
            However, we do not warrant that product descriptions or other
            content on the Service are entirely accurate, complete, reliable,
            current, or error-free.
          </li>
          <li>
            Product images are for illustrative purposes only. Actual products
            may vary slightly in appearance.
          </li>
        </ul>

        {/* Subsection 3.2 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          3.2. Pricing and Availability
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            All prices for Electronics are listed in{" "}
            <strong className="tw:text-blue-600!">
              United States Dollars (USD)
            </strong>{" "}
            and are subject to change without prior notice.
          </li>
          <li>
            Product availability is subject to stock on hand. Openchains.shop
            reserves the right to limit the quantity of items purchased per
            customer.
          </li>
        </ul>

        {/* Subsection 3.3 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          3.3. Orders and Payment
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            By placing an order for Electronics through the Service, you are
            offering to purchase a product on and subject to these Terms. All
            orders are subject to acceptance by us.
          </li>
          <li>
            We accept various payment methods as indicated on the website.
            Payment must be received in full before an order is processed and
            dispatched.
          </li>
        </ul>

        {/* Subsection 3.4 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          3.4. Shipping and Delivery
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            Estimated delivery times are provided for guidance only and are not
            guaranteed. Delays may occur due to unforeseen circumstances or
            third-party couriers.
          </li>
          <li>
            Risk of loss and title for Electronics purchased from Openchains
            Technologies pass to you upon our delivery to the carrier.
          </li>
          <li>
            Shipping charges will be calculated and displayed at checkout. You
            are responsible for any applicable import duties, taxes, or customs
            fees.
          </li>
        </ul>

        {/* Subsection 3.5 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          3.5. Returns, Refunds, and Warranty for Electronics
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            <strong className="tw:text-gray-900!">
              Damaged or Defective Items:
            </strong>{" "}
            If you receive an electronic item that is damaged or defective, you
            must notify Openchains Technologies within{" "}
            <strong className="tw:text-gray-900!">7 days</strong> of receipt. We
            will arrange for a return, replacement, or refund at our discretion,
            subject to inspection.
          </li>
          <li>
            <strong className="tw:text-gray-900!">General Returns:</strong> For
            non-defective electronic items, returns may be accepted within{" "}
            <strong className="tw:text-gray-900!">14 days</strong> of delivery,
            provided the item is unused, in its original packaging, and in
            resalable condition. A restocking fee may apply, and return shipping
            costs are the responsibility of the Customer.
          </li>
          <li>
            <strong className="tw:text-gray-900!">Refunds:</strong> Refunds will
            be processed within{" "}
            <span className="tw:font-bold! tw:text-blue-600!">7</span> business
            days of receiving the returned item and will be issued to the
            original payment method.
          </li>
        </ul>

        {/* Subsection 3.6 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          3.6. Limitation of Liability for Electronics
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            Openchains Technologies will not be liable for any direct, indirect,
            incidental, punitive, or consequential damages arising from the use
            or inability to use the Electronics purchased, including but not
            limited to, damages for loss of profits, data, or other intangible
            losses.
          </li>
          <li>
            Our total liability for any claim related to Electronics purchased
            shall not exceed the purchase price of the specific product.
          </li>
        </ul>

        {/* Section 4: General Terms and Conditions */}
        <h2 className="tw:text-2xl! sm:tw:text-3xl! tw:font-bold! tw:text-gray-800! tw:mb-4! tw:border-b-2! tw:border-blue-200! tw:pb-2!">
          4. General Terms and Conditions
        </h2>

        {/* Subsection 4.1 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          4.1. User Accounts
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            If you create an account on Openchains.shop, you are responsible for
            maintaining the confidentiality of your account and password and for
            restricting access to your computer or device. You agree to accept
            responsibility for all activities that occur under your account or
            password.
          </li>
          <li>
            You agree to notify us immediately of any unauthorized use of your
            account or any other breach of security.
          </li>
        </ul>

        {/* Subsection 4.2 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          4.2. Privacy Policy
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            Your use of the Service is also governed by our Privacy Policy,
            which is incorporated into these Terms by this reference. Please
            review our Privacy Policy{" "}
            <a
              href="https://openchains.shop/privacy"
              className="tw:text-blue-600! tw:hover:underline!"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://openchains.shop/privacy
            </a>{" "}
            to understand our practices regarding the collection, use, and
            disclosure of your personal information.
          </li>
        </ul>

        {/* Subsection 4.3 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          4.3. Limitation of Liability and Disclaimers
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            The Service and all products and services delivered to you through
            the Service are provided "as is" and "as available" without any
            representation, warranties, or conditions of any kind, either
            express or implied, including all implied warranties or conditions
            of merchantability, merchantable quality, fitness for a particular
            purpose, durability, title, and non-infringement.
          </li>
          <li>
            In no case shall Openchains.shop, its directors, officers,
            employees, affiliates, agents, contractors, interns, suppliers,
            service providers, or licensors be liable for any injury, loss,
            claim, or any direct, indirect, incidental, punitive, special, or
            consequential damages of any kind, including, without limitation
            lost profits, lost revenue, lost savings, loss of data, replacement
            costs, or any similar damages, whether based in contract, tort
            (including negligence), strict liability, or otherwise, arising from
            your use of any of the Service or any products procured using the
            Service, or for any other claim related in any way to your use of
            the Service or any product, including, but not limited to, any
            errors or omissions in any content, or any loss or damage of any
            kind incurred as a result of the use of the Service or any content
            (or product) posted, transmitted, or otherwise made available via
            the Service, even if advised of their possibility.
          </li>
          <li>
            Our total liability to you for any cause whatsoever, and regardless
            of the form of the action, will at all times be limited to the
            amount paid, if any, by you to us for the Services or products
            giving rise to the claim, or ZWL$100, whichever is less.
          </li>
        </ul>

        {/* Subsection 4.4 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          4.4. Indemnification
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            You agree to indemnify, defend, and hold harmless Openchains.shop
            and our parent, subsidiaries, affiliates, partners, officers,
            directors, agents, contractors, licensors, service providers,
            subcontractors, suppliers, interns, and employees, harmless from any
            claim or demand, including reasonable attorneys’ fees, made by any
            third-party due to or arising out of your breach of these Terms of
            Service or the documents they incorporate by reference, or your
            violation of any law or the rights of a third-party.
          </li>
        </ul>

        {/* Subsection 4.5 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          4.5. Force Majeure
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            Neither party shall be liable for any delay or failure in
            performance of its obligations under these Terms (other than payment
            obligations) due to causes beyond its reasonable control, including
            but not limited to acts of God, war, terrorism, riots, embargoes,
            acts of civil or military authorities, fire, floods, accidents,
            strikes or shortages of transportation facilities, fuel, energy,
            labor or materials.
          </li>
        </ul>

        {/* Subsection 4.6 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          4.6. Governing Law and Dispute Resolution
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            These Terms shall be governed and construed in accordance with the
            laws of <strong className="tw:text-blue-600!">Zimbabwe</strong>,
            without regard to its conflict of law provisions.
          </li>
          <li>
            Any dispute arising out of or relating to these Terms or the
            Services provided shall first be attempted to be resolved amicably
            through good faith negotiations between the parties. If an amicable
            resolution cannot be reached, the parties agree to submit to the
            exclusive jurisdiction of the courts located in{" "}
            <strong className="tw:text-blue-600!">Zimbabwe</strong>.
          </li>
        </ul>

        {/* Subsection 4.7 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          4.7. Severability
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            In the event that any provision of these Terms is determined to be
            unlawful, void, or unenforceable, such provision shall nonetheless
            be enforceable to the fullest extent permitted by applicable law,
            and the unenforceable portion shall be deemed to be severed from
            these Terms, such determination shall not affect the validity and
            enforceability of any other remaining provisions.
          </li>
        </ul>

        {/* Subsection 4.8 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          4.8. Entire Agreement
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            These Terms and any policies or operating rules posted by us on this
            site or in respect to the Service constitute the entire agreement
            and understanding between you and us and govern your use of the
            Service, superseding any prior or contemporaneous agreements,
            communications, and proposals, whether oral or written, between you
            and us (including, but not limited to, any prior versions of the
            Terms of Service).
          </li>
        </ul>

        {/* Subsection 4.9 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          4.9. Changes to Terms and Conditions
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-6! tw:space-y-2!">
          <li>
            We reserve the right, at our sole discretion, to update, change, or
            replace any part of these Terms by posting updates and changes to
            our website. It is your responsibility to check our website
            periodically for changes. Your continued use of or access to our
            website or the Service following the posting of any changes to these
            Terms constitutes acceptance of those changes.
          </li>
        </ul>

        {/* Subsection 4.10 */}
        <h3 className="tw:text-xl! sm:tw:text-2xl! tw:font-semibold! tw:text-gray-800! tw:mb-3!">
          4.10. Contact Information
        </h3>
        <ul className="tw:list-decimal! tw:list-inside! tw:text-gray-700! tw:mb-8! tw:space-y-2!">
          <li>
            Questions about the Terms and Conditions should be sent to us at{" "}
            <span className="tw:font-bold! tw:text-blue-600!">
              {Globals.Email}
            </span>{" "}
            or{" "}
            <span className="tw:font-bold! tw:text-blue-600!">
              {Globals.Phone}
            </span>
            .
          </li>
        </ul>
        <p className="tw:text-gray-800! tw:text-center! tw:text-lg! tw:font-semibold! tw:mt-8! tw:border-t-2! tw:border-blue-200! tw:pt-6!">
          By using this website, you signify your acceptance of these Terms and
          Conditions. If you do not agree to these Terms, please do not use our
          website.
        </p>
      </div>
    </div>
  );
};

export default Terms;
