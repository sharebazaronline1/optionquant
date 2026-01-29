import React from "react";

export const RefundPolicy = () => {
  return (
    <section className="refund-policy">
      <div className="container">

        <header className="policy-header">
          <h1>Refund & Cancellation Policy</h1>
          <p className="policy-subtitle">
            This policy explains how subscription fees are charged and when refunds or cancellations are not permitted.
          </p>
        </header>

        <article className="policy-body">

          <p className="policy-intro">
            At OptionQuaant, we follow transparent and fair practices in line with India’s financial services standards.
            This Refund and Cancellation Policy outlines the conditions under which payments are processed and clarifies
            that subscriptions are non-refundable once activated.
          </p>

          <hr />

          <section>
            <h2>1. All subscription fees are non-refundable</h2>
            <p>
              All subscription fees paid to OptionQuaant are non-refundable and non-cancellable once the service has commenced.
              Commencement of service includes access to any paid content, tools, dashboards, indicators, reports, research
              material, software features, or support services.
            </p>
            <p>
              Due to the digital nature of the service and immediate delivery of intellectual property, refunds are not
              feasible once access is granted.
            </p>
          </section>

          <section>
            <h2>2. Due diligence before payment</h2>
            <p>
              Users are advised to carefully evaluate the product features and terms before subscribing.
            </p>
            <p>
              By completing the payment, users confirm that they have read and understood this policy and all related terms.
            </p>
          </section>

          <section>
            <h2>3. No refunds for trading outcomes</h2>
            <p>
              OptionQuaant provides analytical tools for informational purposes only and does not guarantee profits or returns.
              Market risks remain entirely with the user.
            </p>
            <p>
              Refund requests based on trading losses, performance dissatisfaction, or unmet expectations will not be accepted.
            </p>
          </section>

          <section>
            <h2>4. User responsibility for payments</h2>
            <p>
              Users must ensure that their payment methods are protected from misuse by unauthorized persons.
            </p>
            <p>
              Any transaction made using the user’s credentials shall be treated as authorized by the user.
            </p>
          </section>

          <section>
            <h2>5. Regulatory compliance</h2>
            <p>
              OptionQuaant operates in accordance with applicable Indian laws and investor protection principles.
              OptionQuaant is not a SEBI-registered investment adviser or portfolio manager unless explicitly stated.
            </p>
          </section>

          <section>
            <h2>6. User agreement</h2>
            <ul>
              <li>You have read and understood this Refund & Cancellation Policy</li>
              <li>You accept that subscriptions are non-refundable after activation</li>
              <li>You agree to be bound by OptionQuaant’s terms and conditions</li>
            </ul>
          </section>

          <p className="policy-note">
            This policy may be revised periodically to reflect regulatory, operational, or business changes.
          </p>

        </article>
      </div>
    </section>
  );
};
