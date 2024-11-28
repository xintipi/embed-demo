// Header
function Header() {
    return React.createElement(
        "h1",
        { className: "text-3xl font-bold text-blue-600 text-center" },
        "Simple React Template with Input"
    );
}

// Paragraph
function Paragraph() {
    return React.createElement(
        "p",
        { className: "text-lg text-center text-gray-700" },
        "This is a basic template built with React and Tailwind CSS."
    );
}

// Input Field
function InputField({ value, onChange }) {
    return React.createElement(
        "div",
        { className: "mt-5 text-center" },
        React.createElement("input", {
            type: "text",
            value: value,
            onChange: (e) => onChange(e.target.value),
            placeholder: "Type something...",
            className:
                "px-4 py-2 border border-gray-300 rounded-md w-72 focus:outline-none focus:ring-2 focus:ring-blue-500",
        }),
        React.createElement(
            "p",
            { className: "mt-2 text-sm text-gray-500" },
            `You typed: ${value}`
        )
    );
}

// Button
function Button() {
    return React.createElement(
        "button",
        {
            className:
                "px-5 py-2 mt-5 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none",
            onClick: () => alert("Button clicked!"),
        },
        "Click Me"
    );
}

// Main Template
function SimpleTemplate() {
    const [inputValue, setInputValue] = React.useState("");

    return React.createElement(
        "div",
        { className: "min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5" },
        React.createElement(Header),
        React.createElement(Paragraph),
        React.createElement(InputField, { value: inputValue, onChange: setInputValue }),
        React.createElement(
            "div",
            { className: "flex justify-center" },
            React.createElement(Button)
        )
    );
}

export default SimpleTemplate;
