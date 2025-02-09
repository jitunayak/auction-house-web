import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: () => (
    <div className="prose prose-xl mx-auto mb-12 max-w-3xl px-4">
      <h1>Privacy Policy</h1>
      <p>
        At Auction House, we respect your personal data and are committed to
        protecting your privacy. This policy outlines how we collect, use, and
        disclose your personal information when you use our website or services.
      </p>
      <h2>What information do we collect?</h2>
      <p>
        We collect information from you when you register on our site, place an
        order, subscribe to our newsletter, respond to a survey or fill out a
        form. When ordering or registering on our site, as appropriate, you may
        be asked to enter your: name, e-mail address, mailing address, phone
        number or credit card information. You may, however, visit our site
        anonymously.
      </p>
      <h2>What do we use your information for?</h2>
      <p>
        Any of the information we collect from you may be used in one of the
        following ways:
      </p>
      <ul>
        <li>
          <p>
            To personalize your experience: Your information helps us to better
            respond to your individual needs.
          </p>
        </li>
        <li>
          <p>
            To improve our website: We continually strive to improve our website
            offerings based on the information and feedback we receive from you.
          </p>
        </li>
        <li>
          <p>
            To improve customer service: Your information helps us to more
            effectively respond to your customer service requests and support
            needs.
          </p>
        </li>
        <li>
          <p>
            To process transactions: Your information, whether public or
            private, will not be sold, exchanged, transferred, or given to any
            other company for any reason whatsoever, without your consent, other
            than for the express purpose of delivering the purchased product or
            service requested by the customer.
          </p>
        </li>
        <li>
          <p>
            To administer a contest, promotion, survey or other site feature:
            Your information, whether public or private, will not be sold,
            exchanged, transferred, or given to any other company for any reason
            whatsoever, without your consent, other than for the express purpose
            of delivering the purchased product or service requested by the
            customer.
          </p>
        </li>
        <li>
          <p>
            To send periodic emails: The email address you provide may be used
            to send you information and updates pertaining to your order, in
            addition to receiving occasional company news, updates, related
            product or service information, etc.
          </p>
        </li>
      </ul>
    </div>
  ),
});
