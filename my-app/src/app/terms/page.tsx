import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Terms() {
    return (
      <div className="p-4 bg-white">

      {/* Floating Home Button */}
      <Link href="/" passHref>
        <Button
          className="fixed top-1/2 right-4 z-50 transform -translate-y-1/2 bg-black text-white hover:bg-gray-800 shadow-lg transition-all"
          style={{ position: "fixed", top: "5%", right: "260px", zIndex: 1000 }}
        >
          Home
        </Button>
      </Link>

        <section className="max-w-4xl mx-auto">
          <h1 className="text-center text-xl font-bold mb-4">SAAS SERVICES ORDER FORM</h1>
          <div className="border border-black p-4 mb-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-bold">Customer:</label>
                <input type="text" className="w-full border border-black" />
              </div>
              <div>
                <label className="block font-bold">Contact:</label>
                <input type="text" className="w-full border border-black" />
              </div>
              <div>
                <label className="block font-bold">Address:</label>
                <input type="text" className="w-full border border-black" />
              </div>
              <div>
                <label className="block font-bold">Phone:</label>
                <input type="text" className="w-full border border-black" />
              </div>
              <div>
                <label className="block font-bold">E-Mail:</label>
                <input type="text" className="w-full border border-black" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-bold">Services:</label>
              <p className="border border-black p-2">
                Arvo is an information retrieval and data management tool for researchers, allowing researchers to search
                local and online databases for information.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-bold">Services Fees:</label>
                <p className="border border-black p-2">
                  $20 per user per month, payable in advance, subject to the terms of Section 4 herein.
                </p>
              </div>
              <div>
                <label className="block font-bold">Initial Service Term:</label>
                <p className="border border-black p-2">1 year</p>
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-bold">Service Capacity:</label>
              <p className="border border-black p-2">One User at a time</p>
            </div>
            <div className="mb-4">
              <label className="block font-bold">Implementation Services:</label>
              <p className="border border-black p-2">
                Company will use commercially reasonable efforts to provide Customer the services described in the
                Statement of Work (“SOW”) attached as Exhibit A hereto (“Implementation Services”), and Customer shall pay
                Company the Implementation Fee in accordance with the terms herein.
              </p>
            </div>
            <div className="mb-4">
              <label className="block font-bold">Implementation Fee (one-time):</label>
              <p className="border border-black p-2">_____</p>
            </div>
            <div className="mb-4">
              <label className="block font-bold">Pilot Use:</label>
              <p className="border border-black p-2">
                If Services use during the Pilot Period will be restricted to non-productive evaluation use. If so, then,
                notwithstanding anything else, in connection with such pilot/evaluation use (1) no fees will apply, except
                for any Pilot Use Fee specified below, (2) the Services are provided “AS IS” and no warranty obligations
                of Company will apply, and (3) Customer may terminate this Agreement and all of its rights hereunder by
                providing Company written notice thereof no less than 10 days prior to the end of the Pilot Period;
                otherwise, this Agreement shall continue in effect for the Initial Service Term (subject to earlier
                termination as provided in the Agreement).
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-bold">Pilot Period:</label>
                <p className="border border-black p-2">Thirty days</p>
              </div>
              <div>
                <label className="block font-bold">Pilot Use Fee:</label>
                <p className="border border-black p-2">$0</p>
              </div>
            </div>
          </div>
  
          <h1 className="text-center text-xl font-bold mb-4">SAAS SERVICES AGREEMENT</h1>
          <div className="border border-black p-4">
            <p className="mb-4">
              This SaaS Services Agreement (“Agreement”) is entered into on this _______ day of ________, 2015 (the
              “Effective Date”) between Arvo A.I. Ltd. with a place of business at 252 Braebrook, Pointe-Claire H9R 1V9
              (“Company”), and the Customer listed above (“Customer”). This Agreement includes and incorporates the above
              Order Form, as well as the attached Terms and Conditions and contains, among other things, warranty
              disclaimers, liability limitations, and use limitations. There shall be no force or effect to any different
              terms of any related purchase order or similar form even if signed by the parties after the date hereof.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-bold">[Company, Inc.]:</label>
                <div className="border border-black p-2 h-16" />
                <label className="block font-bold">By:</label>
                <input type="text" className="w-full border border-black" />
              </div>
              <div>
                <label className="block font-bold">[Customer]:</label>
                <div className="border border-black p-2 h-16" />
                <label className="block font-bold">By:</label>
                <input type="text" className="w-full border border-black" />
              </div>
            </div>
          </div>
  
          <h2 className="text-xl font-bold mb-4">TERMS AND CONDITIONS</h2>
          <div className="border border-black p-4">
            <h3 className="font-bold mb-2">SAAS SERVICES AND SUPPORT</h3>
            <p className="mb-4">
              Subject to the terms of this Agreement, Company will use commercially reasonable efforts to provide Customer
              the Services [in accordance with the Service Level Terms attached hereto as Exhibit B]. As part of the
              registration process, Customer will identify an administrative user name and password for Customer’s Company
              account. Company reserves the right to refuse registration of, or cancel passwords it deems inappropriate.
              Subject to the terms hereof, Company will provide Customer with reasonable technical support services in
              accordance with Company’s standard practice.
            </p>
  
            <h3 className="font-bold mb-2">RESTRICTIONS AND RESPONSIBILITIES</h3>
            <p className="mb-4">
              Customer will not, directly or indirectly: reverse engineer, decompile, disassemble or otherwise attempt to
              discover the source code, object code or underlying structure, ideas, know-how or algorithms relevant to the
              Services or any software, documentation or data related to the Services (“Software”); modify, translate, or
              create derivative works based on the Services or any Software (except to the extent expressly permitted by
              Company or authorized within the Services); use the Services or any Software for timesharing or service
              bureau purposes or otherwise for the benefit of a third; or remove any proprietary notices or labels. With
              respect to any Software that is distributed or provided to Customer for use on Customer premises or devices,
              Company hereby grants Customer a non-exclusive, non-transferable, non-sublicensable license to use such
              Software during the Term only in connection with the Services.
            </p>
  
            <p className="mb-4">
              Further, Customer may not remove or export from Canada or allow the export or re-export of the Services,
              Software or anything related thereto, or any direct product thereof in violation of any restrictions, laws
              or regulations of Canada or the United States Department of Commerce, the United States Department of
              Treasury Office of Foreign Assets Control, or any other United States or foreign agency or authority. As
              defined in FAR section 2.101, the Software and documentation are “commercial items” and according to DFAR
              section 252.2277014(a)(1) and (5) are deemed to be “commercial computer software” and “commercial computer
              software documentation.” Consistent with DFAR section 227.7202 and FAR section 12.212, any use modification,
              reproduction, release, performance, display, or disclosure of such commercial software or commercial
              software documentation by the U.S. or Canadian Government will be governed solely by the terms of this
              Agreement and will be prohibited except to the extent expressly permitted by the terms of this Agreement.
            </p>
  
            <p className="mb-4">
              Customer represents, covenants, and warrants that Customer will use the Services only in compliance with
              Company’s standard published policies then in effect (the “Policy”) and all applicable laws and regulations.
              [Customer hereby agrees to indemnify and hold harmless Company against any damages, losses, liabilities,
              settlements and expenses (including without limitation costs and attorneys’ fees) in connection with any
              claim or action that arises from an alleged violation of the foregoing or otherwise from Customer’s use of
              Services.] Although Company has no obligation to monitor Customer’s use of the Services, Company may do so
              and may prohibit any use of the Services it believes may be (or alleged to be) in violation of the foregoing.
            </p>
  
            <p className="mb-4">
              Customer shall be responsible for obtaining and maintaining any equipment and ancillary services needed to
              connect to, access or otherwise use the Services, including, without limitation, modems, hardware, servers,
              software, operating systems, networking, web servers and the like (collectively, “Equipment”). Customer
              shall also be responsible for maintaining the security of the Equipment, Customer account, passwords
              (including but not limited to administrative and user passwords) and files, and for all uses of Customer
              account or the Equipment with or without Customer’s knowledge or consent.
            </p>
  
            <h3 className="font-bold mb-2">CONFIDENTIALITY; PROPRIETARY RIGHTS</h3>
            <p className="mb-4">
              Each party (the “Receiving Party”) understands that the other party (the “Disclosing Party”) has disclosed
              or may disclose business, technical or financial information relating to the Disclosing Party’s business
              (hereinafter referred to as “Proprietary Information” of the Disclosing Party). Proprietary Information of
              Company includes non-public information regarding features, functionality and performance of the Service.
              Proprietary Information of Customer includes non-public data provided by Customer to Company to enable the
              provision of the Services (“Customer Data”). The Receiving Party agrees: (i) to take reasonable precautions
              to protect such Proprietary Information, and (ii) not to use (except in performance of the Services or as
              otherwise permitted herein) or divulge to any third person any such Proprietary Information. The Disclosing
              Party agrees that the foregoing shall not apply with respect to any information after five (5) years
              following the disclosure thereof or any information that the Receiving Party can document (a) is or becomes
              generally available to the public, or (b) was in its possession or known by it prior to receipt from the
              Disclosing Party, or (c) was rightfully disclosed to it without restriction by a third party, or (d) was
              independently developed without use of any Proprietary Information of the Disclosing Party or (e) is required
              to be disclosed by law.
            </p>
  
            <p className="mb-4">
              Customer shall own all right, title, and interest in and to the Customer Data. However, by using the
              Services, Customer grants Arvo AI Ltd. a non-exclusive, worldwide, royalty-free license to access, use,
              store, and process Customer Data for the following purposes: (i) Provision of Services: To provide and
              improve the Services, including troubleshooting, security, data analytics, and performance optimization.
              (ii) Development and Enhancement: To develop, enhance, and refine the Services, including improvements to
              algorithms, models, and software. (iii) Aggregate and De-identified Data: Arvo AI Ltd. may collect and
              analyze data related to the provision, use, and performance of the Services, and use such data, including
              data derived from Customer Data, in an aggregate or de-identified form, for its own business purposes,
              including improving its offerings and generating insights.
            </p>
  
            <p className="mb-4">
              Arvo AI Ltd. shall own and retain all right, title, and interest in and to (a) the Services and Software,
              including all improvements, enhancements, or modifications thereto, (b) any software, applications,
              inventions, or other technology developed in connection with Implementation Services or support, and (c) all
              intellectual property rights related to any of the foregoing. No rights or licenses are granted to the
              Customer except as expressly set forth herein.
            </p>
  
            <h3 className="font-bold mb-2">PAYMENT OF FEES</h3>
            <p className="mb-4">
              Customer will pay Company the then applicable fees described in the Order Form for the Services and
              Implementation Services in accordance with the terms therein (the “Fees”). If Customer’s use of the Services
              exceeds the Service Capacity set forth on the Order Form or otherwise requires the payment of additional fees
              (per the terms of this Agreement), Customer shall be billed for such usage and Customer agrees to pay the
              additional fees in the manner provided herein. Company reserves the right to change the Fees or applicable
              charges and to institute new charges and Fees at the end of the Initial Service Term or thencurrent renewal
              term, upon thirty (30) days prior notice to Customer (which may be sent by email). If Customer believes that
              Company has billed Customer incorrectly, Customer must contact Company no later than 60 days after the
              closing date on the first billing statement in which the error or problem appeared, in order to receive an
              adjustment or credit. Inquiries should be directed to Company’s customer support department.
            </p>
  
            <p className="mb-4">
              Company may choose to bill through an invoice, in which case, full payment for invoices issued in any given
              month must be received by Company thirty (30) days after the mailing date of the invoice. Unpaid amounts are
              subject to a finance charge of 1.5% per month on any outstanding balance, or the maximum permitted by law,
              whichever is lower, plus all expenses of collection and may result in immediate termination of Service.
              Customer shall be responsible for all taxes associated with Services other than U.S. taxes based on Company’s
              net income.
            </p>
  
            <h3 className="font-bold mb-2">TERM AND TERMINATION</h3>
            <p className="mb-4">
              Subject to earlier termination as provided below, this Agreement is for the Initial Service Term as specified
              in the Order Form, and shall be automatically renewed for additional periods of the same duration as the
              Initial Service Term (collectively, the “Term”), unless either party requests termination at least thirty
              (30) days prior to the end of the then-current term.
            </p>
  
            <p className="mb-4">
              Customer may terminate this Agreement at any time, for any reason or no reason, by providing Company with
              thirty (30) days' written notice. In the event of such termination, Customer will be responsible for paying
              any outstanding fees for Services provided up to the effective date of termination. Company will make all
              Customer Data available for electronic retrieval for thirty (30) days following the termination, after which
              Company may delete the Customer Data.
            </p>
  
            <p className="mb-4">
              In addition to any other remedies it may have, either party may also terminate this Agreement upon thirty (30)
              days’ notice (or without notice in the case of nonpayment), if the other party materially breaches any of the
              terms or conditions of this Agreement. Customer will pay in full for the Services up to and including the
              last day on which the Services are provided. Upon any termination, Company will make all Customer Data
              available to Customer for electronic retrieval for a period of thirty (30) days, but thereafter Company may,
              but is not obligated to, delete stored Customer Data. All sections of this Agreement which by their nature
              should survive termination will survive termination, including, without limitation, accrued rights to
              payment, confidentiality obligations, warranty disclaimers, and limitations of liability.
            </p>
  
            <h3 className="font-bold mb-2">WARRANTY AND DISCLAIMER</h3>
            <p className="mb-4">
              Company shall use reasonable efforts consistent with prevailing industry standards to maintain the Services
              in a manner which minimizes errors and interruptions in the Services and shall perform the Implementation
              Services in a professional and workmanlike manner. Services may be temporarily unavailable for scheduled
              maintenance or for unscheduled emergency maintenance, either by Company or by third-party providers, or
              because of other causes beyond Company’s reasonable control, but Company shall use reasonable efforts to
              provide advance notice in writing or by e-mail of any scheduled service disruption. HOWEVER, COMPANY DOES NOT
              WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR FREE; NOR DOES IT MAKE ANY WARRANTY AS TO THE RESULTS
              THAT MAY BE OBTAINED FROM USE OF THE SERVICES. EXCEPT AS EXPRESSLY SET FORTH IN THIS SECTION, THE SERVICES AND
              IMPLEMENTATION SERVICES ARE PROVIDED “AS IS” AND COMPANY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
              INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE AND
              NON-INFRINGEMENT.
            </p>
  
            <h3 className="font-bold mb-2">INDEMNITY</h3>
            <p className="mb-4">
              Company shall hold Customer harmless from liability to third parties resulting from infringement by the
              Service of any United States patent or any copyright or misappropriation of any trade secret, provided Company
              is promptly notified of any and all threats, claims and proceedings related thereto and given reasonable
              assistance and the opportunity to assume sole control over defense and settlement; Company will not be
              responsible for any settlement it does not approve in writing. The foregoing obligations do not apply with
              respect to portions or components of the Service (i) not supplied by Company, (ii) made in whole or in part in
              accordance with Customer specifications, (iii) that are modified after delivery by Company, (iv) combined
              with other products, processes or materials where the alleged infringement relates to such combination, (v)
              where Customer continues allegedly infringing activity after being notified thereof or after being informed
              of modifications that would have avoided the alleged infringement, or (vi) where Customer’s use of the
              Service is not strictly in accordance with this Agreement. If, due to a claim of infringement, the Services
              are held by a court of competent jurisdiction to be or are believed by Company to be infringing, Company may,
              at its option and expense (a) replace or modify the Service to be non-infringing provided that such
              modification or replacement contains substantially similar features and functionality, (b) obtain for
              Customer a license to continue using the Service, or (c) if neither of the foregoing is commercially
              practicable, terminate this Agreement and Customer’s rights hereunder and provide Customer a refund of any
              prepaid, unused fees for the Service.
            </p>
  
            <h3 className="font-bold mb-2">LIMITATION OF LIABILITY</h3>
            <p className="mb-4">
              NOTWITHSTANDING ANYTHING TO THE CONTRARY, EXCEPT FOR BODILY INJURY OF A PERSON, COMPANY AND ITS SUPPLIERS
              (INCLUDING BUT NOT LIMITED TO ALL EQUIPMENT AND TECHNOLOGY SUPPLIERS), OFFICERS, AFFILIATES, REPRESENTATIVES,
              CONTRACTORS AND EMPLOYEES SHALL NOT BE RESPONSIBLE OR LIABLE WITH RESPECT TO ANY SUBJECT MATTER OF THIS
              AGREEMENT OR TERMS AND CONDITIONS RELATED THERETO UNDER ANY CONTRACT, NEGLIGENCE, STRICT LIABILITY OR OTHER
              THEORY: (A) FOR ERROR OR INTERRUPTION OF USE OR FOR LOSS OR INACCURACY OR CORRUPTION OF DATA OR COST OF
              PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY OR LOSS OF BUSINESS; (B) FOR ANY INDIRECT,
              EXEMPLARY, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES; (C) FOR ANY MATTER BEYOND COMPANY’S REASONABLE
              CONTROL; OR (D) FOR ANY AMOUNTS THAT, TOGETHER WITH AMOUNTS ASSOCIATED WITH ALL OTHER CLAIMS, EXCEED THE FEES
              PAID BY CUSTOMER TO COMPANY FOR THE SERVICES UNDER THIS AGREEMENT IN THE 12 MONTHS PRIOR TO THE ACT THAT GAVE
              RISE TO THE LIABILITY, IN EACH CASE, WHETHER OR NOT COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES.
            </p>
  
            <h3 className="font-bold mb-2">MISCELLANEOUS</h3>
            <p className="mb-4">
              If any provision of this Agreement is found to be unenforceable or invalid, that provision will be limited or
              eliminated to the minimum extent necessary so that this Agreement will otherwise remain in full force and
              effect and enforceable. This Agreement is not assignable, transferable or sublicensable by Customer except
              with Company’s prior written consent. Company may transfer and assign any of its rights and obligations under
              this Agreement without consent. This Agreement is the complete and exclusive statement of the mutual
              understanding of the parties and supersedes and cancels all previous written and oral agreements,
              communications and other understandings relating to the subject matter of this Agreement, and that all
              waivers and modifications must be in a writing signed by both parties, except as otherwise provided herein.
              No agency, partnership, joint venture, or employment is created as a result of this Agreement and Customer
              does not have any authority of any kind to bind Company in any respect whatsoever. In any action or
              proceeding to enforce rights under this Agreement, the prevailing party will be entitled to recover costs and
              attorneys’ fees. All notices under this Agreement will be in writing and will be deemed to have been duly
              given when received, if personally delivered; when receipt is electronically confirmed, if transmitted by
              facsimile or e-mail; the day after it is sent, if sent for next day delivery by recognized overnight delivery
              service; and upon receipt, if sent by certified or registered mail, return receipt requested. This Agreement
              shall be governed by the laws of the Province of Québec without regard to its conflict of laws provisions.
              The parties shall work together in good faith to issue at least one mutually agreed upon press release within
              90 days of the Effective Date, and Customer otherwise agrees to reasonably cooperate with Company to serve as
              a reference account upon request.
            </p>
  
            <h3 className="font-bold mb-2">EXHIBIT B</h3>
            <p className="mb-4">
              The Services shall be available 99.9%, measured monthly, excluding holidays and weekends and scheduled
              maintenance. If Customer requests maintenance during these hours, any uptime or downtime calculation will
              exclude periods affected by such maintenance. Further, any downtime resulting from outages of third party
              connections or utilities or other reasons beyond Company’s control will also be excluded from any such
              calculation. Customer's sole and exclusive remedy, and Company's entire liability, in connection with Service
              availability shall be that for each period of downtime lasting longer than one day, Company will credit
              Customer 5% of Service fees for each period of 30 or more consecutive minutes of downtime; provided that no
              more than one such credit will accrue per day. Downtime shall begin to accrue as soon as Customer (with
              notice to Company) recognizes that downtime is taking place, and continues until the availability of the
              Services is restored. In order to receive downtime credit, Customer must notify Company in writing within 24
              hours from the time of downtime, and failure to provide such notice will forfeit the right to receive
              downtime credit. Such credits may not be redeemed for cash and shall not be cumulative beyond a total of
              credits for one (1) week of Service Fees in any one (1) calendar month in any event. Company will only apply
              a credit to the month in which the incident occurred. Company’s blocking of data communications or other
              Service in accordance with its policies shall not be deemed to be a failure of Company to provide adequate
              service levels under this Agreement.
            </p>
          </div>
        </section>
      </div>
    );
  }
  