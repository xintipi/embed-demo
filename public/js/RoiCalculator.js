function ChannelsInput() {
  return React.createElement(
      "div",
      null,
      React.createElement(
          "label",
          { className: "block mb-1" },
          "What channels do you use?"
      ),
      React.createElement(
          "div",
          { className: "flex flex-wrap gap-2" },
          React.createElement(
              "button",
              { className: "bg-gray-200 text-gray-700 px-4 py-2 rounded-l" },
              "Email"
          ),
          React.createElement(
              "button",
              { className: "bg-purple-500 text-white px-4 py-2 rounded-r" },
              "Email and SMS"
          )
      )
  );
}

function NumericInput({ label, value, onChange, prefix }) {
  return React.createElement(
      "div",
      null,
      React.createElement(
          "label",
          { className: "block mb-1" },
          label
      ),
      React.createElement(
          "div",
          { className: `flex ${prefix ? "items-center" : ""}` },
          prefix &&
          React.createElement(
              "span",
              { className: "bg-gray-200 text-gray-700 px-4 py-2 rounded-l" },
              prefix
          ),
          React.createElement("input", {
            className: `w-full border border-gray-300 rounded ${prefix ? "rounded-r" : ""} p-2`,
            type: "number",
            value: value,
            onChange: (e) => onChange(Number(e.target.value)),
          })
      )
  );
}

function RoiForm(props) {
  const {
    activeProfiles,
    setActiveProfiles,
    webVisitors,
    setWebVisitors,
    orderValue,
    setOrderValue,
    ordersPerMonth,
    setOrdersPerMonth,
    campaignsPerMonth,
    setCampaignsPerMonth,
    recipients,
    setRecipients,
    smsMessages,
    setSmsMessages,
  } = props;

  return React.createElement(
      "form",
      null,
      React.createElement(
          "div",
          { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4" },
          React.createElement(ChannelsInput, null),
          React.createElement(NumericInput, {
            label: "# of active profiles*",
            value: activeProfiles,
            onChange: setActiveProfiles,
          }),
          React.createElement(NumericInput, {
            label: "New web visitors/month*",
            value: webVisitors,
            onChange: setWebVisitors,
          }),
          React.createElement(NumericInput, {
            label: "Average order value*",
            value: orderValue,
            onChange: setOrderValue,
            prefix: "$",
          }),
          React.createElement(NumericInput, {
            label: "Average # of orders per customer per month*",
            value: ordersPerMonth,
            onChange: setOrdersPerMonth,
          }),
          React.createElement(NumericInput, {
            label: "Campaigns sent per month (email and SMS)*",
            value: campaignsPerMonth,
            onChange: setCampaignsPerMonth,
          }),
          React.createElement(NumericInput, {
            label: "Recipients who receive an automated flow each month*",
            value: recipients,
            onChange: setRecipients,
          }),
          React.createElement(NumericInput, {
            label: "SMS messages per month*",
            value: smsMessages,
            onChange: setSmsMessages,
          })
      ),
      React.createElement(
          "button",
          { className: "bg-black text-white px-4 py-2 rounded" },
          "Estimate your ROI"
      )
  );
}

function RoiSummary() {
  return React.createElement(
      "div",
      { className: "bg-gray-50 p-6 rounded-lg shadow-lg" },
      React.createElement(
          "h2",
          { className: "text-lg font-semibold mb-4" },
          "Your estimated ROI with Klaviyo"
      ),
      React.createElement(
          "p",
          { className: "text-4xl font-bold text-purple-500 mb-2" },
          "448x"
      ),
      React.createElement("p", { className: "text-lg mb-4" }, "per year"),
      React.createElement(
          "h3",
          { className: "text-md font-semibold mb-2" },
          "See where your revenue is coming from:"
      ),
      React.createElement(
          "ul",
          { className: "mb-4" },
          React.createElement(
              "li",
              { className: "flex justify-between mb-2" },
              React.createElement("span", null, "New subscribers"),
              React.createElement("span", null, "$180,600")
          ),
          React.createElement(
              "li",
              { className: "flex justify-between mb-2" },
              React.createElement("span", null, "Campaigns"),
              React.createElement("span", null, "$3,000")
          ),
          React.createElement(
              "li",
              { className: "flex justify-between mb-2" },
              React.createElement("span", null, "Automated flows"),
              React.createElement("span", null, "$5,130")
          )
      ),
      React.createElement(
          "p",
          { className: "text-sm text-gray-500 mb-4" },
          "Sign up to get started or chat with sales about your ROI results."
      ),
      React.createElement(
          "div",
          { className: "flex" },
          React.createElement(
              "button",
              { className: "bg-black text-white px-4 py-2 rounded mr-2" },
              "Get started"
          ),
          React.createElement(
              "button",
              { className: "bg-gray-200 text-gray-700 px-4 py-2 rounded" },
              "Talk to sales"
          )
      )
  );
}

const RoiCalculator = () => {
  const [activeProfiles, setActiveProfiles] = React.useState("");
  const [webVisitors, setWebVisitors] = React.useState("");
  const [orderValue, setOrderValue] = React.useState("");
  const [ordersPerMonth, setOrdersPerMonth] = React.useState("");
  const [campaignsPerMonth, setCampaignsPerMonth] = React.useState("");
  const [recipients, setRecipients] = React.useState("");
  const [smsMessages, setSmsMessages] = React.useState("");

  return React.createElement(
      "div",
      { className: "max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-6" },
      React.createElement(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-3 gap-6" },
          React.createElement(
              "div",
              { className: "lg:col-span-2" },
              React.createElement(
                  "h2",
                  { className: "text-lg font-semibold mb-4" },
                  "Tell us about your brand"
              ),
              React.createElement(RoiForm, {
                activeProfiles,
                setActiveProfiles,
                webVisitors,
                setWebVisitors,
                orderValue,
                setOrderValue,
                ordersPerMonth,
                setOrdersPerMonth,
                campaignsPerMonth,
                setCampaignsPerMonth,
                recipients,
                setRecipients,
                smsMessages,
                setSmsMessages,
              })
          ),
          React.createElement(RoiSummary, null)
      )
  );
};

export default RoiCalculator;
