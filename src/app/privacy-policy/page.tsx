import Header from '@/components/Header';

const sectionClass = 'space-y-4';
const headingClass = 'text-[22px] md:text-2xl font-bold text-gray-900';
const subheadingClass = 'text-[18px] md:text-xl font-semibold text-gray-900';
const textClass = 'text-[16px] text-gray-700 leading-relaxed';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary to-secondary mt-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-[27px] md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
          >
            Privacy Policy
          </h1>
          <p
            className="text-[16px] text-white/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
          >
            Your privacy is important to us. This policy describes how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"
          style={{ fontFamily: 'Hind, Arial, Helvetica, sans-serif' }}
        >
          <div className={sectionClass}>
            <p className={`${textClass} font-semibold uppercase`}>
              THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION.
            </p>
            <p className={`${textClass} font-semibold`}>
              PLEASE REVIEW IT CAREFULLY. THE PRIVACY OF YOUR MEDICAL INFORMATION IS IMPORTANT TO US.
            </p>
          </div>

          <div className={sectionClass}>
            <h2 className={headingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Our Legal Duty</h2>
            <p className={textClass}>
              We are required by applicable federal and state laws to maintain the privacy of your protected health information. We are also required to give you this notice about our privacy practices, our legal duties, and your rights concerning your protected health information. We must follow the privacy practices that are described in this notice while it is in effect. This notice takes effect April 14, 2003, and will remain in effect until we replace it.
            </p>
            <p className={textClass}>
              We reserve the right to change our privacy practices and the terms of this notice at any time, provided that such changes are permitted by applicable law. We reserve the right to make the changes in our privacy practices and the new terms of our notice effective for all protected health information that we maintain, including medical information we created or received before we made the changes.
            </p>
            <p className={textClass}>
              You may request a copy of our notice (or any subsequent revised notice) at any time. For more information about our privacy practices, or for additional copies of this notice, please contact us using the information listed at the end of this notice.
            </p>
          </div>

          <div className={sectionClass}>
            <h2 className={headingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Uses and Disclosures of Protected Health Information</h2>
            <p className={textClass}>
              We will use and disclose your protected health information about you for treatment, payment, and health care operations. Following are examples of the types of uses and disclosures of your protected health care information that may occur. These examples are not meant to be exhaustive, but to describe the types of uses and disclosures that may be made by our office.
            </p>

            <h3 className={subheadingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Treatment</h3>
            <p className={textClass}>
              We will use and disclose your protected health information to provide, coordinate or manage your healthcare and any related services. This includes the coordination or management of your health care with a third party. For example, we would disclose your protected health information, as necessary, to a home health agency that provides care to you. We will also disclose protected health information to other physicians who may be treating you. For example, your protected health information may be provided to a physician to whom you have been referred to ensure that the physician has the necessary information to diagnose or treat you.
            </p>
            <p className={textClass}>
              In addition, we may disclose your protected health information from time to time to another physician or health care provider (e.g., a specialist or laboratory) who, at the request of your physician, becomes involved in your care by providing assistance with your health care diagnosis or treatment to your physician.
            </p>

            <h3 className={subheadingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Payment</h3>
            <p className={textClass}>
              Your protected health information will be used, as needed, to obtain payment for your health care services. This may include certain activities that your health insurance plan may undertake before it approves or pays for the health care services we recommend for you, such as: making a determination of eligibility or coverage for insurance benefits, reviewing services provided to you for protected health necessity, and undertaking utilization review activities. For example, obtaining approval for a hospital stay may require that your relevant protected health information be disclosed to the health plan to obtain approval for the hospital admission.
            </p>

            <h3 className={subheadingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Health Care Operations</h3>
            <p className={textClass}>
              We may use or disclose, as needed, your protected health information in order to conduct certain business and operational activities. These activities include, but are not limited to, quality assessment activities, employee review activities, training of students, licensing, and conducting or arranging for other business activities.
            </p>
            <p className={textClass}>
              For example, we may use a sign-in sheet at the registration desk where you will be asked to sign your name. We may also call you by name in the waiting room when your doctor is ready to see you. We may use or disclose your protected health information, as necessary, to contact you by telephone or mail to remind you of your appointment.
            </p>
            <p className={textClass}>
              We will share your protected health information with third party &quot;business associates&quot; that perform various activities (e.g., billing, transcription services) for the practice. Whenever an arrangement between our office and a business associate involves the use or disclosure of your protected health information, we will have a written contract that contains terms that will protect the privacy of your protected health information.
            </p>
            <p className={textClass}>
              We may use or disclose your protected health information, as necessary, to provide you with information about treatment alternatives or other health-related benefits and services that may be of interest to you. We may also use and disclose your protected health information for other marketing activities. For example, your name and address may be used to send you a newsletter about our practice and the services we offer. We may also send you information about products or services that we believe may be beneficial to you. You may contact us to request that these materials not be sent to you.
            </p>
          </div>

          <div className={sectionClass}>
            <h2 className={headingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Uses and Disclosures Based On Your Written Authorization</h2>
            <p className={textClass}>
              Other uses and disclosures of your protected health information will be made only with your authorization, unless otherwise permitted or required by law as described below.
            </p>
            <p className={textClass}>
              You may give us written authorization to use your protected health information or to disclose it to anyone for any purpose. If you give us an authorization, you may revoke it in writing at any time. Your revocation will not affect any use or disclosures permitted by your authorization while it was in effect. Without your written authorization, we will not disclose your health care information except as described in this notice.
            </p>
          </div>

          <div className={sectionClass}>
            <h2 className={headingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Others Involved in Your Health Care</h2>
            <p className={textClass}>
              Unless you object, we may disclose to a member of your family, a relative, a close friend or any other person you identify, your protected health information that directly relates to that person&apos;s involvement in your health care. If you are unable to agree or object to such a disclosure, we may disclose such information as necessary if we determine that it is in your best interest based on our professional judgment. We may use or disclose protected health information to notify or assist in notifying a family member, personal representative or any other person that is responsible for your care of your location, general condition or death.
            </p>
          </div>

          <div className={sectionClass}>
            <h2 className={headingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Marketing</h2>
            <p className={textClass}>
              We may use your protected health information to contact you with information about treatment alternatives that may be of interest to you. We may disclose your protected health information to a business associate to assist us in these activities. Unless the information is provided to you by a general newsletter or in person or is for products or services of nominal value, you may opt out of receiving further such information by telling us using the contact information listed at the end of this notice.
            </p>
          </div>

          <div className={sectionClass}>
            <h2 className={headingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Research; Death; Organ Donation</h2>
            <p className={textClass}>
              We may use or disclose your protected health information for research purposes in limited circumstances. We may disclose the protected health information of a deceased person to a coroner, protected health examiner, funeral director or organ procurement organization for certain purposes.
            </p>
          </div>

          <div className={sectionClass}>
            <h2 className={headingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Public Health and Safety</h2>
            <p className={textClass}>
              We may disclose your protected health information to the extent necessary to avert a serious and imminent threat to your health or safety, or the health or safety of others. We may disclose your protected health information to a government agency authorized to oversee the health care system or government programs or its contractors, and to public health authorities for public health purposes.
            </p>
          </div>

          <div className={sectionClass}>
            <h2 className={headingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Health Oversight</h2>
            <p className={textClass}>
              We may disclose protected health information to a health oversight agency for activities authorized by law, such as audits, investigations and inspections. Oversight agencies seeking this information include government agencies that oversee the health care system, government benefit programs, other government regulatory programs and civil rights laws.
            </p>
          </div>

          <div className={sectionClass}>
            <h2 className={headingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Abuse or Neglect</h2>
            <p className={textClass}>
              We may disclose your protected health information to a public health authority that is authorized by law to receive reports of child abuse or neglect. In addition, we may disclose your protected health information if we believe that you have been a victim of abuse, neglect or domestic violence to the governmental entity or agency authorized to receive such information. In this case, the disclosure will be made consistent with the requirements of applicable federal and state laws.
            </p>
          </div>

          <div className={sectionClass}>
            <h2 className={headingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Food and Drug Administration</h2>
            <p className={textClass}>
              We may disclose your protected health information to a person or company required by the Food and Drug Administration to report adverse events, product defects or problems, biologic product deviations; to track products; to enable product recalls; to make repairs or replacements; or to conduct post marketing surveillance, as required.
            </p>
          </div>

          <div className={sectionClass}>
            <h2 className={headingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Criminal Activity</h2>
            <p className={textClass}>
              Consistent with applicable federal and state laws, we may disclose your protected health information, if we believe that the use or disclosure is necessary to prevent or lessen a serious and imminent threat to the health or safety of a person or the public. We may also disclose protected health information if it is necessary for law enforcement authorities to identify or apprehend an individual.
            </p>
          </div>

          <div className={sectionClass}>
            <h2 className={headingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Required by Law</h2>
            <p className={textClass}>
              We may use or disclose your protected health information when we are required to do so by law. For example, we must disclose your protected health information to the U.S. Department of Health and Human Services upon request for purposes of determining whether we are in compliance with federal privacy laws. We may disclose your protected health information when authorized by workers&apos; compensation or similar laws.
            </p>
          </div>

          <div className={sectionClass}>
            <h2 className={headingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Process and Proceedings</h2>
            <p className={textClass}>
              We may disclose your protected health information in response to a court or administrative order, subpoena, discovery request or other lawful process, under certain circumstances. Under limited circumstances, such as a court order, warrant or grand jury subpoena, we may disclose your protected health information to law enforcement officials.
            </p>
          </div>

          <div className={sectionClass}>
            <h2 className={headingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Law Enforcement</h2>
            <p className={textClass}>
              We may disclose limited information to a law enforcement official concerning the protected health information of a suspect, fugitive, material witness, crime victim or missing person. We may disclose the protected health information of an inmate or other person in lawful custody to a law enforcement official or correctional institution under certain circumstances. We may disclose protected health information where necessary to assist law enforcement officials to capture an individual who has admitted to participation in a crime or has escaped from lawful custody.
            </p>
          </div>

          <div className={sectionClass}>
            <h2 className={headingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Patient Rights</h2>

            <h3 className={subheadingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Access</h3>
            <p className={textClass}>
              You have the right to look at or get copies of your protected health information, with limited exceptions. You must make a request in writing to the contact person listed herein to obtain access to your protected health information. You may also request access by sending us a letter to the address at the end of this notice. If you request copies, we will charge you $25.00 for each page or $10.00 per hour to locate and copy your protected health information, and postage if you want the copies mailed to you. If you prefer, we will prepare a summary or an explanation of your protected health information for a fee. Contact us using the information listed at the end of this notice for a full explanation of our fee structure.
            </p>

            <h3 className={subheadingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Accounting of Disclosures</h3>
            <p className={textClass}>
              You have the right to receive a list of instances in which we or our business associates disclosed your protected health information for purposes other than treatment, payment, health care operations and certain other activities after April 14, 2003. After April 14, 2009, the accounting will be provided for the past six (6) years. We will provide you with the date on which we made the disclosure, the name of the person or entity to whom we disclosed your protected health information, a description of the protected health information we disclosed, the reason for the disclosure, and certain other information. If you request this list more than once in a 12-month period, we may charge you a reasonable, cost-based fee for responding to these additional requests. Contact us using the information listed at the end of this notice for a full explanation of our fee structure.
            </p>

            <h3 className={subheadingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Restriction Requests</h3>
            <p className={textClass}>
              You have the right to request that we place additional restrictions on our use or disclosure of your protected health information. We are not required to agree to these additional restrictions, but if we do, we will abide by our agreement (except in an emergency). Any agreement we may make to a request for additional restrictions must be in writing signed by a person authorized to make such an agreement on our behalf. We will not be bound unless our agreement is so memorialized in writing.
            </p>

            <h3 className={subheadingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Confidential Communication</h3>
            <p className={textClass}>
              You have the right to request that we communicate with you in confidence about your protected health information by alternative means or to an alternative location. You must make your request in writing. We must accommodate your request if it is reasonable, specifies the alternative means or location, and continues to permit us to bill and collect payment from you.
            </p>

            <h3 className={subheadingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Amendment</h3>
            <p className={textClass}>
              You have the right to request that we amend your protected health information. Your request must be in writing, and it must explain why the information should be amended. We may deny your request if we did not create the information you want amended or for certain other reasons. If we deny your request, we will provide you a written explanation. You may respond with a statement of disagreement to be appended to the information you wanted amended. If we accept your request to amend the information, we will make reasonable efforts to inform others, including people or entities you name, of the amendment and to include the changes in any future disclosures of that information.
            </p>

            <h3 className={subheadingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Electronic Notice</h3>
            <p className={textClass}>
              If you receive this notice on our website or by electronic mail (e-mail), you are entitled to receive this notice in written form. Please contact us using the information listed at the end of this notice to obtain this notice in written form.
            </p>
          </div>

          <div className={sectionClass}>
            <h2 className={headingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Questions and Complaints</h2>
            <p className={textClass}>
              If you want more information about our privacy practices or have questions or concerns, please contact us using the information below. If you believe that we may have violated your privacy rights, or you disagree with a decision we made about access to your protected health information or in response to a request you made, you may complain to us using the contact information below. You also may submit a written complaint to the U.S. Department of Health and Human Services. We will provide you with the address to file your complaint with the U.S. Department of Health and Human Services upon request.
            </p>
            <p className={textClass}>
              We support your right to protect the privacy of your protected health information. We will not retaliate in any way if you choose to file a complaint with us or with the U.S. Department of Health and Human Services.
            </p>
          </div>

          <div className={sectionClass}>
            <h2 className={headingClass} style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}>Contact Information</h2>
            <p className={textClass}><strong>Name of Contact Person:</strong> Dr. Rujul G. Parikh</p>
            <p className={textClass}><strong>Telephone:</strong> <a href="tel:(209) 955-1800" className="text-primary hover:underline">(209) 955-1800</a></p>
            <p className={textClass}>
              <strong>Address:</strong><br />
              1801 E March Ln A165<br />
              Stockton, CA 95210<br />
              United States
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
