import {companyInfo} from "../../constants";
import {Divider} from "antd";

function PrivacyPolicy() {
  return (<div className="p-[10px] max-w-[1600px] mx-auto">
          <h1 className="text-center font-regular text-[31px] py-[6px] ">
              {companyInfo.company_name} - Terms of Usage and Privacy Policy
          </h1>
          <Divider className="bg-gray-100 my-0"/>

          <div className="p-[12.5px] text-sm ">
              <h2 className="text-sm sm:text-[19px] font-bold sm:mt-[10px] ">
                  TERMS OF USAGE AND PRIVACY POLICY
              </h2>

              <p className="mt-2 sm:mt-3 text-justify">
                  Welcome to our {companyInfo.company_name} App, developed by NIPUNA
                  Prabidhik Sewa. By accessing and using this App, you hereby agree to
                  comply with and be bound by the following terms and conditions of use,
                  as well as our privacy policy. If you do not agree with any part of
                  these terms and conditions, please refrain from using our App. The
                  terms "{companyInfo.company_name}," "we," "us," or "our" refer to the
                  owner of this App, NIPUNA Prabidhik Sewa. The terms "you," "users,"
                  "customers," or "viewers" refer to the individuals who access and
                  utilize our services.
              </p>

              <h3 className="text-sm sm:text-[19px] font-bold mt-[25px] ">GENERAL</h3>

              <p className="mt-[10px] text-justify">
                  This App is owned and operated by NIPUNA Prabidhik Sewa. The primary
                  purpose of our App is to facilitate the process of order taking for
                  small orders. It provides a platform for capturing and managing
                  customer orders efficiently. It is important to note that we are not
                  responsible for the products or services offered by the businesses
                  utilizing our App for order taking. Our role is limited to providing a
                  technological solution for order management.
              </p>

              <h3 className="text-sm sm:text-[19px] font-bold mt-[25px] ">PRIVACY POLICY</h3>

              <p className="mt-[10px] text-justify">
                  At the {companyInfo.company_name} App, we are committed to protecting
                  your privacy and ensuring the security of your personal information.
                  This privacy policy outlines how we collect, use, and safeguard the
                  data you provide while using our App.
              </p>

              <h3 className="font-semibold mt-[25px] text-base sm:text-[19px]">
                  Information We Collect:
              </h3>
              <p className="mt-[5px] text-justify">
                  We may collect certain information from you when you use our App,
                  including but not limited to:
              </p>
              <ul className="list-disc ml-5 mt-[5px] text-justify">
                  <li>
                      Contact Information: Name, email address, Pan No., phone number, and
                      other relevant details.
                  </li>
                  <li>
                      Order Details: Information related to the orders you place through
                      the App.
                  </li>
                  <li>
                      Usage Data: Data on how you interact with the App, such as
                      navigation paths and timestamps.
                  </li>
              </ul>

              <h3 className="font-semibold mt-[25px] text-base sm:text-[19px]">
                  How We Use Your Information:
              </h3>
              <p className="mt-[5px] text-justify">
                  We use the collected information for the following purposes:
              </p>
              <ul className="list-disc ml-5 mt-[5px] text-justify">
                  <li>
                      Order Processing: To facilitate the order-taking process and fulfill
                      customer requests.
                  </li>
                  <li>
                      Communication: To send order confirmations, updates, and
                      notifications.
                  </li>
                  <li>
                      App Improvement: To enhance and optimize the functionality and user
                      experience of the App.
                  </li>
                  <li>
                      Customer Support: To provide assistance and resolve inquiries.
                  </li>
              </ul>

              <h3 className="font-semibold mt-[25px] text-base sm:text-[19px]">Data Security:</h3>
              <p className="mt-[5px] text-justify">
                  We implement appropriate security measures to protect your personal
                  information from unauthorized access, alteration, disclosure, or
                  destruction.
              </p>

              <h3 className="font-semibold mt-[25px] text-base sm:text-[19px]">
                  Disclosure of Information:
              </h3>
              <p className="mt-[5px] text-justify">
                  We do not sell, trade, or rent your personal information to third
                  parties. However, we may share certain information with our business
                  partners and service providers for the purpose of providing our
                  services.
              </p>

              <h3 className="font-semibold mt-[25px] text-base sm:text-[19px]">
                  Changes to the Privacy Policy:
              </h3>
              <p className="mt-[5px] text-justify">
                  We reserve the right to modify or update this privacy policy at any
                  time. Any changes will be effective upon posting on the App.
              </p>

              <p className="mt-[10px] text-justify">
                  By using the {companyInfo.company_name} App, you acknowledge that you
                  have read, understood, and agreed to the terms of this privacy policy.
                  If you have any questions or concerns about your privacy or the use of
                  your information, please contact us at{" "}
                  <a href="mailto:contact@email.com" className="text-blue-500">
                      info@nipunasewa.com
                  </a>
                  .
              </p>

              <p className="mt-[10px]">Thank you for using {companyInfo.company_name}!</p>
          </div>
      </div>
  );
}

export default PrivacyPolicy;