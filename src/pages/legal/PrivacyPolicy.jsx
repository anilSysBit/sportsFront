import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <style>{`
      .privacy-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.privacy-heading {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
}

p {
  font-size: 16px;
  margin-bottom: 15px;
}

ul {
  padding-left: 20px;
  font-size: 16px;
  margin-bottom: 15px;
}

li {
  margin-bottom: 10px;
}
      `}</style>
      <h1 className="privacy-heading">Privacy Policy</h1>
      <p>
        At Game Plan Nepal (GPN), we are committed to protecting your
        privacy and ensuring the security of your personal information. This
        Privacy Policy outlines how we collect, use, and safeguard your data
        when you use our platform.
      </p>
      <h2>Information We Collect</h2>
      <ul>
        <li>
          Personal information, such as your name, email address, and contact
          details, provided during registration.
        </li>
        <li>Event participation and team details entered on the platform.</li>
        <li>Usage data, including pages visited, interactions, and preferences.</li>
      </ul>
      <h2>How We Use Your Information</h2>
      <ul>
        <li>To facilitate team registration and match scheduling.</li>
        <li>To send email notifications about events, matches, and updates.</li>
        <li>To improve the platform’s features and user experience.</li>
      </ul>
      <h2>Data Security</h2>
      <p>
        We implement robust security measures to protect your data from
        unauthorized access, disclosure, or alteration. Your information is
        stored securely and only accessible by authorized personnel.
      </p>
      <h2>Third-Party Services</h2>
      <p>
        We do not sell, trade, or rent your personal information to third
        parties. However, we may use third-party services to help operate the
        platform, such as email notification providers.
      </p>
      <h2>Your Rights</h2>
      <p>
        You have the right to access, update, or delete your personal
        information. Please contact us if you wish to exercise these rights or
        have any concerns about your data.
      </p>
      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Any changes will be
        posted on this page, and we encourage you to review it regularly.
      </p>
      <p>
        If you have any questions about this Privacy Policy or how we handle
        your data, please contact us at support@gameplannepal.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
